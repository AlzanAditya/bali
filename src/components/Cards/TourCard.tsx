import React from "react";
import { Clock, Users, Star, ArrowUpRight } from "lucide-react";
import { TourItem } from "../../data/tours";
import { Badge } from "../UI/Badge";

interface TourCardProps {
  tour: TourItem;
  onNavigate?: (path: string) => void;
}

export const TourCard: React.FC<TourCardProps> = ({ tour, onNavigate }) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const targetPath = `/tours/${tour.slug}`;
    if (onNavigate) {
      onNavigate(targetPath);
    } else {
      window.history.pushState({}, "", targetPath);
      window.dispatchEvent(new PopStateEvent("popstate"));
    }
  };

  return (
    <div
      id={`tour-card-${tour.id}`}
      className="group relative bg-[#f6f6f6] rounded-2xl overflow-hidden border border-[#e5e5e5] hover:border-[#cccccc] transition-all duration-300 flex flex-col justify-between hover:shadow-lg"
    >
      {/* Image Container with Zoom */}
      <div className="relative aspect-4/3 overflow-hidden bg-gray-200">
        <img
          src={tour.coverImage}
          alt={tour.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          loading="lazy"
        />
        
        {/* Floating Category Badge */}
        <div className="absolute top-3.5 left-3.5 z-10">
          <Badge variant="white">{tour.categoryLabel}</Badge>
        </div>

        {/* Floating Price Tag */}
        <div className="absolute bottom-3.5 right-3.5 z-10 bg-[#131313]/85 backdrop-blur-md px-3 py-1 rounded-full text-white text-xs font-semibold">
          From <span className="text-[#fd4621] font-bold text-sm">${tour.priceFrom}</span> / pax
        </div>
      </div>

      {/* Content Container */}
      <div className="p-5 sm:p-6 flex flex-col flex-grow justify-between gap-4">
        <div className="space-y-2">
          {/* Metadata badges: Duration & Type */}
          <div className="flex items-center gap-3 text-xs text-[#929090] font-medium">
            <span className="flex items-center gap-1">
              <Clock className="size-3.5 text-[#fd4621]" />
              {tour.duration}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Users className="size-3.5 text-[#fd4621]" />
              {tour.groupType}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-lg font-bold text-[#131313] group-hover:text-[#fd4621] transition-colors leading-snug line-clamp-2">
            <a href={`/tours/${tour.slug}`} onClick={handleClick}>
              {tour.title}
            </a>
          </h3>

          {/* Excerpt */}
          <p className="text-xs sm:text-sm text-[#434343] line-clamp-2 leading-relaxed">
            {tour.overview}
          </p>
        </div>

        {/* Bottom bar with Rating & View Details button */}
        <div className="pt-3 border-t border-[#e5e5e5] flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-xs font-semibold text-[#131313]">
            <Star className="size-3.5 fill-amber-400 text-amber-400" />
            <span>{tour.rating}</span>
            <span className="text-[#929090] font-normal">({tour.reviewsCount})</span>
          </div>

          <a
            href={`/tours/${tour.slug}`}
            onClick={handleClick}
            className="inline-flex items-center gap-1 text-xs font-bold text-[#131313] group-hover:text-[#fd4621] transition-colors"
          >
            <span>View Details</span>
            <span className="p-1 rounded-full bg-[#131313] text-white group-hover:bg-[#fd4621] transition-colors">
              <ArrowUpRight className="size-3" />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};
