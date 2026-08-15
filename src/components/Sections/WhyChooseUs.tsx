import React from "react";
import { Compass, Users, Sparkles, ShieldCheck, HeartHandshake, Award } from "lucide-react";
import { companyValues } from "../../data/siteConfig";

export const WhyChooseUs: React.FC = () => {
  const stats = [
    { value: "100%", label: "Local Balinese Team", desc: "Born and raised in Bali" },
    { value: "4.9★", label: "Customer Satisfaction", desc: "Over 1,200+ happy travelers" },
    { value: "14+", label: "Curated Tour Routes", desc: "Covering all 8 Bali regencies" },
    { value: "0", label: "Hidden Booking Fees", desc: "Transparent upfront pricing" }
  ];

  return (
    <section id="why-choose-us" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#fd4621] block">
            Why Bali Bagus Journey
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#131313] tracking-tight">
            Authentic, Private, and Worry-Free Bali Exploration
          </h2>
          <p className="text-sm sm:text-base text-[#434343] leading-relaxed">
            We are a locally owned and operated tour & chauffeur team. Unlike mass-bus tour companies, we curate flexible, private journeys that let you experience the real Bali at your own rhythm.
          </p>
        </div>

        {/* Stats Strip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-[#f6f6f6] rounded-2xl p-5 sm:p-6 border border-[#e5e5e5] space-y-1 text-center sm:text-left"
            >
              <div className="text-2xl sm:text-3xl font-black text-[#fd4621]">{stat.value}</div>
              <div className="text-sm font-bold text-[#131313]">{stat.label}</div>
              <div className="text-xs text-[#929090]">{stat.desc}</div>
            </div>
          ))}
        </div>

        {/* 3 Value Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          <div className="bg-[#f6f6f6] rounded-3xl p-7 sm:p-8 border border-[#e5e5e5] space-y-4 hover:shadow-md transition-shadow">
            <div className="size-12 rounded-2xl bg-orange-100 text-[#fd4621] flex items-center justify-center">
              <Compass className="size-6" />
            </div>
            <h3 className="text-lg font-bold text-[#131313]">Personalized Freedom</h3>
            <p className="text-xs sm:text-sm text-[#434343] leading-relaxed">
              Every day is your own. Spend extra time swimming under a waterfall, linger over coffee in the rice fields, or adjust stops on the fly without rigid group tour schedules.
            </p>
          </div>

          <div className="bg-[#f6f6f6] rounded-3xl p-7 sm:p-8 border border-[#e5e5e5] space-y-4 hover:shadow-md transition-shadow">
            <div className="size-12 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center">
              <ShieldCheck className="size-6" />
            </div>
            <h3 className="text-lg font-bold text-[#131313]">Certified Local Drivers</h3>
            <p className="text-xs sm:text-sm text-[#434343] leading-relaxed">
              Our drivers are certified professionals fluent in English. They know the shortcuts to avoid traffic, the best photo viewpoints, and secret local warungs.
            </p>
          </div>

          <div className="bg-[#f6f6f6] rounded-3xl p-7 sm:p-8 border border-[#e5e5e5] space-y-4 hover:shadow-md transition-shadow">
            <div className="size-12 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center">
              <HeartHandshake className="size-6" />
            </div>
            <h3 className="text-lg font-bold text-[#131313]">Zero Hidden Charges</h3>
            <p className="text-xs sm:text-sm text-[#434343] leading-relaxed">
              Transparent upfront pricing with fuel, parking, and taxes included. Pay cash directly to your driver on the day with free 24-hour cancellation flexibility.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
