#!/usr/bin/env bash
# authorizing_plan: CISEM-ARCH-00420-PART08
# Standalone re-runnable harness (CISEM-ARCH-00420-PART08 "Planted test" §): exercises BOTH layers
# (write-time hook + commit-time authorization_gaps) in BOTH directions, against ONLY synthetic
# fixtures/paths — never a real git index, never a real strict-governed file (temp paths are created
# and removed within this script; MAJOR-4 "zero touch of the real git index").
#
# jq DISCLOSURE (honest, not glossed over): this dev machine has no real `jq` installed (verified —
# not on PATH, not found anywhere under common install roots). Per CORE-SEED 3 the shipped hook
# FAILS OPEN whenever jq is missing — which is the ACTUAL, real (non-simulated) behavior proven by
# Test D below with zero shim involved. To additionally prove the DENY/PASS *content logic* (Tests
# A/B/C) works when jq IS present, this harness uses a disclosed TEST-HARNESS-ONLY jq shim (a tiny
# node script, never shipped, never referenced by the real hook/lib) via PLAN_GATE_TEST_JQ_SHIM env
# var, PREPENDED to PATH only for the write-time subprocess calls below. If that env var is unset,
# Tests A/B/C are SKIPPED with an honest SKIP line (never faked as PASS) and only Test D runs for
# real. PREVENTION (routed): provision a real jq in this repo's dev/CI environment — until then Layer
# 1 (write-time) is a no-op here; Layer 2 (BLOCK 5 / authorization_gaps, jq-free, pure bash) is the
# operative enforcement on this machine, which is exactly why the two-layer design is fail-safe.
repo="$(git rev-parse --show-toplevel 2>/dev/null || echo .)"; cd "$repo" 2>/dev/null || exit 1
lib="dna/checks/lib/plan-gate.sh"
hook=".claude/hooks/pretooluse-plan-gate.sh"
fixdir="dna/checks/fixtures/plan-gate"

[ -f "$lib" ] || { echo "FAIL: $lib not found"; exit 1; }
[ -f "$hook" ] || { echo "FAIL: $hook not found"; exit 1; }
# shellcheck disable=SC1090
source "$lib"

overall=0
run_hook() {
  # $1 = JSON stdin ; prints exit code
  if [ -n "$PLAN_GATE_TEST_JQ_SHIM" ]; then
    printf '%s' "$1" | PATH="$PLAN_GATE_TEST_JQ_SHIM:$PATH" bash "$hook" >/tmp/pg_out.$$ 2>/tmp/pg_err.$$
  else
    printf '%s' "$1" | bash "$hook" >/tmp/pg_out.$$ 2>/tmp/pg_err.$$
  fi
  echo $?
}

echo "── Layer 1 (write-time hook) ──"
if [ -n "$PLAN_GATE_TEST_JQ_SHIM" ] && command -v node >/dev/null 2>&1; then
  echo "   (jq present via test-harness-only shim: $PLAN_GATE_TEST_JQ_SHIM — content-logic tests A/B/C run for real)"

  # Test A: write-time should-REFUSE (new dna/checks/x.sh, no citation) -> exit 2
  content_a=$(cat "$fixdir/no-citation-content.sh")
  json_a=$(node -e 'const c=require("fs").readFileSync(0,"utf8");process.stdout.write(JSON.stringify({tool_name:"Write",tool_input:{file_path:"dna/checks/__plangate_test_x__.sh",content:c}}))' <<< "$content_a")
  rc_a=$(run_hook "$json_a")
  echo "   Test A (should-REFUSE, no citation): exit=$rc_a  stderr=[$(cat /tmp/pg_err.$$ 2>/dev/null | head -1)]"
  if [ "$rc_a" = "2" ]; then echo "   PASS: A refused (exit 2)"; else echo "   FAIL: A expected exit 2, got $rc_a"; overall=1; fi

  # Test B: write-time should-PASS (cited, CISEM-ARCH-00420-PART08) -> exit 0
  content_b=$(cat "$fixdir/cited-content.sh")
  json_b=$(node -e 'const c=require("fs").readFileSync(0,"utf8");process.stdout.write(JSON.stringify({tool_name:"Write",tool_input:{file_path:"dna/checks/__plangate_test_x__.sh",content:c}}))' <<< "$content_b")
  rc_b=$(run_hook "$json_b")
  echo "   Test B (should-PASS, cited): exit=$rc_b"
  if [ "$rc_b" = "0" ]; then echo "   PASS: B passed (exit 0)"; else echo "   FAIL: B expected exit 0, got $rc_b"; overall=1; fi

  # Test C: write-time should-PASS (exempt subtree: new file UNDER dna/checks/fixtures/plan-gate/, no citation) -> exit 0
  content_c=$(cat "$fixdir/no-citation-content.sh")
  json_c=$(node -e 'const c=require("fs").readFileSync(0,"utf8");process.stdout.write(JSON.stringify({tool_name:"Write",tool_input:{file_path:"dna/checks/fixtures/plan-gate/__plangate_test_y__.md",content:c}}))' <<< "$content_c")
  rc_c=$(run_hook "$json_c")
  echo "   Test C (should-PASS, exempt fixtures subtree, no citation — BLOCKER-1 regression): exit=$rc_c"
  if [ "$rc_c" = "0" ]; then echo "   PASS: C passed (exit 0, fixtures exempt)"; else echo "   FAIL: C expected exit 0, got $rc_c"; overall=1; fi
else
  echo "   SKIP: Tests A/B/C (content-logic, DENY/PASS) — no jq and no PLAN_GATE_TEST_JQ_SHIM provided."
  echo "   HONEST: not counted as PASS. Set PLAN_GATE_TEST_JQ_SHIM=<dir containing a jq shim> to run them."
fi

# Test D: fail-OPEN on garbage/non-JSON stdin -> exit 0, no hang (MINOR-1/CP3) — REAL, no shim needed
# (this is the actual missing-jq / parse-error path exercised for real on this machine).
rc_d=$(run_hook '{{{ not json at all ]]]')
echo "   Test D (fail-OPEN, garbage stdin — proven for REAL on this jq-less machine): exit=$rc_d"
if [ "$rc_d" = "0" ]; then echo "   PASS: D failed open (exit 0)"; else echo "   FAIL: D expected exit 0, got $rc_d"; overall=1; fi

echo "── Layer 2 (commit-time backstop: authorization_gaps, synthetic paths, zero git-index touch) ──"
trap 'rm -f dna/checks/.pgtest-tmp1.sh dna/checks/.pgtest-tmp2.sh dna/checks/.pgtest-tmp3.sh' EXIT

# Test E: commit should-BLOCK — governed path, no citation
cp "$fixdir/no-citation-content.sh" dna/checks/.pgtest-tmp1.sh
gaps_e=$(authorization_gaps "dna/checks/.pgtest-tmp1.sh")
echo "   Test E (should-BLOCK, no citation): gaps=[$gaps_e]"
if [ -n "$gaps_e" ]; then echo "   PASS: E flagged (violation found)"; else echo "   FAIL: E expected a violation, got none"; overall=1; fi

# Test F: commit should-BLOCK — cites an UNRATIFIED plan (synthetic CISEM-ARCH-99001, Status: DRAFT)
cp "$fixdir/cited-unratified-content.sh" dna/checks/.pgtest-tmp2.sh
gaps_f=$(authorization_gaps "dna/checks/.pgtest-tmp2.sh")
echo "   Test F (should-BLOCK, cited plan NOT ratified): gaps=[$gaps_f]"
if [ -n "$gaps_f" ]; then echo "   PASS: F flagged (violation found)"; else echo "   FAIL: F expected a violation, got none"; overall=1; fi

# Test G: commit should-PASS (Status-fallback) — cites CISEM-ARCH-00395 (Status: RATIFIED, no "Planning Status" field) -> BLOCKER-2 regression proof
cp "$fixdir/cited-statusfallback-content.sh" dna/checks/.pgtest-tmp3.sh
gaps_g=$(authorization_gaps "dna/checks/.pgtest-tmp3.sh")
echo "   Test G (should-PASS, Status-fallback ARCH-00395 — BLOCKER-2 regression): gaps=[$gaps_g]"
if [ -z "$gaps_g" ]; then echo "   PASS: G clean (no violation — Status-fallback honored)"; else echo "   FAIL: G expected clean, got: $gaps_g"; overall=1; fi

rm -f /tmp/pg_out.$$ /tmp/pg_err.$$ 2>/dev/null
if [ "$overall" -eq 0 ]; then
  echo "RESULT: ALL RUN ASSERTIONS PASSED (SKIPs, if any, are disclosed above, not counted as pass)"
else
  echo "RESULT: ASSERTION FAILURE(S) ABOVE"
fi
exit $overall
