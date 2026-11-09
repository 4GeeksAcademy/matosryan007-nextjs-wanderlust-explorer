"use client";

import { Heart } from "lucide-react";
import { useFavorites } from "./favorites-provider";

export function FavoriteButton({ experienceId }: { experienceId: string }) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const favorite = isFavorite(experienceId);

  return (
    <button
      aria-label={favorite ? "Remove from favorites" : "Add to favorites"}
      aria-pressed={favorite}
      className={`favorite-button${favorite ? " is-favorite" : ""}`}
      onClick={() => toggleFavorite(experienceId)}
      type="button"
    >
      <Heart size={18} strokeWidth={2} fill={favorite ? "currentColor" : "none"} aria-hidden="true" />
    </button>
  );
}