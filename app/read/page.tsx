import type { Metadata } from "next";
import Link from "next/link";
import { ArticleCard } from "@/components/ArticleCard";
import { categories, getLatest } from "@/lib/content";

export const metadata: Metadata = {
  title: "Read",
  description: "Essays and notes on conscious living, sadhana, food, wisdom, nature, and culture.",
  alternates: { canonical: "/read" },
};

export default function ReadIndexPage() {
  const latest = getLatest(12);
  return (
    <div className="container-editorial py-16">
      <p className="kicker">The archive</p>
      <h1 className="mt-3 font-serif text-5xl text-forest">Read</h1>
      <p className="mt-4 max-w-xl text-stone leading-relaxed">
        Editorial writing across six pillars. Sample pieces establish tone and
        structure; they are not presented as reported journalism.
      </p>
      <nav className="mt-10 flex flex-wrap gap-x-6 gap-y-2 border-y border-mist py-4 text-sm">
        {categories.map((c) => (
          <Link key={c.slug} href={`/read/${c.slug}`} className="text-forest hover:underline">
            {c.name}
          </Link>
        ))}
      </nav>
      <div className="mt-12 grid gap-12 md:grid-cols-2">
        {latest.map((a) => (
          <ArticleCard key={a.id} article={a} />
        ))}
      </div>
    </div>
  );
}
