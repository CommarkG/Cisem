# Session Harvest — 2026-07-26 EVENING (the Design→Build seam session)
**tags:** [learning-registry, harvest, session, full-fidelity]
**Status:** COMPLETE

Full-fidelity harvest (A10) of the marathon design-and-ratify session. The RIs are the SSOT in
`dna/learning-registry/root-insights.yaml` (RI-0037..0052) — this file INDEXES + narrates them and captures the
intents / problems / insights that don't live as an RI. Signal-not-noise (Principle 19): the fruits verbatim-in-essence,
none of the tool/commit noise. Resume anchor: `CISEM-WITNESS-00003` COMPACT STATE 2026-07-26 EVENING block.

---

## 1. THE GOVERNOR'S INTENTS (the drivers — verbatim-in-essence)
- **Research must become CISEM's, not AI freestyle** — a governed corespine (universal core + branches + a PE-supported orchestrator), with gradual SETS/LOOPS, cross-model blind-spot detection, versioning, and periodic pattern-analysis feeding the Weekly Engine.
- **Autonomy/workflow activation must be manually controlled + ratified** — "it can swallow token!!" — nothing that runs on its own and spends real time/tokens auto-activates without the three-way gate + built-in restraints.
- **External things purified THEN imported, and behind the Wall** — "the wall is young, check it several times until stable." The Wall extends to workflow BEHAVIOR, not just content.
- **Enhance the agents by hardcoding the checks they must run + how** — the cross-improvement loop, made real.
- **"Not enough to build"** — every build claim states all four: build + hardwired + mechanically-enforced + tested-by-code.
- **Automate optimal Haiku/Sonnet usage** — make the tier-routing mechanical, not a rule Opus must remember.
- **Enhance "No Rush"** — connect park + weekly analysis (per-topic / per-group / all-together) → pattern recognition → preservation + prevention.
- **Research → Haiku/Sonnet; Opus reviews + fills only the gaps.**
- **Sustained work, batched reports, no per-item pinging** — but stop and checkpoint at single-point-of-failure edits.
- **"Present prevention" on every failure class** — turn each stumble into a permanent, mechanically-routed guard.
- **The Design→Build seam** — ratify the plans, then open a fresh tab for the build phase.

## 2. PROBLEMS ENCOUNTERED (+ resolution)
- **Subagent poll-loop** ("looks like a loop") — a subagent backgrounded a slow check then re-read its output waiting. → RI-0042; run checks synchronously, never poll.
- **Presented for Governor ratification before Brain consensus** — collapsed the ratified process. → RI-0043 consensus-gate; demonstrated the fix by not doing it again.
- **Premature design-elaboration on a placeholder** ("are you freestyling again?") — used a "create a placeholder" directive as license to build design content ahead of consensus. → RI-0045 capture≠design-elaboration.
- **Status enforcement was only half-real** — creation-gate is WARN, presence-not-validity, misses edits. → RI-0046.
- **Otosan MCP injection (5+ times)** — a connected non-CISEM MCP server bled its persona/instructions into context via the system/tool channel; every tier correctly disregarded it. → RI-0050; ops: disconnect non-CISEM MCP from CISEM tabs.
- **Commit blocker** — plan-audit too slow (RI-0041b), foreground commits time out. → resolved with **background commits (gate runs to completion), never `--no-verify`** (Brain's call, correct).
- **PART08 gate correctly blocked capture-first placeholders** — the CS-RESEARCH placeholders lack an `authorizing_plan:` → held out honestly (a gate-gap: PART08 doesn't recognize the IBD/capture-first A4 exemption — routed).
- **My PART08 "may not be wired" was a FALSE NEGATIVE** — the write-time hook IS wired (`settings.json`); I doubted it from a stale `.settings.js` doc name. → RI-0051 verify-actual-mechanism-not-doc-name (presence≠behavior, inverted).
- **[RATIFY-GATE] false-positives** on ARCH-00423/00425 whose GI-68 verdicts ARE logged. → RI-0052 check-finding-is-a-claim-to-verify.
- **My RI-0041b fix was BUGGY** — an anchored pre-filter replacing an unanchored check would have made the gate false-flag registered nodes. Caught by test-first-in-isolation before the live gate was ever touched; also I1 isn't even the dominant cost. → RI-0041b correction; the checkpoint was vindicated.
- **My CS-RESEARCH trim dispatch had an arithmetic mis-spec** — Sonnet caught it via the freshly-hardcoded no-collateral-deletion check and refused to silently delete an item. (Cross-improvement working in real time.)
- **Git-race** — two concurrent background commits shared the index; the second's `git add` got swept into the first's commit (benign, WITNESS still landed). → §1.7 lesson: **serialize background commits, never concurrent** (RI-0053 candidate).
- **Heavy token spend across the session** — surfaced honestly per the restraint policy's per-run reporting.

## 3. SOLUTIONS BUILT / RATIFIED
- **3 plans RATIFIED** (Opus-SOUND + Haiku Independent-Verifier PASSED + Brain-concur + Governor):
  - **ARCH-00426 WEE** — 5-layer Weekly Evolution Engine (scan→queue→batch→propagation-gate→auto-trigger); L5 OFF.
  - **ARCH-00427 Orchestration/tier-automation** — rubric-in-instructions + versioned schemas + keep-lean + executor-flag (D4 = surfacing-not-enforcement, accepted).
  - **ARCH-00428 Three-guards** — loop-stopper + consensus-gate scanner + injection-scan-extend, each to the 4-part build standard.
- **The Restraint Policy RATIFIED (RI-0048)** — manual-activation-by-default; auto only via Brain+CISEM consensus + Governor ratification + hard ceilings + gate-scoped-to-risky-action + cheapest-model + per-run-report + single-writer + trial-before-sealing + **the outer dumb wall-clock backstop** (guard-of-the-guard, Brain).
- **Agent hardening BUILT** — all four agents carry MANDATORY STANDING CHECKS (the session's RIs as pre-work checks, reference-not-duplicate); closes Principle-17 propagation-leg-3. Already caught two of Opus's own errors.
- **Verification-by-code pass** — PART02/08/12/13/01 + Graphify confirmed wired+running; two honest self-corrections.
- **CS-RESEARCH-001 trim** — Brain-consensus applied (9-item core, cross-claim-conflict rule, pull-live-not-baked, single canonical file).
- **The A12 External Wall** — established as a live axiom earlier in the session.

## 4. INSIGHTS (the meta-learnings)
- **The checkpoint on the critical gate was correct** — a "confident, ready" design was buggy; test-first + a human checkpoint caught it before harm. Confidence is not verification.
- **The agent hardening paid off in real time** — the cross-improvement loop isn't theoretical; hardcoded checks caught live errors within the same session.
- **Some things can't be hard-enforced, and honesty about the ceiling beats a fake gate** — D4: since Opus is the sole committer (§1.7), git can't attribute authorship, so tier-routing is surfacing-not-enforcement. Over-claiming a mechanism is the plausibility-completion CISEM exists to kill.
- **Self-certification is an anti-pattern** (Brain) — an exemption/mechanism that grades its own compliance is not a guard; tie it to an objective signal.
- **A guard needs a dumber guard above it** — the outer wall-clock backstop, independent of the smart inner checks.
- **A check's finding is a claim to verify, not truth** — checks false-positive; verify against the artifact.
- **A hoist must preserve match semantics** — anchored-vs-unanchored, quoted-vs-unquoted; the common case is not the whole class.
- **The Opus↔Brain↔Governor consensus loop worked** — Brain's independent cross-checks caught real gaps (the edit-gating list-drop, the D4 ceiling, the no-`--no-verify` call, the CS-RESEARCH over-build); the process earned its keep.

## 5. PREVENTIONS (SSOT: root-insights.yaml — indexed here)
RI-0042 no-background-poll · RI-0043 consensus-before-Governor-ratify-ask · RI-0044 research→Haiku/Sonnet ·
RI-0045 capture≠design-elaboration · RI-0046 status-enforcement-gap (→BLOCK+validity+edit-coverage) ·
**RI-0047 the 4-part build standard** · **RI-0048 autonomy-restraint** (+ outer backstop) · RI-0049 wall-covers-behavior ·
RI-0050 session/tool-channel injection · RI-0051 verify-actual-mechanism-not-doc-name · RI-0052 check-finding-is-a-claim ·
RI-0041b correction (buggy hoist; I1 not the dominant cost) · **RI-0053 candidate: serialize background commits (§1.7)**.

## 6. THE PROCESS THAT WORKED (carry into the build phase)
goal → Opus↔Brain consensus → present plain → Governor ratifies → build (tier-routed: Haiku gathers/researches ·
Sonnet builds · Opus judges) → GI-68 dual-review + Independent-Verifier before RATIFIED. Commit via background
(gate-to-completion), serialized, never `--no-verify`. Checkpoint single-point-of-failure edits. Every build states
its four parts + a planted test. Report token consumption. Nothing autonomous auto-activates without the three-way gate.
