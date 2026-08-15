import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

let lenisInstance: Lenis | null = null;

/**
 * Initialize Lenis Smooth Scroll and sync with GSAP Ticker & ScrollTrigger
 */
export function initSmoothScroll(): Lenis | null {
  if (typeof window === "undefined") return null;

  if (lenisInstance) {
    lenisInstance.destroy();
  }

  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: "vertical",
    gestureOrientation: "vertical",
    smoothWheel: true,
    wheelMultiplier: 1,
    touchMultiplier: 2,
    infinite: false,
  });

  lenisInstance = lenis;

  lenis.on("scroll", ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });

  gsap.ticker.lagSmoothing(0);

  return lenis;
}

export function getLenis(): Lenis | null {
  return lenisInstance;
}

/**
 * Scroll instantly to the very top (resetting window, html, body and Lenis)
 */
export function scrollToTop(immediate: boolean = true) {
  if (typeof window === "undefined") return;

  if (lenisInstance) {
    lenisInstance.scrollTo(0, { immediate });
  }

  window.scrollTo({
    top: 0,
    left: 0,
    behavior: immediate ? "instant" : "smooth",
  });

  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
}

/**
 * Refresh ScrollTrigger after DOM updates
 */
export function refreshScrollTrigger() {
  setTimeout(() => {
    ScrollTrigger.refresh();
  }, 100);
}

/**
 * Initialize all Home Page animations exactly matching reference
 */
export function initHomePageAnimations() {
  if (typeof window === "undefined") return;

  const ctx = gsap.context(() => {
    // 1. HERO SECTION
    const heroBg = document.querySelector(".gsap-hero-bg");
    const heroOverlay = document.querySelector(".gsap-hero-overlay");
    const heroBadge = document.querySelector(".gsap-hero-badge");
    const heroTitle = document.querySelector(".gsap-hero-title");
    const heroText = document.querySelector(".gsap-hero-text");
    const heroForm = document.querySelector(".gsap-hero-form");

    if (heroBg && heroTitle) {
      gsap.set(heroBg, { scale: 1.15, opacity: 0 });
      gsap.set(heroOverlay, { opacity: 0 });
      gsap.set(heroBadge, { y: 30, opacity: 0 });
      gsap.set(heroTitle, { y: 40, opacity: 0 });
      gsap.set(heroText, { y: 30, opacity: 0 });
      gsap.set(heroForm, { y: 40, opacity: 0 });

      const heroTl = gsap.timeline({ defaults: { ease: "power3.out" } });
      heroTl
        .to(heroBg, { scale: 1, opacity: 1, duration: 1.5, ease: "power2.out" })
        .to(heroOverlay, { opacity: 1, duration: 1.5, ease: "power2.out" }, "<")
        .to(heroBadge, { y: 0, opacity: 1, duration: 0.8 }, "-=1.0")
        .to(heroTitle, { y: 0, opacity: 1, duration: 0.8 }, "-=0.6")
        .to(heroText, { y: 0, opacity: 1, duration: 0.8 }, "-=0.6")
        .to(heroForm, { y: 0, opacity: 1, duration: 0.8, ease: "back.out(1.2)" }, "-=0.4");
    }

    // 2. ABOUT SECTION
    const aboutSec = document.getElementById("about");
    if (aboutSec) {
      const badge = aboutSec.querySelector(".gsap-about-badge");
      const stats = gsap.utils.toArray<HTMLElement>(".gsap-about-stat");
      const mainText = aboutSec.querySelector(".gsap-about-main-text");
      const img1 = aboutSec.querySelector<HTMLElement>(".gsap-about-image-1");
      const img2 = aboutSec.querySelector<HTMLElement>(".gsap-about-image-2");

      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: aboutSec,
            start: "top 75%",
          },
        });

        if (badge) {
          gsap.set(badge, { x: -30, opacity: 0 });
          tl.to(badge, { x: 0, opacity: 1, duration: 0.8, ease: "power3.out" });
        }

        if (stats.length > 0) {
          gsap.set(stats, { y: 30, opacity: 0 });
          const offset = tl.duration() > 0 ? "-=0.4" : 0;
          tl.addLabel("statsStart", offset);
          tl.to(stats, { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: "power3.out" }, "statsStart");

          gsap.utils.toArray<HTMLElement>(".gsap-counter").forEach((counter, idx) => {
            const target = parseFloat(counter.getAttribute("data-target") || "0");
            const decimals = parseInt(counter.getAttribute("data-decimals") || "0", 10);
            const valObj = { val: 0 };

            tl.to(
              valObj,
              {
                val: target,
                duration: 1.2,
                ease: "power2.out",
                onUpdate: () => {
                  counter.innerText =
                    decimals === 0
                      ? Math.floor(valObj.val).toLocaleString("en-US")
                      : valObj.val.toFixed(decimals);
                },
              },
              `statsStart+=${idx * 0.2}`
            );
          });
        }

        if (mainText) {
          gsap.set(mainText, { y: 30, opacity: 0 });
          tl.to(mainText, { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }, "-=0.4");
        }

        const images = [img1, img2].filter(Boolean) as HTMLElement[];
        if (images.length > 0) {
          gsap.set(images, { opacity: 0, y: 20 });
          tl.to(images, { x: 0, y: 0, opacity: 1, duration: 1.4, stagger: 0.3, ease: "power3.out" }, "-=0.4");

          const covers = gsap.utils.toArray<HTMLElement>(".gsap-image-reveal-cover");
          if (covers.length > 0) {
            tl.to(
              covers,
              {
                yPercent: (_i, target) => (target.closest(".gsap-about-image-2") ? 100 : -100),
                duration: 1,
                stagger: 0.2,
                ease: "power4.inOut",
              },
              "-=0.8"
            );
          }
        }
      });

      mm.add("(max-width: 1023px)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: aboutSec,
            start: "top 70%",
          },
        });

        if (badge) {
          gsap.set(badge, { x: -30, opacity: 0 });
          tl.to(badge, { x: 0, opacity: 1, duration: 0.8, ease: "power3.out" });
        }

        if (stats.length > 0) {
          gsap.set(stats, { y: 30, opacity: 0 });
          tl.to(stats, { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: "power3.out" }, "-=0.4");

          gsap.utils.toArray<HTMLElement>(".gsap-counter").forEach((counter, idx) => {
            const target = parseFloat(counter.getAttribute("data-target") || "0");
            const decimals = parseInt(counter.getAttribute("data-decimals") || "0", 10);
            const valObj = { val: 0 };

            tl.to(
              valObj,
              {
                val: target,
                duration: 1.5,
                ease: "power2.out",
                onUpdate: () => {
                  counter.innerText =
                    decimals === 0
                      ? Math.floor(valObj.val).toLocaleString("en-US")
                      : valObj.val.toFixed(decimals);
                },
              },
              `-=${0.6 - idx * 0.1}`
            );
          });
        }

        if (mainText) {
          gsap.set(mainText, { y: 30, opacity: 0 });
          tl.to(mainText, { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }, "-=0.4");
        }

        if (img1) {
          gsap.set(img1, { opacity: 0, y: 20 });
          const img1Tl = gsap.timeline({ scrollTrigger: { trigger: img1, start: "top 75%" } });
          img1Tl.to(img1, { x: 0, y: 0, opacity: 1, duration: 1.4, ease: "power3.out" });
          const c1 = img1.querySelector(".gsap-image-reveal-cover");
          if (c1) img1Tl.to(c1, { yPercent: -100, duration: 1, ease: "power4.inOut" }, "-=0.8");
        }

        if (img2) {
          gsap.set(img2, { opacity: 0, y: 20 });
          const img2Tl = gsap.timeline({ scrollTrigger: { trigger: img2, start: "top 75%" } });
          img2Tl.to(img2, { x: 0, y: 0, opacity: 1, duration: 1.4, ease: "power3.out" });
          const c2 = img2.querySelector(".gsap-image-reveal-cover");
          if (c2) img2Tl.to(c2, { yPercent: 100, duration: 1, ease: "power4.inOut" }, "-=0.8");
        }
      });
    }

    // 3. WHY US SECTION
    const whySec = document.getElementById("why");
    if (whySec) {
      const badge = whySec.querySelector(".gsap-why-badge");
      const heading = whySec.querySelector(".gsap-why-heading");
      const text = whySec.querySelector(".gsap-why-text");
      const features = gsap.utils.toArray<HTMLElement>(".gsap-why-feature");
      const whyImg = whySec.querySelector<HTMLElement>(".gsap-why-image");
      const innerImg = whySec.querySelector<HTMLElement>(".gsap-why-inner-image");
      const innerText = whySec.querySelector<HTMLElement>(".gsap-why-inner-text");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: whySec,
          start: "top 75%",
        },
      });

      if (badge) {
        gsap.set(badge, { x: -30, opacity: 0 });
        tl.to(badge, { x: 0, opacity: 1, duration: 0.8, ease: "power3.out" });
      }
      if (heading) {
        gsap.set(heading, { y: 30, opacity: 0 });
        tl.to(heading, { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }, "-=0.4");
      }
      if (text) {
        gsap.set(text, { y: 30, opacity: 0 });
        tl.to(text, { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }, "-=0.6");
      }

      if (features.length > 0) {
        gsap.set(features, { scale: 0.9, opacity: 0 });
        const mm = gsap.matchMedia();
        mm.add("(min-width: 1024px)", () => {
          tl.to(features, { scale: 1, opacity: 1, duration: 1, stagger: 0.3, ease: "power3.out" }, "-=0.4");
        });
        mm.add("(max-width: 1023px)", () => {
          features.forEach((feat) => {
            gsap.to(feat, {
              scrollTrigger: { trigger: feat, start: "top 75%" },
              scale: 1,
              opacity: 1,
              duration: 0.8,
              ease: "power3.out",
            });
          });
        });
      }

      if (whyImg) {
        gsap.set(whyImg, { scale: 0.9, opacity: 0 });
        if (innerImg) gsap.set(innerImg, { scale: 1.2 });
        if (innerText) gsap.set(innerText, { y: 20, opacity: 0 });

        const imgTl = gsap.timeline({
          scrollTrigger: {
            trigger: whyImg,
            start: "top 75%",
          },
        });
        imgTl.to(whyImg, { scale: 1, opacity: 1, duration: 1.2, ease: "power3.out" });
        if (innerImg) imgTl.to(innerImg, { scale: 1, duration: 1.8, ease: "power3.out" }, "-=1.2");
        if (innerText) imgTl.to(innerText, { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }, "-=1.0");
      }
    }

    // 4. TOUR PREVIEW SECTION
    const tourPreviewSec = document.getElementById("tour-preview");
    if (tourPreviewSec) {
      const badge = tourPreviewSec.querySelector(".gsap-tour-preview-badge");
      const heading = tourPreviewSec.querySelector(".gsap-tour-preview-heading");
      const text = tourPreviewSec.querySelector(".gsap-tour-preview-text");
      const button = tourPreviewSec.querySelector(".gsap-tour-preview-button");
      const cards = gsap.utils.toArray<HTMLElement>("#tour-preview .gsap-tour-card");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: tourPreviewSec,
          start: "top 75%",
        },
      });

      if (badge) {
        gsap.set(badge, { x: -30, opacity: 0 });
        tl.to(badge, { x: 0, opacity: 1, duration: 0.8, ease: "power3.out" });
      }
      if (heading) {
        gsap.set(heading, { y: 30, opacity: 0 });
        tl.to(heading, { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }, "-=0.4");
      }
      if (text) {
        gsap.set(text, { y: 30, opacity: 0 });
        tl.to(text, { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }, "-=0.6");
      }
      if (button) {
        gsap.set(button, { y: 30, opacity: 0 });
        tl.to(button, { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }, "-=0.6");
      }

      if (cards.length > 0) {
        gsap.set(cards, { y: 40, opacity: 0 });
        const mm = gsap.matchMedia();
        mm.add("(min-width: 1024px)", () => {
          tl.to(cards, { y: 0, opacity: 1, duration: 0.8, stagger: 0.3, ease: "power3.out" }, "-=0.4");
        });
        mm.add("(max-width: 1023px)", () => {
          ScrollTrigger.batch(cards, {
            start: "top 75%",
            onEnter: (batch) => {
              gsap.to(batch, { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: "power3.out" });
            },
          });
        });
      }
    }

    // 5. TRANSPORT SECTION
    const transportSec = document.getElementById("transport");
    if (transportSec) {
      const badge = transportSec.querySelector(".gsap-transport-badge");
      const heading = transportSec.querySelector(".gsap-transport-heading");
      const text = transportSec.querySelector(".gsap-transport-text");
      const button = transportSec.querySelector(".gsap-transport-button");
      const cards = gsap.utils.toArray<HTMLElement>("#transport .gsap-transport-card");
      const img = transportSec.querySelector<HTMLElement>(".gsap-transport-image");
      const marqueeBox = transportSec.querySelector<HTMLElement>(".gsap-transport-marquee-box");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: transportSec,
          start: "top 75%",
        },
      });

      if (badge) {
        gsap.set(badge, { x: -30, opacity: 0 });
        tl.to(badge, { x: 0, opacity: 1, duration: 0.8, ease: "power3.out" });
      }
      if (heading) {
        gsap.set(heading, { y: 30, opacity: 0 });
        tl.to(heading, { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }, "-=0.4");
      }
      if (text) {
        gsap.set(text, { y: 30, opacity: 0 });
        tl.to(text, { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }, "-=0.6");
      }
      if (button) {
        gsap.set(button, { y: 30, opacity: 0 });
        tl.to(button, { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }, "-=0.6");
      }

      if (cards.length > 0) {
        gsap.set(cards, { y: 40, opacity: 0 });
        const mm = gsap.matchMedia();
        mm.add("(min-width: 1024px)", () => {
          tl.to(cards, { y: 0, opacity: 1, duration: 0.8, stagger: 0.3, ease: "power3.out" }, "-=0.4");
        });
        mm.add("(max-width: 1023px)", () => {
          cards.forEach((c) => {
            gsap.to(c, {
              scrollTrigger: { trigger: c, start: "top 75%" },
              y: 0,
              opacity: 1,
              duration: 0.8,
              ease: "power3.out",
            });
          });
        });
      }

      if (img) {
        gsap.set(img, { scale: 0.9, opacity: 0 });
        const mm = gsap.matchMedia();
        mm.add("(min-width: 1024px)", () => {
          tl.to(img, { scale: 1, opacity: 1, duration: 1.8, ease: "power3.out" }, "<");
        });
        mm.add("(max-width: 1023px)", () => {
          gsap.to(img, {
            scrollTrigger: { trigger: img, start: "top 75%" },
            scale: 1,
            opacity: 1,
            duration: 1.8,
            ease: "power3.out",
          });
        });
      }

      if (marqueeBox) {
        gsap.set(marqueeBox, { x: 30, opacity: 0 });
        const mm = gsap.matchMedia();
        mm.add("(min-width: 1024px)", () => {
          tl.to(marqueeBox, { x: 0, y: 0, opacity: 1, duration: 1.4, ease: "power3.out" }, "<0.2");
        });
        mm.add("(max-width: 1023px)", () => {
          gsap.to(marqueeBox, {
            scrollTrigger: { trigger: marqueeBox, start: "top 75%" },
            x: 0,
            y: 0,
            opacity: 1,
            duration: 1.4,
            ease: "power3.out",
          });
        });
      }
    }

    // 6. TESTIMONIAL SECTION & SLIDER
    const testSec = document.getElementById("testimonial");
    if (testSec) {
      const badge = testSec.querySelector(".gsap-testimonial-badge");
      const heading = testSec.querySelector(".gsap-testimonial-heading");
      const text = testSec.querySelector(".gsap-testimonial-text");
      const button = testSec.querySelector(".gsap-testimonial-button");
      const cards = gsap.utils.toArray<HTMLElement>(".gsap-testimonial-card, .gsap-testimonial-slider-card");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: testSec,
          start: "top 75%",
        },
      });

      if (badge) {
        gsap.set(badge, { x: -30, opacity: 0 });
        tl.to(badge, { x: 0, opacity: 1, duration: 0.8, ease: "power3.out" });
      }
      if (heading) {
        gsap.set(heading, { y: 30, opacity: 0 });
        tl.to(heading, { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }, "-=0.4");
      }
      if (text) {
        gsap.set(text, { y: 30, opacity: 0 });
        tl.to(text, { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }, "-=0.6");
      }
      if (button) {
        gsap.set(button, { y: 30, opacity: 0 });
        tl.to(button, { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }, "-=0.6");
      }

      if (cards.length > 0) {
        gsap.set(cards, { y: 40, opacity: 0 });
        const mm = gsap.matchMedia();
        mm.add("(min-width: 1024px)", () => {
          tl.to(cards, { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: "power3.out" }, "-=0.4");
        });
        mm.add("(max-width: 1023px)", () => {
          ScrollTrigger.batch(cards, {
            start: "top 75%",
            onEnter: (batch) => {
              gsap.to(batch, { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: "power3.out" });
            },
          });
        });
      }

      // Automated Continuous Slider
      const track = document.querySelector<HTMLElement>(".gsap-testimonial-track");
      const sliderCards = document.querySelectorAll<HTMLElement>(".gsap-testimonial-slider-card");
      if (track && sliderCards.length > 0) {
        const sliderTl = gsap.timeline({ repeat: -1, repeatRefresh: true });
        const total = Math.max(1, Math.floor(sliderCards.length / 2));
        for (let i = 1; i <= total; i++) {
          sliderTl.to(track, {
            x: () => -(sliderCards[0].offsetWidth + 20) * i,
            duration: 0.8,
            ease: "power2.inOut",
            delay: 3,
          });
        }
        sliderTl.set(track, { x: 0 });
      }
    }

    // 7. BLOG SECTION
    const blogSec = document.getElementById("blog");
    if (blogSec) {
      const badge = blogSec.querySelector(".gsap-blog-badge");
      const heading = blogSec.querySelector(".gsap-blog-heading");
      const text = blogSec.querySelector(".gsap-blog-text");
      const button = blogSec.querySelector(".gsap-blog-button");
      const mainBlog = blogSec.querySelector<HTMLElement>(".gsap-blog-main");
      const cards = gsap.utils.toArray<HTMLElement>("#blog .gsap-blog-card");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: blogSec,
          start: "top 75%",
        },
      });

      if (badge) {
        gsap.set(badge, { x: -30, opacity: 0 });
        tl.to(badge, { x: 0, opacity: 1, duration: 0.8, ease: "power3.out" });
      }
      if (heading) {
        gsap.set(heading, { y: 30, opacity: 0 });
        tl.to(heading, { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }, "-=0.4");
      }
      if (text) {
        gsap.set(text, { y: 30, opacity: 0 });
        tl.to(text, { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }, "-=0.6");
      }
      if (button) {
        gsap.set(button, { y: 30, opacity: 0 });
        tl.to(button, { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }, "-=0.6");
      }

      if (mainBlog) {
        gsap.set(mainBlog, { scale: 0.9, opacity: 0 });
        const mm = gsap.matchMedia();
        mm.add("(min-width: 1024px)", () => {
          tl.to(mainBlog, { scale: 1, opacity: 1, duration: 1.2, ease: "power3.out" }, "-=0.4");
        });
        mm.add("(max-width: 1023px)", () => {
          gsap.to(mainBlog, {
            scrollTrigger: { trigger: mainBlog, start: "top 75%" },
            scale: 1,
            opacity: 1,
            duration: 1.2,
            ease: "power3.out",
          });
        });
      }

      if (cards.length > 0) {
        gsap.set(cards, { y: 40, opacity: 0 });
        const mm = gsap.matchMedia();
        mm.add("(min-width: 1024px)", () => {
          tl.to(cards, { y: 0, opacity: 1, duration: 0.8, stagger: 0.3, ease: "power3.out" }, "-=0.8");
        });
        mm.add("(max-width: 1023px)", () => {
          cards.forEach((c) => {
            gsap.to(c, {
              scrollTrigger: { trigger: c, start: "top 75%" },
              y: 0,
              opacity: 1,
              duration: 0.8,
              ease: "power3.out",
            });
          });
        });
      }
    }

    // 8. GALLERY SECTION (Continuous Marquee)
    const gallerySec = document.getElementById("gallery");
    if (gallerySec) {
      const badge = gallerySec.querySelector(".gsap-gallery-badge");
      const heading = gallerySec.querySelector(".gsap-gallery-heading");
      const button = gallerySec.querySelector(".gsap-gallery-button");
      const marquee = gallerySec.querySelector<HTMLElement>(".gsap-gallery-marquee");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: gallerySec,
          start: "top 75%",
        },
      });

      if (badge) {
        gsap.set(badge, { x: -30, opacity: 0 });
        tl.to(badge, { x: 0, opacity: 1, duration: 0.8, ease: "power3.out" });
      }
      if (heading) {
        gsap.set(heading, { y: 30, opacity: 0 });
        tl.to(heading, { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }, "-=0.4");
      }
      if (button) {
        gsap.set(button, { x: 0, y: 30, opacity: 0 });
        tl.to(button, { x: 0, y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }, "-=0.6");
      }

      if (marquee) {
        gsap.set(marquee, { y: 30, opacity: 0 });
        const mm = gsap.matchMedia();
        mm.add("(min-width: 1024px)", () => {
          tl.to(marquee, { y: 0, opacity: 1, duration: 1, ease: "power3.out" }, "-=0.4");
        });
        mm.add("(max-width: 1023px)", () => {
          gsap.to(marquee, {
            scrollTrigger: { trigger: marquee, start: "top 75%" },
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
          });
        });
      }
    }

    // 9. CONTINUOUS HORIZONTAL MARQUEE TICKERS
    gsap.utils.toArray<HTMLElement>(".gsap-marquee-horizontal").forEach((el) => {
      const anim = gsap.to(el, {
        xPercent: -50,
        ease: "none",
        duration: 35,
        repeat: -1,
      });
      el.addEventListener("mouseenter", () => anim.pause());
      el.addEventListener("mouseleave", () => anim.play());
    });

    // 10. FAQ SECTION
    const faqSec = document.getElementById("faq");
    if (faqSec) {
      const badge = faqSec.querySelector(".gsap-faq-badge");
      const heading = faqSec.querySelector(".gsap-faq-heading");
      const contact = faqSec.querySelector(".gsap-faq-contact");
      const items = gsap.utils.toArray<HTMLElement>(".gsap-faq-item");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: faqSec,
          start: "top 75%",
        },
      });

      if (badge) {
        gsap.set(badge, { x: -30, opacity: 0 });
        tl.to(badge, { x: 0, opacity: 1, duration: 0.8, ease: "power3.out" });
      }
      if (heading) {
        gsap.set(heading, { y: 30, opacity: 0 });
        tl.to(heading, { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }, "-=0.4");
      }
      if (contact) {
        gsap.set(contact, { scale: 0.95, opacity: 0 });
        tl.to(contact, { scale: 1, opacity: 1, duration: 0.8, ease: "power3.out" }, "-=0.4");
      }

      if (items.length > 0) {
        gsap.set(items, { y: 30, opacity: 0 });
        const mm = gsap.matchMedia();
        mm.add("(min-width: 1024px)", () => {
          tl.to(items, { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: "power3.out" }, "-=0.4");
        });
        mm.add("(max-width: 1023px)", () => {
          ScrollTrigger.batch(items, {
            start: "top 80%",
            onEnter: (batch) => {
              gsap.to(batch, { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: "power3.out" });
            },
          });
        });
      }
    }
  });

  return () => ctx.revert();
}

/**
 * Initialize subpage hero & listing & detail animations
 */
export function initSubpageAnimations() {
  if (typeof window === "undefined") return;

  const ctx = gsap.context(() => {
    // 1. HERO / HEADLINE ANIMATION
    const bg = document.querySelector<HTMLElement>(
      ".gsap-tours-bg, .gsap-headline-bg, .gsap-subpage-bg, .gsap-hero-bg"
    );
    const overlay = document.querySelector<HTMLElement>(
      ".gsap-tours-overlay, .gsap-headline-overlay, .gsap-subpage-overlay, .gsap-hero-overlay"
    );
    const badge = document.querySelector<HTMLElement>(
      ".gsap-tours-badge, .gsap-headline-badge, .gsap-subpage-badge"
    );
    const title = document.querySelector<HTMLElement>(
      ".gsap-tours-title, .gsap-headline-title, .gsap-subpage-title"
    );
    const texts = gsap.utils.toArray<HTMLElement>(
      ".gsap-tours-text, .gsap-headline-text, .gsap-subpage-text"
    );

    if (bg || title) {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      if (bg) {
        gsap.set(bg, { scale: 1.05, opacity: 0 });
        tl.to(bg, { scale: 1, opacity: 1, duration: 1.5, ease: "power2.out" });
      }
      if (overlay) {
        gsap.set(overlay, { opacity: 0 });
        tl.to(overlay, { opacity: 1, duration: 1.5, ease: "power2.out" }, "<");
      }
      if (badge) {
        gsap.set(badge, { y: 25, opacity: 0 });
        tl.to(badge, { y: 0, opacity: 1, duration: 0.8 }, "-=1.0");
      }
      if (title) {
        gsap.set(title, { y: 35, opacity: 0 });
        tl.to(title, { y: 0, opacity: 1, duration: 0.8 }, "-=0.6");
      }
      if (texts.length > 0) {
        gsap.set(texts, { y: 25, opacity: 0 });
        tl.to(texts, { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: "power3.out" }, "-=0.6");
      }

      // Tours filter heading, tabs & cards
      const toursFilterHeading = document.querySelector<HTMLElement>(".gsap-tours-filter-heading");
      const toursFilterTabs = gsap.utils.toArray<HTMLElement>(".gsap-tours-filter-tab");
      const tourCards = gsap.utils.toArray<HTMLElement>(".gsap-tour-card").filter((c) => !c.closest("#other-tours"));

      if (toursFilterHeading) {
        gsap.set(toursFilterHeading, { y: 20, opacity: 0 });
        tl.to(toursFilterHeading, { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }, "-=0.4");
      }
      if (toursFilterTabs.length > 0) {
        gsap.set(toursFilterTabs, { y: 20, opacity: 0, scale: 0.9 });
        tl.to(
          toursFilterTabs,
          { y: 0, opacity: 1, scale: 1, duration: 0.4, stagger: 0.1, ease: "back.out(1.5)" },
          "-=0.4"
        );
      }
      if (tourCards.length > 0) {
        gsap.set(tourCards, { y: 30, opacity: 0 });
        tl.to(tourCards, { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: "power3.out" }, "-=0.2");
      }

      // Transport filter heading, tabs & cards
      const transportFilterHeading = document.querySelector<HTMLElement>(".gsap-transport-filter-heading");
      const transportFilterTabs = gsap.utils.toArray<HTMLElement>(".gsap-transport-filter-tab");
      const transportCards = gsap.utils.toArray<HTMLElement>(".gsap-transport-card").filter(
        (c) => !c.closest("#other-vehicles")
      );

      if (transportFilterHeading) {
        gsap.set(transportFilterHeading, { y: 20, opacity: 0 });
        tl.to(transportFilterHeading, { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }, "-=0.4");
      }
      if (transportFilterTabs.length > 0) {
        gsap.set(transportFilterTabs, { y: 20, opacity: 0, scale: 0.9 });
        tl.to(
          transportFilterTabs,
          { y: 0, opacity: 1, scale: 1, duration: 0.4, stagger: 0.1, ease: "back.out(1.5)" },
          "-=0.4"
        );
      }
      if (transportCards.length > 0) {
        gsap.set(transportCards, { y: 30, opacity: 0 });
        tl.to(transportCards, { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: "power3.out" }, "-=0.2");
      }

      // Blogs filter heading, tabs & cards
      const blogsFilterHeading = document.querySelector<HTMLElement>(".gsap-blogs-filter-heading");
      const blogsFilterTabs = gsap.utils.toArray<HTMLElement>(".gsap-blogs-filter-tab");
      const blogCards = gsap.utils.toArray<HTMLElement>(".gsap-blog-card");

      if (blogsFilterHeading) {
        gsap.set(blogsFilterHeading, { y: 20, opacity: 0 });
        tl.to(blogsFilterHeading, { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }, "-=0.4");
      }
      if (blogsFilterTabs.length > 0) {
        gsap.set(blogsFilterTabs, { y: 20, opacity: 0, scale: 0.9 });
        tl.to(
          blogsFilterTabs,
          { y: 0, opacity: 1, scale: 1, duration: 0.4, stagger: 0.1, ease: "back.out(1.5)" },
          "-=0.4"
        );
      }
      if (blogCards.length > 0) {
        gsap.set(blogCards, { y: 30, opacity: 0 });
        tl.to(blogCards, { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: "power3.out" }, "-=0.2");
      }

      // Blog detail content & sidebar
      const blogContent = document.querySelector<HTMLElement>(".gsap-blog-detail-content");
      const blogSidebar = document.querySelector<HTMLElement>(".gsap-blog-detail-sidebar");
      if (blogContent) {
        gsap.set(blogContent, { y: 30, opacity: 0 });
        tl.to(blogContent, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, "-=0.4");
      }
      if (blogSidebar) {
        gsap.set(blogSidebar, { y: 30, opacity: 0 });
        tl.to(blogSidebar, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, "-=0.5");
      }

      // About page specific content
      const aboutContent = document.querySelector<HTMLElement>(".gsap-about-page-content");
      const aboutImg1 = document.querySelector<HTMLElement>(".gsap-about-page-img-1");
      const aboutImg2 = document.querySelector<HTMLElement>(".gsap-about-page-img-2");

      if (aboutContent) {
        gsap.set(aboutContent, { y: 30, opacity: 0 });
        tl.to(aboutContent, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, "-=0.4");
      }
      if (aboutImg1) {
        gsap.set(aboutImg1, { opacity: 0, x: -30 });
        tl.to(aboutImg1, { opacity: 1, x: 0, duration: 1.4, ease: "power3.out" }, "-=0.6");
        const c1 = aboutImg1.querySelector(".gsap-image-reveal-cover");
        if (c1) tl.to(c1, { yPercent: -100, duration: 1, ease: "power4.inOut" }, "-=0.8");
      }
      if (aboutImg2) {
        gsap.set(aboutImg2, { opacity: 0, x: 30 });
        tl.to(aboutImg2, { opacity: 1, x: 0, duration: 1.4, ease: "power3.out" }, "-=0.8");
        const c2 = aboutImg2.querySelector(".gsap-image-reveal-cover");
        if (c2) tl.to(c2, { yPercent: 100, duration: 1, ease: "power4.inOut" }, "-=0.8");
      }

      // Gallery grid 1
      const gallery1 = gsap.utils.toArray<HTMLElement>(
        ".gsap-gallery-grid-1-item, #picture .gsap-gallery-item"
      );
      if (gallery1.length > 0) {
        gsap.set(gallery1, { y: 30, opacity: 0 });
        tl.to(gallery1, { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: "power3.out" }, "-=0.4");
      }

      // Contact form & info
      const contactForm = document.querySelector<HTMLElement>(".gsap-contact-form");
      const contactInfo = document.querySelector<HTMLElement>(".gsap-contact-info");
      const contactEls = [contactForm, contactInfo].filter(Boolean) as HTMLElement[];
      if (contactEls.length > 0) {
        gsap.set(contactEls, { y: 30, opacity: 0 });
        tl.to(contactEls, { y: 0, opacity: 1, duration: 0.8, stagger: 0.3, ease: "power3.out" }, "-=0.4");
      }

      // Detail page: About & Booking Box
      const sectionAbout = document.querySelector<HTMLElement>(".gsap-section-about");
      const bookingForm = document.querySelector<HTMLElement>(".gsap-booking-form");
      if (sectionAbout) {
        const t = sectionAbout.querySelector(".gsap-about-title");
        const n = sectionAbout.querySelector(".gsap-about-content");
        if (t) {
          gsap.set(t, { y: 30, opacity: 0 });
          tl.to(t, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, "-=0.4");
        }
        if (n) {
          gsap.set(n, { y: 20, opacity: 0 });
          tl.to(n, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, "-=0.5");
        }
      }
      if (bookingForm) {
        gsap.set(bookingForm, { y: 30, opacity: 0 });
        tl.to(bookingForm, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, "-=0.6");
      }
    }

    // 2. ABOUT PAGE STATS COUNTERS
    const aboutPageSec = document.getElementById("about-page-section");
    if (aboutPageSec) {
      const stats = gsap.utils.toArray<HTMLElement>(".gsap-about-page-stat");
      if (stats.length > 0) {
        const sTl = gsap.timeline({
          scrollTrigger: {
            trigger: stats[0] || aboutPageSec,
            start: "top 80%",
          },
        });
        gsap.set(stats, { y: 25, opacity: 0 });
        sTl.to(stats, { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: "power3.out" });

        gsap.utils.toArray<HTMLElement>(".gsap-about-page-counter, .gsap-counter").forEach((counter, idx) => {
          const target = parseFloat(counter.getAttribute("data-target") || "0");
          const decimals = parseInt(counter.getAttribute("data-decimals") || "0", 10);
          const valObj = { val: 0 };
          sTl.to(
            valObj,
            {
              val: target,
              duration: 1.2,
              ease: "power2.out",
              onUpdate: () => {
                counter.innerText =
                  decimals === 0
                    ? Math.floor(valObj.val).toLocaleString("en-US")
                    : valObj.val.toFixed(decimals);
              },
            },
            `<+=${idx * 0.2}`
          );
        });
      }
    }

    // 3. WHO WE ARE SECTION
    const whoSec = document.getElementById("who-we-are");
    if (whoSec) {
      const badge = whoSec.querySelector(".gsap-who-badge");
      const titleEl = whoSec.querySelector(".gsap-who-title");
      const text = whoSec.querySelector(".gsap-who-text");
      const img = whoSec.querySelector(".gsap-who-img");
      const cards = gsap.utils.toArray<HTMLElement>(".gsap-who-card");

      const wTl = gsap.timeline({
        scrollTrigger: { trigger: whoSec, start: "top 65%" },
      });

      if (badge) {
        gsap.set(badge, { x: -30, opacity: 0 });
        wTl.to(badge, { x: 0, opacity: 1, duration: 0.8, ease: "power3.out" });
      }
      if (titleEl) {
        gsap.set(titleEl, { y: 30, opacity: 0 });
        wTl.to(titleEl, { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }, "-=0.6");
      }
      if (text) {
        gsap.set(text, { y: 30, opacity: 0 });
        wTl.to(text, { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }, "-=0.6");
      }
      if (img) {
        gsap.set(img, { y: 30, opacity: 0 });
        wTl.to(img, { y: 0, opacity: 1, duration: 1.4, ease: "power3.out" }, "-=0.5");
        const cover = img.querySelector(".gsap-image-reveal-cover");
        if (cover) wTl.to(cover, { yPercent: -100, duration: 1, ease: "power4.inOut" }, "-=0.8");
      }
      if (cards.length > 0) {
        gsap.set(cards, { y: 30, opacity: 0 });
        gsap.to(cards, {
          scrollTrigger: { trigger: cards[0], start: "top 75%" },
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
        });
      }
    }

    // 4. SERVICES SECTION
    const serviceSec = document.getElementById("service");
    if (serviceSec) {
      const badge = serviceSec.querySelector(".gsap-service-badge");
      const heading = serviceSec.querySelector(".gsap-service-heading");
      const cards = gsap.utils.toArray<HTMLElement>(".gsap-service-card");

      const sTl = gsap.timeline({
        scrollTrigger: { trigger: serviceSec, start: "top 75%" },
      });

      if (badge) {
        gsap.set(badge, { y: 30, opacity: 0 });
        sTl.to(badge, { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" });
      }
      if (heading) {
        gsap.set(heading, { y: 30, opacity: 0 });
        sTl.to(heading, { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }, "-=0.4");
      }
      if (cards.length > 0) {
        gsap.set(cards, { y: 30, opacity: 0 });
        const mm = gsap.matchMedia();
        mm.add("(min-width: 1024px)", () => {
          sTl.to(cards, { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: "power3.out" }, "-=0.4");
        });
        mm.add("(max-width: 1023px)", () => {
          ScrollTrigger.batch(cards, {
            start: "top 75%",
            onEnter: (batch) => {
              gsap.to(batch, { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: "power3.out", overwrite: true });
            },
          });
        });
      }
    }

    // 5. TESTIMONIAL SECTION
    const testSec = document.getElementById("testimonial");
    if (testSec) {
      const badge = testSec.querySelector(".gsap-testimonial-badge");
      const heading = testSec.querySelector(".gsap-testimonial-heading");
      const text = testSec.querySelector(".gsap-testimonial-text");
      const button = testSec.querySelector(".gsap-testimonial-button");
      const cards = gsap.utils.toArray<HTMLElement>(".gsap-testimonial-card, .gsap-testimonial-slider-card");

      const tTl = gsap.timeline({
        scrollTrigger: { trigger: testSec, start: "top 75%" },
      });

      if (badge) {
        gsap.set(badge, { x: -30, opacity: 0 });
        tTl.to(badge, { x: 0, opacity: 1, duration: 0.8, ease: "power3.out" });
      }
      if (heading) {
        gsap.set(heading, { y: 30, opacity: 0 });
        tTl.to(heading, { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }, "-=0.4");
      }
      if (text) {
        gsap.set(text, { y: 30, opacity: 0 });
        tTl.to(text, { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }, "-=0.6");
      }
      if (button) {
        gsap.set(button, { y: 30, opacity: 0 });
        tTl.to(button, { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }, "-=0.6");
      }

      if (cards.length > 0) {
        gsap.set(cards, { y: 30, opacity: 0 });
        const mm = gsap.matchMedia();
        mm.add("(min-width: 1024px)", () => {
          tTl.to(cards, { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: "power3.out" }, "-=0.4");
        });
        mm.add("(max-width: 1023px)", () => {
          ScrollTrigger.batch(cards, {
            start: "top 75%",
            onEnter: (batch) => {
              gsap.to(batch, { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: "power3.out" });
            },
          });
        });
      }

      // Continuous loop for testimonial slider track if exists
      const track = testSec.querySelector<HTMLElement>(".gsap-testimonial-track");
      const sliderCards = testSec.querySelectorAll<HTMLElement>(".gsap-testimonial-slider-card");
      if (track && sliderCards.length > 0) {
        const sliderTl = gsap.timeline({ repeat: -1, repeatRefresh: true });
        const steps = sliderCards.length / 2;
        for (let s = 1; s <= steps; s++) {
          sliderTl.to(track, {
            x: () => -(sliderCards[0].offsetWidth + 20) * s,
            duration: 0.8,
            ease: "power2.inOut",
            delay: 2,
          });
        }
        sliderTl.set(track, { x: 0 });
      }
    }

    // 6. FAQ SECTION
    const faqSec = document.getElementById("faq");
    if (faqSec) {
      const badge = faqSec.querySelector(".gsap-faq-badge");
      const heading = faqSec.querySelector(".gsap-faq-heading");
      const contact = faqSec.querySelector(".gsap-faq-contact");
      const items = gsap.utils.toArray<HTMLElement>(".gsap-faq-item");

      const fTl = gsap.timeline({
        scrollTrigger: { trigger: faqSec, start: "top 75%" },
      });

      if (badge) {
        gsap.set(badge, { x: -30, opacity: 0 });
        fTl.to(badge, { x: 0, opacity: 1, duration: 0.8, ease: "power3.out" });
      }
      if (heading) {
        gsap.set(heading, { y: 30, opacity: 0 });
        fTl.to(heading, { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }, "-=0.4");
      }
      if (contact) {
        gsap.set(contact, { scale: 0.95, opacity: 0 });
        fTl.to(contact, { scale: 1, opacity: 1, duration: 0.8, ease: "power3.out" }, "-=0.4");
      }
      if (items.length > 0) {
        gsap.set(items, { y: 30, opacity: 0 });
        const mm = gsap.matchMedia();
        mm.add("(min-width: 1024px)", () => {
          fTl.to(items, { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: "power3.out" }, "-=0.4");
        });
        mm.add("(max-width: 1023px)", () => {
          ScrollTrigger.batch(items, {
            start: "top 80%",
            onEnter: (batch) => {
              gsap.to(batch, { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: "power3.out" });
            },
          });
        });
      }
    }

    // 7. GALLERY GRID 2 SECTION
    const picSec = document.getElementById("picture");
    if (picSec) {
      const grid2 = gsap.utils.toArray<HTMLElement>(".gsap-gallery-grid-2-item");
      if (grid2.length > 0) {
        gsap.set(grid2, { y: 30, opacity: 0 });
        ScrollTrigger.batch(grid2, {
          start: "top 80%",
          onEnter: (batch) => {
            gsap.to(batch, { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: "power3.out", overwrite: true });
          },
        });
      }
    }

    // 8. DETAIL PAGE SECTIONS: Destinations, Itinerary, Features, Inclusions, Price
    const destSec = document.querySelector<HTMLElement>(".gsap-section-destinations");
    if (destSec) {
      const destTitle = destSec.querySelector(".gsap-destinations-title");
      const destItems = destSec.querySelectorAll(".gsap-destination-item");
      const dTl = gsap.timeline({
        scrollTrigger: { trigger: destSec, start: "top 70%", toggleActions: "play none none none" },
      });
      if (destTitle) {
        gsap.set(destTitle, { y: 30, opacity: 0 });
        dTl.to(destTitle, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" });
      }
      if (destItems.length > 0) {
        gsap.set(destItems, { y: 20, opacity: 0 });
        dTl.to(destItems, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", stagger: 0.15 }, "-=0.5");
      }
    }

    const itinSec = document.querySelector<HTMLElement>(".gsap-section-itinerary");
    if (itinSec) {
      const itinTitle = itinSec.querySelector(".gsap-itinerary-title");
      const itinItems = itinSec.querySelectorAll(".gsap-itinerary-item");
      const iTl = gsap.timeline({
        scrollTrigger: { trigger: itinSec, start: "top 70%", toggleActions: "play none none none" },
      });
      if (itinTitle) {
        gsap.set(itinTitle, { y: 30, opacity: 0 });
        iTl.to(itinTitle, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" });
      }
      if (itinItems.length > 0) {
        gsap.set(itinItems, { y: 20, opacity: 0 });
        iTl.to(itinItems, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", stagger: 0.2 }, "-=0.5");
      }
    }

    const featSec = document.querySelector<HTMLElement>(".gsap-section-features");
    if (featSec) {
      const featTitle = featSec.querySelector(".gsap-features-title");
      const featContent = featSec.querySelector(".gsap-features-content");
      const fTl = gsap.timeline({
        scrollTrigger: { trigger: featSec, start: "top 70%", toggleActions: "play none none none" },
      });
      if (featTitle) {
        gsap.set(featTitle, { y: 30, opacity: 0 });
        fTl.to(featTitle, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" });
      }
      if (featContent) {
        gsap.set(featContent, { y: 20, opacity: 0 });
        fTl.to(featContent, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, "-=0.5");
      }
    }

    const inclSec = document.querySelector<HTMLElement>(".gsap-section-inclusions");
    if (inclSec) {
      const inclTitle = inclSec.querySelector(".gsap-inclusions-title");
      const inclCards = inclSec.querySelectorAll(".gsap-inclusion-card");
      const cTl = gsap.timeline({
        scrollTrigger: { trigger: inclSec, start: "top 70%", toggleActions: "play none none none" },
      });
      if (inclTitle) {
        gsap.set(inclTitle, { y: 30, opacity: 0 });
        cTl.to(inclTitle, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" });
      }
      if (inclCards.length > 0) {
        gsap.set(inclCards, { y: 20, opacity: 0 });
        cTl.to(inclCards, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", stagger: 0.3 }, "-=0.5");
      }
    }

    const priceSec = document.querySelector<HTMLElement>(".gsap-section-price");
    if (priceSec) {
      const priceTitle = priceSec.querySelector(".gsap-price-title");
      const priceContent = priceSec.querySelector(".gsap-price-content");
      const pTl = gsap.timeline({
        scrollTrigger: { trigger: priceSec, start: "top 70%", toggleActions: "play none none none" },
      });
      if (priceTitle) {
        gsap.set(priceTitle, { y: 30, opacity: 0 });
        pTl.to(priceTitle, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" });
      }
      if (priceContent) {
        gsap.set(priceContent, { y: 20, opacity: 0 });
        pTl.to(priceContent, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, "-=0.5");
      }
    }

    const otherTours = document.getElementById("other-tours");
    if (otherTours) {
      const badge = otherTours.querySelector(".gsap-other-badge");
      const titleEl = otherTours.querySelector(".gsap-other-title");
      const cards = gsap.utils.toArray<HTMLElement>("#other-tours .gsap-tour-card");
      const oTl = gsap.timeline({
        scrollTrigger: { trigger: otherTours, start: "top 75%" },
      });
      if (badge) {
        gsap.set(badge, { y: 20, opacity: 0 });
        oTl.to(badge, { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" });
      }
      if (titleEl) {
        gsap.set(titleEl, { y: 30, opacity: 0 });
        oTl.to(titleEl, { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }, "-=0.4");
      }
      if (cards.length > 0) {
        gsap.set(cards, { y: 30, opacity: 0 });
        oTl.to(cards, { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: "power3.out" }, "-=0.4");
      }
    }

    const otherVehicles = document.getElementById("other-vehicles");
    if (otherVehicles) {
      const badge = otherVehicles.querySelector(".gsap-other-vehicles-badge");
      const titleEl = otherVehicles.querySelector(".gsap-other-vehicles-title");
      const cards = gsap.utils.toArray<HTMLElement>("#other-vehicles .gsap-transport-card");
      const vTl = gsap.timeline({
        scrollTrigger: { trigger: otherVehicles, start: "top 75%" },
      });
      if (badge) {
        gsap.set(badge, { y: 20, opacity: 0 });
        vTl.to(badge, { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" });
      }
      if (titleEl) {
        gsap.set(titleEl, { y: 30, opacity: 0 });
        vTl.to(titleEl, { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }, "-=0.4");
      }
      if (cards.length > 0) {
        gsap.set(cards, { y: 30, opacity: 0 });
        vTl.to(cards, { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: "power3.out" }, "-=0.4");
      }
    }

    // 9. CONTINUOUS HORIZONTAL MARQUEES
    gsap.utils.toArray<HTMLElement>(".gsap-marquee-horizontal").forEach((el) => {
      const anim = gsap.to(el, {
        xPercent: -50,
        ease: "none",
        duration: 35,
        repeat: -1,
      });
      el.addEventListener("mouseenter", () => anim.pause());
      el.addEventListener("mouseleave", () => anim.play());
    });

    // 10. CONTINUOUS VERTICAL MARQUEES
    gsap.utils.toArray<HTMLElement>(".gsap-marquee-vertical").forEach((el) => {
      const anim = gsap.to(el, {
        yPercent: -50,
        ease: "none",
        duration: 15,
        repeat: -1,
      });
      el.addEventListener("mouseenter", () => anim.pause());
      el.addEventListener("mouseleave", () => anim.play());
    });

    // Refresh ScrollTrigger after elements initialize
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 150);
  });

  return () => ctx.revert();
}

/**
 * Filter animation for category changes
 */
export function animateCategoryTransition(containerSelector: string) {
  if (typeof window === "undefined") return;

  const items = gsap.utils.toArray<HTMLElement>(`${containerSelector} > *`);
  if (items.length > 0) {
    gsap.fromTo(
      items,
      { opacity: 0, scale: 0.92, y: 20 },
      { opacity: 1, scale: 1, y: 0, duration: 0.45, stagger: 0.08, ease: "power3.out", overwrite: true }
    );
  }
}
