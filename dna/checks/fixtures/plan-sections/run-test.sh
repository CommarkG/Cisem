#!/usr/bin/env bash
# Standalone re-runnable harness (CISEM-ARCH-00420-PART12 "Planted test" §): runs the REAL
# dna/checks/plan-sections.sh against ONLY the 2 synthetic fixtures in this directory (never real
# plans) and asserts BOTH directions. Executed at build, and re-run whenever plan-sections.sh or
# plan-sections-lib.sh changes — NOT fired on every unrelated commit (fixtures live outside
# `changed_plans()`'s dna/planning/ scope).
repo="$(git rev-parse --show-toplevel 2>/dev/null || echo .)"; cd "$repo" 2>/dev/null || exit 1
fixdir="dna/checks/fixtures/plan-sections"
checker="dna/checks/plan-sections.sh"

if [ ! -f "$checker" ]; then
  echo "FAIL: $checker not found"; exit 1
fi

out=$(bash "$checker" "$fixdir" 2>&1)
echo "── plan-sections.sh output against fixtures ($fixdir) ──"
echo "$out"
echo "─────────────────────────────────────────────────────"

overall=0

# Direction A: should-flag.md MUST be flagged for its 2 deliberately-omitted sections
if echo "$out" | grep -q "should-flag.md -.*'Path Rejection Declaration'" && echo "$out" | grep -q "should-flag.md -.*'Change log'"; then
  echo "PASS: should-flag.md FLAGGED for both omitted sections (Path Rejection Declaration + Change log)"
else
  echo "FAIL: should-flag.md was NOT flagged as expected"; overall=1
fi

# Direction B: should-pass.md (all 8 sections present) MUST NOT be flagged
if echo "$out" | grep -q "should-pass.md -"; then
  echo "FAIL: should-pass.md was flagged (all 8 sections present — must be clean)"; overall=1
else
  echo "PASS: should-pass.md CLEAN as expected (all mandatory sections present)"
fi

if [ "$overall" -eq 0 ]; then
  echo "RESULT: ALL ASSERTIONS PASSED (both directions)"
else
  echo "RESULT: ASSERTION FAILURE(S) ABOVE"
fi
exit $overall
