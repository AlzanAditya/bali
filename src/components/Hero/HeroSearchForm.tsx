import React, { useState, useRef, useEffect } from "react";
import { siteConfig } from "../../data/siteConfig";

interface HeroSearchFormProps {
  onSearchTours?: (selectedTourId: string) => void;
  onNavigate?: (path: string) => void;
}

export const HeroSearchForm: React.FC<HeroSearchFormProps> = ({
  onNavigate
}) => {
  const [serviceType, setServiceType] = useState<"tours" | "transports">("tours");
  const [date, setDate] = useState(() => {
    const d = new Date();
    d.setDate(d.getDate() + 1);
    return d.toISOString().split("T")[0];
  });
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [guestDropdownOpen, setGuestDropdownOpen] = useState(false);
  const [destination, setDestination] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setGuestDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (serviceType === "tours") {
      const msg = `Hello Bali Bagus Journey! I would like to check tour availability on ${date} for ${adults} Adults and ${children} Children.`;
      const waUrl = `${siteConfig.whatsappUrl}?text=${encodeURIComponent(msg)}`;
      window.open(waUrl, "_blank", "noopener,noreferrer");
      if (onNavigate) onNavigate("/tours");
    } else {
      const msg = `Hello Bali Bagus Journey! I would like to check private transport availability on ${date} for destination: ${destination || "Bali Island Tour"}.`;
      const waUrl = `${siteConfig.whatsappUrl}?text=${encodeURIComponent(msg)}`;
      window.open(waUrl, "_blank", "noopener,noreferrer");
      if (onNavigate) onNavigate("/transport");
    }
  };

  const guestLabel = `${adults} Adult${adults > 1 ? "s" : ""}, ${children} Child${children === 1 ? "" : "ren"}`;

  return (
    <div className="gsap-hero-form bg-white rounded-2xl p-5 md:p-6 w-full shadow-2xl">
      <h3 className="text-xl font-semibold mb-4 lg:mb-3">Plan Your Bali Trip</h3>

      <form onSubmit={handleSubmit}>
        {/* Segmented Control */}
        <div className="flex p-1.5 bg-[#F6F6F6] rounded-full mb-5" role="radiogroup" aria-label="Service Type">
          <label className="flex-1 relative cursor-pointer group">
            <input
              type="radio"
              id="radio-tours"
              name="service_type"
              value="tours"
              className="sr-only"
              checked={serviceType === "tours"}
              onChange={() => setServiceType("tours")}
            />
            <div
              className={`rounded-full py-3.5 flex items-center justify-center gap-2.5 transition-all duration-300 ${
                serviceType === "tours" ? "bg-white shadow-xs" : ""
              }`}
            >
              <span
                className={`w-3 h-3 bg-[#FD4621] rounded-full transition-opacity ${
                  serviceType === "tours" ? "opacity-100" : "opacity-0"
                }`}
              ></span>
              <span
                className={`hidden lg:block font-semibold text-sm transition-colors ${
                  serviceType === "tours" ? "text-[#131313]" : "text-[#929090]"
                }`}
              >
                Tours & Activities
              </span>
              <span
                className={`lg:hidden font-semibold text-sm transition-colors ${
                  serviceType === "tours" ? "text-[#131313]" : "text-[#929090]"
                }`}
              >
                Tours
              </span>
            </div>
          </label>

          <label className="flex-1 relative cursor-pointer group">
            <input
              type="radio"
              id="radio-transports"
              name="service_type"
              value="transports"
              className="sr-only"
              checked={serviceType === "transports"}
              onChange={() => setServiceType("transports")}
            />
            <div
              className={`rounded-full py-3.5 flex items-center justify-center gap-2.5 transition-all duration-300 ${
                serviceType === "transports" ? "bg-white shadow-xs" : ""
              }`}
            >
              <span
                className={`w-3 h-3 bg-[#FD4621] rounded-full transition-opacity ${
                  serviceType === "transports" ? "opacity-100" : "opacity-0"
                }`}
              ></span>
              <span
                className={`font-semibold text-sm transition-colors ${
                  serviceType === "transports" ? "text-[#131313]" : "text-[#929090]"
                }`}
              >
                Transports
              </span>
            </div>
          </label>
        </div>

        {/* Booking Date */}
        <div className="mb-5">
          <label htmlFor="booking-date" className="block text-[#929090] text-sm font-medium mb-3">
            Booking date
          </label>
          <div className="relative border border-[#E5E5E5] rounded-full px-5 py-3.5 flex items-center gap-3 bg-white cursor-pointer hover:border-[#FD4621] transition-colors">
            <svg
              className="size-5 text-[#131313] shrink-0"
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
            <input
              id="booking-date"
              type="date"
              name="date"
              value={date}
              min={new Date().toISOString().split("T")[0]}
              onChange={(e) => setDate(e.target.value)}
              className="w-full text-[#131313] text-sm font-medium focus:outline-none bg-transparent cursor-pointer"
            />
          </div>
        </div>

        {/* Dynamic Field (Guest or Destination) */}
        <div className="mb-8" ref={dropdownRef}>
          {serviceType === "tours" ? (
            <div id="field-guest" className="block relative">
              <label htmlFor="guest-input" className="block text-[#929090] text-sm font-medium mb-3">
                Number Of Guest
              </label>
              <div
                id="guest-input-container"
                onClick={() => setGuestDropdownOpen(!guestDropdownOpen)}
                className="relative border border-[#E5E5E5] rounded-full px-5 py-4 flex items-center gap-3 bg-white cursor-pointer hover:border-[#FD4621] transition-colors"
                role="button"
                tabIndex={0}
              >
                <svg
                  className="size-5 text-[#131313] shrink-0"
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
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
                <span className="w-full text-[#131313] text-sm font-medium select-none">{guestLabel}</span>
                <svg
                  className={`size-5 text-[#131313] absolute right-5 top-1/2 -translate-y-1/2 transition-transform duration-300 ${
                    guestDropdownOpen ? "rotate-180" : ""
                  }`}
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
              </div>

              {/* Guest Counter Modal / Dropdown */}
              {guestDropdownOpen && (
                <div
                  id="guest-dropdown"
                  className="absolute top-full left-0 mt-3 lg:-top-8 lg:left-auto lg:right-full lg:mt-0 lg:mr-8 w-full md:w-[320px] bg-white rounded-2xl border border-gray-100 p-5 shadow-xl z-50 animate-in fade-in zoom-in-95 duration-200"
                >
                  {/* Adult Row */}
                  <div className="flex items-center justify-between mb-5">
                    <div>
                      <h4 className="text-sm lg:text-base font-semibold text-[#131313]">Adults</h4>
                      <p className="text-xs text-[#929090] mt-0.5">Ages 12 or above</p>
                    </div>
                    <div className="flex items-center gap-3.5">
                      <button
                        type="button"
                        aria-label="Decrease adults"
                        id="btn-adult-minus"
                        disabled={adults <= 1}
                        onClick={() => setAdults((prev) => Math.max(1, prev - 1))}
                        className="size-9 rounded-full border border-[#E5E5E5] flex items-center justify-center text-[#131313] hover:border-[#FD4621] hover:text-[#FD4621] transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
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
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                        </svg>
                      </button>
                      <span id="adult-count" className="w-5 text-center font-semibold text-sm text-[#131313]">
                        {adults}
                      </span>
                      <button
                        type="button"
                        aria-label="Increase adults"
                        id="btn-adult-plus"
                        onClick={() => setAdults((prev) => prev + 1)}
                        className="size-9 rounded-full border border-[#E5E5E5] flex items-center justify-center text-[#131313] hover:border-[#FD4621] hover:text-[#FD4621] transition-colors"
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
                          <line x1="12" y1="5" x2="12" y2="19"></line>
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                        </svg>
                      </button>
                    </div>
                  </div>

                  {/* Children Row */}
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h4 className="text-sm lg:text-base font-semibold text-[#131313]">Children</h4>
                      <p className="text-xs text-[#929090] mt-0.5">Ages 2-11</p>
                    </div>
                    <div className="flex items-center gap-3.5">
                      <button
                        type="button"
                        aria-label="Decrease children"
                        id="btn-child-minus"
                        disabled={children <= 0}
                        onClick={() => setChildren((prev) => Math.max(0, prev - 1))}
                        className="size-9 rounded-full border border-[#E5E5E5] flex items-center justify-center text-[#131313] hover:border-[#FD4621] hover:text-[#FD4621] transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
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
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                        </svg>
                      </button>
                      <span id="child-count" className="w-5 text-center font-semibold text-sm text-[#131313]">
                        {children}
                      </span>
                      <button
                        type="button"
                        aria-label="Increase children"
                        id="btn-child-plus"
                        onClick={() => setChildren((prev) => prev + 1)}
                        className="size-9 rounded-full border border-[#E5E5E5] flex items-center justify-center text-[#131313] hover:border-[#FD4621] hover:text-[#FD4621] transition-colors"
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
                          <line x1="12" y1="5" x2="12" y2="19"></line>
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                        </svg>
                      </button>
                    </div>
                  </div>

                  <button
                    type="button"
                    id="btn-guest-apply"
                    onClick={() => setGuestDropdownOpen(false)}
                    className="w-full py-2.5 text-sm bg-[#FD4621] text-white font-semibold rounded-full hover:bg-[#e03a17] transition-colors"
                  >
                    Apply
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div id="field-destination" className="block">
              <label htmlFor="destination-input" className="block text-[#929090] text-sm font-medium mb-3">
                Drop Off Point / Destination
              </label>
              <div className="relative border border-[#E5E5E5] rounded-full px-5 py-4 flex items-center gap-3 bg-white hover:border-[#FD4621] transition-colors">
                <svg
                  className="size-5 text-[#131313] shrink-0"
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
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <input
                  id="destination-input"
                  type="text"
                  name="destination"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  placeholder="Enter hotel, area, or destination"
                  className="w-full text-[#131313] text-sm font-medium focus:outline-none bg-transparent placeholder-[#A3A3A3]"
                />
              </div>
            </div>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          id="hero-submit-btn"
          className="group w-full inline-flex items-center justify-between gap-3 font-semibold rounded-full text-sm cursor-pointer transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FD4621] bg-[#FD4621] text-white hover:bg-[#e03a17] pl-5 pr-2 py-2"
        >
          <div className="relative overflow-hidden flex items-center justify-center">
            <span className="block transition-transform duration-500 group-hover:translate-y-[150%]">
              Check Availability
            </span>
            <span className="absolute block transition-transform duration-500 -translate-y-[150%] group-hover:translate-y-0">
              Check Availability
            </span>
          </div>

          <span className="bg-white text-[#FD4621] p-1.5 rounded-full relative overflow-hidden flex items-center justify-center shrink-0 size-7">
            <span className="inline-flex [&>svg]:w-4 [&>svg]:h-4 transition-transform duration-500 group-hover:translate-x-[150%] group-hover:-translate-y-[150%]">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                <g id="Arrow / Arrow_Up_Right_MD">
                  <path
                    id="Vector"
                    d="M7 17L17 7M17 7H9M17 7V15"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
              </svg>
            </span>
            <span className="absolute inline-flex [&>svg]:w-4 [&>svg]:h-4 transition-transform duration-500 -translate-x-[150%] translate-y-[150%] group-hover:translate-x-0 group-hover:translate-y-0">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                <g id="Arrow / Arrow_Up_Right_MD">
                  <path
                    id="Vector"
                    d="M7 17L17 7M17 7H9M17 7V15"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
              </svg>
            </span>
            {/* Glare effect */}
            <span className="absolute top-0 -left-[100%] w-[50%] h-full bg-gradient-to-r from-transparent via-white/60 to-transparent skew-x-[-25deg] transition-transform duration-700 group-hover:translate-x-[400%] pointer-events-none z-10"></span>
          </span>
        </button>
      </form>
    </div>
  );
};
