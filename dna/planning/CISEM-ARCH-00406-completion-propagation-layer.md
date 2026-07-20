# Completion & Propagation Layer — Phased Plan (RIPL-v2 · Propagation Network · Tier-Cycle · Workflow Governance · Output-Liveness Monitor)
**Node ID:** CISEM-ARCH-00406 | **Type:** ARCH | **Status:** PROVISIONAL-ACTIVE
**Planning Status:** AWAITING-BUILDER-REVIEW | **depth_level:** L1 | **Position in schema:** T-SYS, planning-governance layer
**tags:** [planning-domain, completion, propagation, ripl, tier-cycle, workflow-governance, output-liveness, mandatory, gate]
**Goal:** End the recurring "I forgot to wire / propagate / push" class MECHANICALLY, and make root-insight handling
disciplined (accumulate → weekly pattern-batch → plan → ratify → auto-propagate) — measurable as: (1) every SSOT-concept
change is checked against its registered homes at commit time (`[PROPAGATE]`); (2) root-insights.yaml entries carry a
batch cadence and a TTL-escalation instead of floating; (3) the Haiku→Sonnet→Opus tier-cycle is a named, referenceable
standard a workflow can be launched against (permission + token-estimate gated); (4) previously-wired mechanisms are
RE-verified alive on a cadence (Output-Liveness Monitor), not just checked once at creation.
**Governing corespine:** CS-CREATION-001 | **CAL reference (ARCH-00390):** pre-commit `[ZF]` + `[DOD]` on this plan's own
files now; `[PROPAGATE]` / `[RIPL-BATCH]` / `[LIVENESS]` become new pre-commit surface once built (disclosed follow-ons).
**Independent Verifier:** `cisem-opus-pe`, cold default-refute pass (author = Sonnet, verifier = Opus; satisfies P5).
**Size-gate exception (§3.6, documented):** this file exceeds 200 lines (5 gated phases + a 10-source Existing-First
search + an 8-row Per-File Alignment Table, per ARCH-00401's own mandatory sections). Splitting a single coherent
phased plan mid-design would fragment the SSOT the gate itself protects — kept whole, flagged explicitly (same
documented-exception precedent as ARCH-00190), not "exceed and flag" silently.

**Existing-First (§3.2b, done) — searched, in order:**
1. `dna/ssot-registry.yaml` — **ALREADY a concept→home(s) map** (`{ssot, mirrors: []}` per concept). This is the seed of
   the Propagation Network (Pillar 2) the build-prompt asked for — **ENHANCE it** (add `regenerates:` + a mechanical
   check), do NOT create a parallel index (A8/I19). Also carries the `ripl_registry` entry: *"enforcement mechanism =
   BP-0009 (parked)"* — this plan IS that enforcement.
2. `dna/learning-registry/root-insights.yaml` (RIPL registry, RI-0001/RI-0002) — EXISTS, concept-scoped, durable,
   `status: PARTLY-WIRED` on both entries. **ENHANCE with a batch cadence**, do not fork a second RIPL store.
3. `dna/corespines/CS-AI-PROFILING-001/persona-collaborator.md` `## DEVELOPMENT DISCIPLINE` — already states RIPL,
   cost-aware tier flow (Haiku prepares→Sonnet builds→Opus consolidates, 3-step), workflow permission, two-lens verify,
   proactive boundary-awareness — all PROSE/behavioral. This plan is the MECHANICAL wiring of those prose disciplines
   (STRENGTHEN, not fork) and names the FULLER 8-step tier-cycle the build-prompt specifies (Opus-pillars→Haiku-gather→
   Sonnet-enrich→Opus-consolidate/seed/one-click→Sonnet-build→Haiku-review→Sonnet-review→Opus-final).
4. `dna/checks/definition-of-done.md` + `[DOD]` check + I23 (EXISTS≠ACTIVE) in `plan-audit.sh` — both check claims made
   IN THE CURRENTLY-AUDITED COMMIT; neither RE-checks a mechanism that was verified alive in the past and may have gone
   stale/silently broken since. **Genuine gap** — confirms Pillar 5 (Output-Liveness Monitor) is not a duplicate of DOD/I23.
5. `frontend/rebuild.sh` — an existing NARROW instance of a liveness check (dead-link verification for frontend pages
   only). The Output-Liveness Monitor GENERALIZES this pattern (any wired mechanism, not just links) — reuse the
   pattern, do not fork a second link-checker.
6. `dna/ibd/IBD-0024-corespiral-engineering-input-PURIFIED.md` (items 3–4) + `dna/governor-insights.yaml` (GI-23, GI-30,
   GI-33, GI-34) + `dna/protocols/CISEM-ARCH-00360-haiku-audit-hardening.md` RULE 5 (7-day pending TTL, already the
   ancestor of P3 in `plan-audit.sh`) — **the Output-Liveness Monitor is an ALREADY-NAMED, NOT-YET-BUILT concept**
   (IBD-0024 explicitly says *"PLACE: enrich RIPL + the (planned) Output-Liveness Monitor"* and *"a concrete escalation
   rule in the Output-Liveness Monitor plan"*). This plan is that plan. It REUSES: vault-and-halt (GI-23), the 7-day
   TTL pattern (GI-30/RULE 5/P3), and the 2-attempt-then-hard-stop rule (GI-34) — no new escalation vocabulary invented.
7. `dna/queue/BP-0010-two-model-verify-activation.md` — states explicitly *"Mechanical enforcement = BP-0009 (the
   /cisem-precompact-verify skill), NOT-YET-WIRED"*, and `root-insights.yaml` RI-0002 `routes_to` already lists
   *"BP-0009 (mechanical /cisem-precompact-verify skill — PARKED)"*. **Folding BP-0010's mechanical-enforcement
   deliverable into THIS plan honors an already-recorded routing decision — it is not scope-creep.** BP-0010's
   target-list + paste-ready Haiku/Sonnet-tab prompts remain a SEPARATE, Governor-executed manual action (Phase 2 below
   specs the skill; it does not re-litigate BP-0010's own content).
8. `dna/queue/BP-0011-schema-ssot-and-html-pages.md` — **NOT folded here.** Its alignment-gate piece (item 1) is
   explicitly routed by `BP-0012`'s own text to the tag/status enforcement plan (see the sibling plan, ARCH-00407,
   §Existing-First item 4). Its HTML-page-generation piece (items 2–4) is untouched by either plan — **flagged as a
   genuinely separate, not-yet-authored plan** (frontend generator + scheduler-dependent auto-update).
9. `dna/checks/penumbra-sweep.sh` (`test_cadence: N` pattern) + `dna/checks/pre-commit-blocks.sh` (the BLOCK pattern) —
   both REUSED by name below (Pillar 5's cadence; no new cadence mechanic invented).
10. `dna/corespines/corespine-registry.yaml` CANDIDATES block — `Completion_Propagation_Layer: { status:
    PLAN-PENDING-BP-0009, ... }` — confirms this exact plan was the expected next step; no competing candidate exists.
**VERDICT:** nothing here forks an existing home. Every pillar ENHANCES a named, disclosed existing artifact; the one
genuinely new file is `dna/checks/output-liveness-monitor.md` (Pillar 5's SSOT — confirmed novel, §Existing-First 4–6).

## Pocket Declaration
- **reasoning_scope:** sequence the 5 pillars (RIPL-v2, Propagation Network, Tier-Cycle, Workflow Governance,
  Output-Liveness Monitor) into gated phases, infrastructure-first, per Opus's BP-0009 pillar spec + the Output-Liveness
  Monitor addition; produce this plan artifact only — no pillar is implemented in this task (Core Seed 1)
- **inherited_constraints:** A1–A9; D1–D6; I7 (no truth-fields); I10/I19 (enhance, never fork — every pillar is an
  ENHANCE per Existing-First above); I25 (a plan authorizes, does not implement); §1.7 git-race discipline
- **output_contract:** this plan document only — no registry/check/skill file listed under "What DOES change" is
  edited by this drafting task
- **ai_cannot:** self-ratify; stamp any Status/RATIFIED field; build the scheduler BP-0011/IBD-0013 §6 disclosed as
  a dependency (OS-level cron is out of Claude-hooks' event-based reach — disclosed honestly, not solved here)
- **recorded_at:** 2026-07-20

## Executive Summary
CISEM's recurring "forgot to wire/propagate/push" failures share one root: completion-discipline lives in PROSE that
must be remembered, and nothing re-checks a mechanism AFTER it was once verified alive. This plan wires FIVE pillars —
RIPL-v2's weekly-batch discipline, a mechanical Propagation Network (ENHANCING the existing `ssot-registry.yaml`), the
named 8-step Tier-Cycle + Workflow Governance (Governor-permission + token-estimate gated), and a NEW Output-Liveness
Monitor that RE-verifies previously-wired mechanisms stay alive on a cadence, escalating GREEN→YELLOW→RED per the
already-purified IBD-0024 rules. It also builds the `/cisem-precompact-verify` skill SPEC that RI-0002 already routes
here from BP-0010. Nothing is implemented; this plan authorizes a LATER, separately-tracked build pass.

## Tier-Routing Declaration (per CLAUDE.md §3.0 — honest disclosure, not a fabricated multi-agent run)
- **Gather + enrich (BP-0009's Haiku-gather / Sonnet-enrich steps) → performed by Sonnet in THIS single authoring
  pass.** This session's `cisem-sonnet` tool-set has no subagent-dispatch capability (no `Task`-equivalent tool) — a
  live, separately-context'd Haiku subagent was **NOT** dispatched. The Existing-First search above IS the gather
  step, executed directly (grep/read), not delegated. **Disclosed exception (I12/I22):** BP-0009 asked for a 3-tier
  live cycle; this authoring pass honestly performed gather+enrich in one context rather than fabricate a Haiku pass
  that did not happen. Opus MAY dispatch a supplementary live Haiku-gather pass before Stage 1 if a second lens on
  "what exists" is wanted — this plan does not block on it.
- **Judging soundness (Stage 1) → Opus (cisem-opus-pe)** — cold default-refute pass, fresh context from this draft.
- **Building each pillar (post-ratification) → Sonnet**, per the plan's own Phase Rule below (§3.0 rubric: mechanical
  registry/check edits are Sonnet's lane).
- **Fable Stage 1.5 → NOT invoked** — no human ratification activated it for this plan.
- **Governor Stage 2 → ratification authority.**

## Anti-Scatter Ordering (CLAUDE.md §2 Principle 16)
Ordered infrastructure-first, each phase gated on the prior:
**Phase 0 (Propagation Network)** is most central — every other pillar DEPENDS on concepts having a reliable home-map
(RIPL routes insights to homes; the tier-cycle documents where its own steps live; liveness re-checks things AT their
homes). **Phase 1 (RIPL-v2)** next — turns the propagation map into a LEARNING loop, not just a static index.
**Phase 2 (Tier-Cycle + Workflow Governance + the `/cisem-precompact-verify` skill spec)** — behavioral/procedural,
builds on Phase 0's map to know who touches what. **Phase 3 (Output-Liveness Monitor)** last — the most novel, highest
scope; it monitors the artifacts the first three phases produce, so it is sequenced to have something real to watch.
Peripheral items (BP-0011's HTML-generation piece; the overnight-scheduler infrastructure IBD-0013 §6 flags as
needing OS-level cron) are PARKED below (Dependencies), not built here, not dropped.

## The Rule (phases — each BLOCKED until the prior gate passes; implementation is a LATER step, per Core Seed 1)

**PHASE 0 — Propagation Network (ENHANCES `dna/ssot-registry.yaml`)**
- Deliverable: add a `regenerates: []` field to each `concepts.*` entry in `ssot-registry.yaml` (which generated views
  — HTML pages, agent bootstrap blocks, manifests — must regenerate when this SSOT changes; empty list = no generated
  view depends on it, stated not omitted). Add a new WARN check `[PROPAGATE]` to `plan-audit.sh`: when a commit
  changes a file that IS an `ssot:` value for some concept, print that concept's `mirrors:` + `regenerates:` list as a
  reminder-surface (mirrors "did I update it in the axiom AND the wizard AND the persona AND the check?").
- Stress test: plant a change to a file that IS a registered SSOT (e.g. touch `definition-of-done.md`) → `[PROPAGATE]`
  lists its one mirror (`plan-audit.sh [DOD] check (pointer)`); touch a non-SSOT file → no `[PROPAGATE]` output.
- Pass criteria (numeric): 100% of `concepts.*` entries carry `regenerates:` (even if `[]`); the planted SSOT-touch
  case fires; the non-SSOT-touch case is silent.
- **GATE 0→1:** Opus review + Governor sign-off.

**PHASE 1 — RIPL-v2 weekly-batch (ENHANCES `dna/learning-registry/root-insights.yaml`)**
- Deliverable: add a `batch_status` field per RI-NNNN entry (`ACCUMULATING` | `BATCHED` | `ROUTED`) + a documented
  WEEKLY-BATCH PROCEDURE (accumulate found-wrong→improved events as they occur, status `ACCUMULATING` → weekly, Sonnet
  clusters by tag/domain, distinguishes a true cross-domain root-cause from local-event noise → Opus judges candidates
  → route each into a plan/park/axiom, status → `ROUTED`). Reuse the `test_cadence`/TTL pattern already proven in
  `penumbra-sweep.sh` + P3 (`plan-audit.sh`) for a `[RIPL-BATCH]` WARN check: flags `ACCUMULATING` entries older than
  7 days with no batch review (same 7-day TTL as RULE 5/P3 — no new number invented).
- Stress test: plant an RI entry dated 8+ days ago, `batch_status: ACCUMULATING` → `[RIPL-BATCH]` fires; date it 3 days
  ago → silent (under TTL).
- Pass criteria (numeric): RI-0001/RI-0002 backfilled with `batch_status` (both currently `PARTLY-WIRED` — mapped to
  `ACCUMULATING` honestly, not silently reclassified as `ROUTED`); planted 8-day case fires, 3-day case does not.
- **GATE 1→2:** Opus review + Governor sign-off.

**PHASE 2 — Tier-Cycle + Workflow Governance + `/cisem-precompact-verify` skill spec**
- Deliverable (a): STRENGTHEN `persona-collaborator.md` `## DEVELOPMENT DISCIPLINE`'s "Cost-aware tier flow" line from
  the current 3-step (Haiku prepares→Sonnet builds→Opus consolidates) to the full Governor-specified 8-step sequence
  (Opus-pillars→Haiku-gather→Sonnet-enrich→Opus-consolidate/seed/one-click→Sonnet-build→Haiku-review→Sonnet-review→
  Opus-final), naming it the **Tier-Cycle** so future workflows can reference it by name (no new file — one line
  strengthened at its existing SSOT home).
- Deliverable (b): make "Workflow permission" concrete — a WORKFLOW launch (multi-agent orchestration, ≥2 tiers)
  requires a stated Governor-facing PRE-launch message: `{workflow name, tier-cycle steps invoked, token ESTIMATE}` and
  a POST-completion message: `{actual token cost}`. This is a discipline addition to the SAME persona line, not a new
  mechanism — WARN-only reminder, not a hard gate (no tool exists to block a Governor conversation turn).
- Deliverable (c): SPEC (not build) `.claude/skills/cisem-precompact-verify/SKILL.md` — the mechanical form of
  BP-0010's two-model-verify: given a target file, runs the Haiku (protocol-lens) + Sonnet (content-lens) paste-ready
  prompts already defined in BP-0010, then applies BP-0010's Opus-consolidation rubric (NEW-DRIFT vs
  ALREADY-RESOLVED classifier). This plan states its STEP structure only (mirrors BP-0010 §PASTE-READY blocks
  by-reference, I10); the skill file itself is a follow-on build.
- Stress test: n/a for (a)/(b) (prose strengthening, verified by reading the SSOT post-edit); (c) verified by a
  planted-test AFTER the skill is built (follow-on, disclosed, not claimed here).
- Pass criteria: persona SSOT line updated (readable, 1 source, I10); skill spec present in this plan with a clear
  build-pointer.
- **GATE 2→3:** Opus review + Governor sign-off.

**PHASE 3 — Output-Liveness Monitor (NEW SSOT: `dna/checks/output-liveness-monitor.md`)**
- Deliverable: a new SSOT document defining the monitor's contract — **WHAT it does:** re-verifies that a mechanism
  ALREADY marked wired/live (per DoD step 2 / I23) still actually fires, on a cadence, rather than trusting the
  once-verified claim forever. **Escalation bars** (per IBD-0024 item 4, GI-33/34): GREEN = re-verified alive within
  its cadence window; YELLOW = re-verification is OVERDUE past its cadence (reuses the 7-day TTL pattern, P3/RULE 5 —
  no new number); RED = a re-verification attempt was RUN and the mechanism did NOT fire (claimed-alive but dead).
  **2-attempt-then-hard-stop rule** (GI-34, sharpening vault-and-halt GI-23): on RED, one automated re-attempt is
  made; if it fails a SECOND time, the item is marked `BLOCKED`, vaulted into `dna/archive/archive-ledger.yaml`
  (new disposition value proposed: `LIVENESS-FAILED`, conditional field `reopen_conditions` required, same shape as
  existing dispositions — NOT a new vocabulary fork, an addition to the existing enum, flagged for Governor per the
  ledger's own "disposition vocabulary... promotion into the global enum is a HIGH-PRIORITY open question" note), and
  escalated to the Governor. **Seed coverage (Phase 1, MVP-first):** the monitor initially watches the mechanisms this
  session already built and can cheaply re-verify: `plan-audit.sh`'s own checks (re-run against a known-planted case),
  `pre-commit-blocks.sh`'s two BLOCKs (re-run against a known-planted case), `frontend/rebuild.sh`'s dead-link check
  (already runnable, generalized into the monitor's cadence rather than left standalone). Repo-wide coverage
  (every DECLARED/CONNECTED/LIVE node) is a LATER phase, not MVP.
- Stress test: plant a mechanism claimed CONNECTED whose check file is temporarily renamed (simulating "went dark") →
  first monitor pass → RED, 1st attempt; still renamed → 2nd attempt fails → `BLOCKED` + vaulted + escalation message
  produced; restore the file → next pass → GREEN, un-blocks.
- Pass criteria (numeric): all 3 seed mechanisms report GREEN on a clean pass; the planted "went dark" case reaches
  `BLOCKED` after exactly 2 failed attempts (not 1, not 3 — GI-34's exact number); vault entry is well-formed
  (id/title/what/disposition/why/tags/date/ruled_by/reopen_conditions, matching the ledger's existing required-fields
  contract, I10).
- **GATE 3→LIVE:** Opus review + Governor foundational decree (this is the highest-blast phase — repo-wide watching
  power — foundational decree, not a routine sign-off, matches the ARCH-00392 precedent for its own Phase 3).

## Tags + Statuses on every node this plan creates (ARCH-00401 Enh.2)
See Per-File Alignment Table below — every file this plan will touch/create carries its tag+status row; no child node
is created without one (this plan creates ONE new file, `output-liveness-monitor.md`; all others are enhancements to
already-tagged/already-statused existing files).

## Per-File Alignment Table (ARCH-00401 Enh.3)
| File | ID / Number | Schema Placement (SCHEMA-00001) | Tag (VOC-00001) | Status (VOC-00002) |
|---|---|---|---|---|
| `dna/planning/CISEM-ARCH-00406-completion-propagation-layer.md` (this file) | CISEM-ARCH-00406 (naming-registry.yaml ARCH next_seq 406→407, Sonnet-allocated per the one gate) | T-SYS, planning-governance layer | planning-domain, completion, propagation, ripl, tier-cycle, workflow-governance, output-liveness | Status: PROVISIONAL-ACTIVE / Planning Status: AWAITING-BUILDER-REVIEW |
| `dna/ssot-registry.yaml` (Phase 0 target — NOT edited by this drafting task) | REG-governed, no CISEM-{TYPE}-{SEQ} ID (existing) | T-SYS, consolidation-index layer | consolidation, ssot, mandatory (existing, unchanged) | present, unchanged status by this plan |
| `dna/learning-registry/root-insights.yaml` (Phase 1 target — NOT edited here) | no CISEM-{TYPE}-{SEQ} ID (existing) | T-SYS, learning-loop layer | ripl, learning-registry, mandatory (existing, unchanged) | present, unchanged status by this plan |
| `dna/corespines/CS-AI-PROFILING-001/persona-collaborator.md` (Phase 2a/2b target — NOT edited here) | no CISEM-{TYPE}-{SEQ} ID (existing, SSOT) | T-SYS, AI-Team/persona layer | persona, development-discipline, mandatory (existing, unchanged) | PROVISIONAL-ACTIVE (existing, unchanged by this plan) |
| `.claude/skills/cisem-precompact-verify/SKILL.md` (Phase 2c — spec'd here, NOT built) | no ID yet — governed by ARCH-00340 meta-protocol on build | T-SYS, AI-Team/skills layer | two-model-verify, skill, mandatory (planned) | NOT-YET-BUILT (honest — this plan only specs it) |
| `dna/checks/output-liveness-monitor.md` (Phase 3 — NEW, NOT created by this drafting task) | no ID yet — script/SSOT artifact, governed by ARCH-00320 §6 pattern (like `definition-of-done.md`) | T-SYS, enforcement/CAL layer | output-liveness, monitor, gate, mandatory (planned) | NOT-YET-BUILT (honest — this plan only specs it) |
| `dna/archive/archive-ledger.yaml` (Phase 3 — proposed new disposition value `LIVENESS-FAILED`, NOT added by this drafting task) | REG-governed, no ID (existing) | T-SYS, decision-archive layer | archive, disposition, mandatory (existing, unchanged; new enum value flagged for Governor) | PROVISIONAL-ACTIVE (existing, unchanged by this plan) |
| `dna/naming-registry.yaml` (already modified — ARCH next_seq 406→407, comment pre-registers this title) | REG type, self-exempt | T-SYS, naming-allocation layer | naming, numbering, mandatory | present, unchanged status |

## What DOES change (upon ratification — implementation is a LATER, separate step; NOTHING here executes now)
- `dna/ssot-registry.yaml` — `regenerates:` field per concept (Phase 0).
- `dna/checks/plan-audit.sh` — new `[PROPAGATE]` WARN check (Phase 0); new `[RIPL-BATCH]` WARN check (Phase 1).
- `dna/learning-registry/root-insights.yaml` — `batch_status` field per entry (Phase 1).
- `dna/corespines/CS-AI-PROFILING-001/persona-collaborator.md` — Tier-Cycle line strengthened to 8 steps; Workflow
  Governance made concrete (Phase 2a/2b).
- New: `.claude/skills/cisem-precompact-verify/SKILL.md` (Phase 2c, spec in this plan, build is a follow-on).
- New: `dna/checks/output-liveness-monitor.md` (Phase 3 SSOT) + eventual `[LIVENESS]` check in `plan-audit.sh` and/or
  a standalone `dna/checks/output-liveness-monitor.sh` runner (build is a follow-on, disclosed).
- `dna/archive/archive-ledger.yaml` — proposed new disposition `LIVENESS-FAILED` (Governor confirms the enum addition
  at Phase 3's foundational-decree gate; not added silently).

## What does NOT change
- No ratified invariant/decree/axiom is altered. `ssot-registry.yaml`'s existing `ssot`/`mirrors` fields are
  UNCHANGED (only `regenerates:` is added). No existing root-insights entry's `root_insight` prose is rewritten
  (append-only, matching `session-learning-index.yaml`/`quality-ledger.yaml` discipline).
- No scheduler/cron infrastructure is built (IBD-0013 §6's overnight-batch need is DISCLOSED as a dependency, not
  solved — Claude hooks are event-based, not time-based; a scheduler is out of this plan's reach without an OS-level
  mechanism, which is itself a separate, later decision).
- `frontend/rebuild.sh` is not forked — Phase 3 generalizes its PATTERN, reuses the SAME script as one of its 3 seed
  mechanisms.
- BP-0011's HTML-generation deliverables are untouched (flagged, not built, not silently absorbed).

## Definition-of-Done reference (ARCH-00401 Enh.5)
Per `dna/checks/definition-of-done.md` (cited, not re-derived): each phase's eventual implementation is DONE only when
(1) the deliverable exists; (2) a running mechanism enforces it OR carries an honest `NOT-YET-WIRED:<reason>` tag;
(3) it is propagated to all its stated homes; (4) CAL/hook surface is updated if it is an enforcement mechanism;
(5) any found-wrong→improved event along the way is RIPL-extracted into `root-insights.yaml`; (6) committed + pushed
(0 unpushed); (7) independently verified (I22), not asserted. "Produced" alone is never "done" for any phase here.

## Propagation Declaration (ARCH-00401 Enh.6)
This plan's OWN subject IS propagation — dogfooded: (1) Phase 0's `[PROPAGATE]` check becomes the MECHANISM other
future rule/nuance changes use to know their homes — by-reference (`ssot-registry.yaml`), never copied inline; (2) the
Tier-Cycle strengthening (Phase 2a) lives at ONE home (`persona-collaborator.md`) — CLAUDE.md §1.6 already references
it by-pointer (no edit needed there, I10 holds); (3) the Output-Liveness Monitor SSOT (Phase 3) is referenced by
`plan-audit.sh`/a future runner script, never duplicated into them; (4) `dna/queue/README.md`'s BP-0009 index line
gets a completion note pointing to this ARCH number once ratified (queue index stays current, not a second truth).

## Dependencies (blocks-on / unblocks-for)
- **Blocks-on:** nothing — this plan is free-standing; ARCH-00401 (Tier-Routing/Alignment-Table/DoD/Propagation
  requirements) and ARCH-00402 (the `[ROUTING]`/`[ALIGN]`/`[TAG-STATUS]` checks that will audit THIS plan itself) are
  both already RATIFIED, so this plan is built compliant with the current live protocol, not against a moving target.
- **Unblocks-for:** BP-0010's mechanical-enforcement need (closes once Phase 2c's skill is built); the sibling plan
  ARCH-00407 (tag/status mechanical enforcement) — both plans reference `ssot-registry.yaml`/`agent-profiles.yaml` but
  touch DISTINCT fields/checks, confirmed non-overlapping in the sibling plan's own Existing-First.
- **Explicitly parked, not built (disclosed per I2/I22):** (a) the overnight-scheduler infrastructure (IBD-0013 §6);
  (b) BP-0011's HTML-page-generation deliverables (items 2–4 of that build-prompt) — genuinely separate, needs its own
  plan; (c) repo-wide (not just 3-seed) Output-Liveness Monitor coverage — a LATER phase past Phase 3's MVP gate.

## Ratification Path
Stage 0 (iterative Haiku→Sonnet→Opus draft-review loop, per ARCH-00190 §3 as it exists TODAY, including the
Two-model-verify + NEW-DRIFT-vs-ALREADY-RESOLVED classifier and the SDP hook where a polarity surfaces) → Stage 1
(Opus soundness, cold default-refute, `cisem-opus-pe`) → Stage 1.5 (fable mentor — not invoked, no Governor
activation requested) → Stage 2 (Governor decree). Each PHASE additionally carries its own Gate (0→1→2→3→LIVE) —
implementation of a later phase cannot start before the earlier phase's Gate clears, per the ARCH-00392 phased-plan
precedent (reused pattern, A8).

## Self-Compliance (against ARCH-00230 checklist + ARCH-00190 §2, ARCH-00401-amended)
✓ Header (ID/Type/Status/Planning-Status/depth_level/tags/goal/corespine/pocket) ✓ Tier-Routing Declaration (honest,
including the disclosed no-live-Haiku-dispatch exception) ✓ Anti-Scatter Ordering ✓ The Rule (phased, numeric gates)
✓ Tags+Statuses on every created node ✓ Per-File Alignment Table (with Status column, populated) ✓ What DOES / does
NOT change ✓ Definition-of-Done reference ✓ Propagation Declaration ✓ Dependencies ✓ Ratification Path ✓
Independent Verifier named ✓ Existing-First stated (10-source search, disclosed) ✓ Path Rejection Declaration ✓
CAL reference ✓ Change log.

## Path Rejection Declaration (CLAUDE.md §2.8)
- ❌ Rejected: implementing any pillar in this same task — A4/I25 requires ratification BEFORE implementation; this
  artifact is the PLAN.
- ❌ Rejected: a new standalone propagation-index file — `ssot-registry.yaml` already IS the concept→home(s) map;
  forking a second one would violate A8/I19 the moment both existed.
- ❌ Rejected: a second RIPL registry — `root-insights.yaml` already exists, `PARTLY-WIRED`; this plan finishes
  wiring it, does not replace it.
- ❌ Rejected: building the overnight scheduler here — genuinely out of reach of Claude's event-based hooks without a
  separate OS-level decision; disclosed as a dependency, not silently promised.
- ❌ Rejected: inventing a new escalation-tier vocabulary for Output-Liveness — reused GREEN/YELLOW/RED + the 7-day
  TTL + the 2-attempt rule verbatim from the already-purified IBD-0024/GI-33/34 material (reuse-before-coin, GI-15).
- ❌ Rejected: folding BP-0011's HTML-generation scope in "for completeness" — would pad this plan past its stated
  subject; explicitly flagged as needing its own future plan instead.

## CAL reference (CISEM-ARCH-00390)
Pre-commit `[ZF]` + `[DOD]` + `[ROUTING]`/`[ALIGN]`/`[TAG-STATUS]` (ARCH-00402, already live) all run on this plan
file itself at commit time. Once implemented, `[PROPAGATE]`/`[RIPL-BATCH]` join the SAME pre-commit `plan-audit.sh`
invocation (no new hook, no new trigger point); the Output-Liveness Monitor (Phase 3) is the first mechanism in CISEM
whose OWN job is to re-run other CAL checks on a cadence — it sits ON TOP of CAL, not beside it (disclosed distinction
for Opus's Stage-1 review: this is a mechanism ABOUT other mechanisms' aliveness, not a new independent hook).

## Change log
- v0.1 — 2026-07-20 (Sonnet, STRUCTURING tier, dispatched by Opus via BP-0009): initial draft. 5-pillar phased plan
  (RIPL-v2, Propagation Network, Tier-Cycle+Workflow-Governance+precompact-verify-skill-spec, Output-Liveness Monitor)
  drafted against Opus's BP-0009 pillar spec + the Output-Liveness Monitor addition (grounded in the previously-purified
  IBD-0024/GI-33/34 material, discovered via Existing-First rather than invented). BP-0010's mechanical-enforcement
  fold-in honors RI-0002's existing routing. Per-File Alignment Table + all ARCH-00401/00402 mandatory sections
  populated per Core Seeds 1–3. NOT committed by Sonnet (Opus commits after judging, per dispatch instructions).
