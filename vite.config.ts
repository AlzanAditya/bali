import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { readdirSync, statSync } from 'node:fs';
import { resolve, relative, sep } from 'node:path';

function collectHtmlEntries(directory: string): Record<string, string> {
  const entries: Record<string, string> = {};
  const walk = (current: string) => {
    for (const name of readdirSync(current)) {
      const absolute = resolve(current, name);
      if (statSync(absolute).isDirectory()) walk(absolute);
      else if (name.endsWith('.html')) {
        const rel = relative(directory, absolute).replaceAll(sep, '/').replace(/\.html$/, '');
        entries[rel] = absolute;
      }
    }
  };
  walk(directory);
  return entries;
}

const pageEntries = collectHtmlEntries(resolve('pages'));

export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    target: 'es2020',
    sourcemap: true,
    rollupOptions: {
      input: {
        index: resolve('index.html'),
        ...pageEntries,
      },
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', '@tanstack/react-router'],
          motion: ['gsap', 'lenis'],
          date: ['flatpickr'],
        },
      },
    },
  },
});
