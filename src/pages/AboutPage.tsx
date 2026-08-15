import React, { useState, useEffect } from "react";
import {
  Star,
  Headphones,
  ShieldCheck,
  Leaf,
  MapPin,
  Car,
  Plane,
  ChevronDown,
  ArrowUpRight,
} from "lucide-react";
import { AnimatedButton } from "../components/UI/AnimatedButton";
import { initSubpageAnimations } from "../utils/animations";

interface AboutPageProps {
  onNavigate?: (path: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0); // First item open by default

  useEffect(() => {
    const cleanup = initSubpageAnimations();
    return () => {
      if (cleanup) cleanup();
    };
  }, []);

  const handleLinkClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(href);
    } else {
      window.history.pushState({}, "", href);
      window.dispatchEvent(new PopStateEvent("popstate"));
    }
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const testimonials = [
    {
      name: "Sarah Mitchell",
      country: "Australia",
      review:
        "Our driver picked us up right on time and knew exactly which spots to hit before the crowds showed up. Made our trip to Ubud and Tanah Lot so much easier than trying to figure out transport ourselves.",
      stars: 5,
    },
    {
      name: "Thomas Weber",
      country: "Germany",
      review:
        "The Mount Batur sunrise trek was the highlight of our whole Bali trip. Our guide was patient with our group even though half of us were clearly not morning people, and the rafting the next day was just as good.",
      stars: 5,
    },
    {
      name: "Aiko Tanaka",
      country: "Japan",
      review:
        "I didn't expect a food tour to also teach me so much about the ceremonies and temples we passed. The warung stops were amazing, and our guide explained everything in a way that never felt rushed.",
      stars: 5,
    },
    {
      name: "Michael Chen",
      country: "Singapore",
      review:
        "Went with this team for our Nusa Penida trip and it was seamless — boat, snorkeling gear, and lunch all sorted. Would book with them again for our next Bali visit.",
      stars: 5,
    },
    {
      name: "Camille Dubois",
      country: "France",
      review:
        "Very smooth from the moment we landed. Our driver was already waiting with a sign, and he gave us great recommendations for dinner near Uluwatu that weren't just the usual tourist spots.",
      stars: 5,
    },
    {
      name: "James & Priya Patel",
      country: "United Kingdom",
      review:
        "Booking everything through one package saved us so much planning time. The only reason it's not a full 5 stars is one of our activities got moved due to weather, but the team rearranged it quickly and kept us in the loop.",
      stars: 5,
    },
  ];

  const faqs = [
    {
      question: "Who are the drivers and guides at Bali Bagus Journey?",
      answer:
        "Our drivers and guides are native Balinese locals who are licensed, fluent in English, and undergo rigorous hospitality and safe driving training. They have deep-rooted knowledge of Bali's history, culture, and hidden gems.",
    },
    {
      question: "What safety standards do you maintain for your vehicles?",
      answer:
        "Safety is our top priority. All our vehicles undergo daily cleanliness checks and regular professional maintenance. They are fully air-conditioned, clean, equipped with safety features (seatbelts, child seats upon request), and fully insured.",
    },
    {
      question: "How does booking with Bali Bagus Journey support Balinese communities?",
      answer:
        "We practice responsible tourism. We hire only local guides and drivers, partner directly with family-owned Balinese businesses, and recommend local eateries. This ensures that the tourism revenue directly benefits Balinese families and communities.",
    },
    {
      question: "What is your cancellation policy?",
      answer:
        "We understand that travel plans can change. We offer a flexible cancellation policy: you can cancel your tour or transport service up to 24 hours before the scheduled time for a full refund, with no hidden cancellation fees.",
    },
    {
      question: "What payment methods do you accept, and do I need to pay in advance?",
      answer:
        "We offer flexible payment options. You can pay securely online via credit card or bank transfer during booking, or pay in cash (IDR, USD, or AUD) directly to your driver on the day of the service. No advance deposit is required for most standard bookings.",
    },
    {
      question: "Do you provide customized photography or videography services during tours?",
      answer:
        "Yes! Bali has some of the world's most photogenic spots. While our drivers are always happy to help take photos with your phone, we can also arrange professional photographers or drone operators to capture your special moments upon request.",
    },
    {
      question: "How many years of experience does your team have?",
      answer:
        "Our core team and senior guides have over 10 years of experience in Bali's hospitality and tourism industry. We have successfully guided thousands of happy travelers from all over the world.",
    },
    {
      question: "Do you support eco-friendly travel practices?",
      answer:
        "Absolutely. We actively minimize single-use plastics during our tours, educate guests on respecting local wildlife and temples, and partner with eco-conscious vendors to help preserve Bali's natural beauty.",
    },
    {
      question: "Can you handle corporate retreats or large wedding groups?",
      answer:
        "Yes, besides intimate private tours, our operational capacity allows us to manage transportation and itineraries for large events, corporate outings, and wedding groups with seamless coordination.",
    },
  ];

  return (
    <div id="about-page" className="w-full">
      {/* 1. HEADLINE HERO SECTION */}
      <section
        id="headline"
        className="relative min-h-[60dvh] md:min-h-[45dvh] lg:min-h-[68dvh] 2xl:min-h-[52dvh] 2xl:max-h-[52dvh] flex items-end 2xl:container mx-auto"
      >
        <div className="absolute overflow-hidden inset-0 lg:inset-5 lg:top-4 lg:rounded-3xl 2xl:inset-x-0 lg:bottom-auto lg:h-[68dvh] 2xl:max-h-[50dvh]">
          <div className="gsap-headline-overlay absolute z-10 h-full w-full lg:rounded-3xl bg-[#131313]/50 lg:bg-transparent lg:bg-gradient-to-b from-0% from-[#131313]/40 via-40% via-[#131313]/0 to-80% to-[#131313]/80 lg:to-[#131313]/70"></div>
          <img
            src="assets/galleries/bdk2uvvu6stlowu9fhjc.webp"
            alt="About Bali Bagus Journey Headline Banner"
            fetchPriority="high"
            decoding="async"
            className="gsap-headline-bg absolute inset-0 w-full h-full object-cover lg:rounded-3xl"
          />
        </div>

        <div className="px-5 md:px-12 lg:px-20 2xl:px-30 pb-12 md:pb-16 relative z-20 w-full">
          <div className="text-center flex flex-col items-center">
            <div className="gsap-headline-badge flex items-center gap-2 w-fit bg-white border border-[#E5E5E5] rounded-full px-2.5 pr-3 py-2 mb-5 lg:mb-6">
              <div className="size-2.5 bg-[#FD4621] rounded-full"></div>
              <strong className="font-medium text-sm md:text-base text-[#131313]">
                About Bali Bagus Journey
              </strong>
            </div>
            <h1 className="gsap-headline-title text-3xl md:text-5xl lg:text-[52px] w-full mb-4 font-semibold text-white leading-snug lg:leading-[1.2]">
              Trusted Bali Tours <br /> & Transportation
            </h1>
            <p className="gsap-headline-text text-sm text-white w-full md:w-[72%] lg:w-[44%] leading-relaxed">
              We combine local expertise, reliable transportation, and personalized service to help travelers experience the best of Bali.
            </p>
          </div>
        </div>
      </section>

      {/* 2. ABOUT PAGE SECTION */}
      <section
        id="about-page-section"
        className="2xl:container mx-auto px-5 md:px-12 lg:px-20 2xl:px-30 py-12 md:py-16 lg:py-20"
      >
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-10 md:gap-12 lg:gap-16 items-center">
          {/* Image 1 */}
          <div className="gsap-about-page-img-1 order-1 lg:col-span-3 relative overflow-hidden rounded-2xl">
            <div className="gsap-image-reveal-cover"></div>
            <img
              src="assets/galleries/bdk2uvvu6stlowu9fhjc.webp"
              alt="Balinese Guide with travelers"
              className="w-full lg:w-[90%] aspect-4/3 md:aspect-21/9 lg:aspect-auto h-auto object-cover rounded-2xl"
            />
          </div>

          {/* Text & Stats */}
          <div className="gsap-about-page-content order-2 lg:col-span-5">
            <div className="mb-10 lg:mb-16">
              <div className="mb-6 lg:mb-8">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-snug lg:leading-[1.3] mb-4 md:mb-5 text-[#131313]">
                  More Than a <br className="hidden lg:block" /> Travel Company
                </h2>
                <p className="leading-relaxed text-sm md:text-base text-[#131313]/80">
                  We believe every journey should be comfortable, memorable, and stress-free. By combining trusted local expertise, reliable transportation, and personalized travel services, we help travelers explore Bali with confidence while creating unforgettable memories along the way.
                </p>
              </div>

              <a
                href="#testimonial"
                className="group inline-flex items-center justify-center gap-3 font-semibold rounded-full text-sm cursor-pointer transition-all duration-500 bg-[#131313] text-white hover:bg-[#131313]/90 pl-5 pr-2 py-2"
              >
                <div className="relative overflow-hidden flex items-center justify-center">
                  <span className="block transition-transform duration-500 group-hover:translate-y-[150%]">
                    Read Guest Reviews
                  </span>
                  <span className="absolute block transition-transform duration-500 -translate-y-[150%] group-hover:translate-y-0">
                    Read Guest Reviews
                  </span>
                </div>
                <span className="bg-[#FD4621] text-white p-1.5 rounded-full relative overflow-hidden flex items-center justify-center">
                  <ArrowUpRight className="size-4 transition-transform duration-500 group-hover:translate-x-[150%] group-hover:-translate-y-[150%]" />
                  <ArrowUpRight className="absolute size-4 transition-transform duration-500 -translate-x-[150%] translate-y-[150%] group-hover:translate-x-0 group-hover:translate-y-0" />
                </span>
              </a>
            </div>

            {/* Stats */}
            <div className="flex flex-col md:flex-row md:items-center justify-between">
              <div className="flex flex-col gap-1.5 lg:gap-2 pb-6 md:pb-8 lg:pb-0 mb-6 md:mb-0 border-b md:border-b-0 lg:border-0 border-[#E5E5E5]">
                <span className="text-3xl md:text-4xl font-semibold leading-none text-[#131313]">
                  <span className="gsap-counter" data-target="1500" data-decimals="0">1500</span>
                  <span className="text-[#FD4621]">+</span>
                </span>
                <p className="font-medium text-sm lg:text-base text-[#71717A]">
                  Happy Travelers
                </p>
              </div>

              <div className="flex flex-col gap-1.5 lg:gap-2 pb-6 md:pb-8 lg:pb-0 mb-6 md:mb-0 border-b md:border-b-0 lg:border-0 border-[#E5E5E5] md:border-x md:px-8 lg:px-0">
                <span className="text-3xl md:text-4xl font-semibold leading-none flex items-center gap-2 text-[#131313]">
                  <span className="gsap-counter" data-target="4.9" data-decimals="1">4.9</span>/5
                  <span className="text-[#FD4621]">
                    <Star className="size-5 md:size-6 fill-current" />
                  </span>
                </span>
                <p className="font-medium text-sm lg:text-base text-[#71717A]">
                  Average Rating
                </p>
              </div>

              <div className="flex flex-col gap-1.5 lg:gap-2 pb-6 md:pb-8 lg:pb-0 mb-0 md:mb-0 border-b md:border-b-0 lg:border-0 border-[#E5E5E5]">
                <span className="text-3xl md:text-4xl font-semibold leading-none text-[#131313]">
                  <span className="gsap-counter" data-target="8" data-decimals="0">8</span> Years<span className="text-[#FD4621]">+</span>
                </span>
                <p className="font-medium text-sm lg:text-base text-[#71717A]">
                  Experience
                </p>
              </div>
            </div>
          </div>

          {/* Image 2 */}
          <div className="gsap-about-page-img-2 order-3 lg:col-span-4 relative overflow-hidden rounded-2xl">
            <div className="gsap-image-reveal-cover"></div>
            <img
              src="assets/galleries/dkuokdg5xh0xpytwno7v.webp"
              alt="Scenic destination in Bali"
              className="w-full aspect-video md:aspect-21/9 lg:aspect-auto h-full object-cover rounded-2xl"
            />
          </div>
        </div>
      </section>

      {/* 3. WHO WE ARE */}
      <section
        id="who-we-are"
        className="2xl:container mx-auto px-5 md:px-12 lg:px-20 2xl:px-30 py-12 md:py-16 lg:py-20"
      >
        <div className="mb-10 lg:mb-16">
          <div className="mb-4 lg:mb-6 flex items-center gap-2 w-fit bg-white border border-[#E5E5E5] rounded-full px-2.5 pr-3 py-2">
            <div className="size-2.5 bg-[#FD4621] rounded-full"></div>
            <strong className="font-medium text-sm md:text-base text-[#131313]">
              Who We Are
            </strong>
          </div>
          <div className="flex flex-col lg:flex-row gap-4 lg:items-center justify-between">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-snug lg:leading-[1.3] lg:max-w-xl text-[#131313]">
              The Principles That Guide Every Journey
            </h2>
            <div className="flex flex-col gap-4 lg:gap-5 items-start lg:items-end text-start lg:text-end lg:max-w-md">
              <p className="text-sm md:text-base leading-relaxed w-full text-[#131313]/80">
                Every trip is built on trust, local expertise, and genuine hospitality. These values shape how we serve our guests and ensure every experience in Bali is comfortable, reliable, and memorable.
              </p>
            </div>
          </div>
        </div>

        <div>
          <div className="h-[35vh] md:h-[45vh] lg:h-[60vh] 2xl:h-[50vh] rounded-2xl overflow-hidden mb-8 lg:mb-10 relative">
            <img
              src="assets/galleries/xkcqpgpatfpmvfixwgl9.webp"
              alt="Our Team and Services"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Card 1 */}
            <div className="bg-[#F8F9FA] p-5 md:p-6 lg:p-8 rounded-2xl flex flex-col border border-[#E5E5E5]/50">
              <div className="bg-[#FD4621] mb-5 lg:mb-10 rounded-2xl w-fit p-3 text-white">
                <Headphones className="size-7" />
              </div>
              <div className="text-[#131313] flex flex-col grow">
                <h3 className="text-lg lg:text-xl font-semibold mb-2">
                  Personalized Service
                </h3>
                <p className="text-sm text-[#131313]/80 leading-relaxed">
                  We carefully design every itinerary around individual preferences and travel goals to ensure a unique and seamless experience.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-[#F8F9FA] p-5 md:p-6 lg:p-8 rounded-2xl flex flex-col border border-[#E5E5E5]/50">
              <div className="bg-[#FD4621] mb-5 lg:mb-10 rounded-2xl w-fit p-3 text-white">
                <ShieldCheck className="size-7" />
              </div>
              <div className="text-[#131313] flex flex-col grow">
                <h3 className="text-lg lg:text-xl font-semibold mb-2">
                  Trusted Expertise
                </h3>
                <p className="text-sm text-[#131313]/80 leading-relaxed">
                  Our experienced travel specialists combine deep destination knowledge with professional planning to deliver reliable and well-organized journeys.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-[#F8F9FA] p-5 md:p-6 lg:p-8 rounded-2xl flex flex-col border border-[#E5E5E5]/50">
              <div className="bg-[#FD4621] mb-5 lg:mb-10 rounded-2xl w-fit p-3 text-white">
                <Leaf className="size-7" />
              </div>
              <div className="text-[#131313] flex flex-col grow">
                <h3 className="text-lg lg:text-xl font-semibold mb-2">
                  Sustainable Travel
                </h3>
                <p className="text-sm text-[#131313]/80 leading-relaxed">
                  We promote responsible tourism practices that respect local cultures, protect natural environments, and support local communities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SERVICES SECTION */}
      <section
        id="service"
        className="2xl:container mx-auto lg:px-5 2xl:px-0 lg:py-15 2xl:py-20"
      >
        <div className="bg-[#131313] px-5 md:px-10 lg:px-15 2xl:px-30 py-12 lg:py-20 lg:rounded-3xl text-white">
          <div className="text-center flex flex-col items-center mb-10 lg:mb-16">
            <div className="flex items-center gap-2 w-fit bg-white border border-[#E5E5E5] rounded-full px-2.5 pr-3 py-2 mb-5 lg:mb-6">
              <div className="size-2.5 bg-[#FD4621] rounded-full"></div>
              <strong className="font-medium text-sm md:text-base text-[#131313]">
                Our Travel Services
              </strong>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-snug lg:leading-[1.3]">
              Travel Services Designed <br className="hidden lg:block" /> for Every Bali Journey
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
            {/* Service 1 */}
            <div className="bg-white p-6 lg:p-8 rounded-2xl flex flex-col text-[#131313]">
              <div className="bg-[#FD4621] mb-6 lg:mb-7 rounded-2xl w-fit p-3 text-white">
                <MapPin className="size-8 lg:size-10" />
              </div>
              <div className="flex flex-col grow">
                <div className="mb-4 lg:mb-5 grow">
                  <h3 className="text-xl lg:text-2xl font-semibold mb-2">
                    Bali Tours & Activities
                  </h3>
                  <p className="text-sm lg:text-base text-[#71717A] leading-relaxed">
                    Explore Bali's top attractions with flexible tour packages and experienced local guides.
                  </p>
                </div>
                <AnimatedButton
                  href="/tours"
                  onClick={(e) => handleLinkClick(e, "/tours")}
                  variant="outline"
                >
                  Explore Tours
                </AnimatedButton>
              </div>
            </div>

            {/* Service 2 */}
            <div className="bg-white p-6 lg:p-8 rounded-2xl flex flex-col text-[#131313]">
              <div className="bg-[#FD4621] mb-6 lg:mb-7 rounded-2xl w-fit p-3 text-white">
                <Car className="size-8 lg:size-10" />
              </div>
              <div className="flex flex-col grow">
                <div className="mb-4 lg:mb-5 grow">
                  <h3 className="text-xl lg:text-2xl font-semibold mb-2">
                    Private Transport
                  </h3>
                  <p className="text-sm lg:text-base text-[#71717A] leading-relaxed">
                    Travel comfortably across Bali with private professional drivers.
                  </p>
                </div>
                <AnimatedButton
                  href="/transport"
                  onClick={(e) => handleLinkClick(e, "/transport")}
                  variant="outline"
                >
                  View Vehicles
                </AnimatedButton>
              </div>
            </div>

            {/* Service 3 */}
            <div className="bg-white p-6 lg:p-8 rounded-2xl flex flex-col text-[#131313]">
              <div className="bg-[#FD4621] mb-6 lg:mb-7 rounded-2xl w-fit p-3 text-white">
                <Plane className="size-8 lg:size-10" />
              </div>
              <div className="flex flex-col grow">
                <div className="mb-4 lg:mb-5 grow">
                  <h3 className="text-xl lg:text-2xl font-semibold mb-2">
                    Airport Transfer
                  </h3>
                  <p className="text-sm lg:text-base text-[#71717A] leading-relaxed">
                    Enjoy safe and punctual airport transfers to and from any destination in Bali.
                  </p>
                </div>
                <AnimatedButton
                  href="/transport"
                  onClick={(e) => handleLinkClick(e, "/transport")}
                  variant="outline"
                >
                  Book Transfer
                </AnimatedButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. TESTIMONIAL SECTION */}
      <section
        id="testimonial"
        className="2xl:container mx-auto px-5 md:px-12 lg:px-20 2xl:px-30 py-15 2xl:py-20"
      >
        <div className="mb-10 md:mb-12 lg:mb-16">
          <div className="mb-4 lg:mb-6 flex items-center gap-2 w-fit bg-white border border-[#E5E5E5] rounded-full px-2.5 pr-3 py-2">
            <div className="size-2.5 bg-[#FD4621] rounded-full"></div>
            <strong className="font-medium text-sm md:text-base text-[#131313]">
              Customer Reviews
            </strong>
          </div>
          <div className="flex flex-col lg:flex-row gap-3 lg:items-center justify-between">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-snug lg:leading-[1.3] lg:max-w-lg text-[#131313]">
              Loved by Travelers from Around the World
            </h2>
            <div className="flex flex-col gap-8 lg:gap-4 items-start lg:items-end text-start lg:text-end lg:max-w-[33%]">
              <p className="text-sm md:text-base leading-relaxed w-full text-[#131313]/80">
                See why travelers choose our Bali tours, private drivers, and airport transfer services for a comfortable and memorable journey.
              </p>
              <div className="mt-2 lg:mt-0">
                <AnimatedButton
                  href="/contact"
                  onClick={(e) => handleLinkClick(e, "/contact")}
                  variant="dark"
                >
                  Leave a review
                </AnimatedButton>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="p-6 lg:p-7 bg-[#F8F9FA] rounded-2xl flex flex-col justify-between gap-8 lg:gap-16 border border-[#E5E5E5]/50"
            >
              <div>
                <div className="flex items-center mb-4 lg:mb-5 gap-1 text-[#FD4621]">
                  {[...Array(t.stars)].map((_, sIdx) => (
                    <Star key={sIdx} className="size-5 fill-current" />
                  ))}
                </div>
                <p className="font-medium text-base lg:text-lg leading-relaxed w-full text-[#131313]">
                  "{t.review}"
                </p>
              </div>

              <div>
                <h3 className="text-lg lg:text-xl font-medium text-[#131313]">
                  {t.name}
                </h3>
                <p className="text-sm lg:text-base text-[#71717A] font-medium">
                  {t.country}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. FAQ SECTION */}
      <section
        id="faq"
        className="2xl:container mx-auto px-5 md:px-12 lg:px-20 2xl:px-30 py-12 md:py-16 lg:py-20"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12 lg:gap-10">
          <div className="lg:col-span-5 flex flex-col gap-8 lg:gap-0 lg:justify-between">
            <div>
              <div className="mb-4 lg:mb-6 flex items-center gap-2 w-fit bg-white border border-[#E5E5E5] rounded-full px-2.5 pr-3 py-2">
                <div className="size-2.5 bg-[#FD4621] rounded-full"></div>
                <strong className="font-medium text-sm md:text-base text-[#131313]">
                  FAQ
                </strong>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-snug lg:leading-[1.3] lg:max-w-xl text-[#131313]">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="flex">
              <div className="w-full md:w-3/5 lg:w-4/5 xl:w-[75%] bg-[#F8F9FA] p-6 lg:p-7 rounded-2xl border border-[#E5E5E5]/50">
                <div className="mb-8">
                  <h4 className="text-lg font-semibold mb-2 text-[#131313]">
                    Have Another Question?
                  </h4>
                  <p className="text-sm w-[88%] text-[#131313]/80 leading-relaxed">
                    Contact us via WhatsApp and we will respond quickly
                  </p>
                </div>

                <AnimatedButton
                  href="/contact"
                  onClick={(e) => handleLinkClick(e, "/contact")}
                  variant="dark"
                  size="sm"
                >
                  Contact Us
                </AnimatedButton>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col gap-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  onClick={() => toggleFaq(idx)}
                  className="bg-[#F8F9FA] p-5 lg:p-6 rounded-2xl cursor-pointer border border-[#E5E5E5]/50 transition-colors hover:border-[#FD4621]/30"
                  role="button"
                  tabIndex={0}
                  aria-expanded={isOpen}
                >
                  <div className="flex justify-between items-center gap-4">
                    <h3 className="text-base lg:text-lg font-semibold text-[#131313]">
                      {faq.question}
                    </h3>
                    <div
                      className={`size-8 md:size-9 lg:size-10 rounded-lg flex items-center justify-center shrink-0 transition-colors duration-300 ${
                        isOpen
                          ? "bg-[#FD4621] text-white"
                          : "bg-[#131313] text-white"
                      }`}
                    >
                      <svg
                        className="size-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        {isOpen ? (
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M20 12H4"
                          />
                        ) : (
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 4v16m8-8H4"
                          />
                        )}
                      </svg>
                    </div>
                  </div>

                  {isOpen && (
                    <div className="pt-4 lg:pt-5 mt-4 lg:mt-5 border-t border-[#E5E5E5]">
                      <p className="text-sm lg:text-base text-[#131313]/80 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
