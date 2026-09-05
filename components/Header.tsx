"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Logo } from "./Logo";
import { MobileNavigation } from "./MobileNavigation";
import { NAV } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-mist/70 bg-ivory/92 backdrop-blur-md">
      <div className="container-editorial flex h-[3.75rem] items-center justify-between gap-4 sm:h-[4.25rem]">
        <Logo compact />
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {NAV.map((item) => {
            const active =
              pathname === item.href || pathname.startsWith(item.href + "/");
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`font-sans text-[12px] uppercase tracking-wideish ${
                  active ? "text-forest" : "text-stone hover:text-forest"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/search"
            className={`font-sans text-[12px] uppercase tracking-wideish ${
              pathname.startsWith("/search") ? "text-forest" : "text-stone hover:text-forest"
            }`}
          >
            Search
          </Link>
        </nav>
        <div className="flex items-center gap-1 lg:hidden">
          <Link
            href="/search"
            className="inline-flex h-11 w-11 items-center justify-center text-forest"
            aria-label="Search"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
              <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.5" />
              <path d="M20 20L16.5 16.5" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </Link>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center text-forest"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.5" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.5" />
              )}
            </svg>
          </button>
        </div>
      </div>
      <MobileNavigation open={open} onClose={() => setOpen(false)} />
    </header>
  );
}
