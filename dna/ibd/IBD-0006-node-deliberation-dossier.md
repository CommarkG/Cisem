# IBD-0006 — Node Deliberation Dossier (a template instantiated per multi-source intake, attached to node(s))
**Type:** IBD (design capture, capture-first) | **Status:** PARKED — completion-priority HIGH | plan-gate-bound | enhance-heavily-later
**Proposed tags:** [deliberation-dossier, node-as-hub, intake-container, deep-wisdom, core-vs-instance, progressive-depth]
**Origin:** Governor, 2026-07-18 — "a core TEMPLATE; each time a node is about to receive multi-contents (other
platforms, research, human + AI-LLM comments), CISEM duplicates the template and attaches it to the relevant
node, making all that happens there DEEP WISDOM for the node; allow attaching to more than one node."
**Relates to:** [[node-as-hub]] (IBD-0004) · [[harvest-orchestrator]] (IBD-0005) · mini-tree (ARCH-00330).

## THE IDEA
A reusable **CORE template** = a "Deliberation Dossier." Whenever a node is about to receive MULTI-SOURCE
external input (council of AI LLMs, research, human/dev comments, other platforms), CISEM **instantiates**
the template as a new mini-tree **sub-node** and **attaches it under the relevant node's hub**. All the raw
inputs + isolated per-source processing + cross-source synthesis + verified conclusions accumulate there —
becoming that node's durable **deep wisdom**. Each intake event = one new dossier = a new **depth layer
injected beneath the node** (progressive depth as the process evolves).

## EXISTING-FIRST (this ENHANCES, does not duplicate — I19)
- **Node-as-Hub / "Gem"** (IBD-0004) — the dossier is a new sub-node TYPE under the hub (PART/DISCUSSION/…).
- **Mini-tree** (ARCH-00330) — the attach/child mechanism already exists.
- **Core-vs-Instance** (§3.2c) — template = CORE; each attachment = INSTANCE.
- **Harvest loop** (IBD-0005) — the dossier's VERIFIED conclusions feed D3 (prevention) / D4 (enhancement).
- **Isolated sequential intake** — the dossier IS the isolation container: each source parked + processed separately.
- **Retrieval/depth design** — each dossier is a depth-tagged layer, loaded on demand, not into the main context.

## TEMPLATE STRUCTURE (v1 sketch — to finalize via plan-gate)
1. **SOURCES** — each raw input parked SEPARATELY, provenance-tagged (who/model/date/link). Never merged raw.
2. **PER-SOURCE DIGEST** — each source processed in ISOLATION (own pass/subagent) → a distilled digest.
3. **SYNTHESIS** — cross-source reconciliation (agreements, conflicts, uniques).
4. **VERIFICATION** — external AI/human input enters as a **CLAIM to verify**, never as truth (I7; Challenge on Merit).
5. **CONCLUSIONS** — verified survivors, routed to the harvest loop (D3/D4) + optionally graduated into the node body.
6. **depth_level** on each layer; links back to the parent node(s).

## THE MULTI-NODE QUESTION — resolved: ONE home, MANY links (never copy)
"Attach to more than one node" = the dossier lives in **ONE home** (its own registered node) and is
**REFERENCED by multiple hubs via links** — NOT copied into each (I10 one-SSOT / I19 no-duplication).
A shared deliberation cited by several nodes is MORE powerful than N divergent copies. Guard: one owner, many inbound edges.

## IMMEDIATE REAL USE-CASE (not premature)
The council brief just written (Gemini + GPT + Claude.ai on the retrieval architecture) will return
multi-source external input → the **FIRST dossier instance**, attached to the retrieval-architecture node.

## BUILD PATH
Governed CORE creation (A4/A5) → build template v1 + the first instance THROUGH `/cisem-plan` (now LIVE),
PROVISIONAL-ACTIVE, flagged **enhance-heavily-later**. Parked here until ratified.

## OPEN QUESTIONS (for the plan)
- Lifecycle: when does a dossier CLOSE (deliberation done) vs stay OPEN (living)?
- Graduation: how do verified conclusions move from dossier → node body / invariants?
- Retention + depth rubric for injected layers; naming/type for the dossier sub-node.
