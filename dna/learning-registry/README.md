# dna/learning-registry/ — the ONE parking place for harvested value
**Governed by:** CISEM-ARCH-00370 (session-learning-extraction) · per-turn mode: IBD-0005 (harvest orchestrator).
**Purpose:** the single home where every session/tab/turn deposits harvested value — BOTH poles:
- **NEGATIVE** (unwanted → becomes a D3 prevention / invariant candidate)
- **POSITIVE** (insight, solution, good AI behavior → becomes a D4 named-enhancement candidate to preserve)

so value is INHERITED (next agent reads it in BOOTSTRAP), never silently re-discovered or lost.

## Layout
- `session-learning-index.yaml` — the master append-only index (all sessions). START HERE.
- `YYYY-MM-DD/` — per-session detail (insights / solutions / preventions / gaps-open / decisions-pending), created on demand.

## Rules
- **Append-only** (like `quality-ledger.yaml`) — no rewriting history.
- **Only Opus writes truth-fields** (which items became ratified invariants/enhancements) — I7.
- **Inheritance (once wired):** `SessionStart` hook injects this index; every agent's BOOTSTRAP reads it and
  states which preventions it will apply BEFORE creating anything.
- **Enforcement status:** BEHAVIORAL today (CLAUDE.md Principle 12). The hooks + RQC check are NOT-YET-BUILT
  (see ARCH-00370 STATUS TRUTH banner). Do not report mechanical enforcement until it exists.
