#!/usr/bin/env bash
# Regression harness for wiring-value-report.sh (RI-0058 — both directions on the tricky members).
# Re-run when wiring-value-report.sh changes (not every commit).
repo="$(git rev-parse --show-toplevel 2>/dev/null || echo .)"; cd "$repo" 2>/dev/null || exit 1
fix="dna/checks/fixtures/wiring-value-report"
echo "── wiring-value-report.sh against fixtures ($fix) ──"
out=$(bash dna/checks/wiring-value-report.sh "$fix" 2>&1)
printf '%s\n' "$out"
echo "───────────────────────────────────────────────────"
pass=0; fail=0
assert() { # <desc> <regex>
  if printf '%s' "$out" | grep -qE "$2"; then echo "PASS: $1"; pass=$((pass+1)); else echo "FAIL: $1 (expected /$2/)"; fail=$((fail+1)); fi
}
assert "TOTAL = 3 elements"                 'TOTAL governed elements: 3'
assert "LIVE = 2, not-yet-LIVE = 1"         'LIVE=2.*not-yet-LIVE=1'
assert "REAL-VALUE = 1"                     'REAL-VALUE \(LIVE \+ value_delivered=yes\)=1'
assert "LIVE-but-no-proven-value = 1"       'LIVE-but-no-proven-value=1'
assert "runs-no-value element flagged"      'RUNS-NO-VALUE: .*should-runs-no-value.md'
assert "bottom line 1/3 (33%)"              'BOTTOM LINE: 1 / 3 .*33%'
echo "───────────────────────────────────────────────────"
if [ "$fail" -eq 0 ]; then echo "RESULT: ALL $pass ASSERTIONS PASSED (both directions)"; exit 0
else echo "RESULT: $fail FAILED / $pass passed"; exit 1; fi
