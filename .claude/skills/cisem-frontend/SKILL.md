# /cisem-frontend — The UX/UI Page-Creation Wizard (part 3 of the UX/UI improvement loop)
**Type:** Claude Code Skill | **Tier:** Sonnet builds · Opus verifies · Governor accepts
**tags:** [skill, wizard, frontend, ux-ui, page-creation, core-template-instance] | **Status:** PROVISIONAL-ACTIVE (Governor-directed 2026-07-21; proving on first uses — sealed after ≥2-3 divergent page builds, Principle 15)
**PERSONA (SSOT — load before acting):** dna/corespines/CS-AI-PROFILING-001/persona-collaborator.md (reference only, never copy — I10)
**Goal:** guarantee EVERY new frontend page is BORN applying CS-FRONTEND-001's FE-I1–FE-I14 (incl. the FE-I14 user-shoes review) — so "get it right the first time" is STRUCTURAL, not dependent on Opus re-deriving it each build. Measurable: a page created via this wizard passes functional-check (FE-I11/12/13) + carries the FE-I14 5-question self-answer, first pass.

## Governing SSOT (reference, never copy — A8/I10)
`dna/corespines/CS-FRONTEND-001/CISEM-ARCH-00393-frontend-corespine-manifest.md` — FE-I1..FE-I14 ARE the spec; this wizard APPLIES them. This is the "core template → instance" pattern (ARCH-00408): the **schema-dashboard is the core template**; every new page is a configured instance of it.

## THE WIZARD FLOW (6 steps — mirror of cisem-plan's structure, for pages)
1. **GOAL + USER (Gate 0 + FE-I14 Q1):** what is this page FOR, who is the first-time user, and what must they understand at first glance? State it before any markup.
2. **CONTINUITY (FE-I14 Q2):** where does the user arrive from? Wire the nav / breadcrumbs / back-forward so the prior-stage connection is clear.
3. **TEMPLATE (ARCH-00408 core-template):** reuse the schema-dashboard tree + control bar + toolbar via `search.js` self-detection — NO new JS file (FE-I2), NO forked control bar. Populate the page's content into the `.tree` group→sub-group→row→leaf structure.
4. **OPTIONS + RECOMMENDATION + NEXT-STEP (FE-I14 Q3/Q4/Q5):** make the options, the RECOMMENDED action, the benefit, and the next step visually obvious (color/size/position/text/arrow). Never leave the user guessing.
5. **INVARIANTS + BEHAVIOR (FE-I1–I13):** dep-free/offline (FE-I1), single JS (FE-I2), theme-aware + AA-contrast measured (FE-I13), controls-on-one-line (FE-I12), native links, registry-generated data where applicable, NO element removed without Governor permission (FE-I14 companion rule). Extend `functional-check.mjs` with behavioral asserts (presence≠behavior, FE-I11).
6. **PREVIEW → ACCEPTANCE:** commit as PREVIEW (Principle 20); the builder self-answers the FE-I14 5 questions in the report; the Governor's rendered-page review is the ratification.

## What this wizard does NOT do
❌ self-ratify a page (Governor accepts the rendered page) ❌ create a new JS file or fork the control bar (FE-I2) ❌ remove any element without Governor permission ❌ skip the FE-I14 user-shoes self-answer ❌ leave a page in engineer-mode (technically-correct but not legible/guiding).

## INHERITED GUARDS (every creation — ref ARCH-00230)
Any page this wizard creates inherits + is audited against CLAUDE.md Principles 1–21, the plan-audit checks every commit, and the pre-commit hard BLOCKs (incl. no-delete-without-ratification). Not done until it passes the whole set (§3.7 Triad + Principle 21 verify-done-now).

## Change log
- v0.1 — 2026-07-21 (Opus, PROVISIONAL-ACTIVE): drafted per Governor "proceed" on the 6-part UX/UI loop; part 3 (the missing wizard). Awaiting Governor ratification + first divergent trials (Principle 15).
