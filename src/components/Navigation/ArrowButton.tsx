import type { ReactNode } from 'react';
export function ArrowButton({ children, className = '', href }: { children: ReactNode; className?: string; href?: string }) {
  const content = <>{children}<span className="flex size-8 items-center justify-center rounded-full bg-black/10 transition-transform duration-500 group-hover:rotate-45"><svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span></>;
  return href ? <a href={href} className={`group inline-flex items-center justify-center gap-3 rounded-full font-semibold transition-all duration-500 ${className}`}>{content}</a> : <button className={`group inline-flex items-center justify-center gap-3 rounded-full font-semibold transition-all duration-500 ${className}`}>{content}</button>;
}
