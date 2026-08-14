# Bali Bagus Journey — Vite + React + TanStack Router

This project is a Vite/React conversion of the downloaded Bali Bagus Journey site.

## Source preservation
The untouched downloaded site is preserved in `reference/balibagusjourney.com/`. It is not used as the runtime source of the React app.

## Structure
- `src/components/` — shared header, footer, and page shell
- `src/pages/` — converted page components
- `src/lib/` — navigation, animation, smooth-scroll, and interaction modules
- `src/styles/vendor/` — original downloaded CSS bundles kept separately
- `public/assets/` and `public/storage/` — static assets/storage with the same folder structure as the download
- `scripts/prerender.tsx` — static generation step

## Commands
```bash
npm install
npm run dev
npm run build
```

`npm run build` first creates the Vite production bundle and then prerenders the available pages into `.html` files matching the downloaded site's URL/file structure.
# bali
