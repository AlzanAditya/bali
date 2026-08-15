import React from "react";
import { ArrowUpRight } from "lucide-react";

interface AnimatedButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
  type?: "button" | "submit" | "reset";
  variant?: "dark" | "primary" | "outline" | "white";
  size?: "sm" | "md" | "lg";
  className?: string;
  target?: string;
  rel?: string;
  disabled?: boolean;
  icon?: React.ReactNode;
  id?: string;
}

export const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  children,
  href,
  onClick,
  type = "button",
  variant = "dark",
  size = "md",
  className = "",
  target,
  rel,
  disabled = false,
  icon,
  id
}) => {
  const baseStyles = "group inline-flex items-center justify-center gap-3 font-semibold rounded-full cursor-pointer transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#fd4621] select-none";

  const sizeStyles = {
    sm: "text-xs pl-3.5 pr-1.5 py-1.5",
    md: "text-sm pl-5 pr-2 py-2",
    lg: "text-base pl-6 pr-2.5 py-2.5"
  }[size];

  const variantStyles = {
    dark: "bg-[#131313] text-white hover:bg-[#222222]",
    primary: "bg-[#fd4621] text-white hover:bg-[#e03a17]",
    outline: "bg-transparent text-[#131313] border border-[#cccccc] hover:bg-[#f6f6f6]",
    white: "bg-white text-[#131313] hover:bg-[#f6f6f6] shadow-sm"
  }[variant];

  const circleIconBg = variant === "primary" ? "bg-white text-[#fd4621]" : "bg-[#fd4621] text-white";

  const iconSizes = {
    sm: "p-1 size-6",
    md: "p-1.5 size-7",
    lg: "p-2 size-8"
  }[size];

  const innerContent = (
    <>
      <div className="relative overflow-hidden flex items-center justify-center">
        <span className="block transition-transform duration-500 group-hover:translate-y-[150%]">
          {children}
        </span>
        <span className="absolute block transition-transform duration-500 -translate-y-[150%] group-hover:translate-y-0">
          {children}
        </span>
      </div>

      <span
        className={`${circleIconBg} ${iconSizes} rounded-full relative overflow-hidden flex items-center justify-center shrink-0`}
      >
        <span className="inline-flex transition-transform duration-500 group-hover:translate-x-[150%] group-hover:-translate-y-[150%]">
          {icon || <ArrowUpRight className="w-3.5 h-3.5 md:w-4 md:h-4 stroke-[2.5]" />}
        </span>
        <span className="absolute inline-flex transition-transform duration-500 -translate-x-[150%] translate-y-[150%] group-hover:translate-x-0 group-hover:translate-y-0">
          {icon || <ArrowUpRight className="w-3.5 h-3.5 md:w-4 md:h-4 stroke-[2.5]" />}
        </span>
        {/* Glare effect */}
        <span className="absolute top-0 -left-[100%] w-[50%] h-full bg-gradient-to-r from-transparent via-white/60 to-transparent skew-x-[-25deg] transition-transform duration-700 group-hover:translate-x-[400%] pointer-events-none z-10"></span>
      </span>
    </>
  );

  if (href) {
    return (
      <a
        id={id}
        href={href}
        onClick={onClick}
        target={target}
        rel={rel}
        className={`${baseStyles} ${sizeStyles} ${variantStyles} ${className}`}
      >
        {innerContent}
      </a>
    );
  }

  return (
    <button
      id={id}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${sizeStyles} ${variantStyles} ${className}`}
    >
      {innerContent}
    </button>
  );
};
