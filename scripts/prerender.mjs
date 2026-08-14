import { spawn } from 'node:child_process';
import { mkdir, writeFile } from 'node:fs/promises';
import { chromium } from 'playwright';

const routes = [
  '/', '/about.html', '/tours.html', '/blogs.html', '/transport.html', '/gallery.html', '/contact.html',
  '/tours/dolphin-watching-tour.html', '/tours/mount-batur-sunrise-trek-jeep-tour.html', '/tours/blue-lagoon-coastal-exploration.html', '/tours/uluwatu-tour.html',
  '/tours/breakfast-with-orangutans-bali-zoo.html', '/tours/nusa-penida-east-tour.html', '/tours/east-west-nusa-penida-tour.html', '/tours/nusa-penida-west-snorkeling-tour.html', '/tours/nusa-penida-west-tour.html', '/tours/east-bali-tour.html', '/tours/kintamani-volcano-tour.html', '/tours/ubud-cultural-tour.html', '/tours/tanah-lot-sunset-tou.html', '/tours/north-bali-exploration.html',
  '/blogs/10-best-things-to-do-in-bali-for-first-time-visitors.html', '/blogs/bali-adventure-activities-from-volcano-trekking-to-white-water-rafting.html', '/blogs/a-food-lovers-guide-to-balinese-cuisine-must-try-dishes.html', '/blogs/balis-sacred-traditions-temple-ceremonies-and-cultural-etiquette-for-travelers.html', '/blogs/how-to-plan-your-first-trip-to-bali-a-complete-travel-guide.html', '/blogs/getting-around-bali-transportation-tips-for-stress-free-travel.html',
  '/transport/toyota-alphard.html', '/transport/toyota-avanza.html', '/transport/toyota-fortuner.html', '/transport/toyota-hi-ace.html', '/transport/toyota-innova-reborn.html'
];

const server = spawn(process.platform === 'win32' ? 'npx.cmd' : 'npx', ['vite', 'preview', '--host', '127.0.0.1', '--port', '4173'], { stdio: 'inherit' });
const sleep = ms => new Promise(r => setTimeout(r, ms));
try {
  await sleep(1500);
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 1000 }, deviceScaleFactor: 1 });
  for (const route of routes) {
    await page.goto(`http://127.0.0.1:4173${route}`, { waitUntil: 'networkidle' });
    await page.evaluate(() => window.scrollTo(0, 0));
    const html = '<!doctype html>\n' + await page.content();
    const target = route === '/' ? 'dist/index.html' : `dist${route}`;
    await mkdir(target.substring(0, target.lastIndexOf('/')), { recursive: true });
    await writeFile(target, html, 'utf8');
    console.log(`prerendered ${route}`);
  }
  await browser.close();
} finally { server.kill('SIGTERM'); }
