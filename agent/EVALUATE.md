# Project Evaluation Checklist

- [x] The app has at least 5 distinct pages with working client-side navigation (no full-page reloads between routes): `/`, `/experiences`, `/experiences/[id]`, `/favorites`, and `/profile` use the App Router and `Link` navigation.
- [x] Search filters results by title using an escaped, case-insensitive regex.
- [x] Category and destination filters work independently and combine correctly with the search term; price and rating filters also stack.
- [x] Active filters and the search term are reflected in the URL as query parameters (`search`, `location`, `category`, `price`, and `rating`).
- [x] On page load with existing query parameters, the current filter inputs are pre-filled and results are already filtered.
- [x] `useEffect` is used correctly with an appropriate dependency array to synchronize the Explorer result count with the document title.
- [ ] `useState` manages favorites and is passed correctly as props. Favorites are in `useState` in `FavoritesProvider` and consumed through context with `useFavorites`, rather than passed down as props.
- [x] At least one custom hook exists and encapsulates meaningful logic: `useFilters` parses filters, updates the URL, and filters experiences; `useFavorites` exposes favorites state.
- [x] Components are split logically; the app uses shared cards, filter controls, navigation, providers, and route components.
- [x] TypeScript types are defined and used consistently. The dataset's `Experience` shape remains a type alias because the data file is editor-excluded; converting it to an interface is still pending.
- [x] Responsive styles and shared visual patterns are present across the pages. The latest filter-bar change still needs a narrow-viewport browser check.
- [x] Design references are documented in the README.
