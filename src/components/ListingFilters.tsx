import { Search } from "lucide-react";
import { brands, type CarListing } from "@/data/listings";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export type Filters = {
  q: string;
  brand: string;
  minYear: string;
  maxPrice: string;
  maxMileage: string;
  sort: string;
};

export const defaultFilters: Filters = {
  q: "",
  brand: "all",
  minYear: "all",
  maxPrice: "all",
  maxMileage: "all",
  sort: "newest",
};

const priceOptions = [
  { value: "all", label: "Tous les prix" },
  { value: "50000", label: "Jusqu'à $50 000" },
  { value: "100000", label: "Jusqu'à $100 000" },
  { value: "150000", label: "Jusqu'à $150 000" },
  { value: "250000", label: "Jusqu'à $250 000" },
];

const yearOptions = [
  { value: "all", label: "Toutes années" },
  { value: "2023", label: "2023 et plus récent" },
  { value: "2020", label: "2020 et plus récent" },
  { value: "2015", label: "2015 et plus récent" },
  { value: "0", label: "Avant 2015 (classiques)" },
];

const mileageOptions = [
  { value: "all", label: "Tous kilométrages" },
  { value: "10000", label: "Moins de 10 000 km" },
  { value: "25000", label: "Moins de 25 000 km" },
  { value: "50000", label: "Moins de 50 000 km" },
];

export const sortOptions = [
  { value: "newest", label: "Plus récentes" },
  { value: "price-asc", label: "Prix croissant" },
  { value: "price-desc", label: "Prix décroissant" },
  { value: "mileage-asc", label: "Kilométrage croissant" },
  { value: "year-desc", label: "Année (récent → ancien)" },
];

function parseMileage(mileage: string): number {
  const digits = mileage.replace(/[^\d]/g, "");
  return digits ? Number(digits) : 0;
}

export function ListingFilters({
  filters,
  onChange,
}: {
  filters: Filters;
  onChange: (next: Filters) => void;
}) {
  const set = <K extends keyof Filters>(key: K, value: Filters[K]) =>
    onChange({ ...filters, [key]: value });

  return (
    <div className="rounded-xl border bg-card p-4 shadow-sm">
      <div className="grid gap-3 md:grid-cols-[1.2fr_0.9fr_0.9fr_0.9fr_0.9fr_1fr]">
        <div className="relative">
          <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            value={filters.q}
            onChange={(e) => set("q", e.target.value)}
            placeholder="Marque, modèle, mot-clé…"
            className="pl-9"
            aria-label="Rechercher"
          />
        </div>

        <Select value={filters.brand} onValueChange={(v) => set("brand", v)}>
          <SelectTrigger aria-label="Marque">
            <SelectValue placeholder="Marque" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Toutes marques</SelectItem>
            {brands.map((m) => (
              <SelectItem key={m} value={m}>
                {m}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={filters.minYear} onValueChange={(v) => set("minYear", v)}>
          <SelectTrigger aria-label="Année">
            <SelectValue placeholder="Année" />
          </SelectTrigger>
          <SelectContent>
            {yearOptions.map((o) => (
              <SelectItem key={o.value} value={o.value}>
                {o.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={filters.maxPrice} onValueChange={(v) => set("maxPrice", v)}>
          <SelectTrigger aria-label="Prix">
            <SelectValue placeholder="Prix" />
          </SelectTrigger>
          <SelectContent>
            {priceOptions.map((o) => (
              <SelectItem key={o.value} value={o.value}>
                {o.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={filters.maxMileage} onValueChange={(v) => set("maxMileage", v)}>
          <SelectTrigger aria-label="Kilométrage">
            <SelectValue placeholder="Kilométrage" />
          </SelectTrigger>
          <SelectContent>
            {mileageOptions.map((o) => (
              <SelectItem key={o.value} value={o.value}>
                {o.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={filters.sort} onValueChange={(v) => set("sort", v)}>
          <SelectTrigger aria-label="Trier par">
            <SelectValue placeholder="Trier par" />
          </SelectTrigger>
          <SelectContent>
            {sortOptions.map((o) => (
              <SelectItem key={o.value} value={o.value}>
                {o.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}

export function applyFilters(items: CarListing[], filters: Filters): CarListing[] {
  const result = items.filter((item) => {
    if (filters.q) {
      const q = filters.q.toLowerCase();
      const haystack = `${item.brand} ${item.model} ${item.title}`.toLowerCase();
      if (!haystack.includes(q)) return false;
    }
    if (filters.brand !== "all" && item.brand !== filters.brand) return false;
    if (filters.minYear !== "all") {
      const minYear = Number(filters.minYear);
      if (minYear === 0) {
        if (item.year >= 2015) return false;
      } else if (item.year < minYear) {
        return false;
      }
    }
    if (filters.maxPrice !== "all" && item.price > Number(filters.maxPrice)) return false;
    if (filters.maxMileage !== "all" && parseMileage(item.mileage) > Number(filters.maxMileage)) return false;
    return true;
  });

  switch (filters.sort) {
    case "price-asc":
      return [...result].sort((a, b) => a.price - b.price);
    case "price-desc":
      return [...result].sort((a, b) => b.price - a.price);
    case "mileage-asc":
      return [...result].sort((a, b) => parseMileage(a.mileage) - parseMileage(b.mileage));
    case "year-desc":
      return [...result].sort((a, b) => b.year - a.year);
    case "newest":
    default:
      return [...result].sort((a, b) => (b.listedAt ?? "").localeCompare(a.listedAt ?? ""));
  }
}
