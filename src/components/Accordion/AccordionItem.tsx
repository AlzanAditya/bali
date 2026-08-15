import React from "react";
import { Plus, Minus } from "lucide-react";

interface AccordionItemProps {
  id: string;
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({
  id,
  question,
  answer,
  isOpen,
  onToggle
}) => {
  return (
    <div
      id={`accordion-${id}`}
      className="bg-[#f6f6f6] rounded-2xl border border-[#e5e5e5] transition-colors overflow-hidden"
    >
      <button
        type="button"
        onClick={onToggle}
        className="w-full p-5 sm:p-6 flex items-center justify-between gap-4 text-left font-semibold text-[#131313] hover:text-[#fd4621] transition-colors focus:outline-none"
        aria-expanded={isOpen}
      >
        <span className="text-base sm:text-lg">{question}</span>
        <div
          className={`size-8 sm:size-9 rounded-lg flex items-center justify-center shrink-0 transition-colors duration-300 ${
            isOpen
              ? "bg-[#fd4621] text-white"
              : "bg-white text-[#131313] border border-[#e5e5e5]"
          }`}
        >
          {isOpen ? <Minus className="size-4" /> : <Plus className="size-4" />}
        </div>
      </button>

      {/* Smooth Grid Accordion Expansion */}
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-1 border-t border-[#e5e5e5]/80">
            <p className="text-sm sm:text-base text-[#434343] leading-relaxed">
              {answer}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
