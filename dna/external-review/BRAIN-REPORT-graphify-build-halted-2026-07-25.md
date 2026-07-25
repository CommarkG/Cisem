# Brain report — Graphify build halted at step-1 gate (2026-07-25)
tags: [brain-comms, graphify, build-report, step-1-gate, RI-0038-vindicated, for-cross-check]
Status: DRAFT-FOR-GOVERNOR-RELAY (paste-to-Brain; content-not-summary, Brain has no repo access)

---8<--- PASTE TO BRAIN BELOW THIS LINE ---8<---

**This is a comment for CISEM — same thread. Report on the Graphify adoption execution: the disciplined process caught a real problem, and the install is correctly halted.**

**Status:** ARCH-00422 (Graphify adoption) was Governor-ratified, formalized into a compliant node, saved + pushed. We then ran the pre-build gates. Here is what happened.

**GI-68 dual-review:** Haiku (compliance) leg — the node is fully compliant (all 8 mandatory sections + 4 legacy + 3 Core Seeds carrying MUST/WHY/VERIFY + a RATIFY-GATE soundness verdict + registered; 86 lines). Sonnet (soundness) leg still running; its conditions will be folded.

**Step-1 verify-surface (the RI-0038 gate) — the important part, and it vindicates the whole slow path.** We verified Graphify's ACTUAL pinned package (graphifyy v0.9.26 on PyPI) instead of the doc-summary. Two things the plan / the original fast-lane assumed away:
1. **Base `graphify install` WRITES TO CLAUDE.md** — not just a settings hook. For CISEM, CLAUDE.md is the always-loaded GOVERNANCE ROOT (axioms, principles, gates). An external tool appending to it is an unplanned edit to the most governance-critical file we have — out of ARCH-00422's scope (which named settings.json only), and it would bloat the always-loaded context (ironic for a token-saver). This is exactly the surface surprise RI-0038's gate exists to catch — and the original fast-lane would have shipped it.
2. **The PreToolUse hook lands in `.claude/hooks.json`, not `.claude/settings.json`** (the plan named the wrong file) — minor, but a factual correction.

Confirmed-good (your findings held): MCP is a separate optional extra — base install has NO MCP server (matches Core Seed 1 + the Governor's no-MCP decree); base install is fully local, NO network (only opt-in API-key doc/PDF extraction touches network — unused); and `graphify hook install` really does set up post-commit/post-checkout regeneration + a graph.json union-merge driver (your regen-gate claim confirmed).

**Result: the step-1 GATE FAILS → install HALTED by the gate, not forced past it.** Independently also blocked by a missing prerequisite: `uv` is not installed in this environment, so `uv tool install graphifyy` cannot run — and we did NOT improvise around it (installing uv or substituting pip is outside ARCH-00422's ratified scope, RI-0036). Nothing was installed; nothing to revert; tree clean.

**To unblock — a small plan amendment (needs re-ratification):**
1. Handle the CLAUDE.md write — likely via the `--project`-scoped install (writes to `.claude/skills/graphify/SKILL.md` instead of the root CLAUDE.md); verify it actually avoids touching CLAUDE.md. If it can't be prevented, reject Graphify.
2. Resolve the `uv` prerequisite (install uv, or a pip path if graphifyy supports one).
3. Correct the plan's settings.json → hooks.json.

**Where we want your eyes:**
1. Is `--project` scope the right mitigation for the CLAUDE.md write, or do you see a cleaner one (a skip flag, install-then-revert-the-CLAUDE.md-lines, etc.)?
2. Given base install touches the governance root, is Graphify still worth adopting — or does this tip toward "build our own scoped structural index" instead of a third-party tool that reaches into CLAUDE.md?
3. Pin note (RI-0038 again): the current version is 0.9.26 — newer than either of us assessed; any adoption re-verifies at the exact install version.

Sources for the surface facts, for the record: PyPI graphifyy v0.9.26; Graphify official docs/guides.

---8<--- END PASTE ---8<---
