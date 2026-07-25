# /cisem-plan-verify — GI-68 Dual-Review Dispatch (mirrors GI-68 + [RATIFY-GATE])
**Type:** Claude Code Skill | **Tier:** Sonnet + Haiku (dual review) + Opus (value-assess + verdict)
**Goal:** Make the mandatory GI-68 Sonnet+Haiku dual review a repeatable ONE-COMMAND procedure —
dispatch both lenses, collect verdicts, record them on the plan file — so every plan gets the same
review without hand-assembly (done by hand 3× before this skill existed).
**Parent meta-root:** ARCH-00340 (meta-protocol); extends GI-68 (mandatory dual-tier review, RATIFIED
2026-07-23 by Governor decree) and the existing `[RATIFY-GATE]` (plan-audit.sh, Stage-1-citation check).
authorizing_plan: CISEM-ARCH-00420-PART01 (plain format — the plan-gate extractor reads `authorizing_plan:` immediately followed by the id; markdown-bold `**...**` between the colon and value breaks the match, caught by BLOCK 5's dogfood 2026-07-25)

**PERSONA (SSOT — load before acting):** dna/corespines/CS-AI-PROFILING-001/persona-collaborator.md — the Collaborator persona: L1 core always; L2 in an active process; L3 for complex/domain work. REFERENCE only, never copy (I10). Governor read-true 2026-07-20.

---

## Pocket Declaration (§3.3)
- **reasoning_scope:** dispatch cisem-sonnet + cisem-haiku on a given plan path with the standard GI-68
  prompts, collect both verdicts, Opus value-assesses; not a new relevance/scoring engine, not an
  auto-fire hook.
- **inherited_constraints:** ARCH-00190 §3 Stages 1/1.5/2 (unchanged); GI-68 (mandatory dual-tier
  review); GI-17 (two-model verify, the sibling this extends to EVERY plan); `[RATIFY-GATE]`
  (plan-audit.sh, the existing Stage-1-citation requirement, now extended); I10 (mirror, never diverge).
- **output_contract:** both verdicts appended VERBATIM into a `## GI-68 Dual Review` section on the
  plan file itself (Principle 19 — no summarization of the reviewers' own words); Opus's ACCEPT/FILTER
  value-assessment per finding; an updated Planning Status per ARCH-00190 §3 Stage 1.
- **ai_cannot:** self-ratify a plan; auto-fire dispatch via a git hook (verified impossible — a shell/
  git hook cannot spawn subagents); rubber-stamp both reviews without Opus's value-assessment (Step 4
  is mandatory, never automated away).
- **recorded_at:** 2026-07-25
- **cal_reference:** ARCH-00390 — the extended `[RATIFY-GATE]` runs at CAL pre-commit (the mechanical
  backstop that PROVES review happened); this skill itself is an Opus-invoked PROCEDURE, not a CAL
  auto-fire mechanism (honest boundary — stated, never claimed otherwise).

---
**tags:** [skill, gi-68, dual-review, plan-review, governance] | **Status:** PROVISIONAL-ACTIVE (in-use governance infrastructure; CISEM-ARCH-00420-PART01)

## Invocation
```
/cisem-plan-verify plan_path="dna/planning/CISEM-ARCH-NNNNN-....md"
```

Returns: both reviewers' verdicts appended to the plan file under `## GI-68 Dual Review`, plus Opus's
value-assessment (accept/filter per finding) and an updated Planning Status.

---

## DISPATCH FLOW

### STEP 1 — dispatch cisem-sonnet (design/implementability lens)
Dispatch the `cisem-sonnet` agent with the standard GI-68 prompt: read the plan file COLD (no prior
conversation context assumed), find BLOCKER / MAJOR / MINOR design-soundness gaps — implementability,
internal consistency, whether "The Rule" is actually executable as written, whether the Per-File
Alignment Table + What-DOES/DOES-NOT-change boundaries are coherent.

### STEP 2 — dispatch cisem-haiku (protocol/evidence lens)
Dispatch the `cisem-haiku` agent with the standard GI-68 prompt: verify the plan's Existing-First
claims via an actual source-read (not a paraphrase-trust, RI-0025), verify every Per-File Alignment
Table entry against the real naming-registry/schema, verify ARCH-00401 mandatory-section completeness
(cross-check against `[PLAN-SECTIONS]`'s coverage list where applicable).

### STEP 3 — append both verdicts VERBATIM
Append a `## GI-68 Dual Review` section to the plan file containing BOTH reviewers' full output,
unedited (Principle 19 — signal kept verbatim, no lossy summarization). This section is the durable
citation target the extended `[RATIFY-GATE]` checks for.

### STEP 4 — Opus value-assesses (GI-68, unchanged — never automated away)
Opus reads both verdicts, VALUE-ASSESSES each finding as ACCEPT or FILTER with stated reasoning, folds
accepted findings into the plan, then updates Planning Status per ARCH-00190 §3 Stage 1
(SOUND → CONSENSUS-REACHED, or back to AWAITING-BUILDER-REVIEW if BLOCKER findings stand).

---

## What This Skill Does NOT Do
❌ Does NOT auto-fire on every commit (a git hook cannot spawn subagents — verified constraint)
❌ Does NOT let dispatch itself BE the ratification proof (the extended `[RATIFY-GATE]` is the
   mechanical backstop; self-report alone repeats the ASSERTION-OVER-VERIFICATION failure this whole
   ARCH-00420 program exists to close)
❌ Does NOT skip Opus's value-assessment (Step 4 is mandatory, GI-68 explicitly requires the value-FILTER)
❌ Does NOT build a relevance-scoring engine (out of scope — GI-68 sampling is the review mechanism)

## Future path (NAMED, not adopted)
A Claude Code `agent`-type PreToolUse hook COULD dispatch verification automatically pre-decision;
today's default 60s timeout is too short for Sonnet+Haiku+Opus synthesis — revisit once the timeout is
configurable or the synthesis is chunked (Brain-verified 2026-07-25). Recorded here so the door is not
closed.

---

## INHERITED GUARDS (every creation — Governor decree 2026-07-21, ref ARCH-00230)
Any element this skill creates AUTOMATICALLY inherits + is audited against the always-loaded/always-run
guard set (do NOT re-derive; reference only, I10): CLAUDE.md **Principles 1–21** · the **plan-audit
checks** at every commit (`[ZF]` core + `[CREATION-GATE]`/`[TYPE-MATCH]`/`[NAMING-FORMAT]`/`[CS-NAMES]`/
`[DEFER-SCAN]`/`[AGENT-PASS]`/`[RATIFY-GATE]`/`[INJECTION-SCAN]`) · the **pre-commit hard BLOCKs** (I13
seed-strip · plan-fields · persona-inheritance · no-delete-without-ratification). Not done until it
passes the whole set (§3.7 Triad + Principle 21 verify-done-now).

## Change log
- v0.1 — 2026-07-25: Sonnet-built per CISEM-ARCH-00420-PART01 (Governor-ratified, GI-68 dual-reviewed
  bootstrap). Mirrors `.claude/skills/cisem-plan/SKILL.md`'s format (Pocket Declaration, tags+Status
  line, invocation contract, MIRROR-style step flow).
