# Opus Orchestration & Tier-Automation — Consolidation Plan (Mechanical Delegation + Versioned Schemas + Executor-Flag)
**Node ID:** CISEM-ARCH-00427 | **Type:** ARCH | **Status:** DRAFT
**Planning Status:** AWAITING-BUILDER-REVIEW | **depth_level:** L2 | **Position in schema:** T-SYS, planning-governance layer
**tags:** [planning, orchestration, tier-automation, delegation]
**Goal:** Make optimal Haiku/Sonnet/skill usage AUTOMATIC and mechanically-supported — not a rule Opus must
remember — measurable as: (1) the tier-routing rubric lives in Opus's always-loaded instructions (auto-applied);
(2) subagent returns use VERSIONED structured schemas Opus validates before trusting; (3) an Opus-executor slip is
mechanically FLAGGED (metric trends to 0).
**Governing corespine:** CS-CREATION-001
**wisdom_considered:** RI-0044 (research is GATHER-tier, Opus reviews+gap-fills only), RI-0047 (the 4-part BUILD
standard — binds every deliverable below), RI-0048 (AUTONOMY-RESTRAINT — binds D5's future auto-activation), the
existing §3.0 DELEGATION EFFICIENCY rubric + `opus_executor_incidents` metric (`quality-ledger.yaml`), GI-68
(mandatory dual-tier review — the Maker-Checker pattern this plan RECOGNIZES, not rebuilds).
**Independent Verifier:** `cisem-haiku` (cold, protocol-compliance lens; distinct from author `cisem-sonnet`).
**Size-gate exception (§3.6, documented):** this file exceeds the 200-line gate (5 gated phases with per-phase
4-part BUILD-standard detail + 3 verbatim Core Seeds + all ARCH-00401 mandatory sections). Same documented-exception
precedent as ARCH-00190/ARCH-00406/ARCH-00417/ARCH-00426 — a consolidation plan of this scope cannot compress under
200 lines without cutting the per-deliverable BUILD/HARDWIRED/ENFORCED/TESTED detail Core Seed O-1 requires;
flagged explicitly, not silently exceeded.

## Core Seeds (from Opus dispatch, 2026-07-26 — immutable, executed verbatim, I13; quoted here per Principle 14)
```
[[CORE-SEED O-1 | MUST: every deliverable is done ONLY when it shows all four — BUILD + HARDWIRED (into the
always-loaded/CAL surface) + MECHANICALLY-ENFORCED (a check/hook fires) + TESTED-BY-CODE (a behavioral test passes
when it should + stays quiet when it shouldn't). | WHY: RI-0047 build standard (Governor decree, verbatim) —
'built' alone is plausibility-completion. | VERIFY: does each deliverable cite all four with real artifacts? |
APPLIES_TO: every deliverable + the DoD.]]
[[CORE-SEED O-2 | MUST: any AUTONOMOUS element this plan introduces (the /cisem-research orchestrator especially)
obeys the RATIFIED restraint policy (RI-0048): manual-activation-by-default; auto only via Brain+CISEM consensus +
Governor ratification of that specific mechanism; hard ceilings + gate-scoped-to-risky-action + cheapest-adequate-
model + per-run consumption report + single-writer guard + trial-before-sealing + the outer dumb wall-clock
backstop. | WHY: RI-0048 ratified 2026-07-26; automation must not become uncontrolled token spend. | VERIFY: does
every autonomous element cite the restraint set? | APPLIES_TO: D5 + any scheduled/auto element.]]
[[CORE-SEED O-3 | MUST: schemas are VERSIONED; a subagent conforming to an outdated schema does NOT silently pass
as current (Brain b). | WHY: same SSOT-drift class this project keeps catching. | VERIFY: does D2 carry a schema
version + a stale-version flag + a test? | APPLIES_TO: D2.]]
```

## Existing-First (§3.2b) — performed by Opus's Haiku gather, cited per dispatch instruction + verified by Sonnet at draft time
1. **Tier-routing today is a RULE, not a MECHANISM.** `CLAUDE.md §3.0` already contains a substantial rubric —
   GATHER→Haiku, BUILD→Sonnet, JUDGE/DESIGN/TRUTH→Opus-only, a parallel-dispatch instruction, and a "RULE OF THUMB"
   self-catch — plus the `opus_executor_incidents` metric in `quality-ledger.yaml` (currently: "runs 18-21: ~2...
   target DECREASING", a MANUAL eyeball tally, no mechanical trigger). **Gap, disk-verified:** §3.0 does NOT yet
   name RESEARCH as a GATHER-lane task (RI-0044, dated 2026-07-26, `routes_to` explicitly lists "CLAUDE.md §3.0
   tier-routing... add RESEARCH to the GATHER lane — planned edit, not freestyle"); this plan is that planned edit's
   authorization. D1 below is therefore a SMALL gap-fill on an EXISTING rubric, not a new one (A8/I19).
2. **No mechanical enforcement exists anywhere in the class.** Grepped `dna/checks/`: no script reads a commit's
   file-set against an "executor lane" and flags an unrouted Opus edit. `opus_executor_incidents` is prose-logged
   at RQC catch-up time only. This is the confirmed gap D4 fills.
3. **No versioned subagent-return schema exists.** `dna/checks/` and `dna/queue/` were grepped; subagent returns
   today are free-form prose (this very file's own dispatch is a worked example of the informal shape). The
   "prose-parsing... substring-match bug" cited in the dispatch is the `[TAG-STATUS]` heading-anchor defect logged
   at `quality-ledger.yaml` `session_catchup_2026_07_24` ("a known-buggy check kept flagging compliant tables" until
   a RI-0012-class fix) — a REAL, disk-verified precedent for why prose/substring parsing of structured returns is
   fragile, cited in place of a re-guessed example (RI-0025 discipline).
4. **Related, NOT duplicated (referenced only):**
   - `dna/learning-registry/root-insights.yaml` RI-0042 (loop-stopper) — its detection hook is the **three-guards
     plan's own D1**, not yet a filed node (referenced across RI-0044/45/46/47/48/49 as "wiring pending, three-guards
     plan"); this plan does NOT rebuild it.
   - GI-68 (mandatory dual-tier review before "done") — this IS the industry Maker-Checker pattern; this plan
     RECOGNIZES it as the model for D4's routing-trailer check, does not re-specify it.
   - `dna/checks/injection-scanner.sh` (`[INJECTION-SCAN]`, built per naming-registry.yaml BP/IBD-0011 note) — a
     Tier-0 guard that belongs to the three-guards plan's scope, not this one.
   - `CS-RESEARCH-001` (`status: PLACEHOLDER`, `dna/corespines/corespine-registry.yaml` line 127) — the
     `/cisem-research` orchestrator concept lives there; `CONSENSUS-PACKAGE-for-Brain-2026-07-26.md §5` records the
     open Brain question "is the 10-item core complete, or over-built?" — **still OPEN, unresolved**, confirming D5
     must stay sequenced (not built) here.
   - `dna/checks/definition-of-done.md` (7-step DoD) — the 4-part BUILD standard (RI-0047) is a SHARPENING of its
     existing step 2 ("a running mechanism enforces it"), not a parallel standard; D-of-D reference below cites it,
     does not fork it.
**VERDICT:** nothing here forks a parallel system. D1 is a 2-line gap-fill on an existing rubric; D2/D3/D4 are
genuinely new (nothing pre-existing to enhance); D5 is explicitly NOT built, only sequenced.

## Pocket Declaration
- **reasoning_scope:** produce ONE plan specifying D1-D5 (rubric gap-fill, versioned schemas, lean-context metric,
  mechanical executor-flag, sequenced skill-promotion dependency); this plan document only — no mechanism is built
  in this drafting task (A4/A11/I25).
- **inherited_constraints:** A1-A12; D1-D6; I7 (no truth-fields); I10/I19 (enhance, never fork); I25 (a plan
  authorizes, does not implement); §1.7 git-race discipline (naming-registry.yaml is the only file this task edits);
  the 3 Core Seeds above verbatim.
- **output_contract:** this plan document + the ONE naming-gate self-registration (`naming-registry.yaml` ARCH
  427→428) only.
- **ai_cannot:** self-ratify; stamp any Status/RATIFIED field; build D1-D4's mechanisms in this drafting task; build
  D5 at all (hard-blocked, per Existing-First item 4); confirm the CS-RESEARCH-001 10→7 trim timeline (Governor/Brain
  decision, flagged in Self-Review).
- **recorded_at:** 2026-07-26

## Executive Summary
Optimal tier-usage today is a WRITTEN rubric (§3.0) Opus must remember to apply, backed only by a manually-tallied
metric — exactly the "presence≠behavior" failure class (Principle 17) applied to Opus's own delegation discipline.
This plan does NOT redesign the rubric; it (D1) closes the one disk-verified gap in it (research→GATHER, RI-0044),
(D4) gives the rubric a MECHANICAL enforcement surface — a commit-time check that flags unrouted executor-lane
edits — turning `opus_executor_incidents` from an after-the-fact eyeball tally into an at-commit signal, (D2) adds
VERSIONED structured-output schemas so Opus validates a subagent return instead of trusting prose/substring parsing
(the exact bug class already caught once, item 3 above), (D3) adds a measured, explicitly-revisitable aggregation
threshold for keeping subagent returns lean, and (D5) makes the research-orchestrator's promotion-to-skill
EXPLICITLY BLOCKED on the CS-RESEARCH-001 trim rather than silently forgotten.

## Tier-Routing Declaration (CLAUDE.md §3.0)
- **Drafting (this task) → Sonnet**, single-context; Existing-First re-verified against disk (Opus's Haiku gather
  cited + independently spot-checked, per dispatch instruction).
- **Independent Verifier → `cisem-haiku`, cold, protocol-compliance lens** — before Stage 1.
- **Stage 1 (soundness) → `cisem-opus-pe`.** **Stage 1.5 → not invoked.** **Stage 2 → Governor.**
- **Building D1/D2/D3/D4 (post-ratification) → Sonnet**, per the Phase Rule below; **D4's own check design →
  reviewed by Haiku (mechanical presence) + Opus (judges the graduated-enforcement threshold)**, mirroring GI-68.
- **D5 → NOT ROUTED, NOT BUILT** — hard-blocked on an external dependency (CS-RESEARCH-001 trim + Brain consensus).

## Anti-Scatter Ordering (CLAUDE.md §2 Principle 16)
D1 first — it is the smallest, lowest-blast change (2 lines on an existing rubric) and D4's check needs the
completed rubric text to validate against. D4 next — the AUTOMATION CORE and the Governor's direct ask; without it,
D1 stays a memorized rule again. D2 next — genuinely new build, but bounded (a schema file + a validator), and
independent of D1/D4. D3 next — lowest-stakes, additive logging only, no gate. D5 last — explicitly NOT built,
sequenced behind an external, unresolved dependency (do not let it distract from the 4 buildable items).

## The Rule (phases — each BLOCKED until the prior gate passes; implementation is a LATER step, per the Pocket's ai_cannot)

**PHASE 1 — D1 TIER-ROUTING RUBRIC GAP-FILL (ENHANCES `CLAUDE.md §3.0`, ALREADY LIVE)**
- Deliverable: two additions to the EXISTING §3.0 rubric — (a) add RESEARCH explicitly to the GATHER→Haiku/Sonnet
  lane (RI-0044's exact routing target); (b) add a one-line "state background/foreground + why" requirement next to
  the existing parallel-dispatch instruction (today implicit, not stated).
- BUILD: the 2 additions (drafted text, applied at implementation time, not in this plan).
- HARDWIRED: into `CLAUDE.md §3.0` — always-loaded every session, inherited via `.claude/hooks/session-start.sh`
  (already echoes the persona/rules pointer; no new hook).
- MECHANICALLY-ENFORCED: by D4's `[EXECUTOR-ROUTE]` check (Phase 2) — prose alone has no teeth; D4 is what enforces it.
- TESTED-BY-CODE: shares D4's planted test (Phase 2) — a rubric violation is caught by the SAME mechanism, not a
  second one (A9 synergy, avoids duplicating a test harness).
- **GATE 1→2:** Opus review + Governor sign-off.

**PHASE 2 — D4 OPUS-EXECUTOR FLAG (the automation core, Governor's direct ask; NEW check)**
- Deliverable: `[EXECUTOR-ROUTE]` in `dna/checks/plan-audit.sh` — any commit touching an "executor-lane" path
  (`dna/checks/*.sh`, `.claude/agents/**`, `.claude/skills/**`, `frontend/**`) must carry a `Routed-By:` trailer in
  the commit message (`Sonnet` | `Haiku` | `Opus-exception:<stated reason>`, mirroring the existing
  `Co-Authored-By:` trailer convention already in use); missing → WARN (graduated per §5 maturity, matches
  `plan-audit.sh`'s existing WARN-first posture) and increments a NEW `opus_executor_incidents.mechanical_flags`
  counter in `quality-ledger.yaml` (kept SEPARATE from the existing manual eyeball tally — disclosed, not merged,
  so the honest baseline is never silently overwritten).
- Rationale for the trailer mechanism (disclosed): §1.7 makes Opus the sole committer, so git alone cannot detect
  WHO authored an edit; the commit-message trailer is the practical, git-native proxy — the SAME pattern already
  used for `Co-Authored-By:`, not a novel mechanism (A8).
- BUILD: the `[EXECUTOR-ROUTE]` function inside `plan-audit.sh` + the new metric subfield.
- HARDWIRED: wired into `plan-audit.sh`, runs on EVERY pre-commit (`.git/hooks/pre-commit`, CAL, already LIVE — no
  new hook, no new trigger point).
- MECHANICALLY-ENFORCED: WARN-only first (graduated enforcement, §5 CURRENT MATURITY); fires on every commit
  touching an executor-lane path.
- TESTED-BY-CODE: planted test A = executor-lane file changed, no `Routed-By:` trailer → `[EXECUTOR-ROUTE]` WARNs;
  planted test B = same change + `Routed-By: Sonnet` → silent; planted test C = `Routed-By: Opus-exception:<reason>`
  → silent (the stated-exception carve-out, §3.0's own "trivial, in-context, routing overhead > the work" clause,
  honored not bypassed).
- **GATE 2→3:** Opus review + Governor sign-off.

**PHASE 3 — D2 VERSIONED STRUCTURED-OUTPUT SCHEMAS (NEW)**
- Deliverable: `dna/schemas/subagent-return-schema.yaml` — a small VERSIONED registry, `schema_version: 1` initial,
  fields: `task_id`, `tier`, `findings[]`, `build_standard{build, hardwired, mechanically_enforced, tested_by_code}`
  (RI-0047's own 4 fields, made structural — A9 synergy), `self_review`, `harvest`. Any plan/Core-Seed dispatching a
  subagent CITES the `schema_version` it expects back. NEW `dna/checks/schema-validate.sh` — given a saved
  subagent-return artifact (reuses the existing `dna/reviews/*` shape, ARCH-00406 Phase 5 precedent, not a new
  location), checks it declares a `schema_version` + carries that version's mandatory fields; a return declaring an
  OLDER/UNKNOWN version than the registry's CURRENT version is flagged `STALE-SCHEMA`, never silently accepted (Core
  Seed O-3).
- BUILD: the schema registry file + the validator script.
- HARDWIRED: called from `plan-audit.sh` whenever a commit touches a `dna/reviews/*-return.*`-shaped path (same
  invocation, no new hook).
- MECHANICALLY-ENFORCED: WARN on missing/stale/malformed `schema_version`.
- TESTED-BY-CODE: planted test A = a return with `schema_version: 1` + all mandatory fields → silent; test B =
  `schema_version: 0` (stale) → `[SCHEMA-VALIDATE]` WARNs `STALE-SCHEMA`; test C = missing a mandatory field
  (malformed) → WARN `MALFORMED-RETURN`. Fixes the prose/substring-parsing failure class cited in Existing-First item 3.
- **GATE 3→4:** Opus review + Governor sign-off.

**PHASE 4 — D3 KEEP-CONTEXT-LEAN metric (NEW, measurement-only, no gate)**
- Deliverable: a per-commit metric `avg_subagent_return_size_kb` logged to `quality-ledger.yaml`, computed by a
  small addition to `plan-audit.sh` (measures any `dna/reviews/*-return.*`-shaped file touched in the commit,
  same path convention as Phase 3 — A8, no second convention). Aggregation threshold `N` = **STARTING DEFAULT,
  explicitly disclosed as revisit-from-measured-data, not asserted-correct** (same discipline as WEE Core Seed 5's
  disclosed constants): proposed `N = 3` (supervisor-aggregates a synthesis when more than 3 subagents return
  results in one Opus turn); to be REVISITED once real `avg_subagent_return_size_kb` data accumulates.
- BUILD: the metric-logging addition.
- HARDWIRED: same `plan-audit.sh` invocation (no new hook, no new trigger point).
- MECHANICALLY-ENFORCED: logs every commit; this is a MEASUREMENT, not a blocking gate (matches the dispatch's own
  "MECHANICALLY: a per-run metric logs..." framing — no WARN/BLOCK claimed for D3).
- TESTED-BY-CODE: planted test = a large planted `dna/reviews/*-return.*` file → the logged
  `avg_subagent_return_size_kb` value reflects it after commit (a real number appears, not a placeholder).
- **GATE 4→5:** Opus review + Governor sign-off.

**PHASE 5 — D5 SKILL PROMOTION (SEQUENCED, EXPLICITLY NOT BUILT HERE)**
- Deliverable: NONE. This phase exists only to make the DEPENDENCY explicit and BLOCKED: promoting the research-
  orchestrator to a `/cisem-research` skill is BLOCKED until `CS-RESEARCH-001`'s 10-item Universal Core is trimmed
  to 7 — the exact open Brain question ("is the 10-item core complete, or over-built?",
  `CONSENSUS-PACKAGE-for-Brain-2026-07-26.md §5`) is STILL UNANSWERED as of this draft. Promoting an over-built
  design freezes the over-build (the Creation Doctrine's D1 "ratified = recurring" cuts both ways — freezing a
  design too early is as much a violation as freezing nothing).
- Wiring-state: **NOT-YET-WIRED:<blocked on the CS-RESEARCH-001 10→7 trim, itself blocked on open Brain consensus>**.
- Any future auto-activation of `/cisem-research` additionally carries the FULL RI-0048 restraint set (Core Seed
  O-2) — manual-by-default, 3-way consensus+ratification for auto-mode, hard ceilings, single-writer guard,
  trial-before-sealing, outer wall-clock backstop.
- **GATE 5→LIVE:** revisit only once CS-RESEARCH-001 is trimmed AND ratified — this plan does not schedule that date.

## Cross-Refs (Brain d/e/g — recognized, not rebuilt here)
- Loop-detection hook (RI-0042) = the **three-guards plan's own D1** (not yet a filed node) — cited, not duplicated.
- Maker-Checker = **GI-68** (mandatory dual-tier review, already ratified) — recognized as the same industry
  pattern D4's routing-trailer mirrors; no new review protocol invented.
- `[INJECTION-SCAN]` = **Tier-0 of the three-guards plan** — out of scope here, referenced only.

## Tags + Statuses on every node this plan creates (ARCH-00401 Enh.2)
Genuinely NEW artifacts: `dna/schemas/subagent-return-schema.yaml` (Phase 3), `dna/checks/schema-validate.sh`
(Phase 3) — both `NOT-YET-BUILT`, honestly. `[EXECUTOR-ROUTE]` (Phase 2) and the D3 metric addition (Phase 4) are
functions ADDED to the existing `dna/checks/plan-audit.sh` (no new file, no new tag/status needed beyond the
existing script's own).

## Per-File Alignment Table (ARCH-00401 Enh.3)
| File | ID / Number | Schema Placement | Tag | Status |
|---|---|---|---|---|
| `dna/planning/CISEM-ARCH-00427-opus-orchestration-tier-automation.md` (this file) | CISEM-ARCH-00427 (naming-registry.yaml 427→428, ONE gate) | T-SYS, planning-governance | planning, orchestration, tier-automation, delegation | DRAFT / AWAITING-BUILDER-REVIEW |
| `CLAUDE.md §3.0` (Phase 1 target, not edited here) | no ID — always-loaded root file | T-SYS, root operational layer | root, builder, gates | present, unchanged by this plan |
| `dna/checks/plan-audit.sh` (Phases 2/3/4 target, not edited here) | no ID — existing CAL check | T-SYS, enforcement/CAL | gate, audit | present, unchanged |
| `dna/schemas/subagent-return-schema.yaml` (Phase 3, not created) | no ID — schema registry, ARCH-00320 §6 | T-SYS, enforcement/CAL | schema, versioning, subagent-return | NOT-YET-BUILT |
| `dna/checks/schema-validate.sh` (Phase 3, not created) | no ID — script, ARCH-00320 §6 | T-SYS, enforcement/CAL | schema, validation, gate | NOT-YET-BUILT |
| `dna/quality-ledger.yaml` (Phases 2/4 target, not edited here) | no ID — existing RQC ledger | T-SYS, learning-loop | quality-ledger, metrics | present, unchanged |
| `dna/naming-registry.yaml` (modified — ARCH 427→428) | REG type, self-exempt | T-SYS, naming-allocation | naming, numbering | present, unchanged status |

## What DOES change (upon ratification — implementation is a LATER, separate step; NOTHING here executes now)
- `CLAUDE.md §3.0` — 2 added lines (research→GATHER lane, background/foreground statement, Phase 1).
- `dna/checks/plan-audit.sh` — gains `[EXECUTOR-ROUTE]` (Phase 2) and a D3 metric-logging addition (Phase 4).
- New: `dna/schemas/subagent-return-schema.yaml` + `dna/checks/schema-validate.sh` (Phase 3).
- `dna/quality-ledger.yaml` — new `opus_executor_incidents.mechanical_flags` subfield (Phase 2, kept separate from
  the existing manual tally) + new `avg_subagent_return_size_kb` metric (Phase 4).
- `dna/naming-registry.yaml` — ARCH next_seq 427→428 (this drafting task).

## What does NOT change
- **The loop-detection hook is NOT built here** — it belongs to the separate three-guards plan (Cross-Refs above).
- **The `/cisem-research` skill is NOT built here** — D5 is explicitly blocked/sequenced, not implemented.
- **No autonomous auto-run is added without the RI-0048 restraint gate** — D5's future auto-activation carries the
  full restraint set (Core Seed O-2); nothing in D1-D4 introduces autonomy (all are commit-time WARN checks fired
  by the existing human-driven `.git/hooks/pre-commit`, not a self-triggering process).
- **`opus_executor_incidents`'s existing manual tally is NOT overwritten** — D4 adds a separate `.mechanical_flags`
  counter; the honest baseline stays intact (Principle 17 honest-reporting).
- **GI-68's dual-review protocol is NOT re-specified** — D4 reuses its shape (Cross-Refs), not a rewrite.

## Definition-of-Done reference (ARCH-00401 Enh.5)
Per `dna/checks/definition-of-done.md` (cited, not re-derived) — SHARPENED here by RI-0047's 4-part standard (Core
Seed O-1): each phase's eventual implementation is DONE only when it shows, together, (1) BUILD — the artifact
exists on disk; (2) HARDWIRED — wired into the CAL/always-loaded surface, not a standalone script nobody calls; (3)
MECHANICALLY-ENFORCED — a check/hook actually fires (cite file + trigger); (4) TESTED-BY-CODE — a planted-positive
AND a planted-negative test both behave as specified. All four are shown per-phase above; none is asserted without
its artifact.

## Propagation Declaration (ARCH-00401 Enh.6)
(1) The §3.0 rubric stays the ONE home for the tier-routing rule (Phase 1 edits it in place; no new rubric file).
(2) RI-0044's `routes_to` list already names `persona-collaborator.md DEVELOPMENT DISCIPLINE` and the auto-memory
`model-tier-routing.md` as mirrors of the SAME rubric — Phase 1's implementation updates those pointers too, not a
duplicate rubric (I10). (3) The `[EXECUTOR-ROUTE]` mechanism is the CONCRETE enforcement Principle 17
(PREVENTION-MUST-PROPAGATE) calls for on the tier-routing class — referenced by pointer, not restated in CLAUDE.md.
(4) `dna/checks/definition-of-done.md` gains a citation to RI-0047's 4-part standard at Phase-implementation time
(not a fork — an addition to its existing step 2).

## Dependencies (blocks-on / unblocks-for)
- **Blocks-on:** nothing structurally for Phases 1-4 — all four build against ALREADY-LIVE surfaces
  (`CLAUDE.md §3.0`, `plan-audit.sh`, `quality-ledger.yaml`). **Phase 5 (D5) hard-blocks** on the CS-RESEARCH-001
  10→7 trim, itself blocked on open Brain consensus (`CONSENSUS-PACKAGE-for-Brain-2026-07-26.md §5`) — disclosed,
  not silently carried forward.
- **Fulfills:** RI-0044's `routes_to` item "CLAUDE.md §3.0 tier-routing... planned edit, not freestyle" (Phase 1);
  RI-0047's "no 'build' is stated or accepted as done without the four" (all phases' DoD framing).
- **Unblocks-for:** an honest, mechanically-trending `opus_executor_incidents` metric (the Governor's stated
  measure of "do better", §3.0); a validated subagent-return channel Opus can trust rather than eyeball-parse.
- **Explicitly parked, not built (disclosed):** the loop-detection hook + `[INJECTION-SCAN]` (three-guards plan,
  separate node); the `/cisem-research` skill (D5, blocked on the trim).

## Ratification Path
Stage 0 (iterative Haiku→Sonnet→Opus draft-review, ARCH-00190 §3) → Stage 1 (`cisem-opus-pe`, cold soundness) →
Stage 1.5 (fable, not invoked) → Stage 2 (Governor decree). Each PHASE additionally carries its own Gate
(1→2→3→4→5→LIVE) — implementation of a later phase cannot start before the earlier phase's Gate clears (reused
pattern, A8, per the ARCH-00406/00417/00426 phased-plan precedent).

## Self-Compliance (against ARCH-00230 checklist + ARCH-00190 §2, ARCH-00401-amended)
✓ Header ✓ Core Seeds (3, verbatim) ✓ Existing-First (re-verified against disk, cited findings) ✓ Pocket Declaration
✓ Tier-Routing Declaration ✓ Anti-Scatter Ordering ✓ The Rule (5 gated phases) ✓ Cross-Refs ✓ Tags+Statuses
✓ Per-File Alignment Table ✓ What DOES/does NOT change ✓ Definition-of-Done reference ✓ Propagation Declaration
✓ Dependencies ✓ Ratification Path ✓ Independent Verifier named ✓ Path Rejection Declaration ✓ CAL reference
✓ Change log.

## Path Rejection Declaration (CLAUDE.md §2.8)
- ❌ Rejected: building any deliverable's mechanism in this same task — A4/I25 requires ratification before implementation.
- ❌ Rejected: rewriting §3.0's rubric from scratch — Existing-First confirms it already exists; only the RI-0044
  gap is added (A8/I19, no duplication).
- ❌ Rejected: rebuilding the loop-detection hook or `[INJECTION-SCAN]` — both belong to the separate three-guards
  plan (Cross-Refs); citing, not duplicating.
- ❌ Rejected: building the `/cisem-research` skill now — D5 is explicitly blocked on the CS-RESEARCH-001 trim,
  itself unresolved (open Brain question).
- ❌ Rejected: any autonomous auto-run without the RI-0048 restraint gate — Core Seed O-2 binds D5's future
  activation; D1-D4 introduce no autonomy (all commit-time, human-driven WARN checks).
- ❌ Rejected: overwriting the existing manual `opus_executor_incidents` tally — D4 adds a SEPARATE
  `.mechanical_flags` counter, preserving the honest baseline (Principle 17).
- ❌ Rejected: a merged/duplicate D-of-D standard — RI-0047's 4-part standard SHARPENS the existing
  `definition-of-done.md` step 2, it does not fork a second standard.
- ❌ Rejected: solo-Opus review of D4's own enforcement threshold — Tier-Routing Declaration assigns Haiku
  (mechanical presence) + Opus (threshold judgment), mirroring GI-68, never solo.

## CAL reference (CISEM-ARCH-00390)
Pre-commit `[ZF]` + `[DOD]` + `[ROUTING]`/`[ALIGN]`/`[TAG-STATUS]`/`[POCKET]` (all LIVE) run on this plan file
itself at commit time. Once implemented, Phase 2's `[EXECUTOR-ROUTE]` and Phase 3's `[SCHEMA-VALIDATE]` and Phase
4's metric-logging all join the SAME `plan-audit.sh` invocation — no new hook, no new trigger point. Phase 1
enhances the EXISTING always-loaded `CLAUDE.md` surface (inherited via `.claude/hooks/session-start.sh`) rather
than adding a second one.

## Change log
- v1.0 — 2026-07-26 (Sonnet, STRUCTURING tier, executing Opus's dispatch): initial draft. 5-phase gated plan
  (D1 rubric gap-fill → D4 opus-executor flag → D2 versioned schemas → D3 lean-context metric → D5 sequenced-not-
  built) per the Anti-Scatter Ordering above. All 3 Core Seeds embedded verbatim (I13). Existing-First re-verified
  against disk (found §3.0's rubric already substantially live — narrowed D1 to a genuine 2-line gap-fill rather
  than a rewrite; confirmed CS-RESEARCH-001's 10→7 trim is STILL an open Brain question, not yet resolved, so D5
  stays hard-blocked). Not committed by Sonnet (§1.7 — Opus commits after judging). No truth-bearing field written (I7).
