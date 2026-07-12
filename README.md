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
- `src/components/` — header/footer and homepage sections.
- `src/content/en.ts` / `zh.ts` — all copy, typed by `src/content/types.ts`. The Chinese
  copy is a stub translation pending replacement with the live site's published Chinese.

## Deployment

Pushes to `main` build and deploy to GitHub Pages via
[.github/workflows/deploy.yml](.github/workflows/deploy.yml). The build sets
`GITHUB_PAGES=true`, which enables the `/cbcounselor` basePath (see `next.config.ts`).
Pull requests run lint + build via [.github/workflows/ci.yml](.github/workflows/ci.yml).

## Docs

- `PLAN.md` — session-by-session roadmap to launch.
- `DESIGN-NOTES.md` — design rationale.
