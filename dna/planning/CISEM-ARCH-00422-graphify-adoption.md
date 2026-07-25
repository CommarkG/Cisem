# CISEM-ARCH-00422 — Graphify Adoption (local, MCP-free search-token-saving layer)
**Node ID:** CISEM-ARCH-00422 | **Type:** ARCH | **Status:** RATIFIED
**Planning Status:** COMPLETE (Governor-ratified 2026-07-25; Brain-concurred; Opus Stage-1 SOUND — see §Opus Soundness Verdict)
**depth_level:** L2 | **tags:** [planning-domain, external-tool-adoption, graphify, token-efficiency, local-only, revertible]
**goal:** Adopt Graphify as a LOCAL, MCP-free, read-only search-token-saving layer to cut the context-restoration/search token cost (RI-0037) — verified against the pinned artifact, behavior-validated, fully revertible.
**governing corespine:** CS-CREATION-001
**Independent Verifier:** cisem-sonnet + cisem-haiku (GI-68 dual-review, pending as the pre-build gate — distinct from Opus author)
**wisdom_considered (GI-CONSIDERATION):** RI-0037 (context-restoration-by-search, the cost this addresses) · RI-0038 (external-tool version-pin rule — its §Step-1 gate) · GI-51 + Governor no-MCP decree 2026-07-25 (clean-posture) · RI-0036 (scope-bounded governed edit) · Principle 15 (trial-before-seal) · Principle 18A (revert-not-repair)

## Pocket Declaration (§3.3)
- **reasoning_scope:** authorize + sequence a safe, revertible adoption of one external read-only tool
- **inherited_constraints:** Axioms A1–A11; Doctrine D1–D6; GI-51 + Governor no-MCP decree; RI-0036/0038; CS-CREATION-001
- **output_contract:** a ratified, buildable adoption plan whose build waits on GI-68 dual-review; step-1 read-only verify gates all else
- **ai_cannot:** install the [mcp] extra; run `graphify serve`/`--mcp`; edit settings.json beyond the Graphify hook line; claim done without the DoD behavioral test
- **recorded_at:** 2026-07-25

## Tier-Routing Declaration
- Step 1 (verify-surface), Step 3 (behavior-validate), Step 4 (staleness-guard): **Opus/Haiku** (judgment + evidence — trust-surface enumeration, behavioral assertion).
- Step 2 (install), Step 6 (revert-ready doc/test): **mechanical** (fixed commands, no judgment).
- This node's authoring: **Opus** with a stated §3.0 exception (content fully specified + ratified + in-context; formatting a known spec, routing overhead > the work; Opus owns the soundness verdict).

## Executive Summary
Adopt Graphify (external, open-source, read-only) as a search-token-saving layer only — it maps STRUCTURE, not CISEM governance state, so it is not the self-describing fix. Install local-only (never MCP, never a server), verify the pinned artifact's actual surface before installing (RI-0038), behavior-validate on a fresh boot, confirm the built-in regenerate-on-commit hook keeps the graph fresh, trial before sealing, and keep it fully revertible. All governed-file exposure (`.claude/settings.json`) is scope-bounded to the Graphify hook and authorized by THIS node.

## Existing-First (I19 — searched before adopting)
- Searched: no in-repo structural-graph/search-index tool exists (grep of dna/checks, .claude/hooks — none). Graphify is the external candidate.
- Governance-state generation (wired/bodiless/parked-TTL) is NOT covered by Graphify and remains a SEPARATE CISEM item (the self-describing manifest) — this node does not fork or claim it.
- RI-0038 requires the trust-surface be verified against the pinned install artifact, not the described snapshot — folded in as Step 1's gate.

## Anti-Scatter Ordering (significance vs goal)
1 (central): Step 1 verify-surface — the RI-0038 gate; nothing proceeds without it. 2: install local-only. 3: behavior-validate (presence≠behavior). 4: staleness-guard. 5: trial + measure. 6: revert-ready. Peripheral (parked, not in scope): the governance-state generator; any MCP/server capability.

## The Rule (executable steps)
1. **VERIFY-SURFACE (read-only, pre-install — RI-0038):** pin the exact version; enumerate the installed artifact's ACTUAL surface (only a PreToolUse hook? network egress? does the `[mcp]` extra stay uninstalled? does `graphify hook install` really regenerate on commit?) from the artifact, not docs. **GATE:** proceed only if surface == {local PreToolUse hook + local git regen hook, no MCP, no network}.
2. **INSTALL local-only:** `uv tool install graphifyy` → `graphify install` → `graphify hook install`. NEVER the `[mcp]` extra, NEVER `graphify serve`/`--mcp`.
3. **BEHAVIOR-VALIDATE (fresh boot):** new session; assert (a) boots clean, (b) grep/find redirected to CORRECT locations, (c) no MCP process/entry, (d) a test commit fires the regen hook + refreshes graph.json.
4. **STALENESS-GUARD:** change a file → commit → confirm graph.json reflects it; if not → REVERT.
5. **TRIAL (Principle 15):** run a defined window on real work; measure token savings + any stale-result incidents; log to learning-registry; only then decide keep-permanently.
6. **REVERT-READY:** document + test the clean uninstall (remove hooks + settings entry + graphify-out/); confirm it restores pre-install state.

## Core Seeds (immutable — the lower tier / build executes verbatim)
- [[CORE-SEED | MUST: NEVER install the `[mcp]` extra; never run `graphify serve`/`--mcp` — local hook only | WHY: Governor no-MCP decree 2026-07-25 + GI-51 clean-posture | VERIFY: no MCP process; no MCP entry in settings.json | APPLIES_TO: every step of this adoption]]
- [[CORE-SEED | MUST: the `.claude/settings.json` edit is authorized ONLY for the Graphify hook line, within this node's scope | WHY: RI-0036 governed-edit scope | VERIFY: `git diff .claude/settings.json` shows ONLY the Graphify hook | APPLIES_TO: Step 2]]
- [[CORE-SEED | MUST: REVERT-ON-ANY-FAILURE — if fresh-boot validation fails OR any MCP/network surface appears OR search returns stale/wrong results → clean-uninstall + revert immediately | WHY: Principle 18A revert-not-repair | VERIFY: post-revert, settings.json == pre-install | APPLIES_TO: Steps 3-6]]

## Tags + Statuses (nodes this plan touches)
This plan creates NO new governed CISEM nodes (it installs an external tool + edits infra). Artifacts touched: `.claude/settings.json` (modified, infra), local git hooks (added, infra), `graphify-out/` (generated, non-governed, add to .gitignore). Status of each set at build; none carry a CISEM node ID.

## Per-File Alignment Table
| File | naming-registry | schema placement | tag | status |
|---|---|---|---|---|
| dna/planning/CISEM-ARCH-00422-graphify-adoption.md | ARCH-00422 (registered) | T-SYS / planning-domain | planning-domain | RATIFIED |
| .claude/settings.json | n/a (infra) | CAL layer (ARCH-00390) | infra | modified-at-build (scope-bounded) |
| .git/hooks (graphify regen) | n/a (infra) | CAL layer | infra | added-at-build |
| graphify-out/ | n/a | non-governed generated | generated | gitignored-at-build |

## What DOES change
`.claude/settings.json` (Graphify PreToolUse hook line only) · local git hooks (post-commit/checkout regen via `graphify hook install`) · new `graphify-out/` dir (gitignored).

## What DOES NOT change
No source files · no governed CISEM nodes · no MCP surface / no server · no CISEM mechanism logic · no network egress. The governance-state generator is explicitly out of scope.

## Definition-of-Done
Reference: `dna/checks/definition-of-done.md`. This node's build DoD: fresh-boot behavior test passes (correct search redirect + no MCP process/entry + regen hook fires on a test commit); `settings.json` diff shows ONLY the Graphify hook; clean-uninstall verified restores pre-install state; trial metrics logged to learning-registry. Not "done" until the behavioral test passes (presence≠behavior).

## Propagation Declaration
No rule/nuance change to propagate (this is a tool adoption, not a governance-rule change). If the trial seals adoption, the learning-registry trial entry + a one-line note in the operating nuances is the only surface update; no generated views regenerate from this.

## Dependencies
- **blocks-on:** GI-68 dual-review (pre-build gate); Step 1 verify-surface gate (RI-0038) must pass before Step 2.
- **unblocks-for:** reduced search/context-restoration token cost (RI-0037); pairs with (does not replace) the separate governance-state generator.

## Self-compliance (against ARCH-00230)
Tag + Status present · Core Seeds inline + verbatim · Pocket Declaration present · Tier-Routing declared · Existing-First stated · DoD referenced · Path Rejection present · wisdom cited (GI-CONSIDERATION) · size < 200 lines. Governed-file edit (settings.json) is authorized by this ratified node + scope-bounded (RI-0036), not freestyle.

## Path Rejection Declaration
- ✗ Rejected: fast-lane install (Brain's initial triage) — it edits a governed file + hooks the trusted CAL path + is external-tool adoption → full-process required (RI-0038/RI-0036); Brain concurred.
- ✗ Rejected: installing the `[mcp]` component — Governor no-MCP decree + GI-51.
- ✗ Rejected: treating Graphify as the self-describing/knowledge-graph fix — it maps structure, not governance state (Brain-confirmed); that remains a separate CISEM generator.
- ✗ Rejected: sealing after one install — Principle 15 requires a trial window before permanence.

## Opus Soundness Verdict (Stage-1, [RATIFY-GATE])
**SOUND.** Goal measurable; scope + boundaries explicit; every governed-file exposure scope-bounded + authorized by this node (RI-0036); the RI-0038 verify-surface gate precedes install; no-MCP enforced by Core Seed + Governor decree + GI-51; fully revertible (Principle 18A); trial-gated (Principle 15); DoD is behavioral (presence≠behavior). Residual risk (silent staleness) is mitigated by the built-in regen hook + Step 4 + revert-on-stale, and disclosed. — Opus (cisem-opus-pe), 2026-07-25.

## Change log
- v1.0 — 2026-07-25 (Opus): created as the formalization of the Governor-ratified (2026-07-25) + Brain-concurred Graphify adoption plan; status RATIFIED; GI-68 dual-review is the pre-build gate; step-1 read-only verify gates the build.
