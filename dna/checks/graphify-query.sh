#!/usr/bin/env bash
# CISEM-CHECK: graphify-query.sh
# tags: [graphify, query-integration, external-tool, quarantine, manual-tool]
# Status: LIVE
# authorizing_plan: CISEM-ARCH-00425
#
# PURPOSE (D3 of CISEM-ARCH-00425 — Graphify MAX-ISOLATION Adoption):
# A small CISEM-controlled wrapper around `graphify query` / `graphify explain`,
# reading the quarantined, gitignored graphify-out/graph.json. Per Core Seed 2
# (A12 The External Wall), the graph's output is EXTERNAL, UNTRUSTED DATA —
# every file/path it names is PATH-VALIDATED against the real filesystem
# before being reported here. Nothing from the graph is ever presented as
# authoritative CISEM state; it is a navigation HINT only, verified below.
#
# This is a MANUAL query tool. It is NOT wired into plan-audit.sh / [ZF] / any
# mechanical gate (per the ratified plan's D3 instruction — do not wire it in).
#
# USAGE:
#   dna/checks/graphify-query.sh query   "<question>"
#   dna/checks/graphify-query.sh explain "<node name>"
#   dna/checks/graphify-query.sh --self-test    (proves the REJECTED-path branch fires, no graph needed)
#
# PRECONDITION: graphify-out/graph.json must exist. Generate it with the
# CLI-only extractor (Core Seed 1 — NEVER graphify install/hook install/serve/--mcp):
#   python -m graphify extract . --code-only

set -euo pipefail

REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"
GRAPH="$REPO_ROOT/graphify-out/graph.json"

# validate_paths RAW_OUTPUT
# Extracts every file path graphify's raw text names (src=X / Source: X / --> ...X:Lnn)
# and checks each against the real filesystem. Prints VALID / REJECTED per path.
# REJECTED = does not resolve on disk = the graph is stale/wrong there; never act on it (Core Seed 2).
validate_paths() {
  local raw="$1"
  local paths
  paths="$(
    { echo "$raw" | { grep -oE 'src=[^] ]+' || true; }            | sed 's/^src=//'                        ; \
      echo "$raw" | { grep -oE 'Source:[[:space:]]+[^ ]+' || true; } | sed -E 's/Source:[[:space:]]+//'      ; \
      echo "$raw" | { grep -oE '\][[:space:]]+[A-Za-z0-9_./\\-]+:L[0-9]+' || true; } | sed -E 's/^\][[:space:]]+//; s/:L[0-9]+$//' ; \
    } | sed 's/^\.\///' | sort -u
  )"

  if [[ -z "$paths" ]]; then
    echo "(no file paths named in this output — nothing to validate)"
    return 0
  fi

  local p
  while IFS= read -r p; do
    [[ -z "$p" ]] && continue
    if [[ -f "$REPO_ROOT/$p" || -d "$REPO_ROOT/$p" ]]; then
      echo "  VALID   : $p  (resolves on disk)"
    else
      echo "  REJECTED: $p  (does NOT resolve on disk — graph is STALE or WRONG here; do not act on it)"
    fi
  done <<< "$paths"
}

if [[ "${1:-}" == "--self-test" ]]; then
  echo "=== SELF-TEST: validate_paths() against a synthetic mix of 1 real + 1 fake path ==="
  FAKE_RAW="NODE plan-audit.sh [src=dna/checks/plan-audit.sh loc=L1 community=31]
NODE nonexistent-node [src=dna/checks/this-file-does-not-exist-XYZ.sh loc=L1 community=99]"
  validate_paths "$FAKE_RAW"
  echo "=== SELF-TEST: expect exactly one VALID line + one REJECTED line above ==="
  exit 0
fi

MODE="${1:-}"
QUERY="${2:-}"

if [[ -z "$MODE" || -z "$QUERY" ]]; then
  echo "Usage: $0 <query|explain> \"<question-or-node>\"  (or: $0 --self-test)" >&2
  exit 2
fi

if [[ "$MODE" != "query" && "$MODE" != "explain" ]]; then
  echo "ERROR: mode must be 'query' or 'explain' (got: $MODE)" >&2
  exit 2
fi

if [[ ! -f "$GRAPH" ]]; then
  echo "ERROR: $GRAPH not found. Generate it first (CLI-only, Core Seed 1):" >&2
  echo "  python -m graphify extract . --code-only" >&2
  exit 1
fi

echo "=== RAW graphify $MODE output (UNTRUSTED — A12 Wall) ==="
if ! RAW_OUTPUT="$(python -m graphify "$MODE" "$QUERY" --graph "$GRAPH" 2>&1)"; then
  echo "$RAW_OUTPUT"
  echo "ERROR: graphify $MODE failed." >&2
  exit 1
fi
echo "$RAW_OUTPUT"

echo ""
echo "=== PATH-VALIDATION (Core Seed 2 — every named path checked against disk) ==="
validate_paths "$RAW_OUTPUT"

echo ""
echo "REMINDER (Core Seed 2): the graph is a navigation HINT, never authoritative CISEM state."
echo "Any REJECTED path above must not be used for any downstream action."
