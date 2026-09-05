export type CategorySlug =
  | "conscious-living"
  | "sadhana"
  | "conscious-eating"
  | "yogic-wisdom"
  | "nature-and-science"
  | "culture";

export interface Author {
  id: string;
  name: string;
  bio: string;
}

export interface Category {
  id: string;
  name: string;
  slug: CategorySlug;
  description: string;
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: CategorySlug;
  authorId: string;
  publishedAt: string;
  readingTime: number;
  heroImage: string;
  heroAlt: string;
  heroCaption?: string;
  heroCredit?: string;
  excerpt: string;
  body: string[];
  pullQuote?: string;
  tags: string[];
  featured?: boolean;
  demo?: boolean;
}
