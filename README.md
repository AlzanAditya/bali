# Bali Bagus Journey — Vite + React

This project is a modular React/Vite reimplementation of the reference website.

## Build model

This project intentionally does **not** use Playwright, browser prerendering, `renderToString()`, or React SSR.

Instead it uses a Vite multi-page build:

1. `scripts/generate-pages.ts` creates lightweight static HTML entry shells for every static route and every Tour/Blog/Transport slug.
2. Vite compiles those HTML entry points together with the shared React application.
3. Each generated `.html` file mounts the appropriate React page through TanStack Router using the browser's real URL.

This preserves real `.html` URLs while keeping all page UI implemented as native React components and keeping Tour/Blog/Transport pages data-driven.

The generated `pages/` directory is build-time output and is not runtime source code.
