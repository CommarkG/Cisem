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
echo "LIVE ENFORCEMENT: run 'bash dna/checks/plan-audit.sh' → the [ZF] line is your done-gate."
echo "CAL governs this: CISEM-ARCH-00390. No creation is done until [ZF] ACHIEVED or every finding routed."
exit 0
