import React, { useState } from "react";
import { Calendar, Users, MapPin, MessageCircle, ShieldCheck, Check, Sparkles } from "lucide-react";
import { TourItem } from "../../data/tours";
import { siteConfig } from "../../data/siteConfig";
import { AnimatedButton } from "../UI/AnimatedButton";

interface TourBookingBoxProps {
  tour: TourItem;
}

export const TourBookingBox: React.FC<TourBookingBoxProps> = ({ tour }) => {
  const [travelDate, setTravelDate] = useState(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split("T")[0];
  });
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [pickupHotel, setPickupHotel] = useState("");
  const [specialRequests, setSpecialRequests] = useState("");

  // Calculate matching price tier based on total pax (or adult count)
  const totalPax = adults + children;
  
  const matchingTier = tour.pricingTiers.find((tier) => {
    if (tier.max_people === null) {
      return totalPax >= tier.min_people;
    }
    return totalPax >= tier.min_people && totalPax <= tier.max_people;
  }) || tour.pricingTiers[tour.pricingTiers.length - 1] || { adult_price: tour.priceFrom.toString(), child_price: "0" };

  const adultPriceNumber = parseFloat(matchingTier.adult_price) || tour.priceFrom;
  const childPriceNumber = parseFloat(matchingTier.child_price) || (adultPriceNumber * 0.7);

  const totalPrice = (adults * adultPriceNumber) + (children * childPriceNumber);

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hello Bali Bagus Journey! 👋
I would like to book the following tour:
📍 *Tour:* ${tour.title}
📅 *Date:* ${travelDate}
👥 *Travelers:* ${adults} Adults${children > 0 ? `, ${children} Children` : ""} (Total ${totalPax} Pax)
🏨 *Pickup Location:* ${pickupHotel || "To be provided"}
💰 *Calculated Price:* $${totalPrice.toFixed(0)} USD (${matchingTier.description || `$${adultPriceNumber}/pax`})
${specialRequests ? `📝 *Special Request:* ${specialRequests}` : ""}

Please confirm booking availability!`;

    const waUrl = `${siteConfig.whatsappUrl}?text=${encodeURIComponent(message)}`;
    window.open(waUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      id="tour-booking-box"
      className="bg-white rounded-3xl p-6 sm:p-7 border border-[#e5e5e5] shadow-xl sticky top-24 space-y-6"
    >
      {/* Price Header */}
      <div className="flex items-baseline justify-between border-b border-[#e5e5e5] pb-5">
        <div>
          <span className="text-xs text-[#929090] uppercase tracking-wider font-semibold block">
            Starting Price
          </span>
          <div className="flex items-baseline gap-1">
            <span className="text-3xl font-extrabold text-[#fd4621]">${adultPriceNumber}</span>
            <span className="text-xs text-[#434343] font-medium">/ person</span>
          </div>
        </div>
        <div className="text-right">
          <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
            <Check className="size-3" /> Best Rate Guaranteed
          </span>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleBookingSubmit} className="space-y-4">
        {/* Date Selector */}
        <div>
          <label className="block text-xs font-semibold text-[#131313] mb-1.5 flex items-center gap-1.5">
            <Calendar className="size-3.5 text-[#fd4621]" />
            <span>Select Tour Date</span>
          </label>
          <input
            type="date"
            required
            value={travelDate}
            min={new Date().toISOString().split("T")[0]}
            onChange={(e) => setTravelDate(e.target.value)}
            className="w-full bg-[#f6f6f6] border border-[#e5e5e5] rounded-xl px-4 py-2.5 text-sm font-semibold text-[#131313] focus:ring-2 focus:ring-[#fd4621] cursor-pointer"
          />
        </div>

        {/* Travelers Count */}
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-xs font-semibold text-[#131313] mb-1.5">
              Adults (12+)
            </label>
            <div className="flex items-center bg-[#f6f6f6] border border-[#e5e5e5] rounded-xl px-2 py-1.5 justify-between">
              <button
                type="button"
                onClick={() => setAdults(Math.max(1, adults - 1))}
                className="size-7 rounded-lg bg-white text-[#131313] font-bold shadow-xs hover:bg-gray-100 flex items-center justify-center"
              >
                -
              </button>
              <span className="text-sm font-bold">{adults}</span>
              <button
                type="button"
                onClick={() => setAdults(adults + 1)}
                className="size-7 rounded-lg bg-white text-[#131313] font-bold shadow-xs hover:bg-gray-100 flex items-center justify-center"
              >
                +
              </button>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#131313] mb-1.5">
              Children (3-11)
            </label>
            <div className="flex items-center bg-[#f6f6f6] border border-[#e5e5e5] rounded-xl px-2 py-1.5 justify-between">
              <button
                type="button"
                onClick={() => setChildren(Math.max(0, children - 1))}
                className="size-7 rounded-lg bg-white text-[#131313] font-bold shadow-xs hover:bg-gray-100 flex items-center justify-center"
              >
                -
              </button>
              <span className="text-sm font-bold">{children}</span>
              <button
                type="button"
                onClick={() => setChildren(children + 1)}
                className="size-7 rounded-lg bg-white text-[#131313] font-bold shadow-xs hover:bg-gray-100 flex items-center justify-center"
              >
                +
              </button>
            </div>
          </div>
        </div>

        {/* Hotel Pickup Location */}
        <div>
          <label className="block text-xs font-semibold text-[#131313] mb-1.5 flex items-center gap-1.5">
            <MapPin className="size-3.5 text-[#fd4621]" />
            <span>Hotel / Villa Pickup Location</span>
          </label>
          <input
            type="text"
            placeholder="e.g. Maya Sanur / W Seminyak / Villa Ubud"
            value={pickupHotel}
            onChange={(e) => setPickupHotel(e.target.value)}
            className="w-full bg-[#f6f6f6] border border-[#e5e5e5] rounded-xl px-4 py-2.5 text-xs sm:text-sm text-[#131313] focus:ring-2 focus:ring-[#fd4621]"
          />
        </div>

        {/* Total Price Calculation Summary */}
        <div className="bg-[#f6f6f6] rounded-2xl p-4 border border-[#e5e5e5] space-y-2">
          <div className="flex justify-between text-xs text-[#434343]">
            <span>{adults} × Adult (${adultPriceNumber})</span>
            <span>${(adults * adultPriceNumber).toFixed(0)}</span>
          </div>
          {children > 0 && (
            <div className="flex justify-between text-xs text-[#434343]">
              <span>{children} × Child (${childPriceNumber.toFixed(0)})</span>
              <span>${(children * childPriceNumber).toFixed(0)}</span>
            </div>
          )}
          <div className="pt-2 border-t border-[#e5e5e5] flex justify-between items-baseline font-bold text-[#131313]">
            <span>Total Estimated Price:</span>
            <span className="text-xl text-[#fd4621]">${totalPrice.toFixed(0)} USD</span>
          </div>
        </div>

        {/* Instant WhatsApp Checkout */}
        <button
          id="book-tour-wa-button"
          type="submit"
          className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-3.5 px-6 rounded-full text-sm shadow-md hover:shadow-lg transition-all duration-300 transform active:scale-98"
        >
          <MessageCircle className="size-5 fill-white" />
          <span>Book via WhatsApp</span>
        </button>

        <p className="text-[11px] text-center text-[#929090] flex items-center justify-center gap-1">
          <ShieldCheck className="size-3.5 text-emerald-600" />
          <span>Pay to driver on the day • Free cancellation up to 24 hrs</span>
        </p>
      </form>
    </div>
  );
};
