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

## Queue index (next: BP-0004)
- BP-0001 — harden plan-audit.sh — HIGH — status: DONE (Sonnet-executed, Opus-verified 2026-07-18; I3 + ARCH-00310 fixed; CS-MASTER-VALIDATION genuine stale-status fixed; I16 field-vs-prose residual disclosed)
- BP-0002 — orchestrate ALL invariants into the engine (creation-learning; pivot step 3) — HIGH — essential: y — QUEUED (depends BP-0001); FOLD IN the I16 field-vs-field redesign
- BP-0003 — /cisem-create skill (auto-delivers the Creation Triad; pattern-ratified) — HIGH — essential: y — QUEUED (approved to hand to Sonnet)
- BP-0004 — most-basic front-end "Index" (= the navigable living index / DNA-00001) — HIGH — essential: y — QUEUED (Governor-spec'd)
- BP-0005 — wire the ONE naming/numbering gate (naming was EXISTS≠ACTIVE / 3 parallel authorities) — HIGH — essential: y — QUEUED (depends BP-0001)
