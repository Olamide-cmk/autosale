import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useMemo } from "react";
import { z } from "zod";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ListingCard } from "@/components/ListingCard";
import { ListingFilters, applyFilters, defaultFilters, type Filters } from "@/components/ListingFilters";
import { Pagination } from "@/components/Pagination";
import { formatUsd } from "@/data/listings";
import { useAllListings } from "@/hooks/use-all-listings";
import { useLocale } from "@/i18n/locale-context";
import { Badge } from "@/components/ui/badge";

const PAGE_SIZE = 12;

const searchSchema = z.object({
  q: z.string().optional().catch(undefined),
  brand: z.string().optional().catch(undefined),
  minYear: z.string().optional().catch(undefined),
  maxPrice: z.string().optional().catch(undefined),
  maxMileage: z.string().optional().catch(undefined),
  sort: z.string().optional().catch(undefined),
  page: z.number().int().positive().optional().catch(undefined),
});

export const Route = createFileRoute("/")({
  validateSearch: searchSchema,
  head: () => ({
    meta: [
      { title: "AutoSale — Achat et vente de voitures d'exception à prix fixe" },
      {
        name: "description",
        content:
          "Découvrez des voitures d'exception en vente directe. Publiez votre annonce gratuitement et trouvez l'acheteur idéal.",
      },
      { property: "og:title", content: "AutoSale — Achat et vente de voitures d'exception à prix fixe" },
      {
        property: "og:description",
        content: "Découvrez des voitures d'exception en vente directe, à prix fixe, sans enchère.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  const search = Route.useSearch();
  const navigate = useNavigate({ from: Route.fullPath });
  const { t } = useLocale();
  const { listings } = useAllListings();

  const filters: Filters = {
    q: search.q ?? defaultFilters.q,
    brand: search.brand ?? defaultFilters.brand,
    minYear: search.minYear ?? defaultFilters.minYear,
    maxPrice: search.maxPrice ?? defaultFilters.maxPrice,
    maxMileage: search.maxMileage ?? defaultFilters.maxMileage,
    sort: search.sort ?? defaultFilters.sort,
  };
  const page = search.page ?? 1;

  function setFilters(next: Filters) {
    navigate({
      search: {
        q: next.q || undefined,
        brand: next.brand !== "all" ? next.brand : undefined,
        minYear: next.minYear !== "all" ? next.minYear : undefined,
        maxPrice: next.maxPrice !== "all" ? next.maxPrice : undefined,
        maxMileage: next.maxMileage !== "all" ? next.maxMileage : undefined,
        sort: next.sort !== defaultFilters.sort ? next.sort : undefined,
        page: undefined,
      },
      replace: true,
    });
  }

  function setPage(next: number) {
    navigate({ search: (prev) => ({ ...prev, page: next > 1 ? next : undefined }) });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const available = useMemo(() => listings.filter((l) => l.status === "available"), [listings]);
  const featured = available.find((l) => l.featured) ?? available[0];
  const rest = available.filter((l) => l.id !== featured?.id);

  const filtered = useMemo(() => applyFilters(rest, filters), [rest, filters]);
  const pageCount = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const clampedPage = Math.min(page, pageCount);
  const pageItems = filtered.slice((clampedPage - 1) * PAGE_SIZE, clampedPage * PAGE_SIZE);

  useEffect(() => {
    if (page > pageCount) setPage(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageCount]);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main id="main-content">
        {/* Hero */}
        {featured && (
          <section className="border-b bg-navy text-white">
            <div className="container-page grid gap-10 py-12 lg:grid-cols-[1.3fr_1fr] lg:items-center">
              <Link
                to="/listings/$listingId"
                params={{ listingId: featured.id }}
                className="group relative overflow-hidden rounded-2xl border border-white/10"
              >
                <img
                  src={featured.images[0]}
                  alt={featured.title}
                  width={1400}
                  height={900}
                  className="aspect-[3/2] w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0" />
                <div className="absolute left-4 top-4 flex gap-2">
                  <Badge className="bg-accent text-accent-foreground">Disponible</Badge>
                </div>
              </Link>
              <div>
                <span className="eyebrow text-accent">{t("home.featured")}</span>
                <h1 className="mt-2 text-4xl font-bold leading-[1.05] md:text-5xl">
                  {featured.year} {featured.brand} {featured.model}
                </h1>
                <p className="mt-3 text-white/70">
                  {featured.mileage} · {featured.fuelType} · {featured.location}
                </p>
                <div className="mt-6 border-y border-white/15 py-5">
                  <span className="eyebrow text-white/50">{t("home.price")}</span>
                  <p className="text-3xl font-bold">{formatUsd(featured.price)}</p>
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    to="/listings/$listingId"
                    params={{ listingId: featured.id }}
                    className="inline-flex rounded-md bg-accent px-6 py-3 text-sm font-semibold uppercase tracking-wide text-accent-foreground hover:opacity-90"
                  >
                    {t("home.viewListing")}
                  </Link>
                  <Link
                    to="/sell-car"
                    className="inline-flex rounded-md border border-white/25 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white hover:bg-white/10"
                  >
                    {t("home.sellCar")}
                  </Link>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Search & filters */}
        <section className="container-page -mt-6 relative z-10">
          <ListingFilters filters={filters} onChange={setFilters} />
        </section>

        {/* Grid */}
        <section className="container-page py-12">
          <div className="flex items-end justify-between">
            <div>
              <h2 className="text-3xl font-bold">{t("home.availableListings")}</h2>
              <p className="mt-1 text-sm text-muted-foreground" aria-live="polite">
                {filtered.length} {t("home.resultCount")}
              </p>
            </div>
            <Link to="/sold-cars" className="text-sm font-semibold text-primary hover:underline">
              {t("home.seeSold")}
            </Link>
          </div>
          {pageItems.length > 0 ? (
            <>
              <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {pageItems.map((listing) => (
                  <ListingCard key={listing.id} listing={listing} />
                ))}
              </div>
              <Pagination page={clampedPage} pageCount={pageCount} onChange={setPage} />
            </>
          ) : (
            <div className="mt-10 rounded-xl border border-dashed p-12 text-center text-muted-foreground">
              {t("home.noResults")}
            </div>
          )}
        </section>

        {/* Value props */}
        <section className="border-y bg-card py-14">
          <div className="container-page grid gap-10 md:grid-cols-3">
            {[
              [t("home.vp1.title"), t("home.vp1.text")],
              [t("home.vp2.title"), t("home.vp2.text")],
              [t("home.vp3.title"), t("home.vp3.text")],
            ].map(([title, text]) => (
              <div key={title}>
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
