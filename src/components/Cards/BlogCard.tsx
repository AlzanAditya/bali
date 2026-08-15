import React from "react";
import { Clock, Calendar, ArrowUpRight } from "lucide-react";
import { BlogPost } from "../../data/blogs";
import { Badge } from "../UI/Badge";

interface BlogCardProps {
  blog: BlogPost;
  onNavigate?: (path: string) => void;
}

export const BlogCard: React.FC<BlogCardProps> = ({ blog, onNavigate }) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const targetPath = `/blogs/${blog.slug}`;
    if (onNavigate) {
      onNavigate(targetPath);
    } else {
      window.history.pushState({}, "", targetPath);
      window.dispatchEvent(new PopStateEvent("popstate"));
    }
  };

  return (
    <article
      id={`blog-card-${blog.id}`}
      className="group bg-[#f6f6f6] rounded-2xl overflow-hidden border border-[#e5e5e5] hover:border-[#cccccc] transition-all duration-300 flex flex-col justify-between hover:shadow-lg"
    >
      <div className="relative aspect-16/10 overflow-hidden bg-gray-200">
        <img
          src={blog.coverImage}
          alt={blog.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute top-3.5 left-3.5 z-10">
          <Badge variant="white">{blog.category}</Badge>
        </div>
      </div>

      <div className="p-5 sm:p-6 flex flex-col flex-grow justify-between gap-4">
        <div className="space-y-2.5">
          <div className="flex items-center gap-3 text-xs text-[#929090] font-medium">
            <span className="flex items-center gap-1">
              <Calendar className="size-3.5 text-[#fd4621]" />
              {blog.publishedDate}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="size-3.5 text-[#fd4621]" />
              {blog.readTime}
            </span>
          </div>

          <h3 className="text-lg font-bold text-[#131313] group-hover:text-[#fd4621] transition-colors leading-snug line-clamp-2">
            <a href={`/blogs/${blog.slug}`} onClick={handleClick}>
              {blog.title}
            </a>
          </h3>

          <p className="text-xs sm:text-sm text-[#434343] line-clamp-2 leading-relaxed">
            {blog.excerpt}
          </p>
        </div>

        <div className="pt-3 border-t border-[#e5e5e5] flex items-center justify-between">
          <span className="text-xs text-[#929090] font-medium">
            By {blog.author}
          </span>
          <a
            href={`/blogs/${blog.slug}`}
            onClick={handleClick}
            className="inline-flex items-center gap-1 text-xs font-bold text-[#131313] group-hover:text-[#fd4621] transition-colors"
          >
            <span>Read Article</span>
            <span className="p-1 rounded-full bg-[#131313] text-white group-hover:bg-[#fd4621] transition-colors">
              <ArrowUpRight className="size-3" />
            </span>
          </a>
        </div>
      </div>
    </article>
  );
};
