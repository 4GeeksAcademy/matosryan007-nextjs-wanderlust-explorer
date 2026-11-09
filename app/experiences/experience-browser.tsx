"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ArrowRight, Search } from "lucide-react";
import { useFilters } from "../hooks/use-filters";
import { ExperienceCard } from "../components/experience-card";
import { FilterBar } from "../components/experience-filter-bar";

export function ExperienceBrowser() {
  const queryString = useSearchParams().toString();
  return <ExperienceFilters key={queryString} queryString={queryString} />;
}

function ExperienceFilters({ queryString }: { queryString: string }) {
  const { filters, filteredExperiences, updateFilter, updateUrl, clearFilters } = useFilters(queryString);

  useEffect(() => {
    const previousTitle = document.title;
    document.title = `${filteredExperiences.length} experiences | Explore | Wanderlust Labs`;

    return () => {
      document.title = previousTitle;
    };
  }, [filteredExperiences.length]);

  return (
    <div className="page-wrap explorer-page">
      <div className="explorer-intro">
        <div>
          <p className="eyebrow">A world of local favorites</p>
          <h1>Find your kind of <span>somewhere.</span></h1>
          <p className="explorer-subtitle">Small-group adventures, shared tables, and slower ways to see the world.</p>
        </div>
        <Link className="explorer-note" href="/profile">
          <span className="explorer-note-mark">w</span>
          <span><strong>Picked with a local point of view</strong><small>100 experiences to start exploring</small></span>
          <ArrowRight size={17} aria-hidden="true" />
        </Link>
      </div>

      <FilterBar
        onChange={updateFilter}
        onClear={clearFilters}
        onSubmit={() => updateUrl(filters)}
        values={filters}
        variant="explorer"
      />

      <div className="results-heading" aria-live="polite">
        <p><strong>{filteredExperiences.length}</strong> {filteredExperiences.length === 1 ? "experience" : "experiences"} to explore</p>
        <span>Thoughtful finds, wherever you&apos;re headed</span>
      </div>

      {filteredExperiences.length > 0 ? (
        <div className="experience-grid explorer-grid">
          {filteredExperiences.map((experience) => (
            <ExperienceCard experience={experience} key={experience.id} />
          ))}
        </div>
      ) : (
        <div className="empty-results">
          <span className="empty-icon"><Search size={22} aria-hidden="true" /></span>
          <h2>No experiences found</h2>
          <p>Try another location or open up the price and rating filters.</p>
          <button className="button button-dark" onClick={clearFilters} type="button">Clear filters</button>
        </div>
      )}
    </div>
  );
}