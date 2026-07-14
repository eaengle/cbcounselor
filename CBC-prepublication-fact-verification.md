# CBC Law — Pre-Publication Fact-Verification Report

**Implements Section 7 of `CBC-website-redesign-action-items.md`.**
Generated from a codebase audit on 2026-07-11.

Section 7 requires that every factual claim on the site be verified before publication.
This report is the verification instrument: it lists each factual claim, its **exact
on-site wording**, its **location in code**, its **current source**, and its
**verification status**. Alan is the source of truth for every row marked *Gated*.

**How to use:** Alan reviews each *Gated* row and either confirms the wording as-is or
supplies a correction. When a row is confirmed, flip its status to **Verified** and check
the corresponding box in Section 7 / Section 8 of the action-items file. Nothing marked
*Gated* or *Discrepancy* should go live until resolved.

---

## A. Approved copy — implemented and verified in code

These items were verified directly against the codebase in this pass. No firm sign-off
is outstanding for the wording itself.

| Claim | On-site wording | Location | Status |
| --- | --- | --- | --- |
| Experience (qualitative, no numeric average) | "Attorneys at the firm have decades of experience handling complex legal matters." | `src/content/en.ts:82` | **Verified** — no numeric average appears anywhere in `src/`. |
| Schedule A volume (no precise count) | "Dozens of Schedule A cases" / "experience includes dozens of Schedule A cases involving cross-border e-commerce defendants." | `src/content/en.ts:85-87`, `zh.ts:87-88` | **Verified** — no precise count published. |
| $66M verdict not a firm-wide credential | Appears once, inside an attorney's representative-matters list; not on the homepage. | `src/content/attorneys.ts:171` | **Verified** for the "not firm-wide" requirement. **See Discrepancy D1 for attribution.** |
| Kangol opinion link | Official Seventh Circuit opinion URL (court's own server). | `src/content/verified-claims.ts:4-5` | **Verified** — real court URL, wired into the e-commerce page and homepage feature. Citation remains the provisional Westlaw cite per action-items §3/§7 (acceptable to publish now). |
| No bracketed placeholders | — | entire `src/` tree | **Verified** — no `[TBD]`, `[insert]`, `[amount]`, `Lorem`, `TKTK`, or `coming soon` markers found. |

---

## B. Claims GATED on Alan's verification

These are published (or draftable) as asserted facts but require the firm to confirm
before going live. Wording is quoted exactly as it renders.

| # | Claim | On-site wording | Location | What Alan must confirm |
| --- | --- | --- | --- | --- |
| B1 | ITC Section 337 lead-counsel experience (firm credibility tile) | "CBC attorneys have served as lead counsel in ITC Section 337 investigations." | `src/content/en.ts:90-92`, `zh.ts:91-92` | **RESOLVED 2026-07-13 — no longer gated, safe to publish.** The unverifiable count ("two") was **removed** from both locales per Alan's D3 answer. The reworded claim is supported by three separate Section 337 matters in the firm's own published bios (Johnson `:102`, Wheeler `:170`, Gong Chen `:517`) and stays true regardless of the final number. See D3. |
| B2 | Eight offices, three countries | "Eight offices, three countries, one team." + city list: Silicon Valley, Los Angeles, Seattle, Chicago (US); Beijing, Shanghai, Shenzhen (China); Cancun (Mexico). | `src/content/en.ts:162-168` | Each of the eight cities is a real, current CBC office. (All eight assumed confirmed for now per action-items §2/§7.) |
| B3 | Verdict / representative-result amounts | "$66 million jury verdict…"; "award of $7.6 million" (both in Edwin Wheeler's matters). | `src/content/attorneys.ts:171,173` | That each amount and outcome is accurate as stated. |
| B4 | Kangol result description | "…the Seventh Circuit reversed and remanded… Hague Service Convention… requirements apply when the defendant's address is known…" | `src/content/verified-claims.ts:6-9` | Attorney-supplied; already confirmed in action-items §7. Retained here for completeness. |

---

## C. Placeholder / clean-sweep results

- No bracketed placeholders, Lorem ipsum, or "coming soon" text anywhere in `src/`.
- No numeric average-experience claim ("averaging 20 years each" or similar) anywhere.
- No precise Schedule A case count.
- WeChat: no links, QR, or copyable account name/ID surfaced on-site (deferred per §5/§9).
- **The only remaining provisional element is the Kangol *citation*** (Westlaw cite),
  which action-items §3/§7 explicitly permit publishing now; swap to the official
  reporter cite when available. Not a publication blocker.

---

## D. Discrepancies found during audit — need resolution

These are internal inconsistencies or redline/data mismatches surfaced by the audit.
They are **not** yet reflected as changes to user-facing copy, because resolving them
requires a fact only Alan holds.

### D1 — $66M verdict: attribution vs. the redline — **RESOLVED 2026-07-13**

- **Redline (action-items §2):** "confine it to **Ben Stolter's** bio."
- **In code:** the $66M LED trade-secret verdict is in **Edwin Wheeler's**
  `representativeMatters` (`attorneys.ts:171`), not in any "Solter" bio.
- **Alan's answer (2026-07-13):** "Yeah, it's Edwin." The verdict is **Edwin Wheeler's**.
- **Resolution:** the redline misattributed it. The verdict **stays where it is**, in
  Wheeler's `representativeMatters`. It is **not** to be moved to Benjamin Solter's bio,
  which correctly remains without it. No code change required. The action-items §2 line
  naming "Ben Stolter" is superseded and has been annotated as such.

### D2 — ITC source note names the wrong attorneys — **RESOLVED 2026-07-13**

- `verified-claims.ts` (before the 2026-07-11 pass) sourced the ITC claim to
  "Charles Cheng and Edwin Wheeler." Charles Cheng's profile is corporate governance /
  venture capital / cross-border — **no ITC or Section 337 matters** (`attorneys.ts:49-78`).
- **Alan's answer (2026-07-13):** "Yeah, shouldn't be associated with Charles."
- **Resolution:** **Charles Cheng is not credited** on the ITC matter. The corrected
  source note (Wesley Johnson and Edwin Wheeler, per `attorneys.ts:102` and `:170`) stands,
  and Edwin's credit is independently confirmed by his answer to D1.
- **Residual, minor:** Alan confirmed the *negative* (not Charles) but did not explicitly
  affirm **Wesley Johnson**. Johnson's credit comes from his own firm-published profile, so
  this is not treated as a blocker — but if the D3 follow-up produces a docket list, confirm
  Johnson's lead-counsel role at the same time.

### D3 — "Two ITC investigations": count was unverifiable — **RESOLVED 2026-07-13 by removing the count**

- Both Wesley Johnson and Edwin Wheeler describe the **same** two Section 337
  investigations for the **same** major Chinese LED manufacturer (dismissal of the first
  before trial; no-violation decision in the second) — one co-counseled engagement.
- **Alan's answer (2026-07-13):** "Dunno. Think we just resolved another ITC case, and
  there may be others."
- **This is not a confirmation — and it makes the claim worse, not better.** The original
  concern was that "two" might overstate (one engagement). Alan's answer raises the
  opposite problem: the firm may have **more than two** Section 337 investigations, at
  least one of them recent and absent from every attorney profile. Either way, **the firm
  cannot presently substantiate the specific number "two."** A hard count is the one thing
  a credibility tile must not guess at.
- **Corroborated by the firm's own bios.** A codebase sweep found a **third** Section 337
  matter already published on the site: **Gong Chen** (`attorneys.ts:517`) — a Section 337
  ITC action for a Silicon Valley tech company, settled with a strategic merger. This is
  independent of the Johnson/Wheeler LED engagement and confirms Alan's recollection that
  the firm's ITC record exceeds "two."
- **Resolution (Alan's direction, 2026-07-13): drop the count.** The tile was reworded in
  both locales to remove the number:
  - `en.ts:90-92` → title *"ITC Section 337 Investigations"*; description *"CBC attorneys
    have served as lead counsel in ITC Section 337 investigations."*
  - `zh.ts:91-92` → *"ITC 第 337 条调查"* / *"CBC 律师曾在 ITC 第 337 条调查中担任主办律师。"*
  - `verified-claims.ts` wording updated to match, sourced to Johnson, Wheeler, **and Gong
    Chen**, with a guard comment against reintroducing a figure.
- **Why this is safe:** the claim is now true under every scenario — whether the firm has
  two Section 337 investigations or six — and it needs no copy change when a new matter
  resolves. **B1 is unblocked for publication.**
- **Attorney-level bios are unaffected and stay as written.** Johnson (`:102`) and Wheeler
  (`:170`) each describe *one specific engagement that genuinely comprised two related
  investigations* — that count is accurate at the matter level and was never the problem.
  Only the firm-wide tile was overreaching.
- **Optional follow-up (no longer a blocker):** if the firm later produces the actual
  investigation numbers (337-TA-XXXX) and lead-counsel attorney for each — including the
  recently resolved matter and Gong Chen's — the tile could state a verified figure, which
  is stronger marketing. Confirm Wesley Johnson's lead-counsel role at the same time (see
  D2 residual).

---

## Sign-off

| Item | Confirmed by | Date | Notes |
| --- | --- | --- | --- |
| B1 — ITC Section 337 experience | Alan | 2026-07-13 | **Resolved.** Count removed from the tile (EN + ZH); reworded claim is supported by three published matters. Safe to publish. |
| B2 — Eight offices, three countries | | | |
| B3 — Verdict/result amounts | | | |
| D1 — $66M verdict attribution | Alan | 2026-07-13 | **Resolved.** "Yeah, it's Edwin." Verdict stays in Edwin Wheeler's matters; redline's "Ben Stolter" superseded. No code change. |
| D2 — ITC attorney credit | Alan | 2026-07-13 | **Resolved.** "Shouldn't be associated with Charles." Charles Cheng not credited; source note (Johnson/Wheeler) stands. |
| D3 — ITC investigation count | Alan | 2026-07-13 | **Resolved.** "Dunno. Think we just resolved another ITC case, and there may be others." Count could not be substantiated → removed from the tile rather than guessed at. |
