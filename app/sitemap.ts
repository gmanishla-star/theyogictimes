import type { MetadataRoute } from "next";
import { articles, categories } from "@/lib/content";
import { SITE } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = ["", "/read", "/practice", "/yogiclock", "/about", "/search", "/privacy", "/terms"].map(
    (path) => ({
      url: `${SITE.url}${path}`,
      lastModified: new Date(),
    })
  );
  const cats = categories.map((c) => ({
    url: `${SITE.url}/read/${c.slug}`,
    lastModified: new Date(),
  }));
  const posts = articles.map((a) => ({
    url: `${SITE.url}/read/${a.category}/${a.slug}`,
    lastModified: new Date(a.publishedAt),
  }));
  return [...staticPages, ...cats, ...posts];
}
