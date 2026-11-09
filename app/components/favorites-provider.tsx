"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

type FavoritesContextValue = {
  favoriteIds: string[];
  isFavorite: (experienceId: string) => boolean;
  toggleFavorite: (experienceId: string) => void;
};

const FavoritesContext = createContext<FavoritesContextValue | null>(null);

export function FavoritesProvider({ children }: { children: ReactNode }) {
  const [favoriteIds, setFavoriteIds] = useState<string[]>([]);

  function toggleFavorite(experienceId: string) {
    setFavoriteIds((currentIds) =>
      currentIds.includes(experienceId)
        ? currentIds.filter((id) => id !== experienceId)
        : [...currentIds, experienceId],
    );
  }

  return (
    <FavoritesContext.Provider
      value={{
        favoriteIds,
        isFavorite: (experienceId) => favoriteIds.includes(experienceId),
        toggleFavorite,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const context = useContext(FavoritesContext);

  if (!context) {
    throw new Error("useFavorites must be used within a FavoritesProvider");
  }

  return context;
}