import React, { useState, useEffect } from "react";
import { toursData } from "../data/tours";
import { vehiclesData } from "../data/transport";
import { blogsData } from "../data/blogs";
import { testimonials, homeFAQs, siteConfig } from "../data/siteConfig";
import { HeroSearchForm } from "../components/Hero/HeroSearchForm";
import { AnimatedButton } from "../components/UI/AnimatedButton";
import { initHomePageAnimations } from "../utils/animations";

interface HomePageProps {
  onNavigate?: (path: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  useEffect(() => {
    const cleanup = initHomePageAnimations();
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

  // Top tours for home page
  const featuredTours = toursData.slice(0, 4);

  // Featured blog (first blog) and other blogs (next 3)
  const featuredBlog = blogsData[0];
  const sideBlogs = blogsData.slice(1, 4);

  return (
    <div id="home-page" className="w-full">
      {/* 1. HERO SECTION */}
      <section
        id="hero"
        className="relative 2xl:container mx-auto pb-15 2xl:pb-20 min-h-dvh flex items-end lg:items-center"
      >
        <div className="absolute overflow-hidden inset-0 lg:inset-5 lg:top-4 2xl:inset-x-0 lg:bottom-auto lg:h-[96dvh] 2xl:max-h-[85dvh] lg:rounded-3xl">
          <div className="gsap-hero-overlay absolute z-10 h-full w-full lg:rounded-3xl bg-[#131313]/50 lg:bg-transparent lg:bg-gradient-to-b from-0% from-[#131313]/40 via-40% via-[#131313]/0 to-80% to-[#131313]/80 lg:to-[#131313]/70"></div>
          <img
            src="assets/home/hero.webp"
            alt="Scenic view of Bali - Book trusted local drivers and private tours"
            fetchPriority="high"
            decoding="async"
            className="gsap-hero-bg absolute inset-0 w-full h-full object-cover lg:rounded-3xl"
          />
        </div>

        <div className="px-5 md:px-12 lg:px-20 2xl:px-30 pt-32 lg:py-14 relative z-20 grid grid-cols-1 lg:grid-cols-12 items-end gap-10 lg:gap-0 w-full">
          <div className="col-span-1 lg:col-span-7">
            <div className="gsap-hero-badge flex items-center gap-2 mb-6 w-fit bg-white rounded-full px-2.5 pr-3 py-2">
              <div className="size-2.5 bg-[#FD4621] rounded-full"></div>
              <strong className="font-medium text-xs md:text-base text-[#131313]">
                Trusted Bali Local Driver
              </strong>
            </div>

            <div>
              <h1 className="gsap-hero-title text-4xl md:text-6xl text-white font-bold leading-[1.18] mb-4 lg:mb-5 w-full md:w-[90%]">
                Book Trusted Bali Tours & Private Transport with Local Experts
              </h1>
              <p className="gsap-hero-text md:leading-relaxed text-sm md:text-base w-full md:w-[67%] text-white">
                Explore the beauty of Bali with personalized tour packages, private drivers, and reliable airport transfers. Choose your travel date, group size, and preferred service to get started in minutes.
              </p>
            </div>
          </div>

          <div className="hidden lg:block lg:col-span-1"></div>

          <div className="gsap-hero-form col-span-1 lg:col-span-4 w-full">
            <HeroSearchForm onNavigate={onNavigate} />
          </div>
        </div>
      </section>

      {/* 2. ABOUT US SECTION */}
      <section
        id="about"
        className="2xl:container mx-auto px-5 md:px-12 lg:px-20 2xl:px-30 py-15 2xl:py-20"
      >
        {/* Top Row: Badge & Stats */}
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-6 md:gap-8 lg:gap-5 mb-6 md:mb-8 lg:mb-12">
          <div className="lg:col-span-3">
            <div className="gsap-about-badge flex items-center gap-2 w-fit bg-white border border-[#E5E5E5] rounded-full px-2.5 pr-3 py-2">
              <div className="size-2.5 bg-[#FD4621] rounded-full"></div>
              <strong className="font-medium text-sm md:text-base text-[#131313]">About Us</strong>
            </div>
          </div>

          <div className="lg:col-span-6 xl:col-span-6 items-start grid md:grid-cols-3 md:gap-10 lg:gap-5">
            <div className="gsap-about-stat flex flex-col gap-1.5 lg:gap-2 py-6 md:pb-8 md:py-0 lg:pb-0 md:pt-0 mb-6 md:mb-0 border-b lg:border-0 border-[#E5E5E5]">
              <span className="text-3xl md:text-4xl font-semibold leading-none text-[#131313]">
                <span className="gsap-counter" data-target="1500" data-decimals="0">
                  1500
                </span>
                <span className="text-[#FD4621]">+</span>
              </span>
              <p className="font-medium text-sm lg:text-base text-[#929090]">Happy Travelers</p>
            </div>
            <div className="gsap-about-stat flex flex-col gap-1.5 lg:gap-2 pb-6 md:pb-8 lg:py-0 mb-6 md:mb-0 border-b lg:border-0 border-[#E5E5E5]">
              <span className="text-3xl md:text-4xl font-semibold leading-none flex items-center gap-2 text-[#131313]">
                <span className="gsap-counter" data-target="4.9" data-decimals="1">
                  4.9
                </span>
                /5
                <span className="text-[#FD4621]">
                  <svg className="size-5 md:size-6 fill-[#FD4621]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd"/>
                  </svg>
                </span>
              </span>
              <p className="font-medium text-sm lg:text-base text-[#929090]">Average Rating</p>
            </div>
            <div className="gsap-about-stat flex flex-col gap-1.5 lg:gap-2 pb-6 md:pb-8 lg:py-0 md:mb-0 border-b lg:border-0 border-[#E5E5E5]">
              <span className="text-3xl md:text-4xl font-semibold leading-none text-[#131313]">
                <span className="gsap-counter" data-target="8" data-decimals="0">
                  8
                </span>{" "}
                Years<span className="text-[#FD4621]">+</span>
              </span>
              <p className="font-medium text-sm lg:text-base text-[#929090]">Experience</p>
            </div>
          </div>
        </div>

        {/* Bottom Row: Images & Text */}
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-10 md:gap-12 lg:gap-5">
          {/* Image 1 */}
          <div className="gsap-about-image-1 order-2 lg:order-1 lg:col-span-2 relative overflow-hidden rounded-xl">
            <div className="gsap-image-reveal-cover"></div>
            <img
              src="assets/home/about/about-1%201.webp"
              alt="Happy tourists posing near Balinese temple gateways"
              loading="lazy"
              className="w-full h-auto object-cover aspect-video md:aspect-[21/9] lg:aspect-square rounded-xl"
            />
          </div>

          <div className="hidden lg:block lg:order-2 lg:col-span-1"></div>

          {/* Main Text */}
          <div className="gsap-about-main-text order-1 lg:order-3 lg:col-span-6">
            <p className="text-2xl md:text-4xl lg:text-[40px] font-medium leading-snug lg:leading-[1.3] mb-8 lg:mb-10 text-[#131313]">
              We help travelers experience the best of Bali through reliable transportation, personalized tour packages, and friendly local service.
            </p>
            <AnimatedButton
              href="/tours"
              onClick={(e) => handleLinkClick(e, "/tours")}
              variant="dark"
            >
              Plan Your Trip
            </AnimatedButton>
          </div>

          <div className="hidden lg:block lg:order-4 lg:col-span-1"></div>

          {/* Image 2 with quote */}
          <div className="order-3 lg:order-5 lg:col-span-2 self-end w-[60%] md:w-[40%] lg:w-full">
            <div className="mb-5 lg:mb-6">
              <svg
                className="mb-2 w-7 lg:w-8 text-[#FD4621]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18ZM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12ZM6.697 7.757a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z" />
              </svg>
              <p className="font-medium text-base text-[#131313]">
                <span className="text-[#929090]">We Create</span> Unforgettable Bali Experiences.
              </p>
            </div>
            <div className="gsap-about-image-2 relative overflow-hidden rounded-xl">
              <div className="gsap-image-reveal-cover"></div>
              <img
                src="assets/home/about/about-2.webp"
                alt="Scenic landscape of Bali countryside with beautiful coconut trees and mountains"
                loading="lazy"
                className="w-full h-auto object-cover aspect-[12/8] lg:aspect-auto rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. OUR TRAVEL SERVICES */}
      <section
        id="service"
        className="2xl:container mx-auto lg:px-5 2xl:px-0 lg:py-15 2xl:py-20"
      >
        <div className="bg-[#131313] px-5 md:px-10 lg:px-15 2xl:px-30 py-12 lg:py-20 lg:rounded-3xl text-white">
          <div className="text-center flex flex-col items-center mb-10 lg:mb-16">
            <div className="gsap-service-badge flex items-center gap-2 w-fit bg-white border border-[#E5E5E5] rounded-full px-2.5 pr-3 py-2 mb-5 lg:mb-6">
              <div className="size-2.5 bg-[#FD4621] rounded-full"></div>
              <strong className="font-medium text-sm md:text-base text-[#131313]">
                Our Travel Services
              </strong>
            </div>
            <h2 className="gsap-service-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-snug lg:leading-[1.3]">
              Travel Services Designed <br className="hidden lg:block" /> for Every Bali Journey
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
            {/* Service 1 */}
            <div className="gsap-service-card bg-white p-6 lg:p-8 rounded-2xl flex flex-col">
              <div className="bg-[#FD4621] mb-6 lg:mb-7 rounded-2xl w-fit p-3 text-white">
                <img
                  src="assets/icons/boxicons_map.svg"
                  alt=""
                  aria-hidden="true"
                  width="40"
                  height="40"
                  className="size-8 lg:size-10"
                />
              </div>
              <div className="text-[#131313] flex flex-col grow">
                <div className="mb-4 lg:mb-5 grow">
                  <h3 className="text-xl lg:text-2xl font-semibold mb-2 text-[#131313]">
                    Bali Tours & Activities
                  </h3>
                  <p className="text-sm lg:text-base leading-relaxed text-[#434343]">
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
            <div className="gsap-service-card bg-white p-6 lg:p-8 rounded-2xl flex flex-col">
              <div className="bg-[#FD4621] mb-6 lg:mb-7 rounded-2xl w-fit p-3 text-white">
                <img
                  src="assets/icons/boxicons_car.svg"
                  alt=""
                  aria-hidden="true"
                  width="40"
                  height="40"
                  className="size-8 lg:size-10"
                />
              </div>
              <div className="text-[#131313] flex flex-col grow">
                <div className="mb-4 lg:mb-5 grow">
                  <h3 className="text-xl lg:text-2xl font-semibold mb-2 text-[#131313]">
                    Private Transport
                  </h3>
                  <p className="text-sm lg:text-base leading-relaxed text-[#434343]">
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
            <div className="gsap-service-card bg-white p-6 lg:p-8 rounded-2xl flex flex-col">
              <div className="bg-[#FD4621] mb-6 lg:mb-7 rounded-2xl w-fit p-3 text-white">
                <img
                  src="assets/icons/mynaui_plane.svg"
                  alt=""
                  aria-hidden="true"
                  width="40"
                  height="40"
                  className="size-8 lg:size-10"
                />
              </div>
              <div className="text-[#131313] flex flex-col grow">
                <div className="mb-4 lg:mb-5 grow">
                  <h3 className="text-xl lg:text-2xl font-semibold mb-2 text-[#131313]">
                    Airport Transfer
                  </h3>
                  <p className="text-sm lg:text-base leading-relaxed text-[#434343]">
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

      {/* 4. POPULAR BALI TOURS PREVIEW */}
      <section
        id="tour-preview"
        className="2xl:container mx-auto px-5 md:px-12 lg:px-20 2xl:px-30 py-15 2xl:py-20"
      >
        <div className="mb-10 md:mb-12 lg:mb-16">
          <div className="gsap-tour-preview-badge mb-4 lg:mb-6 flex items-center gap-2 w-fit bg-white border border-[#E5E5E5] rounded-full px-2.5 pr-3 py-2">
            <div className="size-2.5 bg-[#FD4621] rounded-full"></div>
            <strong className="font-medium text-sm md:text-base text-[#131313]">
              Popular Bali Tours
            </strong>
          </div>
          <div className="flex flex-col lg:flex-row gap-3 lg:items-center justify-between">
            <h2 className="gsap-tour-preview-heading text-3xl md:text-4xl lg:text-5xl font-semibold leading-snug lg:leading-[1.3] lg:max-w-lg text-[#131313]">
              Explore Bali's Most Popular Destinations
            </h2>
            <div className="flex flex-col gap-8 lg:gap-4 items-start lg:items-end text-start lg:text-end lg:max-w-[33%]">
              <p className="gsap-tour-preview-text text-sm md:text-base leading-relaxed w-full text-[#434343]">
                Discover our most-loved Bali tour packages, featuring iconic destinations, authentic local experiences, and flexible itineraries designed to help you explore the best of Bali.
              </p>
              <div className="gsap-tour-preview-button mt-2 lg:mt-0">
                <AnimatedButton
                  href="/tours"
                  onClick={(e) => handleLinkClick(e, "/tours")}
                  variant="dark"
                >
                  View All Tours
                </AnimatedButton>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {featuredTours.map((tour, index) => {
            const isTabletExtra = index === 3;
            return (
              <div
                key={tour.id}
                className={`gsap-tour-card bg-[#F6F6F6] rounded-2xl p-5 flex flex-col justify-between ${
                  isTabletExtra ? "hidden md:flex lg:hidden" : ""
                }`}
              >
                <div className="relative h-64 md:h-72 rounded-xl overflow-hidden mb-4">
                  <img
                    src={tour.coverImage}
                    alt={tour.title}
                    className="w-full h-full object-cover rounded-xl"
                    loading="lazy"
                  />
                  <span className="absolute top-4 left-4 bg-white text-[#131313] text-xs font-semibold px-3 py-1.5 rounded-full shadow-xs">
                    {tour.categoryLabel}
                  </span>
                </div>

                <div className="flex flex-col grow justify-between">
                  <div className="mb-4 grow">
                    <h3 className="text-lg lg:text-xl font-semibold mb-2 line-clamp-1 text-[#131313]">
                      {tour.title}
                    </h3>
                    <p className="text-xs lg:text-sm text-[#434343] line-clamp-2 leading-relaxed">
                      {tour.overview}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-[#E5E5E5]">
                    <div>
                      <span className="text-xs text-[#929090]">From</span>
                      <p className="text-base lg:text-lg font-bold text-[#FD4621]">
                        ${tour.priceFrom} <span className="text-xs font-normal text-[#929090]">/ person</span>
                      </p>
                    </div>

                    <AnimatedButton
                      href={`/tours/${tour.slug}`}
                      onClick={(e) => handleLinkClick(e, `/tours/${tour.slug}`)}
                      variant="white"
                      size="sm"
                    >
                      View Tour
                    </AnimatedButton>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. TRANSPORTATION SECTION */}
      <section
        id="transport"
        className="2xl:container mx-auto px-5 md:px-12 lg:px-20 2xl:px-30 py-15 2xl:py-20"
      >
        <div className="mb-10 md:mb-12 lg:mb-16">
          <div className="gsap-transport-badge mb-4 lg:mb-6 flex items-center gap-2 w-fit bg-white border border-[#E5E5E5] rounded-full px-2.5 pr-3 py-2">
            <div className="size-2.5 bg-[#FD4621] rounded-full"></div>
            <strong className="font-medium text-sm md:text-base text-[#131313]">
              Premium Transport
            </strong>
          </div>
          <div className="flex flex-col lg:flex-row gap-3 lg:items-center justify-between">
            <h2 className="gsap-transport-heading text-3xl md:text-4xl lg:text-5xl font-semibold leading-snug lg:leading-[1.3] lg:max-w-lg text-[#131313]">
              Explore Bali with Professional Local Drivers
            </h2>
            <div className="flex flex-col gap-8 lg:gap-4 items-start lg:items-end text-start lg:text-end lg:max-w-[33%]">
              <p className="gsap-transport-text text-sm md:text-base leading-relaxed w-full text-[#434343]">
                Comfortable, safe, and flexible transportation with experienced local drivers who know Bali's best routes and destinations.
              </p>
              <div className="gsap-transport-button mt-2 lg:mt-0">
                <AnimatedButton
                  href="/transport"
                  onClick={(e) => handleLinkClick(e, "/transport")}
                  variant="dark"
                >
                  View Vehicles
                </AnimatedButton>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-stretch">
          {/* Left features column */}
          <div className="lg:col-span-4 flex flex-col justify-between gap-4">
            <div className="gsap-transport-card bg-[#F6F6F6] p-6 rounded-2xl flex items-start gap-4">
              <div className="bg-[#FD4621] p-3 rounded-xl text-white shrink-0">
                <img
                  src="assets/icons/basil_bag-outline.svg"
                  alt=""
                  aria-hidden="true"
                  className="size-6 text-white"
                />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-[#131313] mb-1">Airport Pickup</h4>
                <p className="text-sm text-[#434343]">
                  Punctual airport pickup and drop-off service across Bali.
                </p>
              </div>
            </div>

            <div className="gsap-transport-card bg-[#F6F6F6] p-6 rounded-2xl flex items-start gap-4">
              <div className="bg-[#FD4621] p-3 rounded-xl text-white shrink-0">
                <img
                  src="assets/icons/ri_sun-line.svg"
                  alt=""
                  aria-hidden="true"
                  className="size-6 text-white"
                />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-[#131313] mb-1">Half / Full Day</h4>
                <p className="text-sm text-[#434343]">
                  Flexible hourly and full-day private car charter with driver.
                </p>
              </div>
            </div>

            <div className="gsap-transport-card bg-[#F6F6F6] p-6 rounded-2xl flex items-start gap-4">
              <div className="bg-[#FD4621] p-3 rounded-xl text-white shrink-0">
                <img
                  src="assets/icons/tdesign_location.svg"
                  alt=""
                  aria-hidden="true"
                  className="size-6 text-white"
                />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-[#131313] mb-1">Point-to-Point Transfer</h4>
                <p className="text-sm text-[#434343]">
                  Direct transfers between hotels, harbors, and attractions.
                </p>
              </div>
            </div>
          </div>

          {/* Center Banner Image */}
          <div className="gsap-transport-image lg:col-span-4 relative rounded-2xl overflow-hidden min-h-[300px] lg:min-h-full">
            <img
              src="assets/home/transport/banner.webp"
              alt="Bali private driver transportation"
              className="absolute inset-0 w-full h-full object-cover rounded-2xl"
              loading="lazy"
            />
          </div>

          {/* Right Fleet Marquee Card */}
          <div className="gsap-transport-marquee-box lg:col-span-4 bg-[#F6F6F6] p-6 rounded-2xl flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-[#131313]">Available Fleet</h3>
              <div className="space-y-3 max-h-[320px] overflow-y-auto pr-1">
                {vehiclesData.map((vehicle) => (
                  <div
                    key={vehicle.id}
                    className="bg-white p-3.5 rounded-xl flex items-center justify-between border border-[#E5E5E5] hover:border-[#FD4621] transition-colors cursor-pointer"
                    onClick={() => onNavigate && onNavigate(`/transport/${vehicle.slug}`)}
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={vehicle.coverImage}
                        alt={vehicle.name}
                        className="w-16 h-12 object-cover rounded-lg"
                        loading="lazy"
                      />
                      <div>
                        <h4 className="text-sm font-semibold text-[#131313]">{vehicle.name}</h4>
                        <p className="text-xs text-[#929090]">
                          {vehicle.passengers} Passengers | {vehicle.luggage} Luggage
                        </p>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-[#FD4621]">${vehicle.pricePerDay}/day</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#E5E5E5] flex flex-col gap-3">
              <p className="text-xs text-[#434343]">
                Choose the perfect vehicle for your trip and travel across Bali in comfort.
              </p>
              <AnimatedButton
                href="/transport"
                onClick={(e) => handleLinkClick(e, "/transport")}
                variant="dark"
              >
                Book Private Driver
              </AnimatedButton>
            </div>
          </div>
        </div>
      </section>

      {/* 6. MOMENTS OF TRAVELERS / GALLERY SECTION */}
      <section
        id="gallery"
        className="2xl:container mx-auto lg:px-5 2xl:px-0 lg:py-15 2xl:py-20"
      >
        <div className="bg-[#131313] px-5 md:px-10 lg:px-15 2xl:px-30 py-12 lg:py-20 lg:rounded-3xl text-white">
          <div className="flex flex-col lg:flex-row gap-6 lg:items-end justify-between mb-10 lg:mb-16">
            <div>
              <div className="gsap-gallery-badge flex items-center gap-2 w-fit bg-white border border-[#E5E5E5] rounded-full px-2.5 pr-3 py-2 mb-5 lg:mb-6">
                <div className="size-2.5 bg-[#FD4621] rounded-full"></div>
                <strong className="font-medium text-sm md:text-base text-[#131313]">
                  Moments Of Travelers
                </strong>
              </div>
              <h2 className="gsap-gallery-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-snug lg:leading-[1.3]">
                A Visual Journey Through <br className="hidden lg:block" /> Bali's Wonders
              </h2>
            </div>
            <div className="gsap-gallery-button">
              <AnimatedButton
                href="/gallery"
                onClick={(e) => handleLinkClick(e, "/gallery")}
                variant="white"
              >
                Explore Our Gallery
              </AnimatedButton>
            </div>
          </div>

          {/* Marquee Gallery Images */}
          <div className="gsap-gallery-marquee grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "assets/galleries/bdk2uvvu6stlowu9fhjc.webp",
              "assets/galleries/dkuokdg5xh0xpytwno7v.webp",
              "assets/galleries/erpcsospbml5v1sl6xzs.webp",
              "assets/galleries/sotlfso1va1cge2szlmn.webp",
              "assets/galleries/tpaoqgzfbkrfpwntmtje.webp",
              "assets/galleries/ttoubtl9ndmw21ny1c3q.webp",
              "assets/galleries/uwvcv1a5gxmyr9fiphlm.webp",
              "assets/galleries/xkcqpgpatfpmvfixwgl9.webp"
            ].map((imgSrc, idx) => (
              <div
                key={idx}
                className="relative overflow-hidden rounded-2xl aspect-[4/3] group cursor-pointer"
                onClick={() => onNavigate && onNavigate("/gallery")}
              >
                <img
                  src={imgSrc}
                  alt={`Bali Bagus Journey Traveler Moment ${idx + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. WHY CHOOSE BALI BAGUS JOURNEY */}
      <section
        id="why"
        className="2xl:container mx-auto px-5 md:px-12 lg:px-20 2xl:px-30 py-15 2xl:py-20"
      >
        <div className="mb-10 md:mb-12 lg:mb-16">
          <div className="gsap-why-badge mb-4 lg:mb-6 flex items-center gap-2 w-fit bg-white border border-[#E5E5E5] rounded-full px-2.5 pr-3 py-2">
            <div className="size-2.5 bg-[#FD4621] rounded-full"></div>
            <strong className="font-medium text-sm md:text-base text-[#131313]">
              Why Choose Bali Bagus Journey
            </strong>
          </div>
          <div className="flex flex-col lg:flex-row gap-3 lg:items-center justify-between">
            <h2 className="gsap-why-heading text-3xl md:text-4xl lg:text-5xl font-semibold leading-snug lg:leading-[1.3] lg:max-w-lg text-[#131313]">
              Travel Made Simple
            </h2>
            <div className="flex flex-col gap-8 lg:gap-4 items-start lg:items-end text-start lg:text-end lg:max-w-[33%]">
              <p className="gsap-why-text text-sm md:text-base leading-relaxed w-full text-[#434343]">
                Discover why travelers choose us for reliable transportation, personalized tours, and a seamless travel experience across Bali.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6">
          {/* Left 4 cards grid */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5">
            <div className="gsap-why-feature bg-[#F6F6F6] p-6 lg:p-7 rounded-2xl flex flex-col justify-between">
              <div className="bg-[#FD4621] p-3 rounded-xl text-white w-fit mb-4">
                <img
                  src="assets/icons/lucide_compass.svg"
                  alt=""
                  aria-hidden="true"
                  className="size-6 text-white"
                />
              </div>
              <div>
                <h3 className="text-lg lg:text-xl font-semibold mb-2 text-[#131313]">
                  Local Travel Experts
                </h3>
                <p className="text-xs lg:text-sm text-[#434343] leading-relaxed">
                  Our team consists of experienced local drivers and guides who know Bali's hidden gems, culture, and best travel routes.
                </p>
              </div>
            </div>

            <div className="gsap-why-feature bg-[#F6F6F6] p-6 lg:p-7 rounded-2xl flex flex-col justify-between">
              <div className="bg-[#FD4621] p-3 rounded-xl text-white w-fit mb-4">
                <img
                  src="assets/icons/solar_dollar-linear.svg"
                  alt=""
                  aria-hidden="true"
                  className="size-6 text-white"
                />
              </div>
              <div>
                <h3 className="text-lg lg:text-xl font-semibold mb-2 text-[#131313]">
                  Transparent Pricing
                </h3>
                <p className="text-xs lg:text-sm text-[#434343] leading-relaxed">
                  Clear, upfront pricing with zero hidden fees. What you see is exactly what you pay for your Bali journey.
                </p>
              </div>
            </div>

            <div className="gsap-why-feature bg-[#F6F6F6] p-6 lg:p-7 rounded-2xl flex flex-col justify-between">
              <div className="bg-[#FD4621] p-3 rounded-xl text-white w-fit mb-4">
                <img
                  src="assets/icons/lucide_users-round.svg"
                  alt=""
                  aria-hidden="true"
                  className="size-6 text-white"
                />
              </div>
              <div>
                <h3 className="text-lg lg:text-xl font-semibold mb-2 text-[#131313]">
                  Perfect for Any Group
                </h3>
                <p className="text-xs lg:text-sm text-[#434343] leading-relaxed">
                  Whether traveling solo, as a couple, with family, or in a large group, our fleet accommodates every party size comfortably.
                </p>
              </div>
            </div>

            <div className="gsap-why-feature bg-[#F6F6F6] p-6 lg:p-7 rounded-2xl flex flex-col justify-between">
              <div className="bg-[#FD4621] p-3 rounded-xl text-white w-fit mb-4">
                <img
                  src="assets/icons/solar_route-linear.svg"
                  alt=""
                  aria-hidden="true"
                  className="size-6 text-white"
                />
              </div>
              <div>
                <h3 className="text-lg lg:text-xl font-semibold mb-2 text-[#131313]">
                  Optimized Travel Routes
                </h3>
                <p className="text-xs lg:text-sm text-[#434343] leading-relaxed">
                  We sequence destinations intelligently to avoid Bali's infamous traffic and maximize your sightseeing time.
                </p>
              </div>
            </div>
          </div>

          {/* Right Image with Quote */}
          <div className="gsap-why-image lg:col-span-5 relative rounded-2xl overflow-hidden min-h-[350px] lg:min-h-full">
            <img
              src="assets/home/why/k3foglqhf8mbbq0ckdf5.webp"
              alt="Bali Bagus Journey scenic view"
              className="gsap-why-inner-image absolute inset-0 w-full h-full object-cover rounded-2xl"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end p-6 lg:p-8 rounded-2xl">
              <p className="gsap-why-inner-text text-white text-base lg:text-lg font-medium leading-relaxed">
                "From your first booking to your final destination, we're committed to making every Bali journey comfortable, reliable, and unforgettable."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. TESTIMONIALS SECTION */}
      <section
        id="testimonial"
        className="2xl:container mx-auto px-5 md:px-12 lg:px-20 2xl:px-30 py-15 2xl:py-20"
      >
        <div className="mb-10 md:mb-12 lg:mb-16">
          <div className="gsap-testimonial-badge mb-4 lg:mb-6 flex items-center gap-2 w-fit bg-white border border-[#E5E5E5] rounded-full px-2.5 pr-3 py-2">
            <div className="size-2.5 bg-[#FD4621] rounded-full"></div>
            <strong className="font-medium text-sm md:text-base text-[#131313]">
              Customer Reviews
            </strong>
          </div>
          <div className="flex flex-col lg:flex-row gap-3 lg:items-center justify-between">
            <h2 className="gsap-testimonial-heading text-3xl md:text-4xl lg:text-5xl font-semibold leading-snug lg:leading-[1.3] lg:max-w-lg text-[#131313]">
              Loved by Travelers from Around the World
            </h2>
            <div className="flex flex-col gap-8 lg:gap-4 items-start lg:items-end text-start lg:text-end lg:max-w-[33%]">
              <p className="gsap-testimonial-text text-sm md:text-base leading-relaxed w-full text-[#434343]">
                See why travelers choose our Bali tours, private drivers, and airport transfer services for a comfortable and memorable journey.
              </p>
              <div className="gsap-testimonial-button mt-2 lg:mt-0">
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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6">
          {/* Left Rating Summary Card */}
          <div className="gsap-testimonial-card lg:col-span-4 bg-[#F6F6F6] p-6 lg:p-8 rounded-2xl flex flex-col justify-between">
            <div>
              <span className="text-5xl lg:text-6xl font-bold text-[#131313]">4.9/5</span>
              <div className="flex items-center gap-1 my-3">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="size-6 fill-[#FD4621] text-[#FD4621]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                      clipRule="evenodd"
                    />
                  </svg>
                ))}
              </div>
              <p className="text-sm text-[#434343] leading-relaxed mb-6">
                Discover why travelers trust Bali Bagus Journey for authentic, private, and smooth explorations across the Island of the Gods.
              </p>
            </div>

            <div className="flex items-center gap-4 pt-4 border-t border-[#E5E5E5]">
              <img
                src="assets/home/testimonial/Frame%208.png"
                alt="Happy customer avatars"
                className="h-10 w-auto"
              />
              <span className="text-xs font-semibold text-[#131313]">
                Trusted by global travelers
              </span>
            </div>
          </div>

          {/* Right Testimonials List */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-5">
            {testimonials.map((testi) => (
              <div
                key={testi.id}
                className="gsap-testimonial-card bg-[#F6F6F6] p-6 lg:p-7 rounded-2xl flex flex-col justify-between gap-6"
              >
                <div>
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testi.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="size-5 fill-[#FD4621] text-[#FD4621]"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ))}
                  </div>
                  <p className="text-sm lg:text-base leading-relaxed text-[#131313] font-medium">
                    "{testi.comment}"
                  </p>
                </div>

                <div>
                  <h4 className="text-base lg:text-lg font-semibold text-[#131313]">{testi.name}</h4>
                  <p className="text-xs lg:text-sm text-[#929090] font-medium">{testi.country}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. BLOGS & ARTICLES SECTION */}
      <section
        id="blog"
        className="2xl:container mx-auto px-5 md:px-12 lg:px-20 2xl:px-30 py-15 2xl:py-20"
      >
        <div className="mb-10 md:mb-12 lg:mb-16">
          <div className="gsap-blog-badge mb-4 lg:mb-6 flex items-center gap-2 w-fit bg-white border border-[#E5E5E5] rounded-full px-2.5 pr-3 py-2">
            <div className="size-2.5 bg-[#FD4621] rounded-full"></div>
            <strong className="font-medium text-sm md:text-base text-[#131313]">
              Blogs & Articles
            </strong>
          </div>
          <div className="flex flex-col lg:flex-row gap-3 lg:items-center justify-between">
            <h2 className="gsap-blog-heading text-3xl md:text-4xl lg:text-5xl font-semibold leading-snug lg:leading-[1.3] lg:max-w-lg text-[#131313]">
              Bali Travel Tips & Destination Guides
            </h2>
            <div className="flex flex-col gap-8 lg:gap-4 items-start lg:items-end text-start lg:text-end lg:max-w-[33%]">
              <p className="gsap-blog-text text-sm md:text-base leading-relaxed w-full text-[#434343]">
                Find helpful articles about Bali's top attractions, transportation, travel itineraries, and local experiences to make your journey easier and more enjoyable.
              </p>
              <div className="gsap-blog-button mt-2 lg:mt-0">
                <AnimatedButton
                  href="/blogs"
                  onClick={(e) => handleLinkClick(e, "/blogs")}
                  variant="dark"
                >
                  Read All Guides
                </AnimatedButton>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6">
          {/* Main Featured Blog (Left) */}
          {featuredBlog && (
            <div className="gsap-blog-main lg:col-span-6 p-5 md:p-6 lg:p-7 bg-[#F6F6F6] rounded-2xl flex flex-col">
              <div className="relative h-64 md:h-80 lg:h-[26rem] rounded-2xl overflow-hidden mb-4 md:mb-5 lg:mb-6">
                <img
                  src={featuredBlog.coverImage}
                  alt={featuredBlog.title}
                  className="absolute inset-0 object-cover rounded-2xl h-full w-full"
                  loading="lazy"
                />
                <span className="absolute top-4 left-4 lg:top-5 lg:left-5 bg-white text-[#131313] text-xs lg:text-sm px-3 py-1.5 lg:px-4 lg:py-2 rounded-full font-semibold shadow-xs">
                  Recently Article
                </span>
              </div>
              <div className="flex flex-col grow">
                <div className="mb-4 lg:mb-5 grow">
                  <h3 className="text-lg lg:text-2xl font-semibold mb-2 line-clamp-2 text-[#131313]">
                    {featuredBlog.title}
                  </h3>
                  <p className="text-sm lg:text-base line-clamp-2 text-[#434343] leading-relaxed">
                    {featuredBlog.excerpt}
                  </p>
                </div>
                <AnimatedButton
                  href={`/blogs/${featuredBlog.slug}`}
                  onClick={(e) => handleLinkClick(e, `/blogs/${featuredBlog.slug}`)}
                  variant="white"
                >
                  Read Article
                </AnimatedButton>
              </div>
            </div>
          )}

          {/* 3 Secondary Blogs (Right) */}
          <div className="lg:col-span-6 flex flex-col gap-4 lg:gap-4.5">
            {sideBlogs.map((blog) => (
              <div
                key={blog.id}
                className="gsap-blog-card flex gap-4 md:gap-5 lg:gap-6 items-center bg-[#F6F6F6] p-4 md:p-5 lg:p-6 rounded-2xl"
              >
                <img
                  src={blog.coverImage}
                  alt={blog.title}
                  className="rounded-xl lg:rounded-2xl hidden md:block md:size-32 lg:size-40 lg:h-40 object-cover shrink-0"
                  loading="lazy"
                />
                <div className="flex flex-col h-full justify-between grow">
                  <div className="mb-3 lg:mb-4 grow">
                    <h3 className="text-base lg:text-lg font-semibold mb-1.5 lg:mb-2 line-clamp-2 text-[#131313]">
                      {blog.title}
                    </h3>
                    <p className="text-xs lg:text-sm line-clamp-2 text-[#434343]">
                      {blog.excerpt}
                    </p>
                  </div>
                  <div className="flex flex-col-reverse md:flex-row gap-3 md:gap-0 justify-between md:items-center mt-auto">
                    <AnimatedButton
                      href={`/blogs/${blog.slug}`}
                      onClick={(e) => handleLinkClick(e, `/blogs/${blog.slug}`)}
                      variant="white"
                      size="sm"
                    >
                      Read Article
                    </AnimatedButton>
                    <div className="flex items-center gap-2 text-[#929090] text-xs md:text-sm font-medium">
                      <svg
                        className="size-4"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                        <line x1="16" y1="2" x2="16" y2="6"></line>
                        <line x1="8" y1="2" x2="8" y2="6"></line>
                        <line x1="3" y1="10" x2="21" y2="10"></line>
                      </svg>
                      {blog.publishedDate}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. FREQUENTLY ASKED QUESTIONS SECTION */}
      <section
        id="faq"
        className="2xl:container mx-auto px-5 md:px-12 lg:px-20 2xl:px-30 py-15 2xl:py-20"
      >
        <div className="mb-10 md:mb-12 lg:mb-16">
          <div className="gsap-faq-badge mb-4 lg:mb-6 flex items-center gap-2 w-fit bg-white border border-[#E5E5E5] rounded-full px-2.5 pr-3 py-2">
            <div className="size-2.5 bg-[#FD4621] rounded-full"></div>
            <strong className="font-medium text-sm md:text-base text-[#131313]">
              Frequently Asked Questions
            </strong>
          </div>
          <div className="flex flex-col lg:flex-row gap-3 lg:items-center justify-between">
            <h2 className="gsap-faq-heading text-3xl md:text-4xl lg:text-5xl font-semibold leading-snug lg:leading-[1.3] lg:max-w-lg text-[#131313]">
              Frequently Asked Questions
            </h2>
            <div className="flex flex-col gap-8 lg:gap-4 items-start lg:items-end text-start lg:text-end lg:max-w-[33%]">
              <p className="text-sm md:text-base leading-relaxed w-full text-[#434343]">
                Find clear answers to common questions about booking Bali tours, hiring private drivers, and airport transfer services.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {homeFAQs.map((faq, index) => {
            const isOpen = openFaqIndex === index;
            return (
              <div
                key={index}
                className="gsap-faq-item bg-[#F6F6F6] rounded-2xl overflow-hidden border border-transparent transition-colors"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-semibold text-base lg:text-lg text-[#131313]"
                >
                  <span>{faq.question}</span>
                  <span
                    className={`size-8 rounded-full border border-[#E5E5E5] flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-[#131313] text-white border-[#131313]" : "bg-white text-[#131313]"
                    }`}
                  >
                    <svg
                      className="size-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </span>
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 text-sm lg:text-base text-[#434343] leading-relaxed border-t border-[#E5E5E5]/50 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 11. CTA BANNER SECTION */}
      <section
        id="cta"
        className="2xl:container mx-auto lg:px-5 2xl:px-0 py-15 2xl:py-20"
      >
        <div className="relative rounded-3xl overflow-hidden px-6 py-16 md:px-12 md:py-24 lg:p-20 text-center text-white">
          <img
            src="assets/home/cta-banner.webp"
            alt="Start Planning Your Bali Trip"
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/60 backdrop-blur-xs"></div>

          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white leading-tight">
              Start Planning Your Bali Trip Today
            </h2>
            <p className="text-base md:text-lg text-white/90 leading-relaxed max-w-2xl mx-auto">
              Whether you need a private driver for a day or a fully customized tour package, we're here to help you experience the best of Bali.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <AnimatedButton
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                size="lg"
              >
                Chat on WhatsApp
              </AnimatedButton>
              <AnimatedButton
                href="/contact"
                onClick={(e) => handleLinkClick(e, "/contact")}
                variant="white"
                size="lg"
              >
                Contact Us
              </AnimatedButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
