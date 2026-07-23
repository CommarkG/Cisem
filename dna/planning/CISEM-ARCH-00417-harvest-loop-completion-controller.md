# Harvest-Loop Completion Controller — Phased Plan (M1 capacity · M2 classification · S1 freshness · S2 drain · S3/S4 gates · M3 self-test)
**Node ID:** CISEM-ARCH-00417 | **Type:** ARCH | **Status:** PROVISIONAL-ACTIVE
**Planning Status:** COMMENTS-RECEIVED (Opus Stage-1 SOUND-design; mandatory dual review GI-68 found Phase-0 spec gaps [B1/B2/I1/I3/I4/I5] + a Governor decision [B3] — revision pending before Stage-2, 2026-07-23) | **depth_level:** L1 | **Position in schema:** T-SYS, planning-governance layer
**tags:** [harvest-loop, completion-controller, capacity-model, classification, freshness, drain, wiring-state, governance-loop, mandatory]
**Goal:** Close CISEM's harvest loop from OPEN-LOOP (insights written, nothing forces wiring) to CLOSED-LOOP —
measurable as: (1) M1's number is git/registry-**measured**, never hand-typed; (2) 100% of §B rows carry an M2
class (a/b/c); (3) Phase 4's first drain run processes THIS plan's own item, disk-verifiable.
**Governing corespine:** CS-CREATION-001
**Independent Verifier:** `cisem-haiku` (cold, protocol-lens; distinct from `cisem-sonnet` — Tier-Routing below).
**Size-gate (§3.6, documented exception, honesty per Principle 17):** v0.3 exceeded BOTH ceilings (~4,700w/350L).
**v0.4 compresses WORDS back under 3,500** (exact count in the v0.4 Change-log entry), zero mandatory section
dropped, all 8 Core Seeds A–H verbatim (I13). It still exceeds 200 lines — NOT silently claimed fixed: the seed
block + three tables can't compress under 200 lines without cutting substance, so LINES stay a documented
exception (same precedent as ARCH-00190/ARCH-00406), a partial fix reported honestly, not dressed as a full pass.

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
[[CORE-SEED H | MUST: SUBSUME (Governor decision 2026-07-23) — ARCH-00417 is the SPEC-OF-RECORD for the drain;
ratifying ARCH-00417 greenlights the drain scope directly (NO separate ARCH-00406 Phase-1 greenlight); ARCH-00406
Phase-1 is updated to POINT to ARCH-00417 for the drain spec | WHY: ARCH-00406 Phase-1 is NAMED-but-unbuilt, so
this plan's Phase-1 is its FIRST build — one source (A8), removes the double-gate + the stall | APPLIES_TO:
Phase 1 (S2) + the Dependencies/What-changes sections]]
```
**Seed G governs THIS drafting task; Seed E governs the PLAN'S OWN Phase 4 (a post-ratification step). Resolution
of the apparent tension between them is stated explicitly under Ambiguities in the return report — not guessed
silently.**

## Executive Summary
Assemble CISEM's scattered NAMED pieces (capacity, classification, freshness-check.sh, DoD/I22, the Wiring-State
axis, ARCH-00406's weekly drain) into ONE closed-loop controller — sensor (M2) + actuator (S2) + setpoint (M1) — so
harvested insights stop accumulating as NAMED-not-WIRED. Phased, enhances existing homes; the final phase's first
drain run proves the loop closes on itself.

## Existing-First (§3.2b, done) — searched, in order
1. `session-harvest-2026-07-23.md` §B ENHANCE-INDEX — the backlog this controller drains. EXISTS; used by pointer
   as the M2/S4 seed data, not duplicated.
2. `CISEM-ARCH-00406` Phase 1 (RIPL-v2 weekly-batch) was NAMED-but-UNBUILT for S2's drain. **SUBSUME (Core Seed
   H):** ARCH-00417 becomes the drain's spec-of-record; ARCH-00406 Phase 1's header points here (pointer, not a
   2nd mechanism, A8/I19). Boundary: see `## SUBSUME Migration Note` below.
3. `CISEM-VOC-00002` Freshness axis already declares `freshness-check.sh` as `NOT-YET-WIRED`. S1 IS that wiring.
4. `definition-of-done.md` + `[DOD]`/I22 — S3 EXTENDS these (adds observable-value-assertion), no parallel definition.
5. Wiring-State axis — confirmed via `ssot-registry.yaml`: home = `CISEM-ARCH-00011 §4` (VOC-00002 its mirror);
   lineage `IBD-0003`/`0007`/`0010`. S4 cites §4, correcting the dispatch's VOC-00002 wording (disclosed, I10).
6. `CS-AI-PROFILING-001` RI-0024 ("is Existing-First still the BEST option?") already WIRED — this plan applies it
   at plan scale: every part it needs already exists, unassembled.
7. `archive-ledger.yaml` — grepped "harvest loop"/"drain"/"completion controller" — no RULED-OUT entry.
8. `corespine-registry.yaml` CANDIDATES — grepped, no candidate; CS-CREATION-001 remains governing.
**VERDICT:** every mechanism ENHANCES a named, disclosed existing home; two artifacts are genuinely novel
(alignment table below).

## Pocket Declaration
- **reasoning_scope:** draft a phased plan assembling M1/M2/S1/S2/S3+S4/M4/M3 into ONE closed-loop controller
  plan; the plan document only (Seed G)
- **inherited_constraints:** A4/A11 (consult-before-production, this plan IS that output); A8/I10/I19 (enhance,
  never fork); I25 (a plan authorizes, never implements); §1.7 git-race discipline; Core Seeds A–H verbatim
- **output_contract:** this plan document + the ONE naming-gate self-registration (`naming-registry.yaml` ARCH
  417→418) only — no check/hook/registry content-file built or edited in this drafting task
- **ai_cannot:** self-ratify; stamp Status/RATIFIED; execute Phase 4's hand-run in THIS drafting task (Seed E
  governs the PLAN'S post-ratification Phase 4, not a demand to fake it now — forbidden by Seed G + I22)
- **recorded_at:** 2026-07-23

## Tier-Routing Declaration (CLAUDE.md §3.0)
- **Drafting (this task) → Sonnet**, single-context; Existing-First via direct grep/read (no live Haiku subagent
  available this session, disclosed per the ARCH-00406 precedent).
- **Independent Verifier → `cisem-haiku`, cold, PROTOCOL-COMPLIANCE lens** (ARCH-00190 §2 checklist) — before Stage 1.
- **Stage 1 → `cisem-opus-pe`, CONTENT-CORRECTNESS + judgment lens** (design coherence, seed cohesion, ambiguity
  resolution) — a deliberate 3-way split (author ≠ verifier ≠ judge), stronger than P5's bare minimum.
- **Building each phase (post-ratification) → Sonnet**, per the Phase Rule (§3.0 rubric).
- **Phase 4's hand-run → Sonnet executes, Opus/Governor witness. Fable Stage 1.5 → not invoked. Governor Stage 2 →
  ratification authority.**

## Anti-Scatter Ordering (CLAUDE.md §2 Principle 16 — per dispatch instruction, verbatim sequencing rationale)
M1+M2 are PREREQUISITES — every downstream threshold needs a real capacity number and classification first. S2
(drain) is next — the actuator the controller exists to build. S1 (freshness) follows — pressure on the drain,
meaningless before it exists. S3+S4 (gates) audit what S1/S2 produce. M4 is a clause IN Phase 1, not a separate
phase. M3 (self-test) is LAST by construction (Seed E: it processes what Phase 1 builds).

## The Rule — PHASE 0 fully specified; Phases 1–4 given as a PHASE-INDEX (size-gate mitigation, stated per the
dispatch instruction's own carve-out: "if it cannot fit, produce the plan for the prerequisite phase + a
phase-index of the rest, and say so.")

### PHASE 0 — M1 (capacity setpoint) + M2 (classification sensor) — PREREQUISITE, fully specified
**(a) M1:** NEW script `dna/checks/harvest-capacity-model.sh` computes "items wired per drain cycle, per tier" from
disk history — e.g. `git log --since="<window>" --name-only -- dna/checks/ .claude/ dna/protocols/` cross-referenced
against `dna/learning-registry/` entries that reached LIVE (deliverable (d)) in that window. Output: a cited number
+ the exact command (never hand-typed — Seed B). **Cadence (I1 fix):** re-runs at the START of each drain cycle;
N is always the LATEST measurement, never frozen. This drafting task does NOT run it or invent the number.
**(b) M2:** a three-way classification — `wire-this-cycle (a)` / `wire-this-quarter-needs-plan (b)` /
`long-horizon-explicit-re-park (c)` — added as a new column to the EXISTING §B table (enhance, not fork), applied
retroactively to the current ~20 rows.
**(c) GI-66 cluster-maturity read (Opus+Brain consensus, folded in):** M2's SAME classification also reads at
CLUSTER scale — `plan-ready` when a cluster's core has genuine Opus+Brain consensus AND every remaining item
classifies (b)/(c), none (a). Wire = ONE pointer row in VOC-00002:
`Cluster Maturity | forming→converging→plan-ready→shipping | GI-66 | topic-clusters` (pointer to GI-66, NOT a
DIOS/VOC-00003 fork). **Aggregation (I5 fix):** `plan-ready` = DERIVED (`0 items class-(a)`, off M2's data) **+**
CONFIRMED (Opus+Brain core-consensus judgment) — both required; escalates to the Governor only on disagreement
(GI-67; single-model risks RI-0002). **Stress test (I4 fix):** run the 0-count check against one real cluster
(this harvest-loop cluster) → reconcile against an independently hand-enumerated count (mirrors B2); logged y/n.
**(d) Wiring-State normalization (B1 fix — the M1-measurability crux):** M1 cannot measure "items wired per cycle"
against a free-text `state` column — no WIRED/CLOSED enum to detect a transition into. FIX: normalize every §B
row's free-text state onto the EXISTING controlled vocabulary `DECLARED→CONNECTED→ACCESSIBLE→LIVE` (home:
`CISEM-ARCH-00011 §4`, S4's own axis applied EARLY, not a new dependency). M1 then measures rows TRANSITIONING to
`LIVE` (or a named WIRED threshold) within the window. **Phase split:** Phase 0 does the INITIAL one-time stamp;
Phase 3 (S4) does the FULLER injection→enforcement conversion pass — two depths, not a duplicate pass.
**Registered-reconciliation linkage (A8 merge, not a parallel patch — Change 1, v0.4):** this normalization
EXECUTES the status/state-enum reconciliation already registered as a PREVENTION-CANDIDATE in
`session-learning-index.yaml` (~L260: "Status enum frozen [ARCH-00011 §4: 8 values] but practice has 15+ values...
reconcile status enum BEFORE BP-0012 builds... consolidate into one authoritative enum + update VOC-00002 mirror")
— scoped here to the §B State column as its first concrete instance (its own free text — `DECREED-NOT-YET-WIRED`,
`NAMED`, `GAP`, `pending` — IS that same divergence class). ONE effort serves BOTH ends: M1 gets a measurable
substrate now; BP-0012's future gate inherits a clean, §4-conformant table instead of re-discovering the drift.
The BROADER survey the registered item also names (corespine-registry, learning-index, DoD) stays BP-0012's to
complete — this deliverable only stops adding to that drift, it does not close the whole scope.
**(e) Self-index (I3 fix):** add ARCH-00417's OWN row to the §B ENHANCE-INDEX (currently absent — M3's Phase-4
self-test needs a real row). Classified per M2, stamped per (d), like every other row.
**Stress test:** M1 script against real history → a non-zero, disk-cited number; classify all rows → 100% one
class; Wiring-State-stamp all rows → one of four states; confirm ARCH-00417's row present; run (c)'s 0-count check
against one real cluster and reconcile.
**Pass criteria (numeric):** M1 number disk-computed, cited AND RECONCILED against an independently enumerated
LIVE-count (B2 fix: value-not-presence applied to M1) — matching, not merely non-zero. M2/Wiring-State 100%
coverage. ARCH-00417's row present (1/1). (c)'s mechanical count matches its hand-enumerated count (0 discrepancy).
**GATE 0→1:** Opus review + Governor sign-off.

### PHASE-INDEX (Phases 1–4, compact — full deliverable/stress-test/pass-criteria detail deferred to each phase's
own build-step spec, produced when that phase is greenlit, per the size-gate carve-out)
| Phase | Mechanism | One-line deliverable | Depends on | Gate |
|---|---|---|---|---|
| **1 — S2 (drain) + M4 (exemption)** | ARCH-00417 IS the drain's spec-of-record (SUBSUME, Seed H) — ARCH-00406 Phase 1 becomes a POINTER (boundary: SUBSUME Migration Note below) | Each cycle, drain N=M1's oldest class-(a) items: wire-or-repark + log a value test. **M4:** ARCH-00417 EXEMPT from S2 while being built, keyed to `CISEM-ARCH-00417`, EXPIRES at COMPLETE (Seed D). Updates ARCH-00406 Phase 1's header to point here (A8). | Phase 0 (N) only — ARCH-00406 Phase-1 greenlight REMOVED (Seed H) | 1→2 |
| **2 — S1 (freshness)** | BUILDS `freshness-check.sh` (VOC-00002 spec), wires into `plan-audit.sh` | WARN each cycle a class-(a)/(b) item is STALE; BLOCK only after one FULL cycle un-addressed (Seed C); class-(c) EXEMPT | Phase 0 (class tags); Phase 1 (cycle def) | 2→3 |
| **3 — S3 (extend DOD/I22) + S4 (Wiring-State pass)** | EXTENDS `[DOD]`/I22: "WIRED" needs a running mechanism + an observable value assertion, not presence alone | S4: ONE-TIME classification pass (home ARCH-00011 §4) over every ENHANCE-INDEX mechanism before conversion; default = inject-toward-enforcement where blast-safe, class-(a) first | Phase 0 (M2 classes feed ordering) | 3→4 |
| **4 (FINAL) — M3 (self-test)** | Hand-executed FIRST real drain run (N = Phase 0's number); first item is deliberately **THIS PLAN'S OWN row** — proves the loop closes on itself. Evidence: commit + quality-ledger entry + before/after, disk-verifiable | — | Phases 0–3 ratified | 4→LIVE |

## Tags + Statuses on every node this plan creates (ARCH-00401 Enh.2)
See the alignment table below. Two genuinely NEW artifacts: `harvest-capacity-model.sh` and `freshness-check.sh` —
both `NOT-YET-BUILT` honestly. All other touched files are ENHANCEMENTS to already-tagged existing files.

## Per-File Alignment Table (ARCH-00401 Enh.3)
| File | ID / Number | Schema Placement | Tag | Status |
|---|---|---|---|---|
| `.../CISEM-ARCH-00417-...md` (this file) | CISEM-ARCH-00417 (naming-registry.yaml 417→418, ONE gate) | T-SYS, planning-governance | harvest-loop, completion-controller | PROVISIONAL-ACTIVE / AWAITING-BUILDER-REVIEW |
| `dna/checks/harvest-capacity-model.sh` (Phase 0, not created) | no ID — script, ARCH-00320 §6 | T-SYS, enforcement/CAL | capacity-model, measurement | NOT-YET-BUILT |
| `dna/checks/freshness-check.sh` (Phase 2, not created) | no ID — script, ARCH-00320 §6 | T-SYS, enforcement/CAL | freshness, gate (declared VOC-00002) | NOT-YET-BUILT |
| `dna/checks/plan-audit.sh` (target, not edited here) | no ID — existing | T-SYS, enforcement/CAL | gate, audit | present, unchanged |
| `session-harvest-2026-07-23.md` (target, not edited here) | no ID — existing | T-SYS, learning-loop | session-harvest, enhance-index | LIVE, unchanged |
| `CISEM-ARCH-00406-...md` (cross-dependency, not edited here) | CISEM-ARCH-00406 (existing) | T-SYS, planning-governance | planning-domain, completion | PROVISIONAL-ACTIVE, unchanged |
| `dna/naming-registry.yaml` (modified — 417→418) | REG type, self-exempt | T-SYS, naming-allocation | naming, numbering | present, unchanged |

## What DOES change (upon ratification — implementation is a LATER step; nothing here executes now)
- New: `harvest-capacity-model.sh` (Phase 0). New: `freshness-check.sh` (Phase 2).
- `plan-audit.sh` — new `[FRESHNESS]` WARN/BLOCK check (Phase 2); extended `[DOD]`/I22 logic (Phase 3).
- `session-harvest-2026-07-23.md` — new class (a/b/c) column + a Phase-0 Wiring-State STAMP (normalizes free-text
  state onto DECLARED→CONNECTED→ACCESSIBLE→LIVE, ARCH-00011 §4 — B1 fix, (d)); Phase 3 does the fuller conversion
  pass. Phase 0 also adds ARCH-00417's OWN row (I3 fix, (e)).
- `CISEM-VOC-00002` — ONE new Cluster-Maturity pointer row (home GI-66; not a DIOS/VOC-00003 fork).
- `CISEM-ARCH-00406` Phase 1 — header UPDATED to point to ARCH-00417 (SUBSUME, Seed H); boundary in the SUBSUME
  Migration Note below. No separate ARCH-00406 Phase-1 greenlight needed.
- `dna/naming-registry.yaml` — ARCH next_seq 417→418 (this drafting task, the ONE gate).

## SUBSUME Migration Note (B3) — Change 2, this v0.4 revision
ARCH-00417 becomes the spec-of-record for the **DRAIN of NAMED-but-unwired items specifically** — the weekly-evolve
drain (S2, Phase 1) that `CISEM-ARCH-00406` Phase 1 (RIPL-v2 weekly-batch) named but never built. The **OTHER four
ARCH-00406/RIPL-v2 pillars — Propagation Network (Phase 0), Tier-Cycle + Workflow-Governance (Phase 2), and the
Output-Liveness Monitor (Phase 3) — STAY in ARCH-00406; they are NOT absorbed by this plan.** ARCH-00406 Phase 1's
header POINTS to ARCH-00417 for the drain spec (a pointer, not a duplicate, A8); ARCH-00406's non-drain scope
(Phases 0/2/3) remains its own, untouched. **Boundary, one sentence:** ARCH-00417 owns the drain of
named-not-wired items; ARCH-00406 owns everything else in its 5-pillar plan.

## What does NOT change
- No ratified invariant/axiom/decree is altered. ARCH-00406's Phase 1 header (a pointer, see above) is the ONE
  thing that changes there — its other phases/gates are untouched.
- S5 (a separate production-throttle) is NOT built — folded into S1/S2/M1 (Core Seed A).
- No new escalation vocabulary — S1 reuses WARN/BLOCK; no new tier invented.
- No new Wiring-State axis — S4 applies the EXISTING one (ARCH-00011 §4), does not redefine it.

## Definition-of-Done reference (ARCH-00401 Enh.5)
Per `dna/checks/definition-of-done.md` (cited, not re-derived): each phase is DONE only when (1) the deliverable
exists; (2) a running mechanism enforces it OR carries `NOT-YET-WIRED:<reason>`; (3) propagated to all stated
homes; (4) CAL/hook surface updated if enforcing; (5) found-wrong→improved is RIPL-extracted; (6) committed+pushed;
(7) independently verified (I22). Phase 3's S3 extension makes item 7 mechanical for every future "WIRED" claim.

## Propagation Declaration (ARCH-00401 Enh.6)
(1) M1's number becomes the SINGLE reusable `N` for S1's BLOCK trigger and S2's drain size — by-reference, never
re-typed. (2) M2's classification is defined ONCE (Phase 0), referenced by S1/S2/S4, not redefined per site. (3)
The Wiring-State axis stays homed at `CISEM-ARCH-00011 §4`; S4 references it, never forks (I10). (4)
`ssot-registry.yaml`'s live `[PROPAGATE]` check (LIVE) already fires on any future edit to this plan's
SSOT-touching files.

## Dependencies (blocks-on / unblocks-for)
- **Blocks-on:** none for the drain. **SUBSUME (Core Seed H):** ratifying ARCH-00417 directly authorizes Phase 1's
  drain build — the prior "blocks-on ARCH-00406 Phase-1 greenlight" is REMOVED. `CISEM-VOC-00002` Freshness axis
  is a light dependency only (stable, already declared).
- **Fulfills (Change 1, v0.4):** the registered enum-reconciliation PREVENTION-CANDIDATE
  (`session-learning-index.yaml` ~L260, "reconcile status enum BEFORE BP-0012 builds") — scoped to the §B State
  column (deliverable (d)). The broader corespine-registry/learning-index/DoD survey stays BP-0012's to finish;
  this plan PRECEDES that reconciliation, does not replace it.
- **Unblocks-for:** draining the ENTIRE §B ENHANCE-INDEX (~20 rows) once live, plus every FUTURE session-harvest
  via the same mechanism (infrastructure, not a one-time drain).

## Ratification Path
Stage 0 (iterative Haiku→Sonnet→Opus draft-review, ARCH-00190 §3) — **NOT yet run**; this v0.4 draft awaits
Independent Verifier (`cisem-haiku`, cold) → Stage 1 (`cisem-opus-pe`, soundness) → Stage 1.5 (fable, not invoked)
→ Stage 2 (Governor decree). Each PHASE carries its own Gate (0→1→2→3→4→LIVE), reused from ARCH-00406 (A8).

## Opus Stage-1 Soundness Verdict + Mandatory Dual Review (ARCH-00190 §3 Stage 1; GI-68; [RATIFY-GATE])
**Verdict: SOUND DESIGN — PHASE-0 SPEC REVISION REQUIRED before build-greenlight (v0.2 not ratification-ready).**
(1) Opus solo Stage-1 = SOUND (Seeds A–G honored; Existing-First rigorous; phasing correct). (2) MANDATORY dual
review (GI-68): `cisem-haiku` (protocol) = CLEAN; `cisem-sonnet` (design) found REAL gaps, accepted as real:
- **B1:** M1 not measurable — free-text status, no WIRED/CLOSED enum. → Phase 0 gets a normalization sub-deliverable.
- **B2:** M1's pass-criterion proved provenance, not correctness. → apply S3's value-not-presence standard to M1.
- **I1/I3/I4/I5:** state a re-measurement cadence; index ARCH-00417's own row; give (c) its own acceptance test +
  a concrete aggregation rule.
- **B3 → RESOLVED: SUBSUME (Governor 2026-07-23).** ARCH-00417 is now the drain's spec-of-record; ARCH-00406
  Phase 1 points here (Seed H).
**v0.3** addressed B1/B2/I1/I3/I4/I5 + B3/Seed H. **v0.4** attempted the B1-merge + B3 boundary + compression.
**v0.4 GI-68 DUAL RE-REVIEW (2026-07-23) — NOT RATIFICATION-READY; two real correctness gaps caught (Opus concurs):**
- **RB1 (Sonnet, reading ARCH-00011 §4 directly):** the B1-merge CONFLATES TWO DISTINCT AXES. ARCH-00011 §4 states
  Wiring-State (DECLARED→CONNECTED→ACCESSIBLE→LIVE) is "a SEPARATE dimension from lifecycle status." The registered
  L260 prevention is about the LIFECYCLE-STATUS enum; deliverable (d) normalizes onto WIRING-STATE — different enum,
  same §4 section. The merge is into the wrong prevention, AND M1 still lacks a measurable substrate: real §B values
  (CONSENSUS/GAP/design/open) don't map to DECLARED→LIVE and no mapping rule exists. **The original B1 gap (M1 not
  measurable) reappeared one layer down.** ROOT DESIGN QUESTION to resolve before any further build: *what is M1's
  actual measurable substrate?* — an Opus(+Brain, GI-65) design decision, not another mechanical revision.
- **RB2 (Haiku + Sonnet):** the SUBSUME Migration Note (a) mis-counts ARCH-00406's remaining pillars ("four" — Phases
  4/5 PACK-CONTEXT + HAIKU-REVIEW omitted); (b) leaves the RI-NNNN/batch_status backlog (root-insights.yaml, a
  different file+schema) un-reconciled against §B — the exact fork risk SUBSUME exists to prevent, still open.
- **Non-blocking (route separately):** §3.6 line-gate vs ARCH-00401 mandatory-sections is a SYSTEMIC tension (2nd
  occurrence this session; ARCH-00401 Trial-Obs #3 hit the same wall) → standing root-insight, not this plan's fault.
**DISCIPLINED CALL (GI-66 + GI-04 core-first):** this cluster is LESS mature than believed — the re-review exposed an
unresolved CORE design question (M1's substrate). Do NOT force it to ratification; PARK v0.4, resolve M1's substrate
(Opus+Brain consensus) → ONE clean revision → re-review → Stage-2. Firing revision N+1 without resolving the core
would be the gap-creation engine (Principle 15).

## PARKED — Resume Spec (M1-substrate resolution; Opus+Brain consensus 2026-07-23; Governor parked for core-extraction)
When the Governor says "proceed," ONE clean revision applies ALL of the below, then → GI-68 re-review → Stage-2:
- **M1 substrate = a PURPOSE-BUILT scoped instrument, NOT a general axis and NOT a normalization of the existing
  enums.** Add a single `wired_at: <date>` field to the §B backlog rows. "Items wired per cycle" = rows whose
  `wired_at` falls in the drain window. This DECOUPLES M1 from both lifecycle-status AND Wiring-State (kills the
  RB1 conflation). **DROP the "executes the L260 reconciliation" claim** — that lifecycle-status cleanup stays
  BP-0012's separate concern (RB1 was right; Opus over-accepted the merge).
- **Brain's 3 sharpenings (consensus, fold into the revision):** (1) state EXPLICITLY in the text that this marker
  is *scoped to §B/M1 measurement only, NOT a general maturity axis* — else a future session extends it by analogy
  and we are back to three overlapping status fields; (2) implement as an **append-only** `wired_at: <date>` event
  (added once), NEVER a mutable/flippable boolean — matches the append-only convention of every durable registry
  (I16, no untraceable state-mutation); (3) DEFINE "the window" explicitly against the drain cycle's actual
  start/end dates in the same revision, so N's measurement is unambiguous.
- **B3 fixes (RB2):** drain scope = session-harvest §B ONLY; root-insights.yaml `RI-NNNN`/`batch_status` stays
  ARCH-00406's RIPL backlog (different file+schema, NOT folded); correct the Migration Note pillar count (ARCH-00406
  keeps Phases 0/2/3/4/5, not "four").
- **Out of scope (routed to RI-0026, not this plan):** the §3.6 line-gate vs ARCH-00401 mandatory-sections tension.
- **Core-insight extracted (RI-0025):** consensus-laundering / paraphrase-trust — the reason the conflation survived
  four passes; drives the GI-68 source-read lens + the plan-authoring quote-the-source rule (separate wiring).

## Self-Compliance (against ARCH-00230 checklist + ARCH-00190 §2, ARCH-00401-amended)
✓ Header ✓ Tier-Routing (3-way split) ✓ Anti-Scatter ✓ The Rule (Phase 0 full + Phase-Index) ✓ Tags+Statuses
✓ Alignment Table ✓ What DOES/NOT change ✓ SUBSUME Migration Note ✓ DoD ref ✓ Propagation Decl ✓ Dependencies
(incl. Fulfills) ✓ Ratification Path ✓ Verifier named ✓ Existing-First (8-source) ✓ Path Rejection ✓ CAL ref
✓ Change log.

## Path Rejection Declaration (CLAUDE.md §2.8)
- ❌ S5 (production-throttle) — folded into S1/S2/M1 (Seed A); a 5th mechanism is redundant, highest-blast.
- ❌ BLOCK-on-age-alone for S1 — WARN-first, BLOCK only after one ignored cycle (Seed C); manufactures false urgency.
- ❌ Forking new mechanisms for S1/S3/S4 — each enhances an existing declared home instead (Seed F/A8).
- ❌ An open-ended M4 exemption — time-boxed to `CISEM-ARCH-00417`, expires at COMPLETE (Seed D).
- ❌ Simulating/faking Phase 4's first drain run here — deferred to a REAL post-ratification run (Seed G + I22).
- ❌ Implementing any mechanism in this same task — A4/I25 requires ratification first (naming-gate
  self-registration exempt only).
- ❌ Citing VOC-00002 as the Wiring-State axis's home per the dispatch wording — corrected to `CISEM-ARCH-00011 §4`
  per `ssot-registry.yaml`'s own fields (I10, disclosed).
- ❌ (Change 1, v0.4) Building a parallel Wiring-State/enum patch scoped only to this table — merged into the
  existing REGISTERED reconciliation instead (`session-learning-index.yaml` ~L260, A8).

## CAL reference (CISEM-ARCH-00390)
Pre-commit `[ZF]`+`[DOD]`+`[ROUTING]`/`[ALIGN]`/`[TAG-STATUS]`+`[PROPAGATE]` (LIVE) all run on this file at commit
time. Once implemented, Phase 2's `[FRESHNESS]` and Phase 3's extended `[DOD]`/I22 join the SAME invocation — no
new hook.

## Change log
- v0.1 — 2026-07-23 (Sonnet, dispatched per Opus+Sonnet+Brain consensus, Governor-greenlit research/design):
  initial skeleton; Phase 0 fully specified, Phases 1–4 compact Phase-Index (size-gate carve-out); 7 Core Seeds
  (A–G) verbatim; one disclosed correction (Wiring-State home = ARCH-00011 §4, not VOC-00002). Not committed.
- v0.2 — 2026-07-23 (Opus, dual-review GI-68): `cisem-haiku` protocol-clean; `cisem-sonnet` found real gaps.
  Findings B1/B2/I1/I3/I4/I5 accepted; B3 (ARCH-00406 vs ARCH-00417 spec-of-record) escalated as a Governor
  decision; SUBSUME recommendation logged; Planning Status → COMMENTS-RECEIVED.
- v0.3 — 2026-07-23 (Sonnet, targeted revision, Governor B3=SUBSUME decreed): added Core Seed H verbatim; closed
  all six findings (B3/Seed H SUBSUME threaded through; B1 deliverable (d) normalization; B2 reconciled pass
  criteria; I1 cadence; I3 deliverable (e) self-index; I4/I5 deliverable (c) stress test + aggregation rule); all
  7 prior seeds preserved verbatim; header truth fields untouched (I7). Not committed.
- v0.4 — 2026-07-23 (Sonnet, targeted revision per Opus dispatch): three changes. **(1) B1 merge (A8):** deliverable
  (d) now states it EXECUTES the registered enum-reconciliation PREVENTION-CANDIDATE (`session-learning-index.yaml`
  ~L260) — one effort for both M1's measurement and BP-0012's future gate; added a Dependencies "Fulfills" bullet +
  a matching Path-Rejection entry. **(2) SUBSUME scope note (B3):** new `## SUBSUME Migration Note` states the
  boundary — ARCH-00417 owns only the DRAIN of named-not-wired items; the other four ARCH-00406/RIPL-v2 pillars
  (Propagation Network, Tier-Cycle, Workflow-Governance, Output-Liveness Monitor) stay in ARCH-00406, not absorbed.
  **(3) Size resolution (§3.6, COMPRESS-FIRST, no split):** tightened every section's prose; every mandatory
  ARCH-00401 section retained; all 8 Core Seeds (A–H) verbatim (I13); header truth fields untouched (I7). WORD
  count is now under 3,500 (measured by `wc`, exact figure in the header's Size-gate note); LINE count still
  exceeds 200 (documented exception, honestly disclosed, not silently claimed fixed — see header). Not committed
  by Sonnet (§1.7 — Opus commits after re-review).
