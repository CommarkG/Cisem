# Mechanical Tag+Status Enforcement — Phased Plan (Undebatable Gate · Granular Tagging · Naming/Numbering Alignment · Weekly Agent-Enrichment)
**Node ID:** CISEM-ARCH-00407 | **Type:** ARCH | **Status:** PROVISIONAL-ACTIVE
**Planning Status:** AWAITING-BUILDER-REVIEW | **depth_level:** L1 | **Position in schema:** T-SYS, planning-governance layer
**tags:** [planning-domain, tag-status, gate, mandatory, naming, numbering, alignment, agent-enrichment, granular-tagging]
**Goal:** Make tags + statuses (the main governance surface) MECHANICALLY + DYNAMICALLY enforced everywhere — an
UNDEBATABLE stage of creation/identification, so nothing governed is born untagged/unstatused — measurable as: (1) a
repo-wide scan reports every node/file missing a tag or a status; (2) a new commit creating/changing a governed
artifact is BLOCKED if it lacks both; (3) the naming/numbering alignment gate (BP-0005, queued since 2026-07-18,
never built) finally exists and runs; (4) `agent-profiles.yaml` accretes on a named weekly cadence, not ad-hoc.
**Governing corespine:** CS-CREATION-001 | **CAL reference (ARCH-00390):** pre-commit `[TAG-STATUS-REPO]` WARN check +
a new BLOCK 3 in `pre-commit-blocks.sh` are this plan's disclosed follow-on CAL surface.
**Independent Verifier:** `cisem-opus-pe`, cold default-refute pass (author = Sonnet, verifier = Opus; satisfies P5).
**Size-gate exception (§3.6, documented):** anticipated to approach 200 lines given 4 phases + Existing-First +
Per-File Alignment Table; kept whole per the ARCH-00190/ARCH-00406 documented-exception precedent if it exceeds.

**Existing-First (§3.2b, done) — searched, in order:**
1. `dna/checks/pre-commit-blocks.sh` — **ALREADY has the exact BLOCK pattern this plan needs** (BLOCK 1: plan-fields;
   BLOCK 2: persona-inheritance). Scope item 1 (undebatable gate) is a **BLOCK 3, appended to this SAME file**, not a
   new script (A8/I19 — one BLOCK engine, not parallel ones).
2. `dna/planning/CISEM-ARCH-00190-planning-domain-protocol.md` §2 — **ARCH-00401 Enhancement 2 ALREADY added**
   *"Tags + Statuses on EVERY node this plan creates"* to the mandatory plan checklist (ratified 2026-07-20, same day
   as this plan). **This is DONE for plans.** BP-0012's ask is BROADER — every GOVERNED CREATION (agents, skills,
   corespines, protocols, node files), not only plan-created children. This plan does NOT re-add the plan-scoped
   clause; it CLOSES THE GAP ARCH-00401 left open (non-plan artifacts).
3. `dna/checks/plan-audit.sh` `[TAG-STATUS]` check (ARCH-00402, ratified + implemented 2026-07-20) — **ALREADY
   EXISTS but is NARROWLY SCOPED**: it inspects the Per-File Alignment Table's Status column inside CHANGED
   `dna/planning/*.md` plans only. It does NOT scan agents/skills/corespines/node files outside a plan's own table.
   **Genuine gap, confirmed by reading the check itself**, not assumed.
4. `dna/protocols/CISEM-ARCH-00230-file-creation-template.md` — checklist item 1 already mandates tag+status at
   creation (BEHAVIORAL, honor-system). This plan does not re-word it; it adds the MECHANICAL enforcement ARCH-00230
   itself has never had (same "documented vs wired" gap class as every other CISEM checklist item).
5. `dna/vocabulary/CISEM-VOC-00001-tag-library.md` (DRAFT, first honest inventory) + `CISEM-VOC-00002-status-library.md`
   — the tag/status VOCABULARY SSOT. This plan's gate READS these (a valid tag/status must be a real word from the
   library or flagged as a candidate per GI-15 reuse-before-coin), never forks a second vocabulary.
6. `dna/protocols/CISEM-ARCH-00011-naming-numbering-policy.md` (line ~29) — **the ALIGNMENT GATE is ALREADY NAMED
   AND SPEC'D** ("checks: (a) gaps are preserved, (b) a node's number is consistent with its schema position
   [SCHEMA-00001], (c) no two nodes collide") but explicitly says **"wired in BP-0005"** — and `dna/queue/README.md`
   confirms **BP-0005 has been QUEUED since 2026-07-18 and was never built.** This plan is the FIRST real
   implementation of that already-spec'd gate, not a new design.
7. `dna/queue/BP-0011-schema-ssot-and-html-pages.md` item 1 (schema-as-SSOT + alignment gate) — `BP-0012`'s OWN text
   points here ("ENHANCE the ARCH-00011 alignment gate (BP-0005/BP-0011)"). **Folded into Phase 2 below**, matching
   BP-0012's own routing. BP-0011 items 2–4 (auto-generated HTML pages for skills/agents + the schema page) are
   **NOT folded** — a distinct frontend-generator deliverable, flagged as a separate future plan (consistent with the
   sibling plan ARCH-00406's same disclosure).
8. `dna/naming-manifest.yaml` (DERIVED, ID→file view) + `dna/schema/CISEM-SCHEMA-00001-placement-engine.md` — both
   REUSED as the alignment gate's two comparison sources (registered-ID list; schema position rule), no new index.
9. `dna/ibd/IBD-0013-meta-defaults-cluster-2026-07-19.md` §5 — **the granular part-of-file tagging design ALREADY
   EXISTS**, purified and specific: "(a) real-time mechanical tagging for HIGH-VALUE governed blocks only
   [status/decision/seed/core]; (b) the exhaustive heavy sweep runs as a SCHEDULED BATCH (overnight/weekly) by a
   CHEAP tier." **Reused verbatim** — this plan does not redesign granular tagging, it specs (a) and discloses (b)'s
   scheduler dependency honestly (same disclosed gap as the sibling plan ARCH-00406's Phase 1).
10. `dna/corespines/CS-AI-PROFILING-001/agent-profiles.yaml` — **ALREADY the living per-agent profile store**
    (strengths/gaps/accreted-items, monotonic, on-disk, per persona `## DEVELOPMENT DISCIPLINE`). **ENHANCE with a
    named weekly-cadence field**, do not fork a second profile store.
11. `dna/archive/archive-ledger.yaml` — no entry rules out mechanical tag/status enforcement; confirmed clean.
12. `dna/planning/CISEM-ARCH-00406-completion-propagation-layer.md` (sibling plan, authored moments earlier in this
    same session) — confirmed **non-overlapping**: ARCH-00406 touches `ssot-registry.yaml` / `root-insights.yaml` /
    `persona-collaborator.md`'s Tier-Cycle line / a new `output-liveness-monitor.md`; THIS plan touches
    `pre-commit-blocks.sh` / `plan-audit.sh`'s tag-status surface / `agent-profiles.yaml` / the alignment gate. Zero
    file collision between the two plans' "What DOES change" lists.
13. **(v0.2 fold-in, Opus-directed 2026-07-20) For ROLE-ENFORCEMENT (Phase 4):** `dna/checks/plan-audit.sh`'s
    already-live `[POCKET]` check (confirmed by direct read, lines ~491–506) is the EXACT pattern to reuse — scoped
    to CHANGED files, a presence/identity proxy, WARN-only, planted-test-verified, forward-looking (no retro-flag
    flood). The I13 seed-strip BLOCK (confirmed live — `.git/hooks/pre-commit`, per CLAUDE.md §1.5/quality-ledger
    run 11: "first BLOCK-mode wired") is the existing BLOCK-vs-WARN precedent this phase stays WARN-only against
    (self-review is a governance smell, not a seed-integrity violation — does not warrant BLOCK). `quality-ledger.
    yaml`'s `metrics.opus_executor_incidents` field ALREADY EXISTS (confirmed by direct read: "runs 18-21: ~2...")
    but is a narrative string never surfaced at commit time — **genuine gap**: no check echoes it. CLAUDE.md §3.0's
    delegation rubric ("Opus judges·Sonnet builds·Haiku gathers") is the RULE SOURCE for the self-review check — no
    new role taxonomy invented.
**VERDICT:** every deliverable below ENHANCES a named, already-existing (often already-spec'd-but-unbuilt) home. No
new script, no new vocabulary store, no new profile store, no new alignment-gate design is invented. Phase 4 (v0.2)
is likewise a pure ENHANCEMENT — reuses `[POCKET]`'s exact check shape + an already-existing, already-written metric.

## Pocket Declaration
- **reasoning_scope:** specify the mechanical tag+status gate + granular tagging + the (already-spec'd, never-built)
  naming/numbering alignment gate + the weekly agent-enrichment cadence, per BP-0012's 5-item scope; produce this
  plan artifact only — nothing is implemented in this task (Core Seed 1)
- **inherited_constraints:** A1–A9; D1–D6; I7; I10/I19 (enhance the 12 named existing homes above, never fork); I25;
  §1.7 git-race discipline
- **output_contract:** this plan document only — none of the files listed under "What DOES change" is edited here
- **ai_cannot:** self-ratify; edit `pre-commit-blocks.sh`/`plan-audit.sh` in this task; build the scheduler dependency
  (same honest disclosure as the sibling plan)
- **recorded_at:** 2026-07-20

## Executive Summary
Tags + statuses are CISEM's main governance surface (persona-engraved), but enforcement today is a patchwork: plans
have it (ARCH-00401/00402, DONE); agents/skills/corespines/bare node files do not. The alignment gate has been
SPEC'D since ARCH-00011's authoring but never wired (BP-0005, queued 16+ days). Granular section-level tagging has a
design (IBD-0013 §5) but no build. Agent enrichment has a store (agent-profiles.yaml) but no cadence. This plan
CLOSES all four gaps by extending already-proven mechanisms (the BLOCK pattern, the alignment-gate spec, the
granular-tagging design, the profile store) — inventing nothing new.

## Tier-Routing Declaration (per CLAUDE.md §3.0 — honest disclosure)
- **Gather + enrich → performed by Sonnet in this single authoring pass** (same disclosed no-live-Haiku-dispatch
  exception as the sibling plan ARCH-00406 — no subagent-dispatch tool available this session).
- **Judging soundness (Stage 1) → Opus (`cisem-opus-pe`)** — cold default-refute pass.
- **Building each phase (post-ratification) → Sonnet** — mechanical BLOCK/check additions to already-existing
  scripts, per §3.0 (Sonnet's lane); the naming/numbering deep-dive's cross-referencing (registry vs manifest vs
  schema) is also mechanical/Sonnet-lane.
- **Governor Stage 2 → ratification authority.**

## Anti-Scatter Ordering (CLAUDE.md §2 Principle 16)
**Phase 0 (Undebatable Gate)** first — most central, the smallest and cheapest to verify (a presence check, like
`[ROUTING]`/`[ALIGN]` already proven). **Phase 1 (Granular Tagging, seed only)** next — builds on Phase 0's
tag-vocabulary read. **Phase 2 (Naming/Numbering Alignment Gate)** — the deepest structural check (cross-references 3
sources: registry, manifest, schema); sequenced after the simpler gate is proven. **Phase 3 (Weekly Agent-Enrichment
Cadence)** last — lowest urgency (a cadence label on an existing store), least central to the "undebatable creation
gate" goal, genuinely peripheral relative to Phases 0–2 but kept in-scope per BP-0012's explicit ask (not silently
dropped, per Principle 9).

## The Rule (phases — each BLOCKED until the prior gate passes; implementation is a LATER step, per Core Seed 1)

**PHASE 0 — Undebatable Tag+Status Gate**
- Deliverable: (a) a WARN-only `[TAG-STATUS-REPO]` check in `plan-audit.sh` — repo-wide scan (not plan-scoped, unlike
  ARCH-00402's `[TAG-STATUS]`) for `.md` files under `dna/` and `.claude/` carrying a `Node ID:`/`**Node ID:**` or
  equivalent header but NO `tags:`/`**tags:**` line AND/OR no `Status:`/`**Status:**` line; reports `MISSING: <file>
  (no tag) / (no status)`. (b) a new **BLOCK 3** in `pre-commit-blocks.sh`, same shape as BLOCK 1/2: any NEW file
  under `dna/corespines/`, `dna/protocols/`, `dna/planning/`, `.claude/agents/`, `.claude/skills/` staged in a commit
  MUST carry both a tag line and a status line, or the commit is BLOCKED (escape hatch: `--no-verify`, logged, same
  as BLOCK 1/2's documented rare-escape).
- Stress test: plant a new file under `dna/protocols/` with no `tags:`/`Status:` → BLOCK 3 fires; add both → clears;
  run `[TAG-STATUS-REPO]` against the current repo, confirm it does NOT re-flag files ARCH-00402's `[TAG-STATUS]`
  already covers (no double-counting the same root gap, matching ARCH-00402's own Anti-Scatter discipline).
- Pass criteria (numeric): BLOCK 3 fires 1/1 on the planted no-tag/no-status case, clears 1/1 once satisfied;
  `[TAG-STATUS-REPO]` produces a finite, named list (not a crash) on a full repo scan.
- **GATE 0→1:** Opus review + Governor sign-off.

**PHASE 1 — Granular Part-of-File Tagging (seed only, per IBD-0013 §5(a))**
- Deliverable: a documented convention — high-value governed blocks (a `## Status`, `## Decision`, a
  `[[CORE-SEED]]`, a `## Core` section) MAY carry an inline micro-tag comment (e.g. `<!-- part:status -->`) so future
  bundling can target "load just the status block of X" precisely. This plan specs the CONVENTION and where it's
  documented (`dna/vocabulary/CISEM-VOC-00001-tag-library.md`, a new "Granular / part-of-file tags" section);
  IBD-0013 §5(b)'s EXHAUSTIVE overnight sweep is explicitly NOT built here — same scheduler-dependency disclosure as
  the sibling plan's Phase 1, not silently promised.
- Stress test: n/a for the seed (convention-only); the exhaustive sweep's stress test is a follow-on.
- Pass criteria: the convention is documented at its ONE home (VOC-00001), zero duplication of the convention text
  elsewhere (I10).
- **GATE 1→2:** Opus review + Governor sign-off.

**PHASE 2 — Naming/Numbering Alignment Gate (finally wires the ARCH-00011-spec'd, BP-0005-queued gate)**
- Deliverable: `dna/checks/naming-alignment.sh` (or a `[ALIGN-NUM]` addition to `plan-audit.sh` — Opus to choose the
  simpler wiring point at build time, disclosed as an open implementation choice, not decided here) implementing
  ARCH-00011's own 3-point spec verbatim: (a) gap-preservation across a TYPE's sequence (no silent renumbering); (b)
  a node's number is consistent with its `dna/schema/CISEM-SCHEMA-00001-placement-engine.md` position; (c) no two
  nodes collide (cross-references `naming-registry.yaml` next_seq vs `naming-manifest.yaml`'s derived filesystem
  view vs the live glob — the SAME 3-way cross-check `naming-manifest.yaml`'s own header already prescribes but no
  check currently automates). Folds BP-0011 item 1 (schema-as-SSOT for placement) as this gate's (b) dimension.
- Stress test: plant a file with an out-of-sequence/colliding ID → flagged; a correctly-sequenced, schema-consistent
  ID → silent/PASS.
- Pass criteria (numeric): all 3 ARCH-00011 dimensions (a/b/c) implemented and independently plantable/testable;
  BP-0005's 16-day-queued status finally resolves to BUILT (not re-queued a third time).
- **GATE 2→3:** Opus review + Governor sign-off.

**PHASE 3 — Weekly Agent-Enrichment Cadence**
- Deliverable: add a `last_batch_review:` date field to `dna/corespines/CS-AI-PROFILING-001/agent-profiles.yaml`
  (one per agent) + a WARN check (reusing the SAME 7-day TTL pattern as ARCH-00406 Phase 1's `[RIPL-BATCH]` and P3 —
  no third TTL invented) that flags an agent profile whose per-turn-accreted items have gone >7 days without a
  weekly-batch review pass folding them into the checklist/core-prompt levels IBD-0013 already defines.
- Stress test: plant a profile with `last_batch_review` 8+ days stale → flagged; 3 days → silent.
- Pass criteria: all 3 current agent profiles (haiku/sonnet/opus-pe) carry the field; planted stale/fresh cases
  behave correctly.
- **GATE 3→4:** Opus review + Governor sign-off (lower blast than Phase 2; standard sign-off, not foundational).
  (Relabeled from the v0.1 draft's `GATE 3→LIVE` — Phase 3 is no longer terminal now that Phase 4 is folded in
  below; v0.2, disclosed in the change log.)

**PHASE 4 — ROLE-ENFORCEMENT (mechanical Opus/Sonnet/Haiku role checks; v0.2 fold-in, Opus-directed 2026-07-20,
Governor-approved)**
- Deliverable: (a) new WARN check `[SELF-REVIEW]` in `plan-audit.sh`, SAME shape/scope as the already-live
  `[POCKET]` check (changed-files scoped, presence/identity proxy, WARN-only, planted-test-verified — no new check
  architecture invented, §Existing-First item 13): for a changed `dna/quality-ledger.yaml` run entry (or a
  `dna/reviews/` note per the sibling plan ARCH-00406 Phase 5) that carries BOTH an implementer/author-tier field
  (`pocket:`/`tier_routing:`) AND a verifier/reviewer field (`verdict_soundness:`/`ratified_by:`), flag when the two
  name the SAME tier (e.g. `pocket: cisem-sonnet` alongside its own `verdict_soundness:` claim — a self-review) —
  reusing CLAUDE.md §3.0's "Opus judges·Sonnet builds·Haiku gathers" rubric as the RULE SOURCE, no new role
  taxonomy invented. (b) surface the ALREADY-EXISTING `quality-ledger.yaml` `metrics.opus_executor_incidents`
  narrative field in the `plan-audit.sh` output banner every run — an ECHO of an existing, already-written metric
  (today it is written but never displayed at commit time, so CLAUDE.md §3.0's "do better" delegation rubric has no
  per-commit visibility surface; this closes that visibility gap, it does not re-derive or re-measure the metric).
- Stress test: plant a `quality-ledger.yaml` run entry with `pocket: cisem-sonnet` and `verdict_soundness: SOUND`
  (no distinct reviewer field) → `[SELF-REVIEW]` fires; the same entry with `ratified_by: "cisem-opus-pe"` (a
  distinct tier) → silent. Run `[SELF-REVIEW]` as a NEGATIVE CONTROL against the CURRENT `quality-ledger.yaml`
  (runs 1–28) → confirms 0 false-flags against the real, already-disclosed Opus-PE-reviews-Sonnet pattern already
  in use (same negative-control discipline as the sibling plan's Phase 5). Confirm the metric echo prints the
  CURRENT `metrics.opus_executor_incidents` string unmodified (a read, not a re-derivation) on every run.
- Pass criteria (numeric): `[SELF-REVIEW]` fires 1/1 on the planted same-tier case, clears 1/1 on the distinct-tier
  case; 0/N false-flags against N real historical entries in the current `quality-ledger.yaml`; the metric echo
  matches `metrics.opus_executor_incidents`'s on-disk string byte-for-byte on every run (no drift between the
  registry value and what the check surfaces).
- **GATE 4→LIVE:** Opus review + Governor sign-off (lower blast — a WARN-only self-review/visibility check, same
  class as Phase 3, not foundational).

## Tags + Statuses on every node this plan creates (ARCH-00401 Enh.2)
This plan creates ONE new file (`dna/checks/naming-alignment.sh`, Phase 2, disclosed as NOT built here) — see the
Per-File Alignment Table for its planned tag/status. Every other touched file (including Phase 4's targets) is an
ENHANCE to an already-tagged, already-statused existing artifact (row-listed below).

## Per-File Alignment Table (ARCH-00401 Enh.3)
| File | ID / Number | Schema Placement (SCHEMA-00001) | Tag (VOC-00001) | Status (VOC-00002) |
|---|---|---|---|---|
| `dna/planning/CISEM-ARCH-00407-mechanical-tag-status-enforcement.md` (this file) | CISEM-ARCH-00407 (naming-registry.yaml ARCH next_seq 407→408, Sonnet-allocated per the one gate) | T-SYS, planning-governance layer | planning-domain, tag-status, gate, mandatory, naming, numbering, alignment | Status: PROVISIONAL-ACTIVE / Planning Status: AWAITING-BUILDER-REVIEW |
| `dna/checks/pre-commit-blocks.sh` (Phase 0 target — NOT edited here) | no ID — executable script, governed by ARCH-00270 | T-SYS, enforcement/CAL layer | gate, block, mandatory (existing, unchanged) | present, unchanged status by this plan |
| `dna/checks/plan-audit.sh` (Phase 0 + Phase 4 target — NOT edited here) | no ID — executable script, governed by ARCH-00320 §6 | T-SYS, enforcement/CAL layer | gate, audit, mandatory (existing, unchanged) | present, unchanged status by this plan |
| `dna/vocabulary/CISEM-VOC-00001-tag-library.md` (Phase 1 target — NOT edited here) | CISEM-VOC-00001 (existing) | T-SYS | tag-library, vocabulary, draft (existing) | DRAFT (existing, unchanged by this plan) |
| `dna/checks/naming-alignment.sh` (Phase 2 — NEW, NOT created by this drafting task) | no ID yet — script, governed by ARCH-00011 §2 pattern | T-SYS, enforcement/CAL layer | naming, numbering, alignment, gate, mandatory (planned) | NOT-YET-BUILT (honest) |
| `dna/corespines/CS-AI-PROFILING-001/agent-profiles.yaml` (Phase 3 target — NOT edited here) | no ID — existing profile store | T-SYS, AI-Team/persona layer | ai-profiling, living-profile, monotonic (existing, unchanged) | PROVISIONAL-ACTIVE (existing, unchanged by this plan) |
| `dna/naming-registry.yaml` (already modified — ARCH next_seq 407→408, comment pre-registers this title) | REG type, self-exempt | T-SYS, naming-allocation layer | naming, numbering, mandatory | present, unchanged status |
| `dna/quality-ledger.yaml` (Phase 4 target — NOT edited here) | no ID — RQC learning memory, governed by ARCH-00320 §6 | T-SYS, learning-loop layer | quality-ledger, rqc, mandatory (existing, unchanged) | present, unchanged status by this plan |

## What DOES change (upon ratification — implementation is a LATER, separate step; NOTHING here executes now)
- `dna/checks/pre-commit-blocks.sh` — new BLOCK 3 (Phase 0).
- `dna/checks/plan-audit.sh` — new `[TAG-STATUS-REPO]` WARN check (Phase 0); new `[ALIGN-NUM]` addition OR a new
  standalone `dna/checks/naming-alignment.sh` (Phase 2, implementer's choice disclosed).
- `dna/vocabulary/CISEM-VOC-00001-tag-library.md` — new "Granular / part-of-file tags" section (Phase 1).
- `dna/corespines/CS-AI-PROFILING-001/agent-profiles.yaml` — `last_batch_review:` field per agent (Phase 3).
- `dna/checks/plan-audit.sh` — new `[SELF-REVIEW]` WARN check + `opus_executor_incidents` metric echo (Phase 4).

## What does NOT change
- ARCH-00190 §2 / ARCH-00401 Enh.2 (plan-scoped tag+status mandate) — already satisfied, untouched.
- ARCH-00402's `[TAG-STATUS]` check and its scope (Per-File Alignment Table columns in changed plans) — untouched;
  Phase 0's `[TAG-STATUS-REPO]` is explicitly disjoint (repo-wide header presence, not table-column contents).
- No BLOCK-mode graduation beyond Phase 0's BLOCK 3 (which reuses the ALREADY-LIVE BLOCK 1/2 mechanism, not a new
  graduation event — ARCH-00270's broader BLOCK-mode track is untouched).
- IBD-0013 §5(b)'s exhaustive overnight sweep is NOT built (scheduler dependency, disclosed, same as sibling plan).
- BP-0011 items 2–4 (HTML-page generation) are untouched — flagged separately, not built, not silently absorbed.

## Definition-of-Done reference (ARCH-00401 Enh.5)
Per `dna/checks/definition-of-done.md` (cited, not re-derived): each phase's implementation is DONE only when (1) the
deliverable exists; (2) a running mechanism enforces it OR an honest `NOT-YET-WIRED` tag; (3) propagated to all its
homes; (4) CAL/hook surface updated; (5) any found-wrong→improved event RIPL-extracted; (6) committed+pushed; (7)
independently verified. "Produced" alone is never "done."

## Propagation Declaration (ARCH-00401 Enh.6)
(1) The tag/status vocabulary stays ONE home (`VOC-00001`/`VOC-00002`) — Phase 0's gate READS it, never copies tag
lists inline; (2) the alignment gate (Phase 2) reads `naming-registry.yaml` + `naming-manifest.yaml` +
`SCHEMA-00001` BY REFERENCE (the exact 3-source cross-check `naming-manifest.yaml`'s own header already prescribes);
(3) `agent-profiles.yaml`'s cadence field is read by the SAME `plan-audit.sh` invocation every other WARN check runs
through — no new hook; (4) `dna/queue/README.md`'s BP-0012/BP-0005/BP-0011(item-1) index lines get a completion note
pointing to this ARCH number once ratified.

## Dependencies (blocks-on / unblocks-for)
- **Blocks-on:** nothing — ARCH-00401/00402 (RATIFIED) are the protocol this plan itself complies with; BP-0005 has
  been queued (unbuilt) since 2026-07-18 and this plan is its resolution, not a blocker.
- **Unblocks-for:** BP-0005 (closes — 16+ days queued, finally wired); BP-0011 item 1 (closes, folded here); the
  sibling plan ARCH-00406 (confirmed non-overlapping, Existing-First item 12).
- **Explicitly parked, not built (disclosed per I2/I22):** (a) IBD-0013 §5(b)'s overnight exhaustive granular-tagging
  sweep (scheduler dependency, same class as ARCH-00406's parked scheduler item); (b) BP-0011 items 2–4
  (HTML-page generation) — genuinely separate, needs its own future plan.

## Ratification Path
Stage 0 (iterative Haiku→Sonnet→Opus draft-review loop, ARCH-00190 §3, incl. two-model verify + SDP hook where a
polarity surfaces) → Stage 1 (Opus soundness, cold default-refute, `cisem-opus-pe`) → Stage 1.5 (not invoked) →
Stage 2 (Governor decree). Each Phase additionally carries its own Gate (0→1→2→3→4→LIVE, v0.2), reusing the
ARCH-00392/ARCH-00406 phased-plan gate pattern (A8, no new ratification shape invented).

## Self-Compliance (against ARCH-00230 checklist + ARCH-00190 §2, ARCH-00401-amended)
✓ Header (ID/Type/Status/Planning-Status/depth_level/tags/goal/corespine/pocket) ✓ Tier-Routing Declaration (honest)
✓ Anti-Scatter Ordering ✓ The Rule (phased, numeric gates) ✓ Tags+Statuses on every created node ✓ Per-File
Alignment Table (Status column populated) ✓ What DOES / does NOT change ✓ Definition-of-Done reference ✓
Propagation Declaration ✓ Dependencies ✓ Ratification Path ✓ Independent Verifier named ✓ Existing-First stated
(12-source search, disclosed, incl. a sibling-plan collision check) ✓ Path Rejection Declaration ✓ CAL reference ✓
Change log.

## Path Rejection Declaration (CLAUDE.md §2.8)
- ❌ Rejected: implementing any phase in this task — A4/I25 requires ratification before implementation.
- ❌ Rejected: a new standalone tag/status vocabulary — VOC-00001/00002 already exist; this plan's gate reads them.
- ❌ Rejected: a new BLOCK script — `pre-commit-blocks.sh` already has the proven pattern; Phase 0 appends BLOCK 3.
- ❌ Rejected: re-adding "tags+statuses mandatory in plans" — ARCH-00401 Enh.2 already did this; would duplicate a
  ratified clause (A8/I10).
- ❌ Rejected: building IBD-0013 §5(b)'s exhaustive overnight sweep here — genuinely scheduler-dependent, same
  disclosed limitation as the sibling plan; not silently promised.
- ❌ Rejected: folding BP-0011 items 2–4 (HTML generation) "for completeness" — explicitly out of scope, flagged for
  a separate future plan instead of padding.
- ❌ Rejected (v0.2): a new BLOCK-mode escalation for self-review — Phase 4 stays WARN-only (same class as
  `[POCKET]`); self-review is a governance smell, not a seed-integrity violation, and does not warrant I13's BLOCK.
- ❌ Rejected (v0.2): re-deriving/re-measuring `opus_executor_incidents` — the metric already exists and is
  correctly maintained in `quality-ledger.yaml`; Phase 4 only ECHOES it at commit time, it does not recompute it.

## CAL reference (CISEM-ARCH-00390)
Pre-commit `[ZF]` + `[DOD]` + `[ROUTING]`/`[ALIGN]`/`[TAG-STATUS]` (already live) run on this plan file at commit
time. Once implemented, BLOCK 3 joins `pre-commit-blocks.sh`'s existing pre-commit surface (sourced by
`.git/hooks/pre-commit`, already LIVE); `[TAG-STATUS-REPO]`/`[ALIGN-NUM]` join the same `plan-audit.sh` invocation
every commit already runs through — no new hook, no new trigger point.
(v0.2) `[SELF-REVIEW]` (Phase 4) joins the SAME `plan-audit.sh` invocation too — no new hook, no new trigger point;
it reads `quality-ledger.yaml`/`dna/reviews/` (the sibling plan ARCH-00406 Phase 5's convention) by reference, never
copies their content inline (A8).

## Change log
- v0.1 — 2026-07-20 (Sonnet, STRUCTURING tier, dispatched by Opus via BP-0012): initial draft. 4-phase plan
  (Undebatable Gate, Granular Tagging seed, Naming/Numbering Alignment Gate [finally wiring the ARCH-00011-spec'd,
  BP-0005-queued-since-2026-07-18 mechanism, folding BP-0011 item 1], Weekly Agent-Enrichment Cadence) drafted
  against BP-0012's 5-item scope. Confirmed non-overlapping with the sibling plan ARCH-00406 (Existing-First item
  12). Per-File Alignment Table + all ARCH-00401/00402 mandatory sections populated per Core Seeds 1–3. NOT
  committed by Sonnet (Opus commits after judging, per dispatch instructions).
- v0.2 — 2026-07-20 (Sonnet, STRUCTURING tier, Opus-directed fold-in per Governor approval): added **Phase 4
  (ROLE-ENFORCEMENT)** — mechanical checks for the Opus/Sonnet/Haiku roles (new `[SELF-REVIEW]` WARN check reusing
  the already-live `[POCKET]` check's exact shape; surfaces the already-existing `opus_executor_incidents` metric
  in the plan-audit output banner). PLAN-ONLY (Core Seed 1 — nothing implemented this pass); Existing-First item 13
  added; Phase 3's terminal gate relabeled `GATE 3→LIVE` → `GATE 3→4` (no longer terminal); gate chain updated to
  `0→1→2→3→4→LIVE`; Per-File Alignment Table + "What DOES change" + Path Rejection + CAL reference sections
  extended accordingly. Status remains PROVISIONAL-ACTIVE / Planning Status AWAITING-BUILDER-REVIEW — still
  awaiting Opus re-review + Governor ratify; no truth-bearing field written by Sonnet (I7).
