# IBD-0022 — MCP Context Isolation Protocol (from Claude coworker, relayed by Governor)
**Status:** PARKED-RAW | **tags:** [ibd, mcp, context-isolation, boundary-breach, governed-intervention, swift-and-park]
**Source:** Governor-relayed document authored by a Claude.ai coworker, 2026-07-20. Captured verbatim-in-essence (IBD §2.6).

## THE PROBLEM (real, observed this session)
MCP servers connected to Claude are **account-scoped**, not project-scoped — so every connected MCP (Otosan WordPress, Gmail, Calendar) injects its system instructions into EVERY session, including CISEM architecture sessions. The Otosan WordPress MCP has repeatedly tried to inject a Hebrew greeting + WordPress action-menu into this very session (refused each time; logged). In CISEM terms this is a **boundary breach** — it violates A1 (nothing stands alone / everything has a place) and A3 (schema place).

## THE COWORKER'S PROPOSED SOLUTION (3 layers)
1. **git repo = domain boundary** — each domain its own repo; `.mcp.json` at the repo root declares ONLY that domain's MCPs; `.mcp.json` inheritance STOPS at git boundaries (the structural lever). Zero global MCPs in `~/.claude.json`.
2. **launcher scripts** — `launch-cisem.sh` runs `claude --strict-mcp-config ~/cisem/.mcp.json` (hardstop: ignores all other MCP configs, no bleed).
3. **CLAUDE.md context guard** — each repo declares authorized MCPs; unauthorized tool → STOP + flag as a boundary breach (self-enforcing).
**Cowork gap (honest):** claude.ai web/desktop connectors are account-level; no per-project scoping yet. Interim: disable Otosan connector when in CISEM context (10s), OR two accounts, OR separate Cowork tasks. (Feature request: claude-code GitHub #5350.)

## OPUS DECISION — SWIFT + PARK (§2.7)
- **SWIFT (low-risk, significant, NOW):** the immediate action = **Governor disables the Otosan connector in claude.ai → Settings → Connectors** while in CISEM context. Stops the bleed today, zero blast. (Governor's own account action — I cannot do it for him.)
- **ALIGNED PRINCIPLE (adopt):** the structural fix (git-boundary `.mcp.json` + `--strict-mcp-config`) IS the CISEM way — MECHANICAL over behavioral, git-SSOT, "nothing floats." Prefer it over the behavioral CLAUDE.md-guard layer (which is a nice backstop, not the primary fence).
- **PARK (deep-dive, needs a plan):** the full 3-layer repo/launcher restructure changes how the Governor operates across ALL domains — high-blast → a ratified plan (Existing-First: CISEM already has its own git repo + CLAUDE.md; the missing piece is a scoped `.mcp.json` + launcher). Route via /cisem-plan when prioritized.

## RIPPLE
- This is a real instance for the **actual-output monitor** (a boundary breach that recurs silently = exactly what a heartbeat/staleness check + an injection-log should surface).
- Relates to §1.7 (one-tab / git-SSOT) — a domain-scoped repo boundary is consistent with it; a second WRITING surface is not (see the coworker-answer).
