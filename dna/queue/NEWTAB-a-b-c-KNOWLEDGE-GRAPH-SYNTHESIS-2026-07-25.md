# NEW-TAB SEED — The a/b/c Knowledge-Graph Synthesis (Governor-APPROVED direction, 2026-07-25)
tags: [newtab-seed, knowledge-graph, neuronal-grid, context-restoration, threshold, synthesis, core-first, design-for-consensus]
Status: SEED-FOR-GOAL-CONSENSUS (Governor approved the DIRECTION 2026-07-25; NOT a ratified plan — the fresh tab runs the full protocol on it. Pause holds for BUILD.)

**WHY THIS EXISTS:** so the fresh tab INHERITS this synthesis instead of re-deriving it — the exact RI-0037 fix (context-restoration by loading, not searching). Read this + the links below; do NOT reconstruct from scratch.

## THE CORE SYNTHESIS (Governor-approved framing)
**a, b, and c are not three features — they are the STRUCTURE, the WRITE side, and the READ side of ONE knowledge-graph.**
Today the platform is *files-in-a-hierarchy you search*. The long-run form is *a graph you traverse*: **nodes = artifacts** (plans, RIs, GIs, checks, parked items) · **edges = tags + status + schema-position + depends-on / supersedes / rejected-by / authorized-by**.
- **(a) knowledge-graph = the SUBSTRATE** (= the Governor's schema-as-NEURONAL-GRID, IBD-0030). The one structure everything operates on.
- **(c) Threshold / routing / parking = the WRITE side.** New input enters → becomes a node → routed (edges + initial status set). **Parking = a `parked` node + an aging edge; resurfacing = the graph mechanically surfaces any parked node past its age = the RIPL-drain (backlog #1).** Threshold isn't a bolt-on gate; it's *how nodes are born into the graph and kept alive.*
- **(b) boot-sequence = the READ side.** A fresh tab traverses from a root node and loads exactly the **active subgraph** — deterministically, zero search. "All bases covered" = the traversal covers the live frontier by construction.
Write → structure → read. One system, three faces.

## THE SEQUENCING THAT COMPOUNDS (get it wrong = wasted work)
**(a)'s SHAPE comes first**, else (b)/(c) get built on the old hierarchy and get redone. **But do NOT rewrite everything** — the enabling move: **the graph starts as a GENERATED MANIFEST over the files that already carry tags+statuses** (a VIEW, not a migration). One artifact that **(b) reads to boot · (c) writes on intake/status-change · (a) defines the shape of.**
1. (a) design node/edge shape + build a minimal generated substrate (manifest-view over current files — cheap, no rewrite).
2. (b) boot = "load the manifest" (deterministic).
3. (c) Threshold/routing/parking = "add/update a node" + aging-surfacing.
4. THEN RIPL-drain / edit-gating / plan-completeness become GRAPH QUERIES (what's parked+aged? does this plan have a wisdom edge? is this edit inside its node's authorized boundary?) — **most of the MASTER backlog collapses into operations on the one substrate.**

## THE CLOSED LOOP
This IS the Governor's observation→learning→planning→implement→verify loop — the graph traversed, updated, re-traversed. **Archived-done nodes stay in the graph with their tags** ("smart part of system wisdom," Governor's words) — not deleted or buried.

## THE SPLIT (Governor-directed a-here / b+c-fresh)
- **(a) framed HERE** (this seed = the shape/direction, Governor-approved). The fresh tab RATIFIES the shape via the protocol before building on it.
- **(b) + (c) BUILD in the fresh tab** — a clean session is the safest place to build+validate a session-boot mechanism (it proves its own next boot works) AND Threshold+boot are the write/read of (a)'s substrate, so handle the cluster coherently in one place.
- **The Threshold audit (c) gets a DEEPER FRAME:** not "is the gate wired?" but **"how do nodes enter the graph?"** — same investigation, deeper question.

## GUARDRAILS (do not skip — RI-0036 is fresh)
- This is DESIGN-FOR-CONSENSUS, **not a ratified plan.** Run the full protocol: goal-consensus → Existing-First (real rigor) → clarifying pass → Sonnet+Haiku dual review → Governor ratify → build → [ZF]. **No freestyle** — enhancing the handoff protocol / hooks is a governed-mechanism change (RI-0037 + RI-0036).
- **Incremental, not big-bang:** build the generated-manifest VIEW first, migrate nothing, prove the read/write loop on real data, then deepen. If it can't be incremental, STOP and say so.
- **(b) edits `session-start.sh` — a hook that runs EVERY session boot → higher-blast than it looks.** Treat as hot-surface: revert-ready, verify a simulated fresh boot before commit.

## THIS RE-RANKS THE BACKLOG (core-first)
This substrate is plausibly MORE foundational than current MASTER #1 — it's the ground the others stand on. It UNIFIES: #1 RIPL-drain (= parking-resurfacing) · #2 edit-gating (= node-boundary) · #6 neuronal-grid (= this) · the Threshold audit (c) · context-restoration (b) · "planning is scattered" (files-vs-graph). The fresh tab should propose the re-rank with real reasoning, not assume it.

## LINKS (read directly — RI-0025; do not inherit summaries)
- **This session's comprehensive handoff (read FIRST):** `dna/queue/NEWTAB-COMPREHENSIVE-HANDOFF-2026-07-25.md`
- **Priority task — Threshold audit (now framed as "how nodes enter the graph"):** `dna/queue/NEWTAB-THRESHOLD-ROUTING-PARKING-AUDIT-2026-07-25.md`
- **The finding that started this:** `dna/learning-registry/root-insights.yaml` → **RI-0037** (context-restoration-by-search) + **RI-0036** (no-freestyle-on-edits)
- **The neuronal-grid intent (raw Governor source):** `dna/ibd/IBD-0030-governor-planning-aiprofiling-neuronalgrid-RAW.md`
- **The ranked+priced backlog this re-ranks:** `dna/planning/CISEM-ARCH-00420-MASTER-consolidated-backlog-program.md`
- **Resume anchor:** `dna/CISEM-WITNESS-00003-session-continuity.md` → COMPACT STATE 2026-07-25
- **Full harvest (fruits):** `dna/learning-registry/session-learning-index.yaml` → `session_2026_07_24_25_harvest`
- **The current pointer-based continuity this replaces/augments:** ARCH-00370 (session-learning) + `.claude/hooks/session-start.sh` + `.claude/hooks/pre-compact.sh` + the WITNESS COMPACT STATE
- **Built enforcement mechanisms (this session):** `dna/checks/` + `dna/checks/lib/` + `.claude/hooks/pretooluse-plan-gate.sh` + `.claude/skills/cisem-plan-verify/`

## FRESH-TAB FIRST MOVES
1. Read the comprehensive handoff + this seed (don't re-derive).
2. Run the **Threshold audit (c)** with its deeper frame ("how do nodes enter the graph") — dual-tier dispatch, produce a ratifiable plan.
3. Open **goal-consensus on (a)** — the knowledge-graph shape (this seed is the direction; confirm/refine with Existing-First + Brain).
4. Once (a)'s shape is ratified, build **(b) boot-sequence** as phase-1 (incremental manifest-view), then deepen toward the full graph. **Nothing builds until the Governor ratifies.**

## Change log
- v1.0 2026-07-25 (Opus) — Governor-approved a/b/c knowledge-graph synthesis + split + guardrails + links, seeded for the fresh tab's (a) goal-consensus. Design-for-consensus, not ratified; no build; pause holds.
