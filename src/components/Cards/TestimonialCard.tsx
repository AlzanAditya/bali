import React from "react";
import { Star, Quote } from "lucide-react";
import { Testimonial } from "../../data/siteConfig";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div
      id={`testimonial-card-${testimonial.id}`}
      className="bg-[#f6f6f6] rounded-2xl p-6 sm:p-7 border border-[#e5e5e5] flex flex-col justify-between gap-5 hover:shadow-md transition-shadow"
    >
      <div className="space-y-3">
        {/* Rating Stars & Quote Icon */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            {[...Array(testimonial.rating)].map((_, i) => (
              <Star key={i} className="size-4 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <Quote className="size-5 text-[#cccccc]" />
        </div>

        {/* Title */}
        <h4 className="text-base font-bold text-[#131313]">
          "{testimonial.title}"
        </h4>

        {/* Comment */}
        <p className="text-xs sm:text-sm text-[#434343] leading-relaxed">
          {testimonial.comment}
        </p>
      </div>

      {/* Author Details */}
      <div className="pt-4 border-t border-[#e5e5e5] flex items-center justify-between">
        <div>
          <h5 className="text-sm font-bold text-[#131313]">{testimonial.name}</h5>
          <span className="text-xs text-[#929090]">{testimonial.country}</span>
        </div>
        <span className="text-[11px] text-[#929090] bg-white px-2.5 py-1 rounded-full border border-[#e5e5e5]">
          {testimonial.date}
        </span>
      </div>
    </div>
  );
};
