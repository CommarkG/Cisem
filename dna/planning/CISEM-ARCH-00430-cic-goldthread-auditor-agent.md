# CIC / Golden-Thread Auditor Agent (cisem-cic-auditor)
**Node ID:** CISEM-ARCH-00430 | **Type:** ARCH | **Status:** RATIFIED — Governor informed decree 2026-07-27 (approved the full design as presented: name · 4-check protocol · read-only Opus-tier · report schema; Principle 20C informed-ratification satisfied — he saw the spec) | **GI-68 dual-review:** verification fast-follow (dispatched post-build)
**Planning Status:** COMPLETE (Opus Stage-1 SOUND + Governor informed Stage-2 ratification 2026-07-27) | **depth_level:** L2 | **Position in schema:** T-SYS, governance-agent layer
**tags:** [agent, audit, traceability, golden-thread, corespine, cic]
**wisdom_considered:** [A1 (no orphans), A2 (corespine), §3.1 Goal-First, GATE-0, [I1] Island-Detection, Principle 11 value-pipeline, I14 completion, I23 EXISTS≠ACTIVE, Principle 18C wire-don't-document, Principle 22, DoD, RI-0063 (trigger-protocol report schema)]
**goal:** create `cisem-cic-auditor` — a read-only agent that walks any CISEM flow step-by-step and audits its GOLDEN THREAD (goal→inheriting steps→delivered value→enforcing mechanism), measurable as: it emits a per-flow 4-check PASS/FAIL board + reports every FAIL in the DEEP-ROOT schema, orchestrating existing invariants (no new invariant coined).
**governing corespine:** CS-CREATION-001

## Pocket Declaration (§3.3)
- **reasoning_scope:** author + authorize one new governance-audit agent
- **inherited_constraints:** A5 (creation via protocol) · A4/A11/I25 (this plan gates the agent file) · I10 (agent references invariants, never copies) · A8 (consolidate existing checks, don't fork) · Principle 22
- **output_contract:** a `.claude/agents/cisem-cic-auditor.md` that cites this plan as authorizing_plan and applies the 4-check golden-thread audit
- **ai_cannot:** give the agent Write/Edit (it audits, never fixes); coin a new invariant (it references existing ones); auto-wire it to any hook (on-demand only, cost-discipline)
- **recorded_at:** 2026-07-27
- **cal_reference:** CISEM-ARCH-00390 — run `bash dna/checks/plan-audit.sh`; [ZF] is the done-gate.
- **Independent Verifier:** cisem-haiku (protocol) + cisem-sonnet (implementability) — GI-68 dual-review, distinct from author (Opus)

## Tier-Routing Declaration
Opus (this plan + the agent's persona/Core-Seeds + soundness) · the agent itself is model:opus (audit is judgment: "does this step TRULY inherit / is the value TRULY enforced" is not mechanical) · on-demand only (zero auto-fire, cost-controlled like cisem-fable).

## Executive Summary
All four of the Governor's checks already exist as CISEM invariants (Goal-First, A1/[I1], Principle 11/DoD, I23/Principle-18C) but scattered — no agent reads them as ONE continuous thread. This agent is that missing lens: it walks a flow end-to-end and catches where goal-#1 quietly fails to reach enforcing-mechanism-#4 (the "documentation-as-progress" / "value that floats" failures visible only end-to-end). Pure consolidation — it coins no new invariant.

## Anti-Scatter Ordering (Principle 16)
Central: (1) the 4-check protocol referencing existing invariants; (2) read-only + on-demand (safety + cost); (3) FAIL→DEEP-ROOT-schema so a broken thread auto-feeds the weekly session (RI-0063). Peripheral, parked: a mechanical `[GOLDEN-THREAD]` check that pre-scores flows before the agent runs; auto-selection of which flows to audit weekly (folds into WEE).

## The Rule
1. Create `.claude/agents/cisem-cic-auditor.md` — frontmatter (name, description, tools: Read/Grep/Glob/Bash, model: opus) + `authorizing_plan: CISEM-ARCH-00430` + tags + Status + the persona/bootstrap/4-check protocol/report-schema/hard-lines.
2. The agent's **4-check golden-thread audit** (each references an existing invariant, never redefines it):
   - **C1 GOAL-DEFINED** (§3.1 + GATE-0): flow head has a stated/saved/measurable goal, not `goal-pending`.
   - **C2 CHAIN-CONTINUITY** (A1 + [I1] + CoreSpine): each step cites its predecessor AND is cited by its successor — no orphan/broken-link/island (bidirectional).
   - **C3 TERMINAL-VALUE** (Principle 11 + I14 + DoD): the flow ends in a concrete platform value, not a floating artifact.
   - **C4 MECHANICAL-ENFORCEMENT-OF-INTENT** (Principle 18C + I23 + DoD + Principle 22): the extracted value is backed by a RUNNING mechanism that delivers the ORIGINAL goal — verified by RUNNING it (Bash), not by its documentation.
3. Output: per-flow 4-check PASS/FAIL board; every FAIL in the DEEP-ROOT schema (trigger·default-reaction·satisfaction-point·false-assumption·deep-root·prevention·preservation). Read-only — never fixes.

## Per-File Alignment Table
| File | ID / registry | Schema placement | tags | status |
|---|---|---|---|---|
| `dna/planning/CISEM-ARCH-00430-...md` (this) | CISEM-ARCH-00430 (naming-registry 430→431) | T-SYS, planning-governance | agent, audit, traceability | RATIFIED / COMPLETE |
| `.claude/agents/cisem-cic-auditor.md` (NEW) | agent (not a CISEM-{TYPE}-{SEQ} node) | T-SYS, governance-agent | agent, audit, golden-thread | to be created — PROVISIONAL-ACTIVE at build |

## What DOES change
One new read-only audit agent + this plan + the naming-registry bump.

## What does NOT change
No existing agent, invariant, or check is modified; the agent coins NO new invariant (references only, I10); no auto-wiring to any hook.

## Definition of Done
Per `dna/checks/definition-of-done.md`: agent file on disk with authorizing_plan citation (passes BLOCK 5) + tags/Status + the 4-check protocol referencing (not copying) existing invariants + GI-68 dual-review folded. Honest: the agent is a capability; its VALUE is proven when it's first run on a real flow (a follow-on, not claimed here).

## Propagation Declaration
Agent registry auto-lists it (no manual mirror). It references invariants by name; if an invariant changes, the agent inherits by-reference (I10) — no regeneration needed.

## Dependencies
blocks-on: none (all referenced invariants exist). unblocks: end-to-end flow audits; auto-feeds the weekly deep-pattern session (RI-0063 / WEE ARCH-00426).

## Self-compliance (vs ARCH-00230)
Existing-First: full §3.2b order — searched .claude/agents/ (4 agents, no auditor), dna/checks/ (corespine-bodiless, threshold-coverage, DoD — partial, no flow-auditor), the invariants (all exist), grep — NO existing CIC/traceability auditor; this consolidates existing invariants, no fork. Tags+Status present. Pocket + Verifier + Core Seeds + soundness verdict present. Under 200 lines.

## Path Rejection Declaration
- ❌ **A new [GOLDEN-THREAD] invariant** — REJECTED: the four checks already exist; coining a fifth would fork (A8/I19). The agent ORCHESTRATES, it does not redefine.
- ❌ **Write/Edit tools (auto-fix)** — REJECTED: an auditor that fixes blurs audit/build separation + risks unratified edits; read-only is safer (fixes route to Opus/Sonnet via a plan).
- ❌ **Auto-wired to a hook** — REJECTED: cost-discipline (cisem-fable precedent); on-demand only.

## CORE SEEDS (immutable)
[[CORE-SEED | MUST: cisem-cic-auditor is READ-ONLY (Read/Grep/Glob/Bash) — it audits, never fixes/edits/writes a truth-field (I7); findings route to Opus/Sonnet via a plan | WHY: audit/build separation; an auditor that edits can introduce unratified/unverified change | VERIFY: agent frontmatter has no Write/Edit; no truth-field written by it | APPLIES_TO: the cisem-cic-auditor agent, permanently]]
[[CORE-SEED | MUST: each of the 4 checks REFERENCES its existing invariant by name (§3.1/GATE-0 · A1/[I1]/CoreSpine · Principle 11/I14/DoD · Principle 18C/I23/Principle 22) — it NEVER coins a new invariant or redefines one | WHY: A8/I10 — one source; a scattered re-definition is the fork this agent exists to catch | VERIFY: every check cites an existing invariant, defines none | APPLIES_TO: the agent's audit protocol]]
[[CORE-SEED | MUST: check C4 verifies the enforcing mechanism by RUNNING it (Bash), not by reading that it exists (I23/Principle 18C/22) — presence≠behavior | WHY: the whole point is catching documentation-as-progress; a doc-only C4 would BE the failure it audits | VERIFY: C4 shows a run output, not a file citation | APPLIES_TO: the agent's C4 check]]
[[CORE-SEED | MUST: on-demand ONLY — cisem-cic-auditor is NEVER referenced in any hook/cron/session-start/auto-delegation (cost-discipline, cisem-fable precedent) | WHY: an auto-firing Opus-tier auditor is a token-leak | VERIFY: grep hooks/cron for the agent name → zero | APPLIES_TO: the agent's wiring, permanently]]

## Opus Stage-1 Soundness Verdict (for [RATIFY-GATE])
**SOUND.** Pure consolidation — coins no new invariant (A8-clean), read-only (no unratified-edit risk), on-demand (no token-leak), and its report schema auto-feeds the weekly session (RI-0063). The one honest limit — an agent is a capability, not yet proven value — is disclosed: its worth is confirmed on first real run, not claimed here. No collateral change. Governor ratified the design informed (saw the full spec). Build warranted.

## Change log
- v1.0 — 2026-07-27 (Opus authored + Governor informed ratification): authorizes cisem-cic-auditor. GI-68 dual-review dispatched post-build as verification.
