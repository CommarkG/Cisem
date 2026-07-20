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

## COWORKER FOLLOW-UP — 3 gaps answered + owner/trigger (Governor-relayed 2026-07-20)
The coworker (correctly) said IBD-0022 must not stay a floating backlog slot. Answers:
1. **Owner + trigger.** OWNER = Opus (authors the structural plan) + Governor (account action + ratify). TRIGGER: the Otosan bleed recurs EVERY session, so the SWIFT fires NOW — **Governor disables the Otosan connector in claude.ai → Connectors** (10s, zero-blast, his account action). The structural restructure (repo `.mcp.json` + launcher) triggers when the Governor prioritizes it into the plan-gate. Not left dateless: SWIFT = this session; plan = next-prioritized.
2. **Authorized MCP list — does CISEM need any external MCP?** **NO — CISEM runs CLEAN.** It operates entirely on the local git repo + Claude Code native tools (Read/Edit/Bash) + CAL hooks. It requires ZERO external MCP servers. So CISEM's `.mcp.json` is **empty**, run under `--strict-mcp-config` → no Otosan/Gmail/Calendar/Canva/Drive bleed possible. This is the authoritative answer the coworker asked for.
3. **Cross-session relay surface.** Per §1.7 CISEM does NOT do live cross-session/instance relay — **git is the only bus**; state lives on disk (SSOT). A "relayed message" is not a live channel; each session bootstraps from the repo and carries its OWN fence (its repo `.mcp.json`). So there is no shared-MCP surface across sessions to leak — the relay is git commits, which carry no connector config. Surface named, closed.
4. **"concurs" vs "ratifies".** This is **PRELIMINARY (concurs)**, not ratified. The structural repo/launcher restructure is a governed creation → needs the plan-gate (A4). The SWIFT (disable connector) is a Governor account action, not a governed creation → needs no plan. So: SWIFT now; structure ratifies later via /cisem-plan.

## STATUS
PARKED-RAW → **PARK-WITH-OWNER-AND-TRIGGER** (2026-07-20). SWIFT is live-actionable by the Governor; the structural plan is the parked deep-dive. GI-51 indexes this.
