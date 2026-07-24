# Session harvest 2026-07-24 (A10 full-fidelity, multi-iteration) — pre-fresh-tab handoff
Resume anchor: git HEAD **ea3576a**, working tree clean, `[ZF] ACHIEVED`. Read this + CLAUDE.md + WITNESS-00003 to resume.

## ITERATION 1 — AI-DEFAULTS EXPOSED (the failure patterns this session named)
- **DEFER-DECIDED-AS-UPDATE (the big one — GI-69, persona-wired):** Opus took DECIDED/RATIFIED work, labeled it "decided but not-yet-done," and parked it under "capacity-caution" — treating the Governor's own decisions as low-priority and just *reporting* status. Governor caught it sharply ("you stop after several things and just update... change that dramatically NOW"). It is a self-instance of Principle 21 (defer-and-assume-later) aimed at the Governor's decisions. FIX WIRED: persona L2 + GI-69 — LEAD every reply by driving decided/ratified to DONE this turn; a decided item is done-now or an explicit registered park; never a soft "later."
- **RATIFICATION ≠ IMPLEMENTATION (RI-0027):** 5 Governor-RATIFIED plans read "COMPLETE" but their deliverables were never built (ARCH-00403/00408/00409/00392-P1/00406-P1). "Plan ratified" got conflated with "artifact done" — documentation-as-progress at the ratification layer. This was the *mechanical root* of the Governor's felt-incompleteness.
- **PARAPHRASE-TRUST / CONSENSUS-LAUNDERING (RI-0025, persona-wired):** the axis-conflation bug survived 4 passes + explicit Opus+Brain agreement because all reasoned from a paraphrase of ARCH-00011 §4, not the source. Counter: higher consensus owes MORE source-contact.
- **PREMISE-STALENESS (RI-0023, recurred):** "build ARCH-00405 P1 now" / "ARCH-00410 P2 unbuilt" — both turned out already-BUILT; verifying-not-assuming caught it (didn't waste rebuilds). The mindmap lives in search.js (Haiku read static HTML, missed the JS injection).

## ITERATION 2 — INTENTS · NUANCES · LATEST DECISIONS (richly, re-derivable)
- **NEW STANDING PROCESS (GI-67, ratified):** goal (3-way) → approach (Opus↔Brain consensus, presented PLAIN to Governor: issue/pros/cons/one-rec, no codes in the body) → Governor ratifies approach → plan drafted → consensus → Governor final ratify → THEN Opus builds. Nothing built without a ratified plan. The one-click to Brain STAYS (Governor: "it's easier for me... it wasn't the problem" — I over-corrected; corrected back).
- **COMPLETION-PUSH (GI-69, ratified + wired):** see Iter 1. The standing CISEM prompt: *"FIRST drive every decided/ratified/not-done item to DONE this turn; never 'update'+defer; done-now or a registered park."*
- **plan_id MECHANICAL GATE (Governor's stated priority; goal stage):** any create/write action must cite a plan ID or be mechanically rejected (exempt: IBD raw-capture, SWIFT zero-blast). Existing-First DONE: nothing gates the write ACTION today (CAL hooks are only SessionStart/PreCompact; [I25]/[I19] are commit-time WARN). Platform-native primitive = a **PreToolUse hook**. Root fix for "nothing stops freestyle." Next: goal→approach→plan.
- **minitree-plan goal (queued, next session):** merge ARCH-00190 + ARCH-00330 so plans are minitree-shaped FROM creation (dissolves the RI-0026 size tension). Own scoped GI-15 renaming plan, not a find-replace. File: `dna/queue/minitree-plan-goal-QUEUED-2026-07-24.md`.
- **SCHEDULING reframe (verified):** Claude Code cron HERE is session-only (dies on exit; ENABLE_TASKS=0; local vscode — no cloud Routines). So weekly cadences (freshness/harvest/RIPL) use EVENT-triggered CAL hooks ("if >N days, fire at commit/boundary"), NOT a clock. Friday-07:00 auto-schedule is NOT possible on this side; do not promise it.

## ITERATION 3 — PROCESSING + MECHANICAL-ENFORCEMENT ROUTING (every item gets a home)
| Item | State | Route / mechanical path |
|---|---|---|
| ARCH-00403/00408/00409 deliverables | **BUILT this session (ea3576a)** | done; ARCH-00403 Tier-2 pointers = follow-on (two-model verify) |
| GI-69 completion-push | WIRED (persona L2) | + a [DECIDED-UNDONE] self-check candidate; propagate to agents |
| RI-0027 ratification≠implementation | NAMED | **[BUILD-STATE] plan-audit check** — a COMPLETE/RATIFIED plan's deliverables must exist or be declared unbuilt (buildable, shortest-cycle) |
| plan_id gate | goal, Existing-First done | approach = PreToolUse hook → goal→approach→plan |
| ARCH-00418/00419/00270v2 | Stage-1 SOUND | fresh GI-68 dual review → Governor Stage-2 (shortest cycles) |
| ARCH-00417 | PARKED | M1-substrate = purpose-built append-only `wired_at` marker (resume-spec in the plan) |
| stage-timer + freshness-check.sh | designed/queued | build freshness-check.sh once (commit-triggered) → stage-timer consumes it |
| ARCH-00406 P1, ARCH-00392 P1 | ratified, unbuilt | need Governor go / bigger build |
| naming WARNs | **CLEARED** (408) | done |

## ITERATION 4 — BRAIN REPORT (one-click, cross-boundary sync)
See the `## FOR BRAIN` block below — paste to Brain to keep the external colleague aligned with git.

## SHORTEST-CONSENSUS-CYCLE LIST (next session, closest to closure)
1. **[BUILD-STATE] check** (RI-0027 fix) — tiny, high-value, near-instant consensus. **Rec: build.**
2. **ARCH-00418** (finish-line/DoD) — Stage-1 SOUND → dual review → ratify.
3. **ARCH-00419** (Planning Marker) — same.
4. **ARCH-00270 v2** (graduated BLOCK-flip) — Stage-1 SOUND, tightening folded → dual review → ratify.
5. **freshness-check.sh + stage-timer** — one short cycle (event-triggered, no scheduler).
6. **plan_id gate** — goal→approach→plan (PreToolUse hook).

## FOR BRAIN (paste one-click)
> CISEM → Brain · git HEAD ea3576a · completion push + harvest done, pre-fresh-tab.
> BUILT this session (real, committed): 3 ratified-but-unbuilt deliverables — ARCH-00403 (zf-convergence.md SSOT),
> ARCH-00409 (§XI in ARCH-00008), ARCH-00408 ([TEMPLATE] check + name-triage, WARNs 7→0). ARCH-00405 P1 & ARCH-00410 P2
> found ALREADY-built (verified, not rebuilt). Governor caught a real Opus failure — DEFER-DECIDED-AS-UPDATE (parking
> decided work as "updates") — now hardwired: GI-69 + persona L2 (lead with completion; done-now or registered park).
> Root cause named RI-0027: RATIFICATION ≠ IMPLEMENTATION (5 plans marked COMPLETE were never built) → durable fix =
> a [BUILD-STATE] check. Scheduling verified session-only (no durable cron here) → event-triggered CAL hooks, not a clock;
> Friday-07:00 auto-schedule not possible my side. plan_id gate: Existing-First done, primitive = PreToolUse hook.
> NEXT (shortest cycles): [BUILD-STATE] check · fresh GI-68 dual review of ARCH-00418/00419/00270v2 → Stage-2 ·
> freshness-check.sh+stage-timer · plan_id gate goal→approach→plan · minitree-plan goal. State: HEAD ea3576a, clean, [ZF] green.
