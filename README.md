# The Yogic Times

Official website for **The Yogic Times** — *For Conscious Living*.

Canonical domain: https://theyogictimes.com

## Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS

## Local development

```bash
cd tyt-web
npm install
npm run dev
```

Open http://localhost:3000

## Build

```bash
npm run build
npm start
```

## Content

Seed articles live in `lib/content.ts`. Replace this module with a CMS adapter later without changing page templates.

## Newsletter

`POST /api/newsletter` is an isolated integration point (currently returns 501).

## Deploy

Vercel is a natural fit:

```bash
npx vercel
```

Set the production domain to theyogictimes.com in the host dashboard. Do not change DNS until ready.

## Notes

- YogiClock is a separate product. This site only publishes an editorial landing page at `/yogiclock`.
- Sample articles are marked as demo content.
- Social URLs are placeholders in `lib/site.ts`.
