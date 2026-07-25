# Graphify Behind the Wall — Safe-Isolation Install & Use Guide
*A portable guide for AI coding assistants / collaborators. Goal: get the full value of Graphify while keeping it 100% isolated from your project's trusted and governance files. Read the reasoning — the "why" is the point, not just the commands.*

---

## Part 1 — The WALL principle (read this first)

**Principle: external elements are USED, never TRUSTED. Use them to the maximum; isolate them to the maximum.**

Why this matters, concretely:
- Any external tool, model output, or third-party package can be wrong, stale, or *evolve* to reach further than you expected between the version you read about and the version you install. Its value can be real — but its authority over your project's truth must be **zero**.
- An external tool must **never**: write into your always-loaded instruction/governance files (e.g. `CLAUDE.md`, `AGENTS.md`, `.cursor/rules`), insert itself into your trusted hooks, run a server/daemon, or make network calls you didn't ask for.
- The wall = you use the tool's **output** from behind a boundary; the tool never crosses into your trusted state. You keep **one source of truth**; external output is an *input to verification*, never a fact.
- **Real example that motivates this guide:** Graphify's *default* install (`graphify install`) writes its own rules into your `CLAUDE.md` (your governance root) and installs its own hooks — by default. That is a tool assuming it belongs in trusted territory. The wall says: **use its graph, not its reach.** The setup below gets you everything valuable and none of that.

**Two poles held together: MAX USAGE ⇄ MAX ISOLATION.** Don't cut the value to get safety, and don't cut safety to get value. The method below gives both at once.

---

## Part 2 — What Graphify is (and is not)

- **IS:** a *local* structural knowledge graph of your codebase (tree-sitter parsing of code, plus docs), queryable from the CLI. Its value is **token savings** — it turns "grep/read the whole repo to find things" into "query a compact graph," which can cut search/context cost dramatically. No account, no cloud, runs on your machine.
- **IS NOT:** an understanding of your project's *meaning* — its decisions, statuses, rules, or governance. It maps **structure** (files, symbols, relationships), not **semantics**. So treat every answer it gives as a **navigation hint**, never as authority. Verify against source before acting on anything load-bearing.

---

## Part 3 — The MAX-ISOLATION install (do exactly this)

The safe path is Graphify's **pure CLI mode**. You get the full graph + query value with **zero** reach into trusted files.

**1. Install the CLI in an isolated environment:**
```
uv tool install graphifyy
# alternatives if you don't have uv: pipx install graphifyy   (or)   pip install graphifyy
```

**2. DO NOT run the integration installers.** Skip these entirely — they are the wall breaches:
- ✗ `graphify install` (and `graphify install --project`) → writes to `CLAUDE.md` / skill files in your trusted config
- ✗ `graphify hook install` → inserts Graphify's own hooks into your git/trusted path
- ✗ `graphifyy[mcp]` / `python -m graphify.serve` / any `--mcp` → runs an MCP **server** (an external service surface). Keep zero external servers.

**3. Generate the graph — local, no network, quarantined output:**
```
graphify extract . --code-only
```
- `--code-only` disables **all** network/LLM calls (source is parsed locally with tree-sitter; nothing leaves your machine).
- Output lands in a `graphify-out/` folder. **Add `graphify-out/` to `.gitignore`** and treat it as a quarantined artifact. You can pass an explicit output path to keep it exactly where you want it.

**4. Query the graph manually — this is where the token-saving lives:**
```
graphify query "<what you're looking for>"
graphify explain "<symbol or file>"
```
Use these *instead of* broad grep/find sweeps — same answer, a fraction of the tokens.

**5. Keep it fresh under YOUR control:** re-run `graphify extract . --code-only` after meaningful changes — as your **own** step (a script or a post-commit hook *you* write and control), **not** Graphify's installed hook.

> Exact subcommands/flags can differ by version — run `graphify --help` and confirm the real syntax for *your* installed version. The principle (CLI-only, no install, code-only, quarantined output) is what matters.

---

## Part 4 — Verify before you trust it (do this once, at your version)

Tools change between versions — verify the **actual behavior** of the version you installed, not the docs:
1. After `graphify extract . --code-only`, check what changed on disk: did it write **only** inside `graphify-out/`? Nothing in `CLAUDE.md`, `AGENTS.md`, `.claude/`, `.cursor/`, or git hooks?
2. Confirm no network connection was made (code-only should mean fully offline).
3. If **anything** wrote outside the output directory, stop — that's a wall breach; do not proceed until it's contained.
4. **Pin the version you verified**, and re-verify on any upgrade (a new version can add new reach).

---

## Part 5 — Why this exact setup (reasoning recap)

- **CLI-only + `--code-only`** = maximum value (the full graph + query, big token savings) with maximum isolation (no trusted-file writes, no network, no server).
- **Your own thin integration** (a query step you control) beats the tool's install (which reaches into your governance root). You decide what the tool touches — which is the whole point of the wall.
- **The graph is an external artifact behind the wall:** consult it freely, trust it never. For anything that matters, verify against the actual source.

*This is how you get 100% of Graphify's usefulness and 0% of its intrusion.*

---
*Version note: Graphify was ~0.9.26 as of mid-2026; the package name on PyPI is `graphifyy` (double-y). Commands and flags evolve — always confirm against your installed version with `graphify --help`, and re-verify the isolation checklist (Part 4) after any update.*
