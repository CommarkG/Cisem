# Opus Review → Sonnet: UX/UI Architecture, Consolidation & Skill/Agent Recommendations
**From:** Opus (CISEM PE) · **For:** Sonnet · **Date:** 2026-08-17 · **Source:** CISEM-UX-UI-COMPREHENSIVE-REPORT-2026-08-17
**tags:** [review, consolidation, ssot, uxui, skills, agents] | **Status:** DRAFT-FOR-REVIEW (Governor ratifies; architectural forks are NOT Sonnet's to decide)

## THE HIDDEN PATTERN (the one that reframes everything)
UX/UI is **not a separate law-set — it is a DOMAIN APPLICATION of the universal CISEM principles.** Nearly every "UX rule" is an *instance* of a law that already exists platform-wide. The report re-derives them as if new. **Re-anchor, don't duplicate.**

| UX rule (report) | = its parent universal law |
|---|---|
| FE-I11 presence≠behavior | **Principle 17** |
| GATE D element-inventory / FE-I14 no-removal | **Principle 18A** no-collateral-deletion (same law as `dna/checks/deletion-guard.sh`) |
| Incident 1 fix-token-not-instance | **Principle 17** defect→class-audit |
| "Fabricated personalization" | **I2/I22** honesty / no-unearned-claim |
| "Orphaned captured input" | **A1** nothing-stands-alone / DONE=wired+called+read |
| "Wire-not-document" (check exists, not hooked) | **Principle 18C** |

→ **Action:** add a "parent-principle" column to the FE-invariant + AI-trigger tables. One law, one home; UX inherits. Fixing the law once propagates everywhere.

## CONSOLIDATIONS (duplication to kill — SSOT promotion)
- **C1 — AI-trigger list is duplicated:** Part 3 table ≈ Part 11 "Quick Card" (same 9 triggers, two shapes). → ONE trigger registry (`root-insights` entries), both tables *generated* from it.
- **C2 — Contrast hex values re-embedded** in §1.3 **and** Part 11 appendix, while `style.css :root` is the declared SSOT. This is guaranteed drift. → the report must **point to** style.css, never re-list values. (I25/I10 mirror-may-not-diverge.)
- **C3 — 5-question walkthrough lives in 3 places** (KL-0002 §7.1, FE-I14, the "Governor verbatim" version). → ONE canonical walkthrough; FE-I14 + report *reference* it.
- **C4 — Prevention knowledge in 3 forms** (Incident log · Audit checklist §7.1 · Trigger table). Same knowledge, three views. → one prevention registry → generate the three views.

## ABILITIES USED BY MULTIPLE ELEMENTS (promote to shared capability, not per-instance)
- **A1 — `functional-check.mjs` is the canonical BEHAVIORAL-GATE ability** (drives FE-I11/12/13 + GATE-D). It is a general "assert behavior, not presence" engine — the *same need* exists in crystal-normalizer's `qa.py` and cisem-cic-auditor. → promote as a **reusable behavioral-verification primitive**; extract **GATE-A WCAG-contrast** as a standalone util any project (CISEM Build, marketing-visuals apps) imports.
- **A2 — GATE-D element-inventory == deletion-guard.sh** (both enforce Principle 18A). Two enforcers of ONE law. → declare them siblings under a single `no-collateral-deletion` concept; don't let them drift.
- **A3 — Cross-project token SSOT:** `style.css :root` should be the ONE design-token core inherited by **both worlds AND the marketing-visuals apps** (CSP `marketing-and-sales-engine`, Trial visuals app, crystal-normalizer) — the same scatter I flagged 2026-08-08. One palette, many consumers → token-drift becomes structurally impossible.

## SKILL & AGENT IMPROVEMENTS
- **`cisem-frontend` skill:** must **CALL** the consolidated gate (run `functional-check.mjs` + the 5-question walkthrough + the trigger registry), never restate the rules inline. A page isn't "done" until the gate passes — bake that as the skill's exit condition.
- **`cisem-haiku` / `cisem-sonnet` / `cisem-opus-pe` agents:** inherit the UX preventions as **standing checks by reference** (point at the trigger registry + FE-invariants), not copied lists — same pattern already used for other RIs.
- **Wire-don't-document (P18C, honest gap):** `functional-check.mjs` exists but is **not auto-hooked** into pre-commit. → graduate it into CAL pre-commit (the report's own §7.2 honest limit). This is the single highest-leverage frontend fix.

## WHAT SONNET MAY EXECUTE (low-blast, no judgment) — pending Governor go
1. C1: extract the 9 triggers into one registry block; regenerate Part 3 + Part 11 as views.
2. C2: replace re-embedded contrast values with a pointer to `style.css :root` (+ keep only the verification *method*, not the numbers).
3. Add the parent-principle column (the table above) to the FE-invariant + trigger tables.
4. C3/C4: collapse the duplicate walkthrough + prevention views to one source + references.

## NOT SONNET'S — Governor/Brain forks (leave open)
- World-A/B convergence (shared core vs separate) + CS-UX-UI-001 corespine decision (§8.2 Q1/Q2) — awaiting Brain; A11 consult required.
- Promoting the UX triggers into the *universal* governance layer (report §9.3.2) — Governor ratification.
- GAP-01…09 priority (product vs demo) — Brain's call.

**One-line essence:** stop maintaining UX as a parallel rulebook — anchor it to the universal laws, generate its many views from one registry, and share the two real abilities (behavioral-gate + token-core) across every surface that needs them.
