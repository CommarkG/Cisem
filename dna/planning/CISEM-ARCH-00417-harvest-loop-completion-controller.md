# Harvest-Loop Completion Controller — Phased Plan (M1 capacity · M2 classification · S1 freshness · S2 drain · S3/S4 gates · M3 self-test)
**Node ID:** CISEM-ARCH-00417 | **Type:** ARCH | **Status:** PROVISIONAL-ACTIVE
**Planning Status:** COMMENTS-RECEIVED (Opus Stage-1 SOUND-design; mandatory dual review GI-68 found Phase-0 spec gaps [B1/B2/I1/I3/I4/I5] + a Governor decision [B3] — revision pending before Stage-2, 2026-07-23) | **depth_level:** L1 | **Position in schema:** T-SYS, planning-governance layer
**tags:** [harvest-loop, completion-controller, capacity-model, classification, freshness, drain, wiring-state, governance-loop, mandatory]
**Goal:** Close CISEM's harvest loop from an OPEN-LOOP (writes insights, no forcing function on wiring them) to a
CLOSED-LOOP controller — measurable as: (1) M1's capacity number is git/registry-**measured**, never hand-typed;
(2) 100% of the session-harvest §B ENHANCE-INDEX rows carry an M2 class (a/b/c); (3) Phase 4's hand-executed first
drain run processes THIS plan's own consensus item with disk-verifiable before/after evidence.
**Governing corespine:** CS-CREATION-001
**Independent Verifier:** `cisem-haiku` (cold pass, distinct from author `cisem-sonnet` — see Tier-Routing below for
why this differs from the `cisem-opus-pe`-as-verifier convention used elsewhere).
**Size-gate exception (§3.6, documented):** this file exceeds 200 lines — the dispatch instruction's phase-index
mitigation (Phase 0 fully specified, Phases 1–4 compact) was already applied to hold it near the 200-line gate;
the mandatory ARCH-00401 sections (Existing-First, Tier-Routing, the alignment table below, Path Rejection, etc.)
push it slightly past 200 lines while staying well under the 3,500-word ceiling. Declared explicitly per the same
documented-exception precedent as ARCH-00190/ARCH-00406, not exceeded silently.

## Core Seeds (from Opus dispatch, 2026-07-23 — immutable, executed verbatim, I13; quoted here per Principle 14 —
this plan is the block they govern)
```
[[CORE-SEED A | MUST: S5 stays DROPPED — do NOT reintroduce a separate production-throttle mechanism | WHY: folded
into S1/S2/M1 by consensus; a 5th mechanism is redundant + highest-blast | APPLIES_TO: this plan + any future proposal to re-add a throttle]]
[[CORE-SEED B | MUST: M1's capacity number is MEASURED from git-log + learning-registry history, stated as
measured-provisional, never a hand-authored literal | WHY: hand-typed literals go stale; measured-from-day-one is
the discipline | APPLIES_TO: M1 / Phase 0 build]]
[[CORE-SEED C | MUST: S1 freshness-check is WARN-first; BLOCK only after one ignored drain cycle; class-(c)
long-horizon items are EXEMPT by construction | WHY: BLOCK-on-age-alone manufactures false urgency + forces bad
re-parks | APPLIES_TO: S1 / Phase 2 build]]
[[CORE-SEED D | MUST: M4's build-exemption is TIME-BOXED to this plan-id and EXPIRES at COMPLETE | WHY: an
open-ended exemption becomes the new frictionless-forever | APPLIES_TO: M4 / Phase 1 build]]
[[CORE-SEED E | MUST: M3 — the plan's FINAL step is a hand-executed first drain-run processing THIS consensus item,
with disk-verifiable evidence | WHY: S2 is what the plan builds; the escape cannot depend on a not-yet-existing
mechanism | APPLIES_TO: the plan's Phase 4 (post-ratification)]]
[[CORE-SEED F | MUST: EXISTING-FIRST — S1 wires the already-declared freshness-check.sh (VOC-00002); S3 extends
I22/[DOD]; S4 applies the existing Wiring-State axis (authoritative home = CISEM-ARCH-00011 §4 per ssot-registry.yaml,
VOC-00002 its mirror, IBD-0003/0007/0010 the design lineage). Enhance, never fork | WHY: A8/
RI-0024 — the backlog already contains the controller's parts, unassembled | APPLIES_TO: S1/S3/S4 builds]]
[[CORE-SEED G | MUST: this is a PLAN skeleton only — draft the document; build NO mechanism; Planning Status stays
AWAITING-BUILDER-REVIEW; do NOT self-ratify | WHY: A4/A11 — no implementation before Opus-soundness + Governor-
authority | APPLIES_TO: this drafting task]]
```
**Seed G governs THIS drafting task; Seed E governs the PLAN'S OWN Phase 4 (a post-ratification step). Resolution
of the apparent tension between them is stated explicitly under Ambiguities in the return report — not guessed
silently.**

## Executive Summary
Assemble CISEM's already-scattered NAMED pieces (capacity, classification, freshness-check.sh, DoD/I22, the
Wiring-State axis, ARCH-00406's weekly drain) into ONE closed-loop completion controller — sensor (M2) + actuator
(S2) + setpoint (M1) — so harvested insights stop accumulating as NAMED-not-WIRED. Phased; enhances existing homes,
forks nothing; the final phase's first drain run processes this plan's own item, proving the loop closes on itself.

## Existing-First (§3.2b, done) — searched, in order
1. `dna/learning-registry/session-harvest-2026-07-23.md` §B ENHANCE-INDEX — the exact backlog this controller
   drains. EXISTS; not duplicated — used as the seed data set for M2/S4, referenced by pointer.
2. `dna/planning/CISEM-ARCH-00406-completion-propagation-layer.md` — Phase 1 (RIPL-v2 weekly-batch) is the
   NAMED-but-UNBUILT home for S2's drain actuator (its own header: "Phase 1 NOT yet greenlit"). S2 **ENHANCES**
   ARCH-00406 Phase 1; does not fork a second drain mechanism (A8/I19).
3. `dna/vocabulary/CISEM-VOC-00002-status-library.md` Freshness axis — already declares the `freshness-check.sh`
   contract (FRESH/AGING/STALE/UNKNOWN from `last_verified:`) as `NOT-YET-WIRED`. S1 **is that wiring**, not a new
   design.
4. `dna/checks/definition-of-done.md` + `[DOD]`/I22 in `dna/checks/plan-audit.sh` — S3 **extends** these (adds the
   observable-value-assertion requirement to a "WIRED" claim); does not create a parallel done-definition.
5. Wiring-State axis — confirmed via `dna/ssot-registry.yaml`: `wiring_states: { ssot: "CISEM-ARCH-00011 §4",
   mirrors: [VOC-00002] }`. Origin design capture: `dna/ibd/IBD-0003-gemini-vocab-alignment.md` item 22 ("The 4
   Wiring States... UPGRADE ours... enhance ARCH-00011 §4"), and `dna/ibd/IBD-0007`/`IBD-0010` as the broader
   rigid-vs-context / external-input lineage that fed the same axis family. **Correction to the dispatch instruction,
   disclosed not silently followed:** the AUTHORITATIVE home per the SSOT registry is `CISEM-ARCH-00011 §4`
   (VOC-00002 is its declared mirror, not a second source) — S4 cites ARCH-00011 §4 as the home, IBD-0003/0007/0010
   as the design lineage, consistent with Core Seed F's intent ("cite that real home, NOT VOC-00002") while being
   precise about which file is actually authoritative (I10).
6. `dna/corespines/CS-AI-PROFILING-001/persona-collaborator.md` RI-0024 clause ("Existing-First is a STARTING
   point... is it still the BEST option?") — already WIRED. This entire plan is RI-0024 applied at plan-scale:
   every part it needs already exists, unassembled.
7. `dna/archive/archive-ledger.yaml` — grepped for "harvest loop" / "drain" / "completion controller" — no
   RULED-OUT entry found; nothing here to avoid re-proposing.
8. `dna/corespines/corespine-registry.yaml` CANDIDATES block — grepped; no existing candidate for this exact
   controller. CS-CREATION-001 remains the correct governing corespine; no new corespine is proposed.
**VERDICT:** every mechanism (M1/M2/S1/S2/S3/S4) ENHANCES a named, disclosed existing home. Two NEW files are
genuinely novel artifacts (see the alignment table below), not forks of anything existing.

## Pocket Declaration
- **reasoning_scope:** draft a phased plan assembling M1 (capacity)/M2 (classification)/S1 (freshness)/S2 (drain)/
  S3+S4 (gates)/M4 (exemption)/M3 (self-test) into ONE closed-loop controller plan; produce the plan document only
  (Core Seed G)
- **inherited_constraints:** A4/A11 (consult-before-production; this plan itself IS the consultation output);
  A8/I10/I19 (enhance, never fork); I25 (a plan authorizes, does not implement); §1.7 git-race (specific-file
  staging, one committer); Core Seeds A–G verbatim, immutable
- **output_contract:** this plan document + the ONE naming-gate self-registration (`dna/naming-registry.yaml`
  ARCH next_seq 417→418) only — no check/hook/registry content-file is built or edited in this drafting task
- **ai_cannot:** self-ratify; stamp Status/RATIFIED; execute Phase 4's hand-run in THIS drafting task (resolved
  under Ambiguities — Core Seed E describes the PLAN'S OWN Phase 4 content, executed post-ratification, not a
  demand to fake/simulate it now, which Core Seed G + I22 forbid)
- **recorded_at:** 2026-07-23

## Tier-Routing Declaration (CLAUDE.md §3.0)
- **Drafting (this task) → Sonnet**, single-context authoring; no live Haiku subagent dispatched for the
  Existing-First gather (performed directly via grep/read, disclosed per the ARCH-00406 precedent — this session's
  tool-set has no subagent-dispatch capability).
- **Independent Verifier → `cisem-haiku`, cold pass, PROTOCOL-COMPLIANCE lens** (does this file follow ARCH-00190
  §2's checklist, structurally?) — run BEFORE Stage 1.
- **Stage 1 soundness → `cisem-opus-pe`, CONTENT-CORRECTNESS + judgment lens** (is the assembled design sound, do
  the seeds cohere, is the ambiguity resolution reasonable?). This is a deliberate 3-way split (author ≠ verifier
  ≠ judge) rather than the 2-way author≠verifier-as-judge pattern used elsewhere — it directly instantiates the
  persona SSOT's "two orthogonal review lenses" (protocol-checklist × content-correctness, no single model does
  both), stronger than P5's bare minimum.
- **Building each phase (post-ratification) → Sonnet**, per the Phase Rule (mechanical check/script edits are
  Sonnet's lane, §3.0 rubric).
- **Phase 4's hand-executed first drain run → Sonnet executes, Opus/Governor witness the evidence.**
- **Fable Stage 1.5 → not invoked** (no Governor activation requested).
- **Governor Stage 2 → ratification authority.**

## Anti-Scatter Ordering (CLAUDE.md §2 Principle 16 — per dispatch instruction, verbatim sequencing rationale)
M1+M2 are PREREQUISITES — every downstream threshold (S1's BLOCK trigger, S2's drain size N, S4's default-posture)
depends on a real capacity number and a real classification, so nothing else can be soundly specified before them.
S2 (drain) comes next — it is the actuator the whole controller exists to build. S1 (freshness) follows — it is
PRESSURE on the drain, meaningless before the drain exists to feel pressure. S3+S4 (gates) come after — they
audit/classify what S1/S2 now produce. M4 (exemption) is stated IN-TEXT inside Phase 1, not a separate phase — it
is a clause on S2, not an independent mechanism. M3 (self-test) is LAST by construction (Core Seed E: it processes
what Phase 1 builds, so it cannot run before Phase 1 exists).

## The Rule — PHASE 0 fully specified; Phases 1–4 given as a PHASE-INDEX (size-gate mitigation, stated per the
dispatch instruction's own carve-out: "if it cannot fit, produce the plan for the prerequisite phase + a
phase-index of the rest, and say so.")

### PHASE 0 — M1 (capacity setpoint) + M2 (classification sensor) — PREREQUISITE, fully specified
**Deliverable (a) M1:** a NEW measurement script, `dna/checks/harvest-capacity-model.sh`, that computes "items
wired per drain cycle, per tier" from disk history — e.g. `git log --since="<cycle window>" --name-only -- dna/checks/
.claude/ dna/protocols/` cross-referenced against `dna/learning-registry/` entries that transitioned to a WIRED/
CLOSED state within that window. Output: a cited number + the exact command that produced it (never a literal typed
by a human — Core Seed B). This drafting task does NOT run it or invent the number; that is Phase 0's own build step.
**Deliverable (b) M2:** define a three-way classification schema — `wire-this-cycle (a)` / `wire-this-quarter-
needs-plan (b)` / `long-horizon-explicit-re-park (c)` — and ADD it as a new column to the EXISTING
`session-harvest-2026-07-23.md` §B table (enhance, not fork). Apply it retroactively to the current ~20 rows as
the seed data set.
**Deliverable (c) GI-66 cluster-maturity read (Opus+Brain consensus 2026-07-23; folded here per anti-fragmentation, GI-66 spirit):**
M2's SAME three-way classification also reads at CLUSTER scale — a topic-cluster is `plan-ready` when its core
mechanism has genuine Opus+Brain consensus AND every remaining open item independently classifies (b)/(c)
peripheral, with NONE still (a) core-blocking. Wire = ONE pointer row added to VOC-00002:
`Cluster Maturity | forming→converging→plan-ready→shipping | GI-66 | topic-clusters` — mirroring the EXISTING
Planning-Status pointer pattern (a pointer to GI-66 as home, NOT a fork of DIOS/VOC-00003, which is epistemic
maturity of KNOWLEDGE, a distinct axis — verified 2026-07-23). The read DEFAULTS to Opus+Brain agreement; escalate
to the Governor only on disagreement (mirrors the GI-67 exception; single-model maturity read risks the RI-0002
blind spot). No new mechanism beyond the pointer row + M2's cluster-scale application.
**Stress test:** run the M1 script against real git-log/learning-registry history → a non-zero, disk-cited number
(not "TBD"); classify all current ENHANCE-INDEX rows → 100% carry exactly one class.
**Pass criteria (numeric):** M1 number is disk-computed with its command+output cited; M2 100% row-coverage (0 rows
unclassified).
**GATE 0→1:** Opus review + Governor sign-off.

### PHASE-INDEX (Phases 1–4, compact — full deliverable/stress-test/pass-criteria detail deferred to each phase's
own build-step spec, produced when that phase is greenlit, per the size-gate carve-out)
| Phase | Mechanism | One-line deliverable | Depends on | Gate |
|---|---|---|---|---|
| **1 — S2 (drain actuator) + M4 (exemption, in-text)** | ENHANCES ARCH-00406 Phase 1 (RIPL-v2 weekly-batch) | Each cycle, drain N=M1's measured-capacity oldest class-(a) items: wire-or-explicitly-repark + log a value test. **M4 clause:** ARCH-00417 itself is EXEMPT from S2's pressure while being built — exemption keyed to `CISEM-ARCH-00417` exactly, EXPIRES the moment its own Planning Status reaches COMPLETE (Core Seed D). | Phase 0 (N); ARCH-00406 Phase 1's own Governor greenlight (cross-dependency, disclosed below) | 1→2 |
| **2 — S1 (freshness pressure)** | BUILDS the declared-not-wired `dna/checks/freshness-check.sh` (VOC-00002 spec), wires into `plan-audit.sh` WARN | WARN every cycle a class-(a)/(b) item is STALE; BLOCK only if the WARN survived one FULL drain cycle un-addressed (drain-cycle-gated, not age-gated alone — Core Seed C); class-(c) items EXEMPT by construction | Phase 0 (class tags); Phase 1 (drain-cycle definition) | 2→3 |
| **3 — S3 (extend DOD/I22) + S4 (Wiring-State pass)** | EXTENDS `[DOD]`/I22 in `plan-audit.sh`: a "WIRED" claim must cite a running mechanism REF + an observable value assertion (test/metric-delta/log), not presence alone. S4: ONE-TIME classification-first pass applying the EXISTING Wiring-State axis (DECLARED→CONNECTED→ACCESSIBLE→LIVE; home = ARCH-00011 §4, origin IBD-0003) to every governance mechanism named in the ENHANCE-INDEX — produces a classification list BEFORE any conversion; default = inject-toward-enforcement only where blast-safe, class-(a) items first | Phase 0 (M2 classes feed S4's ordering) | 3→4 |
| **4 (FINAL) — M3 (self-test, escapes recursion)** | Hand-executed FIRST real drain run using Phase 1's rule (N = Phase 0's number) against the LIVE ENHANCE-INDEX; the FIRST item processed is deliberately **THIS PLAN'S OWN CONSENSUS ITEM** (the ARCH-00417 row, once indexed) — proves the loop closes on itself. Evidence: commit + quality-ledger run entry + before/after state, disk-verifiable. | Phases 0–3 built + ratified | 4→LIVE |

## Tags + Statuses on every node this plan creates (ARCH-00401 Enh.2)
See the alignment table below. Two genuinely NEW artifacts: `harvest-capacity-model.sh` (Phase 0) and
`freshness-check.sh` (Phase 2) — both `NOT-YET-BUILT` honestly, not silently assumed present. All other touched
files are ENHANCEMENTS to already-tagged/already-statused existing files (no new tag/status pair needed beyond
what they already carry).

## Per-File Alignment Table (ARCH-00401 Enh.3)
| File | ID / Number | Schema Placement | Tag | Status |
|---|---|---|---|---|
| `dna/planning/CISEM-ARCH-00417-harvest-loop-completion-controller.md` (this file) | CISEM-ARCH-00417 (naming-registry.yaml ARCH next_seq 417→418, Sonnet-allocated via the ONE gate) | T-SYS, planning-governance layer | harvest-loop, completion-controller (see header) | PROVISIONAL-ACTIVE / AWAITING-BUILDER-REVIEW |
| `dna/checks/harvest-capacity-model.sh` (Phase 0 — NOT created by this drafting task) | no ID — executable script, governed by ARCH-00320 §6 pattern | T-SYS, enforcement/CAL layer | capacity-model, measurement, mandatory (planned) | NOT-YET-BUILT |
| `dna/checks/freshness-check.sh` (Phase 2 — NOT created by this drafting task) | no ID — executable script, governed by ARCH-00320 §6 pattern | T-SYS, enforcement/CAL layer | freshness, gate, mandatory (planned, already declared in VOC-00002) | NOT-YET-BUILT |
| `dna/checks/plan-audit.sh` (Phase 2/3 target — NOT edited here) | no ID — existing, governed by ARCH-00320 §6 | T-SYS, enforcement/CAL layer | gate, audit, mandatory (existing, unchanged by this drafting task) | present, unchanged |
| `dna/learning-registry/session-harvest-2026-07-23.md` (Phase 0/3 target — NOT edited here) | no ID — existing learning-registry artifact | T-SYS, learning-loop layer | session-harvest, enhance-index (existing, unchanged by this drafting task) | LIVE, unchanged |
| `dna/planning/CISEM-ARCH-00406-completion-propagation-layer.md` (Phase 1 cross-dependency — NOT edited here) | CISEM-ARCH-00406 (existing) | T-SYS, planning-governance layer | planning-domain, completion, propagation (existing, unchanged) | PROVISIONAL-ACTIVE, unchanged |
| `dna/naming-registry.yaml` (already modified — ARCH next_seq 417→418, comment pre-registers this title) | REG type, self-exempt | T-SYS, naming-allocation layer | naming, numbering, mandatory | present, unchanged |

## What DOES change (upon ratification — implementation is a LATER step; nothing here executes now)
- New: `dna/checks/harvest-capacity-model.sh` (Phase 0). New: `dna/checks/freshness-check.sh` (Phase 2).
- `dna/checks/plan-audit.sh` — new `[FRESHNESS]` WARN/BLOCK check (Phase 2); extended `[DOD]`/I22 logic (Phase 3).
- `dna/learning-registry/session-harvest-2026-07-23.md` — new class (a/b/c) column (Phase 0) + Wiring-State column
  (Phase 3), applied to existing rows.
- `dna/vocabulary/CISEM-VOC-00002-status-library.md` — ONE new Cluster-Maturity pointer row (Phase 0, home GI-66;
  pointer pattern, not a DIOS/VOC-00003 fork) per the Opus+Brain maturity consensus 2026-07-23.
- `dna/planning/CISEM-ARCH-00406-completion-propagation-layer.md` Phase 1 — ENHANCED with the drain rule + M4
  exemption clause (Phase 1 of this plan; that file's own Governor greenlight is a separate, cross-referenced
  event, not granted by this plan).
- `dna/naming-registry.yaml` — ARCH next_seq 417→418 (this drafting task, the ONE gate).

## What does NOT change
- No ratified invariant/axiom/decree is altered. ARCH-00406's own header/phase gates are untouched by this plan —
  this plan only specifies WHAT S2 does once ARCH-00406 Phase 1 is itself greenlit; it does not greenlight it.
- S5 (a separate production-throttle mechanism) is NOT built — dropped by consensus, folded into S1/S2/M1
  (Core Seed A).
- No new escalation vocabulary — S1 reuses WARN/BLOCK; no new tier invented.
- No new Wiring-State axis — S4 applies the EXISTING one (ARCH-00011 §4), does not redefine it.

## Definition-of-Done reference (ARCH-00401 Enh.5)
Per `dna/checks/definition-of-done.md` (cited, not re-derived): each phase is DONE only when (1) the deliverable
exists; (2) a running mechanism enforces it OR carries an honest `NOT-YET-WIRED:<reason>` tag; (3) propagated to
all stated homes; (4) CAL/hook surface updated if it is an enforcement mechanism; (5) any found-wrong→improved
event is RIPL-extracted; (6) committed + pushed; (7) independently verified (I22), not asserted. Phase 3's own S3
extension IS this exact requirement made mechanical for every future "WIRED" claim on a governance item — this
plan dogfoods DoD item 7 onto itself.

## Propagation Declaration (ARCH-00401 Enh.6)
(1) M1's capacity number, once computed, becomes the SINGLE reusable `N` referenced by S1's BLOCK trigger and S2's
drain size — by-reference, never re-typed in two places. (2) M2's classification schema is defined ONCE (this
plan, Phase 0) and referenced by S1 (exemption), S2 (drain ordering), and S4 (default posture) — not redefined at
each site. (3) The Wiring-State axis stays homed at `CISEM-ARCH-00011 §4`; S4 references it, never forks a
parallel enum (I10). (4) `dna/ssot-registry.yaml`'s live `[PROPAGATE]` check (ARCH-00406 Phase 0, LIVE) already
fires on any future edit to this plan's registered SSOT-touching files, so propagation is mechanically reminded,
not just declared here.

## Dependencies (blocks-on / unblocks-for)
- **Blocks-on:** `CISEM-ARCH-00406` Phase 1 (RIPL-v2 weekly-batch — the drain's home; per its own header, "Phase 1
  NOT yet greenlit (awaits explicit Governor go)" — Phase 1 of THIS plan cannot be built until that greenlight
  lands). `CISEM-VOC-00002` Freshness axis (the freshness-check.sh spec this plan's Phase 2 wires — spec is stable
  and declared, so this is a light dependency, not a blocker on new design work).
- **Unblocks-for:** draining the ENTIRE `session-harvest-2026-07-23.md` §B ENHANCE-INDEX (~20 rows) once live, plus
  every FUTURE session-harvest via the same M1/M2/S1/S2 mechanism (this plan is infrastructure for the harvest
  loop generally, not a one-time drain of the current backlog only).

## Ratification Path
Stage 0 (iterative Haiku→Sonnet→Opus draft-review loop, per ARCH-00190 §3 as it exists today) — **NOT yet run**;
this is the v0.1 Sonnet draft awaiting Stage 0 → Independent Verifier (`cisem-haiku`, protocol-lens, cold) →
Stage 1 (`cisem-opus-pe`, content-lens, soundness verdict) → Stage 1.5 (fable — not invoked) → Stage 2 (Governor
decree). Each PHASE additionally carries its own Gate (0→1→2→3→4→LIVE) — a later phase's implementation cannot
start before the earlier phase's Gate clears, per the ARCH-00406 phased-plan precedent (reused, A8).

## Opus Stage-1 Soundness Verdict + Mandatory Dual Review (ARCH-00190 §3 Stage 1; GI-68; [RATIFY-GATE])
**Verdict: SOUND DESIGN — PHASE-0 SPEC REVISION REQUIRED before build-greenlight (NOT ratification-ready as v0.2).**
Sequence: (1) Opus solo Stage-1 = SOUND (mirrors ARCH-00190; honors Seeds A–G verbatim +APPLIES_TO; Existing-First
rigorous; phasing prerequisite-correct). (2) MANDATORY dual review (GI-68) then ran — cisem-haiku (protocol/evidence):
CLEAN, all references verified resolve; cisem-sonnet (design/implementability): found REAL gaps the solo pass missed.
**Opus value-assessment of the reviews (GI-68 requires this):** Haiku = valuable confirmation. Sonnet = HIGH value —
its findings are accepted as real, not noise:
- **B1 (accept):** M1 is not measurable as specified — learning-registry statuses are free-text, no WIRED/CLOSED enum
  to detect a transition into. REVISION: Phase 0 must add a status-enum normalization sub-deliverable OR an explicit,
  named proxy + a representativeness check; a bare "disk-cited number" is insufficient.
- **B2 (accept):** M1 pass-criterion proves provenance, not correctness — must apply S3's own value-not-presence
  standard to M1 itself.
- **I1/I3/I4/I5 (accept):** state an M1 re-measurement cadence (Seed B spirit); add a deliverable to index ARCH-00417's
  own row into the ENHANCE-INDEX (M3 needs it); give the maturity fold-in (c) its own acceptance test + a concrete
  aggregation rule (plan-ready = 0 of the cluster's items class-(a)) to resolve the derived-vs-manual ambiguity.
- **B3 → GOVERNOR DECISION (decision-under-uncertainty, GI-67(2)):** ARCH-00406 Phase-1 is NAMED-but-UNBUILT, so this
  plan's Phase-1 would be its FIRST build — an A8 "which plan is spec-of-record for the drain" question, not mere
  double-gating; S2 stalls with no default. **Opus recommendation: SUBSUME** — make ARCH-00417 the spec-of-record for
  the drain, so ratifying ARCH-00417 greenlights the drain scope directly (removes the stall + the double-gate).
**Next:** on the Governor's B3 call, a Sonnet revision pass addresses B1/B2/I1/I3/I4/I5 with Opus design guidance →
re-verify (dual review) → then Stage-2 ratification. The dual-review mandate worked: it caught gaps before ratification.

## Self-Compliance (against ARCH-00230 checklist + ARCH-00190 §2, ARCH-00401-amended)
✓ Header ✓ Tier-Routing Declaration (incl. the disclosed 3-way author/verifier/judge split) ✓ Anti-Scatter
Ordering ✓ The Rule (Phase 0 full + Phase-Index for 1–4, size-gate-disclosed) ✓ Tags+Statuses on every created
node ✓ Per-File Alignment Table ✓ What DOES / does NOT change ✓ DoD reference ✓ Propagation Declaration
✓ Dependencies ✓ Ratification Path ✓ Independent Verifier named (cisem-haiku) ✓ Existing-First stated (8-source
search, disclosed, incl. one correction to the dispatch instruction) ✓ Path Rejection Declaration ✓ CAL reference
✓ Change log.

## Path Rejection Declaration (CLAUDE.md §2.8)
- ❌ Rejected: S5 (a separate production-throttle mechanism) — folded into S1/S2/M1's interaction by consensus
  (Core Seed A); a 5th mechanism would be redundant and the highest-blast option.
- ❌ Rejected: BLOCK-on-age-alone for S1 — WARN-first, BLOCK only after one ignored drain cycle (Core Seed C);
  age-alone manufactures false urgency and forces bad re-parks of legitimately long-horizon items.
- ❌ Rejected: forking new mechanisms for S1/S3/S4 — each enhances an existing declared/named home
  (freshness-check.sh spec, DOD/I22, the Wiring-State axis) rather than inventing a parallel one (Core Seed F/A8).
- ❌ Rejected: an open-ended M4 build-exemption — time-boxed to `CISEM-ARCH-00417` exactly, expires at COMPLETE
  (Core Seed D); an unbounded exemption becomes the new frictionless-forever it exists to prevent.
- ❌ Rejected: simulating/faking Phase 4's first drain run in THIS drafting task — deliberately deferred to a REAL
  post-ratification execution (Core Seed G + I22; no unverified "done").
- ❌ Rejected: implementing any mechanism in this same task — A4/I25 requires ratification before implementation;
  this artifact is the PLAN (the ONE exception is the naming-gate self-registration, the allocation mechanism
  itself, not a governed build).
- ❌ Rejected: citing VOC-00002 as the Wiring-State axis's authoritative home per the literal dispatch wording —
  corrected to `CISEM-ARCH-00011 §4` per `ssot-registry.yaml`'s own `ssot:`/`mirrors:` fields (I10; disclosed
  correction, not a silent deviation).

## CAL reference (CISEM-ARCH-00390)
Pre-commit `[ZF]` + `[DOD]` + `[ROUTING]`/`[ALIGN]`/`[TAG-STATUS]` + `[PROPAGATE]` (ARCH-00406 Phase 0, LIVE) all
run on this plan file at commit time. Once implemented, Phase 2's `[FRESHNESS]` and Phase 3's extended `[DOD]`/I22
join the SAME `plan-audit.sh` invocation — no new hook, no new trigger point.

## Change log
- v0.1 — 2026-07-23 (Sonnet, STRUCTURING tier, dispatched by Opus per the Opus+Sonnet+Brain consensus design,
  Governor-greenlit as a research/design phase 2026-07-23): initial phased-plan skeleton. Phase 0 (M1+M2) fully
  specified; Phases 1–4 (S2+M4, S1, S3+S4, M3) given as a compact Phase-Index per the dispatch instruction's own
  size-gate carve-out. All 7 Core Seeds (A–G) embedded verbatim. One disclosed correction to the dispatch wording
  (Wiring-State home = ARCH-00011 §4, not VOC-00002). NOT committed by Sonnet (Opus commits after review, §1.7
  one-committer discipline). Ambiguities flagged in the dispatch return, not guessed silently.
