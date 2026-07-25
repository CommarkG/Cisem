#!/usr/bin/env bash
# authorizing_plan: CISEM-ARCH-00420-PART12
# [PLAN-SECTIONS] — mandatory-section completeness (RI-0032). A dropped ARCH-00401 mandatory section
# was caught TWICE this session at REVIEW time, not author time. Flags any CHANGED plan (staged+
# unstaged+untracked dna/planning/*.md) missing a mandatory section, catching the gap at author-time.
# Source of the full mandatory-section list: .claude/skills/cisem-plan/SKILL.md Step 1 (authoritative).
# WARN-only; NOT part of the [ZF] formula (heuristic heading/pattern-presence detection).
#
# SCOPE (12 of SKILL.md Step 1's items — the "## "-heading-shaped ones this PART's own Existing-First
# search named; header-line fields (Node ID/Type/Status/Planning Status/depth_level/tags/goal/governing-
# corespine/Independent-Verifier) and 4 further real "## " headings this PART did NOT name (The Rule /
# What DOES change / What does NOT change / Self-compliance) are OUT OF SCOPE here — not built, flagged
# as a follow-on observation in the build report, no scope expansion beyond what Core Seed A + the plan's
# own Existing-First section named):
#   COVERED (4 — already checked elsewhere; CROSS-REFERENCED here, never re-flagged, avoids double-noise):
#     Tier-Routing Declaration                -> [ROUTING]
#     Per-File Alignment Table                -> [ALIGN]
#     Per-File Alignment Table Status column  -> [TAG-STATUS]
#     Pocket Declaration (reasoning_scope proxy) -> [POCKET]
#   NEW (8 — checked HERE via heading_present, ANCHORED ^## match; safe since no legacy behavior to
#   preserve for these 8 — anchoring is a safe improvement here only, per Core Seed A):
#     Executive Summary
#     Existing-First
#     Anti-Scatter Ordering
#     Definition-of-Done (DoD reference)
#     Propagation Declaration
#     Dependencies
#     Path Rejection Declaration
#     Change log
#
# USAGE: bash dna/checks/plan-sections.sh [scan_dir]   (default: changed_plans() via git diff)
#   The optional arg lets dna/checks/fixtures/plan-sections/run-test.sh point this SAME script at ONLY
#   the synthetic fixtures (mirrors dna/checks/build-state.sh's identical scan_dir override idiom), so
#   the planted test exercises the real code path, not a copy.
repo="$(git rev-parse --show-toplevel 2>/dev/null || echo .)"; cd "$repo" 2>/dev/null || exit 0

if [ -f "dna/checks/lib/plan-sections-lib.sh" ]; then
  # shellcheck disable=SC1090
  source "dna/checks/lib/plan-sections-lib.sh"
fi

override_dir="${1:-}"

echo "[PLAN-SECTIONS] changed plans missing an ARCH-00401 mandatory section (RI-0032; WARN-only, not in ZF):"
echo "   SHAPE-DISCLOSURE: detects heading PRESENCE only, never content QUALITY (a present-but-empty section passes)."
echo "   CROSS-REF (already checked elsewhere, NOT re-flagged here): Tier-Routing Declaration -> [ROUTING]; Per-File Alignment Table (+Status column) -> [ALIGN]/[TAG-STATUS]; Pocket Declaration -> [POCKET]."

if [ -n "$override_dir" ]; then
  _plan_list=$(find "$override_dir" -name '*.md' 2>/dev/null | sort)
else
  _plan_list=$(changed_plans)
fi

found_sections=0
for f in $_plan_list; do
  [ -f "$f" ] || continue
  missing=""
  heading_present "$f" "executive summary"        || missing="$missing 'Executive Summary'"
  heading_present "$f" "existing-first"            || missing="$missing 'Existing-First'"
  heading_present "$f" "anti-scatter ordering"     || missing="$missing 'Anti-Scatter Ordering'"
  heading_present "$f" "definition-of-done"        || missing="$missing 'Definition-of-Done'"
  heading_present "$f" "propagation declaration"   || missing="$missing 'Propagation Declaration'"
  heading_present "$f" "dependencies"              || missing="$missing 'Dependencies'"
  heading_present "$f" "path rejection declaration" || missing="$missing 'Path Rejection Declaration'"
  heading_present "$f" "change log"                || missing="$missing 'Change log'"
  if [ -n "$missing" ]; then
    echo "   MISSING: $f -$missing"
    found_sections=1
  fi
done

if [ -z "$_plan_list" ]; then
  echo "   (no plan changed)"
elif [ "$found_sections" = 0 ]; then
  echo "   (none — every changed plan carries all 8 newly-checked sections)"
fi
exit 0
