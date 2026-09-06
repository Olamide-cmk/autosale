import { Link, useNavigate } from "@tanstack/react-router";
import { Search, Menu, X, Moon, Sun, Heart, Languages } from "lucide-react";
import { useState } from "react";
import { searchTags } from "@/data/listings";
import { useFavorites } from "@/context/favorites-context";
import { useTheme } from "@/hooks/use-theme";
import { useLocale } from "@/i18n/locale-context";

const nav = [
  { to: "/", key: "nav.buy" },
  { to: "/sold-cars", key: "nav.sold" },
  { to: "/sell-car", key: "nav.sell" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const { favorites } = useFavorites();
  const { theme, toggle } = useTheme();
  const { locale, setLocale, t } = useLocale();

  function submitSearch(e: React.FormEvent) {
    e.preventDefault();
    navigate({ to: "/", search: { q: query || undefined } });
    setMobileSearchOpen(false);
    setOpen(false);
  }

  return (
    <header className="sticky top-0 z-40 border-b bg-navy text-white">
      <div className="container-page flex h-16 items-center gap-6">
        <Link to="/" className="font-display flex items-baseline gap-1 text-2xl font-bold tracking-tight text-white">
          AUTO<span className="text-accent">SALE</span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{ className: "text-accent" }}
              className="text-sm font-semibold uppercase tracking-wide text-white/70 transition-colors hover:text-white"
            >
              {t(item.key)}
            </Link>
          ))}
          <Link
            to="/favorites"
            activeProps={{ className: "text-accent" }}
            className="flex items-center gap-1 text-sm font-semibold uppercase tracking-wide text-white/70 transition-colors hover:text-white"
          >
            <Heart className="size-3.5" /> {t("nav.favorites")}
            {favorites.length > 0 && (
              <span className="rounded-full bg-white/15 px-1.5 py-0.5 text-[10px]">{favorites.length}</span>
            )}
          </Link>
        </nav>
        <div className="ml-auto flex items-center gap-1.5">
          <form onSubmit={submitSearch} className="relative hidden sm:block">
            <Search className="pointer-events-none absolute left-2.5 top-1/2 size-4 -translate-y-1/2 text-white/50" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t("search.placeholder")}
              aria-label={t("search.placeholder")}
              className="h-9 w-56 rounded-md border border-white/15 bg-white/10 pl-8 pr-3 text-sm text-white placeholder:text-white/50 outline-none focus:ring-2 focus:ring-accent lg:w-72"
            />
          </form>

          <button
            type="button"
            onClick={() => setMobileSearchOpen((v) => !v)}
            className="inline-flex size-9 items-center justify-center rounded-md text-white sm:hidden"
            aria-label={t("search.placeholder")}
          >
            <Search className="size-5" />
          </button>

          <button
            type="button"
            onClick={() => setLocale(locale === "fr" ? "en" : "fr")}
            className="hidden items-center gap-1 rounded-md px-2 text-xs font-bold uppercase text-white/80 hover:bg-white/10 hover:text-white sm:inline-flex sm:h-9"
            aria-label="Changer de langue / Switch language"
          >
            <Languages className="size-4" /> {locale}
          </button>

          <button
            type="button"
            onClick={toggle}
            className="inline-flex size-9 items-center justify-center rounded-md text-white/80 hover:bg-white/10 hover:text-white"
            aria-label={theme === "dark" ? t("theme.toLight") : t("theme.toDark")}
          >
            {theme === "dark" ? <Sun className="size-4.5" /> : <Moon className="size-4.5" />}
          </button>

          <Link
            to="/sell-car"
            className="hidden rounded-md border border-white/20 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-white/10 md:inline-flex"
          >
            {t("nav.sellYourCar")}
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex size-9 items-center justify-center rounded-md text-white md:hidden"
            aria-label="Menu"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {mobileSearchOpen && (
        <div className="border-t border-white/10 px-4 py-3 sm:hidden">
          <form onSubmit={submitSearch} className="relative">
            <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-white/50" />
            <input
              type="search"
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t("search.placeholder")}
              aria-label={t("search.placeholder")}
              className="h-10 w-full rounded-md border border-white/15 bg-white/10 pl-9 pr-3 text-sm text-white placeholder:text-white/50 outline-none focus:ring-2 focus:ring-accent"
            />
          </form>
        </div>
      )}

      {open && (
        <div className="border-t border-white/10 bg-navy px-4 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="text-sm font-semibold uppercase tracking-wide text-white/80"
              >
                {t(item.key)}
              </Link>
            ))}
            <Link
              to="/favorites"
              onClick={() => setOpen(false)}
              className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-white/80"
            >
              <Heart className="size-4" /> {t("nav.favorites")}
              {favorites.length > 0 && (
                <span className="rounded-full bg-white/15 px-1.5 py-0.5 text-[10px]">{favorites.length}</span>
              )}
            </Link>
            <button
              type="button"
              onClick={() => setLocale(locale === "fr" ? "en" : "fr")}
              className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-white/80"
            >
              <Languages className="size-4" /> {locale === "fr" ? "English" : "Français"}
            </button>
          </div>
        </div>
      )}

      <div className="border-t border-white/10 bg-navy-light">
        <div className="container-page flex gap-4 overflow-x-auto py-2 text-xs font-semibold uppercase tracking-wider text-white/60">
          {searchTags.map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => navigate({ to: "/", search: { q: tag } })}
              className="whitespace-nowrap transition-colors hover:text-accent"
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}
