# ARCH-00420 Items #1–#3 — Consolidated Approach (for Brain review + comment)
**Node ID:** CISEM-ARCH-00420-items123 | **Type:** ARCH | **Status:** PROVISIONAL-ACTIVE | **Planning Status:** APPROACH-RATIFIED (Brain consensus 2026-07-25; 3 plan drafts follow → Opus soundness → GI-68 dual review → Governor ratification, non-delegable)
**depth_level:** L1 | **Position in schema:** T-SYS, planning-governance layer
**tags:** [approach-consolidated, plan-sections, gi-consideration, pending-dependency, gi-68-mechanism, wiring-consolidation]
**Goal:** Present, together, the goal + Existing-First + approach for the top 3 install-order items so Brain can review them as ONE coherent step (they interlock: all three tighten the plan pipeline). NOTHING built; each item still runs its own goal→approach→plan→Opus-soundness→GI-68 dual-review→Governor ratify→build.
**Governing corespine:** CS-CREATION-001 | **Date:** 2026-07-25 | **Author:** Opus (cisem-opus-pe)
**Independent Verifier (per item, at plan stage):** cisem-sonnet (design) + cisem-haiku (protocol), distinct from author.

---

## ITEM #1 — `[PLAN-SECTIONS]` mandatory-section completeness check
**Goal (DO/DON'T, GI-40):** DO — mechanically flag any changed plan missing a mandatory ARCH-00401 section, so a dropped section is caught at author-time not review-time (review caught it twice this session — RI-0032). DON'T — don't re-check what's already checked, and don't hard-BLOCK on a heuristic (WARN).
**Existing-First (source-verified):** `[ROUTING]` (Tier-Routing), `[ALIGN]` (Per-File Alignment Table), `[TAG-STATUS]` (Status column), `[POCKET]` (Pocket Declaration) ALREADY check 4 sections (plan-audit.sh:537/546/558/585). The authoritative full list is SKILL.md Step 1 / ARCH-00190 §2 (~15 elements). **Gap:** no check for Anti-Scatter Ordering, Path Rejection, Propagation Declaration, DoD reference, Executive Summary, Existing-First-statement, Dependencies, Change-log.
**Approach:** EXTEND the existing family (A8) — one `dna/checks/plan-sections.sh` that enumerates the full mandatory list and flags missing ones on CHANGED plans (reuse [ALIGN]'s changed-file scope + WARN posture). Consolidate the 4 existing partial checks under it OR have it cover only the currently-unchecked sections (decide at plan stage — consolidation vs addition). WARN, not in ZF (heuristic prose-detection, like its siblings).
**Extends, not forks:** the [ROUTING]/[ALIGN]/[TAG-STATUS]/[POCKET] section-check family.
**Leverage:** cheapest; applies to all 33+ plans; stops the recurring dropped-section defect. Ships first.

## ITEM #2 — `[GI-CONSIDERATION]` (+ `[PENDING-DEPENDENCY]` sibling) — wisdom + backlog at plan-time
**Goal (DO/DON'T):** DO — a plan must cite the specific governor-insights / root-insights it depends on or strengthens, and its declared blocks-on dependencies must resolve to real tracked items — turning session-start wisdom-injection into a per-plan gate (answers the Governor's Q6/Q7). DON'T — no bureaucratic over-citation; cite the RELEVANT FEW precisely, or it's worse than nothing.
**Existing-First (source-verified):** no `[GI-CONSIDERATION]`/`[PENDING-DEPENDENCY]` exists. Natural PARENT = **GI-10/[I19]** (Existing-First, RATIFIED-WIRED — "search what exists before planning; STATE the search"). Plans already declare blocks-on/unblocks-for (ARCH-00190) but nothing verifies they resolve; `P3` checks *decisions_pending* TTL (adjacent, not plan-deps). Session-start.sh injects GIs but no plan-time gate consults them.
**Approach:** EXTEND [I19] (A8) — today a plan states THAT it searched; add: state WHICH governor-insights/root-insights it depends on or strengthens (a `wisdom_considered:` header line citing GI/RI ids), checked by `[GI-CONSIDERATION]` (the ids exist + the plan names ≥1 relevant, WARN). Sibling `[PENDING-DEPENDENCY]` (later phase): a plan's `blocks-on:` items must resolve to a real plan/BP/RI id AND that item's status is surfaced (flag if blocks-on an unbuilt item). **Anti-over-citation guard:** the check requires PRESENCE of a considered-wisdom line, NOT a count threshold — Opus judges relevance; the mechanism only stops the SILENT omission (never demands N citations).
**Scope fork (for Brain/Governor):** RECOMMEND lead with `[GI-CONSIDERATION]` (the wisdom core), carry `[PENDING-DEPENDENCY]` as a coupled Phase-2 (Principle 15 — prove the harder one first). Alt: bundle equally.
**Leverage:** THE core — closes the biggest disconnect (planning ↔ accumulating wisdom). This is the item the Governor's questions were really about.

## ITEM #3 — GI-68 dual-review MECHANISM
**Goal (DO/DON'T):** DO — make the mandatory Sonnet+Haiku dual review a repeatable ONE-COMMAND procedure that dispatches both lenses, collects verdicts, and records them, so every plan gets the same review without hand-assembly (I did it by hand this session 3×). DON'T — don't pretend it can be a fully-auto git-hook (it can't — see constraint), and don't let it become a rubber-stamp (Opus still value-assesses the findings, GI-68).
**Existing-First (source-verified):** NO mechanism exists — only prose references + hand-dispatch. Skills present: cisem-create/frontend/meta/plan. **HARD CONSTRAINT (found):** a git-hook / shell plan-audit check CANNOT spawn subagents — so GI-68 mechanization CANNOT be an auto-firing gate; it must be an Opus-invoked SKILL (or Workflow) that dispatches the two review agents.
**Approach:** a `/cisem-plan-verify` skill (mirrors ARCH-00190 §3 Stage-1.x) — given a plan path, it dispatches cisem-sonnet (design lens) + cisem-haiku (protocol lens) with the standard GI-68 prompts, collects both findings, and writes the verdicts to the plan's review record; Opus then value-assesses (accept/filter) per GI-68. ENFORCEMENT (the mechanical backstop): EXTEND `[RATIFY-GATE]` (plan-audit.sh:626 — already requires a RATIFIED plan cite its Opus Stage-1 verdict) to ALSO require it cite the dual-review verdicts. So the PROCEDURE is a skill; the GATE that it happened is [RATIFY-GATE]-extended (git-enforced).
**Extends, not forks:** ARCH-00190 §3 + /cisem-plan + [RATIFY-GATE]. Honest: "mechanized" = repeatable procedure + citation-gate, NOT auto-fire (agent-dispatch can't be hooked).
**Leverage:** unblocks the 3 plans (ARCH-00417/418/419) stuck awaiting dual review + standardizes all future reviews.

---

## HOW THE THREE INTERLOCK (why review them together)
All three tighten the SAME pipeline at different points: #1 guarantees a plan is STRUCTURALLY complete (all sections), #2 guarantees it's CONTEXTUALLY connected (wisdom + deps), #3 guarantees it's INDEPENDENTLY reviewed (dual lens, mechanized). Built in order 1→2→3, each plan authored after #1 is section-complete, after #2 wisdom-connected, after #3 consistently reviewed. They share the plan-audit WARN idiom (#1, #2) + the skill/[RATIFY-GATE] pattern (#3).

## DOGFOOD NOTE
Building #1–#3 will be the FIRST real creations to pass through PART08's plan-authorization gate — each new check file (dna/checks/plan-sections.sh etc.) must cite the ratified plan that authorizes it (or it self-blocks at commit, as PART08's own build proved).

## BRAIN CONSENSUS 2026-07-25 (APPROACH-RATIFIED by Brain review — folds into the plan drafts)
Brain reviewed (real comments, not a rubber-stamp) and RESOLVED all three asks + raised one:
- **#1 — CONSOLIDATE BY REFERENCE, not rewrite (resolved):** `[PLAN-SECTIONS]` becomes the SINGLE enumeration of all ~15 mandatory elements, but internally REUSES the extraction logic the 4 existing checks (`[ROUTING]/[ALIGN]/[TAG-STATUS]/[POCKET]`) already use — factor that logic into a shared lib (the SAME pattern PART08 used with build-state's token-anchor), the 4 existing checks + [PLAN-SECTIONS] all call it. ONE check surface, ZERO duplicated logic, no regression of the 4 working checks.
- **#2 relevance-hole (resolved):** presence-not-count is right but self-certifiable alone (cite an irrelevant-but-present insight to pass). FIX — do NOT build a new mechanism: fold a SMALL SAMPLE of `[GI-CONSIDERATION]` citations into the periodic GI-68 review, spot-checked for ACTUAL relevance (exactly how Haiku already spot-checks fixture claims against disk). Mechanical presence + review-sampled relevance.
- **#2 retroactivity (Brain's open question — ANSWERED explicitly):** `[PENDING-DEPENDENCY]` (and `[GI-CONSIDERATION]`) are **FORWARD-ONLY** — changed-plans-only, like PART02/PART08 + BLOCK 4's precedent; NOT retroactive to the 33-plan backlog (retro would flag the whole backlog at once = noise). The backlog is drained separately by install-order item #4 (live index + TTL).
- **#3 auto-fire path (resolved + named, not closed):** Brain verified an **`agent`-type hook** exists (can spawn a subagent to verify conditions before returning a decision) — genuinely close to auto-fire dual-review dispatch, BUT experimental + 60s default timeout (too short for Sonnet+Haiku+Opus synthesis). So the skill+[RATIFY-GATE] ceiling is right for the NEAR-TERM ship, but the plan must NAME the `agent`-hook as the future auto-fire path to revisit (don't close the door as if no primitive exists).
- **Build order 1→2→3:** Brain agreed.

## STATUS / NEXT
**APPROACH-RATIFIED (Brain consensus 2026-07-25; Governor stepped back from turn-by-turn — report later).** Next: draft the 3 ratifiable PART plans folding the above → Opus soundness → GI-68 dual review → **Governor ratification (non-delegable — Brain's go is not ratification)** → build (order 1→2→3). PART numbers: #1 → PART12 `[PLAN-SECTIONS]`, #2 → PART13 `[GI-CONSIDERATION]`, #3 → PART01 (GI-68 mechanism, its existing index slot).

## Change log
- v0.1 2026-07-25 (Opus) — consolidated approach for install-order items #1-3; goal + source-verified Existing-First + approach each; presented for Brain review per Governor "proceed with next 3 + consolidated report for Brain."
