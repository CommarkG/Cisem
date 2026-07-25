#!/usr/bin/env bash
# authorizing_plan: CISEM-ARCH-00423 (RATIFIED 2026-07-25 — Threshold-audit remediation, D4)
# [THRESHOLD-COVERAGE-MAP] — D4 (CISEM-ARCH-00423). Honestly maps CS-THRESHOLD-001's OWN parts — invariants
# I1-I21 (corespine-registry.yaml's own "Invariants I1-I21 live in both places" scope) + Gate-0
# goal-connection + SWIFT + park-by-demand routing — to ONE of three states, NEVER a fake WIRED/gap binary
# (Core Seed 3): this is Threshold's OWN coverage map, NOT a new universal audit engine.
#   WIRED            — a named mechanical check exists on disk; cited + grep-verifiable (file:line).
#   PROSE-BY-DESIGN  — CLAUDE.md §2.7 itself DISCLOSES the part cannot be hook-enforced (an honest,
#                       intentional limit, not a gap) — cited verbatim, never invented for other parts.
#   NOT-YET-WIRED    — a real, honest gap: no mechanism, no disclosed-by-design citation either.
# DYNAMIC by design (re-derives WIRED status from disk each run, grepping plan-audit.sh + the git hook) —
# avoids the I16 staleness class (a hardcoded snapshot table would drift the moment a new check lands).
# WARN-only, NOT in the ZF formula.
repo="$(git rev-parse --show-toplevel 2>/dev/null || echo .)"; cd "$repo" 2>/dev/null || exit 0
pa="dna/checks/plan-audit.sh"
hook=".git/hooks/pre-commit"
echo "[THRESHOLD-COVERAGE-MAP] CS-THRESHOLD-001 per-part wiring honesty (I1-I21 + Gate-0 + SWIFT + park-by-demand; WARN-only):"

wired=0; prose=0; gap=0

row() {
  part="$1"; state="$2"; cite="$3"
  printf "   %-9s %-16s %s\n" "$part" "$state" "$cite"
  case "$state" in
    WIRED) wired=$((wired+1)) ;;
    PROSE-BY-DESIGN) prose=$((prose+1)) ;;
    NOT-YET-WIRED) gap=$((gap+1)) ;;
  esac
}

for n in $(seq 1 21); do
  cite=""
  if [ "$n" = "13" ] && grep -qE "^# I13 BLOCK" "$hook" 2>/dev/null; then
    cite="$hook:5 (I13 BLOCK — seed-strip refusal, Opus-only immutability)"
  else
    ln=$(grep -nE "^# I${n} [—-]" "$pa" 2>/dev/null | head -1 | cut -d: -f1)
    [ -n "$ln" ] && cite="$pa:$ln"
  fi
  if [ -n "$cite" ]; then
    row "I${n}" "WIRED" "$cite"
  else
    row "I${n}" "NOT-YET-WIRED" "no named check found in $pa or $hook (real gap, not disclosed-by-design)"
  fi
done

row "Gate-0" "PROSE-BY-DESIGN" \
  "CLAUDE.md §2.7 discloses: 'an input-time stamp cannot be git-hook-enforced (no hook fires on a chat input); its hardwiring IS this always-loaded gate' — the commit-time [GOAL] trace follow-on it names is itself NOT-YET-WIRED"
row "SWIFT" "NOT-YET-WIRED" \
  "no mechanical check found; behavioral discipline only (CLAUDE.md §2.7 SWIFT) — no §2.7 unhookable-disclosure citing SWIFT specifically, so this is a real gap, not PROSE-BY-DESIGN"
row "park-by-demand" "NOT-YET-WIRED" \
  "no routing-mechanism check found — the Threshold/Routing/Parking audit's own finding: routing decisions (PROCESS-NOW/QUEUE/PARK/REJECT) are currently prose/discipline, not machine-enforced"

echo "   — totals: WIRED=$wired  PROSE-BY-DESIGN=$prose  NOT-YET-WIRED=$gap  (24 parts enumerated; none silently blank)"
exit 0
