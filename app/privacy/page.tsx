import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy",
  description: "Privacy notice placeholder for The Yogic Times. Requires legal review before publication as policy.",
  alternates: { canonical: "/privacy" },
  robots: { index: false, follow: true },
};

export default function PrivacyPage() {
  return (
    <div className="container-editorial max-w-3xl py-16 sm:py-20">
      <p className="kicker">Legal draft</p>
      <h1 className="mt-3 font-serif text-5xl text-forest">Privacy</h1>
      <p className="mt-6 leading-relaxed text-stone">
        This page is a placeholder. It is not a finished privacy policy and
        should not be treated as one. A reviewed policy will replace this text.
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
