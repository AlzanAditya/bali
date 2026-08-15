import React from "react";
import { ChevronRight, Home } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  onNavigate?: (path: string) => void;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, onNavigate }) => {
  const handleClick = (e: React.MouseEvent, href?: string) => {
    if (!href) return;
    e.preventDefault();
    if (onNavigate) {
      onNavigate(href);
    } else {
      window.history.pushState({}, "", href);
      window.dispatchEvent(new PopStateEvent("popstate"));
    }
  };

  return (
    <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-xs sm:text-sm text-[#929090]">
      <a
        href="/"
        onClick={(e) => handleClick(e, "/")}
        className="flex items-center hover:text-[#fd4621] transition-colors"
      >
        <Home className="size-3.5 mr-1" />
        <span>Home</span>
      </a>
      {items.map((item, idx) => (
        <React.Fragment key={idx}>
          <ChevronRight className="size-3 text-[#cccccc]" />
          {item.href ? (
            <a
              href={item.href}
              onClick={(e) => handleClick(e, item.href)}
              className="hover:text-[#fd4621] transition-colors"
            >
              {item.label}
            </a>
          ) : (
            <span className="font-semibold text-[#131313] truncate max-w-xs sm:max-w-md">
              {item.label}
            </span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};
