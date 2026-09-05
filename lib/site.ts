export const SITE = {
  name: "The Yogic Times",
  abbreviation: "TYT",
  tagline: "For Conscious Living",
  philosophy: "Ancient wisdom. Modern understanding. A more conscious way of living.",
  description:
    "The Yogic Times is an independent editorial publication exploring how a human being can live more consciously — through yogic wisdom, practice, food, culture, nature, and modern understanding.",
  url: "https://theyogictimes.com",
  locale: "en_IN",
  ogImage: "/images/placeholder.svg",
  contactEmail: "namaste@theyogictimes.com",
} as const;

export const NAV = [
  { href: "/read", label: "Read" },
  { href: "/practice", label: "Practice" },
  { href: "/yogiclock", label: "YogiClock" },
  { href: "/about", label: "About" },
] as const;
