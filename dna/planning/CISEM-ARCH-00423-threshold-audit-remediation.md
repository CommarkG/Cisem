# Threshold-Audit Remediation (backlog N5) — close the bodiless-corespine + parking-aging gaps found live
**Node ID:** CISEM-ARCH-00423 | **Type:** ARCH | **Status:** DRAFT
**Planning Status:** CONSENSUS-REACHED (Opus Stage-1 SOUND 2026-07-25 — see §Opus Soundness Verdict; NOT ratified — awaits Governor Stage-2) | **depth_level:** L2
**Position in schema:** T-SYS, planning-governance layer
**tags:** [threshold-audit, corespine-bodiless, parking-aging, coverage-map, dedup, backlog-N5]
**Goal:** close 3 gaps the Threshold/Routing/Parking audit found (bodiless RATIFIED corespines with no
self-audit; parked-item aging covering only `decisions_pending:` YAML, not the ~44 IBD + 12 BP real parked
items; a mis-cited GI-30 status) — measurable as: (1) a WARN check flags any RATIFIED corespine lacking
`canonical_file`, verified 2→0 once D2 lands; (2) a freshness gate fires when the parked-population review
is stale, tested on a planted date; (3) GI-30's home citation is corrected by Opus (I7).
**Governing corespine:** CS-CREATION-001
**Independent Verifier:** `cisem-haiku` (cold, protocol-lens; distinct from `cisem-sonnet`, this plan's author — P5)

## Core Seeds (from Opus dispatch — immutable, executed verbatim, I13)
```
[[CORE-SEED | MUST: D1 (the [CORESPINE-BODILESS] check) ships WARN-only and is built+wired FIRST, standing ALONE — it must fire and flag the 2 bodiless corespines even while their bodies are still missing; it is NEVER gated on D2 landing first. D2 is what DRIVES those WARNs to zero, not a precondition for D1. | WHY: the root-fix IS the self-audit mechanism surfacing the gap mechanically — it has to exist and fire before the bodies are written | VERIFY: D1 committed + firing (flags exactly 2) BEFORE any D2 manifest exists | APPLIES_TO: D1/D2 build order]]
[[CORE-SEED | MUST: D5 is LABEL-ONLY — add the `MIRROR — SSOT is ARCH-00320` label; DELETE neither copy of the Threshold invariants (no-collateral-deletion, Principle 18A). SEPARATELY: GI-30's status/home correction is written by OPUS ONLY (I7), and only after Governor awareness (it is HIS insight record) — Sonnet/Haiku NEVER touch a governor-insights truth-field. | WHY: de-dup by labeling the SSOT, never by deleting; a governance-record correction is a truth-stamp (Opus/Governor lane) | VERIFY: both invariant copies still present + MIRROR label added; GI-30 edited only by Opus with Governor sign-off | APPLIES_TO: D5 + the GI-30 note]]
[[CORE-SEED | MUST: D4's coverage-map is scoped to THRESHOLD's OWN parts only (I1-I21, Gate-0, SWIFT, park-by-demand) — NOT a new universal audit engine; and it must PROVE by planted tests (at least one WIRED cell and one PROSE-BY-DESIGN cell, both directions) BEFORE it ships (Principle 15). Prose-by-design parts are labeled honestly (cite CLAUDE.md §2.7's own disclosed input-time limit), NEVER fake-fixed into a false WIRED-or-gap binary. | WHY: scope-creep into a universal engine + ship-without-planted-tests are the two failure modes; honesty about unhookable routing is the audit's whole point | VERIFY: D4 enumerates only Threshold's parts; planted-test evidence shown before ship | APPLIES_TO: D4]]
```

## Pocket Declaration
- **reasoning_scope:** draft this plan per the Threshold/Routing/Parking audit findings (already run); produce
  the plan artifact only, build no mechanism
- **inherited_constraints:** A4/A11 (plan gate); A8/I10/I19 (Existing-First, thin pointers, no forked homes);
  I7 (never write a truth field — GI-30's note is flagged for Opus, not resolved here); §1.7 git-race
- **output_contract:** this plan document only; `dna/naming-registry.yaml` next_seq bump (the ONE naming gate)
- **ai_cannot:** self-ratify; build any check/manifest named here; write GI-30's `status:`/`home:` field
- **recorded_at:** 2026-07-25

## Tier-Routing Declaration (CLAUDE.md §3.0)
- **D1/D2/D3/D4/D5 (mechanism builds + thin manifests + label edit) → Sonnet.** Mechanical/structural work,
  Opus-plan-specified, no design judgment.
- **GI-30 status correction (truth-field write) → Opus ONLY** (I7) — flagged here as a finding, NOT resolved
  by this plan; Sonnet may not touch `dna/governor-insights.yaml` status/home fields.
- **Judging soundness (Stage 1) → Opus (cisem-opus-pe).** **Governor → Stage 2 ratification.**

## Existing-First (§3.2b, done) — searched, in order
1. `corespine-registry.yaml` (read in full) — exactly 2 of 15 top-level entries are `status: RATIFIED` with
   ONLY `distributed_in`, no `canonical_file`: CS-THRESHOLD-001 (14-19) and CS-MASTER-VALIDATION-001 (43-50).
   CS-FRONTEND-001/CS-CREATION-001, both RATIFIED, DO carry `canonical_file` — bounded, real gap (2 instances).
2. `plan-audit.sh` `[I16]`/`[I24]` (read) — no existing check reads the registry for body-presence; their
   field-presence pattern is the model to reuse, not a new idiom.
3. `agent-pass-gate.sh` (read in full) — the freshness-stamp shape (`.stamp` file, WARN if >7 days) is the
   EXACT precedent for D3; reused, not re-invented.
4. `plan-audit.sh` `[P3]` (read, lines 271-293) — scans ONLY `decisions_pending:` blocks in `*.yaml`; does
   NOT enumerate `dna/ibd/*.md` (44 files, 20 `PARKED-RAW`) or `dna/queue/BP-*.md` (12) — confirms the audit
   finding verbatim, not inherited as fact.
5. GI-30 (read in full) — `home: "ARCH-00360 RULE 5"`, `status: RATIFIED-WIRED`. ARCH-00360 RULE 5 (read in
   full) specifies a PER-ITEM 7-day TTL with owner/deadline/blocker — `agent-pass-gate.sh` (the only live
   7-day mechanism) implements a DIFFERENT decree (Principle 21 weekly all-agents pass) — confirms the mis-cite.
6. ARCH-00397 header (read) — the pointer-only precedent: `canonical_file` may be a THIN pointer referencing
   `distributed_in` sources without copying content (A8/I10-safe) — the model for D2.
7. `dna/checks/*.sh` listing — no `corespine-bodiless.sh`/`park-review-fresh.sh` exists; no name collision.
**VERDICT:** all 3 gaps genuine and bounded (2 bodiless corespines; scope-narrow P3; 1 mis-cited GI status);
no existing mechanism covers any of the three; D2's pattern already has a precedent (ARCH-00397).

## Executive Summary
The Threshold/Routing/Parking audit found CS-THRESHOLD-001 and CS-MASTER-VALIDATION-001 RATIFIED with no
body, and no mechanism catches this — the registry has zero self-audit. It also found parked-item aging
covers only `decisions_pending:` YAML, missing ~44 IBD + 12 BP real parked items, plus a mis-cited GI-30.
Five deliverables: D1 anchors with the missing self-audit check; D2 fills the two bodies it would flag; D3
extends aging to the real parking dirs; D4 honestly maps Threshold's own wiring state part-by-part; D5 labels
the duplicated invariant text a MIRROR. A sixth item (GI-30) is a truth-field finding routed to Opus.

## Anti-Scatter Ordering (CLAUDE.md §2 Principle 16)
D1 is the ANCHOR — the root-fix (registry's missing self-audit) that catches today's 2 gaps AND any future
one; it drives D2 (which exists to make D1 pass clean). D5 next — cheapest (label-only, closes a live A8
duplication risk). D3 next — independent, same shape as the proven agent-pass-gate.sh precedent, MED cost.
D4 LAST — richest design (honest per-part labeling), flagged needing planted tests (Principle 15); ordering
it last avoids stalling the cheap wins.

## The Rule — five deliverables, D1→D2→D5→D3→D4 order (per Anti-Scatter above)

### D1 — `[CORESPINE-BODILESS]` check (anchor)
**Spec:** `dna/checks/corespine-bodiless.sh`, wired into `plan-audit.sh`, WARN-only. Scans
`corespine-registry.yaml` for any entry with `status: RATIFIED` (value-anchored, RI-0012-safe) whose
`content_location:` has NO `canonical_file:` key. Models [I16]/[I24]'s field-presence pattern — no new idiom.
**Finish line:** run flags exactly CS-THRESHOLD-001 + CS-MASTER-VALIDATION-001 (2), 0 false positives on
CS-FRONTEND-001/CS-CREATION-001. **Closure grade: BEHAVIORAL** (run + show output).

### D2 — thin pointer-manifests for the 2 bodiless corespines
**Spec:** two thin `canonical_file`s (ARCH-00397 precedent — point AT `distributed_in` sources, copy no
content, A8/I10-safe): a Threshold manifest (pointing at ARCH-00320 I1-I21 + CLAUDE.md §2.7/§3) and a
Master-Validation manifest (pointing at ARCH-00008 + ARCH-00320 + quality-ledger.yaml), both new ARCH ids
allocated through the ONE naming gate AT BUILD TIME. Registry `canonical_file` set for both, so D1 passes clean.
**Finish line:** `bash dna/checks/corespine-bodiless.sh` shows 0 findings. **Closure grade: BEHAVIORAL.**

### D5 — de-dup label on the Threshold invariant mirror
**Spec:** the registry comment `# Invariants I1-I21 live in both places` is joined by a
`MIRROR — SSOT is ARCH-00320` label on the CLAUDE.md §2.4-style copy (same pattern §2.4 uses for axioms,
I10). Labeling only — no deletion of either copy (Governor decree 2026-07-21, no-collateral-deletion).
**Finish line:** grep confirms the MIRROR label present. **Closure grade: MECHANICAL.**

### D3 — `[PARK-REVIEW-FRESH]` parked-item aging (extends beyond `decisions_pending:`)
**Spec:** `dna/checks/park-review-fresh.sh`, wired into `plan-audit.sh`, WARN-only. Same freshness-stamp
shape as `agent-pass-gate.sh` (`.stamp` file, WARN if >N days stale) — NOT a per-file TTL backfill (rejected
below). On fire: counts current `dna/ibd/*.md status: PARKED-RAW` + `dna/queue/BP-*.md` not `COMPLETE`,
prints the count, directs a batch review sweep; `touch`ing the stamp resets the clock.
**Finish line:** stamp absent/>N days old → WARN with a real count (tested vs current ~20 PARKED-RAW + 12
BP). **Closure grade: BEHAVIORAL** (planted stale + fresh date test, both directions).

### D4 — per-part Threshold coverage-map check
**Spec:** `dna/checks/threshold-coverage-map.sh`, WARN-only. Enumerates Threshold's own parts (invariants
I1-I21, Gate 0 goal-connection, SWIFT, park-by-demand routing), labels EACH: WIRED (cites the mechanism),
PROSE-BY-DESIGN (cites CLAUDE.md §2.7's own disclosed input-time-stamp limit), or NOT-YET-WIRED. MED cost.
**Finish line:** table exists, every WIRED cell grep-verifiable, every PROSE-BY-DESIGN cell cites §2.7's
disclosure, no cell silently blank. **NEEDS PLANTED TESTS before shipping** (Principle 15 — not resolved
here). **Closure grade: BEHAVIORAL.**

### NOTE — GI-30 mis-cite (Opus/Governor-only, NOT a Sonnet deliverable, I7)
GI-30's `status: RATIFIED-WIRED` cites `home: "ARCH-00360 RULE 5"` (per-item 7-day TTL w/ owner/deadline/
blocker), but the only live 7-day mechanism (`agent-pass-gate.sh`) implements Principle 21's weekly
all-agents pass — a DIFFERENT decree. A truth-field over-claim. Routed to Opus to correct `home:`/`status:`
directly in `dna/governor-insights.yaml` (Sonnet may not write this field, I7).

## Tags + Statuses on every node this plan creates (ARCH-00401 Enh.2)
No node is created by this drafting task. D2's manifests, D1/D3/D4's check scripts, D5's label edit are all
spec'd, NOT-YET-BUILT — see the alignment table below.

## Per-File Alignment Table (ARCH-00401 Enh.3)
| File | ID / Number | Schema Placement | Tag | Status |
|---|---|---|---|---|
| this plan file | CISEM-ARCH-00423 (naming-registry.yaml 423→424, ONE gate) | T-SYS, planning-governance | threshold-audit, backlog-N5 | DRAFT / AWAITING-BUILDER-REVIEW |
| `dna/checks/corespine-bodiless.sh` (D1) | no ID — script | T-SYS, enforcement/CAL | corespine-bodiless, self-audit | NOT-YET-BUILT |
| 2 pointer-manifests (D2) | new ARCH ids at build time | L2, corespine layer | threshold, master-validation | NOT-YET-BUILT |
| `corespine-registry.yaml` (D5 target) | existing | T-SYS, registry | mirror-label | RATIFIED entries, unchanged by drafting |
| `dna/checks/park-review-fresh.sh` (D3) | no ID — script | T-SYS, enforcement/CAL | parking-aging | NOT-YET-BUILT |
| `dna/checks/threshold-coverage-map.sh` (D4) | no ID — script | T-SYS, enforcement/CAL | coverage-map | NOT-YET-BUILT, needs planted tests |
| `governor-insights.yaml` GI-30 (Opus-only) | GI-30 (existing) | T-SYS, insight registry | — | RATIFIED-WIRED, flagged mis-cited, unchanged here |
| `dna/naming-registry.yaml` (modified — 423→424) | REG type, self-exempt | T-SYS, naming-allocation | naming, numbering | present, unchanged |

## What DOES change (upon ratification — implementation is a LATER step)
New: `corespine-bodiless.sh` (D1), 2 pointer-manifests + registry `canonical_file` fields (D2), CLAUDE.md
MIRROR label (D5), `park-review-fresh.sh` (D3), `threshold-coverage-map.sh` (D4). `naming-registry.yaml`
ARCH next_seq 423→424 (this drafting task, the ONE gate).

## What does NOT change
No existing check rewritten; D1/D3/D4 are NEW WARN checks, additive to `plan-audit.sh`. `[P3]`
`decisions_pending:` untouched — D3 is a SIBLING (different population, same idiom). No corespine's RATIFIED
status touched — only bodies gain a canonical_file (D2). GI-30's fields NOT edited by this plan (I7).

## Definition-of-Done reference (ARCH-00401 Enh.5)
Per `dna/checks/definition-of-done.md`: every deliverable is DONE only when PRODUCED + WIRED (grades above) +
PROPAGATED (registry canonical_file for D2, plan-audit.sh invocation for D1/D3/D4) + COMMITTED+PUSHED +
VERIFIED. Nothing here is claimed done in this drafting task — all NOT-YET-BUILT.

## Propagation Declaration (ARCH-00401 Enh.6)
(1) D1 is the SINGLE self-audit for corespine-body-presence — no second registry-scanning check forked.
(2) D2's manifests are thin POINTERS (A8/I10), never a copied duplicate. (3) D3 is additive to, never a
replacement of, `[P3]`. (4) `[PROPAGATE]` fires on any future edit to this plan's SSOT-touching files.

## Dependencies (blocks-on / unblocks-for)
- **Blocks-on:** none — D1/D5 build independently; D2 needs D1 to exist first; D3/D4 independent of D1/D2.
- **Unblocks-for:** any future plan needing an honest "is this corespine wired" answer (D1); the RIPL-drain
  backlog item (#1), which needs an honest parked-item count (D3).

## Ratification Path
Stage 0 (iterative Haiku→Sonnet→Opus draft-review, ARCH-00190 §3) — NOT yet run; this v0.1 draft awaits
Independent Verifier (`cisem-haiku`) → Stage 1 (`cisem-opus-pe`, Core Seeds filled) → Stage 2 (Governor
decree). Each deliverable carries its OWN build-and-verify gate at implementation.

## Path Rejection Declaration (CLAUDE.md §2.8)
- Rejected: per-file TTL backfill for D3 (editing ~44 IBD + 12 BP files) — the batch-freshness-stamp
  (agent-pass-gate.sh idiom) gets the same aging signal without touching ~56 governed files.
- Rejected: fake-fixing prose-by-design routing in D4 by forcing every Threshold part to a WIRED/NOT-YET-WIRED
  binary — CLAUDE.md §2.7 already discloses its input-time-stamp limit honestly; D4 must CITE that as
  PROSE-BY-DESIGN, not misrepresent it as a gap or force a mechanism that isn't claimed to exist.
- Rejected: resolving GI-30's mis-cite inside this plan — I7 forbids Sonnet writing a truth field.
- Rejected: deleting either copy of the Threshold invariants in D5 — labeling only, no collateral deletion.
- Rejected: building D1-D5 in this same drafting task — A4/I25 requires ratification first (naming-gate
  self-registration exempt only).

## CAL reference (CISEM-ARCH-00390)
Pre-commit `[ZF]` + `[PLAN-SECTIONS]` + `[GI-CONSIDERATION]` (LIVE) run on this file at commit time. Once
D1/D3/D4 are built, they join the SAME `plan-audit.sh` invocation — no new hook required.

## wisdom_considered (GI-CONSIDERATION, ≥1 resolving citation)
wisdom_considered: GI-39, RI-0009, RI-0010
- `id: GI-39` — Gate 0 / CS-THRESHOLD-001 hardwiring (this plan gives Threshold's body a home consistent with it).
- `RI-0009` — DECLARED-UNIVERSAL-BUT-WIRED-NARROW (D1's root pattern: a gate for "everything" must fire on
  everything, not the first scope it started in).
- `RI-0010` — Principle 18 GLOBAL-VIEW/WIRE-DON'T-DOCUMENT (D3's class-completeness: enumerate the WHOLE
  parking population, not a curated subset).

## Opus Soundness Verdict (Stage-1, [RATIFY-GATE])
**SOUND.** Goal measurable; the 3 gaps are genuine + bounded (Existing-First source-verified, not inherited); anti-scatter order correct (D1 anchor drives D2); tier-routing + I7 respected (GI-30 Opus-only); path rejections sound (no per-file backfill, no fake-fixing prose-by-design routing, no collateral deletion); Core Seeds filled. **ONE GOVERNOR DECISION flagged (not Opus's to pick):** D3's staleness threshold **N days** is a parking-aging POLICY call — the old 7-day figure was for a different population; the Governor sets N at ratification (or delegates it to Opus). **GI-30 correction** awaits Governor awareness (his insight record). Pre-build gates still to run AFTER ratification, BEFORE any D1–D5 build: the cisem-haiku independent-verify (P5) + the GI-68 dual-review. — Opus (cisem-opus-pe), 2026-07-25.

## Change log
- v0.1 — 2026-07-25 (Sonnet, STRUCTURING tier, dispatched by Opus per the Threshold/Routing/Parking audit
  findings, backlog N5): initial skeleton. 5 deliverables (D1 anchor, D2, D5, D3, D4) in anti-scatter order;
  3 Core-Seed placeholder slots for Opus; 7-source Existing-First; GI-30 flagged Opus-only. Not committed by
  Sonnet (§1.7 — Opus commits after review).
