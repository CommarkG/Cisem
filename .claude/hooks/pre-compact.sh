#!/usr/bin/env bash
# ── CISEM AUTONOMIC LAYER (CAL) — PreCompact hook ────────────────────────────
# Fires AUTOMATICALLY before any compaction. (0) HARVEST GATE — fires the ARCH-00370
# STEP 1–5 learning extraction mandate + mechanically verifies a FRESH harvest was written
# (warns if stale); (1) DETAILED save-all status; (2) a paste-ready RESUME ONE-CLICK that
# resolves the LATEST COMPACT STATE dynamically (no forked/stale content). Mechanical (no
# instruction). Governs: CISEM-ARCH-00390 (CAL) + CISEM-ARCH-00370 (harvest) Enforcement Point 1.
# NOTE (honesty, I23): a PreCompact hook cannot HARD-BLOCK compaction and cannot itself REASON —
# it FIRES + VERIFIES + WARNS mechanically; the STEP 1–5 extraction is performed by the model on this cue.
repo="$(git rev-parse --show-toplevel 2>/dev/null || echo .)"
cd "$repo" 2>/dev/null || exit 0

reg="dna/learning-registry/session-learning-index.yaml"

# SAVE-RAW-ACTIVITY (Governor decree 2026-07-21) — snapshot the recent raw activity window (verbatim transcript) to disk FIRST.
bash dna/checks/save-raw-activity.sh 2>/dev/null || true

echo "══════════ CISEM AUTONOMIC LAYER (CAL) — PRE-COMPACT (auto-fired) ══════════"
echo ""
echo "STEP 0 — HARVEST GATE (ARCH-00370 Enforcement Point 1 — run BEFORE compacting):"
echo "  MANDATE: run the STEP 1–5 learning harvest into $reg —"
echo "    1 Scan session  2 Categorize (insight/solution/prevention/gap/decision)  3 Register"
echo "    4 Verify nothing dropped (I14)  5 Hardwire for inheritance. This is NOT 'update COMPACT STATE' (that is save-all)."
echo "  FULL-FIDELITY (Axiom A10 — Governor decree 2026-07-20): the harvest is TIERED, not flat."
echo "    Capture PROCESS + INTENTS + [[CORE-SEED]]s + NUANCES, and give SPECIAL attention to the"
echo "    LATEST DECISIONS + DEFINITIONS — inherit them with FULL content + context + reasoning,"
echo "    rich enough to re-derive, NOT a one-line summary. They are the session's fruits; a shallow"
echo "    capture of them is a professional failure, not a save. Routine items may be indexed; fruits are captured richly."
echo "  BOUNDARY-SURVIVAL ARTIFACTS (Governor decree 2026-07-21 — MANDATORY when in-flight DESIGN/PROCESS work is open):"
echo "    Compaction summarizes and can distort INTENT. Before the boundary, ensure THREE artifacts exist on disk:"
echo "    (1) a FIDELITY record — WHAT the Governor asked + WHAT you understood (verbatim-in-essence), so intent survives;"
echo "    (2) a PROCESS-CONTEXT file — the design + full reasoning + nuances of the open work;"
echo "    (3) a RESUME PROMPT with LINKS to (1)+(2)+the relevant RAW/PURIFIED/design files, stating what is consensus vs pending."
echo "    (4) a VERBATIM-INDEX (Governor decree 2026-07-21): point to the raw session .jsonl TRANSCRIPT as the VERBATIM"
echo "        source of truth (NEVER reconstruct verbatim from memory — that is re-summarizing, the failure) + link the"
echo "        interpretation files; the resume MUST read BOTH (verbatim transcript AND interpretations). Precedent:"
echo "        dna/learning-registry/boundary-verbatim-index-*.md + session-fidelity-*.md + dna/planning/*-merge-design-*.md."
echo "    WHY (RI-0011 — mapped defaults): a model's trained reflexes (summarize / in-context-feels-safe / plausible-done /"
echo "        effort-minimize / not-modeling-the-blank-slate-reader) push AWAY from verbatim git persistence; awareness is"
echo "        insufficient, so this MANDATE + the transcript pointer are the mechanical counter. Throwing away 1k-token work is the damage."
# Mechanical freshness check: is the registry dirty (harvest in progress) or written in HEAD (fresh)?
if [ -n "$(git status --porcelain -- "$reg" 2>/dev/null)" ]; then
  echo "  ✓ harvest IN PROGRESS this window (registry has uncommitted changes)"
else
  last_reg_commit="$(git log -1 --format=%H -- "$reg" 2>/dev/null)"
  if [ -z "$last_reg_commit" ]; then
    echo "  ⚠ HARVEST GATE: no learning-registry history found — run STEP 1–5 before compacting."
  else
    gap="$(git rev-list "${last_reg_commit}..HEAD" --count 2>/dev/null || echo 0)"
    if [ "${gap:-0}" -eq 0 ]; then
      echo "  ✓ harvest FRESH (registry written in HEAD — this window's learnings are captured)"
    else
      echo "  ⚠ HARVEST GATE: ${gap} commit(s) since the registry was last updated —"
      echo "     this window's learnings may be UNHARVESTED. Run ARCH-00370 STEP 1–5 into $reg NOW."
    fi
  fi
fi
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
bash dna/checks/plan-audit.sh 2>/dev/null | grep -E "ZF ACHIEVED|NOT ZF|EDGE" | sed 's/^/  /'
echo "  I20 checklist: (1) WITNESS-00003 COMPACT STATE current? (2) chat-only content embedded? (3) committed+pushed? (4) handoffs prepped?"
echo ""
# Resolve the LATEST COMPACT STATE version dynamically (A8 one-source: do NOT fork WITNESS content into the hook).
latest_cs="$(grep -oE 'COMPACT STATE v[0-9]+' dna/CISEM-WITNESS-00003-session-continuity.md 2>/dev/null | sort -t v -k2 -n | tail -1)"
latest_cs="${latest_cs:-the latest COMPACT STATE block}"
echo "STEP 2 — PASTE-READY RESUME ONE-CLICK (self-contained, zero-context, I21):"
echo "┌───────────────────────────────────────────────────────────────────────────┐"
cat <<'ONECLICK'
I AM: Opus (cisem-opus-pe), resuming CISEM after compaction. Platform-level engineer,
shared persona CLAUDE.md §1.6 (root-cause extraction; wire native primitives; no deferral-as-caution).

BOOTSTRAP — read in this order, zero prior context assumed:
  1. CLAUDE.md  (constitution: Axioms A1–A8, §3 gates, CAL ARCH-00390, §1.6 persona)
ONECLICK
echo "  2. dna/CISEM-WITNESS-00003-session-continuity.md → the \"$latest_cs\" block (AUTHORITATIVE current state + first-moves)"
cat <<'ONECLICK'
  3. dna/quality-ledger.yaml   4. dna/learning-registry/session-learning-index.yaml   5. dna/queue/README.md
Then STATE the inherited preventions you will apply before creating anything.

ENFORCEMENT (autonomic — CAL): run `bash dna/checks/plan-audit.sh`; the [ZF] line is the done-gate.
  No creation is done until [ZF] ACHIEVED or every finding routed (I2/I22/I23). Live checks + P3/P5 + [EDGE] three-state.

FIRST MOVES: read the AUTHORITATIVE COMPACT STATE block above — it carries the current open items, pending
Governor ratifications (present each with PCR), deferred/resurrectable plans, and this session's focus. Do NOT
rely on any first-move list hardcoded elsewhere; the WITNESS block is the one source (A8).
Do NOT declare anything done without shown evidence + the [ZF] line. Continue open threads; nothing is dropped.
ONECLICK
echo "└───────────────────────────────────────────────────────────────────────────┘"
echo ""
echo "INHERITED PREVENTIONS (top, from the learning registry — apply before creating):"
grep -hiE "^ *prevention:|^ *root_improvement" "$reg" 2>/dev/null \
  | sed -E 's/^ *//' | head -8 | sed 's/^/  - /'
exit 0
