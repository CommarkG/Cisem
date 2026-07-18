#!/usr/bin/env bash
# CISEM Recurring Quality Cycle — WARN-ONLY plan-audit
# Governed by CISEM-ARCH-00320 §6 (Trigger) + §4 (invariants).
# Wires: I1 (dangling references), I3 (uncommitted truth-fields), I6 (closure-verb commits).
# WARN-ONLY by design: reports findings, NEVER blocks a commit (always exit 0).
# Promote to BLOCK-mode only per ARCH-00270 after ARCH-00320 is RATIFIED.
#
# Refinement log (RQC learning):
#   v2 (run 4, 2026-07-16): I1 now skips refs tagged example-only/NOT-YET-A-NODE/
#   SIMULATION; I3 matches field-form (Status:/status:/last_verified:) not the bare
#   word RATIFIED — kills two false-positive classes surfaced by v1's first run.
set -u
repo="$(git rev-parse --show-toplevel 2>/dev/null || echo .)"
cd "$repo" || exit 0

echo "── CISEM plan-audit (WARN-ONLY, ARCH-00320 §6) ──────────────"

# I1 — referenced node IDs with no file, no registry entry, and no exemption tag
echo "[I1] dangling references (excludes example-only / off-repo-tagged):"
found_i1=0
refs=$(grep -rhoE "CISEM-[A-Z]+-[0-9]{5}|CS-[A-Z-]+-[0-9]{3}|SOL-[A-Z]+-[0-9]{3}" \
        --include="*.md" --include="*.yaml" . 2>/dev/null | grep -v '.git/' | sort -u)
for id in $refs; do
  # resolved on disk or as a registry key -> fine
  if find . -name "*$id*" -not -path './.git/*' 2>/dev/null | grep -q . \
     || grep -rqlE "^${id}:|\"?${id}\"?:" --include="*.yaml" . 2>/dev/null; then
    continue
  fi
  # unresolved, but if it is tagged as intentionally-not-a-node anywhere, accept it (I1 satisfied by tag)
  reflines=$(grep -rhn "$id" --include="*.md" --include="*.yaml" . 2>/dev/null | grep -v '.git/')
  if echo "$reflines" | grep -qiE "example-only|NOT-YET-A-NODE|SIMULATION"; then
    continue
  fi
  echo "   UNRESOLVED: $id"; found_i1=1
done
[ "$found_i1" = 0 ] && echo "   (none — all refs resolve or are tag-exempt)"

# I9 — unregistered TYPE prefix check (CORE-SEED 1: every new ID must be registered in naming-registry.yaml)
echo "[I9] unregistered CISEM node IDs (must be in dna/naming-registry.yaml):"
found_i9=0
unregistered=$(grep -rhoE "CISEM-[A-Z]+-[0-9]{5}" --include="*.md" --include="*.yaml" . 2>/dev/null | sort -u)
for id in $unregistered; do
  # extract TYPE from CISEM-{TYPE}-{SEQ}
  type=$(echo "$id" | sed -E 's/CISEM-([A-Z]+)-[0-9]+/\1/')
  # check if this TYPE is registered in naming-registry.yaml (as "TYPE: { next_seq:")
  if ! grep -q "^${type}:[[:space:]]*{" dna/naming-registry.yaml 2>/dev/null; then
    echo "   UNREGISTERED TYPE: $id (TYPE '$type' not in dna/naming-registry.yaml)"; found_i9=1
  fi
done
[ "$found_i9" = 0 ] && echo "   (all types registered)"

# I3 — uncommitted truth-FIELD changes (field-form only, not prose mentions)
echo "[I3] uncommitted truth-field additions (Status:/last_verified: field lines):"
tf=$( { git diff --cached --unified=0 -- ':(exclude)dna/checks/' ':(exclude)dna/quality-ledger.yaml' 2>/dev/null; \
        git diff --unified=0 -- ':(exclude)dna/checks/' ':(exclude)dna/quality-ledger.yaml' 2>/dev/null; } \
      | grep -E "^\+" | grep -vE "^\+\+\+" \
      | grep -iE "(\*\*status:|^\+status:|^\+ *status:|last_verified:)" | sort -u )
[ -n "$tf" ] && echo "$tf" | sed 's/^/   /' || echo "   (none)"

# I6 — recent closure-verb commits (each SHOULD carry a verification / last_verified)
echo "[I6] recent closure-verb commits (verify each has a real check behind it):"
cv=$(git log --oneline -10 2>/dev/null | grep -iE "clos|resolv|complet| fix")
[ -n "$cv" ] && echo "$cv" | sed 's/^/   /' || echo "   (none in last 10)"

# I16 — stale / self-contradicting status (FIELD-vs-FIELD: header Status vs body Status, not prose)
echo "[I16] status contradictions (header Status FIELD vs body Status FIELD):"
found_i16=0
for f in $(find . -name "*.md" -not -path './.git/*' 2>/dev/null); do
  header_status=$(head -20 "$f" | grep -iE "^\*\*Status:|^status:" | head -1 | sed -E 's/.*Status:\s*\*?\*?//i' | xargs)
  [ -z "$header_status" ] && continue

  # check if body has a DIFFERENT Status field declaration (ignore prose "ratified" mentions)
  body_status=$(tail -n +21 "$f" 2>/dev/null | grep -iE "^\*\*Status:|^status:" | head -1 | sed -E 's/.*Status:\s*\*?\*?//i' | xargs)

  if [ -n "$body_status" ] && [ "$header_status" != "$body_status" ]; then
    echo "   STALE: $f (header Status: $header_status | body Status: $body_status)"; found_i16=1
  fi
done
[ "$found_i16" = 0 ] && echo "   (none)"

echo "── end — WARN-ONLY (except I13 seed-strip BLOCK in pre-commit). Full protocol: ARCH-00320 ──"
exit 0
