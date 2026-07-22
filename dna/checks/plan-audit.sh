#!/usr/bin/env bash
# CISEM Recurring Quality Cycle — WARN-ONLY plan-audit
# Governed by CISEM-ARCH-00320 §6 (Trigger) + §4 (invariants).
# Wires: I1 (dangling refs), I3 (uncommitted truth-fields), I6 (closure-verb commits),
#        I9 (unregistered IDs), I16 (status contradictions), I23 (activation / EXISTS≠ACTIVE),
#        I24 (premature promotion), P3 (Governor-decision TTL), P5 (independent verifier),
#        I6-SIZE (size gate — plans/protocols >200 lines without exception).
# PHASE-0 (ARCH-00392): three-state I19/I23/I24 + [EDGE] channel (UNKNOWN/penumbra).
#        Registry: dna/checks/invariant-registry.yaml (legal_kind/applies_to/core[]/penumbra[]).
# PHASE-1 (ARCH-00392): [SEED] check (APPLIES_TO missing → WARN, not ZF); concept-edge routing via
#        dna/checks/concept-envelope-registry.yaml (5 governance terms with penumbra[] → [EDGE] UNKNOWN).
# WARN-ONLY by design: reports findings, NEVER blocks a commit (always exit 0).
# Promote to BLOCK-mode only per ARCH-00270 after ARCH-00320 is RATIFIED.
#
# Refinement log (RQC learning):
#   v2 (run 4, 2026-07-16): I1 now skips refs tagged example-only/NOT-YET-A-NODE/
#   SIMULATION; I3 matches field-form (Status:/status:/last_verified:) not the bare
#   word RATIFIED — kills two false-positive classes surfaced by v1's first run.
#   v4 (2026-07-18): P3 (Governor-decision TTL — decisions_pending must carry
#   owner+created_date+ttl_days) + P5 (independent verifier per ARCH-00190 §3);
#   ZF aggregation updated to include P3+P5. Grounds: session-learning-index P3/P5.
#   v5 (2026-07-18): I6-SIZE (size gate §3.6 — plans+protocols >200 lines without declared exception).
#   Grounds: Haiku audit finding (9 files exceeded without exemptions documented).
#   v6 (2026-07-18): ARCH-00392 Phase-0 three-state output (PASS/FAIL/UNKNOWN) for I19/I23/I24.
#   UNKNOWN → [EDGE] channel beside [ZF]. Scope envelopes in dna/checks/invariant-registry.yaml.
#   v7 (2026-07-18): ARCH-00392 Phase-1 — [SEED] check (APPLIES_TO missing on [[CORE-SEED]],
#   WARN-only, not ZF); concept-edge routing reads dna/checks/concept-envelope-registry.yaml by
#   path and routes small-patch commits (≤5 lines, 0 new files) to [EDGE] UNKNOWN per
#   'creation_event' penumbra (A8 — registry path referenced, content not copied).
#   v8 (2026-07-19, ARCH-00396 Phase D): I19-P2 tightened — "nothing found"/"no existing" REMOVED
#   as standalone-sufficient in the I19-EDGE core-evidence pattern; a bare "nothing found" (no
#   named registry/grep/archive source) now routes to [EDGE] UNKNOWN instead of silently passing.
#   v9 (2026-07-20, Governor-approved): [DOD] check added — Definition-of-Done spot-checks (SSOT:
#   dna/checks/definition-of-done.md). WARN-only, printed before [ZF], NOT part of the ZF formula.
#   v10 (2026-07-20, ARCH-00402, Governor-approved): [ROUTING]/[ALIGN]/[TAG-STATUS] added — machine-check the
#   3 ARCH-00401 gate requirements (Tier-Routing Declaration / Per-File Alignment Table / per-node tags+statuses)
#   on plans CHANGED in the commit (staged+unstaged+untracked, matching [DOD]'s changed-file scope — the requirement
#   is forward-looking, so the pre-00401 backlog is not retro-flagged). WARN-only, before [ZF], NOT in the ZF formula
#   (BLOCK is ARCH-00270's track). Closes ARCH-00401 Trial-Obs 6. Deviation from the ARCH-00402 spec
#   ("every dna/planning/*.md"): scoped to changed files for signal-to-noise (Opus implementer call).
#   v11 (2026-07-20, ARCH-00405 Phase 1 + Governor consistent-naming decree, Sonnet-built per ratified plan):
#   [RAW-PAIR] extended to also require depollution_source:/depollution_pass: on RAW-EXTERNAL files (ARCH-00011
#   §3.5 sibling fields to source:/trust_tier:). [NAMING] added — honest-limited slice flagging the retired bare
#   'pocket-mechanism.md' filename in live (non-audit/diagnostics) files (ARCH-00011 §2.5). [POCKET] added —
#   changed dna/planning|protocols files must carry a reasoning_scope proxy for a Pocket Declaration (CLAUDE.md
#   §3.3). All three WARN-only, planted-test-verified, NOT in the ZF formula.
#   v12 (2026-07-21, ARCH-00411, Sonnet-built per Opus dispatch): [INJECTION-SCAN] added — guard #5 of the
#   skill-ingestion route; scans every RAW-EXTERNAL *-RAW.md + dna/ibd/*.md for 5 value-anchored override/
#   injection pattern classes (persona-hijack, forced-format, MCP-block-marker, truth-write-attempt, non-Latin
#   persona block). WARN-only, planted-test-verified, NOT in the ZF formula.
#   v13 (2026-07-21, TAC Stage 4 naming/numbering enforcement, Sonnet-built per Opus Core Seeds): three new
#   WARN checks wired — [NAMING-FORMAT] (CISEM-{TYPE}-{SEQ} ids must have a 5-digit SEQ, reads the new
#   dna/checks/naming-exceptions.yaml one-gate for declared exceptions), [TYPE-MATCH] (a node's Type: field
#   must STRICTLY equal its own id prefix — Sub_type carries the kind, per Governor decree 2026-07-21), and
#   [CS-NAMES] (a CS-{NAME}-{SEQ} corespine NAME must be registered in naming-registry.yaml's new CS:
#   allowlist; flags an unregistered NAME or a NAME registered twice). All three planted-test-verified,
#   NOT in the ZF formula. Also fixed [CREATION-GATE]'s V10 blind-spot (repo-root + dna/-root loose files
#   were never enumerated — see creation-gate.sh comment).
#   v14 (2026-07-21, RI-0012 substring-vs-field class, Sonnet-built per Opus dispatch ARCH-00414 Phase 3d):
#   [I1] now excludes dna/knowledge-library/ (--exclude-dir=knowledge-library, same pattern as raw-activity) —
#   knowledge-library files are external source material that legitimately QUOTE example node-like ids (e.g.
#   "CS-CRM-BILLING-001" cited as an illustrative tag in KL-0002); they are not governance references and must
#   not be flagged as dangling. Real dangling refs elsewhere are still caught (planted-tested both directions).
#   v15 (2026-07-22, ARCH-00406 Phase 0, Governor-ratified first-phase-only; Sonnet-built per Opus Core Seeds):
#   [PROPAGATE] added — when a commit touches a file that IS the registered ssot: for a concept in
#   dna/ssot-registry.yaml, prints that concept's mirrors:/regenerates: list as a reminder-surface ("did I
#   update it in the axiom AND the wizard AND the persona AND the check?"). WARN-only, NOT in the ZF formula
#   (same posture as [SEED]/[RAW-PAIR]/[ARCHIVE]/[NAMING] at introduction).
set -u
repo="$(git rev-parse --show-toplevel 2>/dev/null || echo .)"
cd "$repo" || exit 0

# Phase-0 (ARCH-00392): EDGE channel — UNKNOWN/penumbra findings from invariant-registry.yaml
edge_findings=""; found_edge=0
[ -f dna/checks/invariant-registry.yaml ] || echo "[WARN] invariant-registry.yaml missing — three-state checks cannot run"

echo "── CISEM plan-audit (WARN-ONLY, ARCH-00320 §6) ──────────────"

# I1 — referenced node IDs with no file, no registry entry, and no exemption tag
echo "[I1] dangling references (excludes example-only / off-repo-tagged):"
found_i1=0
refs=$(grep -rhoE "CISEM-[A-Z]+-[0-9]{5}|CS-[A-Z-]+-[0-9]{3}|SOL-[A-Z]+-[0-9]{3}" \
        --include="*.md" --include="*.yaml" --exclude-dir=raw-activity --exclude-dir=knowledge-library . 2>/dev/null | grep -v '.git/' | sort -u)
for id in $refs; do
  # resolved on disk or as a registry key -> fine
  if find . -name "*$id*" -not -path './.git/*' 2>/dev/null | grep -q . \
     || grep -rqlE "^${id}:|\"?${id}\"?:" --include="*.yaml" . 2>/dev/null; then
    continue
  fi
  # unresolved, but if it is tagged as intentionally-not-a-node anywhere, accept it (I1 satisfied by tag)
  reflines=$(grep -rhn "$id" --include="*.md" --include="*.yaml" . 2>/dev/null | grep -v '.git/')
  if echo "$reflines" | grep -qiE "example-only|NOT-YET-A-NODE|SIMULATION|off-repo|Drive-only|forward-ref|not-in-repo"; then
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
for f in $(find . -name "*.md" -not -path './.git/*' -not -path './dna/learning-registry/raw-activity/*' -not -path './dna/knowledge-library/*' 2>/dev/null); do
  header_status=$(head -20 "$f" | grep -iE "^\*\*Status:|^status:" | head -1 | sed -E 's/.*Status:\s*\*?\*?//i' | xargs)
  [ -z "$header_status" ] && continue

  # check if body has a DIFFERENT Status field declaration (ignore prose; skip code fences)
  body_status=$(tail -n +21 "$f" 2>/dev/null | \
    awk 'BEGIN{f=0} /^```/{f=!f;next} !f && (tolower($0)~/^\*\*status:/ || tolower($0)~/^status:/){print;exit}' | \
    sed -E 's/.*Status:\s*\*?\*?//i' | xargs)

  if [ -n "$body_status" ] && [ "$header_status" != "$body_status" ]; then
    echo "   STALE: $f (header Status: $header_status | body Status: $body_status)"; found_i16=1
  fi
done
[ "$found_i16" = 0 ] && echo "   (none)"

# I23 — activation / anti-premature-promotion (EXISTS≠ACTIVE). Grounds: DIOS Knowledge-Maturity
#       anti-patterns "validation avoidance" + "premature principle". A file that asserts an ACTIVE
#       enforcement mechanism (a hook) as working must have the mechanism on disk — UNLESS it honestly
#       marks it NOT-YET-BUILT. Honest disclosure of immaturity satisfies I23; a done-claim with no
#       mechanism is a violation (this is the ARCH-00370 failure class, made machine-checkable).
echo "[I23] activation claims without a mechanism on disk (EXISTS≠ACTIVE):"
found_i23=0
# Claude-Code SESSION-hook mechanism present? (NOTE: .git/hooks/pre-commit is a DIFFERENT, real,
# existing mechanism — a git hook — and legitimate references to it must NOT flag here.)
hooks_present=0
if [ -d .claude/hooks ] && [ -n "$(find .claude/hooks -type f 2>/dev/null)" ]; then hooks_present=1; fi
if grep -rqiE '(PreCompact|SessionStart|SessionEnd)' .claude/settings*.json 2>/dev/null; then hooks_present=1; fi
if [ "$hooks_present" = 0 ]; then
  # claim = a SESSION hook (PreCompact/SessionStart/SessionEnd) ASSERTED as active/wired/live/blocking
  for f in $(grep -rliE "(PreCompact|SessionStart|SessionEnd)" --include="*.md" . 2>/dev/null | grep -v '.git/'); do
    grep -qiE "(PreCompact|SessionStart|SessionEnd).{0,40}(BLOCKS|wired|active|live|runs|fires)|(BLOCKS|wired|active|live|fires).{0,40}(PreCompact|SessionStart|SessionEnd)" "$f" || continue
    # honest NOT-YET-BUILT / design-only disclosure satisfies I23 (disclosed immaturity ≠ premature promotion)
    grep -qiE "NOT-YET-BUILT|NOT YET BUILT|not yet wired|to be implemented|design-only|PARKED|awaiting build|enforcement NOT|do not claim|STATUS TRUTH" "$f" && continue
    echo "   PREMATURE: $f (asserts an active SESSION hook, but .claude/hooks is empty & no NOT-YET-BUILT marker)"; found_i23=1
  done
fi
[ "$found_i23" = 0 ] && echo "   (none — every activation claim has a mechanism on disk or an honest NOT-YET-BUILT marker)"
# I23 EDGE (ARCH-00392 Phase-0): penumbra — hook files exist but not registered in settings.json
if [ -d .claude/hooks ] && [ -n "$(find .claude/hooks -type f 2>/dev/null)" ]; then
  while IFS= read -r hookfile; do
    hbase=$(basename "$hookfile")
    if ! grep -rqiE "$hbase" .claude/settings*.json 2>/dev/null; then
      edge_findings="${edge_findings}   [I23-EDGE] $hookfile — EXISTS but not in settings*.json (invariant-registry I23.penumbra)\n"
      found_edge=1
    fi
  done < <(find .claude/hooks -type f 2>/dev/null)
fi

# I19 — Existing-First is MANDATORY and now MACHINE-CHECKED (Governor 2026-07-18: "check what exists"
#       must be enforced, not manual). Every plan (dna/planning/*.md) MUST state its Existing-First search
#       (registry / manifest / corespine / archive / grep / knowledge-library). A plan without it is a violation.
echo "[I19] plans missing a stated Existing-First search (§3.2b):"
found_i19=0
for f in $(find dna/planning -name "*.md" 2>/dev/null); do
  if ! grep -qiE "existing.first|EXISTS-FIRST|§?3\.2b|i searched|searched:|search order|Lineage \(I19\)|knowledge.library" "$f"; then
    echo "   MISSING: $f (no Existing-First search stated)"; found_i19=1
  fi
done
[ "$found_i19" = 0 ] && echo "   (none — every plan states its Existing-First search)"
# I19 EDGE (ARCH-00392 Phase-0): penumbra — Existing-First keyword present but no search evidence
# ARCH-00396 Phase D (I19-P2 tighten, CORE-SEED 2): "nothing found"/"no existing" is REMOVED as a
# standalone-sufficient pattern (invariant-registry.yaml I19.check_pattern). A bare "nothing found"
# with no named source (registry/grep/archive) is NOT evidence — it now falls through to [EDGE] UNKNOWN.
for f in $(find dna/planning -name "*.md" 2>/dev/null); do
  grep -qiE "existing.first|EXISTS-FIRST|§?3\.2b|i searched|searched:|search order|Lineage \(I19\)|knowledge.library" "$f" || continue
  grep -qiE "Existing-First exemption|I19 exemption|exempt from Existing-First" "$f" && continue   # ARCH-00396 Phase D: an AUTHORED §3.2b/I19 exemption clause (deliberation/open-questions or process-protocol doc proposing no new node — e.g. ARCH-00280, ARCH-00190) is a disclosed judgment, not a silent bypass — same class as the silent_on retro-plan case
  grep -qiE "ssot-registry|corespine-registry|naming-registry|knowledge.library|\bgrep\b|archive|PROMOTES|IBD-[0-9]+|lineage.*=|SUPERSEDES|§3\.2b.*done|\bsearched\b|dna/" "$f" && continue
  edge_findings="${edge_findings}   [I19-EDGE] $(basename $f) — Existing-First present but no search evidence (invariant-registry I19.penumbra)\n"
  found_edge=1
done

# I24 — premature promotion of status (DIOS anti-patterns "validation avoidance" / "premature principle").
#       A node claiming RATIFIED (DIOS Constitutional/Validated level) MUST carry validation evidence for that
#       level: a decree / ratified-by / foundational citation. Missing = premature promotion. (VOC-00003 axis.)
echo "[I24] RATIFIED status without validation evidence (premature promotion, DIOS anti-pattern):"
found_i24=0
for f in $(grep -rliE "^\*\*status:\*\*[[:space:]]*ratified|^status:[[:space:]]*ratified" --include="*.md" . 2>/dev/null | grep -v '.git/'); do
  if ! grep -qiE "decree|ratified by|ratified —|ratified by governor|foundational|by governor" "$f"; then
    echo "   PREMATURE: $f (Status RATIFIED but no decree/ratification citation — validation avoidance)"; found_i24=1
  fi
done
[ "$found_i24" = 0 ] && echo "   (none — every RATIFIED node cites its validating decree)"
# I24 EDGE (ARCH-00392 Phase-0): penumbra — RATIFIED + authorization word but no date/run reference
for f in $(grep -rliE "^\*\*status:\*\*[[:space:]]*ratified|^status:[[:space:]]*ratified" --include="*.md" . 2>/dev/null | grep -v '.git/'); do
  grep -qiE "decree|ratified by|ratified —|ratified by governor|foundational|by governor" "$f" || continue
  grep -qiE "[0-9]{4}-[0-9]{2}-[0-9]{2}|run [0-9]+|quality.ledger" "$f" && continue
  edge_findings="${edge_findings}   [I24-EDGE] $(basename $f) — RATIFIED + auth word but no date/run ref (invariant-registry I24.penumbra)\n"
  found_edge=1
done

# I6-SIZE — Size gate: plans + protocols exceeding 200 lines must declare a size exception or mini-tree split.
#           Exempt by content: AUDIT, WITNESS, SKILL, LOAD, VOCAB, GOV types are contextually exempt (long by nature).
#           Only dna/planning/ and dna/protocols/ .md files are checked (plans + named protocols must be crisp).
echo "[I6-SIZE] plans/protocols exceeding 200-line gate without documented size exception (§3.6):"
found_i6s=0
for f in $(find dna/planning dna/protocols -name "*.md" 2>/dev/null); do
  lines=$(wc -l < "$f" 2>/dev/null || echo 0)
  if [ "$lines" -gt 200 ]; then
    if grep -qiE "size.exception|mini.tree|exceeds.*200|200.line.*exception|exception.*200|size.*gate.*defer|size.*gate.*exempt" "$f"; then
      continue
    fi
    echo "   EXCEEDS: $f (${lines} lines — §3.6: split into mini-tree or declare exception)"; found_i6s=1
  fi
done
[ "$found_i6s" = 0 ] && echo "   (none — all plans/protocols under 200 lines or have declared size exceptions)"

# P3 — Governor-decision TTL (session-learning-index P3; ARCH-00360 Rule 5 escalation).
#       Every decisions_pending entry in a governance YAML must carry {owner, created_date, ttl_days}.
#       A missing-field entry is a structural violation; a past-TTL entry is a required-escalation finding.
echo "[P3] Governor-decision TTL (decisions_pending must have owner+created_date+ttl_days; past TTL = finding):"
found_p3=0
today=$(date +%Y-%m-%d 2>/dev/null)
_p3tmp=$(mktemp 2>/dev/null || echo "${TEMP:-/tmp}/cisem_p3_$$")
> "$_p3tmp"
for f in $(grep -rl "decisions_pending:" --include="*.yaml" . 2>/dev/null | grep -v '.git/'); do
  # awk: enter block on "decisions_pending:", exit on a non-list non-empty non-comment line at same/lower indent
  awk '/decisions_pending:/{in_b=1;next} in_b && /^[[:space:]]*-[[:space:]]*\{/{print} in_b && /^[[:space:]]*[a-zA-Z_][^{-]/{in_b=0}' "$f" 2>/dev/null \
  | while IFS= read -r line; do
    miss=""
    echo "$line" | grep -q "owner:"        || miss="$miss owner"
    echo "$line" | grep -q "created_date:" || miss="$miss created_date"
    echo "$line" | grep -q "ttl_days:"     || miss="$miss ttl_days"
    item=$(echo "$line" | grep -oE '"[^"]{1,60}"' | head -1 | tr -d '"')
    if [ -n "$miss" ]; then
      echo "   MISSING FIELDS: $f — '${item:-?}' lacks:$miss" >> "$_p3tmp"
    else
      c=$(echo "$line" | grep -oE 'created_date: *"[0-9-]+"' | grep -oE '[0-9]{4}-[0-9]{2}-[0-9]{2}')
      t=$(echo "$line" | grep -oE 'ttl_days: *[0-9]+' | grep -oE '[0-9]+$')
      if [ -n "$c" ] && [ -n "$t" ] && [ -n "$today" ]; then
        ts=$(date -d "$today" +%s 2>/dev/null); cs=$(date -d "$c" +%s 2>/dev/null)
        if [ -n "$ts" ] && [ -n "$cs" ]; then
          age=$(( (ts - cs) / 86400 ))
          [ "$age" -gt "$t" ] && echo "   PAST TTL: $f — '${item:-?}' (${age}d > TTL ${t}d)" >> "$_p3tmp"
        fi
      fi
    fi
  done
done
[ -s "$_p3tmp" ] && { cat "$_p3tmp"; found_p3=1; } || echo "   (none — all decisions_pending entries have required fields and are within TTL)"
rm -f "$_p3tmp"

# P5 — Independent Verifier (session-learning-index P5). Every plan in dna/planning/ must name
#       an independent verifier distinct from its implementer. Grounds: ARCH-00190 §3 (ratification path).
#       A plan cannot reach ZF without a named verifier — the verifier is the activation-proof step.
echo "[P5] plans missing an independent verifier (required per §3 ARCH-00190; must differ from implementer):"
found_p5=0
for f in $(find dna/planning -name "*.md" 2>/dev/null); do
  # Require field-label form at line start: "**Independent Verifier" or "Independent Verifier:" or YAML key
  # Prose mentions ("no Independent Verifier...") must NOT satisfy this check — only a declared field.
  if ! grep -qiE "^\*\*independent[ _-]verifier|^independent[ _-]verifier:|^[[:space:]]*independent[ _-]verifier:[[:space:]]" "$f"; then
    echo "   MISSING: $f (no independent verifier field declared)"; found_p5=1
  fi
done
[ "$found_p5" = 0 ] && echo "   (none — every plan names an independent verifier)"

# SEED — Phase-1 (ARCH-00392): warn when a [[CORE-SEED ...]] directive lacks an APPLIES_TO: clause.
#        WARN-ONLY; does NOT enter the ZF formula. Detects seeds missing scope so Opus can assign.
#        A seed spanning multiple lines: the APPLIES_TO must appear on the SAME line as ]] (closing).
echo "[SEED] [[CORE-SEED]] directives missing APPLIES_TO: (ARCH-00392 Phase-1, WARN-only):"
found_seed_missing=0
# Single-line seeds: full pattern on one line — check if ]] is present AND APPLIES_TO is absent
while IFS= read -r seedline; do
  if echo "$seedline" | grep -qE "\[\[CORE-SEED" && echo "$seedline" | grep -qE "\]\]"; then
    # single-line seed (opening [[ and closing ]] on same line)
    if ! echo "$seedline" | grep -qiE "APPLIES_TO:"; then
      srcfile=$(echo "$seedline" | cut -d: -f1)
      srcline=$(echo "$seedline" | cut -d: -f2)
      echo "   MISSING APPLIES_TO: $srcfile:$srcline"
      found_seed_missing=1
    fi
  elif echo "$seedline" | grep -qE "\[\[CORE-SEED"; then
    # multi-line seed — check the file for APPLIES_TO within 20 lines of this seed start
    srcfile=$(echo "$seedline" | cut -d: -f1)
    srclinenum=$(echo "$seedline" | cut -d: -f2)
    # Extract lines from seed start to its ]] closing
    seed_block=$(tail -n +"$srclinenum" "$srcfile" 2>/dev/null | head -20)
    if ! echo "$seed_block" | grep -qiE "APPLIES_TO:"; then
      echo "   MISSING APPLIES_TO: $srcfile:$srclinenum (multi-line seed)"
      found_seed_missing=1
    fi
  fi
done < <(grep -rn "\[\[CORE-SEED" --include="*.md" --exclude-dir=raw-activity --exclude-dir=knowledge-library . 2>/dev/null | grep -v '.git/' | grep "MUST:")
[ "$found_seed_missing" = 0 ] && echo "   (none — all [[CORE-SEED]] directives carry APPLIES_TO)"

# RAW-PAIR — Source-fidelity (ARCH-00011 §3.5, Governor decree 2026-07-19): imported external content is a
#            mandatory RAW↔PURIFIED PAIR. Every *-RAW.md tagged RAW-EXTERNAL must have a *-PURIFIED.md sibling,
#            and no *-RAW.md may contain purified content (a "PURIFIED" section header = contamination).
#            WARN-ONLY (does NOT enter ZF) — same posture as [SEED] at introduction.
echo "[RAW-PAIR] source-fidelity: RAW-EXTERNAL files need a PURIFIED sibling; RAW must stay raw (ARCH-00011 §3.5):"
found_rawpair=0
for f in $(find . -name "*-RAW.md" -not -path './.git/*' 2>/dev/null); do
  grep -qiE "RAW-EXTERNAL" "$f" || continue           # only imported/external RAW files are paired
  sibling="${f%-RAW.md}-PURIFIED.md"
  if [ ! -f "$sibling" ]; then
    echo "   MISSING PURIFIED: $f (no $(basename "$sibling") sibling — ARCH-00011 §3.5)"; found_rawpair=1
  fi
  # contamination: a section header DECLARING purified content inside the RAW file itself.
  # Exclude legitimate raw markers ("un-purified", "VERBATIM, un-purified") — only a real PURIFIED header counts.
  if grep -iE "^#{1,3}[[:space:]].*PURIFIED" "$f" | grep -qivE "un-?purif|verbatim"; then
    echo "   CONTAMINATED: $f (purified section header inside a RAW file — raw must stay raw)"; found_rawpair=1
  fi
  # intake schema (Governor decree 2026-07-19): every external input must declare source + trust_tier (ARCH-00011 §3.5)
  if ! grep -qiE "source:" "$f" || ! grep -qiE "trust_?tier:" "$f"; then
    echo "   INTAKE-META: $f (RAW-EXTERNAL missing source: and/or trust_tier: — ARCH-00011 §3.5 intake schema)"; found_rawpair=1
  fi
  # de-pollution provenance (ARCH-00405 Phase 1, Governor-accepted 2026-07-20): every external input additionally
  # declares WHICH external project/model ran Stage-1 de-pollution and WHETHER it has (ARCH-00011 §3.5 sibling fields).
  if ! grep -qiE "depollution_source:" "$f" || ! grep -qiE "depollution_pass:" "$f"; then
    echo "   DEPOLLUTION-META: $f (RAW-EXTERNAL missing depollution_source: and/or depollution_pass: — ARCH-00011 §3.5 / ARCH-00405 Phase 1)"; found_rawpair=1
  fi
done
[ "$found_rawpair" = 0 ] && echo "   (none — every RAW-EXTERNAL file has a PURIFIED sibling and no raw file is contaminated)"

# ARCHIVE — Decision-archive integrity (BP-0008 execution + Governor decree 2026-07-19: tags+statuses are
#           load-bearing). Every archive-ledger.yaml entry must carry required fields (disposition, why, tags,
#           ruled_by, date) + conditional fields (replaced_by if SUPERSEDED; reopen_conditions if
#           RULED-OUT-TEMPORARY/VAULTED-CONFLICT). Keeps the rejected/vaulted knowledge base queryable.
#           WARN-ONLY (does NOT enter ZF) — same posture as [SEED]/[RAW-PAIR] at introduction.
echo "[ARCHIVE] decision-archive integrity (BP-0008 / tags+statuses per ARCH-00011 — required fields per entry):"
found_archive=0
ledger="dna/archive/archive-ledger.yaml"
if [ -f "$ledger" ]; then
  arch_out=$(awk '
    function chk(b, id,   miss){
      miss=""
      if (b !~ /disposition:/) miss=miss " disposition"
      if (b !~ /why:/)         miss=miss " why"
      if (b !~ /tags:/)        miss=miss " tags"
      if (b !~ /ruled_by:/)    miss=miss " ruled_by"
      if (b !~ /date:/)        miss=miss " date"
      if (b ~ /disposition:[[:space:]]*SUPERSEDED/ && b !~ /replaced_by:/) miss=miss " replaced_by(SUPERSEDED)"
      if (b ~ /disposition:[[:space:]]*(RULED-OUT-TEMPORARY|VAULTED-CONFLICT)/ && b !~ /reopen_conditions:/) miss=miss " reopen_conditions(TEMP/VAULTED)"
      if (miss != "") printf "   INCOMPLETE: entry %s lacks:%s\n", id, miss
    }
    /^[[:space:]]*-[[:space:]]*id:/ {
      if (started) chk(buf, cid)
      started=1; buf=$0
      cid=$0; sub(/.*id:[[:space:]]*/,"",cid)
      next
    }
    started { buf=buf "\n" $0 }
    END { if (started) chk(buf, cid) }
  ' "$ledger")
  if [ -n "$arch_out" ]; then echo "$arch_out"; found_archive=1; fi
fi
[ "$found_archive" = 0 ] && echo "   (none — every archive entry carries disposition+why+tags+ruled_by+date and its conditional fields)"

# NAMING — Consistent-Naming spot-check (ARCH-00011 §2.5, Governor decree 2026-07-20: "one concept, one spelling
#          everywhere"). WARN-ONLY (does NOT enter ZF) — same posture as [SEED]/[RAW-PAIR]/[ARCHIVE] at introduction.
#          HONEST LIMIT (I23): this is ONE concrete slice of the general "one concept, one spelling" rule, not a
#          full multi-concept/multi-spelling detector — a general detector is NOT mechanically feasible right now
#          (it would require a canonical-name registry cross-checked against free-text prose across every file
#          type). This slice checks the ONE concept the decree names as its trigger: "AI Pocket" — flags any LIVE
#          file that still references the retired bare filename `pocket-mechanism.md` (i.e. matched WITHOUT an
#          `ai-` prefix). Exemptions (both narrow, not broad-coverage claims): (a) dna/audits/* and
#          *DIAGNOSTICS*/*DORMANCY-AUDIT* files (historical snapshots — ARCH-00011 §2.5's own stated exemption);
#          (b) a line that is itself narrating the retirement ("renamed from"/"retired"/"old `pocket-mechanism"),
#          or that cites the corrected `ai-pocket-mechanism.md` name on the SAME line (rename-documentation
#          context, not drift) — without this, the decree's own text about its rename would permanently self-flag.
echo "[NAMING] retired bare filename 'pocket-mechanism.md' (not 'ai-pocket-mechanism.md') in live files (ARCH-00011 §2.5; WARN-only, honest-limited slice):"
found_naming=0
for f in $(find . -name "*.md" -not -path './.git/*' \
             -not -path './dna/audits/*' -not -path './dna/learning-registry/raw-activity/*' \
             -not -iname "*DIAGNOSTICS*" -not -iname "*DORMANCY-AUDIT*" 2>/dev/null); do
  while IFS= read -r rawline; do
    lineno="${rawline%%:*}"; content="${rawline#*:}"
    echo "$content" | grep -qiE "renamed from|retired|old \`?pocket-mechanism" && continue
    echo "$content" | grep -qi "ai-pocket-mechanism\.md" && continue
    matches=$(echo "$content" | grep -oE "[A-Za-z0-9_-]*pocket-mechanism\.md")
    bare=$(echo "$matches" | grep -viE "^ai-pocket-mechanism\.md$")
    if [ -n "$bare" ]; then
      echo "   BARE-NAME: $f:$lineno"; found_naming=1
    fi
  done < <(grep -n "pocket-mechanism\.md" "$f" 2>/dev/null)
done
[ "$found_naming" = 0 ] && echo "   (none — no live file references the bare retired filename)"

# EDGE — Phase-0 (ARCH-00392): UNKNOWN/penumbra channel. UNKNOWN ≠ FAIL; advisory for Opus judgment.
# Phase-1 enhancement: reads dna/checks/concept-envelope-registry.yaml by path to route concept-edge
# cases to UNKNOWN instead of a false FAIL. Registry path: dna/checks/concept-envelope-registry.yaml.
echo "[EDGE] unknown/penumbra findings (invariant-registry.yaml I19/I23/I24 scope envelopes + concept-envelope-registry.yaml concept edges):"
# Phase-1 concept-edge routing: detect commits whose diff is ONLY small patches to EXISTING governed
# nodes (≤5 lines changed total, no new files) — this matches the 'creation_event' penumbra entry
# ("a one-line truth-field fix or status stamp on an EXISTING node") in concept-envelope-registry.yaml.
# Per A8: we READ the registry path; we do NOT copy its content here.
concept_registry="dna/checks/concept-envelope-registry.yaml"
if [ -f "$concept_registry" ]; then
  staged_diff=$(git diff --cached --stat 2>/dev/null)
  unstaged_diff=$(git diff --stat 2>/dev/null)
  combined_diff="$staged_diff$unstaged_diff"
  if [ -n "$combined_diff" ]; then
    # Count total lines changed and new files
    total_insertions=$(echo "$combined_diff" | grep -oE "[0-9]+ insertion" | awk '{s+=$1} END{print s+0}')
    total_deletions=$(echo "$combined_diff" | grep -oE "[0-9]+ deletion" | awk '{s+=$1} END{print s+0}')
    new_files=$(git diff --cached --name-status 2>/dev/null | grep -cE "^A")
    new_files=${new_files:-0}
    total_changed=$(( total_insertions + total_deletions ))
    # concept-envelope-registry.yaml creation_event.penumbra: "a one-line truth-field fix or status stamp"
    # → if total changed lines ≤ 5 AND no new governed files → route to UNKNOWN (not a creation event FAIL)
    if [ "${total_changed:-0}" -gt 0 ] && [ "${total_changed:-0}" -le 5 ] && [ "${new_files:-0}" -eq 0 ]; then
      edge_findings="${edge_findings}   [CONCEPT-EDGE] small patch (${total_changed} lines, 0 new files) — 'creation_event' penumbra in $concept_registry: a truth-field fix on an existing node may NOT trigger I25 (UNKNOWN, not FAIL — Opus judgment required)\n"
      found_edge=1
    fi
  fi
else
  edge_findings="${edge_findings}   [CONCEPT-EDGE-WARN] $concept_registry not found — concept-edge routing cannot run\n"
  found_edge=1
fi
if [ "$found_edge" -eq 0 ]; then
  echo "   (none — no penumbra cases this run)"
else
  printf "$edge_findings"
fi

# DOD — Definition-of-Done gate (WARN-only; SSOT: dna/checks/definition-of-done.md). Consolidates
#       the done-discipline as a standing reminder+flag (item 6 committed+PUSHED, item 2 WIRED),
#       not a hard gate (a separate planned build). Does NOT enter the ZF formula.
echo "[DOD] definition-of-done spot-checks (SSOT: dna/checks/definition-of-done.md; WARN-only, not in ZF):"
found_dod=0
# (a) UNPUSHED — DoD item 6 (committed+PUSHED / zero-laptop-dependency)
if git rev-parse --abbrev-ref --symbolic-full-name '@{u}' >/dev/null 2>&1; then
  unpushed=$(git log --oneline '@{u}..HEAD' 2>/dev/null | wc -l | tr -d ' ')
  if [ "${unpushed:-0}" -gt 0 ]; then
    echo "   [DOD] unpushed commits: ${unpushed} — DoD item 6 (committed+PUSHED) unmet"; found_dod=1
  fi
fi
# (b) UNBACKED ENFORCEMENT CLAIM — DoD item 2 (WIRED / EXISTS≠ACTIVE family)
enforce_re="hardwired|mechanically enforced|now enforced|now live|is wired|is enforced"
mech_re="dna/checks/|\.git/hooks|\.claude/hooks|plan-audit"
tag_re="NOT-YET-WIRED|PARTLY-WIRED|DECLARED|NOT YET BUILT"
for f in $(git diff --cached --name-only --diff-filter=AM -- '*.md' '*.yaml' 2>/dev/null); do
  [ -f "$f" ] || continue
  added=$(git diff --cached -- "$f" 2>/dev/null | grep -E "^\+" | grep -vE "^\+\+\+")
  echo "$added" | grep -qiE "$enforce_re" || continue
  grep -qiE "$mech_re" "$f" 2>/dev/null && continue
  grep -qiE "$tag_re" "$f" 2>/dev/null && continue
  echo "   [DOD] $f: asserts enforcement without a mechanism ref or honesty tag (DoD item 2)"; found_dod=1
done
[ "$found_dod" = 0 ] && echo "   (none — DoD items 2/6 clean this run)"

# ROUTING / ALIGN / TAG-STATUS — ARCH-00401 gate requirements, machine-checked (ARCH-00402, Governor-approved
#   2026-07-20). Scoped to plans CHANGED in this commit (staged+unstaged+untracked) — forward-looking, so the
#   pre-00401 backlog is not retro-flagged. All three WARN-only, NOT in the ZF formula (BLOCK is ARCH-00270's track).
changed_plans=$( { git diff --cached --name-only 2>/dev/null; git diff --name-only 2>/dev/null; \
                   git ls-files --others --exclude-standard 2>/dev/null; } \
                 | grep -E '^dna/planning/.*\.md$' | sort -u )

# [ROUTING] — a changed plan must declare a Tier-Routing Declaration (ARCH-00401 Enh.1)
echo "[ROUTING] changed plans missing a Tier-Routing Declaration (ARCH-00401 Enh.1; WARN-only):"
found_routing=0
for f in $changed_plans; do
  [ -f "$f" ] || continue
  grep -qiE "Tier-Routing Declaration" "$f" || { echo "   MISSING: $f (no Tier-Routing Declaration)"; found_routing=1; }
done
[ "$found_routing" = 0 ] && echo "   (none — every changed plan declares tier-routing, or no plan changed)"

# [ALIGN] — a changed plan must carry a Per-File Alignment Table (ARCH-00401 Enh.3)
echo "[ALIGN] changed plans missing a Per-File Alignment Table (ARCH-00401 Enh.3; WARN-only):"
found_align=0; align_missing=""
for f in $changed_plans; do
  [ -f "$f" ] || continue
  if ! grep -qiE "Per-File Alignment Table" "$f"; then
    echo "   MISSING: $f (no Per-File Alignment Table)"; found_align=1; align_missing="$align_missing $f "
  fi
done
[ "$found_align" = 0 ] && echo "   (none — every changed plan has an alignment table, or no plan changed)"

# [TAG-STATUS] — where the alignment table IS present, it must have a Status column with ≥1 status value
#   (ARCH-00401 Enh.2). Skipped for files [ALIGN] already flagged (don't double-count the same root gap).
echo "[TAG-STATUS] changed plans whose Per-File Alignment Table lacks a Status column/values (ARCH-00401 Enh.2; WARN-only):"
found_tagstatus=0
for f in $changed_plans; do
  [ -f "$f" ] || continue
  echo "$align_missing" | grep -qF " $f " && continue          # already flagged by [ALIGN] — skip
  grep -qiE "Per-File Alignment Table" "$f" || continue        # only files that HAVE the table
  block=$(awk '/Per-File Alignment Table/{f=1} f&&/^## /&&!/Per-File Alignment Table/{exit} f{print}' "$f")
  if ! echo "$block" | grep -qiE "Status"; then
    echo "   MISSING: $f (Per-File Alignment Table has no Status column)"; found_tagstatus=1
  elif ! echo "$block" | grep -qiE "DRAFT|PROPOSED|DECLARED|RATIFIED|PROVISIONAL|PLACEHOLDER|SCHEDULED|SPLIT|LIVE|COMPLETE|unchanged|modified|present|follow-on"; then
    echo "   MISSING: $f (Per-File Alignment Table Status column has no status values)"; found_tagstatus=1
  fi
done
[ "$found_tagstatus" = 0 ] && echo "   (none — alignment tables carry Status, or no plan changed)"

# [POCKET] — a changed dna/planning/ or dna/protocols/ file must carry a Pocket Declaration (CLAUDE.md §3.3;
#   SSOT: dna/corespines/CS-AI-BEHAVIOR-001/ai-pocket-mechanism.md). Scoped to CHANGED files (staged+unstaged+
#   untracked), same pattern as [ROUTING]/[ALIGN] — forward-looking, does NOT retro-flag the pre-existing backlog.
#   HONEST LIMIT (I23): checks for the presence of ONE proxy field (`reasoning_scope`) as evidence a Pocket
#   Declaration exists — it does NOT individually verify the other four fields (inherited_constraints/
#   output_contract/ai_cannot/recorded_at) are present or well-formed; that fuller five-field check is a follow-on.
#   WARN-only, NOT in the ZF formula (BLOCK is ARCH-00270's track).
changed_plan_proto=$( { git diff --cached --name-only 2>/dev/null; git diff --name-only 2>/dev/null; \
                   git ls-files --others --exclude-standard 2>/dev/null; } \
                 | grep -E '^dna/(planning|protocols)/.*\.md$' | sort -u )
echo "[POCKET] changed dna/planning|protocols files missing a Pocket Declaration (reasoning_scope proxy; CLAUDE.md §3.3; WARN-only):"
found_pocket=0
for f in $changed_plan_proto; do
  [ -f "$f" ] || continue
  grep -qiE "reasoning_scope" "$f" || { echo "   MISSING: $f (no reasoning_scope / Pocket Declaration)"; found_pocket=1; }
done
[ "$found_pocket" = 0 ] && echo "   (none — every changed plan/protocol carries a Pocket Declaration, or none changed)"

# [CREATION-GATE] — universal mandatory-minimum: every governed file has a tag + a status (Governor audit 2026-07-20/21, RI-0009).
# WARN-only (not in ZF); the BLOCK form is ARCH-00407 Phase 0. Closes the DECLARED≠WIRED hole where non-plan/non-CISEM-ID
# creations (skills/agents/templates/checks/registries) escaped [I9]/[I19]/[TAG-STATUS] and could be born ungoverned.
bash dna/checks/creation-gate.sh 2>/dev/null

# [DELETION-GUARD] — no collateral deletion (Governor decree 2026-07-21, RI-0010). WARN-only.
bash dna/checks/deletion-guard.sh 2>/dev/null

# [DEFER-SCAN] Principle 21 — un-parked defer-and-assume-later in changed governed files (Governor decree 2026-07-21). WARN.
bash dna/checks/defer-scan.sh 2>/dev/null

# [AGENT-PASS] Principle 21 — weekly all-agents compliance freshness gate (Governor decree 2026-07-21). WARN.
bash dna/checks/agent-pass-gate.sh 2>/dev/null

# [CHECK-LINT] — meta-guard against the substring-vs-field anti-pattern in the check files THEMSELVES
# (RI-0012 class; 2 instances 2026-07-21 — the mini-tree -index filename collision + the I24 regex that matched a
# value word ANYWHERE on a status line, so a negation like "not ratified" false-flagged a PARKED file). A status/
# type/membership regex MUST anchor on the field VALUE right after the field marker, never match the value word as
# a bare substring. This lint would have caught the I24 bug at authoring time. Comment lines are excluded (they may
# legitimately describe a bad pattern). WARN-only, NOT in ZF. Wire-don't-document (Principle 18C / Governor decree).
echo "[CHECK-LINT] status/type/membership regexes must anchor on the field VALUE, not a bare substring (RI-0012 class; WARN-only):"
found_lint=0
for cf in dna/checks/*.sh; do
  [ -f "$cf" ] || continue
  hits="$(grep -nE '(status|type|tags?):[^"]*\.\*(ratified|split|draft|parked|placeholder|complete|live|declared|proposed|scheduled|provisional)' "$cf" 2>/dev/null | grep -vE '^[0-9]+:[[:space:]]*#')"
  if [ -n "$hits" ]; then
    echo "   LOOSE-REGEX ('field:.*<value>' matches the value anywhere on the line — anchor it after the field marker): $cf"
    echo "$hits" | sed 's/^/      /'
    found_lint=1
  fi
done
[ "$found_lint" = 0 ] && echo "   (none — every status/type/membership regex anchors on the field value)"

# [RATIFY-GATE] — Principle 20 backstop (Governor decree 2026-07-21 "don't let 'proceed' harm quality"): a plan in
# dna/planning/ at Status RATIFIED MUST cite its Opus Stage-1 soundness verdict (contains "Stage-1" AND "sound").
# Surfaces a plan rushed to RATIFIED without the soundness gate visibly satisfied — the exact hole a terse approval
# opens. Keys on the Status VALUE (RI-0012: value-anchored, not a bare substring). WARN-only, NOT in ZF (BLOCK is ARCH-00270).
echo "[RATIFY-GATE] RATIFIED plans must cite an Opus Stage-1 soundness verdict (Principle 20; WARN-only):"
found_ratgate=0
for f in dna/planning/*.md; do
  [ -f "$f" ] || continue
  grep -qiE "status:\**[[:space:]]*ratified" "$f" || continue
  if ! { grep -qiE "stage.?1" "$f" && grep -qiE "sound" "$f"; }; then
    echo "   PREMATURE-RATIFY: $f (Status RATIFIED but no Opus Stage-1 soundness verdict cited — informed-ratification, Principle 20)"
    found_ratgate=1
  fi
done
[ "$found_ratgate" = 0 ] && echo "   (none — every RATIFIED plan cites its Stage-1 soundness verdict)"

# [INJECTION-SCAN] — guard #5 of the skill-ingestion route (CISEM-ARCH-00411, Sonnet-built per ratified dispatch).
# WARN-only, NOT in the ZF formula (same posture as [SEED]/[RAW-PAIR]/[ARCHIVE]/[NAMING]/[CHECK-LINT] at introduction).
bash dna/checks/injection-scanner.sh 2>/dev/null

# [NAMING-FORMAT] / [TYPE-MATCH] / [CS-NAMES] — TAC Stage 4 naming/numbering enforcement (Sonnet-built per
# Opus Core Seeds, 2026-07-21). All three WARN-only, NOT in the ZF formula (same posture as the checks above).
bash dna/checks/naming-format.sh 2>/dev/null
bash dna/checks/type-match.sh 2>/dev/null
bash dna/checks/cs-names.sh 2>/dev/null

# [PROPAGATE] — Propagation Network (ARCH-00406 Phase 0, Governor-ratified first-phase-only 2026-07-22).
# ENHANCES dna/ssot-registry.yaml (no parallel index, A8/I19): when a commit touches a file that IS the
# registered `ssot:` for a concept, print that concept's `mirrors:`/`regenerates:` list as a reminder-surface
# ("did I update it in the axiom AND the wizard AND the persona AND the check?"). WARN-ONLY reminder — does
# NOT enter the ZF formula (same posture as [SEED]/[RAW-PAIR]/[ARCHIVE]/[NAMING]/[CHECK-LINT] at introduction).
# Matching: a concept's `ssot:` value is either a literal repo-relative path (dna/foo/bar.md) or a
# "CISEM-{TYPE}-{SEQ} <section-ref>" / "CLAUDE.md §N" style reference — the leading token before the first
# space is taken as the anchor; a bare filename/path is matched directly against changed files, a node ID is
# resolved to its on-disk file via `find` (same resolution style as [I1]) before matching. `ssot: filesystem`
# (naming_id_to_file — no single ssot file) is explicitly skipped, honestly, rather than false-matched.
echo "[PROPAGATE] SSOT-touch reminder (mirrors:/regenerates: per dna/ssot-registry.yaml; WARN-only, not in ZF):"
found_propagate=0
ssot_registry="dna/ssot-registry.yaml"
changed_all=$( { git diff --cached --name-only 2>/dev/null; git diff --name-only 2>/dev/null; \
                 git ls-files --others --exclude-standard 2>/dev/null; } | sort -u )
if [ -f "$ssot_registry" ] && [ -n "$changed_all" ]; then
  while IFS= read -r cline; do
    [ -z "$cline" ] && continue
    key=$(echo "$cline" | sed -E 's/^[[:space:]]*([A-Za-z_0-9]+):.*/\1/')
    ssotval=$(echo "$cline" | grep -oE 'ssot:[[:space:]]*"[^"]*"|ssot:[[:space:]]*[^,]+' | head -1 | sed -E 's/^ssot:[[:space:]]*//' | tr -d '"')
    [ -z "$ssotval" ] && continue
    token=$(echo "$ssotval" | awk '{print $1}')
    [ "$token" = "filesystem" ] && continue
    matched=0
    case "$token" in
      */*|*.md|*.yaml)
        if echo "$changed_all" | grep -qxF "$token"; then
          matched=1
        elif echo "$changed_all" | grep -qE "(^|/)$(printf '%s' "$token" | sed 's/[.[\*^$]/\\&/g')\$"; then
          matched=1
        fi
        ;;
      CISEM-*|CS-*)
        resolved=$(find . -name "*$token*" -not -path './.git/*' 2>/dev/null | head -1)
        if [ -n "$resolved" ]; then
          resolved_rel="${resolved#./}"
          echo "$changed_all" | grep -qxF "$resolved_rel" && matched=1
        fi
        ;;
    esac
    if [ "$matched" -eq 1 ]; then
      # bracket-depth-aware extraction (quote-respecting) — a plain [^]]* regex truncates on the FIRST
      # "]" it meets, which breaks on values containing a literal bracket inside quotes (e.g. the
      # definition_of_done mirror '"plan-audit.sh [DOD] check (pointer)"' truncates at "[DOD]"'s own "]").
      mirrors=$(echo "$cline" | awk -v field="mirrors" '
        { idx = index($0, field ":"); if (idx==0) { print ""; exit }
          rest = substr($0, idx); bidx = index(rest, "["); if (bidx==0) { print ""; exit }
          s = substr(rest, bidx); depth=0; inq=0; out=""
          for (i=1;i<=length(s);i++){ c=substr(s,i,1); out=out c
            if (c=="\"") inq=!inq
            else if (!inq && c=="[") depth++
            else if (!inq && c=="]") { depth--; if (depth==0) { print field ": " out; exit } } }
        }')
      regenerates=$(echo "$cline" | awk -v field="regenerates" '
        { idx = index($0, field ":"); if (idx==0) { print ""; exit }
          rest = substr($0, idx); bidx = index(rest, "["); if (bidx==0) { print ""; exit }
          s = substr(rest, bidx); depth=0; inq=0; out=""
          for (i=1;i<=length(s);i++){ c=substr(s,i,1); out=out c
            if (c=="\"") inq=!inq
            else if (!inq && c=="[") depth++
            else if (!inq && c=="]") { depth--; if (depth==0) { print field ": " out; exit } } }
        }')
      echo "   SSOT-TOUCHED: $key (ssot: $ssotval)"
      [ -n "$mirrors" ] && echo "      $mirrors" || echo "      mirrors: []"
      [ -n "$regenerates" ] && echo "      $regenerates" || echo "      regenerates: []"
      found_propagate=1
    fi
  done < <(grep -E '^[[:space:]]+[A-Za-z_0-9]+:[[:space:]]*\{' "$ssot_registry" 2>/dev/null)
fi
[ "$found_propagate" = 0 ] && echo "   (none — no changed file is a registered SSOT this run)"

# ZF — Zero-Findings gate (aggregate, ARCH-00320 §4). NOW ACTIVATED (was text-only = EXISTS≠ACTIVE).
#      A run is ZF only when EVERY violation check is clean (each finding resolved / tag-exempt / routed).
#      MANDATORY (agents): no creation is "done" until this line shows ZF ACHIEVED. Report honestly either way.
zf_open=$(( found_i1 + found_i9 + found_i16 + found_i19 + found_i23 + found_i24 + found_p3 + found_p5 + found_i6s ))
echo "[ZF] zero-findings gate (I1+I9+I6-SIZE+I16+I19+I23+I24+P3+P5):"
if [ "$zf_open" -eq 0 ]; then
  echo "   ✅ ZF ACHIEVED — zero un-routed findings this run"
else
  echo "   ✗ NOT ZF — $zf_open check(s) have open findings above; route EACH (resolve / tag-exempt / Governor) to reach ZF"
fi

echo "── end — WARN-ONLY (except I13 seed-strip BLOCK in pre-commit). Full protocol: ARCH-00320 ──"
exit 0
