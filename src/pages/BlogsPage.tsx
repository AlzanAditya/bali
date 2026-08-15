import React, { useState, useMemo, useEffect } from "react";
import { Calendar, ArrowUpRight, Compass, UtensilsCrossed, Lightbulb, LayoutGrid } from "lucide-react";
import { initSubpageAnimations, animateCategoryTransition } from "../utils/animations";

interface BlogsPageProps {
  onNavigate?: (path: string) => void;
}

export const BlogsPage: React.FC<BlogsPageProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    const cleanup = initSubpageAnimations();
    return () => {
      if (cleanup) cleanup();
    };
  }, []);

  const handleCategoryChange = (catId: string) => {
    setSelectedCategory(catId);
    animateCategoryTransition("#blogs-grid");
  };

  const categories = [
    {
      id: "all",
      name: "All Blog & Articles",
      icon: LayoutGrid,
    },
    {
      id: "things-to-do",
      name: "Things to Do",
      icon: Compass,
    },
    {
      id: "food-culture",
      name: "Food & Culture",
      icon: UtensilsCrossed,
    },
    {
      id: "travel-tips",
      name: "Travel Tips",
      icon: Lightbulb,
    },
  ];

  // Map each blog post with its exact category filter ID, cover image, and metadata matching blogs.html
  const allBlogs = useMemo(() => {
    return [
      {
        slug: "10-best-things-to-do-in-bali-for-first-time-visitors",
        categoryFilter: "things-to-do",
        title: "10 Best Things to Do in Bali for First-Time Visitors",
        excerpt:
          "Bali has a way of overwhelming first-time visitors in the best way possible. Between ancient temples, rice terrace views, world-class surf breaks, and a food scene that could keep you busy for weeks, narrowing down an itinerary can feel impossible. If this is your first trip to the Island of the Gods, here are ten experiences worth building your schedule around.",
        coverImage: "storage/blog-covers/01KZWE8G8XFBR2ZPVM5YM33MJ2.webp",
        date: "12 August 2026",
      },
      {
        slug: "bali-adventure-activities-from-volcano-trekking-to-white-water-rafting",
        categoryFilter: "things-to-do",
        title: "Bali Adventure Activities: From Volcano Trekking to White-Water Rafting",
        excerpt:
          "Beaches and temples get most of the attention, but Bali is also a genuinely good adventure destination. Volcanic terrain, fast-flowing rivers, and a coastline built for surfing and diving mean there's no shortage of ways to get your heart rate up. Here's a guide to the island's best adventure activities, and what to know before you book.",
        coverImage: "storage/blog-covers/01KZWE77NTAANHAVV4RNZT76NY.webp",
        date: "12 August 2026",
      },
      {
        slug: "a-food-lovers-guide-to-balinese-cuisine-must-try-dishes",
        categoryFilter: "food-culture",
        title: "A Food Lover's Guide to Balinese Cuisine: Must-Try Dishes",
        excerpt:
          "Balinese food doesn't always get the spotlight that Balinese temples and beaches do, but it deserves just as much attention. Built around fresh spices, coconut, and rice, the island's cuisine reflects both its Hindu religious traditions and its position along historic Southeast Asian trade routes. Here's what to look for on menus and warung boards.",
        coverImage: "storage/blog-covers/01KZWEB01DQ19A61YT5V0QAB06.webp",
        date: "12 August 2026",
      },
      {
        slug: "balis-sacred-traditions-temple-ceremonies-and-cultural-etiquette-for-travelers",
        categoryFilter: "food-culture",
        title: "Bali's Sacred Traditions: Temple Ceremonies and Cultural Etiquette for Travelers",
        excerpt:
          "Bali's culture is inseparable from its religion. Balinese Hinduism, distinct from Hinduism practiced elsewhere, shapes daily life on the island — from the small offerings placed on sidewalks each morning to the elaborate ceremonies that can shut down entire villages for a day. Understanding a bit of this before you visit makes the experience richer.",
        coverImage: "storage/blog-covers/01KZWECJZXTZ24M47WB9HBX2S1.webp",
        date: "12 August 2026",
      },
      {
        slug: "how-to-plan-your-first-trip-to-bali-a-complete-travel-guide",
        categoryFilter: "travel-tips",
        title: "How to Plan Your First Trip to Bali: A Complete Travel Guide",
        excerpt:
          "Bali is a manageable destination to plan for, but it's also easy to overbook, underestimate travel times between regions, or land without a clear sense of where to base yourself. Here's a step-by-step approach to putting together a first trip, from choosing seasons and visas to budgeting and choosing your bases.",
        coverImage: "storage/blog-covers/01KZWE8G8XFBR2ZPVM5YM33MJ2.webp",
        date: "12 August 2026",
      },
      {
        slug: "getting-around-bali-transportation-tips-for-stress-free-travel",
        categoryFilter: "travel-tips",
        title: "Getting Around Bali: Transportation Tips for Stress-Free Travel",
        excerpt:
          "Bali doesn't have a widespread public transit system, so figuring out how you'll get around is one of the more important planning decisions for your trip — arguably more important than picking which attractions to see, since it affects how much of your day is spent traveling versus actually doing things.",
        coverImage: "storage/blog-covers/01KZWE77NTAANHAVV4RNZT76NY.webp",
        date: "12 August 2026",
      },
    ];
  }, []);

  const filteredBlogs = useMemo(() => {
    if (selectedCategory === "all") return allBlogs;
    return allBlogs.filter((b) => b.categoryFilter === selectedCategory);
  }, [allBlogs, selectedCategory]);

  const handleLinkClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(href);
    } else {
      window.history.pushState({}, "", href);
      window.dispatchEvent(new PopStateEvent("popstate"));
    }
  };

  return (
    <div id="blogs-page" className="w-full">
      {/* 1. HEADLINE HERO SECTION */}
      <section
        id="headline"
        className="relative min-h-[60dvh] md:min-h-[45dvh] lg:min-h-[68dvh] 2xl:min-h-[52dvh] 2xl:max-h-[52dvh] flex items-end 2xl:container mx-auto"
      >
        <div className="absolute overflow-hidden inset-0 lg:inset-5 lg:top-4 lg:rounded-3xl 2xl:inset-x-0 lg:bottom-auto lg:h-[68dvh] 2xl:max-h-[50dvh]">
          <div className="gsap-headline-overlay absolute z-10 h-full w-full lg:rounded-3xl bg-[#131313]/50 lg:bg-transparent lg:bg-gradient-to-b from-0% from-[#131313]/40 via-40% via-[#131313]/0 to-80% to-[#131313]/80 lg:to-[#131313]/70"></div>
          <img
            src="assets/galleries/ttoubtl9ndmw21ny1c3q.webp"
            alt="Scenic view of Bali mountains and valleys, representing diverse Bali tour packages"
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
                Blog & Articles
              </strong>
            </div>
            <h1 className="gsap-headline-title text-3xl md:text-5xl lg:text-[52px] w-full mb-4 font-semibold text-white leading-snug lg:leading-[1.2]">
              Travel Guides & Stories
            </h1>
            <p className="gsap-headline-text text-sm text-white w-full md:w-[72%] lg:w-[32%] leading-relaxed">
              Discover destination guides, travel tips, local insights, and inspiration to help you experience the very best of Bali.
            </p>
          </div>
        </div>
      </section>

      {/* 2. BLOGS FILTER & GRID SECTION */}
      <section
        id="blogs-grid-section"
        className="2xl:container mx-auto px-5 md:px-12 lg:px-20 2xl:px-30 py-15 2xl:py-20"
      >
        <div className="flex flex-col items-center w-full mb-10">
          <h3 className="gsap-blogs-filter-heading text-lg md:text-xl font-semibold text-[#131313] mb-6">
            Filter Blog & Articles by:
          </h3>

          <div className="relative w-full max-w-full">
            <div className="filter-tabs w-full flex flex-nowrap md:flex-wrap items-center justify-start md:justify-center gap-2.5 md:gap-4 overflow-x-auto md:overflow-visible pb-2 md:pb-0 scrollbar-none">
              {categories.map((cat) => {
                const isSelected = selectedCategory === cat.id;
                const IconComponent = cat.icon;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => handleCategoryChange(cat.id)}
                    className={`gsap-blogs-filter-tab shrink-0 flex items-center gap-2 md:gap-3 border px-1.5 md:px-2 pr-4 md:pr-5 py-1.5 md:py-2 rounded-full transition-all duration-300 cursor-pointer ${
                      isSelected
                        ? "bg-[#131313] border-[#131313] text-white"
                        : "bg-white border-[#E5E5E5] text-[#131313] hover:bg-[#131313]/5"
                    }`}
                  >
                    <div className="bg-[#FD4621] size-7 md:size-8 rounded-full flex items-center justify-center text-white shrink-0">
                      <IconComponent className="size-3.5 md:size-4" />
                    </div>
                    <span className="text-xs md:text-sm font-semibold">
                      {cat.name}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Blogs Grid */}
        <div id="blogs-grid" className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-4.5">
          {filteredBlogs.map((blog) => (
            <div key={blog.slug} className="gsap-blog-card blog-item" data-category={blog.categoryFilter}>
              <div className="flex gap-4 md:gap-5 lg:gap-6 items-center bg-[#F8F9FA] p-4 md:p-5 lg:p-6 rounded-2xl border border-[#E5E5E5]/50 h-full">
                <img
                  src={blog.coverImage}
                  alt={blog.title}
                  className="rounded-xl lg:rounded-2xl hidden md:block md:size-32 lg:size-40 lg:h-40 object-cover shrink-0"
                  loading="lazy"
                />

                <div className="flex flex-col h-full justify-between w-full">
                  <div className="mb-3 lg:mb-4.5 grow">
                    <h3 className="text-base lg:text-lg font-semibold mb-1.5 lg:mb-2 line-clamp-2 text-[#131313]">
                      <a
                        href={`blogs/${blog.slug}.html`}
                        onClick={(e) => handleLinkClick(e, `/blogs/${blog.slug}.html`)}
                        className="hover:text-[#FD4621] transition-colors"
                      >
                        {blog.title}
                      </a>
                    </h3>
                    <p className="text-xs lg:text-sm line-clamp-2 text-[#131313]/80 leading-relaxed">
                      {blog.excerpt}
                    </p>
                  </div>

                  <div className="flex flex-col-reverse md:flex-row gap-4 md:gap-0 justify-between md:items-center mt-auto pt-2">
                    <a
                      href={`blogs/${blog.slug}.html`}
                      onClick={(e) => handleLinkClick(e, `/blogs/${blog.slug}.html`)}
                      className="group inline-flex items-center justify-center gap-3 font-semibold rounded-full text-xs lg:text-sm cursor-pointer transition-all duration-500 bg-white text-[#131313] hover:bg-white/90 pl-3 pr-1.5 py-1.5 lg:pl-4 lg:pr-2 lg:py-2 w-fit border border-[#E5E5E5]"
                    >
                      <div className="relative overflow-hidden flex items-center justify-center">
                        <span className="block transition-transform duration-500 group-hover:translate-y-[150%]">
                          Read Article
                        </span>
                        <span className="absolute block transition-transform duration-500 -translate-y-[150%] group-hover:translate-y-0">
                          Read Article
                        </span>
                      </div>
                      <span className="bg-[#FD4621] text-white p-1.5 rounded-full relative overflow-hidden flex items-center justify-center">
                        <ArrowUpRight className="size-3 lg:size-4 transition-transform duration-500 group-hover:translate-x-[150%] group-hover:-translate-y-[150%]" />
                        <ArrowUpRight className="absolute size-3 lg:size-4 transition-transform duration-500 -translate-x-[150%] translate-y-[150%] group-hover:translate-x-0 group-hover:translate-y-0" />
                      </span>
                    </a>

                    <div className="flex items-center gap-2 text-[#71717A] text-xs md:text-sm font-medium">
                      <Calendar className="size-4 md:size-5" />
                      {blog.date}
                    </div>
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
