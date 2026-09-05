import type { Article, Author, Category } from "./types";

export const authors: Author[] = [
  {
    id: "editorial",
    name: "The Yogic Times Editorial",
    bio: "Desk of The Yogic Times. Seed pieces are sample editorial writing, not reported journalism.",
  },
];

export const categories: Category[] = [
  {
    id: "conscious-living",
    name: "Conscious Living",
    slug: "conscious-living",
    description:
      "Everyday awareness — attention, habits, work, rest, technology, relationships, and the quiet art of being present.",
  },
  {
    id: "sadhana",
    name: "Yoga & Sadhana",
    slug: "sadhana",
    description:
      "Practice as a lived discipline: beginning again, sitting with silence, and the ordinary work of inner attention.",
  },
  {
    id: "conscious-eating",
    name: "Conscious Eating",
    slug: "conscious-eating",
    description:
      "How we meet food — tradition, attention, habit, and the body — without turning meals into doctrine.",
  },
  {
    id: "yogic-wisdom",
    name: "Yogic Wisdom",
    slug: "yogic-wisdom",
    description:
      "Ideas, texts, and teachings from the yogic traditions, held with curiosity rather than dogma.",
  },
  {
    id: "nature-and-science",
    name: "Science & Nature",
    slug: "nature-and-science",
    description:
      "Nature, human biology, and scientific understanding relevant to conscious living — clearly distinguished from traditional claims.",
  },
  {
    id: "culture",
    name: "Culture",
    slug: "culture",
    description:
      "Indian culture, ritual, art, and the contemporary questions that arise when tradition meets modern life.",
  },
];

/**
 * Seed articles. Clearly marked as demo/editorial placeholders.
 * Replace via CMS later without changing page templates.
 */
export const articles: Article[] = [
  {
    id: "1",
    slug: "learning-to-be-where-you-are",
    title: "Learning to Be Where You Are",
    subtitle: "Attention is not a luxury. It is the ground of a conscious life.",
    category: "conscious-living",
    authorId: "editorial",
    publishedAt: "2026-08-12",
    readingTime: 7,
    heroImage: "/images/placeholder.svg",
    heroAlt: "Quiet interior light falling across a wooden table",
    heroCaption: "Placeholder image — photography will replace this.",
    heroCredit: "TYT placeholder",
    excerpt:
      "Most of us live a few minutes ahead of ourselves. This essay considers what it means to arrive — not as a slogan, but as a daily practice of attention.",
    body: [
      "This is sample editorial content for The Yogic Times. It is a placeholder, written to establish tone rather than to report news or claim authority.",
      "To live consciously is, first, to notice where the mind has gone. Not to scold it. Not to decorate the noticing with spiritual language. Simply to return.",
      "The yogic traditions have long treated attention as a craft. Modern life treats it as a resource to be extracted. Between those two views sits the ordinary day: messages, meals, work, rest.",
      "A more conscious way of living does not require leaving the world. It requires meeting it without being entirely used by it.",
    ],
    pullQuote: "A more conscious way of living does not require leaving the world.",
    tags: ["attention", "presence", "daily life"],
    featured: true,
    demo: true,
  },
  {
    id: "2",
    slug: "the-discipline-of-beginning-again",
    title: "The Discipline of Beginning Again",
    subtitle: "Practice is less about perfection than about return.",
    category: "sadhana",
    authorId: "editorial",
    publishedAt: "2026-08-08",
    readingTime: 6,
    heroImage: "/images/placeholder.svg",
    heroAlt: "Early morning light on a simple room",
    excerpt:
      "Sadhana is often imagined as intensity. More often it is the unglamorous decision to start once more — after sleep, after distraction, after failure.",
    body: [
      "Sample essay. In traditional language, sadhana is the path of practice. In lived experience, it is usually smaller: a seat, a breath, a beginning.",
      "The discipline is not never falling away. The discipline is returning without drama.",
      "This is how practice becomes a life rather than an identity.",
    ],
    pullQuote: "The discipline is not never falling away. The discipline is returning without drama.",
    tags: ["sadhana", "practice", "discipline"],
    featured: true,
    demo: true,
  },
  {
    id: "3",
    slug: "what-does-it-mean-to-eat-consciously",
    title: "What Does It Mean to Eat Consciously?",
    subtitle: "Food is not only nutrition. It is relationship.",
    category: "conscious-eating",
    authorId: "editorial",
    publishedAt: "2026-07-29",
    readingTime: 8,
    heroImage: "/images/placeholder.svg",
    heroAlt: "Hands preparing simple food",
    excerpt:
      "Conscious eating is not a diet. It is a way of noticing hunger, habit, culture, and the quiet intelligence of a shared meal.",
    body: [
      "Sample essay. Traditional Indian frameworks speak of food as more than fuel. Modern nutrition speaks of molecules and measures. Both can be useful. Neither should swallow the other.",
      "To eat consciously is to slow the transaction enough to taste it — and to notice what the body, the season, and the company are actually asking for.",
    ],
    tags: ["food", "attention", "habit"],
    demo: true,
  },
  {
    id: "4",
    slug: "why-silence-feels-uncomfortable",
    title: "Why Silence Feels Uncomfortable",
    subtitle: "Stillness is not empty. It is unoccupied.",
    category: "conscious-living",
    authorId: "editorial",
    publishedAt: "2026-07-18",
    readingTime: 5,
    heroImage: "/images/placeholder.svg",
    heroAlt: "Open landscape under a pale sky",
    excerpt:
      "We fill the smallest pause. What happens if we do not? A short reflection on discomfort, noise, and the unused room inside a day.",
    body: [
      "Sample essay. Silence is often treated as a luxury product. It is closer to a basic condition that modern life keeps interrupting.",
      "The discomfort is information. It is not a verdict against you.",
    ],
    tags: ["silence", "attention"],
    demo: true,
  },
  {
    id: "5",
    slug: "the-morning-before-the-world-wakes",
    title: "The Morning Before the World Wakes",
    subtitle: "A traditional hour, a modern life, and the question of rhythm.",
    category: "yogic-wisdom",
    authorId: "editorial",
    publishedAt: "2026-07-04",
    readingTime: 9,
    heroImage: "/images/placeholder.svg",
    heroAlt: "Pre-dawn sky over trees",
    excerpt:
      "Yogic tradition speaks of Brahma Muhurta as a fertile hour before sunrise. This piece holds that idea as tradition — not as a medical claim — and asks what rhythm still means.",
    body: [
      "In the yogic tradition, the period before dawn is often described as Brahma Muhurta — a time considered conducive to study and inner practice. That is a traditional framework, not a biomedical statement.",
      "Modern understanding of sleep, light, and circadian biology offers another language for why mornings feel different. The two languages need not compete if we refuse to collapse them into each other.",
      "What remains practical is simpler: how we meet the first hour of the day often sets the texture of the rest.",
    ],
    pullQuote: "The two languages need not compete if we refuse to collapse them into each other.",
    tags: ["brahma-muhurta", "rhythm", "tradition"],
    featured: true,
    demo: true,
  },
  {
    id: "6",
    slug: "can-technology-become-a-practice-of-awareness",
    title: "Can Technology Become a Practice of Awareness?",
    subtitle: "Tools shape attention. Attention shapes a life.",
    category: "conscious-living",
    authorId: "editorial",
    publishedAt: "2026-06-22",
    readingTime: 8,
    heroImage: "/images/placeholder.svg",
    heroAlt: "A simple desk with a notebook and a closed device",
    excerpt:
      "Devices are not neutral. Neither is refusal. This essay asks whether a tool can serve awareness rather than harvest it.",
    body: [
      "Sample essay. Technology is often framed as either salvation or ruin. Conscious living requires a third posture: discernment.",
      "A clock can fragment a day. A clock can also remind a person of dusk, of meal, of rest. The difference is design — and the intention of the one who uses it.",
    ],
    tags: ["technology", "attention", "tools"],
    demo: true,
  },
  {
    id: "7",
    slug: "attention-is-a-kind-of-care",
    title: "Attention Is a Kind of Care",
    subtitle: "What we look at, we feed.",
    category: "conscious-living",
    authorId: "editorial",
    publishedAt: "2026-06-10",
    readingTime: 5,
    heroImage: "/images/placeholder.svg",
    heroAlt: "Hands holding an open book",
    excerpt:
      "Care is not only feeling. It is the decision to stay with what is in front of you long enough to see it clearly.",
    body: [
      "Sample essay. Relationships, work, and the inner life all suffer the same drought: partial attention dressed up as presence.",
      "To look carefully is already a moral act, even before we speak of spirituality.",
    ],
    tags: ["attention", "relationships"],
    demo: true,
  },
  {
    id: "8",
    slug: "the-body-as-a-place-of-practice",
    title: "The Body as a Place of Practice",
    subtitle: "Yoga did not begin as a performance.",
    category: "sadhana",
    authorId: "editorial",
    publishedAt: "2026-05-28",
    readingTime: 7,
    heroImage: "/images/placeholder.svg",
    heroAlt: "Bare feet on a stone floor",
    excerpt:
      "The body is not an obstacle to a conscious life. It is one of its primary rooms.",
    body: [
      "Sample essay. In classical yoga, the body is trained so that attention can rest. In much of contemporary culture, the body is trained so that it can be seen.",
      "Those aims produce different days.",
    ],
    tags: ["yoga", "body", "sadhana"],
    demo: true,
  },
  {
    id: "9",
    slug: "seasons-and-the-human-nervous-system",
    title: "Seasons and the Human Nervous System",
    subtitle: "Nature keeps time whether we consult it or not.",
    category: "nature-and-science",
    authorId: "editorial",
    publishedAt: "2026-05-14",
    readingTime: 8,
    heroImage: "/images/placeholder.svg",
    heroAlt: "Trees at the edge of changing light",
    excerpt:
      "Circadian and seasonal rhythms are biological facts. Traditional calendars are cultural maps. Holding both with care is part of TYT’s editorial approach.",
    body: [
      "Human physiology responds to light, temperature, and the length of day. That is a scientific observation, supported by a large body of circadian research.",
      "Traditional Indian calendars and Ayurvedic seasonal frameworks offer another way of organizing the year. Those frameworks should be named as tradition.",
      "A conscious life can listen to both without pretending they are the same sentence.",
    ],
    tags: ["nature", "science", "rhythm"],
    demo: true,
  },
  {
    id: "10",
    slug: "ritual-without-performance",
    title: "Ritual Without Performance",
    subtitle: "What remains when ceremony is no longer for display.",
    category: "culture",
    authorId: "editorial",
    publishedAt: "2026-04-30",
    readingTime: 6,
    heroImage: "/images/placeholder.svg",
    heroAlt: "A simple courtyard at dusk",
    excerpt:
      "Indian life is thick with ritual. Some of it is living. Some of it is costume. This essay asks how a contemporary person might keep the living part.",
    body: [
      "Sample essay. Ritual can be a container for attention. It can also become a performance of identity.",
      "The difference is usually private, and therefore easy to miss.",
    ],
    tags: ["culture", "ritual", "india"],
    demo: true,
  },
];

export function getAuthor(id: string) {
  return authors.find((a) => a.id === id);
}

export function getCategory(slug: string) {
  return categories.find((c) => c.slug === slug);
}

export function getArticle(category: string, slug: string) {
  return articles.find((a) => a.category === category && a.slug === slug);
}

export function getArticlesByCategory(slug: string) {
  return articles
    .filter((a) => a.category === slug)
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}

export function getFeatured() {
  return articles.filter((a) => a.featured);
}

export function getLatest(n = 8) {
  return [...articles].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt)).slice(0, n);
}

export function relatedArticles(article: Article, n = 3) {
  return articles
    .filter((a) => a.id !== article.id && (a.category === article.category || a.tags.some((t) => article.tags.includes(t))))
    .slice(0, n);
}

export function searchArticles(q: string) {
  const s = q.trim().toLowerCase();
  if (!s) return [];
  return articles.filter((a) => {
    const cat = getCategory(a.category);
    return (
      a.title.toLowerCase().includes(s) ||
      a.subtitle.toLowerCase().includes(s) ||
      a.excerpt.toLowerCase().includes(s) ||
      a.tags.some((t) => t.includes(s)) ||
      cat?.name.toLowerCase().includes(s)
    );
  });
}

export function formatDate(iso: string) {
  return new Date(iso + "T00:00:00").toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
