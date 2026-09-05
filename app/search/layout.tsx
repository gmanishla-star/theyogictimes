import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Search",
  description: "Search sample editorial pieces on The Yogic Times.",
  alternates: { canonical: "/search" },
};

export default function SearchLayout({ children }: { children: React.ReactNode }) {
  return children;
}
