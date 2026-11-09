"use client";

import Link from "next/link";
import { ArrowRight, Bookmark, CalendarDays, MapPin, Sparkles } from "lucide-react";
import { useFavorites } from "../components/favorites-provider";

export default function ProfilePage() {
  const { favoriteIds } = useFavorites();

  return (
    <div className="page-wrap profile-page">
      <div className="page-title-block">
        <p className="eyebrow">A little space that&apos;s yours</p>
        <h1>Traveler profile<span>.</span></h1>
        <p>A sample profile for keeping your travel inspiration in one place.</p>
      </div>

      <section className="profile-layout">
        <div className="profile-main">
          <div className="profile-card">
            <div className="profile-cover" />
            <div className="profile-identity">
              <div className="profile-avatar" aria-label="Amelia Rivers initials">AR</div>
              <div><p className="eyebrow">Curious by nature</p><h2>Amelia Rivers</h2><p className="profile-handle">@amelia.rivers</p></div>
              <span className="profile-badge"><Sparkles size={14} aria-hidden="true" /> Local-first explorer</span>
            </div>
            <p className="profile-bio">Always looking for the long way around, a table full of new flavors, and the people who make a place feel like itself.</p>
            <div className="profile-meta">
              <span><MapPin size={15} aria-hidden="true" /> San Francisco, CA</span>
              <span><CalendarDays size={15} aria-hidden="true" /> Exploring since 2024</span>
            </div>
          </div>
          <div className="profile-note">
            <span className="profile-note-icon"><Bookmark size={18} aria-hidden="true" /></span>
            <div><strong>Good trips start with a good list.</strong><p>Save a few ideas now. Your future self will thank you.</p></div>
          </div>
        </div>

        <aside className="profile-stats">
          <p className="eyebrow">Your travel notebook</p>
          <div className="profile-stat"><strong>{favoriteIds.length}</strong><span>Saved experiences</span></div>
          <p className="profile-stat-caption">{favoriteIds.length === 0 ? "Your shortlist is ready for its first idea." : "A few lovely possibilities for your next trip."}</p>
          <Link className="profile-stat-link" href="/favorites">View saved experiences <ArrowRight size={16} aria-hidden="true" /></Link>
        </aside>
      </section>
    </div>
  );
}