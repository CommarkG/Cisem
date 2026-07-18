# CISEM Threshold Intake + Work Queue — the mother routing
Routes every input, distributes work on a timeline, protects completion. Governed by
CS-THRESHOLD-001 (intake) + CLAUDE.md §2.7 (park-by-demand + timeline virtue).

## Routes (Threshold-First)
- **PROCESS-NOW** — ESSENTIAL or Governor-directed only; enters the §3 gates immediately.
- **QUEUE** — parked WITH a build-prompt (`dna/queue/BP-NNNN-*.md`); processed later by `cisem-sonnet`.
- **PARK** — raw capture, no build-prompt yet (`dna/ibd/`); process later.
- **REJECT** — out of scope; logged with reason.

## PARK-BY-DEMAND (first-class)
The Governor OR CISEM policy may DEMAND any input be parked. Default under load /
non-essential / in-flight-incomplete = PARK. The AI does NOT PROCESS-NOW by reflex —
that reflex is the shiny-object failure this engine exists to stop.

## Build-Prompt (for QUEUE items) — zero-context-loss handoff
A self-contained, Sonnet-ready execution package: mandatory bootstrap + measurable goal +
Core Seeds (immutable Opus intent) + step plan + verify. Lets a parked item be executed
later with no Opus re-work. Template: `dna/queue/BUILD-PROMPT-template.md`.

## Timeline + priority
Each QUEUE item carries: `priority`, `essential (y/n)`, `timeframe`, `depends-on`.
Only ESSENTIAL jumps to PROCESS-NOW. In-flight completion is respected first (I14).

## Queue index (next: BP-0003)
- BP-0001 — harden plan-audit.sh (pivot step 1) — priority: HIGH — essential: y — status: IN-FLIGHT (handed to cisem-sonnet 2026-07-18; awaiting Seed-Honor Report)
- BP-0002 — orchestrate ALL invariants into the engine (creation-learning; pivot step 3) — HIGH — essential: y — QUEUED (depends BP-0001)
