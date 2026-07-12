# CBC Law Website Redesign — Action Items

Source: `CBC LAw website redesign redlines ACCEPTED.docx`

This checklist consolidates the accepted redlines into implementation tasks. Where the document contains conflicting draft suggestions, the later accepted feedback is treated as controlling.

**Status convention:** `[x]` means the item is built or drafted in the codebase — it does **not** mean publication-ready. Any claim marked ⚠ below is drafted but **gated on fact-verification (Section 7)** and must clear the Section 8 acceptance checks before it goes live.

## 1. Positioning and site structure

- [x] Reposition CBC Law as a boutique cross-border firm rather than a broad generalist.
- [x] Present two co-equal primary practices with equal visual and copy weight:
  - IP and business litigation: patent, trademark, copyright, trade secrets, ITC Section 337, federal/state court, and arbitration.
  - Corporate and cross-border counsel: M&A, investment, compliance, and entity structuring for Chinese enterprises.
- [x] Treat e-commerce/Amazon seller defense, international arbitration, entertainment/media, and funds/family offices as supporting capabilities rather than competing primary pillars.
- [x] Keep the main navigation compact; do not introduce a mega-menu or a long, large-firm-style list of practice areas.
- [x] Make the bilingual, Chinese-fluent cross-border practice a central differentiator throughout the site.

## 2. Homepage

### Hero

- [x] Replace the current hero headline with: **“Serious Counsel for Chinese Companies — In the Courtroom and in the Boardroom.”**
- [x] Use a revised version of the approved hero body copy that replaces “averaging 20 years experience each” with the firm-approved qualitative language: **“Attorneys at the firm have decades of experience handling complex legal matters.”** Do not publish the numeric average.
- [x] Add hero/sub-navigation CTAs:
  - **Facing a Schedule A Lawsuit? Start Here**
  - **Talk to Our Team**
- [x] Add a short description and link to the *Kangol* Seventh Circuit opinion near the top of the homepage. Use Alan's supplied description together with his qualification that the court reversed and remanded and that Hague Service Convention requirements apply when the defendant's address is known; do not call it a complete victory.

### Featured bar

- [x] Replace the generic three-card carousel and lead with e-commerce/cross-border relevance.
- [x] Use these three featured items:
  - Corporate & Cross-Border Transactions — M&A, investment, and structuring counsel for Chinese enterprises expanding globally.
  - Patent, Trademark & Copyright Litigation — Federal court, ITC, and arbitration representation for Chinese companies, including urgent U.S. litigation.
  - Business organization and compliance advice for Chinese companies operating in the U.S.

### Practice section

- [x] Replace “Comprehensive Legal Solutions for Global Business” with **“Two Practices, One Standard: Serious Counsel for Chinese Enterprises.”**
- [x] Do not distinguish senior partners or identify practice leaders. Use inclusive firm-level language such as: **“Our attorneys have substantial experience across a range of corporate work, litigation, or both.”**
- [x] Display the two main practices as equal pillars; place the supporting capabilities in a smaller secondary row.

### Credibility section

- [x] Replace the generic “Professional Excellence,” “24/7 Coverage,” and “Technology-Driven” tiles with specific, verified claims.
- [x] Use verified versions of these proof points:
  - Attorneys at the firm have decades of experience handling complex legal matters; do not publish the numeric average.
  - Dozens of Schedule A cases; do not infer or publish a more precise number.
  - Two ITC Section 337 investigations as lead counsel. ⚠ Gated on Alan's verification (§7).
  - Eight cities across three countries. (All eight assumed confirmed for now; Alan to confirm before final publication.)
  - Bilingual partners with U.S. and China legal/practice experience.
- [x] Include patent, trademark, copyright, trade-secret, state/federal court, arbitration, and ITC experience in the supporting copy.
- [x] Do not use the $66 million trade-secret verdict as a firm-wide homepage credential; confine it to Ben Stolter’s bio.
- [x] Mention the *Kangol* Seventh Circuit Schedule A victory at least twice across the site.

### Persistent urgent intake

- [x] Make the Schedule A urgent-intake CTA persistent site-wide (for example, a sticky bar or corner tab), not limited to the e-commerce page.

## 3. New E-Commerce & Amazon Seller Defense page

- [x] Create `/services/ecommerce-amazon-defense/`.
- [x] Use the headline: **“Your Account Is Frozen. Your Funds Are Locked. You Have Days, Not Weeks.”**
- [x] Explain that CBC can respond immediately to Schedule A lawsuits, ex parte TROs, and Amazon/PayPal/Alipay fund freezes in U.S. federal court and in the client’s language.
- [x] Cover these services:
  - Schedule A/John Doe defense and TRO dissolution.
  - Amazon, Temu, and Walmart Marketplace suspension/reinstatement.
  - Trademark and patent troll defense, including bad-faith IP claims.
  - Amazon, PayPal, Payoneer, and Alipay asset/fund-freeze release.
  - U.S. entity structuring and compliance for high-volume sellers.
- [x] Add reasons to choose CBC: bilingual U.S./China experience, cross-time-zone office coverage, and direct WeChat communication.
- [x] Add a representative-results section.
- [x] Feature and link the following opinion using this citation until an official reporter citation is available: *Kangol LLC v. Hangzhou Chuanyue Silk Import & Export Co.*, 2026 WL 1502198 (7th Cir. May 29, 2026). Publishing on this Westlaw cite is fine for now; swap to the official reporter citation/URL when available (§7).
- [x] Add the attorney-supplied *Kangol* description, including the reversal/remand and known-address qualification; do not characterize it as an unqualified victory.
- [x] Add only verified case results, such as amounts released, dismissals, or account-reinstatement timelines. ⚠ Gated on verifying amounts/results (§7).
- [x] Add a short intake form labeled **“Urgent — Active U.S. Litigation.”**

## 4. Team and attorney profiles

- [x] Order the team directory by role: partners first, then of counsel, then associates. *(Implemented in `roleOrder` in `src/components/PeoplePage.tsx`: partner → alliance-partner → of-counsel → foreign-law-counsel → associate, so associates sort last per the seniority hierarchy.)*
- [x] Do not implement the draft proposal to feature only one litigation partner and one corporate partner side by side; the accepted redline calls for the full role-based hierarchy. *(The full role hierarchy renders on `/people` via `roleOrder`; the homepage `Team` section in `src/components/sections/Team.tsx` features three partners — Ning Zhang, Charles Cheng, Alan Engle — via `featuredSlugs`, not the rejected one-litigation/one-corporate pairing.)*
- [x] Show a `cbcounselor.com` email on each profile that has one. For the 11 attorneys with no associated CBC email, **remove the contact entirely** rather than inventing or guessing one (Alan: they generally do not have a CBC email — often attorneys who worked on one or two matters, or Chinese attorneys on a different domain). *(`email: string | null` in `src/content/attorneys.ts` — exactly 11 nulls / 12 present, with an identical slug→email mapping across both `en` and `zh`. `AttorneyProfile.tsx` renders the contact block only when `attorney.email` is set; `AttorneyCard.tsx` shows no email at all. No invented addresses.)*
- [x] Do **not** add individual WeChat links/details to attorney profiles. (Alan: "we don't for now.") WeChat is handled at the firm level only. *(No WeChat reference exists in `AttorneyProfile.tsx`, `AttorneyCard.tsx`, or the attorney data — WeChat appears only in firm-level footer/contact components.)*
- [x] Standardize profiles in the conventional order Alan supplied—name, title, admissions, education, and contact—and include these credential markers where verified: *(In `AttorneyProfile.tsx` the header shows title + name and the aside renders in order: Bar Admissions → Education → Contact.)* **Note — deviates from Alan's stated order:** the profile hero renders **title above name** (title as an eyebrow label over the name headline), whereas Alan's order was "name, title." Kept as-is intentionally per Eric (eyebrow-label styling is a deliberate visual convention); flagged here because it disagrees with Alan's advice.
  - J.D. and law school. *(Already present for all 23 attorneys in `src/content/attorneys.ts`; consolidated in `CBC-attorney-credentials-reference.md`.)*
  - Bar admissions. *(Same — already present for all 23; no gathering needed.)*
- [x] Do **not** add **structured/labeled profile fields** for per-attorney years of experience (Alan: "generally not listed on firm sites"), languages spoken (Alan: "don't list, it's complicated"), or China-specific practice history (Alan: "don't list"). **Scope is structured fields only** — narrative bio prose may retain existing experience/China references (e.g., "over 20 years," China-matter descriptions); do not scrub the bios. *(The `Attorney` type in `src/content/types.ts` has no years-of-experience, languages, or China-history fields; only narrative `bio` prose carries such references, which is left intact.)*
- [x] Keep credentials visible but restrained; do not turn school/firm pedigree into an oversized promotional claim. *(Credentials sit in a restrained sidebar block, not oversized promotional callouts.)*
- [ ] Use consistent editorial-style headshots with the same lighting and backdrop across the team. *(Blocked: new headshots are ~1 month out; Alan or a future admin will organize them.)*

## 5. Chinese-language and WeChat experience

- [x] Audit the Chinese-language site and make it a complete, current parallel experience rather than a thin translation. *(Structural parity is enforced by TypeScript: `en.ts` and `zh.ts` both implement the full `SiteContent`/`EcommercePageContent` types in `src/content/`, so every field on the English site has a Chinese counterpart — and `zh.ts`/`ecommerceZh` carry real translated prose, not stubs. Every route has a `/zh` equivalent. No thin/machine-only sections found in this pass.)*
- [x] **Remove all WeChat links for now** — both the real official-account links and the placeholder `#` links. There is no clear path forward on a browser-safe official-account destination, so surface no WeChat link rather than a broken or app-only one. Revisit when a verified browser-safe destination exists. **This supersedes Section 9.** *(Deleted `src/components/WeChatCard.tsx` and its three render sites — `Footer.tsx`, `ContactPage.tsx`, `sections/ContactCta.tsx` — and removed the `wechat` object (title/accountName/id/href) from `content/types.ts`, `content/en.ts`, and `content/zh.ts`. The `mp.weixin.qq.com` href and the copyable account name/ID are preserved in Section 9 / git history for revisit. Grep for `wechat|weixin|微信` across `src/` returns nothing; `tsc --noEmit` clean.)*
- [x] Official WeChat QR code: **deferred** along with the links above. (Also blocked upstream: Ning does not have the QR and may not yet have access to generate one; do not substitute a home-generated code.) *(No QR was ever surfaced; nothing to remove. Remains deferred — not a blocker for this pass.)*
- [x] WeChat remains a firm-level client-communication channel **operationally** — Alan confirmed the account can handle urgent inquiries, though ~95% of inquiries route through Ning Zhang or Charles Cheng — but it is **not surfaced on-site at all for this pass** (no links, and no copyable account name/ID). Do **not** add per-attorney WeChat touchpoints (see Section 4). *(Nothing WeChat-specific renders on-site. The e-commerce "Direct WeChat communication" reason card was reworded to "Responsive bilingual communication" (EN) / "响应迅速的双语沟通" (ZH) per Eric, keeping the three-reason count from Section 3 without naming WeChat.)*

## 6. Visual design and photography

- [ ] Replace flat SaaS-style icons and the dotted world-map graphic with photography.
- [ ] Use both literal and abstract shipping/commerce imagery, per the accepted response to the open question.
- [ ] Source premium images around shipping, commerce, and digital media; the initial stock-image experiment budget is **$100**. *(Purchasing approved: Alan authorized buying stock images and supplied a payment method out-of-band. Do not record card details in any repository file; either buy directly or start with properly licensed free images and replace later — Alan is fine with either.)*
- [ ] Apply imagery by section:
  - Homepage hero: ports, cargo ships, Pacific trade routes, and/or Beijing/Shanghai skyline imagery.
  - E-commerce page: fulfillment centers, shipping containers, and product logistics.
  - Digital media/entertainment: production, licensing, streaming, or screens.
  - Litigation: federal courthouse or ITC-related imagery paired with commerce visuals.
  - Case studies: a relevant product, logistics, or courthouse image for each matter.
- [ ] Avoid generic handshake, laptop/chart, generic legal, and template-style stock imagery.
- [ ] Use a navy, charcoal, and white base with one accent color (deep red or gold).
- [ ] Use large photography, generous white space, and minimal iconography.
- [ ] Select one serif/sans-serif pairing and define a consistent type scale.

## 7. Content and fact verification before publication

> **Verification instrument:** `CBC-prepublication-fact-verification.md` enumerates every factual claim, its exact on-site wording, its code location, and its sign-off status. The codebase audit (2026-07-11) confirmed the mechanical items below and surfaced three discrepancies (D1–D3) that need Alan's resolution before publication.

- [x] Replace the numeric average-experience claim with Alan's approved qualitative statement: **“Attorneys at the firm have decades of experience handling complex legal matters.”** *(Verified: no numeric average anywhere in `src/`; approved wording in `src/content/en.ts:82`.)*
- [x] Use Alan's approved Schedule A volume description: **“dozens of Schedule A cases.”** Do not convert it to a precise number. *(Verified: `src/content/en.ts:85-87`; no precise count published.)*
- [ ] Verify the two ITC Section 337 lead-counsel matters. *(Alan is the source of truth. See report B1/D2/D3: the two-investigation matter appears under Wesley Johnson and Edwin Wheeler — not Charles Cheng, whose profile has no ITC work — and rests on a single co-counseled LED engagement of two related investigations. `verified-claims.ts` source note corrected to match the data, pending firm confirmation.)*
- [ ] Verify all office locations and the “8 cities, 3 countries” claim: Silicon Valley, Los Angeles, Seattle, Chicago, Beijing, Shanghai, Shenzhen, and Cancún. *(All eight assumed confirmed for now; Alan to confirm before final publication. See report B2.)*
- [ ] Verify all verdict amounts and other representative-result claims. *(Alan is the source of truth. See report B3/D1: the $66M and $7.6M amounts sit in Edwin Wheeler's matters; also resolve the $66M attribution question below.)*
- [ ] **New — $66M verdict attribution (Discrepancy D1):** the redline says confine the $66M verdict to "Ben Stolter's" bio, but it currently lives in **Edwin Wheeler's** matters (`attorneys.ts:171`), and the likely-intended attorney, associate **Benjamin "Ben" Solter**, has an empty matters list. The LED-chip detail matches Wheeler's career, so the redline likely misattributed it. *(Alan to confirm the correct attorney before publication; do not move it unconfirmed.)*
- [x] Obtain the correct URL for the *Kangol* opinion. *(Official Seventh Circuit opinion URL in `src/content/verified-claims.ts:4-5`, wired into the e-commerce page and homepage feature. The citation itself remains the provisional Westlaw cite, which §3/§7 permit publishing now.)*
- [x] Obtain the attorney-written short description of the *Kangol* result and its reversal/remand and known-address qualification.
- [x] Law school and bar admissions confirmed present for all 23 attorneys in `src/content/attorneys.ts` (both locales), consolidated in `CBC-attorney-credentials-reference.md`; no gathering required. Do **not** gather or publish years of practice, languages, China practice history, or individual WeChat details (Alan directed these be omitted). Use a CBC email only where one exists; remove the contact block for the 11 attorneys without one.
- [x] Resolve individual-WeChat and per-attorney-experience data requirements: Alan directed that these fields be omitted rather than collected, so they are no longer outstanding inputs.
- [ ] WeChat links are being **removed for now** (see Section 5); confirming the official account and obtaining the QR code is **deferred**, not a pre-publication blocker for this pass.
- [ ] Remove all bracketed placeholders before publication. (The provisional *Kangol* Westlaw citation is fine to publish now; swap it for the official reporter citation/URL when available — not a publication blocker.)

## 8. Acceptance checks

- [ ] Corporate and litigation receive equal visual prominence on the homepage (two co-equal pillars, same tile size/weight; supporting capabilities in a smaller secondary row).
- [ ] Patent, trademark, and copyright litigation are visible; the firm is not positioned primarily around the trade-secret verdict.
- [ ] The *Kangol* victory appears at least twice, including once near the beginning of the homepage with an opinion link.
- [ ] The Schedule A urgent-intake route is reachable from every page (persistent element — sticky bar or corner tab — rendered on every route).
- [ ] Partners, of counsel, and associates appear in the accepted hierarchy.
- [ ] Every attorney profile shows a CBC email where one exists and the profiles for the 11 attorneys without one carry no invented contact; profiles show school and bar admissions only, with no **structured** years-of-experience, language, China-history, or individual-WeChat fields. (Scope is structured fields only — narrative bio prose is not scrubbed.)
- [ ] Office addresses appear on the site (see Section 10).
- [x] The Chinese experience is complete and current, and no WeChat links remain on the site (all removed for this pass — real and placeholder). *(Verified: `grep -i 'wechat|weixin|微信'` over `src/` returns no matches; `WeChatCard` component deleted; zh parity is type-enforced.)*
- [ ] No unverified metrics, locations, outcomes, or placeholders are published.
- [ ] The site uses photography and the agreed visual system rather than the current SaaS-style icons and world map.
- [ ] The visual system is applied consistently: navy/charcoal/white base with a single accent (deep red or gold), one serif/sans pairing, and a defined type scale (Section 6).

## 9. Browser-safe WeChat access

> **Deferred / superseded (2026-07-11):** Per updated direction, remove WeChat links entirely for now rather than building landing pages (see Section 5). Keep this design on file for if/when a browser-safe path is revisited; do **not** implement it in the current pass.

- [ ] Create browser-safe CBC WeChat landing pages at `/wechat/` and `/zh/wechat/` rather than sending every visitor directly to an app-only link or presenting an article as the company's WeChat homepage:
  - Point normal website WeChat links to the appropriate CBC-owned landing page.
  - On the landing page, keep the verified official-account profile endpoint and label it clearly as **Open in WeChat**. The article HTML confirms the same app-oriented endpoint already stored in the site; it does not expose a separate browser-native official-account homepage.
  - The URL `https://mp.weixin.qq.com/s/-DRCnYtP-zMq9LEiBceDAw` is a specific interview article, not the company or account homepage. It may be included only with an accurate label such as **Read a Recent Interview on WeChat**.
  - Display the copyable official account name and ID: **Cross Border Counselor法务资讯** / `gh_5176c972a240`.
  - Keep the normal website contact/email route available as a universal fallback.
  - Label every QR code by its actual destination. The supplied interview/content QR must not be described as the official-account homepage QR.
  - Do not automatically redirect browser visitors into the WeChat app.

## 10. Office addresses and site purpose

- [ ] Add CBC's office mailing addresses to the site (contact area and/or footer). Alan noted the current site does not appear to list them and that it should. Publish only addresses the firm confirms.
- Context (not a task): Alan advised that almost no one uses the site to contact or hire the firm — it functions mainly as a **credibility** reference (e.g., opposing counsel vetting the firm and its attorneys' backgrounds). Keep the urgent Schedule A intake path per the accepted redlines, but weight design decisions toward credibility and clear firm/attorney information rather than lead capture.
