import React, { useState } from "react";
import { X, ChevronLeft, ChevronRight, MapPin, Maximize2 } from "lucide-react";
import { galleryItems, galleryCategories, GalleryItem } from "../../data/gallery";

export const GalleryGrid: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems = selectedCategory === "all"
    ? galleryItems
    : galleryItems.filter((item) => item.category === selectedCategory);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  return (
    <div id="gallery-grid-container" className="space-y-8">
      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {galleryCategories.map((cat) => (
          <button
            key={cat.id}
            id={`gallery-filter-${cat.id}`}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
              selectedCategory === cat.id
                ? "bg-[#fd4621] text-white shadow-md"
                : "bg-[#f6f6f6] text-[#434343] hover:bg-[#e5e5e5] border border-[#e5e5e5]"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {filteredItems.map((item, index) => (
          <div
            key={item.id}
            id={`gallery-item-${item.id}`}
            onClick={() => openLightbox(index)}
            className="group relative aspect-4/3 rounded-2xl overflow-hidden bg-gray-100 border border-[#e5e5e5] cursor-pointer shadow-xs hover:shadow-xl transition-all duration-300"
          >
            <img
              src={item.src}
              alt={item.alt}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
              loading="lazy"
            />

            {/* Gradient Overlay on Hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-white">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <h4 className="font-bold text-sm sm:text-base">{item.title}</h4>
                  <p className="text-xs text-gray-300 flex items-center gap-1">
                    <MapPin className="size-3 text-[#fd4621]" />
                    <span>{item.location}</span>
                  </p>
                </div>
                <span className="p-2 rounded-full bg-white/20 backdrop-blur-md text-white">
                  <Maximize2 className="size-4" />
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Fullscreen Lightbox Modal */}
      {lightboxIndex !== null && (
        <div
          id="gallery-lightbox"
          onClick={closeLightbox}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 select-none animate-in fade-in"
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-5 right-5 z-10 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Close"
          >
            <X className="size-6" />
          </button>

          {/* Navigation Arrows */}
          <button
            onClick={prevImage}
            className="absolute left-4 sm:left-8 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft className="size-6 sm:size-8" />
          </button>

          <button
            onClick={nextImage}
            className="absolute right-4 sm:right-8 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Next image"
          >
            <ChevronRight className="size-6 sm:size-8" />
          </button>

          {/* Image & Caption */}
          <div
            className="max-w-4xl max-h-[85vh] flex flex-col items-center gap-3"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={filteredItems[lightboxIndex].src}
              alt={filteredItems[lightboxIndex].alt}
              className="max-w-full max-h-[75vh] object-contain rounded-xl shadow-2xl"
            />
            <div className="text-center text-white space-y-1">
              <h3 className="text-lg font-bold">{filteredItems[lightboxIndex].title}</h3>
              <p className="text-xs sm:text-sm text-gray-300 flex items-center justify-center gap-1">
                <MapPin className="size-3.5 text-[#fd4621]" />
                <span>{filteredItems[lightboxIndex].location}</span>
                <span className="mx-2">•</span>
                <span>{lightboxIndex + 1} / {filteredItems.length}</span>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
