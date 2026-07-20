#!/usr/bin/env bash
# ── CISEM DELETION-GUARD (WARN) — NO COLLATERAL DAMAGE (Governor decree 2026-07-21, RI-0010).
# AI's recurring bad behavior: while fixing element A it silently DELETES element B (or a big chunk
# of unrelated content). This flags any changed file whose working-tree diff vs HEAD removes a
# SUBSTANTIAL block of lines net — so a "fix" that quietly deletes content is surfaced BEFORE commit
# and must be justified (the commit intends the deletion) or reverted. One of THREE standing
# anti-deletion preventions: (1) this diff-guard; (2) the frontend element-inventory regression in
# functional-check.mjs (a page may never lose elements); (3) REVERT-NOT-REPAIR + atomic scoped commits
# (CLAUDE.md Principle 18). WARN-only (not in ZF); pairs with §1.7 "stage specific files, never git add -A".
repo="$(git rev-parse --show-toplevel 2>/dev/null || echo .)"; cd "$repo" 2>/dev/null || exit 0
THRESHOLD="${CISEM_DELETION_THRESHOLD:-25}"   # net lines removed in one file that trips the guard

echo "[DELETION-GUARD] files with a large NET line loss vs HEAD (possible collateral deletion — verify intended; WARN):"
found=0
# numstat: added \t deleted \t file  (working tree vs HEAD, tracked files)
while IFS=$'\t' read -r add del file; do
  [ -z "$file" ] && continue
  case "$add$del" in *-*) continue;; esac   # binary files show '-'
  net=$(( del - add ))
  if [ "$net" -ge "$THRESHOLD" ]; then
    echo "   NET-LOSS: $file (-$del/+$add = net -$net lines) — confirm this deletion is INTENDED, not collateral"
    found=1
  fi
done < <(git diff HEAD --numstat 2>/dev/null)
[ "$found" = 0 ] && echo "   (none — no file shows a large unexplained net deletion)"
exit 0
