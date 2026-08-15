import React, { useState, useEffect, useRef } from "react";
import {
  Users,
  Briefcase,
  Clock,
  MapPin,
  Check,
  Plus,
  Minus,
  X as CloseIcon,
  Calendar,
  Mail,
  Phone,
  User,
  ChevronDown
} from "lucide-react";
import { vehiclesData } from "../data/transport";
import { siteConfig } from "../data/siteConfig";
import { initSubpageAnimations } from "../utils/animations";

interface TransportDetailPageProps {
  slug: string;
  onNavigate?: (path: string) => void;
}

export const TransportDetailPage: React.FC<TransportDetailPageProps> = ({ slug, onNavigate }) => {
  // Normalize slug to match vehicle (handling trailing .html if any)
  const cleanSlug = slug.replace(/\.html$/, "");
  const vehicle = vehiclesData.find((v) => v.slug === cleanSlug) || vehiclesData[0];

  const [showFullBookingForm, setShowFullBookingForm] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Booking Form State
  const [customerName, setCustomerName] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [bookingDate, setBookingDate] = useState("");
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [pickupLocation, setPickupLocation] = useState("");
  const [isGuestDropdownOpen, setIsGuestDropdownOpen] = useState(false);

  const guestDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    setShowFullBookingForm(false);
    setIsGuestDropdownOpen(false);
    setOpenFaqIndex(0);

    const cleanup = initSubpageAnimations();
    return () => {
      if (cleanup) cleanup();
    };
  }, [slug, vehicle]);

  // Close guest dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        guestDropdownRef.current &&
        !guestDropdownRef.current.contains(event.target as Node)
      ) {
        setIsGuestDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const otherVehicles = vehiclesData.filter((v) => v.id !== vehicle.id).slice(0, 3);

  const handleLinkClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(href);
    } else {
      window.history.pushState({}, "", href);
      window.dispatchEvent(new PopStateEvent("popstate"));
    }
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hello Bali Bagus Journey! 👋
I would like to book a private vehicle charter:
• *Vehicle:* ${vehicle.name} (${vehicle.categoryLabel})
• *Date:* ${bookingDate || "To be specified"}
• *Guests:* ${adults} Adults${children > 0 ? `, ${children} Children` : ""}
• *Pickup Location:* ${pickupLocation || "To be confirmed"}
• *Customer Name:* ${customerName}
• *Email:* ${customerEmail}
• *Phone:* ${customerPhone}
• *Daily Rate:* $${vehicle.pricePerDay} USD

Please confirm vehicle availability!`;

    const waUrl = `${siteConfig.whatsappUrl}?text=${encodeURIComponent(message)}`;
    window.open(waUrl, "_blank", "noopener,noreferrer");
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const faqItems = [
    {
      q: "How do I make a booking request?",
      a: "Simply fill out our booking form on the right side of this page with your contact details, preferred travel date, and number of guests, then click \"Book Now\". Our team will reach out to you via WhatsApp or Email within a few hours to confirm availability and coordinate the details."
    },
    {
      q: "Can we change the start time of the charter?",
      a: "Yes! Since all of our vehicle charters are completely private, you can request a customized pickup time that fits your schedule. Just let us know your preference when booking or contact us beforehand."
    },
    {
      q: "Is fuel and driver included in the daily rental price?",
      a: "Yes, all daily charter rates include an experienced English-speaking local driver, fuel for the agreed operational area, and clean air-conditioned comfort throughout the journey."
    },
    {
      q: "What is your cancellation policy?",
      a: "We offer free cancellation up to 24 hours before your scheduled charter starts. If you need to cancel or reschedule, please contact us via WhatsApp as early as possible so we can update our driver schedules."
    },
    {
      q: "How do we pay for the charter?",
      a: "We accept cash payments in Indonesian Rupiah (IDR) or USD directly to our driver at the end of the day. If you prefer to pay online via Credit Card or Wise, please let us know during the booking confirmation so we can send you a secure payment link."
    },
    {
      q: "What are the payment terms?",
      a: "Payment can be made in cash to the driver upon completion of the day or tour."
    },
    {
      q: "Can the itinerary be customized?",
      a: "The itinerary can be customized according to customer preferences, subject to the available route, traffic conditions, weather, and one-way journey arrangements."
    }
  ];

  return (
    <div id="transport-detail-wrapper" className="w-full">
      
      {/* 1. HERO SECTION (#tour-show) */}
      <section
        id="tour-show"
        className="relative min-h-[60dvh] md:min-h-[45dvh] lg:min-h-[68dvh] 2xl:min-h-[52dvh] 2xl:max-h-[52dvh] flex items-end 2xl:container mx-auto"
      >
        <div className="absolute overflow-hidden inset-0 lg:inset-5 lg:top-4 lg:rounded-3xl 2xl:inset-x-0 lg:bottom-auto lg:h-[68dvh] 2xl:max-h-[50dvh]">
          <div className="gsap-tours-overlay opacity-0 absolute z-10 h-full w-full lg:rounded-3xl bg-foreground/50 lg:bg-transparent lg:bg-linear-to-b from-0% from-foreground/40 via-40% via-foreground/0 to-80% to-foreground/80 lg:to-foreground/70" />
          <img
            src={vehicle.coverImage}
            alt={vehicle.name}
            fetchPriority="high"
            decoding="async"
            className="gsap-tours-bg opacity-0 scale-105 absolute inset-0 w-full h-full object-cover lg:rounded-3xl"
          />
        </div>

        <div className="px-5 md:px-12 lg:px-20 2xl:px-30 pb-12 2xl:pb-16 relative z-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 items-end">
            <div className="col-span-1 lg:col-span-7">
              {/* Category Badge */}
              <div className="gsap-tours-badge opacity-0 translate-y-16 flex items-center gap-2 w-fit bg-white border border-border rounded-full px-2 pr-3 py-1.5 md:px-2.5 md:py-2 mb-4 md:mb-5 lg:mb-6">
                <div className="size-2 md:size-2.5 bg-primary rounded-full" />
                <strong className="font-medium text-xs md:text-sm lg:text-base text-foreground">
                  {vehicle.categoryLabel}
                </strong>
              </div>

              {/* Vehicle Title */}
              <h1 className="gsap-tours-title opacity-0 translate-y-16 text-3xl md:text-4xl lg:text-[50px] w-full mb-4 lg:mb-6 font-semibold text-white leading-snug lg:leading-[1.2]">
                {vehicle.name}
              </h1>

              {/* Meta Stats */}
              <div className="flex flex-wrap items-center gap-4 md:gap-6 lg:gap-8">
                <div className="gsap-tours-text opacity-0 translate-y-16 flex items-center gap-1.5 md:gap-2">
                  <Users className="text-primary size-5 md:size-6" />
                  <span className="text-background font-medium text-sm md:text-base">
                    {vehicle.passengers} Pax
                  </span>
                </div>
                <div className="gsap-tours-text opacity-0 translate-y-16 flex items-center gap-1.5 md:gap-2">
                  <Briefcase className="text-primary size-5 md:size-6" />
                  <span className="text-background font-medium text-sm md:text-base">
                    {vehicle.luggage} Bags
                  </span>
                </div>
                <div className="gsap-tours-text opacity-0 translate-y-16 flex items-center gap-1.5 md:gap-2">
                  <Clock className="text-primary size-5 md:size-6" />
                  <span className="text-background font-medium text-sm md:text-base">
                    10-12 Hours
                  </span>
                </div>
              </div>
            </div>

            {/* Breadcrumbs Right */}
            <div className="col-span-1 lg:col-span-5 flex justify-start lg:justify-end">
              <div className="gsap-tours-text opacity-0 translate-y-16 flex flex-wrap items-center gap-1.5 md:gap-2 text-background/90 font-medium text-xs md:text-sm lg:text-base">
                <a
                  href="/transport.html"
                  onClick={(e) => handleLinkClick(e, "/transport.html")}
                  className="hover:text-white transition-colors"
                >
                  Transport &amp; Charter
                </a>
                <span>/</span>
                <span className="text-background">{vehicle.name}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. DETAIL SECTION (#detail) */}
      <section
        id="detail"
        className="2xl:container mx-auto px-5 md:px-12 lg:px-20 2xl:px-30 pt-15 pb-32 lg:pb-15 2xl:py-20"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          
          {/* Left Column (7 cols) */}
          <div className="col-span-1 lg:col-span-7">
            
            {/* About Section */}
            <div className="mb-10 gsap-section-about">
              <div className="mb-5 gsap-about-title opacity-0 translate-y-16">
                <h2 className="font-semibold text-2xl md:text-3xl mb-4 md:mb-5">About this vehicle</h2>
                <div className="text-text-paragraf leading-relaxed space-y-4">
                  <p>{vehicle.description}</p>
                  <p>
                    Experience smooth, flexible, and reliable travel across Bali. Our private vehicle service comes equipped with full air-conditioning, spacious seating, and a friendly English-speaking local driver dedicated to making your holiday memorable.
                  </p>
                </div>
              </div>
            </div>

            {/* Inclusions & What to Prepare Section */}
            <div className="mb-10 gsap-section-inclusions">
              <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-5 text-foreground gsap-inclusions-title opacity-0 translate-y-16">
                What's Covered
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* What's Included */}
                <div className="p-5 md:p-7 rounded-2xl bg-card gsap-inclusion-card opacity-0 translate-y-10">
                  <div className="flex items-center gap-3 mb-4 pb-4 border-b border-border">
                    <svg className="w-7 h-7 text-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd"/>
                    </svg>
                    <h4 className="font-medium text-xl">What's Included : </h4>
                  </div>
                  <ul className="flex flex-col gap-3">
                    <li className="flex items-center gap-3">
                      <svg className="w-6 h-6 text-primary shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                        <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd"/>
                      </svg>
                      <p className="text-base text-foreground">Private air-conditioned vehicle</p>
                    </li>
                    <li className="flex items-center gap-3">
                      <svg className="w-6 h-6 text-primary shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                        <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd"/>
                      </svg>
                      <p className="text-base text-foreground">English-speaking driver</p>
                    </li>
                    <li className="flex items-center gap-3">
                      <svg className="w-6 h-6 text-primary shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                        <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd"/>
                      </svg>
                      <p className="text-base text-foreground">Hotel pickup &amp; drop-off</p>
                    </li>
                    <li className="flex items-center gap-3">
                      <svg className="w-6 h-6 text-primary shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                        <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd"/>
                      </svg>
                      <p className="text-base text-foreground">Fuel and parking fees</p>
                    </li>
                    <li className="flex items-center gap-3">
                      <svg className="w-6 h-6 text-primary shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                        <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd"/>
                      </svg>
                      <p className="text-base text-foreground">Bottled mineral water</p>
                    </li>
                  </ul>
                </div>

                {/* What to Bring */}
                <div className="p-5 md:p-7 rounded-2xl bg-card gsap-inclusion-card opacity-0 translate-y-10">
                  <div className="flex items-center gap-3 mb-4 pb-4 border-b border-border">
                    <svg className="w-7 h-7 text-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path fillRule="evenodd" d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z" clipRule="evenodd"/>
                    </svg>
                    <h4 className="font-medium text-xl">What to Bring : </h4>
                  </div>
                  <ul className="flex flex-col gap-3">
                    <li className="flex items-center gap-3">
                      <svg className="w-6 h-6 text-primary shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                        <path fillRule="evenodd" d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z" clipRule="evenodd"/>
                      </svg>
                      <p className="text-base text-foreground">Comfortable clothing</p>
                    </li>
                    <li className="flex items-center gap-3">
                      <svg className="w-6 h-6 text-primary shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                        <path fillRule="evenodd" d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z" clipRule="evenodd"/>
                      </svg>
                      <p className="text-base text-foreground">Sunglasses &amp; sunscreen</p>
                    </li>
                    <li className="flex items-center gap-3">
                      <svg className="w-6 h-6 text-primary shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                        <path fillRule="evenodd" d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z" clipRule="evenodd"/>
                      </svg>
                      <p className="text-base text-foreground">Camera or smartphone</p>
                    </li>
                    <li className="flex items-center gap-3">
                      <svg className="w-6 h-6 text-primary shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                        <path fillRule="evenodd" d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z" clipRule="evenodd"/>
                      </svg>
                      <p className="text-base text-foreground">Extra cash for personal expenses</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Price Breakdown Section */}
            <div className="gsap-section-price">
              <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-5 text-foreground gsap-price-title opacity-0 translate-y-16">
                Price Breakdown
              </h3>
              <div className="p-5 md:p-7 bg-foreground rounded-2xl gsap-price-content opacity-0 translate-y-10">
                <div className="flex flex-col gap-3">
                  
                  {/* Full Day */}
                  <div className="p-4 bg-white rounded-2xl flex flex-col md:flex-row md:justify-between items-start md:items-center gap-4 md:gap-0">
                    <div className="flex items-center gap-4 w-full md:w-auto">
                      <div className="bg-primary rounded-xl p-2">
                        <Clock className="text-white w-7 h-7" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-0.5">Full Day Charter</h4>
                        <p className="text-sm text-text-paragraf">10 - 12 Hours private car with driver</p>
                      </div>
                    </div>

                    <div className="flex items-center divide-x divide-border">
                      <div className="text-end pr-6">
                        <p className="text-xs text-text-label-secondary mb-0.5 uppercase tracking-wider font-semibold">Per Car</p>
                        <strong className="font-semibold text-lg text-foreground">${vehicle.pricePerDay}</strong>
                      </div>
                    </div>
                  </div>

                  {/* Half Day */}
                  <div className="p-4 bg-white rounded-2xl flex flex-col md:flex-row md:justify-between items-start md:items-center gap-4 md:gap-0">
                    <div className="flex items-center gap-4 w-full md:w-auto">
                      <div className="bg-primary rounded-xl p-2">
                        <Clock className="text-white w-7 h-7" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-0.5">Half Day Charter</h4>
                        <p className="text-sm text-text-paragraf">5 - 6 Hours private car with driver</p>
                      </div>
                    </div>

                    <div className="flex items-center divide-x divide-border">
                      <div className="text-end pr-6">
                        <p className="text-xs text-text-label-secondary mb-0.5 uppercase tracking-wider font-semibold">Per Car</p>
                        <strong className="font-semibold text-lg text-foreground">${Math.round(vehicle.pricePerDay * 0.75)}</strong>
                      </div>
                    </div>
                  </div>

                  {/* Airport Transfer */}
                  <div className="p-4 bg-white rounded-2xl flex flex-col md:flex-row md:justify-between items-start md:items-center gap-4 md:gap-0">
                    <div className="flex items-center gap-4 w-full md:w-auto">
                      <div className="bg-primary rounded-xl p-2">
                        <MapPin className="text-white w-7 h-7" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-0.5">Airport Transfer</h4>
                        <p className="text-sm text-text-paragraf">One-way private airport pickup or drop-off</p>
                      </div>
                    </div>

                    <div className="flex items-center divide-x divide-border">
                      <div className="text-end pr-6">
                        <p className="text-xs text-text-label-secondary mb-0.5 uppercase tracking-wider font-semibold">Per Transfer</p>
                        <strong className="font-semibold text-lg text-foreground">${Math.round(vehicle.pricePerDay * 0.55)}</strong>
                      </div>
                    </div>
                  </div>

                </div>

                <div className="pt-5 mt-5 px-4 flex items-center gap-4 border-t border-text-label-secondary">
                  <div className="bg-primary text-white p-2 rounded-xl w-fit">
                    <Plus className="w-5 h-5" />
                  </div>
                  <p className="text-sm md:text-base text-background md:font-medium">
                    Rates are per vehicle (not per person), including English-speaking driver, fuel, air-conditioning, and parking fees.
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Sticky Booking Box (5 cols) */}
          <div
            id="booking-form-section"
            className="col-span-1 lg:col-span-5 relative lg:sticky lg:top-32 lg:h-fit scroll-mt-24 gsap-booking-form opacity-0 translate-y-16"
          >
            {/* Private Charter Notice */}
            <div
              id="booking-min-pax-notice"
              className="py-5 px-4 bg-foreground flex items-center gap-4 rounded-2xl mb-5"
            >
              <div className="bg-primary text-white p-2 rounded-xl w-fit">
                <Plus className="w-5 h-5" />
              </div>
              <p className="text-sm md:text-base text-background md:font-medium">
                Private car charter with dedicated English-speaking local driver.
              </p>
            </div>

            {/* Booking Card */}
            <div className="bg-card rounded-2xl p-5 lg:p-8 w-full">
              
              {/* Short Summary Box */}
              {!showFullBookingForm ? (
                <div id="booking-short-form" className="flex flex-col">
                  <h3 className="text-2xl font-semibold text-foreground mb-1">
                    Book This Vehicle
                  </h3>
                  <p className="text-text-label-secondary mb-6 text-sm font-medium">
                    Secure your booking quickly. Click below to fill your details.
                  </p>

                  <div className="flex items-end justify-between pt-5 border-t border-border">
                    <div>
                      <p id="short-total-price-label" className="text-text-label-secondary text-sm font-medium mb-1">
                        Start from
                      </p>
                      <h4 id="short-total-price" className="text-[28px] font-bold text-foreground leading-none">
                        ${vehicle.pricePerDay}
                      </h4>
                    </div>

                    <button
                      id="btn-show-booking-form"
                      type="button"
                      onClick={() => setShowFullBookingForm(true)}
                      className="group inline-flex items-center justify-center gap-3 font-semibold rounded-full text-sm cursor-pointer transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary bg-primary text-white hover:bg-primary/90 pl-5 pr-2 py-2"
                    >
                      <div className="relative overflow-hidden flex items-center justify-center">
                        <span className="block transition-transform duration-500 group-hover:translate-y-[150%]">
                          Book Now
                        </span>
                        <span className="absolute block transition-transform duration-500 -translate-y-[150%] group-hover:translate-y-0">
                          Book Now
                        </span>
                      </div>

                      <span className="bg-white text-primary p-1.5 rounded-full relative overflow-hidden flex items-center justify-center">
                        <span className="inline-flex [&>svg]:w-5 [&>svg]:h-5 transition-transform duration-500 group-hover:translate-x-[150%] group-hover:-translate-y-[150%]">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                            <path d="M7 17L17 7M17 7H9M17 7V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </span>
                        <span className="absolute inline-flex [&>svg]:w-5 [&>svg]:h-5 transition-transform duration-500 -translate-x-[150%] translate-y-[150%] group-hover:translate-x-0 group-hover:translate-y-0">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                            <path d="M7 17L17 7M17 7H9M17 7V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </span>
                        <span className="absolute top-0 -left-[100%] w-[50%] h-full bg-gradient-to-r from-transparent via-white/60 to-transparent skew-x-[-25deg] transition-transform duration-700 group-hover:translate-x-[400%] pointer-events-none z-10" />
                      </span>
                    </button>
                  </div>
                </div>
              ) : (
                /* Full Form */
                <div id="booking-full-form" className="block">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-2xl font-semibold text-foreground">
                      Booking Details
                    </h3>
                    <button
                      type="button"
                      id="btn-hide-booking-form"
                      onClick={() => setShowFullBookingForm(false)}
                      className="text-text-label-secondary hover:text-foreground transition-colors p-2 -mr-2 cursor-pointer"
                    >
                      <CloseIcon className="w-5 h-5" />
                    </button>
                  </div>

                  <form onSubmit={handleBookingSubmit}>
                    {/* Full Name */}
                    <div className="mb-5">
                      <label htmlFor="full-name" className="block text-text-label-secondary text-sm font-medium mb-2.5">
                        Your Full Name
                      </label>
                      <div className="relative border border-border rounded-full px-5 py-4 flex items-center gap-3 bg-white focus-within:border-primary transition-colors">
                        <User className="size-5 text-foreground shrink-0" />
                        <input
                          id="full-name"
                          name="customer_name"
                          type="text"
                          value={customerName}
                          onChange={(e) => setCustomerName(e.target.value)}
                          placeholder="e.g. Bobby JR"
                          className="w-full text-foreground text-sm font-medium focus:outline-none bg-transparent placeholder-text-label-secondary"
                          required
                        />
                      </div>
                    </div>

                    {/* Email Address */}
                    <div className="mb-5">
                      <label htmlFor="email" className="block text-text-label-secondary text-sm font-medium mb-2.5">
                        Email Address
                      </label>
                      <div className="relative border border-border rounded-full px-5 py-4 flex items-center gap-3 bg-white focus-within:border-primary transition-colors">
                        <Mail className="size-5 text-foreground shrink-0" />
                        <input
                          id="email"
                          name="customer_email"
                          type="email"
                          value={customerEmail}
                          onChange={(e) => setCustomerEmail(e.target.value)}
                          placeholder="e.g. user@gmail.com"
                          className="w-full text-foreground text-sm font-medium focus:outline-none bg-transparent placeholder-text-label-secondary"
                          required
                        />
                      </div>
                    </div>

                    {/* Phone Number */}
                    <div className="mb-5">
                      <label htmlFor="phone" className="block text-text-label-secondary text-sm font-medium mb-2.5">
                        Phone Number
                      </label>
                      <div className="relative border border-border rounded-full px-5 py-4 flex items-center gap-3 bg-white focus-within:border-primary transition-colors">
                        <Phone className="size-5 text-foreground shrink-0" />
                        <input
                          id="phone"
                          name="customer_phone"
                          type="tel"
                          value={customerPhone}
                          onChange={(e) => setCustomerPhone(e.target.value)}
                          placeholder="e.g. +62-821-2345-678"
                          className="w-full text-foreground text-sm font-medium focus:outline-none bg-transparent placeholder-text-label-secondary"
                          required
                        />
                      </div>
                    </div>

                    {/* Date & Guests Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-5">
                      {/* Booking Date */}
                      <div>
                        <label htmlFor="booking-date" className="block text-text-label-secondary text-sm font-medium mb-2.5">
                          Booking date
                        </label>
                        <div className="relative border border-border rounded-full px-4 py-4 flex items-center gap-2 bg-white cursor-pointer">
                          <Calendar className="size-5 text-foreground shrink-0" />
                          <input
                            id="booking-date"
                            name="booking_date"
                            type="date"
                            value={bookingDate}
                            onChange={(e) => setBookingDate(e.target.value)}
                            className="w-full text-foreground text-sm font-medium focus:outline-none bg-transparent cursor-pointer"
                            required
                          />
                        </div>
                      </div>

                      {/* Number Of Guest */}
                      <div id="field-guest" className="block relative" ref={guestDropdownRef}>
                        <label htmlFor="guest-input" className="block text-text-label-secondary text-sm font-medium mb-2.5">
                          Number Of Guest
                        </label>
                        <div
                          id="guest-input-container"
                          onClick={() => setIsGuestDropdownOpen(!isGuestDropdownOpen)}
                          className="relative border border-border rounded-full px-4 py-4 flex items-center gap-2 bg-white cursor-pointer"
                          tabIndex={0}
                          role="button"
                        >
                          <User className="size-5 text-foreground shrink-0" />
                          <input
                            id="guest-input"
                            type="text"
                            value={`${adults} Adults${children > 0 ? `, ${children} Children` : ""}`}
                            readOnly
                            className="w-full text-foreground text-sm font-medium focus:outline-none bg-transparent cursor-pointer pointer-events-none truncate placeholder-text-label-secondary"
                          />
                          <ChevronDown className="size-4 text-foreground shrink-0" />
                        </div>

                        {/* Guest Counter Modal */}
                        {isGuestDropdownOpen && (
                          <div
                            id="guest-dropdown"
                            className="absolute top-full right-0 lg:-top-8 lg:left-auto lg:right-full lg:mt-0 lg:mr-4 w-full md:w-[320px] bg-white rounded-2xl border border-gray-100 p-5 z-50 shadow-lg"
                          >
                            {/* Adult Row */}
                            <div className="flex items-center justify-between mb-5">
                              <div>
                                <h4 className="text-sm lg:text-base font-semibold text-foreground">Adults</h4>
                                <p className="text-xs text-text-label-secondary mt-0.5">Ages 12 or above</p>
                              </div>
                              <div className="flex items-center gap-3.5">
                                <button
                                  type="button"
                                  onClick={() => setAdults(Math.max(1, adults - 1))}
                                  disabled={adults <= 1}
                                  className="size-9 rounded-full border border-border flex items-center justify-center text-foreground hover:border-primary hover:text-primary transition-colors disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                                >
                                  <Minus className="size-4" />
                                </button>
                                <span className="w-5 text-center font-semibold text-sm">{adults}</span>
                                <button
                                  type="button"
                                  onClick={() => setAdults(adults + 1)}
                                  className="size-9 rounded-full border border-border flex items-center justify-center text-foreground hover:border-primary hover:text-primary transition-colors cursor-pointer"
                                >
                                  <Plus className="size-4" />
                                </button>
                              </div>
                            </div>

                            {/* Children Row */}
                            <div className="flex items-center justify-between mb-6">
                              <div>
                                <h4 className="text-sm lg:text-base font-semibold text-foreground">Children</h4>
                                <p className="text-xs text-text-label-secondary mt-0.5">Ages 2-11</p>
                              </div>
                              <div className="flex items-center gap-3.5">
                                <button
                                  type="button"
                                  onClick={() => setChildren(Math.max(0, children - 1))}
                                  disabled={children <= 0}
                                  className="size-9 rounded-full border border-border flex items-center justify-center text-foreground hover:border-primary hover:text-primary transition-colors disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                                >
                                  <Minus className="size-4" />
                                </button>
                                <span className="w-5 text-center font-semibold text-sm">{children}</span>
                                <button
                                  type="button"
                                  onClick={() => setChildren(children + 1)}
                                  className="size-9 rounded-full border border-border flex items-center justify-center text-foreground hover:border-primary hover:text-primary transition-colors cursor-pointer"
                                >
                                  <Plus className="size-4" />
                                </button>
                              </div>
                            </div>

                            <button
                              type="button"
                              onClick={() => setIsGuestDropdownOpen(false)}
                              className="w-full py-2.5 text-sm bg-primary text-white font-semibold rounded-full hover:bg-primary/90 transition-colors cursor-pointer"
                            >
                              Apply
                            </button>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Pickup Location */}
                    <div className="mb-10">
                      <label htmlFor="pickup" className="block text-text-label-secondary text-sm font-medium mb-2.5">
                        Pickup Location
                      </label>
                      <div className="relative border border-border rounded-full px-5 py-4 flex items-center gap-3 bg-white focus-within:border-primary transition-colors">
                        <MapPin className="size-5 text-foreground shrink-0" />
                        <input
                          id="pickup"
                          name="pickup_location"
                          type="text"
                          value={pickupLocation}
                          onChange={(e) => setPickupLocation(e.target.value)}
                          placeholder="Enter address or hotel name"
                          className="w-full text-foreground text-sm font-medium focus:outline-none bg-transparent placeholder-text-label-secondary"
                          required
                        />
                      </div>
                    </div>

                    {/* Footer (Price & Submit) */}
                    <div className="flex items-end justify-between pt-2">
                      <div>
                        <p className="text-text-label-secondary text-sm font-medium mb-1">Total Price</p>
                        <h4 id="full-total-price" className="text-[28px] font-bold text-foreground leading-none">
                          ${vehicle.pricePerDay}
                        </h4>
                      </div>

                      <button
                        type="submit"
                        id="hero-submit-btn"
                        className="group inline-flex items-center justify-center gap-3 font-semibold rounded-full text-sm cursor-pointer transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary bg-primary text-white hover:bg-primary/90 pl-5 pr-2 py-2"
                      >
                        <div className="relative overflow-hidden flex items-center justify-center">
                          <span className="block transition-transform duration-500 group-hover:translate-y-[150%]">
                            Book Now
                          </span>
                          <span className="absolute block transition-transform duration-500 -translate-y-[150%] group-hover:translate-y-0">
                            Book Now
                          </span>
                        </div>

                        <span className="bg-white text-primary p-1.5 rounded-full relative overflow-hidden flex items-center justify-center">
                          <span className="inline-flex [&>svg]:w-5 [&>svg]:h-5 transition-transform duration-500 group-hover:translate-x-[150%] group-hover:-translate-y-[150%]">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                              <path d="M7 17L17 7M17 7H9M17 7V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </span>
                          <span className="absolute inline-flex [&>svg]:w-5 [&>svg]:h-5 transition-transform duration-500 -translate-x-[150%] translate-y-[150%] group-hover:translate-x-0 group-hover:translate-y-0">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                              <path d="M7 17L17 7M17 7H9M17 7V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </span>
                          <span className="absolute top-0 -left-[100%] w-[50%] h-full bg-gradient-to-r from-transparent via-white/60 to-transparent skew-x-[-25deg] transition-transform duration-700 group-hover:translate-x-[400%] pointer-events-none z-10" />
                        </span>
                      </button>
                    </div>
                  </form>
                </div>
              )}
            </div>
          </div>

        </div>

        {/* Mobile Sticky Booking Bar */}
        <div
          id="mobile-sticky-booking"
          className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-border z-50 lg:hidden flex justify-between items-center shadow-[0_-10px_40px_rgba(0,0,0,0.08)]"
        >
          <a
            href="#booking-form-section"
            onClick={() => setShowFullBookingForm(true)}
            className="w-full justify-center bg-primary text-white py-3 rounded-xl font-semibold flex items-center gap-3 hover:bg-primary/90 transition-colors group"
          >
            <span>Book This Vehicle</span>
          </a>
        </div>
      </section>

      {/* 3. FAQ SECTION (#faq) */}
      <section
        id="faq"
        className="2xl:container mx-auto px-5 md:px-12 lg:px-20 2xl:px-30 py-15 2xl:py-20"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12 lg:gap-10">
          
          {/* Left Column: Heading & Contact Box */}
          <div className="lg:col-span-5 flex flex-col gap-8 lg:gap-0 lg:justify-between lg:min-h-[75dvh] lg:max-h-[75dvh] 2xl:min-h-[50dvh] 2xl:max-h-[50dvh]">
            <div>
              <div className="gsap-faq-badge opacity-0 -translate-x-16 mb-4 lg:mb-6 flex items-center gap-2 w-fit bg-white border border-border rounded-full px-2.5 pr-3 py-2">
                <div className="size-2.5 bg-primary rounded-full" />
                <strong className="font-medium text-sm md:text-base">FAQs</strong>
              </div>
              <h2 className="gsap-faq-heading opacity-0 translate-y-16 text-3xl md:text-4xl lg:text-5xl font-semibold leading-snug lg:leading-[1.3] lg:max-w-xl">
                Helpful Answers Before You Book
              </h2>
            </div>

            <div className="flex">
              <div className="gsap-faq-contact opacity-0 scale-95 w-full md:w-3/5 lg:w-4/5 xl:w-[65%] bg-card p-6 lg:p-7 rounded-2xl">
                <div className="mb-8">
                  <h4 className="text-lg font-semibold mb-2">Have Another Question?</h4>
                  <p className="text-sm w-[88%]">
                    Contact us via WhatsApp and we will respond quickly
                  </p>
                </div>

                <a
                  href="/contact.html"
                  onClick={(e) => handleLinkClick(e, "/contact.html")}
                  className="group inline-flex items-center justify-center gap-3 font-semibold rounded-full text-sm cursor-pointer transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary bg-foreground text-background hover:bg-foreground/90 pl-3 pr-1.5 py-1.5 lg:pl-4 lg:pr-2 lg:py-1.5 w-fit text-xs lg:text-sm"
                >
                  <div className="relative overflow-hidden flex items-center justify-center">
                    <span className="block transition-transform duration-500 group-hover:translate-y-[150%]">
                      Contact Us
                    </span>
                    <span className="absolute block transition-transform duration-500 -translate-y-[150%] group-hover:translate-y-0">
                      Contact Us
                    </span>
                  </div>

                  <span className="bg-primary text-white p-1.5 rounded-full relative overflow-hidden flex items-center justify-center">
                    <span className="inline-flex [&>svg]:w-5 [&>svg]:h-5 transition-transform duration-500 group-hover:translate-x-[150%] group-hover:-translate-y-[150%]">
                      <svg className="size-3 lg:size-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                        <path d="M7 17L17 7M17 7H9M17 7V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    <span className="absolute inline-flex [&>svg]:w-5 [&>svg]:h-5 transition-transform duration-500 -translate-x-[150%] translate-y-[150%] group-hover:translate-x-0 group-hover:translate-y-0">
                      <svg className="size-3 lg:size-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                        <path d="M7 17L17 7M17 7H9M17 7V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    <span className="absolute top-0 -left-[100%] w-[50%] h-full bg-gradient-to-r from-transparent via-white/60 to-transparent skew-x-[-25deg] transition-transform duration-700 group-hover:translate-x-[400%] pointer-events-none z-10" />
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Accordion Items */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            {faqItems.map((item, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  onClick={() => toggleFaq(idx)}
                  className="gsap-faq-item opacity-0 translate-y-16 faq-item bg-card p-5 lg:p-6 rounded-2xl cursor-pointer"
                  role="button"
                  tabIndex={0}
                  aria-expanded={isOpen}
                >
                  <div className="flex justify-between items-center gap-4">
                    <h3 className="text-base lg:text-lg font-semibold">{item.q}</h3>
                    <div
                      className={`faq-icon size-8 md:size-9 lg:size-10 rounded-lg flex items-center justify-center shrink-0 transition-colors duration-300 ${
                        isOpen ? "bg-primary text-white" : "bg-foreground text-background"
                      }`}
                    >
                      {isOpen ? (
                        <Minus className="size-5" />
                      ) : (
                        <Plus className="size-5" />
                      )}
                    </div>
                  </div>

                  <div
                    className={`faq-content transition-all duration-300 overflow-hidden ${
                      isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="pt-4 lg:pt-5 mt-4 lg:mt-5 border-t border-border">
                        <p className="text-sm lg:text-base text-foreground/80 leading-relaxed">
                          {item.a}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 4. MORE TRANSPORT OPTIONS SECTION (#other-vehicles) */}
      <section
        id="other-vehicles"
        className="2xl:container mx-auto px-5 md:px-12 lg:px-20 2xl:px-30 py-15 2xl:py-20"
      >
        <div className="text-center flex flex-col items-center mb-10 lg:mb-16">
          <div className="gsap-other-vehicles-badge opacity-0 translate-y-16 flex items-center gap-2 w-fit bg-white border border-border rounded-full px-2.5 pr-3 py-2 mb-5 lg:mb-6">
            <div className="size-2.5 bg-primary rounded-full" />
            <strong className="font-medium text-sm md:text-base text-foreground">
              More Transport Options
            </strong>
          </div>
          <h2 className="gsap-other-vehicles-title opacity-0 translate-y-16 text-3xl md:text-4xl lg:text-5xl font-semibold leading-snug lg:leading-[1.3]">
            Explore More Bali <br /> Transport Options
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-5">
          {otherVehicles.map((v) => (
            <div key={v.id} className="transport-item" data-category={v.category}>
              <div className="gsap-transport-card opacity-0 translate-y-16 bg-card rounded-2xl p-4 flex flex-col h-full">
                <a
                  href={`/transport/${v.slug}.html`}
                  onClick={(e) => handleLinkClick(e, `/transport/${v.slug}.html`)}
                  className="h-36 lg:h-52 relative rounded-2xl overflow-hidden mb-5 block group"
                >
                  <img
                    src={v.coverImage}
                    alt={`${v.name} - Premium transport by Bali Bagus Journey`}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </a>

                <div className="flex flex-col grow md:px-4">
                  <h4 className="text-lg lg:text-xl font-semibold text-foreground mb-2 hover:text-primary transition-colors">
                    <a
                      href={`/transport/${v.slug}.html`}
                      onClick={(e) => handleLinkClick(e, `/transport/${v.slug}.html`)}
                    >
                      {v.name}
                    </a>
                  </h4>

                  <div className="flex items-center gap-4 text-text-label-secondary pb-3 mb-3 border-b border-border">
                    <div className="flex items-center gap-1.5">
                      <Users className="size-4 lg:size-5 shrink-0" />
                      <span className="text-sm lg:text-base font-medium">{v.passengers} Pax</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Briefcase className="size-4 lg:size-5 shrink-0" />
                      <span className="text-sm lg:text-base font-medium">{v.luggage} Bags</span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center mt-auto">
                    <h5 className="text-xl lg:text-2xl font-semibold text-foreground">
                      ${v.pricePerDay}
                    </h5>

                    <a
                      href={`/transport/${v.slug}.html`}
                      onClick={(e) => handleLinkClick(e, `/transport/${v.slug}.html`)}
                      className="group inline-flex items-center justify-center gap-3 font-semibold rounded-full text-sm cursor-pointer transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary bg-white text-foreground hover:bg-white/90 pl-4 pr-2 py-1.5 lg:pl-5 lg:py-2 w-fit"
                      aria-label={`View details of ${v.name}`}
                    >
                      <div className="relative overflow-hidden flex items-center justify-center">
                        <span className="block transition-transform duration-500 group-hover:translate-y-[150%]">
                          View Detail
                        </span>
                        <span className="absolute block transition-transform duration-500 -translate-y-[150%] group-hover:translate-y-0">
                          View Detail
                        </span>
                      </div>

                      <span className="bg-primary text-white p-1.5 rounded-full relative overflow-hidden flex items-center justify-center">
                        <span className="inline-flex [&>svg]:w-5 [&>svg]:h-5 transition-transform duration-500 group-hover:translate-x-[150%] group-hover:-translate-y-[150%]">
                          <svg aria-hidden="true" className="size-4 lg:size-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                            <path d="M7 17L17 7M17 7H9M17 7V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </span>
                        <span className="absolute inline-flex [&>svg]:w-5 [&>svg]:h-5 transition-transform duration-500 -translate-x-[150%] translate-y-[150%] group-hover:translate-x-0 group-hover:translate-y-0">
                          <svg aria-hidden="true" className="size-4 lg:size-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                            <path d="M7 17L17 7M17 7H9M17 7V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </span>
                        <span className="absolute top-0 -left-[100%] w-[50%] h-full bg-gradient-to-r from-transparent via-white/60 to-transparent skew-x-[-25deg] transition-transform duration-700 group-hover:translate-x-[400%] pointer-events-none z-10" />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};
