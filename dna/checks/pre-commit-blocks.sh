#!/usr/bin/env bash
# CISEM pre-commit BLOCKS (TRACKED, recoverable — zero-laptop-safe; sourced by .git/hooks/pre-commit).
# Graduated BLOCK-mode (ARCH-00270): targeted MECHANICAL PREVENTION (not WARN) for well-defined omissions —
# so a known-required field cannot be committed missing (answers "detection ≠ prevention", Governor 2026-07-19).
# Rare escape, logged: git commit --no-verify.
root="$(git rev-parse --show-toplevel)"

# BLOCK 1 — a plan under dna/planning/ MUST carry Existing-First (§3.2b) + an Independent Verifier (P5).
#           Prevents the exact omission the WARN-only audit only caught AFTER commit (2026-07-19).
planmiss=""
for f in $(git diff --cached --name-only --diff-filter=AM 2>/dev/null | grep -E '^dna/planning/.*\.md$'); do
  c=$(git show ":$f" 2>/dev/null)
  echo "$c" | grep -qiE "existing.first|EXISTS-FIRST|§?3\.2b|i searched|searched:|search order|Lineage \(I19\)|knowledge.library" \
    || planmiss="${planmiss}
   $f — missing Existing-First (§3.2b)"
  echo "$c" | grep -qiE "\*\*independent[ _-]verifier|independent[ _-]verifier:" \
    || planmiss="${planmiss}
   $f — missing Independent Verifier (P5)"
done
if [ -n "$planmiss" ]; then
  echo "── BLOCKED (plan-fields, ARCH-00270 targeted): a dna/planning/ plan is missing mandatory fields:${planmiss}"
  echo "   Add them (ARCH-00190) — or, if intentional: git commit --no-verify (then log in quality-ledger)."
  exit 1
fi
exit 0
