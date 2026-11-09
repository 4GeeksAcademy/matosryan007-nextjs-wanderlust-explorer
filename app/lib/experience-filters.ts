import { experiences } from "@/src/data/experiences";

export type ExperienceFilterValues = {
  search: string;
  location: string;
  category: string;
  price: string;
  rating: string;
};

export const emptyExperienceFilters: ExperienceFilterValues = {
  search: "",
  location: "",
  category: "",
  price: "",
  rating: "",
};

export function readExperienceFilters(queryString: string): ExperienceFilterValues {
  const params = new URLSearchParams(queryString);

  return {
    search: params.get("search") ?? "",
    location: params.get("location") ?? "",
    category: params.get("category") ?? "",
    price: params.get("price") ?? "",
    rating: params.get("rating") ?? "",
  };
}

export function createExperienceFilterQuery(values: ExperienceFilterValues) {
  const params = new URLSearchParams();

  for (const [key, value] of Object.entries(values)) {
    if (value.trim()) params.set(key, value.trim());
  }

  return params.toString();
}

export function filterExperiences(filters: ExperienceFilterValues) {
  const searchTerm = filters.search.trim();
  const titlePattern = searchTerm ? new RegExp(escapeRegExp(searchTerm), "i") : null;
  const normalizedLocation = filters.location.trim().toLowerCase();
  const normalizedCategory = filters.category.toLowerCase();
  const minimumRating = filters.rating ? Number(filters.rating) : 0;

  return experiences.filter((experience) => {
    const matchesTitle = !titlePattern || titlePattern.test(experience.title);
    const matchesLocation = !normalizedLocation || experience.destination.toLowerCase().includes(normalizedLocation);
    const matchesCategory = !normalizedCategory || experience.category.toLowerCase() === normalizedCategory;
    const matchesPrice = !filters.price
      || (filters.price === "under-50" && experience.price < 50)
      || (filters.price === "50-100" && experience.price >= 50 && experience.price <= 100)
      || (filters.price === "100-plus" && experience.price > 100);
    const matchesRating = experience.rating >= minimumRating;

    return matchesTitle && matchesLocation && matchesCategory && matchesPrice && matchesRating;
  });
}

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}