import { PageShell } from '../components/PageShell'

export function HomePage() {
  return (
    <PageShell>
      

<main className={"min-h-dvh"}>
<section id={"home"} className={"relative min-h-dvh 2xl:min-h-[85dvh] 2xl:max-h-[85dvh] flex items-end 2xl:container mx-auto pb-10 lg:pb-0"}>
<div className={"absolute overflow-hidden inset-0 lg:inset-5 lg:top-4 2xl:inset-x-0 lg:bottom-auto lg:h-[96dvh] 2xl:max-h-[85dvh] lg:rounded-3xl"}>
<div className={"gsap-hero-overlay opacity-0 absolute z-10 h-full w-full lg:rounded-3xl bg-foreground/50 lg:bg-transparent lg:bg-linear-to-b from-0% from-foreground/40 via-40% via-foreground/0 to-80% to-foreground/80 lg:to-foreground/70"}></div>
<img src={"assets/home/hero.webp"} alt={"Scenic view of Bali - Book trusted local drivers and private tours"} fetchpriority={"high"} decoding={"async"} className={"gsap-hero-bg opacity-0 scale-105 absolute inset-0 w-full h-full object-cover lg:rounded-3xl"} />
</div>
<div className={"px-5 md:px-12 lg:px-20 2xl:px-30 pt-32 lg:py-14 relative z-20 grid grid-cols-1 lg:grid-cols-12 items-end gap-10 lg:gap-0 w-full"}>
<div className={"col-span-1 lg:col-span-7"}>
<div className={"gsap-hero-badge opacity-0 translate-y-16 flex items-center gap-2 mb-6 w-fit bg-white rounded-full px-2.5 pr-3 py-2"}>
<div className={"size-2.5 bg-primary rounded-full"}></div>
<strong className={"font-medium text-xs md:text-base"}>Trusted Bali Local Driver</strong>
</div>
<div>
<h1 className={"gsap-hero-title opacity-0 translate-y-16 text-4xl md:text-6xl text-white font-bold leading-[1.18] mb-4 lg:mb-5 w-full md:w-[90%]"}>
                    Book Trusted Bali Tours & Private Transport with Local Experts
                </h1>
<p className={"gsap-hero-text opacity-0 translate-y-16 md:leading-relaxed text-sm md:text-base w-full md:w-[67%] text-white"}>
                    Explore the beauty of Bali with personalized tour packages, private drivers, and reliable airport transfers. Choose your travel date, group size, and preferred service to get started in minutes.
                </p>
</div>
</div>
<div className={"hidden lg:block lg:col-span-1"}></div>
<div className={"col-span-1 lg:col-span-4 w-full"}>
<div className={"gsap-hero-form opacity-0 translate-y-16 bg-white rounded-2xl p-5 md:p-6 w-full shadow-2xl"}>
<h3 className={"text-xl font-semibold mb-4 lg:mb-3"}>Plan Your Bali Trip</h3>
<form action={"https://balibagusjourney.com/search"} method={"POST"}>
<input type={"hidden"} name={"_token"} value={"p9EeOjxwg960RtZ8ZwZX0KYViaykZEegFe54xjQH"} autoComplete={"off"} /> 
<div className={"flex p-1.5 bg-card rounded-full mb-5"} role={"radiogroup"} aria-label={"Service Type"}>
<label className={"flex-1 relative cursor-pointer group"}>
<input type={"radio"} id={"radio-tours"} name={"service_type"} value={"tours"} className={"sr-only"} checked={""} />
<div className={"rounded-full py-3.5 flex items-center justify-center gap-2.5 transition-all duration-300 group-has-[:checked]:bg-white"}>
<span className={"w-3 h-3 bg-primary rounded-full opacity-0 group-has-[:checked]:opacity-100 transition-opacity"}></span>
<span className={"hidden lg:block font-semibold text-text-label-secondary group-has-[:checked]:text-foreground text-sm transition-colors"}>Tours & Activities</span>
<span className={"lg:hidden font-semibold text-text-label-secondary group-has-[:checked]:text-foreground text-sm transition-colors"}>Tours</span>
</div>
</label>
<label className={"flex-1 relative cursor-pointer group"}>
<input type={"radio"} id={"radio-transports"} name={"service_type"} value={"transports"} className={"sr-only"} />
<div className={"rounded-full py-3.5 flex items-center justify-center gap-2.5 transition-all duration-300 group-has-[:checked]:bg-white"}>
<span className={"w-3 h-3 bg-primary rounded-full opacity-0 group-has-[:checked]:opacity-100 transition-opacity"}></span>
<span className={"font-semibold text-text-label-secondary group-has-[:checked]:text-foreground text-sm transition-colors"}>Transports</span>
</div>
</label>
</div>

<div className={"mb-5"}>
<label htmlFor={"booking-date"} className={"block text-text-label-secondary text-sm font-medium mb-3"}>Booking date</label>
<div className={"relative border border-border rounded-full px-5 py-4 flex items-center gap-3 bg-white cursor-pointer"} tabIndex={"0"} role={"button"} aria-haspopup={"dialog"} aria-expanded={"false"} aria-label={"Select booking date"}>
<svg className={"feather feather-calendar"} xmlns={"http://www.w3.org/2000/svg"} width={"24"} height={"24"} viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}><rect x={"3"} y={"4"} width={"18"} height={"18"} rx={"2"} ry={"2"}></rect><line x1={"16"} y1={"2"} x2={"16"} y2={"6"}></line><line x1={"8"} y1={"2"} x2={"8"} y2={"6"}></line><line x1={"3"} y1={"10"} x2={"21"} y2={"10"}></line></svg> <input id={"booking-date"} type={"text"} name={"date"} placeholder={"DD/MM/YYYY"} className={"w-full text-foreground text-sm font-medium focus:outline-none bg-transparent placeholder-[#A3A3A3] cursor-pointer"} tabIndex={"-1"} readOnly={""} />
</div>
</div>

<div className={"mb-10"}>

<div id={"field-guest"} className={"block relative"}>
<label htmlFor={"guest-input"} className={"block text-text-label-secondary text-sm font-medium mb-3"}>Number Of Guest</label>
<div id={"guest-input-container"} className={"relative border border-border rounded-full px-5 py-4 flex items-center gap-3 bg-white cursor-pointer"} tabIndex={"0"} role={"button"} aria-haspopup={"dialog"} aria-expanded={"false"} aria-label={"Select number of guests"}>
<svg className={"feather feather-user"} xmlns={"http://www.w3.org/2000/svg"} width={"24"} height={"24"} viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}><path d={"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}></path><circle cx={"12"} cy={"7"} r={"4"}></circle></svg> <input id={"guest-input"} type={"text"} placeholder={"2 Adults, 0 Children"} value={"2 Adults, 0 Children"} className={"w-full text-foreground text-sm font-medium focus:outline-none bg-transparent cursor-pointer pointer-events-none"} tabIndex={"-1"} readOnly={""} />
<svg className={"feather feather-chevron-down"} xmlns={"http://www.w3.org/2000/svg"} width={"24"} height={"24"} viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}><polyline points={"6 9 12 15 18 9"}></polyline></svg> </div>

<div id={"guest-dropdown"} className={"absolute top-full left-0 mt-3 lg:-top-8 lg:left-auto lg:right-full lg:mt-0 lg:mr-8 w-full md:w-[320px] bg-white rounded-2xl border border-gray-100 p-5 hidden z-50"}>

<div className={"flex items-center justify-between mb-5"}>
<div>
<h4 className={"text-sm lg:text-base font-semibold text-foreground"}>Adults</h4>
<p className={"text-xs text-text-label-secondary mt-0.5"}>Ages 12 or above</p>
</div>
<div className={"flex items-center gap-3.5"}>
<button type={"button"} aria-label={"Decrease adults"} id={"btn-adult-minus"} className={"size-9 rounded-full border border-border flex items-center justify-center text-foreground hover:border-primary hover:text-primary transition-colors disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:border-border disabled:hover:text-foreground"}>
<svg className={"feather feather-minus"} xmlns={"http://www.w3.org/2000/svg"} width={"24"} height={"24"} viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}><line x1={"5"} y1={"12"} x2={"19"} y2={"12"}></line></svg> </button>
<span id={"adult-count"} className={"w-5 text-center font-semibold text-sm"}>2</span>
<button type={"button"} aria-label={"Increase adults"} id={"btn-adult-plus"} className={"size-9 rounded-full border border-border flex items-center justify-center text-foreground hover:border-primary hover:text-primary transition-colors"}>
<svg className={"feather feather-plus"} xmlns={"http://www.w3.org/2000/svg"} width={"24"} height={"24"} viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}><line x1={"12"} y1={"5"} x2={"12"} y2={"19"}></line><line x1={"5"} y1={"12"} x2={"19"} y2={"12"}></line></svg> </button>
</div>
</div>

<div className={"flex items-center justify-between mb-6"}>
<div>
<h4 className={"text-sm lg:text-base font-semibold text-foreground"}>Children</h4>
<p className={"text-xs text-text-label-secondary mt-0.5"}>Ages 2-11</p>
</div>
<div className={"flex items-center gap-3.5"}>
<button type={"button"} aria-label={"Decrease children"} id={"btn-child-minus"} className={"size-9 rounded-full border border-border flex items-center justify-center text-foreground hover:border-primary hover:text-primary transition-colors disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:border-border disabled:hover:text-foreground"}>
<svg className={"feather feather-minus"} xmlns={"http://www.w3.org/2000/svg"} width={"24"} height={"24"} viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}><line x1={"5"} y1={"12"} x2={"19"} y2={"12"}></line></svg> </button>
<span id={"child-count"} className={"w-5 text-center font-semibold text-sm"}>0</span>
<button type={"button"} aria-label={"Increase children"} id={"btn-child-plus"} className={"size-9 rounded-full border border-border flex items-center justify-center text-foreground hover:border-primary hover:text-primary transition-colors"}>
<svg className={"feather feather-plus"} xmlns={"http://www.w3.org/2000/svg"} width={"24"} height={"24"} viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}><line x1={"12"} y1={"5"} x2={"12"} y2={"19"}></line><line x1={"5"} y1={"12"} x2={"19"} y2={"12"}></line></svg> </button>
</div>
</div>
<button type={"button"} id={"btn-guest-apply"} className={"w-full py-2.5 text-sm bg-primary text-white font-semibold rounded-full hover:bg-primary/90 transition-colors"}>Apply</button>
</div>
</div>

<div id={"field-destination"} className={"hidden"}>
<label htmlFor={"destination-input"} className={"block text-text-label-secondary text-sm font-medium mb-3"}>Drop Off Point / Destination</label>
<div className={"relative border border-border rounded-full px-5 py-4 flex items-center gap-3 bg-white"}>
<svg className={"feather feather-map-pin"} xmlns={"http://www.w3.org/2000/svg"} width={"24"} height={"24"} viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}><path d={"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"}></path><circle cx={"12"} cy={"10"} r={"3"}></circle></svg> <input id={"destination-input"} type={"text"} name={"destination"} placeholder={"Enter address or Google Maps link"} className={"w-full text-foreground text-sm font-medium focus:outline-none bg-transparent"} />
</div>
</div>
</div>

<input type={"hidden"} name={"adults"} id={"adults-input"} value={"2"} />
<input type={"hidden"} name={"children"} id={"children-input"} value={"0"} />
<button className={"group inline-flex items-center justify-center gap-3 font-semibold rounded-full text-sm cursor-pointer transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary bg-primary text-white hover:bg-primary/90 pl-5 pr-2 py-2"} id={"hero-submit-btn"}>
<div className={"relative overflow-hidden flex items-center justify-center"}>
<span className={"block transition-transform duration-500 group-hover:translate-y-[150%]"}>Check Availability</span>
<span className={"absolute block transition-transform duration-500 -translate-y-[150%] group-hover:translate-y-0"}>Check Availability</span>
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
</button>
</form>
</div>
</div>
</div>
</section>
<script type={"application/ld+json"}>
&#123;
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  "@id": "https://balibagusjourney.com#agency",
  "name": "Bali Bagus Journey",
  "description": "Book trusted Bali tours, private local drivers, and premium airport transfers with experienced local experts.",
  "url": "https://balibagusjourney.com",
  "telephone": "+628123456789",
  "priceRange": "$$",
  "image": "https://balibagusjourney.com/assets/home/hero.webp",
  "address": &#123;
    "@type": "PostalAddress",
    "streetAddress": "Jalan Denpasar",
    "addressLocality": "Denpasar",
    "addressRegion": "Bali",
    "postalCode": "80234",
    "addressCountry": "ID"
  &#125;,
  "geo": &#123;
    "@type": "GeoCoordinates",
    "latitude": -8.65,
    "longitude": 115.22
  &#125;,
  "openingHoursSpecification": &#123;
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ],
    "opens": "00:00",
    "closes": "23:59"
  &#125;,
  "sameAs": [
    "https://www.facebook.com/balibagusjourney",
    "https://www.instagram.com/balibagusjourney"
  ]
&#125;
</script> <section id={"about"} className={"2xl:container mx-auto px-5 md:px-12 lg:px-20 2xl:px-30 py-15 2xl:py-20"}>

<div className={"flex flex-col lg:grid lg:grid-cols-12 gap-6 md:gap-8 lg:gap-5 mb-6 md:mb-8 lg:mb-12"}>
<div className={"lg:col-span-3"}>
<div className={"gsap-about-badge opacity-0 -translate-x-16 flex items-center gap-2 w-fit bg-white border border-border rounded-full px-2.5 pr-3 py-2"}>
<div className={"size-2.5 bg-primary rounded-full"}></div>
<strong className={"font-medium text-sm md:text-base"}>About Us</strong>
</div>
</div>
<div className={"lg:col-span-6 xl:col-span-6 items-start grid md:grid-cols-3 md:gap-10 lg:gap-5"}>
<div className={"gsap-about-stat opacity-0 translate-y-16 flex flex-col gap-1.5 lg:gap-2 py-6 md:pb-8 md:py-0 lg:pb-0 md:pt-0 mb-6 md:mb-0 border-b lg:border-0 border-border"}>
<span className={"text-3xl md:text-4xl font-semibold leading-none"}>
<span className={"gsap-counter"} data-target={"1500"}>0</span><span className={"text-primary"}>+</span>
</span>
<p className={"font-medium text-sm lg:text-base text-text-label-secondary"}>Happy Travelers</p>
</div>
<div className={"gsap-about-stat opacity-0 translate-y-16 flex flex-col gap-1.5 lg:gap-2 pb-6 md:pb-8 lg:py-0 mb-6 md:mb-0 border-b lg:border-0 border-border"}>
<span className={"text-3xl md:text-4xl font-semibold leading-none flex items-center gap-2"}>
<span className={"gsap-counter"} data-target={"4.9"} data-decimals={"1"}>0.0</span>/5<span className={"text-primary"}><svg className={"size-5 md:size-6"} xmlns={"http://www.w3.org/2000/svg"} viewBox={"0 0 24 24"} fill={"currentColor"} aria-hidden={"true"} data-slot={"icon"}>
<path fillRule={"evenodd"} d={"M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"} clipRule={"evenodd"}></path>
</svg></span>
</span>
<p className={"font-medium text-sm lg:text-base text-text-label-secondary"}>Average Rating</p>
</div>
<div className={"gsap-about-stat opacity-0 translate-y-16 flex flex-col gap-1.5 lg:gap-2 pb-6 md:pb-8 lg:py-0 md:mb-0 border-b lg:border-0 border-border"}>
<span className={"text-3xl md:text-4xl font-semibold leading-none"}>
<span className={"gsap-counter"} data-target={"8"}>0</span> Years<span className={"text-primary"}>+</span>
</span>
<p className={"font-medium text-sm lg:text-base text-text-label-secondary"}>Experience</p>
</div>
</div>
</div>

<div className={"flex flex-col lg:grid lg:grid-cols-12 gap-10 md:gap-12 lg:gap-5"}>

<div className={"gsap-about-image-1 opacity-0 translate-y-40 order-2 lg:order-1 lg:col-span-2"}>
<div className={"relative overflow-hidden rounded-xl"}>
<div className={"gsap-image-reveal-cover absolute inset-0 bg-[#F3F4F6] z-10"}></div>
<img src={"assets/home/about/about-1%201.webp"} alt={"Happy tourists posing near Balinese temple gateways, experiencing cultural excursions in Bali"} loading={"lazy"} className={"w-full h-auto object-cover aspect-video md:aspect-[21/9] lg:aspect-square"} />
</div>
</div>
<div className={"hidden lg:block lg:order-2 lg:col-span-1"}></div>

<div className={"gsap-about-main-text opacity-0 translate-y-16 order-1 lg:order-3 lg:col-span-6"}>
<p className={"text-2xl md:text-4xl lg:text-[40px] font-medium leading-snug lg:leading-[1.3] mb-8 lg:mb-10 text-foreground"}>
                We help travelers experience the best of Bali through reliable transportation, personalized tour packages, and friendly local service.
            </p>
<a href={"tours.html"} className={"group inline-flex items-center justify-center gap-3 font-semibold rounded-full text-sm cursor-pointer transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary bg-foreground text-background hover:bg-foreground/90 pl-5 pr-2 py-2"}>
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
<div className={"hidden lg:block lg:order-4 lg:col-span-1"}></div>
<div className={"gsap-about-image-2 opacity-0 -translate-x-12 lg:translate-x-0 lg:-translate-y-40 order-3 lg:order-5 lg:col-span-2 self-end w-[60%] md:w-[40%] lg:w-full"}>
<div className={"mb-5 lg:mb-6"}>
<svg className={"mb-2 w-7 lg:w-8 text-primary"} xmlns={"http://www.w3.org/2000/svg"} viewBox={"0 0 24 24"} fill={"currentColor"} aria-hidden={"true"} data-slot={"icon"}>
<path d={"M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18ZM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12ZM6.697 7.757a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z"}></path>
</svg> <p className={"font-medium text-base"}>
<span className={"text-text-label-secondary"}>We Create</span> Unforgettable Bali Experiences.
                </p>
</div>
<div className={"relative overflow-hidden rounded-xl"}>
<div className={"gsap-image-reveal-cover absolute inset-0 bg-[#F3F4F6] z-10"}></div>
<img src={"assets/home/about/about-2.webp"} alt={"Scenic landscape of Bali countryside with beautiful coconut trees and mountains, typical of Bali tours"} loading={"lazy"} className={"w-full h-auto object-cover aspect-12/8 lg:aspect-auto"} />
</div>
</div>
</div>
</section> <section id={"service"} className={"2xl:container mx-auto lg:px-5 2xl:px-0 lg:py-15 2xl:py-20"}>
<div className={"bg-foreground px-5 md:px-10 lg:px-15 2xl:px-30 2xl:px-30 py-12 lg:py-20 lg:rounded-3xl text-white"}>
<div className={"text-center flex flex-col items-center mb-10 lg:mb-16"}>
<div className={"gsap-service-badge opacity-0 translate-y-16 flex items-center gap-2 w-fit bg-white border border-border rounded-full px-2.5 pr-3 py-2 mb-5 lg:mb-6"}>
<div className={"size-2.5 bg-primary rounded-full"}></div>
<strong className={"font-medium text-sm md:text-base text-foreground"}>Our Travel Services</strong>
</div>
<h2 className={"gsap-service-heading opacity-0 translate-y-16 text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-snug lg:leading-[1.3]"}>
                Travel Services Designed <br className={"hidden lg:block"} /> for Every Bali Journey
            </h2>
</div>
<div className={"grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6"}>
<div className={"gsap-service-card opacity-0 translate-y-16 bg-white p-6 lg:p-8 rounded-2xl flex flex-col"}>
<div className={"bg-primary mb-6 lg:mb-7 rounded-2xl w-fit p-3 text-white"}>
<img src={"assets/icons/boxicons_map.svg"} alt={""} aria-hidden={"true"} width={"40"} height={"40"} className={"size-8 lg:size-10"} />
</div>
<div className={"text-foreground flex flex-col grow"}>
<div className={"mb-4 lg:mb-5 grow"}>
<h3 className={"text-xl lg:text-2xl font-semibold mb-2"}>Bali Tours & Activities</h3>
<p className={"text-sm lg:text-base leading-relaxed"}>Explore Bali's top attractions with flexible tour packages and experienced local guides.</p>
</div>
<a href={"tours.html"} className={"group inline-flex items-center justify-center gap-3 font-semibold rounded-full text-sm cursor-pointer transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary bg-transparent border border-black/20 hover:opacity-70 pl-5 pr-2 py-2 w-fit"}>
<div className={"relative overflow-hidden flex items-center justify-center"}>
<span className={"block transition-transform duration-500 group-hover:translate-y-[150%]"}>Explore Tours</span>
<span className={"absolute block transition-transform duration-500 -translate-y-[150%] group-hover:translate-y-0"}>Explore Tours</span>
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
<div className={"gsap-service-card opacity-0 translate-y-16 bg-white p-6 lg:p-8 rounded-2xl flex flex-col"}>
<div className={"bg-primary mb-6 lg:mb-7 rounded-2xl w-fit p-3 text-white"}>
<img src={"assets/icons/boxicons_car.svg"} alt={""} aria-hidden={"true"} width={"40"} height={"40"} className={"size-8 lg:size-10"} />
</div>
<div className={"text-foreground flex flex-col grow"}>
<div className={"mb-4 lg:mb-5 grow"}>
<h3 className={"text-xl lg:text-2xl font-semibold mb-2"}>Private Transport</h3>
<p className={"text-sm lg:text-base leading-relaxed"}>Travel comfortably across Bali with private professional drivers.</p>
</div>
<a href={"transport.html"} className={"group inline-flex items-center justify-center gap-3 font-semibold rounded-full text-sm cursor-pointer transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary bg-transparent border border-black/20 hover:opacity-70 pl-5 pr-2 py-2 w-fit"}>
<div className={"relative overflow-hidden flex items-center justify-center"}>
<span className={"block transition-transform duration-500 group-hover:translate-y-[150%]"}>View Vehicles</span>
<span className={"absolute block transition-transform duration-500 -translate-y-[150%] group-hover:translate-y-0"}>View Vehicles</span>
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
<div className={"gsap-service-card opacity-0 translate-y-16 bg-white p-6 lg:p-8 rounded-2xl flex flex-col"}>
<div className={"bg-primary mb-6 lg:mb-7 rounded-2xl w-fit p-3 text-white"}>
<img src={"assets/icons/mynaui_plane.svg"} alt={""} aria-hidden={"true"} width={"40"} height={"40"} className={"size-8 lg:size-10"} />
</div>
<div className={"text-foreground flex flex-col grow"}>
<div className={"mb-4 lg:mb-5 grow"}>
<h3 className={"text-xl lg:text-2xl font-semibold mb-2"}>Airport Transfer</h3>
<p className={"text-sm lg:text-base leading-relaxed"}>Enjoy safe and punctual airport transfers to and from any destination in Bali.</p>
</div>
<a href={"transport.html"} className={"group inline-flex items-center justify-center gap-3 font-semibold rounded-full text-sm cursor-pointer transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary bg-transparent border border-black/20 hover:opacity-70 pl-5 pr-2 py-2 w-fit"}>
<div className={"relative overflow-hidden flex items-center justify-center"}>
<span className={"block transition-transform duration-500 group-hover:translate-y-[150%]"}>Book Transfer</span>
<span className={"absolute block transition-transform duration-500 -translate-y-[150%] group-hover:translate-y-0"}>Book Transfer</span>
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
</div>
</div>
</section> <section id={"tour"} className={"2xl:container mx-auto px-5 md:px-12 lg:px-20 2xl:px-30 py-15 2xl:py-20"}>
<div className={"mb-10 md:mb-12 lg:mb-16"}>
<div className={"gsap-tour-badge opacity-0 -translate-x-16 mb-4 lg:mb-6 flex items-center gap-2 w-fit bg-white border border-border rounded-full px-2.5 pr-3 py-2"}>
<div className={"size-2.5 bg-primary rounded-full"}></div>
<strong className={"font-medium text-sm md:text-base"}>Popular Bali Tours</strong>
</div>
<div className={"flex flex-col lg:flex-row gap-3 lg:items-center justify-between"}>
<h2 className={"gsap-tour-heading opacity-0 translate-y-16 text-3xl md:text-4xl lg:text-5xl font-semibold leading-snug lg:leading-[1.3] lg:max-w-xl"}>
                Explore Bali's Most Popular Destinations
            </h2>
<div className={"flex flex-col gap-8 lg:gap-4 items-start lg:items-end text-start lg:text-end lg:max-w-[32%]"}>
<p className={"gsap-tour-text opacity-0 translate-y-16 text-sm md:text-base leading-relaxed w-full"}>
                    Discover our most-loved Bali tour packages, featuring iconic destinations, authentic local experiences, and flexible itineraries designed to help you explore the best of Bali.
                </p>
<div className={"gsap-tour-btn opacity-0 translate-y-16 mt-2 lg:mt-0"}>
<a href={"tours.html"} className={"group inline-flex items-center justify-center gap-3 font-semibold rounded-full text-sm cursor-pointer transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary bg-foreground text-background hover:bg-foreground/90 pl-5 pr-2 py-2 w-fit"}>
<div className={"relative overflow-hidden flex items-center justify-center"}>
<span className={"block transition-transform duration-500 group-hover:translate-y-[150%]"}>View All Tours</span>
<span className={"absolute block transition-transform duration-500 -translate-y-[150%] group-hover:translate-y-0"}>View All Tours</span>
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
</div>
</div>
<div className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-5"}>
<div className={""}>
<script type={"application/ld+json"}>
&#123;
  "@context": "https://schema.org",
  "@type": "TouristTrip",
  "name": "Dolphin Watching Tour",
  "description": "Start your morning with a magical sunrise experience at Lovina Beach and enjoy a private boat trip to see dolphins in their natural ocean environment.This tour combines a peaceful sunrise, dolphin watching, and an optional swimming experience in the clear waters of Lovina. The journey is supported by a professional driver and private air-conditioned transportation for a comfortable and flexible experience.",
  "image": "https://balibagusjourney.com/storage/tour-covers/01KZSQPH01BQ63EGTCSA1WC7QT.webp",
  "provider": &#123;
    "@type": "TravelAgency",
    "name": "Bali Bagus Journey",
    "url": "https://balibagusjourney.com"
  &#125;,
  "offers": &#123;
    "@type": "Offer",
    "price": "20.00",
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock",
    "validFrom": "2026-08-14T01:10:48+00:00"
  &#125;
&#125;
</script>
<div className={"gsap-tour-card opacity-0 translate-y-16 bg-card rounded-2xl overflow-hidden flex flex-col h-full"}>
<div className={"h-60 lg:h-70 relative rounded-2xl overflow-hidden"}>
<img src={"storage/tour-covers/01KZSQPH01BQ63EGTCSA1WC7QT.webp"} alt={"Dolphin Watching Tour - Popular tour package by Bali Bagus Journey"} width={"384"} height={"280"} loading={"lazy"} decoding={"async"} className={"h-full w-full object-cover"} />
<span className={"absolute bottom-4 left-4 lg:bottom-5 lg:left-5 bg-background text-foreground text-xs lg:text-sm px-3 py-1.5 lg:px-4 lg:py-2 rounded-full font-semibold"}>
            Island Hopping
        </span>
</div>
<div className={"p-4 lg:p-5 flex flex-col grow"}>
<div className={"mb-4 pb-4 border-b border-border grow"}>
<h3 className={"text-lg lg:text-xl font-semibold mb-2 line-clamp-2"}>Dolphin Watching Tour</h3>
<p className={"text-sm line-clamp-2"}>Start your morning with a magical sunrise experience at Lovina Beach and enjoy a private boat trip to see dolphins in their natural ocean environment.This tour combines a peaceful sunrise, dolphin watching, and an optional swimming experience in the clear waters of Lovina. The journey is supported by a professional driver and private air-conditioned transportation for a comfortable and flexible experience.</p>
</div>
<div className={"flex justify-between items-center mt-auto"}>
<p className={"text-xl lg:text-2xl font-semibold"}>$20 <span className={"font-medium text-sm lg:text-base text-text-label-secondary"}>/ person</span></p>
<a href={"tours/dolphin-watching-tour.html"} className={"group inline-flex items-center justify-center gap-3 font-semibold rounded-full text-sm cursor-pointer transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary bg-white text-foreground hover:bg-white/90 pl-4 pr-2 py-1.5 lg:pl-5 lg:py-2 w-fit"} aria-label={"View details of Dolphin Watching Tour"}>
<div className={"relative overflow-hidden flex items-center justify-center"}>
<span className={"block transition-transform duration-500 group-hover:translate-y-[150%]"}>View Tour</span>
<span className={"absolute block transition-transform duration-500 -translate-y-[150%] group-hover:translate-y-0"}>View Tour</span>
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
</div> </div>
<div className={""}>
<script type={"application/ld+json"}>
&#123;
  "@context": "https://schema.org",
  "@type": "TouristTrip",
  "name": "Mount Batur Sunrise Trek &amp; Jeep Tour",
  "description": "Start your adventure in the early morning and discover the magical beauty of Mount Batur. Experience the breathtaking sunrise, explore the dramatic volcanic landscape by 4WD Jeep, and enjoy spectacular views of Lake Batur and the surrounding Kintamani mountains.This private tour combines adventure, nature, and relaxation with a sunrise experience, black lava exploration, breakfast with a view, and a lunch experience after your morning adventure.",
  "image": "https://balibagusjourney.com/storage/tour-covers/01KZSSNKTYSH1SQ8YYE3Z30Z75.webp",
  "provider": &#123;
    "@type": "TravelAgency",
    "name": "Bali Bagus Journey",
    "url": "https://balibagusjourney.com"
  &#125;,
  "offers": &#123;
    "@type": "Offer",
    "price": "55.00",
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock",
    "validFrom": "2026-08-14T01:10:48+00:00"
  &#125;
&#125;
</script>
<div className={"gsap-tour-card opacity-0 translate-y-16 bg-card rounded-2xl overflow-hidden flex flex-col h-full"}>
<div className={"h-60 lg:h-70 relative rounded-2xl overflow-hidden"}>
<img src={"storage/tour-covers/01KZSSNKTYSH1SQ8YYE3Z30Z75.webp"} alt={"Mount Batur Sunrise Trek & Jeep Tour - Popular tour package by Bali Bagus Journey"} width={"384"} height={"280"} loading={"lazy"} decoding={"async"} className={"h-full w-full object-cover"} />
<span className={"absolute bottom-4 left-4 lg:bottom-5 lg:left-5 bg-background text-foreground text-xs lg:text-sm px-3 py-1.5 lg:px-4 lg:py-2 rounded-full font-semibold"}>
            Adventure
        </span>
</div>
<div className={"p-4 lg:p-5 flex flex-col grow"}>
<div className={"mb-4 pb-4 border-b border-border grow"}>
<h3 className={"text-lg lg:text-xl font-semibold mb-2 line-clamp-2"}>Mount Batur Sunrise Trek & Jeep Tour</h3>
<p className={"text-sm line-clamp-2"}>Start your adventure in the early morning and discover the magical beauty of Mount Batur. Experience the breathtaking sunrise, explore the dramatic volcanic landscape by 4WD Jeep, and enjoy spectacular views of Lake Batur and the surrounding Kintamani mountains.This private tour combines adventure, nature, and relaxation with a sunrise experience, black lava exploration, breakfast with a view, and a lunch experience after your morning adventure.</p>
</div>
<div className={"flex justify-between items-center mt-auto"}>
<p className={"text-xl lg:text-2xl font-semibold"}>$55 <span className={"font-medium text-sm lg:text-base text-text-label-secondary"}>/ person</span></p>
<a href={"tours/mount-batur-sunrise-trek-jeep-tour.html"} className={"group inline-flex items-center justify-center gap-3 font-semibold rounded-full text-sm cursor-pointer transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary bg-white text-foreground hover:bg-white/90 pl-4 pr-2 py-1.5 lg:pl-5 lg:py-2 w-fit"} aria-label={"View details of Mount Batur Sunrise Trek & Jeep Tour"}>
<div className={"relative overflow-hidden flex items-center justify-center"}>
<span className={"block transition-transform duration-500 group-hover:translate-y-[150%]"}>View Tour</span>
<span className={"absolute block transition-transform duration-500 -translate-y-[150%] group-hover:translate-y-0"}>View Tour</span>
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
</div> </div>
<div className={""}>
<script type={"application/ld+json"}>
&#123;
  "@context": "https://schema.org",
  "@type": "TouristTrip",
  "name": "Blue Lagoon Coastal Exploration",
  "description": "Discover the hidden coastal beauty of East Bali on a private journey to Blue Lagoon and Tanjung Jepun. Enjoy a relaxing stop at Monkey Bar Pool &amp;amp; Bar before exploring two of Bali&amp;#039;s beautiful snorkeling spots.Swim in crystal-clear waters, discover colorful coral reefs and tropical marine life, and enjoy a comfortable private journey with a professional English-speaking driver.",
  "image": "https://balibagusjourney.com/storage/tour-covers/01KZSWWN21GF3CX3T56J9WDW7B.webp",
  "provider": &#123;
    "@type": "TravelAgency",
    "name": "Bali Bagus Journey",
    "url": "https://balibagusjourney.com"
  &#125;,
  "offers": &#123;
    "@type": "Offer",
    "price": "55.00",
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock",
    "validFrom": "2026-08-14T01:10:48+00:00"
  &#125;
&#125;
</script>
<div className={"gsap-tour-card opacity-0 translate-y-16 bg-card rounded-2xl overflow-hidden flex flex-col h-full"}>
<div className={"h-60 lg:h-70 relative rounded-2xl overflow-hidden"}>
<img src={"storage/tour-covers/01KZSWWN21GF3CX3T56J9WDW7B.webp"} alt={"Blue Lagoon Coastal Exploration - Popular tour package by Bali Bagus Journey"} width={"384"} height={"280"} loading={"lazy"} decoding={"async"} className={"h-full w-full object-cover"} />
<span className={"absolute bottom-4 left-4 lg:bottom-5 lg:left-5 bg-background text-foreground text-xs lg:text-sm px-3 py-1.5 lg:px-4 lg:py-2 rounded-full font-semibold"}>
            Island Hopping
        </span>
</div>
<div className={"p-4 lg:p-5 flex flex-col grow"}>
<div className={"mb-4 pb-4 border-b border-border grow"}>
<h3 className={"text-lg lg:text-xl font-semibold mb-2 line-clamp-2"}>Blue Lagoon Coastal Exploration</h3>
<p className={"text-sm line-clamp-2"}>Discover the hidden coastal beauty of East Bali on a private journey to Blue Lagoon and Tanjung Jepun. Enjoy a relaxing stop at Monkey Bar Pool &amp; Bar before exploring two of Bali&#039;s beautiful snorkeling spots.Swim in crystal-clear waters, discover colorful coral reefs and tropical marine life, and enjoy a comfortable private journey with a professional English-speaking driver.</p>
</div>
<div className={"flex justify-between items-center mt-auto"}>
<p className={"text-xl lg:text-2xl font-semibold"}>$55 <span className={"font-medium text-sm lg:text-base text-text-label-secondary"}>/ person</span></p>
<a href={"tours/blue-lagoon-coastal-exploration.html"} className={"group inline-flex items-center justify-center gap-3 font-semibold rounded-full text-sm cursor-pointer transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary bg-white text-foreground hover:bg-white/90 pl-4 pr-2 py-1.5 lg:pl-5 lg:py-2 w-fit"} aria-label={"View details of Blue Lagoon Coastal Exploration"}>
<div className={"relative overflow-hidden flex items-center justify-center"}>
<span className={"block transition-transform duration-500 group-hover:translate-y-[150%]"}>View Tour</span>
<span className={"absolute block transition-transform duration-500 -translate-y-[150%] group-hover:translate-y-0"}>View Tour</span>
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
</div> </div>
<div className={"hidden md:block lg:hidden"}>
<script type={"application/ld+json"}>
&#123;
  "@context": "https://schema.org",
  "@type": "TouristTrip",
  "name": "Uluwatu Tour",
  "description": "Discover the beauty of South Bali on a private full-day journey combining exciting water sports, stunning beaches, Balinese culture, and a magical sunset experience.Visit the iconic Garuda Wisnu Kencana Cultural Park, relax at Padang Padang Beach, and explore the spectacular Uluwatu Temple perched on a dramatic sea cliff. End the day by watching the famous Kecak Fire Dance at sunset, with an optional seafood dinner at Jimbaran Bay.",
  "image": "https://balibagusjourney.com/storage/tour-covers/01KZSXDTF3SDRBZZ3QCCSRE254.webp",
  "provider": &#123;
    "@type": "TravelAgency",
    "name": "Bali Bagus Journey",
    "url": "https://balibagusjourney.com"
  &#125;,
  "offers": &#123;
    "@type": "Offer",
    "price": "55.00",
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock",
    "validFrom": "2026-08-14T01:10:48+00:00"
  &#125;
&#125;
</script>
<div className={"gsap-tour-card opacity-0 translate-y-16 bg-card rounded-2xl overflow-hidden flex flex-col h-full"}>
<div className={"h-60 lg:h-70 relative rounded-2xl overflow-hidden"}>
<img src={"storage/tour-covers/01KZSXDTF3SDRBZZ3QCCSRE254.webp"} alt={"Uluwatu Tour - Popular tour package by Bali Bagus Journey"} width={"384"} height={"280"} loading={"lazy"} decoding={"async"} className={"h-full w-full object-cover"} />
<span className={"absolute bottom-4 left-4 lg:bottom-5 lg:left-5 bg-background text-foreground text-xs lg:text-sm px-3 py-1.5 lg:px-4 lg:py-2 rounded-full font-semibold"}>
            Temple & Culture
        </span>
</div>
<div className={"p-4 lg:p-5 flex flex-col grow"}>
<div className={"mb-4 pb-4 border-b border-border grow"}>
<h3 className={"text-lg lg:text-xl font-semibold mb-2 line-clamp-2"}>Uluwatu Tour</h3>
<p className={"text-sm line-clamp-2"}>Discover the beauty of South Bali on a private full-day journey combining exciting water sports, stunning beaches, Balinese culture, and a magical sunset experience.Visit the iconic Garuda Wisnu Kencana Cultural Park, relax at Padang Padang Beach, and explore the spectacular Uluwatu Temple perched on a dramatic sea cliff. End the day by watching the famous Kecak Fire Dance at sunset, with an optional seafood dinner at Jimbaran Bay.</p>
</div>
<div className={"flex justify-between items-center mt-auto"}>
<p className={"text-xl lg:text-2xl font-semibold"}>$55 <span className={"font-medium text-sm lg:text-base text-text-label-secondary"}>/ person</span></p>
<a href={"tours/uluwatu-tour.html"} className={"group inline-flex items-center justify-center gap-3 font-semibold rounded-full text-sm cursor-pointer transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary bg-white text-foreground hover:bg-white/90 pl-4 pr-2 py-1.5 lg:pl-5 lg:py-2 w-fit"} aria-label={"View details of Uluwatu Tour"}>
<div className={"relative overflow-hidden flex items-center justify-center"}>
<span className={"block transition-transform duration-500 group-hover:translate-y-[150%]"}>View Tour</span>
<span className={"absolute block transition-transform duration-500 -translate-y-[150%] group-hover:translate-y-0"}>View Tour</span>
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
</div> </div>
</div>
</section> <section id={"transportation"} className={"2xl:container mx-auto px-5 md:px-12 lg:px-20 2xl:px-30 py-15 2xl:py-20"}>
<div className={"mb-10 lg:mb-16"}>
<div className={"gsap-transport-badge opacity-0 -translate-x-24 mb-4 lg:mb-6 flex items-center gap-2 w-fit bg-white border border-border rounded-full px-2.5 pr-3 py-2"}>
<div className={"size-2.5 bg-primary rounded-full"}></div>
<strong className={"font-medium text-sm md:text-base"}>Premium Transport</strong>
</div>
<div className={"flex flex-col lg:flex-row gap-3 lg:items-center justify-between"}>
<h2 className={"gsap-transport-heading opacity-0 translate-y-16 text-3xl md:text-4xl lg:text-5xl font-semibold leading-snug lg:leading-[1.3] lg:max-w-xl"}>
                Explore Bali with Professional Local Drivers
            </h2>
<div className={"flex flex-col gap-4 lg:gap-5 items-start lg:items-end text-start lg:text-end lg:max-w-sm"}>
<p className={"gsap-transport-text opacity-0 translate-y-16 text-base leading-relaxed w-full"}>
                    Comfortable, safe, and flexible transportation with experienced local drivers who know Bali's best routes and destinations.
                </p>
</div>
</div>
</div>
<div className={"grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-5"}>
<div className={"flex flex-col gap-4 lg:gap-5"}>
<div className={"gsap-transport-feature opacity-0 -translate-x-24 flex gap-4 lg:gap-5 p-5 lg:p-7 rounded-2xl bg-card"}>
<div className={"p-2 rounded-2xl bg-primary h-fit"}>
<img src={"assets/icons/basil_bag-outline.svg"} alt={""} className={"min-w-8 h-8"} />
</div>
<div>
<h3 className={"text-xl font-semibold mb-2"}>
                        Airport Pickup
                    </h3>
<p className={"text-sm"}>
                        From airport pickups to full-day charters. Our fleet is clean, air-conditioned, and driven by professionals who know every shortcut.
                    </p>
</div>
</div>
<div className={"gsap-transport-feature opacity-0 -translate-x-24 flex gap-4 lg:gap-5 p-5 lg:p-7 rounded-2xl bg-card"}>
<div className={"p-2 rounded-2xl bg-primary h-fit"}>
<img src={"assets/icons/ri_sun-line.svg"} alt={""} className={"min-w-8 h-8"} />
</div>
<div>
<h3 className={"text-xl font-semibold mb-2"}>
                        Half/Full Day
                    </h3>
<p className={"text-sm"}>
                        Explore Bali your way with a private driver, flexible itinerary, and comfortable transportation all in one seamless experience.
                    </p>
</div>
</div>
<div className={"gsap-transport-feature opacity-0 -translate-x-24 flex gap-4 lg:gap-5 p-5 lg:p-7 rounded-2xl bg-card"}>
<div className={"p-2 rounded-2xl bg-primary h-fit"}>
<img src={"assets/icons/tdesign_location.svg"} alt={""} className={"min-w-8 h-8"} />
</div>
<div>
<h3 className={"text-xl font-semibold mb-2"}>
                       Point-to-Point Transfer
                    </h3>
<p className={"text-sm"}>
                        Seamless hotel-to-hotel or cross-region transfers (e.g., Canggu to Ubud or Uluwatu) with pre-arranged, flat, transparent pricing.
                    </p>
</div>
</div>
</div>
<div className={"gsap-transport-image opacity-0 scale-95 rounded-2xl h-64 md:h-80 lg:h-auto"}>
<img src={"assets/home/transport/banner.webp"} alt={"Luxury SUV for private passenger transport service in Bali"} loading={"lazy"} decoding={"async"} width={"384"} height={"450"} className={"h-full w-full object-cover rounded-2xl"} />
</div>
<div className={"gsap-transport-marquee-box opacity-0 translate-y-16 lg:translate-y-0 lg:translate-x-16 rounded-2xl p-5 lg:p-7 bg-card flex flex-col justify-between"}>
<div className={"relative overflow-hidden grow max-h-[340px] mb-6 lg:mb-5 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]"}>
<div className={"gsap-marquee-vertical flex flex-col"}>

<div className={"flex flex-col gap-3 pb-3"}>
<div className={"bg-background flex items-center gap-4 p-2 rounded-xl"}>
<img src={"storage/vehicle-covers/01KZWBPG3W5BK786SEJV9VSCTC.webp"} alt={"Toyota Avanza transport in Bali"} width={"60"} height={"60"} loading={"lazy"} decoding={"async"} className={"object-cover rounded-xl size-15"} />
<div>
<h3 className={"text-lg font-semibold mb-1"}>Toyota Avanza</h3>
<p className={"text-sm text-text-label-secondary"}>Standard  Pax</p>
</div>
</div>
<div className={"bg-background flex items-center gap-4 p-2 rounded-xl"}>
<img src={"storage/vehicle-covers/01KZWBQD8WNF5VF8BQ5HACJXEJ.webp"} alt={"Toyota Innova Reborn transport in Bali"} width={"60"} height={"60"} loading={"lazy"} decoding={"async"} className={"object-cover rounded-xl size-15"} />
<div>
<h3 className={"text-lg font-semibold mb-1"}>Toyota Innova Reborn</h3>
<p className={"text-sm text-text-label-secondary"}>MVP / Van  Pax</p>
</div>
</div>
<div className={"bg-background flex items-center gap-4 p-2 rounded-xl"}>
<img src={"storage/vehicle-covers/01KZWBARRNBJ8G3KGBC5GENQ6Z.webp"} alt={"Toyota Hi-Ace transport in Bali"} width={"60"} height={"60"} loading={"lazy"} decoding={"async"} className={"object-cover rounded-xl size-15"} />
<div>
<h3 className={"text-lg font-semibold mb-1"}>Toyota Hi-Ace</h3>
<p className={"text-sm text-text-label-secondary"}>Minibus  Pax</p>
</div>
</div>
<div className={"bg-background flex items-center gap-4 p-2 rounded-xl"}>
<img src={"storage/vehicle-covers/01KZWBNNJKSZ99WWG7WSKFZKJ8.webp"} alt={"Toyota Alphard transport in Bali"} width={"60"} height={"60"} loading={"lazy"} decoding={"async"} className={"object-cover rounded-xl size-15"} />
<div>
<h3 className={"text-lg font-semibold mb-1"}>Toyota Alphard</h3>
<p className={"text-sm text-text-label-secondary"}>Luxury  Pax</p>
</div>
</div>
<div className={"bg-background flex items-center gap-4 p-2 rounded-xl"}>
<img src={"storage/vehicle-covers/01KZWBXF79WXRBKVSTPCR6K1TJ.webp"} alt={"Toyota Fortuner transport in Bali"} width={"60"} height={"60"} loading={"lazy"} decoding={"async"} className={"object-cover rounded-xl size-15"} />
<div>
<h3 className={"text-lg font-semibold mb-1"}>Toyota Fortuner</h3>
<p className={"text-sm text-text-label-secondary"}>Luxury  Pax</p>
</div>
</div>
</div>

<div className={"flex flex-col gap-3 pb-3"}>
<div className={"bg-background flex items-center gap-4 p-2 rounded-xl"}>
<img src={"storage/vehicle-covers/01KZWBPG3W5BK786SEJV9VSCTC.webp"} alt={"Toyota Avanza transport in Bali"} width={"60"} height={"60"} loading={"lazy"} decoding={"async"} className={"object-cover rounded-xl size-15"} />
<div>
<h3 className={"text-lg font-semibold mb-1"}>Toyota Avanza</h3>
<p className={"text-sm text-text-label-secondary"}>Standard  Pax</p>
</div>
</div>
<div className={"bg-background flex items-center gap-4 p-2 rounded-xl"}>
<img src={"storage/vehicle-covers/01KZWBQD8WNF5VF8BQ5HACJXEJ.webp"} alt={"Toyota Innova Reborn transport in Bali"} width={"60"} height={"60"} loading={"lazy"} decoding={"async"} className={"object-cover rounded-xl size-15"} />
<div>
<h3 className={"text-lg font-semibold mb-1"}>Toyota Innova Reborn</h3>
<p className={"text-sm text-text-label-secondary"}>MVP / Van  Pax</p>
</div>
</div>
<div className={"bg-background flex items-center gap-4 p-2 rounded-xl"}>
<img src={"storage/vehicle-covers/01KZWBARRNBJ8G3KGBC5GENQ6Z.webp"} alt={"Toyota Hi-Ace transport in Bali"} width={"60"} height={"60"} loading={"lazy"} decoding={"async"} className={"object-cover rounded-xl size-15"} />
<div>
<h3 className={"text-lg font-semibold mb-1"}>Toyota Hi-Ace</h3>
<p className={"text-sm text-text-label-secondary"}>Minibus  Pax</p>
</div>
</div>
<div className={"bg-background flex items-center gap-4 p-2 rounded-xl"}>
<img src={"storage/vehicle-covers/01KZWBNNJKSZ99WWG7WSKFZKJ8.webp"} alt={"Toyota Alphard transport in Bali"} width={"60"} height={"60"} loading={"lazy"} decoding={"async"} className={"object-cover rounded-xl size-15"} />
<div>
<h3 className={"text-lg font-semibold mb-1"}>Toyota Alphard</h3>
<p className={"text-sm text-text-label-secondary"}>Luxury  Pax</p>
</div>
</div>
<div className={"bg-background flex items-center gap-4 p-2 rounded-xl"}>
<img src={"storage/vehicle-covers/01KZWBXF79WXRBKVSTPCR6K1TJ.webp"} alt={"Toyota Fortuner transport in Bali"} width={"60"} height={"60"} loading={"lazy"} decoding={"async"} className={"object-cover rounded-xl size-15"} />
<div>
<h3 className={"text-lg font-semibold mb-1"}>Toyota Fortuner</h3>
<p className={"text-sm text-text-label-secondary"}>Luxury  Pax</p>
</div>
</div>
</div>
</div>
</div>
<div className={"flex flex-col gap-4 lg:gap-5"}>
<p className={"text-sm w-full lg:w-64"}>
                    Choose the perfect vehicle for your trip and travel across Bali in comfort.
                </p>
<a href={"transport.html"} className={"group inline-flex items-center justify-center gap-3 font-semibold rounded-full text-sm cursor-pointer transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary bg-foreground text-background hover:bg-foreground/90 pl-5 pr-2 py-2 w-fit"}>
<div className={"relative overflow-hidden flex items-center justify-center"}>
<span className={"block transition-transform duration-500 group-hover:translate-y-[150%]"}>Book Private Driver</span>
<span className={"absolute block transition-transform duration-500 -translate-y-[150%] group-hover:translate-y-0"}>Book Private Driver</span>
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
</div>
</section> <section id={"gallery"} className={"2xl:container mx-auto lg:px-5 2xl:px-0 lg:py-15 2xl:py-20"}>
<div className={"bg-foreground px-5 md:px-10 lg:px-15 2xl:px-30 2xl: py-12 lg:py-20 lg:rounded-3xl text-white"}>
<div className={"mb-10 md:mb-12 lg:mb-16"}>
<div className={"gsap-gallery-badge opacity-0 -translate-x-16 mb-4 lg:mb-6 flex items-center gap-2 w-fit bg-white text-foreground border border-border rounded-full px-2.5 pr-3 py-2"}>
<div className={"size-2.5 bg-primary rounded-full"}></div>
<strong className={"font-medium text-sm md:text-base"}>Moments Of Travelers</strong>
</div>
<div className={"flex flex-col lg:flex-row gap-8 lg:items-end justify-between"}>
<h2 className={"gsap-gallery-heading opacity-0 translate-y-16 text-3xl md:text-4xl lg:text-5xl font-semibold leading-snug lg:leading-[1.3] lg:max-w-xl"}>
                    A Visual Journey Through Bali's Wonders
                </h2>
<div className={"gsap-gallery-button opacity-0 translate-y-16 lg:translate-y-0 lg:translate-x-16 flex flex-col gap-8 lg:gap-4 items-start lg:items-end text-start lg:text-end lg:max-w-[32%]"}>
<div className={"mt-2 lg:mt-0"}>
<a href={"gallery.html"} className={"group inline-flex items-center justify-center gap-3 font-semibold rounded-full text-sm cursor-pointer transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary bg-white text-foreground hover:bg-white/90 pl-5 pr-2 py-2 w-fit"}>
<div className={"relative overflow-hidden flex items-center justify-center"}>
<span className={"block transition-transform duration-500 group-hover:translate-y-[150%]"}>Explore Our Gallery</span>
<span className={"absolute block transition-transform duration-500 -translate-y-[150%] group-hover:translate-y-0"}>Explore Our Gallery</span>
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
</div>
</div>
<div className={"gsap-gallery-marquee opacity-0 translate-y-16 relative overflow-hidden w-full mask-[linear-gradient(to_right,transparent,black_5%,black_95%,transparent)] py-5"}>
<div className={"gsap-marquee-horizontal flex w-max"}>

<div className={"flex gap-4 md:gap-6 pr-4 md:pr-6 lg:pr-8"}>
<img src={"assets/galleries/bdk2uvvu6stlowu9fhjc.webp"} className={"w-56 h-56 md:w-72 md:h-80 lg:w-96 lg:h-88 object-cover rounded-2xl border-[3px] lg:border-4 border-white transition-transform duration-300 hover:rotate-3 hover:scale-105 cursor-pointer shadow-xl"} alt={"Beautiful traditional Balinese gate with tourists, a must-visit sightseeing spot in Bali"} width={"384"} height={"352"} loading={"lazy"} decoding={"async"} />
<img src={"assets/galleries/dkuokdg5xh0xpytwno7v.webp"} className={"w-56 h-56 md:w-72 md:h-80 lg:w-96 lg:h-88 object-cover rounded-2xl border-[3px] lg:border-4 border-white transition-transform duration-300 hover:-rotate-3 hover:scale-105 cursor-pointer shadow-xl"} alt={"Tourist having fun on a Bali jungle swing over a green valley in Ubud"} width={"384"} height={"352"} loading={"lazy"} decoding={"async"} />
<img src={"assets/galleries/erpcsospbml5v1sl6xzs.webp"} className={"w-56 h-56 md:w-72 md:h-80 lg:w-96 lg:h-88 object-cover rounded-2xl border-[3px] lg:border-4 border-white transition-transform duration-300 hover:rotate-2 hover:scale-105 cursor-pointer shadow-xl"} alt={"Panoramic view of Tegalalang Rice Terraces in Ubud, Bali, a popular day tour destination"} width={"384"} height={"352"} loading={"lazy"} decoding={"async"} />
<img src={"assets/galleries/sotlfso1va1cge2szlmn.webp"} className={"w-56 h-56 md:w-72 md:h-80 lg:w-96 lg:h-88 object-cover rounded-2xl border-[3px] lg:border-4 border-white transition-transform duration-300 hover:-rotate-2 hover:scale-105 cursor-pointer shadow-xl"} alt={"Happy friends exploring Bali together with a private driver guide"} width={"384"} height={"352"} loading={"lazy"} decoding={"async"} />
<img src={"assets/galleries/tpaoqgzfbkrfpwntmtje.webp"} className={"w-56 h-56 md:w-72 md:h-80 lg:w-96 lg:h-88 object-cover rounded-2xl border-[3px] lg:border-4 border-white transition-transform duration-300 hover:rotate-3 hover:scale-105 cursor-pointer shadow-xl"} alt={"Iconic sunset over the Indian Ocean at Uluwatu Temple cliff, South Bali"} width={"384"} height={"352"} loading={"lazy"} decoding={"async"} />
<img src={"assets/galleries/ttoubtl9ndmw21ny1c3q.webp"} className={"w-56 h-56 md:w-72 md:h-80 lg:w-96 lg:h-88 object-cover rounded-2xl border-[3px] lg:border-4 border-white transition-transform duration-300 hover:-rotate-3 hover:scale-105 cursor-pointer shadow-xl"} alt={"Crystal clear turquoise waters and cliffs at Kelingking Beach in Nusa Penida, Bali"} width={"384"} height={"352"} loading={"lazy"} decoding={"async"} />
<img src={"assets/galleries/uwvcv1a5gxmyr9fiphlm.webp"} className={"w-56 h-56 md:w-72 md:h-80 lg:w-96 lg:h-88 object-cover rounded-2xl border-[3px] lg:border-4 border-white transition-transform duration-300 hover:rotate-2 hover:scale-105 cursor-pointer shadow-xl"} alt={"Magnificent tropical jungle waterfall, a scenic stop on Bali nature tours"} width={"384"} height={"352"} loading={"lazy"} decoding={"async"} />
<img src={"assets/galleries/xkcqpgpatfpmvfixwgl9.webp"} className={"w-56 h-56 md:w-72 md:h-80 lg:w-96 lg:h-88 object-cover rounded-2xl border-[3px] lg:border-4 border-white transition-transform duration-300 hover:-rotate-2 hover:scale-105 cursor-pointer shadow-xl"} alt={"Friendly Balinese driver holding a pickup sign at Ngurah Rai International Airport"} width={"384"} height={"352"} loading={"lazy"} decoding={"async"} />
</div>

<div className={"flex gap-4 md:gap-6 lg:gap-8 pr-4 md:pr-6 lg:pr-8"}>
<img src={"assets/galleries/bdk2uvvu6stlowu9fhjc.webp"} className={"w-56 h-56 md:w-72 md:h-80 lg:w-96 lg:h-88 object-cover rounded-2xl border-[3px] lg:border-4 border-white transition-transform duration-300 hover:rotate-3 hover:scale-105 cursor-pointer shadow-xl"} alt={"Beautiful traditional Balinese gate with tourists, a must-visit sightseeing spot in Bali"} width={"384"} height={"352"} loading={"lazy"} decoding={"async"} />
<img src={"assets/galleries/dkuokdg5xh0xpytwno7v.webp"} className={"w-56 h-56 md:w-72 md:h-80 lg:w-96 lg:h-88 object-cover rounded-2xl border-[3px] lg:border-4 border-white transition-transform duration-300 hover:-rotate-3 hover:scale-105 cursor-pointer shadow-xl"} alt={"Tourist having fun on a Bali jungle swing over a green valley in Ubud"} width={"384"} height={"352"} loading={"lazy"} decoding={"async"} />
<img src={"assets/galleries/erpcsospbml5v1sl6xzs.webp"} className={"w-56 h-56 md:w-72 md:h-80 lg:w-96 lg:h-88 object-cover rounded-2xl border-[3px] lg:border-4 border-white transition-transform duration-300 hover:rotate-2 hover:scale-105 cursor-pointer shadow-xl"} alt={"Panoramic view of Tegalalang Rice Terraces in Ubud, Bali, a popular day tour destination"} width={"384"} height={"352"} loading={"lazy"} decoding={"async"} />
<img src={"assets/galleries/sotlfso1va1cge2szlmn.webp"} className={"w-56 h-56 md:w-72 md:h-80 lg:w-96 lg:h-88 object-cover rounded-2xl border-[3px] lg:border-4 border-white transition-transform duration-300 hover:-rotate-2 hover:scale-105 cursor-pointer shadow-xl"} alt={"Happy friends exploring Bali together with a private driver guide"} width={"384"} height={"352"} loading={"lazy"} decoding={"async"} />
<img src={"assets/galleries/tpaoqgzfbkrfpwntmtje.webp"} className={"w-56 h-56 md:w-72 md:h-80 lg:w-96 lg:h-88 object-cover rounded-2xl border-[3px] lg:border-4 border-white transition-transform duration-300 hover:rotate-3 hover:scale-105 cursor-pointer shadow-xl"} alt={"Iconic sunset over the Indian Ocean at Uluwatu Temple cliff, South Bali"} width={"384"} height={"352"} loading={"lazy"} decoding={"async"} />
<img src={"assets/galleries/ttoubtl9ndmw21ny1c3q.webp"} className={"w-56 h-56 md:w-72 md:h-80 lg:w-96 lg:h-88 object-cover rounded-2xl border-[3px] lg:border-4 border-white transition-transform duration-300 hover:-rotate-3 hover:scale-105 cursor-pointer shadow-xl"} alt={"Crystal clear turquoise waters and cliffs at Kelingking Beach in Nusa Penida, Bali"} width={"384"} height={"352"} loading={"lazy"} decoding={"async"} />
<img src={"assets/galleries/uwvcv1a5gxmyr9fiphlm.webp"} className={"w-56 h-56 md:w-72 md:h-80 lg:w-96 lg:h-88 object-cover rounded-2xl border-[3px] lg:border-4 border-white transition-transform duration-300 hover:rotate-2 hover:scale-105 cursor-pointer shadow-xl"} alt={"Magnificent tropical jungle waterfall, a scenic stop on Bali nature tours"} width={"384"} height={"352"} loading={"lazy"} decoding={"async"} />
<img src={"assets/galleries/xkcqpgpatfpmvfixwgl9.webp"} className={"w-56 h-56 md:w-72 md:h-80 lg:w-96 lg:h-88 object-cover rounded-2xl border-[3px] lg:border-4 border-white transition-transform duration-300 hover:-rotate-2 hover:scale-105 cursor-pointer shadow-xl"} alt={"Friendly Balinese driver holding a pickup sign at Ngurah Rai International Airport"} width={"384"} height={"352"} loading={"lazy"} decoding={"async"} />
</div>
</div>
</div>
</div>
</section> <section id={"why"} className={"2xl:container mx-auto px-5 md:px-12 lg:px-20 2xl:px-30 py-15 2xl:py-20"}>
<div className={"grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10"}>
<div className={"lg:col-span-7 flex flex-col"}>
<div className={"mb-10 lg:mb-16"}>
<div className={"gsap-why-badge opacity-0 -translate-x-16 mb-4 lg:mb-6 flex items-center gap-2 w-fit bg-white border border-border rounded-full px-2.5 pr-3 py-2"}>
<div className={"size-2.5 bg-primary rounded-full"}></div>
<strong className={"font-medium text-sm md:text-base"}>Why Choose Bali Bagus Journey</strong>
</div>
<div className={"flex flex-col gap-4"}>
<h2 className={"gsap-why-heading opacity-0 translate-y-16 text-3xl md:text-4xl lg:text-5xl font-semibold leading-snug lg:leading-[1.3] lg:max-w-xl"}>
                        Travel Made Simple
                    </h2>
<div className={"flex flex-col gap-4 lg:gap-5 items-start text-start lg:max-w-lg"}>
<p className={"gsap-why-text opacity-0 translate-y-16 text-base leading-relaxed w-full"}>
                            Discover why travelers choose us for reliable transportation, personalized tours, and a seamless travel experience across Bali.
                        </p>
</div>
</div>
</div>
<div className={"grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5"}>
<div className={"gsap-why-feature opacity-0 scale-90 bg-card p-5 md:p-6 lg:p-8 rounded-2xl flex flex-col"}>
<div className={"bg-primary mb-5 lg:mb-10 rounded-2xl w-fit p-2 text-white"}>
<img src={"assets/icons/lucide_compass.svg"} alt={""} aria-hidden={"true"} className={"size-8"} />
</div>
<div className={"text-foreground flex flex-col grow"}>
<h3 className={"text-lg lg:text-xl font-semibold mb-2"}>Local Travel Experts</h3>
<p className={"text-base"}>Our experienced local team helps you discover Bali with trusted recommendations and personalized service.</p>
</div>
</div>
<div className={"gsap-why-feature opacity-0 scale-90 bg-card p-5 md:p-6 lg:p-8 rounded-2xl flex flex-col"}>
<div className={"bg-primary mb-5 lg:mb-10 rounded-2xl w-fit p-2 text-white"}>
<img src={"assets/icons/solar_dollar-linear.svg"} alt={""} aria-hidden={"true"} className={"size-8"} />
</div>
<div className={"text-foreground flex flex-col grow"}>
<h3 className={"text-lg lg:text-xl font-semibold mb-2"}>Transparent Pricing</h3>
<p className={"text-base"}>Enjoy fixed, upfront pricing with no hidden fees, so you always know what to expect.</p>
</div>
</div>
<div className={"gsap-why-feature opacity-0 scale-90 bg-card p-5 md:p-6 lg:p-8 rounded-2xl flex flex-col"}>
<div className={"bg-primary mb-5 lg:mb-10 rounded-2xl w-fit p-2 text-white"}>
<img src={"assets/icons/lucide_users-round.svg"} alt={""} aria-hidden={"true"} className={"size-8"} />
</div>
<div className={"text-foreground flex flex-col grow"}>
<h3 className={"text-lg lg:text-xl font-semibold mb-2"}>Perfect for Any Group</h3>
<p className={"text-base"}>Whether you're traveling solo, with family, or in a large group, we have vehicles that fit your needs.</p>
</div>
</div>
<div className={"gsap-why-feature opacity-0 scale-90 bg-card p-5 md:p-6 lg:p-8 rounded-2xl flex flex-col"}>
<div className={"bg-primary mb-5 lg:mb-10 rounded-2xl w-fit p-2 text-white"}>
<img src={"assets/icons/solar_route-linear.svg"} alt={""} aria-hidden={"true"} className={"size-8"} />
</div>
<div className={"text-foreground flex flex-col grow"}>
<h3 className={"text-lg lg:text-xl font-semibold mb-2"}>Optimized Travel Routes</h3>
<p className={"text-base"}>Our local drivers recommend the most efficient routes to help you avoid traffic and spend more time enjoying Bali.</p>
</div>
</div>
</div>
</div>
<div className={"gsap-why-image opacity-0 scale-95 lg:col-span-5 relative p-6 md:p-8 lg:p-9 flex items-end h-[350px] md:h-[450px] lg:h-auto rounded-2xl overflow-hidden mt-2 lg:mt-0"}>
<img src={"assets/home/why/k3foglqhf8mbbq0ckdf5.webp"} alt={"Scenic landscape of Mount Batur in Kintamani, Bali - representing custom tours offered by Bali Bagus Journey"} loading={"lazy"} decoding={"async"} width={"400"} height={"500"} className={"gsap-why-inner-image scale-125 w-full h-full absolute inset-0 object-cover"} />
<div className={"absolute inset-0 bg-linear-to-t from-foreground/50 to-foreground/0"}></div>
<p className={"gsap-why-inner-text opacity-0 translate-y-8 relative z-10 text-background font-medium w-xs text-sm md:text-base lg:text-base"}>From your first booking to your final destination, we're committed to making every Bali journey comfortable, reliable, and unforgettable.</p>
</div>
</div>
</section> <section id={"testimonial"} className={"2xl:container mx-auto px-5 md:px-12 lg:px-20 2xl:px-30 py-15 2xl:py-20"}>
<div className={"mb-10 md:mb-12 lg:mb-16"}>
<div className={"gsap-testimonial-badge opacity-0 -translate-x-16 mb-4 lg:mb-6 flex items-center gap-2 w-fit bg-white border border-border rounded-full px-2.5 pr-3 py-2"}>
<div className={"size-2.5 bg-primary rounded-full"}></div>
<strong className={"font-medium text-sm md:text-base"}>Customer Reviews</strong>
</div>
<div className={"flex flex-col lg:flex-row gap-3 lg:items-center justify-between"}>
<h2 className={"gsap-testimonial-heading opacity-0 translate-y-16 text-3xl md:text-4xl lg:text-5xl font-semibold leading-snug lg:leading-[1.3] lg:max-w-lg"}>
                Loved by Travelers from Around the World
            </h2>
<div className={"flex flex-col gap-8 lg:gap-4 items-start lg:items-end text-start lg:text-end lg:max-w-[33%]"}>
<p className={"gsap-testimonial-text opacity-0 translate-y-16 text-sm md:text-base leading-relaxed w-full"}>
                    See why travelers choose our Bali tours, private drivers, and airport transfer services for a comfortable and memorable journey.
                </p>
<div className={"gsap-testimonial-button opacity-0 translate-y-16 mt-2 lg:mt-0"}>
<a href={"contact.html"} className={"group inline-flex items-center justify-center gap-3 font-semibold rounded-full text-sm cursor-pointer transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary bg-foreground text-background hover:bg-foreground/90 pl-5 pr-2 py-2 w-fit"}>
<div className={"relative overflow-hidden flex items-center justify-center"}>
<span className={"block transition-transform duration-500 group-hover:translate-y-[150%]"}>Leave a review</span>
<span className={"absolute block transition-transform duration-500 -translate-y-[150%] group-hover:translate-y-0"}>Leave a review</span>
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
</div>
</div>
<div className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5"}>
<div className={"gsap-testimonial-card opacity-0 translate-y-16 p-6 lg:p-7 bg-card rounded-2xl flex flex-col justify-between gap-8 lg:gap-18"}>
<div className={"w-full lg:w-[85%]"}>
<p className={"text-4xl lg:text-[40px] font-semibold mb-3"}>
                    4.9/5
                </p>
<p className={"text-base lg:text-lg"}>
                    Discover why travelers trust Bali Bagus Journey for seamless adventures and unforgettable experiences.
                </p>
</div>
<div>
<p className={"text-sm font-semibold text-text-label-secondary mb-4 lg:mb-5"}>Trusted by global travelers</p>
<img src={"assets/home/testimonial/Frame%208.png"} alt={"Profile pictures of global travelers who booked Bali local drivers"} width={"120"} height={"32"} loading={"lazy"} decoding={"async"} className={"mb-3 lg:mb-4 h-8 lg:h-auto object-contain"} />
<div className={"flex items-center"}>
<svg aria-hidden={"true"} className={"h-5 lg:h-7 w-5 lg:w-7 text-primary"} xmlns={"http://www.w3.org/2000/svg"} viewBox={"0 0 24 24"} fill={"currentColor"} data-slot={"icon"}>
<path fillRule={"evenodd"} d={"M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"} clipRule={"evenodd"}></path>
</svg> <svg aria-hidden={"true"} className={"h-5 lg:h-7 w-5 lg:w-7 text-primary"} xmlns={"http://www.w3.org/2000/svg"} viewBox={"0 0 24 24"} fill={"currentColor"} data-slot={"icon"}>
<path fillRule={"evenodd"} d={"M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"} clipRule={"evenodd"}></path>
</svg> <svg aria-hidden={"true"} className={"h-5 lg:h-7 w-5 lg:w-7 text-primary"} xmlns={"http://www.w3.org/2000/svg"} viewBox={"0 0 24 24"} fill={"currentColor"} data-slot={"icon"}>
<path fillRule={"evenodd"} d={"M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"} clipRule={"evenodd"}></path>
</svg> <svg aria-hidden={"true"} className={"h-5 lg:h-7 w-5 lg:w-7 text-primary"} xmlns={"http://www.w3.org/2000/svg"} viewBox={"0 0 24 24"} fill={"currentColor"} data-slot={"icon"}>
<path fillRule={"evenodd"} d={"M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"} clipRule={"evenodd"}></path>
</svg> <svg aria-hidden={"true"} className={"h-5 lg:h-7 w-5 lg:w-7 text-primary"} xmlns={"http://www.w3.org/2000/svg"} viewBox={"0 0 24 24"} fill={"currentColor"} data-slot={"icon"}>
<path fillRule={"evenodd"} d={"M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"} clipRule={"evenodd"}></path>
</svg> </div>
</div>
</div>
<div className={"col-span-2 hidden lg:block overflow-hidden relative"}>
<div className={"gsap-testimonial-track flex gap-5"}>

<div className={"gsap-testimonial-slider-card opacity-0 translate-y-16 p-6 lg:p-7 bg-card rounded-2xl flex flex-col justify-between gap-8 lg:gap-28 shrink-0 w-[calc(50%-10px)]"}>
<div>
<div className={"flex items-center mb-4 lg:mb-5"}>
<svg className={"h-5 lg:h-7 w-5 lg:w-7 text-primary"} xmlns={"http://www.w3.org/2000/svg"} viewBox={"0 0 24 24"} fill={"currentColor"} aria-hidden={"true"} data-slot={"icon"}>
<path fillRule={"evenodd"} d={"M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"} clipRule={"evenodd"}></path>
</svg> <svg className={"h-5 lg:h-7 w-5 lg:w-7 text-primary"} xmlns={"http://www.w3.org/2000/svg"} viewBox={"0 0 24 24"} fill={"currentColor"} aria-hidden={"true"} data-slot={"icon"}>
<path fillRule={"evenodd"} d={"M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"} clipRule={"evenodd"}></path>
</svg> <svg className={"h-5 lg:h-7 w-5 lg:w-7 text-primary"} xmlns={"http://www.w3.org/2000/svg"} viewBox={"0 0 24 24"} fill={"currentColor"} aria-hidden={"true"} data-slot={"icon"}>
<path fillRule={"evenodd"} d={"M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"} clipRule={"evenodd"}></path>
</svg> <svg className={"h-5 lg:h-7 w-5 lg:w-7 text-primary"} xmlns={"http://www.w3.org/2000/svg"} viewBox={"0 0 24 24"} fill={"currentColor"} aria-hidden={"true"} data-slot={"icon"}>
<path fillRule={"evenodd"} d={"M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"} clipRule={"evenodd"}></path>
</svg> <svg className={"h-5 lg:h-7 w-5 lg:w-7 text-primary"} xmlns={"http://www.w3.org/2000/svg"} viewBox={"0 0 24 24"} fill={"currentColor"} aria-hidden={"true"} data-slot={"icon"}>
<path fillRule={"evenodd"} d={"M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"} clipRule={"evenodd"}></path>
</svg> </div>
<p className={"font-medium text-base lg:text-lg leading-relaxed w-full"}>
                            Our driver picked us up right on time and knew exactly which spots to hit before the crowds showed up. Made our trip to Ubud and Tanah Lot so much easier than trying to figure out transport ourselves.
                        </p>
</div>
<div>
<h3 className={"text-lg lg:text-xl font-medium"}>
                            Sarah Mitchell
                        </h3>
<p className={"text-sm lg:text-base text-text-label-secondary font-medium"}>
                            Australia
                        </p>
</div>
</div>
<div className={"gsap-testimonial-slider-card opacity-0 translate-y-16 p-6 lg:p-7 bg-card rounded-2xl flex flex-col justify-between gap-8 lg:gap-28 shrink-0 w-[calc(50%-10px)]"}>
<div>
<div className={"flex items-center mb-4 lg:mb-5"}>
<svg className={"h-5 lg:h-7 w-5 lg:w-7 text-primary"} xmlns={"http://www.w3.org/2000/svg"} viewBox={"0 0 24 24"} fill={"currentColor"} aria-hidden={"true"} data-slot={"icon"}>
<path fillRule={"evenodd"} d={"M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"} clipRule={"evenodd"}></path>
</svg> <svg className={"h-5 lg:h-7 w-5 lg:w-7 text-primary"} xmlns={"http://www.w3.org/2000/svg"} viewBox={"0 0 24 24"} fill={"currentColor"} aria-hidden={"true"} data-slot={"icon"}>
<path fillRule={"evenodd"} d={"M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"} clipRule={"evenodd"}></path>
</svg> <svg className={"h-5 lg:h-7 w-5 lg:w-7 text-primary"} xmlns={"http://www.w3.org/2000/svg"} viewBox={"0 0 24 24"} fill={"currentColor"} aria-hidden={"true"} data-slot={"icon"}>
<path fillRule={"evenodd"} d={"M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"} clipRule={"evenodd"}></path>
</svg> <svg className={"h-5 lg:h-7 w-5 lg:w-7 text-primary"} xmlns={"http://www.w3.org/2000/svg"} viewBox={"0 0 24 24"} fill={"currentColor"} aria-hidden={"true"} data-slot={"icon"}>
<path fillRule={"evenodd"} d={"M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"} clipRule={"evenodd"}></path>
</svg> <svg className={"h-5 lg:h-7 w-5 lg:w-7 text-primary"} xmlns={"http://www.w3.org/2000/svg"} viewBox={"0 0 24 24"} fill={"currentColor"} aria-hidden={"true"} data-slot={"icon"}>
<path fillRule={"evenodd"} d={"M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"} clipRule={"evenodd"}></path>
</svg> </div>
<p className={"font-medium text-base lg:text-lg leading-relaxed w-full"}>
                            The Mount Batur sunrise trek was the highlight of our whole Bali trip. Our guide was patient with our group even though half of us were clearly not morning people, and the rafting the next day was just as good.
                        </p>
</div>
<div>
<h3 className={"text-lg lg:text-xl font-medium"}>
                            Thomas Weber
                        </h3>
<p className={"text-sm lg:text-base text-text-label-secondary font-medium"}>
                            Germany
                        </p>
</div>
</div>
<div className={"gsap-testimonial-slider-card opacity-0 translate-y-16 p-6 lg:p-7 bg-card rounded-2xl flex flex-col justify-between gap-8 lg:gap-28 shrink-0 w-[calc(50%-10px)]"}>
<div>
<div className={"flex items-center mb-4 lg:mb-5"}>
<svg className={"h-5 lg:h-7 w-5 lg:w-7 text-primary"} xmlns={"http://www.w3.org/2000/svg"} viewBox={"0 0 24 24"} fill={"currentColor"} aria-hidden={"true"} data-slot={"icon"}>
<path fillRule={"evenodd"} d={"M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"} clipRule={"evenodd"}></path>
</svg> <svg className={"h-5 lg:h-7 w-5 lg:w-7 text-primary"} xmlns={"http://www.w3.org/2000/svg"} viewBox={"0 0 24 24"} fill={"currentColor"} aria-hidden={"true"} data-slot={"icon"}>
<path fillRule={"evenodd"} d={"M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"} clipRule={"evenodd"}></path>
</svg> <svg className={"h-5 lg:h-7 w-5 lg:w-7 text-primary"} xmlns={"http://www.w3.org/2000/svg"} viewBox={"0 0 24 24"} fill={"currentColor"} aria-hidden={"true"} data-slot={"icon"}>
<path fillRule={"evenodd"} d={"M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"} clipRule={"evenodd"}></path>
</svg> <svg className={"h-5 lg:h-7 w-5 lg:w-7 text-primary"} xmlns={"http://www.w3.org/2000/svg"} viewBox={"0 0 24 24"} fill={"currentColor"} aria-hidden={"true"} data-slot={"icon"}>
<path fillRule={"evenodd"} d={"M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"} clipRule={"evenodd"}></path>
</svg> <svg className={"h-5 lg:h-7 w-5 lg:w-7 text-primary"} xmlns={"http://www.w3.org/2000/svg"} viewBox={"0 0 24 24"} fill={"currentColor"} aria-hidden={"true"} data-slot={"icon"}>
<path fillRule={"evenodd"} d={"M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"} clipRule={"evenodd"}></path>
</svg> </div>
<p className={"font-medium text-base lg:text-lg leading-relaxed w-full"}>
                            I didn't expect a food tour to also teach me so much about the ceremonies and temples we passed. The warung stops were amazing, and our guide explained everything in a way that never felt rushed.
                        </p>
</div>
<div>
<h3 className={"text-lg lg:text-xl font-medium"}>
                            Aiko Tanaka
                        </h3>
<p className={"text-sm lg:text-base text-text-label-secondary font-medium"}>
                            Japan
                        </p>
</div>
</div>
<div className={"gsap-testimonial-slider-card opacity-0 translate-y-16 p-6 lg:p-7 bg-card rounded-2xl flex flex-col justify-between gap-8 lg:gap-28 shrink-0 w-[calc(50%-10px)]"}>
<div>
<div className={"flex items-center mb-4 lg:mb-5"}>
<svg className={"h-5 lg:h-7 w-5 lg:w-7 text-primary"} xmlns={"http://www.w3.org/2000/svg"} viewBox={"0 0 24 24"} fill={"currentColor"} aria-hidden={"true"} data-slot={"icon"}>
<path fillRule={"evenodd"} d={"M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"} clipRule={"evenodd"}></path>
</svg> <svg className={"h-5 lg:h-7 w-5 lg:w-7 text-primary"} xmlns={"http://www.w3.org/2000/svg"} viewBox={"0 0 24 24"} fill={"currentColor"} aria-hidden={"true"} data-slot={"icon"}>
<path fillRule={"evenodd"} d={"M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"} clipRule={"evenodd"}></path>
</svg> <svg className={"h-5 lg:h-7 w-5 lg:w-7 text-primary"} xmlns={"http://www.w3.org/2000/svg"} viewBox={"0 0 24 24"} fill={"currentColor"} aria-hidden={"true"} data-slot={"icon"}>
<path fillRule={"evenodd"} d={"M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"} clipRule={"evenodd"}></path>
</svg> <svg className={"h-5 lg:h-7 w-5 lg:w-7 text-primary"} xmlns={"http://www.w3.org/2000/svg"} viewBox={"0 0 24 24"} fill={"currentColor"} aria-hidden={"true"} data-slot={"icon"}>
<path fillRule={"evenodd"} d={"M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"} clipRule={"evenodd"}></path>
</svg> <svg className={"h-5 lg:h-7 w-5 lg:w-7 text-primary"} xmlns={"http://www.w3.org/2000/svg"} viewBox={"0 0 24 24"} fill={"currentColor"} aria-hidden={"true"} data-slot={"icon"}>
<path fillRule={"evenodd"} d={"M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"} clipRule={"evenodd"}></path>
</svg> </div>
<p className={"font-medium text-base lg:text-lg leading-relaxed w-full"}>
                            Booking everything through one package saved us so much planning time. The only reason it's not a full 5 stars is one of our activities got moved due to weather, but the team rearranged it quickly and kept us in the loop.
                        </p>
</div>
<div>
<h3 className={"text-lg lg:text-xl font-medium"}>
                            James & Priya Patel
                        </h3>
<p className={"text-sm lg:text-base text-text-label-secondary font-medium"}>
                            United Kingdom
                        </p>
</div>
</div>

<div className={"gsap-testimonial-slider-card opacity-0 translate-y-16 p-6 lg:p-7 bg-card rounded-2xl flex flex-col justify-between gap-8 lg:gap-28 shrink-0 w-[calc(50%-10px)]"}>
<div>
<div className={"flex items-center mb-4 lg:mb-5"}>
<svg className={"h-5 lg:h-7 w-5 lg:w-7 text-primary"} xmlns={"http://www.w3.org/2000/svg"} viewBox={"0 0 24 24"} fill={"currentColor"} aria-hidden={"true"} data-slot={"icon"}>
<path fillRule={"evenodd"} d={"M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"} clipRule={"evenodd"}></path>
</svg> <svg className={"h-5 lg:h-7 w-5 lg:w-7 text-primary"} xmlns={"http://www.w3.org/2000/svg"} viewBox={"0 0 24 24"} fill={"currentColor"} aria-hidden={"true"} data-slot={"icon"}>
<path fillRule={"evenodd"} d={"M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"} clipRule={"evenodd"}></path>
</svg> <svg className={"h-5 lg:h-7 w-5 lg:w-7 text-primary"} xmlns={"http://www.w3.org/2000/svg"} viewBox={"0 0 24 24"} fill={"currentColor"} aria-hidden={"true"} data-slot={"icon"}>
<path fillRule={"evenodd"} d={"M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"} clipRule={"evenodd"}></path>
</svg> <svg className={"h-5 lg:h-7 w-5 lg:w-7 text-primary"} xmlns={"http://www.w3.org/2000/svg"} viewBox={"0 0 24 24"} fill={"currentColor"} aria-hidden={"true"} data-slot={"icon"}>
<path fillRule={"evenodd"} d={"M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"} clipRule={"evenodd"}></path>
</svg> <svg className={"h-5 lg:h-7 w-5 lg:w-7 text-primary"} xmlns={"http://www.w3.org/2000/svg"} viewBox={"0 0 24 24"} fill={"currentColor"} aria-hidden={"true"} data-slot={"icon"}>
<path fillRule={"evenodd"} d={"M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"} clipRule={"evenodd"}></path>
</svg> </div>
<p className={"font-medium text-base lg:text-lg leading-relaxed w-full"}>
                            Our driver picked us up right on time and knew exactly which spots to hit before the crowds showed up. Made our trip to Ubud and Tanah Lot so much easier than trying to figure out transport ourselves.
                        </p>
</div>
<div>
<h3 className={"text-lg lg:text-xl font-medium"}>
                            Sarah Mitchell
                        </h3>
<p className={"text-sm lg:text-base text-text-label-secondary font-medium"}>
                            Australia
                        </p>
</div>
</div>
<div className={"gsap-testimonial-slider-card opacity-0 translate-y-16 p-6 lg:p-7 bg-card rounded-2xl flex flex-col justify-between gap-8 lg:gap-28 shrink-0 w-[calc(50%-10px)]"}>
<div>
<div className={"flex items-center mb-4 lg:mb-5"}>
<svg className={"h-5 lg:h-7 w-5 lg:w-7 text-primary"} xmlns={"http://www.w3.org/2000/svg"} viewBox={"0 0 24 24"} fill={"currentColor"} aria-hidden={"true"} data-slot={"icon"}>
<path fillRule={"evenodd"} d={"M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"} clipRule={"evenodd"}></path>
</svg> <svg className={"h-5 lg:h-7 w-5 lg:w-7 text-primary"} xmlns={"http://www.w3.org/2000/svg"} viewBox={"0 0 24 24"} fill={"currentColor"} aria-hidden={"true"} data-slot={"icon"}>
<path fillRule={"evenodd"} d={"M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"} clipRule={"evenodd"}></path>
</svg> <svg className={"h-5 lg:h-7 w-5 lg:w-7 text-primary"} xmlns={"http://www.w3.org/2000/svg"} viewBox={"0 0 24 24"} fill={"currentColor"} aria-hidden={"true"} data-slot={"icon"}>
<path fillRule={"evenodd"} d={"M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"} clipRule={"evenodd"}></path>
</svg> <svg className={"h-5 lg:h-7 w-5 lg:w-7 text-primary"} xmlns={"http://www.w3.org/2000/svg"} viewBox={"0 0 24 24"} fill={"currentColor"} aria-hidden={"true"} data-slot={"icon"}>
<path fillRule={"evenodd"} d={"M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"} clipRule={"evenodd"}></path>
</svg> <svg className={"h-5 lg:h-7 w-5 lg:w-7 text-primary"} xmlns={"http://www.w3.org/2000/svg"} viewBox={"0 0 24 24"} fill={"currentColor"} aria-hidden={"true"} data-slot={"icon"}>
<path fillRule={"evenodd"} d={"M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"} clipRule={"evenodd"}></path>
</svg> </div>
<p className={"font-medium text-base lg:text-lg leading-relaxed w-full"}>
                            The Mount Batur sunrise trek was the highlight of our whole Bali trip. Our guide was patient with our group even though half of us were clearly not morning people, and the rafting the next day was just as good.
                        </p>
</div>
<div>
<h3 className={"text-lg lg:text-xl font-medium"}>
                            Thomas Weber
                        </h3>
<p className={"text-sm lg:text-base text-text-label-secondary font-medium"}>
                            Germany
                        </p>
</div>
</div>
<div className={"gsap-testimonial-slider-card opacity-0 translate-y-16 p-6 lg:p-7 bg-card rounded-2xl flex flex-col justify-between gap-8 lg:gap-28 shrink-0 w-[calc(50%-10px)]"}>
<div>
<div className={"flex items-center mb-4 lg:mb-5"}>
<svg className={"h-5 lg:h-7 w-5 lg:w-7 text-primary"} xmlns={"http://www.w3.org/2000/svg"} viewBox={"0 0 24 24"} fill={"currentColor"} aria-hidden={"true"} data-slot={"icon"}>
<path fillRule={"evenodd"} d={"M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"} clipRule={"evenodd"}></path>
</svg> <svg className={"h-5 lg:h-7 w-5 lg:w-7 text-primary"} xmlns={"http://www.w3.org/2000/svg"} viewBox={"0 0 24 24"} fill={"currentColor"} aria-hidden={"true"} data-slot={"icon"}>
<path fillRule={"evenodd"} d={"M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"} clipRule={"evenodd"}></path>
</svg> <svg className={"h-5 lg:h-7 w-5 lg:w-7 text-primary"} xmlns={"http://www.w3.org/2000/svg"} viewBox={"0 0 24 24"} fill={"currentColor"} aria-hidden={"true"} data-slot={"icon"}>
<path fillRule={"evenodd"} d={"M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"} clipRule={"evenodd"}></path>
</svg> <svg className={"h-5 lg:h-7 w-5 lg:w-7 text-primary"} xmlns={"http://www.w3.org/2000/svg"} viewBox={"0 0 24 24"} fill={"currentColor"} aria-hidden={"true"} data-slot={"icon"}>
<path fillRule={"evenodd"} d={"M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"} clipRule={"evenodd"}></path>
</svg> <svg className={"h-5 lg:h-7 w-5 lg:w-7 text-primary"} xmlns={"http://www.w3.org/2000/svg"} viewBox={"0 0 24 24"} fill={"currentColor"} aria-hidden={"true"} data-slot={"icon"}>
<path fillRule={"evenodd"} d={"M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"} clipRule={"evenodd"}></path>
</svg> </div>
<p className={"font-medium text-base lg:text-lg leading-relaxed w-full"}>
                            I didn't expect a food tour to also teach me so much about the ceremonies and temples we passed. The warung stops were amazing, and our guide explained everything in a way that never felt rushed.
                        </p>
</div>
<div>
<h3 className={"text-lg lg:text-xl font-medium"}>
                            Aiko Tanaka
                        </h3>
<p className={"text-sm lg:text-base text-text-label-secondary font-medium"}>
                            Japan
                        </p>
</div>
</div>
<div className={"gsap-testimonial-slider-card opacity-0 translate-y-16 p-6 lg:p-7 bg-card rounded-2xl flex flex-col justify-between gap-8 lg:gap-28 shrink-0 w-[calc(50%-10px)]"}>
<div>
<div className={"flex items-center mb-4 lg:mb-5"}>
<svg className={"h-5 lg:h-7 w-5 lg:w-7 text-primary"} xmlns={"http://www.w3.org/2000/svg"} viewBox={"0 0 24 24"} fill={"currentColor"} aria-hidden={"true"} data-slot={"icon"}>
<path fillRule={"evenodd"} d={"M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"} clipRule={"evenodd"}></path>
</svg> <svg className={"h-5 lg:h-7 w-5 lg:w-7 text-primary"} xmlns={"http://www.w3.org/2000/svg"} viewBox={"0 0 24 24"} fill={"currentColor"} aria-hidden={"true"} data-slot={"icon"}>
<path fillRule={"evenodd"} d={"M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"} clipRule={"evenodd"}></path>
</svg> <svg className={"h-5 lg:h-7 w-5 lg:w-7 text-primary"} xmlns={"http://www.w3.org/2000/svg"} viewBox={"0 0 24 24"} fill={"currentColor"} aria-hidden={"true"} data-slot={"icon"}>
<path fillRule={"evenodd"} d={"M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"} clipRule={"evenodd"}></path>
</svg> <svg className={"h-5 lg:h-7 w-5 lg:w-7 text-primary"} xmlns={"http://www.w3.org/2000/svg"} viewBox={"0 0 24 24"} fill={"currentColor"} aria-hidden={"true"} data-slot={"icon"}>
<path fillRule={"evenodd"} d={"M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"} clipRule={"evenodd"}></path>
</svg> <svg className={"h-5 lg:h-7 w-5 lg:w-7 text-primary"} xmlns={"http://www.w3.org/2000/svg"} viewBox={"0 0 24 24"} fill={"currentColor"} aria-hidden={"true"} data-slot={"icon"}>
<path fillRule={"evenodd"} d={"M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"} clipRule={"evenodd"}></path>
</svg> </div>
<p className={"font-medium text-base lg:text-lg leading-relaxed w-full"}>
                            Booking everything through one package saved us so much planning time. The only reason it's not a full 5 stars is one of our activities got moved due to weather, but the team rearranged it quickly and kept us in the loop.
                        </p>
</div>
<div>
<h3 className={"text-lg lg:text-xl font-medium"}>
                            James & Priya Patel
                        </h3>
<p className={"text-sm lg:text-base text-text-label-secondary font-medium"}>
                            United Kingdom
                        </p>
</div>
</div>
</div>
</div>
<div className={"lg:hidden gsap-testimonial-card opacity-0 translate-y-16 p-6 lg:p-7 bg-card rounded-2xl flex flex-col justify-between gap-8 lg:gap-28"}>
<div>
<div className={"flex items-center mb-4 lg:mb-5"}>
<svg className={"h-5 lg:h-7 w-5 lg:w-7 text-primary"} xmlns={"http://www.w3.org/2000/svg"} viewBox={"0 0 24 24"} fill={"currentColor"} aria-hidden={"true"} data-slot={"icon"}>
<path fillRule={"evenodd"} d={"M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"} clipRule={"evenodd"}></path>
</svg> <svg className={"h-5 lg:h-7 w-5 lg:w-7 text-primary"} xmlns={"http://www.w3.org/2000/svg"} viewBox={"0 0 24 24"} fill={"currentColor"} aria-hidden={"true"} data-slot={"icon"}>
<path fillRule={"evenodd"} d={"M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"} clipRule={"evenodd"}></path>
</svg> <svg className={"h-5 lg:h-7 w-5 lg:w-7 text-primary"} xmlns={"http://www.w3.org/2000/svg"} viewBox={"0 0 24 24"} fill={"currentColor"} aria-hidden={"true"} data-slot={"icon"}>
<path fillRule={"evenodd"} d={"M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"} clipRule={"evenodd"}></path>
</svg> <svg className={"h-5 lg:h-7 w-5 lg:w-7 text-primary"} xmlns={"http://www.w3.org/2000/svg"} viewBox={"0 0 24 24"} fill={"currentColor"} aria-hidden={"true"} data-slot={"icon"}>
<path fillRule={"evenodd"} d={"M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"} clipRule={"evenodd"}></path>
</svg> <svg className={"h-5 lg:h-7 w-5 lg:w-7 text-primary"} xmlns={"http://www.w3.org/2000/svg"} viewBox={"0 0 24 24"} fill={"currentColor"} aria-hidden={"true"} data-slot={"icon"}>
<path fillRule={"evenodd"} d={"M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"} clipRule={"evenodd"}></path>
</svg> </div>
<p className={"font-medium text-base lg:text-lg leading-relaxed w-full"}>
                    Our driver picked us up right on time and knew exactly which spots to hit before the crowds showed up. Made our trip to Ubud and Tanah Lot so much easier than trying to figure out transport ourselves.
                </p>
</div>
<div>
<h3 className={"text-lg lg:text-xl font-medium"}>
                    Sarah Mitchell
                </h3>
<p className={"text-sm lg:text-base text-text-label-secondary font-medium"}>
                    Australia
                </p>
</div>
</div>
<div className={"lg:hidden gsap-testimonial-card opacity-0 translate-y-16 p-6 lg:p-7 bg-card rounded-2xl flex flex-col justify-between gap-8 lg:gap-28 md:col-span-2 lg:col-span-1"}>
<div>
<div className={"flex items-center mb-4 lg:mb-5"}>
<svg className={"h-5 lg:h-7 w-5 lg:w-7 text-primary"} xmlns={"http://www.w3.org/2000/svg"} viewBox={"0 0 24 24"} fill={"currentColor"} aria-hidden={"true"} data-slot={"icon"}>
<path fillRule={"evenodd"} d={"M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"} clipRule={"evenodd"}></path>
</svg> <svg className={"h-5 lg:h-7 w-5 lg:w-7 text-primary"} xmlns={"http://www.w3.org/2000/svg"} viewBox={"0 0 24 24"} fill={"currentColor"} aria-hidden={"true"} data-slot={"icon"}>
<path fillRule={"evenodd"} d={"M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"} clipRule={"evenodd"}></path>
</svg> <svg className={"h-5 lg:h-7 w-5 lg:w-7 text-primary"} xmlns={"http://www.w3.org/2000/svg"} viewBox={"0 0 24 24"} fill={"currentColor"} aria-hidden={"true"} data-slot={"icon"}>
<path fillRule={"evenodd"} d={"M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"} clipRule={"evenodd"}></path>
</svg> <svg className={"h-5 lg:h-7 w-5 lg:w-7 text-primary"} xmlns={"http://www.w3.org/2000/svg"} viewBox={"0 0 24 24"} fill={"currentColor"} aria-hidden={"true"} data-slot={"icon"}>
<path fillRule={"evenodd"} d={"M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"} clipRule={"evenodd"}></path>
</svg> <svg className={"h-5 lg:h-7 w-5 lg:w-7 text-primary"} xmlns={"http://www.w3.org/2000/svg"} viewBox={"0 0 24 24"} fill={"currentColor"} aria-hidden={"true"} data-slot={"icon"}>
<path fillRule={"evenodd"} d={"M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"} clipRule={"evenodd"}></path>
</svg> </div>
<p className={"font-medium text-base lg:text-lg leading-relaxed w-full"}>
                    The Mount Batur sunrise trek was the highlight of our whole Bali trip. Our guide was patient with our group even though half of us were clearly not morning people, and the rafting the next day was just as good.
                </p>
</div>
<div>
<h3 className={"text-lg lg:text-xl font-medium"}>
                    Thomas Weber
                </h3>
<p className={"text-sm lg:text-base text-text-label-secondary font-medium"}>
                    Germany
                </p>
</div>
</div>
<div className={"lg:hidden gsap-testimonial-card opacity-0 translate-y-16 p-6 lg:p-7 bg-card rounded-2xl flex flex-col justify-between gap-8 lg:gap-28"}>
<div>
<div className={"flex items-center mb-4 lg:mb-5"}>
<svg className={"h-5 lg:h-7 w-5 lg:w-7 text-primary"} xmlns={"http://www.w3.org/2000/svg"} viewBox={"0 0 24 24"} fill={"currentColor"} aria-hidden={"true"} data-slot={"icon"}>
<path fillRule={"evenodd"} d={"M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"} clipRule={"evenodd"}></path>
</svg> <svg className={"h-5 lg:h-7 w-5 lg:w-7 text-primary"} xmlns={"http://www.w3.org/2000/svg"} viewBox={"0 0 24 24"} fill={"currentColor"} aria-hidden={"true"} data-slot={"icon"}>
<path fillRule={"evenodd"} d={"M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"} clipRule={"evenodd"}></path>
</svg> <svg className={"h-5 lg:h-7 w-5 lg:w-7 text-primary"} xmlns={"http://www.w3.org/2000/svg"} viewBox={"0 0 24 24"} fill={"currentColor"} aria-hidden={"true"} data-slot={"icon"}>
<path fillRule={"evenodd"} d={"M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"} clipRule={"evenodd"}></path>
</svg> <svg className={"h-5 lg:h-7 w-5 lg:w-7 text-primary"} xmlns={"http://www.w3.org/2000/svg"} viewBox={"0 0 24 24"} fill={"currentColor"} aria-hidden={"true"} data-slot={"icon"}>
<path fillRule={"evenodd"} d={"M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"} clipRule={"evenodd"}></path>
</svg> <svg className={"h-5 lg:h-7 w-5 lg:w-7 text-primary"} xmlns={"http://www.w3.org/2000/svg"} viewBox={"0 0 24 24"} fill={"currentColor"} aria-hidden={"true"} data-slot={"icon"}>
<path fillRule={"evenodd"} d={"M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"} clipRule={"evenodd"}></path>
</svg> </div>
<p className={"font-medium text-base lg:text-lg leading-relaxed w-full"}>
                    I didn't expect a food tour to also teach me so much about the ceremonies and temples we passed. The warung stops were amazing, and our guide explained everything in a way that never felt rushed.
                </p>
</div>
<div>
<h3 className={"text-lg lg:text-xl font-medium"}>
                    Aiko Tanaka
                </h3>
<p className={"text-sm lg:text-base text-text-label-secondary font-medium"}>
                    Japan
                </p>
</div>
</div>
<div className={"lg:hidden gsap-testimonial-card opacity-0 translate-y-16 p-6 lg:p-7 bg-card rounded-2xl flex flex-col justify-between gap-8 lg:gap-28"}>
<div>
<div className={"flex items-center mb-4 lg:mb-5"}>
<svg className={"h-5 lg:h-7 w-5 lg:w-7 text-primary"} xmlns={"http://www.w3.org/2000/svg"} viewBox={"0 0 24 24"} fill={"currentColor"} aria-hidden={"true"} data-slot={"icon"}>
<path fillRule={"evenodd"} d={"M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"} clipRule={"evenodd"}></path>
</svg> <svg className={"h-5 lg:h-7 w-5 lg:w-7 text-primary"} xmlns={"http://www.w3.org/2000/svg"} viewBox={"0 0 24 24"} fill={"currentColor"} aria-hidden={"true"} data-slot={"icon"}>
<path fillRule={"evenodd"} d={"M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"} clipRule={"evenodd"}></path>
</svg> <svg className={"h-5 lg:h-7 w-5 lg:w-7 text-primary"} xmlns={"http://www.w3.org/2000/svg"} viewBox={"0 0 24 24"} fill={"currentColor"} aria-hidden={"true"} data-slot={"icon"}>
<path fillRule={"evenodd"} d={"M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"} clipRule={"evenodd"}></path>
</svg> <svg className={"h-5 lg:h-7 w-5 lg:w-7 text-primary"} xmlns={"http://www.w3.org/2000/svg"} viewBox={"0 0 24 24"} fill={"currentColor"} aria-hidden={"true"} data-slot={"icon"}>
<path fillRule={"evenodd"} d={"M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"} clipRule={"evenodd"}></path>
</svg> <svg className={"h-5 lg:h-7 w-5 lg:w-7 text-primary"} xmlns={"http://www.w3.org/2000/svg"} viewBox={"0 0 24 24"} fill={"currentColor"} aria-hidden={"true"} data-slot={"icon"}>
<path fillRule={"evenodd"} d={"M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"} clipRule={"evenodd"}></path>
</svg> </div>
<p className={"font-medium text-base lg:text-lg leading-relaxed w-full"}>
                    Booking everything through one package saved us so much planning time. The only reason it's not a full 5 stars is one of our activities got moved due to weather, but the team rearranged it quickly and kept us in the loop.
                </p>
</div>
<div>
<h3 className={"text-lg lg:text-xl font-medium"}>
                    James & Priya Patel
                </h3>
<p className={"text-sm lg:text-base text-text-label-secondary font-medium"}>
                    United Kingdom
                </p>
</div>
</div>
</div></section> <section id={"blog"} className={"2xl:container mx-auto px-5 md:px-12 lg:px-20 2xl:px-30 py-15 2xl:py-20"}>
<div className={"mb-10 md:mb-12 lg:mb-16"}>
<div className={"gsap-blog-badge opacity-0 -translate-x-16 mb-4 lg:mb-6 flex items-center gap-2 w-fit bg-white border border-border rounded-full px-2.5 pr-3 py-2"}>
<div className={"size-2.5 bg-primary rounded-full"}></div>
<strong className={"font-medium text-sm md:text-base"}>Blogs & Articles</strong>
</div>
<div className={"flex flex-col lg:flex-row gap-3 lg:items-center justify-between"}>
<h2 className={"gsap-blog-heading opacity-0 translate-y-16 text-3xl md:text-4xl lg:text-5xl font-semibold leading-snug lg:leading-[1.3] lg:max-w-lg"}>
                Bali Travel Tips & Destination Guides
            </h2>
<div className={"flex flex-col gap-8 lg:gap-4 items-start lg:items-end text-start lg:text-end lg:max-w-[33%]"}>
<p className={"gsap-blog-text opacity-0 translate-y-16 text-sm md:text-base leading-relaxed w-full"}>
                   Find helpful articles about Bali's top attractions, transportation, travel itineraries, and local experiences to make your journey easier and more enjoyable.
                </p>
<div className={"gsap-blog-button opacity-0 translate-y-16 mt-2 lg:mt-0"}>
<a href={"blogs.html"} className={"group inline-flex items-center justify-center gap-3 font-semibold rounded-full text-sm cursor-pointer transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary bg-foreground text-background hover:bg-foreground/90 pl-5 pr-2 py-2 w-fit"}>
<div className={"relative overflow-hidden flex items-center justify-center"}>
<span className={"block transition-transform duration-500 group-hover:translate-y-[150%]"}>Read All Guides</span>
<span className={"absolute block transition-transform duration-500 -translate-y-[150%] group-hover:translate-y-0"}>Read All Guides</span>
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
</div>
</div>
<div className={"grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6"}>
<div className={"gsap-blog-main opacity-0 scale-95 lg:col-span-6 p-5 md:p-6 lg:p-7 bg-card rounded-2xl flex flex-col"}>
<div className={"relative h-64 md:h-80 lg:h-[26rem] rounded-2xl overflow-hidden mb-4 md:mb-5 lg:mb-6"}>
<img src={"storage/blog-covers/01KZWE8G8XFBR2ZPVM5YM33MJ2.webp"} alt={"10 Best Things to Do in Bali for First-Time Visitors"} className={"absolute inset-0 object-cover rounded-2xl h-full w-full"} />
<span className={"absolute top-4 left-4 lg:top-5 lg:left-5 bg-background text-foreground text-xs lg:text-sm px-3 py-1.5 lg:px-4 lg:py-2 rounded-full font-semibold"}>Recently Article</span>
</div>
<div className={"flex flex-col grow"}>
<div className={"mb-4 lg:mb-5 grow"}>
<h3 className={"text-lg lg:text-2xl font-semibold mb-2 line-clamp-2"}>10 Best Things to Do in Bali for First-Time Visitors</h3>
<p className={"text-sm lg:text-base line-clamp-2"}>
                        10 Best Things to Do in Bali for First-Time VisitorsBali has a way of overwhelming first-time visitors in the best way possible. Between ancient temples, rice terrace views, world-class surf breaks, and a food scene that could keep you busy for weeks, narrowing down an itinerary can feel impossible. If this is your first trip to the Island of the Gods, here are ten experiences worth building your schedule around.1. Watch the Sunset at Tanah Lot TemplePerched on a rock formation just off the coast, Tanah Lot is one of Bali&#039;s most photographed sea temples. Arrive a couple of hours before sunset to explore the surrounding market stalls and grab a spot along the cliffside before the sky turns gold. It gets crowded, so an early arrival — or a guided tour that times your visit well — makes a real difference.2. Walk Through the Tegallalang Rice TerracesJust north of Ubud, the Tegallalang terraces show off the traditional Balinese subak irrigation system, a UNESCO-recognized method of water management that&#039;s been used for centuries. Go early in the morning to beat both the heat and the crowds, and budget time for a coffee break at one of the terrace-view cafés.3. Explore the Sacred Monkey Forest SanctuaryThis shaded forest sanctuary in the heart of Ubud is home to hundreds of long-tailed macaques and several ancient temple structures. It&#039;s a quick stop, but a memorable one — just keep sunglasses and loose items tucked away.4. Chase Waterfalls in North BaliSekumpul, Tegenungan, and Nungnung waterfalls are all popular, but each requires a different level of effort to reach. If you only have time for one, Sekumpul&#039;s multi-tiered cascade is widely considered the most dramatic — though the hike down (and back up) is no joke.5. Snorkel or Dive Around Nusa PenidaThe waters around Nusa Penida and the nearby Nusa islands are known for manta ray sightings, dramatic drop-offs, and clear visibility. A day trip by fast boat is the easiest way to fit this into a shorter itinerary.6. Catch a Traditional Kecak Fire DanceThis hypnotic performance, set against a chorus of chanting rather than instruments, tells the story of the Ramayana. Uluwatu Temple hosts one of the most atmospheric versions, with the sunset and cliffside setting adding to the drama.7. Visit Besakih, Bali&#039;s &quot;Mother Temple&quot;Located on the slopes of Mount Agung, Besakih is the largest and holiest temple complex on the island. It&#039;s a longer trip from the south, but a meaningful one if you&#039;re interested in Balinese Hindu architecture and spiritual life.8. Ride Through Rice Fields on a Bike or ScooterRenting a bike (or joining a downhill cycling tour from Kintamani) is one of the most relaxed ways to see rural Bali up close — village temples, working rice paddies, and roadside offerings included.9. Soak in a Natural Hot SpringToya Devasya near Lake Batur and the hot springs at Banjar in the north both combine mineral-rich water with volcanic or forest views. A good way to rest tired legs after a day of temple-hopping or trekking.10. Watch the Sunrise from Mount BaturFor travelers who don&#039;t mind a pre-dawn start, the trek up Mount Batur rewards you with a sunrise over the caldera and, on clear days, views stretching to Mount Agung and Lombok. Most trekkers go with a local guide, both for safety and to support the surrounding village communities.Planning Tip: Group Your Days by RegionBali is bigger than it looks on a map, and traffic can eat into your day fast. Rather than crisscrossing the island daily, group activities by region — Ubud and the central highlands one day, Uluwatu and the southern peninsula another, Nusa Penida as its own full-day trip. If you&#039;re working with a local tour and transport service, ask them to help sequence your days this way; it&#039;s one of the easiest ways to get more out of a short trip.
                    </p>
</div>
<a href={"blogs/10-best-things-to-do-in-bali-for-first-time-visitors.html"} className={"group inline-flex items-center justify-center gap-3 font-semibold rounded-full text-sm cursor-pointer transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary bg-white text-foreground hover:bg-white/90 pl-4 pr-2 py-1.5 lg:pl-5 lg:pr-2 lg:py-2 w-fit"}>
<div className={"relative overflow-hidden flex items-center justify-center"}>
<span className={"block transition-transform duration-500 group-hover:translate-y-[150%]"}>Read Article</span>
<span className={"absolute block transition-transform duration-500 -translate-y-[150%] group-hover:translate-y-0"}>Read Article</span>
</div>
<span className={"bg-primary text-white p-1.5 rounded-full relative overflow-hidden flex items-center justify-center"}>
<span className={"inline-flex [&>svg]:w-5 [&>svg]:h-5 transition-transform duration-500 group-hover:translate-x-[150%] group-hover:-translate-y-[150%]"}>
<svg className={"size-4 lg:size-5"} xmlns={"http://www.w3.org/2000/svg"} viewBox={"0 0 24 24"} fill={"none"}><g id={"Arrow / Arrow_Up_Right_MD"}><path id={"Vector"} d={"M7 17L17 7M17 7H9M17 7V15"} stroke={"currentColor"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}></path></g></svg>
</span>
<span className={"absolute inline-flex [&>svg]:w-5 [&>svg]:h-5 transition-transform duration-500 -translate-x-[150%] translate-y-[150%] group-hover:translate-x-0 group-hover:translate-y-0"}>
<svg className={"size-4 lg:size-5"} xmlns={"http://www.w3.org/2000/svg"} viewBox={"0 0 24 24"} fill={"none"}><g id={"Arrow / Arrow_Up_Right_MD"}><path id={"Vector"} d={"M7 17L17 7M17 7H9M17 7V15"} stroke={"currentColor"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}></path></g></svg>
</span>

<span className={"absolute top-0 -left-[100%] w-[50%] h-full bg-gradient-to-r from-transparent via-white/60 to-transparent skew-x-[-25deg] transition-transform duration-700 group-hover:translate-x-[400%] pointer-events-none z-10"}></span>
</span>
</a>
</div>
</div>
<div className={"lg:col-span-6 flex flex-col gap-4 lg:gap-4.5"}>
<div className={"gsap-blog-card opacity-0 translate-y-16 flex gap-4 md:gap-5 lg:gap-6 items-center bg-card p-4 md:p-5 lg:p-6 rounded-2xl"}>
<img src={"storage/blog-covers/01KZWE77NTAANHAVV4RNZT76NY.webp"} alt={"Bali Adventure Activities: From Volcano Trekking to White-Water Rafting"} className={"rounded-xl lg:rounded-2xl hidden md:block md:size-32 lg:size-40 lg:h-40 object-cover shrink-0"} loading={"lazy"} />
<div className={"flex flex-col h-full justify-between"}>
<div className={"mb-3 lg:mb-4.5 grow"}>
<h3 className={"text-base lg:text-lg font-semibold mb-1.5 lg:mb-2 line-clamp-2"}>Bali Adventure Activities: From Volcano Trekking to White-Water Rafting</h3>
<p className={"text-xs lg:text-sm line-clamp-2 text-foreground/80"}>
                Bali Adventure Activities: From Volcano Trekking to White-Water RaftingBeaches and temples get most of the attention, but Bali is also a genuinely good adventure destination. Volcanic terrain, fast-flowing rivers, and a coastline built for surfing and diving mean there&#039;s no shortage of ways to get your heart rate up. Here&#039;s a guide to the island&#039;s best adventure activities, and what to know before you book.Volcano Trekking: Mount Batur and Mount AgungMount Batur is the classic choice for a sunrise trek — a roughly two-hour climb starting around 3 or 4 a.m., manageable for most fitness levels with a guide. Mount Agung, Bali&#039;s highest and most sacred peak, is a far more demanding climb reserved for experienced trekkers, and access is sometimes restricted during religious ceremonies, so it&#039;s worth checking current conditions before planning around it.White-Water Rafting on the Ayung or Telaga Waja RiverThe Ayung River near Ubud is the more scenic, beginner-friendly option, winding through jungle gorges and past rice terraces. The Telaga Waja River in East Bali has stronger rapids and a faster pace, better suited to travelers who&#039;ve rafted before. Most operators include transport, safety gear, and a meal, making it an easy half-day activity to slot into a longer itinerary.Canyoning in Gitgit or BongkasaCanyoning combines abseiling, cliff jumping, natural water slides, and swimming through narrow river canyons. It&#039;s physically demanding but doesn&#039;t require prior experience — guides handle the technical rope work. Bongkasa, closer to Ubud, is a popular option for travelers short on time.Surfing Bali&#039;s Reef and Beach BreaksFrom the beginner-friendly beach breaks of Kuta and Canggu to the more advanced reef breaks at Uluwatu and Padang Padang, Bali&#039;s surf scene covers every skill level. Dry season (April to October) generally brings more consistent swell on the west and south coasts, while wet season shifts good conditions toward the east.ATV and Buggy Rides Through Rice Fields and JungleFor a more low-key adrenaline fix, ATV tours near Ubud take riders through mud tracks, rivers, and rural villages that are otherwise hard to reach. It&#039;s a good option for groups or families traveling with less-experienced riders.Cliff Jumping and Coasteering at Blue LagoonPadang Bai&#039;s Blue Lagoon has a cliff jump platform alongside calm, clear water that&#039;s also good for snorkeling — a nice way to combine a low-effort adventure activity with a beach day.When to Book Adventure ActivitiesWeather affects almost every activity on this list, from river levels for rafting to visibility for volcano sunrise treks. Dry season (April–October) is generally the most reliable window, but even then, mornings tend to be clearer than afternoons for anything involving views. Booking a day or two ahead — rather than same-day — also gives operators time to adjust group sizes and timing around conditions.Combining Adventure Days with Rest DaysAdventure activities in Bali tend to involve early starts, humidity, and a fair amount of physical exertion, so it&#039;s worth pacing them rather than stacking several in a row. A common approach: alternate an active day (trekking, rafting, canyoning) with a slower one (temples, food, beach time) to avoid burning out mid-trip.
            </p>
</div>
<div className={"flex flex-col-reverse md:flex-row gap-6 md:gap-0 justify-between md:items-center mt-auto"}>
<a href={"blogs/bali-adventure-activities-from-volcano-trekking-to-white-water-rafting.html"} className={"group inline-flex items-center justify-center gap-3 font-semibold rounded-full text-sm cursor-pointer transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary bg-white text-foreground hover:bg-white/90 pl-3 pr-1.5 py-1.5 lg:pl-4 lg:pr-2 lg:py-2 w-fit text-xs lg:text-sm"}>
<div className={"relative overflow-hidden flex items-center justify-center"}>
<span className={"block transition-transform duration-500 group-hover:translate-y-[150%]"}>Read Article</span>
<span className={"absolute block transition-transform duration-500 -translate-y-[150%] group-hover:translate-y-0"}>Read Article</span>
</div>
<span className={"bg-primary text-white p-1.5 rounded-full relative overflow-hidden flex items-center justify-center"}>
<span className={"inline-flex [&>svg]:w-5 [&>svg]:h-5 transition-transform duration-500 group-hover:translate-x-[150%] group-hover:-translate-y-[150%]"}>
<svg className={"size-3 lg:size-4"} xmlns={"http://www.w3.org/2000/svg"} viewBox={"0 0 24 24"} fill={"none"}><g id={"Arrow / Arrow_Up_Right_MD"}><path id={"Vector"} d={"M7 17L17 7M17 7H9M17 7V15"} stroke={"currentColor"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}></path></g></svg>
</span>
<span className={"absolute inline-flex [&>svg]:w-5 [&>svg]:h-5 transition-transform duration-500 -translate-x-[150%] translate-y-[150%] group-hover:translate-x-0 group-hover:translate-y-0"}>
<svg className={"size-3 lg:size-4"} xmlns={"http://www.w3.org/2000/svg"} viewBox={"0 0 24 24"} fill={"none"}><g id={"Arrow / Arrow_Up_Right_MD"}><path id={"Vector"} d={"M7 17L17 7M17 7H9M17 7V15"} stroke={"currentColor"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}></path></g></svg>
</span>

<span className={"absolute top-0 -left-[100%] w-[50%] h-full bg-gradient-to-r from-transparent via-white/60 to-transparent skew-x-[-25deg] transition-transform duration-700 group-hover:translate-x-[400%] pointer-events-none z-10"}></span>
</span>
</a>
<div className={"flex items-center gap-2 text-text-label-secondary text-xs md:text-sm font-medium"}>
<svg className={"feather feather-calendar"} xmlns={"http://www.w3.org/2000/svg"} width={"24"} height={"24"} viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}><rect x={"3"} y={"4"} width={"18"} height={"18"} rx={"2"} ry={"2"}></rect><line x1={"16"} y1={"2"} x2={"16"} y2={"6"}></line><line x1={"8"} y1={"2"} x2={"8"} y2={"6"}></line><line x1={"3"} y1={"10"} x2={"21"} y2={"10"}></line></svg>                12 August 2026
            </div>
</div>
</div>
</div>
<div className={"gsap-blog-card opacity-0 translate-y-16 flex gap-4 md:gap-5 lg:gap-6 items-center bg-card p-4 md:p-5 lg:p-6 rounded-2xl"}>
<img src={"storage/blog-covers/01KZWEB01DQ19A61YT5V0QAB06.webp"} alt={"A Food Lover's Guide to Balinese Cuisine: Must-Try Dishes"} className={"rounded-xl lg:rounded-2xl hidden md:block md:size-32 lg:size-40 lg:h-40 object-cover shrink-0"} loading={"lazy"} />
<div className={"flex flex-col h-full justify-between"}>
<div className={"mb-3 lg:mb-4.5 grow"}>
<h3 className={"text-base lg:text-lg font-semibold mb-1.5 lg:mb-2 line-clamp-2"}>A Food Lover's Guide to Balinese Cuisine: Must-Try Dishes</h3>
<p className={"text-xs lg:text-sm line-clamp-2 text-foreground/80"}>
                A Food Lover&#039;s Guide to Balinese Cuisine: Must-Try DishesBalinese food doesn&#039;t always get the spotlight that Balinese temples and beaches do, but it deserves just as much attention. Built around fresh spices, coconut, and rice, the island&#039;s cuisine reflects both its Hindu religious traditions and its position along historic Southeast Asian trade routes. Here&#039;s what to look for on menus and warung boards.Babi Guling (Suckling Pig)Often considered Bali&#039;s signature dish, babi guling is whole pig roasted over an open fire and stuffed with a mix of turmeric, galangal, garlic, chili, and other spices known as base genep. It&#039;s traditionally served for ceremonies and celebrations, but plenty of warungs sell it daily — Ubud is particularly well known for it.Bebek Betutu (Slow-Cooked Duck)Bebek betutu is duck (or sometimes chicken, called ayam betutu) marinated in the same spice paste used for babi guling, wrapped in banana leaves, and slow-cooked for hours until the meat falls off the bone. It&#039;s less commonly found on standard menus, so it&#039;s worth seeking out at restaurants that specialize in it, since the long cooking time means it&#039;s often made to order.Nasi CampurNasi campur — literally &quot;mixed rice&quot; — is less a single dish than a format: a scoop of rice surrounded by small portions of vegetables, meat, tofu, tempeh, and sambal. It&#039;s the closest thing to a culinary sampler of Balinese home cooking, and every warung&#039;s version looks a little different.Sate LilitUnlike skewered sate found elsewhere in Indonesia, sate lilit is made from minced fish or meat mixed with grated coconut and spices, then pressed around lemongrass stalks or bamboo skewers before grilling. The lemongrass adds a subtle citrus note as it cooks.LawarLawar is a mix of finely chopped vegetables (often young jackfruit or long beans), grated coconut, and minced meat, seasoned with a rich spice paste. There are red (with blood) and white (without) versions — worth asking about if you&#039;re curious, or want to avoid one.Sambal MatahThis raw sambal — made from thinly sliced shallots, lemongrass, chili, and lime, then doused in hot coconut oil — is less a dish and more a condiment that shows up everywhere. It&#039;s sharper and fresher than cooked sambals, and a good way to add heat to whatever you&#039;re eating.Jaje Bali (Balinese Sweets)Traditional Balinese sweets — like klepon (rice cake balls filled with palm sugar), dadar gulung (pandan crepes with coconut filling), and laklak (small coconut-topped pancakes) — are commonly sold at local markets rather than restaurants, so a morning market visit is often the best way to try a range of them at once.Where to Eat: Warungs vs. RestaurantsFor an authentic, budget-friendly introduction to Balinese food, local warungs are hard to beat — many operate as family businesses with recipes passed down through generations. Restaurants aimed at tourists tend to adjust spice levels and presentation, which isn&#039;t a bad thing if you&#039;re easing into the cuisine, but it&#039;s worth trying at least a few warung meals for a truer sense of local flavor.A Note on Spice LevelsBalinese food can run spicy, particularly anything built around sambal. If you&#039;re sensitive to heat, it&#039;s fine to ask for sambal on the side — most places are used to the request, especially in more touristed areas.
            </p>
</div>
<div className={"flex flex-col-reverse md:flex-row gap-6 md:gap-0 justify-between md:items-center mt-auto"}>
<a href={"blogs/a-food-lovers-guide-to-balinese-cuisine-must-try-dishes.html"} className={"group inline-flex items-center justify-center gap-3 font-semibold rounded-full text-sm cursor-pointer transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary bg-white text-foreground hover:bg-white/90 pl-3 pr-1.5 py-1.5 lg:pl-4 lg:pr-2 lg:py-2 w-fit text-xs lg:text-sm"}>
<div className={"relative overflow-hidden flex items-center justify-center"}>
<span className={"block transition-transform duration-500 group-hover:translate-y-[150%]"}>Read Article</span>
<span className={"absolute block transition-transform duration-500 -translate-y-[150%] group-hover:translate-y-0"}>Read Article</span>
</div>
<span className={"bg-primary text-white p-1.5 rounded-full relative overflow-hidden flex items-center justify-center"}>
<span className={"inline-flex [&>svg]:w-5 [&>svg]:h-5 transition-transform duration-500 group-hover:translate-x-[150%] group-hover:-translate-y-[150%]"}>
<svg className={"size-3 lg:size-4"} xmlns={"http://www.w3.org/2000/svg"} viewBox={"0 0 24 24"} fill={"none"}><g id={"Arrow / Arrow_Up_Right_MD"}><path id={"Vector"} d={"M7 17L17 7M17 7H9M17 7V15"} stroke={"currentColor"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}></path></g></svg>
</span>
<span className={"absolute inline-flex [&>svg]:w-5 [&>svg]:h-5 transition-transform duration-500 -translate-x-[150%] translate-y-[150%] group-hover:translate-x-0 group-hover:translate-y-0"}>
<svg className={"size-3 lg:size-4"} xmlns={"http://www.w3.org/2000/svg"} viewBox={"0 0 24 24"} fill={"none"}><g id={"Arrow / Arrow_Up_Right_MD"}><path id={"Vector"} d={"M7 17L17 7M17 7H9M17 7V15"} stroke={"currentColor"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}></path></g></svg>
</span>

<span className={"absolute top-0 -left-[100%] w-[50%] h-full bg-gradient-to-r from-transparent via-white/60 to-transparent skew-x-[-25deg] transition-transform duration-700 group-hover:translate-x-[400%] pointer-events-none z-10"}></span>
</span>
</a>
<div className={"flex items-center gap-2 text-text-label-secondary text-xs md:text-sm font-medium"}>
<svg className={"feather feather-calendar"} xmlns={"http://www.w3.org/2000/svg"} width={"24"} height={"24"} viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}><rect x={"3"} y={"4"} width={"18"} height={"18"} rx={"2"} ry={"2"}></rect><line x1={"16"} y1={"2"} x2={"16"} y2={"6"}></line><line x1={"8"} y1={"2"} x2={"8"} y2={"6"}></line><line x1={"3"} y1={"10"} x2={"21"} y2={"10"}></line></svg>                12 August 2026
            </div>
</div>
</div>
</div>
<div className={"gsap-blog-card opacity-0 translate-y-16 flex gap-4 md:gap-5 lg:gap-6 items-center bg-card p-4 md:p-5 lg:p-6 rounded-2xl"}>
<img src={"storage/blog-covers/01KZWECJZXTZ24M47WB9HBX2S1.webp"} alt={"Bali's Sacred Traditions: Temple Ceremonies and Cultural Etiquette for Travelers"} className={"rounded-xl lg:rounded-2xl hidden md:block md:size-32 lg:size-40 lg:h-40 object-cover shrink-0"} loading={"lazy"} />
<div className={"flex flex-col h-full justify-between"}>
<div className={"mb-3 lg:mb-4.5 grow"}>
<h3 className={"text-base lg:text-lg font-semibold mb-1.5 lg:mb-2 line-clamp-2"}>Bali's Sacred Traditions: Temple Ceremonies and Cultural Etiquette for Travelers</h3>
<p className={"text-xs lg:text-sm line-clamp-2 text-foreground/80"}>
                Bali&#039;s Sacred Traditions: Temple Ceremonies and Cultural Etiquette for TravelersBali&#039;s culture is inseparable from its religion. Balinese Hinduism, distinct from Hinduism practiced elsewhere, shapes daily life on the island — from the small offerings placed on sidewalks each morning to the elaborate ceremonies that can shut down entire villages for a day. Understanding a bit of this before you visit makes the experience richer, and helps you avoid a few common missteps.Canang Sari: The Daily Offerings You&#039;ll See EverywhereThose small palm-leaf trays filled with flowers, rice, and incense that you&#039;ll see on doorsteps, sidewalks, and dashboards are called canang sari — daily offerings of gratitude placed by Balinese Hindus. They&#039;re easy to accidentally step on if you&#039;re not looking down, so it&#039;s worth watching your step, particularly around temple entrances and shopfronts.What to Wear When Visiting a TempleMost temples require visitors to wear a sarong, and often a sash tied around the waist, regardless of gender. Many temples rent or lend these at the entrance, but bringing your own (easily bought at local markets) saves time and hassle. Shoulders should generally be covered as well. Some inner temple areas are closed to visitors entirely, particularly during ceremonies — signage or staff will usually indicate this.Menstruation and Temple AccessTraditionally, women who are menstruating are asked not to enter temple grounds. This isn&#039;t enforced with any kind of check, but it&#039;s a genuine part of local belief, and respecting it (rather than treating it as an inconvenience to work around) is part of being a considerate guest.Attending a Ceremony as a VisitorIf you happen to be in a village during a ceremony — a temple anniversary (odalan), cremation, or tooth-filing ritual, for example — you may be welcome to observe respectfully from a distance, and sometimes invited to join. Dress modestly, keep noise to a minimum, avoid pointing your feet at offerings or shrines, and ask before taking photos, especially of people in prayer.Nyepi: The Day of SilenceOnce a year, Bali observes Nyepi, a Balinese New Year marked by complete silence across the island. No flights in or out, no lights after dark, no one on the streets — even tourists are required to stay inside their accommodation for the full 24 hours. If your trip overlaps with Nyepi, it&#039;s worth planning around it in advance, since it affects transport, dining, and activities island-wide for that day.Basic Etiquette Beyond TemplesA few general points that apply island-wide: use your right hand (or both hands) when giving or receiving something, avoid touching people&#039;s heads, and keep public displays of affection modest, particularly outside of tourist-heavy beach areas. None of this is strictly enforced for visitors, but it reflects genuine local values, and Balinese hosts generally notice and appreciate the effort.Supporting Local Traditions as a VisitorCeremonies, temple maintenance, and traditional arts are largely funded and organized by local communities (banjar) rather than the government. Buying offerings, crafts, or entrance tickets directly from local vendors — rather than always going through large tour operators — is a small way to put tourism spending back into the communities keeping these traditions alive.Curious about visiting a temple ceremony respectfully, or timing your trip around Nyepi? Our local guides can help you plan around Bali&#039;s ceremonial calendar — get in touch before you book your dates.
            </p>
</div>
<div className={"flex flex-col-reverse md:flex-row gap-6 md:gap-0 justify-between md:items-center mt-auto"}>
<a href={"blogs/balis-sacred-traditions-temple-ceremonies-and-cultural-etiquette-for-travelers.html"} className={"group inline-flex items-center justify-center gap-3 font-semibold rounded-full text-sm cursor-pointer transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary bg-white text-foreground hover:bg-white/90 pl-3 pr-1.5 py-1.5 lg:pl-4 lg:pr-2 lg:py-2 w-fit text-xs lg:text-sm"}>
<div className={"relative overflow-hidden flex items-center justify-center"}>
<span className={"block transition-transform duration-500 group-hover:translate-y-[150%]"}>Read Article</span>
<span className={"absolute block transition-transform duration-500 -translate-y-[150%] group-hover:translate-y-0"}>Read Article</span>
</div>
<span className={"bg-primary text-white p-1.5 rounded-full relative overflow-hidden flex items-center justify-center"}>
<span className={"inline-flex [&>svg]:w-5 [&>svg]:h-5 transition-transform duration-500 group-hover:translate-x-[150%] group-hover:-translate-y-[150%]"}>
<svg className={"size-3 lg:size-4"} xmlns={"http://www.w3.org/2000/svg"} viewBox={"0 0 24 24"} fill={"none"}><g id={"Arrow / Arrow_Up_Right_MD"}><path id={"Vector"} d={"M7 17L17 7M17 7H9M17 7V15"} stroke={"currentColor"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}></path></g></svg>
</span>
<span className={"absolute inline-flex [&>svg]:w-5 [&>svg]:h-5 transition-transform duration-500 -translate-x-[150%] translate-y-[150%] group-hover:translate-x-0 group-hover:translate-y-0"}>
<svg className={"size-3 lg:size-4"} xmlns={"http://www.w3.org/2000/svg"} viewBox={"0 0 24 24"} fill={"none"}><g id={"Arrow / Arrow_Up_Right_MD"}><path id={"Vector"} d={"M7 17L17 7M17 7H9M17 7V15"} stroke={"currentColor"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}></path></g></svg>
</span>

<span className={"absolute top-0 -left-[100%] w-[50%] h-full bg-gradient-to-r from-transparent via-white/60 to-transparent skew-x-[-25deg] transition-transform duration-700 group-hover:translate-x-[400%] pointer-events-none z-10"}></span>
</span>
</a>
<div className={"flex items-center gap-2 text-text-label-secondary text-xs md:text-sm font-medium"}>
<svg className={"feather feather-calendar"} xmlns={"http://www.w3.org/2000/svg"} width={"24"} height={"24"} viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}><rect x={"3"} y={"4"} width={"18"} height={"18"} rx={"2"} ry={"2"}></rect><line x1={"16"} y1={"2"} x2={"16"} y2={"6"}></line><line x1={"8"} y1={"2"} x2={"8"} y2={"6"}></line><line x1={"3"} y1={"10"} x2={"21"} y2={"10"}></line></svg>                12 August 2026
            </div>
</div>
</div>
</div>
</div>
</div>
</section> <section id={"faq"} className={"2xl:container mx-auto px-5 md:px-12 lg:px-20 2xl:px-30 py-15 2xl:py-20"}>
<div className={"grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12 lg:gap-10"}>
<div className={"lg:col-span-5 flex flex-col gap-8 lg:gap-0 lg:justify-between lg:min-h-[75dvh] lg:max-h-[75dvh] 2xl:min-h-[50dvh] 2xl:max-h-[50dvh]"}>
<div>
<div className={"gsap-faq-badge opacity-0 -translate-x-16 mb-4 lg:mb-6 flex items-center gap-2 w-fit bg-white border border-border rounded-full px-2.5 pr-3 py-2"}>
<div className={"size-2.5 bg-primary rounded-full"}></div>
<strong className={"font-medium text-sm md:text-base"}>FAQs</strong>
</div>
<h2 className={"gsap-faq-heading opacity-0 translate-y-16 text-3xl md:text-4xl lg:text-5xl font-semibold leading-snug lg:leading-[1.3] lg:max-w-xl"}>
                    Helpful Answers Before You Book
                </h2>
</div>
<div className={"flex"}>
<div className={"gsap-faq-contact opacity-0 scale-95 w-full md:w-3/5 lg:w-4/5 xl:w-[65%] bg-card p-6 lg:p-7 rounded-2xl"}>
<div className={"mb-8"}>
<h4 className={"text-lg font-semibold mb-2"}>Have Another Question?</h4>
<p className={"text-sm w-[88%]"}>
                            Contact us via WhatsApp and we will respond quickly
                        </p>
</div>
<a href={"contact.html"} className={"group inline-flex items-center justify-center gap-3 font-semibold rounded-full text-sm cursor-pointer transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary bg-foreground text-background hover:bg-foreground/90 pl-3 pr-1.5 py-1.5 lg:pl-4 lg:pr-2 lg:py-1.5 w-fit text-xs lg:text-sm"}>
<div className={"relative overflow-hidden flex items-center justify-center"}>
<span className={"block transition-transform duration-500 group-hover:translate-y-[150%]"}>Contact Us</span>
<span className={"absolute block transition-transform duration-500 -translate-y-[150%] group-hover:translate-y-0"}>Contact Us</span>
</div>
<span className={"bg-primary text-white p-1.5 rounded-full relative overflow-hidden flex items-center justify-center"}>
<span className={"inline-flex [&>svg]:w-5 [&>svg]:h-5 transition-transform duration-500 group-hover:translate-x-[150%] group-hover:-translate-y-[150%]"}>
<svg className={"size-3 lg:size-4"} xmlns={"http://www.w3.org/2000/svg"} viewBox={"0 0 24 24"} fill={"none"}><g id={"Arrow / Arrow_Up_Right_MD"}><path id={"Vector"} d={"M7 17L17 7M17 7H9M17 7V15"} stroke={"currentColor"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}></path></g></svg>
</span>
<span className={"absolute inline-flex [&>svg]:w-5 [&>svg]:h-5 transition-transform duration-500 -translate-x-[150%] translate-y-[150%] group-hover:translate-x-0 group-hover:translate-y-0"}>
<svg className={"size-3 lg:size-4"} xmlns={"http://www.w3.org/2000/svg"} viewBox={"0 0 24 24"} fill={"none"}><g id={"Arrow / Arrow_Up_Right_MD"}><path id={"Vector"} d={"M7 17L17 7M17 7H9M17 7V15"} stroke={"currentColor"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}></path></g></svg>
</span>

<span className={"absolute top-0 -left-[100%] w-[50%] h-full bg-gradient-to-r from-transparent via-white/60 to-transparent skew-x-[-25deg] transition-transform duration-700 group-hover:translate-x-[400%] pointer-events-none z-10"}></span>
</span>
</a>
</div>
</div>
</div>
<div className={"lg:col-span-7 flex flex-col gap-4"}>

<div className={"gsap-faq-item opacity-0 translate-y-16 faq-item bg-card p-5 lg:p-6 rounded-2xl cursor-pointer"} role={"button"} tabIndex={"0"} aria-expanded={"true"} aria-controls={"faq-answer-1"} data-expanded={"true"}>
<div className={"flex justify-between items-center gap-4"}>
<h3 className={"text-base lg:text-lg font-semibold"}>What makes Bali Bagus Journey different from other operators?</h3>
<div className={"faq-icon size-8 md:size-9 lg:size-10 rounded-lg flex items-center justify-center shrink-0 bg-primary text-white transition-colors duration-300"}>
<svg className={"size-5"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}><path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M20 12H4"}></path></svg>
</div>
</div>
<div id={"faq-answer-1"} className={"faq-content grid grid-rows-[1fr] transition-all duration-300"}>
<div className={"overflow-hidden"}>
<div className={"pt-4 lg:pt-5 mt-4 lg:mt-5 border-t border-border"}>
<p className={"text-sm lg:text-base text-foreground/80 leading-relaxed"}>
                                We focus on authentic, private experiences rather than rushed, crowded tours. With local experts, customizable routes, and no hidden fees, we ensure you see the real Bali at your own pace.
                            </p>
</div>
</div>
</div>
</div>

<div className={"gsap-faq-item opacity-0 translate-y-16 faq-item bg-card p-5 lg:p-6 rounded-2xl cursor-pointer"} role={"button"} tabIndex={"0"} aria-expanded={"false"} aria-controls={"faq-answer-2"} data-expanded={"false"}>
<div className={"flex justify-between items-center gap-4"}>
<h3 className={"text-base lg:text-lg font-semibold"}>Do I need to plan my entire trip before arriving in Bali?</h3>
<div className={"faq-icon size-8 md:size-9 lg:size-10 rounded-lg flex items-center justify-center shrink-0 bg-foreground text-background transition-colors duration-300"}>
<svg className={"size-5"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}><path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M12 4v16m8-8H4"}></path></svg>
</div>
</div>
<div id={"faq-answer-2"} className={"faq-content grid grid-rows-[0fr] transition-all duration-300"}>
<div className={"overflow-hidden"}>
<div className={"pt-4 lg:pt-5 mt-4 lg:mt-5 border-t border-border"}>
<p className={"text-sm lg:text-base text-foreground/80 leading-relaxed"}>
                                Not at all! You can book a single day trip or just an airport transfer to start. Once you're here, our team and your driver can give you local recommendations and help you plan the rest of your days spontaneously.
                            </p>
</div>
</div>
</div>
</div>

<div className={"gsap-faq-item opacity-0 translate-y-16 faq-item bg-card p-5 lg:p-6 rounded-2xl cursor-pointer"} role={"button"} tabIndex={"0"} aria-expanded={"false"} aria-controls={"faq-answer-3"} data-expanded={"false"}>
<div className={"flex justify-between items-center gap-4"}>
<h3 className={"text-base lg:text-lg font-semibold"}>What is the best time of year to visit Bali for outdoor tours?</h3>
<div className={"faq-icon size-8 md:size-9 lg:size-10 rounded-lg flex items-center justify-center shrink-0 bg-foreground text-background transition-colors duration-300"}>
<svg className={"size-5"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}><path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M12 4v16m8-8H4"}></path></svg>
</div>
</div>
<div id={"faq-answer-3"} className={"faq-content grid grid-rows-[0fr] transition-all duration-300"}>
<div className={"overflow-hidden"}>
<div className={"pt-4 lg:pt-5 mt-4 lg:mt-5 border-t border-border"}>
<p className={"text-sm lg:text-base text-foreground/80 leading-relaxed"}>
                                Bali is great year-round, but the dry season from April to October is ideal for outdoor activities, island hopping, and beach clubs. However, the wet season (Nov-March) is still perfect for cultural tours, spa days, and waterfalls when they are most vibrant.
                            </p>
</div>
</div>
</div>
</div>

<div className={"gsap-faq-item opacity-0 translate-y-16 faq-item bg-card p-5 lg:p-6 rounded-2xl cursor-pointer"} role={"button"} tabIndex={"0"} aria-expanded={"false"} aria-controls={"faq-answer-4"} data-expanded={"false"}>
<div className={"flex justify-between items-center gap-4"}>
<h3 className={"text-base lg:text-lg font-semibold"}>Can you accommodate guests with specific dietary or mobility needs?</h3>
<div className={"faq-icon size-8 md:size-9 lg:size-10 rounded-lg flex items-center justify-center shrink-0 bg-foreground text-background transition-colors duration-300"}>
<svg className={"size-5"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}><path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M12 4v16m8-8H4"}></path></svg>
</div>
</div>
<div id={"faq-answer-4"} className={"faq-content grid grid-rows-[0fr] transition-all duration-300"}>
<div className={"overflow-hidden"}>
<div className={"pt-4 lg:pt-5 mt-4 lg:mt-5 border-t border-border"}>
<p className={"text-sm lg:text-base text-foreground/80 leading-relaxed"}>
                                Yes, we always strive to make your journey comfortable. Whether you need wheelchair-accessible locations or halal, vegan, or allergy-friendly restaurant recommendations, please inform us in advance so we can prepare accordingly.
                            </p>
</div>
</div>
</div>
</div>

<div className={"gsap-faq-item opacity-0 translate-y-16 faq-item bg-card p-5 lg:p-6 rounded-2xl cursor-pointer"} role={"button"} tabIndex={"0"} aria-expanded={"false"} aria-controls={"faq-answer-5"} data-expanded={"false"}>
<div className={"flex justify-between items-center gap-4"}>
<h3 className={"text-base lg:text-lg font-semibold"}>Are your services available across all islands in Indonesia?</h3>
<div className={"faq-icon size-8 md:size-9 lg:size-10 rounded-lg flex items-center justify-center shrink-0 bg-foreground text-background transition-colors duration-300"}>
<svg className={"size-5"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}><path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M12 4v16m8-8H4"}></path></svg>
</div>
</div>
<div id={"faq-answer-5"} className={"faq-content grid grid-rows-[0fr] transition-all duration-300"}>
<div className={"overflow-hidden"}>
<div className={"pt-4 lg:pt-5 mt-4 lg:mt-5 border-t border-border"}>
<p className={"text-sm lg:text-base text-foreground/80 leading-relaxed"}>
                                Currently, our primary focus and expertise is the island of Bali, including day trips to nearby Nusa Penida and Nusa Lembongan. We specialize in providing the absolute best local experience here in Bali.
                            </p>
</div>
</div>
</div>
</div>
</div>
</div>
</section> </main>
 
    </PageShell>
  )
}
