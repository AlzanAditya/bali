import React, { useState, useEffect } from "react";
import { X, ZoomIn } from "lucide-react";
import { initSubpageAnimations } from "../utils/animations";

interface GalleryPageProps {
  onNavigate?: (path: string) => void;
}

interface GalleryItem {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
}

export const GalleryPage: React.FC<GalleryPageProps> = () => {
  const [activeImage, setActiveImage] = useState<GalleryItem | null>(null);

  useEffect(() => {
    const cleanup = initSubpageAnimations();
    return () => {
      if (cleanup) cleanup();
    };
  }, []);

  const grid1Items: GalleryItem[] = [
    {
      src: "assets/galleries/ttoubtl9ndmw21ny1c3q.webp",
      alt: "Beautiful Balinese scenery with mountains",
      className: "md:row-span-2",
      imgClassName: "h-64 md:h-full",
    },
    {
      src: "assets/galleries/bdk2uvvu6stlowu9fhjc.webp",
      alt: "Travelers enjoying private tour service in Bali",
      imgClassName: "h-48 md:h-full",
    },
    {
      src: "assets/galleries/dkuokdg5xh0xpytwno7v.webp",
      alt: "Scenic view of a tropical destination",
      imgClassName: "h-48 md:h-full",
    },
    {
      src: "assets/galleries/xkcqpgpatfpmvfixwgl9.webp",
      alt: "Group photo of happy tourists in Bali",
      className: "md:col-span-2",
      imgClassName: "h-48 md:h-[390px]",
    },
  ];

  const grid2Items: GalleryItem[] = [
    {
      src: "assets/galleries/tpaoqgzfbkrfpwntmtje.webp",
      alt: "Traditional Balinese architecture",
      imgClassName: "h-48 md:h-full",
    },
    {
      src: "assets/galleries/uwvcv1a5gxmyr9fiphlm.webp",
      alt: "Lush green rice terraces in Ubud, Bali",
      imgClassName: "h-48 md:h-full",
    },
    {
      src: "assets/galleries/sotlfso1va1cge2szlmn.webp",
      alt: "Tourists posing near Balinese temple gateway",
      className: "md:row-span-2",
      imgClassName: "h-64 md:h-full",
    },
    {
      src: "assets/galleries/erpcsospbml5v1sl6xzs.webp",
      alt: "Comfortable transport vehicle for private tour",
      className: "md:col-span-2",
      imgClassName: "h-48 md:h-[390px]",
    },
  ];

  return (
    <div id="gallery-page" className="w-full">
      {/* 1. HEADLINE HERO SECTION */}
      <section
        id="headline"
        className="relative min-h-[60dvh] md:min-h-[45dvh] lg:min-h-[68dvh] 2xl:min-h-[52dvh] 2xl:max-h-[52dvh] flex items-end 2xl:container mx-auto"
      >
        <div className="absolute overflow-hidden inset-0 lg:inset-5 lg:top-4 lg:rounded-3xl 2xl:inset-x-0 lg:bottom-auto lg:h-[68dvh] 2xl:max-h-[50dvh]">
          <div className="gsap-headline-overlay absolute z-10 h-full w-full lg:rounded-3xl bg-[#131313]/50 lg:bg-transparent lg:bg-gradient-to-b from-0% from-[#131313]/40 via-40% via-[#131313]/0 to-80% to-[#131313]/80 lg:to-[#131313]/70"></div>
          <img
            src="assets/galleries/ttoubtl9ndmw21ny1c3q.webp"
            alt="Scenic view of Bali, representing Bali Bagus Journey gallery"
            fetchPriority="high"
            decoding="async"
            className="gsap-headline-bg absolute inset-0 w-full h-full object-cover lg:rounded-3xl"
          />
        </div>

        <div className="px-5 md:px-12 lg:px-20 2xl:px-36 pb-12 md:pb-20 relative z-20 w-full">
          <div className="text-center flex flex-col items-center">
            <div className="gsap-headline-badge flex items-center gap-2 w-fit bg-white border border-[#E5E5E5] rounded-full px-2.5 pr-3 py-2 mb-5 lg:mb-6">
              <div className="size-2.5 bg-[#FD4621] rounded-full"></div>
              <strong className="font-medium text-sm md:text-base text-[#131313]">
                Journey Gallery
              </strong>
            </div>
            <h1 className="gsap-headline-title text-3xl md:text-5xl lg:text-[52px] w-full mb-4 font-semibold text-white leading-snug lg:leading-[1.2]">
              Where Every Journey <br /> Becomes a Memory
            </h1>
            <p className="gsap-headline-text text-sm text-white w-full md:w-[72%] lg:w-[40%] leading-relaxed">
              Every photo captures the beauty of Bali, the comfort of our services, and the unforgettable memories created with travelers from around the world.
            </p>
          </div>
        </div>
      </section>

      {/* 2. PICTURE GRID SECTION */}
      <section
        id="picture"
        className="2xl:container mx-auto px-5 md:px-12 lg:px-20 2xl:px-30 py-12 md:py-16 lg:py-20"
      >
        {/* Grid 1 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 mb-4 md:mb-5">
          {grid1Items.map((item, idx) => (
            <div
              key={`grid1-${idx}`}
              onClick={() => setActiveImage(item)}
              className={`gsap-gallery-item overflow-hidden rounded-2xl cursor-pointer group relative ${
                item.className || ""
              }`}
            >
              <img
                src={item.src}
                alt={item.alt}
                className={`w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105 ${
                  item.imgClassName || "h-48 md:h-full"
                }`}
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="bg-white/90 text-[#131313] p-2.5 rounded-full shadow-lg">
                  <ZoomIn className="size-5" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Grid 2 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {grid2Items.map((item, idx) => (
            <div
              key={`grid2-${idx}`}
              onClick={() => setActiveImage(item)}
              className={`gsap-gallery-item overflow-hidden rounded-2xl cursor-pointer group relative ${
                item.className || ""
              }`}
            >
              <img
                src={item.src}
                alt={item.alt}
                className={`w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105 ${
                  item.imgClassName || "h-48 md:h-full"
                }`}
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="bg-white/90 text-[#131313] p-2.5 rounded-full shadow-lg">
                  <ZoomIn className="size-5" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* LIGHTBOX MODAL */}
      {activeImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setActiveImage(null)}
        >
          <button
            onClick={() => setActiveImage(null)}
            className="absolute top-6 right-6 text-white bg-white/20 hover:bg-white/40 p-2 rounded-full transition-colors cursor-pointer"
          >
            <X className="size-6" />
          </button>
          <div
            className="max-w-5xl max-h-[90vh] overflow-hidden rounded-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={activeImage.src}
              alt={activeImage.alt}
              className="w-full h-auto max-h-[85vh] object-contain rounded-2xl"
            />
            <p className="text-center text-white/90 text-sm mt-3">
              {activeImage.alt}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
