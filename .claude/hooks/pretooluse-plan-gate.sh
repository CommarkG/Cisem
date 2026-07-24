#!/usr/bin/env bash
# authorizing_plan: CISEM-ARCH-00420-PART08
# PreToolUse write-time plan-authorization gate (CISEM-ARCH-00420-PART08 Deliverable 1).
# Refuses a NEW Write into a STRICT-governed dir that lacks a cited `authorizing_plan:` header
# (A4/A11/I25 — "no governed creation without a ratified plan", enforced MECHANICALLY at write-time).
# Backstopped at commit by BLOCK 5 (dna/checks/pre-commit-blocks.sh) — this layer may safely fail
# OPEN on any parse problem (CORE-SEED 3) because that backstop is fail-CLOSED.
#
# Verified contract (claude-code-guide): deny = exit 2 + message on stderr (model-visible).
# Config: .claude/settings.json PreToolUse, matcher "Write" (Edit can't create a non-existent file;
# raw-shell / write-blank-then-grow are the commit-time backstop's job, not this layer's).
repo="$(git rev-parse --show-toplevel 2>/dev/null || echo .)"
lib="$repo/dna/checks/lib/plan-gate.sh"
[ -f "$lib" ] || exit 0
# shellcheck disable=SC1090
source "$lib"

# CORE-SEED 3 — fail OPEN if jq is unavailable (a hook bug/dependency-gap must never brick all Writes).
command -v jq >/dev/null 2>&1 || exit 0

INPUT="$(cat 2>/dev/null)"
[ -z "$INPUT" ] && exit 0

tool="$(printf '%s' "$INPUT" | jq -r '.tool_name' 2>/dev/null)" || exit 0
path="$(printf '%s' "$INPUT" | jq -r '.tool_input.file_path // empty' 2>/dev/null)" || exit 0
content="$(printf '%s' "$INPUT" | jq -r '.tool_input.content // empty' 2>/dev/null)" || exit 0

[ "$tool" = "Write" ] || exit 0
[ -n "$path" ] || exit 0
[ -e "$path" ] && exit 0                 # only NEW files are gated (existing-file edits are out of scope)
is_strict_governed "$path" || exit 0     # only STRICT-governed dirs, minus EXEMPT subtrees (fixtures etc.)

if ! printf '%s' "$content" | grep -qiE 'authorizing_plan:[[:space:]]*CISEM-ARCH-[0-9]{5}'; then
  {
    echo "BLOCKED (plan-authorization, A4/A11/I25): creating a governed artifact ($path) requires a ratified plan."
    echo "Add a header field \`authorizing_plan: CISEM-ARCH-NNNNN\` naming the RATIFIED plan (Planning Status RATIFIED/COMPLETE) that authorizes this file, then retry."
    echo "No ratified plan yet? Run /cisem-plan to create one (goal->approach->plan->Opus-soundness->GI-68 dual-review->Governor ratify), then cite it here."
    echo "This creation is genuinely raw/parked, not governed? Write it under dna/ibd/ (raw-capture) instead."
  } >&2
  exit 2
fi
exit 0
