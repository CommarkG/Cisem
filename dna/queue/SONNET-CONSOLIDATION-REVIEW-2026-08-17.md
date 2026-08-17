# Consolidation & Architecture Review — Report for cisem-sonnet
**Author:** Claude Fable 5 (orchestrator seat) | **Date:** 2026-08-17
**tags:** [consolidation, ssot, architecture, checks, agents, skills, report]
**Status:** DRAFT-REPORT (analysis input; NOT a plan — no build is authorized by this file; A4/I25 holds)
**authorizing_plan:** NONE-YET (Governor-directed analysis report; any build below requires a ratified plan via /cisem-plan)
**Existing-First search stated (I19):** ssot-registry.yaml read in full (no existing home for a check-library or registry-contract concept — "no match; index coverage not proven complete"); governor-insights sealed list checked (GI-08 one-source and GI-10 existing-first GOVERN this report, none pre-empt its items); dna/checks/ and .claude/agents|skills enumerated by glob.

## PURPOSE
Fable's expert review found 7 consolidation patterns (P1–P7). Sonnet's job when dispatched: VERIFY each hypothesis with evidence, produce a consolidation map that feeds a /cisem-plan draft. ZERO builds, ZERO edits to governed files in the verify phase.

[[CORE-SEED | MUST: this report authorizes ANALYSIS ONLY — gather evidence, verify hypotheses, report; no Edit/Write to governed files, no truth-fields (I7), no new files except your findings report in dna/learning-registry/agent-findings/ | WHY: A4/I25 — nothing is built without a ratified plan; Sonnet executes agreed plans, this is the pre-plan evidence stage | VERIFY: did the run change zero governed files and cite disk evidence for every verdict? | APPLIES_TO: any Sonnet run executing this report]]

[[CORE-SEED | MUST: classify every finding NEW-DRIFT vs ALREADY-RESOLVED against current repo state (RI-0002); every "exists/duplicated" claim cites file:line (I22); anchored field-value matching only when grepping statuses (RI-0012) | WHY: reviewer false-positives and substring bugs are the two known failure classes of exactly this work | VERIFY: does every table row carry a citation + a NEW/RESOLVED tag? | APPLIES_TO: any Sonnet run executing this report]]

## BRAIN CROSS-CHECK FOLDED (2026-08-17, Governor-relayed — consensus corrections, binding on the eventual plan)
1. **SEQUENCE CORRECTED: P2 BEFORE P1, alone.** P2 (config-out-of-code) gives P1 a fixture: the machine-readable enum is what the library validates against and what planted tests plant. Running both at once gives a misbehaving check two candidate causes with one symptom. (Brain (a), Fable concurs.)
2. **P1 perf justification is INHERITED-UNVERIFIED until measured** (Principle 22): enumeration cost must be MEASURED before the refactor; performance may not even be a reason. The timing table below is therefore a P1 *precondition*, not a side-deliverable.
3. **Five P1 guards (Brain (b), all accepted — the eventual plan MUST carry them):**
   (g1) planted tests fire at EACH SCRIPT'S ENTRY POINT — 21 plants, not one library plant (a refactor can silently drop a caller and a library-level plant still passes);
   (g2) fail-CLOSED on load: every caller asserts lib.sh actually loaded, absence = hard non-zero exit (a check that can't load its library and exits 0 reports false success);
   (g3) at least ONE check on the library must NOT depend on the library (no self-validating defect);
   (g4) audit the CONSUMERS of the 21 scripts' exit codes in the same phase — unifying exit semantics changes what the pre-commit gate reads as pass;
   (g5) the class fix is ANCHORED matching + a test asserting a superstring does NOT match — moving 21 substring bugs into one place is not fixing the class (RI-0012).
4. **P3 REFRAMED: lint the minimum contract, never unify the schema.** {id,date,status,routes_to} is a floor, not a ceiling; the lint is SILENT on extra fields. Each registry's `status` resolves against a NAMED per-registry vocabulary (P2 serves this without forcing one enum on seven registries). The win is making the implicit contract explicit — available without unifying anything. (A9 facet-preservation, arriving as tooling discipline.)
5. **P4 SHARPENED:** where a `regenerates:` entry has NO generator, do not ship a "staleness" check that stays red forever (a permanently-red check trains people to ignore checks). Fable's partial pushback, accepted into the design: SSOT-vs-mirror DIVERGENCE is still hand-fixable (sync the mirror), so a divergence WARN is actionable — but the field must be honestly relabeled (declared views, manually synced) wherever no engine exists. Sonnet's P4 verify: per entry, record whether a generator EXISTS; split findings into engine-backed vs hand-synced.

## P1 — SHARED CHECK LIBRARY (verify SECOND — after P2; see Brain guards above)
Hypothesis: the 21 scripts in dna/checks/ each re-implement (a) governed-file enumeration, (b) field-value matching, (c) WARN/BLOCK/PASS reporting, (d) planted-test proof. The RI-0012/0013 substring-bug class recurs because matchers are hand-rolled; RI-0041b slowness is dominated by repeated whole-tree enumeration.
Sonnet verifies: for each check script, one table row: script | enumerates tree itself? (find/grep -r count) | own matcher pattern? | own report format? | has planted-test? Then: time each script individually (serves RI-0041b profiling — MEASURED numbers, Principle 22; do NOT inherit the "~10 min" figure, measure it).
Deliverable: duplication matrix + timing table + a proposed lib.sh function list (enumerate_governed / field_value / report / planted_test) with which scripts would consume each.

## P2 — MACHINE-READABLE STATUS ENUM (the hidden fork)
Hypothesis: status_enum SSOT is prose (ARCH-00011 §4 + VOC-00002 mirror); checks and registries hardcode their own status lists (creation-gate, plan-audit I16/I24, root-insights contract, archive-ledger dispositions, planning statuses).
Sonnet verifies: enumerate every hardcoded status list across dna/checks/*.sh + registry header contracts; diff them against ARCH-00011 §4 / VOC-00002. Report every divergence file:line.
Deliverable: the full enum-divergence map + a proposed one-YAML shape (context-scoped enums: node/planning/archive/insight) that all consumers would READ.

## P3 — REGISTRY CONTRACT + ONE registry-lint
Hypothesis: root-insights, governor-insights, session-learning-index, quality-ledger, agent-profiles, archive-ledger, naming-registry share the implicit shape {id, date, status, routes_to/feeds, note} with divergent field names.
Sonnet verifies: extract each registry's actual field contract (from headers + 3 sample entries each); build the common-core vs per-registry-delta table.
Deliverable: a registry-contract proposal + note which existing per-registry checks ([ARCHIVE], contract prose) a single registry-lint would subsume. Flag explicitly: this makes WEE (ARCH-00426 L1/L2) cheaper — cite where its plan assumes per-registry readers.

## P4 — ACTIVATE THE regenerates: GRAPH (staleness detector)
Hypothesis: ssot-registry `regenerates:` lists views per SSOT but no mechanism verifies freshness — a declared graph, no engine (EXISTS≠ACTIVE, I23).
Sonnet verifies: for 5 sample entries (axioms, persona, invariants, learning_outcomes, status_enum), check whether any listed regenerated view is stale vs its SSOT (content spot-check, not just mtime). Include the parked GI item: persona §1.6 mirror vs persona-collaborator.md divergence check — this IS that item's mechanism.
Deliverable: staleness findings + a proposed small regen-check design (read ssot-registry, compare, WARN) — feeds GI-45 dashboard later.

## P5 — AGENT/SKILL BOOTSTRAP DEDUP + HANDOFF TEMPLATE UNIFICATION
Hypothesis: 5 agents (.claude/agents/) + 5 skills each carry near-duplicate bootstrap sequences + standing-checks blocks; a new RI requires editing 6+ files. Separately: ARCH-00350 handoff, BUILD-PROMPT-template, one-click packets share one shape (bootstrap+goal+seeds+steps+verify).
Sonnet verifies: diff the bootstrap/standing-check blocks across all agent files (verbatim-duplicate lines count); check cisem-cic-auditor and cisem-fable are in ssot-registry ai_persona.regenerates (currently fable yes, cic-auditor ABSENT — verify and flag). Map the three handoff-family templates' shared sections.
Deliverable: dedup proposal (one agent-bootstrap reference doc; agents keep role-delta only) + one parameterized handoff template with 3 profiles. NO edits — proposal only.

## P6 — ONE BOUNDARY PIPELINE (persistence consolidation)
Hypothesis: five overlapping boundary mechanisms (ARCH-00370 harvest, Principle-13 save-all, save-raw-activity.sh, verbatim-index, WITNESS COMPACT STATE) with no single owner of "the boundary".
Sonnet verifies: list each mechanism's trigger, output file(s), and overlap; cite where pre-compact.sh fires which.
Deliverable: tiered-pipeline proposal (raw → session log → distilled RI → COMPACT STATE; one hook fires all) marking what consolidates vs what stays distinct (A9 — facets singly-homed, not mushed).

## P7 — PATTERN PROMOTIONS (smaller, list-verify only)
(a) planted-fail-proven behavioral testing (functional-check.mjs pattern) → lib.sh planted_test so every check self-proves; verify which of the 21 checks currently lack a planted proof.
(b) KL-0003 `alignment:` axis (predates-changes/conflicts/aligned) → registry-wide external-intake field (A12 wall); verify no existing intake schema already carries it.

## SEQUENCE RECOMMENDATION (Fable + Brain consensus 2026-08-17 — Governor decides)
Phase 1 = **P2 alone** (machine-readable enum — the fixture). Phase 2 = **P1** (check library, under guards g1–g5, perf claim measured first). Phase 3 = P3 (lint-the-minimum) + P4 (engine-backed vs hand-synced split). Phase 4 = P5+P6+P7. Each phase = one /cisem-plan, GI-68 dual review, planted-test coverage mandatory on any check-layer change.

## RETURN CONTRACT (Sonnet)
Findings report → dna/learning-registry/agent-findings/ (one file, this date, tags+Status per creation-gate). Full honest board: per-hypothesis CONFIRMED / PARTLY / REFUTED with citations. HARVEST-BEFORE-RETURN: end with what could not be verified and why. State explicitly: zero governed files modified.
