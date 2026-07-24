#!/usr/bin/env bash
# CISEM pre-commit BLOCKS (TRACKED, recoverable — zero-laptop-safe; sourced by .git/hooks/pre-commit).
# Graduated BLOCK-mode (ARCH-00270): targeted MECHANICAL PREVENTION (not WARN) for well-defined omissions —
# so a known-required field cannot be committed missing (answers "detection ≠ prevention", Governor 2026-07-19).
# Rare escape, logged: git commit --no-verify.
root="$(git rev-parse --show-toplevel)"

# BLOCK 1 — a plan under dna/planning/ MUST carry Existing-First (§3.2b) + an Independent Verifier (P5).
#           Prevents the exact omission the WARN-only audit only caught AFTER commit (2026-07-19).
planmiss=""
for f in $(git diff --cached --name-only --diff-filter=AM 2>/dev/null | grep -E '^dna/planning/.*\.md$'); do
  c=$(git show ":$f" 2>/dev/null)
  echo "$c" | grep -qiE "existing.first|EXISTS-FIRST|§?3\.2b|i searched|searched:|search order|Lineage \(I19\)|knowledge.library" \
    || planmiss="${planmiss}
   $f — missing Existing-First (§3.2b)"
  echo "$c" | grep -qiE "\*\*independent[ _-]verifier|independent[ _-]verifier:" \
    || planmiss="${planmiss}
   $f — missing Independent Verifier (P5)"
done
if [ -n "$planmiss" ]; then
  echo "── BLOCKED (plan-fields, ARCH-00270 targeted): a dna/planning/ plan is missing mandatory fields:${planmiss}"
  echo "   Add them (ARCH-00190) — or, if intentional: git commit --no-verify (then log in quality-ledger)."
  exit 1
fi

# BLOCK 2 — every new/changed AGENT or SKILL must REFERENCE the persona SSOT (Governor 2026-07-20: hardwire the
#           persona into new creations of agents + skills, so each is BORN inheriting it — prevention, not detection).
personamiss=""
for f in $(git diff --cached --name-only --diff-filter=AM 2>/dev/null | grep -E '^\.claude/(agents/[^/]+\.md|skills/.+/SKILL\.md)$'); do
  git show ":$f" 2>/dev/null | grep -q "persona-collaborator" \
    || personamiss="${personamiss}
   $f — missing persona SSOT reference"
done
if [ -n "$personamiss" ]; then
  echo "── BLOCKED (persona-inheritance): a new/changed agent or skill does not reference the persona SSOT:${personamiss}"
  echo "   Add:  **PERSONA (SSOT — load before acting):** dna/corespines/CS-AI-PROFILING-001/persona-collaborator.md"
  echo "   (reference only, never copy — I10) — or, if intentional: git commit --no-verify (log it)."
  exit 1
fi

# BLOCK 3 — NO DELETION WITHOUT HUMAN RATIFICATION (Governor decree 2026-07-21: "block your ability to delete
#           things without human ratifying it"). Collateral deletion is AI's chronic failure (Principle 18A) — now a
#           HARD BLOCK, not a WARN. Any staged file DELETION (diff-filter=D) is REFUSED unless the file's exact path
#           is listed in dna/checks/ratified-deletions.txt (the human ratification allowlist). Escape (logged): --no-verify.
delmiss=""
for f in $(git diff --cached --name-only --diff-filter=D 2>/dev/null); do
  grep -qxF "$f" "$root/dna/checks/ratified-deletions.txt" 2>/dev/null || delmiss="${delmiss}
   $f"
done
if [ -n "$delmiss" ]; then
  echo "── BLOCKED (no-delete-without-ratification, Governor decree 2026-07-21): staged deletion of file(s):${delmiss}"
  echo "   AI may NOT delete files without human ratification. If the Governor ratified this deletion, add each path"
  echo "   (one per line, exact) to dna/checks/ratified-deletions.txt and re-commit — or, if intentional: git commit --no-verify (log it)."
  exit 1
fi

# BLOCK 4 — TAG+STATUS is now a HARD BLOCK (Governor decree 2026-07-21: graduate [CREATION-GATE] WARN -> BLOCK,
#           ARCH-00407 Phase 0). A governed .md ADDED/MODIFIED in THIS commit, in the primary CREATION dirs, MUST
#           carry a tags: line AND a status: line. Forward-looking + creation-dir-scoped: the pre-existing backlog and
#           the looser parking dirs (ibd/queue/audits/learning-registry) are NOT retro-blocked (the WARN [CREATION-GATE]
#           still surfaces those). Escape (logged): --no-verify.
tsmiss=""
for f in $(git diff --cached --name-only --diff-filter=AM 2>/dev/null | grep -E '^(dna/(corespines|protocols|planning|schema|vocabulary)/|\.claude/(agents|skills)/).*\.md$'); do
  case "$f" in */README.md|*-template.md|*-index.md|*BUILD-PROMPT-template.md) continue;; esac
  case "$f" in *dna/templates/*) continue;; esac
  c=$(git show ":$f" 2>/dev/null)
  { echo "$c" | grep -qiE 'tags:' && echo "$c" | grep -qiE 'status:'; } || tsmiss="${tsmiss}
   $f"
done
if [ -n "$tsmiss" ]; then
  echo "── BLOCKED (tag+status, ARCH-00407 Phase 0, Governor decree 2026-07-21): a governed file changed in this commit lacks a tags: and/or Status: line:${tsmiss}"
  echo "   Add a tags: line AND a Status: line (§3.5b) — or, if intentional: git commit --no-verify (log it)."
  exit 1
fi

# BLOCK 5 — PLAN-AUTHORIZATION commit-time backstop (CISEM-ARCH-00420-PART08 Deliverable 2; A4/A11/I25).
#           Catches any STRICT-governed NEW file that bypassed the write-time hook (raw shell edit,
#           external editor, write-blank-then-grow) — the fail-CLOSED guarantee the write-time layer's
#           fail-open (CORE-SEED 3) relies on. Sources the shared lib — ONE definition (A8), no fork.
if [ -f "$root/dna/checks/lib/plan-gate.sh" ]; then
  # shellcheck disable=SC1090
  source "$root/dna/checks/lib/plan-gate.sh"
  added_files="$(git diff --cached --name-only --diff-filter=A 2>/dev/null)"
  gaps="$(authorization_gaps $added_files)"
  if [ -n "$gaps" ]; then
    echo "── BLOCKED (plan-authorization, A4/A11/I25, ARCH-00420-PART08): governed file(s) added without a ratified authorizing_plan citation:${gaps}"
    echo "   Add \`authorizing_plan: CISEM-ARCH-NNNNN\` naming a RATIFIED/COMPLETE plan (or run /cisem-plan) — or, if intentional: git commit --no-verify (log it)."
    exit 1
  fi
fi
exit 0
