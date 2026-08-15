import React, { useEffect, useMemo } from "react";
import { Calendar, Clock, ArrowUpRight } from "lucide-react";
import { blogPosts, BlogPost } from "../data/blogs";
import { initSubpageAnimations } from "../utils/animations";

interface BlogDetailPageProps {
  slug: string;
  onNavigate?: (path: string) => void;
}

export const BlogDetailPage: React.FC<BlogDetailPageProps> = ({ slug, onNavigate }) => {
  // Normalize incoming slug (remove .html, leading/trailing slashes, decode uri)
  const cleanSlug = useMemo(() => {
    if (!slug) return "";
    let s = decodeURIComponent(slug).trim().toLowerCase();
    s = s.replace(/^\/+|\/+$/g, "");
    s = s.replace(/\.html$/i, "");
    s = s.replace(/^blogs\//i, "");
    s = s.replace(/^blog\//i, "");
    return s;
  }, [slug]);

  // Match blog from data by slug or fallback to closest match
  const blog: BlogPost = useMemo(() => {
    const found = blogPosts.find(
      (b) => b.slug.toLowerCase() === cleanSlug || cleanSlug.includes(b.slug.toLowerCase()) || b.slug.toLowerCase().includes(cleanSlug)
    );
    return found || blogPosts[0];
  }, [cleanSlug]);

  useEffect(() => {
    const cleanup = initSubpageAnimations();
    return () => {
      if (cleanup) cleanup();
    };
  }, [cleanSlug, blog]);

  // Get other recent posts for the sidebar (up to 3 items)
  const recentPosts = useMemo(() => {
    return blogPosts.filter((b) => b.slug !== blog.slug).slice(0, 3);
  }, [blog]);

  const handleLinkClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(href);
    } else {
      window.history.pushState({}, "", href);
      window.dispatchEvent(new PopStateEvent("popstate"));
    }
  };

  // Truncate title for breadcrumb
  const shortTitle = blog.title.length > 28 ? blog.title.slice(0, 28) + "..." : blog.title;

  return (
    <div id="blog-detail-view" className="w-full">
      {/* 1. HERO BANNER - SAMA PERSIS DENGAN REFERENCE (#blog-show) */}
      <section
        id="blog-show"
        className="relative min-h-[60dvh] md:min-h-[45dvh] lg:min-h-[68dvh] 2xl:min-h-[52dvh] 2xl:max-h-[52dvh] flex items-end 2xl:container mx-auto"
      >
        <div className="absolute overflow-hidden inset-0 lg:inset-5 lg:top-4 lg:rounded-3xl 2xl:inset-x-0 lg:bottom-auto lg:h-[68dvh] 2xl:max-h-[50dvh]">
          <div className="gsap-headline-overlay absolute z-10 h-full w-full lg:rounded-3xl bg-[#131313]/50 lg:bg-transparent lg:bg-gradient-to-b from-0% from-[#131313]/40 via-40% via-[#131313]/0 to-80% to-[#131313]/80 lg:to-[#131313]/70"></div>
          <img
            src={blog.coverImage}
            alt={blog.title}
            fetchPriority="high"
            decoding="async"
            className="gsap-headline-bg absolute inset-0 w-full h-full object-cover lg:rounded-3xl"
          />
        </div>

        <div className="px-5 md:px-12 lg:px-20 2xl:px-30 pb-12 2xl:pb-16 relative z-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 items-end">
            <div className="col-span-1 lg:col-span-7">
              {/* Category Badge */}
              <div className="gsap-headline-badge flex items-center gap-2 w-fit bg-white border border-[#E5E5E5] rounded-full px-2 pr-3 py-1.5 md:px-2.5 md:py-2 mb-4 md:mb-5 lg:mb-6">
                <div className="size-2 md:size-2.5 bg-[#FD4621] rounded-full"></div>
                <strong className="font-medium text-xs md:text-sm lg:text-base text-[#131313]">
                  {blog.category}
                </strong>
              </div>

              {/* Title */}
              <h1 className="gsap-headline-title text-3xl md:text-4xl lg:text-[50px] w-full mb-4 lg:mb-6 font-semibold text-white leading-snug lg:leading-[1.2]">
                {blog.title}
              </h1>

              {/* Metadata row */}
              <div className="flex flex-wrap items-center gap-4 md:gap-6 lg:gap-8">
                <div className="gsap-headline-text flex items-center gap-1.5 md:gap-2 text-white">
                  <Clock className="text-[#FD4621] size-5 md:size-6" />
                  <span className="font-medium text-sm md:text-base">{blog.readTime}</span>
                </div>
                <div className="gsap-headline-text flex items-center gap-1.5 md:gap-2 text-white">
                  <Calendar className="text-[#FD4621] size-5 md:size-6" />
                  <span className="font-medium text-sm md:text-base">{blog.publishedDate}</span>
                </div>
              </div>
            </div>

            {/* Breadcrumb right side */}
            <div className="col-span-1 lg:col-span-5 flex justify-start lg:justify-end">
              <div className="gsap-headline-text flex flex-wrap items-center gap-1.5 md:gap-2 text-white/90 font-medium text-xs md:text-sm lg:text-base">
                <a
                  href="/blogs"
                  onClick={(e) => handleLinkClick(e, "/blogs")}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Blog & Article
                </a>
                <span>/</span>
                <span className="text-white">{shortTitle}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. BLOG CONTENT & SIDEBAR RECENT POSTS (#blog-detail) */}
      <section
        id="blog-detail"
        className="2xl:container mx-auto px-5 md:px-12 lg:px-20 2xl:px-30 py-12 md:py-16 lg:py-20"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-10">
          {/* Main Article Content */}
          <div className="lg:col-span-6 gsap-section-about">
            <article className="blog-content prose-custom text-[#131313] leading-relaxed text-sm md:text-[0.9375rem] space-y-5">
              <h1 className="text-2xl md:text-3xl font-semibold text-[#131313] mb-4">
                {blog.title}
              </h1>

              {blog.intro && (
                <p className="text-[#131313]/90 leading-relaxed text-base">
                  {blog.intro}
                </p>
              )}

              {blog.sections.map((sec, idx) => (
                <div key={idx} className="space-y-3 pt-2">
                  {sec.heading && (
                    <h2 className="text-lg md:text-xl font-semibold text-[#131313] pt-4">
                      {sec.heading}
                    </h2>
                  )}
                  {sec.content.map((p, pIdx) => (
                    <p key={pIdx} className="text-[#131313]/85 leading-relaxed">
                      {p}
                    </p>
                  ))}
                </div>
              ))}
            </article>
          </div>

          {/* Sidebar Recent Posts */}
          <div className="lg:col-span-6 gsap-section-features">
            <div className="sticky top-28 space-y-6">
              <h2 className="text-xl md:text-2xl font-semibold text-[#131313]">
                Recent Post
              </h2>

              <div className="flex flex-col gap-4">
                {recentPosts.map((rBlog) => (
                  <div
                    key={rBlog.slug}
                    className="flex gap-4 md:gap-5 lg:gap-6 items-center bg-[#F8F9FA] p-4 md:p-5 lg:p-6 rounded-2xl border border-[#E5E5E5]/60"
                  >
                    <img
                      src={rBlog.coverImage}
                      alt={rBlog.title}
                      className="rounded-xl lg:rounded-2xl hidden md:block md:size-32 lg:size-40 lg:h-40 object-cover shrink-0"
                      loading="lazy"
                    />

                    <div className="flex flex-col h-full justify-between w-full">
                      <div className="mb-3 lg:mb-4.5 grow">
                        <h3 className="text-base lg:text-lg font-semibold mb-1.5 lg:mb-2 line-clamp-2 text-[#131313]">
                          <a
                            href={`/blogs/${rBlog.slug}`}
                            onClick={(e) => handleLinkClick(e, `/blogs/${rBlog.slug}`)}
                            className="hover:text-[#FD4621] transition-colors cursor-pointer"
                          >
                            {rBlog.title}
                          </a>
                        </h3>
                        <p className="text-xs lg:text-sm line-clamp-2 text-[#131313]/80 leading-relaxed">
                          {rBlog.excerpt}
                        </p>
                      </div>

                      <div className="flex flex-col-reverse md:flex-row gap-4 md:gap-0 justify-between md:items-center mt-auto">
                        <a
                          href={`/blogs/${rBlog.slug}`}
                          onClick={(e) => handleLinkClick(e, `/blogs/${rBlog.slug}`)}
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
                          {rBlog.publishedDate}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
