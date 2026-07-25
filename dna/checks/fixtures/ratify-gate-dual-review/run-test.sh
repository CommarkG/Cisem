#!/usr/bin/env bash
# Standalone re-runnable harness (CISEM-ARCH-00420-PART01 "Planted test" §): [RATIFY-GATE] is an INLINE
# block in dna/checks/plan-audit.sh with a hardcoded `dna/planning/*.md` scan (no scan_dir override, unlike
# build-state.sh/plan-sections.sh) — so this harness (a) sed-EXTRACTS the REAL [RATIFY-GATE] block verbatim
# from plan-audit.sh at run-time (never a hand-copied fork — always in sync with the live check), (b)
# TEMPORARILY copies the 3 synthetic fixtures into dna/planning/ (never committed — always removed by the
# trap below, even on failure), (c) runs the extracted real code against the real dna/planning/ directory,
# (d) asserts, (e) cleans up. Re-run whenever plan-audit.sh's [RATIFY-GATE] block changes.
repo="$(git rev-parse --show-toplevel 2>/dev/null || echo .)"; cd "$repo" 2>/dev/null || exit 1
fixdir="dna/checks/fixtures/ratify-gate-dual-review"
checker="dna/checks/plan-audit.sh"
plandir="dna/planning"

if [ ! -f "$checker" ]; then
  echo "FAIL: $checker not found"; exit 1
fi

tmp_copies=""
cleanup() {
  for c in $tmp_copies; do rm -f "$c"; done
}
trap cleanup EXIT

for f in "$fixdir"/zzfixture-*.md; do
  [ -f "$f" ] || continue
  dest="$plandir/$(basename "$f")"
  cp "$f" "$dest"
  tmp_copies="$tmp_copies $dest"
done

startline=$(grep -n '^# \[RATIFY-GATE\]' "$checker" | head -1 | cut -d: -f1)
endline=$(awk -v s="$startline" 'NR>s && /found_ratgate.*=.*0.*&&.*echo/{print NR; exit}' "$checker")
if [ -z "$startline" ] || [ -z "$endline" ]; then
  echo "FAIL: could not locate [RATIFY-GATE] block boundaries in $checker (startline=$startline endline=$endline)"
  exit 1
fi

snippet="$(mktemp 2>/dev/null || echo "${TEMP:-/tmp}/cisem_ratifygate_snip_$$")"
{ echo '#!/usr/bin/env bash'; echo 'set -u'; echo 'repo="$(git rev-parse --show-toplevel 2>/dev/null || echo .)"'; echo 'cd "$repo" || exit 0'; sed -n "${startline},${endline}p" "$checker"; } > "$snippet"

out=$(bash "$snippet" 2>&1)
rm -f "$snippet"

echo "── [RATIFY-GATE] output against real dna/planning/ + 3 temp-copied fixtures ──"
echo "$out"
echo "───────────────────────────────────────────────────────────────────────────"

overall=0

if echo "$out" | grep -q "PREMATURE-RATIFY: dna/planning/zzfixture-should-flag.md (RATIFIED but no GI-68 dual-review verdict cited"; then
  echo "PASS: zzfixture-should-flag.md FLAGGED as expected (no dual-review section, no exempt tag)"
else
  echo "FAIL: zzfixture-should-flag.md was NOT flagged for missing GI-68 dual-review citation"; overall=1
fi

if echo "$out" | grep -qF "zzfixture-should-pass-dual-review.md (RATIFIED but no GI-68 dual-review verdict cited"; then
  echo "FAIL: zzfixture-should-pass-dual-review.md was flagged (carries a real GI-68 Dual Review section — must be clean)"; overall=1
else
  echo "PASS: zzfixture-should-pass-dual-review.md CLEAN as expected (GI-68 Dual Review section present)"
fi

if echo "$out" | grep -qF "zzfixture-should-pass-exempt.md (RATIFIED but no GI-68 dual-review verdict cited"; then
  echo "FAIL: zzfixture-should-pass-exempt.md was flagged (carries the explicit exempt tag — must be clean)"; overall=1
else
  echo "PASS: zzfixture-should-pass-exempt.md CLEAN as expected (GI-68 exempt tag present)"
fi

if [ "$overall" -eq 0 ]; then
  echo "RESULT: ALL ASSERTIONS PASSED (temp fixtures removed by cleanup trap — dna/planning/ left clean)"
else
  echo "RESULT: ASSERTION FAILURE(S) ABOVE (temp fixtures removed by cleanup trap — dna/planning/ left clean)"
fi
exit $overall
