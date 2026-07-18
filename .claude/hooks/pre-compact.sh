#!/usr/bin/env bash
# ── CISEM AUTONOMIC LAYER (CAL) — PreCompact hook ────────────────────────────
# Fires AUTOMATICALLY before any compaction. Presents (1) a DETAILED save-all status
# and (2) a paste-ready, self-contained RESUME ONE-CLICK — so the next session/tab
# resumes with zero context loss. Mechanical (no instruction). Governed by CISEM-ARCH-00390.
repo="$(git rev-parse --show-toplevel 2>/dev/null || echo .)"
cd "$repo" 2>/dev/null || exit 0

echo "══════════ CISEM AUTONOMIC LAYER (CAL) — PRE-COMPACT (auto-fired) ══════════"
echo ""
echo "STEP 1 — SAVE-ALL STATUS (I20 — resolve before compacting):"
dirty="$(git status --porcelain 2>/dev/null)"
if [ -n "$dirty" ]; then
  echo "  ⚠ UNCOMMITTED CHANGES — commit + push BEFORE compacting:"
  echo "$dirty" | sed 's/^/       /'
else
  echo "  ✓ working tree CLEAN (complete SSOT)"
fi
unpushed="$(git log origin/main..HEAD --oneline 2>/dev/null | wc -l | tr -d ' ')"
echo "  unpushed commits: ${unpushed:-?}  (push before the boundary)"
bash dna/checks/plan-audit.sh 2>/dev/null | grep -E "ZF ACHIEVED|NOT ZF" | sed 's/^/  /'
echo "  I20 checklist: (1) WITNESS-00003 COMPACT STATE current? (2) chat-only content embedded? (3) committed+pushed? (4) handoffs prepped?"
echo ""
echo "STEP 2 — PASTE-READY RESUME ONE-CLICK (self-contained, zero-context, I21):"
echo "┌───────────────────────────────────────────────────────────────────────────┐"
cat <<'ONECLICK'
I AM: Opus (cisem-opus-pe), resuming CISEM after compaction. Platform-level engineer,
shared persona CLAUDE.md §1.6 (root-cause extraction; wire native primitives; no deferral-as-caution).

BOOTSTRAP — read in this order, zero prior context assumed:
  1. CLAUDE.md  (constitution: Axioms A1–A8, §3 gates, CAL ARCH-00390, §1.6 persona)
  2. dna/CISEM-WITNESS-00003-session-continuity.md → the "COMPACT STATE v2" block (AUTHORITATIVE current state)
  3. dna/quality-ledger.yaml   4. dna/learning-registry/session-learning-index.yaml   5. dna/queue/README.md
Then STATE the inherited preventions you will apply before creating anything.

ENFORCEMENT (autonomic — CAL): run `bash dna/checks/plan-audit.sh`; the [ZF] line is the done-gate.
  No creation is done until [ZF] ACHIEVED or every finding routed (I2/I22/I23). 8 live checks + P3/P5.

FIRST MOVES (from COMPACT STATE v2):
  • NEXT-SESSION TASK: A8-sweep (A1–A7 → A1–A8 across agents/protocols) — thorough Sonnet pass.
  • DEFERRED (resurrectable): graph ARCH-00382 (re-anchor to DIOS maturity); harvest loop (IBD-0005); SessionEnd hook.
  • PENDING GOVERNOR: Founding axioms (TSA/CoreSpiral/Pocket); comms CS-COMMS-001; DIOS deep-dive.
Do NOT declare anything done without shown evidence + the [ZF] line. Continue open threads; nothing is dropped.
ONECLICK
echo "└───────────────────────────────────────────────────────────────────────────┘"
echo ""
echo "INHERITED PREVENTIONS (top, from the learning registry — apply before creating):"
grep -hiE "^ *prevention:|^ *root_improvement" dna/learning-registry/session-learning-index.yaml 2>/dev/null \
  | sed -E 's/^ *//' | head -8 | sed 's/^/  - /'
exit 0
