"use client";

import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import {
  createExperienceFilterQuery,
  emptyExperienceFilters,
  filterExperiences,
  readExperienceFilters,
  type ExperienceFilterValues,
} from "../lib/experience-filters";

export function useFilters(queryString: string) {
  const pathname = usePathname();
  const router = useRouter();
  const [filters, setFilters] = useState<ExperienceFilterValues>(() => readExperienceFilters(queryString));
  const filteredExperiences = filterExperiences(filters);

  function updateUrl(values: ExperienceFilterValues) {
    const query = createExperienceFilterQuery(values);
    router.replace(query ? `${pathname}?${query}` : pathname, { scroll: false });
  }

  function updateFilter(key: keyof ExperienceFilterValues, value: string) {
    const nextFilters = { ...filters, [key]: value };
    setFilters(nextFilters);
    updateUrl(nextFilters);
  }

  function clearFilters() {
    setFilters({ ...emptyExperienceFilters });
    router.replace(pathname, { scroll: false });
  }

  return { filters, filteredExperiences, updateFilter, updateUrl, clearFilters };
}