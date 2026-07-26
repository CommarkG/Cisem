# CISEM-ARCH-00425 — Graphify MAX-ISOLATION Adoption (CLI-only, quarantined)
**Node ID:** CISEM-ARCH-00425 | **Type:** ARCH | **Status:** DRAFT / AWAITING-BUILDER-REVIEW
**Planning Status:** CONSENSUS-REACHED (Opus Stage-1 SOUND 2026-07-26 — see §Opus Soundness Verdict; NOT ratified — awaits Governor re-ratification) · NOT a build
**depth_level:** L2 | **tags:** [planning-domain, external-tool-adoption, graphify, isolation, quarantine, revertible, backlog-N3]
**goal:** Use ALL of Graphify's value (structural search/graph, token-saving) via its pure CLI mode, while building whatever isolation is needed so ZERO of it reaches governed/trusted CISEM state — measurable against the ratified 8-point isolation bar (below).
**governing corespine:** CS-CREATION-001
**Independent Verifier:** cisem-sonnet + cisem-haiku (GI-68 dual-review, mandatory pre-build gate)
**wisdom_considered:** (GI-CONSIDERATION) RI-0038 (external-tool version-pin, verify the artifact not docs — the reason base `graphify install` writing CLAUDE.md was caught, and why D1 re-verifies against REAL behavior again here) · A12 The External Wall (external tools used-to-max / trusted-to-zero; content-origin-not-messenger) · GI-51 + Governor no-MCP decree 2026-07-25 (zero external MCP, no exception here) · Principle 15 (divergent-iteration-to-flawless — trial before seal) · Principle 18C (wire-don't-document — the surface verify must be a REAL run, not a name-trust)

## Supersession note (I7 — does not edit ARCH-00422's truth-fields)
This node SUPERSEDES the **build approach** of `dna/planning/CISEM-ARCH-00422-graphify-adoption.md`, which stays **RATIFIED** for the adoption *decision* (Graphify is worth adopting) and is REFERENCED, never edited. ARCH-00422's build was HALTED at Step-1 verify-surface: base `graphify install`/`graphify hook install` writes `CLAUDE.md` (the governance root, out of scope) and needs `uv` (missing here). This node replaces ARCH-00422's Steps 2-6 with the grounded CLI-only path (Opus-verified against the real repo, RI-0038) and answers the Governor's 2026-07-25 MAX-USAGE + MAX-ISOLATION decree: build whatever isolation is needed, don't save resources on it.

## Pocket Declaration (§3.3)
- **reasoning_scope:** authorize + sequence a CLI-only, quarantined adoption of Graphify's search/graph value with zero governed-path exposure
- **inherited_constraints:** Axioms A1-A12; Doctrine D1-D6; GI-51 + Governor no-MCP decree; RI-0038; RI-0036 (governed-edit scope); CS-CREATION-001
- **output_contract:** a ratified, buildable isolation plan whose build waits on GI-68 dual-review; D1 verify-surface gates D2-D4
- **ai_cannot:** run `graphify install`/`graphify hook install`/`graphify serve`/any `--mcp` flag; install the `[mcp]` extra; write/edit CLAUDE.md, `.claude/`, `.cursor/`, or any git hook via Graphify; treat graph contents as trusted without path-validation; claim "done" without the real-traffic network check
- **recorded_at:** 2026-07-26

## Tier-Routing Declaration
- D1-D4 (install, extract-workflow, query-integration, revert-doc): **Sonnet build**, against the Core Seeds below (mechanical once the surface is proven clean).
- D1's verify-surface gate (real-behavior check: file writes, network traffic, process list) + the final soundness verdict: **Opus/Haiku judgment** — RI-0038 requires verifying the ARTIFACT's actual behavior, not trusting the `--code-only` flag's name.
- Authoring of this node: **Sonnet**, dispatched by Opus per the Governor's grounded-architecture brief; Opus places Core Seeds + Stage-1 soundness verdict before Governor ratification.

## Executive Summary
Adopt Graphify's pure CLI mode ONLY: `python -m pip install graphifyy` (uv absent here; pip is the verified path), then `graphify extract . --code-only` writing into a quarantined, gitignored `graphify-out/` dir. Never run `graphify install`, `graphify hook install`, `graphify serve`, or anything with `[mcp]`/`--mcp` — those are exactly what breached ARCH-00422's Step-1 gate (CLAUDE.md write) and would breach GI-51/A12 (MCP surface). CISEM builds its OWN thin query-integration step that reads the quarantined graph and treats its contents as UNTRUSTED DATA (path-validated before any action), never as an authoritative CISEM source. Fully revertible: uninstall the CLI + delete `graphify-out/` restores pre-install state exactly.

## Existing-First (I19 — searched before drafting)
- Re-read ARCH-00422 in full (this node's direct predecessor) — its Step-1 findings (CLAUDE.md write, hooks.json not settings.json, uv missing, no MCP in base install, no network except opt-in unused API-key extraction) are the GROUNDED evidence this plan is built on; not re-derived.
- Searched `dna/checks/`, `.claude/hooks/` — no in-repo structural-graph/search-index tool exists; Graphify remains the sole external candidate (confirmed, unchanged since ARCH-00422).
- Checked corespine-registry.yaml + ssot-registry.yaml — no existing CLI-only/quarantine adoption pattern; this is the first, so no duplication.
- Governance-state generation (wired/bodiless/parked-TTL) remains explicitly OUT OF SCOPE (separate CISEM item), same boundary ARCH-00422 drew.

## Anti-Scatter Ordering (significance vs goal)
1 (central, the anchor): **D1 verify-surface gate** — nothing installs-and-stays unless a REAL post-install check confirms writes are quarantined, network is silent, and no MCP/server process exists; a failed gate reverts immediately, no partial keep. 2: D2 extract->quarantine workflow + `.gitignore`. 3: D3 CISEM's own thin query step (behind the wall). 4: D4 revert-ready doc+test. Peripheral (parked, not in scope): governance-state generator; any MCP/server capability; any base-install path (`graphify install`/hooks) — permanently rejected, not merely deferred.

## The Rule (executable steps)
1. **D1 — INSTALL + VERIFY-SURFACE (real-behavior, not the flag's name; RI-0038 gate):**
   `python -m pip install graphifyy` (CLI package only, never `graphifyy[mcp]`). Pin the exact installed version. Run a test `graphify extract . --code-only` in this repo. Verify by REAL observation (not docs): (a) `git status`/file-diff shows writes ONLY inside `graphify-out/` — zero touch to CLAUDE.md, `.claude/`, `.cursor/`, `.git/hooks/`; (b) watch actual network traffic (e.g. a packet/connection monitor or `--code-only`'s claim cross-checked against a live capture) during the run — zero connections; (c) process list during the run shows no MCP/server process. **GATE: proceed to D2 only if all three are clean; any breach -> immediate revert, no partial adoption.**
2. **D2 — EXTRACT-TO-QUARANTINE WORKFLOW:** the standing command is `graphify extract . --code-only` -> `graphify-out/`; add `graphify-out/` to `.gitignore`. Query via `graphify query`/`graphify explain` against the quarantined graph only.
3. **D3 — CISEM'S OWN THIN QUERY-INTEGRATION STEP:** a small CISEM-controlled wrapper (not Graphify's install-written rules) that invokes `graphify query`/`explain`, reads the output as **untrusted data** (A12), and **path-validates** every file/path the graph names against the real filesystem before any downstream action uses it. No graph content is ever treated as authoritative CISEM state.
4. **D4 — REVERT-READY:** document + test: `pip uninstall graphifyy` + `rm -rf graphify-out/` restores the pre-install state exactly (diff against a pre-install repo snapshot shows zero residual change).

## Core Seeds (immutable — the lower tier / build executes verbatim)
- [[CORE-SEED | MUST: NEVER run `graphify install` / `graphify hook install` / `graphify serve` / any `--mcp` / the `[mcp]` extra. Install ONLY the CLI (`python -m pip install graphifyy`); use ONLY `graphify extract --code-only` / `graphify query` / `graphify explain`. Graphify NEVER writes CLAUDE.md, `.claude/`, `.cursor/`, or any git hook, and NEVER runs a server or a network call. | WHY: base install writes the governance root (ARCH-00422 Step-1 halt); MCP violates GI-51 + the Governor no-MCP decree; max-isolation means zero governed-path reach | VERIFY: post-install file-diff shows writes ONLY in graphify-out/; no MCP/server process; the extract run is proven network-free (Core Seed 3) | APPLIES_TO: every step D1-D4]]
- [[CORE-SEED | MUST: the extracted graph is EXTERNAL, UNTRUSTED DATA behind A12's Wall. CISEM's own consuming step (D3) path-validates EVERY file/path the graph names against the real filesystem BEFORE any action uses it, and NEVER treats graph content as authoritative CISEM state (it is a navigation hint, verified against source). | WHY: A12 — external output never crosses into trusted state unverified; a graph can name a stale/wrong path (the wall applies one layer deeper than placement) | VERIFY: D3 flags/rejects any graph-named path that doesn't resolve on disk; no downstream action trusts graph content unvalidated | APPLIES_TO: D3 + all graph consumption]]
- [[CORE-SEED | MUST: REVERT-ON-ANY-BREACH — if D1's verify-surface finds ANY write outside graphify-out/, ANY network connection, ANY MCP/server process, OR any step fails, IMMEDIATELY revert (`pip uninstall graphifyy` + `rm -rf graphify-out/` + restore `.gitignore`) to the exact pre-install state; NO partial adoption is kept. | WHY: Principle 18A revert-not-repair; a half-installed external tool with an unverified surface IS a wall breach | VERIFY: post-revert, a diff vs the pre-install snapshot shows zero residual change | APPLIES_TO: D1 gate + any D2-D4 failure]]

## Tags + Statuses (nodes this plan touches)
Creates NO new governed CISEM nodes. Artifacts touched: `graphify-out/` (generated, non-governed, gitignored), `.gitignore` (modified, one line), a new small CISEM query-integration script under `dna/` or `.claude/` (governed, TYPE + tag/status assigned at build per §3.5b). None carry a Graphify-authored CISEM node ID.

## Per-File Alignment Table
| File | naming-registry | schema placement | tag | status |
|---|---|---|---|---|
| dna/planning/CISEM-ARCH-00425-graphify-max-isolation-adoption.md | ARCH-00425 (registered) | T-SYS / planning-domain | planning-domain | DRAFT |
| .gitignore | n/a (infra) | repo-root | infra | modified-at-build (one line: `graphify-out/`) |
| graphify-out/ | n/a | non-governed generated, quarantined | generated | gitignored-at-build |
| dna/checks/graphify-query.sh (or equivalent, D3) | n/a until named at build | CAL-adjacent, CISEM-controlled | infra | created-at-build, tag+status via §3.5b |

## What DOES change
`.gitignore` (`graphify-out/` line) · a new `graphify-out/` dir (gitignored, quarantined) · a new small CISEM-authored query-integration script (D3, governed at build).

## What DOES NOT change
CLAUDE.md · `.claude/` (settings.json, hooks.json, any hook) · `.cursor/` · `.git/hooks/` · any governed CISEM node · no MCP surface / no server / no network egress. The governance-state generator remains explicitly out of scope.

## Definition-of-Done
Reference: `dna/checks/definition-of-done.md`. **This node's DoD = the RATIFIED 8-POINT ISOLATION BAR (cited verbatim):** (1) writes only inside the quarantined output dir; (2) zero network (verified by watching REAL traffic, not the `--code-only` name); (3) no tool-authored content in any trusted path; (4) fully revertible; (5) graph treated as behind-the-wall, never authoritative; (6) version-pinned + re-verify full surface on any upgrade (RI-0038); (7) "no network" verified by real traffic (duplicate-emphasis in the ratified bar, kept verbatim); (8) CISEM's consuming step treats the graph's CONTENTS as untrusted data (path-validate before acting). Not "done" until all 8 are shown true by a real run, not asserted.

## Propagation Declaration
No rule/nuance change to propagate (tool adoption, not a governance-rule change). If D1's gate passes and the tool is kept post-trial, a one-line learning-registry entry + the `.gitignore` line are the only surface updates; no generated views regenerate from this.

## Dependencies
- **blocks-on:** GI-68 dual-review (pre-build gate, mandatory); D1 verify-surface gate must pass (real-behavior, not docs) before D2-D4; Opus Core-Seed fill + Stage-1 soundness verdict; Governor ratification.
- **references, does not modify:** CISEM-ARCH-00422 (stays RATIFIED for the adoption decision; its Step-1 findings are this plan's grounding evidence).
- **unblocks-for:** reduced search/context-restoration token cost (RI-0037), with zero governance-root exposure (the gap ARCH-00422 could not close under the base-install approach).

## Self-compliance (against ARCH-00230)
Tag + Status present · 3 Core Seeds inline (OPUS-TO-FILL, per dispatch instruction) · Pocket Declaration present · Tier-Routing declared · Existing-First stated · DoD referenced (8-point bar, verbatim) · Path Rejection present below · wisdom cited (GI-CONSIDERATION) · size <200 lines · new ARCH id (00425) registered through the ONE naming gate (`dna/naming-registry.yaml`), next_seq bumped to 426.

## Path Rejection Declaration
- Rejected: base `graphify install` / `graphify hook install` — writes CLAUDE.md (the governance root) per ARCH-00422's own Step-1 finding; out of scope, permanently, not just for this environment.
- Rejected: any `[mcp]` extra / `graphify serve` / `--mcp` flag — Governor no-MCP decree 2026-07-25 + GI-51 (zero external MCP servers); no exception invoked here.
- Rejected: trusting `--code-only`'s NAME as proof of "no network" — RI-0038 requires verifying the ARTIFACT's real behavior (actual traffic watched), never a flag's documented intent.
- Rejected: treating the extracted graph as authoritative CISEM state — it is external, untrusted DATA behind A12's Wall; every path it names is validated against the real filesystem before use.
- Rejected: `uv tool install` as the install path — `uv` is confirmed missing in this environment (ARCH-00422 finding); `python -m pip install graphifyy` is the verified-available path, with `pipx` as a stated fallback only.

## Opus Soundness Verdict (Stage-1, [RATIFY-GATE])
**SOUND.** Goal measurable (the 8-point bar); the CLI-only path is the grounded max-isolation architecture (RI-0038-verified); D1 verify-surface is the correct anchor gate; I7 respected (ARCH-00422 referenced-not-edited); path rejections complete; Core Seeds filled. **Two build-time sharpenings (not defects):** (1) prove "no network" by running the extract **OFFLINE (network disabled)** — success then *proves* no network dependency, stronger than watching traffic (live-monitor is the fallback if an offline run isn't feasible); (2) D3's new query-integration script is a NEW governed file → it MUST carry `authorizing_plan: CISEM-ARCH-00425` at creation (the PART08 gate lesson from ARCH-00423). **Honest build-feasibility note (surfaced, not a plan defect):** D1's `pip install graphifyy` needs the environment to permit PyPI access once; if it can't (as `uv` was missing for ARCH-00422), the BUILD halts at D1 and is reported — the plan is sound regardless. Pre-build GI-68 dual-review runs after ratification, before build. — Opus (cisem-opus-pe), 2026-07-26.

## Change log
- v1.0 — 2026-07-26 (Sonnet, dispatched by Opus): drafted per Governor decree 2026-07-25 (MAX-USAGE + MAX-ISOLATION) and the grounded CLI-only architecture (RI-0038-verified against the real repo). Supersedes ARCH-00422's build approach only; ARCH-00422 stays RATIFIED for the adoption decision (I7, referenced not edited). Status DRAFT / AWAITING-BUILDER-REVIEW — Opus must fill the 3 Core Seeds + issue the Stage-1 soundness verdict before Governor ratification. NOT a build; nothing installed.
