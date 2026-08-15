import React, { useState, useEffect } from "react";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { HomePage } from "./pages/HomePage";
import { ToursPage } from "./pages/ToursPage";
import { TourDetailPage } from "./pages/TourDetailPage";
import { TransportPage } from "./pages/TransportPage";
import { TransportDetailPage } from "./pages/TransportDetailPage";
import { AboutPage } from "./pages/AboutPage";
import { GalleryPage } from "./pages/GalleryPage";
import { BlogsPage } from "./pages/BlogsPage";
import { BlogDetailPage } from "./pages/BlogDetailPage";
import { ContactPage } from "./pages/ContactPage";
import { initSmoothScroll, refreshScrollTrigger, scrollToTop } from "./utils/animations";

export default function App() {
  const [currentPath, setCurrentPath] = useState(() => {
    return window.location.pathname || "/";
  });

  useEffect(() => {
    const lenis = initSmoothScroll();

    const handlePopState = () => {
      const newPath = window.location.pathname || "/";
      setCurrentPath(newPath);
      scrollToTop(true);
      setTimeout(() => {
        refreshScrollTrigger();
      }, 50);
    };

    window.addEventListener("popstate", handlePopState);
    return () => {
      window.removeEventListener("popstate", handlePopState);
      if (lenis) lenis.destroy();
    };
  }, []);

  const navigate = (path: string) => {
    let cleanPath = (path || "/").trim();
    if (!cleanPath.startsWith("/") && !cleanPath.startsWith("http")) {
      cleanPath = "/" + cleanPath;
    }

    // If same path, just scroll to top smoothly
    if (cleanPath === currentPath) {
      scrollToTop(false);
      return;
    }

    // Update route immediately
    window.history.pushState({}, "", cleanPath);
    setCurrentPath(cleanPath);

    // Immediate scroll reset to top
    scrollToTop(true);

    // Refresh animations & ScrollTrigger for new page
    setTimeout(() => {
      refreshScrollTrigger();
    }, 50);
  };

  // Global click interception to ensure all internal links use instant route change & scroll reset
  const handleGlobalClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const link = (e.target as HTMLElement).closest("a");
    if (!link) return;

    const href = link.getAttribute("href");
    if (
      !href ||
      href.startsWith("http://") ||
      href.startsWith("https://") ||
      href.startsWith("mailto:") ||
      href.startsWith("tel:") ||
      href.startsWith("whatsapp:") ||
      href.startsWith("#") ||
      link.getAttribute("target") === "_blank" ||
      link.getAttribute("download") !== null ||
      link.getAttribute("data-external") === "true"
    ) {
      return;
    }

    // Process internal navigation
    e.preventDefault();
    navigate(href);
  };

  // Router matching logic (supporting both clean URLs and .html URLs, leading/trailing slash resilience)
  const renderCurrentPage = () => {
    let p = (currentPath || "/").trim().toLowerCase();
    p = p.split("?")[0].split("#")[0];
    if (!p.startsWith("/")) p = "/" + p;

    // 1. Home
    if (p === "/" || p === "/home" || p === "/index.html" || p === "/home.html") {
      return <HomePage onNavigate={navigate} />;
    }

    // 2. Blogs list or specific blog detail
    if (p === "/blogs" || p === "/blogs/" || p === "/blogs.html" || p === "/blog" || p === "/blog.html") {
      return <BlogsPage onNavigate={navigate} />;
    }
    if (p.startsWith("/blogs/") || p.startsWith("/blog/")) {
      const slug = p
        .replace(/^\/(blogs|blog)\//, "")
        .replace(/\.html$/, "")
        .replace(/\/$/, "");
      if (slug) {
        return <BlogDetailPage slug={slug} onNavigate={navigate} />;
      }
      return <BlogsPage onNavigate={navigate} />;
    }

    // 3. Tours list or specific tour detail
    if (p === "/tours" || p === "/tours/" || p === "/tours.html" || p === "/tour" || p === "/tour.html") {
      return <ToursPage onNavigate={navigate} />;
    }
    if (p.startsWith("/tours/") || p.startsWith("/tour/")) {
      const slug = p
        .replace(/^\/(tours|tour)\//, "")
        .replace(/\.html$/, "")
        .replace(/\/$/, "");
      if (slug) {
        return <TourDetailPage slug={slug} onNavigate={navigate} />;
      }
      return <ToursPage onNavigate={navigate} />;
    }

    // 4. Transport & Car Charter list or specific vehicle detail
    if (
      p === "/transport" ||
      p === "/transport/" ||
      p === "/transport.html" ||
      p === "/transports" ||
      p === "/transports.html"
    ) {
      return <TransportPage onNavigate={navigate} />;
    }
    if (p.startsWith("/transport/") || p.startsWith("/transports/")) {
      const slug = p
        .replace(/^\/(transport|transports)\//, "")
        .replace(/\.html$/, "")
        .replace(/\/$/, "");
      if (slug) {
        return <TransportDetailPage slug={slug} onNavigate={navigate} />;
      }
      return <TransportPage onNavigate={navigate} />;
    }

    // 5. About Us
    if (p === "/about" || p === "/about/" || p === "/about.html" || p === "/about-us" || p === "/about-us.html") {
      return <AboutPage onNavigate={navigate} />;
    }

    // 6. Photo Gallery
    if (p === "/gallery" || p === "/gallery/" || p === "/gallery.html") {
      return <GalleryPage onNavigate={navigate} />;
    }

    // 7. Contact Us
    if (p === "/contact" || p === "/contact/" || p === "/contact.html" || p === "/contact-us" || p === "/contact-us.html") {
      return <ContactPage onNavigate={navigate} />;
    }

    // Default fallback to Home
    return <HomePage onNavigate={navigate} />;
  };

  return (
    <div
      className="min-h-screen bg-white text-[#131313] flex flex-col font-sans selection:bg-[#fd4621] selection:text-white"
      onClick={handleGlobalClick}
    >
      {/* Global Sticky Navigation Header */}
      <Header currentPath={currentPath} onNavigate={navigate} />

      {/* Main Page Dynamic View */}
      <main id="main-page-wrapper" className="flex-grow">
        {renderCurrentPage()}
      </main>

      {/* Global Footer */}
      <Footer onNavigate={navigate} />
    </div>
  );
}
