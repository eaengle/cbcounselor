# CBC Law Website Redesign — Action Items

Source: `CBC LAw website redesign redlines ACCEPTED.docx`

This checklist consolidates the accepted redlines into implementation tasks. Where the document contains conflicting draft suggestions, the later accepted feedback is treated as controlling.

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
  - Two ITC Section 337 investigations as lead counsel.
  - Eight cities across three countries, if the locations are confirmed.
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
- [x] Feature and link the following opinion using this citation until an official reporter citation is available: *Kangol LLC v. Hangzhou Chuanyue Silk Import & Export Co.*, 2026 WL 1502198 (7th Cir. May 29, 2026).
- [x] Add the attorney-supplied *Kangol* description, including the reversal/remand and known-address qualification; do not characterize it as an unqualified victory.
- [x] Add only verified case results, such as amounts released, dismissals, or account-reinstatement timelines.
- [x] Add a short intake form labeled **“Urgent — Active U.S. Litigation.”**

## 4. Team and attorney profiles

- [ ] Order the team directory by role: partners first, then of counsel, then associates.
- [ ] Do not implement the draft proposal to feature only one litigation partner and one corporate partner side by side; the accepted redline calls for the full role-based hierarchy.
- [ ] Show a `cbcounselor.com` email on each profile that has one. For the 11 attorneys with no associated CBC email, **remove the contact entirely** rather than inventing or guessing one (Alan: they generally do not have a CBC email — often attorneys who worked on one or two matters, or Chinese attorneys on a different domain).
- [ ] Do **not** add individual WeChat links/details to attorney profiles. (Alan: "we don't for now.") WeChat is handled at the firm level only.
- [ ] Standardize profiles in the conventional order Alan supplied—name, title, admissions, education, and contact—and include these credential markers where verified:
  - J.D. and law school. *(Already present for all 23 attorneys in `src/content/attorneys.ts`; consolidated in `CBC-attorney-credentials-reference.md`.)*
  - Bar admissions. *(Same — already present for all 23; no gathering needed.)*
- [ ] Do **not** list per-attorney years of experience (Alan: "generally not listed on firm sites"), languages spoken (Alan: "don't list, it's complicated"), or China-specific practice history (Alan: "don't list").
- [ ] Keep credentials visible but restrained; do not turn school/firm pedigree into an oversized promotional claim.
- [ ] Use consistent editorial-style headshots with the same lighting and backdrop across the team. *(Blocked: new headshots are ~1 month out; Alan or a future admin will organize them.)*

## 5. Chinese-language and WeChat experience

- [ ] Audit the Chinese-language site and make it a complete, current parallel experience rather than a thin translation.
- [ ] Replace every placeholder WeChat link (`#`) with the real WeChat Official Account.
- [ ] Add the official WeChat QR code. *(Blocked: Ning does not have the QR and may not yet have access to generate one; treat as outstanding, do not substitute a home-generated code.)*
- [ ] Treat WeChat as a firm-level client-communication channel. Alan confirmed the account can be used for urgent inquiries, though ~95% of inquiries route through Ning Zhang or Charles Cheng. Do **not** add per-attorney WeChat touchpoints (see Section 4).

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

- [x] Replace the numeric average-experience claim with Alan's approved qualitative statement: **“Attorneys at the firm have decades of experience handling complex legal matters.”**
- [x] Use Alan's approved Schedule A volume description: **“dozens of Schedule A cases.”** Do not convert it to a precise number.
- [ ] Verify the two ITC Section 337 lead-counsel matters.
- [ ] Verify all office locations and the “8 cities, 3 countries” claim: Silicon Valley, Los Angeles, Seattle, Chicago, Beijing, Shanghai, Shenzhen, and Cancún.
- [ ] Verify all verdict amounts and other representative-result claims.
- [ ] Obtain the correct URL for the *Kangol* opinion.
- [x] Obtain the attorney-written short description of the *Kangol* result and its reversal/remand and known-address qualification.
- [x] Law school and bar admissions confirmed present for all 23 attorneys in `src/content/attorneys.ts` (both locales), consolidated in `CBC-attorney-credentials-reference.md`; no gathering required. Do **not** gather or publish years of practice, languages, China practice history, or individual WeChat details (Alan directed these be omitted). Use a CBC email only where one exists; remove the contact block for the 11 attorneys without one.
- [x] Resolve individual-WeChat and per-attorney-experience data requirements: Alan directed that these fields be omitted rather than collected, so they are no longer outstanding inputs.
- [ ] Confirm the real WeChat Official Account and obtain its QR code. *(QR still outstanding — see Section 5.)*
- [ ] Remove all bracketed placeholders before publication.

## 8. Acceptance checks

- [ ] Corporate and litigation receive equal visual prominence on the homepage.
- [ ] Patent, trademark, and copyright litigation are visible; the firm is not positioned primarily around the trade-secret verdict.
- [ ] The *Kangol* victory appears at least twice, including once near the beginning of the homepage with an opinion link.
- [ ] The Schedule A urgent-intake route is easy to reach from every page.
- [ ] Partners, of counsel, and associates appear in the accepted hierarchy.
- [ ] Every attorney profile shows a CBC email where one exists and the profiles for the 11 attorneys without one carry no invented contact; profiles show school and bar admissions only, with no years-of-experience, language, China-history, or individual-WeChat fields.
- [ ] Office addresses appear on the site (see Section 10).
- [ ] The Chinese experience is complete and current, and no placeholder WeChat links remain.
- [ ] No unverified metrics, locations, outcomes, or placeholders are published.
- [ ] The site uses photography and the agreed visual system rather than the current SaaS-style icons and world map.

## 9. Browser-safe WeChat access

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
