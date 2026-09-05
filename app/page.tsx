import Link from "next/link";
import { ArticleCard } from "@/components/ArticleCard";
import { YogiClockPromo } from "@/components/YogiClockPromo";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import {
  articles,
  categories,
  formatDate,
  getArticlesByCategory,
  getCategory,
  getFeatured,
  getLatest,
} from "@/lib/content";

export default function HomePage() {
  const featured = getFeatured()[0] ?? articles[0];
  const latest = getLatest(8).filter((a) => a.id !== featured.id);
  const secondary = latest[0];
  const smaller = latest.slice(1, 4);
  const cat = getCategory(featured.category);
  const href = `/read/${featured.category}/${featured.slug}`;
  const liveCategories = categories.filter((c) => getArticlesByCategory(c.slug).length > 0);

  return (
    <>
      <section className="container-editorial grid items-end gap-10 py-10 sm:py-16 lg:grid-cols-12 lg:py-20">
        <div className="lg:col-span-7">
          <Link href={href} className="block overflow-hidden bg-paper">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={featured.heroImage}
              alt={featured.heroAlt}
              className="aspect-[16/10] w-full object-cover sm:aspect-[16/9]"
            />
          </Link>
        </div>
        <div className="lg:col-span-5 lg:pb-2">
          <p className="kicker">
            {cat?.name} · {featured.readingTime} min read
          </p>
          <h1 className="mt-4 font-serif text-4xl leading-[1.08] text-forest sm:text-5xl lg:text-[3.25rem]">
            <Link href={href}>{featured.title}</Link>
          </h1>
          <p className="mt-5 font-serif text-xl leading-snug text-forest-mid">{featured.subtitle}</p>
          <p className="mt-4 text-stone leading-relaxed">{featured.excerpt}</p>
          <p className="mt-5 text-xs text-stone">
            The Yogic Times Editorial · {formatDate(featured.publishedAt)}
            {featured.demo ? " · Sample" : ""}
          </p>
          <Link
            href={href}
            className="mt-6 inline-block text-[12px] uppercase tracking-wideish text-forest"
          >
            Read the story →
          </Link>
        </div>
      </section>

      <section className="container-editorial border-t border-mist py-14 sm:py-16">
        <div className="mb-10 flex items-baseline justify-between gap-4">
          <h2 className="font-serif text-3xl text-forest">Latest</h2>
          <Link href="/read" className="text-[12px] uppercase tracking-wideish text-forest">
            All stories →
          </Link>
        </div>
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            {secondary ? <ArticleCard article={secondary} large /> : null}
          </div>
          <div className="flex flex-col gap-2 lg:col-span-5">
            {smaller.map((a) => (
              <ArticleCard key={a.id} article={a} compact />
            ))}
          </div>
        </div>
      </section>

      <section className="container-editorial border-t border-mist py-14 sm:py-16">
        <h2 className="font-serif text-3xl text-forest">Explore by subject</h2>
        <div className="mt-8 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {liveCategories.map((c) => (
            <Link key={c.slug} href={`/read/${c.slug}`} className="group border-t border-mist pt-5">
              <h3 className="font-serif text-2xl text-forest group-hover:underline">{c.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-stone">{c.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="container-editorial grid gap-10 border-t border-mist py-16 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <p className="kicker">Read → Reflect → Practice</p>
          <h2 className="mt-3 font-serif text-3xl text-forest sm:text-4xl">Not only ideas.</h2>
        </div>
        <div className="lg:col-span-8 max-w-2xl">
          <p className="text-lg leading-relaxed text-stone">
            The Yogic Times is a publication. Practice is the other motion:
            taking what has been read into the grain of a day — sitting,
            eating, beginning again.
          </p>
          <Link
            href="/practice"
            className="mt-6 inline-block text-[12px] uppercase tracking-wideish text-forest"
          >
            Enter practice →
          </Link>
        </div>
      </section>

      <YogiClockPromo />

      <section className="container-editorial grid gap-10 py-20 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <p className="kicker">Editor’s note</p>
          <h2 className="mt-3 font-serif text-3xl text-forest">
            What does it mean to live consciously?
          </h2>
        </div>
        <div className="lg:col-span-7 space-y-4 text-stone leading-relaxed">
          <p>
            Not a brand of purity. Not a costume of calm. As we use the phrase,
            conscious living is the practice of noticing how one actually moves
            through a day — and choosing, when possible, a more honest contact
            with it.
          </p>
          <p>
            We read traditional wisdom as wisdom, and science as science. We do
            not dress one in the authority of the other.
          </p>
          <Link href="/about" className="inline-block text-[12px] uppercase tracking-wideish text-forest">
            Our approach →
          </Link>
        </div>
      </section>

      <NewsletterSignup />
    </>
  );
}
