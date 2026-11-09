"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, ChevronDown, Compass, MapPin, Search, Star } from "lucide-react";
import {
  createExperienceFilterQuery,
  emptyExperienceFilters,
  type ExperienceFilterValues,
} from "../lib/experience-filters";

type ExperienceFilterKey = keyof ExperienceFilterValues;

type FilterBarProps = {
  values: ExperienceFilterValues;
  variant: "home" | "explorer";
  onChange: (key: ExperienceFilterKey, value: string) => void;
  onSubmit: () => void;
  onClear: () => void;
};

type SearchBarProps = {
  value: string;
  onChange: (value: string) => void;
};

export function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <input
      autoComplete="off"
      onChange={(event) => onChange(event.target.value)}
      placeholder="Try sailing, street food, or Kyoto"
      type="search"
      value={value}
    />
  );
}

export function FilterBar({
  values,
  variant,
  onChange,
  onSubmit,
  onClear,
}: FilterBarProps) {
  const hasFilters = Object.values(values).some(Boolean);

  return (
    <form
      className={`experience-filter-bar filter-bar-${variant}`}
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit();
      }}
    >
      <label className="filter-field filter-search-field">
        <span>Search experiences</span>
        <div className="filter-control">
          <Search size={16} aria-hidden="true" />
          <SearchBar
            onChange={(value) => onChange("search", value)}
            value={values.search}
          />
        </div>
      </label>

      <label className="filter-field">
        <span>Location</span>
        <div className="filter-control">
          <MapPin size={16} aria-hidden="true" />
          <input
            autoComplete="off"
            onChange={(event) => onChange("location", event.target.value)}
            placeholder="City or country"
            type="search"
            value={values.location}
          />
        </div>
      </label>

      <label className="filter-field">
        <span>Experience type</span>
        <div className="filter-control">
          <Compass size={16} aria-hidden="true" />
          <select onChange={(event) => onChange("category", event.target.value)} value={values.category}>
            <option value="">All types</option>
            <option value="adventure">Adventure</option>
            <option value="culture">Culture</option>
            <option value="food">Food</option>
            <option value="wellness">Wellness</option>
            <option value="nature">Nature</option>
          </select>
          <ChevronDown size={14} aria-hidden="true" />
        </div>
      </label>

      <label className="filter-field">
        <span>Price</span>
        <div className="filter-control">
          <span className="currency-mark" aria-hidden="true">$</span>
          <select onChange={(event) => onChange("price", event.target.value)} value={values.price}>
            <option value="">Any price</option>
            <option value="under-50">Under $50</option>
            <option value="50-100">$50 to $100</option>
            <option value="100-plus">$100 and up</option>
          </select>
          <ChevronDown size={14} aria-hidden="true" />
        </div>
      </label>

      <label className="filter-field">
        <span>Rating</span>
        <div className="filter-control">
          <Star size={16} aria-hidden="true" />
          <select onChange={(event) => onChange("rating", event.target.value)} value={values.rating}>
            <option value="">Any rating</option>
            <option value="4">4.0 and up</option>
            <option value="4.5">4.5 and up</option>
          </select>
          <ChevronDown size={14} aria-hidden="true" />
        </div>
      </label>

      <div className="filter-actions">
        <button className="filter-submit" type="submit">
          <Search size={16} aria-hidden="true" />
          <span>{variant === "home" ? "Explore" : "Apply filters"}</span>
          <ArrowRight size={15} aria-hidden="true" />
        </button>
        {hasFilters && <button className="clear-filters" onClick={onClear} type="button">Clear</button>}
      </div>
    </form>
  );
}

export function HomeExperienceFilterBar() {
  const router = useRouter();
  const [values, setValues] = useState<ExperienceFilterValues>({ ...emptyExperienceFilters });

  function updateFilter(key: ExperienceFilterKey, value: string) {
    setValues((current) => ({ ...current, [key]: value }));
  }

  function submitFilters() {
    const query = createExperienceFilterQuery(values);
    router.push(query ? `/experiences?${query}` : "/experiences");
  }

  return (
    <FilterBar
      onChange={updateFilter}
      onClear={() => setValues({ ...emptyExperienceFilters })}
      onSubmit={submitFilters}
      values={values}
      variant="home"
    />
  );
}