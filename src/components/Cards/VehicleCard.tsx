import React from "react";
import { Users, Briefcase, CheckCircle2, MessageCircle, ArrowUpRight } from "lucide-react";
import { VehicleItem } from "../../data/transport";
import { siteConfig } from "../../data/siteConfig";

interface VehicleCardProps {
  vehicle: VehicleItem;
  onSelect?: (vehicle: VehicleItem) => void;
  onNavigate?: (path: string) => void;
}

export const VehicleCard: React.FC<VehicleCardProps> = ({
  vehicle,
  onSelect,
  onNavigate
}) => {
  const whatsappBookingUrl = `${siteConfig.whatsappUrl}?text=${encodeURIComponent(
    `Hello Bali Bagus Journey, I would like to book or inquire about the ${vehicle.name} (${vehicle.categoryLabel}) for private transport.`
  )}`;

  const handleDetailsClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(`/transport/${vehicle.slug}`);
    } else {
      window.history.pushState({}, "", `/transport/${vehicle.slug}`);
      window.dispatchEvent(new PopStateEvent("popstate"));
    }
  };

  return (
    <div
      id={`vehicle-card-${vehicle.id}`}
      className="group bg-[#f6f6f6] rounded-2xl overflow-hidden border border-[#e5e5e5] hover:border-[#cccccc] transition-all duration-300 flex flex-col justify-between hover:shadow-lg"
    >
      {/* Image container */}
      <div 
        onClick={handleDetailsClick}
        className="relative aspect-16/10 bg-gray-100 overflow-hidden cursor-pointer"
      >
        <img
          src={vehicle.coverImage}
          alt={vehicle.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />

        {/* Category Badge */}
        <div className="absolute top-3.5 left-3.5 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-[#131313] shadow-sm">
          {vehicle.categoryLabel}
        </div>

        {/* Daily Rate Tag */}
        <div className="absolute bottom-3.5 right-3.5 bg-[#131313]/90 backdrop-blur-md px-3 py-1.5 rounded-full text-white text-xs font-semibold">
          <span className="text-[#fd4621] font-bold text-base">${vehicle.pricePerDay}</span> / 10-12 hrs
        </div>
      </div>

      {/* Content */}
      <div className="p-5 sm:p-6 flex flex-col flex-grow justify-between gap-5">
        <div className="space-y-3">
          {/* Vehicle Name & Capacity Badges */}
          <div>
            <h3 
              onClick={handleDetailsClick}
              className="text-xl font-bold text-[#131313] group-hover:text-[#fd4621] transition-colors cursor-pointer"
            >
              {vehicle.name}
            </h3>
            <div className="flex items-center gap-3 mt-2 text-xs text-[#434343] font-medium">
              <span className="inline-flex items-center gap-1.5 bg-white px-2.5 py-1 rounded-lg border border-[#e5e5e5]">
                <Users className="size-3.5 text-[#fd4621]" />
                <span>{vehicle.passengers} Pax Max</span>
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white px-2.5 py-1 rounded-lg border border-[#e5e5e5]">
                <Briefcase className="size-3.5 text-[#fd4621]" />
                <span>{vehicle.luggage} Bags</span>
              </span>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-[#434343] line-clamp-2 leading-relaxed">
            {vehicle.description}
          </p>

          {/* Key Inclusions bullets */}
          <ul className="space-y-1.5 pt-1 text-xs text-[#434343]">
            {vehicle.features.slice(0, 3).map((feat, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <CheckCircle2 className="size-3.5 text-[#fd4621] shrink-0" />
                <span className="truncate">{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="pt-4 border-t border-[#e5e5e5] grid grid-cols-2 gap-2.5">
          <button
            onClick={handleDetailsClick}
            className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-full text-xs font-bold bg-white hover:bg-gray-100 text-[#131313] border border-[#cccccc] transition-colors cursor-pointer"
          >
            <span>Pricing & Rates</span>
            <ArrowUpRight className="size-3.5" />
          </button>

          <a
            href={whatsappBookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-full text-xs font-bold bg-[#131313] hover:bg-[#fd4621] text-white transition-colors"
          >
            <MessageCircle className="size-3.5 fill-white" />
            <span>Book Now</span>
          </a>
        </div>
      </div>
    </div>
  );
};
