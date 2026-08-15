import React, { useState, useMemo, useEffect } from "react";
import { toursData } from "../data/tours";
import { AnimatedButton } from "../components/UI/AnimatedButton";
import { initSubpageAnimations, animateCategoryTransition } from "../utils/animations";

interface ToursPageProps {
  onNavigate?: (path: string) => void;
}

export const ToursPage: React.FC<ToursPageProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const cleanup = initSubpageAnimations();
    return () => {
      if (cleanup) cleanup();
    };
  }, []);

  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat);
    animateCategoryTransition("#tours-grid");
  };

  const filteredTours = useMemo(() => {
    return toursData.filter((tour) => {
      const matchesCategory =
        selectedCategory === "all" ||
        tour.category === selectedCategory ||
        tour.category.toLowerCase().replace(/\s+/g, "-").replace(/&/g, "").replace(/--+/g, "-") ===
          selectedCategory.toLowerCase().replace(/\s+/g, "-").replace(/&/g, "").replace(/--+/g, "-");

      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        tour.title.toLowerCase().includes(query) ||
        tour.overview.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleLinkClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(href);
    } else {
      window.history.pushState({}, "", href);
      window.dispatchEvent(new PopStateEvent("popstate"));
    }
  };

  return (
    <div id="tours-page" className="w-full">
      {/* 1. HEADLINE HERO SECTION */}
      <section
        id="headline"
        className="relative min-h-[60dvh] md:min-h-[45dvh] lg:min-h-[68dvh] 2xl:min-h-[52dvh] 2xl:max-h-[52dvh] flex items-end 2xl:container mx-auto"
      >
        <div className="absolute overflow-hidden inset-0 lg:inset-5 lg:top-4 lg:rounded-3xl 2xl:inset-x-0 lg:bottom-auto lg:h-[68dvh] 2xl:max-h-[50dvh]">
          <div className="gsap-headline-overlay absolute z-10 h-full w-full lg:rounded-3xl bg-[#131313]/50 lg:bg-transparent lg:bg-gradient-to-b from-0% from-[#131313]/40 via-40% via-[#131313]/0 to-80% to-[#131313]/80 lg:to-[#131313]/70"></div>
          <img
            src="assets/tours/headline.webp"
            alt="Scenic view of Bali mountains and valleys, representing diverse Bali tour packages"
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
                Tours & Activities
              </strong>
            </div>
            <h1 className="gsap-headline-title text-3xl md:text-5xl lg:text-[52px] w-full mb-4 font-semibold text-white leading-snug lg:leading-[1.2]">
              Bali Tour Packages <br /> for Every Traveler
            </h1>
            <p className="gsap-headline-text text-sm text-white w-full md:w-[72%] lg:w-[39%] leading-relaxed">
              Discover private tours, family-friendly adventures, cultural experiences, and day trips across Bali with flexible itineraries and trusted local guides.
            </p>
          </div>
        </div>
      </section>

      {/* 2. TOURS FILTER & GRID SECTION */}
      <section
        id="tour"
        className="2xl:container mx-auto px-5 md:px-12 lg:px-20 2xl:px-30 py-15 2xl:py-20"
      >
        <div className="flex flex-col items-center w-full mb-10">
          <h3 className="gsap-tours-filter-heading text-lg md:text-xl font-semibold text-[#131313] mb-6">
            Filter Tours by:
          </h3>

          <div className="relative w-full max-w-full">
            <div className="filter-tabs w-full flex flex-nowrap md:flex-wrap items-center justify-start md:justify-center gap-2.5 md:gap-4 overflow-x-auto md:overflow-visible pb-2 md:pb-0 scrollbar-none">
              {/* All Tours */}
              <button
                type="button"
                onClick={() => handleCategoryChange("all")}
                className={`gsap-tours-filter-tab shrink-0 flex items-center gap-2 md:gap-3 border px-1.5 md:px-2 pr-4 md:pr-5 py-1.5 md:py-2 rounded-full transition-all duration-300 cursor-pointer ${
                  selectedCategory === "all"
                    ? "bg-[#131313] border-[#131313] text-white"
                    : "bg-white border-[#E5E5E5] text-[#131313] hover:border-[#FD4621]"
                }`}
              >
                <div className="bg-[#FD4621] size-7 md:size-8 rounded-full flex items-center justify-center text-white shrink-0">
                  <svg
                    className="size-3.5 md:size-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="8" y1="6" x2="21" y2="6"></line>
                    <line x1="8" y1="12" x2="21" y2="12"></line>
                    <line x1="8" y1="18" x2="21" y2="18"></line>
                    <line x1="3" y1="6" x2="3.01" y2="6"></line>
                    <line x1="3" y1="12" x2="3.01" y2="12"></line>
                    <line x1="3" y1="18" x2="3.01" y2="18"></line>
                  </svg>
                </div>
                <span className="text-xs md:text-sm font-semibold">All Tours</span>
              </button>

              {/* Island Hopping */}
              <button
                type="button"
                onClick={() => handleCategoryChange("island-hopping")}
                className={`gsap-tours-filter-tab shrink-0 flex items-center gap-2 md:gap-3 border px-1.5 md:px-2 pr-4 md:pr-5 py-1.5 md:py-2 rounded-full transition-all duration-300 cursor-pointer ${
                  selectedCategory === "island-hopping"
                    ? "bg-[#131313] border-[#131313] text-white"
                    : "bg-white border-[#E5E5E5] text-[#131313] hover:border-[#FD4621]"
                }`}
              >
                <div className="bg-[#FD4621] p-1.5 rounded-full flex items-center justify-center text-white shrink-0 overflow-hidden size-7 md:size-8">
                  <img
                    src="storage/category-icons/01KZSPYTDD4BZ67D50ZR6KWBWT.svg"
                    className="size-4 md:size-5 object-cover"
                    alt="Island Hopping Icon"
                  />
                </div>
                <span className="text-xs md:text-sm font-semibold">Island Hopping</span>
              </button>

              {/* Temple & Culture */}
              <button
                type="button"
                onClick={() => handleCategoryChange("temple-culture")}
                className={`gsap-tours-filter-tab shrink-0 flex items-center gap-2 md:gap-3 border px-1.5 md:px-2 pr-4 md:pr-5 py-1.5 md:py-2 rounded-full transition-all duration-300 cursor-pointer ${
                  selectedCategory === "temple-culture"
                    ? "bg-[#131313] border-[#131313] text-white"
                    : "bg-white border-[#E5E5E5] text-[#131313] hover:border-[#FD4621]"
                }`}
              >
                <div className="bg-[#FD4621] p-1.5 rounded-full flex items-center justify-center text-white shrink-0 overflow-hidden size-7 md:size-8">
                  <img
                    src="storage/category-icons/01KZSQD14Z309600WP3AVAXX4J.svg"
                    className="size-4 md:size-5 object-cover"
                    alt="Temple & Culture Icon"
                  />
                </div>
                <span className="text-xs md:text-sm font-semibold">Temple & Culture</span>
              </button>

              {/* Adventure */}
              <button
                type="button"
                onClick={() => handleCategoryChange("adventure")}
                className={`gsap-tours-filter-tab shrink-0 flex items-center gap-2 md:gap-3 border px-1.5 md:px-2 pr-4 md:pr-5 py-1.5 md:py-2 rounded-full transition-all duration-300 cursor-pointer ${
                  selectedCategory === "adventure"
                    ? "bg-[#131313] border-[#131313] text-white"
                    : "bg-white border-[#E5E5E5] text-[#131313] hover:border-[#FD4621]"
                }`}
              >
                <div className="bg-[#FD4621] p-1.5 rounded-full flex items-center justify-center text-white shrink-0 overflow-hidden size-7 md:size-8">
                  <svg className="size-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
                  </svg>
                </div>
                <span className="text-xs md:text-sm font-semibold">Adventure</span>
              </button>

              {/* Nature & Scenery */}
              <button
                type="button"
                onClick={() => handleCategoryChange("nature-scenery")}
                className={`gsap-tours-filter-tab shrink-0 flex items-center gap-2 md:gap-3 border px-1.5 md:px-2 pr-4 md:pr-5 py-1.5 md:py-2 rounded-full transition-all duration-300 cursor-pointer ${
                  selectedCategory === "nature-scenery"
                    ? "bg-[#131313] border-[#131313] text-white"
                    : "bg-white border-[#E5E5E5] text-[#131313] hover:border-[#FD4621]"
                }`}
              >
                <div className="bg-[#FD4621] p-1.5 rounded-full flex items-center justify-center text-white shrink-0 overflow-hidden size-7 md:size-8">
                  <svg className="size-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path>
                    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path>
                  </svg>
                </div>
                <span className="text-xs md:text-sm font-semibold">Nature & Scenery</span>
              </button>
            </div>
          </div>
        </div>

        {/* Tours Grid */}
        <div id="tours-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-5">
          {filteredTours.map((tour) => (
            <div
              key={tour.id}
              className="gsap-tour-card bg-[#F6F6F6] rounded-2xl overflow-hidden flex flex-col h-full"
            >
              <div className="h-60 lg:h-70 relative rounded-2xl overflow-hidden">
                <img
                  src={tour.image}
                  alt={`${tour.title} - Popular tour package by Bali Bagus Journey`}
                  className="h-full w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <span className="absolute bottom-4 left-4 lg:bottom-5 lg:left-5 bg-white text-[#131313] text-xs lg:text-sm px-3 py-1.5 lg:px-4 lg:py-2 rounded-full font-semibold shadow-xs">
                  {tour.category}
                </span>
              </div>

              <div className="p-4 lg:p-5 flex flex-col grow">
                <div className="mb-4 pb-4 border-b border-[#E5E5E5] grow">
                  <h3 className="text-lg lg:text-xl font-semibold mb-2 line-clamp-2 text-[#131313]">
                    {tour.title}
                  </h3>
                  <p className="text-sm line-clamp-2 text-[#434343] leading-relaxed">
                    {tour.overview}
                  </p>
                </div>

                <div className="flex justify-between items-center mt-auto">
                  <p className="text-xl lg:text-2xl font-semibold text-[#131313]">
                    ${tour.priceFrom}{" "}
                    <span className="font-medium text-sm lg:text-base text-[#929090]">
                      / person
                    </span>
                  </p>

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
          ))}
        </div>
      </section>
    </div>
  );
};
