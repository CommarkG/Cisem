# Consolidated Brain prompt — CISEM self-describing context
tags: [brain-comms, consolidated, self-describing, threshold-audit, context-restoration, neuronal-grid, for-cross-check]
Status: DRAFT-FOR-GOVERNOR-RELAY (paste-to-Brain; content-not-summary since Brain has no repo access)

---8<--- PASTE TO BRAIN BELOW THIS LINE ---8<---

**This is a comment for CISEM — merge it with your last two (the Threshold audit + your consolidation offer). One thread. You have no repo access, so this is the content, not a summary.**

**Two threads have converged into one root — please stress-test that they genuinely are one.**

**Thread 1 — the Threshold audit (verified against source this session):**
- CS-THRESHOLD-001 is RATIFIED but has no manifest file. Its content is *distributed across* ARCH-00320 + CLAUDE.md, and the registry itself admits the invariants are *duplicated* between them. Not literally "bodiless-stamp" — it's distributed-and-duplicated, an SSOT violation. Already disclosed three times in the ledger, never closed.
- Routing (process-now / queue / park / reject) lives in a separate file (`dna/queue/README.md`), only nominally "governed by" Threshold, with a stale queue index. CISEM's own doctrine concedes intake routing "can't be hook-enforced" — it's behavioral, not mechanical. Only downstream commit-time checks are mechanical.
- Parking aging DOES exist and IS wired — but only for one narrow technical class (`decisions_pending:` YAML). The ~15–40 real parked items (raw brain-dumps, queued build-prompts, un-wired backlog) are invisible to it → they can sit forever. One item is 4 days past its own 2-day deadline with nothing escalating. And the governance record claims this rule is "ratified-wired" while citing a mechanism that implements a *different* decree entirely — a mis-citation, not just an overclaim.
- **Deeper root:** the corespine-registry has ZERO self-audit — nothing checks that a "ratified" corespine actually has a body. Turning that lens on the whole registry surfaced a **second bodiless corespine: CS-MASTER-VALIDATION-001**, the root-authority that validates all the others. It's a class, not an incident.

**Thread 2 — context-restoration (Governor's finding, RI-0037):** a fresh tab burns tokens re-deriving state by search+read+cross-reference from a *pointer-based* handoff. Even the "comprehensive handoff" doc is still pointers — the tab walks the territory instead of being handed the map.

**The one root under both:** *CISEM is not self-describing.* There is no single, always-current artifact that states (1) what mechanisms exist and when each fires — every-turn / every-commit / weekly / on-boundary; (2) the current wiring state — wired vs declared vs bodiless; (3) whether the boundary is actually clean. That absence is why a fresh tab searches, why bodiless corespines sit ratified for weeks, and why two Governor questions ("what's hardwired every turn? what's registered weekly?") have no home.

**The fix — adjusted from the earlier "knowledge-graph" framing (please push on this):**
- We are NOT leading with a knowledge-graph. The root is self-description, not "we lack a graph." A full graph is one HIGH-cost implementation; a **generated state-manifest** is a much cheaper one that likely captures most of the value.
- Separate two things the earlier framing conflated: **(A) boot-ORDER** — a fixed, ordered load-list; stable, safe to hand-author. **(B) STATE** — what's wired / parked / clean; *volatile* → must be **generated** from the hooks, checks, and registries on disk, never hand-typed, or it drifts and lies exactly like today's handoff.
- So: `session-start` injects a generated state-manifest and follows a fixed boot-order; `pre-compact` refreshes/produces the manifest as part of save-all. The audit's registry-self-audit check becomes the manifest's **wiring-state rib**. The full graph / neuronal-grid is a possible *later* evolution, evaluated after the manifest proves itself — not the committed first build.

**How the three options compose (the synergy answer):** they're not competing — they're phases of one program. **(a)** agree the self-describing target + manifest shape [planning, now, pause-safe]; **(b)** build the generated-manifest + boot-order as phase 1 [in a fresh clean session, full rigor — `session-start.sh` is a maximally-hot surface, and a clean session can validate its own next boot]; **(c)** the Threshold audit feeds the wiring rib, with its registry-self-audit check as brick one. Safety on (b): ratified mini-plan, revert-ready, forward-compatible to the manifest/graph, validated against a simulated fresh boot before commit — never a freestyle hook edit (RI-0036).

**Where we specifically want your eyes:**
1. Is "generated state-manifest + fixed boot-order" genuinely enough to kill the rediscovery cost, or is a graph actually necessary? Argue for the cheapest primitive that works.
2. The make-or-break discipline is "generate, don't hand-type." Do you see a failure mode where a *generated* manifest still drifts or lies?
3. Are we over-merging? Is context-restoration genuinely the same root as the Threshold audit, or are we forcing two distinct problems together?
4. A generated manifest is still a file the fresh tab *reads* — is that just "context-restoration by search" wearing a better coat? What's the real floor on load cost, and does determinism (not the graph) capture most of the win?
5. The neuronal-grid: does staging the full graph *behind* a proven manifest lose something essential the Governor is reaching for, or is that the right sequencing?

---8<--- END PASTE ---8<---


## ADDITIONAL PROMPT — GRAPHIFY (external tool as candidate for the generated-map layer)

---8<--- PASTE TO BRAIN BELOW THIS LINE ---8<---

**Additional comment for CISEM — same thread (self-describing context). This one evaluates a specific external tool, "Graphify," as a candidate for the generated-map layer we just discussed. You can't see the tool, so here's the content.**

**What Graphify is:** an external, open-source add-on for Claude Code. Read-only. It parses local files (Tree-sitter AST for code, local models for text/docs), builds a `graph.json` + interactive `graph.html` + a `GRAPH_REPORT.md`, and adds a PreToolUse hook that redirects heavy grep/find searches to query the structured graph instead — to save tokens. It never writes/edits/deletes project files; it can't contradict the code because it only reads + routes.

**Why relevant:** it directly attacks the context-restoration-by-search cost (RI-0037) — redirecting search to a generated map is literally the "generate, don't hand-type" discipline, and it's a concrete existing implementation of "a map you traverse instead of grep." Existing-First (A8): before we build our own graph, this is a serious candidate.

**Our critical read (refute or confirm):**
1. **It solves the STRUCTURAL half, not the GOVERNANCE half.** Graphify's edges are code/text relationships (AST: calls, imports, references). CISEM's actual "graph" is *governance semantics* — tags, statuses, schema-position, corespine-inheritance, RATIFIED-vs-DRAFT, WIRED-vs-BODILESS, PARKED-past-TTL. Graphify would give a file/symbol map; it would NOT answer the audit's three questions (is this corespine bodiless? is routing wired? can parked items sit forever?) — those are governance facts, not AST edges. So it's the navigation / boot-ORDER layer, not the wiring-STATE manifest.
2. **Staleness = correctness risk, not just a stale optimization.** It intercepts grep/find and redirects to graph.json. If the graph isn't re-generated on every relevant change, redirected searches return stale/wrong locations *silently* — a correctness hole masked as a token saving. Manageable only with a regenerate-on-commit gate; without one it's dangerous for a system whose whole point is honest wired-vs-declared state.
3. **External dependency in the trusted path.** It hooks into `.claude/settings.json` and intercepts tool calls. CISEM runs a deliberate clean-posture (zero external MCP servers, GI-51). Graphify isn't MCP, but it's a third-party add-on intercepting Claude's search behavior — a conscious trust/supply-chain decision, not a free install.
4. **Complementary, not a replacement.** It saves tokens on SEARCH; a fresh tab's cost is also READING state. It addresses one half and pairs with a CISEM-generated governance-manifest for the other.

**Our tentative synthesis (A9 — both serve together):** adopt Graphify (trialed, not sealed — Principle 15) as the *structural navigation + search-token-saving* layer, and build CISEM's own *governance-state generator* (wiring-state / parked-TTL / boundary-clean / what-fires-when) that Graphify structurally can't produce. The two compose into the self-describing substrate. Adopting Graphify is itself a mechanism change (a new hook) → needs a plan + a trust decision + a trial, not a freestyle install.

**Where we want your eyes:**
1. Is the structural-vs-governance split right, or does Graphify's text/doc parsing capture more governance semantics than we're crediting?
2. Is the silent-stale-result risk a dealbreaker for a system that lives or dies on honesty, or manageable with a regenerate-on-commit gate?
3. Trust: does an external search-intercepting hook violate CISEM's clean-posture in spirit, or is read-only + local + open-source an acceptable line?
4. Adopt-and-layer vs build-our-own: if we build the governance-generator anyway, is Graphify still worth the dependency — or do our generator + a fixed boot-order already get us there without a third-party tool in the hot path?

---8<--- END PASTE ---8<---
