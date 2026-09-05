import { createFileRoute, Link } from "@tanstack/react-router";
import { ShieldCheck, BadgeCheck, Truck, Star } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { useAllListings } from "@/hooks/use-all-listings";
import { useLocale } from "@/i18n/locale-context";
import { heroVideoUrl } from "@/config/contact";
import type { TranslationKey } from "@/i18n/translations";

export const Route = createFileRoute("/")({
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

const trustItems: { icon: typeof ShieldCheck; title: TranslationKey; text: TranslationKey }[] = [
  { icon: ShieldCheck, title: "home.trust1.title", text: "home.trust1.text" },
  { icon: BadgeCheck, title: "home.trust2.title", text: "home.trust2.text" },
  { icon: Truck, title: "home.trust3.title", text: "home.trust3.text" },
];

const testimonialKeys: { nameKey: TranslationKey; textKey: TranslationKey }[] = [
  { nameKey: "home.testimonial1.name", textKey: "home.testimonial1.text" },
  { nameKey: "home.testimonial2.name", textKey: "home.testimonial2.text" },
  { nameKey: "home.testimonial3.name", textKey: "home.testimonial3.text" },
  { nameKey: "home.testimonial4.name", textKey: "home.testimonial4.text" },
];

function Home() {
  const { t } = useLocale();
  const { listings } = useAllListings();
  const carouselCars = listings.filter((l) => l.status === "available").slice(0, 12);
  const loopedCars = carouselCars.length >= 4 ? [...carouselCars, ...carouselCars] : carouselCars;

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main id="main-content">
        {/* Hero — looping muted video background */}
        <section className="relative flex min-h-[78vh] items-center overflow-hidden bg-navy text-white">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 h-full w-full object-cover"
            poster="https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=1600&q=60"
          >
            <source src={heroVideoUrl} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/75" />

          <div className="container-page relative z-10 py-20 text-center">
            <h1 className="animate-fade-in-up mx-auto max-w-3xl text-4xl font-bold leading-[1.08] md:text-6xl">
              {t("home.heroTitle")}
            </h1>
            <p
              className="animate-fade-in-up mx-auto mt-5 max-w-xl text-lg text-white/80"
              style={{ animationDelay: "0.15s" }}
            >
              {t("home.heroSubtitle")}
            </p>
            <div
              className="animate-fade-in-up mt-8 flex flex-wrap items-center justify-center gap-3"
              style={{ animationDelay: "0.3s" }}
            >
              <Link
                to="/shop"
                className="inline-flex rounded-md bg-accent px-7 py-3 text-sm font-semibold uppercase tracking-wide text-accent-foreground hover:opacity-90"
              >
                {t("home.ctaShop")}
              </Link>
              <Link
                to="/contact"
                className="inline-flex rounded-md border border-white/40 px-7 py-3 text-sm font-semibold uppercase tracking-wide text-white hover:bg-white/10"
              >
                {t("home.ctaContact")}
              </Link>
            </div>
          </div>
        </section>

        {/* Trust section */}
        <section className="border-b bg-card py-14">
          <div className="container-page grid gap-10 sm:grid-cols-3">
            {trustItems.map(({ icon: Icon, title, text }) => (
              <div key={title} className="flex flex-col items-center text-center sm:items-start sm:text-left">
                <div className="flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="size-6" />
                </div>
                <h3 className="mt-4 text-lg font-semibold">{t(title)}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{t(text)}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Car carousel — no frame, glowing circular podium under each car */}
        {carouselCars.length > 0 && (
          <section className="overflow-hidden py-16">
            <p className="eyebrow text-center text-primary">{t("home.carouselIntro")}</p>
            <div className="relative mt-8 overflow-hidden">
              <div className="animate-marquee flex w-max gap-14 px-6">
                {loopedCars.map((car, i) => (
                  <Link
                    key={`${car.id}-${i}`}
                    to="/listings/$listingId"
                    params={{ listingId: car.id }}
                    className="group relative flex w-56 shrink-0 flex-col items-center"
                  >
                    <div className="podium-glow absolute bottom-2 h-10 w-44 rounded-full" />
                    <img
                      src={car.images[0]}
                      alt={car.title}
                      width={400}
                      height={240}
                      className="relative z-10 h-32 w-full object-contain drop-shadow-2xl transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="relative z-10 mt-3 text-center text-xs font-semibold text-muted-foreground">
                      {car.year} {car.brand} {car.model}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Testimonials */}
        <section className="border-t bg-card py-16">
          <p className="eyebrow text-center text-primary">{t("home.testimonialsIntro")}</p>
          <h2 className="mt-2 text-center text-3xl font-bold">{t("home.testimonialsTitle")}</h2>
          <div className="container-page mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {testimonialKeys.map(({ nameKey, textKey }, i) => {
              const name = t(nameKey);
              const initials = name
                .split(" ")
                .map((p) => p[0])
                .join("")
                .slice(0, 2);
              return (
                <div key={nameKey} className="rounded-xl border bg-background p-5">
                  <div className="flex items-center gap-3">
                    <div className="flex size-10 items-center justify-center rounded-full bg-navy text-xs font-bold text-white">
                      {initials}
                    </div>
                    <div>
                      <p className="text-sm font-semibold">{name}</p>
                      <div className="flex gap-0.5 text-accent">
                        {Array.from({ length: 5 }).map((_, star) => (
                          <Star key={star} className="size-3 fill-accent" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground">"{t(textKey)}"</p>
                  <span className="sr-only">{i + 1}</span>
                </div>
              );
            })}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
