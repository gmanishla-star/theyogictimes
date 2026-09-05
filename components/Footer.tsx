import Link from "next/link";
import { Logo } from "./Logo";
import { NAV } from "@/lib/site";
import { categories } from "@/lib/content";

export function Footer() {
  return (
    <footer className="mt-8 border-t border-mist bg-paper/40">
      <div className="container-editorial grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <Logo />
          <p className="mt-5 max-w-sm font-serif text-xl leading-snug text-forest">
            Ancient wisdom. Modern understanding.
            <br />A more conscious way of living.
          </p>
        </div>
        <div>
          <p className="kicker mb-4">Explore</p>
          <ul className="space-y-2 text-sm text-stone">
            {NAV.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="hover:text-forest">
                  {n.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/search" className="hover:text-forest">
                Search
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="kicker mb-4">Subjects</p>
          <ul className="space-y-2 text-sm text-stone">
            {categories.map((c) => (
              <li key={c.slug}>
                <Link href={`/read/${c.slug}`} className="hover:text-forest">
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="container-editorial flex flex-col gap-2 border-t border-mist py-6 text-xs text-stone sm:flex-row sm:justify-between">
        <p>© {new Date().getFullYear()} The Yogic Times.</p>
        <p className="flex flex-wrap gap-x-4 gap-y-1">
          <a href="mailto:namaste@theyogictimes.com" className="hover:text-forest">
            namaste@theyogictimes.com
          </a>
          <a href="/privacy" className="hover:text-forest">Privacy</a>
          <a href="/terms" className="hover:text-forest">Terms</a>
        </p>
      </div>
    </footer>
  );
}
