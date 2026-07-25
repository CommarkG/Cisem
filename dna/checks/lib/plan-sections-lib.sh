# authorizing_plan: CISEM-ARCH-00420-PART12
# CISEM shared plan-section extraction primitives (CISEM-ARCH-00420-PART12 Deliverable 0).
# Sourced (never executed directly, never forked/copied — A8) by:
#   - dna/checks/plan-audit.sh   ([ROUTING]/[ALIGN]/[TAG-STATUS]/[POCKET], refactored to source this lib)
#   - dna/checks/plan-sections.sh (new [PLAN-SECTIONS] check)
# ONE definition of every reused primitive (A8, mirrors PART08's dna/checks/lib/plan-gate.sh precedent) — no forks.
#
# Functions:
#   changed_plans()                         — the changed (staged+unstaged+untracked) dna/planning/*.md
#                                              file list. MOVED VERBATIM from plan-audit.sh's inline
#                                              computation (behavior identical, same move-not-rewrite
#                                              pattern PART08 used for extract_token).
#   pattern_present <file> <regex>          — plain UNANCHORED `grep -qiE` anywhere in the file.
#                                              BYTE-IDENTICAL to [ROUTING]/[ALIGN]/[POCKET]'s current
#                                              inline greps (verified: those are today unanchored
#                                              substring matches) — used to refactor those checks with
#                                              ZERO behavior change (Core Seed A, GI-68 design-review fix).
#   heading_block <file> <heading_regex>    — returns the block TEXT between a matched `^## ` heading
#                                              (case-insensitive) and the next `^## ` heading (or EOF).
#                                              Reproduces [TAG-STATUS]'s existing stateful awk
#                                              block-extraction EXACTLY (GI-68 fix — neither a plain
#                                              boolean NOR an anchored-presence check can do this: TAG-STATUS
#                                              extracts a block's CONTENT, not just presence). heading_regex
#                                              is matched as `^## +<heading_regex>` (case-insensitive via
#                                              tolower(), matching the ORIGINAL inline pattern's exact
#                                              mechanism — not awk IGNORECASE — for byte-identical fidelity).
#   heading_present <file> <heading_regex>  — true iff a `^## ` heading (ANCHORED, case-insensitive) matches
#                                              heading_regex. Used ONLY for the 8 brand-new [PLAN-SECTIONS]
#                                              sections (no legacy behavior to preserve there — anchoring is
#                                              a safe improvement, NOT applied to the 4 legacy checks, which
#                                              would silently tighten their current unanchored behavior).
#
# CORE-SEED A (PART12): [TAG-STATUS] uses heading_block (block-extract then grep the block, its real
# logic), NOT a boolean; [ROUTING]/[ALIGN]/[POCKET] use pattern_present (unanchored, byte-identical);
# heading_present (anchored) is ONLY for the 8 new sections. VERIFY: before/after diff of the 4 checks'
# output is EMPTY (byte-identical) — proven in the PART12 build report, both on the (currently empty)
# changed-plans case AND on a real-corpus regression sweep of every dna/planning/*.md file.

changed_plans() {
  { git diff --cached --name-only 2>/dev/null; git diff --name-only 2>/dev/null; \
    git ls-files --others --exclude-standard 2>/dev/null; } \
  | grep -E '^dna/planning/.*\.md$' | sort -u
}

pattern_present() {
  local f="$1" re="$2"
  grep -qiE "$re" "$f" 2>/dev/null
}

heading_block() {
  local f="$1" hre="$2"
  awk -v hre="$hre" '
    BEGIN { lhre = tolower(hre) }
    tolower($0) ~ ("^## +" lhre) { f=1; next }
    f && /^## / { exit }
    f { print }
  ' "$f" 2>/dev/null
}

heading_present() {
  local f="$1" hre="$2"
  grep -qiE "^## +${hre}" "$f" 2>/dev/null
}
