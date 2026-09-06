import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { MapPin, Heart, CheckCircle2, AlertTriangle, Gauge, Fuel, Cog, CreditCard } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ListingCard } from "@/components/ListingCard";
import { ContactSellerForm } from "@/components/ContactSellerForm";
import { Badge } from "@/components/ui/badge";
import { formatUsd, listings as seedListings, fromSubmittedListing, type CarListing } from "@/data/listings";
import { useFavorites } from "@/context/favorites-context";
import { getSubmittedListingByIdFn, getPurchasedListingIdsFn } from "@/server-fns";

export const Route = createFileRoute("/listings/$listingId")({
  loader: async ({ params }) => {
    const seedMatch = seedListings.find((l) => l.id === params.listingId);
    if (seedMatch) return { listing: seedMatch };

    const submitted = await getSubmittedListingByIdFn({ data: { id: params.listingId } });
    if (submitted) return { listing: fromSubmittedListing(submitted) };

    throw notFound();
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Annonce introuvable — AutoSale" }, { name: "robots", content: "noindex" }] };
    }
    const { listing } = loaderData;
    const description = `${listing.mileage} · ${listing.fuelType} · ${listing.location}. Prix : ${formatUsd(listing.price)}.`;
    return {
      meta: [
        { title: `${listing.title} — AutoSale` },
        { name: "description", content: description },
        { property: "og:title", content: `${listing.title} — AutoSale` },
        { property: "og:description", content: description },
        { property: "og:image", content: listing.images[0] },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:image", content: listing.images[0] },
      ],
    };
  },
  component: ListingDetail,
});

function ListingDetail() {
  const { listing } = Route.useLoaderData();
  const [activeImage, setActiveImage] = useState(0);
  const [purchased, setPurchased] = useState(false);
  const { isFavorited, toggleFavorite } = useFavorites();
  const favorited = isFavorited(listing.id);

  useEffect(() => {
    let cancelled = false;
    getPurchasedListingIdsFn()
      .then((ids) => {
        if (!cancelled) setPurchased(ids.includes(listing.id));
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, [listing.id]);

  const isSold = listing.status === "sold" || purchased;

  const related = seedListings
    .filter((l) => l.id !== listing.id && l.status === "available" && l.brand === listing.brand)
    .slice(0, 3);
  const fallbackRelated = seedListings.filter((l) => l.id !== listing.id && l.status === "available").slice(0, 3);
  const relatedListings: CarListing[] = related.length > 0 ? related : fallbackRelated;

  function galleryKeyDown(e: React.KeyboardEvent) {
    if (e.key === "ArrowRight") setActiveImage((i) => (i + 1) % listing.images.length);
    if (e.key === "ArrowLeft") setActiveImage((i) => (i - 1 + listing.images.length) % listing.images.length);
  }

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main id="main-content" className="container-page py-8">
        <Link to="/" className="text-sm font-semibold text-primary hover:underline">
          ← Toutes les annonces
        </Link>

        <div className="mt-3 flex flex-wrap items-center justify-between gap-2">
          <div className="flex flex-wrap items-center gap-2">
            {isSold ? (
              <Badge className="bg-navy text-white">Vendu</Badge>
            ) : (
              <Badge className="bg-accent text-accent-foreground">Disponible</Badge>
            )}
            {listing.category && <span className="eyebrow">{listing.category}</span>}
          </div>
          <button
            type="button"
            onClick={() => toggleFavorite(listing.id)}
            className={`flex items-center gap-2 rounded-md border px-3 py-1.5 text-sm font-semibold transition-colors ${
              favorited ? "border-accent bg-accent/10 text-accent" : "hover:border-accent hover:text-accent"
            }`}
          >
            <Heart className={`size-4 ${favorited ? "fill-accent" : ""}`} />
            {favorited ? "Dans mes favoris" : "Ajouter aux favoris"}
          </button>
        </div>
        <h1 className="mt-2 text-4xl font-bold leading-tight">{listing.title}</h1>
        <p className="mt-1 flex items-center gap-1 text-muted-foreground">
          <MapPin className="size-4" /> {listing.location}
        </p>
        <p className="mt-3 text-3xl font-bold text-primary">{formatUsd(listing.price)}</p>

        <div className="mt-6 grid gap-8 lg:grid-cols-[1.5fr_1fr]">
          {/* Gallery */}
          <div>
            <div
              role="group"
              aria-label={`Galerie photo, image ${activeImage + 1} sur ${listing.images.length}. Utilisez les flèches gauche/droite pour naviguer.`}
              tabIndex={0}
              onKeyDown={galleryKeyDown}
              className="rounded-xl outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <img
                src={listing.images[activeImage]}
                alt={listing.title}
                width={1400}
                height={933}
                className="aspect-[3/2] w-full rounded-xl border object-cover"
              />
            </div>
            {listing.images.length > 1 && (
              <div className="mt-3 grid grid-cols-4 gap-3">
                {listing.images.map((image, i) => (
                  <button
                    key={image}
                    type="button"
                    onClick={() => setActiveImage(i)}
                    aria-label={`Voir la photo ${i + 1}`}
                    aria-current={i === activeImage}
                    className={`aspect-[3/2] overflow-hidden rounded-lg border-2 transition-colors ${
                      i === activeImage ? "border-accent" : "border-transparent hover:border-border"
                    }`}
                  >
                    <img src={image} alt="" width={300} height={200} className="h-full w-full object-cover" />
                  </button>
                ))}
              </div>
            )}

            {/* Description */}
            {listing.description.length > 0 && (
              <section className="mt-10 max-w-3xl">
                <h2 className="text-2xl font-bold">À propos de cette voiture</h2>
                <div className="mt-3 space-y-3 text-muted-foreground">
                  {listing.description.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </section>
            )}

            {/* Highlights & notes */}
            {(listing.highlights.length > 0 || listing.notes.length > 0) && (
              <section className="mt-8 grid gap-6 sm:grid-cols-2">
                {listing.highlights.length > 0 && (
                  <div>
                    <h3 className="flex items-center gap-2 text-lg font-semibold">
                      <CheckCircle2 className="size-4 text-primary" /> Points forts
                    </h3>
                    <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                      {listing.highlights.map((h) => (
                        <li key={h} className="flex gap-2">
                          <span className="text-primary">•</span> {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {listing.notes.length > 0 && (
                  <div>
                    <h3 className="flex items-center gap-2 text-lg font-semibold">
                      <AlertTriangle className="size-4 text-accent" /> À noter
                    </h3>
                    <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                      {listing.notes.map((n) => (
                        <li key={n} className="flex gap-2">
                          <span className="text-accent">•</span> {n}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </section>
            )}

            {/* Technical specs */}
            <section className="mt-10">
              <h2 className="text-2xl font-bold">Fiche technique</h2>
              <dl className="mt-4 grid grid-cols-1 gap-x-8 gap-y-3 rounded-xl border bg-card p-6 sm:grid-cols-2">
                {[
                  ["Année", String(listing.year)],
                  ["Marque / Modèle", `${listing.brand} ${listing.model}`],
                  ["Kilométrage", listing.mileage],
                  ["Carburant", listing.fuelType],
                  ["Transmission", listing.transmission],
                  ...(listing.drivetrain ? [["Motricité", listing.drivetrain]] : []),
                  ...(listing.exteriorColor ? [["Couleur extérieure", listing.exteriorColor]] : []),
                  ...(listing.interiorColor ? [["Couleur intérieure", listing.interiorColor]] : []),
                  ...(listing.vin ? [["VIN", listing.vin]] : []),
                ].map(([k, v]) => (
                  <div key={k} className="flex justify-between gap-4 border-b pb-2 text-sm last:border-b-0">
                    <dt className="text-muted-foreground">{k}</dt>
                    <dd className="text-right font-semibold">{v}</dd>
                  </div>
                ))}
              </dl>
            </section>

            {/* Location */}
            <section className="mt-10">
              <h2 className="text-2xl font-bold">Localisation</h2>
              <div className="mt-4 flex items-center gap-2 rounded-xl border bg-card p-6">
                <MapPin className="size-5 text-primary" />
                <span className="font-semibold">{listing.location}</span>
              </div>
            </section>
          </div>

          {/* Sidebar: key facts + contact */}
          <aside className="h-fit space-y-6 lg:sticky lg:top-24">
            <div className="rounded-xl border bg-card p-6">
              <span className="eyebrow block">Prix demandé</span>
              <span className="text-3xl font-bold">{formatUsd(listing.price)}</span>
              <dl className="mt-5 space-y-3 border-t pt-4 text-sm">
                <div className="flex justify-between">
                  <dt className="flex items-center gap-1.5 text-muted-foreground">
                    <Gauge className="size-3.5" /> Kilométrage
                  </dt>
                  <dd className="font-semibold">{listing.mileage}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="flex items-center gap-1.5 text-muted-foreground">
                    <Fuel className="size-3.5" /> Carburant
                  </dt>
                  <dd className="font-semibold">{listing.fuelType}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="flex items-center gap-1.5 text-muted-foreground">
                    <Cog className="size-3.5" /> Transmission
                  </dt>
                  <dd className="font-semibold">{listing.transmission}</dd>
                </div>
              </dl>
              {isSold && (
                <p className="mt-5 rounded-md bg-muted px-4 py-3 text-sm text-muted-foreground">
                  Cette voiture a été vendue.
                </p>
              )}
              {!isSold && (
                <Link
                  to="/checkout/$listingId"
                  params={{ listingId: listing.id }}
                  className="mt-5 flex w-full items-center justify-center gap-2 rounded-md bg-accent px-5 py-2.5 text-sm font-semibold uppercase tracking-wide text-accent-foreground hover:opacity-90"
                >
                  <CreditCard className="size-4" /> Acheter maintenant
                </Link>
              )}
            </div>

            {!isSold && <ContactSellerForm listing={listing} />}
          </aside>
        </div>

        {/* Related listings */}
        {relatedListings.length > 0 && (
          <section className="mt-16">
            <h2 className="text-2xl font-bold">À voir aussi</h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedListings.map((l) => (
                <ListingCard key={l.id} listing={l} />
              ))}
            </div>
          </section>
        )}
      </main>
      <SiteFooter />
    </div>
  );
}
