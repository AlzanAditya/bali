import React, { useEffect } from "react";
import {
  Calendar,
  Clock,
  User,
  Tag,
  Lightbulb,
  ArrowLeft,
  Share2,
  Compass,
  MessageCircle
} from "lucide-react";
import { blogPosts, BlogPost } from "../data/blogs";
import { Breadcrumbs } from "../components/UI/Breadcrumbs";
import { BlogCard } from "../components/Cards/BlogCard";
import { siteConfig } from "../data/siteConfig";
import { initSubpageAnimations } from "../utils/animations";

interface BlogDetailPageProps {
  slug: string;
  onNavigate?: (path: string) => void;
}

export const BlogDetailPage: React.FC<BlogDetailPageProps> = ({ slug, onNavigate }) => {
  const blog = blogPosts.find((b) => b.slug === slug) || blogPosts[0];

  useEffect(() => {
    const cleanup = initSubpageAnimations();
    return () => {
      if (cleanup) cleanup();
    };
  }, [slug, blog]);

  const relatedPosts = blogPosts
    .filter((b) => b.id !== blog.id)
    .slice(0, 2);

  const handleLinkClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(href);
    } else {
      window.history.pushState({}, "", href);
      window.dispatchEvent(new PopStateEvent("popstate"));
    }
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: blog.title,
        text: blog.excerpt,
        url: window.location.href
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
    }
  };

  return (
    <div id="blog-detail-page" className="pt-28 pb-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      
      {/* Breadcrumbs */}
      <div className="flex items-center justify-between">
        <Breadcrumbs
          items={[
            { label: "Blogs", href: "/blogs" },
            { label: blog.title }
          ]}
          onNavigate={onNavigate}
        />
        <button
          onClick={(e) => handleLinkClick(e, "/blogs")}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#131313] hover:text-[#fd4621] transition-colors"
        >
          <ArrowLeft className="size-3.5" />
          <span>Back to blogs</span>
        </button>
      </div>

      {/* Article Header */}
      <header className="space-y-4">
        <span className="gsap-headline-badge bg-[#fd4621] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
          {blog.category}
        </span>

        <h1 className="gsap-headline-title text-2xl sm:text-4xl md:text-5xl font-black text-[#131313] tracking-tight leading-tight">
          {blog.title}
        </h1>

        <div className="gsap-headline-text flex flex-wrap items-center justify-between gap-4 pt-2 border-y border-[#e5e5e5] py-3 text-xs sm:text-sm text-[#929090]">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-[#131313] font-semibold">
              <User className="size-4 text-[#fd4621]" />
              {blog.author}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Calendar className="size-4 text-[#fd4621]" />
              {blog.publishedDate}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Clock className="size-4 text-[#fd4621]" />
              {blog.readTime}
            </span>
          </div>

          <button
            onClick={handleShare}
            className="flex items-center gap-1.5 text-xs font-semibold text-[#131313] hover:text-[#fd4621] transition-colors cursor-pointer"
          >
            <Share2 className="size-4" />
            <span>Share</span>
          </button>
        </div>
      </header>

      {/* Featured Cover Image */}
      <div className="relative aspect-16/9 rounded-3xl overflow-hidden bg-gray-100 border border-[#e5e5e5] shadow-sm">
        <img
          src={blog.coverImage}
          alt={blog.title}
          className="gsap-headline-bg w-full h-full object-cover"
        />
      </div>

      {/* Article Excerpt / Lead */}
      <div className="gsap-section-about p-5 sm:p-6 bg-[#f6f6f6] rounded-2xl border-l-4 border-[#fd4621] text-sm sm:text-base text-[#131313] font-medium leading-relaxed">
        <p className="gsap-about-content">{blog.excerpt}</p>
      </div>

      {/* Main Content Sections */}
      <div className="space-y-8 text-[#434343] text-sm sm:text-base leading-relaxed">
        {blog.sections.map((sec, idx) => (
          <section key={idx} className="gsap-section-about space-y-3">
            <h2 className="gsap-about-title text-xl sm:text-2xl font-bold text-[#131313] pt-2">
              {sec.heading}
            </h2>
            {sec.content.map((p, pIdx) => (
              <p key={pIdx} className="gsap-about-content leading-relaxed">
                {p}
              </p>
            ))}
          </section>
        ))}
      </div>

      {/* Planning Tips Callout */}
      {blog.planningTips && blog.planningTips.length > 0 && (
        <div className="gsap-section-features bg-amber-50 rounded-3xl p-6 sm:p-8 border border-amber-200 space-y-4">
          <div className="flex items-center gap-2 text-amber-900 font-bold text-base sm:text-lg">
            <Lightbulb className="size-5 text-amber-600" />
            <h3 className="gsap-features-title">Local Insider Planning Tips</h3>
          </div>
          <ul className="gsap-features-content space-y-2.5 text-xs sm:text-sm text-amber-950">
            {blog.planningTips.map((tip, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <span className="text-amber-600 font-bold text-base leading-none">•</span>
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Tags */}
      <div className="pt-6 border-t border-[#e5e5e5] flex flex-wrap items-center gap-2">
        <span className="text-xs font-bold text-[#131313] flex items-center gap-1 mr-2">
          <Tag className="size-3.5 text-[#fd4621]" /> Tags:
        </span>
        {blog.tags.map((tag, idx) => (
          <span
            key={idx}
            className="bg-[#f6f6f6] text-[#434343] px-3 py-1 rounded-full text-xs font-medium border border-[#e5e5e5]"
          >
            #{tag}
          </span>
        ))}
      </div>

      {/* Author & Tour Support Card */}
      <div className="bg-[#131313] text-white rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-1 text-center sm:text-left">
          <span className="text-xs text-[#fd4621] font-bold uppercase tracking-wider">Ready to Experience Bali?</span>
          <h3 className="text-lg sm:text-xl font-bold">Have questions about planning this route?</h3>
          <p className="text-xs text-gray-300">Our local Balinese team can customize your private driver itinerary today.</p>
        </div>

        <a
          href={siteConfig.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-3 px-5 rounded-full text-xs sm:text-sm transition-colors cursor-pointer"
        >
          <MessageCircle className="size-4 fill-white" />
          <span>Ask on WhatsApp</span>
        </a>
      </div>

      {/* Related Blogs */}
      {relatedPosts.length > 0 && (
        <div id="other-tours" className="pt-12 border-t border-[#e5e5e5] space-y-6">
          <h3 className="gsap-other-title text-2xl font-bold text-[#131313]">More Travel Guides</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {relatedPosts.map((rPost) => (
              <div key={rPost.id} className="gsap-tour-card">
                <BlogCard blog={rPost} onNavigate={onNavigate} />
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
};
