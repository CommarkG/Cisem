#!/usr/bin/env bash
# [DEFER-SCAN] — Principle 21 backstop (Governor decree 2026-07-21 "sooner is better than later"): flags
# DEFER-AND-ASSUME-LATER language introduced in CHANGED governed files that is NOT tied to a registered park.
# An un-parked "later / TODO / will-do" is a dropped-thread risk — the assumed-later step often never runs, so
# work dies uncaptured/unverified (RI-0011 + RI-0015 root). A legitimate deferral names a park (IBD/BP/RI/queue/
# NOT-YET-WIRED/follow-on/Phase-N); a bare "later" is flagged. Value-anchored (RI-0012 — key on the intent, not a
# loose 'later' substring that false-positives). Scoped to CHANGED files (like [DOD]/[ROUTING]) for signal.
# WARN-only, NOT in the ZF formula. Wire-don't-document: a running mechanism for the immediacy attitude.
repo="$(git rev-parse --show-toplevel 2>/dev/null || echo .)"; cd "$repo" 2>/dev/null || exit 0
echo "[DEFER-SCAN] un-parked defer-and-assume-later in changed governed artifacts (Principle 21; WARN-only):"
changed=$( { git diff --cached --name-only 2>/dev/null; git diff --name-only 2>/dev/null; \
             git ls-files --others --exclude-standard 2>/dev/null; } | grep -E '^dna/.*\.md$' | sort -u )
found_defer=0
for f in $changed; do
  [ -f "$f" ] || continue
  # deferral-INTENT lines, MINUS lines that name a registered park / honest NOT-YET-WIRED / disclosed follow-on.
  hits="$(grep -inE "(TODO|do (it|this) later|(will|i'?ll) (harvest|save|wire|capture|verify|commit|fix|finish|handle|update)[^.]{0,40} later|(resolve|collect|handle|capture)[^.]{0,40} later|for now[, ]+(skip|leave|defer))" "$f" 2>/dev/null \
          | grep -viE "PARKED|IBD-[0-9]|BP-[0-9]|RI-[0-9]|queue|NOT-YET-WIRED|follow-on|Phase [0-9]|deferred to|disclosed|registered park")"
  if [ -n "$hits" ]; then
    echo "   UN-PARKED-DEFER: $f"; echo "$hits" | sed 's/^/      /'; found_defer=1
  fi
done
[ "$found_defer" = 0 ] && echo "   (none — no un-parked defer-and-assume-later in changed artifacts)"
exit 0
