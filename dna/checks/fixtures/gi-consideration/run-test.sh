#!/usr/bin/env bash
# Standalone re-runnable harness (CISEM-ARCH-00420-PART13 "Planted test" §): runs the REAL
# dna/checks/gi-consideration.sh against ONLY the 4 synthetic fixtures in this directory (never real
# plans) and asserts all directions, INCLUDING the GI-7 prefix-collision regression proof (Core Seed B).
# Executed at build, and re-run whenever gi-consideration.sh changes — NOT fired on every unrelated
# commit (fixtures live outside `changed_plans()`'s dna/planning/ scope).
repo="$(git rev-parse --show-toplevel 2>/dev/null || echo .)"; cd "$repo" 2>/dev/null || exit 1
fixdir="dna/checks/fixtures/gi-consideration"
checker="dna/checks/gi-consideration.sh"

if [ ! -f "$checker" ]; then
  echo "FAIL: $checker not found"; exit 1
fi

out=$(bash "$checker" "$fixdir" 2>&1)
echo "── gi-consideration.sh output against fixtures ($fixdir) ──"
echo "$out"
echo "───────────────────────────────────────────────────────"

overall=0

if echo "$out" | grep -q "MISSING: .*should-flag-missing.md"; then
  echo "PASS: should-flag-missing.md FLAGGED as expected (no wisdom_considered: field)"
else
  echo "FAIL: should-flag-missing.md was NOT flagged"; overall=1
fi

if echo "$out" | grep -q "STALE-CITATION: .*should-flag-fabricated.md"; then
  echo "PASS: should-flag-fabricated.md FLAGGED as expected (GI-99999 does not exist)"
else
  echo "FAIL: should-flag-fabricated.md was NOT flagged"; overall=1
fi

# Core Seed B regression proof — the fixture that a naive unanchored grep would wrongly PASS
if echo "$out" | grep -q "STALE-CITATION: .*should-flag-prefix-collision.md"; then
  echo "PASS: should-flag-prefix-collision.md FLAGGED as expected (GI-7 is a prefix of GI-70/GI-72, not a real id — delimiter-anchor works)"
else
  echo "FAIL: should-flag-prefix-collision.md was NOT flagged — REGRESSION: unanchored substring match would have false-PASSED this (RI-0012 class)"; overall=1
fi

if echo "$out" | grep -qE "(MISSING|STALE-CITATION): .*should-pass\.md"; then
  echo "FAIL: should-pass.md was flagged (GI-10 is real — must be clean)"; overall=1
else
  echo "PASS: should-pass.md CLEAN as expected (GI-10 resolves)"
fi

if [ "$overall" -eq 0 ]; then
  echo "RESULT: ALL ASSERTIONS PASSED"
else
  echo "RESULT: ASSERTION FAILURE(S) ABOVE"
fi
exit $overall
