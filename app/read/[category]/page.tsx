import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleCard } from "@/components/ArticleCard";
import { categories, getArticlesByCategory, getCategory } from "@/lib/content";

export function generateStaticParams() {
  return categories.map((c) => ({ category: c.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { category: string };
}): Metadata {
  const cat = getCategory(params.category);
  if (!cat) return {};
  return {
    title: cat.name,
    description: cat.description,
    alternates: { canonical: `/read/${cat.slug}` },
  };
}

export default function CategoryPage({ params }: { params: { category: string } }) {
  const cat = getCategory(params.category);
  if (!cat) notFound();
  const items = getArticlesByCategory(cat.slug);
  return (
    <div className="container-editorial py-16">
      <p className="kicker">Read</p>
      <h1 className="mt-3 font-serif text-5xl text-forest">{cat.name}</h1>
      <p className="mt-4 max-w-2xl text-stone leading-relaxed">{cat.description}</p>
      <div className="mt-12 grid gap-12 md:grid-cols-2">
        {items.map((a) => (
          <ArticleCard key={a.id} article={a} />
        ))}
      </div>
    </div>
  );
}
