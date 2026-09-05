import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "YogiClock",
  description:
    "YogiClock is the practical companion to The Yogic Times: astronomical time, Brahma Muhurta, Sandhya Kala, Panchang, Daily Rhythm and Sadhana.",
  alternates: { canonical: "/yogiclock" },
};

const ideas = [
  {
    title: "Astronomical Time",
    body: "Sunrise, sunset, and solar position are observable facts. They are the spine of the day.",
  },
  {
    title: "Brahma Muhurta",
    body: "In the yogic tradition, the pre-dawn period is often described as suited to study and inner practice. A traditional description — not a clinical prescription.",
  },
  {
    title: "Sandhya Kala",
    body: "Dawn and dusk are treated in many Indian traditions as thresholds. YogiClock marks them as time, not as magic.",
  },
  {
    title: "Panchang",
    body: "The traditional five-limbed calendar is a cultural-astronomical map. It sits beside, not above, modern civil time.",
  },
  {
    title: "Daily Rhythm",
    body: "A practical layer: work, eat, rest, turn toward practice — informed by light and habit as much as by text.",
  },
  {
    title: "Sadhana",
    body: "Structure for beginning again. Practice remains yours; a clock only keeps the door visible.",
  },
];

export default function YogiClockPage() {
  return (
    <>
      <section className="container-editorial py-16 sm:py-24">
        <p className="kicker">The Yogic Times</p>
        <p className="mt-3 font-serif text-2xl text-forest-mid">Ideas for conscious living.</p>
        <p className="mt-8 font-sans text-xs uppercase tracking-wideish text-stone">↓</p>
        <h1 className="mt-6 max-w-3xl font-serif text-4xl leading-tight text-forest sm:text-6xl">
          YogiClock
        </h1>
        <p className="mt-4 font-serif text-2xl text-forest">
          Live in rhythm with the natural day.
        </p>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-stone">
          TYT is the publication. YogiClock is the practice companion in the
          same ecosystem — astronomical timing held next to traditional Yogic
          and Ayurvedic frameworks. It is not a medical device and does not
          claim to treat or cure.
        </p>
        <p className="mt-8 text-sm text-stone">
          App availability will be listed here when it exists. No store links yet.
        </p>
      </section>
      <section className="container-editorial grid gap-x-10 gap-y-12 border-t border-mist py-16 sm:grid-cols-2 lg:grid-cols-3">
        {ideas.map((item) => (
          <div key={item.title} className="border-t border-mist pt-5">
            <h2 className="font-serif text-2xl text-forest">{item.title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-stone">{item.body}</p>
          </div>
        ))}
      </section>
      <section className="container-editorial max-w-measure pb-20">
        <h2 className="font-serif text-3xl text-forest">Two names, one question</h2>
        <p className="mt-4 leading-relaxed text-stone">
          How can a human being live more consciously? The magazine stays with
          the question. The clock stays with the day.
        </p>
        <Link href="/about" className="mt-6 inline-block text-[12px] uppercase tracking-wideish text-forest">
          Read the relationship →
        </Link>
      </section>
    </>
  );
}
