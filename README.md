# cbcounselor.com

Marketing site for CBC Law, a cross-border (U.S. ↔ China) law firm — an upgrade of the
live [cbcounselor.com](https://cbcounselor.com/). Built with Next.js (App Router, static
export), TypeScript, Tailwind CSS, and Framer Motion.

## Development

```bash
npm install
npm run dev     # http://localhost:3000 (English) and /zh (Chinese)
npm run lint    # ESLint
npm run build   # static export into out/
```

## Structure

- `src/app/(en)/` and `src/app/(zh)/` — one root layout per locale so each route gets the
  correct `<html lang>`; shared markup lives in `src/app/base-layout.tsx`.
- `src/components/` — shared page chrome, homepage sections, the roster, and attorney
  profile views.
- `src/content/en.ts` / `zh.ts` — localized page copy, typed by `src/content/types.ts`.
- `src/content/attorneys.ts` — the bilingual 23-person roster and profile content ported
  from the firm's published profiles; `/people/[slug]` and `/zh/people/[slug]` are fully
  statically generated.
- `src/content/insights.ts` — complete bilingual article metadata ready for the planned
  local article-body migration.
- `public/people/` and `public/brand/` — local, firm-owned headshots and logo assets.

## Deployment

Pushes to `main` build and deploy to GitHub Pages via
[.github/workflows/deploy.yml](.github/workflows/deploy.yml). The build sets
`GITHUB_PAGES=true`, which enables the `/cbcounselor` basePath (see `next.config.ts`).
Pull requests run lint + build via [.github/workflows/ci.yml](.github/workflows/ci.yml).

## Docs

- `PLAN.md` — session-by-session roadmap to launch.
- `DESIGN-NOTES.md` — design rationale.
