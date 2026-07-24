# PART02 — [BUILD-STATE] check (closes the ratified-but-unbuilt class)
**Parent:** CISEM-ARCH-00420 (Wiring Consolidation minitree root) | **Node ID:** CISEM-ARCH-00420-PART02
**Status:** PROVISIONAL-ACTIVE | **Planning Status:** AWAITING-BUILDER-REVIEW (drafted pre-compact 2026-07-24)
**Priority:** 1 (highest — smallest surface, whole-class closure) | **tags:** [build-state, ri-0027, plan-audit, wiring]
**Independent Verifier:** `cisem-haiku` (cold, protocol-lens) — distinct from author (Opus).

## Existing-First (§3.2b)
Searched `plan-audit.sh` checks + `dna/checks/definition-of-done.md` + `[I23]` (EXISTS≠ACTIVE) + `[DOD]`: **no check verifies
that a COMPLETE/RATIFIED plan's named DELIVERABLES exist on disk.** `[I23]` checks activation-claims on nodes; `[DOD]` is a
per-artifact DoD spot-check; neither does plan-deliverable-existence. Genuine gap. `[BUILD-STATE]` EXTENDS the `[I23]`/`[DOD]`
family (A8, same WARN posture), not a fork.

## The problem (RI-0027, verified this session)
Five Governor-RATIFIED plans read Planning Status "COMPLETE" while their deliverables were NEVER built
(ARCH-00403/00408/00409 — now built; ARCH-00392-P1, ARCH-00406-P1 — still not). "Plan ratified" got conflated with
"artifact on disk" → a green ledger over unbuilt mechanisms (documentation-as-progress at the ratification layer).

## Goal
A mechanical guard so this class cannot recur silently: any plan claiming COMPLETE/RATIFIED must either (a) have its
named deliverables present on disk, or (b) explicitly declare which phases/deliverables are unbuilt (with a reason).

## Approach (to reach consensus post-compact, then ratify, then build)
A new `[BUILD-STATE]` WARN check in `plan-audit.sh` (WARN at introduction, same posture as [SEED]/[TEMPLATE]; NOT in
the ZF formula; BLOCK-promotion only via ARCH-00270's graduation rule):
- For each plan whose Planning Status contains COMPLETE or RATIFIED, extract the deliverable paths it names (its
  "What DOES change" / Per-File Alignment Table / "The Rule" deliverable lines).
- For each named deliverable path: if it does NOT exist on disk AND the plan does not carry an explicit
  "NOT-YET-BUILT"/"unbuilt"/"disclosed follow-on" marker for it → FLAG (COMPLETE-but-unbuilt gap).
- Honest: this is heuristic (parsing prose deliverable lines) — WARN, not BLOCK, and it must NOT false-flag a
  legitimately-phased plan that names its unbuilt phases (learn from [TAG-STATUS]/[I6-SIZE]: anchor precisely, planted-test both directions).

## What it needs (the enforcement, per the audit)
- **MECHANICAL:** the `[BUILD-STATE]` check (dna/checks/ + wired into plan-audit.sh).
- **HARDWIRING:** it runs at every commit (CAL pre-commit) — so a "COMPLETE" claim over an unbuilt deliverable is
  surfaced immediately, never accumulates.
- **AI-OVERSIGHT pocket:** Opus judgment resolves the heuristic's UNKNOWN cases (a phased plan legitimately mid-build).

## Preservation angle
This is ALSO the regression guard for the wins in the root's PRESERVE list — a built mechanism that later loses its
deliverable would be caught.

## Finish line (dogfood ARCH-00418 grades)
MECHANICAL: planted-test — a synthetic plan marked COMPLETE naming a non-existent deliverable is FLAGGED; the same
plan with the deliverable present (or an explicit unbuilt-marker) is CLEAN; both shown. Closure-grade: MECHANICAL.

## Change log
- v0.1 2026-07-24 (Opus, pre-compact) — seeded from RI-0027 + Brain's #1 shortest-cycle rec. Refine + ratify + build post-compact.
