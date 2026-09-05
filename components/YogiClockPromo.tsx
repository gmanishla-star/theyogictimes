import Link from "next/link";

export function YogiClockPromo() {
  return (
    <section className="bg-forest text-ivory">
      <div className="container-editorial grid gap-8 py-16 lg:grid-cols-12 lg:py-24">
        <div className="lg:col-span-8">
          <p className="font-sans text-[11px] uppercase tracking-wideish text-dawn">YogiClock</p>
          <h2 className="mt-3 font-serif text-4xl leading-tight sm:text-5xl">
            Live in rhythm with the natural day.
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ivory/80">
            The publication stays with ideas. YogiClock stays with the day —
            Yogic Time, astronomical rhythms, Panchang, Sadhana and Daily Rhythm
            in one view. A companion, not a medical claim.
          </p>
          <Link
            href="/yogiclock"
            className="mt-8 inline-block border border-ivory/40 px-6 py-3 text-[12px] uppercase tracking-wideish"
          >
            Discover YogiClock →
          </Link>
        </div>
      </div>
    </section>
  );
}
