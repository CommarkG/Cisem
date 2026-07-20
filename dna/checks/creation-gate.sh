#!/usr/bin/env bash
# ── CISEM UNIVERSAL CREATION GATE (WARN) — the mandatory-minimums check that fires on EVERY
# governed creation, closing the DECLARED≠WIRED hole (Governor audit 2026-07-20/21, RI-0009).
# Before this, tag+status was enforced ONLY on plan alignment tables ([TAG-STATUS]) and IDs only
# on CISEM-{TYPE}-{SEQ} nodes ([I9]) — so skills/agents/templates/checks/registries/ad-hoc files
# could be born UNGOVERNED (8+ found in the audit). This scans the governed tree and flags any
# file missing a `tags:` line OR a `Status:` line. WARN-only now (SWIFT-safe); the BLOCK form is
# ARCH-00407 Phase 0. Vocabulary-VALIDITY (status ∈ the right enum) is a follow-on — statuses are
# context-scoped across multiple enums (node/planning/archive/root-insights), reconciliation pending.
# Usage: bash dna/checks/creation-gate.sh   (exit 0 always — WARN; findings printed for [ZF]/RQC).
repo="$(git rev-parse --show-toplevel 2>/dev/null || echo .)"; cd "$repo" 2>/dev/null || exit 0

echo "[CREATION-GATE] every governed file must carry a tag AND a status (mandatory minimum; WARN — ARCH-00407 Phase 0 is the BLOCK):"
missing=0
# Governed dirs where every .md is a governed artifact (READMEs + templates + index/manifest stubs are exempt).
# find (not git ls-files) so NEW/untracked ungoverned files — the whole point — are caught too, and
# git pathspec **/ quirks (which miss direct children) can't create false-negatives.
for f in $(find dna/corespines dna/protocols dna/planning dna/schema dna/vocabulary .claude/agents .claude/skills \
             -type f -name '*.md' 2>/dev/null | sort -u); do
  base="$(basename "$f")"
  # Exemptions (declared, not silent): READMEs, templates (own PLACEHOLDER convention), split-index stubs.
  case "$base" in README.md|*-template.md|*-index.md|BUILD-PROMPT-template.md) continue;; esac
  case "$f" in *dna/templates/*) continue;; esac
  # Presence check (mandatory minimum): a governed file must declare a tags: and a Status: SOMEWHERE
  # (frontmatter `tags:`, bold `**Status:**`, mid-line `| Status:`, or a deeper governance header all count).
  # Whole-file, case-insensitive — WARN gate, so the tiny body-prose false-positive risk is acceptable.
  has_tag="$(grep -ciE 'tags:' "$f" 2>/dev/null)"
  has_status="$(grep -ciE 'status:' "$f" 2>/dev/null)"
  if [ "${has_tag:-0}" -eq 0 ] || [ "${has_status:-0}" -eq 0 ]; then
    miss=""
    [ "${has_tag:-0}" -eq 0 ] && miss="no tag"
    [ "${has_status:-0}" -eq 0 ] && miss="${miss:+$miss + }no status"
    echo "   UNGOVERNED: $f ($miss)"
    missing=$((missing+1))
  fi
done
if [ "$missing" -eq 0 ]; then
  echo "   (none — every governed file carries a tag + a status)"
else
  echo "   -> $missing governed file(s) born without tag/status. Fix at creation, not after (Principle 17 / A5 / Governor decree)."
fi
exit 0
