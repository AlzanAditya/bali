import { useEffect } from 'react';
import type { PageData } from '../data/types';
import { initSiteFeatures } from '../features';

function applyHead(page: PageData) {
  document.title = page.title;
  document.querySelectorAll('[data-generated-page-head]').forEach((el) => el.remove());
  for (const meta of page.meta) {
    const el = document.createElement('meta');
    el.dataset.generatedPageHead = 'true';
    for (const [key, value] of Object.entries(meta)) el.setAttribute(key, String(value));
    document.head.appendChild(el);
  }
  for (const link of page.links) {
    // Original downloaded build links are reference-only; Vite owns runtime assets.
    const href = String(link.href ?? '');
    if (href.includes('/build/assets/') || href.startsWith('build/assets/')) continue;
    const el = document.createElement('link');
    el.dataset.generatedPageHead = 'true';
    for (const [key, value] of Object.entries(link)) {
      if (Array.isArray(value)) el.setAttribute(key, value.join(' '));
      else if (value != null) el.setAttribute(key, String(value));
    }
    document.head.appendChild(el);
  }
  for (const json of page.jsonLd) {
    const el = document.createElement('script');
    el.dataset.generatedPageHead = 'true';
    el.type = 'application/ld+json';
    el.textContent = json;
    document.head.appendChild(el);
  }
}

export function PageRenderer({ page }: { page: PageData }) {
  useEffect(() => {
    const root = document.getElementById('root');
    if (!root) return;
    applyHead(page);
    root.className = page.rootClass;
    root.innerHTML = page.bodyHtml;
    initSiteFeatures();
    return () => {
      root.innerHTML = '';
      root.className = '';
    };
  }, [page]);

  return null;
}
