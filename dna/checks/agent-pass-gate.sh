#!/usr/bin/env bash
# [AGENT-PASS] — Principle 21 enforcement #3 (Governor decree 2026-07-21 "schedule a weekly pass on all agents").
# CISEM has NO OS scheduler (and CronCreate is session-only, not permanent) — so the PERMANENT, mechanical way to
# "schedule" is a FRESHNESS GATE (same pattern as ARCH-00370's harvest gate): this WARNS whenever the weekly all-agents
# compliance pass is overdue (>7 days), re-firing the mandate on every commit until it is run. Honest limit (I23): the
# gate FIRES + tracks freshness mechanically; the audit itself is model-performed on this cue.
# THE PASS (what to do when this fires): audit EVERY .claude/agents/*.md — confirm each still carries the
# IMMEDIACY + HARVEST-BEFORE-RETURN + VERIFY-DONE-NOW mandate (Principle 21) and has not drifted from CLAUDE.md;
# fix any gap; then `touch dna/checks/agent-pass.stamp` to reset the clock. WARN-only, NOT in the ZF formula.
repo="$(git rev-parse --show-toplevel 2>/dev/null || echo .)"; cd "$repo" 2>/dev/null || exit 0
stamp="dna/checks/agent-pass.stamp"
echo "[AGENT-PASS] weekly all-agents compliance pass (Principle 21; WARN-only):"
if [ ! -f "$stamp" ]; then
  echo "   ⚠ no stamp — run the weekly agent-pass (audit .claude/agents/*.md for the Principle-21 mandate), then: touch $stamp"
elif find "$stamp" -mtime +7 2>/dev/null | grep -q .; then
  echo "   ⚠ OVERDUE (>7 days) — audit every .claude/agents/*.md for the immediacy+harvest+verify mandate, fix drift, then: touch $stamp"
else
  echo "   ✓ fresh (weekly agent-pass ran within 7 days)"
fi
exit 0
