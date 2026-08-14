import { Link } from '@tanstack/react-router';
import { useEffect, useRef, useState } from 'react';
import { initHeader } from '../../features/navigation/header';

const links = [['Tours','/tours.html'],['Transport','/transport.html'],['About','/about.html'],['Gallery','/gallery.html'],['Blog','/blogs.html']] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLElement>(null);
  useEffect(() => initHeader(ref.current), []);
  return <header ref={ref} id="main-header" className="group/header absolute inset-x-0 top-0 z-50 px-4 py-4 md:px-8 lg:px-12">
    <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
      <Link to="/" className="flex items-center gap-3 md:gap-5 transition-opacity duration-300 hover:opacity-70">
        <img src="/assets/logo.svg" alt="Bali Bagus Journey" className="h-9 w-auto md:h-11" />
        <span className="hidden text-sm font-semibold leading-tight text-white md:block">Bali bagus Journey<br/><span className="font-normal">. Local Tour & Driver</span></span>
      </Link>
      <nav className="hidden items-center gap-1 lg:flex">
        {links.map(([label,to],i)=><Link key={label} to={to as any} className={`${i===0?'bg-white text-foreground':'text-white'} group-[.is-fixed]/header:text-foreground/80 group-[.is-fixed]/header:hover:text-foreground group-[.is-fixed]/header:hover:bg-card font-semibold px-4 py-2 rounded-full transition-colors duration-400 hover:bg-white/10`}>{label}</Link>)}
      </nav>
      <a href="/contact.html" className="hidden rounded-full bg-white px-5 py-3 text-sm font-semibold text-foreground transition-opacity hover:opacity-90 lg:inline-flex">Plan Your Trip <span className="ml-2">↗</span></a>
      <button id="mobile-menu-toggle" aria-label="Toggle menu" aria-expanded={open} onClick={()=>setOpen(v=>!v)} className={`relative flex size-11 items-center justify-center rounded-full bg-white text-foreground lg:hidden ${open?'is-active':''}`}>
        <span className={`hamburger-line hamburger-line-top ${open?'hamburger-open-top':''}`}/><span className={`hamburger-line hamburger-line-middle ${open?'hamburger-open-middle':''}`}/><span className={`hamburger-line hamburger-line-bottom ${open?'hamburger-open-bottom':''}`}/>
      </button>
    </div>
    <div id="mobile-menu" className={`${open?'':'pointer-events-none opacity-0 scale-95'} fixed inset-4 top-20 z-50 rounded-3xl bg-white p-6 shadow-2xl transition-all duration-300 lg:hidden`}>
      <nav id="mobile-nav-links" className="flex flex-col">
        {links.map(([label,to],i)=><Link key={label} to={to as any} onClick={()=>setOpen(false)} className="mobile-nav-item py-4 border-b border-gray-200 text-lg font-semibold hover:text-primary transition-colors">{label}</Link>)}
        <a href="/contact.html" onClick={()=>setOpen(false)} className="mt-6 rounded-full bg-primary px-5 py-3 text-center font-semibold text-white">Plan Your Trip ↗</a>
      </nav>
    </div>
  </header>;
}
