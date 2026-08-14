export function SiteHeader() {
  return (
<header id={"main-header"} className={"absolute inset-x-0 top-0 z-9999 group/header"}>
<div className={"2xl:container mx-auto px-5 md:px-12 lg:px-20 2xl:px-30 pt-6 md:pt-8 lg:pt-11.5 transition-all duration-500 group-[.is-fixed]/header:pt-4"}>
<div className={"flex justify-between items-center lg:grid lg:grid-cols-3 transition-all duration-500 group-[.is-fixed]/header:bg-white rounded-full group-[.is-fixed]/header:px-3 md:group-[.is-fixed]/header:px-6 lg:group-[.is-fixed]/header:pr-4 group-[.is-fixed]/header:py-3 border border-transparent group-[.is-fixed]/header:border-gray-200"}>
<div className={"flex justify-start"}>
<a href={"/index.html"} className={"flex items-center gap-3 md:gap-5 hover:opacity-70 transition-opacity duration-300"}>
<img src={"/assets/logo.svg"} alt={"logo"} className={"size-10 md:size-12"} />
<div className={"text-white transition-colors duration-500 group-[.is-fixed]/header:text-foreground"}>
<strong className={"font-bold text-sm md:text-lg leading-[1.4]"}>
            Bali bagus Journey<span className={"text-primary"}>.</span>
</strong>
<p className={"text-xs md:text-sm font-medium"}>Local Tour & Driver</p>
</div>
</a> </div>
<div className={"hidden lg:flex justify-center"}>
<nav className={"flex items-center gap-3 text-white"}>
<a className={"text-white hover:bg-white/10 group-[.is-fixed]/header:text-foreground/80 group-[.is-fixed]/header:hover:text-foreground group-[.is-fixed]/header:hover:bg-card font-semibold px-4 py-2 rounded-full transition-colors duration-400"} href={"/tours.html"}>
    Tours
</a>
<a className={"text-white hover:bg-white/10 group-[.is-fixed]/header:text-foreground/80 group-[.is-fixed]/header:hover:text-foreground group-[.is-fixed]/header:hover:bg-card font-semibold px-4 py-2 rounded-full transition-colors duration-400"} href={"/transport.html"}>
    Transport
</a>
<a className={"text-white hover:bg-white/10 group-[.is-fixed]/header:text-foreground/80 group-[.is-fixed]/header:hover:text-foreground group-[.is-fixed]/header:hover:bg-card font-semibold px-4 py-2 rounded-full transition-colors duration-400"} href={"/about.html"}>
    About
</a>
<a className={"text-white hover:bg-white/10 group-[.is-fixed]/header:text-foreground/80 group-[.is-fixed]/header:hover:text-foreground group-[.is-fixed]/header:hover:bg-card font-semibold px-4 py-2 rounded-full transition-colors duration-400"} href={"/gallery.html"}>
    Gallery
</a>
<a className={"text-white hover:bg-white/10 group-[.is-fixed]/header:text-foreground/80 group-[.is-fixed]/header:hover:text-foreground group-[.is-fixed]/header:hover:bg-card font-semibold px-4 py-2 rounded-full transition-colors duration-400"} href={"/blogs.html"}>
    Blog
</a>
</nav>
</div>
<div className={"hidden lg:flex justify-end"}>

<div className={"block group-[.is-fixed]/header:hidden"}>
<a href={"/contact.html"} className={"group inline-flex items-center justify-center gap-3 font-semibold rounded-full text-sm cursor-pointer transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary bg-white text-foreground hover:bg-white/90 pl-5 pr-2 py-2"}>
<div className={"relative overflow-hidden flex items-center justify-center"}>
<span className={"block transition-transform duration-500 group-hover:translate-y-[150%]"}>Plan Your Trip</span>
<span className={"absolute block transition-transform duration-500 -translate-y-[150%] group-hover:translate-y-0"}>Plan Your Trip</span>
</div>
<span className={"bg-primary text-white p-1.5 rounded-full relative overflow-hidden flex items-center justify-center"}>
<span className={"inline-flex [&>svg]:w-5 [&>svg]:h-5 transition-transform duration-500 group-hover:translate-x-[150%] group-hover:-translate-y-[150%]"}>
<svg xmlns={"http://www.w3.org/2000/svg"} viewBox={"0 0 24 24"} fill={"none"}><g id={"Arrow / Arrow_Up_Right_MD"}><path id={"Vector"} d={"M7 17L17 7M17 7H9M17 7V15"} stroke={"currentColor"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}></path></g></svg>
</span>
<span className={"absolute inline-flex [&>svg]:w-5 [&>svg]:h-5 transition-transform duration-500 -translate-x-[150%] translate-y-[150%] group-hover:translate-x-0 group-hover:translate-y-0"}>
<svg xmlns={"http://www.w3.org/2000/svg"} viewBox={"0 0 24 24"} fill={"none"}><g id={"Arrow / Arrow_Up_Right_MD"}><path id={"Vector"} d={"M7 17L17 7M17 7H9M17 7V15"} stroke={"currentColor"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}></path></g></svg>
</span>

<span className={"absolute top-0 -left-[100%] w-[50%] h-full bg-gradient-to-r from-transparent via-white/60 to-transparent skew-x-[-25deg] transition-transform duration-700 group-hover:translate-x-[400%] pointer-events-none z-10"}></span>
</span>
</a>
</div>

<div className={"hidden group-[.is-fixed]/header:block"}>
<a href={"/contact.html"} className={"group inline-flex items-center justify-center gap-3 font-semibold rounded-full text-sm cursor-pointer transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary bg-foreground text-background hover:bg-foreground/90 pl-5 pr-2 py-2"}>
<div className={"relative overflow-hidden flex items-center justify-center"}>
<span className={"block transition-transform duration-500 group-hover:translate-y-[150%]"}>Plan Your Trip</span>
<span className={"absolute block transition-transform duration-500 -translate-y-[150%] group-hover:translate-y-0"}>Plan Your Trip</span>
</div>
<span className={"bg-primary text-white p-1.5 rounded-full relative overflow-hidden flex items-center justify-center"}>
<span className={"inline-flex [&>svg]:w-5 [&>svg]:h-5 transition-transform duration-500 group-hover:translate-x-[150%] group-hover:-translate-y-[150%]"}>
<svg xmlns={"http://www.w3.org/2000/svg"} viewBox={"0 0 24 24"} fill={"none"}><g id={"Arrow / Arrow_Up_Right_MD"}><path id={"Vector"} d={"M7 17L17 7M17 7H9M17 7V15"} stroke={"currentColor"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}></path></g></svg>
</span>
<span className={"absolute inline-flex [&>svg]:w-5 [&>svg]:h-5 transition-transform duration-500 -translate-x-[150%] translate-y-[150%] group-hover:translate-x-0 group-hover:translate-y-0"}>
<svg xmlns={"http://www.w3.org/2000/svg"} viewBox={"0 0 24 24"} fill={"none"}><g id={"Arrow / Arrow_Up_Right_MD"}><path id={"Vector"} d={"M7 17L17 7M17 7H9M17 7V15"} stroke={"currentColor"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}></path></g></svg>
</span>

<span className={"absolute top-0 -left-[100%] w-[50%] h-full bg-gradient-to-r from-transparent via-white/60 to-transparent skew-x-[-25deg] transition-transform duration-700 group-hover:translate-x-[400%] pointer-events-none z-10"}></span>
</span>
</a>
</div>
</div>

<div className={"flex justify-end lg:hidden"}>
<button id={"mobile-menu-toggle"} aria-label={"Toggle mobile menu"} className={"group/toggle relative w-10 h-10 flex items-center justify-center text-white group-[.is-fixed]/header:text-foreground focus:outline-none transition-colors duration-300"}>
<div className={"flex flex-col justify-between w-5 h-4"}>
<span className={"block w-full h-[2px] bg-current transition-all duration-300 origin-center group-[.is-active]/toggle:rotate-45 group-[.is-active]/toggle:translate-y-[7px]"}></span>
<span className={"block w-full h-[2px] bg-current transition-all duration-300 group-[.is-active]/toggle:opacity-0 group-[.is-active]/toggle:translate-x-2"}></span>
<span className={"block w-full h-[2px] bg-current transition-all duration-300 origin-center group-[.is-active]/toggle:-rotate-45 group-[.is-active]/toggle:-translate-y-[7px]"}></span>
</div>
</button>
</div>
</div>
</div>

<div id={"mobile-menu"} className={"fixed top-24 md:top-26 right-5 left-5 md:left-auto md:right-12 md:w-96 bg-white/95 backdrop-blur-xl z-[1000] flex flex-col p-6 md:p-8 rounded-2xl opacity-0 pointer-events-none lg:hidden border border-gray-200"}>
<nav id={"mobile-nav-links"} className={"text-base flex flex-col text-foreground font-semibold mb-8"}>
<a href={"/tours.html"} className={"mobile-nav-item opacity-0 pb-4 border-b border-gray-200 translate-y-4 hover:text-primary transition-colors"}>Tours</a>
<a href={"/transport.html"} className={"mobile-nav-item opacity-0 py-4 border-b border-gray-200 translate-y-4 hover:text-primary transition-colors"}>Transport</a>
<a href={"/about.html"} className={"mobile-nav-item opacity-0 py-4 border-b border-gray-200 translate-y-4 hover:text-primary transition-colors"}>About</a>
<a href={"/gallery.html"} className={"mobile-nav-item opacity-0 py-4 border-b border-gray-200 translate-y-4 hover:text-primary transition-colors"}>Gallery</a>
<a href={"/blogs.html"} className={"mobile-nav-item opacity-0 py-4 border-b border-gray-200 translate-y-4 hover:text-primary transition-colors"}>Blog</a>
</nav>
<div className={"mobile-nav-item opacity-0 translate-y-4"}>
<a href={"/contact.html"} className={"group inline-flex items-center justify-center gap-3 font-semibold rounded-full text-sm cursor-pointer transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary bg-primary text-white hover:bg-primary/90 w-fit pl-5 pr-2 py-2.5 md:py-3 text-base"}>
<div className={"relative overflow-hidden flex items-center justify-center"}>
<span className={"block transition-transform duration-500 group-hover:translate-y-[150%]"}>Plan Your Trip</span>
<span className={"absolute block transition-transform duration-500 -translate-y-[150%] group-hover:translate-y-0"}>Plan Your Trip</span>
</div>
<span className={"bg-white text-primary p-1.5 rounded-full relative overflow-hidden flex items-center justify-center"}>
<span className={"inline-flex [&>svg]:w-5 [&>svg]:h-5 transition-transform duration-500 group-hover:translate-x-[150%] group-hover:-translate-y-[150%]"}>
<svg xmlns={"http://www.w3.org/2000/svg"} viewBox={"0 0 24 24"} fill={"none"}><g id={"Arrow / Arrow_Up_Right_MD"}><path id={"Vector"} d={"M7 17L17 7M17 7H9M17 7V15"} stroke={"currentColor"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}></path></g></svg>
</span>
<span className={"absolute inline-flex [&>svg]:w-5 [&>svg]:h-5 transition-transform duration-500 -translate-x-[150%] translate-y-[150%] group-hover:translate-x-0 group-hover:translate-y-0"}>
<svg xmlns={"http://www.w3.org/2000/svg"} viewBox={"0 0 24 24"} fill={"none"}><g id={"Arrow / Arrow_Up_Right_MD"}><path id={"Vector"} d={"M7 17L17 7M17 7H9M17 7V15"} stroke={"currentColor"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}></path></g></svg>
</span>

<span className={"absolute top-0 -left-[100%] w-[50%] h-full bg-gradient-to-r from-transparent via-white/60 to-transparent skew-x-[-25deg] transition-transform duration-700 group-hover:translate-x-[400%] pointer-events-none z-10"}></span>
</span>
</a>
</div>
</div>
</header>
  )
}
