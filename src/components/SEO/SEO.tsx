import { useEffect } from 'react';

export function SEO({ title, description, canonical }: { title: string; description?: string; canonical?: string }) {
  useEffect(() => {
    document.title = title;
    const setMeta = (name: string, content?: string) => {
      if (!content) return;
      let el = document.head.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
      if (!el) { el = document.createElement('meta'); el.name = name; document.head.appendChild(el); }
      el.content = content;
    };
    setMeta('description', description);
    if (canonical) {
      let link = document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
      if (!link) { link = document.createElement('link'); link.rel = 'canonical'; document.head.appendChild(link); }
      link.href = new URL(canonical, window.location.origin).href;
    }
  }, [title, description, canonical]);
  return null;
}
