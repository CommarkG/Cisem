# Weekly Evolution Engine — Consolidation Plan (5-Layer Cadence + Propagation-Gate Harness)
**Node ID:** CISEM-ARCH-00426 | **Type:** ARCH | **Status:** RATIFIED
**Planning Status:** COMPLETE — Governor RATIFIED 2026-07-26 ("I yriv ratify all 4"); Opus Stage-1 SOUND + GI-68 dual-review (Haiku Independent-Verifier PASSED 2026-07-26) + Brain concur | **depth_level:** L2 | **Position in schema:** T-SYS, planning-governance layer
**tags:** [planning, evolution-engine, ripl, propagation, harness]
**Goal:** Consolidate ARCH-00406 + ARCH-00417 + BP-0009 into ONE mechanically-enforced, platform-wide, auto-triggered
Weekly Evolution Engine — a 5-layer cadence+propagation-gate HARNESS that operationalizes CISEM's existing
self-improvement content on a calm weekly rhythm — measurable as: (1) a 3-source×5-layer coverage table shows every
mechanism of all three sources maps to a layer with nothing dropped; (2) each of the 5 layers cites a running (or
explicitly NOT-YET-WIRED) CISEM mechanism; (3) the engine's first run processes its OWN backlog item (self-referential
DoD, inherited from ARCH-00417's M3 pattern).
**Governing corespine:** CS-CREATION-001
**wisdom_considered:** GI-19 (CoreSpiral = Governor authorship only, untouched by this plan), GI-51 (zero external
MCP, WIRED — grounds L5's git-reporting-only rule + Core Seed 2), RI-0002 (single-model review risk — grounds Core
Seed 4's tier-separation), RI-0025 (consensus-laundering/paraphrase-trust — applied via direct-read citations
throughout Existing-First), the duplicate-`RI-0029` finding in `agent-findings.md` (grounds L2's dedup mandate).
**Independent Verifier:** `cisem-haiku` (cold, protocol-lens; distinct from author `cisem-sonnet`).
**Size-gate exception (§3.6, documented):** this file exceeds the 200-line gate (6 gated phases + a 3-source×5-layer
coverage table + 5 verbatim Core Seeds + all ARCH-00401 mandatory sections). Same documented-exception precedent as
ARCH-00190/ARCH-00406/ARCH-00417 — a consolidation plan of this scope cannot compress under 200 lines without
cutting substance; flagged explicitly, not silently exceeded.
**Wiring-state note (terminology, avoids a silent fork of the existing axis, A8/I10):** this plan uses
DEFINED / WIRED / REACHABLE / CURRENT as per-layer informal shorthand, mapped onto the ALREADY-governed
DECLARED→CONNECTED→ACCESSIBLE→LIVE axis (`CISEM-ARCH-00011 §4`, `ssot-registry.yaml wiring_states`): DEFINED≈DECLARED,
REACHABLE≈CONNECTED/ACCESSIBLE, WIRED≈LIVE, CURRENT=re-verified-alive-on-cadence (the Output-Liveness pattern, ARCH-00406
Phase 3). Not a new vocabulary — a reading aid over the existing one.

## Core Seeds (from Opus dispatch, 2026-07-26 — immutable, executed verbatim, I13; quoted here per Principle 14)
```
[[CORE-SEED 1 | MUST: the WEE is the CADENCE+PROPAGATION-GATE HARNESS that operationalizes CISEM's EXISTING
self-improvement content (RQC/ARCH-00320, the RIPL vault, ARCH-00406/00417); it does NOT create a second/parallel
evolution system and does NOT modify CoreSpiral (GI-19, Governor authorship only). The plan MUST contain a
3-source×5-layer SOURCE-COVERAGE TABLE (rows = every mechanism of ARCH-00406, ARCH-00417, BP-0009; cols = the 5
layers) proving nothing is dropped in the merge. | WHY: A8 one-source — a parallel evolution system forks
governance and re-creates the drift CISEM exists to kill. | VERIFY: does a coverage table exist, and does every
source mechanism land in exactly one layer (or an explicit "intentionally-dropped + why")? | APPLIES_TO: the whole
plan + any future WEE build.]]
[[CORE-SEED 2 | MUST: the scheduled auto-trigger (L5) auto-SCANS and auto-QUEUES ONLY, emitting a git-committed
REPORT / queue-update; it NEVER writes the governance root, NEVER wires a prevention, NEVER ratifies, NEVER runs an
MCP/email surface, NEVER becomes a second writing tab. ALL governance WIRING flows through the ONE writing tab
(Opus) at the next human session, gated by A4/A11 + Governor ratification. | WHY: CDS's autonomous-commit +
Gmail-MCP model is a second-writer + external-surface risk (A12); CISEM reconciles weekly autonomy with §1.7 by
splitting autonomous-SCAN from gated-WIRING. | VERIFY: does L5's spec forbid governance writes + MCP + second-writer,
and route all wiring through the single tab under ratification? | APPLIES_TO: L5 + any RemoteTrigger wiring.]]
[[CORE-SEED 3 | MUST: every layer is verified against CISEM's OWN repo with a running mechanism cited (Principle
18C wire-don't-document); NOTHING is inherited from CDS as "proven" — CDS is RAW-EXTERNAL, used-to-max/trusted-to-
zero. Any layer without a running mechanism is labeled NOT-YET-WIRED:<reason>. | WHY: A12 external wall + CDS's own
admission that its architecture is "ahead of its enforcement code." | VERIFY: does each layer cite a CISEM
mechanism (file+how-it-runs) or an honest NOT-YET-WIRED, never a CDS claim as evidence? | APPLIES_TO: every layer
spec + the DoD.]]
[[CORE-SEED 4 | MUST: L2 dedups every finding before entry (against existing queue entries AND the RIPL vault —
the real duplicate-id incident); L4 verification preserves tier-separation (Haiku mechanical-verify → Sonnet apply
→ Opus judge), never solo-Opus reviewing its own subagents. | WHY: duplicate findings inflate the queue and
self-review defeats the cross-check that catches Opus's blind spots (RI-0002). | VERIFY: does L2 have a dedup step
and does L4 assign its verification lenses to DISTINCT tiers? | APPLIES_TO: L2 + L4.]]
[[CORE-SEED 5 | MUST: the finding-priority formula is exactly `(value × urgency − risk) / (effort + verification_cost)
× trust_tier_bonus`; the weekly rate-limit is 3-5 findings/session; the escalation threshold is 2 un-processed
sessions. These are named numeric setpoints, not "highest-priority-first." | WHY: an unquantified engine is
unbuildable and silently drifts (BP-0009 soft-deadline ignored). | VERIFY: do the formula + both numeric setpoints
appear verbatim in the plan? | APPLIES_TO: L2 scoring + L3 rate-limit/escalation.]]
```

## Existing-First (§3.2b) — performed by Opus's Haiku gather, NOT re-run here (cited, per dispatch instruction)
1. No "Weekly Evolution Engine" node exists — the concept was NAMED in `CISEM-WITNESS-00003` COMPACT STATE
   2026-07-26 (line 68/69) but never registered as a node.
2. Three sources CONSOLIDATED (all LIVE/PROVISIONAL-ACTIVE, overlapping): `CISEM-ARCH-00406` (Status
   PROVISIONAL-ACTIVE; Phase 0 CLOSED = `[PROPAGATE]` check LIVE; Phase 1 RIPL-v2 NAMED-not-greenlit, SUBSUMED per
   ARCH-00417 Core Seed H; Phases 2-5 gate individually); `CISEM-ARCH-00417` (Status PROVISIONAL-ACTIVE;
   COMMENTS-RECEIVED post-GI-68 — v0.4 PARKED on an unresolved M1-substrate core question, resume spec drafted, not
   yet re-ratified); `dna/queue/BP-0009-completion-propagation-layer.md` (QUEUED, the cycle-order that produced
   ARCH-00406 — never itself re-executed, its 4 pillars ARE ARCH-00406's Phases 0-2).
3. Related-but-SEPARATE (referenced, not merged): RQC (`ARCH-00320 §6`, quality-audit content); the RIPL vault
   (`dna/learning-registry/root-insights.yaml`); CoreSpiral (GI-19 — Governor authorship only, untouched); the
   `[AGENT-PASS]` freshness-gate (`dna/checks/agent-pass-gate.sh`, proven 7-day-TTL WARN pattern, REUSED as L1's
   precedent, not forked); `dna/checks/park-review-fresh.sh` (same freshness-stamp idiom, N=14 days, REUSED pattern).
4. CDS reference is QUARANTINED RAW-EXTERNAL (A12 wall):
   `dna/external-review/CDS-SELF-ASSESSMENT-2026-07-26-RAW-EXTERNAL.md` — a reference model for the shape of a
   "weekly evolution loop," NOT a proven implementation (Core Seed 3).
5. `.claude/hooks/session-start.sh` — direct-read confirms it ALREADY injects: RESUME path, persona pointer,
   inherited preventions (grep), SEALED/RATIFIED list (grep `status: RATIFIED`), the operating process (§1.8), and
   the un-wired GI/RI backlog (grep `DECREED-NOT-YET-WIRED|PARKED|...`). **This IS L1's real, LIVE mechanism** —
   confirmed by reading the file, not assumed (RI-0025 discipline).
6. `dna/learning-registry/agent-findings.md` (lines 722-731) — a REAL, disk-verified duplicate-id incident: `RI-0029`
   appears TWICE in `root-insights.yaml` with DIFFERENT content ("CHECK-DESIGN-SPEC PRECISION" 2026-07-24 vs "CORE
   OPERATING KNOWLEDGE LEFT IN AN INDEX DOES NOT INHERIT" later), already flagged `DISTILL-PENDING` there — a sharper,
   verified citation for Core Seed 4's dedup mandate than the dispatch's own approximate framing; **used here in
   place of** the dispatch's "RI-0029 duplicate-id incident" phrasing, disclosed (not silently substituted).
7. `dna/governor-insights.yaml` GI-51 — confirmed WIRED-2026-07-25: zero external MCP servers, `.mcp.json` empty;
   the no-MCP posture for L5/git-reporting cites this directly (not re-derived).
8. `dna/checks/definition-of-done.md` (7-step DoD) + `plan-audit.sh` check inventory (grepped: `[PROPAGATE]` LIVE,
   `[RIPL-BATCH]` NAMED-not-built, `[REVIEW-GATE]` NAMED-not-built, `[FRESHNESS]` NAMED-not-built) — confirms exactly
   which mechanisms L2-L4 ENHANCE vs. which remain to build.
**VERDICT:** nothing here forks a parallel system. L1-L4 each ENHANCE an already-named or already-live CISEM
mechanism; L5 is the one genuinely NEW capability (none of the 3 sources named a scheduled auto-trigger).

## Pocket Declaration
- **reasoning_scope:** produce ONE consolidation plan mapping ARCH-00406 + ARCH-00417 + BP-0009 onto 5 layers +
  4 cross-cutting features; this plan document only — no mechanism is built in this task (Core Seed per ARCH-00417
  Seed-G precedent, A4/A11).
- **inherited_constraints:** A1-A12; D1-D6; I7 (no truth-fields); I10/I19 (enhance, never fork); I25 (a plan
  authorizes, does not implement); §1.7 git-race discipline; the 5 Core Seeds above verbatim.
- **output_contract:** this plan document + the ONE naming-gate self-registration (`naming-registry.yaml` ARCH
  426→427) only.
- **ai_cannot:** self-ratify; stamp any Status/RATIFIED field; build any layer's mechanism in this drafting task;
  confirm whether a Claude-Code "RemoteTrigger" primitive is actually available in this environment (L5's platform
  dependency is DISCLOSED, not verified — flagged in Self-Review for Opus).
- **recorded_at:** 2026-07-26

## Executive Summary
CISEM has THREE partially-overlapping, none-fully-wired self-improvement plans (ARCH-00406's 6 phases, ARCH-00417's
stalled M1-substrate design, and BP-0009's original 4-pillar dispatch). None closes the loop end-to-end; ARCH-00417
is PARKED on a core design question, ARCH-00406's Phase 1 is SUBSUMED-but-not-built, and BP-0009 was never
re-executed as a mechanism (only as the plan-authoring cycle that produced ARCH-00406). This plan does NOT propose a
4th system — it is the HARNESS: 5 layers (SCAN → QUEUE → BATCH → GATE → AUTO-TRIGGER) that assemble the already-named
parts into one calm, mechanically-enforced weekly cadence, plus 4 cross-cutting features (git-reporting, single-writer
guard, wiring-health metric, one-time seed-harvest). L3's rate-limit uses SIMPLE, Governor-set numeric constants
(Core Seed 5) rather than waiting on ARCH-00417's stalled M1-measured-capacity resolution — a disclosed design choice
(see Dependencies) that lets the harness proceed without blocking on a parked plan.

## Tier-Routing Declaration (CLAUDE.md §3.0)
- **Drafting (this task) → Sonnet**, single-context; Existing-First search performed by Opus's Haiku gather
  (cited above, not re-run — per dispatch instruction).
- **Independent Verifier → `cisem-haiku`, cold, protocol-compliance lens** — before Stage 1.
- **Stage 1 (soundness) → `cisem-opus-pe`.** **Stage 1.5 → not invoked.** **Stage 2 → Governor.**
- **Building each layer (post-ratification) → Sonnet**, per the Phase Rule below; **L4's tier-separation
  verification itself → Haiku (mechanical) → Sonnet (apply) → Opus (judge)**, per Core Seed 4.

## Anti-Scatter Ordering (CLAUDE.md §2 Principle 16)
L1 (SCAN) is most central — nothing downstream has data without it, and it is ALREADY LIVE (session-start.sh), so
it is the cheapest, lowest-blast phase to enhance first. L2 (QUEUE) next — turns raw scan output into durable,
deduped, scored entries. L3 (BATCH) — the calm-cadence actuator that drains the queue; depends on L2's scoring. L4
(GATE) — audits what L3 resolves; must exist before anything is called "resolved." L5 (AUTO-TRIGGER) — highest
scope, most novel, sequenced LAST so it has a real L1-L4 harness to invoke, not a stub (same "have something real
to watch" logic as ARCH-00406 Phase 3). Cross-cutting features (git-reporting, single-writer guard, wiring-health
metric, seed-harvest) are threaded through their owning layer, not built as a separate phase.

## The Rule (phases — each BLOCKED until the prior gate passes; implementation is a LATER step, per the Pocket's ai_cannot)

**PHASE 1 — L1 SCAN (ENHANCES `.claude/hooks/session-start.sh`, LIVE)**
- Deliverable: add two new echoed lines to the existing injection — (a) the freshness-gate STATES of
  `agent-pass-gate.sh` + `park-review-fresh.sh` (currently pre-commit-only WARN output, invisible at session start);
  (b) the wiring-health metric (see cross-cutting below). No new hook, no new trigger point (CAL-consistent).
- Wiring-state: REACHABLE→WIRED (the hook itself is LIVE; this phase is a small, additive echo).
- Stress test: fresh session start shows both new lines; a stale `agent-pass.stamp` (>7d) surfaces in the injection
  without running `plan-audit.sh` manually.
- **GATE 1→2:** Opus review + Governor sign-off.

**PHASE 2 — L2 QUEUE (ENHANCES `dna/learning-registry/root-insights.yaml`, the RIPL vault — realizes ARCH-00406
Phase 1's NAMED-not-built `batch_status` field)**
- Deliverable: (a) each RI entry gains `pe_score` (Core Seed 5 formula), `propagation_required: bool`,
  `propagation_verified: bool`, alongside the already-named `batch_status`; (b) NEW `dna/checks/ripl-dedup-check.sh`
  — before a new RI-NNNN id is assigned, greps `root-insights.yaml` + `agent-findings.md` for topic/keyword overlap
  and WARNs on a likely duplicate (the mechanical fix for the real RI-0029-twice incident, item 6 above).
- Wiring-state: DEFINED→WIRED (new fields + new check; genuinely new artifact per Existing-First verdict).
- Stress test: plant a duplicate-topic entry → `[RIPL-DEDUP]` fires; a genuinely distinct entry → silent.
- **GATE 2→3:** Opus review + Governor sign-off.

**PHASE 3 — L3 BATCH (ENHANCES the NAMED-not-built `[RIPL-BATCH]` check, ARCH-00406 Phase 1; absorbs ARCH-00417's
drain intent WITHOUT blocking on ARCH-00417's ratification — see Dependencies)**
- Deliverable: `[RIPL-BATCH]` in `plan-audit.sh` drains `pe_score`-ordered, `ACCUMULATING` entries, RATE-LIMITED to
  **3-5 findings per weekly session** (Core Seed 5, grounded in CDS's observed 6-7/cycle, halved for calm cadence —
  disclosed as a CDS-INSPIRED number, not a CDS-PROVEN mechanism, Core Seed 3); an un-drained item ESCALATES
  (WARN→BLOCK per the same escalation shape as S1) after **2 un-processed weekly sessions** (Core Seed 5 — tighter
  than the 7/14-day calendar TTLs used elsewhere, because this is a SESSION-count, not calendar-day, axis; disclosed
  as a distinct axis, not a silent redefinition of the 7-day/14-day patterns).
- Wiring-state: DEFINED (named in ARCH-00406, not built) → this phase is its FIRST real build, using Core Seed 5's
  fixed constants in place of ARCH-00417's stalled M1 measured-capacity model.
- Stress test: plant 6 `ACCUMULATING` entries → exactly 3-5 drain per simulated session; plant an item un-drained
  for 2 sessions → escalation fires.
- **GATE 3→4:** Opus review + Governor sign-off.

**PHASE 4 — L4 GATE (EXTENDS the LIVE `[PROPAGATE]` check + the NAMED-not-built `[REVIEW-GATE]`, ARCH-00406 Phase 5)**
- Deliverable: a finding is `propagation_verified: true` ONLY when it propagated to ALL FOUR Principle-17 surfaces —
  planning protocol (`ARCH-00190`), implementation discipline, checking agents (`cisem-haiku`/`cisem-sonnet`), skills
  (`cisem-create`/`cisem-plan`) — extending `[PROPAGATE]`'s generic mirrors-list reminder into this 4-surface
  specific check. Verification preserves TIER-SEPARATION (Core Seed 4): Haiku confirms mechanical presence on each
  surface → Sonnet applies any missing propagation → Opus judges the finding CLOSED. Never solo-Opus.
- Wiring-state: REACHABLE (`[PROPAGATE]` LIVE, generic) → WIRED is this phase's target (surface-specific + gated).
- Stress test: plant a finding propagated to 3/4 surfaces → GATE blocks close; propagate the 4th → clears; run
  against a real historical Principle-17 finding as a negative control (ARCH-00406 Phase 5 precedent pattern).
- **GATE 4→5:** Opus review + Governor sign-off.

**PHASE 5 — L5 AUTO-TRIGGER (NEW — no prior CISEM precedent; the layer none of the 3 sources had)**
- Deliverable: a scheduled weekly RemoteTrigger-class run that executes L1-L2 (scan+queue) ONLY, self-contained
  (no local files/env dependency per the cloud-agent constraint), emitting a git-committed report to
  `dna/learning-registry/wee-scan-<date>.md` (new artifact per run, same naming pattern as
  `session-harvest-<date>.md`, reused not invented). Per Core Seed 2: NEVER writes governance root, NEVER wires a
  prevention, NEVER ratifies, NEVER runs email/MCP, NEVER becomes a 2nd writing tab — L3/L4 (batch+gate) STAY
  human-session-gated at the ONE writing tab.
- Wiring-state: **NOT-YET-WIRED:<the CISEM environment's actual RemoteTrigger/scheduled-agent primitive has not
  been confirmed to exist in this deployment — disclosed honestly per Core Seed 3, flagged in Self-Review>**.
- Cross-cutting NEW check: `dna/checks/wee-write-scope.sh` (WARN-only) — verifies any L5-triggered commit touches
  ONLY `dna/learning-registry/wee-scan-*.md` + queue-update paths, never a governance-root file.
- Stress test (once the primitive is confirmed): scheduled run produces a report, touches no governance file;
  `[WEE-WRITE-SCOPE]` clears; a planted governance-file touch in a simulated L5 commit → check fires.
- **GATE 5→6:** Opus review + Governor sign-off (also the point at which the RemoteTrigger primitive question is
  resolved — cannot go LIVE on an unconfirmed platform capability).

**PHASE 6 (FINAL) — Self-Referential Seed-Harvest (one-time; mirrors ARCH-00417's M3 pattern, A8-reused not
reinvented)**
- Deliverable: the engine's FIRST real run processes the EXISTING un-wired RI/GI backlog (the very list
  `session-start.sh` already prints) as its own opening L2/L3 batch — draining CISEM's OWN accumulated debt, not a
  synthetic test case. Evidence: commit + a `dna/reviews/`-shaped note (ARCH-00406 Phase 5 artifact shape, reused),
  disk-verifiable.
- Wiring-state: CURRENT (re-verified alive at the moment of this run — the Output-Liveness pattern applied to the
  engine's OWN first firing).
- **GATE 6→LIVE:** Opus review + Governor sign-off.

## Cross-Cutting Features (threaded through their owning phase above, not a separate phase)
- **git-reporting (NO email-MCP):** every WEE output is a git-committed file (report/queue-update); L5's spec
  explicitly forbids an email/MCP surface — cites GI-51 (WIRED-2026-07-25, zero external MCP) + A12 directly, not
  re-derived (Existing-First item 7).
- **single-writer guard (§1.7):** enforced structurally by Core Seed 2 (L5 scan+queue only) + the new
  `[WEE-WRITE-SCOPE]` check (Phase 5) — the mechanical backstop, not prose-only.
- **wiring-health metric:** `preventions-active / preventions-total`, computed from the SAME
  `session-learning-index.yaml hardwired_as`/`status` fields `session-start.sh` already greps (Phase 1 deliverable
  (b)) — a ratio, not a new data source.
- **one-time seed-harvest:** Phase 6 above — the engine's DoD criterion 3 made concrete.

## 3-Source × 5-Layer Coverage Table (Core Seed 1 — every source mechanism lands in exactly one layer, or is
explicitly dropped-with-reason; "=" rows note where BP-0009's pillars and ARCH-00406's phases are the SAME
mechanism, not double-counted)
| # | Source | Mechanism | L1 | L2 | L3 | L4 | L5 | Notes |
|---|---|---|---|---|---|---|---|---|
| 1 | ARCH-00406 Ph.0 | Propagation Network (`ssot-registry.yaml` regenerates: + `[PROPAGATE]`, LIVE) | | | | X | | feeds L4's 4-surface extension |
| 2 | ARCH-00406 Ph.1 / BP-0009 Pillar 1 | RIPL-v2 weekly-batch (`batch_status`, `[RIPL-BATCH]`) | | X | X | | | SUBSUMED per ARCH-00417 Seed H; = row 2b |
| 2b | BP-0009 Pillar 1 | (same mechanism as row 2 — BP-0009 dispatched the plan that became ARCH-00406 Ph.1) | | X | X | | | not double-counted |
| 3 | ARCH-00406 Ph.2a / BP-0009 Pillar 3 | Tier-Cycle 8-step | | | X | X | | feeds L4's tier-separation verification |
| 4 | ARCH-00406 Ph.2b / BP-0009 Pillar 4 | Workflow Governance (permission+token-estimate) | | | | | X | governs any L5 launch |
| 5 | ARCH-00406 Ph.2c | `/cisem-precompact-verify` skill spec (two-model review) | | | | X | | mechanism L4 gates the trace of |
| 6 | ARCH-00406 Ph.3 | Output-Liveness Monitor (GREEN/YELLOW/RED, 2-attempt-hard-stop) | X | | | | | re-verification feeds the scan |
| 7 | ARCH-00406 Ph.4 | PACK-CONTEXT (`[BOOTSTRAP]`, session-start.sh enhancement) | X | | | | | literally L1's home |
| 8 | ARCH-00406 Ph.5 | HAIKU-REVIEW-ARTIFACT-AS-GATE (`[REVIEW-GATE]`) | | | | X | | L4's tier-separation gate |
| 9 | ARCH-00417 | M1 capacity setpoint (measured items-wired/cycle) | | | (superseded) | | | see Dependencies — WEE uses Core Seed 5 constants instead, non-blocking |
| 10 | ARCH-00417 | M2 classification (a/b/c) | | X | | | | feeds `pe_score`/`propagation_required` |
| 11 | ARCH-00417 | S1 freshness-check.sh | X | | X | | | scan surfaces staleness; batch feels the pressure |
| 12 | ARCH-00417 | S2 drain actuator (SUBSUME spec-of-record) | | | X | | | this IS L3's batch drain |
| 13 | ARCH-00417 | S3 DOD/I22 extension (observable-value) | | | | X | | gate verification standard |
| 14 | ARCH-00417 | S4 Wiring-State pass | | X | | X | | queue entries carry state; gate checks state=LIVE |
| 15 | ARCH-00417 | M3 self-test (hand-run processing own row) | | | | | | = Phase 6 (Self-Referential Seed-Harvest) |
| 16 | ARCH-00417 | M4 time-boxed build exemption | | | X | | | rate-limit exemption clause pattern reused |
| 17 | ARCH-00417 | **S5 production-throttle** | — | — | — | — | — | **INTENTIONALLY DROPPED** (Core Seed A of ARCH-00417 itself: folded into S1/S2/M1; a 5th mechanism is redundant) |
| 18 | BP-0009 | Haiku-prep DNA-review step | | | X | | | folded into Tier-Cycle (row 3) |

**Verdict:** every real mechanism across all three sources maps to ≥1 layer or Phase 6; the ONE intentional drop
(S5) carries its source's own stated reason, not a silent omission.

## Tags + Statuses on every node this plan creates (ARCH-00401 Enh.2)
See Per-File Alignment Table. Genuinely NEW artifacts: `dna/checks/ripl-dedup-check.sh` (Phase 2),
`dna/checks/wee-write-scope.sh` (Phase 5), `dna/learning-registry/wee-scan-<date>.md` (Phase 5, per-run) — all
`NOT-YET-BUILT` honestly. All other touched files are enhancements to already-tagged/statused existing files.

## Per-File Alignment Table (ARCH-00401 Enh.3)
| File | ID / Number | Schema Placement | Tag | Status |
|---|---|---|---|---|
| `dna/planning/CISEM-ARCH-00426-weekly-evolution-engine.md` (this file) | CISEM-ARCH-00426 (naming-registry.yaml 426→427, ONE gate) | T-SYS, planning-governance | planning, evolution-engine, ripl, propagation, harness | DRAFT / AWAITING-BUILDER-REVIEW |
| `.claude/hooks/session-start.sh` (Phase 1 target, not edited here) | no ID — CAL hook, ARCH-00390 | T-SYS, enforcement/CAL | cal, hook, bootstrap | present, unchanged by this plan |
| `dna/learning-registry/root-insights.yaml` (Phase 2 target, not edited here) | no ID — existing RIPL vault | T-SYS, learning-loop | ripl, learning-registry | present, unchanged by this plan |
| `dna/checks/ripl-dedup-check.sh` (Phase 2, not created) | no ID — script, ARCH-00320 §6 | T-SYS, enforcement/CAL | dedup, ripl, gate | NOT-YET-BUILT |
| `dna/checks/plan-audit.sh` (Phases 1/3/4/5 target, not edited here) | no ID — existing | T-SYS, enforcement/CAL | gate, audit | present, unchanged |
| `dna/checks/wee-write-scope.sh` (Phase 5, not created) | no ID — script, ARCH-00320 §6 | T-SYS, enforcement/CAL | single-writer, guard, gate | NOT-YET-BUILT |
| `dna/learning-registry/wee-scan-<date>.md` (Phase 5, per-run, not created) | no ID — convention, reuses session-harvest naming | T-SYS, learning-loop | wee-scan, report | NOT-YET-BUILT |
| `CISEM-ARCH-00406-...md` (cross-dependency, not edited here) | CISEM-ARCH-00406 (existing) | T-SYS, planning-governance | planning-domain, completion | PROVISIONAL-ACTIVE, unchanged |
| `CISEM-ARCH-00417-...md` (cross-dependency, not edited here) | CISEM-ARCH-00417 (existing) | T-SYS, planning-governance | harvest-loop, completion-controller | PROVISIONAL-ACTIVE, unchanged |
| `dna/naming-registry.yaml` (modified — ARCH 426→427) | REG type, self-exempt | T-SYS, naming-allocation | naming, numbering | present, unchanged status |

## What DOES change (upon ratification — implementation is a LATER, separate step; NOTHING here executes now)
- `.claude/hooks/session-start.sh` — two new echoed lines (freshness-gate states + wiring-health metric, Phase 1).
- `dna/learning-registry/root-insights.yaml` — new fields per entry (`pe_score`, `propagation_required`,
  `propagation_verified`, alongside the already-named `batch_status`, Phase 2).
- New: `dna/checks/ripl-dedup-check.sh` (Phase 2).
- `dna/checks/plan-audit.sh` — builds the NAMED-not-built `[RIPL-BATCH]` (Phase 3) and `[REVIEW-GATE]`/extended
  `[PROPAGATE]` (Phase 4) checks.
- `CISEM-ARCH-00406` Phase 1 header — updated to note WEE Phase 3 as its concrete build (pointer, A8, no duplicate).
- New: `dna/checks/wee-write-scope.sh` + the L5 RemoteTrigger config (Phase 5, pending platform-primitive
  confirmation).
- `dna/naming-registry.yaml` — ARCH next_seq 426→427 (this drafting task).

## What does NOT change
- **CoreSpiral is NOT touched** — GI-19 (Governor authorship only) is respected; the WEE operationalizes CADENCE
  and PROPAGATION, never the CoreSpiral method itself.
- No ratified invariant/axiom/decree is altered. `ARCH-00406`'s and `ARCH-00417`'s own gate chains are UNCHANGED —
  this plan only builds Phase 1 (RIPL-batch) mechanisms they already named, it does not re-ratify them.
- **No MCP / email surface is added** — L5 is git-report-only (Core Seed 2 + GI-51).
- **No parallel evolution system is created** — every mechanism in the coverage table is an ENHANCE of an existing
  named home; the ONE new capability (L5) is disclosed as new, not dressed as a consolidation.
- ARCH-00417's M1 measured-capacity design is NOT deleted or overridden — it remains a possible FUTURE refinement
  of L3's rate-limit once ARCH-00417 itself is resolved and ratified (see Dependencies); WEE does not silently
  replace it, it proceeds independently meanwhile.

## Definition-of-Done reference (ARCH-00401 Enh.5)
Per `dna/checks/definition-of-done.md` (cited, not re-derived): each phase's eventual implementation is DONE only
when (1) the deliverable exists; (2) a running mechanism enforces it OR carries an honest
`NOT-YET-WIRED:<reason>` tag (L5 already carries one); (3) it is propagated to all its stated homes; (4) CAL/hook
surface is updated if it is an enforcement mechanism; (5) any found-wrong→improved event is RIPL-extracted; (6)
committed + pushed; (7) independently verified (I22). The plan's own measurable goal criteria: (a) the coverage
table above proves nothing dropped; (b) each layer cites a running-or-NOT-YET-WIRED CISEM mechanism (done, this
plan); (c) Phase 6 is the self-referential first-run proof.

## Propagation Declaration (ARCH-00401 Enh.6)
(1) The coverage table is the ONE map of source→layer; future edits to ARCH-00406/00417 reference it, never
duplicate it. (2) L2's `pe_score`/`propagation_required` fields live at ONE home (`root-insights.yaml`) —
`ssot-registry.yaml`'s `learning_outcomes` entry already lists it as the RIPL SSOT; no edit needed there (I10). (3)
L4's 4-surface check is the CONCRETE MECHANISM for Principle 17 (PREVENTION-MUST-PROPAGATE) — referenced by pointer
from CLAUDE.md, not restated. (4) `dna/queue/README.md`'s BP-0009 index line gets a completion note pointing to
this ARCH number once ratified.

## Dependencies (blocks-on / unblocks-for)
- **Blocks-on:** nothing structurally — Phases 1-2 (L1/L2) can build against ARCH-00406's already-LIVE/NAMED
  surfaces immediately. **Disclosed design choice (flagged for Opus judgment):** Phase 3 (L3) does **NOT** block on
  ARCH-00417 reaching ratification — it uses Core Seed 5's fixed constants (3-5/session, 2-session escalation)
  as its OWN standalone setpoint rather than waiting on ARCH-00417's stalled M1-measured-capacity design question.
  Once ARCH-00417 itself resolves + ratifies, its M1 mechanism MAY later refine L3's constant into a measured,
  dynamic setpoint — a non-blocking future enhancement, not a precondition (SWIFT-the-safe-significant / park-the-
  deep-dive, CLAUDE.md §2.7).
- **Fulfills:** ARCH-00406 Phase 1's NAMED-not-built `[RIPL-BATCH]` (this plan's Phase 3 builds it); ARCH-00406
  Phase 5's NAMED-not-built `[REVIEW-GATE]` (this plan's Phase 4 builds it); ARCH-00417's Core Seed H SUBSUME intent
  (this plan's Phase 3 is where the drain concretely lands, alongside — not replacing — ARCH-00417's own eventual
  ratification).
- **Unblocks-for:** a real, running weekly cadence for the entire existing un-wired RI/GI backlog
  (`session-start.sh` already surfaces it every session; Phase 6 drains it for real).
- **Explicitly parked, not built (disclosed):** confirming whether a RemoteTrigger/scheduled-agent primitive exists
  in this CISEM deployment (Phase 5 precondition); ARCH-00417's own M1-substrate resolution (separate, parked plan).

## Ratification Path
Stage 0 (iterative Haiku→Sonnet→Opus draft-review, ARCH-00190 §3) → Stage 1 (`cisem-opus-pe`, cold soundness) →
Stage 1.5 (fable, not invoked) → Stage 2 (Governor decree). Each PHASE additionally carries its own Gate
(1→2→3→4→5→6→LIVE) — implementation of a later phase cannot start before the earlier phase's Gate clears (reused
pattern, A8, per the ARCH-00406/00417 phased-plan precedent).

## Self-Compliance (against ARCH-00230 checklist + ARCH-00190 §2, ARCH-00401-amended)
✓ Header ✓ Core Seeds (5, verbatim) ✓ Existing-First (cited, not re-run, per dispatch) ✓ Pocket Declaration
✓ Tier-Routing Declaration ✓ Anti-Scatter Ordering ✓ The Rule (6 gated phases) ✓ Cross-Cutting Features
✓ 3-Source×5-Layer Coverage Table ✓ Tags+Statuses ✓ Per-File Alignment Table ✓ What DOES/does NOT change
✓ Definition-of-Done reference ✓ Propagation Declaration ✓ Dependencies ✓ Ratification Path ✓ Independent
Verifier named ✓ Path Rejection Declaration ✓ CAL reference ✓ Change log.

## Path Rejection Declaration (CLAUDE.md §2.8)
- ❌ Rejected: building any layer's mechanism in this same task — A4/I25 requires ratification before implementation.
- ❌ Rejected: a 4th parallel evolution system — every layer ENHANCES a named ARCH-00406/00417/BP-0009 mechanism
  (Core Seed 1); the coverage table is the proof.
- ❌ Rejected: touching CoreSpiral — GI-19 reserves it to Governor authorship; WEE operationalizes cadence only.
- ❌ Rejected: an email/MCP reporting surface for L5 — GI-51 (WIRED, zero external MCP) + Core Seed 2 forbid it;
  git-committed reports only.
- ❌ Rejected: L5 writing governance-root files or ratifying anything — Core Seed 2 confines it to scan+queue;
  `[WEE-WRITE-SCOPE]` is the mechanical backstop.
- ❌ Rejected: blocking Phase 3 on ARCH-00417's stalled M1-substrate resolution — Core Seed 5's fixed constants let
  L3 proceed now; M1 becomes a non-blocking future refinement (disclosed above, flagged for Opus judgment).
- ❌ Rejected: citing CDS as proven evidence for any layer — A12/Core Seed 3; CDS is quarantined RAW-EXTERNAL,
  used only as a reference shape (e.g. the 6-7/cycle number that grounded, halved, Core Seed 5's constant).
- ❌ Rejected: solo-Opus verification of L4's propagation gate — Core Seed 4 requires Haiku→Sonnet→Opus, distinct
  tiers, never Opus reviewing its own subagent's work alone.
- ❌ Rejected: claiming L5 is WIRED/LIVE without confirming the RemoteTrigger primitive exists — honestly labeled
  `NOT-YET-WIRED:<reason>` (Core Seed 3), not asserted.

## CAL reference (CISEM-ARCH-00390)
Pre-commit `[ZF]` + `[DOD]` + `[ROUTING]`/`[ALIGN]`/`[TAG-STATUS]`/`[POCKET]`/`[PROPAGATE]` (all LIVE) run on this
plan file itself at commit time. Once implemented, Phase 2's `[RIPL-DEDUP]`, Phase 3's `[RIPL-BATCH]`, Phase 4's
extended `[PROPAGATE]`/`[REVIEW-GATE]`, and Phase 5's `[WEE-WRITE-SCOPE]` all join the SAME `plan-audit.sh`
invocation — no new hook, no new trigger point. Phase 1 enhances the EXISTING `session-start.sh` CAL surface
(SessionStart) rather than adding a second one.

## GI-68 Dual Review
Haiku Independent-Verifier: PASSED 2026-07-26 (cited verbatim in Planning Status: "GI-68 dual-review (Haiku Independent-Verifier PASSED 2026-07-26)"). Brain concurred. Review was conducted; the `## GI-68 Dual Review` heading that [RATIFY-GATE] checks for was not added at ratification time (heading requirement not yet explicit at 2026-07-26). Heading added retroactively 2026-08-08 per Governor-authorized disposition sweep. No new review conducted.

## Change log
- v1.0 — 2026-07-26 (Sonnet, STRUCTURING tier, executing Opus's design + Brain-consensus per the WEE dispatch task):
  initial draft. 6-phase gated plan (L1 SCAN → L2 QUEUE → L3 BATCH → L4 GATE → L5 AUTO-TRIGGER → Phase 6
  Self-Referential Seed-Harvest) + 4 cross-cutting features, consolidating ARCH-00406 + ARCH-00417 + BP-0009 per
  the 3-source×5-layer coverage table (Core Seed 1). All 5 Core Seeds embedded verbatim (I13). One disclosed
  design choice flagged for Opus judgment: Phase 3 does not block on ARCH-00417's ratification (uses Core Seed 5's
  fixed constants instead). One disclosed citation correction: the dispatch's "RI-0029 duplicate-id incident" is
  replaced with the actually-verified `agent-findings.md` duplicate-RI-0029 finding (more precise, same intent).
  Not committed by Sonnet (§1.7 — Opus commits after judging). No truth-bearing field written (I7).
