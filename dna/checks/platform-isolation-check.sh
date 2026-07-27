#!/usr/bin/env bash
# authorizing_plan: CISEM-ARCH-00429 (RATIFIED 2026-07-27 — MCP per-platform stabilization + workspace isolation; this is the Layer-1 detector)
# CISEM Platform-Isolation Check — WARN-ONLY PREVIEW (RI-0014 preview-clause; RI-0055/0057 layers 1-2).
# Surfaces cross-platform exposure at/near session start. Output routes through the session-start banner
# (an EXISTING consumption surface — [CORESPINE-BODILESS] condition; a fresh log nobody reads = presence-not-behavior).
# WARN-only, NOT in [ZF]. BLOCK-mode graduation + the relay-intake UserPromptSubmit gate + the source-verification
# 4th factor (native-looking-false content, Brain #3 J3) are the RATIFIED follow-ons — this preview does NOT claim them.
# HONEST LIMIT: bash cannot read the Claude session's working-directory config, so it cannot prove a sibling is IN
# this session's workspace — only that a sibling repo is filesystem-REACHABLE from here (the necessary precondition
# for the leak). Treat a hit as "verify this session's workspace excludes the sibling," not as proof of active access.
set -u
repo="$(git rev-parse --show-toplevel 2>/dev/null || echo .)"; cd "$repo" 2>/dev/null || exit 0
echo "[PLATFORM-ISOLATION] cross-platform exposure (WARN — RI-0055/0057; preview):"
found=0
# Known sibling platform repo roots, relative to CISEM.
for sib in "../Core Sights Platform" "../Csps"; do
  [ -d "$sib" ] && [ -n "$(ls -A "$sib" 2>/dev/null)" ] || continue
  echo "   ⚠ REACHABLE SIBLING: '$sib' is filesystem-reachable from this CISEM session."
  echo "     → LAYER-1 (workspace): confirm this session's .code-workspace / working-directories EXCLUDE it — a CISEM agent must not read/write a sibling repo."
  if [ -d "$sib/.claude/skills" ] || [ -d "$sib/.agents/skills" ]; then
    echo "     → LAYER-1b (SUPPLY-CHAIN): '$sib' carries skills — a sibling skill could LOAD/EXECUTE in a CISEM session (higher risk than a read: it can WRITE governed files, Brain #3 J7). Exclude the sibling's skills dir from scope."
  fi
  found=1
done
# LAYER-2 (MCP tool-calls): confirm the deny + the empty strict-config, and state the honest injection limit.
if [ -f .mcp.json ] && grep -qE '"mcpServers"[[:space:]]*:[[:space:]]*\{[[:space:]]*\}' .mcp.json 2>/dev/null; then
  echo "   ✓ .mcp.json present + empty (zero external MCP under --strict-mcp-config — GI-51/IBD-0022 structural fix)."
else
  echo "   ⚠ .mcp.json missing/non-empty — external MCP may load (GI-51 clean-posture gap)."
fi
# CIC-audit fix (ARCH-00429 amended GI-51): the OVER-BROAD mcp__* blanket was deliberately REMOVED
# (it would block wanted GitHub/Playwright) and replaced with a server-specific Otosan deny. So assert
# the RATIFIED posture — Otosan denied specifically, NOT the blanket. (RI-0066 — a detector must track the
# posture it enforces when that posture is amended.)
if grep -q '"mcp__\*"' .claude/settings.json 2>/dev/null; then
  echo "   ⚠ settings.json has an OVER-BROAD mcp__* deny — would block wanted connectors (ARCH-00429 replaced it with server-specific denies); review."
elif grep -q 'mcp__claude_ai_Otosan' .claude/settings.json 2>/dev/null; then
  echo "   ✓ settings.json denies Otosan specifically + deniedMcpServers blocks its CONNECTION (ARCH-00429 posture). HONEST LIMIT: permissions.deny blocks CALLS; deniedMcpServers blocks the connection/injection (Otosan). Runtime proof of the 4 wanted connectors + Otosan-absent = Governor /mcp."
else
  echo "   ⚠ settings.json has neither the Otosan-specific deny nor a blanket — verify the ARCH-00429 MCP posture."
fi
[ "$found" = 0 ] && echo "   ✓ no reachable sibling-platform repo (workspace isolated at the filesystem level)"
echo "   NOT-YET (ratified follow-ons, not claimed by this preview): relay-intake UserPromptSubmit gate · source-verification 4th factor (native-false content) · BLOCK-mode graduation."
exit 0
