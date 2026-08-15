import React from "react";
import { MessageCircle } from "lucide-react";
import { siteConfig } from "../../data/siteConfig";

export const FloatingWhatsApp: React.FC = () => {
  return (
    <a
      id="floating-whatsapp-button"
      href={siteConfig.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Bali Bagus Journey on WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white px-4 py-3 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 group"
    >
      <MessageCircle className="size-6 fill-white shrink-0 animate-bounce" />
      <span className="text-sm font-bold hidden sm:inline-block pr-1">
        Chat with Us
      </span>
      <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-red-500"></span>
      </span>
    </a>
  );
};
