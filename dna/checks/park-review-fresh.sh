#!/usr/bin/env bash
# authorizing_plan: CISEM-ARCH-00423 (RATIFIED 2026-07-25 — Threshold-audit remediation, D3)
# [PARK-REVIEW-FRESH] — D3 (CISEM-ARCH-00423). Extends parked-item aging BEYOND [P3]'s decisions_pending:
# YAML scan (which does NOT enumerate dna/ibd/*.md or dna/queue/BP-*.md, per the Threshold/Routing/Parking
# audit finding) to the REAL parked population. Same freshness-stamp shape as agent-pass-gate.sh (Principle
# 21 precedent, reused not reinvented) — a `.stamp` file, WARN if stale >N days. N=14 (Governor-set
# 2026-07-25, CISEM-ARCH-00423 §Opus Soundness Verdict). WARN-only, NOT in the ZF formula.
# Honest limit (I23): this gate fires + tracks freshness + prints the REAL count mechanically; the actual
# batch review SWEEP is model-performed on this cue (same class as the ARCH-00370 harvest gate). [P3] is
# NOT replaced or edited — this is an ADDITIVE sibling check, a different population, same idiom.
repo="$(git rev-parse --show-toplevel 2>/dev/null || echo .)"; cd "$repo" 2>/dev/null || exit 0
stamp="dna/checks/park-review.stamp"
N=14
echo "[PARK-REVIEW-FRESH] parked-population review freshness (dna/ibd PARKED-RAW + dna/queue/BP not-COMPLETE; N=$N days; WARN-only):"

# Real counts — value-anchored (RI-0012-safe: match the field VALUE right after the status marker, not a
# bare substring anywhere on the line).
ibd_count=0
if ls dna/ibd/*.md >/dev/null 2>&1; then
  ibd_count=$(grep -ilE "^\*{0,2}status:\*{0,2}[[:space:]]*PARKED-RAW" dna/ibd/*.md 2>/dev/null | wc -l | xargs)
fi

bp_count=0
if ls dna/queue/BP-*.md >/dev/null 2>&1; then
  for f in dna/queue/BP-*.md; do
    st=$(grep -iE "^\*{0,2}status:\*{0,2}[[:space:]]*[A-Za-z0-9_-]+" "$f" 2>/dev/null | head -1 | \
      sed -E 's/.*status:\*{0,2}[[:space:]]*//i' | awk '{print $1}')
    stU=$(echo "$st" | tr '[:lower:]' '[:upper:]')
    if [ "$stU" != "COMPLETE" ]; then
      bp_count=$((bp_count + 1))
    fi
  done
fi

if [ ! -f "$stamp" ]; then
  echo "   ⚠ no stamp — run the parked-population review sweep (dna/ibd PARKED-RAW=$ibd_count, dna/queue/BP not-COMPLETE=$bp_count), then: touch $stamp"
elif find "$stamp" -mtime +$N 2>/dev/null | grep -q .; then
  echo "   ⚠ OVERDUE (>$N days) — run the parked-population review sweep (dna/ibd PARKED-RAW=$ibd_count, dna/queue/BP not-COMPLETE=$bp_count), then: touch $stamp"
else
  echo "   ✓ fresh (parked-population review ran within $N days) — current: dna/ibd PARKED-RAW=$ibd_count, dna/queue/BP not-COMPLETE=$bp_count"
fi
exit 0
