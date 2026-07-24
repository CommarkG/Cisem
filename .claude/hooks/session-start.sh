#!/usr/bin/env bash
# ── CISEM AUTONOMIC LAYER (CAL) — SessionStart hook ──────────────────────────
# Fires AUTOMATICALLY at every session start (startup / resume / after compact).
# Injects inherited learnings + the resume path into context so NO agent starts
# blind. This is MECHANICAL inheritance (fires with zero instruction) — the thing
# that turns "behavioral discipline" into "automatic". Governed by CISEM-ARCH-00390.
repo="$(git rev-parse --show-toplevel 2>/dev/null || echo .)"
cd "$repo" 2>/dev/null || exit 0
echo "── CISEM AUTONOMIC LAYER (CAL) — inherited context, auto-injected ──"
echo "RESUME: CLAUDE.md → dna/CISEM-WITNESS-00003-session-continuity.md (COMPACT STATE) →"
echo "        dna/quality-ledger.yaml → dna/learning-registry/session-learning-index.yaml → dna/queue/README.md"
echo ""
echo "PERSONA (SSOT — load before acting): dna/corespines/CS-AI-PROFILING-001/persona-collaborator.md"
echo "  L1 core always; L2 in an active process; L3 for complex/domain work. REFERENCE only, never copy (I10)."
echo ""
echo "INHERITED PREVENTIONS (apply BEFORE creating anything — state which you apply):"
grep -hiE "^ *prevention:|^ *hardwired_as:" dna/learning-registry/session-learning-index.yaml 2>/dev/null \
  | sed -E 's/^ *//' | head -14 | sed 's/^/  - /'
echo ""
echo "SEALED / RATIFIED — DO NOT RE-DERIVE (born-aware anti-re-derivation gate, RI-0021):"
echo "  Before proposing OR consolidating ANY concept as NEW, GREP dna/governor-insights.yaml +"
echo "  dna/ssot-registry.yaml FIRST and STATE the search. A consolidation that FEELS novel is the"
echo "  exact trap (GI-55) — Opus re-derived RATIFIED content 3x in one session. Already RATIFIED:"
grep -hE "status: RATIFIED" dna/governor-insights.yaml 2>/dev/null \
  | sed -E 's/.*id: (GI-[0-9a-z_]+).*insight: "([^"]{0,84}).*/  - \1 \2.../' | head -12
echo "  - PLATFORM NORTH STAR: SEALED at FOUND-00001 apex (GI-44) — sub-goals SERVE it, never redefine it."
echo "  (This list is auto-pulled from governor-insights.yaml each session — it stays current.)"
echo ""
echo "OPERATING PROCESS (always-loaded — CLAUDE.md §1.8 — HOW WE WORK, inherits every tab):"
echo "  ROLES: Governor(sole-ratify, sets goals) · Opus(orchestrate+build+COMPLETE decided/ratified, GI-69) · Brain(external cross-check, NO repo access)."
echo "  FLOW: goal→approach→plan→ratify→build (GI-65/67). NOTHING built without a ratified plan (A4/A11). End every reply: (A) plain-for-Governor + (B) one-click-for-Brain."
echo "  EVERY TURN: complete decided/ratified work (never 'update'+defer, GI-69); route a REAL prevention + preserve the good (GI-70); prefer completion over new inputs (GI-71)."
echo ""
echo "GOVERNOR-INSIGHTS = DUAL: an analysis-archive of how the Governor thinks AND a LIVE PARK-QUEUE. Below is the un-wired backlog —"
echo "  the system is ENFORCED to go over it every session and drive the top items toward WIRED (do NOT let it become a stale archive, RI-0027/0029):"
grep -hE 'DECREED-NOT-YET-WIRED|DECREED,|"?PARKED|AWAITING-GOVERNOR|AXIOM-CANDIDATE|CONSENSUS-REACHED|WISH-PARKED|DECLARED,' dna/governor-insights.yaml 2>/dev/null \
  | sed -E 's/.*id: (GI-[0-9a-z_]+).*insight: "([^"]{0,72}).*/  - \1 \2.../' | head -16
echo "  (auto-pulled each session; a GROWING list = the platform declaring faster than it wires — close it. Same for un-WIRED root-insights.)"
echo ""
echo "LIVE ENFORCEMENT: run 'bash dna/checks/plan-audit.sh' → the [ZF] line is your done-gate."
echo "CAL governs this: CISEM-ARCH-00390. No creation is done until [ZF] ACHIEVED or every finding routed."
exit 0
