import React from "react";

interface FooterProps {
  onNavigate?: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
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
    <footer className="2xl:container mx-auto lg:px-5 2xl:px-0 lg:py-5">
      <div className="bg-foreground px-6 lg:px-15 py-12 lg:py-20 pb-8 lg:pb-10 lg:rounded-3xl text-white">
        {/* Top CTA Banner */}
        <div className="text-center flex flex-col items-center mb-12 lg:mb-20">
          <h2 className="text-2xl lg:text-5xl font-semibold text-white mb-8 lg:mb-10 leading-[1.3]">
            Ready to explore Bali with <br className="hidden lg:block" /> a driver you can trust?
          </h2>
          <a
            href="/contact"
            onClick={(e) => handleLinkClick(e, "/contact")}
            className="group inline-flex items-center justify-center gap-3 font-semibold rounded-full text-sm cursor-pointer transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary bg-primary text-white hover:bg-primary/90 pl-5 pr-2 py-2 w-fit"
          >
            <div className="relative overflow-hidden flex items-center justify-center">
              <span className="block transition-transform duration-500 group-hover:translate-y-[150%]">
                Plan Your Trip
              </span>
              <span className="absolute block transition-transform duration-500 -translate-y-[150%] group-hover:translate-y-0">
                Plan Your Trip
              </span>
            </div>
            <span className="bg-white text-primary p-1.5 rounded-full relative overflow-hidden flex items-center justify-center">
              <span className="inline-flex [&>svg]:w-5 [&>svg]:h-5 transition-transform duration-500 group-hover:translate-x-[150%] group-hover:-translate-y-[150%]">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                  <g id="Arrow / Arrow_Up_Right_MD">
                    <path
                      id="Vector"
                      d="M7 17L17 7M17 7H9M17 7V15"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                </svg>
              </span>
              <span className="absolute inline-flex [&>svg]:w-5 [&>svg]:h-5 transition-transform duration-500 -translate-x-[150%] translate-y-[150%] group-hover:translate-x-0 group-hover:translate-y-0">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                  <g id="Arrow / Arrow_Up_Right_MD">
                    <path
                      id="Vector"
                      d="M7 17L17 7M17 7H9M17 7V15"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                </svg>
              </span>
              <span className="absolute top-0 -left-[100%] w-[50%] h-full bg-gradient-to-r from-transparent via-white/60 to-transparent skew-x-[-25deg] transition-transform duration-700 group-hover:translate-x-[400%] pointer-events-none z-10"></span>
            </span>
          </a>
        </div>

        {/* Footer Middle Links & Info */}
        <div className="py-10 lg:py-16 border-y border-white/20 flex flex-col lg:grid lg:grid-cols-12 gap-10 lg:gap-0">
          <div className="lg:col-span-3">
            <div className="mb-10">
              <div className="mb-5">
                <a
                  href="/"
                  onClick={(e) => handleLinkClick(e, "/")}
                  className="flex items-center gap-3 md:gap-5 hover:opacity-70 transition-opacity duration-300"
                >
                  <img src="/assets/logo.svg" alt="logo" className="size-10 md:size-12" />
                  <div className="text-white">
                    <strong className="font-bold text-sm md:text-lg leading-[1.4]">
                      Bali bagus Journey<span className="text-primary">.</span>
                    </strong>
                    <p className="text-xs md:text-sm font-medium text-white/80">Local Tour & Driver</p>
                  </div>
                </a>
              </div>
              <p className="text-text-label-primary text-sm leading-relaxed">
                Trusted local drivers, curated tours, and seamless airport transfers. We help travelers experience the real Bali, reliably and comfortably.
              </p>
            </div>

            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/balibagusjourney/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="border border-text-label-secondary p-3 rounded-full hover:bg-white hover:text-foreground transition duration-400"
              >
                <svg className="size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a
                href="https://facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="border border-text-label-secondary p-3 rounded-full hover:bg-white hover:text-foreground transition duration-400"
              >
                <svg className="size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a
                href="https://www.tiktok.com/@bali.bagus.journe"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="border border-text-label-secondary p-3 rounded-full hover:bg-white hover:text-foreground transition duration-400"
              >
                <svg className="size-5" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path fill="currentColor" d="M448.5 209.9c-44 .1-87-13.6-122.8-39.2l0 178.7c0 33.1-10.1 65.4-29 92.6s-45.6 48-76.6 59.6-64.8 13.5-96.9 5.3-60.9-25.9-82.7-50.8-35.3-56-39-88.9 2.9-66.1 18.6-95.2 40-52.7 69.6-67.7 62.9-20.5 95.7-16l0 89.9c-15-4.7-31.1-4.6-46 .4s-27.9 14.6-37 27.3-14 28.1-13.9 43.9 5.2 31 14.5 43.7 22.4 22.1 37.4 26.9 31.1 4.8 46-.1 28-14.4 37.2-27.1 14.2-28.1 14.2-43.8l0-349.4 88 0c-.1 7.4 .6 14.9 1.9 22.2 3.1 16.3 9.4 31.9 18.7 45.7s21.3 25.6 35.2 34.6c19.9 13.1 43.2 20.1 67 20.1l0 87.4z"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="hidden lg:block lg:col-span-1"></div>

          <div className="lg:col-span-8 flex flex-col md:grid md:grid-cols-2 lg:grid lg:grid-cols-9 gap-10 lg:gap-0">
            <div className="lg:col-span-3">
              <h3 className="mb-4 text-lg font-medium text-white">Explore Bali</h3>
              <div className="flex flex-col gap-3">
                <a
                  href="/tours"
                  onClick={(e) => handleLinkClick(e, "/tours")}
                  className="text-text-label-secondary hover:text-white transition duration-300 ease-in-out"
                >
                  Bali Tours & Activities
                </a>
                <a
                  href="/transport"
                  onClick={(e) => handleLinkClick(e, "/transport")}
                  className="text-text-label-secondary hover:text-white transition duration-300 ease-in-out"
                >
                  Private Transport
                </a>
                <a
                  href="/transport"
                  onClick={(e) => handleLinkClick(e, "/transport")}
                  className="text-text-label-secondary hover:text-white transition duration-300 ease-in-out"
                >
                  Airport Transfer
                </a>
                <a
                  href="/tours"
                  onClick={(e) => handleLinkClick(e, "/tours")}
                  className="text-text-label-secondary hover:text-white transition duration-300 ease-in-out"
                >
                  Popular Destination
                </a>
              </div>
            </div>

            <div className="lg:col-span-3">
              <h3 className="mb-4 text-lg font-medium text-white">Company</h3>
              <div className="flex flex-col gap-3">
                <a
                  href="/about"
                  onClick={(e) => handleLinkClick(e, "/about")}
                  className="text-text-label-secondary hover:text-white transition duration-300 ease-in-out"
                >
                  About Us
                </a>
                <a
                  href="/gallery"
                  onClick={(e) => handleLinkClick(e, "/gallery")}
                  className="text-text-label-secondary hover:text-white transition duration-300 ease-in-out"
                >
                  Gallery
                </a>
                <a
                  href="/blogs"
                  onClick={(e) => handleLinkClick(e, "/blogs")}
                  className="text-text-label-secondary hover:text-white transition duration-300 ease-in-out"
                >
                  Blog & Articles
                </a>
                <a
                  href="/about"
                  onClick={(e) => handleLinkClick(e, "/about")}
                  className="text-text-label-secondary hover:text-white transition duration-300 ease-in-out"
                >
                  FaQ
                </a>
              </div>
            </div>

            <div className="md:col-span-2 lg:col-span-3">
              <h3 className="mb-4 text-lg font-medium text-white">Get In Touch</h3>
              <div className="flex flex-col gap-3">
                <a
                  href="mailto:balibagusjourney@gmail.com"
                  className="text-text-label-secondary hover:text-white transition duration-300 ease-in-out flex items-center gap-3"
                >
                  <div className="p-2 border border-text-label-secondary rounded-lg w-fit shrink-0">
                    <svg className="size-4 text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </div>
                  <p className="text-sm">balibagusjourney@gmail.com</p>
                </a>

                <a
                  href="tel:+6285934484380"
                  className="text-text-label-secondary hover:text-white transition duration-300 ease-in-out flex items-center gap-3"
                >
                  <div className="p-2 border border-text-label-secondary rounded-lg w-fit shrink-0">
                    <svg className="size-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                    </svg>
                  </div>
                  <p className="text-sm">+62 859-3448-4380</p>
                </a>

                <a
                  href="https://maps.google.com/?q=Jl.%20Puputan%20Baru%20Gg.%20VI%20A%20No.26,%20Tegal%20Kertha,%20Kec.%20Denpasar%20Bar.,%20Kota%20Denpasar,%20Bali%2080111,%20Indonesia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-label-secondary hover:text-white transition duration-300 ease-in-out flex items-center gap-3"
                >
                  <div className="p-2 border border-text-label-secondary rounded-lg w-fit shrink-0">
                    <svg className="size-4 text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <p className="text-xs leading-relaxed">
                    Jl. Puputan Baru Gg. VI A No.26, Tegal Kertha, Kec. Denpasar Bar., Kota Denpasar, Bali 80111, Indonesia
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>

        <p className="text-text-label-secondary font-medium mt-8 lg:mt-10 text-center lg:text-left text-sm lg:text-base">
          © 2026 Bali Bagus Journey. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
