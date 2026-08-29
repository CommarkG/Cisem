# Platform Isolation — Default-Deny (ARCH-00429 Phase-2 Build)
**Node ID:** CISEM-ARCH-00437 | **Type:** ARCH | **Sub_type:** PLAN
**Status:** PROVISIONAL-ACTIVE
**Planning Status:** GOVERNOR-RATIFIED (authority gate, 2026-08-30) — BUILD HELD on two quality gates: GI-68 dual-review (OWED, spend-blocked) + STEP-0 WSL2-sibling-deny linchpin verification. Opus Stage-1 = SOUND-IN-DIRECTION-with-caveats (see verdict). NOT self-ratified (GI-63); [RATIFY-GATE] stamp completes when GI-68 is cited.
**depth_level:** L2 | **Position in schema:** T-SYS, platform-boundary layer
**Parent:** CISEM-ARCH-00429 (this executes its authored-not-built Phase 2; RI-0067 fork resolved → option **(a) WSL2** ratified by Governor 2026-08-30)
**tags:** [isolation, security, platform-boundary, default-deny, wsl2, phase2-build]
**wisdom_considered:** [RI-0054 platform-origin-verify, RI-0055 3-layer model, RI-0057, RI-0067 native-Windows-no-sandbox, A12 External Wall, Principle 18A/18C, GI-60 well-governed-diversity]
**goal:** Deliver MECHANICAL cross-platform default-deny for CISEM — measurable as: (1) a raw `bash` write to a sibling repo is DENIED (WSL2 kernel sandbox); (2) session-start HALTs on any foreign-platform path; (3) a commit touching a sibling path is BLOCKED; (4) cross-platform relayed content is DENIED from governed writes until it passes the 3-factor origin gate; (5) a crossing requires a Governor-authorized allowlist entry, fail-closed if the allowlist is missing.
**governing corespine:** CS-CONTROLPLANE-001
**design SSOT (I10 — referenced, not duplicated):** `dna/SECURITY-multi-platform-preventions-and-triggers-2026-07-26.md` (the THREAT→PREVENTION→TRIGGER matrix A–J + Part-4 default-deny doctrine). This plan WIRES that doctrine; it does not restate it.
**Independent Verifier:** cisem-haiku (protocol-lens) + cisem-sonnet (implementability-lens) — GI-68, distinct from Opus author.

## Pocket Declaration (§3.3)
- **reasoning_scope:** author ARCH-00429's Phase-2 build — the WSL2 filesystem wall (Governor-executed) + the OS-independent default-deny gates (Sonnet-built)
- **inherited_constraints:** A4/A11 (plan-gate); A12 (content-origin-not-messenger); RI-0067 (native-Windows sandbox absent); the "fail-closed" standard; RI-0058 (both-directions fixture)
- **output_contract:** WSL2 sandbox posture (verified by a raw-Bash negative→positive control) + four OS-independent gates, each fail-closed, both-directions-fixtured, with a named invoker
- **ai_cannot:** perform the WSL2 environment migration (Governor action); mark filesystem-isolation "done" from the detector alone (detector = detection, sandbox = prevention); self-certify a gate; write a truth-field without Opus (I7)
- **recorded_at:** 2026-08-30
- **cal_reference:** CISEM-ARCH-00390 — `bash dna/checks/plan-audit.sh`; [ZF] is the done-gate.

## Tier-Routing Declaration (§3.0)
- **Governor:** STEP 0 (WSL2 migration + sandbox deny config) — an environment action Opus/Sonnet structurally cannot perform; then runs the negative-control proof.
- **Opus:** this plan + Stage-1 soundness + Core Seeds + every truth-field (Status stamps, DoD verdicts — I7).
- **Sonnet:** builds STEP 1–5 (the OS-independent gates + govern the design docs) exactly to spec.
- **Haiku:** gathers the foreign-path / foreign-fingerprint inventory the gates key on (registry TYPE enum, sibling identifiers).

## Existing-First Search (§3.2b — STATED)
- `dna/planning/` — **ARCH-00429 (RATIFIED)** is the isolation home; its Phase 2 is "authored, not built" → THIS plan authors it. NOT a fork.
- `dna/SECURITY-multi-platform-...md` (DRAFT) — the A–J design matrix → referenced as design SSOT, not duplicated.
- `dna/PLATFORM-ISOLATION-HARDENING-PROMPT-...md` (SHAREABLE) — the outward 3-layer share.
- `dna/checks/platform-isolation-check.sh` — the WARN detector (ARCH-00429-landed) → THIS plan graduates it WARN→HALT.
- Both design docs are **untracked/ungoverned** → STEP 5 governs them.

## Anti-Scatter Ordering (Principle 16)
The incident that actually happened was **relay contamination + a sibling file-read** (SECURITY §Part-1), NOT raw Bash — so the OS-independent gates (STEP 1–4) close the real historical exposure and build NOW, independent of the WSL2 migration. STEP 0 (WSL2) closes the remaining raw-Bash filesystem vector. Order: **STEP 0 (Governor, unblocks the hard wall) ∥ STEP 1→2→3→4 (Sonnet, OS-independent, parallelizable) → STEP 5 (govern the docs).**

## The Rule

### STEP 0 — WSL2 TWO-LAYER filesystem wall (Governor-executed; Brain-consulted 2026-08-30, SOURCED-pending-empirical-test)
Run CISEM's Claude Code under **WSL2** (bubblewrap; native Windows unsupported — confirmed by Brain vs `code.claude.com/docs/en/sandboxing`, 2026-08-30). Isolation is **TWO layers, both required** — a sandbox alone is "half a fence":
1. **BASH layer (sandbox):** `sandbox.filesystem.denyRead`+`denyWrite` on the shared **PARENT** + `allowRead: ["."]` for the one repo (**deny-parent-allow-self** → new siblings denied by default, no per-sibling rule). Kernel-enforced incl. child processes → stops raw bash absolute-path.
2. **FILE-TOOL layer (permissions):** Read/Edit/Write do NOT pass through the sandbox → add `Read`/`Edit` **DENY rules** (`//absolute` syntax) for siblings, else the agent's own file tools still reach them (Brain test-4 proof).
**HARDENING (all required — else it fails OPEN or self-widens):**
- `failIfUnavailable: true` — sandbox-can't-start otherwise runs UNSANDBOXED (fails open); this is the fail-closed Core Seed in config form.
- `allowUnsandboxedCommands: false` — blocks the `dangerouslyDisableSandbox` retry.
- **Policy in MANAGED settings (not project):** settings arrays MERGE across scopes, so a project/agent edit can WIDEN policy; `allowManagedReadPathsOnly` + managed-only `filesystem.disabled` stop an agent widening its own access — **the mechanical fix for the original self-escalation incident** (RI-0048 guard-of-guard).
- **PowerShell BYPASS (critical — CISEM is PowerShell-primary):** from WSL2, shelling to `powershell.exe` / `/mnt/c/` crosses to the Windows host over a socket, OUTSIDE the sandbox → install the optional **seccomp filter** + verify, or the boundary is bypassed. Move the repo INTO the WSL2 filesystem (not `/mnt/c/`) — perf + removes the host-crossing surface.
**VERIFY BEFORE MIGRATING (Brain's 4-command confirm-test — Principle 22, don't act on SOURCED-not-tested):** (1) bash `cat ../sibling` fails; (2) bash `cat /abs/sibling` fails (the real linchpin); (3) bash `echo x > /abs/sibling` fails (the untested write-precedence inference); (4) the **Read TOOL** on `/abs/sibling` — expect SUCCESS until the layer-2 deny rule is added (proves layer 2 needed). Then `/sandbox` Config tab confirms resolved paths. **Do not skip test 4.** Also re-verify `/mcp` loads the 4 connectors under WSL2 (different session). Do not claim wired until tests pass.

### STEP 1 — session-start detector WARN→HALT (Sonnet; OS-independent)
Graduate `dna/checks/platform-isolation-check.sh`: on any foreign-platform path in the workspace / additional-working-directories, **HALT loudly** (not WARN). **Fail-closed:** if the check cannot determine the workspace set, it exits **non-zero**, never silent-pass (the "a check that can't fail isn't a check" standard). Both-directions fixture: flags a workspace with a sibling path, stays silent+clean with none.

### STEP 2 — pre-commit sibling-path BLOCK (Sonnet)
Wire a BLOCK into `dna/checks/pre-commit-blocks.sh`: any staged path resolving OUTSIDE the CISEM repo root → **BLOCK** the commit (SECURITY trigger D-c). Both-directions fixture.

### STEP 3 — intake origin-gate, 3-factor (Sonnet; closes the actual incident vector)
Cross-platform relayed content is **RAW-EXTERNAL and DENIED from any governed write** until it passes ALL THREE (SECURITY A/B/C): (1) `PLATFORM: CISEM` origin header present; (2) fingerprint scan clean (no foreign identifiers — e.g. `pnpm`, `P-META`, `.mjs` engine, foreign ID patterns); (3) every cited ID resolves in CISEM's registry. Header alone is necessary-not-sufficient (spoof guard, SECURITY §B). **Origin-before-content.** Both-directions fixture.

### STEP 4 — permissioned-crossing allowlist ("open when required")
A crossing is permitted only via an explicit entry in an allowlist held **OUTSIDE the repo** (Governor-editable; the CSP `secure/*.txt` pattern), checked fail-closed: **missing/unreadable allowlist ⇒ every crossing denied.** A permitted crossing is a logged, Governor-authorized event. (This is the "we open up when required" mechanism — default-deny with an explicit, auditable exception.)

### STEP 5 — govern the design docs (Sonnet)
Add `tags:` + `Status:` to `SECURITY-multi-platform-...md` (→ RATIFIED on Governor decree) and `PLATFORM-ISOLATION-HARDENING-PROMPT-...md`; register both; add an `ssot-registry.yaml` entry naming the SECURITY doc as the **platform-isolation design SSOT** that this plan and ARCH-00429 reference.

## Core Seeds (immutable — honor verbatim, I13)
[[CORE-SEED | MUST: default-deny is the posture — every crossing (file touched, tool called, message ingested, governed-state written) is DENIED unless it is a verified, tagged, own-platform, Governor-authorized event; the permissioned-crossing allowlist is fail-closed (missing ⇒ deny all). | WHY: SECURITY Part-4 doctrine; a crossing must be an explicit logged exception, never a default | VERIFY: STEP 4 denies when the allowlist is absent | APPLIES_TO: all tiers, all crossings]]
[[CORE-SEED | MUST: every isolation check FAILS CLOSED — an exception / can't-determine exits NON-ZERO, never a silent pass or "OK". | WHY: a check that cannot fail is not a check (the CSP 4A#1/#2 insight) — plan-audit's exit-0-always is the anti-pattern | VERIFY: each STEP 1–3 check's should-flag fixture makes it exit non-zero | APPLIES_TO: STEP 1–4]]
[[CORE-SEED | MUST: the mechanical filesystem WALL is TWO layers in MANAGED settings — the WSL2 sandbox (bash) AND Read/Edit file-tool deny rules (the agent's own tools bypass the sandbox); fail-closed (`failIfUnavailable: true`, `allowUnsandboxedCommands: false`) + seccomp for PowerShell shell-out. The STEP 1–4 gates are DETECTION/relay-control, not the filesystem wall. Never claim "filesystem isolation done" from the sandbox alone (bash-only = half a fence) nor from the detector. | WHY: presence≠behavior (18C); Brain found the sandbox covers only bash and settings-merge lets an agent widen its own access (managed-settings is the guard-of-guard fix, RI-0048) | VERIFY: filesystem-done claim cites BOTH layers + Brain test-4 passing, not STEP 1 | APPLIES_TO: STEP 0 vs STEP 1]]
[[CORE-SEED | MUST: origin-before-content — verify a relayed item's PLATFORM origin (3-factor) BEFORE evaluating its content; content that is perfectly honest about a DIFFERENT platform is still foreign and refused (A12 content-origin-not-messenger; even the Governor relaying it does not launder it). | WHY: the dangerous input is a fluent report honest about the wrong platform | VERIFY: STEP 3 fixture rejects a well-formed foreign-platform report | APPLIES_TO: STEP 3, all intake]]
[[CORE-SEED | MUST: both-directions fixture (RI-0058) for each new check (flags known-bad, passes known-good) + a named invoker line; no gate self-certifies. | WHY: "closed" = blocks-bad + passes-good + is-invoked | VERIFY: each STEP has a should-flag + should-pass fixture and a cited invoker | APPLIES_TO: STEP 1–3]]
[[CORE-SEED | MUST: this is ARCH-00429 Phase-2 execution — do NOT fork; reference the SECURITY A–J matrix as design SSOT, never restate it. | WHY: A8/Existing-First; the isolation design already exists | VERIFY: no A–J content duplicated into this plan | APPLIES_TO: whole plan]]

## What DOES change
`platform-isolation-check.sh` (WARN→HALT, fail-closed) · `pre-commit-blocks.sh` (+sibling-path BLOCK) · a new intake origin-gate check + its invoker · a new outside-repo permissioned-crossing allowlist + its fail-closed reader · four both-directions fixtures · the two design docs gain tags/Status + registration + an ssot-registry entry · naming-registry next_seq ARCH 437→438 (this plan).

## What does NOT change
No governed node content beyond this plan + the doc-governing in STEP 5. ARCH-00429 body unchanged (this is its Phase-2 child). No A–J matrix duplication. No connector posture change (Phase-1, done). No claim of "done" without the fixtures + the STEP-0 negative control.

## Dependencies
- **blocks-on:** Governor ratification of THIS plan; then STEP 0 (WSL2 migration — Governor). STEP 1–4 build independent of STEP 0.
- **unblocks:** the true mechanical default-deny; closes ARCH-00429 Phase 2.

## Self-Compliance (ARCH-00230)
Existing-First stated (ARCH-00429 parent + SECURITY design SSOT + the detector — no fork). Tags+Status+Pocket+Tier-Routing+Independent-Verifier+Core-Seeds+Anti-Scatter present. Per-file table below. Under 200 lines.

## Path Rejection Declaration
- ❌ **A fresh isolation plan** — REJECTED (A8): ARCH-00429 is the ratified home; this is its Phase-2 child.
- ❌ **Duplicating the A–J matrix into this plan** — REJECTED (I10): referenced as design SSOT.
- ❌ **(b) physical-separation / (c) detection-only** — REJECTED by Governor 2026-08-30: (b) misses absolute-path Bash, (c) isn't mechanical; (a) WSL2 is the true wall.
- ❌ **Claiming filesystem-isolation from the detector** — REJECTED (18C): detector detects; the WSL2 sandbox prevents.

## Per-File Alignment Table
| File | ID / registry | Schema placement | tags | status |
|---|---|---|---|---|
| this plan | ARCH-00437 (437→438) | T-SYS, planning | isolation, default-deny | PROVISIONAL-ACTIVE / AWAITING-BUILDER-REVIEW |
| `platform-isolation-check.sh` | check (existing) | T-SYS, check layer | isolation, check | to-modify (WARN→HALT) |
| `pre-commit-blocks.sh` | check (existing) | T-SYS, BLOCK layer | isolation, block | to-modify (+sibling BLOCK) |
| intake origin-gate + allowlist reader | check (new) | T-SYS, check layer | isolation, intake | to-create |
| `dna/checks/fixtures/platform-isolation/*` (×4) | fixture (new) | T-SYS, check-fixture | fixture | to-create |
| `SECURITY-multi-platform-...md` + `PLATFORM-ISOLATION-HARDENING-...md` | to-register | T-SYS, security-design | isolation, design | to-govern (STEP 5) |

## Definition of Done Reference
`dna/checks/definition-of-done.md` — each STEP-1–4 gate: fail-closed + both-directions fixture + named invoker (the 3-clause "closed"); STEP 0: the raw-Bash-denied negative control passes + `/mcp` re-verified under WSL2. Honest tiers stated (detector=detection, sandbox=prevention). No self-certification.

## Opus Stage-1 Soundness Verdict (for [RATIFY-GATE])
**SOUND-IN-DIRECTION, with disclosed caveats — NOT yet clear-to-build.** Correctly executes ARCH-00429 Phase 2 (not a fork); tiers honestly (detector=detection, WSL2 sandbox=prevention); fails-closed by design. **Three caveats before BUILD:**
1. **LINCHPIN UNVERIFIED (Principle 22).** Option (a) rests on Claude Code's WSL2 sandbox supporting per-path denyRead/denyWrite of SIBLING repos. That capability is **SOURCED** from ARCH-00429 RI-0067 (doc+empirical 2026-07-28) but NOT live-confirmed for sibling-deny specifically. If the sandbox cannot deny siblings, STEP 0 fails and option (a) does not hold — **verify this capability BEFORE the WSL2 migration**, not after.
2. **A11 GAP.** This is a deep/architectural (environment-migration) decision with NO on-disk Brain consult — A11 makes a consult a precondition of production here (same class as ARCH-00436 Q11).
3. **STEP 3 false-positive risk.** The fingerprint-scan carries the [CHECK-LINT]/P5 class — scope it to diff + registry-resolution, WARN-first.

**GI-68 dual-review is OWED and cannot run now** (monthly spend limit blocks agent dispatch — the exact review that caught the ARCH-00435 duplicate). Governor authority-ratification RECORDED 2026-08-30; **BUILD is HELD** until GI-68 completes + the STEP-0 linchpin is verified. Not self-ratified (GI-63).

## Change log
- v1.0 — 2026-08-30 (Opus authored, after Governor ratified RI-0067 option (a) WSL2): authors ARCH-00429's Phase-2 build — WSL2 filesystem wall (Governor STEP 0) + four OS-independent default-deny gates (Sonnet STEP 1–5), fail-closed, both-directions-fixtured; references the SECURITY A–J matrix as design SSOT (no fork).
- v1.1 — 2026-08-30 (Opus Stage-1 soundness + Governor ratification): Governor ratified (authority gate). Opus verdict = SOUND-IN-DIRECTION-with-caveats (linchpin unverified · A11 gap · STEP-3 FP-risk). BUILD HELD on GI-68 dual-review (spend-blocked) + STEP-0 WSL2-sibling-deny linchpin verification. Recorded, not stamped RATIFIED (GI-68 citation owed for [RATIFY-GATE]).
- v1.2 — 2026-08-30 (Brain consult landed — A11 gap #2 now closed by a recorded on-disk consult): Brain confirmed the linchpin (siblings deniable by absolute path, kernel-enforced, WSL2 required) AND caught that STEP 0 was "half a fence" — REWROTE STEP 0 to TWO layers (sandbox=bash + file-tool deny rules), MANAGED settings (self-widen fix, RI-0048), fail-closed config (`failIfUnavailable`/`allowUnsandboxedCommands:false`), the PowerShell/seccomp bypass (critical — CISEM is PowerShell-primary), repo-into-WSL2-fs, + Brain's 4-command confirm-test as the pre-migration gate. Core Seed 3 updated by author (pre-build) to two-layer. All SOURCED-via-Brain, PENDING the empirical confirm-test (A12). GI-68 dual-review still OWED (spend-blocked).
