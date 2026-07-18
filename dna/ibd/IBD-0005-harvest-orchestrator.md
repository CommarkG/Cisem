# IBD-0005 — Harvest Orchestrator (the per-turn dual-pole self-improvement engine)
**Type:** IBD (design capture, capture-first) | **Status:** PARKED — completion-priority HIGH | plan-gate-bound
**Proposed tags:** [orchestrator, self-improvement, rqc-engine, dual-pole-harvest, D3, D4, A7]
**Origin:** Governor, 2026-07-18 — "establish an orchestrator that each turn activates a skill or
agent and harvests/extracts valuables — NEGATIVE (things to process → create preventions) and
POSITIVE (solutions, insights, AI behavior & more) to preserve and hardwire so they recur again and again."

## EXISTING-FIRST — this ENHANCES, never duplicates (I19)
- **RQC** (ARCH-00320 §6, 7 stages + CONSOLIDATE) — this is its **per-turn EXECUTION ENGINE**.
- **D3** (prevention permanent + cumulative → invariants I1..In) = destination of the **NEGATIVE** pole.
- **D4** (enhancement permanent + named, written INTO the creation protocol) = destination of the **POSITIVE** pole.
- **A7** (self-improvement via AI expert team) = the mandate this operationalizes.
- **Value pipeline** (Principle 11: extract → conclude → discuss → consensus → draft → plan) = the routing BOTH poles use.
- **quality-ledger.yaml** = the learning memory each tick writes to.
- **Tier routing** = Haiku harvest → Sonnet bucket → Opus judge + hardwire (only Opus writes truth, I7).

## THE ENGINE (each tick)
1. **SELECT** — dispatcher picks a target: a skill, an agent, or recent work/turn.
2. **HARVEST (Haiku)** — enumerate raw valuables from that target, BOTH poles, zero judgment.
3. **BUCKET (Sonnet)** — structure into NEGATIVE (unwanted → prevention candidate) + POSITIVE (wanted → preserve candidate).
4. **JUDGE + ROUTE (Opus)** — each item enters the value pipeline; none floats (I14):
   - NEGATIVE → **D3 invariant candidate** (I{n+1}) → presented for Governor ratification.
   - POSITIVE → **D4 named-enhancement candidate** → written into CLAUDE.md / creation protocol.
5. **HARDWIRE** — ratified negative becomes a standing invariant; ratified positive becomes protocol text → the value RECURS (D1: ratified = recurring).
6. **LOG** — every tick logged to quality-ledger (A7 / D5 self-audit).

## INVARIANTS IT ENFORCES / RELIES ON
I14 (every harvest item routed, nothing floats) · I18 (Creation Triad oversight leg made continuous) ·
I2 (a harvest is NOT done until hardwired — disclosure ≠ resolution).

## CADENCE
Lightweight per-turn "harvest tick" + heavier per-session CONSOLIDATE (RQC §6 already defines CONSOLIDATE).

## HARD LINE
Only Opus writes the invariant/enhancement (I7). Governor ratifies BOTH poles. No self-hardwiring (A4).

## OPEN DESIGN QUESTIONS (resolve in the plan)
- Q1 **Cost/threshold:** every turn, or only substantive turns (threshold-first)?
- Q2 **Dispatcher policy:** round-robin over skills/agents, or targeted by recent activity?
- Q3 **Positive-pole home:** where preserved insights/AI-behaviors live — CLAUDE.md principles, a new
  "enhancement ledger," or direct D4 protocol edits (I10: must have ONE home).
- Q4 **Form:** an agent (`cisem-orchestrator`), a skill (`/cisem-harvest`), a pre-commit check, or all three?

## ROUTING OF THIS ARTIFACT
Governed creation (A4) → this becomes the **FIRST real plan through `/cisem-plan`** once the meta-layer is
decreed LIVE (pending #1). OR the Governor foundational-decrees it directly. Until then: PARKED, plan-gate-bound.
