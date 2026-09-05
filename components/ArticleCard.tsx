import Link from "next/link";
import type { Article } from "@/lib/types";
import { formatDate, getCategory } from "@/lib/content";

export function ArticleCard({
  article,
  large = false,
  compact = false,
}: {
  article: Article;
  large?: boolean;
  compact?: boolean;
}) {
  const cat = getCategory(article.category);
  const href = `/read/${article.category}/${article.slug}`;

  if (compact) {
    return (
      <article className="border-t border-mist pt-5">
        <p className="kicker">
          {cat?.name}
          <span className="text-stone"> · {article.readingTime} min</span>
        </p>
        <h3 className="mt-2 font-serif text-xl leading-snug text-forest">
          <Link href={href}>{article.title}</Link>
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-stone">{article.excerpt}</p>
      </article>
    );
  }

  return (
    <article className={large ? "grid gap-6 md:grid-cols-12 md:items-start" : "grid gap-4"}>
      <Link href={href} className={`block overflow-hidden bg-paper ${large ? "md:col-span-7" : ""}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={article.heroImage}
          alt={article.heroAlt}
          className="aspect-[16/10] w-full object-cover"
          loading="lazy"
        />
      </Link>
      <div className={large ? "md:col-span-5 md:pt-2" : ""}>
        <p className="kicker">
          {cat?.name} · {formatDate(article.publishedAt)}
        </p>
        <h3 className={`mt-2 font-serif text-forest ${large ? "text-3xl leading-tight sm:text-4xl" : "text-2xl leading-snug"}`}>
          <Link href={href}>{article.title}</Link>
        </h3>
        <p className={`mt-3 leading-relaxed text-stone ${large ? "text-base" : "text-sm"}`}>
          {article.excerpt}
        </p>
        <p className="mt-3 text-xs text-stone">
          {article.readingTime} min read
          {article.demo ? " · Sample" : ""}
        </p>
      </div>
    </article>
  );
}
