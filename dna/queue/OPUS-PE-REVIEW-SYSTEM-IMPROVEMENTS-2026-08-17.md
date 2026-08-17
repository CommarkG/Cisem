---
tags: [opus-review, system-improvements, soundness, ux-ui, world-a, world-b, scope-ruling]
status: READY-FOR-GOVERNOR
date: 2026-08-17
reviewer: cisem-opus-pe
reviewed: SONNET-SYSTEM-IMPROVEMENTS-PRIORITY-REPORT-2026-08-17.md + CISEM-UX-UI-COMPREHENSIVE-REPORT-2026-08-17.md
---

# Opus PE Review — System Improvements Priority Report
**Date:** 2026-08-17 | **Reviewer:** Opus (cisem-opus-pe, ARCH-00240) | **GI-68 Stage-1 soundness review**

---

## VERDICT

**PARTIALLY SOUND.** The report contains two distinct populations that must be separated before any ratification:

1. **CISEM governance improvements** — sound; route to plans
2. **"World A" customer-product work** — out of scope for CISEM; must be rejected or explicitly scope-granted

The report does not make this distinction. As written, it proposes CISEM plans for work that belongs on a customer product that is currently tagged SIMULATION-ONLY. That makes the report unsound as a single ratifiable unit.

---

## POPULATION A — SOUND (route to CISEM plans)

These items address genuine CISEM governance gaps. Keep them.

| Item | Disposition | Route to |
|---|---|---|
| **0.1 Pre-commit hook wiring** (functional-check.mjs) | SOUND | New plan (ARCH-00???); wait for enforcement-tier ARCH-00435 framing |
| **1.1 [ZF] graduation to BLOCK-mode** | SOUND — BUT already in ARCH-00270 v2 (Stage-1 SOUND, awaiting Governor ratification) | DO NOT create a new plan; ratify the existing ARCH-00270 v2 |
| **1.2 [PREMISE] tagging** | SOUND | Fold into ARCH-00435 (enforcement layer) or ARCH-00270 v2 amendment |
| **1.3 Prevention propagation script** | SOUND — novel, not currently in any plan | ARCH-00435 candidate or standalone plan |
| **1.4 RATIFY-GATE orphaned plans** | SOUND — already in ARCH-00435 candidate (CIC audit finding) | Consolidate into ARCH-00435; do NOT fork a second plan |
| **1.5 External alignment axis** | SOUND | Standalone small plan; routes to ARCH-00399 (PAE) enhancement |
| **2.3 FE-I wiring status audit** | SOUND | Haiku gather job; no plan needed — single output: FE-Invariant Wiring Matrix committed to ARCH-00393 |
| **3.3 Weekly deep-pattern session** | SOUND — but already in ARCH-00426 (RATIFIED-UNBUILT) | DO NOT create a second plan; reference ARCH-00426 |
| **3.5 Token-drift prevention** | SOUND | Small addition to ARCH-00433 enforcement layer or standalone |

---

## POPULATION B — OUT OF SCOPE / UNSOUND (World A customer-product work)

These items describe work on "CISEM Build" — the customer-facing CRM onboarding product. SOL-GIFTPRO-001 established the precedent: a product feature tagged SIMULATION-ONLY does not become a CISEM plan. The Governor has not explicitly granted real-product scope to "CISEM Build." Until that decision lands, all the following are REJECTED from CISEM plan scope.

| Item | Why out of scope |
|---|---|
| **0.2 Viewport automation** (Puppeteer, GATE E) | FE-I14 applies to CISEM's own frontend (World B). The 1366×768 screenshot audit for the CUSTOMER onboarding screens is World A product work. Not a CISEM blocker. |
| **2.1 Brain consultation / ARCH-00411 convergence** | "World A + World B unification" depends on whether World A is a real product. Until reality-status is granted, ARCH-00411 cannot be authorized. |
| **2.2 GAP-01..09 priority decisions** | All 9 gaps (persistence, error states, RTL, concurrency…) are customer product gaps, not CISEM governance gaps. |
| **3.1 Nine gap-remediation plans (ARCH-00412+)** | World A product plans. |
| **3.2 ARCH-00411 convergence plan** | World A. |
| **3.4 Perspective diversity enshrinement (CISEM-FOUND-00002)** | Proposing a new Founding Node without GI-63 (no-solo-ratify-deep-core) and without a plan is A4 + GI-63 violation. If valid, it routes through FOUND-00001 amendment via three-way ratification. |
| **3.6..3.12 (mixed)** | 3.5 (token-drift) is sound; 3.6 (page inventory baseline) is World B governance (fine); 3.7 (FE-I14 review lens) is legitimate; 3.8-3.12 are either duplicates of existing items or World A. |

---

## CRITICAL GAP IN THE REPORT

**The report does not reference the CIC audit findings.** The CIC audit (Haiku, 2026-08-17) is the most significant enforcement analysis in this session and it produced ARCH-00435 as the primary candidate plan. The Sonnet improvements report was compiled from the UX/UI audit — but the CIC audit's findings on plan-audit.sh always-exits-0, the 5 orphaned PREMATURE-RATIFY plans, and the enforcement_tier/findings_lifecycle class prevention are MORE IMPORTANT than almost everything in Tier 1.

**Priority correction:** ARCH-00435 should be Tier 0. [ZF] graduation (ARCH-00270 ratification) is Tier 0 as well. Viewport automation is NOT Tier 0.

---

## EXISTING-FIRST FAILURES IN THE REPORT (I19)

| Report Item | Already Exists | Action |
|---|---|---|
| 1.1 [ZF] graduation | ARCH-00270 v2 (Stage-1 SOUND, awaiting Governor ratification) | Ratify ARCH-00270, don't create new plan |
| 1.4 RATIFY-GATE orphan resolution | ARCH-00435 candidate (CIC audit) | Fold into ARCH-00435 |
| 3.3 Weekly deep-pattern session | ARCH-00426 (RATIFIED-UNBUILT) | Reference ARCH-00426, don't create new plan |
| 3.4 CISEM-FOUND-00002 | FOUND-00001 exists; any extension is a FOUND-00001 amendment | GI-63 gate; no new FOUND node without deep-core ratification |

---

## BRAIN CORRECTIONS (incorporated from IBD-0037, 2026-08-17)

Two open decisions in the report are already answered by Brain:

**CS-DATA-PATTERNS-001:** Brain says: "The concept is sound and the location isn't — move the home to whichever platform is writing tables and keep the five-business test as inherited DNA." This is not a cancel/defer/regoal. RESOLUTION: schema patterns library → platform that writes tables; five-business test stays in CISEM DNA as Plan 1 item 2 (already in scope). Governor needs to confirm this resolution, not re-decide.

**IBD-0035 Axioms (A-1/3/4/5):** Brain says: "four drafts plus one accepted revision, not a uniform set." A-2 is accepted. A three-way path treating all five uniformly would ratify drafts on A-2's acceptance. Governor should ratify A-2 first; A-1/3/4/5 need individual review.

---

## UX/UI COMPREHENSIVE REPORT — ASSESSMENT

The haiku-compiled `CISEM-UX-UI-COMPREHENSIVE-REPORT-2026-08-17.md` is a **sound reference document** with one structural concern:

**SOUND:**
- Part 2 (CS-FRONTEND-001 / FE-I1..I14) — accurate, well-documented, appropriately governed
- Part 3 (AI behavior triggers) — correct class-level prevention table
- Part 4 (incident log) — valuable historical record; all 5 incidents have written preventions
- Part 5 (edge cases GAP-01..09) — correctly flagged as awaiting priority decision; correctly scoped as World A

**CONCERN:**
- Part 1 / §1.2 "Two Worlds" — the report correctly names the distinction but defers the resolution. The World A reality-status question is the decision that must precede most of Part 8/9 (the roadmap). Without it, the roadmap is either all in scope or mostly out of scope.
- Size gate: 575 lines — needs explicit size-gate exemption (`size_exception: type-reference-compilation`) in the frontmatter or it triggers §3.6 on every audit.

**Governance fix needed:** Missing `tags:` field → [CREATION-GATE] fires as UNGOVERNED. Fix: add `tags: [reference, ux-ui, compilation, frontend, kl-0002, arch-00393]` to frontmatter.

---

## WHAT THE GOVERNOR NEEDS TO DECIDE

Three decisions unlock everything else:

**Decision 1 (THE KEY ONE): Is "CISEM Build" (the customer onboarding product) a real CISEM initiative or SIMULATION-ONLY?**
- If REAL → grant scope; World A items from Population B become authorized; ARCH-00411 can proceed
- If SIMULATION-ONLY → all World A items stay out of scope; the CISEM improvements focus stays on governance (Population A only)
- RECOMMENDATION: SIMULATION-ONLY until Governor explicitly says otherwise. SOL-GIFTPRO-001 is the precedent. The five-business test is what determines when "CISEM Build" earns real scope.

**Decision 2 (FAST): Ratify ARCH-00270 v2** → [ZF] graduation goes from "Tier 1 new work" to "implementation-ready today." It's Stage-1 SOUND. One word from Governor.

**Decision 3 (FAST): Confirm CS-DATA-PATTERNS-001 resolution** (Brain's answer: move home + keep five-business test in DNA). Removes a pending decision from Plan 1 scope discussion.

---

## RECOMMENDED NEXT STEPS (in order)

1. Governor answers Decision 1 (World A scope) — this determines 60% of the backlog's validity
2. Governor ratifies ARCH-00270 v2 (two words: "ratify ARCH-00270")
3. Governor confirms CS-DATA-PATTERNS-001 resolution (one line)
4. Sonnet revises improvements report: remove Population B, add CIC findings, reference ARCH-00270/ARCH-00435/ARCH-00426 instead of re-creating them → submit revised report for Opus re-review
5. ARCH-00435 (enforcement_tier + findings_lifecycle): draft → GI-68 → ratify → build

---
*Opus PE Stage-1 soundness review — authorized by GI-68 (dual-review mandate). This verdict does not constitute Governor ratification.*
