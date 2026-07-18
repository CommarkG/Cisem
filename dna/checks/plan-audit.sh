#!/usr/bin/env bash
# CISEM Recurring Quality Cycle — WARN-ONLY plan-audit
# Governed by CISEM-ARCH-00320 §6 (Trigger) + §4 (invariants).
# Wires: I1 (dangling refs), I3 (uncommitted truth-fields), I6 (closure-verb commits),
#        I9 (unregistered IDs), I16 (status contradictions), I23 (activation / EXISTS≠ACTIVE),
#        I24 (premature promotion), P3 (Governor-decision TTL), P5 (independent verifier),
#        I6-SIZE (size gate — plans/protocols >200 lines without exception).
# PHASE-0 (ARCH-00392): three-state I19/I23/I24 + [EDGE] channel (UNKNOWN/penumbra).
#        Registry: dna/checks/invariant-registry.yaml (legal_kind/applies_to/core[]/penumbra[]).
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
        --include="*.md" --include="*.yaml" . 2>/dev/null | grep -v '.git/' | sort -u)
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
for f in $(find . -name "*.md" -not -path './.git/*' 2>/dev/null); do
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
for f in $(find dna/planning -name "*.md" 2>/dev/null); do
  grep -qiE "existing.first|EXISTS-FIRST|§?3\.2b|i searched|searched:|search order|Lineage \(I19\)|knowledge.library" "$f" || continue
  grep -qiE "ssot-registry|corespine-registry|naming-registry|knowledge.library|\bgrep\b|archive|PROMOTES|IBD-[0-9]+|nothing found|no existing|lineage.*=|SUPERSEDES|§3\.2b.*done|\bsearched\b|dna/" "$f" && continue
  edge_findings="${edge_findings}   [I19-EDGE] $(basename $f) — Existing-First present but no search evidence (invariant-registry I19.penumbra)\n"
  found_edge=1
done

# I24 — premature promotion of status (DIOS anti-patterns "validation avoidance" / "premature principle").
#       A node claiming RATIFIED (DIOS Constitutional/Validated level) MUST carry validation evidence for that
#       level: a decree / ratified-by / foundational citation. Missing = premature promotion. (VOC-00003 axis.)
echo "[I24] RATIFIED status without validation evidence (premature promotion, DIOS anti-pattern):"
found_i24=0
for f in $(grep -rliE "^\*\*status:.*ratified|^status:.*ratified" --include="*.md" . 2>/dev/null | grep -v '.git/'); do
  if ! grep -qiE "decree|ratified by|ratified —|ratified by governor|foundational|by governor" "$f"; then
    echo "   PREMATURE: $f (Status RATIFIED but no decree/ratification citation — validation avoidance)"; found_i24=1
  fi
done
[ "$found_i24" = 0 ] && echo "   (none — every RATIFIED node cites its validating decree)"
# I24 EDGE (ARCH-00392 Phase-0): penumbra — RATIFIED + authorization word but no date/run reference
for f in $(grep -rliE "^\*\*status:.*ratified|^status:.*ratified" --include="*.md" . 2>/dev/null | grep -v '.git/'); do
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

# EDGE — Phase-0 (ARCH-00392): UNKNOWN/penumbra channel. UNKNOWN ≠ FAIL; advisory for Opus judgment.
echo "[EDGE] unknown/penumbra findings (invariant-registry.yaml I19/I23/I24 scope envelopes):"
if [ "$found_edge" -eq 0 ]; then
  echo "   (none — no penumbra cases this run)"
else
  printf "$edge_findings"
fi

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
