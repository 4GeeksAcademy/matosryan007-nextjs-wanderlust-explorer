Wanderlust Labs is a travel-tech startup building a platform where users can discover and save curated experiences around the world — from street-food tours in Bangkok to sailing trips in the Adriatic. Their product designer has already produced reference mockups (you'll find them in the brief below), and the engineering team needs a frontend developer to bring the MVP explorer to life.

[](https://learn.4geeks.com/main-cohort/miami-ft-ai-engineering-4/syllabus/front-end-development-with-coding-agents-selfpaced-miami/project/nextjs-wanderlust-explorer?moduleId=3#youve-been-assigned-to-build-the-experience-explor)You've been assigned to build the **experience explorer**: a multi-page React/Next.js application where users can browse, search, and filter experiences — all without reloading the page. The frontend lead handed you a Figma reference and a brief from the PM. Before writing a single component, spend some time finding 2–3 real interfaces you admire that match the expected feel: a clean discovery UI with cards, a search bar, and a sidebar or top filter bar. Use them to guide your design decisions and note them in your repo's README under a "Design References" section.

[](https://learn.4geeks.com/main-cohort/miami-ft-ai-engineering-4/syllabus/front-end-development-with-coding-agents-selfpaced-miami/project/nextjs-wanderlust-explorer?moduleId=3#your-dataset-will-be-100-generated-experiences-the)Your dataset will be 100 generated experiences. The PM wants the search and filters to live in the URL so that users can share links like `/experiences?search=sailing&category=adventure&destination=Croatia` and land on a pre-filtered view.

> [](https://learn.4geeks.com/main-cohort/miami-ft-ai-engineering-4/syllabus/front-end-development-with-coding-agents-selfpaced-miami/project/nextjs-wanderlust-explorer?moduleId=3#your-pm-lea-moreau-sent-the-following-spec-over-sl)Your PM, Lea Moreau, sent the following spec over Slack:
>
> #### Pages required
>
> - **`/`** — Home: hero section with a call-to-action button that navigates to `/experiences`
> - **`/experiences`** — Explorer: full list of experience cards with a search bar and at least two filters (category and destination). The search and active filters must be reflected in the URL as query parameters and must pre-fill the inputs on load.
> - **`/experiences/[id]`** — Detail: full information for one experience, fetched from the local dataset by ID
> - **`/favorites`** — Favorites: list of experiences the user has marked as favorite (stored in component state for now)
> - **`/profile`** — Profile: a static page with a mock user profile and a summary of their saved favorites count
>
> #### Search behavior
> [](https://learn.4geeks.com/main-cohort/miami-ft-ai-engineering-4/syllabus/front-end-development-with-coding-agents-selfpaced-miami/project/nextjs-wanderlust-explorer?moduleId=3#the-search-should-filter-experiences-whose-title-m)The search should filter experiences whose title matches the search term. Use a case-insensitive regex for this — something like `/term/i`. The filter by category and destination should work independently and stack with the search.
>
> #### Dataset
> [](https://learn.4geeks.com/main-cohort/miami-ft-ai-engineering-4/syllabus/front-end-development-with-coding-agents-selfpaced-miami/project/nextjs-wanderlust-explorer?moduleId=3#use-an-ai-coding-assistant-to-generate-an-array-of)Use an AI coding assistant to generate an array of 100 experience objects. Each object should have at minimum: `id`, `title`, `description`, `category` (one of: Adventure, Culture, Food, Wellness, Nature), `destination` (city + country), `price`, `rating`, and `imageUrl` (any placeholder). Save it as a local TypeScript file.
>
> #### Favorites
> [](https://learn.4geeks.com/main-cohort/miami-ft-ai-engineering-4/syllabus/front-end-development-with-coding-agents-selfpaced-miami/project/nextjs-wanderlust-explorer?moduleId=3#a-heart-icon-on-each-card-should-toggle-the-experi)A heart icon on each card should toggle the experience in/out of the user's favorites list. Favorites are kept in a `useState` at the top level and passed down as props where needed. No persistence required yet.

[](https://learn.4geeks.com/main-cohort/miami-ft-ai-engineering-4/syllabus/front-end-development-with-coding-agents-selfpaced-miami/project/nextjs-wanderlust-explorer?moduleId=3#this-is-the-kind-of-feature-that-shows-up-in-real-)This is the kind of feature that shows up in real product sprints: link-shareable filters, URL-driven state, and component composition. Build it like something you'd put in your portfolio — because you should.
