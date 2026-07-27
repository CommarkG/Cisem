#!/usr/bin/env bash
# authorizing_plan: CISEM-ARCH-00431 (RATIFIED 2026-07-27 — Real-Value Verification schema)
# [WIRING-VALUE] weekly BOTTOM-LINE report (CISEM-SCHEMA-00002). Reads each governed
# element's two axes and reports whether effort delivers REAL VALUE:
#   AXIS-1 wiring_state (DECLARED/CONNECTED/ACCESSIBLE/LIVE — ref ARCH-00011 §4, only LIVE counts, I23)
#   AXIS-2 value_delivered (yes/partial/no/untested — evidence + independent verifier, per SCHEMA-00002)
# REAL VALUE = wiring_state LIVE AND value_delivered yes. Two failure shapes surfaced:
#   built-but-not-live (state < LIVE) · runs-but-delivers-nothing (LIVE + value_delivered != yes).
# WARN-only (heuristic tag-read); NOT in [ZF]. Fixture: dna/checks/fixtures/wiring-value-report/run-test.sh (RI-0058).
# value_delivered is a NEW axis (SCHEMA-00002) — most elements will read 'untested' until tagged (honest rollout).
#
# USAGE: bash dna/checks/wiring-value-report.sh [scan_dir ...]   (default: the governed dirs below)
repo="$(git rev-parse --show-toplevel 2>/dev/null || echo .)"; cd "$repo" 2>/dev/null || exit 0

if [ "$#" -gt 0 ]; then scan_dirs=("$@"); explicit=1; else
  scan_dirs=(dna/planning dna/protocols dna/schema dna/corespines dna/checks .claude/agents); explicit=0
fi

# extract a field's value (fixed label at line-start or after "| "), first hit, trimmed, bold-stripped.
# GI-68 Sonnet fix (RI-0065 face-b, self-contamination): REJECT placeholder tokens like `<DECLARED|...>`
# — a schema/template file documents its own tag syntax with `<...>` examples, and a naive grep would read
# those as real metadata (verified on SCHEMA-00002 itself). A rejected token falls through to the Status-fallback.
field() {
  local f="$1" label="$2" raw tok
  raw=$(grep -oiE "(^|[|])[[:space:]]*\*{0,2}${label}:\*{0,2}[[:space:]]*[^|(]*" "$f" 2>/dev/null | head -1)
  tok=$(printf '%s' "$raw" | sed -E "s/.*${label}:\*{0,2}[[:space:]]*//I" | tr -d '\r' | sed -E 's/\*+//g' | awk '{print toupper($1)}')
  case "$tok" in "<"*|"") printf '';; *) printf '%s' "$tok";; esac   # drop `<placeholder>` example values
}

total=0; live=0; realvalue=0; runs_no_value=0; not_live=0; unverified=0
board=""

for d in "${scan_dirs[@]}"; do
  [ -d "$d" ] || continue
  while IFS= read -r f; do
    [ -f "$f" ] || continue
    case "$f" in */fixtures/*) [ "$explicit" -eq 0 ] && continue;; esac   # skip synthetic fixtures on a LIVE run; a test that explicitly points here still sees them
    ws=$(field "$f" "wiring_state")
    # axis-1 fallback: if no explicit wiring_state tag, derive a coarse proxy from Status token
    if [ -z "$ws" ]; then
      st=$(field "$f" "Status")
      case "$st" in LIVE) ws="LIVE";; RATIFIED|COMPLETE|ACTIVE) ws="ACCESSIBLE";; PROVISIONAL-ACTIVE|CONNECTED) ws="CONNECTED";; *) ws="DECLARED";; esac
    fi
    vd=$(field "$f" "value_delivered"); [ -z "$vd" ] && vd="UNTESTED"
    total=$((total+1))
    if [ "$ws" = "LIVE" ]; then
      live=$((live+1))
      if [ "$vd" = "YES" ]; then
        # SCHEMA-00002 CORE-SEED 2 (GI-68 Sonnet fix, RI-0065 face-a): value_delivered=yes counts as REAL VALUE
        # ONLY with shown evidence + an INDEPENDENT verifier present — a bare `yes` is self-declaration (I23/I24), NOT real value.
        if grep -qiE "(^|[|])[[:space:]]*\*{0,2}evidence:" "$f" && grep -qiE "(^|[|])[[:space:]]*\*{0,2}verified_by:" "$f"; then
          realvalue=$((realvalue+1))
        else
          unverified=$((unverified+1)); board="${board}\n   SELF-DECLARED: $f (value_delivered=yes but MISSING evidence:/verified_by: — self-declaration, NOT counted as real value, I23/I24)"
        fi
      else runs_no_value=$((runs_no_value+1)); board="${board}\n   RUNS-NO-VALUE: $f (LIVE but value_delivered=$vd — runs, delivers nothing?)"; fi
    else
      not_live=$((not_live+1))
    fi
  done < <(find "$d" -name '*.md' 2>/dev/null)
done

echo "[WIRING-VALUE] weekly bottom-line (CISEM-SCHEMA-00002; WARN-only, not in ZF):"
echo "   scanned: ${scan_dirs[*]}"
echo "   TOTAL governed elements: $total"
echo "   AXIS-1 (was it active?): LIVE=$live · not-yet-LIVE=$not_live"
echo "   AXIS-2 (did it deliver?): REAL-VALUE (LIVE + value_delivered=yes + evidence + independent verifier)=$realvalue | SELF-DECLARED (yes WITHOUT evidence/verifier - NOT real value, I23/I24)=$unverified | LIVE-but-value-not-yes=$runs_no_value"
if [ "$total" -gt 0 ]; then
  echo "   BOTTOM LINE: $realvalue / $total elements have PROVEN real value ($(( realvalue * 100 / total ))%); the rest are effort-without-proven-value (declared-not-live or runs-no-value)."
fi
[ -n "$board" ] && printf '%b\n' "$board"
echo "   NOTE: value_delivered is a NEW axis (SCHEMA-00002); elements read UNTESTED until tagged — the low % is the honest starting point, not a regression."
exit 0
