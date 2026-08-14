import { readFile, mkdir, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { RouterProvider } from '@tanstack/react-router';
import { createPrerenderRouter } from '../src/router/index.tsx';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');
const dist = resolve(root, 'dist');

const routes = [
  '/',
  '/about.html',
  '/tours.html',
  '/blogs.html',
  '/transport.html',
  '/gallery.html',
  '/contact.html',
  '/tours/dolphin-watching-tour.html',
  '/tours/mount-batur-sunrise-trek-jeep-tour.html',
  '/tours/blue-lagoon-coastal-exploration.html',
  '/tours/uluwatu-tour.html',
  '/tours/breakfast-with-orangutans-bali-zoo.html',
  '/tours/nusa-penida-east-tour.html',
  '/tours/east-west-nusa-penida-tour.html',
  '/tours/nusa-penida-west-snorkeling-tour.html',
  '/tours/nusa-penida-west-tour.html',
  '/tours/east-bali-tour.html',
  '/tours/kintamani-volcano-tour.html',
  '/tours/ubud-cultural-tour.html',
  '/tours/tanah-lot-sunset-tou.html',
  '/tours/north-bali-exploration.html',
  '/blogs/10-best-things-to-do-in-bali-for-first-time-visitors.html',
  '/blogs/bali-adventure-activities-from-volcano-trekking-to-white-water-rafting.html',
  '/blogs/a-food-lovers-guide-to-balinese-cuisine-must-try-dishes.html',
  '/blogs/balis-sacred-traditions-temple-ceremonies-and-cultural-etiquette-for-travelers.html',
  '/blogs/how-to-plan-your-first-trip-to-bali-a-complete-travel-guide.html',
  '/blogs/getting-around-bali-transportation-tips-for-stress-free-travel.html',
  '/transport/toyota-alphard.html',
  '/transport/toyota-avanza.html',
  '/transport/toyota-fortuner.html',
  '/transport/toyota-hi-ace.html',
  '/transport/toyota-innova-reborn.html',
];

const indexTemplate = await readFile(resolve(dist, 'index.html'), 'utf8');

function injectAppMarkup(template, markup) {
  const rootPattern = /<div id="root">[\s\S]*?<\/div>/i;
  if (!rootPattern.test(template)) {
    throw new Error('Vite index.html does not contain the expected #root element.');
  }
  return template.replace(rootPattern, `<div id="root">${markup}</div>`);
}

for (const pathname of routes) {
  const router = createPrerenderRouter(pathname);
  await router.load();

  const markup = renderToString(
    React.createElement(RouterProvider, { router }),
  );

  const html = injectAppMarkup(indexTemplate, markup);
  const relativeTarget = pathname === '/' ? 'index.html' : pathname.slice(1);
  const target = resolve(dist, relativeTarget);

  await mkdir(dirname(target), { recursive: true });
  await writeFile(target, `<!doctype html>\n${html}`, 'utf8');
  console.log(`prerendered ${pathname} -> ${relativeTarget}`);
}
