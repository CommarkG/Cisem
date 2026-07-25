#!/usr/bin/env bash
# authorizing_plan: CISEM-ARCH-00420-PART13
# [GI-CONSIDERATION] — wisdom-citation check. EXTENDS [I19]/GI-10 (Existing-First, CLAUDE.md §3.2b) —
# a plan must cite ≥1 EXISTING governor-insight/root-insight id it depends on or strengthens, closing
# the disconnect between session-start wisdom-injection and per-plan authoring (Governor's Q6/Q7).
# WARN-only; NOT part of the [ZF] formula (heuristic id-citation detection, same posture as [SEED]/
# [BUILD-STATE] at introduction).
#
# DESIGN (Brain-consensus 2026-07-25, GI-68 dual-review folded):
#   - PRESENCE-NOT-COUNT: ≥1 resolving citation is CLEAN; no citation-count threshold is ever enforced
#     (Brain's anti-over-citation guard — cite one real id and pass, no bureaucratic minimum).
#   - RELEVANCE of the cited id is judged by SAMPLING inside the EXISTING periodic GI-68 dual review —
#     NO new relevance-scoring mechanism is built or planned here (Brain explicitly rejected one).
#   - DELIMITER-ANCHORED id lookup (GI-68 design-review fix — RI-0012 substring class, caught live: an
#     unanchored `grep -q "id: GI-7"` FALSE-PASSES on `id: GI-70,`/`id: GI-72,` since GI ids are 2-digit
#     and prefix-collision-prone): GI ids anchor `id: <ID>(,|}|space|$)`; RI ids anchor `^  <ID>:` (RI ids
#     are already line-start-anchored + fixed-4-digit, collision-safe by construction).
#   - [PENDING-DEPENDENCY] (verifying blocks-on: resolution) is NAMED as a coupled Phase-2 sibling here,
#     explicitly NOT built in this check (its own future goal->approach->plan->ratify cycle).
#
# USAGE: bash dna/checks/gi-consideration.sh [scan_dir]   (default: changed_plans() via git diff)
#   The optional arg lets dna/checks/fixtures/gi-consideration/run-test.sh point this SAME script at
#   ONLY the synthetic fixtures (mirrors dna/checks/build-state.sh + dna/checks/plan-sections.sh's
#   identical scan_dir override idiom), so the planted test exercises the real code path, not a copy.
repo="$(git rev-parse --show-toplevel 2>/dev/null || echo .)"; cd "$repo" 2>/dev/null || exit 0

# Reuse PART12's changed_plans() IF it has landed (A8); else an identical inline fallback — this check
# is NOT hard-blocked on PART12's build order (per the plan's stated soft dependency).
if [ -f "dna/checks/lib/plan-sections-lib.sh" ]; then
  # shellcheck disable=SC1090
  source "dna/checks/lib/plan-sections-lib.sh"
fi
if ! command -v changed_plans >/dev/null 2>&1; then
  changed_plans() {
    { git diff --cached --name-only 2>/dev/null; git diff --name-only 2>/dev/null; \
      git ls-files --others --exclude-standard 2>/dev/null; } \
    | grep -E '^dna/planning/.*\.md$' | sort -u
  }
fi

gi_registry="dna/governor-insights.yaml"
ri_registry="dna/learning-registry/root-insights.yaml"

resolve_gi() {
  local id="$1"
  [ -f "$gi_registry" ] || return 1
  grep -qE "id: ${id}(,|\}|[[:space:]]|\$)" "$gi_registry" 2>/dev/null
}
resolve_ri() {
  local id="$1"
  [ -f "$ri_registry" ] || return 1
  grep -q "^  ${id}:" "$ri_registry" 2>/dev/null
}

echo "[GI-CONSIDERATION] changed plans missing a resolving wisdom_considered: citation (extends I19/GI-10; WARN-only, not in ZF):"
echo "   [GI-CONSIDERATION] verifies CITATION-EXISTS, never RELEVANCE — relevance is spot-checked by SAMPLING inside the periodic GI-68 dual review (Brain 2026-07-25); no separate relevance mechanism exists or is planned."

override_dir="${1:-}"
if [ -n "$override_dir" ]; then
  _plan_list=$(find "$override_dir" -name '*.md' 2>/dev/null | sort)
else
  _plan_list=$(changed_plans)
fi

found_gic=0
for f in $_plan_list; do
  [ -f "$f" ] || continue
  # value-anchored field extraction (RI-0012): the wisdom_considered: FIELD marker, never a bare
  # substring scan of the file for the word "GI-"/"RI-" anywhere.
  fieldline=$(grep -iE "^\*{0,2}wisdom_considered:\*{0,2}" "$f" 2>/dev/null | head -1)
  if [ -z "$fieldline" ]; then
    echo "   MISSING: $f (no wisdom_considered: citation — extends I19/GI-10)"
    found_gic=1
    continue
  fi
  ids=$(echo "$fieldline" | grep -oE "GI-[0-9]+|RI-[0-9]{4}")
  if [ -z "$ids" ]; then
    echo "   STALE-CITATION: $f (wisdom_considered: present but no GI-NNN/RI-NNNN id token found)"
    found_gic=1
    continue
  fi
  resolved_any=0
  for id in $ids; do
    case "$id" in
      GI-*) resolve_gi "$id" && resolved_any=1 ;;
      RI-*) resolve_ri "$id" && resolved_any=1 ;;
    esac
  done
  if [ "$resolved_any" -eq 0 ]; then
    echo "   STALE-CITATION: $f (wisdom_considered ids do not resolve to any real GI/RI: $ids)"
    found_gic=1
  fi
done

if [ -z "$_plan_list" ]; then
  echo "   (no plan changed)"
elif [ "$found_gic" = 0 ]; then
  echo "   (none — every changed plan cites at least one resolving GI/RI id)"
fi

# [PENDING-DEPENDENCY] — NAMED, NOT BUILT (Phase 2, own future ratification cycle; Brain 2026-07-25):
# a future coupled check verifying a plan's blocks-on: items resolve to a real tracked plan/BP/RI id
# and surfacing that item's current status. FORWARD-ONLY (changed-plans-only), like this check + PART02/
# PART08 + BLOCK 4's precedent; explicitly NOT retroactive to the 33-plan backlog.
exit 0
