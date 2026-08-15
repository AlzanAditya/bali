import React, { useState, useEffect } from "react";
import {
  Clock,
  Users,
  Globe2,
  ShieldCheck,
  Star,
  Check,
  X as CloseIcon,
  MapPin,
  Camera,
  ChevronDown,
  Sparkles,
  ArrowLeft,
  Calendar
} from "lucide-react";
import { toursData, TourItem } from "../data/tours";
import { Breadcrumbs } from "../components/UI/Breadcrumbs";
import { TourBookingBox } from "../components/Booking/TourBookingBox";
import { TourCard } from "../components/Cards/TourCard";
import { siteConfig } from "../data/siteConfig";
import { initSubpageAnimations } from "../utils/animations";

interface TourDetailPageProps {
  slug: string;
  onNavigate?: (path: string) => void;
}

export const TourDetailPage: React.FC<TourDetailPageProps> = ({ slug, onNavigate }) => {
  const tour = toursData.find((t) => t.slug === slug) || toursData[0];
  const [activeImage, setActiveImage] = useState(tour.coverImage);
  const [openItineraryIndex, setOpenItineraryIndex] = useState<number | null>(0);

  useEffect(() => {
    setActiveImage(tour.coverImage);
    const cleanup = initSubpageAnimations();
    return () => {
      if (cleanup) cleanup();
    };
  }, [slug, tour]);

  const relatedTours = toursData
    .filter((t) => t.id !== tour.id && (t.category === tour.category || true))
    .slice(0, 3);

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
    <div id="tour-detail-page" className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      
      {/* Breadcrumbs */}
      <div className="flex items-center justify-between">
        <Breadcrumbs
          items={[
            { label: "Tours", href: "/tours" },
            { label: tour.title }
          ]}
          onNavigate={onNavigate}
        />
        <button
          onClick={(e) => handleLinkClick(e, "/tours")}
          className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold text-[#131313] hover:text-[#fd4621] transition-colors cursor-pointer"
        >
          <ArrowLeft className="size-3.5" />
          <span>Back to all tours</span>
        </button>
      </div>

      {/* Header Info */}
      <div className="space-y-3">
        <div className="flex flex-wrap items-center gap-2">
          <span className="gsap-headline-badge bg-[#fd4621] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            {tour.categoryLabel}
          </span>
          <span className="gsap-headline-text bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1">
            <ShieldCheck className="size-3.5" />
            {tour.cancellation}
          </span>
        </div>

        <h1 className="gsap-headline-title text-2xl sm:text-4xl md:text-5xl font-black text-[#131313] tracking-tight">
          {tour.title}
        </h1>

        {tour.subtitle && (
          <p className="gsap-headline-text text-base sm:text-lg text-[#434343] font-medium">
            {tour.subtitle}
          </p>
        )}

        {/* Quick Highlights Bar */}
        <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-2 text-xs sm:text-sm font-semibold text-[#131313]">
          <div className="gsap-headline-text flex items-center gap-1.5">
            <Star className="size-4 fill-amber-400 text-amber-400" />
            <span>{tour.rating}</span>
            <span className="text-[#929090] font-normal">({tour.reviewsCount} reviews)</span>
          </div>
          <span className="text-gray-300">•</span>
          <div className="gsap-headline-text flex items-center gap-1.5 text-[#434343]">
            <Clock className="size-4 text-[#fd4621]" />
            <span>{tour.duration}</span>
          </div>
          <span className="text-gray-300">•</span>
          <div className="gsap-headline-text flex items-center gap-1.5 text-[#434343]">
            <Users className="size-4 text-[#fd4621]" />
            <span>{tour.groupType}</span>
          </div>
          <span className="text-gray-300">•</span>
          <div className="gsap-headline-text flex items-center gap-1.5 text-[#434343]">
            <Globe2 className="size-4 text-[#fd4621]" />
            <span>{tour.language}</span>
          </div>
        </div>
      </div>

      {/* Main Image Showcase */}
      <div className="space-y-3">
        <div className="relative aspect-16/9 sm:aspect-21/9 rounded-3xl overflow-hidden bg-gray-100 border border-[#e5e5e5] shadow-sm">
          <img
            src={activeImage}
            alt={tour.title}
            className="gsap-headline-bg w-full h-full object-cover"
          />
        </div>

        {/* Thumbnails */}
        {tour.galleryImages && tour.galleryImages.length > 1 && (
          <div className="flex items-center gap-3 overflow-x-auto pb-2">
            {tour.galleryImages.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImage(img)}
                className={`relative shrink-0 w-24 sm:w-32 aspect-16/10 rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${
                  activeImage === img ? "border-[#fd4621] scale-105" : "border-transparent opacity-75 hover:opacity-100"
                }`}
              >
                <img src={img} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Two Columns: Content & Sticky Booking Box */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
        
        {/* Left Column: Details (7 cols) */}
        <div className="lg:col-span-7 space-y-10">
          
          {/* Overview */}
          <section className="gsap-section-about space-y-4">
            <h2 className="gsap-about-title text-xl sm:text-2xl font-bold text-[#131313]">Experience Overview</h2>
            <p className="gsap-about-content text-sm sm:text-base text-[#434343] leading-relaxed">
              {tour.overview}
            </p>
          </section>

          {/* Highlights */}
          <section className="gsap-section-features space-y-4">
            <h2 className="gsap-features-title text-xl sm:text-2xl font-bold text-[#131313]">Tour Highlights</h2>
            <ul className="gsap-features-content grid grid-cols-1 gap-3">
              {tour.highlights.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 bg-[#f6f6f6] p-3.5 rounded-2xl border border-[#e5e5e5]"
                >
                  <span className="p-1 rounded-full bg-[#fd4621] text-white shrink-0 mt-0.5">
                    <Check className="size-3 stroke-3" />
                  </span>
                  <span className="text-xs sm:text-sm font-medium text-[#131313] leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </section>

          {/* Destinations Visited */}
          {tour.destinations && tour.destinations.length > 0 && (
            <section className="gsap-section-destinations space-y-4">
              <h2 className="gsap-destinations-title text-xl sm:text-2xl font-bold text-[#131313]">Key Destinations Visited</h2>
              <div className="grid grid-cols-1 gap-4">
                {tour.destinations.map((dest, idx) => (
                  <div
                    key={idx}
                    className="gsap-destination-item p-4 sm:p-5 rounded-2xl bg-white border border-[#e5e5e5] shadow-xs space-y-1.5"
                  >
                    <div className="flex items-center gap-2">
                      <MapPin className="size-4 text-[#fd4621] shrink-0" />
                      <h3 className="font-bold text-[#131313] text-sm sm:text-base">{dest.name}</h3>
                    </div>
                    <p className="text-xs sm:text-sm text-[#434343] leading-relaxed pl-6">
                      {dest.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Detailed Itinerary */}
          <section className="gsap-section-itinerary space-y-4">
            <h2 className="gsap-itinerary-title text-xl sm:text-2xl font-bold text-[#131313]">Day Itinerary & Schedule</h2>
            <div className="space-y-3">
              {tour.itinerary.map((item, idx) => {
                const isOpen = openItineraryIndex === idx;
                return (
                  <div
                    key={idx}
                    className="gsap-itinerary-item bg-[#f6f6f6] border border-[#e5e5e5] rounded-2xl overflow-hidden"
                  >
                    <button
                      onClick={() => setOpenItineraryIndex(isOpen ? null : idx)}
                      className="w-full p-4 sm:p-5 flex items-center justify-between text-left cursor-pointer hover:bg-gray-100 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        {item.time && (
                          <span className="px-2.5 py-1 rounded-lg bg-white border border-[#e5e5e5] text-xs font-bold text-[#fd4621] shrink-0">
                            {item.time}
                          </span>
                        )}
                        <span className="font-bold text-[#131313] text-sm sm:text-base">
                          {item.title}
                        </span>
                      </div>
                      <ChevronDown
                        className={`size-4 text-[#929090] transition-transform duration-200 shrink-0 ${
                          isOpen ? "rotate-180 text-[#fd4621]" : ""
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div className="p-4 sm:p-5 pt-0 border-t border-[#e5e5e5] space-y-3 text-xs sm:text-sm text-[#434343] leading-relaxed">
                        <p className="pt-3">{item.description}</p>
                        {item.subItems && (
                          <div className="space-y-2 pt-2">
                            {item.subItems.map((sub, sIdx) => (
                              <div key={sIdx} className="pl-3 border-l-2 border-[#fd4621] space-y-0.5">
                                <span className="font-bold text-[#131313] block text-xs">{sub.title}</span>
                                <span className="text-xs text-[#929090]">{sub.desc}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>

          {/* Inclusions & Exclusions */}
          <section className="gsap-section-inclusions space-y-4">
            <h2 className="gsap-inclusions-title text-xl sm:text-2xl font-bold text-[#131313]">What's Included & Excluded</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Included */}
              <div className="gsap-inclusion-card bg-emerald-50/60 rounded-2xl p-5 border border-emerald-200 space-y-3">
                <h3 className="font-bold text-emerald-900 text-sm flex items-center gap-1.5">
                  <Check className="size-4 text-emerald-600" />
                  <span>Package Inclusions</span>
                </h3>
                <ul className="space-y-2 text-xs text-emerald-950">
                  {tour.inclusions.map((inc, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-emerald-600 font-bold">•</span>
                      <span>{inc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Excluded */}
              <div className="gsap-inclusion-card bg-rose-50/60 rounded-2xl p-5 border border-rose-200 space-y-3">
                <h3 className="font-bold text-rose-900 text-sm flex items-center gap-1.5">
                  <CloseIcon className="size-4 text-rose-600" />
                  <span>Exclusions</span>
                </h3>
                <ul className="space-y-2 text-xs text-rose-950">
                  {tour.exclusions.map((exc, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-rose-600 font-bold">•</span>
                      <span>{exc}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </section>

          {/* What to bring */}
          {tour.whatToBring && (
            <section className="space-y-3 bg-[#f6f6f6] rounded-2xl p-5 border border-[#e5e5e5]">
              <h3 className="font-bold text-[#131313] text-sm sm:text-base flex items-center gap-2">
                <Camera className="size-4 text-[#fd4621]" />
                <span>What to Bring on Tour Day</span>
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#434343]">
                {tour.whatToBring.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="size-1.5 rounded-full bg-[#fd4621]"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

        </div>

        {/* Right Column: Sticky Booking Widget (5 cols) */}
        <div className="lg:col-span-5 gsap-booking-form">
          <TourBookingBox tour={tour} />
        </div>

      </div>

      {/* Recommended Tours Section */}
      <div id="other-tours" className="pt-16 border-t border-[#e5e5e5] space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="gsap-other-title text-2xl font-bold text-[#131313]">Other Popular Tours</h3>
            <p className="text-xs sm:text-sm text-[#929090]">You might also love these private adventures</p>
          </div>
          <button
            onClick={(e) => handleLinkClick(e, "/tours")}
            className="text-xs font-bold text-[#fd4621] hover:underline cursor-pointer"
          >
            View all →
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedTours.map((rTour) => (
            <div key={rTour.id} className="gsap-tour-card">
              <TourCard tour={rTour} onNavigate={onNavigate} />
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

