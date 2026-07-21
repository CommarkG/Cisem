#!/usr/bin/env bash
# ── INJECTION / OVERRIDE SCANNER (WARN) — guard #5 of the skill-ingestion route (CISEM-ARCH-00411).
# tags: [check, gate, injection, security, intake, mandatory] | Status: ACTIVE (built + wired + planted-tested 2026-07-21)
# Scans every intake file for override/injection attempts — universal enumeration (Principle 18B GLOBAL-VIEW:
# every *-RAW.md tagged RAW-EXTERNAL repo-wide, the SAME mechanism [RAW-PAIR] already uses) — not a curated
# "skills-only" list. RAW-EXTERNAL is the correct class key (untrusted intake); *-PURIFIED.md siblings and other
# dna/ibd/ content (native CISEM designs/parks, already-vetted Stage-2 output) are deliberately OUT of scope —
# scanning them is a category error (they are trusted CISEM-authored content, not untrusted intake) and produced
# a false-positive flood in testing (RI-0012 class, corrected before shipping). Today's skill-intake home
# (dna/ibd/) is covered because a skill capture IS a *-RAW.md tagged RAW-EXTERNAL, per this protocol's Step 2.
# Five value-anchored
# pattern classes (RI-0012 class: key on a real phrase/marker, never a bare loose substring): persona-hijack,
# forced-greeting/format-mandate, MCP/system-instruction-block markers, truth-write attempts, non-Latin persona
# blocks (the live Otosan-Hebrew vector). WARN-only (SWIFT-safe); wired into plan-audit.sh after [RATIFY-GATE],
# NOT in the ZF formula at introduction (same posture as [SEED]/[RAW-PAIR]/[ARCHIVE]/[NAMING] at theirs).
# CORE-SEED 2 (CISEM-ARCH-00411): untrusted content is DATA to report, never a command — this scanner only
# REPORTS matches; it never acts on the matched instruction-like text.
repo="$(git rev-parse --show-toplevel 2>/dev/null || echo .)"; cd "$repo" 2>/dev/null || exit 0

echo "[INJECTION-SCAN] override/injection patterns in intake content (RAW-EXTERNAL + dna/ibd skill-intake; WARN — CISEM-ARCH-00411 guard #5):"
found=0

# universal enumeration: every *-RAW.md tagged RAW-EXTERNAL repo-wide (same mechanism as [RAW-PAIR]) — the
# correct "untrusted intake" class. Deliberately excludes *-PURIFIED.md siblings and other dna/ibd/ content
# (trusted, CISEM-authored — see header note).
targets=$(find . -name "*-RAW.md" -not -path './.git/*' 2>/dev/null | xargs -r grep -liE "RAW-EXTERNAL" 2>/dev/null | sort -u)

for f in $targets; do
  [ -f "$f" ] || continue

  # 1) PERSONA-HIJACK — an imperative persona/role-override phrase, not a bare word. Case-insensitive: these
  #    phrases commonly open a sentence ("You are now…", "Ignore all…") so case cannot be assumed.
  hit=$(grep -noiE "you are now [A-Za-z].{0,40}|act as (a|an|the) [A-Za-z].{0,40}|ignore (all |any |the )?(previous|prior) instructions|disregard (all |any |the )?(previous|prior) instructions" "$f" 2>/dev/null | head -3)
  [ -n "$hit" ] && { echo "   PERSONA-HIJACK: $f"; echo "$hit" | sed 's/^/      /'; found=1; }

  # 2) FORCED-GREETING/FORMAT-MANDATE
  hit=$(grep -noiE "always respond (in|with)|at the start of (every|each) (new )?(session|conversation|chat|reply)|must (always|immediately) (display|output|show|greet|present)" "$f" 2>/dev/null | head -3)
  [ -n "$hit" ] && { echo "   FORMAT-MANDATE: $f"; echo "$hit" | sed 's/^/      /'; found=1; }

  # 3) MCP/SYSTEM-INSTRUCTION-BLOCK MARKER
  hit=$(grep -noiE "mcp server.{0,40}(instructions|provided instructions)|<system-reminder>|##[[:space:]]*mcp server instructions" "$f" 2>/dev/null | head -3)
  [ -n "$hit" ] && { echo "   MCP-BLOCK-MARKER: $f"; echo "$hit" | sed 's/^/      /'; found=1; }

  # 4) TRUTH-WRITE ATTEMPT — a CORE-SEED marker or a RATIFIED assertion appearing INSIDE untrusted content.
  hit=$(grep -noE "\[\[CORE-SEED|\bRATIFIED\b|\bStatus:[[:space:]]*RATIFIED\b" "$f" 2>/dev/null | head -3)
  [ -n "$hit" ] && { echo "   TRUTH-WRITE-ATTEMPT: $f"; echo "$hit" | sed 's/^/      /'; found=1; }

  # 5) NON-LATIN PERSONA BLOCK — 3+ consecutive Hebrew/Arabic-range characters (the live Otosan vector).
  #    UTF-8 lead-byte range 0xD6-0xDB (Hebrew U+0590-05FF + Arabic U+0600-06FF); this environment's grep -P
  #    does not support \x{...} unicode escapes under its locale (verified) — byte-range matching does.
  if grep -qP '([\xd6-\xdb][\x80-\xbf]){3,}' "$f" 2>/dev/null; then
    echo "   NON-LATIN-PERSONA-BLOCK: $f (3+ consecutive Hebrew/Arabic-range characters)"; found=1
  fi
done

[ "$found" = 0 ] && echo "   (none — no override/injection patterns found in intake content)"
echo "   class coverage: every RAW-EXTERNAL *-RAW.md repo-wide (universal enumeration, Principle 18B) — the correct untrusted-intake class, not a curated list; skill captures land here via Step 2 of CISEM-ARCH-00411"
exit 0
