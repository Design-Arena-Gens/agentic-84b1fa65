"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps {
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
}

const styles = {
  primary:
    "bg-kling-500 hover:bg-kling-400 text-white shadow-glow transition-all duration-200",
  secondary:
    "bg-white/10 hover:bg-white/15 text-white border border-white/20 backdrop-blur",
  ghost: "bg-transparent hover:bg-white/10 text-white"
} as const;

export function Button({ href, children, variant = "primary", className }: ButtonProps) {
  const content = (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium",
        styles[variant],
        className
      )}
    >
      {children}
    </span>
  );

  if (href) {
    if (href.startsWith("#")) {
      return (
        <a href={href} className="inline-block">
          {content}
        </a>
      );
    }

    return (
      <Link href={href} className="inline-block">
        {content}
      </Link>
    );
  }

  return content;
}
