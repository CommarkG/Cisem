#!/usr/bin/env bash
# CISEM NAMING-FORMAT check — every CISEM-{TYPE}-{SEQ} id on disk must carry a 5-digit SEQ
# (ARCH-00011 §2: "CISEM-{TYPE}-{SEQ5}-{slug}.md"), UNLESS the id/path is a declared exception in
# dna/checks/naming-exceptions.yaml. TAC Stage 4 (naming/numbering enforcement), Sonnet-built per
# Opus Core Seeds, 2026-07-21. WARN-only; NOT part of the [ZF] formula (same posture as [SEED]/
# [RAW-PAIR]/[NAMING]/[ARCHIVE] at their introduction — see plan-audit.sh header log).
# Universal-by-default (Principle 18B): enumerates EVERY CISEM-{TYPE}-{SEQ} occurrence in *.md/*.yaml
# repo-wide via grep, not a curated sample or one directory.
# Value-anchored (RI-0012 / CORE-SEED 2): flags on the ACTUAL digit-count of the SEQ value, never a
# bare substring match.
repo="$(git rev-parse --show-toplevel 2>/dev/null || echo .)"; cd "$repo" 2>/dev/null || exit 0
exceptions_file="dna/checks/naming-exceptions.yaml"

echo "[NAMING-FORMAT] CISEM-{TYPE}-{SEQ} ids must have a 5-digit SEQ (ARCH-00011 §2; WARN-only, not in ZF):"
found=0

# Collect declared exception ids + path-prefixes (both suppress) — read once.
exc_ids=""; exc_paths=""
if [ -f "$exceptions_file" ]; then
  exc_ids=$(grep -E '^\s*id:' "$exceptions_file" | sed -E 's/^\s*id:\s*//' | grep -v '^null$')
  exc_paths=$(grep -E '^\s*path:' "$exceptions_file" | sed -E 's/^\s*path:\s*//; s/^"//; s/"$//')
fi

ids=$(grep -rhoE "CISEM-[A-Z]+(-[A-Z]+)*-[0-9]+" --include="*.md" --include="*.yaml" . 2>/dev/null | grep -v '.git/' | sort -u)
for id in $ids; do
  seq=$(echo "$id" | grep -oE "[0-9]+$")
  [ "${#seq}" -eq 5 ] && continue    # compliant — nothing to flag

  # declared exception by exact id?
  exempt=0
  if [ -n "$exc_ids" ] && echo "$exc_ids" | grep -qxF "$id"; then exempt=1; fi
  # declared exception by path-prefix? (only meaningful if the id also resolves to a file under that path)
  if [ "$exempt" -eq 0 ] && [ -n "$exc_paths" ]; then
    while IFS= read -r pfx; do
      [ -z "$pfx" ] && continue
      hit=$(find . -name "*$id*" -path "*${pfx}*" -not -path './.git/*' 2>/dev/null | head -1)
      [ -n "$hit" ] && exempt=1 && break
    done <<< "$exc_paths"
  fi
  [ "$exempt" -eq 1 ] && continue

  echo "   NON-5-DIGIT SEQ: $id (SEQ='$seq', ${#seq} digits) — not in $exceptions_file"
  found=1
done
[ "$found" = 0 ] && echo "   (none — every CISEM-{TYPE}-{SEQ} id has a 5-digit SEQ, or is a declared exception)"
exit 0
