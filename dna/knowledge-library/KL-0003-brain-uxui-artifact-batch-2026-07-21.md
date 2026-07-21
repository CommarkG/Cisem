---
id: KL-0003
tags: [knowledge-library, ux-ui, frontend, external-source, brain-claude-ai, artifact-batch, mockups, incident-log]
Type: KNOWLEDGE | Sub_type: EXTERNAL-SOURCE-BATCH
# --- enhanced input metadata (5 axes — see §3; the `alignment` axis is the NEW one proposed this session) ---
source_trust: EXTERNAL-REVIEWED        # internal-verified | external-reviewed | external-unverified | external-rejected
maturity: INSIGHT / PATTERN-EVIDENCE   # DIOS scale (KL-0001): Signal→…→Constitutional
disposition: CATALOGED                 # raw | cataloged | extracted | converged | superseded | parked
alignment: PREDATES-CHANGES            # aligned | predates-changes | conflicts | n/a  (Brain has NOT synced this week's CISEM changes)
feeds: [CS-FRONTEND-001, universal-ux-principles-candidate, PARK-UXUI-INTEGRATION, CONSULT-BRAIN-UXUI]
Status: CATALOGED · EXTERNAL-REVIEWED · PREDATES-CHANGES (reviewed, not inherited — I22/I23)
Provenance: Governor-supplied 2026-07-21, produced by the Claude.ai "Brain" session (final UX/UI batch)
---

# KL-0003 — Brain UX/UI artifact batch (catalog + purified signal)

**What this is:** the final Brain batch — 6 HTML mockups + 2 pasted text analyses + 1 stale Sonnet one-click. Per the
Governor's authorization (*"purify and use only you find useful — you are the expert"*) and Principle 19 (keep signal,
drop noise), the repetitive mockup boilerplate is NOT byte-reproduced; it is CATALOGED with per-artifact tags/status,
and the genuinely-unique SIGNAL (Brain's self-reflection + the Admin 6-issue analysis) is embedded verbatim/tightly below.
The principles doc itself is already saved as **[[KL-0002]]** (near-identical to the batch's `ux-ui-principles.md`) — not re-saved (A8).
*Offer: full byte-exact copies of any mockup can be persisted to `dna/knowledge-library/sources/` on request.*

## §1 The two worlds this batch straddles (the central finding — read first)
Brain's artifacts are for **TWO DIFFERENT applications** that share a borrowed visual language but are NOT the same thing:
- **World A — "CISEM Build" (a customer-facing PRODUCT):** onboarding → CRM template-preview → admin. An app-that-builds-apps
  for end users (dental clinics, etc.). Outward-facing → **T-DOM**. This is what 8 of the 9 files are.
- **World B — CISEM's OWN internal frontend:** the schema browser / governance dashboard (`frontend/`, governed by
  **CS-FRONTEND-001**, FE-I1–I14). Self-governance → **T-SYS**. `cisem-schema-mockup.html` is Brain's take on THIS.
Brain's own principles doc states it: *"Does not apply to the CISEM internal schema browser… whose visual style this
system borrowed."* **Brain knows they differ.** The UX/UI-corespine decision (PARK P0) turns on this: the universal
principles are media-AND-application-neutral; World A and World B should both INHERIT them, but they are not one artifact.

## §2 Artifact catalog (per-file tags · alignment · disposition)
| Artifact | World | Kind | alignment | disposition | Signal / note |
|---|---|---|---|---|---|
| `ux-ui-principles.md` (×2 versions) | A | principles doc | predates | **= [[KL-0002]]** | Already saved; the batch copies are near-identical. |
| `cisem-build-full-cycle.html` (×2 — **duplicate**) | A | merged 9-screen app | predates | CURRENT | Brain's canonical product state; the Incident-1–5 fixes live here. |
| `onboarding-screens.html` | A | 3-file onboarding | predates | **SUPERSEDED** (by full-cycle) | Old multi-file pattern (Incident 2). Kept but stale. |
| `template-picker-page.html` | A | 3-file preview | predates | **SUPERSEDED** | Still carries the pre-fix *"Matched… dental"* fabricated claim (Incident 5). |
| `admin-fundamental-questions.html` | A | 3-file admin | predates | **SUPERSEDED** | Standalone empty-editor version; full-cycle's admin is richer. |
| `ai-behavior-incident-log.html` | A | interactive incident browser | predates | evidence | Same 5 incidents as [[KL-0002]] §10, browsable. |
| `cisem-schema-mockup.html` | **B** | CISEM schema browser mockup | **conflicts** | evidence | ⚠ **Uses the OLD BROKEN tokens** (`--border:#21262d`, `--text-faint:#545d68`) that Brain's own Incident 1 CONDEMNS — self-contradiction across files (see §4-F2). |
| Brain self-reflection (pasted) | meta | analysis | aligned-ish | **SIGNAL** | Embedded §5 verbatim. |
| Admin 6-issue review (pasted) | A | analysis | predates | **SIGNAL** | Embedded §6. |
| Sonnet visualization one-click (pasted) | B | old handoff | **STALE** | superseded | Verdict in §4-F5. |

## §3 Enhanced input tagging/status — the PROPOSAL (Governor asked: "enhance tagging and statuses of inputs to serve us best")
CISEM already has rich input status vocab (RAW/PURIFIED + source + trust-tier per ARCH-00399; disposition
permanent/temporary/superseded/vaulted/reopened per the archive; DIOS maturity Signal→Constitutional per KL-0001).
**Do NOT invent a new scheme (A8) — reuse those, and add the ONE axis they're missing**, which the Governor's own concern
names (*"Brain might not be aligned with past-week changes"*):
- **NEW axis — `alignment`** (vs current CISEM state): `aligned` · `predates-changes` · `conflicts` · `n/a`.
  This is the axis that flags "trust the content but re-check it against what changed since it was written." Every Brain
  artifact here is `predates-changes`; the schema mockup is `conflicts`.
The full 5-axis input model (demonstrated in this file's frontmatter): **source_trust · maturity · disposition · alignment · feeds**.
*Formalizing this registry-wide is a Governor decision (PCR in chat) — applied here as a working demonstration only.*

## §4 Expert findings (the value-add)
- **F1 — Two worlds (see §1).** The corespine-home decision depends on separating World A (product, T-DOM) from World B (self-governance frontend, T-SYS), with a shared universal-principles core both inherit.
- **F2 — Token drift PROVES the SSOT case.** `cisem-schema-mockup.html` ships the exact pre-fix broken tokens Brain's Incident 1 fixed elsewhere. A single design-system SSOT (`frontend/css/style.css`) makes this class of drift impossible — concrete evidence FOR consolidation, not a style opinion.
- **F3 — Supersession inside the batch.** 3 multi-file pages (onboarding/template/admin) are superseded by the merged full-cycle file, yet still carry the old fabricated-match bug. Disposition `SUPERSEDED` so no one builds on the stale ones.
- **F4 — Independent rediscovery = validation.** Brain re-derived *audit-the-token-not-the-instance* (Principle 17/18), *presence≠behavior* (FE-I11), and *unearned-claim* (fabricated-personalization ≡ I22/I23) WITHOUT knowing CISEM's versions. Cross-instance convergence is strong evidence these are real universal processes (see the universal-processes note in the session reply / [[PARK-UXUI-INTEGRATION]]).
- **F5 — The Sonnet visualization one-click is STALE.** Its 4 Core Seeds (pick-one-architecture-as-PCR · no-tree-regression · plan-before-code · Opus-writes-truth-fields) are still SOUND and worth keeping. But its context is spent: schema.html visualization already shipped as the **ARCH-00410** Phase-1 PREVIEW (git a97edf0); "quality-ledger run 29 / propagation-fix 75f5dc3" are done. Re-issue only the still-open architecture-choice question if resuming; do not re-run tasks 1–4.

## §5 EMBEDDED SIGNAL — Brain's self-reflection (verbatim, unique)
> **What I actually embraced:**
> 1. **Audit the token, not the instance — beyond CSS.** The contrast bug taught it the hard way (3 reports before computing contrast at the token level). The same failure shape reappeared in state logic (the fabricated match) and a THIRD time editing the markdown (dropping section headings repeatedly, even after writing "audit the whole surface" as a rule). Knowing the rule and reliably applying it were two different things — only a MECHANICAL check (word-count-per-section, heading-adjacency scan) actually stopped it, not "being more careful."
> 2. **Engineer-completeness and UX-completeness are different checks.** "Every button wired, every ID resolves, contrast passes" ≠ "this makes sense to someone seeing it cold." Static analysis never catches "technically correct but a first-time user has no idea what's happening" — that requires imagining being the person.
> 3. **An unearned claim in a UI is the same failure as an unearned claim in language.** "Matched from your answers" next to unrelated content is structurally identical to stating something false confidently — same family as fabricating facts: a system asserting certainty it hasn't earned.
>
> **What was genuinely surprising:**
> - The Gemini document: ~90% an echo of Brain's own writing in more official-sounding language (a self-assigned corespine ID, "Verified" contrast values) — and the "verified" values were *wrong* when the math was run. Authoritative-sounding phrasing from another AI carries zero evidentiary weight on its own.
> - How much "forbidden to remove without permission" changed the WORK, not just the tone. Additive-only is a harder constraint than "make it good" — highlight one card instead of hiding three, echo intent instead of restructuring. It forced solutions Brain wouldn't have reached by default.

## §6 EMBEDDED SIGNAL — Brain's Admin 6-issue review (purified; the novel column preserved)
**Root pattern Brain named:** *representative-example bias* — build ONE example (the "Data entity" category) to full depth,
then visually extend the pattern to siblings without building what's under them. (This is the NEGATIVE case of Principle 15:
build-one-then-visually-extend ≠ build-one-refine-until-flawless.) All 6 issues are variants:

| # | Issue | Trigger | How to tell an AI so it collaborates (the novel signal) | Audit |
|---|---|---|---|---|
| 1 | 3 of 4 category editors empty | representative-example bias | "build all four to the SAME depth, then show me a diff confirming no editor is empty" | count non-empty `.cat-editor` bodies |
| 2 | "Reorder with the drag handle" — instructs a feature that doesn't exist | fabricated capability (= Incident 5 in instructional copy) | "any sentence telling the user HOW to do something must be verified against working code before ship; if unbuilt, the copy says so" | grep 2nd-person verbs vs wired behavior |
| 3 | "Save draft" inert (the load-bearing button) | structural-completeness over functional | "build Save FIRST with real behavior; Preview/History may stay stubs" — rank the buttons | grep `stopPropagation()`-only handlers on primary actions |
| 4 | Ratification is a displayed status, not a workflow | state-visualization ≠ state-machine | "define the transition + who may trigger it BEFORE styling the badge" | status CSS class with no matching verb-fn |
| 5 | Delete-industry: no confirm, no reference check | reversibility-asymmetry (= GAP-03, admin ctx) | "before delete, CHECK what references it, and let the confirmation state what it affects" | destructive call with no preceding confirm branch |
| 6 | Audit line is static text posing as a real audit trail | decorative governance | "anything that looks like an audit/compliance record must be real OR visibly marked sample — never look production-real while static" | provenance text with no write-path that sets it |

**Why §6 matters to CISEM directly:** issue 6 (*decorative governance* — a static line that READS as a trustworthy
compliance record) is the UI form of CISEM's own deepest trap: **presence/appearance ≠ verified reality** (I23, Principle 18
WIRE-DON'T-DOCUMENT). Brain hit it in a mockup; CISEM hits it in registries. Same root.
