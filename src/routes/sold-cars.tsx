import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { formatUsd } from "@/data/listings";
import { useAllListings } from "@/hooks/use-all-listings";

export const Route = createFileRoute("/sold-cars")({
  head: () => ({
    meta: [
      { title: "Voitures vendues — AutoSale" },
      {
        name: "description",
        content: "Consultez les voitures récemment vendues sur AutoSale : prix de vente, date et localisation.",
      },
      { property: "og:title", content: "Voitures vendues — AutoSale" },
      { property: "og:description", content: "Historique des ventes récentes sur AutoSale." },
    ],
  }),
  component: SoldCars,
});

function SoldCars() {
  const { listings } = useAllListings();
  const sold = listings.filter((l) => l.status === "sold");

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main id="main-content" className="container-page py-12">
        <h1 className="text-4xl font-bold">Voitures vendues</h1>
        <p className="mt-2 max-w-2xl text-muted-foreground">
          Un aperçu des dernières ventes conclues sur AutoSale — prix de vente, date et localisation.
        </p>

        <p className="mt-6 text-sm font-semibold text-muted-foreground">
          {sold.length} voiture{sold.length > 1 ? "s" : ""} vendue{sold.length > 1 ? "s" : ""}
        </p>

        {sold.length > 0 ? (
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {sold.map((listing) => (
              <Link
                key={listing.id}
                to="/listings/$listingId"
                params={{ listingId: listing.id }}
                className="card-hover group block overflow-hidden rounded-xl border bg-card shadow-sm hover:card-hover-active"
              >
                <div className="relative aspect-[3/2] overflow-hidden bg-muted">
                  <img
                    src={listing.images[0]}
                    alt={listing.title}
                    width={1200}
                    height={800}
                    loading="lazy"
                    className="h-full w-full object-cover grayscale-[0.3] transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-3 top-3 rounded-md bg-navy px-2 py-1 text-xs font-bold uppercase tracking-wide text-white">
                    Vendu
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="truncate text-lg font-semibold leading-tight text-foreground">
                    {listing.year} {listing.brand} {listing.model}
                  </h3>
                  <p className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
                    <MapPin className="size-3.5" /> {listing.location}
                  </p>
                  <div className="mt-4 flex items-end justify-between border-t pt-3">
                    <div>
                      <span className="eyebrow block">Prix de vente</span>
                      <span className="text-xl font-bold text-foreground">{formatUsd(listing.price)}</span>
                    </div>
                    <div className="text-right">
                      <span className="eyebrow block">Vendue le</span>
                      <span className="text-sm font-semibold text-primary">
                        {listing.soldAt
                          ? new Date(listing.soldAt).toLocaleDateString("fr-FR", {
                              day: "numeric",
                              month: "long",
                              year: "numeric",
                            })
                          : "Récemment"}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="mt-10 rounded-xl border border-dashed p-12 text-center text-muted-foreground">
            Aucune voiture vendue pour le moment. Les ventes conclues sur AutoSale apparaîtront ici.
          </div>
        )}
      </main>
      <SiteFooter />
    </div>
  );
}
