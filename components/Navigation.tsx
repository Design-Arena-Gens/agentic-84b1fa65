"use client";

import Image from "next/image";
import { Button } from "@/components/Button";

const navItems = [
  { label: "Product", href: "#product" },
  { label: "Use cases", href: "#use-cases" },
  { label: "Technology", href: "#technology" },
  { label: "Pricing", href: "#pricing" }
];

export function Navigation() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5">
        <div className="flex items-center gap-3">
          <div className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-2xl bg-kling-500/20">
            <Image src="/assets/logo.svg" alt="Kling logo" width={32} height={32} />
          </div>
          <span className="text-lg font-semibold tracking-wide">Kling</span>
        </div>
        <nav className="hidden items-center gap-8 text-sm font-medium text-white/80 md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="hover:text-white">
              {item.label}
            </a>
          ))}
        </nav>
        <div className="hidden md:block">
          <Button href="#early-access">Request access</Button>
        </div>
      </div>
    </header>
  );
}
