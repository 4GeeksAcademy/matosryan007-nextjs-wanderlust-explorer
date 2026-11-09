"use client";

import Link from "next/link";
import { ArrowRight, Heart } from "lucide-react";
import { experiences } from "@/src/data/experiences";
import { useFavorites } from "../components/favorites-provider";
import { ExperienceCard } from "../components/experience-card";

export default function FavoritesPage() {
  const { favoriteIds } = useFavorites();
  const favoriteExperiences = experiences.filter((experience) => favoriteIds.includes(experience.id));

  return (
    <div className="page-wrap favorites-page">
      <div className="page-title-block">
        <p className="eyebrow">Your personal shortlist</p>
        <h1>Saved for later<span>.</span></h1>
        <p>Keep the experiences you love close while you plan your next trip.</p>
      </div>
      {favoriteExperiences.length > 0 ? (
        <>
          <div className="results-heading"><p><strong>{favoriteExperiences.length}</strong> saved {favoriteExperiences.length === 1 ? "experience" : "experiences"}</p></div>
          <div className="experience-grid explorer-grid">
            {favoriteExperiences.map((experience) => <ExperienceCard experience={experience} key={experience.id} />)}
          </div>
        </>
      ) : (
        <div className="favorites-empty">
          <span className="empty-icon"><Heart size={22} aria-hidden="true" /></span>
          <h2>Your next favorite is out there.</h2>
          <p>Tap the heart on an experience to keep it here while you decide.</p>
          <Link className="button button-dark" href="/experiences">Explore experiences <ArrowRight size={17} aria-hidden="true" /></Link>
        </div>
      )}
    </div>
  );
}