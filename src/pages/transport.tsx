import { PageShell } from '../components/PageShell'

export function TransportPage() {
  return (
    <PageShell>
      

<main className={"min-h-dvh"}>
<section id={"headline"} className={"relative min-h-[60dvh] md:min-h-[45dvh] lg:min-h-[68dvh] 2xl:min-h-[52dvh] 2xl:max-h-[52dvh] flex items-end 2xl:container mx-auto"}>
<div className={"absolute overflow-hidden inset-0 lg:inset-5 lg:top-4 lg:rounded-3xl 2xl:inset-x-0 lg:bottom-auto lg:h-[68dvh] 2xl:max-h-[50dvh]"}>
<div className={"gsap-tours-overlay opacity-0 absolute z-10 h-full w-full lg:rounded-3xl bg-foreground/50 lg:bg-transparent lg:bg-linear-to-b from-0% from-foreground/40 via-40% via-foreground/0 to-80% to-foreground/80 lg:to-foreground/70"}></div>
<img src={"assets/transport/headline2.html"} alt={""} fetchpriority={"high"} decoding={"async"} className={"gsap-tours-bg opacity-0 scale-105 absolute inset-0 w-full h-full object-cover lg:rounded-3xl"} />
</div>
<div className={"px-5 md:px-12 lg:px-20 2xl:px-30 pb-12 md:pb-16 relative z-20 w-full"}>
<div className={"text-center flex flex-col items-center"}>
<div className={"gsap-tours-badge opacity-0 translate-y-16 flex items-center gap-2 w-fit bg-white border border-border rounded-full px-2.5 pr-3 py-2 mb-5 lg:mb-6"}>
<div className={"size-2.5 bg-primary rounded-full"}></div>
<strong className={"font-medium text-sm md:text-base text-foreground"}>Transportation Service</strong>
</div>
<h1 className={"gsap-tours-title opacity-0 translate-y-16 text-3xl md:text-5xl lg:text-[52px] w-full mb-4 font-semibold text-white leading-snug lg:leading-[1.2]"}>
                Private Driver Service <br /> for Every Bali Trip
            </h1>
<p className={"gsap-tours-text opacity-0 translate-y-16 text-sm text-white w-full md:w-[72%] lg:w-[34%] leading-relaxed"}>
                Choose from our fleet of comfortable vehicles, perfect for private tours, airport transfers, and transportation across Bali.
            </p>
</div>
</div>
</section>
<section id={"transport-vehicle"} className={"2xl:container mx-auto px-5 md:px-12 lg:px-20 2xl:px-30 py-15 2xl:py-20"}>
<div className={"flex flex-col items-center w-full mb-10"}>
<h3 className={"gsap-transport-filter-heading opacity-0 translate-y-16 text-lg md:text-xl font-semibold text-foreground mb-6"}>
            Filter Transports by:
        </h3>
<div className={"relative w-full max-w-full"}>
<div className={"filter-tabs w-full flex flex-nowrap md:flex-wrap items-center justify-start md:justify-center gap-2.5 md:gap-4 overflow-x-auto md:overflow-visible pb-2 md:pb-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"}>
<button data-filter={"all"} className={"gsap-transport-filter-tab shrink-0 opacity-0 scale-50 translate-y-8 filter-tab-btn-transport flex items-center gap-2 md:gap-3 bg-foreground border border-border text-background px-1.5 md:px-2 pr-4 md:pr-5 py-1.5 md:py-2 rounded-full transition-all duration-300"}>
<div className={"bg-primary size-7 md:size-8 rounded-full flex items-center justify-center text-white shrink-0"}>
<svg className={"size-3.5 md:size-4"} viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}>
<line x1={"8"} y1={"6"} x2={"21"} y2={"6"}></line>
<line x1={"8"} y1={"12"} x2={"21"} y2={"12"}></line>
<line x1={"8"} y1={"18"} x2={"21"} y2={"18"}></line>
<line x1={"3"} y1={"6"} x2={"3.01"} y2={"6"}></line>
<line x1={"3"} y1={"12"} x2={"3.01"} y2={"12"}></line>
<line x1={"3"} y1={"18"} x2={"3.01"} y2={"18"}></line>
</svg>
</div>
<span className={"text-xs md:text-sm font-semibold"}>All Transports</span>
</button>
<button data-filter={"standard"} className={"gsap-transport-filter-tab shrink-0 opacity-0 scale-50 translate-y-8 filter-tab-btn-transport flex items-center gap-2 md:gap-3 bg-white border border-border text-foreground px-1.5 md:px-2 pr-4 md:pr-5 py-1.5 md:py-2 rounded-full transition-all duration-300"}>
<div className={"bg-primary p-1.5 rounded-full flex items-center justify-center text-white shrink-0 overflow-hidden"}>
<img src={"storage/category-icons/01KZW9HW6P26VH4P3VNG654PXP.html"} className={"size-5 object-cover"} alt={"Standard Icon"} /></div>
<span className={"text-xs md:text-sm font-semibold"}>Standard</span>
</button>
<button data-filter={"mvp-van"} className={"gsap-transport-filter-tab shrink-0 opacity-0 scale-50 translate-y-8 filter-tab-btn-transport flex items-center gap-2 md:gap-3 bg-white border border-border text-foreground px-1.5 md:px-2 pr-4 md:pr-5 py-1.5 md:py-2 rounded-full transition-all duration-300"}>
<div className={"bg-primary p-1.5 rounded-full flex items-center justify-center text-white shrink-0 overflow-hidden"}>
<img src={"storage/category-icons/01KZW9JBK18JK2CTC0C8639Q3M.html"} className={"size-5 object-cover"} alt={"MVP / Van Icon"} /></div>
<span className={"text-xs md:text-sm font-semibold"}>MVP / Van</span>
</button>
<button data-filter={"minibus"} className={"gsap-transport-filter-tab shrink-0 opacity-0 scale-50 translate-y-8 filter-tab-btn-transport flex items-center gap-2 md:gap-3 bg-white border border-border text-foreground px-1.5 md:px-2 pr-4 md:pr-5 py-1.5 md:py-2 rounded-full transition-all duration-300"}>
<div className={"bg-primary p-1.5 rounded-full flex items-center justify-center text-white shrink-0 overflow-hidden"}>
<img src={"storage/category-icons/01KZW9JQH1KVF4W1CN1N4ZQKHF.html"} className={"size-5 object-cover"} alt={"Minibus Icon"} />
</div>
<span className={"text-xs md:text-sm font-semibold"}>Minibus</span>
</button>
<button data-filter={"luxury"} className={"gsap-transport-filter-tab shrink-0 opacity-0 scale-50 translate-y-8 filter-tab-btn-transport flex items-center gap-2 md:gap-3 bg-white border border-border text-foreground px-1.5 md:px-2 pr-4 md:pr-5 py-1.5 md:py-2 rounded-full transition-all duration-300"}>
<div className={"bg-primary p-1.5 rounded-full flex items-center justify-center text-white shrink-0 overflow-hidden"}>
<img src={"storage/category-icons/01KZW9K4BNC3MHHKCANZ7DJRMV.html"} className={"size-5 object-cover"} alt={"Luxury Icon"} />
</div>
<span className={"text-xs md:text-sm font-semibold"}>Luxury</span>
</button>
</div>
<div className={"absolute top-0 right-0 bottom-0 w-16 bg-gradient-to-l from-background to-transparent md:hidden pointer-events-none z-10"}></div>
</div>
</div>
<div id={"transport-grid"} className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-5"}>
<div className={"transport-item"} data-category={"standard"}>
<div className={"gsap-transport-card opacity-0 translate-y-16 bg-card rounded-2xl p-4 flex flex-col h-full"}>
<a href={"transport/toyota-avanza.html"} className={"h-36 lg:h-52 relative rounded-2xl overflow-hidden mb-5 block group"}>
<img src={"storage/vehicle-covers/01KZWBPG3W5BK786SEJV9VSCTC.webp"} alt={"Toyota Avanza - Premium transport by Bali Bagus Journey"} loading={"lazy"} decoding={"async"} className={"h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"} />
</a>
<div className={"flex flex-col grow md:px-4"}>
<h4 className={"text-lg lg:text-xl font-semibold text-foreground mb-2 hover:text-primary transition-colors"}>
<a href={"transport/toyota-avanza.html"}>
                    Toyota Avanza
                </a>
</h4>
<div className={"flex items-center gap-4 text-text-label-secondary pb-3 mb-3 border-b border-border"}>
<div className={"flex items-center gap-1.5"}>
<svg className={"feather feather-users"} xmlns={"http://www.w3.org/2000/svg"} width={"24"} height={"24"} viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}><path d={"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}></path><circle cx={"9"} cy={"7"} r={"4"}></circle><path d={"M23 21v-2a4 4 0 0 0-3-3.87"}></path><path d={"M16 3.13a4 4 0 0 1 0 7.75"}></path></svg> <span className={"text-sm lg:text-base font-medium"}>6 Pax</span>
</div>
<div className={"flex items-center gap-1.5"}>
<svg className={"feather feather-briefcase"} xmlns={"http://www.w3.org/2000/svg"} width={"24"} height={"24"} viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}><rect x={"2"} y={"7"} width={"20"} height={"14"} rx={"2"} ry={"2"}></rect><path d={"M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"}></path></svg> <span className={"text-sm lg:text-base font-medium"}>5 Bags</span>
</div>
</div>
<div className={"flex justify-between items-center mt-auto"}>
<h5 className={"text-xl lg:text-2xl font-semibold text-foreground"}>$55</h5>
<a href={"transport/toyota-avanza.html"} className={"group inline-flex items-center justify-center gap-3 font-semibold rounded-full text-sm cursor-pointer transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary bg-white text-foreground hover:bg-white/90 pl-4 pr-2 py-1.5 lg:pl-5 lg:py-2 w-fit"} aria-label={"View details of Toyota Avanza"}>
<div className={"relative overflow-hidden flex items-center justify-center"}>
<span className={"block transition-transform duration-500 group-hover:translate-y-[150%]"}>View Detail</span>
<span className={"absolute block transition-transform duration-500 -translate-y-[150%] group-hover:translate-y-0"}>View Detail</span>
</div>
<span className={"bg-primary text-white p-1.5 rounded-full relative overflow-hidden flex items-center justify-center"}>
<span className={"inline-flex [&>svg]:w-5 [&>svg]:h-5 transition-transform duration-500 group-hover:translate-x-[150%] group-hover:-translate-y-[150%]"}>
<svg aria-hidden={"true"} className={"size-4 lg:size-5"} xmlns={"http://www.w3.org/2000/svg"} viewBox={"0 0 24 24"} fill={"none"}><g id={"Arrow / Arrow_Up_Right_MD"}><path id={"Vector"} d={"M7 17L17 7M17 7H9M17 7V15"} stroke={"currentColor"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}></path></g></svg>
</span>
<span className={"absolute inline-flex [&>svg]:w-5 [&>svg]:h-5 transition-transform duration-500 -translate-x-[150%] translate-y-[150%] group-hover:translate-x-0 group-hover:translate-y-0"}>
<svg aria-hidden={"true"} className={"size-4 lg:size-5"} xmlns={"http://www.w3.org/2000/svg"} viewBox={"0 0 24 24"} fill={"none"}><g id={"Arrow / Arrow_Up_Right_MD"}><path id={"Vector"} d={"M7 17L17 7M17 7H9M17 7V15"} stroke={"currentColor"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}></path></g></svg>
</span>

<span className={"absolute top-0 -left-[100%] w-[50%] h-full bg-gradient-to-r from-transparent via-white/60 to-transparent skew-x-[-25deg] transition-transform duration-700 group-hover:translate-x-[400%] pointer-events-none z-10"}></span>
</span>
</a>
</div>
</div>
</div>
</div>
<div className={"transport-item"} data-category={"mvp-van"}>
<div className={"gsap-transport-card opacity-0 translate-y-16 bg-card rounded-2xl p-4 flex flex-col h-full"}>
<a href={"transport/toyota-innova-reborn.html"} className={"h-36 lg:h-52 relative rounded-2xl overflow-hidden mb-5 block group"}>
<img src={"storage/vehicle-covers/01KZWBQD8WNF5VF8BQ5HACJXEJ.webp"} alt={"Toyota Innova Reborn - Premium transport by Bali Bagus Journey"} loading={"lazy"} decoding={"async"} className={"h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"} />
</a>
<div className={"flex flex-col grow md:px-4"}>
<h4 className={"text-lg lg:text-xl font-semibold text-foreground mb-2 hover:text-primary transition-colors"}>
<a href={"transport/toyota-innova-reborn.html"}>
                    Toyota Innova Reborn
                </a>
</h4>
<div className={"flex items-center gap-4 text-text-label-secondary pb-3 mb-3 border-b border-border"}>
<div className={"flex items-center gap-1.5"}>
<svg className={"feather feather-users"} xmlns={"http://www.w3.org/2000/svg"} width={"24"} height={"24"} viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}><path d={"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}></path><circle cx={"9"} cy={"7"} r={"4"}></circle><path d={"M23 21v-2a4 4 0 0 0-3-3.87"}></path><path d={"M16 3.13a4 4 0 0 1 0 7.75"}></path></svg> <span className={"text-sm lg:text-base font-medium"}>7 Pax</span>
</div>
<div className={"flex items-center gap-1.5"}>
<svg className={"feather feather-briefcase"} xmlns={"http://www.w3.org/2000/svg"} width={"24"} height={"24"} viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}><rect x={"2"} y={"7"} width={"20"} height={"14"} rx={"2"} ry={"2"}></rect><path d={"M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"}></path></svg> <span className={"text-sm lg:text-base font-medium"}>6 Bags</span>
</div>
</div>
<div className={"flex justify-between items-center mt-auto"}>
<h5 className={"text-xl lg:text-2xl font-semibold text-foreground"}>$55</h5>
<a href={"transport/toyota-innova-reborn.html"} className={"group inline-flex items-center justify-center gap-3 font-semibold rounded-full text-sm cursor-pointer transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary bg-white text-foreground hover:bg-white/90 pl-4 pr-2 py-1.5 lg:pl-5 lg:py-2 w-fit"} aria-label={"View details of Toyota Innova Reborn"}>
<div className={"relative overflow-hidden flex items-center justify-center"}>
<span className={"block transition-transform duration-500 group-hover:translate-y-[150%]"}>View Detail</span>
<span className={"absolute block transition-transform duration-500 -translate-y-[150%] group-hover:translate-y-0"}>View Detail</span>
</div>
<span className={"bg-primary text-white p-1.5 rounded-full relative overflow-hidden flex items-center justify-center"}>
<span className={"inline-flex [&>svg]:w-5 [&>svg]:h-5 transition-transform duration-500 group-hover:translate-x-[150%] group-hover:-translate-y-[150%]"}>
<svg aria-hidden={"true"} className={"size-4 lg:size-5"} xmlns={"http://www.w3.org/2000/svg"} viewBox={"0 0 24 24"} fill={"none"}><g id={"Arrow / Arrow_Up_Right_MD"}><path id={"Vector"} d={"M7 17L17 7M17 7H9M17 7V15"} stroke={"currentColor"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}></path></g></svg>
</span>
<span className={"absolute inline-flex [&>svg]:w-5 [&>svg]:h-5 transition-transform duration-500 -translate-x-[150%] translate-y-[150%] group-hover:translate-x-0 group-hover:translate-y-0"}>
<svg aria-hidden={"true"} className={"size-4 lg:size-5"} xmlns={"http://www.w3.org/2000/svg"} viewBox={"0 0 24 24"} fill={"none"}><g id={"Arrow / Arrow_Up_Right_MD"}><path id={"Vector"} d={"M7 17L17 7M17 7H9M17 7V15"} stroke={"currentColor"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}></path></g></svg>
</span>

<span className={"absolute top-0 -left-[100%] w-[50%] h-full bg-gradient-to-r from-transparent via-white/60 to-transparent skew-x-[-25deg] transition-transform duration-700 group-hover:translate-x-[400%] pointer-events-none z-10"}></span>
</span>
</a>
</div>
</div>
</div>
</div>
<div className={"transport-item"} data-category={"minibus"}>
<div className={"gsap-transport-card opacity-0 translate-y-16 bg-card rounded-2xl p-4 flex flex-col h-full"}>
<a href={"transport/toyota-hi-ace.html"} className={"h-36 lg:h-52 relative rounded-2xl overflow-hidden mb-5 block group"}>
<img src={"storage/vehicle-covers/01KZWBARRNBJ8G3KGBC5GENQ6Z.webp"} alt={"Toyota Hi-Ace - Premium transport by Bali Bagus Journey"} loading={"lazy"} decoding={"async"} className={"h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"} />
</a>
<div className={"flex flex-col grow md:px-4"}>
<h4 className={"text-lg lg:text-xl font-semibold text-foreground mb-2 hover:text-primary transition-colors"}>
<a href={"transport/toyota-hi-ace.html"}>
                    Toyota Hi-Ace
                </a>
</h4>
<div className={"flex items-center gap-4 text-text-label-secondary pb-3 mb-3 border-b border-border"}>
<div className={"flex items-center gap-1.5"}>
<svg className={"feather feather-users"} xmlns={"http://www.w3.org/2000/svg"} width={"24"} height={"24"} viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}><path d={"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}></path><circle cx={"9"} cy={"7"} r={"4"}></circle><path d={"M23 21v-2a4 4 0 0 0-3-3.87"}></path><path d={"M16 3.13a4 4 0 0 1 0 7.75"}></path></svg> <span className={"text-sm lg:text-base font-medium"}>15 Pax</span>
</div>
<div className={"flex items-center gap-1.5"}>
<svg className={"feather feather-briefcase"} xmlns={"http://www.w3.org/2000/svg"} width={"24"} height={"24"} viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}><rect x={"2"} y={"7"} width={"20"} height={"14"} rx={"2"} ry={"2"}></rect><path d={"M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"}></path></svg> <span className={"text-sm lg:text-base font-medium"}>10 Bags</span>
</div>
</div>
<div className={"flex justify-between items-center mt-auto"}>
<h5 className={"text-xl lg:text-2xl font-semibold text-foreground"}>$55</h5>
<a href={"transport/toyota-hi-ace.html"} className={"group inline-flex items-center justify-center gap-3 font-semibold rounded-full text-sm cursor-pointer transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary bg-white text-foreground hover:bg-white/90 pl-4 pr-2 py-1.5 lg:pl-5 lg:py-2 w-fit"} aria-label={"View details of Toyota Hi-Ace"}>
<div className={"relative overflow-hidden flex items-center justify-center"}>
<span className={"block transition-transform duration-500 group-hover:translate-y-[150%]"}>View Detail</span>
<span className={"absolute block transition-transform duration-500 -translate-y-[150%] group-hover:translate-y-0"}>View Detail</span>
</div>
<span className={"bg-primary text-white p-1.5 rounded-full relative overflow-hidden flex items-center justify-center"}>
<span className={"inline-flex [&>svg]:w-5 [&>svg]:h-5 transition-transform duration-500 group-hover:translate-x-[150%] group-hover:-translate-y-[150%]"}>
<svg aria-hidden={"true"} className={"size-4 lg:size-5"} xmlns={"http://www.w3.org/2000/svg"} viewBox={"0 0 24 24"} fill={"none"}><g id={"Arrow / Arrow_Up_Right_MD"}><path id={"Vector"} d={"M7 17L17 7M17 7H9M17 7V15"} stroke={"currentColor"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}></path></g></svg>
</span>
<span className={"absolute inline-flex [&>svg]:w-5 [&>svg]:h-5 transition-transform duration-500 -translate-x-[150%] translate-y-[150%] group-hover:translate-x-0 group-hover:translate-y-0"}>
<svg aria-hidden={"true"} className={"size-4 lg:size-5"} xmlns={"http://www.w3.org/2000/svg"} viewBox={"0 0 24 24"} fill={"none"}><g id={"Arrow / Arrow_Up_Right_MD"}><path id={"Vector"} d={"M7 17L17 7M17 7H9M17 7V15"} stroke={"currentColor"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}></path></g></svg>
</span>

<span className={"absolute top-0 -left-[100%] w-[50%] h-full bg-gradient-to-r from-transparent via-white/60 to-transparent skew-x-[-25deg] transition-transform duration-700 group-hover:translate-x-[400%] pointer-events-none z-10"}></span>
</span>
</a>
</div>
</div>
</div>
</div>
<div className={"transport-item"} data-category={"luxury"}>
<div className={"gsap-transport-card opacity-0 translate-y-16 bg-card rounded-2xl p-4 flex flex-col h-full"}>
<a href={"transport/toyota-alphard.html"} className={"h-36 lg:h-52 relative rounded-2xl overflow-hidden mb-5 block group"}>
<img src={"storage/vehicle-covers/01KZWBNNJKSZ99WWG7WSKFZKJ8.webp"} alt={"Toyota Alphard - Premium transport by Bali Bagus Journey"} loading={"lazy"} decoding={"async"} className={"h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"} />
</a>
<div className={"flex flex-col grow md:px-4"}>
<h4 className={"text-lg lg:text-xl font-semibold text-foreground mb-2 hover:text-primary transition-colors"}>
<a href={"transport/toyota-alphard.html"}>
                    Toyota Alphard
                </a>
</h4>
<div className={"flex items-center gap-4 text-text-label-secondary pb-3 mb-3 border-b border-border"}>
<div className={"flex items-center gap-1.5"}>
<svg className={"feather feather-users"} xmlns={"http://www.w3.org/2000/svg"} width={"24"} height={"24"} viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}><path d={"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}></path><circle cx={"9"} cy={"7"} r={"4"}></circle><path d={"M23 21v-2a4 4 0 0 0-3-3.87"}></path><path d={"M16 3.13a4 4 0 0 1 0 7.75"}></path></svg> <span className={"text-sm lg:text-base font-medium"}>5 Pax</span>
</div>
<div className={"flex items-center gap-1.5"}>
<svg className={"feather feather-briefcase"} xmlns={"http://www.w3.org/2000/svg"} width={"24"} height={"24"} viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}><rect x={"2"} y={"7"} width={"20"} height={"14"} rx={"2"} ry={"2"}></rect><path d={"M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"}></path></svg> <span className={"text-sm lg:text-base font-medium"}>4 Bags</span>
</div>
</div>
<div className={"flex justify-between items-center mt-auto"}>
<h5 className={"text-xl lg:text-2xl font-semibold text-foreground"}>$55</h5>
<a href={"transport/toyota-alphard.html"} className={"group inline-flex items-center justify-center gap-3 font-semibold rounded-full text-sm cursor-pointer transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary bg-white text-foreground hover:bg-white/90 pl-4 pr-2 py-1.5 lg:pl-5 lg:py-2 w-fit"} aria-label={"View details of Toyota Alphard"}>
<div className={"relative overflow-hidden flex items-center justify-center"}>
<span className={"block transition-transform duration-500 group-hover:translate-y-[150%]"}>View Detail</span>
<span className={"absolute block transition-transform duration-500 -translate-y-[150%] group-hover:translate-y-0"}>View Detail</span>
</div>
<span className={"bg-primary text-white p-1.5 rounded-full relative overflow-hidden flex items-center justify-center"}>
<span className={"inline-flex [&>svg]:w-5 [&>svg]:h-5 transition-transform duration-500 group-hover:translate-x-[150%] group-hover:-translate-y-[150%]"}>
<svg aria-hidden={"true"} className={"size-4 lg:size-5"} xmlns={"http://www.w3.org/2000/svg"} viewBox={"0 0 24 24"} fill={"none"}><g id={"Arrow / Arrow_Up_Right_MD"}><path id={"Vector"} d={"M7 17L17 7M17 7H9M17 7V15"} stroke={"currentColor"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}></path></g></svg>
</span>
<span className={"absolute inline-flex [&>svg]:w-5 [&>svg]:h-5 transition-transform duration-500 -translate-x-[150%] translate-y-[150%] group-hover:translate-x-0 group-hover:translate-y-0"}>
<svg aria-hidden={"true"} className={"size-4 lg:size-5"} xmlns={"http://www.w3.org/2000/svg"} viewBox={"0 0 24 24"} fill={"none"}><g id={"Arrow / Arrow_Up_Right_MD"}><path id={"Vector"} d={"M7 17L17 7M17 7H9M17 7V15"} stroke={"currentColor"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}></path></g></svg>
</span>

<span className={"absolute top-0 -left-[100%] w-[50%] h-full bg-gradient-to-r from-transparent via-white/60 to-transparent skew-x-[-25deg] transition-transform duration-700 group-hover:translate-x-[400%] pointer-events-none z-10"}></span>
</span>
</a>
</div>
</div>
</div>
</div>
<div className={"transport-item"} data-category={"luxury"}>
<div className={"gsap-transport-card opacity-0 translate-y-16 bg-card rounded-2xl p-4 flex flex-col h-full"}>
<a href={"transport/toyota-fortuner.html"} className={"h-36 lg:h-52 relative rounded-2xl overflow-hidden mb-5 block group"}>
<img src={"storage/vehicle-covers/01KZWBXF79WXRBKVSTPCR6K1TJ.webp"} alt={"Toyota Fortuner - Premium transport by Bali Bagus Journey"} loading={"lazy"} decoding={"async"} className={"h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"} />
</a>
<div className={"flex flex-col grow md:px-4"}>
<h4 className={"text-lg lg:text-xl font-semibold text-foreground mb-2 hover:text-primary transition-colors"}>
<a href={"transport/toyota-fortuner.html"}>
                    Toyota Fortuner
                </a>
</h4>
<div className={"flex items-center gap-4 text-text-label-secondary pb-3 mb-3 border-b border-border"}>
<div className={"flex items-center gap-1.5"}>
<svg className={"feather feather-users"} xmlns={"http://www.w3.org/2000/svg"} width={"24"} height={"24"} viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}><path d={"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}></path><circle cx={"9"} cy={"7"} r={"4"}></circle><path d={"M23 21v-2a4 4 0 0 0-3-3.87"}></path><path d={"M16 3.13a4 4 0 0 1 0 7.75"}></path></svg> <span className={"text-sm lg:text-base font-medium"}>6 Pax</span>
</div>
<div className={"flex items-center gap-1.5"}>
<svg className={"feather feather-briefcase"} xmlns={"http://www.w3.org/2000/svg"} width={"24"} height={"24"} viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}><rect x={"2"} y={"7"} width={"20"} height={"14"} rx={"2"} ry={"2"}></rect><path d={"M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"}></path></svg> <span className={"text-sm lg:text-base font-medium"}>5 Bags</span>
</div>
</div>
<div className={"flex justify-between items-center mt-auto"}>
<h5 className={"text-xl lg:text-2xl font-semibold text-foreground"}>$55</h5>
<a href={"transport/toyota-fortuner.html"} className={"group inline-flex items-center justify-center gap-3 font-semibold rounded-full text-sm cursor-pointer transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary bg-white text-foreground hover:bg-white/90 pl-4 pr-2 py-1.5 lg:pl-5 lg:py-2 w-fit"} aria-label={"View details of Toyota Fortuner"}>
<div className={"relative overflow-hidden flex items-center justify-center"}>
<span className={"block transition-transform duration-500 group-hover:translate-y-[150%]"}>View Detail</span>
<span className={"absolute block transition-transform duration-500 -translate-y-[150%] group-hover:translate-y-0"}>View Detail</span>
</div>
<span className={"bg-primary text-white p-1.5 rounded-full relative overflow-hidden flex items-center justify-center"}>
<span className={"inline-flex [&>svg]:w-5 [&>svg]:h-5 transition-transform duration-500 group-hover:translate-x-[150%] group-hover:-translate-y-[150%]"}>
<svg aria-hidden={"true"} className={"size-4 lg:size-5"} xmlns={"http://www.w3.org/2000/svg"} viewBox={"0 0 24 24"} fill={"none"}><g id={"Arrow / Arrow_Up_Right_MD"}><path id={"Vector"} d={"M7 17L17 7M17 7H9M17 7V15"} stroke={"currentColor"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}></path></g></svg>
</span>
<span className={"absolute inline-flex [&>svg]:w-5 [&>svg]:h-5 transition-transform duration-500 -translate-x-[150%] translate-y-[150%] group-hover:translate-x-0 group-hover:translate-y-0"}>
<svg aria-hidden={"true"} className={"size-4 lg:size-5"} xmlns={"http://www.w3.org/2000/svg"} viewBox={"0 0 24 24"} fill={"none"}><g id={"Arrow / Arrow_Up_Right_MD"}><path id={"Vector"} d={"M7 17L17 7M17 7H9M17 7V15"} stroke={"currentColor"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}></path></g></svg>
</span>

<span className={"absolute top-0 -left-[100%] w-[50%] h-full bg-gradient-to-r from-transparent via-white/60 to-transparent skew-x-[-25deg] transition-transform duration-700 group-hover:translate-x-[400%] pointer-events-none z-10"}></span>
</span>
</a>
</div>
</div>
</div>
</div>
</div>
</section>
</main>
 
    </PageShell>
  )
}
