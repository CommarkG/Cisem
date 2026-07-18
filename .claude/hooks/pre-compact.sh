#!/usr/bin/env bash
# ── CISEM AUTONOMIC LAYER (CAL) — PreCompact hook ────────────────────────────
# Fires AUTOMATICALLY before any compaction. Runs the ZF audit + reminds save-all
# (Principle 12/13, I20) so nothing load-bearing is lost at the boundary.
# MECHANICAL pre-boundary gate — no instruction required. Governed by CISEM-ARCH-00390.
repo="$(git rev-parse --show-toplevel 2>/dev/null || echo .)"
cd "$repo" 2>/dev/null || exit 0
echo "── CISEM AUTONOMIC LAYER (CAL) — PRE-COMPACT save-all gate (auto-fired) ──"
echo "BEFORE compacting (I20): (1) update WITNESS-00003 COMPACT STATE; (2) embed chat-only content to files;"
echo "                        (3) commit + push; (4) prep self-contained handoffs; (5) state the resume path."
bash dna/checks/plan-audit.sh 2>/dev/null | grep -E "\[ZF\]|ZF ACHIEVED|NOT ZF" | sed 's/^/  /'
echo "  ↳ If NOT ZF: route every finding BEFORE the boundary (disclosure ≠ resolution)."
exit 0
