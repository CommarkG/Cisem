# Finish-Line / Definition-of-Done Upgrade — Plan Skeleton (typed closure grades + pre-declared finish lines)
**Node ID:** CISEM-ARCH-00418 | **Type:** ARCH | **Status:** PROVISIONAL-ACTIVE
**Planning Status:** CONSENSUS-REACHED (Opus Stage-1 soundness = SOUND, 2026-07-24; awaiting GI-68 dual review → Governor Stage-2) | **depth_level:** L1 | **Position in schema:** T-SYS, planning-governance layer
**tags:** [finish-line, dod-upgrade, closure-grade, mechanical-verification, source-verification, mirror-propagation, governance-gate, mandatory]
**Goal:** DoD gains a PRE-DECLARED finish line + two closure grades (MECHANICAL | BEHAVIORAL) + a source-verification
PRECONDITION for existing-state claims + a completion-word→grade lexicon; the `[DOD]` check is upgraded to flag a
completion-word lacking matching-grade evidence; a small persona-SSOT↔CLAUDE.md §1.6 mirror-propagation check is
folded in — measurable as: (1) `definition-of-done.md` carries the two new sections, grep-verifiable; (2) a planted
"wired" claim with no mechanism-ref/tag is flagged by the upgraded `[DOD]` check; (3) a planted persona/CLAUDE.md
desync is flagged by the new `[PERSONA-MIRROR]` check.
**Governing corespine:** CS-CREATION-001
**Independent Verifier:** `cisem-haiku` (cold, protocol-lens; distinct from `cisem-sonnet`, this plan's author — P5).

**Size-gate (§3.6, documented exception, honesty per Principle 17):** this plan carries 5 Core Seeds + 4 dogfooded
finish-line/grade declarations + the mandatory per-file alignment listing — the same structural tension named in **RI-0026**
(mandatory ARCH-00401 sections routinely exceed the 200-line ceiling for any substantive phased plan; ARCH-00190,
ARCH-00401, and ARCH-00417 all hit the identical wall). Kept whole rather than mini-tree-split (a split would
fragment 5 small deliverables into an oversized ceremony); line-count exceeds 200 — not silently claimed clean.

## Core Seeds (from Opus dispatch, 2026-07-24 — immutable, executed verbatim, I13; quoted per Principle 14 — this
plan is the block they govern)
```
[[CORE-SEED A | MUST: EXTEND dna/checks/definition-of-done.md — do NOT fork a new "acceptance contract" concept |
WHY: Brain's Existing-First correction, source-verified against the file (it IS the SSOT, 7-item DoD); A8/RI-0024 |
APPLIES_TO: the whole plan]]
[[CORE-SEED B | MUST: closure-grades for NEW claims = MECHANICAL | BEHAVIORAL (two only); source-verification is a
standing PRECONDITION for claims referencing EXISTING state, NOT a third peer grade | WHY: Brain's sharper cut — a
peer grade would let a claim 'pass source-verified' and stop, verifying the wrong question | APPLIES_TO: the
grade-typing deliverable]]
[[CORE-SEED C | MUST: the finish line is PRE-DECLARED before the build; a completion-WORD must MATCH its
evidence-grade; the [DOD] check BLOCKs any completion-word lacking finish-line evidence at the matching grade |
WHY: open predicates without a declared finish line are plausibility-completion (the 'wired' overclaim) |
APPLIES_TO: the [DOD] upgrade deliverable]]
[[CORE-SEED D | MUST: FOLD IN the persona-SSOT→CLAUDE.md §1.6 mirror-propagation check as a small deliverable |
WHY: closes the I10 stale-mirror gap demonstrated this session (RI-0025 self-catch was in the SSOT but not the
always-loaded mirror) | APPLIES_TO: the mirror-check deliverable]]
[[CORE-SEED E | MUST: PLAN skeleton only — build NO mechanism; Planning Status AWAITING-BUILDER-REVIEW; no
self-ratify; and the plan MUST DOGFOOD its own discipline — DECLARE its own finish line + closure-grades for each
deliverable | WHY: A4/A11; the finish-line plan must itself exercise finish-lines | APPLIES_TO: this drafting task]]
```

## Pocket Declaration
- **reasoning_scope:** draft the CISEM-ARCH-00418 plan skeleton per the Opus+Brain ratified finish-line design
  (RI-0025); produce the plan artifact only, build no mechanism
- **inherited_constraints:** A4/A11 (plan gate + consultation-before-production); A8/I10 (extend the DoD SSOT, no
  fork); I22/I23/18C (the exact family this plan extends); RI-0025 (source-verification discipline, applied to
  itself below); §1.7 git-race (stage specific files only — Sonnet does not commit)
- **output_contract:** this plan document only; `dna/naming-registry.yaml` next_seq bump (the ONE naming gate)
- **ai_cannot:** self-ratify; build the `[DOD]` upgrade or the mirror-check mechanism; write any truth field
- **recorded_at:** 2026-07-24

## Tier-Routing Declaration (CLAUDE.md §3.0)
- **Drafting this plan → Sonnet** (STRUCTURING tier) — executing Opus+Brain's ratified design verbatim (5 Core
  Seeds); no design judgment exercised, the direction is already consensus'd (RI-0025).
- **Judging soundness (Stage 1) → Opus (cisem-opus-pe)** — cold default-refute, fresh read.
- **Fable Stage 1.5 → NOT triggered** (requires separate human activation + token estimate; not invoked here).
- **Governor Stage 2 → ratification authority** for THIS plan artifact (distinct from the DIRECTION-level
  ratification already given 2026-07-24 per RI-0025 — see Ratification Path below).
- Why: mechanical/structural drafting of a spec'd plan = Sonnet's lane; judgment/soundness/truth = Opus's (§3.0 rubric).

## Executive Summary
"Check / verify / done / wired" are open predicates with no declared closure condition — a completion claim can
always be asserted satisfied (plausibility-completion), as this session's live "wired into the always-loaded core"
overclaim proved (RI-0025). This plan extends the EXISTING DoD SSOT (never forks a new concept, Seed A) with a
pre-declared finish line, two closure grades for new claims (MECHANICAL | BEHAVIORAL, never three, Seed B), and a
source-verification PRECONDITION for claims about existing state — then upgrades the `[DOD]` check to enforce the
match, and folds in a small persona-SSOT↔CLAUDE.md mirror-propagation check (Seed D) that closes the exact
stale-mirror gap this session demonstrated. This plan is the PARENT of ARCH-00417's S3 measurable-value gate (S3
stays parked as one instance of this general discipline; reconciled once both are live).

## Existing-First (§3.2b, done)
Searched **`dna/checks/definition-of-done.md`** directly (read in full — the 7-item SSOT: PRODUCED / WIRED /
PROPAGATED / HOOKED / ROOT-INSIGHT / COMMITTED+PUSHED / VERIFIED) — confirms it IS the extension target (Seed A);
**`dna/ssot-registry.yaml`** `definition_of_done` entry (`ssot: dna/checks/definition-of-done.md`, `mirrors:
["plan-audit.sh [DOD] check (pointer)"]`) — confirms the ONE mirror this plan must keep in sync, no second home;
**`dna/learning-registry/root-insights.yaml` RI-0025** (read in full — its `routes_to` already names this exact
extension verbatim, including the "NOT a new acceptance-contract fork" and "source-verification as precondition,
not peer grade" corrections); **`dna/checks/plan-audit.sh`** `[DOD]` check (read lines 443–467 in full — current
logic: (a) unpushed-commits check, (b) an `enforce_re`/`mech_re`/`tag_re` word-triggered check with no
finish-line/grade-typing concept yet — this is what Deliverable 3 upgrades); no competing "acceptance contract" or
"finish line" node found in `corespine-registry.yaml` or `naming-manifest.yaml` — confirms Seed A's rejection holds.
**PATH REJECTION:** reject a new acceptance-contract node (fork — rejected per Seed A); reject source-verification
as a third peer grade (rejected per Seed B, kept as precondition only).

## Anti-Scatter Ordering (CLAUDE.md §2 Principle 16)
Infrastructure-first: **D1** (Pre-Declared Finish Line clause — the concept everything else depends on existing)
→ **D2** (closure-grade lexicon — depends on D1's finish-line frame) → **D3** (`[DOD]` check upgrade — mechanizes
D1+D2) → **D4** (mirror-propagation check — smaller, independent, sequenced last per Seed D's explicit "ships as
its own small item," not blocking D1–D3).

## The Rule — 4 deliverables (each: insertion · kind · DOGFOODED finish-line · closure-grade, Seed E)

**D1 — Pre-Declared Finish Line clause.** Insertion: new `## Pre-Declared Finish Line` section in
`definition-of-done.md` (preamble, ahead of the numbered list) stating the acceptance condition is written BEFORE
the build — done = comparison to a pre-set target, never post-hoc judgment. **[NEW-CLAUSE]**, extends DoD item 7
(VERIFIED). *Finish line:* the file contains a section header matching `Pre-Declared Finish Line` (grep-verifiable).
*Closure-grade:* **MECHANICAL** (grep evidence).

**D2 — Closure-grade typing + lexicon.** Insertion: new `## Closure Grades` section in `definition-of-done.md` —
defines **MECHANICAL** (a running check/test/hook produces evidence) and **BEHAVIORAL** (a persona/discipline
guard, honestly "present + loaded," never "wired"); states **source-verification as a standing PRECONDITION** (not
a third grade, Seed B) for any claim referencing existing state; carries the completion-word→grade **LEXICON**:
`wired=mechanical` · `verified=source-or-mechanical` · `present=exists-in-file` · `honored=behavioral`.
**[NEW-CLAUSE]**. *Finish line:* section header `Closure Grades` present + all 4 lexicon words appear with their
grade (grep-verifiable). *Closure-grade:* **MECHANICAL**.

**D3 — `[DOD]` check upgrade.** Insertion: `dna/checks/plan-audit.sh` `[DOD]` check (~lines 443–467) — extend so a
completion-word from the D2 lexicon, added in a changed file's diff, is flagged unless matching-grade evidence is
present: MECHANICAL-grade words need a mechanism ref (existing `mech_re`, extended); BEHAVIORAL-grade words need a
persona/discipline citation OR an honest `NOT-YET-WIRED`/tag. Stays **WARN-only** (matches existing `[DOD]`
posture; BLOCK-mode is ARCH-00270's separate ratified track — not silently promoted here). **[STRENGTHENED]**.
*Finish line:* planted-test (same discipline as `[CHECK-LINT]`/`[RATIFY-GATE]`) — a synthetic diff line containing
`wired` with no mechanism-ref/tag triggers the check; a clean line does not; both states shown in the build's
verification evidence. *Closure-grade:* **MECHANICAL** (the check's own run output is the evidence).

**D4 — persona-SSOT ↔ CLAUDE.md §1.6 mirror-propagation check** (Seed D fold-in, ships as its OWN small item).
Insertion: NEW `dna/checks/persona-mirror-check.sh`, wired into `plan-audit.sh` as `[PERSONA-MIRROR]`. Compares the
persona SSOT's L1-core self-catch question list (`persona-collaborator.md` L1 section) against CLAUDE.md §1.6's
mirrored self-catch line; flags when the SSOT carries a self-catch question/RI-numbered addition absent from the
mirror. **[NEW-CLAUSE]**. *Finish line:* planted-test — temporarily desync one self-catch phrase between the two
files, confirm the check flags it; resync, confirm clean; both runs' output cited as evidence. *Closure-grade:*
**MECHANICAL** (the check itself is a running mechanism; what it verifies is a BEHAVIORAL/persona concern, but the
verification act is mechanical — the check's report must say "present + loaded," never "wired," per D2's lexicon
applied to itself).

## Tags + Statuses on every node this plan creates (ARCH-00401 Enh.2)
This plan creates ONE new CISEM-ID node (itself, CISEM-ARCH-00418) and proposes ONE new non-ID check file
(`persona-mirror-check.sh`, D4) — both carry tag+status in the Per-File Alignment Table below; no other node is created.

## Per-File Alignment Table (ARCH-00401 Enh.3)
| File | ID / Number | Schema Placement | Tag (VOC-00001) | Status (VOC-00002) |
|---|---|---|---|---|
| `dna/planning/CISEM-ARCH-00418-finish-line-dod-upgrade.md` (this file) | CISEM-ARCH-00418 (naming-registry.yaml next_seq 418→419, this drafting task) | T-SYS, planning-governance layer | finish-line, dod-upgrade, closure-grade, mandatory | Status: PROVISIONAL-ACTIVE / Planning Status: AWAITING-BUILDER-REVIEW |
| `dna/checks/definition-of-done.md` (target of D1+D2 — NOT edited by this drafting task, Seed E) | no CISEM-ID — check SSOT, governed by CS-CREATION-001 | T-SYS, enforcement/CAL layer | done-criteria, ssot | unchanged by this plan; edits deferred to implementation phase |
| `dna/checks/plan-audit.sh` (target of D3) | no CISEM-ID — executable script, governed by ARCH-00320 §6 | T-SYS, enforcement/CAL layer | gate, audit, mandatory | unchanged by this plan; upgrade is implementation-phase |
| `dna/checks/persona-mirror-check.sh` (NEW, target of D4) | no CISEM-ID — executable script, governed by CS-AI-PROFILING-001 | T-SYS, enforcement/CAL layer | persona, mirror-propagation, mandatory | NOT YET CREATED — build is implementation-phase |
| `dna/naming-registry.yaml` (this drafting task bumps next_seq) | REG type, self-exempt | T-SYS, naming-allocation layer | naming, numbering | present, next_seq 418→419 |

## What DOES change (upon ratification — implementation is a LATER, separate step; nothing here executes now)
- `dna/checks/definition-of-done.md` — 2 new sections (D1 Pre-Declared Finish Line, D2 Closure Grades + lexicon).
- `dna/checks/plan-audit.sh` — `[DOD]` check upgraded (D3, WARN-only).
- `dna/checks/persona-mirror-check.sh` — NEW file, wired into `plan-audit.sh` as `[PERSONA-MIRROR]` (D4).
- `dna/ssot-registry.yaml` — `definition_of_done` entry's `note:` updated to reflect the extension (propagation only).

## What does NOT change
- DoD's existing 7 items (PRODUCED…VERIFIED) — extended, never replaced or renumbered.
- No new "acceptance contract" node is created (Seed A).
- No third closure grade is introduced (Seed B) — source-verification stays a precondition.
- `plan-audit.sh`'s WARN-only posture — BLOCK-mode remains ARCH-00270's separate ratified track.
- ARCH-00417's S3 measurable-value gate — stays PARKED; noted as this plan's downstream instance, reconciled once both are live.

## Definition-of-Done reference (ARCH-00401 Enh.5)
Cites `dna/checks/definition-of-done.md` — SSOT, not re-derived here. Verified at the §4 implementation gate
against the SAME 7 items PLUS this plan's own D1–D4 finish lines (dogfooded above).

## Propagation Declaration (ARCH-00401 Enh.6)
DoD is a registered SSOT (`ssot-registry.yaml` `definition_of_done`, `mirrors: ["plan-audit.sh [DOD] check"]`). On
implementation: (1) the `ssot-registry.yaml` entry's `note:` is updated to reflect the finish-line + grade
extension — still ONE mirror (`plan-audit.sh`), no second home added; (2) `persona-collaborator.md`
`## DEVELOPMENT DISCIPLINE`'s existing DoD-reference line gets a pointer-only update (no copy) noting the grade
lexicon lives in the SSOT; (3) CLAUDE.md §1.6's "Completion + honesty" bullet already references I22/I23 by
pointer — no edit needed there (by-reference holds); (4) `[PERSONA-MIRROR]` (D4) IS the ongoing propagation
MECHANISM for the persona↔CLAUDE.md leg going forward — this plan builds the guard, not a one-time fix.

## Dependencies (blocks-on / unblocks-for)
- **Blocks-on:** nothing — `definition-of-done.md` is LIVE, free to extend via a ratified plan.
- **Unblocks-for:** ARCH-00417's S3/S4 gates (this plan is their PARENT/general form per the task's stated
  RELATIONSHIP — S3 can cite this plan's grade lexicon once both are live); any future plan claiming
  wired/verified/present/honored inherits the matching-grade discipline.
- **Follow-on (explicitly NOT built here, disclosed per I2/I22):** promoting `[DOD]` to BLOCK-mode is
  ARCH-00270's separate track — this plan only strengthens the existing WARN-only check.

## Ratification Path
The DIRECTION behind this plan was already Governor-RATIFIED 2026-07-24 (RI-0025 status line, informed by
Opus+Brain consensus, GI-63 satisfied) — that ratification authorized DRAFTING this plan via `/cisem-plan`, it did
NOT ratify this artifact itself. THIS plan artifact still runs its own double-gate: Stage 0 (iterative
Haiku→Sonnet→Opus draft-review loop, per ARCH-00190 §3) → Stage 1 (Opus soundness, `cisem-opus-pe`, cold
default-refute) → Stage 1.5 (skipped — not activated) → Stage 2 (Governor decree). GI-68 dual review
(Haiku protocol-lens + Sonnet content-lens) applies before Stage 2, per RI-0025's own precedent (the exact
mechanism that caught the axis-conflation this plan's design descends from).

## Opus Stage-1 Soundness Verdict (ARCH-00190 §3 Stage 1; [RATIFY-GATE])
**Verdict: SOUND** (cisem-opus-pe, 2026-07-24; cold default-refute). Mirrors ARCH-00190 §2; honors all 5 Core Seeds
A–E verbatim; Existing-First is SOURCE-VERIFIED (author read definition-of-done.md + plan-audit.sh [DOD] directly —
RI-0025 applied, not paraphrased); dogfoods its own finish-line + closure-grade discipline per deliverable, and D4
applies the grade lexicon to ITSELF honestly (MECHANICAL check verifying a BEHAVIORAL concern → report says
"present+loaded", never "wired"). ONE confirmed nuance (not a deviation): Seed C's "BLOCK" is honored by BUILDING the
check + grade logic and routing the WARN→BLOCK promotion through ARCH-00270's separate ratified track — a unilateral
BLOCK-flip would bypass that promotion governance; the sounder reading. Sonnet's flagged interpretation confirmed:
the 2026-07-24 DIRECTION ratification authorized DRAFTING only; this artifact still needs GI-68 dual review → Governor
Stage-2. **NEXT: GI-68 dual review (Haiku protocol + Sonnet design) → Governor Stage-2.**

## Self-Compliance (ARCH-00230 checklist)
✓ Header (ID/Type/Status/Planning-Status/depth_level/tags/goal/corespine/Independent-Verifier) ✓ Why-standalone
(extends the DoD SSOT, self-contained plan) ✓ Rule-as-procedure (4 numbered deliverables, insertion+kind+finish-
line+grade each) ✓ Does-NOT-cover / What-does-NOT-change (stated above) ✓ Independent Verifier named (`cisem-haiku`,
cold, differs from author `cisem-sonnet` — P5) ✓ Existing-First stated with sources named ✓ Per-File Alignment
Table present ✓ Tier-Routing Declaration present ✓ Anti-Scatter Ordering present ✓ Propagation Declaration present
✓ DoD reference present ✓ CAL reference present (below) ✓ Own finish-line + closure-grade dogfooded per deliverable (Seed E).

## Path Rejection Declaration (CLAUDE.md §2.8)
- ❌ Rejected: forking a new "acceptance contract" node — Seed A; extend the existing DoD SSOT instead.
- ❌ Rejected: source-verification as a third peer closure grade — Seed B; kept as a precondition for
  existing-state claims only.
- ❌ Rejected: building any mechanism in this drafting task — Seed E; plan skeleton only.
- ❌ Rejected: merging the mirror-propagation check into D1–D3 as one deliverable — Seed D requires it ship as its
  OWN small item.
- ❌ Rejected: flipping `[DOD]` straight to BLOCK-mode — that is ARCH-00270's separate ratified track; this plan
  stays WARN-only, consistent with the check's existing posture.

## CAL reference (CISEM-ARCH-00390)
Pre-commit `[ZF]` + `[DOD]` fire on this plan file itself at commit time (I6-SIZE size-exception documented above,
I9 registered-ID, P5 independent-verifier-named checks apply now). Once D1–D4 are implemented, the upgraded
`[DOD]` + new `[PERSONA-MIRROR]` become permanent CAL surface for EVERY future commit — the mechanism this plan
exists to build, not a one-time pass.

## Change log
- v0.1 — 2026-07-24 (Sonnet, STRUCTURING tier, dispatched by Opus per Opus+Brain consensus, RI-0025): initial plan
  skeleton drafted verbatim to the ratified direction; 4 deliverables sequenced infrastructure-first (D1→D2→D3→D4);
  Core Seeds A–E quoted verbatim (I13); dogfooded a pre-declared finish-line + closure-grade for each deliverable
  (Seed E, per Principle 15 — this is a first build, not yet flawless-proven by divergent iteration). NOT committed
  by Sonnet — Opus commits after review (§1.7 git-race discipline).
