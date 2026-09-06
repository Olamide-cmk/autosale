import { createContext, useContext, useMemo, type ReactNode } from "react";
import { useLocalStorageState } from "@/hooks/use-local-storage";

type FavoritesContextValue = {
  favorites: string[];
  isFavorited: (listingId: string) => boolean;
  toggleFavorite: (listingId: string) => void;
};

const FavoritesContext = createContext<FavoritesContextValue | null>(null);

export function FavoritesProvider({ children }: { children: ReactNode }) {
  const [favorites, setFavorites] = useLocalStorageState<string[]>("autosale:favorites", []);

  const value = useMemo<FavoritesContextValue>(
    () => ({
      favorites,
      isFavorited: (listingId) => favorites.includes(listingId),
      toggleFavorite: (listingId) =>
        setFavorites((prev) => (prev.includes(listingId) ? prev.filter((id) => id !== listingId) : [...prev, listingId])),
    }),
    [favorites, setFavorites],
  );

  return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>;
}

export function useFavorites() {
  const ctx = useContext(FavoritesContext);
  if (!ctx) throw new Error("useFavorites must be used within FavoritesProvider");
  return ctx;
}
