import React, { useState, useEffect, useRef } from "react";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { FloatingWhatsApp } from "./components/UI/FloatingWhatsApp";
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
    // If same path, just scroll to top smoothly
    if (path === currentPath) {
      scrollToTop(false);
      return;
    }

    // Update route immediately (no exit delay)
    window.history.pushState({}, "", path);
    setCurrentPath(path);

    // Guaranteed immediate scroll reset to top
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

  // Router matching logic (supporting both clean URLs and legacy .html URLs)
  const renderCurrentPage = () => {
    const normalizedPath = (currentPath || "/").toLowerCase();

    // 1. Home
    if (normalizedPath === "/" || normalizedPath === "" || normalizedPath === "/index.html") {
      return <HomePage onNavigate={navigate} />;
    }

    // 2. Tours list or specific tour detail
    if (normalizedPath === "/tours" || normalizedPath === "/tours/" || normalizedPath === "/tours.html") {
      return <ToursPage onNavigate={navigate} />;
    }
    if (normalizedPath.startsWith("/tours/")) {
      const slug = normalizedPath.replace("/tours/", "").replace(/\.html$/, "").replace(/\/$/, "");
      return <TourDetailPage slug={slug} onNavigate={navigate} />;
    }

    // 3. Transport & Car Charter list or specific vehicle detail
    if (normalizedPath === "/transport" || normalizedPath === "/transport/" || normalizedPath === "/transport.html") {
      return <TransportPage onNavigate={navigate} />;
    }
    if (normalizedPath.startsWith("/transport/")) {
      const slug = normalizedPath.replace("/transport/", "").replace(/\.html$/, "").replace(/\/$/, "");
      return <TransportDetailPage slug={slug} onNavigate={navigate} />;
    }

    // 4. About Us
    if (normalizedPath === "/about" || normalizedPath === "/about/" || normalizedPath === "/about.html") {
      return <AboutPage onNavigate={navigate} />;
    }

    // 5. Photo Gallery
    if (normalizedPath === "/gallery" || normalizedPath === "/gallery/" || normalizedPath === "/gallery.html") {
      return <GalleryPage onNavigate={navigate} />;
    }

    // 6. Blogs list or specific blog detail
    if (normalizedPath === "/blogs" || normalizedPath === "/blogs/" || normalizedPath === "/blogs.html") {
      return <BlogsPage onNavigate={navigate} />;
    }
    if (normalizedPath.startsWith("/blogs/")) {
      const slug = normalizedPath.replace("/blogs/", "").replace(/\.html$/, "").replace(/\/$/, "");
      return <BlogDetailPage slug={slug} onNavigate={navigate} />;
    }

    // 7. Contact Us
    if (normalizedPath === "/contact" || normalizedPath === "/contact/" || normalizedPath === "/contact.html") {
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

      {/* Floating WhatsApp Action Widget */}
      <FloatingWhatsApp />
    </div>
  );
}
