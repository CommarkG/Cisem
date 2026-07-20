# CISEM Corespine Architecture — Adopt the Purified CSP Blueprint, Phased Kernel-First
**Node ID:** CISEM-ARCH-00404 | **Type:** ARCH | **Status:** PROVISIONAL-ACTIVE
**Planning Status:** COMPLETE (Governor RATIFIED 2026-07-20, "all approved" + re-confirmed "i ratify 00404") — DEC-0006 = **Path B** (within-tier tie-breaker, total-order stays ruled out). Phases 1/2/4 implementation authorized. **PHASE 3 (PRECEDENCE) is PARKED-FOR-DEEP-UNDERSTANDING (Governor decree 2026-07-20)** — must not float as a hidden priority; verify-before-activate (IBD-0026 / GI-48). NOTE: the canonical corespine SET (Phase 1) is STILL a Governor founding choice — Phase-1 implementation will PROPOSE a set for the Governor's confirmation (surfaced, not presumed, per Core Seed 3). | **depth_level:** L1 | **Position in schema:** T-SYS, corespine-architecture layer
**tags:** [corespine, architecture, node-taxonomy, precedence, core-vs-instance, corespiral, kernel, phased]
**Goal:** Adopt the PURIFIED CSP corespine architecture (IBD-0025) into CISEM — PHASED, CoreSpiral-kernel-first — resolving
existing CISEM debts BY REFERENCE (never forking): core-vs-instance (§3.2c), DEC-0006 precedence, A2 (everything uses a
corespine), the corespine-registry, and giving CoreSpiral (IBD-0023/0024) + the kernel their layered home. Measurable as:
each of the 4 phases names its adopted element, its ONE existing CISEM home, what debt it resolves, and which decisions are
Governor-founding vs Sonnet-buildable — with Phase N+1 never starting until Phase N is Opus/Governor-verified (CoreSpiral cycle).
**Governing corespine:** CS-CREATION-001 | **CAL reference (CISEM-ARCH-00390):** pre-commit `[ZF]`+`[DOD]`+`[ROUTING]`/`[ALIGN]`/`[TAG-STATUS]` on this plan file at commit time; a future `[CORESPINE]` check (Phase 2 follow-on) becomes new `[ZF]`/`[EDGE]` surface once built.
**Independent Verifier:** `cisem-opus-pe` (cold default-refute pass, author≠verifier per P5) — this plan is Sonnet-drafted per Opus's dispatched instructions; Opus verifies as a fresh read, not a rubber-stamp of its own dispatch.
**Size-gate exception (§3.6, documented, mirrors ARCH-00190's precedent):** this file may exceed 200 lines — it must carry
ALL of ARCH-00401's mandatory §2 sections (routing/anti-scatter/alignment-table/DoD/propagation/verifier) PLUS 4 phases each
stating adopted-element/home/resolves/decision-split. Splitting a single CoreSpiral-kernel-first architecture plan into a
mini-tree mid-definition would fragment the very kernel-first coherence it defines — kept whole, exception disclosed here
rather than silently exceeding.

**Existing-First (§3.2b, done — searched, per Core Seed 3/CORE-SEED wording, before drafting anything):**
1. `dna/corespines/corespine-registry.yaml` — the existing home for corespine status/CANDIDATES. No L1/L2/L3 layer model,
   no node-taxonomy, no precedence field exists there today — genuine gap, not duplication. The `CANDIDATES` block
   (Inheritance/Kernel/Epistemology/Security/Priority/Completion_Propagation_Layer) is the exact L2/L3 material Phase 1 maps.
2. `CLAUDE.md §3.2c` (core-vs-instance) — exists as a one-line heuristic ("defaults to INSTANCE until a second real use
   case earns core status"); no formal test. Phase 2's Branch Threshold + MEG is the FORMAL upgrade of this exact line.
3. `dna/archive/archive-ledger.yaml` DEC-0006 — read in full: disposition is **RULED-OUT-TEMPORARY** (not VAULTED — see
   Path Rejection below, a factual correction to the dispatch brief), ruling out a *single global total-order rank* in
   favor of a TYPED precedence SEQUENCE; `reopen_conditions`: "reopens if Governor rules the tree-vs-graph fork toward a
   pure total-order model." This is DIRECTLY implicated by Phase 3 — flagged, not silently walked past.
4. `CLAUDE.md §2.4 A2/A9` — A2 REFRAME (2026-07-20, in FOUND-00001) already states a corespine is INFRASTRUCTURE elements
   USE, not a container; A9 already defines singly-homed+crisp facets + coherence-law. Phase 4 (pillars-orthogonal) is the
   MECHANIZATION of exactly these two existing doctrine lines — not a new axiom.
5. `dna/governor-insights.yaml` GI-26 ("top-level = governing REACH, not element count") and GI-04/GI-10 (core-first,
   Existing-First) — both RATIFIED, both feed Phase 2's Branch Threshold directly.
6. `dna/planning/CISEM-ARCH-00382*` — grepped; not present on disk under that exact name in `dna/planning/` (the unified-
   graph plan referenced in COMPACT STATE is DEFERRED/SUPERSEDED per quality-ledger — no file collision; this plan's
   kernel/L1 structure is disclosed as its likely future re-anchor point, not a dependency it currently touches).
7. Grepped repo for "3-layer doctrine", "Branch Threshold", "Pillar Protection Line", "MEG" — **zero prior hits outside
   IBD-0025 itself** — confirmed net-new vocabulary to this plan, not a duplication.
**VERDICT:** no existing CISEM node covers L1/L2/L3 doctrine-layering, the 3-type taxonomy, or a formal branch-threshold —
genuine gap. This plan ENHANCES corespine-registry.yaml + FOUND-00001 + CLAUDE.md §3.2c BY REFERENCE (Core Seed 2); no
new corespine/registry/protocol file is created (Core Seed 1).

## Pocket Declaration
- **reasoning_scope:** design the 4-phase adoption plan itself (structure/sequencing/home-mapping); NO implementation
- **inherited_constraints:** A1–A9; D1–D6; I7 (no truth-fields); I10/I19 (enhance, never fork); I25 (a plan authorizes,
  does not implement); §1.7 git-race discipline (stage specific files only); the 4 Core Seeds below (immutable)
- **output_contract:** this plan document only — corespine-registry.yaml, FOUND-00001, CLAUDE.md, plan-audit.sh, and
  SCHEMA-00001 are NOT edited by this drafting task (Core Seed 1)
- **ai_cannot:** self-ratify; derive CISEM's canonical corespine SET; derive the precedence ORDER; stamp any Status field
- **recorded_at:** 2026-07-20

## Executive Summary
CSP (a mature sibling platform) already solved, in battle-tested form, exactly what CISEM has been circling: corespine
layering (A2), node placement (A3), conflict-precedence (DEC-0006, open), and core-vs-instance (§3.2c). IBD-0025 purified
7 adoptable patterns from it, dropping CSP's own scaffolding (PI-/CC-numbers, `.ps1` validators, session-IDs, its specific
5-spine set). This plan sequences adoption as 4 PHASED CoreSpiral cycles — kernel/L1 doctrine first (infrastructure), then
the node-taxonomy + core-vs-instance gate (Phase 2), then precedence (Phase 3, explicitly surfacing its DEC-0006 tension),
then pillars-orthogonal as A9 mechanized (Phase 4). Each phase is verified (Opus soundness + disclosed Governor-only
decisions) before the next begins — no phase implementation happens until THIS plan itself reaches Planning Status COMPLETE.

## Tier-Routing Declaration (CLAUDE.md §3.0 — mandatory, per ARCH-00401 Enh.1)
- **Drafting this plan → Sonnet** (STRUCTURING tier, this session) — executing Opus's fully-specified phase structure
  verbatim (4 phases, order, content per phase already dictated in the dispatch); no architectural judgment exercised.
- **Judging soundness (Stage 1) → Opus** (`cisem-opus-pe`), cold default-refute pass, fresh read distinct from dispatch.
- **Fable Stage 1.5 → NOT invoked** — this plan does not request it; ARCH-00190 §3 Stage 1.5 requires explicit Governor
  activation + a token-estimate, neither supplied here.
- **Governor Stage 2 → mandatory, non-skippable for THIS plan specifically:** two decisions inside are FOUNDING acts
  (canonical corespine SET; precedence ORDER) — A4/FOUND-00001 reserve founding definitions to the Governor; Opus
  soundness alone cannot authorize them (Core Seed 3).
- **Phase implementation (post-ratification, separate future plans) →** routed per §3.0 at that time; NOT pre-assigned
  here (this plan is structure-only, per Core Seed 1).

## Anti-Scatter Ordering (CLAUDE.md §2 Principle 16 — rank by significance vs the compasses, kernel/L1-first)
1. **CENTRAL, first: Phase 1 (kernel/L1).** Every other phase depends on the L1/L2/L3 structure existing — it is the
   compass Phase 2–4 orient against (goal: give CoreSpiral + the kernel candidate their home; DNA: A2; active spine:
   corespine-registry). Infrastructure-first, per CoreSpiral's own tenet (IBD-0023: "each cycle lays infrastructure for
   the next") and ARCH-00401's Tier-1-first precedent.
2. **CENTRAL, second: Phase 2 (taxonomy + Branch Threshold).** Operationalizes Phase 1's layers into a testable gate —
   directly resolves the long-open §3.2c core-vs-instance ambiguity (a recurring real cost — CS-PRIORITY-001, Inheritance,
   Kernel candidates all needed this test and didn't have it).
3. **CENTRAL, third: Phase 3 (precedence).** Needs Phase 2's node-types to know WHAT is conflicting; surfaces (never
   resolves) the DEC-0006 tension — a genuinely open Governor decision, not peripheral, but sequenced after the taxonomy
   it depends on.
4. **CENTRAL, fourth: Phase 4 (pillars-orthogonal).** A9 mechanization is an enhancement LAYER on a stable kernel+taxonomy
   +precedence — attempting it first would mechanize facets against an undefined foundation.
5. **PARKED (peripheral to THIS plan, registered not dropped):** the actual DERIVATION of CISEM's canonical corespine SET
   and the actual precedence ORDER value — both explicitly Governor-founding acts (Core Seed 3), not Sonnet/Opus's to fill
   in even as a "reasonable default." Also parked: building the `[CORESPINE]` plan-audit check (Phase 2 names it, does not
   build it — a disclosed follow-on, same posture as ARCH-00401's items 1–3).
6. **RIPPLES respected:** DEC-0004 (two-root CREATION-vs-VALIDATION, VAULTED-CONFLICT, closes on ARCH-00400 seal) is a
   DIFFERENT decision than DEC-0006 (precedence total-order) — this plan does not touch or reopen DEC-0004. DEC-0007
   (Inheritance = kernel mechanic, N4 CREATION-apex-vs-kernel still open) is respected in Phase 1 — this plan gives
   Inheritance its LAYER (L1) without resolving N4, which stays open exactly as archived.

## The Rule — 4 Phases, each ONE CoreSpiral cycle (verified before the next)

### PHASE 1 — KERNEL / L1: the 3-layer doctrine model on the corespine-registry + FOUND-00001
- **(a) CSP element adopted:** L1 (sealed essence, ratification-only amendment) / L2 (domain decomposition, normal
  review) / L3 (instances, updates freely) — IBD-0025 §1.
- **(b) CISEM home (reference, not fork):** `dna/corespines/corespine-registry.yaml` (top-level entries + the existing
  `CANDIDATES` block map onto L1/L2/L3) + `dna/CISEM-FOUND-00001-founding-node.md` (CoreSpiral's own founding slot lands
  in sealed L1, alongside TSA/Pocket — still Governor-only content, per FOUND-00001's existing honest-placeholder rule).
- **(c) Resolves:** gives CoreSpiral (IBD-0023/0024, currently only in WITNESS/IBD prose) and the Kernel candidate
  (corespine-registry CANDIDATES, `CANDIDATE-KERNEL`, N4 unresolved) a STRUCTURAL layer to sit in instead of floating;
  stops CISEM "conflating" (IBD-0025's own diagnosis) permanent-essence vs domain-decomposition vs instance-updates.
- **(d) Governor vs Sonnet:** Sonnet can MAP the existing registry/CANDIDATES entries onto L1/L2/L3 (structural, low-blast).
  Deriving CISEM's CANONICAL corespine SET (which entries are the permanent L1 trunks) is explicitly NOT decided here —
  surfaced as Governor's founding call, per Core Seed 3 and FOUND-00001's own reserved-apex convention.

### PHASE 2 — NODE TAXONOMY + THE CORE-VS-INSTANCE GATE
- **(a) CSP element adopted:** 3-type node model — Core Spine (originates authority; children, no parent) / Branch
  (derived; parent AND children) / Leaf (terminal) — structural tests, not vibes; the BRANCH THRESHOLD (a cluster earns
  its own governance boundary only if ALL of {distinct independently-evaluable goal · ≥N governing nodes an existing
  corespine can't cover · internal heterogeneity · sibling-uniqueness} AND passes MEG: "removes more architectural risk
  than the complexity it adds") — IBD-0025 §3–4.
- **(b) CISEM home:** `CLAUDE.md §3.2c` (Core-vs-Instance) — currently one sentence, no test. This phase is the FORMAL
  upgrade of that exact gate, ties to `GI-26` ("top-level = governing REACH, not element count").
- **(c) Resolves:** §3.2c has been manually judged case-by-case (SOL-GIFTPRO-001 tagged SIMULATION-ONLY "from one data
  point" as the only worked example) — no repeatable test existed. The Branch Threshold + MEG gives every future
  corespine-candidate (Priority, Security-overlay, Epistemology, Completion-Propagation-Layer — all in the registry's
  CANDIDATES block today) a real gate instead of Opus/Governor judgment alone.
- **(d) Governor vs Sonnet:** the THRESHOLD TEST ITSELF (the 4-condition + MEG structure) is Sonnet-buildable text into
  §3.2c on implementation. A future `plan-audit.sh [CORESPINE]` WARN check (mirroring `[ROUTING]`/`[ALIGN]`, attribution:
  every governed node declares a corespine that exists) is PROPOSED here, NOT built in this plan — an explicit follow-on
  (same disclosed-deferral pattern as ARCH-00401 items 1–3), routed under §3.0 at build time.

### PHASE 3 — PRECEDENCE (surfaces, does not close, DEC-0006)
> **⛔ PARKED-FOR-DEEP-UNDERSTANDING (Governor decree 2026-07-20).** Precedence is NOT to be implemented as part of
> this ratification. "When two corespines conflict, which wins" must NOT become a floating, hidden priority: it is
> parked for a deliberate deep-dive, and any precedence mechanism must be VERIFIED-TO-WORK (a real conflict run,
> I23 EXISTS≠ACTIVE) BEFORE it is ever activated. Registered so it cannot silently drift back into scope: IBD-0026
> + GI-48. Phases 1, 2, 4 proceed; Phase 3 stays PARKED until the Governor opens the deep-dive.
- **(a) CSP element adopted:** an ordered canonical set of corespines + "lower defers to higher" — IBD-0025 §5.
- **(b) CISEM home:** `dna/archive/archive-ledger.yaml` DEC-0006 ("Total-ordering precedence... `disposition:
  RULED-OUT-TEMPORARY`").
- **(c) Resolves — WITH A DISCLOSED TENSION (Core Seed 3, honesty over convenience):** DEC-0006 did NOT rule out
  precedence generally — it ruled out a SINGLE GLOBAL total-order rank specifically, replacing it with a TYPED
  precedence SEQUENCE (applicability→rule-class→constitutional→specificity→ratified-waiver→optimize→default→
  INDETERMINATE). CSP's "ordered canonical set, lower defers" pattern IS a total-order model — the SAME shape
  DEC-0006's `reopen_conditions` names ("reopens if Governor rules the tree-vs-graph fork toward a pure total-order
  model"). **This plan does NOT presume that reopening.** Two paths are surfaced, not chosen:
  - **Path A:** adopt CSP's ordered-set pattern as a Governor-ruled REOPENING of DEC-0006 (a fresh founding decision).
  - **Path B:** adopt CSP's "lower defers" only as a TIE-BREAKER mechanism WITHIN one tier of the already-decided typed
    sequence (e.g. within the `specificity` or `default` tier), leaving DEC-0006's typed-sequence direction intact.
  Both are compatible with IBD-0025's own instruction ("CISEM must derive its OWN ordering — this is the pattern, not
  the CSP set"); the CHOICE between A and B is exactly what Phase 3 asks the Governor to make.
- **(d) Governor vs Sonnet:** BOTH the Path A/B choice AND the actual precedence ORDER (if Path A) are Governor-founding
  acts — surfaced, never presumed (Core Seed 3). Sonnet's only buildable piece: drafting the mechanism SHAPE (how a
  declared order or a tier-internal tie-break would be read + enforced) once the Governor picks a path — not done here.

### PHASE 4 — PILLARS-ORTHOGONAL = A9 MECHANIZED
- **(a) CSP element adopted:** an element declares BOTH a corespine (home) AND orthogonal pillars (cross-cutting facets,
  e.g. security/privacy/observability) — IBD-0025 §6; plus the Pillar-Protection-Line: an element invalidating ≥3 others
  = escalated approval regardless of blast-radius size.
- **(b) CISEM home:** `CLAUDE.md §2.4 A9` (already defines multi-facet, singly-homed+crisp, coherence-law) + FOUND-00001's
  A2 REFRAME ("a corespine is infrastructure elements USE") — this phase gives BOTH doctrine lines their MECHANICAL form.
- **(c) Resolves:** the corespine-registry's overlay CANDIDATES (Security/Privacy/Observability/Accessibility, currently
  `OVERLAY-CANDIDATE(S)` status with no declaration mechanism) get a concrete "declare corespine + declare pillars" field
  shape instead of a bare tag; the Pillar-Protection-Line gives CISEM's existing "blast-radius" tiering a sharper,
  consequence-based (not just size-based) escalation rule for high-blast changes.
- **(d) Governor vs Sonnet:** the mechanical DECLARATION SHAPE (a node's frontmatter gains a `pillars:` field alongside
  `Governing corespine:`) is Sonnet-buildable on implementation, IF it passes Opus's A9-guardrail check (singly-homed +
  crisp + explicit coherence-law, per CLAUDE.md §2.4 A9 as already amended 2026-07-20 — no NEW guardrail invented here).
  No Governor-founding decision is required for Phase 4 itself; it inherits its authority from the ALREADY-RATIFIED A9.

## Tags + Statuses on every node this plan creates (ARCH-00401 Enh.2)
**N/A — this plan creates ZERO new governed nodes** (Core Seed 1: the only new file is this plan document, covered in the
Alignment Table below). No corespine/registry/protocol tags+statuses to declare here; each future phase-implementation
plan will carry its own such table when drafted, post-ratification.

## Per-File Alignment Table (ARCH-00401 Enh.3)
| File | ID / Number | Schema Placement (SCHEMA-00001) | Tag (VOC-00001) | Status (VOC-00002) |
|---|---|---|---|---|
| `dna/planning/CISEM-ARCH-00404-corespine-architecture.md` (this file) | CISEM-ARCH-00404 (naming-registry.yaml — pre-allocated by Opus, next_seq 405, comment verified, NOT re-bumped) | T-SYS, planning-governance layer (same trunk as ARCH-00190/00401) | corespine, architecture, phased | Status: DRAFT / Planning Status: AWAITING-BUILDER-REVIEW |
| `dna/corespines/corespine-registry.yaml` (Phase 1 target — enhanced, NOT edited by this drafting task) | existing, unchanged number | T-SYS, corespine-registry layer | corespine (existing) | unchanged; edits deferred to Phase-1 implementation, post-ratification |
| `dna/CISEM-FOUND-00001-founding-node.md` (Phase 1 target — CoreSpiral's L1 slot; content stays Governor-only) | existing, unchanged number | T-SYS, apex | founding, corespiral (existing) | unchanged; PLACEHOLDER slot for CoreSpiral stays PLACEHOLDER until Governor supplies content |
| `CLAUDE.md §3.2c` (Phase 2 target — Branch Threshold + MEG text) | no ID (root load file, section) | T-SYS, root operational layer | root, gates (existing) | unchanged by this plan; edit deferred to Phase-2 implementation |
| `dna/checks/plan-audit.sh` (Phase 2 follow-on target — a future `[CORESPINE]` WARN check, NOT built here) | no CISEM-{TYPE}-{SEQ} ID — executable, governed by ARCH-00320 §6 | T-SYS, enforcement/CAL layer | gate, audit (existing) | unchanged; new check is disclosed future work, out of THIS plan's scope |
| `dna/schema/CISEM-SCHEMA-00001-placement-engine.md` (Phase 1/4 reference — node-type placement uses its existing T-SYS/T-DOM rule; not edited) | CISEM-SCHEMA-00001, existing | T-SYS, schema-placement layer | schema, t-sys (existing) | unchanged by this plan |
| `dna/archive/archive-ledger.yaml` DEC-0006 entry (Phase 3 — awaits Governor Path A/B ruling; disposition_history APPEND-ONLY per BP-0008, no rewrite of `why`) | archive entry, no new file | T-SYS, decision-archive | conflict-resolution, precedence (existing) | unchanged by this plan; a future `disposition_history` append happens only after Governor rules |

## What DOES change (upon ratification — implementation is 4 SEPARATE later plans, one per phase; NOTHING executes now)
- Eventually (post-ratification, phase-by-phase): `corespine-registry.yaml` gains an L1/L2/L3 mapping field; FOUND-00001
  gains CoreSpiral content (Governor-authored) in its L1 slot; `CLAUDE.md §3.2c` gains the Branch Threshold + MEG test
  text; `plan-audit.sh` gains a `[CORESPINE]` check (Phase 2 follow-on); the DEC-0006 archive entry gains a
  `disposition_history` append once the Governor rules Path A or B; A9-governed nodes gain an optional `pillars:` field.

## What does NOT change
- No corespine/registry/protocol file is created or edited by THIS drafting task (Core Seed 1) — this plan document is
  the only new artifact.
- CS-CREATION-001's apex role, CS-MASTER-VALIDATION-001's root_authority, and the two-root ruling (quality-ledger run 26)
  are untouched — Phase 4's A9 pillars are ORTHOGONAL to, not competing with, either root.
- DEC-0004 (VAULTED-CONFLICT, two-root) is NOT reopened or touched — only DEC-0006 (precedence) is implicated, and only
  as a surfaced choice (Path A/B), never a presumed resolution.
- No CSP scaffolding is imported: no PI-/CC-numbers, no session-IDs, no `.ps1` validators, no specific CSP 5-spine set
  (CNST/GVRN/VALD/ARCH/OPER) — CISEM derives its OWN canonical set, per Core Seed 2/3.

## Definition-of-Done reference (ARCH-00401 Enh.5)
Referenced, not re-derived: `dna/checks/definition-of-done.md` — this plan itself is "done" at PRODUCED+VERIFIED (a
drafted, Opus-reviewable artifact); each PHASE's later implementation plan will separately need WIRED/PROPAGATED/HOOKED/
COMMITTED+PUSHED/VERIFIED against the same SSOT when it executes.

## Propagation Declaration (ARCH-00401 Enh.6)
Nothing in this plan propagates YET (Core Seed 1 — plan only). On implementation, each phase propagates BY-REFERENCE,
never by copy: Phase 1's L1/L2/L3 mapping lives ONLY in corespine-registry.yaml (the existing SSOT per ssot-registry.yaml
— no new registry); Phase 2's Branch Threshold lives ONLY in CLAUDE.md §3.2c (the existing gate line, strengthened in
place, not forked into a second file); Phase 3's precedence mechanism (once the Governor rules) updates the DEC-0006
archive entry BY APPENDING `disposition_history` (BP-0008 append-only rule), never rewriting `why`; Phase 4's `pillars:`
field is documented ONCE in ARCH-00008 (node-DNA schema) and inherited by every node header, not restated per-node-type.

## Dependencies (blocks-on / unblocks-for)
- **Blocks-on:** nothing structurally — corespine-registry.yaml, FOUND-00001, and CLAUDE.md §3.2c are all live/editable;
  this plan itself is what authorizes their future phase-by-phase edits (A4/I25 satisfied by ratification, not by this
  drafting act).
- **Unblocks-for:** `ARCH-00382` (unified-graph architecture, currently DEFERRED/SUPERSEDED per quality-ledger, awaiting
  re-anchor to DIOS maturity) — Phase 1's L1/L2/L3 kernel structure is a plausible re-anchor point for its resurrection
  (disclosed as a future connection, not built here). `ARCH-00403` (loop-until-ZF / zf-convergence, SOUND, awaiting Stage
  2) — per IBD-0023's own RIPPLES section, loop-until-ZF is a named CoreSpiral INSTANCE; Phase 1 giving CoreSpiral its
  FOUND-00001 L1 slot is what lets ARCH-00403 cite a real parent instead of a bare IBD reference.
- **Follow-on (explicitly NOT built here, disclosed per I2/I22):** the `plan-audit.sh [CORESPINE]` check (Phase 2); the
  4 phase-implementation plans themselves (each phase is its own future `/cisem-plan` cycle, per Core Seed 4 — this
  document is the STRUCTURE plan, not the 4 implementation plans).

## Ratification Path
Stage 0 (iterative Haiku→Sonnet→Opus draft-review loop, per ARCH-00190 §3) → Stage 1 (Opus soundness, cold default-refute,
`cisem-opus-pe`) → Stage 1.5 (SKIPPED — not requested, no token-estimate supplied) → **Stage 2 (Governor decree) — NOT
OPTIONAL for this plan**: it carries two founding decisions (canonical corespine SET derivation path; DEC-0006 Path A/B)
that A4/FOUND-00001 reserve to the Governor alone; Opus SOUND alone does not authorize implementation of those two items
even if the rest of the plan is judged sound. Planning Status transitions per ARCH-00190 §1 unchanged.

## Self-Compliance (against ARCH-00230 checklist)
✓ Header (ID/Type/Status/Planning-Status/depth_level/tags/goal/corespine/pocket) ✓ Why-standalone (adopts an external
blueprint into CISEM's own existing homes, self-contained) ✓ Rule-as-procedure (4 phases, each a/b/c/d structure) ✓
Does-NOT-cover stated above ✓ Independent Verifier named (`cisem-opus-pe`) ✓ Existing-First stated (7 sources) ✓
Per-File Alignment Table present ✓ Tier-Routing + Anti-Scatter Ordering present (ARCH-00401 Enh.1/10).

## Path Rejection Declaration (CLAUDE.md §2.8)
- ❌ Rejected: labelling DEC-0006 "VAULTED" as the dispatch brief phrased it — verified against the archive-ledger and
  found its actual disposition is `RULED-OUT-TEMPORARY` (VAULTED-CONFLICT is a DIFFERENT entry, DEC-0004, a different
  question). Corrected here rather than silently propagating an inaccurate premise (I2/honesty — CLAUDE.md §1.6 "never
  let a false premise slide").
- ❌ Rejected: silently adopting CSP's ordered-canonical-set as DEC-0006's resolution — that pattern IS the total-order
  shape DEC-0006 explicitly ruled out; presenting it as settled would violate Core Seed 3. Surfaced as Path A/B instead.
- ❌ Rejected: importing CSP's specific 5-spine set (CNST/GVRN/VALD/ARCH/OPER), PI-/CC-numbers, session-IDs, or `.ps1`
  validators — Core Seed 2 requires dropping CSP scaffolding; CISEM derives its own canonical set (Governor act).
- ❌ Rejected: building the `[CORESPINE]` plan-audit check, editing corespine-registry.yaml/FOUND-00001/CLAUDE.md/
  plan-audit.sh/SCHEMA-00001 inside this same task — Core Seed 1 (plan only); all routed as disclosed follow-ons.
- ❌ Rejected: presuming CISEM's canonical corespine SET from the registry's current PROPOSED/DECLARED entries — Core
  Seed 3 reserves this derivation to the Governor; this plan only maps EXISTING entries onto the L1/L2/L3 STRUCTURE.

## CAL reference (CISEM-ARCH-00390)
Pre-commit `[ZF]`+`[DOD]`+`[ROUTING]`/`[ALIGN]`/`[TAG-STATUS]` run on this plan file at commit time (I6-SIZE with the
documented exception above, I9 unregistered-ID, P5 independent-verifier-named all apply now). No SessionStart/PreCompact
hook change is proposed by this plan.

## Cycle 2 — Iteration + Simulation (Opus, Governor-directed 2026-07-20) — dogfoods CoreSpiral (the plan improves by iterating)
**Enhanced dimensions:**
- **CONNECTIVITY (A1 mechanized):** the corespine-attribution chain IS CISEM's mechanical "nothing stands alone" — every node declares its corespine; the proposed `[CORESPINE]` check flags an orphan (no corespine = a hard finding). A1 becomes mechanical, not aspirational.
- **HARDCODING (per phase — mechanical vs behavioral, honestly):** P1 = L1/L2/L3 as structural registry data (sealed-L1 amendment-only, enforced by a follow-on "no-casual-edit" check); P2 = Branch-threshold text in §3.2c (behavioral) + `[CORESPINE]` attribution check (mechanical); P3 = a declared-order read (mechanical once the Governor rules); P4 = a `pillars:` field (structural) + the Pillar-Protection-Line (a consequence-count check, follow-on). Much is behavioral first, then mechanized via follow-on checks — the CoreSpiral "enrich" phase (GI-33).
- **AI POCKETS (§3.3):** every Core-Spine/Branch node declares a Pocket (reasoning_scope / inherited_constraints / output_contract / ai_cannot) — authority is never declared without a reasoning-scope; Leaf nodes inherit the parent's pocket. Wired into the node-type declaration (Phase 2).
- **STABILITY:** sealed L1 (ratification-only) + STRUCTURAL tests (not vibes) → the taxonomy can't drift; monotonic (L3 instances churn, L1 essence doesn't). CoreSpiral's "each ring proven before the next."
- **SCALABILITY:** the Branch-threshold + MEG PREVENT sprawl (a cluster earns a boundary only if it removes more risk than complexity) → nodes scale WITHOUT governance-boundaries proliferating; adding L3 instances never touches the L1 constitution. This is how it stays coherent at scale (CSP's own "complexity → more secure", GI-33).
- **ALIGNMENT TO WHAT EXISTS:** reinforced — each phase enhances one existing home (corespine-registry / §3.2c / DEC-0006 / A9), drops CSP scaffolding, forks nothing (Core Seeds 2/3).

**Simulation — adversarial self-stress, conclusions (a fully-cold independent `cisem-opus-pe` pass is the recommended pre-ratification gate, per ARCH-00401 OBS-5 threshold — offered, not yet run):**
1. `[CORESPINE]` MUST scope to CHANGED nodes (like `[ROUTING]`) or it retro-flags the whole pre-taxonomy backlog — forward-looking, per ARCH-00402's precedent.
2. Sealed L1 needs a "no-casual-edit / do-not-expand" check or it is sealed in NAME ONLY (CSP flagged this exact gap in its own system) → a Phase-1 hardening follow-on.
3. The Branch-threshold "≥N governing nodes" needs **N defined for CISEM** — a Governor parameter, surfaced not presumed.
4. **DEC-0006 — Opus RECOMMENDS Path B:** adopt CSP's "lower defers" ONLY as a within-tier tie-breaker inside the already-ratified TYPED precedence sequence — it takes the useful mechanism WITHOUT reopening the ruled-out total-order. Path A (reopen for a pure total-order) stays a Governor option but is the heavier, archive-reversing choice. This keeps the archive honest (DEC-0006 stays ruled-out unless the Governor explicitly reopens it).
5. Pockets on taxonomy nodes (added above) — else authority is declared without reasoning-scope.

**IMPACT on planning · implementing · validating (Governor-requested):**
- **PLANNING:** a plan already declares a corespine (§3.2a); now the taxonomy says WHICH TYPE (core/branch/leaf) and the threshold says whether a NEW corespine is *earned* — the core-vs-instance decision becomes a repeatable test, not case-by-case judgment.
- **IMPLEMENTING:** an implementation targets a node whose corespine (authority) + pillars (cross-cutting) + precedence (conflict-order) are explicit → correct blast-radius + authority from the start; kills silent mis-governance.
- **VALIDATING:** validation becomes mechanical AND governance-aware — orphan detection (A1), canonical-set membership, and the "mis-placed = MIS-GOVERNED, not mis-organized" reframe shifts validation from structure-only to authority-correctness.

**NAMING / NUMBERING check (Governor-requested):** ARCH-00404 correctly allocated through the ONE gate (next_seq → 405, verified, not re-bumped). NO new numbered nodes (structure-only). Enhancement noted (not a fork): node-TYPE (core/branch/leaf) should live as a declared HEADER FIELD (`node_type:`) via ARCH-00011, NOT as a new `*_SPINE/*_BRANCH/*_LEAF` filename convention — that would fight the existing `CISEM-{TYPE}-{SEQ}` scheme and coin a convention (GI-15 reuse-before-coin). Verdict: naming/numbering SOUND; one field-enhancement (node_type via ARCH-00011), no renumbering.

## Change log
- v0.2 — 2026-07-20 (Opus cisem-opus-pe, JUDGE): Stage-1 soundness = **SOUND**. Ran Cycle-2 iteration + adversarial self-simulation (Governor-directed): folded connectivity/hardcoding/pockets/stability/scalability/alignment enhancements + 5 simulation conclusions + the planning/implementing/validating impact + the naming/numbering check. Recommended **DEC-0006 Path B** (tie-breaker, not total-order reopen). Confirmed Sonnet's DEC-0006 correction (RULED-OUT-TEMPORARY, not VAULTED) — load-bearing independent-verification catch. Planning Status → CONSENSUS-REACHED. Stage 2 (Governor) non-optional: canonical-set derivation + DEC-0006 Path-A/B are founding acts.
- v0.1 — 2026-07-20 (Sonnet, STRUCTURING tier, dispatched by Opus): initial draft. 4-phase adoption plan drafted per
  Opus's fully-specified phase order/content; Per-File Alignment Table + all ARCH-00401/00402 mandatory §2 sections
  populated per the 4 Core Seeds. DEC-0006 disposition corrected (RULED-OUT-TEMPORARY, not VAULTED) and its total-order
  tension with CSP's ordered-set pattern surfaced as an explicit Path A/B for Governor Stage 2, not presumed. NOT
  committed by Sonnet (Opus commits after judging, per §1.7 one-writing-tab discipline).
