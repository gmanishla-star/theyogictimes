import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  articles,
  formatDate,
  getArticle,
  getAuthor,
  getCategory,
  relatedArticles,
} from "@/lib/content";
import { ArticleCard } from "@/components/ArticleCard";
import { SITE } from "@/lib/site";

export function generateStaticParams() {
  return articles.map((a) => ({ category: a.category, slug: a.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { category: string; slug: string };
}): Metadata {
  const article = getArticle(params.category, params.slug);
  if (!article) return {};
  const url = `/read/${article.category}/${article.slug}`;
  const author = getAuthor(article.authorId);
  return {
    title: article.title,
    description: article.excerpt,
    authors: [{ name: author?.name ?? SITE.name }],
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      title: article.title,
      description: article.excerpt,
      url: `${SITE.url}${url}`,
      images: [{ url: article.heroImage, alt: article.heroAlt }],
      publishedTime: article.publishedAt,
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
    },
  };
}

export default function ArticlePage({
  params,
}: {
  params: { category: string; slug: string };
}) {
  const article = getArticle(params.category, params.slug);
  if (!article) notFound();
  const cat = getCategory(article.category);
  const author = getAuthor(article.authorId);
  const related = relatedArticles(article);

  return (
    <article className="pb-20">
      <header className="container-editorial max-w-3xl py-12 sm:py-16">
        <p className="kicker">
          <Link href={`/read/${article.category}`}>{cat?.name}</Link>
        </p>
        <h1 className="mt-5 font-serif text-[2.15rem] leading-[1.12] text-forest sm:text-5xl">
          {article.title}
        </h1>
        <p className="mt-5 font-serif text-xl leading-snug text-forest-mid sm:text-2xl">
          {article.subtitle}
        </p>
        <p className="mt-6 text-sm text-stone">
          {author?.name} · {formatDate(article.publishedAt)} · {article.readingTime} min
          {article.demo ? " · Sample editorial" : ""}
        </p>
      </header>
      <figure className="container-editorial mb-12">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={article.heroImage}
          alt={article.heroAlt}
          className="aspect-[16/8] w-full bg-paper object-cover"
        />
        {(article.heroCaption || article.heroCredit) && (
          <figcaption className="mt-3 text-xs text-stone">
            {article.heroCaption}
            {article.heroCredit ? ` — ${article.heroCredit}` : ""}
          </figcaption>
        )}
      </figure>
      <div className="container-editorial article-body max-w-measure text-ink">
        {article.body.map((p, i) => (
          <p key={i} className={i === 0 ? "" : "mt-5"}>
            {p}
          </p>
        ))}
        {article.pullQuote ? (
          <blockquote className="my-12 border-l border-forest pl-6 font-serif text-2xl leading-snug text-forest sm:text-[1.75rem]">
            {article.pullQuote}
          </blockquote>
        ) : null}
        {article.tags.length ? (
          <ul className="mt-10 flex flex-wrap gap-2 text-[11px] uppercase tracking-wideish text-stone">
            {article.tags.map((t) => (
              <li key={t} className="border border-mist px-2 py-1">
                {t}
              </li>
            ))}
          </ul>
        ) : null}
      </div>
      {related.length ? (
        <section className="container-editorial mt-20 border-t border-mist pt-12">
          <h2 className="mb-8 font-serif text-3xl text-forest">Related</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {related.map((a) => (
              <ArticleCard key={a.id} article={a} compact />
            ))}
          </div>
        </section>
      ) : null}
    </article>
  );
}
