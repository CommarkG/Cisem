#!/usr/bin/env bash
# ── SAVE-RAW-ACTIVITY (Governor decree 2026-07-21, RI-0011 counter) — hardwired into the pre-compact hook.
# Preserves the VERBATIM RAW of the recent ACTIVITY window (not wall-clock — the accumulated work turns) by
# snapshotting the current session's .jsonl transcript to a durable, committed file. The transcript is the ONLY
# perfect-fidelity source (never a memory-reconstruction = re-summarizing). Runs at every boundary; each run
# refreshes this session's snapshot so the last ~5 activity hours of raw content are always on disk + pushable.
repo="$(git rev-parse --show-toplevel 2>/dev/null || echo .)"; cd "$repo" 2>/dev/null || exit 0
outdir="dna/learning-registry/raw-activity"; mkdir -p "$outdir"

# Find THIS session's transcript = the most-recently-modified .jsonl under ~/.claude/projects/<this project>/.
proj="$HOME/.claude/projects"
tx="$(ls -t "$proj"/*/*.jsonl 2>/dev/null | head -1)"
if [ -z "$tx" ] || [ ! -f "$tx" ]; then
  echo "[SAVE-RAW-ACTIVITY] no session transcript found under $proj — skipped (honest: cannot snapshot what isn't there)."
  exit 0
fi
sid="$(basename "$tx" .jsonl)"
snap="$outdir/raw-activity-${sid}.jsonl"

# Snapshot the RECENT activity window verbatim. Heuristic for "~5 activity hours": keep the tail (recent turns).
# A full session rarely exceeds this; if it does, the tail holds the most recent work. Verbatim, no summarization.
LINES="${CISEM_RAW_ACTIVITY_LINES:-8000}"
tail -n "$LINES" "$tx" > "$snap" 2>/dev/null
total="$(wc -l < "$tx" 2>/dev/null | tr -d ' ')"
kept="$(wc -l < "$snap" 2>/dev/null | tr -d ' ')"
echo "[SAVE-RAW-ACTIVITY] snapshotted VERBATIM ${kept}/${total} transcript lines -> $snap (session $sid)."
echo "  Commit + push this so the raw activity survives compaction: git add $snap && commit && push."
exit 0
