import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container-editorial py-24">
      <p className="kicker">404</p>
      <h1 className="mt-3 font-serif text-4xl text-forest">This page is not here.</h1>
      <p className="mt-4 text-stone">It may have moved, or it may never have existed.</p>
      <Link href="/" className="mt-8 inline-block text-xs uppercase tracking-wideish text-forest">
        Return home →
      </Link>
    </div>
  );
}
