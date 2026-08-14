import { PageShell } from '../components/PageShell'

export function ContactPage() {
  return (
    <PageShell>
      

<main className={"min-h-dvh"}>
<section id={"headline"} className={"relative min-h-[60dvh] md:min-h-[45dvh] lg:min-h-[68dvh] 2xl:min-h-[52dvh] 2xl:max-h-[52dvh] flex items-end 2xl:container mx-auto"}>
<div className={"absolute overflow-hidden inset-0 lg:inset-5 lg:top-4 lg:rounded-3xl 2xl:inset-x-0 lg:bottom-auto lg:h-[68dvh] 2xl:max-h-[50dvh]"}>
<div className={"gsap-tours-overlay opacity-0 absolute z-10 h-full w-full lg:rounded-3xl bg-foreground/50 lg:bg-transparent lg:bg-linear-to-b from-0% from-foreground/40 via-40% via-foreground/0 to-80% to-foreground/80 lg:to-foreground/70"}></div>
<img src={"assets/contact/headline.html"} alt={"Scenic view of Bali mountains and valleys, representing diverse Bali tour packages"} fetchpriority={"high"} decoding={"async"} className={"gsap-tours-bg opacity-0 scale-105 absolute inset-0 w-full h-full object-cover lg:rounded-3xl"} />
</div>
<div className={"px-5 md:px-12 lg:px-20 2xl:px-36 pb-12 md:pb-20 relative z-20 w-full"}>
<div className={"text-center flex flex-col items-center"}>
<div className={"gsap-tours-badge opacity-0 translate-y-16 flex items-center gap-2 w-fit bg-white border border-border rounded-full px-2.5 pr-3 py-2 mb-5 lg:mb-6"}>
<div className={"size-2.5 bg-primary rounded-full"}></div>
<strong className={"font-medium text-sm md:text-base text-foreground"}>Contact Us</strong>
</div>
<h1 className={"gsap-tours-title opacity-0 translate-y-16 text-3xl md:text-5xl lg:text-[52px] w-full mb-4 font-semibold text-white leading-snug lg:leading-[1.2]"}>
                Let's Plan Your <br /> Bali Journey With Us
            </h1>
<p className={"gsap-tours-text opacity-0 translate-y-16 text-sm text-white w-full md:w-[72%] lg:w-[40%] leading-relaxed"}>
                Have questions or ready to book? Our friendly team is here to help you plan a smooth, comfortable, and unforgettable experience in Bali.
            </p>
</div>
</div>
</section>
<section id={"form"} className={"2xl:container mx-auto px-5 md:px-12 lg:px-20 2xl:px-30 pt-12 pb-32 lg:pb-20 2xl:py-24"}>
<div className={"grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10"}>
<div className={"col-span-12 lg:col-span-7"}>
<div className={"gsap-contact-form opacity-0 translate-y-16 bg-card rounded-2xl p-5 lg:p-8 w-full"}>
<h3 className={"text-2xl font-semibold mb-6 text-foreground"}>Start Your Inquiry</h3>
<form action={"https://balibagusjourney.com/contact"} method={"POST"}>
<input type={"hidden"} name={"_token"} value={"p9EeOjxwg960RtZ8ZwZX0KYViaykZEegFe54xjQH"} autoComplete={"off"} /> 
<div className={"mb-5"}>
<label htmlFor={"full-name"} className={"block text-text-label-secondary text-sm font-medium mb-2.5"}>Your Full Name</label>
<div className={"relative border border-border rounded-full px-5 py-4 flex items-center gap-3 bg-white focus-within:border-primary transition-colors"}>
<svg className={"feather feather-user"} xmlns={"http://www.w3.org/2000/svg"} width={"24"} height={"24"} viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}><path d={"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}></path><circle cx={"12"} cy={"7"} r={"4"}></circle></svg> <input id={"full-name"} name={"name"} type={"text"} placeholder={"Bobby JR"} className={"w-full text-foreground text-sm font-medium focus:outline-none bg-transparent placeholder-text-label-secondary"} required={""} />
</div>
</div>

<div className={"grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5 mb-5"}>

<div>
<label htmlFor={"email"} className={"block text-text-label-secondary text-sm font-medium mb-2.5"}>Email Address</label>
<div className={"relative border border-border rounded-full px-5 py-4 flex items-center gap-3 bg-white focus-within:border-primary transition-colors"}>
<svg className={"feather feather-mail"} xmlns={"http://www.w3.org/2000/svg"} width={"24"} height={"24"} viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}><path d={"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}></path><polyline points={"22,6 12,13 2,6"}></polyline></svg> <input id={"email"} name={"email"} type={"email"} placeholder={"user@gmail.com"} className={"w-full text-foreground text-sm font-medium focus:outline-none bg-transparent placeholder-text-label-secondary"} required={""} />
</div>
</div>

<div>
<label htmlFor={"phone"} className={"block text-text-label-secondary text-sm font-medium mb-2.5"}>Phone Number</label>
<div className={"relative border border-border rounded-full px-5 py-4 flex items-center gap-3 bg-white focus-within:border-primary transition-colors"}>
<svg className={"feather feather-phone"} xmlns={"http://www.w3.org/2000/svg"} width={"24"} height={"24"} viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}><path d={"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"}></path></svg> <input id={"phone"} name={"phone"} type={"tel"} placeholder={"+62 821-2345-678"} className={"w-full text-foreground text-sm font-medium focus:outline-none bg-transparent placeholder-text-label-secondary"} required={""} />
</div>
</div>
</div>

<div className={"mb-5"}>
<label htmlFor={"inquiry-type"} className={"block text-text-label-secondary text-sm font-medium mb-2.5"}>Inquiry Type</label>
<div className={"relative border border-border rounded-full px-5 py-3.5 flex items-center gap-3 bg-white focus-within:border-primary transition-colors"}>
<svg className={"feather feather-help-circle"} xmlns={"http://www.w3.org/2000/svg"} width={"24"} height={"24"} viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}><circle cx={"12"} cy={"12"} r={"10"}></circle><path d={"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}></path><line x1={"12"} y1={"17"} x2={"12.01"} y2={"17"}></line></svg> <select id={"inquiry-type"} name={"type"} className={"w-full text-foreground text-sm font-medium focus:outline-none bg-transparent appearance-none cursor-pointer pr-10"} required={""}>
<option value={"general"}>General Question</option>
<option value={"trip-tour"}>Trip and Tour</option>
<option value={"testimonial"}>Testimonial</option>
</select>
<svg className={"feather feather-chevron-down"} xmlns={"http://www.w3.org/2000/svg"} width={"24"} height={"24"} viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}><polyline points={"6 9 12 15 18 9"}></polyline></svg> </div>
</div>

<div className={"mb-6"}>
<label htmlFor={"message"} className={"block text-text-label-secondary text-sm font-medium mb-2.5"}>Your Message</label>
<div className={"relative border border-border rounded-2xl px-5 py-4 flex items-start gap-3 bg-white focus-within:border-primary transition-colors"}>
<svg className={"feather feather-message-square"} xmlns={"http://www.w3.org/2000/svg"} width={"24"} height={"24"} viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}><path d={"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"}></path></svg> <textarea id={"message"} name={"message"} rows={"5"} placeholder={"Your Question"} className={"w-full text-foreground text-sm font-medium focus:outline-none bg-transparent placeholder-text-label-secondary resize-none"} required={""}></textarea>
</div>
</div>

<div className={"flex justify-end pt-2"}>
<button className={"group inline-flex items-center justify-center gap-3 font-semibold rounded-full text-sm cursor-pointer transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary bg-primary text-white hover:bg-primary/90 pl-5 pr-2 py-2"} type={"submit"} id={"inquiry-submit-btn"}>
<div className={"relative overflow-hidden flex items-center justify-center"}>
<span className={"block transition-transform duration-500 group-hover:translate-y-[150%]"}>Submit Inquiry</span>
<span className={"absolute block transition-transform duration-500 -translate-y-[150%] group-hover:translate-y-0"}>Submit Inquiry</span>
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
</div>
</form>
</div>
</div>
<div className={"col-span-12 lg:col-span-5"}>
<div className={"gsap-contact-info opacity-0 translate-y-16 p-5 md:p-7 bg-foreground rounded-2xl"}>
<h3 className={"text-2xl font-semibold text-white mb-6"}>Direct Access</h3>
<div className={"flex flex-col gap-4"}>
<a href={"tel:+6285934484380"} className={"bg-white p-4 rounded-2xl flex items-center gap-5 hover:opacity-85 transition ease-in-out"}>
<div className={"p-3 w-fit bg-primary rounded-2xl shrink-0"}>
<svg className={"feather feather-phone"} xmlns={"http://www.w3.org/2000/svg"} width={"24"} height={"24"} viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}><path d={"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"}></path></svg> </div>
<div>
<h4 className={"text-base text-text-label-secondary mb-0.5"}>Whatsapp</h4>
<strong className={"font-semibold text-foreground"}>+62 859-3448-4380</strong>
</div>
</a>
<a href={"mailto:balibagusjourney@gmail.com"} className={"bg-white p-4 rounded-2xl flex items-center gap-5 hover:opacity-85 transition ease-in-out"}>
<div className={"p-3 w-fit bg-primary rounded-2xl shrink-0"}>
<svg className={"feather feather-mail"} xmlns={"http://www.w3.org/2000/svg"} width={"24"} height={"24"} viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}><path d={"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}></path><polyline points={"22,6 12,13 2,6"}></polyline></svg> </div>
<div className={"overflow-hidden"}>
<h4 className={"text-base text-text-label-secondary mb-0.5"}>Email Us</h4>
<strong className={"font-semibold text-foreground truncate block"}>balibagusjourney@gmail.com</strong>
</div>
</a>
<a href={"https://maps.google.com/?q=Jl.%20Puputan%20Baru%20Gg.%20VI%20A%20No.26,%20Tegal%20Kertha,%20Kec.%20Denpasar%20Bar.,%20Kota%20Denpasar,%20Bali%2080111,%20Indonesia"} target={"_blank"} rel={"noopener noreferrer"} className={"bg-white p-4 rounded-2xl flex items-center gap-5 hover:opacity-85 transition ease-in-out"}>
<div className={"p-3 w-fit bg-primary rounded-2xl shrink-0"}>
<svg className={"feather feather-map-pin"} xmlns={"http://www.w3.org/2000/svg"} width={"24"} height={"24"} viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}><path d={"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"}></path><circle cx={"12"} cy={"10"} r={"3"}></circle></svg> </div>
<div>
<h4 className={"text-base text-text-label-secondary mb-0.5"}>Address</h4>
<strong className={"font-semibold text-foreground text-sm leading-snug line-clamp-2"}>Jl. Puputan Baru Gg. VI A No.26, Tegal Kertha, Kec. Denpasar Bar., Kota Denpasar, Bali 80111, Indonesia</strong>
</div>
</a>
</div>
</div>
</div>
</div>
</section> <section id={"faq"} className={"2xl:container mx-auto px-5 md:px-12 lg:px-20 2xl:px-30 py-12 md:py-16 lg:py-20"}>
<div className={"grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12 lg:gap-10"}>
<div className={"lg:col-span-5 flex flex-col gap-8 lg:gap-0 lg:justify-between lg:min-h-[75dvh] 2xl:min-h-[50dvh] 2xl:max-h-[50dvh]"}>
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
<button className={"group inline-flex items-center justify-center gap-3 font-semibold rounded-full text-sm cursor-pointer transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary bg-foreground text-background hover:bg-foreground/90 pl-3 pr-1.5 py-1.5 lg:pl-4 lg:pr-2 lg:py-1.5 w-fit text-xs lg:text-sm"}>
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
</button>
</div>
</div>
</div>
<div className={"lg:col-span-7 flex flex-col gap-4"}>

<div className={"gsap-faq-item opacity-0 translate-y-16 faq-item bg-card p-5 lg:p-6 rounded-2xl cursor-pointer"} role={"button"} tabIndex={"0"} aria-expanded={"true"} aria-controls={"faq-answer-1"} data-expanded={"true"}>
<div className={"flex justify-between items-center gap-4"}>
<h3 className={"text-base lg:text-lg font-semibold"}>How fast can I expect a reply after submitting an inquiry?</h3>
<div className={"faq-icon size-8 md:size-9 lg:size-10 rounded-lg flex items-center justify-center shrink-0 bg-primary text-white transition-colors duration-300"}>
<svg className={"size-5"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}><path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M20 12H4"}></path></svg>
</div>
</div>
<div id={"faq-answer-1"} className={"faq-content grid grid-rows-[1fr] transition-all duration-300"}>
<div className={"overflow-hidden"}>
<div className={"pt-4 lg:pt-5 mt-4 lg:mt-5 border-t border-border"}>
<p className={"text-sm lg:text-base text-foreground/80 leading-relaxed"}>
                                We aim to respond to all emails and form inquiries within 12-24 hours. If your request is urgent or you need to book for the next day, we highly recommend contacting us directly via WhatsApp for an immediate response.
                            </p>
</div>
</div>
</div>
</div>

<div className={"gsap-faq-item opacity-0 translate-y-16 faq-item bg-card p-5 lg:p-6 rounded-2xl cursor-pointer"} role={"button"} tabIndex={"0"} aria-expanded={"false"} aria-controls={"faq-answer-2"} data-expanded={"false"}>
<div className={"flex justify-between items-center gap-4"}>
<h3 className={"text-base lg:text-lg font-semibold"}>What should I include in my message to get the best itinerary suggestion?</h3>
<div className={"faq-icon size-8 md:size-9 lg:size-10 rounded-lg flex items-center justify-center shrink-0 bg-foreground text-background transition-colors duration-300"}>
<svg className={"size-5"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}><path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M12 4v16m8-8H4"}></path></svg>
</div>
</div>
<div id={"faq-answer-2"} className={"faq-content grid grid-rows-[0fr] transition-all duration-300"}>
<div className={"overflow-hidden"}>
<div className={"pt-4 lg:pt-5 mt-4 lg:mt-5 border-t border-border"}>
<p className={"text-sm lg:text-base text-foreground/80 leading-relaxed"}>
                                To help us craft the perfect experience, please include your travel dates, group size, main interests (e.g., culture, nature, adventure), and any specific places you already have in mind.
                            </p>
</div>
</div>
</div>
</div>

<div className={"gsap-faq-item opacity-0 translate-y-16 faq-item bg-card p-5 lg:p-6 rounded-2xl cursor-pointer"} role={"button"} tabIndex={"0"} aria-expanded={"false"} aria-controls={"faq-answer-3"} data-expanded={"false"}>
<div className={"flex justify-between items-center gap-4"}>
<h3 className={"text-base lg:text-lg font-semibold"}>Do you accept last-minute bookings?</h3>
<div className={"faq-icon size-8 md:size-9 lg:size-10 rounded-lg flex items-center justify-center shrink-0 bg-foreground text-background transition-colors duration-300"}>
<svg className={"size-5"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}><path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M12 4v16m8-8H4"}></path></svg>
</div>
</div>
<div id={"faq-answer-3"} className={"faq-content grid grid-rows-[0fr] transition-all duration-300"}>
<div className={"overflow-hidden"}>
<div className={"pt-4 lg:pt-5 mt-4 lg:mt-5 border-t border-border"}>
<p className={"text-sm lg:text-base text-foreground/80 leading-relaxed"}>
                                Yes, we do accept last-minute bookings depending on the availability of our drivers and vehicles. For any bookings within 24 hours of your desired pickup time, please contact us via WhatsApp to ensure immediate confirmation.
                            </p>
</div>
</div>
</div>
</div>

<div className={"gsap-faq-item opacity-0 translate-y-16 faq-item bg-card p-5 lg:p-6 rounded-2xl cursor-pointer"} role={"button"} tabIndex={"0"} aria-expanded={"false"} aria-controls={"faq-answer-4"} data-expanded={"false"}>
<div className={"flex justify-between items-center gap-4"}>
<h3 className={"text-base lg:text-lg font-semibold"}>What happens after I submit the inquiry form?</h3>
<div className={"faq-icon size-8 md:size-9 lg:size-10 rounded-lg flex items-center justify-center shrink-0 bg-foreground text-background transition-colors duration-300"}>
<svg className={"size-5"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}><path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M12 4v16m8-8H4"}></path></svg>
</div>
</div>
<div id={"faq-answer-4"} className={"faq-content grid grid-rows-[0fr] transition-all duration-300"}>
<div className={"overflow-hidden"}>
<div className={"pt-4 lg:pt-5 mt-4 lg:mt-5 border-t border-border"}>
<p className={"text-sm lg:text-base text-foreground/80 leading-relaxed"}>
                                Once you submit the form, our team will carefully review your request and send you a detailed reply or booking confirmation via email or WhatsApp. This will include your final itinerary, pricing details, and the contact information of your assigned driver.
                            </p>
</div>
</div>
</div>
</div>

<div className={"gsap-faq-item opacity-0 translate-y-16 faq-item bg-card p-5 lg:p-6 rounded-2xl cursor-pointer"} role={"button"} tabIndex={"0"} aria-expanded={"false"} aria-controls={"faq-answer-5"} data-expanded={"false"}>
<div className={"flex justify-between items-center gap-4"}>
<h3 className={"text-base lg:text-lg font-semibold"}>Is my personal information secure?</h3>
<div className={"faq-icon size-8 md:size-9 lg:size-10 rounded-lg flex items-center justify-center shrink-0 bg-foreground text-background transition-colors duration-300"}>
<svg className={"size-5"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}><path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M12 4v16m8-8H4"}></path></svg>
</div>
</div>
<div id={"faq-answer-5"} className={"faq-content grid grid-rows-[0fr] transition-all duration-300"}>
<div className={"overflow-hidden"}>
<div className={"pt-4 lg:pt-5 mt-4 lg:mt-5 border-t border-border"}>
<p className={"text-sm lg:text-base text-foreground/80 leading-relaxed"}>
                                Yes, we take your privacy very seriously. The contact details you provide are strictly used to process your booking, answer your inquiries, and communicate with you regarding your trip. We never share your data with third parties.
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
