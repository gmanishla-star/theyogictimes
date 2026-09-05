import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Practice",
  description:
    "Know, practice, live. A gateway from The Yogic Times into sadhana, daily rhythm, yogic time, and conscious eating.",
  alternates: { canonical: "/practice" },
};

const steps = [
  {
    id: "know",
    title: "Know",
    body: "Read slowly. Let an idea settle before you decorate it with a plan.",
    href: "/read",
    link: "Read",
  },
  {
    id: "practice",
    title: "Practice",
    body: "Return to a seat, a meal, a morning. Sadhana is the discipline of beginning again.",
    href: "/read/sadhana",
    link: "Yoga & Sadhana",
  },
  {
    id: "live",
    title: "Live",
    body: "The test is the ordinary day — work, rest, food, other people. Rhythm is how practice leaves the cushion.",
    href: "/yogiclock",
    link: "YogiClock",
  },
];

export default function PracticePage() {
  return (
    <div className="container-editorial py-16 sm:py-20">
      <p className="kicker">Practice</p>
      <h1 className="mt-4 max-w-3xl font-serif text-4xl text-forest sm:text-5xl">
        Know. Practice. Live.
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-stone">
        This is not a course catalogue and not a yoga directory. It is a
        passage from the ideas in The Yogic Times toward the texture of a day.
      </p>

      <ol className="mt-16 grid gap-0 border-t border-mist">
        {steps.map((s, i) => (
          <li key={s.id} id={s.id} className="grid gap-4 border-b border-mist py-10 sm:grid-cols-12">
            <p className="kicker sm:col-span-2">0{i + 1}</p>
            <div className="sm:col-span-10">
              <h2 className="font-serif text-3xl text-forest">{s.title}</h2>
              <p className="mt-3 max-w-xl text-stone leading-relaxed">{s.body}</p>
              <Link href={s.href} className="mt-4 inline-block text-[12px] uppercase tracking-wideish text-forest">
                {s.link} →
              </Link>
            </div>
          </li>
        ))}
      </ol>

      <section id="sadhana" className="mt-16 scroll-mt-24">
        <h2 className="font-serif text-3xl text-forest">Doors</h2>
        <div className="mt-6 grid gap-8 sm:grid-cols-2">
          <Link href="/read/sadhana" className="border-t border-mist pt-5">
            <h3 className="font-serif text-2xl text-forest">Sadhana</h3>
            <p className="mt-2 text-sm text-stone">The ordinary work of return.</p>
          </Link>
          <Link href="/yogiclock" id="daily-rhythm" className="border-t border-mist pt-5 scroll-mt-24">
            <h3 className="font-serif text-2xl text-forest">Daily Rhythm</h3>
            <p className="mt-2 text-sm text-stone">Light, meal, work, rest.</p>
          </Link>
          <Link href="/yogiclock" id="yogic-time" className="border-t border-mist pt-5 scroll-mt-24">
            <h3 className="font-serif text-2xl text-forest">Yogic Time</h3>
            <p className="mt-2 text-sm text-stone">Traditional divisions, named as tradition.</p>
          </Link>
          <Link href="/read/conscious-eating" id="conscious-eating" className="border-t border-mist pt-5 scroll-mt-24">
            <h3 className="font-serif text-2xl text-forest">Conscious Eating</h3>
            <p className="mt-2 text-sm text-stone">Food as relationship rather than performance.</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
