# Bali Bagus Journey — Vite migration

The original downloaded website is preserved unchanged under `reference/balibagusjourney.com/`.

## Architecture

- Vite + React + TypeScript
- TanStack Router
- Data-driven page templates
- Modular feature JavaScript under `src/features/`
- Modular CSS under `src/styles/`
- Static generation via `scripts/prerender.mjs`
- Tour, blog, and transport detail pages are generated from one data collection per content type.

## Build

```bash
npm install
npm run build
```

The build emits `.html` routes matching the downloaded site's URL structure while using Vite-generated assets. Original build files remain only inside `reference/` for comparison.
