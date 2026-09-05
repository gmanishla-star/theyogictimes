import Link from "next/link";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link href="/" className="group block" aria-label="The Yogic Times home">
      <div className="flex items-center gap-3">
        <span
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-forest text-[11px] font-sans font-semibold tracking-wideish text-forest"
          aria-hidden
        >
          TYT
        </span>
        <span className={compact ? "hidden sm:block" : "block"}>
          <span className="block font-serif text-lg leading-none text-forest sm:text-xl">
            The Yogic Times
          </span>
          <span className="mt-1 block font-sans text-[10px] uppercase tracking-wideish text-stone">
            For Conscious Living
          </span>
        </span>
      </div>
    </Link>
  );
}
