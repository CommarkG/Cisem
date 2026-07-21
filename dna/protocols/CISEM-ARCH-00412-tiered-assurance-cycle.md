# CISEM Tiered Assurance Cycle (TAC) — the recurring review→gap→plan→execute→verify orchestration
**Node ID:** CISEM-ARCH-00412 | **Type:** ARCH | **Status:** PROVISIONAL-ACTIVE (Governor-directed format 2026-07-21; being PROVEN on the naming/numbering enforcement run — sealed only after ≥2-3 divergent trials, Principle 15)
**depth_level:** L2 | **Position in schema:** T-SYS, orchestration/quality layer | **tags:** [orchestration, tiered-cycle, assurance, review-build-verify, recurring, mandatory]
**Goal:** A reusable, cost-routed multi-tier cycle Opus runs for any "is X actually done/enforced?" assurance task —
so no single tier's blind spot ships. Measurable: each run produces a Haiku gather + a Sonnet gap-check + an Opus
ratified plan + a Sonnet execution + a Haiku result-verify, each stage's output feeding the next (git-SSOT, zero context relay).
**Governing corespine:** CS-CREATION-001 | **CAL reference:** plan-audit `[ZF]` is each build-stage's done-gate.
**Independent Verifier:** the cycle IS a verification structure (Stage 5 Haiku verifies Stage 4); Opus judges soundness at Stage 3.

## Pocket Declaration (§3.3)
- **reasoning_scope:** define the reusable tiered assurance cycle format + when to invoke it
- **inherited_constraints:** §3.0 tier-routing (Haiku gathers · Sonnet structures · Opus judges/plans/ratifies-truth); §1.7 git-SSOT + one-committer; I7 (only Opus writes truth/ratifies with Governor); Principle 20 (informed ratification); Principle 21 (verify-done-now)
- **output_contract:** this protocol document (the format); each RUN's artifacts live in their own files/registries
- **ai_cannot:** let a lower tier ratify or close; skip the gap-check; seal the format from one run (Principle 15)
- **recorded_at:** 2026-07-21

## THE CYCLE — 5 stages, cost-routed (Governor-specified format 2026-07-21)
1. **GATHER — Haiku (cheap, first).** Enumerate the issue with file:line EVIDENCE — what exists, what's wired vs not, actual violations. NEVER rules or closes (I7). Output: a structured evidence table.
2. **GAP-CHECK — Sonnet (what Haiku MISSED).** A second-tier review of Stage 1: verify a sample of Haiku's findings, find MISSED gaps/violations, note mechanizability per gap, and surface POLICY AMBIGUITIES that need a human ruling (not silent). Analysis only — no edits. Output: confirmed/corrected findings + new gaps + Opus questions.
3. **PLAN + RATIFY — Opus + Governor.** Opus synthesizes Stages 1-2 into a ratifiable PLAN (the fixes, sequenced; each mechanizable gap → a real check), resolves the policy ambiguities into recommendations, runs Stage-1 soundness, and presents for the Governor's INFORMED ratification (Principle 20 — no truth-stamp on an unseen artifact). Output: a RATIFIED plan.
4. **EXECUTE — Sonnet.** Build the ratified plan verbatim under Core Seeds (checks wired + planted-tested; violations fixed additively; no collateral deletion — BLOCK 3). Opus commits (§1.7). Output: wired mechanisms + fixes, each proven (wire-don't-document).
5. **VERIFY RESULTS — Haiku.** Re-run the Stage-1 enumeration against the executed result: are the gaps now closed? do the new checks fire? are the violations gone? Output: a pass/residual report. Residuals loop back to Stage 3.

## WHEN TO INVOKE
Any "is X truly hardwired / enforced / done / complete?" assurance question where a single pass risks a blind spot — naming/numbering enforcement (the first run), coverage audits, "did we actually wire Y?", regression sweeps. Not for trivial single-file checks (over-orchestration = scatter, Principle 16).

## WHY TIERED (the value)
Each tier has a different blind spot: Haiku enumerates but doesn't judge; Sonnet structures but can miss the frame; Opus judges but shouldn't do mechanical gather/execute (§3.0, the Opus-does-Sonnet's-work anti-pattern). The cycle makes each tier's output CHECK the previous — Stage 2 catches Stage 1's misses, Stage 5 catches Stage 4's. Cost-routed: cheap tiers do the volume, Opus reserves keystrokes for judgment + truth (§3.0 rubric).

## PROVISIONAL note (Principle 15 — divergent-iteration before sealing)
This format is DIRECTED by the Governor and IN USE (proving on the naming/numbering run) but NOT sealed: it earns RATIFIED only after ≥2-3 DIVERGENT runs flow without surfacing new gaps in the format itself. First run's learnings refine it; the archive records any superseded shape.

## Change log
- v0.1 — 2026-07-21 (Opus): format captured per Governor decree "create a cycle in this format for recurring use"; PROVISIONAL-ACTIVE, first run = naming/numbering enforcement (Haiku Stage-1 done, Sonnet Stage-2 running).
