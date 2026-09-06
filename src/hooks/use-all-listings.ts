import { useEffect, useState } from "react";
import { listings as seedListings, fromSubmittedListing, type CarListing } from "@/data/listings";
import { getSubmittedListingsFn, getPurchasedListingIdsFn } from "@/server-fns";

/** Seed dataset + any listing published live via the "Sell my car" form,
 * merged into one list. Submitted listings load asynchronously from the
 * server and are appended once available. Listings ever purchased (demo
 * checkout) are shown as sold, including seed listings whose static status
 * can't otherwise be mutated. */
export function useAllListings(): { listings: CarListing[]; loading: boolean } {
  const [submitted, setSubmitted] = useState<CarListing[]>([]);
  const [purchasedIds, setPurchasedIds] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    Promise.all([getSubmittedListingsFn(), getPurchasedListingIdsFn()])
      .then(([submittedRes, purchasedRes]) => {
        if (cancelled) return;
        setSubmitted(submittedRes.map(fromSubmittedListing));
        setPurchasedIds(purchasedRes);
      })
      .catch(() => {
        if (!cancelled) {
          setSubmitted([]);
          setPurchasedIds([]);
        }
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const merged = [...submitted, ...seedListings].map((listing) =>
    purchasedIds.includes(listing.id) && listing.status !== "sold"
      ? { ...listing, status: "sold" as const }
      : listing,
  );

  return { listings: merged, loading };
}
