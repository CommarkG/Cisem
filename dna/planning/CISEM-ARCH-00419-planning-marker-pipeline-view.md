# Planning Marker — Pipeline-Position View (thin, read-only; completes GI-66)
**Node ID:** CISEM-ARCH-00419 | **Type:** ARCH | **Status:** PROVISIONAL-ACTIVE
**Planning Status:** CONSENSUS-REACHED (Opus Stage-1 soundness = SOUND, 2026-07-24; awaiting Brain-iteration + GI-68 dual review → Governor Stage-2) | **depth_level:** L1 | **Position in schema:** T-SYS, planning-governance layer
**tags:** [planning-marker, pipeline-view, cluster-maturity, goal-approach-stages, read-only-view, governance-loop]
**Goal:** ONE clear signal showing where any topic sits in the governance pipeline — raw-parked → goal-consensus →
approach → plan → ratified → shipping → archived — WITHOUT adding a new parallel status axis (six already exist,
per VOC-00002's UNIFIED AXIS INDEX) — measurable as: (1) the four-home mapping table below is grep-verifiable
against the cited files; (2) the view-mechanism spec asserts zero write paths; (3) GI-66's Cluster-Maturity
pointer-row is retired from ARCH-00417 with no duplicate home created (A8, one source).
**Governing corespine:** CS-CREATION-001
**Independent Verifier:** `cisem-haiku` (cold, protocol-lens; distinct from `cisem-sonnet`, this plan's author — P5).

**Size-gate (§3.6, documented exception, honesty per Principle 17):** despite being the leanest plan in this
family, this file exceeds 200 lines (word count stays WELL under the 3,500-word ceiling — see exact figures in the
v0.1 Change-log entry) — the same structural tension named in **RI-0026** (ARCH-00401's mandatory sections
routinely exceed 200 lines for any real plan — ARCH-00190, ARCH-00401, ARCH-00417, ARCH-00418 all hit it too).
Kept whole rather than mini-tree-split (four thin deliverables split into separate files would be more ceremony
than content); reported honestly here, not silently claimed clean.

## Core Seeds (from Opus dispatch, 2026-07-24 — immutable, executed verbatim, I13; quoted per Principle 14)
```
[[CORE-SEED A | MUST: the Planning Marker is a THIN READ-ONLY VIEW mapping pipeline position across EXISTING
homes — build NO new tracker, NO new stored enum for states that exist, do NOT widen Planning Status; it is NOT
GI-56 | WHY: consolidate-don't-add (A8); GI-56 is a rigor-dispatcher, this is a state-readout (different purpose —
folding them = A9 mush) | APPLIES_TO: the whole plan]]
[[CORE-SEED B | MUST: the four homes are — FRONT raw-parked = IBD PARKED-RAW (exists); NEW goal/approach stages =
CS-THRESHOLD-001 (the ONLY genuinely-new states); MIDDLE plan lifecycle = Planning Status ARCH-00190 (unchanged);
BACK archived = Disposition/archive-ledger (unchanged) | WHY: source-verified 2026-07-24 — Disposition is the
archived BACK (graveyard ledger), NOT the front; the front already lives in IBD's PARKED-RAW | APPLIES_TO: the
view's mapping]]
[[CORE-SEED C | MUST: the goal/approach segment CANNOT mechanize until CS-THRESHOLD-001 has a BODY (registered but
bodiless, verified) — state as a HARD dependency, do NOT assume Threshold is ready | WHY: honest blocker named
upfront, not discovered later | APPLIES_TO: the goal/approach segment]]
[[CORE-SEED D | MUST: this COMPLETES GI-66's Cluster Maturity as a VIEW (not a new stored axis) — and RETIRES the
parked ARCH-00417 Cluster-Maturity pointer-row into this, so there are not two designs for one thing | WHY: A8
consolidation | APPLIES_TO: GI-66 + ARCH-00417 reconciliation]]
[[CORE-SEED E | MUST: PLAN skeleton only — build NO mechanism; Planning Status AWAITING-BUILDER-REVIEW; no
self-ratify; DOGFOOD the DoD finish-line discipline — declare each deliverable's pre-declared finish line +
closure-grade (MECHANICAL|BEHAVIORAL) | WHY: A4/A11 + ARCH-00418's discipline | APPLIES_TO: this drafting task]]
```

## Pocket Declaration
- **reasoning_scope:** draft the CISEM-ARCH-00419 plan skeleton per the three-way ratified design (Governor goal +
  approach 2026-07-24, Opus+Brain consensus, source-verified); produce the plan artifact only, build no mechanism
- **inherited_constraints:** A4/A11 (plan gate + consultation-before-production); A8/I10/I19 (map existing homes,
  never fork a parallel axis); I22/I23 (no unverified "wired"); §1.7 git-race (stage specific files, no commit by Sonnet)
- **output_contract:** this plan document only; `dna/naming-registry.yaml` next_seq bump (the ONE naming gate)
- **ai_cannot:** self-ratify; build the view script or the CS-THRESHOLD-001 body; write any truth field on
  ARCH-00417/GI-66/corespine-registry
- **recorded_at:** 2026-07-24

## Tier-Routing Declaration (CLAUDE.md §3.0)
- **Drafting this plan → Sonnet** (STRUCTURING tier) — executing Opus's fully-specified design verbatim (5 Core
  Seeds); no design judgment exercised, direction is already three-way ratified.
- **Judging soundness (Stage 1) → Opus (cisem-opus-pe)** — cold default-refute, fresh read.
- **Fable Stage 1.5 → NOT triggered** (requires separate human activation + token estimate; not invoked here).
- **Governor Stage 2 → ratification authority** for THIS plan artifact.
- Why: mechanical drafting of a spec'd plan = Sonnet's lane; judgment/soundness/truth = Opus's (§3.0 rubric).

## Existing-First (§3.2b, done) — searched, in order
1. Repo-wide grep for `Planning Marker`/`planning-marker`/`pipeline-position`/`pipeline position` — **0 hits**
   anywhere except (after this task) this file — no existing view/tracker under this or an equivalent name.
2. `dna/ssot-registry.yaml` — `intake_routing` (queue+IBD), `goal_connection` (CLAUDE.md §2.7 Gate 0 / mirrors
   CS-THRESHOLD-001), `ruled_out_decisions` (archive-ledger), `definition_of_done` — no `pipeline_view` or
   `cluster_maturity` entry exists; confirms this is a genuine gap, not a duplicate.
3. `dna/ibd/README.md` (read in full) — confirms `status: PARKED-RAW` IS the FRONT (raw-parked) home; entries
   are `IBD-NNNN`, gate-exempt by design (CLAUDE.md §2.6).
4. `dna/planning/CISEM-ARCH-00190-planning-domain-protocol.md` §1 (read in full) — confirms Planning Status
   `AWAITING-BUILDER-REVIEW→COMMENTS-RECEIVED→CONSENSUS-REACHED→IN-PROGRESS→COMPLETE→SUPERSEDED` IS the MIDDLE
   (plan lifecycle) home, unchanged, IN-PROGRESS/COMPLETE/SUPERSEDED already covering shipping/done/retired.
5. `dna/archive/archive-ledger.yaml` header (read in full) — confirms Disposition
   (`RULED-OUT-PERMANENT/TEMPORARY·SUPERSEDED·VAULTED-CONFLICT·REOPENED`) is the archive's own vocabulary for
   DECIDED-AGAINST/replaced items — the BACK (archived), not a front-of-pipeline stage. Grepped for
   "planning marker"/"pipeline view"/"cluster maturity" — no RULED-OUT entry; nothing to avoid re-proposing.
6. `dna/corespines/corespine-registry.yaml` `CS-THRESHOLD-001` entry (read in full) — `status: RATIFIED`,
   `content_location: { distributed_in: [ARCH-00320, CLAUDE.md] }` — **no `canonical_file` field** — confirms
   RATIFIED-but-BODILESS (registered, no manifest of its own), matching Core Seed C exactly.
7. `dna/governor-insights.yaml` `GI-56` (read in full) — "a DEPTH ORCHESTRATOR reads blast → picks depth →
   dispatches rigor+tier" — a **rigor-dispatcher** (decides HOW MUCH process a NEW creation needs), confirmed
   different purpose from a state-READOUT (Core Seed A) — rejected as the home.
8. `dna/governor-insights.yaml` `GI-66` (read in full) — names the pipeline-position axis
   (`forming→converging→plan-ready→shipping`) as needed "field form," never built — this plan IS that field form.
9. `dna/planning/CISEM-ARCH-00417-harvest-loop-completion-controller.md` Phase 0 (c) + "What DOES change" (read
   in full) — its own planned deliverable: "ONE new Cluster-Maturity pointer row (home GI-66)" in VOC-00002 — this
   is the row being retired (Core Seed D); ARCH-00417 is NOT ratified, so nothing built yet to undo, only the
   PLANNED bullet to redirect.
**VERDICT:** genuine gap (no existing pipeline-position view); every SEGMENT of the mapping maps onto an EXISTING,
unchanged home; the one planned-but-unbuilt duplicate (ARCH-00417's VOC-00002 row) is caught before it is built.

## Executive Summary
CISEM has SIX status/lifecycle axes (VOC-00002's UNIFIED AXIS INDEX) but no single answer to "where does topic X
sit in the pipeline, right now?" — a Governor/Opus/Brain question asked informally every session. This plan defines
a THIN, READ-ONLY VIEW that reads FOUR already-governed homes (IBD PARKED-RAW → CS-THRESHOLD-001's new
goal/approach stages → Planning Status → Disposition) and renders ONE line per topic. It builds NO tracker and
widens NO existing axis; it COMPLETES GI-66's named-but-unbuilt Cluster-Maturity axis as this view, and retires
ARCH-00417's now-redundant planned VOC-00002 pointer-row before it is ever built (A8).

## Anti-Scatter Ordering (CLAUDE.md §2 Principle 16)
D1 (the mapping table) is the PREREQUISITE — nothing else can be specified against a mapping that doesn't exist
yet. D4 (GI-66/ARCH-00417 reconciliation) is next — CHEAP (two document edits, zero new mechanism) and it closes
a live gap-creation risk (ARCH-00417 would otherwise build a redundant row on its next revision). D2 (the view
mechanism spec) follows — it consumes D1's table directly. D3 (the goal/approach stages) is LAST — it is fully
BLOCKED on CS-THRESHOLD-001 gaining a body (Core Seed C), so ordering it first would stall the whole plan on an
external dependency instead of shipping the three deliverables that don't need it.

## The Rule — four deliverables, D1→D4→D2→D3 order (per Anti-Scatter above)

### D1 — The Pipeline-Position Mapping Table (prerequisite, fully specified, docs-only)
| Pipeline position | Existing home | Field / status cited | Governed by |
|---|---|---|---|
| **FRONT — raw-parked** | IBD | `status: PARKED-RAW` | `dna/ibd/README.md` (CLAUDE.md §2.6) |
| **NEW — goal-consensus** | CS-THRESHOLD-001 | `GOAL-CONSENSUS` *(new state)* | CS-THRESHOLD-001 (once bodied — D3) |
| **NEW — approach-iterating** | CS-THRESHOLD-001 | `APPROACH-ITERATING` *(new state)* | CS-THRESHOLD-001 (once bodied — D3) |
| **NEW — approach-ratified** | CS-THRESHOLD-001 | `APPROACH-RATIFIED` *(new state)* | CS-THRESHOLD-001 (once bodied — D3) |
| **MIDDLE — plan (drafting→ratified)** | Planning Status | `AWAITING-BUILDER-REVIEW→COMMENTS-RECEIVED→CONSENSUS-REACHED` | ARCH-00190 §1 (unchanged) |
| **MIDDLE — shipping/done** | Planning Status | `IN-PROGRESS→COMPLETE` | ARCH-00190 §1 (unchanged) |
| **MIDDLE — retired-as-plan** | Planning Status | `SUPERSEDED` | ARCH-00190 §1 (unchanged) |
| **BACK — archived** | Disposition | `RULED-OUT-*·SUPERSEDED·VAULTED-CONFLICT·REOPENED` | archive-ledger.yaml (unchanged) |
**Finish line:** this table exists in this plan document, every "Governed by" cell grep-verifiable against the
cited file/section. **Closure grade: MECHANICAL** (a reviewer greps each cited file and confirms the field exists
there verbatim — done now, in this drafting task, by the Existing-First searches above).

### D4 — GI-66 + ARCH-00417 Reconciliation (cheap, docs-only, closes a live duplication risk)
**What changes (upon ratification, NOT in this drafting task):**
1. `dna/planning/CISEM-ARCH-00417-harvest-loop-completion-controller.md` Phase 0 (c) + "What DOES change" — the
   bullet "`CISEM-VOC-00002` — ONE new Cluster-Maturity pointer row (home GI-66; not a DIOS/VOC-00003 fork)" is
   REPLACED with a pointer to CISEM-ARCH-00419: ARCH-00417's cluster-maturity read is satisfied BY this plan's D1
   mapping + D2 view — no separate VOC-00002 row is built. ARCH-00417's OWN mechanism (M2 classification) still
   reads/writes ITS OWN data; only the "where does the human/Opus SEE cluster pipeline-position" concern moves here.
2. `dna/governor-insights.yaml` GI-66's `home:` field gains a trailing pointer to `CISEM-ARCH-00419` (the field
   form it named is now built here) — a metadata edit, not a re-derivation of the insight's content (I13-adjacent
   discipline: GI text stays verbatim, only the `home:`/status pointer is extended).
**Finish line:** ARCH-00417 no longer plans to build a VOC-00002 row; GI-66's home pointer cites ARCH-00419.
**Closure grade: MECHANICAL** (grep ARCH-00417 post-edit for the retired bullet's absence + the new pointer; grep
GI-66 for the ARCH-00419 citation) — a Phase-0 action at IMPLEMENTATION time, not claimed done in this drafting task.

### D2 — The Read/Display Mechanism (thin; consumes D1; NOT built in this drafting task)
**Spec:** `dna/checks/planning-marker-view.sh` (name provisional, confirmed at build time against naming
conventions) reads the four homes named in D1 — `dna/ibd/*.md` (grep `status:`), `dna/planning/*.md` (grep
`Planning Status:`), `dna/archive/archive-ledger.yaml` (`disposition:` field), and (once D3 unblocks)
CS-THRESHOLD-001's stage stamps — and prints ONE line per topic id: `<id> | <pipeline-position> | <source-file>`.
**Explicitly a VIEW, not a tracker:** the script contains ZERO write/append calls to any of the four homes — it
only reads and prints. This is the mechanical form of Core Seed A.
**Finish line:** a script exists at the stated path; running it against ≥1 real topic id from EACH of the four
already-live homes (IBD/Planning-Status/Disposition — 3 of 4, since CS-THRESHOLD-001's stages are D3-blocked)
prints the correct position, and `grep -c` for any write-syscall pattern (`>`, `>>`, `sed -i`, a YAML-write
library call) returns 0. **Closure grade: BEHAVIORAL** (asserted by running the script against real data at build
time, not merely "the file exists") — NOT-YET-BUILT; this drafting task specifies the contract only.

### D3 — Goal/Approach Stages Spec (LAST; hard-blocked, NOT built in this drafting task)
**Spec:** three NEW states — `GOAL-CONSENSUS`, `APPROACH-ITERATING`, `APPROACH-RATIFIED` — homed on
CS-THRESHOLD-001 (the standing process CLAUDE.md §2.7 Gate 0 already routes through); these are the ONLY
genuinely-new pipeline states this plan introduces (Core Seed B) — everything else in D1's table cites an
unchanged existing home.
**HARD DEPENDENCY (Core Seed C):** CS-THRESHOLD-001 is RATIFIED but BODILESS — `corespine-registry.yaml` shows
`content_location: { distributed_in: [ARCH-00320, CLAUDE.md] }` with **no `canonical_file`**. A state enum cannot
be added to a corespine that has no manifest to add it TO. This deliverable is BLOCKED until a separate,
ratified plan gives CS-THRESHOLD-001 a body (out of THIS plan's scope — not silently assumed available).
**Finish line:** CS-THRESHOLD-001 has a `canonical_file`; the three states are defined in it with entry/exit
conditions; D2's view mechanism is extended to read them. **Closure grade: BEHAVIORAL** (a real topic transitions
GOAL-CONSENSUS→APPROACH-ITERATING→APPROACH-RATIFIED and D2's view shows each transition, disk-verifiable) —
explicitly NOT attempted here; stated as a named, tracked blocker (Principle 21 — a legitimate registered park,
not a vague "later").

## Tags + Statuses on every node this plan creates (ARCH-00401 Enh.2)
No NEW node is created by this plan (D1 is a table inside this document; D4 edits two EXISTING files' content at
implementation time; D2/D3 are NOT-YET-BUILT specs). See the alignment table below for the two genuinely new
future artifacts (both spec-only here).

## Per-File Alignment Table (ARCH-00401 Enh.3)
| File | ID / Number | Schema Placement | Tag | Status |
|---|---|---|---|---|
| `.../CISEM-ARCH-00419-...md` (this file) | CISEM-ARCH-00419 (naming-registry.yaml 419→420, ONE gate) | T-SYS, planning-governance | planning-marker, pipeline-view | PROVISIONAL-ACTIVE / AWAITING-BUILDER-REVIEW |
| `dna/checks/planning-marker-view.sh` (D2, not created) | no ID — script, ARCH-00320 §6 | T-SYS, enforcement/CAL | pipeline-view, read-only | NOT-YET-BUILT |
| `dna/planning/CISEM-ARCH-00417-...md` (D4 target, not edited here) | CISEM-ARCH-00417 (existing) | T-SYS, planning-governance | harvest-loop, completion-controller | PROVISIONAL-ACTIVE, unchanged by this drafting task |
| `dna/governor-insights.yaml` GI-66 (D4 target, not edited here) | GI-66 (existing) | T-SYS, governance-insight-registry | creation_quality_and_completeness | RATIFIED, unchanged by this drafting task |
| `dna/corespines/CS-THRESHOLD-001` (D3, no body to edit — the blocker itself) | CS-THRESHOLD-001 (existing, RATIFIED, bodiless) | L2, corespine layer | — | RATIFIED / bodiless, unchanged by this drafting task |
| `dna/naming-registry.yaml` (modified — 419→420) | REG type, self-exempt | T-SYS, naming-allocation | naming, numbering | present, unchanged |

## What DOES change (upon ratification — implementation is a LATER step; nothing here executes now)
- New: `dna/checks/planning-marker-view.sh` (D2). New: CS-THRESHOLD-001 canonical_file + 3 new states (D3, once its
  own hard dependency clears via a separate plan).
- `dna/planning/CISEM-ARCH-00417-...md` — Phase 0 (c) bullet + "What DOES change" bullet redirected to point here (D4).
- `dna/governor-insights.yaml` GI-66 — `home:` field gains a trailing pointer to CISEM-ARCH-00419 (D4).
- `dna/naming-registry.yaml` — ARCH next_seq 419→420 (this drafting task, the ONE gate).

## What does NOT change
- No existing axis is widened — Planning Status keeps its six values unchanged (Core Seed A). No node's Status
  field is touched. No new parallel status/tracker axis is created anywhere.
- GI-56 is untouched (Core Seed A — different purpose, not folded).
- CS-THRESHOLD-001's RATIFIED status is untouched; only a FUTURE (separately-planned) body-build could add its
  canonical_file — not attempted here.
- Disposition (archive-ledger.yaml) vocabulary is unchanged — it stays the BACK/archived home, correctly.

## Definition-of-Done reference (ARCH-00401 Enh.5)
Per `dna/checks/definition-of-done.md` (cited, not re-derived): D1/D4 are DONE only when PRODUCED
(table/edits exist) + WIRED (grep-verifiable, MECHANICAL grade above) + PROPAGATED (ARCH-00417/GI-66 both updated,
not just one) + COMMITTED+PUSHED + VERIFIED. D2/D3 stay honestly NOT-YET-WIRED until their own build-and-verify
pass runs (BEHAVIORAL grade above) — never claimed done from presence alone (Principle 17 presence≠behavior).

## Propagation Declaration (ARCH-00401 Enh.6)
(1) D1's mapping table is the SINGLE reference for "where a topic sits" — D2's script implements it BY-REFERENCE,
never re-derives a second mapping. (2) D4's edits are BY-REFERENCE pointers (ARCH-00417→ARCH-00419,
GI-66→ARCH-00419), never a copied description (A8/I10). (3) `ssot-registry.yaml`'s live `[PROPAGATE]` check fires
on any future edit to this plan's SSOT-touching files. (4) VOC-00002's UNIFIED AXIS INDEX table MAY gain a
"Planning Marker (view)" pointer row at D2's build time — explicitly deferred to implementation, not decided here,
so this drafting task does not touch VOC-00002.

## Dependencies (blocks-on / unblocks-for)
- **Blocks-on:** D3 hard-blocks on CS-THRESHOLD-001 gaining a body (a SEPARATE, not-yet-drafted plan; Core Seed C).
  D1/D4/D2 have NO blocking dependency — free to ratify and build independently of D3.
- **Unblocks-for:** ARCH-00417's Phase 0 (c) (removes its planned VOC-00002-row deliverable, simplifying its own
  build); any future session asking "what's the pipeline state of X" (currently answered only informally).
- **Fulfills:** GI-66's named-but-unbuilt "field form" requirement (2026-07-23 decree) — this plan IS that form,
  scoped to state-readout only (the maturity JUDGMENT itself, per GI-66, stays an orchestrator/human call, not
  mechanized by this view).

## Ratification Path
Stage 0 (iterative Haiku→Sonnet→Opus draft-review, ARCH-00190 §3) — NOT yet run; this v0.1 draft awaits Independent
Verifier (`cisem-haiku`, cold protocol-lens) → Stage 1 (`cisem-opus-pe`, soundness) → Stage 1.5 (fable, not
invoked) → Stage 2 (Governor decree). D2/D3 each carry their OWN later build-and-verify gate at implementation.

## Opus Stage-1 Soundness Verdict (ARCH-00190 §3 Stage 1; [RATIFY-GATE])
**Verdict: SOUND** (cisem-opus-pe, 2026-07-24; cold default-refute). Mirrors ARCH-00190 §2; honors all 5 Core Seeds
verbatim; Existing-First is 9-source and SOURCE-VERIFIED (each home read in full, not paraphrased — RI-0025 applied).
The four-home mapping is correct and grep-verifiable (IBD PARKED-RAW front · CS-THRESHOLD-001 new stages · Planning
Status middle · Disposition back). Dogfoods ARCH-00418's finish-line discipline honestly — D1/D4 MECHANICAL (grep),
D2/D3 BEHAVIORAL + NOT-YET-BUILT (presence≠behavior respected). D3's CS-THRESHOLD-001-bodiless dependency is stated
as a hard blocker, not assumed. D4 catches ARCH-00417's planned-but-unbuilt duplicate VOC-00002 row before it is
built (A8 prevention). Correctly NOT GI-56, NOT a widened Planning Status, NOT a parallel axis. **NEXT: Brain-iteration
on the plan (new standing process) + GI-68 dual review → Governor Stage-2.**

## Self-Compliance (against ARCH-00230 checklist + ARCH-00190 §2, ARCH-00401-amended)
✓ Header ✓ Tier-Routing ✓ Existing-First (9-source) ✓ Anti-Scatter ✓ The Rule (4 deliverables, ordered, each with
finish-line+grade) ✓ Tags+Statuses ✓ Alignment Table ✓ What DOES/NOT change ✓ DoD ref ✓ Propagation Decl
✓ Dependencies ✓ Ratification Path ✓ Verifier named ✓ Path Rejection ✓ CAL ref ✓ Change log.

## Path Rejection Declaration (CLAUDE.md §2.8)
- ❌ Rejected: a new parallel status axis for pipeline-position — the whole point is mapping EXISTING homes (Seed A).
- ❌ Rejected: widening Planning Status with new values — its six values already cover the MIDDLE segment exactly.
- ❌ Rejected: folding this into GI-56 — GI-56 is a rigor-dispatcher (decides how much process a NEW thing needs);
  this is a state-readout of things ALREADY in the pipeline — different purpose, folding = A9 mush.
- ❌ Rejected: Disposition (archive-ledger) as the FRONT — source-verified it is the BACK (archived/ruled-out); the
  front is IBD's PARKED-RAW.
- ❌ Rejected: building D2's script or D3's CS-THRESHOLD-001 body in this same task — A4/I25 requires ratification
  first (naming-gate self-registration exempt only); D3 additionally hard-blocked (Seed C).
- ❌ Rejected: silently letting ARCH-00417 build its own VOC-00002 Cluster-Maturity row on its next revision — D4
  catches and redirects it now, before duplication happens (A8, prevention not local-patch).

## CAL reference (CISEM-ARCH-00390)
Pre-commit `[ZF]` + `[DOD]` + `[ROUTING]`/`[ALIGN]`/`[TAG-STATUS]` + `[PROPAGATE]` (LIVE) all run on this file at
commit time. Once D2/D3 are built, they join the SAME `plan-audit.sh` invocation — no new hook required for a
read-only view.

## Pre-ratification edge-case addenda (Brain, 2026-08-09; Opus decision 2026-08-09)

**Edge 2.1 — Cross-axis flag (archived+open = leak):**
When a topic shows ARCHIVED on the lifecycle axis (Disposition = RULED-OUT-*/SUPERSEDED) while
open work items for that topic still sit in repository homes (IBD, queue, planning), that is a
**cross-axis inconsistency flag**, NOT an error in either view. The lifecycle axis closed the topic;
the repository homes still carry live work. The view (D2) MUST surface this condition explicitly
rather than silently displaying the two views as independent. Detection: a topic whose Disposition
is non-null AND whose IBD/Planning Status home has PARKED-RAW or CONSENSUS-REACHED open entries
→ emit `CROSS-AXIS-FLAG: archived-with-open-work`.

**Edge 2.2 — CONSENSUS-REACHED = ratified-awaiting-build (named sub-state):**
The `MIDDLE — plan (drafting→ratified)` row currently bundles three qualitatively different states
under one label. CONSENSUS-REACHED is not "still drafting" — it is **ratified, awaiting build**,
and is the exact home of CISEM's most persistent failure mode (ratified-and-rotting). The mapping
table SHALL treat CONSENSUS-REACHED as a distinct sub-state:
- `AWAITING-BUILDER-REVIEW → COMMENTS-RECEIVED` = pre-ratification drafting/review
- `CONSENSUS-REACHED` = **ratified-awaiting-build** (Opus+Governor both approved; no build started)
D2's view SHOULD distinguish the two visually so ratified-but-unbuilt plans are immediately
visible as a class. This does not add a new Planning Status value (Core Seed A unchanged); it is
a display-grouping distinction within the existing vocab.

## Change log
- v0.2 — 2026-08-09 (Opus decision, bounded standing authorization): added pre-ratification
  edge-case addenda — two edges from Brain review (cross-axis flag condition; CONSENSUS-REACHED
  named as ratified-awaiting-build sub-state). No architectural change to the four-home mapping;
  Opus Stage-1 soundness verdict (v0.1) remains valid. These addenda feed into D2's display spec
  at build time.
- v0.1 — 2026-07-24 (Sonnet, STRUCTURING tier, dispatched by Opus per the three-way ratified design — Governor
  goal 2026-07-24, Governor approach 2026-07-24, Opus+Brain consensus, source-verified): initial skeleton. Four
  deliverables (D1 mapping, D4 reconciliation, D2 view spec, D3 blocked goal/approach spec) in anti-scatter order;
  5 Core Seeds (A–E) verbatim; 9-source Existing-First; D1/D4 finish-lines closable at implementation with MECHANICAL
  grade, D2/D3 require BEHAVIORAL grade (D3 additionally hard-blocked on CS-THRESHOLD-001's body). Size: ~252 lines /
  ~2,880 words (`wc -l`/`wc -w`, measured; exact count drifts by a line/word with each edit pass, cited
  approximately rather than re-chased to an exact figure) — over the 200-line ceiling, under the 3,500-word
  ceiling; documented exception per §3.6 (header note above). Not committed by Sonnet (§1.7 — Opus commits after review).
