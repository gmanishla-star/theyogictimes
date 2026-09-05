import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "What The Yogic Times is, why it exists, and what For Conscious Living means — without dogma or invented history.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <div className="container-editorial max-w-3xl py-16 sm:py-20">
      <p className="kicker">About</p>
      <h1 className="mt-4 font-serif text-5xl text-forest">What is The Yogic Times?</h1>
      <p className="mt-6 text-lg leading-relaxed text-stone">
        An independent editorial publication. Not a yoga magazine, not an
        Ayurveda shop, not a religious organ. A place to think carefully about
        how a person might live with more attention.
      </p>

      <section className="mt-14 border-t border-mist pt-10">
        <h2 className="font-serif text-3xl text-forest">Why it exists</h2>
        <p className="mt-4 leading-relaxed text-stone">
          Because the question is older than a market category. Yogic wisdom,
          practical living, and modern understanding can sit at one table if
          none of them is forced to impersonate the others.
        </p>
      </section>

      <section className="mt-12 border-t border-mist pt-10">
        <h2 className="font-serif text-3xl text-forest">For Conscious Living</h2>
        <p className="mt-4 leading-relaxed text-stone">
          Attention willing to stay. A relationship with food, time, work,
          rest, and other people that is not entirely automatic. Curiosity
          rather than costume. We are not selling purity.
        </p>
      </section>

      <section className="mt-12 border-t border-mist pt-10">
        <h2 className="font-serif text-3xl text-forest">How we write</h2>
        <p className="mt-4 leading-relaxed text-stone">
          Traditional claims are named as traditional claims. Scientific claims
          require appropriate evidence. Editorial interpretation is a third
          voice and should not hide. We will not write that “science proves” a
          practice, or that a clock “detoxes” an organ.
        </p>
      </section>

      <section className="mt-12 border-t border-mist pt-10">
        <h2 className="font-serif text-3xl text-forest">YogiClock</h2>
        <p className="mt-4 leading-relaxed text-stone">
          TYT is the media brand. YogiClock is the practice product. Siblings,
          not synonyms.
        </p>
        <Link href="/yogiclock" className="mt-4 inline-block text-[12px] uppercase tracking-wideish text-forest">
          YogiClock →
        </Link>
      </section>

      <section className="mt-12 border-t border-mist pt-10">
        <h2 className="font-serif text-3xl text-forest">Contact</h2>
        <p className="mt-4 leading-relaxed text-stone">
          <a className="text-forest underline" href="mailto:namaste@theyogictimes.com">
            namaste@theyogictimes.com
          </a>
        </p>
        <p className="mt-6 text-sm text-stone">
          No invented offices, founders, awards, or circulation figures.
          Social accounts will be linked when they exist. Draft{" "}
          <a className="text-forest underline" href="/privacy">Privacy</a> and{" "}
          <a className="text-forest underline" href="/terms">Terms</a> pages
          exist only as placeholders pending legal review.
        </p>
      </section>
    </div>
  );
}
