import { PageShell } from '../components/PageShell'

export function AboutPage() {
  return (
    <PageShell>
      

<main className={"min-h-dvh"}>
<section id={"headline"} className={"relative min-h-[60dvh] md:min-h-[45dvh] lg:min-h-[68dvh] 2xl:min-h-[52dvh] 2xl:max-h-[52dvh] flex items-end 2xl:container mx-auto"}>
<div className={"absolute overflow-hidden inset-0 lg:inset-5 lg:top-4 lg:rounded-3xl 2xl:inset-x-0 lg:bottom-auto lg:h-[68dvh] 2xl:max-h-[50dvh]"}>
<div className={"gsap-tours-overlay opacity-0 absolute z-10 h-full w-full lg:rounded-3xl bg-foreground/50 lg:bg-transparent lg:bg-linear-to-b from-0% from-foreground/40 via-40% via-foreground/0 to-80% to-foreground/80 lg:to-foreground/70"}></div>
<img src={"assets/about/headline.html"} alt={""} fetchpriority={"high"} decoding={"async"} className={"gsap-tours-bg opacity-0 scale-105 absolute inset-0 w-full h-full object-cover lg:rounded-3xl"} />
</div>
<div className={"px-5 md:px-12 lg:px-20 2xl:px-30 pb-12 md:pb-16 relative z-20 w-full"}>
<div className={"text-center flex flex-col items-center"}>
<div className={"gsap-tours-badge opacity-0 translate-y-16 flex items-center gap-2 w-fit bg-white border border-border rounded-full px-2.5 pr-3 py-2 mb-5 lg:mb-6"}>
<div className={"size-2.5 bg-primary rounded-full"}></div>
<strong className={"font-medium text-sm md:text-base text-foreground"}>About Bali Bagus Journey</strong>
</div>
<h1 className={"gsap-tours-title opacity-0 translate-y-16 text-3xl md:text-5xl lg:text-[52px] w-full mb-4 font-semibold text-white leading-snug lg:leading-[1.2]"}>
               Trusted Bali Tours <br /> & Transportation 
            </h1>
<p className={"gsap-tours-text opacity-0 translate-y-16 text-sm text-white w-full md:w-[72%] lg:w-[44%] leading-relaxed"}>
                We combine local expertise, reliable transportation, and personalized service to help travelers experience the best of Bali.
            </p>
</div>
</div>
</section>
<section id={"about-page-section"} className={"2xl:container mx-auto px-5 md:px-12 lg:px-20 2xl:px-30 py-12 md:py-16 lg:py-20"}>
<div className={"flex flex-col lg:grid lg:grid-cols-12 gap-10 md:gap-12 lg:gap-16"}>

<div className={"order-1 lg:col-span-3 gsap-about-page-img-1 opacity-0 translate-x-12"}>
<div className={"relative overflow-hidden rounded-2xl"}>
<div className={"gsap-image-reveal-cover absolute inset-0 bg-card z-10"}></div>
<img src={"assets/about/about-1.html"} alt={""} className={"w-full lg:w-[90%] aspect-[4/3] md:aspect-[21/9] lg:aspect-auto h-auto object-cover"} />
</div>
</div>

<div className={"order-2 lg:col-span-5"}>
<div className={"mb-10 lg:mb-16 gsap-about-page-content opacity-0 translate-y-16"}>
<div className={"mb-6 lg:mb-8"}>
<h2 className={"text-3xl md:text-4xl lg:text-5xl font-semibold leading-snug lg:leading-[1.3] mb-4 md:mb-5"}>More Than a <br className={"hidden lg:block"} /> Travel Company</h2>
<p className={"leading-relaxed text-sm md:text-base text-foreground/80"}>We believe every journey should be comfortable, memorable, and stress-free. By combining trusted local expertise, reliable transportation, and personalized travel services, we help travelers explore Bali with confidence while creating unforgettable memories along the way.</p>
</div>
<a href={"#testimonial"} className={"group inline-flex items-center justify-center gap-3 font-semibold rounded-full text-sm cursor-pointer transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary bg-foreground text-background hover:bg-foreground/90 pl-5 pr-2 py-2"}>
<div className={"relative overflow-hidden flex items-center justify-center"}>
<span className={"block transition-transform duration-500 group-hover:translate-y-[150%]"}>Read Guest Reviews</span>
<span className={"absolute block transition-transform duration-500 -translate-y-[150%] group-hover:translate-y-0"}>Read Guest Reviews</span>
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

<div className={"flex flex-col md:flex-row md:items-center justify-between"}>
<div className={"gsap-about-page-stat opacity-0 translate-y-16 flex flex-col gap-1.5 lg:gap-2 pb-6 md:pb-8 lg:pb-0 mb-6 md:mb-0 border-b md:border-b-0 lg:border-0 border-border"}>
<span className={"text-3xl md:text-4xl font-semibold leading-none"}>
<span className={"gsap-about-page-counter"} data-target={"1500"}>0</span><span className={"text-primary"}>+</span>
</span>
<p className={"font-medium text-sm lg:text-base text-text-label-secondary"}>Happy Travelers</p>
</div>
<div className={"gsap-about-page-stat opacity-0 translate-y-16 flex flex-col gap-1.5 lg:gap-2 pb-6 md:pb-8 lg:pb-0 mb-6 md:mb-0 border-b md:border-b-0 lg:border-0 border-border md:border-x md:px-8 lg:px-0"}>
<span className={"text-3xl md:text-4xl font-semibold leading-none flex items-center gap-2"}>
<span className={"gsap-about-page-counter"} data-target={"4.9"} data-decimals={"1"}>0.0</span>/5<span className={"text-primary"}><svg className={"size-5 md:size-6"} xmlns={"http://www.w3.org/2000/svg"} viewBox={"0 0 24 24"} fill={"currentColor"} aria-hidden={"true"} data-slot={"icon"}>
<path fillRule={"evenodd"} d={"M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"} clipRule={"evenodd"}></path>
</svg></span>
</span>
<p className={"font-medium text-sm lg:text-base text-text-label-secondary"}>Average Rating</p>
</div>
<div className={"gsap-about-page-stat opacity-0 translate-y-16 flex flex-col gap-1.5 lg:gap-2 pb-6 md:pb-8 lg:pb-0 mb-0 md:mb-0 border-b md:border-b-0 lg:border-0 border-border"}>
<span className={"text-3xl md:text-4xl font-semibold leading-none"}>
<span className={"gsap-about-page-counter"} data-target={"8"}>0</span> Years<span className={"text-primary"}>+</span>
</span>
<p className={"font-medium text-sm lg:text-base text-text-label-secondary"}>Experience</p>
</div>
</div>
</div>

<div className={"order-3 lg:col-span-4 gsap-about-page-img-2 opacity-0 translate-x-12"}>
<div className={"relative overflow-hidden rounded-2xl"}>
<div className={"gsap-image-reveal-cover absolute inset-0 bg-card z-10"}></div>
<img src={"assets/about/about-2.html"} alt={""} className={"w-full aspect-video md:aspect-[21/9] lg:aspect-auto h-full object-cover"} />
</div>
</div>
</div>
</section> <section id={"who-we-are"} className={"2xl:container mx-auto px-5 md:px-12 lg:px-20 2xl:px-30 py-12 md:py-16 lg:py-20"}>
<div className={"mb-10 lg:mb-16"}>
<div className={"mb-4 lg:mb-6 flex items-center gap-2 w-fit bg-white border border-border rounded-full px-2.5 pr-3 py-2 gsap-who-badge opacity-0 -translate-x-16"}>
<div className={"size-2.5 bg-primary rounded-full"}></div>
<strong className={"font-medium text-sm md:text-base"}>Who We Are</strong>
</div>
<div className={"flex flex-col lg:flex-row gap-4 lg:items-center justify-between"}>
<h2 className={"text-3xl md:text-4xl lg:text-5xl font-semibold leading-snug lg:leading-[1.3] lg:max-w-xl gsap-who-title opacity-0 translate-y-16"}>
                The Principles That Guide Every Journey
            </h2>
<div className={"flex flex-col gap-4 lg:gap-5 items-start lg:items-end text-start lg:text-end lg:max-w-md"}>
<p className={"text-sm md:text-base leading-relaxed w-full text-foreground/80 gsap-who-text opacity-0 translate-y-16"}>
                   Every trip is built on trust, local expertise, and genuine hospitality. These values shape how we serve our guests and ensure every experience in Bali is comfortable, reliable, and memorable.
                </p>
</div>
</div>
</div>
<div>
<div className={"h-[35vh] md:h-[45vh] lg:h-[60vh] 2xl:h-[50vh] rounded-2xl overflow-hidden mb-8 lg:mb-10 gsap-who-img opacity-0 translate-y-40 relative"}>
<div className={"gsap-image-reveal-cover absolute inset-0 bg-card z-10"}></div>
<img src={"assets/about/who.html"} alt={"Our Team and Services"} className={"w-full h-full object-cover"} />
</div>
<div className={"grid grid-cols-1 md:grid-cols-3 gap-5"}>
<div className={"bg-card p-5 md:p-6 lg:p-8 rounded-2xl flex flex-col gsap-who-card opacity-0 translate-y-16"}>
<div className={"bg-primary mb-5 lg:mb-10 rounded-2xl w-fit p-2 text-white"}>
<img src={"assets/icons/ri_customer-service-line.html"} alt={""} aria-hidden={"true"} className={"size-8"} />
</div>
<div className={"text-foreground flex flex-col grow"}>
<h3 className={"text-lg lg:text-xl font-semibold mb-2"}>Personalized Service</h3>
<p className={"text-sm text-foreground/80"}>
                        We carefully design every itinerary around individual preferences and travel goals to ensure a unique and seamless experience.
                    </p>
</div>
</div>
<div className={"bg-card p-5 md:p-6 lg:p-8 rounded-2xl flex flex-col gsap-who-card opacity-0 translate-y-16"}>
<div className={"bg-primary mb-5 lg:mb-10 rounded-2xl w-fit p-2 text-white"}>
<img src={"assets/icons/mingcute_shield-line.html"} alt={""} aria-hidden={"true"} className={"size-8"} />
</div>
<div className={"text-foreground flex flex-col grow"}>
<h3 className={"text-lg lg:text-xl font-semibold mb-2"}>Trusted Expertise</h3>
<p className={"text-sm text-foreground/80"}>
                        Our experienced travel specialists combine deep destination knowledge with professional planning to deliver reliable and well-organized journeys.
                    </p>
</div>
</div>
<div className={"bg-card p-5 md:p-6 lg:p-8 rounded-2xl flex flex-col gsap-who-card opacity-0 translate-y-16"}>
<div className={"bg-primary mb-5 lg:mb-10 rounded-2xl w-fit p-2 text-white"}>
<img src={"assets/icons/boxicons_leaf.html"} alt={""} aria-hidden={"true"} className={"size-8"} />
</div>
<div className={"text-foreground flex flex-col grow"}>
<h3 className={"text-lg lg:text-xl font-semibold mb-2"}>Sustainable Travel</h3>
<p className={"text-sm text-foreground/80"}>
                        We promote responsible tourism practices that respect local cultures, protect natural environments, and support local communities.
                    </p>
</div>
</div>
</div>
</div>
</section> <section id={"service"} className={"2xl:container mx-auto lg:px-5 2xl:px-0 lg:py-15 2xl:py-20"}>
<div className={"bg-foreground px-5 md:px-10 lg:px-15 2xl:px-30 py-12 lg:py-20 lg:rounded-3xl text-white"}>
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
<div className={"col-span-3 hidden lg:block overflow-hidden relative"}>
<div className={"gsap-testimonial-track flex gap-5"}>

<div className={"gsap-testimonial-slider-card opacity-0 translate-y-16 p-6 lg:p-7 bg-card rounded-2xl flex flex-col justify-between gap-8 lg:gap-28 shrink-0 w-[calc(33.333%-14px)]"}>
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
<div className={"gsap-testimonial-slider-card opacity-0 translate-y-16 p-6 lg:p-7 bg-card rounded-2xl flex flex-col justify-between gap-8 lg:gap-28 shrink-0 w-[calc(33.333%-14px)]"}>
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
<div className={"gsap-testimonial-slider-card opacity-0 translate-y-16 p-6 lg:p-7 bg-card rounded-2xl flex flex-col justify-between gap-8 lg:gap-28 shrink-0 w-[calc(33.333%-14px)]"}>
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
<div className={"gsap-testimonial-slider-card opacity-0 translate-y-16 p-6 lg:p-7 bg-card rounded-2xl flex flex-col justify-between gap-8 lg:gap-28 shrink-0 w-[calc(33.333%-14px)]"}>
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
<div className={"gsap-testimonial-slider-card opacity-0 translate-y-16 p-6 lg:p-7 bg-card rounded-2xl flex flex-col justify-between gap-8 lg:gap-28 shrink-0 w-[calc(33.333%-14px)]"}>
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
                            Very smooth from the moment we landed. Our driver was already waiting with a sign, and he gave us great recommendations for dinner near Uluwatu that weren't just the usual tourist spots.
                        </p>
</div>
<div>
<h3 className={"text-lg lg:text-xl font-medium"}>
                            Camille Dubois
                        </h3>
<p className={"text-sm lg:text-base text-text-label-secondary font-medium"}>
                            France
                        </p>
</div>
</div>
<div className={"gsap-testimonial-slider-card opacity-0 translate-y-16 p-6 lg:p-7 bg-card rounded-2xl flex flex-col justify-between gap-8 lg:gap-28 shrink-0 w-[calc(33.333%-14px)]"}>
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
                            Went with this team for our Nusa Penida trip and it was seamless — boat, snorkeling gear, and lunch all sorted. Would book with them again for our next Bali visit.
                        </p>
</div>
<div>
<h3 className={"text-lg lg:text-xl font-medium"}>
                            Michael Chen
                        </h3>
<p className={"text-sm lg:text-base text-text-label-secondary font-medium"}>
                            Singapore
                        </p>
</div>
</div>

<div className={"gsap-testimonial-slider-card opacity-0 translate-y-16 p-6 lg:p-7 bg-card rounded-2xl flex flex-col justify-between gap-8 lg:gap-28 shrink-0 w-[calc(33.333%-14px)]"}>
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
<div className={"gsap-testimonial-slider-card opacity-0 translate-y-16 p-6 lg:p-7 bg-card rounded-2xl flex flex-col justify-between gap-8 lg:gap-28 shrink-0 w-[calc(33.333%-14px)]"}>
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
<div className={"gsap-testimonial-slider-card opacity-0 translate-y-16 p-6 lg:p-7 bg-card rounded-2xl flex flex-col justify-between gap-8 lg:gap-28 shrink-0 w-[calc(33.333%-14px)]"}>
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
<div className={"gsap-testimonial-slider-card opacity-0 translate-y-16 p-6 lg:p-7 bg-card rounded-2xl flex flex-col justify-between gap-8 lg:gap-28 shrink-0 w-[calc(33.333%-14px)]"}>
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
<div className={"gsap-testimonial-slider-card opacity-0 translate-y-16 p-6 lg:p-7 bg-card rounded-2xl flex flex-col justify-between gap-8 lg:gap-28 shrink-0 w-[calc(33.333%-14px)]"}>
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
                            Very smooth from the moment we landed. Our driver was already waiting with a sign, and he gave us great recommendations for dinner near Uluwatu that weren't just the usual tourist spots.
                        </p>
</div>
<div>
<h3 className={"text-lg lg:text-xl font-medium"}>
                            Camille Dubois
                        </h3>
<p className={"text-sm lg:text-base text-text-label-secondary font-medium"}>
                            France
                        </p>
</div>
</div>
<div className={"gsap-testimonial-slider-card opacity-0 translate-y-16 p-6 lg:p-7 bg-card rounded-2xl flex flex-col justify-between gap-8 lg:gap-28 shrink-0 w-[calc(33.333%-14px)]"}>
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
                            Went with this team for our Nusa Penida trip and it was seamless — boat, snorkeling gear, and lunch all sorted. Would book with them again for our next Bali visit.
                        </p>
</div>
<div>
<h3 className={"text-lg lg:text-xl font-medium"}>
                            Michael Chen
                        </h3>
<p className={"text-sm lg:text-base text-text-label-secondary font-medium"}>
                            Singapore
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
                    Very smooth from the moment we landed. Our driver was already waiting with a sign, and he gave us great recommendations for dinner near Uluwatu that weren't just the usual tourist spots.
                </p>
</div>
<div>
<h3 className={"text-lg lg:text-xl font-medium"}>
                    Camille Dubois
                </h3>
<p className={"text-sm lg:text-base text-text-label-secondary font-medium"}>
                    France
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
                    Went with this team for our Nusa Penida trip and it was seamless — boat, snorkeling gear, and lunch all sorted. Would book with them again for our next Bali visit.
                </p>
</div>
<div>
<h3 className={"text-lg lg:text-xl font-medium"}>
                    Michael Chen
                </h3>
<p className={"text-sm lg:text-base text-text-label-secondary font-medium"}>
                    Singapore
                </p>
</div>
</div>
</div>
</section> <section id={"faq"} className={"2xl:container mx-auto px-5 md:px-12 lg:px-20 2xl:px-30 py-12 md:py-16 lg:py-20"}>
<div className={"grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12 lg:gap-10"}>
<div className={"lg:col-span-5 flex flex-col gap-8 lg:gap-0 lg:justify-between lg:min-h-[75dvh] lg:max-h-[75dvh] 2xl:min-h-[50dvh] 2xl:max-h-[50dvh]"}>
<div>
<div className={"gsap-faq-badge opacity-0 -translate-x-16 mb-4 lg:mb-6 flex items-center gap-2 w-fit bg-white border border-border rounded-full px-2.5 pr-3 py-2"}>
<div className={"size-2.5 bg-primary rounded-full"}></div>
<strong className={"font-medium text-sm md:text-base text-foreground"}>FAQ</strong>
</div>
<h2 className={"gsap-faq-heading opacity-0 translate-y-16 text-3xl md:text-4xl lg:text-5xl font-semibold leading-snug lg:leading-[1.3] lg:max-w-xl"}>
                    Frequently Asked Questions
                </h2>
</div>
<div className={"flex"}>
<div className={"gsap-faq-contact opacity-0 scale-95 w-full md:w-3/5 lg:w-4/5 xl:w-[65%] bg-card p-6 lg:p-7 rounded-2xl"}>
<div className={"mb-8"}>
<h4 className={"text-lg font-semibold mb-2"}>Have Another Question?</h4>
<p className={"text-sm w-[88%] text-foreground/80"}>
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
<h3 className={"text-base lg:text-lg font-semibold"}>Who are the drivers and guides at Bali Bagus Journey?</h3>
<div className={"faq-icon size-8 md:size-9 lg:size-10 rounded-lg flex items-center justify-center shrink-0 bg-primary text-white transition-colors duration-300"}>
<svg className={"size-5"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}><path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M20 12H4"}></path></svg>
</div>
</div>
<div id={"faq-answer-1"} className={"faq-content grid grid-rows-[1fr] transition-all duration-300"}>
<div className={"overflow-hidden"}>
<div className={"pt-4 lg:pt-5 mt-4 lg:mt-5 border-t border-border"}>
<p className={"text-sm lg:text-base text-foreground/80 leading-relaxed"}>
                                Our drivers and guides are native Balinese locals who are licensed, fluent in English, and undergo rigorous hospitality and safe driving training. They have deep-rooted knowledge of Bali's history, culture, and hidden gems.
                            </p>
</div>
</div>
</div>
</div>

<div className={"gsap-faq-item opacity-0 translate-y-16 faq-item bg-card p-5 lg:p-6 rounded-2xl cursor-pointer"} role={"button"} tabIndex={"0"} aria-expanded={"false"} aria-controls={"faq-answer-2"} data-expanded={"false"}>
<div className={"flex justify-between items-center gap-4"}>
<h3 className={"text-base lg:text-lg font-semibold"}>What safety standards do you maintain for your vehicles?</h3>
<div className={"faq-icon size-8 md:size-9 lg:size-10 rounded-lg flex items-center justify-center shrink-0 bg-foreground text-background transition-colors duration-300"}>
<svg className={"size-5"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}><path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M12 4v16m8-8H4"}></path></svg>
</div>
</div>
<div id={"faq-answer-2"} className={"faq-content grid grid-rows-[0fr] transition-all duration-300"}>
<div className={"overflow-hidden"}>
<div className={"pt-4 lg:pt-5 mt-4 lg:mt-5 border-t border-border"}>
<p className={"text-sm lg:text-base text-foreground/80 leading-relaxed"}>
                                Safety is our top priority. All our vehicles undergo daily cleanliness checks and regular professional maintenance. They are fully air-conditioned, clean, equipped with safety features (seatbelts, child seats upon request), and fully insured.
                            </p>
</div>
</div>
</div>
</div>

<div className={"gsap-faq-item opacity-0 translate-y-16 faq-item bg-card p-5 lg:p-6 rounded-2xl cursor-pointer"} role={"button"} tabIndex={"0"} aria-expanded={"false"} aria-controls={"faq-answer-3"} data-expanded={"false"}>
<div className={"flex justify-between items-center gap-4"}>
<h3 className={"text-base lg:text-lg font-semibold"}>How does booking with Bali Bagus Journey support Balinese communities?</h3>
<div className={"faq-icon size-8 md:size-9 lg:size-10 rounded-lg flex items-center justify-center shrink-0 bg-foreground text-background transition-colors duration-300"}>
<svg className={"size-5"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}><path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M12 4v16m8-8H4"}></path></svg>
</div>
</div>
<div id={"faq-answer-3"} className={"faq-content grid grid-rows-[0fr] transition-all duration-300"}>
<div className={"overflow-hidden"}>
<div className={"pt-4 lg:pt-5 mt-4 lg:mt-5 border-t border-border"}>
<p className={"text-sm lg:text-base text-foreground/80 leading-relaxed"}>
                                We practice responsible tourism. We hire only local guides and drivers, partner directly with family-owned Balinese businesses, and recommend local eateries. This ensures that the tourism revenue directly benefits Balinese families and communities.
                            </p>
</div>
</div>
</div>
</div>

<div className={"gsap-faq-item opacity-0 translate-y-16 faq-item bg-card p-5 lg:p-6 rounded-2xl cursor-pointer"} role={"button"} tabIndex={"0"} aria-expanded={"false"} aria-controls={"faq-answer-4"} data-expanded={"false"}>
<div className={"flex justify-between items-center gap-4"}>
<h3 className={"text-base lg:text-lg font-semibold"}>What is your cancellation policy?</h3>
<div className={"faq-icon size-8 md:size-9 lg:size-10 rounded-lg flex items-center justify-center shrink-0 bg-foreground text-background transition-colors duration-300"}>
<svg className={"size-5"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}><path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M12 4v16m8-8H4"}></path></svg>
</div>
</div>
<div id={"faq-answer-4"} className={"faq-content grid grid-rows-[0fr] transition-all duration-300"}>
<div className={"overflow-hidden"}>
<div className={"pt-4 lg:pt-5 mt-4 lg:mt-5 border-t border-border"}>
<p className={"text-sm lg:text-base text-foreground/80 leading-relaxed"}>
                                We understand that travel plans can change. We offer a flexible cancellation policy: you can cancel your tour or transport service up to 24 hours before the scheduled time for a full refund, with no hidden cancellation fees.
                            </p>
</div>
</div>
</div>
</div>

<div className={"gsap-faq-item opacity-0 translate-y-16 faq-item bg-card p-5 lg:p-6 rounded-2xl cursor-pointer"} role={"button"} tabIndex={"0"} aria-expanded={"false"} aria-controls={"faq-answer-5"} data-expanded={"false"}>
<div className={"flex justify-between items-center gap-4"}>
<h3 className={"text-base lg:text-lg font-semibold"}>What payment methods do you accept, and do I need to pay in advance?</h3>
<div className={"faq-icon size-8 md:size-9 lg:size-10 rounded-lg flex items-center justify-center shrink-0 bg-foreground text-background transition-colors duration-300"}>
<svg className={"size-5"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}><path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M12 4v16m8-8H4"}></path></svg>
</div>
</div>
<div id={"faq-answer-5"} className={"faq-content grid grid-rows-[0fr] transition-all duration-300"}>
<div className={"overflow-hidden"}>
<div className={"pt-4 lg:pt-5 mt-4 lg:mt-5 border-t border-border"}>
<p className={"text-sm lg:text-base text-foreground/80 leading-relaxed"}>
                                We offer flexible payment options. You can pay securely online via credit card or bank transfer during booking, or pay in cash (IDR, USD, or AUD) directly to your driver on the day of the service. No advance deposit is required for most standard bookings.
                            </p>
</div>
</div>
</div>
</div>

<div className={"gsap-faq-item opacity-0 translate-y-16 faq-item bg-card p-5 lg:p-6 rounded-2xl cursor-pointer"} role={"button"} tabIndex={"0"} aria-expanded={"false"} aria-controls={"faq-answer-6"} data-expanded={"false"}>
<div className={"flex justify-between items-center gap-4"}>
<h3 className={"text-base lg:text-lg font-semibold"}>Do you provide customized photography or videography services during tours?</h3>
<div className={"faq-icon size-8 md:size-9 lg:size-10 rounded-lg flex items-center justify-center shrink-0 bg-foreground text-background transition-colors duration-300"}>
<svg className={"size-5"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}><path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M12 4v16m8-8H4"}></path></svg>
</div>
</div>
<div id={"faq-answer-6"} className={"faq-content grid grid-rows-[0fr] transition-all duration-300"}>
<div className={"overflow-hidden"}>
<div className={"pt-4 lg:pt-5 mt-4 lg:mt-5 border-t border-border"}>
<p className={"text-sm lg:text-base text-foreground/80 leading-relaxed"}>
                                Yes! Bali has some of the world's most photogenic spots. While our drivers are always happy to help take photos with your phone, we can also arrange professional photographers or drone operators to capture your special moments upon request.
                            </p>
</div>
</div>
</div>
</div>

<div className={"gsap-faq-item opacity-0 translate-y-16 faq-item bg-card p-5 lg:p-6 rounded-2xl cursor-pointer"} role={"button"} tabIndex={"0"} aria-expanded={"false"} aria-controls={"faq-answer-7"} data-expanded={"false"}>
<div className={"flex justify-between items-center gap-4"}>
<h3 className={"text-base lg:text-lg font-semibold"}>How many years of experience does your team have?</h3>
<div className={"faq-icon size-8 md:size-9 lg:size-10 rounded-lg flex items-center justify-center shrink-0 bg-foreground text-background transition-colors duration-300"}>
<svg className={"size-5"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}><path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M12 4v16m8-8H4"}></path></svg>
</div>
</div>
<div id={"faq-answer-7"} className={"faq-content grid grid-rows-[0fr] transition-all duration-300"}>
<div className={"overflow-hidden"}>
<div className={"pt-4 lg:pt-5 mt-4 lg:mt-5 border-t border-border"}>
<p className={"text-sm lg:text-base text-foreground/80 leading-relaxed"}>
                                Our core team and senior guides have over 10 years of experience in Bali's hospitality and tourism industry. We have successfully guided thousands of happy travelers from all over the world.
                            </p>
</div>
</div>
</div>
</div>

<div className={"gsap-faq-item opacity-0 translate-y-16 faq-item bg-card p-5 lg:p-6 rounded-2xl cursor-pointer"} role={"button"} tabIndex={"0"} aria-expanded={"false"} aria-controls={"faq-answer-8"} data-expanded={"false"}>
<div className={"flex justify-between items-center gap-4"}>
<h3 className={"text-base lg:text-lg font-semibold"}>Do you support eco-friendly travel practices?</h3>
<div className={"faq-icon size-8 md:size-9 lg:size-10 rounded-lg flex items-center justify-center shrink-0 bg-foreground text-background transition-colors duration-300"}>
<svg className={"size-5"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}><path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M12 4v16m8-8H4"}></path></svg>
</div>
</div>
<div id={"faq-answer-8"} className={"faq-content grid grid-rows-[0fr] transition-all duration-300"}>
<div className={"overflow-hidden"}>
<div className={"pt-4 lg:pt-5 mt-4 lg:mt-5 border-t border-border"}>
<p className={"text-sm lg:text-base text-foreground/80 leading-relaxed"}>
                                Absolutely. We actively minimize single-use plastics during our tours, educate guests on respecting local wildlife and temples, and partner with eco-conscious vendors to help preserve Bali's natural beauty.
                            </p>
</div>
</div>
</div>
</div>

<div className={"gsap-faq-item opacity-0 translate-y-16 faq-item bg-card p-5 lg:p-6 rounded-2xl cursor-pointer"} role={"button"} tabIndex={"0"} aria-expanded={"false"} aria-controls={"faq-answer-9"} data-expanded={"false"}>
<div className={"flex justify-between items-center gap-4"}>
<h3 className={"text-base lg:text-lg font-semibold"}>Can you handle corporate retreats or large wedding groups?</h3>
<div className={"faq-icon size-8 md:size-9 lg:size-10 rounded-lg flex items-center justify-center shrink-0 bg-foreground text-background transition-colors duration-300"}>
<svg className={"size-5"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}><path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M12 4v16m8-8H4"}></path></svg>
</div>
</div>
<div id={"faq-answer-9"} className={"faq-content grid grid-rows-[0fr] transition-all duration-300"}>
<div className={"overflow-hidden"}>
<div className={"pt-4 lg:pt-5 mt-4 lg:mt-5 border-t border-border"}>
<p className={"text-sm lg:text-base text-foreground/80 leading-relaxed"}>
                                Yes, besides intimate private tours, our operational capacity allows us to manage transportation and itineraries for large events, corporate outings, and wedding groups with seamless coordination.
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
