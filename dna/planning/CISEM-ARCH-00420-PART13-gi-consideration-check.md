# PART13 — [GI-CONSIDERATION] wisdom-citation check (+ [PENDING-DEPENDENCY] named as Phase 2)
**Parent:** CISEM-ARCH-00420 (Wiring Consolidation minitree root) | **Node ID:** CISEM-ARCH-00420-PART13
**Type:** ARCH | **Status:** PROVISIONAL-ACTIVE | **Planning Status:** CONSENSUS-REACHED (Opus soundness + GI-68 dual-review folded 2026-07-25 — awaiting Governor ratification, non-delegable; NOTHING built until ratified, A4/A11)
**depth_level:** L2 | **Position in schema:** T-SYS, planning-governance layer (a plan-audit check)
**Priority:** 2 (install-order item #2 — "the item the Governor's questions were really about"; ships 2nd, per Brain build order 1→2→3) | **tags:** [gi-consideration, pending-dependency, wisdom, i19-extension, plan-audit]
**Authorizing lineage:** `dna/planning/CISEM-ARCH-00420-items123-approach-consolidated.md` Item #2, BRAIN CONSENSUS 2026-07-25 (Planning Status APPROACH-RATIFIED) + `CISEM-ARCH-00420-wiring-consolidation-index.md` (minitree root, PART slot).
**Goal:** A plan must cite the specific governor-insights/root-insights it depends on or strengthens, closing the disconnect between session-start wisdom-injection and per-plan authoring (the Governor's Q6/Q7). Measurable: a should-FLAG fixture (no citation, or a fabricated id) is flagged; a should-PASS fixture (one real id) is clean; no citation-count threshold is enforced.
**Governing corespine:** CS-CREATION-001
**Independent Verifier:** `cisem-sonnet` (design/implementability lens) + `cisem-haiku` (protocol/evidence lens) — GI-68 mandatory dual review, both distinct from the drafting tier.

## Pocket Declaration (§3.3)
- **reasoning_scope:** design `[GI-CONSIDERATION]` (this PART, WARN) + NAME (not build) `[PENDING-DEPENDENCY]` as a coupled Phase-2 sibling; not the periodic GI-68 review-sampling mechanism itself (already exists — reused, not rebuilt).
- **inherited_constraints:** GI-10/`[I19]` (Existing-First, RATIFIED-WIRED, CLAUDE.md §3.2b — the natural PARENT this extends); ARCH-00320 §6 WARN posture; Principle 16 (anti-scatter, prove the harder check second); A8 (extend, never fork); RI-0032 sibling (fix-at-creation, same family as RI-0009); Brain's explicit resolutions (presence-not-count; relevance via SAMPLING inside the existing GI-68 review, never a new mechanism).
- **output_contract:** a `wisdom_considered:` header-field convention (ARCH-00230) + `dna/checks/gi-consideration.sh` (WARN check: presence of ≥1 EXISTING GI/RI id) wired into `plan-audit.sh`; `[PENDING-DEPENDENCY]` NAMED as Phase 2, not built in this PART.
- **ai_cannot:** self-ratify; build a NEW relevance-scoring mechanism (Brain explicitly forbade it); build `[PENDING-DEPENDENCY]` in this PART (separate goal→approach→plan→ratify cycle); demand a citation COUNT (presence only, per Brain's anti-over-citation guard).
- **recorded_at:** 2026-07-25
- **cal_reference:** ARCH-00390 — the check RUNS at CAL pre-commit; WARN, outside `[ZF]`.

## Tier-Routing Declaration (§3.0)
- **GATHER → Haiku:** at build, confirm the CURRENT `[I19]` Existing-First check's exact regex scope (plan-audit.sh ~194-212) so `[GI-CONSIDERATION]` extends it without collision; enumerate real plans' existing `blocks-on:`/`unblocks-for:` phrasing (feeds Phase-2 design, not built here).
- **JUDGE/DESIGN → Opus:** this plan, the presence-not-count design, the GI-68-sampling-reuse decision (no new mechanism), the Core Seed — here.
- **BUILD → Sonnet:** author `gi-consideration.sh` + the `wisdom_considered:` field convention + the planted test, per "The Rule", AFTER Governor ratification.

## Executive Summary
Plans routinely fail to connect to the accumulated governor-insights/root-insights wisdom that `session-start.sh` injects at the session boundary — nothing at PLAN-TIME verifies a plan actually CITES the wisdom it depends on or strengthens (the disconnect the Governor's Q6/Q7 named). Per Brain consensus 2026-07-25 (Item #2, resolved): `[GI-CONSIDERATION]` EXTENDS `[I19]`/GI-10 (A8) — a plan's header carries a `wisdom_considered:` line citing ≥1 GI-NNN/RI-NNNN id; the check verifies PRESENCE of ≥1 cited id that actually EXISTS (grepped against `governor-insights.yaml`/`root-insights.yaml`), NEVER a count threshold. RELEVANCE is spot-checked by SAMPLING inside the EXISTING periodic GI-68 dual review — Brain's explicit fix for the self-certification hole ("cite an irrelevant-but-present insight to pass"), with NO new relevance mechanism built. `[PENDING-DEPENDENCY]` (verifying a plan's `blocks-on:` items resolve to real tracked items) is a coupled Phase-2 sibling, FORWARD-ONLY like PART02/PART08 + BLOCK 4's precedent — NAMED here, not built (Principle 15: prove the harder check second).

## Existing-First (§3.2b — searched, stated, reused source-verified from the approach doc)
Searched: `dna/checks/*.sh` (no `[GI-CONSIDERATION]`/`[PENDING-DEPENDENCY]` exists) · `dna/ssot-registry.yaml` · `dna/naming-manifest.yaml` — clean, genuine gap. Natural PARENT = **GI-10/[I19]** (Existing-First, RATIFIED-WIRED, CLAUDE.md §3.2b, plan-audit.sh lines 191-212) — this check EXTENDS it (A8), not a second Existing-First system. Plans already declare `blocks-on:`/`unblocks-for:` (ARCH-00190) but nothing verifies resolution — that adjacent gap is CEDED to `[PENDING-DEPENDENCY]` Phase 2, not solved here. `session-start.sh` injects GI/RI content at the session boundary but no PLAN-TIME gate consults/cites it (approach-doc source-verified 2026-07-25). Retroactivity answered explicitly by Brain: FORWARD-ONLY, not retro-flagged to the 33-plan backlog (drained separately by ARCH-00420 install-order item #4).

## Anti-Scatter Ordering (Principle 16 — significance rank of this PART's own steps)
Central: get the `wisdom_considered:` field CONVENTION + its presence-check right first (Steps 1-2 — the whole gate depends on a stable field shape) → then id-existence verification against the real registries (Step 3) → then the shape-disclosure (presence ≠ relevance, Step 5). Peripheral (parked, NOT built here): `[PENDING-DEPENDENCY]` itself (named as Phase 2, separately ratified), retroactive backlog scan (Brain: forward-only), a full automated relevance-scoring engine (Brain explicitly rejected — reuse GI-68 sampling instead).

## The Rule (executable — what Sonnet builds after ratification)
1. Add `wisdom_considered:` as a header-field convention to `dna/protocols/CISEM-ARCH-00230-file-creation-template.md`'s plan-specific checklist (e.g. `wisdom_considered: [GI-10, RI-0032]`) — ACTUAL EDIT at build, shown not described (mirrors PART08 Deliverable 3's edit-in-place idiom).
2. Create `dna/checks/gi-consideration.sh`:
   a. Enumerate changed plans (reuse PART12's `plan-sections-lib.sh` `changed_plans()` if it has landed by build time — A8; else the identical inline pattern `[ROUTING]` already uses, so this PART is NOT hard-blocked on PART12's build order).
   b. For each: extract a `wisdom_considered:` field line (value-anchored per RI-0012 — the field marker, never a bare substring scan of the value).
   c. **Absent** → FLAG `MISSING: <file> (no wisdom_considered: citation — extends I19/GI-10)`.
   d. **Present** → parse the cited ids (bracket/comma-split); verify EACH resolves with a **DELIMITER-ANCHORED** match (GI-68 design-review fix — RI-0012 class, caught live: an unanchored `grep -q "id: GI-7"` FALSE-PASSES on `id: GI-70,`/`id: GI-72,`): `grep -qE "id: <ID>(,|\}|[[:space:]]|$)"` against `dna/governor-insights.yaml` (GI ids are 2-digit, prefix-collision-prone — MUST anchor), OR `grep -q "^  <ID>:"` against `dna/learning-registry/root-insights.yaml` (RI ids are line-start-anchored + fixed-4-digit, already collision-safe). **Zero resolve** → FLAG `STALE-CITATION: <file> (wisdom_considered ids do not resolve to any real GI/RI)`. **≥1 resolves** → CLEAN — **presence-not-count** (Brain's anti-over-citation guard: relevance of the cited id is judged by the GI-68 reviewer's sampling pass, Step 5, never demanded as a count here).
3. Wire one call line into `plan-audit.sh` (after `[PLAN-SECTIONS]` if present, else after `[POCKET]`): `bash dna/checks/gi-consideration.sh 2>/dev/null`.
4. WARN-only; NOT added to `[ZF]` (heuristic id-citation detection, same posture as `[SEED]`/`[BUILD-STATE]`).
5. **Shape-disclosure (honest boundary):** print each run — `[GI-CONSIDERATION] verifies CITATION-EXISTS, never RELEVANCE — relevance is spot-checked by SAMPLING inside the periodic GI-68 dual review (Brain 2026-07-25); no separate relevance mechanism exists or is planned.`
6. **`[PENDING-DEPENDENCY]` (NAMED, NOT BUILT this PART):** a future coupled check verifying a plan's `blocks-on:` items resolve to a real tracked plan/BP/RI id and surfacing that item's current status — its own goal→approach→plan→ratify cycle (Phase 2), FORWARD-ONLY (changed-plans-only, like PART02/PART08 + BLOCK 4's precedent), explicitly NOT retroactive to the 33-plan backlog (Brain's answer, 2026-07-25).

## Planted test (both directions — Definition-of-Done, MECHANICAL grade)
Fixtures under `dna/checks/fixtures/gi-consideration/` (synthetic plans, never real):
- **should-FLAG (missing):** synthetic plan with no `wisdom_considered:` line → FLAGGED.
- **should-FLAG (fabricated id):** synthetic plan with `wisdom_considered: [GI-99999]` (does not exist) → STALE-CITATION flagged.
- **should-FLAG (PREFIX-COLLISION — the RI-0012 regression proof, GI-68 fix):** synthetic plan with `wisdom_considered: [GI-7]` (NOT a real id, but a string-prefix of the real `GI-70`/`GI-72`) → MUST be STALE-CITATION flagged; a naive unanchored `grep` would wrongly PASS this — the fixture proves the delimiter-anchor works.
- **should-PASS:** synthetic plan with `wisdom_considered: [GI-10]` (real, exists in `governor-insights.yaml`) → CLEAN.
Closure-grade: **MECHANICAL** — the check's own output on the three fixtures is the finish-line evidence, shown in the build report.

## What DOES change
- NEW: `dna/checks/gi-consideration.sh`
- NEW: `dna/checks/fixtures/gi-consideration/` (3 synthetic fixtures + run-test.sh)
- MODIFIED: `dna/checks/plan-audit.sh` — one call line + `[GI-CONSIDERATION]` output block (additive, WARN-only, NOT added to `[ZF]`)
- MODIFIED: `dna/protocols/CISEM-ARCH-00230-file-creation-template.md` — adds the `wisdom_considered:` field-checklist line

## Per-File Alignment Table (ARCH-00401 mandatory)
| File | naming-registry | schema placement (SCHEMA-00001) | tag | status |
|---|---|---|---|---|
| `dna/checks/gi-consideration.sh` | non-node script (dna/checks/ family) | T-SYS, plan-audit check layer | check | NEW → PROVISIONAL-ACTIVE on build |
| `dna/checks/fixtures/gi-consideration/*.md` | non-node fixtures (synthetic, test-only) | T-SYS, check-fixture layer | fixture, test | NEW → PROVISIONAL-ACTIVE on build |
| `dna/checks/plan-audit.sh` | existing (registered aggregator) | T-SYS, CAL pre-commit | check | MODIFIED (additive call + output block) |
| `dna/protocols/CISEM-ARCH-00230-file-creation-template.md` | existing node | T-SYS, creation SSOT | protocol | MODIFIED (field checklist line) |

## What does NOT change
- The `[ZF]` formula — `[GI-CONSIDERATION]` is WARN-only, outside it.
- `[PENDING-DEPENDENCY]` stays UNBUILT this PART (named only, own future ratification cycle).
- No new relevance-scoring mechanism is built (Brain explicitly rejected it — GI-68 sampling is reused).
- No retroactive flag of the 33-plan backlog (forward-only — Brain's explicit answer).

## Definition-of-Done (ref — dna/checks/definition-of-done.md, not re-derived)
Wired (`gi-consideration.sh` exists + called in plan-audit.sh) + runs at CAL pre-commit + planted test passes both directions + `[ZF]` still ACHIEVED. Any leg unmet → honest NOT-YET-WIRED, never "done".

## Propagation Declaration
Propagates to: `dna/protocols/CISEM-ARCH-00230-file-creation-template.md` (SSOT, edited) → `.claude/skills/cisem-plan/SKILL.md` Step 1 (reference the field) → the GI-68 dual-review protocol (reviewers now sample `wisdom_considered:` citations for relevance as part of their EXISTING review pass — named as the propagation target, no new sampling mechanism built).

## Dependencies
- **Blocks-on:** Governor ratification (A4/A11); GI-68 dual review.
- **Reuses (soft, not blocking):** PART12's `plan-sections-lib.sh` `changed_plans()` IF landed by build time (A8), else the inline fallback — no hard code dependency between PARTs. Brain-agreed build order **1 (PART12) → 2 (PART13) → 3 (PART01)** governs SHIP order, not a code dependency.
- **Unblocks-for:** `[PENDING-DEPENDENCY]` Phase 2 (cites this PART's `wisdom_considered:` field convention as its own sibling pattern).

## Self-compliance (against ARCH-00230)
Goal measurable (3-fixture planted test, presence-not-count verified) · corespine declared (CS-CREATION-001) · Existing-First stated + source-verified, extends GI-10/[I19] · core-vs-instance: a reusable CHECK (core), justified by the platform-wide wisdom-connection need · pocket declared · size gate: under 200 lines · dogfoods its own rule (not marked COMPLETE until `gi-consideration.sh` is on disk + tested).

## Path Rejection Declaration
- **REJECTED: a citation-COUNT threshold (e.g. ≥2 ids)** — Brain: presence-not-count avoids bureaucratic over-citation.
- **REJECTED: build a NEW relevance-scoring mechanism** — Brain: fold into the EXISTING GI-68 sampling pass, do not build a second system.
- **REJECTED: retroactively flag the 33-plan backlog** — Brain: forward-only, would be pure noise.
- **REJECTED: bundle `[PENDING-DEPENDENCY]` into this same PART** — Principle 15 (divergent-iteration: prove the wisdom-citation gate flawless first, the harder dependency-resolution gate as its own proven step); Brain's stated RECOMMEND was to lead with `[GI-CONSIDERATION]` and carry `[PENDING-DEPENDENCY]` as a coupled Phase-2, followed here.

## Change log
- v0.1 2026-07-25 (cisem-sonnet, drafted per Opus Core Seed 2 + Brain-consensus'd approach `CISEM-ARCH-00420-items123-approach-consolidated.md` Item #2) — folds Brain's presence-not-count + sample-relevance-via-GI-68 resolution + the forward-only retroactivity answer.
- v0.2 2026-07-25 (Opus, GI-68 dual-review folded — Sonnet design) — accepted 1 MAJOR + 1 MINOR: the GI-id lookup was UNANCHORED (`grep "id: GI-7"` false-passes on `GI-70`/`GI-72` — the exact RI-0012 substring class this repo already fixed, reintroduced in a sibling check) → delimiter-anchored `grep -qE "id: <ID>(,|}|space|$)"`; added a PREFIX-COLLISION planted fixture (`GI-7`) that actually exercises the bug (the old `GI-99999` fixture didn't). Haiku: 0 protocol gaps. Planning Status → CONSENSUS-REACHED.
