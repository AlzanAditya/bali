import React from "react";
import { X, Users, Briefcase, CheckCircle2, MessageCircle, ShieldCheck, Fuel, Shield, Wrench } from "lucide-react";
import { VehicleItem } from "../../data/transport";
import { siteConfig } from "../../data/siteConfig";

interface VehicleModalProps {
  vehicle: VehicleItem | null;
  onClose: () => void;
}

export const VehicleModal: React.FC<VehicleModalProps> = ({ vehicle, onClose }) => {
  if (!vehicle) return null;

  const handleBookRate = (rateName: string, price: number) => {
    const message = `Hello Bali Bagus Journey! 👋
I would like to book the *${vehicle.name}* for:
🚗 *Service:* ${rateName} ($${price} USD)
👥 *Capacity:* ${vehicle.passengers} Pax Max
🧳 *Luggage:* ${vehicle.luggage} Bags Max

Please confirm driver availability!`;

    const waUrl = `${siteConfig.whatsappUrl}?text=${encodeURIComponent(message)}`;
    window.open(waUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      id="vehicle-pricing-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in"
    >
      <div
        className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl border border-gray-100 relative space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-[#f6f6f6] hover:bg-[#e5e5e5] text-[#131313] transition-colors"
          aria-label="Close modal"
        >
          <X className="size-5" />
        </button>

        {/* Header with Title & Badges */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#fd4621] bg-orange-50 px-2.5 py-1 rounded-full border border-orange-200">
              {vehicle.categoryLabel}
            </span>
            <span className="text-xs text-[#929090] font-medium flex items-center gap-1">
              <Users className="size-3.5" /> {vehicle.passengers} Seats
            </span>
            <span className="text-xs text-[#929090] font-medium flex items-center gap-1">
              <Briefcase className="size-3.5" /> {vehicle.luggage} Bags
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#131313]">
            {vehicle.name}
          </h2>
          <p className="text-xs sm:text-sm text-[#434343] leading-relaxed">
            {vehicle.description}
          </p>
        </div>

        {/* Photo */}
        <div className="rounded-2xl overflow-hidden aspect-16/9 bg-gray-100 border border-[#e5e5e5]">
          <img
            src={vehicle.coverImage}
            alt={vehicle.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Pricing Options Cards */}
        <div className="space-y-3">
          <h3 className="text-base font-bold text-[#131313]">Transparent Service Rates</h3>
          <div className="grid grid-cols-1 gap-3">
            {vehicle.pricingRates.map((rate, idx) => (
              <div
                key={idx}
                className="bg-[#f6f6f6] rounded-2xl p-4 sm:p-5 border border-[#e5e5e5] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <h4 className="font-bold text-[#131313] text-sm sm:text-base">{rate.service}</h4>
                    <span className="text-[11px] bg-white px-2 py-0.5 rounded-full border border-[#cccccc] font-medium text-[#434343]">
                      {rate.duration}
                    </span>
                  </div>
                  <p className="text-xs text-[#434343]">{rate.description}</p>
                </div>

                <div className="flex items-center gap-3 shrink-0 self-end sm:self-center">
                  <div className="text-right">
                    <span className="text-2xl font-black text-[#fd4621]">${rate.price}</span>
                    <span className="text-[10px] text-[#929090] block">USD All-in</span>
                  </div>
                  <button
                    onClick={() => handleBookRate(rate.service, rate.price)}
                    className="flex items-center gap-1.5 px-4 py-2 bg-[#131313] hover:bg-[#fd4621] text-white text-xs font-bold rounded-full transition-colors"
                  >
                    <MessageCircle className="size-3.5 fill-white" />
                    <span>Inquire</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Inclusions */}
        <div className="bg-emerald-50 rounded-2xl p-4 border border-emerald-200 text-xs text-emerald-950 space-y-2">
          <div className="font-bold flex items-center gap-1.5 text-emerald-800">
            <ShieldCheck className="size-4" /> All Rentals Include:
          </div>
          <p className="leading-relaxed">
            Private vehicle, certified English-speaking local Balinese driver, air conditioning, unlimited fuel for scheduled routes, parking fees, highway tolls, and clean complimentary chilled mineral water.
          </p>
        </div>
      </div>
    </div>
  );
};
