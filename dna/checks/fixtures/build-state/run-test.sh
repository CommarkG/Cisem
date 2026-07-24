#!/usr/bin/env bash
# Standalone re-runnable harness (CISEM-ARCH-00420-PART02 "Planted test" §): runs the REAL
# dna/checks/build-state.sh against ONLY the 3 synthetic fixtures in this directory (never real
# plans) and asserts BOTH directions. Executed at build, and re-run whenever build-state.sh changes
# (a regression guard) — NOT fired on every unrelated commit (fixtures live outside `find dna/planning`).
repo="$(git rev-parse --show-toplevel 2>/dev/null || echo .)"; cd "$repo" 2>/dev/null || exit 1
fixdir="dna/checks/fixtures/build-state"
checker="dna/checks/build-state.sh"

if [ ! -f "$checker" ]; then
  echo "FAIL: $checker not found"; exit 1
fi

out=$(bash "$checker" "$fixdir" 2>&1)
echo "── build-state.sh output against fixtures ($fixdir) ──"
echo "$out"
echo "───────────────────────────────────────────────────"

overall=0

# Direction A: should-flag.md's deliverable MUST be flagged
if echo "$out" | grep -q "should-flag.md -> dna/checks/__nonexistent_should_flag__.sh"; then
  echo "PASS: should-flag.md FLAGGED as expected (absent deliverable, no unbuilt-marker)"
else
  echo "FAIL: should-flag.md was NOT flagged (expected a FLAG line)"; overall=1
fi

# Direction B1: should-pass-present.md's deliverable (exists on disk) MUST NOT be flagged
if echo "$out" | grep -q "should-pass-present.md ->"; then
  echo "FAIL: should-pass-present.md was flagged (deliverable exists on disk — must be clean)"; overall=1
else
  echo "PASS: should-pass-present.md CLEAN as expected (deliverable present on disk)"
fi

# Direction B2: should-pass-marker.md's deliverable (absent, but row carries NOT-YET-BUILT) MUST NOT be flagged
if echo "$out" | grep -q "should-pass-marker.md ->"; then
  echo "FAIL: should-pass-marker.md was flagged (row carries NOT-YET-BUILT — must be clean)"; overall=1
else
  echo "PASS: should-pass-marker.md CLEAN as expected (row-scoped unbuilt-marker present)"
fi

if [ "$overall" -eq 0 ]; then
  echo "RESULT: ALL ASSERTIONS PASSED (both directions)"
else
  echo "RESULT: ASSERTION FAILURE(S) ABOVE"
fi
exit $overall
