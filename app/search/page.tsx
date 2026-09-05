"use client";

import { Suspense, useMemo } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { ArticleCard } from "@/components/ArticleCard";
import { searchArticles } from "@/lib/content";

function SearchInner() {
  const params = useSearchParams();
  const router = useRouter();
  const q = params.get("q") ?? "";
  const results = useMemo(() => searchArticles(q), [q]);

  return (
    <div className="container-editorial py-16 sm:py-20">
      <p className="kicker">Search</p>
      <h1 className="mt-3 font-serif text-5xl text-forest">Find a piece</h1>
      <form
        className="mt-8 flex max-w-xl flex-col gap-3 sm:flex-row"
        action="/search"
        onSubmit={(e) => {
          e.preventDefault();
          const fd = new FormData(e.currentTarget);
          const next = String(fd.get("q") || "");
          router.push(next ? `/search?q=${encodeURIComponent(next)}` : "/search");
        }}
      >
        <label htmlFor="q" className="sr-only">
          Search articles
        </label>
        <input
          id="q"
          name="q"
          defaultValue={q}
          placeholder="Titles, subjects, tags"
          className="h-12 flex-1 border border-mist bg-ivory px-4 text-base sm:text-sm"
        />
        <button
          type="submit"
          className="h-12 bg-forest px-6 text-xs uppercase tracking-wideish text-ivory"
        >
          Search
        </button>
      </form>
      <p className="mt-4 text-sm text-stone">Local search across seed articles only.</p>
      <div className="mt-12">
        {!q ? (
          <p className="text-stone">Type a word to look through the sample archive.</p>
        ) : results.length === 0 ? (
          <p className="text-stone">Nothing in the seed archive matches “{q}”.</p>
        ) : (
          <div className="grid gap-8 md:grid-cols-2">
            {results.map((a) => (
              <ArticleCard key={a.id} article={a} compact />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="container-editorial py-16 text-stone">Loading search…</div>}>
      <SearchInner />
    </Suspense>
  );
}
