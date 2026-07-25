# PART01 — GI-68 dual-review MECHANISM (`/cisem-plan-verify` skill + [RATIFY-GATE] extension)
**Parent:** CISEM-ARCH-00420 (Wiring Consolidation minitree root) | **Node ID:** CISEM-ARCH-00420-PART01
**Type:** ARCH | **Status:** PROVISIONAL-ACTIVE | **Planning Status:** AWAITING-BUILDER-REVIEW (drafted 2026-07-25 by cisem-sonnet per Opus Core Seed 3, from Brain-consensus'd approach — NOT ratified; Opus soundness + GI-68 dual review (bootstrapped by hand, once) + Governor ratification all still pending)
**depth_level:** L1 | **Position in schema:** T-SYS, plan-review layer (a Claude Code skill + a plan-audit gate extension)
**Priority:** 2 (its existing index slot per the wiring-consolidation-index; ships 3rd in Brain's build order 1→2→3 — unblocks 3 stuck plans) | **tags:** [gi-68, dual-review, cisem-plan-verify, ratify-gate, plan-review-mechanism]
**Authorizing lineage:** `dna/planning/CISEM-ARCH-00420-items123-approach-consolidated.md` Item #3, BRAIN CONSENSUS 2026-07-25 (Planning Status APPROACH-RATIFIED) + `CISEM-ARCH-00420-wiring-consolidation-index.md` (minitree root, PART01 slot).
**Goal:** Make the mandatory Sonnet+Haiku dual review a repeatable ONE-COMMAND procedure that dispatches both lenses, collects verdicts, and records them — so every plan gets the same review without hand-assembly (done by hand 3× this session). Measurable: a should-FLAG fixture (RATIFIED, no dual-review citation) is flagged by the extended `[RATIFY-GATE]`; a should-PASS fixture (citation present) is clean; a real stuck plan run through the skill shows both verdicts landed in the file.
**Governing corespine:** CS-CREATION-001
**Independent Verifier:** `cisem-sonnet` (design/implementability lens) + `cisem-haiku` (protocol/evidence lens) — GI-68 mandatory dual review; for THIS plan the review is hand-dispatched once (the mechanism does not yet exist to review itself — a one-time bootstrap, same class as PART08 dogfooding its own gate).

## Pocket Declaration (§3.3)
- **reasoning_scope:** design the `/cisem-plan-verify` skill's dispatch contract + the `[RATIFY-GATE]` extension citing dual-review verdicts; not the skill's full prompt text (drafted at build) nor a new auto-fire hook (named as future, not built).
- **inherited_constraints:** ARCH-00190 §3 Stages 1/1.5/2 (the existing ratification path, unchanged); GI-68 (mandatory dual-tier review, RATIFIED 2026-07-23 by Governor decree); GI-17 (two-model verify, the sibling this extends to EVERY plan); `[RATIFY-GATE]` (plan-audit.sh:626, the existing Stage-1-citation requirement); the verified `agent`-type PreToolUse hook primitive (Brain-verified to exist, experimental, 60s default timeout) — named as a future path, not adopted now.
- **output_contract:** `.claude/skills/cisem-plan-verify/SKILL.md` (dispatches cisem-sonnet + cisem-haiku on a given plan path with the standard GI-68 prompts, records both verdicts into the plan file); an EXTENDED `[RATIFY-GATE]` in `plan-audit.sh` requiring a RATIFIED plan cite BOTH its Opus Stage-1 verdict (existing requirement) AND its dual-review verdicts (new); a planted test both directions.
- **ai_cannot:** self-ratify; auto-fire dispatch via a git hook (verified impossible — a shell/git hook cannot spawn subagents); let the skill be a rubber-stamp (Opus still value-assesses per GI-68, unchanged, never automated away).
- **recorded_at:** 2026-07-25
- **cal_reference:** ARCH-00390 — the `[RATIFY-GATE]` extension runs at CAL pre-commit (the mechanical backstop that PROVES review happened); the skill itself is an Opus-invoked PROCEDURE, not a CAL auto-fire mechanism (honest boundary, stated below, never claimed otherwise).

## Tier-Routing Declaration (§3.0)
- **GATHER → Haiku:** at build, confirm the CURRENT `[RATIFY-GATE]` exact regex (plan-audit.sh:626-640) + re-confirm the `agent`-type hook's documented contract (spawn semantics, timeout) before the skill spec is finalized — verified, not assumed (RI-0025).
- **JUDGE/DESIGN → Opus:** this plan, the skill-vs-hook boundary decision, the `[RATIFY-GATE]` extension design, the Core Seed — here.
- **BUILD → Sonnet:** author the `/cisem-plan-verify` skill + the `[RATIFY-GATE]` extension + the planted test, per "The Rule", AFTER Governor ratification.

## Executive Summary
The mandatory GI-68 Sonnet+Haiku dual review has been hand-assembled three times this session (manual dispatch, manual verdict collection) — no repeatable procedure exists. Per Brain consensus 2026-07-25 (Item #3, resolved AND named, not closed): a git-hook/shell plan-audit check CANNOT spawn subagents (a verified hard constraint), so GI-68 cannot be a fully auto-firing gate; the mechanization is a **`/cisem-plan-verify` SKILL** (Opus-invoked, dispatches both lenses with the standard GI-68 prompts, collects both verdicts, Opus then value-assesses per GI-68 — unchanged) **PLUS extending `[RATIFY-GATE]`** (plan-audit.sh:626) so a RATIFIED plan must MECHANICALLY cite its dual-review verdicts (not only its Stage-1 verdict, today's sole requirement). The PROCEDURE is a skill; the PROOF-it-happened is the git-enforced citation gate. Brain additionally VERIFIED a genuine `agent`-type PreToolUse hook primitive exists (can spawn a subagent to verify before returning a decision) — close to true auto-fire, but experimental with a 60s default timeout, too short for Sonnet+Haiku+Opus synthesis; this plan NAMES it as the future auto-fire path to revisit, honestly, rather than closing the door as if no primitive existed.

## Existing-First (§3.2b — searched, stated, reused source-verified from the approach doc)
Searched: NO mechanism exists — only prose references (ARCH-00190 §3, GI-68 itself) + hand-dispatch. Skills present: `.claude/skills/` cisem-create/cisem-frontend/cisem-meta/cisem-plan — none dispatch dual review today. **`[RATIFY-GATE]` (plan-audit.sh line 626) ALREADY requires** a RATIFIED plan cite its Opus Stage-1 soundness verdict — this plan EXTENDS that existing gate (A8) to ALSO require the dual-review verdicts, rather than forking a second ratification-citation check. **HARD CONSTRAINT (found, not assumed):** a git-hook/shell check cannot spawn subagents — confirmed by the same PreToolUse contract research PART08 performed (claude-code-guide, code.claude.com/docs/en/hooks.md). The `agent`-type hook is the ONE primitive that can, but is experimental + timeout-constrained (Brain-verified 2026-07-25).

## Anti-Scatter Ordering (Principle 16 — significance rank of this PART's own steps)
Central: get the skill's DISPATCH CONTRACT right first (Deliverable 1 — what prompt each reviewer receives, what shape the verdict record takes; everything downstream depends on it) → then the `[RATIFY-GATE]` extension (Deliverable 2 — the mechanical backstop proving the skill actually ran) → then the verdict-record convention inside the plan's own file (Deliverable 3). Peripheral (parked, named not built here): the `agent`-type auto-fire hook (future path, explicitly named, not adopted); a review-history dashboard; retroactively running the skill against ARCH-00417/418/419 — that is a USE of this PART's deliverable, not part of building it.

## The Rule (executable — what Sonnet builds after ratification)
1. Create `.claude/skills/cisem-plan-verify/SKILL.md` (mirrors `.claude/skills/cisem-plan/SKILL.md`'s format: Pocket Declaration, `tags:`+`Status:` line, invocation contract):
   - Invocation: `/cisem-plan-verify plan_path="dna/planning/CISEM-ARCH-NNNNN-....md"`.
   - Step 1: dispatch `cisem-sonnet` (design/implementability lens) with the standard GI-68 prompt — read the plan cold, find BLOCKER/MAJOR/MINOR design-soundness gaps.
   - Step 2: dispatch `cisem-haiku` (protocol/evidence lens) with the standard GI-68 prompt — verify Existing-First claims via source-read, verify Per-File Alignment Table entries, verify section completeness.
   - Step 3: append both verdicts VERBATIM (no summarization — Principle 19 signal-vs-noise) into a `## GI-68 Dual Review` section on the plan file itself (the durable citation target the extended `[RATIFY-GATE]` checks for).
   - Step 4: Opus reads both, VALUE-ASSESSES (accept/filter per GI-68 — each finding shown ACCEPT or FILTER with reasoning), folds accepted findings into the plan, then updates Planning Status per ARCH-00190 §3 Stage 1 (SOUND → CONSENSUS-REACHED).
2. Extend `[RATIFY-GATE]` in `plan-audit.sh` (today: a RATIFIED plan must cite `stage.?1` AND `sound`) — ADD a second condition: a RATIFIED plan dated on/after 2026-07-23 (GI-68's decree date) must ALSO contain a `## GI-68 Dual Review` heading (or `dual.review|sonnet.*review|haiku.*review` evidence), OR an explicit `GI-68 exempt (ratified pre-decree)` tag. Missing both → FLAG `PREMATURE-RATIFY: <file> (RATIFIED but no GI-68 dual-review verdict cited)`.
3. WARN-only; NOT added to `[ZF]` (same posture as `[RATIFY-GATE]` itself today).
4. **Shape-disclosure (honest boundary):** print each run — `[RATIFY-GATE] verifies dual-review CITATION-EXISTS on RATIFIED plans dated after GI-68 (2026-07-23); it cannot verify review CONTENT was substantive — that is Opus's value-assessment role (Step 4), never a mechanical check.`
5. **NAME (not build) the future auto-fire path:** a Claude Code `agent`-type PreToolUse hook COULD dispatch verification automatically pre-decision; today's default 60s timeout is too short for Sonnet+Haiku+Opus synthesis — revisit once the timeout is configurable or the synthesis is chunked. Recorded here so the door is not closed (Brain 2026-07-25).

## Planted test (both directions — Definition-of-Done, mixed grade, stated honestly)
Fixtures under `dna/checks/fixtures/ratify-gate-dual-review/` (extends the EXISTING `[RATIFY-GATE]` fixture family, not a new one):
- **should-FLAG:** synthetic plan `Status: RATIFIED` + Stage-1-sound citation but NO `## GI-68 Dual Review` section, dated after 2026-07-23 → FLAGGED.
- **should-PASS (dual-review present):** same + a `## GI-68 Dual Review` section → CLEAN.
- **should-PASS (pre-GI-68 exempt):** synthetic plan `Status: RATIFIED` carrying an explicit `GI-68 exempt (ratified pre-decree)` marker → CLEAN.
- **skill-level (procedural, not mechanical):** run `/cisem-plan-verify` against a real stuck plan (ARCH-00417, 00418, or 00419) at build time; show both real verdicts landed in the file — the live regression proof (mirrors PART02's "real-corpus check").
Closure-grade: **MECHANICAL** for the `[RATIFY-GATE]` extension; **PROCEDURAL** (repeatable, deliberately NOT auto-fire) for the skill — both grades stated honestly, never conflated.

## What DOES change
- NEW: `.claude/skills/cisem-plan-verify/SKILL.md`
- NEW: `dna/checks/fixtures/ratify-gate-dual-review/` (fixtures + run-test.sh)
- MODIFIED: `dna/checks/plan-audit.sh` — `[RATIFY-GATE]` gains the dual-review-citation condition

## Per-File Alignment Table (ARCH-00401 mandatory)
| File | naming-registry | schema placement (SCHEMA-00001) | tag | status |
|---|---|---|---|---|
| `.claude/skills/cisem-plan-verify/SKILL.md` | non-node skill (Claude Code skill family) | T-SYS, plan-review skill layer | skill | NEW → PROVISIONAL-ACTIVE on build |
| `dna/checks/fixtures/ratify-gate-dual-review/*.md` | non-node fixtures (synthetic, test-only) | T-SYS, check-fixture layer | fixture, test | NEW → PROVISIONAL-ACTIVE on build |
| `dna/checks/plan-audit.sh` | existing (registered aggregator) | T-SYS, CAL pre-commit | check | MODIFIED (`[RATIFY-GATE]` condition extended) |

## What does NOT change
- The `[ZF]` formula — the extended `[RATIFY-GATE]` stays WARN-only, outside it.
- The underlying GI-68 decree/protocol (ARCH-00190 §3) — unchanged; this PART mechanizes its EXECUTION, not its rule.
- Opus's value-assessment role (Step 4) — unchanged, still mandatory, never automated away.
- No auto-fire hook is built (the `agent`-type path is named only, not adopted).

## Definition-of-Done (ref — dna/checks/definition-of-done.md, not re-derived)
Wired (skill file exists + `[RATIFY-GATE]` extension exists + wired into plan-audit.sh) + runs at CAL pre-commit + planted test passes both directions + a real stuck plan run through the skill shows landed verdicts + `[ZF]` still ACHIEVED. Any leg unmet → honest NOT-YET-WIRED, never "done".

## Propagation Declaration
Propagates to: `dna/protocols/CISEM-ARCH-00190-...` §3 (reference the skill as the standard dispatch procedure) → `.claude/skills/cisem-plan/SKILL.md` Step 2 (point to `/cisem-plan-verify` instead of "dispatch by hand") → ARCH-00417/00418/00419/ARCH-00270v2 (named beneficiaries — their first real USE once built).

## Dependencies
- **Blocks-on:** Governor ratification (A4/A11); GI-68 dual review — for THIS plan, hand-dispatched once (bootstrap; the mechanism cannot review itself before it exists, same class as PART08's own dogfood).
- **Independent of:** PART12/PART13 at the code level (no shared-lib dependency); ships THIRD in the Brain-agreed build order **1 (PART12) → 2 (PART13) → 3 (PART01)**.
- **Unblocks-for:** ARCH-00417, ARCH-00418, ARCH-00419, ARCH-00270v2 (all Stage-1 SOUND, stuck on the manual dual-review bottleneck).

## Self-compliance (against ARCH-00230)
Goal measurable (fixtures + a real stuck-plan run) · corespine declared (CS-CREATION-001) · Existing-First stated + source-verified, extends `[RATIFY-GATE]` (A8) · core-vs-instance: a reusable SKILL+GATE pair (core), justified by the platform-wide review-bottleneck · pocket declared · size gate: under 200 lines · dogfoods its own rule (not marked COMPLETE until the skill + gate are on disk + tested + a real plan verified).

## Path Rejection Declaration
- **REJECTED: a fully auto-firing git-hook dual-review gate** — verified impossible (a shell/git hook cannot spawn subagents); the `agent`-type hook COULD but is experimental + timeout-constrained — named as future, not adopted now.
- **REJECTED: let the skill's dispatch BE the ratification proof (no `[RATIFY-GATE]` extension)** — self-report without a mechanical citation-gate backstop repeats the exact ASSERTION-OVER-VERIFICATION failure (session-learning-index run-8 ZF audit) this whole ARCH-00420 program exists to close; extend `[RATIFY-GATE]` instead.
- **REJECTED: skip Opus value-assessment (auto-merge both reviews into the plan)** — GI-68 explicitly requires Opus as the value-FILTER, not a rubber-stamp; unchanged.
- **REJECTED: fork a second `[RATIFY-GATE]`-like check** — extend the existing one (A8), never duplicate.

## Change log
- v0.1 2026-07-25 (cisem-sonnet, drafted per Opus Core Seed 3 + Brain-consensus'd approach `CISEM-ARCH-00420-items123-approach-consolidated.md` Item #3) — folds Brain's hard-constraint verification (hooks cannot spawn subagents) + the named-not-closed `agent`-type hook future path + the skill+[RATIFY-GATE] resolution. Planning Status: AWAITING-BUILDER-REVIEW — NOT self-ratified (I7); awaits Opus soundness + GI-68 dual review (bootstrap hand-dispatch) + Governor decree.
