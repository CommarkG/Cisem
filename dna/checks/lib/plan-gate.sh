# authorizing_plan: CISEM-ARCH-00420-PART08
# CISEM shared plan-authorization primitives (CISEM-ARCH-00420-PART08 Deliverable 0).
# Sourced (never executed directly, never forked/copied — A8) by:
#   - .claude/hooks/pretooluse-plan-gate.sh  (write-time gate, Deliverable 1)
#   - dna/checks/pre-commit-blocks.sh BLOCK 5 (commit-time backstop, Deliverable 2)
#   - dna/checks/build-state.sh              (extract_token only — refactored, Deliverable 3)
# ONE definition of every reused primitive (CP-A8 / MAJOR-1 fix) — no forks.
#
# Functions:
#   extract_token <file> <label>      — moved VERBATIM from build-state.sh (behavior identical).
#                                        Token-anchors the LEADING enum word of a field's value
#                                        (cuts at first em-dash/hyphen/whitespace). For STATUS-style
#                                        enum fields (Status, Planning Status) — NOT for extracting an
#                                        ID (a plan ID contains hyphens; use extract_citation for that).
#   is_plan_ratified <file>           — (BLOCKER-2) true iff EITHER extract_token "Status" OR
#                                        extract_token "Planning Status" is RATIFIED or COMPLETE.
#                                        Real plans carry one field OR the other (ARCH-00395 has only
#                                        Status: RATIFIED, no "Planning Status" field — verified).
#   is_strict_governed <path>         — (MAJOR-2 normalize + BLOCKER-1 fixtures-exempt) normalizes the
#                                        path FIRST (works for absolute Windows `C:\...`, absolute posix
#                                        `/c/...`, or already-relative paths — extracts the `dna/...` or
#                                        `.claude/...` suffix via marker-match rather than an exact
#                                        root-string strip, which is robust to drive-letter/case/slash
#                                        differences), THEN true iff under a STRICT dir and NOT under an
#                                        EXEMPT subtree.
#                                        STRICT: dna/corespines|protocols|checks|schema|vocabulary/,
#                                                .claude/agents|skills|hooks/
#                                        EXEMPT: */fixtures/*, dna/templates/, *-template.md, *-index.md,
#                                                README.md
#   extract_citation <file>           — pulls the `authorizing_plan: CISEM-ARCH-NNNNN[-SUFFIX...]` value
#                                        from a file's content (whole-ID match, NOT token-cut — a plan ID
#                                        has internal hyphens that extract_token would truncate).
#   find_plan_file <id>               — locates the on-disk plan file for a cited ID: dna/planning/ first
#                                        (the real home of plans), then falls back to a whole-tree find
#                                        (covers synthetic/fixture plan files used by the planted test).
#   authorization_gaps <file>...      — (MAJOR-4 testability) takes an explicit file-list (no git-index
#                                        touch — works identically for BLOCK 5's staged-file list and the
#                                        planted test's synthetic paths). For each is_strict_governed file:
#                                        flags "missing citation" (no authorizing_plan line) or "cited plan
#                                        not ratified/found". Non-governed / exempt files are silently
#                                        skipped (not violations).
#
# CLASS-COVERAGE (Principle 18B): is_strict_governed enumerates the WHOLE strict set named in the plan's
# goal (dna/corespines, dna/protocols, dna/checks, dna/schema, dna/vocabulary, .claude/agents, .claude/skills,
# .claude/hooks) — not a narrowed sample. This differs from (and knowingly widens beyond) creation-gate.sh's
# governed-set, which omits dna/checks + .claude/hooks (CP1 in the plan — a disclosed pre-existing gap in
# creation-gate.sh, routed to F-RECON, not fixed here — A8 unify-later, not silently duplicated).

extract_token() {
  local f="$1" label="$2" raw token
  raw=$(grep -oiE "(^|[|])[[:space:]]*\*{0,2}${label}:\*{0,2}[[:space:]]*[^|(]*" "$f" 2>/dev/null | head -1)
  raw=$(printf '%s' "$raw" | sed -E "s/.*${label}:\*{0,2}[[:space:]]*//I")
  raw=$(printf '%s' "$raw" | tr -d '\r' | sed -E 's/\*+//g')
  token=$(printf '%s' "$raw" | sed -E 's/—.*//' | sed -E 's/-.*//' | awk '{print toupper($1)}')
  printf '%s' "$token"
}

is_plan_ratified() {
  local f="$1" status_tok planning_tok
  [ -f "$f" ] || return 1
  status_tok=$(extract_token "$f" "Status")
  planning_tok=$(extract_token "$f" "Planning Status")
  { [ "$status_tok" = "RATIFIED" ] || [ "$status_tok" = "COMPLETE" ]; } && return 0
  { [ "$planning_tok" = "RATIFIED" ] || [ "$planning_tok" = "COMPLETE" ]; } && return 0
  return 1
}

is_strict_governed() {
  local raw="$1" p base
  [ -z "$raw" ] && return 1
  p="${raw//\\//}"                                 # backslash -> slash
  case "$p" in
    */dna/*) p="dna/${p#*/dna/}" ;;                # absolute (any drive form) -> repo-relative
    */.claude/*) p=".claude/${p#*/.claude/}" ;;
  esac
  p="${p#./}"
  base="${p##*/}"

  # EXEMPT (checked first — an exempt path is never governed, regardless of dir)
  case "$p" in
    */fixtures/*) return 1 ;;
    dna/templates/*) return 1 ;;
  esac
  case "$base" in
    *-template.md|*-index.md|README.md) return 1 ;;
  esac

  # STRICT (the whole named set — Principle 18B class-coverage)
  case "$p" in
    dna/corespines/*|dna/protocols/*|dna/checks/*|dna/schema/*|dna/vocabulary/*) return 0 ;;
    .claude/agents/*|.claude/skills/*|.claude/hooks/*) return 0 ;;
  esac
  return 1
}

extract_citation() {
  local f="$1" raw id
  raw=$(grep -oiE 'authorizing_plan:[[:space:]]*CISEM-ARCH-[0-9]{5}(-[A-Za-z0-9]+)*' "$f" 2>/dev/null | head -1)
  [ -z "$raw" ] && { printf ''; return; }
  id="${raw##*:}"
  id="$(printf '%s' "$id" | sed -E 's/^[[:space:]]+//; s/[[:space:]]+$//')"
  printf '%s' "$id"
}

find_plan_file() {
  local id="$1" f
  [ -z "$id" ] && { printf ''; return; }
  f=$(find dna/planning -maxdepth 1 -iname "${id}*.md" 2>/dev/null | head -1)
  [ -z "$f" ] && f=$(find dna -iname "${id}*.md" 2>/dev/null | head -1)
  printf '%s' "$f"
}

authorization_gaps() {
  local f citation plan_file gaps=""
  for f in "$@"; do
    [ -z "$f" ] && continue
    is_strict_governed "$f" || continue
    if [ ! -f "$f" ]; then
      gaps="${gaps}
   $f — governed path but file not found on disk (cannot verify citation)"
      continue
    fi
    citation=$(extract_citation "$f")
    if [ -z "$citation" ]; then
      gaps="${gaps}
   $f — missing authorizing_plan citation (A4/A11/I25)"
      continue
    fi
    plan_file=$(find_plan_file "$citation")
    if [ -z "$plan_file" ] || ! is_plan_ratified "$plan_file"; then
      gaps="${gaps}
   $f — cites $citation, not found as a RATIFIED/COMPLETE plan on disk"
    fi
  done
  printf '%s' "$gaps"
}
