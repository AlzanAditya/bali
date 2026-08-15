import React, { useState, useMemo, useEffect } from "react";
import { vehiclesData } from "../data/transport";
import { AnimatedButton } from "../components/UI/AnimatedButton";
import { initSubpageAnimations, animateCategoryTransition } from "../utils/animations";

interface TransportPageProps {
  onNavigate?: (path: string) => void;
}

export const TransportPage: React.FC<TransportPageProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    const cleanup = initSubpageAnimations();
    return () => {
      if (cleanup) cleanup();
    };
  }, []);

  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat);
    animateCategoryTransition("#transport-grid");
  };

  const filteredVehicles = useMemo(() => {
    return vehiclesData.filter((v) => {
      if (selectedCategory === "all") return true;
      if (selectedCategory === "standard") return v.category.toLowerCase().includes("standard");
      if (selectedCategory === "mvp-van") return v.category.toLowerCase().includes("mpv") || v.category.toLowerCase().includes("mvp") || v.category.toLowerCase().includes("van");
      if (selectedCategory === "minibus") return v.category.toLowerCase().includes("minibus");
      if (selectedCategory === "luxury") return v.category.toLowerCase().includes("luxury");
      return true;
    });
  }, [selectedCategory]);

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
    <div id="transport-page" className="w-full">
      {/* 1. HEADLINE HERO */}
      <section
        id="headline"
        className="relative min-h-[60dvh] md:min-h-[45dvh] lg:min-h-[68dvh] 2xl:min-h-[52dvh] 2xl:max-h-[52dvh] flex items-end 2xl:container mx-auto"
      >
        <div className="absolute overflow-hidden inset-0 lg:inset-5 lg:top-4 lg:rounded-3xl 2xl:inset-x-0 lg:bottom-auto lg:h-[68dvh] 2xl:max-h-[50dvh]">
          <div className="gsap-headline-overlay absolute z-10 h-full w-full lg:rounded-3xl bg-[#131313]/50 lg:bg-transparent lg:bg-gradient-to-b from-0% from-[#131313]/40 via-40% via-[#131313]/0 to-80% to-[#131313]/80 lg:to-[#131313]/70"></div>
          <img
            src="assets/home/transport/banner.webp"
            alt="Bali Bagus Journey fleet of comfortable vehicles for private driver service"
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
                Transportation Service
              </strong>
            </div>
            <h1 className="gsap-headline-title text-3xl md:text-5xl lg:text-[52px] w-full mb-4 font-semibold text-white leading-snug lg:leading-[1.2]">
              Private Driver Service <br /> for Every Bali Trip
            </h1>
            <p className="gsap-headline-text text-sm text-white w-full md:w-[72%] lg:w-[34%] leading-relaxed">
              Choose from our fleet of comfortable vehicles, perfect for private tours, airport transfers, and transportation across Bali.
            </p>
          </div>
        </div>
      </section>

      {/* 2. TRANSPORT VEHICLES & FILTER SECTION */}
      <section
        id="transport-vehicle"
        className="2xl:container mx-auto px-5 md:px-12 lg:px-20 2xl:px-30 py-15 2xl:py-20"
      >
        <div className="flex flex-col items-center w-full mb-10">
          <h3 className="gsap-transport-filter-heading text-lg md:text-xl font-semibold text-[#131313] mb-6">
            Filter Transports by:
          </h3>

          <div className="relative w-full max-w-full">
            <div className="filter-tabs w-full flex flex-nowrap md:flex-wrap items-center justify-start md:justify-center gap-2.5 md:gap-4 overflow-x-auto md:overflow-visible pb-2 md:pb-0 scrollbar-none">
              {/* All Transports */}
              <button
                type="button"
                onClick={() => handleCategoryChange("all")}
                className={`gsap-transport-filter-tab shrink-0 flex items-center gap-2 md:gap-3 border px-1.5 md:px-2 pr-4 md:pr-5 py-1.5 md:py-2 rounded-full transition-all duration-300 cursor-pointer ${
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
                <span className="text-xs md:text-sm font-semibold">All Transports</span>
              </button>

              {/* Standard */}
              <button
                type="button"
                onClick={() => handleCategoryChange("standard")}
                className={`gsap-transport-filter-tab shrink-0 flex items-center gap-2 md:gap-3 border px-1.5 md:px-2 pr-4 md:pr-5 py-1.5 md:py-2 rounded-full transition-all duration-300 cursor-pointer ${
                  selectedCategory === "standard"
                    ? "bg-[#131313] border-[#131313] text-white"
                    : "bg-white border-[#E5E5E5] text-[#131313] hover:border-[#FD4621]"
                }`}
              >
                <div className="bg-[#FD4621] p-1.5 rounded-full flex items-center justify-center text-white shrink-0 overflow-hidden size-7 md:size-8">
                  <img
                    src="storage/category-icons/01KZSVDZ769P0179E4887GYY7J.svg"
                    className="size-4 md:size-5 object-cover"
                    alt="Standard Icon"
                  />
                </div>
                <span className="text-xs md:text-sm font-semibold">Standard</span>
              </button>

              {/* MVP & Van */}
              <button
                type="button"
                onClick={() => handleCategoryChange("mvp-van")}
                className={`gsap-transport-filter-tab shrink-0 flex items-center gap-2 md:gap-3 border px-1.5 md:px-2 pr-4 md:pr-5 py-1.5 md:py-2 rounded-full transition-all duration-300 cursor-pointer ${
                  selectedCategory === "mvp-van"
                    ? "bg-[#131313] border-[#131313] text-white"
                    : "bg-white border-[#E5E5E5] text-[#131313] hover:border-[#FD4621]"
                }`}
              >
                <div className="bg-[#FD4621] p-1.5 rounded-full flex items-center justify-center text-white shrink-0 overflow-hidden size-7 md:size-8">
                  <img
                    src="storage/category-icons/01KZSVGR544P9G6N57C12RMY6F.svg"
                    className="size-4 md:size-5 object-cover"
                    alt="MVP & Van Icon"
                  />
                </div>
                <span className="text-xs md:text-sm font-semibold">MPV & Van</span>
              </button>

              {/* Minibus */}
              <button
                type="button"
                onClick={() => handleCategoryChange("minibus")}
                className={`gsap-transport-filter-tab shrink-0 flex items-center gap-2 md:gap-3 border px-1.5 md:px-2 pr-4 md:pr-5 py-1.5 md:py-2 rounded-full transition-all duration-300 cursor-pointer ${
                  selectedCategory === "minibus"
                    ? "bg-[#131313] border-[#131313] text-white"
                    : "bg-white border-[#E5E5E5] text-[#131313] hover:border-[#FD4621]"
                }`}
              >
                <div className="bg-[#FD4621] p-1.5 rounded-full flex items-center justify-center text-white shrink-0 overflow-hidden size-7 md:size-8">
                  <img
                    src="storage/category-icons/01KZSVHVMN3MZEG6E3B97P2W3B.svg"
                    className="size-4 md:size-5 object-cover"
                    alt="Minibus Icon"
                  />
                </div>
                <span className="text-xs md:text-sm font-semibold">Minibus</span>
              </button>

              {/* Luxury */}
              <button
                type="button"
                onClick={() => handleCategoryChange("luxury")}
                className={`gsap-transport-filter-tab shrink-0 flex items-center gap-2 md:gap-3 border px-1.5 md:px-2 pr-4 md:pr-5 py-1.5 md:py-2 rounded-full transition-all duration-300 cursor-pointer ${
                  selectedCategory === "luxury"
                    ? "bg-[#131313] border-[#131313] text-white"
                    : "bg-white border-[#E5E5E5] text-[#131313] hover:border-[#FD4621]"
                }`}
              >
                <div className="bg-[#FD4621] p-1.5 rounded-full flex items-center justify-center text-white shrink-0 overflow-hidden size-7 md:size-8">
                  <img
                    src="storage/category-icons/01KZSVJC1YQY8J34F5T3A8R917.svg"
                    className="size-4 md:size-5 object-cover"
                    alt="Luxury Icon"
                  />
                </div>
                <span className="text-xs md:text-sm font-semibold">Luxury</span>
              </button>
            </div>
          </div>
        </div>

        {/* Vehicles Grid */}
        <div id="transport-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-5">
          {filteredVehicles.map((vehicle) => (
            <div
              key={vehicle.id}
              className="gsap-transport-card bg-[#F6F6F6] rounded-2xl overflow-hidden flex flex-col h-full"
            >
              <div className="h-60 lg:h-70 relative rounded-2xl overflow-hidden">
                <img
                  src={vehicle.coverImage}
                  alt={`${vehicle.name} - Bali Private Driver Vehicle`}
                  className="h-full w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <span className="absolute bottom-4 left-4 lg:bottom-5 lg:left-5 bg-white text-[#131313] text-xs lg:text-sm px-3 py-1.5 lg:px-4 lg:py-2 rounded-full font-semibold shadow-xs">
                  {vehicle.category}
                </span>
              </div>

              <div className="p-4 lg:p-5 flex flex-col grow">
                <div className="mb-4 pb-4 border-b border-[#E5E5E5] grow">
                  <h3 className="text-lg lg:text-xl font-semibold mb-2 line-clamp-2 text-[#131313]">
                    {vehicle.name}
                  </h3>
                  <p className="text-sm line-clamp-2 text-[#434343] leading-relaxed">
                    {vehicle.shortDescription || vehicle.overview}
                  </p>
                </div>

                <div className="flex justify-between items-center mt-auto">
                  <p className="text-xl lg:text-2xl font-semibold text-[#131313]">
                    ${vehicle.pricePerDay}{" "}
                    <span className="font-medium text-sm lg:text-base text-[#929090]">
                      / day
                    </span>
                  </p>

                  <AnimatedButton
                    href={`/transport/${vehicle.slug}`}
                    onClick={(e) => handleLinkClick(e, `/transport/${vehicle.slug}`)}
                    variant="white"
                    size="sm"
                  >
                    View Details
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
