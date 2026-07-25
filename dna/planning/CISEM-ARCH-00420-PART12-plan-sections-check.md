# PART12 — [PLAN-SECTIONS] mandatory-section completeness check (consolidated by reference)
**Parent:** CISEM-ARCH-00420 (Wiring Consolidation minitree root) | **Node ID:** CISEM-ARCH-00420-PART12
**Type:** ARCH | **Status:** PROVISIONAL-ACTIVE | **Planning Status:** AWAITING-BUILDER-REVIEW (drafted 2026-07-25 by cisem-sonnet per Opus Core Seed 1, from Brain-consensus'd approach — NOT ratified; Opus soundness + GI-68 dual review + Governor ratification all still pending)
**depth_level:** L2 | **Position in schema:** T-SYS, planning-governance layer (a plan-audit check)
**Priority:** 1 (install-order item #1 — cheapest, applies to all 33+ plans, ships first) | **tags:** [plan-sections, check-consolidation, arch-00401, ri-0032, plan-audit]
**Authorizing lineage:** `dna/planning/CISEM-ARCH-00420-items123-approach-consolidated.md` Item #1, BRAIN CONSENSUS 2026-07-25 (Planning Status APPROACH-RATIFIED) + `CISEM-ARCH-00420-wiring-consolidation-index.md` (minitree root, PART slot).
**Goal:** A mechanical WARN guard, run at every commit, that flags any CHANGED plan missing an ARCH-00401 mandatory section, catching a dropped section at author-time not review-time (review caught it twice this session — RI-0032). Measurable: a should-FLAG fixture missing a section is flagged; a should-PASS fixture is clean; the 4 existing partial-section checks ([ROUTING]/[ALIGN]/[TAG-STATUS]/[POCKET]) show byte-identical output before/after the refactor.
**Governing corespine:** CS-CREATION-001
**Independent Verifier:** `cisem-sonnet` (design/implementability lens) + `cisem-haiku` (protocol/evidence lens) — GI-68 mandatory dual review, both distinct from the drafting tier.

## Pocket Declaration (§3.3)
- **reasoning_scope:** design ONE plan-audit check ([PLAN-SECTIONS]) + the shared-lib consolidation of the 4 existing checks' extraction logic; not the whole ARCH-00420 program.
- **inherited_constraints:** ARCH-00190/00401 (mandatory section list, authoritative source `.claude/skills/cisem-plan/SKILL.md` Step 1); ARCH-00320 §6 WARN posture; A8 (one source, zero duplicated logic); RI-0032 (mechanical section-completeness, the class this closes); Principle 18B (universal-by-default, class-completeness); PART08's `dna/checks/lib/` shared-lib precedent (reused, not reinvented).
- **output_contract:** `dna/checks/lib/plan-sections-lib.sh` (shared extraction primitives) + `dna/checks/plan-sections.sh` (new check) + a refactor of [ROUTING]/[ALIGN]/[TAG-STATUS]/[POCKET] in `plan-audit.sh` to source the lib, with a two-direction planted test + a no-regression proof.
- **ai_cannot:** self-ratify; regress the 4 existing working checks' output; promote to BLOCK; mark COMPLETE before the deliverable is on disk + tested.
- **recorded_at:** 2026-07-25
- **cal_reference:** ARCH-00390 — the check RUNS at CAL pre-commit; `[ZF]` stays the done-gate; this check is WARN-only, outside `[ZF]`.

## Tier-Routing Declaration (§3.0)
- **GATHER → Haiku:** at build, confirm the authoritative ~15/19-element mandatory-section list verbatim from `SKILL.md` Step 1 + audit the 4 existing checks' exact extraction regex/scope for reuse-fidelity.
- **JUDGE/DESIGN → Opus:** this plan, the lib-boundary design, the Core Seed — here.
- **BUILD → Sonnet:** author the shared lib + `plan-sections.sh` + the refactor + the planted test, per "The Rule", AFTER Governor ratification.

## Executive Summary
A dropped mandatory ARCH-00401 section was caught twice this session at REVIEW time, not author time (RI-0032). Four existing checks ([ROUTING] pa.sh:537 / [ALIGN]:546 / [TAG-STATUS]:558 / [POCKET]:585) already each verify ONE section in isolation, each with its own inline `grep -qiE` extraction — a pattern that would triple in duplication if built naively for the remaining sections. Per Brain consensus 2026-07-25 (Item #1, resolved — CONSOLIDATE BY REFERENCE, not rewrite): factor the shared extraction primitives into `dna/checks/lib/plan-sections-lib.sh`; `[PLAN-SECTIONS]` becomes the SINGLE enumeration of the full mandatory list, calling that lib; the 4 existing checks are REFACTORED (not rewritten, not duplicated) to also source the lib. ONE extraction surface, ZERO duplicated logic, the 4 working checks NOT regressed. WARN, changed-plans-only (same scope as its siblings), NOT in `[ZF]` (heuristic heading/pattern-presence detection).

## Existing-First (§3.2b — searched, stated, reused source-verified from the approach doc)
Searched: `plan-audit.sh` full check list; `.claude/skills/cisem-plan/SKILL.md` Step 1 (the authoritative full mandatory-section list — Node ID/Type/Status/Planning Status/depth_level/tags/goal/governing-corespine/Pocket-Declaration/Independent-Verifier/Tier-Routing/Executive-Summary/Anti-Scatter-Ordering/The-Rule/Tags+Statuses-per-node/Per-File-Alignment-Table/What-DOES-change/What-DOES-NOT-change/DoD-ref/Propagation-Declaration/Dependencies/Self-compliance/Path-Rejection/Change-log); `dna/ssot-registry.yaml`; `dna/checks/` dir. **Finding:** `[ROUTING]`/`[ALIGN]`/`[TAG-STATUS]`/`[POCKET]` ALREADY check 4 of these sections (plan-audit.sh:537/546/558/585) — no full-list enumerator exists. **Genuine gap** (8 sections currently uncovered: Anti-Scatter Ordering, Path Rejection, Propagation Declaration, DoD reference, Executive Summary, the Existing-First statement itself, Dependencies, Change-log). `dna/checks/lib/` precedent: PART08 built `dna/checks/lib/plan-gate.sh` (extract_token/is_plan_ratified/is_strict_governed/authorization_gaps) — the SAME shared-lib pattern this plan reuses (A8), not reinvented.

## Anti-Scatter Ordering (Principle 16 — significance rank of this PART's own steps)
Central: build the shared lib FIRST (Deliverable 0 — everything downstream, both the refactor and the new check, depends on its function signatures) → then the full-list enumeration (Deliverable 2) → then refactor the 4 existing checks to source it, verified byte-identical (Deliverable 3 — must NOT regress). Peripheral (parked, not built here): BLOCK-mode promotion (ARCH-00270's track), retroactive backlog scan (33 plans — Brain: forward-only), a generic mandatory-section engine beyond ARCH-00401 plans.

## The Rule (executable — what Sonnet builds after ratification)
1. Create `dna/checks/lib/plan-sections-lib.sh`:
   - `changed_plans()` — the same staged+unstaged+untracked `dna/planning/*.md` list already computed inline in `plan-audit.sh` (moved verbatim, behavior identical — same move-not-rewrite pattern PART08 used for `extract_token`).
   - `heading_present <file> <regex>` — true iff a `^## ` heading matches (anchored, RI-0012-safe — never a bare substring).
   - `pattern_present <file> <regex>` — a plain `grep -qiE` anywhere in the file, for proxy-field detection (e.g. [POCKET]'s `reasoning_scope`) where the section is not a `##` heading.
2. Refactor `[ROUTING]`/`[ALIGN]`/`[TAG-STATUS]`/`[POCKET]` (plan-audit.sh ~537-591) to `source` the lib and call `heading_present`/`pattern_present` in place of their inline `grep -qiE` — SAME regex strings, SAME scope, plumbing only. Verify by diffing check output before/after on the current repo state (must be byte-identical except for the new `[PLAN-SECTIONS]` block).
3. Create `dna/checks/plan-sections.sh`, sourcing the same lib, enumerating the FULL mandatory list (listed explicitly in the check's own header comment, so the enumeration is auditable) for each file in `changed_plans()`. For the 4 sections already covered by `[ROUTING]`/`[ALIGN]`/`[TAG-STATUS]`/`[POCKET]`, `[PLAN-SECTIONS]` lists them in a cross-reference note rather than re-flagging (avoid double-noise); for the 8 currently-uncovered sections it flags any absent, naming both the plan path and the missing section.
4. Wire one call line into `plan-audit.sh` after `[POCKET]`: `bash dna/checks/plan-sections.sh 2>/dev/null` (same idiom as `[BUILD-STATE]`/`[INJECTION-SCAN]`).
5. WARN-only; NOT added to the `[ZF]` formula (heuristic heading/pattern-presence, same posture as `[SEED]`/`[TEMPLATE]`/`[BUILD-STATE]`).
6. **Shape-disclosure (honest boundary, PART02 Step-6 precedent):** print a header line each run — `[PLAN-SECTIONS] detects heading/pattern PRESENCE only, never content QUALITY (a present-but-empty section passes)`.

## Planted test (both directions — Definition-of-Done, MECHANICAL grade)
Fixtures under `dna/checks/fixtures/plan-sections/` (synthetic plans, never real):
- **should-FLAG:** a changed synthetic plan missing "Path Rejection Declaration" + "Change log" → both named in output.
- **should-PASS:** a synthetic plan carrying all mandatory sections → clean.
- **no-regression proof (the explicit Brain requirement):** `plan-audit.sh` run on the current repo state before vs after the lib refactor — `[ROUTING]`/`[ALIGN]`/`[TAG-STATUS]`/`[POCKET]` output byte-identical.
Closure-grade: **MECHANICAL** — the check's own output on the fixtures + the diff proof are the finish-line evidence, shown in the build report.

## What DOES change
- NEW: `dna/checks/lib/plan-sections-lib.sh`
- NEW: `dna/checks/plan-sections.sh`
- NEW: `dna/checks/fixtures/plan-sections/` (fixtures + run-test.sh)
- MODIFIED: `dna/checks/plan-audit.sh` — `[ROUTING]`/`[ALIGN]`/`[TAG-STATUS]`/`[POCKET]` refactored to source the lib (behavior identical) + one new call line + `[PLAN-SECTIONS]` output block (additive, WARN-only, NOT added to `[ZF]`)

## Per-File Alignment Table (ARCH-00401 mandatory)
| File | naming-registry | schema placement (SCHEMA-00001) | tag | status |
|---|---|---|---|---|
| `dna/checks/lib/plan-sections-lib.sh` | non-node lib (dna/checks/lib/ family, like PART08's plan-gate.sh) | T-SYS, check-lib layer | check, lib | NEW → PROVISIONAL-ACTIVE on build |
| `dna/checks/plan-sections.sh` | non-node script (dna/checks/ family) | T-SYS, plan-audit check layer | check | NEW → PROVISIONAL-ACTIVE on build |
| `dna/checks/fixtures/plan-sections/*.md` | non-node fixtures (synthetic, test-only) | T-SYS, check-fixture layer | fixture, test | NEW → PROVISIONAL-ACTIVE on build |
| `dna/checks/plan-audit.sh` | existing (registered aggregator) | T-SYS, CAL pre-commit | check | MODIFIED (refactor + additive call + output block) |

## What does NOT change
- The `[ZF]` formula — `[PLAN-SECTIONS]` is WARN-only, outside it.
- BLOCK posture — WARN only; BLOCK is ARCH-00270's track, not this plan.
- The REGEX/behavior of `[ROUTING]`/`[ALIGN]`/`[TAG-STATUS]`/`[POCKET]` — only their extraction plumbing moves to the lib; output is byte-identical.
- No retroactive flag of the 33-plan backlog (forward-only — same precedent as PART02/PART08 + BLOCK 4).

## Definition-of-Done (ref — dna/checks/definition-of-done.md, not re-derived)
Wired (`plan-sections.sh` + lib exist + called in plan-audit.sh) + runs at CAL pre-commit + planted test passes both directions + no-regression diff proof shown + `[ZF]` still ACHIEVED. Any leg unmet → honest NOT-YET-WIRED, never "done".

## Propagation Declaration
The shared lib IS the propagation surface: any future ARCH-00401 section-check addition sources `plan-sections-lib.sh` (A8), never reinvents extraction. Self-propagating on all changed plans by construction (universal enumeration). No mirror/regenerated view depends on it.

## Dependencies
- **Blocks-on:** Governor ratification (A4/A11); GI-68 dual review.
- **Independent of:** PART13/PART01 at the code level (no shared-lib dependency between them); ships FIRST in the Brain-agreed build order **1 (PART12) → 2 (PART13) → 3 (PART01)**.
- **Unblocks-for:** a trustworthy section-completeness signal for every future plan (the 33+ plan backlog is drained separately, forward-looking only).

## Self-compliance (against ARCH-00230)
Goal measurable (fixtures + no-regression diff) · corespine declared (CS-CREATION-001) · Existing-First stated + source-verified · core-vs-instance: a reusable CHECK (core), justified by the platform-wide ARCH-00401 need · pocket declared · size gate: this plan is under 200 lines · dogfoods its own rule (not marked COMPLETE until `plan-sections.sh` is on disk + tested + no-regression proven).

## Path Rejection Declaration
- **REJECTED: rewrite `[ROUTING]`/`[ALIGN]`/`[TAG-STATUS]`/`[POCKET]` from scratch inside `plan-sections.sh`** — forks the definition (A8), risks regressing 4 working checks; Brain explicitly resolved CONSOLIDATE BY REFERENCE, not rewrite.
- **REJECTED: retro-flag the 33-plan backlog** — noise at scale; Brain answered FORWARD-ONLY explicitly (2026-07-25).
- **REJECTED: promote directly to BLOCK** — heuristic heading/pattern detection; WARN-first is the standing precedent for every sibling check.
- **REJECTED: a new definition of "mandatory section" independent of `SKILL.md` Step 1** — would fork the authoritative list (A8); reuse it verbatim.

## Change log
- v0.1 2026-07-25 (cisem-sonnet, drafted per Opus Core Seed 1 + Brain-consensus'd approach `CISEM-ARCH-00420-items123-approach-consolidated.md` Item #1) — folds RI-0032 (the trigger) + PART08's shared-lib precedent (the pattern reused). Planning Status: AWAITING-BUILDER-REVIEW — NOT self-ratified (I7); awaits Opus soundness + GI-68 dual review + Governor decree.
