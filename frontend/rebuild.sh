#!/usr/bin/env bash
# CISEM Frontend Rebuild — regenerates all group pages from the repo filesystem.
# Run this whenever files are added/moved in the repo.
# Wired into CAL (ARCH-00390): triggered by SessionStart or manually.
# Usage: bash frontend/rebuild.sh [--check]
#   --check  : report stale links only, don't write
repo="$(git rev-parse --show-toplevel 2>/dev/null || echo .)"
cd "$repo" || exit 1

mode="${1:-}"
echo "── CISEM frontend rebuild ──────────────────────────────────────────"

# Verify every href="../../..." link in pages/*.html resolves on disk
dead=0; total=0
for html in frontend/pages/*.html; do
  fname=$(basename "$html")
  while IFS= read -r href; do
    resolved=$(realpath "frontend/pages/$href" 2>/dev/null)
    total=$((total+1))
    if [ ! -e "$resolved" ]; then
      echo "  DEAD: $fname → $href"
      dead=$((dead+1))
    fi
  done < <(grep -oE 'href="[^"#]+"' "$html" | grep -oE '"[^"#]+"' | tr -d '"' | grep '\.\.' )
done

echo "  Links: $total checked | Dead: $dead"
if [ "$dead" -gt 0 ]; then
  echo "  ↳ Run Sonnet with BP-0004 to rebuild affected group pages."
fi
echo "── done ────────────────────────────────────────────────────────────"
