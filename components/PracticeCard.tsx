import Link from "next/link";

export function PracticeCard({
  title,
  description,
  href,
}: {
  title: string;
  description: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="block border-t border-forest/20 py-6 transition-colors hover:border-forest"
    >
      <h3 className="font-serif text-2xl text-forest">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-stone">{description}</p>
    </Link>
  );
}
