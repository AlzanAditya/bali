import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "card" | "white";
  className?: string;
  id?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "card",
  className = "",
  id
}) => {
  const base = "inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wide select-none";
  
  const variants = {
    primary: "bg-[#fd4621] text-white",
    secondary: "bg-[#131313] text-white",
    outline: "bg-transparent border border-[#cccccc] text-[#434343]",
    card: "bg-[#f6f6f6] text-[#434343] border border-[#e5e5e5]",
    white: "bg-white/90 backdrop-blur-sm text-[#131313] shadow-sm"
  }[variant];

  return (
    <span id={id} className={`${base} ${variants} ${className}`}>
      {children}
    </span>
  );
};
