#!/usr/bin/env bash
# CISEM TYPE-MATCH check — a node's Type: field MUST equal its own CISEM-{TYPE}-{SEQ} id prefix,
# STRICT equality (Governor decree 2026-07-21: Type==prefix; a node's KIND/role goes in a separate
# Sub_type field, never overloaded onto Type). ARCH-00011 §1: "a node's Type field MUST equal its ID
# prefix". TAC Stage 4 (naming/numbering enforcement), Sonnet-built per Opus Core Seeds, 2026-07-21.
# WARN-only; NOT part of the [ZF] formula (same posture as [SEED]/[RAW-PAIR]/[NAMING] at introduction).
# Universal-by-default (Principle 18B): scans EVERY *.md file repo-wide via find, not a sample.
# Value-anchored (RI-0012 / CORE-SEED 2): compares the ID-prefix VALUE against the Type: FIELD VALUE
# (both extracted from their field markers), never a bare substring search.
repo="$(git rev-parse --show-toplevel 2>/dev/null || echo .)"; cd "$repo" 2>/dev/null || exit 0
exceptions_file="dna/checks/naming-exceptions.yaml"

exc_paths=""
[ -f "$exceptions_file" ] && exc_paths=$(grep -E '^\s*path:' "$exceptions_file" | sed -E 's/^\s*path:\s*//; s/^"//; s/"$//')

echo "[TYPE-MATCH] node Type: field must equal its CISEM-{TYPE}-{SEQ} id prefix (ARCH-00011 §1; STRICT equality; WARN-only, not in ZF):"
found=0
for f in $(find . -name "*.md" -not -path './.git/*' 2>/dev/null); do
  # path-declared exception (e.g. frontend/ blanket)?
  skip=0
  if [ -n "$exc_paths" ]; then
    while IFS= read -r pfx; do
      [ -z "$pfx" ] && continue
      case "$f" in *"$pfx"*) skip=1; break;; esac
    done <<< "$exc_paths"
  fi
  [ "$skip" -eq 1 ] && continue

  # the node's own declared id (first Node ID / Node_ID field, within the first 20 lines)
  id=$(head -20 "$f" | grep -oiE "Node[_ ]ID:\**[[:space:]]*CISEM-[A-Z]+(-[A-Z]+)*-[0-9]+" | head -1 | grep -oE "CISEM-[A-Z]+(-[A-Z]+)*-[0-9]+")
  [ -z "$id" ] && continue
  id_type=$(echo "$id" | sed -E 's/^CISEM-//; s/-[0-9]+$//')

  # the node's declared Type: field VALUE (within the first 20 lines, field-anchored)
  type_field=$(head -20 "$f" | grep -oiE "(\*\*)?Type:(\*\*)?[[:space:]]*[A-Z][A-Z-]*" | head -1 | sed -E 's/.*Type:\**[[:space:]]*//i')
  [ -z "$type_field" ] && continue

  if [ "$id_type" != "$type_field" ]; then
    echo "   MISMATCH: $f (id prefix='$id_type', Type field='$type_field')"
    found=1
  fi
done
[ "$found" = 0 ] && echo "   (none — every node's Type: field equals its id prefix)"
exit 0
