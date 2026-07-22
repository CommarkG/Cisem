---
tags: [park, retrieval, existing-first, alias-index, step-0, reflect-until-match, converged-design, opus-brain]
Type: QUEUE | Sub_type: CONVERGED-DESIGN
Status: DRAFT-AWAITING-CONSENSUS (Governor) — high-blast; do NOT wire until ratified
last_verified: 2026-07-22 | freshness: FRESH
Home_on_ratification: creation-process-merge-design-2026-07-21.md (GI-55 Step 0) + ssot-registry.yaml + plan-audit.sh [I19] + CLAUDE.md §3.2b
Existing-First: GI-55/GI-56 (governor-insights.yaml), RI-0021 (root-insights), ssot-registry.yaml (the concept index — verified: 0 aliases, incomplete), ARCH-00404 Ph3 (parked graph)
---

# Converged Retrieval-Gate design — Opus re-derives existing (fix)

## Problem (RI-0021)
Opus (full live repo) re-derives elements that already exist (ARCH-00160, GI-55) — Brain (synced RAG) catches them.
Root = RETRIEVAL, not access: Opus's search is (1) DISCRETIONARY (skipped when a thing feels novel), (2) LITERAL (misses a
concept under a different name), against an index (ssot-registry) that is (3) INCOMPLETE + has ZERO aliases. Brain's RAG is
automatic + semantic. NOTE (Brain): the same gap exists between chats in Brain's own Project unless content is synced +
conduct is in the Project instructions.

## Converged fix (Opus + Brain, 2026-07-22)
1. **COMBINED STEP 0 (one gate, not two).** Before any consolidation / "doesn't exist" declaration: (a) RESTATE understanding
   + name assumptions (GI-55 / Reflect-Until-Match); (b) run an ALIAS-EXPANDED Existing-First search over the enriched
   ssot-registry (+ governor-insights); (c) cite the result into the Pocket trace with a **CONFIDENCE MARKER** — "match:
   <home>" OR "no match; index coverage NOT proven complete" (silence ≠ absence, Brain). Fold (a)+(b) into ONE step so there
   aren't two independent "was this checked?" judges (precedence-gap class).
2. **SHIP (index) + (mandatory-search) TOGETHER (Brain).** Enriching the index without making the search mandatory just
   improves the thing that gets skipped; making the search mandatory over an alias-less index yields false-confidence misses.
   Both, or neither closes the loop.
3. **MECHANIZATION — honest two-layer.** COMMIT-TIME: extend plan-audit `[I19]` to alias-expanded + REFUSE the commit unless
   the Pocket trace carries a cited search result + confidence marker (fully mechanical; catches a re-derivation before it is
   established). CHAT-TIME: Step 0 is model-performed (nothing fires on a conversation) but the commit-gate is its backstop.
4. **INDEX ENRICHMENT.** Complete ssot-registry (add Gate 0, North Star, GI-55, etc.) + add aliases/synonyms per concept +
   make governor-insights discoverable through it.
5. **KNOWLEDGE GRAPH — deferred, with a stated trigger (Brain).** Both failures were NAME-MISMATCH → an alias index solves
   them; a graph solves multi-hop relationship traversal (not what broke). Build the graph only when: cross-corespine
   PRECEDENCE resolution becomes a recurring op (= parked ARCH-00404 Ph3), OR "change X → what's affected" must be answered
   reliably, OR scale (~few-thousand concepts) makes aliases ambiguous. Revisit-trigger, not assumed-never.

## CONDUCT vs CONTENT propagation (Brain's opening — the Project layer)
- CONDUCT (Reflect-Until-Match, colleague-not-authority, state-assumed-state) → Brain's PROJECT CUSTOM INSTRUCTIONS
  (ARCH-00160 text + a one-line Reflect-Until-Match addendum). **GOVERNOR ACTION:** paste ARCH-00160's instructions into the
  Project settings — currently unverifiable / possibly not done (neither Opus nor Brain can see Project settings).
- CONTENT (decisions, corespines, registries) → git-synced Project Knowledge (already the pattern).

## On ratification (the wiring, per its home — A8, no fork)
Fold Step 0 into GI-55's merge-design home + formalize into CLAUDE.md; extend `[I19]`; enrich `ssot-registry`; ARCH-00160
instructions addendum. Each with the Definition-of-Complete bar (running + exercised + cited). Nothing wired until Governor consensus.
