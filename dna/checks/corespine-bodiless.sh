#!/usr/bin/env bash
# authorizing_plan: CISEM-ARCH-00423 (RATIFIED 2026-07-25 — Threshold-audit remediation, D1)
# [CORESPINE-BODILESS] — D1 (CISEM-ARCH-00423, anchor deliverable; Core Seed 1: ships WARN-only and
# stands ALONE, never gated on D2 landing first — the root-fix IS this self-audit mechanism surfacing
# the gap mechanically, before its bodies are ever written).
# Scans dna/corespines/corespine-registry.yaml for any top-level corespine entry with `status: RATIFIED`
# whose `content_location:` block has NO `canonical_file:` key (only `distributed_in:` pointers, or
# nothing) — a RATIFIED corespine with no canonical content-home. Models plan-audit.sh's [I16]/[I24]
# field-presence pattern (grep the FIELD, not a bare substring — RI-0012-safe, value-anchored).
# WARN-only, NOT in the ZF formula (same posture as [AGENT-PASS]/[DEFER-SCAN] siblings).
repo="$(git rev-parse --show-toplevel 2>/dev/null || echo .)"; cd "$repo" 2>/dev/null || exit 0
reg="dna/corespines/corespine-registry.yaml"
echo "[CORESPINE-BODILESS] RATIFIED corespines with no canonical_file (registry self-audit; WARN-only):"

if [ ! -f "$reg" ]; then
  echo "   (registry not found: $reg)"
  exit 0
fi

findings="$(awk '
  BEGIN { name=""; status=""; has_canonical=0 }
  function flush() {
    if (name != "" && status == "RATIFIED" && has_canonical == 0) {
      print "   BODILESS: " name " (status: RATIFIED, content_location has no canonical_file:)"
    }
  }
  # top-level corespine key: zero leading whitespace, ends the line with a colon
  /^[A-Za-z][A-Za-z0-9_-]*:[[:space:]]*$/ {
    flush()
    name = $0
    sub(/:[[:space:]]*$/, "", name)
    status = ""; has_canonical = 0
    next
  }
  # value-anchored status field (RI-0012-safe: matches the field VALUE right after the marker, not a
  # bare "RATIFIED" substring anywhere on the line)
  /^[[:space:]]+status:[[:space:]]*RATIFIED([[:space:]]|#|$)/ {
    if (status == "") status = "RATIFIED"
    next
  }
  /^[[:space:]]+canonical_file:/ {
    has_canonical = 1
    next
  }
  END { flush() }
' "$reg")"

if [ -n "$findings" ]; then
  echo "$findings"
else
  echo "   (none — every RATIFIED corespine has a canonical_file)"
fi
exit 0
