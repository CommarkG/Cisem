# CISEM ZF-Convergence (Loop-Until-Dry) — SSOT
**Governed by:** CS-CREATION-001 | **Instance of:** CoreSpiral (CISEM-FOUND-00001 — CoreSpiral is the named
PARENT of ZF / loop-until-ZF, per its founding definition) | **Wired by:** `dna/checks/plan-audit.sh`
(future `[CONVERGE]` check — disclosed follow-on, NOT built here) | **Built per:** CISEM-ARCH-00403
(Governor Stage-2 RATIFIED 2026-07-20)
**tags:** [zf, convergence, gate, mandatory, corespine-instance]
**Status:** PROVISIONAL-ACTIVE

The consolidated definition of ZF-CONVERGENCE — referenced, never re-derived (A8/I10). A partial pass is
never "done." No `CISEM-{TYPE}-{SEQ}` ID — this is a check/SSOT artifact, same class as
`dna/checks/definition-of-done.md`, not a governed node.

## 1. The Principle
A partial pass is never done. Continue passes until a full pass surfaces NOTHING new (CONVERGED), OR cap at
K passes and DISCLOSE residuals.

## 2. What it applies to (the 5 pass-based activity classes)
- Enumeration
- Audit
- Gather
- Extraction
- Harvest

Any activity that sweeps a search/finding-space in passes falls under this rule — not only the 5 named
classes verbatim, but any surface built on the same pass-based shape (e.g. a review loop, a grep sweep, a
registry reconciliation).

## 3. The CONVERGED test
A pass is CONVERGED when a FULL pass over the same space yields NO new finding / insight / reference / gap —
nothing a prior pass missed. One pass that still surfaces something new is NOT done, no matter how much it
already found.

## 4. The K-cap + residual-disclosure escape
Default **K=3** passes — mirrors ARCH-00190 §3 Stage 0's own default, cited by reference, not re-derived:
*"Repeat until a full pass yields NO new material finding (CONVERGED) OR max K passes (default K=3,
residuals disclosed)."* If K is reached without convergence, STOP and DISCLOSE the residuals explicitly —
never silently present a capped-but-unconverged pass as complete.

## 5. The honesty rule
One partial pass is never "done" (I2/I22 lineage — disclosure ≠ resolution; no unverified done). A return
that claims completeness after a single pass, without stating CONVERGED or K-capped-with-residuals, is an
incomplete report and violates I22/I23 (EXISTS≠ACTIVE / activation-proof).

## Relationship to CoreSpiral (CISEM-FOUND-00001)
ZF-Convergence is a named INSTANCE of CoreSpiral's cumulative, verified, maturity-gated cycle physics — not
a parallel invention. CoreSpiral's founding text (FOUND-00001) explicitly names "ZF, loop-until-ZF
(ARCH-00403)" as one of the concepts it directly parents, alongside divergent-iteration (Principle 15),
infrastructure-first ordering, the maturation loop, and core-first. This SSOT is the standalone,
referenceable form of that instance, so every surface (agents, skills, ARCH-00370) points to ONE definition
instead of re-deriving or copying it (A8/I10).

## Target surfaces (Tier 2 of CISEM-ARCH-00403 — pointer insertions NOT made by this build)
Per CISEM-ARCH-00403's Tier 2, these 8 surfaces are meant to gain a ONE-LINE by-path pointer to this file
(never a copy of its content). That insertion work is a SEPARATE follow-on task — 4 of the 8 are agent-file
edits requiring two-model verify per the persona `## DEVELOPMENT DISCIPLINE` rule, distinct from the
single-lens-Opus-verify skill/protocol edits — and is explicitly NOT performed by this build:
- `.claude/agents/cisem-haiku.md`
- `.claude/agents/cisem-sonnet.md`
- `.claude/agents/cisem-opus-pe.md`
- `.claude/agents/cisem-fable.md`
- `.claude/skills/cisem-create/SKILL.md`
- `.claude/skills/cisem-plan/SKILL.md`
- `.claude/skills/cisem-meta/SKILL.md`
- `dna/protocols/CISEM-ARCH-00370-session-learning-extraction.md`

## CAL reference (CISEM-ARCH-00390)
No new hook, no new trigger point required by this SSOT alone — CAL's existing git pre-commit surface +
agent/skill bootstrap reads are the intended absorption points for the 8 Tier-2 insertions once made. A
future `[CONVERGE]` plan-audit.sh WARN check (candidate name, flagging an audit/harvest-type return that
claims completeness without stating convergence-or-K) is a disclosed follow-on per CISEM-ARCH-00403 Tier 3 —
NOT built here.
