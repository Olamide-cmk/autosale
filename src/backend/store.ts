// ---------------------------------------------------------------------------
// Server-side persistence layer for AutoSale (fixed-price marketplace, no
// accounts). Seller-submitted listings, buyer contact messages and demo
// card purchases live here — no user accounts, no passwords, no sessions.
//
// Storage strategy: an in-memory store that is the source of truth for the
// life of the process, with best-effort mirroring to a JSON file on disk so
// data survives a dev-server restart. Disk access is wrapped in try/catch
// and silently skipped if unavailable.
//
// IMPORTANT — deployment note: this project's default build target is
// Cloudflare Workers (nitro "cloudflare-module" preset). Workers have no
// writable filesystem and no shared memory across isolates/requests, so on
// that target this store only persists for the lifetime of a single
// in-flight request. For real, durable, multi-instance persistence in
// production, wire in a real database (Cloudflare D1, Supabase, Postgres...)
// here instead of the file-based store below. Running with `npm run dev` or
// self-hosted via `node .output/server` (Node preset) gives you the full
// in-process + on-disk behavior described above.
// ---------------------------------------------------------------------------

import { randomBytes } from "node:crypto";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import type { ListingStatus } from "@/data/listings";

export type StoredListing = {
  id: string;
  title: string;
  brand: string;
  model: string;
  year: number;
  price: number;
  mileage: string;
  fuelType: string;
  transmission: string;
  location: string;
  description: string;
  images: string[];
  sellerName: string;
  sellerPhone: string;
  sellerEmail: string;
  status: ListingStatus;
  createdAt: string;
};

export type StoredContactMessage = {
  id: string;
  listingId: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  createdAt: string;
};

export type StoredPurchase = {
  id: string;
  listingId: string;
  buyerName: string;
  buyerEmail: string;
  amount: number;
  cardLast4: string;
  createdAt: string;
};

type DbShape = {
  listings: StoredListing[];
  contactMessages: StoredContactMessage[];
  purchases: StoredPurchase[];
  newsletter: string[];
  heartCounts: Record<string, number>;
};

const DB_PATH = join(process.cwd(), ".data", "autosale-store.json");

function emptyDb(): DbShape {
  return {
    listings: [],
    contactMessages: [],
    purchases: [],
    newsletter: [],
    heartCounts: {},
  };
}

function loadFromDisk(): DbShape {
  try {
    if (existsSync(DB_PATH)) {
      const raw = readFileSync(DB_PATH, "utf-8");
      return { ...emptyDb(), ...(JSON.parse(raw) as Partial<DbShape>) };
    }
  } catch {
    // Corrupt file, unavailable disk, read-only fs (edge) — fall back silently.
  }
  return emptyDb();
}

// Module-level singleton: survives across requests within one running process.
const globalKey = "__autosale_db__";
type GlobalWithDb = typeof globalThis & { [globalKey]?: DbShape };
const g = globalThis as GlobalWithDb;
if (!g[globalKey]) g[globalKey] = loadFromDisk();
const db: DbShape = g[globalKey]!;

let persistScheduled = false;
function persist() {
  if (persistScheduled) return;
  persistScheduled = true;
  queueMicrotask(() => {
    persistScheduled = false;
    try {
      mkdirSync(dirname(DB_PATH), { recursive: true });
      writeFileSync(DB_PATH, JSON.stringify(db, null, 2), "utf-8");
    } catch {
      // Read-only filesystem (e.g. edge runtime) — in-memory state still works.
    }
  });
}

function id(prefix: string) {
  return `${prefix}_${randomBytes(9).toString("base64url")}`;
}

// --- listings (seller submissions become real, live listings) --------------

export function createListing(input: Omit<StoredListing, "id" | "createdAt" | "status">): StoredListing {
  const listing: StoredListing = {
    ...input,
    id: id("listing"),
    status: "available",
    createdAt: new Date().toISOString(),
  };
  db.listings.push(listing);
  persist();
  return listing;
}

export function getSubmittedListings(): StoredListing[] {
  return [...db.listings].sort((a, b) => b.createdAt.localeCompare(a.createdAt));
}

// --- contact messages (buyer → seller) --------------------------------------

export function addContactMessage(
  input: Omit<StoredContactMessage, "id" | "createdAt">,
): StoredContactMessage {
  const contactMessage: StoredContactMessage = {
    ...input,
    id: id("msg"),
    createdAt: new Date().toISOString(),
  };
  db.contactMessages.push(contactMessage);
  persist();
  return contactMessage;
}

// --- purchases (demo card payment) ------------------------------------------
//
// IMPORTANT: no real payment processor is involved. Card details are never
// stored — only the last 4 digits, purely for display on a confirmation
// screen. This exists to demonstrate the purchase flow end-to-end, not to
// process real money. Wire in a real processor (Stripe, etc.) before
// accepting real transactions.

export function recordPurchase(
  listingId: string,
  buyerName: string,
  buyerEmail: string,
  amount: number,
  cardLast4: string,
): StoredPurchase {
  const purchase: StoredPurchase = {
    id: id("purchase"),
    listingId,
    buyerName,
    buyerEmail,
    amount,
    cardLast4,
    createdAt: new Date().toISOString(),
  };
  db.purchases.push(purchase);

  // If this listing was published through the site (not a seed listing),
  // we own its record and can mark it sold for real.
  const listing = db.listings.find((l) => l.id === listingId);
  if (listing) listing.status = "sold";

  persist();
  return purchase;
}

/** IDs of every listing ever purchased — including seed/demo listings whose
 * status lives in static data and can't be mutated directly. The frontend
 * treats a seed listing as sold once its id shows up here. */
export function getPurchasedListingIds(): string[] {
  return Array.from(new Set(db.purchases.map((p) => p.listingId)));
}

export function getPurchaseForListing(listingId: string): StoredPurchase | undefined {
  return db.purchases.find((p) => p.listingId === listingId);
}

// --- hearts / auto-vedette ---------------------------------------------------
//
// Per the spec: a listing is featured either because we manually flagged it
// (CarListing.featured in the seed data / StoredListing), or automatically
// once it collects 3 favorite "hearts" from visitors. There are no accounts,
// so hearts are tracked globally per listing (not per user) — the client
// guards against a single browser inflating the count by only contributing
// once per listing (see favorites-context.tsx).

export function incrementHeartCount(listingId: string): number {
  const next = (db.heartCounts[listingId] ?? 0) + 1;
  db.heartCounts[listingId] = next;
  persist();
  return next;
}

export function getAutoFeaturedListingIds(threshold = 3): string[] {
  return Object.entries(db.heartCounts)
    .filter(([, count]) => count >= threshold)
    .map(([id]) => id);
}

// --- newsletter --------------------------------------------------------------

export function addNewsletterSignup(email: string): { alreadySubscribed: boolean } {
  const already = db.newsletter.includes(email.toLowerCase());
  if (!already) {
    db.newsletter.push(email.toLowerCase());
    persist();
  }
  return { alreadySubscribed: already };
}
