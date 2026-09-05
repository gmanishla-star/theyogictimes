import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms",
  description: "Terms of use placeholder for The Yogic Times. Requires legal review before publication as policy.",
  alternates: { canonical: "/terms" },
  robots: { index: false, follow: true },
};

export default function TermsPage() {
  return (
    <div className="container-editorial max-w-3xl py-16 sm:py-20">
      <p className="kicker">Legal draft</p>
      <h1 className="mt-3 font-serif text-5xl text-forest">Terms</h1>
      <p className="mt-6 leading-relaxed text-stone">
        This page is a placeholder. It is not a finished terms of use document
        and should not be treated as one. Reviewed terms will replace this text.
      </p>
      <p className="mt-4 leading-relaxed text-stone">
        Until then, questions:{" "}
        <a className="text-forest underline" href="mailto:namaste@theyogictimes.com">
          namaste@theyogictimes.com
        </a>
      </p>
    </div>
  );
}
