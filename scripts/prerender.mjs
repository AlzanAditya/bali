import fs from 'node:fs';
import path from 'node:path';
import { allPages } from '../src/data/index.ts';

const root = new URL('../', import.meta.url).pathname;
const dist = path.join(root, 'dist');
const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf8');

function esc(s) {
  return String(s).replaceAll('&','&amp;').replaceAll('"','&quot;').replaceAll('<','&lt;').replaceAll('>','&gt;');
}
function localAssetUrl(value) {
  if (!value || /^(https?:|\/\/|data:|#|mailto:|tel:)/i.test(value)) return value;
  let v = value;
  while (v.startsWith('../')) v = v.slice(3);
  if (v.startsWith('./')) v = v.slice(2);
  return /^(assets|storage|favicon\.ico)(\/|$)/.test(v) ? '/' + v : value;
}
function render(page) {
  const metas = page.meta.map(m => `<meta ${Object.entries(m).map(([k,v]) => `${k}="${esc(Array.isArray(v)?v.join(' '):v)}"`).join(' ')}>`).join('');
  const links = page.links.filter(l => {
    const href = String(l.href ?? '');
    return !href.includes('build/assets/');
  }).map(l => `<link ${Object.entries(l).map(([k,v]) => { const vv = Array.isArray(v)?v.join(' '):v; return `${k}="${esc(k === 'href' ? localAssetUrl(vv) : vv)}"`; }).join(' ')}>`).join('');
  const ld = page.jsonLd.map(x => `<script type="application/ld+json">${x}</script>`).join('');
  const styles = page.inlineStyles.map(x => `<style>${x}</style>`).join('');
  const scripts = page.inlineScripts.map(x => `<script>${x}</script>`).join('');
  const body = `<div id="root" class="${esc(page.rootClass)}">${page.bodyHtml}</div>`;
  // Vite's generated JS/CSS references are injected from the built index template.
  const injected = template.match(/<script[^>]+type="module"[^>]+src="[^"]+"[^>]*><\/script>|<link[^>]+rel="stylesheet"[^>]+href="[^"]+"[^>]*>/g)?.join('\n') ?? '';
  return `<!doctype html><html lang="en"><head><meta charset="UTF-8"><title>${esc(page.title)}</title>${metas}${links}${ld}${styles}${injected}</head><body class="font-inter antialiased bg-background text-foreground">${body}${scripts}</body></html>`;
}

for (const page of allPages) {
  const target = path.join(dist, page.file);
  fs.mkdirSync(path.dirname(target), { recursive: true });
  if (page.emptySource) fs.writeFileSync(target, '');
  else fs.writeFileSync(target, render(page));
}
console.log(`Prerendered ${allPages.length} source routes.`);
