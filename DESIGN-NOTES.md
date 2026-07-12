# Design Notes & Roadmap

Reference notes from the initial design discussion for the cbcounselor.com rebuild.
The firm is American but has a large Chinese client base — every design decision
should serve both audiences.

## Design Ideas ("pop" while staying professional)

### Color & Visual Identity
- [x] **Signature accent color** — deep red/vermilion chosen (`#9a2a24`, light variant
  `#c1453a`), used for CTAs, link hovers, stat numbers, section dividers. Deep red
  reads as auspicious/prosperous to Chinese clients while feeling bold to Western
  eyes. Avoid bright "fire engine" red.
- [x] **Gradient or duotone treatments on imagery** — wash hero/section backgrounds
  in navy-to-deep-teal gradients; apply duotone filter to photos so stock imagery
  feels like one cohesive brand. (Partial: hero/offices use radial accent washes.)

### Hero & First Impression
- [x] **Lead with the numbers** — animated stat bar under the hero:
  $66M+ verdict · 8 offices · 3 countries · 24/7 coverage. Count-up on scroll.
- [x] **Subtle motion in the hero** — slow-panning skyline blend (Silicon Valley ↔
  Shanghai/Shenzhen) or abstract animated line-art of the Pacific with arcs
  connecting offices. Slow and ambient (~20s loops), not flashy.

### The Bilingual Angle (biggest differentiator)
- [x] **Chinese typography as a design element** — large elegant characters as
  section watermarks (e.g. 跨境 "cross-border" in a light calligraphic weight
  behind English headlines).
- [x] **Genuinely design the 中文 version** — Chinese text sets denser; tune
  line-height, font (Noto Sans SC / Source Han Sans), and spacing separately.
  Chinese visitors can tell when a site was designed English-first.
- [ ] **WeChat presence** — QR code in footer/contact section; note that
  consultations are available in Mandarin. Non-negotiable for Chinese clients.
  (Decided 2026-07-11: the firm has no valid WeChat or LinkedIn presence to link —
  the source site's footer links are dead `href="#"` stubs — so the placeholder QR
  card was removed rather than shipped. The "Consultations available in Mandarin"
  line lives in the contact section. Re-add a QR card if/when the firm supplies
  an official QR code and WeChat ID.)
- [ ] **China performance audit** — check loading behind the Great Firewall.
  Self-host fonts and assets; avoid Google Fonts / YouTube embeds / blocked CDNs.
  Note: GitHub Pages (current host) is not reliably reachable from mainland
  China — revisit hosting (mainland CDN via Alibaba/Tencent Cloud in front)
  before real launch.

### Interaction & Depth
- [x] **Filterable case wall** — let visitors filter case results by practice
  area or industry instead of a static grid.
- [x] **Upgrade the world map** — animate office dots with a soft pulse; draw
  arcing connection lines between U.S. and China offices on scroll. (Current
  version is a text list — map still to come.)
- [x] **Scroll-triggered reveals** — restrained fade-ups (~0.5s, once per
  element) on section content.
- [x] **Attorney cards with meaningful hover states** — real photos and practice
  focus on team cards; hover/focus reveals bar admissions and a notable result.
  The published profiles do not identify spoken languages, so no unverified language
  claims are shown.

### Trust & Content
- [ ] **More than one testimonial** — rotating set, ideally some in Chinese with
  translation. Chinese business culture weighs reputation/referrals heavily.
- [x] **Client logos or anonymized descriptors** — "A NASDAQ-listed EV
  manufacturer," "A top-10 Chinese e-commerce platform" in a strip near the hero.
- [x] **Insights section visual polish** — real cover images or typographic
  covers per article instead of plain cards.

### Priority pick (if only three)
1. Accent color ✅
2. Animated stat bar ✅
3. First-class Chinese typography ✅ (+ WeChat presence — on hold until the firm
   supplies real WeChat details)

## Known Gaps / Placeholders (current build)

- **Team section** now uses the 23-person bilingual roster and profile content
  published by the firm, with local headshots and statically generated bio pages.
- **Insights cards** link to statically generated local bilingual article pages. The
  complete metadata index and every abstract published by the firm are local. The live
  source currently contains CMS placeholders instead of article bodies, so body
  migration remains blocked on source material from the firm.
- **Contact email** uses the verified firm address, `info@cbcounselor.com`.
- **Chinese copy** — corresponding homepage sections now use the Chinese localization
  published by the firm; copy unique to this rebuild should still receive a final
  native-speaker review before launch.
- **Assets** — official logo files and all attorney headshots are local; dedicated
  case-study imagery can be added during the Session 4 visual treatment.

## Hosting Notes

- Currently on GitHub Pages (free, requires the repo to stay public):
  https://eaengle.github.io/cbcounselor/
- Static export via `output: "export"`; `GITHUB_PAGES=true` env var applies the
  `/cbcounselor` basePath in CI. `next/image` srcs must be manually prefixed
  with `NEXT_PUBLIC_BASE_PATH` (next/link handles basePath automatically,
  next/image does not).
- Deploys automatically on push to `main` via `.github/workflows/deploy.yml`.
- For production launch, reconsider hosting for China reachability (see above)
  and a custom domain.
