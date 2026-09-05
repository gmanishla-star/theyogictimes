import Link from "next/link";
import type { Article } from "@/lib/types";
import { formatDate, getCategory } from "@/lib/content";

export function FeaturedArticle({ article }: { article: Article }) {
  const cat = getCategory(article.category);
  const href = `/read/${article.category}/${article.slug}`;
  return (
    <article className="grid items-center gap-8 lg:grid-cols-12">
      <Link href={href} className="block overflow-hidden bg-paper lg:col-span-7">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={article.heroImage}
          alt={article.heroAlt}
          className="aspect-[16/10] w-full object-cover"
        />
      </Link>
      <div className="lg:col-span-5">
        <p className="kicker">Today · Featured</p>
        <h2 className="mt-3 font-serif text-4xl leading-tight text-forest sm:text-5xl">
          <Link href={href}>{article.title}</Link>
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-stone">{article.excerpt}</p>
        <p className="mt-4 text-sm text-stone">
          {cat?.name} · {formatDate(article.publishedAt)} · {article.readingTime} min
        </p>
        <Link
          href={href}
          className="mt-6 inline-block font-sans text-xs uppercase tracking-wideish text-forest"
        >
          Read story →
        </Link>
      </div>
    </article>
  );
}
