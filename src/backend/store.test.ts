import { describe, it, beforeEach, expect } from "vitest";
import { createListing, getSubmittedListings, recordPurchase, getPurchasedListingIds } from "./store";

const baseListing = {
  title: "2024 Toyota Corolla",
  brand: "Toyota",
  model: "Corolla",
  year: 2024,
  price: 22000,
  mileage: "5 000 km",
  fuelType: "Essence",
  transmission: "Automatique",
  location: "Paris",
  description: "Voiture familiale bien entretenue.",
  images: [] as string[],
  sellerName: "Jean Dupont",
  sellerPhone: "+33 6 12 34 56 78",
  sellerEmail: "jean@example.com",
};

describe("listings store", () => {
  it("creates a listing with a generated id and available status", () => {
    const listing = createListing(baseListing);
    expect(listing.id).toMatch(/^listing_/);
    expect(listing.status).toBe("available");

    const all = getSubmittedListings();
    expect(all.some((l) => l.id === listing.id)).toBe(true);
  });
});

describe("purchases store", () => {
  it("marks a submitted listing as sold once purchased", () => {
    const listing = createListing(baseListing);
    recordPurchase(listing.id, "Alex Buyer", "alex@example.com", 22000, "4242");

    const all = getSubmittedListings();
    const updated = all.find((l) => l.id === listing.id);
    expect(updated?.status).toBe("sold");
    expect(getPurchasedListingIds()).toContain(listing.id);
  });

  it("tracks purchased ids even for listings the store doesn't own (seed data)", () => {
    recordPurchase("seed-listing-id", "Alex Buyer", "alex@example.com", 50000, "1111");
    expect(getPurchasedListingIds()).toContain("seed-listing-id");
  });
});
