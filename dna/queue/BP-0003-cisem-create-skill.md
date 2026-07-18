# BUILD-PROMPT BP-0003 — /cisem-create skill (delivers the Creation Triad automatically)
**FOR:** cisem-sonnet drafts; cisem-opus-pe verifies (sensitive parts = Opus)
**status:** QUEUED | **priority:** HIGH | **essential:** y | **timeframe:** team phase | **depends-on:** BP-0001

## BOOTSTRAP
Read: CLAUDE.md (§3 gates incl. §3.7 Triad, §2.7 Threshold/SWIFT), dna/ssot-registry.yaml,
dna/protocols/CISEM-ARCH-00320-... (I1–I18), .claude/agents/ (the roster).

## GOAL (measurable)
A Claude Code skill `.claude/skills/cisem-create/SKILL.md` that, when invoked to create ANY
CISEM element, AUTO-RUNS the Creation Triad so it fires EACH TIME (not by memory). DONE = the
skill text enumerates every gate + the triad + the tier routing, and a dry-run description shows
it would declare a pocket, apply the gates, run oversight, and log the loop.

## CONTEXT
This converts manual discipline into an auto-firing engine (the Governor-ratified pattern:
Skill invokes Agent in a Pocket, constrained by Hardcoding, verified by Oversight, learned into the Loop).

## CORE SEEDS (immutable)
[[CORE-SEED 1 | MUST: the skill runs ALL §3 gates (3.0–3.7) including the Triad §3.7; it may not skip a gate | WHY: A5/I18 | VERIFY: skill enumerates every gate by name | APPLIES_TO: the Sonnet tier executing BP-0003 (cisem-create skill authoring) — governs the content of .claude/skills/cisem-create/SKILL.md]]
[[CORE-SEED 2 | MUST: the skill routes through Threshold FIRST (PROCESS-NOW/QUEUE/PARK/REJECT) + honors park-by-demand + SWIFT | WHY: mother routing §2.7 | VERIFY: skill asks/decides the route before creating | APPLIES_TO: the Sonnet tier executing BP-0003 (cisem-create skill authoring)]]
[[CORE-SEED 3 | MUST: truth-bearing steps (status, ratification, verify) are delegated to Opus/cisem-opus-pe — Sonnet drafts, never asserts | WHY: Hard Line I7 | VERIFY: skill routes truth-fields to Opus | APPLIES_TO: the Sonnet tier executing BP-0003 (cisem-create skill authoring) — and the cisem-create skill itself at runtime]]

## PLAN
1. Write .claude/skills/cisem-create/SKILL.md enumerating: Threshold route → pocket declaration →
   §3.0–3.7 gates → creation → plan-audit (oversight) → ledger log.
2. Dry-run describe on a sample creation.
3. Emit diff + SEED-HONOR REPORT for cisem-opus-pe verification.

## CONSTRAINTS
Axioms A1–A8, Doctrine, §3, SSOT (I10), disclosed ≠ resolved.

## OUTPUT
Diff + SEED-HONOR REPORT for Opus verification BEFORE done.
