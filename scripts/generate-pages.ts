import { mkdir, rm, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { tours } from '../src/data/tours';
import { blogs } from '../src/data/blogs';
import { transport } from '../src/data/transport';

const root = resolve('pages');

const pageMeta = {
  home: {
    title: 'Bali Bagus Journey - Private Tours & Airport Transfers in Bali',
    description: 'Discover Bali with trusted local guides. Book private day tours, airport transfers, and customized Bali travel packages with Bali Bagus Journey.',
  },
  about: {
    title: 'About Bali Bagus Journey - Local Bali Tour & Driver Experts',
    description: 'Learn about Bali Bagus Journey, a trusted Bali travel company since 2016. We offer private tours, airport transfers, and personalized Bali travel experiences with local expertise.',
  },
  tours: {
    title: 'Bali Private Tours & Activities - Bali Bagus Journey',
    description: 'Browse private Bali day tours and activities with Bali Bagus Journey. Choose from cultural tours, temple visits, rice terrace treks, water activities, and more. Book now.',
  },
  blogs: {
    title: 'Bali Travel Blog - Tips, Guides & Destination Stories | Bali Bagus Journey',
    description: 'Read Bali travel tips, destination guides, and insider stories from Bali Bagus Journey. Discover the best places to visit, eat, and explore in Bali, Indonesia.',
  },
  transport: {
    title: 'Private Transport & Airport Transfers in Bali - Bali Bagus Journey',
    description: 'Book private transport and airport transfers in Bali with Bali Bagus Journey. Choose from Avanza, Innova, Hi-Ace, and more. Reliable, comfortable, and affordable.',
  },
  gallery: {
    title: 'Bali Tour Gallery - Photos & Memories | Bali Bagus Journey',
    description: 'Browse photos and memories from Bali Bagus Journey tours and transport services. See real Bali experiences from our happy travelers.',
  },
  contact: {
    title: 'Contact Bali Bagus Journey - Book Your Bali Tour or Transfer',
    description: 'Contact Bali Bagus Journey to book a private Bali tour, airport transfer, or send a general inquiry. We respond quickly via WhatsApp or email.',
  },
} as const;

type Entry = { path: string; title: string; description: string };

const entries: Entry[] = [
  { path: 'about.html', ...pageMeta.about },
  { path: 'tours.html', ...pageMeta.tours },
  { path: 'blogs.html', ...pageMeta.blogs },
  { path: 'transport.html', ...pageMeta.transport },
  { path: 'gallery.html', ...pageMeta.gallery },
  { path: 'contact.html', ...pageMeta.contact },
  ...tours.map((tour) => ({
    path: `tours/${tour.slug}.html`,
    title: `${tour.title} - Bali Bagus Journey`,
    description: tour.description,
  })),
  ...blogs.map((blog) => ({
    path: `blogs/${blog.slug}.html`,
    title: `${blog.title} | Bali Bagus Journey`,
    description: blog.excerpt,
  })),
  ...transport.map((item) => ({
    path: `transport/${item.slug}.html`,
    title: `${item.title} - Bali Bagus Journey`,
    description: item.description ?? `Private ${item.title} transport service in Bali.`,
  })),
];

const escapeHtml = (value: string) => value
  .replaceAll('&', '&amp;')
  .replaceAll('"', '&quot;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;');

const shell = (entry: Entry) => `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="${escapeHtml(entry.description)}" />
    <title>${escapeHtml(entry.title)}</title>
    <link rel="icon" href="/favicon.ico" />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
`;

await rm(root, { recursive: true, force: true });
await mkdir(root, { recursive: true });

for (const entry of entries) {
  const target = resolve(root, entry.path);
  await mkdir(dirname(target), { recursive: true });
  await writeFile(target, shell(entry), 'utf8');
}

console.log(`Generated ${entries.length} static HTML entry points.`);
