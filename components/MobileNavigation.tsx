"use client";

import Link from "next/link";
import { NAV } from "@/lib/site";
import { categories } from "@/lib/content";

export function MobileNavigation({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  if (!open) return null;
  return (
    <div
      id="mobile-nav"
      className="border-t border-mist bg-ivory lg:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation"
    >
      <nav className="container-editorial flex flex-col py-5">
        {NAV.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={onClose}
            className="py-3 font-serif text-[1.75rem] leading-none text-forest"
          >
            {item.label}
          </Link>
        ))}
        <Link
          href="/search"
          onClick={onClose}
          className="py-3 font-serif text-[1.75rem] leading-none text-forest"
        >
          Search
        </Link>
        <p className="kicker mt-8">Subjects</p>
        {categories.map((c) => (
          <Link
            key={c.slug}
            href={`/read/${c.slug}`}
            onClick={onClose}
            className="min-h-11 py-2 text-sm text-stone"
          >
            {c.name}
          </Link>
        ))}
      </nav>
    </div>
  );
}
