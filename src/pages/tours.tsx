import { PageShell } from '../components/PageShell'

export function ToursPage() {
  return (
    <PageShell>
      

<main className={"min-h-dvh"}>
<section id={"headline"} className={"relative min-h-[60dvh] md:min-h-[45dvh] lg:min-h-[68dvh] 2xl:min-h-[52dvh] 2xl:max-h-[52dvh] flex items-end 2xl:container mx-auto"}>
<div className={"absolute overflow-hidden inset-0 lg:inset-5 lg:top-4 lg:rounded-3xl 2xl:inset-x-0 lg:bottom-auto lg:h-[68dvh] 2xl:max-h-[50dvh]"}>
<div className={"gsap-tours-overlay opacity-0 absolute z-10 h-full w-full lg:rounded-3xl bg-foreground/50 lg:bg-transparent lg:bg-linear-to-b from-0% from-foreground/40 via-40% via-foreground/0 to-80% to-foreground/80 lg:to-foreground/70"}></div>
<img src={"assets/tours/headline.webp"} alt={"Scenic view of Bali mountains and valleys, representing diverse Bali tour packages"} fetchpriority={"high"} decoding={"async"} className={"gsap-tours-bg opacity-0 scale-105 absolute inset-0 w-full h-full object-cover lg:rounded-3xl"} />
</div>
<div className={"px-5 md:px-12 lg:px-20 2xl:px-30 pb-12 md:pb-16 relative z-20 w-full"}>
<div className={"text-center flex flex-col items-center"}>
<div className={"gsap-tours-badge opacity-0 translate-y-16 flex items-center gap-2 w-fit bg-white border border-border rounded-full px-2.5 pr-3 py-2 mb-5 lg:mb-6"}>
<div className={"size-2.5 bg-primary rounded-full"}></div>
<strong className={"font-medium text-sm md:text-base text-foreground"}>Tours & Activities</strong>
</div>
<h1 className={"gsap-tours-title opacity-0 translate-y-16 text-3xl md:text-5xl lg:text-[52px] w-full mb-4 font-semibold text-white leading-snug lg:leading-[1.2]"}>
               Bali Tour Packages <br /> for Every Traveler
            </h1>
<p className={"gsap-tours-text opacity-0 translate-y-16 text-sm text-white w-full md:w-[72%] lg:w-[39%] leading-relaxed"}>
                Discover private tours, family-friendly adventures, cultural experiences, and day trips across Bali with flexible itineraries and trusted local guides.
            </p>
</div>
</div>
</section>
<section id={"tour"} className={"2xl:container mx-auto px-5 md:px-12 lg:px-20 2xl:px-30 py-15 2xl:py-20"}>
<div className={"flex flex-col items-center w-full mb-10"}>
<h3 className={"gsap-tours-filter-heading opacity-0 translate-y-16 text-lg md:text-xl font-semibold text-foreground mb-6"}>
            Filter Tours by:
        </h3>
<div className={"relative w-full max-w-full"}>
<div className={"filter-tabs w-full flex flex-nowrap md:flex-wrap items-center justify-start md:justify-center gap-2.5 md:gap-4 overflow-x-auto md:overflow-visible pb-2 md:pb-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"}>
<button data-filter={"all"} className={"gsap-tours-filter-tab shrink-0 opacity-0 scale-50 translate-y-8 filter-tab-btn flex items-center gap-2 md:gap-3 bg-foreground border border-border text-background px-1.5 md:px-2 pr-4 md:pr-5 py-1.5 md:py-2 rounded-full transition-all duration-300"}>
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
<span className={"text-xs md:text-sm font-semibold"}>All Tours</span>
</button>
<button data-filter={"island-hopping"} className={"gsap-tours-filter-tab shrink-0 opacity-0 scale-50 translate-y-8 filter-tab-btn flex items-center gap-2 md:gap-3 bg-white border border-border text-foreground px-1.5 md:px-2 pr-4 md:pr-5 py-1.5 md:py-2 rounded-full transition-all duration-300"}>
<div className={"bg-primary p-1.5 rounded-full flex items-center justify-center text-white shrink-0 overflow-hidden"}>
<img src={"storage/category-icons/01KZSPYTDD4BZ67D50ZR6KWBWT.svg"} className={"size-5 object-cover"} alt={"Island Hopping Icon"} /></div>
<span className={"text-xs md:text-sm font-semibold"}>Island Hopping</span>
</button>
<button data-filter={"temple-culture"} className={"gsap-tours-filter-tab shrink-0 opacity-0 scale-50 translate-y-8 filter-tab-btn flex items-center gap-2 md:gap-3 bg-white border border-border text-foreground px-1.5 md:px-2 pr-4 md:pr-5 py-1.5 md:py-2 rounded-full transition-all duration-300"}>
<div className={"bg-primary p-1.5 rounded-full flex items-center justify-center text-white shrink-0 overflow-hidden"}>
<img src={"storage/category-icons/01KZSQD14Z309600WP3AVAXX4J.svg"} className={"size-5 object-cover"} alt={"Temple & Culture Icon"} /></div>
<span className={"text-xs md:text-sm font-semibold"}>Temple & Culture</span>
</button>
<button data-filter={"adventure"} className={"gsap-tours-filter-tab shrink-0 opacity-0 scale-50 translate-y-8 filter-tab-btn flex items-center gap-2 md:gap-3 bg-white border border-border text-foreground px-1.5 md:px-2 pr-4 md:pr-5 py-1.5 md:py-2 rounded-full transition-all duration-300"}>
<div className={"bg-primary p-1.5 rounded-full flex items-center justify-center text-white shrink-0 overflow-hidden"}>
<img src={"storage/category-icons/01KZSQDQ04KQX0SQFASE5VAQ7E.html"} className={"size-5 object-cover"} alt={"Adventure Icon"} />
</div>
<span className={"text-xs md:text-sm font-semibold"}>Adventure</span>
</button>
<button data-filter={"nature-scenery"} className={"gsap-tours-filter-tab shrink-0 opacity-0 scale-50 translate-y-8 filter-tab-btn flex items-center gap-2 md:gap-3 bg-white border border-border text-foreground px-1.5 md:px-2 pr-4 md:pr-5 py-1.5 md:py-2 rounded-full transition-all duration-300"}>
<div className={"bg-primary p-1.5 rounded-full flex items-center justify-center text-white shrink-0 overflow-hidden"}>
<img src={"storage/category-icons/01KZSQEAFZK258X47ZBMXATQV8.html"} className={"size-5 object-cover"} alt={"Nature & Scenery Icon"} />
</div>
<span className={"text-xs md:text-sm font-semibold"}>Nature & Scenery</span>
</button>
</div>
<div className={"absolute top-0 right-0 bottom-0 w-16 bg-gradient-to-l from-background to-transparent md:hidden pointer-events-none z-10"}></div>
</div>
</div>
<div id={"tours-grid"} className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-5"}>
<div className={"tour-item"} data-category={"island-hopping"}>
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
    "validFrom": "2026-08-14T01:10:57+00:00"
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
<div className={"tour-item"} data-category={"adventure"}>
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
    "validFrom": "2026-08-14T01:10:57+00:00"
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
<div className={"tour-item"} data-category={"island-hopping"}>
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
    "validFrom": "2026-08-14T01:10:57+00:00"
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
<div className={"tour-item"} data-category={"temple-culture"}>
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
    "validFrom": "2026-08-14T01:10:57+00:00"
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
<div className={"tour-item"} data-category={"nature-scenery"}>
<script type={"application/ld+json"}>
&#123;
  "@context": "https://schema.org",
  "@type": "TouristTrip",
  "name": "Breakfast with Orangutans &amp; Bali Zoo",
  "description": "Create unforgettable memories with a unique wildlife experience at Bali Zoo. Start your morning with a special breakfast experience while observing orangutans, followed by an exciting exploration of the zoo&amp;#039;s diverse wildlife attractions.Discover exotic animals, enjoy interactive animal presentations, and cool off at the Jungle Splash Waterplay area. This private tour is suitable for families, couples, and travelers looking for a fun and memorable wildlife experience in Bali.",
  "image": "https://balibagusjourney.com/storage/tour-covers/01KZSYMATD7SJJHXA4JMRYJM74.webp",
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
    "validFrom": "2026-08-14T01:10:57+00:00"
  &#125;
&#125;
</script>
<div className={"gsap-tour-card opacity-0 translate-y-16 bg-card rounded-2xl overflow-hidden flex flex-col h-full"}>
<div className={"h-60 lg:h-70 relative rounded-2xl overflow-hidden"}>
<img src={"storage/tour-covers/01KZSYMATD7SJJHXA4JMRYJM74.html"} alt={"Breakfast with Orangutans & Bali Zoo - Popular tour package by Bali Bagus Journey"} width={"384"} height={"280"} loading={"lazy"} decoding={"async"} className={"h-full w-full object-cover"} />
<span className={"absolute bottom-4 left-4 lg:bottom-5 lg:left-5 bg-background text-foreground text-xs lg:text-sm px-3 py-1.5 lg:px-4 lg:py-2 rounded-full font-semibold"}>
            Nature & Scenery
        </span>
</div>
<div className={"p-4 lg:p-5 flex flex-col grow"}>
<div className={"mb-4 pb-4 border-b border-border grow"}>
<h3 className={"text-lg lg:text-xl font-semibold mb-2 line-clamp-2"}>Breakfast with Orangutans & Bali Zoo</h3>
<p className={"text-sm line-clamp-2"}>Create unforgettable memories with a unique wildlife experience at Bali Zoo. Start your morning with a special breakfast experience while observing orangutans, followed by an exciting exploration of the zoo&#039;s diverse wildlife attractions.Discover exotic animals, enjoy interactive animal presentations, and cool off at the Jungle Splash Waterplay area. This private tour is suitable for families, couples, and travelers looking for a fun and memorable wildlife experience in Bali.</p>
</div>
<div className={"flex justify-between items-center mt-auto"}>
<p className={"text-xl lg:text-2xl font-semibold"}>$55 <span className={"font-medium text-sm lg:text-base text-text-label-secondary"}>/ person</span></p>
<a href={"tours/breakfast-with-orangutans-bali-zoo.html"} className={"group inline-flex items-center justify-center gap-3 font-semibold rounded-full text-sm cursor-pointer transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary bg-white text-foreground hover:bg-white/90 pl-4 pr-2 py-1.5 lg:pl-5 lg:py-2 w-fit"} aria-label={"View details of Breakfast with Orangutans & Bali Zoo"}>
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
<div className={"tour-item"} data-category={"island-hopping"}>
<script type={"application/ld+json"}>
&#123;
  "@context": "https://schema.org",
  "@type": "TouristTrip",
  "name": "Nusa Penida East Tour",
  "description": "Discover the breathtaking beauty of East Nusa Penida on a private island adventure. Explore dramatic cliffs, pristine beaches, turquoise waters, and spectacular ocean viewpoints across the eastern side of the island.Visit the famous Tree House, admire the stunning coastline from Thousand Island Viewpoint, and explore the beautiful beaches of Diamond Beach and Atuh Beach. This tour includes fast boat transportation from Bali, a private car in Nusa Penida, entrance tickets, and a professional driver for a comfortable island experience.",
  "image": "https://balibagusjourney.com/storage/tour-covers/01KZVPARASND5YEHH960VVMVQG.webp",
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
    "validFrom": "2026-08-14T01:10:57+00:00"
  &#125;
&#125;
</script>
<div className={"gsap-tour-card opacity-0 translate-y-16 bg-card rounded-2xl overflow-hidden flex flex-col h-full"}>
<div className={"h-60 lg:h-70 relative rounded-2xl overflow-hidden"}>
<img src={"storage/tour-covers/01KZVPARASND5YEHH960VVMVQG.html"} alt={"Nusa Penida East Tour - Popular tour package by Bali Bagus Journey"} width={"384"} height={"280"} loading={"lazy"} decoding={"async"} className={"h-full w-full object-cover"} />
<span className={"absolute bottom-4 left-4 lg:bottom-5 lg:left-5 bg-background text-foreground text-xs lg:text-sm px-3 py-1.5 lg:px-4 lg:py-2 rounded-full font-semibold"}>
            Island Hopping
        </span>
</div>
<div className={"p-4 lg:p-5 flex flex-col grow"}>
<div className={"mb-4 pb-4 border-b border-border grow"}>
<h3 className={"text-lg lg:text-xl font-semibold mb-2 line-clamp-2"}>Nusa Penida East Tour</h3>
<p className={"text-sm line-clamp-2"}>Discover the breathtaking beauty of East Nusa Penida on a private island adventure. Explore dramatic cliffs, pristine beaches, turquoise waters, and spectacular ocean viewpoints across the eastern side of the island.Visit the famous Tree House, admire the stunning coastline from Thousand Island Viewpoint, and explore the beautiful beaches of Diamond Beach and Atuh Beach. This tour includes fast boat transportation from Bali, a private car in Nusa Penida, entrance tickets, and a professional driver for a comfortable island experience.</p>
</div>
<div className={"flex justify-between items-center mt-auto"}>
<p className={"text-xl lg:text-2xl font-semibold"}>$55 <span className={"font-medium text-sm lg:text-base text-text-label-secondary"}>/ person</span></p>
<a href={"tours/nusa-penida-east-tour.html"} className={"group inline-flex items-center justify-center gap-3 font-semibold rounded-full text-sm cursor-pointer transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary bg-white text-foreground hover:bg-white/90 pl-4 pr-2 py-1.5 lg:pl-5 lg:py-2 w-fit"} aria-label={"View details of Nusa Penida East Tour"}>
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
<div className={"tour-item"} data-category={"island-hopping"}>
<script type={"application/ld+json"}>
&#123;
  "@context": "https://schema.org",
  "@type": "TouristTrip",
  "name": "East &amp; West Nusa Penida Tour",
  "description": "Experience the best of East and West Nusa Penida in one unforgettable island adventure. Discover dramatic cliffs, crystal-clear waters, beautiful beaches, spectacular coastal viewpoints, and vibrant underwater scenery.The tour combines a snorkeling experience at Manta Bay and Gamat Bay with visits to some of Nusa Penida&amp;#039;s most iconic destinations, including Broken Beach, Angel&amp;#039;s Billabong, Kelingking Beach, Diamond Beach, Atuh Beach, Tree House, and Thousand Island.With fast boat transportation, a private car in Nusa Penida, and a professional driver, this tour provides a convenient way to explore both sides of the island in one day.",
  "image": "https://balibagusjourney.com/storage/tour-covers/01KZVRQ6Z2KEKAH5SGBH0B0TYK.webp",
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
    "validFrom": "2026-08-14T01:10:57+00:00"
  &#125;
&#125;
</script>
<div className={"gsap-tour-card opacity-0 translate-y-16 bg-card rounded-2xl overflow-hidden flex flex-col h-full"}>
<div className={"h-60 lg:h-70 relative rounded-2xl overflow-hidden"}>
<img src={"storage/tour-covers/01KZVRQ6Z2KEKAH5SGBH0B0TYK.html"} alt={"East & West Nusa Penida Tour - Popular tour package by Bali Bagus Journey"} width={"384"} height={"280"} loading={"lazy"} decoding={"async"} className={"h-full w-full object-cover"} />
<span className={"absolute bottom-4 left-4 lg:bottom-5 lg:left-5 bg-background text-foreground text-xs lg:text-sm px-3 py-1.5 lg:px-4 lg:py-2 rounded-full font-semibold"}>
            Island Hopping
        </span>
</div>
<div className={"p-4 lg:p-5 flex flex-col grow"}>
<div className={"mb-4 pb-4 border-b border-border grow"}>
<h3 className={"text-lg lg:text-xl font-semibold mb-2 line-clamp-2"}>East & West Nusa Penida Tour</h3>
<p className={"text-sm line-clamp-2"}>Experience the best of East and West Nusa Penida in one unforgettable island adventure. Discover dramatic cliffs, crystal-clear waters, beautiful beaches, spectacular coastal viewpoints, and vibrant underwater scenery.The tour combines a snorkeling experience at Manta Bay and Gamat Bay with visits to some of Nusa Penida&#039;s most iconic destinations, including Broken Beach, Angel&#039;s Billabong, Kelingking Beach, Diamond Beach, Atuh Beach, Tree House, and Thousand Island.With fast boat transportation, a private car in Nusa Penida, and a professional driver, this tour provides a convenient way to explore both sides of the island in one day.</p>
</div>
<div className={"flex justify-between items-center mt-auto"}>
<p className={"text-xl lg:text-2xl font-semibold"}>$55 <span className={"font-medium text-sm lg:text-base text-text-label-secondary"}>/ person</span></p>
<a href={"tours/east-west-nusa-penida-tour.html"} className={"group inline-flex items-center justify-center gap-3 font-semibold rounded-full text-sm cursor-pointer transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary bg-white text-foreground hover:bg-white/90 pl-4 pr-2 py-1.5 lg:pl-5 lg:py-2 w-fit"} aria-label={"View details of East & West Nusa Penida Tour"}>
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
<div className={"tour-item"} data-category={"island-hopping"}>
<script type={"application/ld+json"}>
&#123;
  "@context": "https://schema.org",
  "@type": "TouristTrip",
  "name": "Nusa Penida West &amp; Snorkeling Tour",
  "description": "Experience the natural beauty of West Nusa Penida on a private island adventure combining exciting snorkeling and iconic coastal attractions.Explore the underwater world of Manta Bay and Gamat Bay, then discover the dramatic cliffs and spectacular coastal scenery of Broken Beach, Angel&amp;#039;s Billabong, and Kelingking Beach.With fast boat transportation, a private car in Nusa Penida, and a professional driver, this tour offers a comfortable and convenient way to experience the highlights of West Nusa Penida in one day.",
  "image": "https://balibagusjourney.com/storage/tour-covers/01KZVS3040R32J0EHFN7KE6H6J.webp",
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
    "validFrom": "2026-08-14T01:10:57+00:00"
  &#125;
&#125;
</script>
<div className={"gsap-tour-card opacity-0 translate-y-16 bg-card rounded-2xl overflow-hidden flex flex-col h-full"}>
<div className={"h-60 lg:h-70 relative rounded-2xl overflow-hidden"}>
<img src={"storage/tour-covers/01KZVS3040R32J0EHFN7KE6H6J.html"} alt={"Nusa Penida West & Snorkeling Tour - Popular tour package by Bali Bagus Journey"} width={"384"} height={"280"} loading={"lazy"} decoding={"async"} className={"h-full w-full object-cover"} />
<span className={"absolute bottom-4 left-4 lg:bottom-5 lg:left-5 bg-background text-foreground text-xs lg:text-sm px-3 py-1.5 lg:px-4 lg:py-2 rounded-full font-semibold"}>
            Island Hopping
        </span>
</div>
<div className={"p-4 lg:p-5 flex flex-col grow"}>
<div className={"mb-4 pb-4 border-b border-border grow"}>
<h3 className={"text-lg lg:text-xl font-semibold mb-2 line-clamp-2"}>Nusa Penida West & Snorkeling Tour</h3>
<p className={"text-sm line-clamp-2"}>Experience the natural beauty of West Nusa Penida on a private island adventure combining exciting snorkeling and iconic coastal attractions.Explore the underwater world of Manta Bay and Gamat Bay, then discover the dramatic cliffs and spectacular coastal scenery of Broken Beach, Angel&#039;s Billabong, and Kelingking Beach.With fast boat transportation, a private car in Nusa Penida, and a professional driver, this tour offers a comfortable and convenient way to experience the highlights of West Nusa Penida in one day.</p>
</div>
<div className={"flex justify-between items-center mt-auto"}>
<p className={"text-xl lg:text-2xl font-semibold"}>$55 <span className={"font-medium text-sm lg:text-base text-text-label-secondary"}>/ person</span></p>
<a href={"tours/nusa-penida-west-snorkeling-tour.html"} className={"group inline-flex items-center justify-center gap-3 font-semibold rounded-full text-sm cursor-pointer transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary bg-white text-foreground hover:bg-white/90 pl-4 pr-2 py-1.5 lg:pl-5 lg:py-2 w-fit"} aria-label={"View details of Nusa Penida West & Snorkeling Tour"}>
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
<div className={"tour-item"} data-category={"island-hopping"}>
<script type={"application/ld+json"}>
&#123;
  "@context": "https://schema.org",
  "@type": "TouristTrip",
  "name": "Nusa Penida West Tour",
  "description": "Discover the breathtaking beauty of West Nusa Penida on a private island adventure. Explore dramatic cliffs, crystal-clear waters, beautiful beaches, and some of the island&amp;#039;s most iconic coastal destinations.Visit the famous T-Rex-shaped cliffs of Kelingking Beach, admire the spectacular natural arch at Broken Beach, discover the natural rock pool at Angel&amp;#039;s Billabong, and relax by the tropical waters of Crystal Bay.",
  "image": "https://balibagusjourney.com/storage/tour-covers/01KZVW4VF6VV9FVH9MW04058NV.webp",
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
    "validFrom": "2026-08-14T01:10:57+00:00"
  &#125;
&#125;
</script>
<div className={"gsap-tour-card opacity-0 translate-y-16 bg-card rounded-2xl overflow-hidden flex flex-col h-full"}>
<div className={"h-60 lg:h-70 relative rounded-2xl overflow-hidden"}>
<img src={"storage/tour-covers/01KZVW4VF6VV9FVH9MW04058NV.html"} alt={"Nusa Penida West Tour - Popular tour package by Bali Bagus Journey"} width={"384"} height={"280"} loading={"lazy"} decoding={"async"} className={"h-full w-full object-cover"} />
<span className={"absolute bottom-4 left-4 lg:bottom-5 lg:left-5 bg-background text-foreground text-xs lg:text-sm px-3 py-1.5 lg:px-4 lg:py-2 rounded-full font-semibold"}>
            Island Hopping
        </span>
</div>
<div className={"p-4 lg:p-5 flex flex-col grow"}>
<div className={"mb-4 pb-4 border-b border-border grow"}>
<h3 className={"text-lg lg:text-xl font-semibold mb-2 line-clamp-2"}>Nusa Penida West Tour</h3>
<p className={"text-sm line-clamp-2"}>Discover the breathtaking beauty of West Nusa Penida on a private island adventure. Explore dramatic cliffs, crystal-clear waters, beautiful beaches, and some of the island&#039;s most iconic coastal destinations.Visit the famous T-Rex-shaped cliffs of Kelingking Beach, admire the spectacular natural arch at Broken Beach, discover the natural rock pool at Angel&#039;s Billabong, and relax by the tropical waters of Crystal Bay.</p>
</div>
<div className={"flex justify-between items-center mt-auto"}>
<p className={"text-xl lg:text-2xl font-semibold"}>$55 <span className={"font-medium text-sm lg:text-base text-text-label-secondary"}>/ person</span></p>
<a href={"tours/nusa-penida-west-tour.html"} className={"group inline-flex items-center justify-center gap-3 font-semibold rounded-full text-sm cursor-pointer transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary bg-white text-foreground hover:bg-white/90 pl-4 pr-2 py-1.5 lg:pl-5 lg:py-2 w-fit"} aria-label={"View details of Nusa Penida West Tour"}>
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
<div className={"tour-item"} data-category={"temple-culture"}>
<script type={"application/ld+json"}>
&#123;
  "@context": "https://schema.org",
  "@type": "TouristTrip",
  "name": "East Bali Tour",
  "description": "Discover the hidden beauty of East Bali on a relaxing private journey combining Balinese culture, traditional architecture, and beautiful coastal scenery.Visit the iconic Lempuyang Temple and its famous Gate of Heaven, explore the peaceful gardens and water features of Tirta Gangga Water Palace, and finish the day relaxing at the beautiful white-sand Virgin Beach.",
  "image": "https://balibagusjourney.com/storage/tour-covers/01KZVW2SQJ4RKX8N4CPADZESC9.webp",
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
    "validFrom": "2026-08-14T01:10:57+00:00"
  &#125;
&#125;
</script>
<div className={"gsap-tour-card opacity-0 translate-y-16 bg-card rounded-2xl overflow-hidden flex flex-col h-full"}>
<div className={"h-60 lg:h-70 relative rounded-2xl overflow-hidden"}>
<img src={"storage/tour-covers/01KZVW2SQJ4RKX8N4CPADZESC9.html"} alt={"East Bali Tour - Popular tour package by Bali Bagus Journey"} width={"384"} height={"280"} loading={"lazy"} decoding={"async"} className={"h-full w-full object-cover"} />
<span className={"absolute bottom-4 left-4 lg:bottom-5 lg:left-5 bg-background text-foreground text-xs lg:text-sm px-3 py-1.5 lg:px-4 lg:py-2 rounded-full font-semibold"}>
            Temple & Culture
        </span>
</div>
<div className={"p-4 lg:p-5 flex flex-col grow"}>
<div className={"mb-4 pb-4 border-b border-border grow"}>
<h3 className={"text-lg lg:text-xl font-semibold mb-2 line-clamp-2"}>East Bali Tour</h3>
<p className={"text-sm line-clamp-2"}>Discover the hidden beauty of East Bali on a relaxing private journey combining Balinese culture, traditional architecture, and beautiful coastal scenery.Visit the iconic Lempuyang Temple and its famous Gate of Heaven, explore the peaceful gardens and water features of Tirta Gangga Water Palace, and finish the day relaxing at the beautiful white-sand Virgin Beach.</p>
</div>
<div className={"flex justify-between items-center mt-auto"}>
<p className={"text-xl lg:text-2xl font-semibold"}>$55 <span className={"font-medium text-sm lg:text-base text-text-label-secondary"}>/ person</span></p>
<a href={"tours/east-bali-tour.html"} className={"group inline-flex items-center justify-center gap-3 font-semibold rounded-full text-sm cursor-pointer transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary bg-white text-foreground hover:bg-white/90 pl-4 pr-2 py-1.5 lg:pl-5 lg:py-2 w-fit"} aria-label={"View details of East Bali Tour"}>
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
<div className={"tour-item"} data-category={"nature-scenery"}>
<script type={"application/ld+json"}>
&#123;
  "@context": "https://schema.org",
  "@type": "TouristTrip",
  "name": "Kintamani Volcano Tour",
  "description": "Discover the natural beauty and cultural charm of Bali on a private journey through Kintamani and Ubud. Enjoy breathtaking views of Mount Batur and Lake Batur, discover Bali&amp;#039;s traditional coffee-making process, explore the beautiful Tegalalang Rice Terrace, and visit the sacred Tirta Empul Temple.This tour combines volcanic landscapes, tropical scenery, local culture, and a relaxing countryside experience in one comfortable journey.",
  "image": "https://balibagusjourney.com/storage/tour-covers/01KZVXGC3KEGHZ6V2SCABEQ57V.webp",
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
    "validFrom": "2026-08-14T01:10:57+00:00"
  &#125;
&#125;
</script>
<div className={"gsap-tour-card opacity-0 translate-y-16 bg-card rounded-2xl overflow-hidden flex flex-col h-full"}>
<div className={"h-60 lg:h-70 relative rounded-2xl overflow-hidden"}>
<img src={"storage/tour-covers/01KZVXGC3KEGHZ6V2SCABEQ57V.html"} alt={"Kintamani Volcano Tour - Popular tour package by Bali Bagus Journey"} width={"384"} height={"280"} loading={"lazy"} decoding={"async"} className={"h-full w-full object-cover"} />
<span className={"absolute bottom-4 left-4 lg:bottom-5 lg:left-5 bg-background text-foreground text-xs lg:text-sm px-3 py-1.5 lg:px-4 lg:py-2 rounded-full font-semibold"}>
            Nature & Scenery
        </span>
</div>
<div className={"p-4 lg:p-5 flex flex-col grow"}>
<div className={"mb-4 pb-4 border-b border-border grow"}>
<h3 className={"text-lg lg:text-xl font-semibold mb-2 line-clamp-2"}>Kintamani Volcano Tour</h3>
<p className={"text-sm line-clamp-2"}>Discover the natural beauty and cultural charm of Bali on a private journey through Kintamani and Ubud. Enjoy breathtaking views of Mount Batur and Lake Batur, discover Bali&#039;s traditional coffee-making process, explore the beautiful Tegalalang Rice Terrace, and visit the sacred Tirta Empul Temple.This tour combines volcanic landscapes, tropical scenery, local culture, and a relaxing countryside experience in one comfortable journey.</p>
</div>
<div className={"flex justify-between items-center mt-auto"}>
<p className={"text-xl lg:text-2xl font-semibold"}>$55 <span className={"font-medium text-sm lg:text-base text-text-label-secondary"}>/ person</span></p>
<a href={"tours/kintamani-volcano-tour.html"} className={"group inline-flex items-center justify-center gap-3 font-semibold rounded-full text-sm cursor-pointer transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary bg-white text-foreground hover:bg-white/90 pl-4 pr-2 py-1.5 lg:pl-5 lg:py-2 w-fit"} aria-label={"View details of Kintamani Volcano Tour"}>
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
<div className={"tour-item"} data-category={"nature-scenery"}>
<script type={"application/ld+json"}>
&#123;
  "@context": "https://schema.org",
  "@type": "TouristTrip",
  "name": "Ubud Cultural Tour",
  "description": "Discover the heart of Bali on a private journey through Ubud&amp;#039;s cultural and natural attractions. Explore the lush Sacred Monkey Forest, discover traditional Balinese coffee-making, enjoy the beautiful scenery of Tegalalang Rice Terrace, and relax at a peaceful tropical waterfall.For an additional experience, guests can also enjoy an optional Bali Swing overlooking Bali&amp;#039;s lush green landscape.",
  "image": "https://balibagusjourney.com/storage/tour-covers/01KZVZGPB8PB4NN2AQH6Q7J6X0.webp",
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
    "validFrom": "2026-08-14T01:10:57+00:00"
  &#125;
&#125;
</script>
<div className={"gsap-tour-card opacity-0 translate-y-16 bg-card rounded-2xl overflow-hidden flex flex-col h-full"}>
<div className={"h-60 lg:h-70 relative rounded-2xl overflow-hidden"}>
<img src={"storage/tour-covers/01KZVZGPB8PB4NN2AQH6Q7J6X0.html"} alt={"Ubud Cultural Tour - Popular tour package by Bali Bagus Journey"} width={"384"} height={"280"} loading={"lazy"} decoding={"async"} className={"h-full w-full object-cover"} />
<span className={"absolute bottom-4 left-4 lg:bottom-5 lg:left-5 bg-background text-foreground text-xs lg:text-sm px-3 py-1.5 lg:px-4 lg:py-2 rounded-full font-semibold"}>
            Nature & Scenery
        </span>
</div>
<div className={"p-4 lg:p-5 flex flex-col grow"}>
<div className={"mb-4 pb-4 border-b border-border grow"}>
<h3 className={"text-lg lg:text-xl font-semibold mb-2 line-clamp-2"}>Ubud Cultural Tour</h3>
<p className={"text-sm line-clamp-2"}>Discover the heart of Bali on a private journey through Ubud&#039;s cultural and natural attractions. Explore the lush Sacred Monkey Forest, discover traditional Balinese coffee-making, enjoy the beautiful scenery of Tegalalang Rice Terrace, and relax at a peaceful tropical waterfall.For an additional experience, guests can also enjoy an optional Bali Swing overlooking Bali&#039;s lush green landscape.</p>
</div>
<div className={"flex justify-between items-center mt-auto"}>
<p className={"text-xl lg:text-2xl font-semibold"}>$55 <span className={"font-medium text-sm lg:text-base text-text-label-secondary"}>/ person</span></p>
<a href={"tours/ubud-cultural-tour.html"} className={"group inline-flex items-center justify-center gap-3 font-semibold rounded-full text-sm cursor-pointer transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary bg-white text-foreground hover:bg-white/90 pl-4 pr-2 py-1.5 lg:pl-5 lg:py-2 w-fit"} aria-label={"View details of Ubud Cultural Tour"}>
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
<div className={"tour-item"} data-category={"temple-culture"}>
<script type={"application/ld+json"}>
&#123;
  "@context": "https://schema.org",
  "@type": "TouristTrip",
  "name": "Tanah Lot Sunset Tou",
  "description": "Discover the cultural beauty of Bali on a relaxing private tour through Tabanan and West Bali. Visit the historic Taman Ayun Temple, experience Bali&amp;#039;s traditional coffee culture, and end the day at the iconic Tanah Lot Temple while enjoying a spectacular sunset over the Indian Ocean.This tour combines Balinese architecture, peaceful gardens, local traditions, and one of Bali&amp;#039;s most famous sunset experiences.",
  "image": "https://balibagusjourney.com/storage/tour-covers/01KZW0G8E9TDWZ7BVZ18S93SBH.webp",
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
    "validFrom": "2026-08-14T01:10:57+00:00"
  &#125;
&#125;
</script>
<div className={"gsap-tour-card opacity-0 translate-y-16 bg-card rounded-2xl overflow-hidden flex flex-col h-full"}>
<div className={"h-60 lg:h-70 relative rounded-2xl overflow-hidden"}>
<img src={"storage/tour-covers/01KZW0G8E9TDWZ7BVZ18S93SBH.html"} alt={"Tanah Lot Sunset Tou - Popular tour package by Bali Bagus Journey"} width={"384"} height={"280"} loading={"lazy"} decoding={"async"} className={"h-full w-full object-cover"} />
<span className={"absolute bottom-4 left-4 lg:bottom-5 lg:left-5 bg-background text-foreground text-xs lg:text-sm px-3 py-1.5 lg:px-4 lg:py-2 rounded-full font-semibold"}>
            Temple & Culture
        </span>
</div>
<div className={"p-4 lg:p-5 flex flex-col grow"}>
<div className={"mb-4 pb-4 border-b border-border grow"}>
<h3 className={"text-lg lg:text-xl font-semibold mb-2 line-clamp-2"}>Tanah Lot Sunset Tou</h3>
<p className={"text-sm line-clamp-2"}>Discover the cultural beauty of Bali on a relaxing private tour through Tabanan and West Bali. Visit the historic Taman Ayun Temple, experience Bali&#039;s traditional coffee culture, and end the day at the iconic Tanah Lot Temple while enjoying a spectacular sunset over the Indian Ocean.This tour combines Balinese architecture, peaceful gardens, local traditions, and one of Bali&#039;s most famous sunset experiences.</p>
</div>
<div className={"flex justify-between items-center mt-auto"}>
<p className={"text-xl lg:text-2xl font-semibold"}>$55 <span className={"font-medium text-sm lg:text-base text-text-label-secondary"}>/ person</span></p>
<a href={"tours/tanah-lot-sunset-tou.html"} className={"group inline-flex items-center justify-center gap-3 font-semibold rounded-full text-sm cursor-pointer transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary bg-white text-foreground hover:bg-white/90 pl-4 pr-2 py-1.5 lg:pl-5 lg:py-2 w-fit"} aria-label={"View details of Tanah Lot Sunset Tou"}>
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
<div className={"tour-item"} data-category={"nature-scenery"}>
<script type={"application/ld+json"}>
&#123;
  "@context": "https://schema.org",
  "@type": "TouristTrip",
  "name": "North Bali Exploration",
  "description": "Escape the crowds and discover the peaceful natural beauty of North Bali. Travel through cool mountain landscapes, visit serene lakes, explore iconic viewpoints, and experience the spectacular rice terraces of Jatiluwih.From the peaceful surroundings of Buyan Lake to the famous Handara Gate and panoramic views from Wanagiri Hidden Hill, this private tour offers a relaxing combination of nature, scenic landscapes, and traditional Balinese countryside.",
  "image": "https://balibagusjourney.com/storage/tour-covers/01KZW3P6EBYF2C95GEA9KXFC47.webp",
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
    "validFrom": "2026-08-14T01:10:57+00:00"
  &#125;
&#125;
</script>
<div className={"gsap-tour-card opacity-0 translate-y-16 bg-card rounded-2xl overflow-hidden flex flex-col h-full"}>
<div className={"h-60 lg:h-70 relative rounded-2xl overflow-hidden"}>
<img src={"storage/tour-covers/01KZW3P6EBYF2C95GEA9KXFC47.html"} alt={"North Bali Exploration - Popular tour package by Bali Bagus Journey"} width={"384"} height={"280"} loading={"lazy"} decoding={"async"} className={"h-full w-full object-cover"} />
<span className={"absolute bottom-4 left-4 lg:bottom-5 lg:left-5 bg-background text-foreground text-xs lg:text-sm px-3 py-1.5 lg:px-4 lg:py-2 rounded-full font-semibold"}>
            Nature & Scenery
        </span>
</div>
<div className={"p-4 lg:p-5 flex flex-col grow"}>
<div className={"mb-4 pb-4 border-b border-border grow"}>
<h3 className={"text-lg lg:text-xl font-semibold mb-2 line-clamp-2"}>North Bali Exploration</h3>
<p className={"text-sm line-clamp-2"}>Escape the crowds and discover the peaceful natural beauty of North Bali. Travel through cool mountain landscapes, visit serene lakes, explore iconic viewpoints, and experience the spectacular rice terraces of Jatiluwih.From the peaceful surroundings of Buyan Lake to the famous Handara Gate and panoramic views from Wanagiri Hidden Hill, this private tour offers a relaxing combination of nature, scenic landscapes, and traditional Balinese countryside.</p>
</div>
<div className={"flex justify-between items-center mt-auto"}>
<p className={"text-xl lg:text-2xl font-semibold"}>$55 <span className={"font-medium text-sm lg:text-base text-text-label-secondary"}>/ person</span></p>
<a href={"tours/north-bali-exploration.html"} className={"group inline-flex items-center justify-center gap-3 font-semibold rounded-full text-sm cursor-pointer transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary bg-white text-foreground hover:bg-white/90 pl-4 pr-2 py-1.5 lg:pl-5 lg:py-2 w-fit"} aria-label={"View details of North Bali Exploration"}>
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
</section> </main>
 
    </PageShell>
  )
}
