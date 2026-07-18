# CISEM Maturity-Depth Axis — the DIOS maturity ladder, adopted
**Node ID:** CISEM-VOC-00003 | **Type:** VOC | **Status:** PROVISIONAL-ACTIVE (adopted from DIOS 0014 / KL-0001; Governor "go" 2026-07-18; awaiting foundational decree)
**depth_level:** L1 | **Position in schema:** T-SYS, vocabulary layer
**tags:** [maturity, depth-axis, dios, validation, promotion, semantic-depth]
**Goal:** Give CISEM a SEMANTIC maturity axis (how validated a piece of knowledge is), distinct from the
STRUCTURAL `depth_level` (L0–L2 nesting). Grounds the anti-premature-promotion enforcement (I24).
**Existing-First:** searched ssot-registry + VOC-00001/00002 + KL-0001 (DIOS 0014) — no existing maturity axis; this adopts DIOS's.

## The axis (8 levels, from DIOS 0014 / KL-0001)
| # | Maturity level | Question it answers | CISEM status it maps to | Validation required to REACH it |
|---|---|---|---|---|
| 0 | Signal | Should this be investigated? | IBD raw capture | none (capture-first) |
| 1 | Observation | What happened? | DRAFT / PARKED | documented + traceable |
| 2 | Hypothesis | Could this be true? | PROPOSED | testable statement |
| 3 | Pattern | Does it recur? | (recurring finding) | ≥2 real observations |
| 4 | Insight | Why does it matter? | DRAFT-of-topic | actionable understanding |
| 5 | Principle-Candidate | Could it guide decisions? | CONSENSUS-REACHED | Opus soundness (independent) |
| 6 | Validated-Principle | Can we rely on it? | PROVISIONAL-ACTIVE / LIVE | mechanism exists + runs (I23) |
| 7 | Constitutional | Should descendants inherit it? | RATIFIED (foundational) | Governor decree + inheritance |

## The rule (what I24 enforces)
A node's **claimed status implies a maturity level.** Promotion to a level requires **that level's validation** —
never automatic (DIOS: "promotion requires validation"; "validation is the engine of maturity"). Skipping the
validation is **premature promotion** (DIOS anti-patterns: *validation-avoidance*, *premature-principle*). Enforced by
`plan-audit.sh [I24]`. Regression (a level dropping when evidence fails) is **integrity, not failure** (DIOS).

## NOT to be conflated (D6)
- **Maturity level (this)** = semantic — how validated/mature the knowledge is.
- **`depth_level` (L0–L2)** = structural — how deeply nested in the schema.
Both are "depth"; they are orthogonal axes.

## Change log
- v1.0 — 2026-07-18: adopted the DIOS 0014 maturity ladder as CISEM's semantic depth axis (Governor "go"). PROVISIONAL-ACTIVE; grounds I24; full inheritance-by-maturity is the deferred graph work (ARCH-00382).
