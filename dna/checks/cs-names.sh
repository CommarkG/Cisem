#!/usr/bin/env bash
# CISEM CS-NAMES check — every CS-{NAME}-{SEQ} corespine id on disk must have its NAME registered in
# naming-registry.yaml's CS: allowlist (one-gate, extended from ARCH-00011 §1's TYPE registry to
# corespine NAMEs). TAC Stage 4 (naming/numbering enforcement), Sonnet-built per Opus Core Seeds,
# 2026-07-21. Flags (a) an unregistered NAME, (b) a NAME registered TWICE in the allowlist itself
# (a registry-integrity collision). WARN-only; NOT part of the [ZF] formula.
# Universal-by-default (Principle 18B): enumerates EVERY CS-{NAME}-{SEQ} occurrence repo-wide via
# grep, not a curated sample.
# Value-anchored (RI-0012 / CORE-SEED 2): compares the extracted NAME value against allowlist KEYS,
# never a bare substring search.
# Exemption classes (A8 — reused verbatim from plan-audit.sh's [I1] check, not re-invented): a CS-id
# whose surrounding line is tagged example-only / NOT-YET-A-NODE / SIMULATION / off-repo / Drive-only
# / forward-ref / not-in-repo is a deliberately-fictional or external-not-CISEM id, not a real
# unregistered corespine — skip it.
repo="$(git rev-parse --show-toplevel 2>/dev/null || echo .)"; cd "$repo" 2>/dev/null || exit 0
reg="dna/naming-registry.yaml"

echo "[CS-NAMES] CS-{NAME}-{SEQ} corespine NAME must be registered in naming-registry.yaml CS: allowlist (WARN-only, not in ZF):"
found=0

cs_block=""
if [ -f "$reg" ]; then
  cs_block=$(awk '/^CS:[[:space:]]*$/{f=1;next} f&&/^[A-Za-z_]+:[[:space:]]*($|\{)/{exit} f{print}' "$reg")
fi

# --- (a) collision check: any NAME key appearing twice inside the CS: allowlist block itself ---
if [ -n "$cs_block" ]; then
  dupes=$(echo "$cs_block" | grep -oE '^[[:space:]]*[A-Z][A-Z0-9_-]*:' | sed -E 's/^[[:space:]]*//; s/:$//' | sort | uniq -d)
  if [ -n "$dupes" ]; then
    while IFS= read -r d; do
      [ -z "$d" ] && continue
      echo "   COLLISION: NAME '$d' registered twice in $reg CS: block"; found=1
    done <<< "$dupes"
  fi
fi

# --- (b) unregistered-name check: every CS-{NAME}-{SEQ} id found on disk ---
# Exclude raw-activity/knowledge-library (same --exclude-dir idiom as plan-audit.sh's [I1]/[SEED] checks, A8):
# these dirs hold transcript dumps + external source material that legitimately QUOTE test-fixture/hypothetical
# ids (e.g. CS-BAITCORE-001, CS-SECURITY-001/002, CS-EXTERNAL-001 — Haiku-verified 2026-07-24, present ONLY
# in dna/learning-registry/raw-activity/) — they are not governance references and must not be flagged.
ids=$(grep -rhoE "CS-[A-Z][A-Z-]*-[0-9]{3}" --include="*.md" --include="*.yaml" --exclude-dir=raw-activity --exclude-dir=knowledge-library . 2>/dev/null | grep -v '.git/' | sort -u)
for id in $ids; do
  name=$(echo "$id" | sed -E 's/^CS-//; s/-[0-9]{3}$//')

  reflines=$(grep -rn "$id" --include="*.md" --include="*.yaml" . 2>/dev/null | grep -v '.git/')
  if echo "$reflines" | grep -qiE "example-only|NOT-YET-A-NODE|SIMULATION|off-repo|Drive-only|forward-ref|not-in-repo"; then
    continue
  fi

  registered=0
  if [ -n "$cs_block" ] && echo "$cs_block" | grep -qE "^[[:space:]]*${name}:"; then
    registered=1
  fi
  [ "$registered" -eq 1 ] && continue

  echo "   UNREGISTERED: $id (NAME '$name' not in $reg CS: allowlist)"; found=1
done
[ "$found" = 0 ] && echo "   (none — every CS-{NAME}-{SEQ} NAME is registered or tag-exempt)"
exit 0
