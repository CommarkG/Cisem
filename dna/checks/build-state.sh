#!/usr/bin/env bash
# [BUILD-STATE] — closes the ratified-but-unbuilt class (RI-0027). Per CISEM-ARCH-00420-PART02
# (Governor-RATIFIED plan, Opus Stage-1 SOUND, GI-68 dual-reviewed): any plan whose Status:/Planning
# Status: field VALUE token-anchors to COMPLETE or RATIFIED must have its named new-file deliverables
# on disk, OR the absent deliverable's OWN row/paragraph must carry an explicit unbuilt-marker — else
# it is FLAGGED. WARN-only (heuristic prose-parsing); NOT part of the [ZF] formula (plan-audit.sh).
#
# CORE-SEED 1 (status selection): TOKEN-ANCHOR — extract the LEADING enum token of the field value
#   (text after the marker, cut at the first em-dash/hyphen/whitespace) and EXACT-MATCH it against
#   {COMPLETE, RATIFIED}. NEVER substring-scan the whole value — ARCH-00392/ARCH-00406 both read
#   "Planning Status: IN-PROGRESS — Governor RATIFIED …"; the enum token is IN-PROGRESS, not RATIFIED,
#   and must NOT be selected (proven acid test, this file's fixtures + the live run).
# CORE-SEED 2 (marker search): scoped to the deliverable's OWN row (the line(s) containing that exact
#   path string), via grep -iF (fixed-string, case-insensitive). NEVER a whole-file scan, NEVER a
#   bracket/regex pattern — a whole-file scan lets one stray marker clear every absent row in a
#   multi-row plan (proven on ARCH-00406's 11-row table).
# CORE-SEED 3 (existence): `test -e` on FILE-PATH-SHAPED tokens ONLY (dna|frontend|.claude|.git/hooks
#   paths ending .md/.sh/.yaml/.yml/.json/.js/.html) — never inferred by content-grep. SHAPE-DISCLOSURE
#   printed every run: this check covers NEW-FILE existence only, NOT edit-in-place completeness.
# CORE-SEED 4: WARN-only, always exit 0; never writes/edits a truth-bearing Status field on any real
#   plan (I7 — Opus stamps truth); fixtures live under dna/checks/fixtures/ (outside `find dna/planning`)
#   so they never self-flag.
#
# USAGE: bash dna/checks/build-state.sh [scan_dir]   (default scan_dir: dna/planning)
#   The optional arg lets dna/checks/fixtures/build-state/run-test.sh point this SAME script at ONLY
#   the 3 synthetic fixtures, so the planted test exercises the real code path, not a copy.
repo="$(git rev-parse --show-toplevel 2>/dev/null || echo .)"; cd "$repo" 2>/dev/null || exit 0

scan_dir="${1:-dna/planning}"

# extract_token now SOURCED from the shared lib (CISEM-ARCH-00420-PART08 Deliverable 3 — one
# definition, A8; behavior identical, verbatim move, no top-level side effects sourced). Falls back
# to a local re-declaration only if the lib is somehow absent, so this check never hard-fails.
if [ -f "dna/checks/lib/plan-gate.sh" ]; then
  # shellcheck disable=SC1090
  source "dna/checks/lib/plan-gate.sh"
fi

UNBUILT_MARKERS='NOT-YET-WIRED
NOT-YET-BUILT
implementation is a LATER
follow-on build
awaiting build
buildable
not yet greenlit'

echo "[BUILD-STATE] ratified/complete plans whose named new-file deliverables are absent, unmarked (RI-0027; scan: $scan_dir; WARN-only, not in ZF):"
echo "   SHAPE-DISCLOSURE: covers NEW-FILE path existence only (test -e on extracted paths); does NOT verify edit-in-place completeness (a plan naming an EXISTING file it meant to edit passes even if the edit never landed)."

# ── token-anchored field-value extraction (Core Seed 1) ────────────────────────────────────────
# Finds the field marker at line-start or right after a "|" separator (both real header shapes seen
# live: 00392 puts Planning Status on its own line; 00420-PART02 puts it mid-line after "| "), grabs
# the value up to the next "|" or "(", then cuts to the LEADING token at the first em-dash/hyphen/
# whitespace, and strips stray "*" (bold markers wrapping the value itself).
# MOVED to dna/checks/lib/plan-gate.sh (CISEM-ARCH-00420-PART08 Deliverable 3, A8 — one definition);
# sourced above. This fallback re-declaration fires ONLY if the lib was somehow absent (never masks
# a source failure with silent breakage — the check still works standalone if the lib disappears).
if ! command -v extract_token >/dev/null 2>&1; then
extract_token() {
  local f="$1" label="$2" raw token
  raw=$(grep -oiE "(^|[|])[[:space:]]*\*{0,2}${label}:\*{0,2}[[:space:]]*[^|(]*" "$f" 2>/dev/null | head -1)
  raw=$(printf '%s' "$raw" | sed -E "s/.*${label}:\*{0,2}[[:space:]]*//I")
  raw=$(printf '%s' "$raw" | tr -d '\r' | sed -E 's/\*+//g')
  token=$(printf '%s' "$raw" | sed -E 's/—.*//' | sed -E 's/-.*//' | awk '{print toupper($1)}')
  printf '%s' "$token"
}
fi

# ── deliverable path extraction (Step 4) ────────────────────────────────────────────────────────
# NOTE (RI-0031 recurrence fix 2026-07-27): `json` MUST precede/accompany `js` in the alternation —
# without it, POSIX ERE matched `.js` INSIDE `.json`, truncating every `.claude/settings.json`
# deliverable to a phantom `.claude/settings.js` that never exists → 4 FALSE FLAGs (PART08/00422/00428
# + PART01). POSIX leftmost-LONGEST now picks `json` over `js` on a real `.json` path. Verified in isolation.
path_re='(dna|frontend|\.claude|\.git/hooks)/[A-Za-z0-9_./-]*\.(md|sh|yaml|yml|json|js|html)'

section_block() {
  local f="$1" heading_re="$2"
  awk -v h="$heading_re" 'BEGIN{IGNORECASE=1} $0 ~ h {f=1;next} f && /^## /{exit} f{print}' "$f" 2>/dev/null
}

found_build=0
flagged_count=0

for f in $(find "$scan_dir" -name '*.md' 2>/dev/null | sort); do
  [ -f "$f" ] || continue

  status_tok=$(extract_token "$f" "Status")
  planning_tok=$(extract_token "$f" "Planning Status")

  selected=0
  { [ "$status_tok" = "COMPLETE" ] || [ "$status_tok" = "RATIFIED" ]; } && selected=1
  { [ "$planning_tok" = "COMPLETE" ] || [ "$planning_tok" = "RATIFIED" ]; } && selected=1
  [ "$selected" -eq 0 ] && continue

  align_block=$(section_block "$f" "^## +per-file alignment table")
  doeschange_block=$(section_block "$f" "^## +what does change")
  rule_block=$(section_block "$f" "^## +the rule")
  notchange_block=$(section_block "$f" "^## +what does not change")

  candidates=$( { printf '%s\n' "$align_block" | grep -oE "$path_re"; \
                  printf '%s\n' "$doeschange_block" | grep -oE "$path_re"; \
                  printf '%s\n' "$rule_block" | grep -oE "$path_re"; } 2>/dev/null | sort -u )
  excludes=$(printf '%s\n' "$notchange_block" | grep -oE "$path_re" 2>/dev/null | sort -u)

  deliverables=$(comm -23 <(printf '%s\n' "$candidates" | sort -u) <(printf '%s\n' "$excludes" | sort -u) 2>/dev/null)
  [ -z "$deliverables" ] && continue

  for path in $deliverables; do
    [ -z "$path" ] && continue
    # placeholder patterns (e.g. CISEM-ARCH-NNNNN-....md) are template shapes, not real deliverables
    # — a plan that itself CREATES other plans names a PATTERN, never a checkable file (RI-0031).
    case "$path" in *NNNNN*|*'...'*) continue;; esac
    if [ -e "$path" ]; then
      continue
    fi
    rows=$(grep -F -- "$path" "$f" 2>/dev/null)
    marked=0
    while IFS= read -r marker; do
      [ -z "$marker" ] && continue
      if printf '%s' "$rows" | grep -qiF -- "$marker"; then marked=1; break; fi
    done <<< "$UNBUILT_MARKERS"
    if [ "$marked" -eq 1 ]; then
      continue
    fi
    echo "   FLAG: $f -> $path (absent, no unbuilt-marker on its own row; Status-token='$status_tok' Planning-Status-token='$planning_tok')"
    found_build=1
    flagged_count=$((flagged_count + 1))
  done
done

[ "$found_build" = 0 ] && echo "   (none — every COMPLETE/RATIFIED plan's named new-file deliverables exist or carry a row-scoped unbuilt-marker)"
echo "   SUMMARY: $flagged_count flagged deliverable(s) across scan: $scan_dir"
exit 0
