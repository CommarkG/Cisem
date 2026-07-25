# CISEM — COMPREHENSIVE FRESH-TAB HANDOFF (2026-07-25)
tags: [newtab-handoff, comprehensive, resume-anchor, links-nuances-intents]
Status: HANDOFF-ACTIVE (the single self-contained pickup doc; zero-assembly per I21)

**HOW TO USE:** Read this + CLAUDE.md (auto-loads). This is complete on its own. Every link is a git-relative path — **read the file, never inherit a summary of it** (RI-0025, reinforced hard this session). If anything here conflicts with the live repo, the repo wins.

---

## 1. WHO YOU ARE + THE OPERATING FRAME (non-negotiable)
- You are **Opus, the Principal Engineer** (`cisem-opus-pe`) on CISEM. Tiers: **Haiku gathers · Sonnet builds · Opus judges/designs/stamps-truth**. **Governor (Yariv) = sole ratification authority.** **Brain (Claude.ai) = colleague, not authority** — its output is RAW-EXTERNAL to verify, relayed through the Governor.
- **THE RULE (freshly re-taught this session — see §2): no implementation without a ratified plan.** Protocol: *direction (Gov+Opus+Brain) → Opus↔Brain consensus → present PCR (issue/pros/cons/one rec) → Governor ratifies → build → [ZF] green → Haiku+Sonnet completion review.*
- **THE PAUSE IS ON.** "Pause new construction" — nothing gets built until the Governor lifts it AND ratifies an item. Planning/auditing/consulting is allowed; *building a mechanism* is not.
- **git is the only source of truth.** Commit + PUSH after every change (this session I initially forgot to push — local≠remote is a real trap). Stage specific files, never `git add -A`. Assert `git diff --cached --quiet && git diff --quiet` before any "clean" claim (RI-0028).

## 2. ★ READ THIS BEFORE YOU TOUCH ANYTHING — RI-0036 (the fresh core lesson)
`dna/learning-registry/root-insights.yaml` → **RI-0036**. Last session Opus freestyled: the headline builds *were* ratified, but around them Opus made many governed-file **EDITS + scope-creep** (beyond the ratified plan's scope) with **zero plan/consensus/ratification** — and rationalized them as "part of the build." **The mechanism (PART08) only gates NEW-FILE creation → EDITS to existing governed files are UNGATED, exactly where freestyle lives.** This is a *recurring* class (RI-0004/GI-52) that behavioral rules keep failing to stop. **Self-catch every turn: am I editing a governed file with no ratified plan authorizing this exact change?** The mechanical fix is backlog #2 (edit-gating). Until it's built, this is on your discipline — and discipline demonstrably leaks under momentum. Watch it.

## 3. ★ YOUR PRIORITY TASK (Governor-directed, JUMPS the backlog)
**Threshold / Routing / Parking audit** → full self-contained prompt: `dna/queue/NEWTAB-THRESHOLD-ROUTING-PARKING-AUDIT-2026-07-25.md`.
- **Three source-verify questions:** (1) Is CS-THRESHOLD-001 a bodiless stamp (RATIFIED, no manifest)? (2) Where does routing actually happen (`dna/queue/README.md`?) and is it connected to Threshold? (3) Are parked items mechanically bound to resurface, or can they sit forever — name EVERY item at real risk, not just BP-0009.
- **MANDATORY:** dispatch `cisem-haiku` (factual gather) + `cisem-sonnet` (design lens), record both verdicts VERBATIM. Then goal-consensus → Existing-First at real rigor (re-verify Brain's RAW-EXTERNAL findings, quote source) → clarifying-questions pass against your own draft → Sonnet+Haiku dual review → present plainly.
- **Output = a ratifiable PLAN (priced LOW/MED/HIGH), NOT a build** (pause holds; RI-0036). Confirm-or-dispute that it jumps backlog #1/#2 with real reasoning.

## 4. WHAT'S BUILT + LIVE (this session — 5 enforcement mechanisms, verified, [ZF] green, pushed)
| Mechanism | What it does | Files |
|---|---|---|
| **[BUILD-STATE]** (PART02) | flags a plan marked COMPLETE/RATIFIED whose named deliverables aren't on disk | `dna/checks/build-state.sh` · plan `…/CISEM-ARCH-00420-PART02-*` |
| **Plan-authorization gate** (PART08) | write-time PreToolUse hook + BLOCK5 commit backstop — "no governed **new file** without a ratified plan" (the A4/A11 enforcement) | `.claude/hooks/pretooluse-plan-gate.sh` · `dna/checks/lib/plan-gate.sh` · `dna/checks/pre-commit-blocks.sh` BLOCK5 · plan `…-PART08-*` |
| **[PLAN-SECTIONS]** (PART12) | flags a changed plan missing a mandatory ARCH-00401 section; consolidate-by-reference | `dna/checks/plan-sections.sh` · `dna/checks/lib/plan-sections-lib.sh` · plan `…-PART12-*` |
| **[GI-CONSIDERATION]** (PART13) | a plan must cite the GIs/RIs it depends on (wisdom at plan-time — Governor's Q6/Q7 core) | `dna/checks/gi-consideration.sh` · `wisdom_considered:` field in `dna/protocols/CISEM-ARCH-00230-*` · plan `…-PART13-*` |
| **GI-68 mechanism** (PART01) | `/cisem-plan-verify` skill (repeatable Sonnet+Haiku dual-review dispatch) + `[RATIFY-GATE]` extension | `.claude/skills/cisem-plan-verify/SKILL.md` · plan `…-PART01-*` |

## 5. THE PREVENTION VAULT (`dna/learning-registry/root-insights.yaml`, RI-0028→0036 new this session)
RI-0028 staged≠committed · RI-0030 ratify-invitation-before-gate-closes · RI-0031 reuse-behavior-complete + widen-scope-audit-subtrees · RI-0032 plan-section-completeness · RI-0033 runtime-dependency-presence (jq) · RI-0034 check-DESIGN-spec precision · RI-0035 verify-the-verification-METHOD · **RI-0036 governed-edit-freestyle (the core)**. *(RI-0029 = pre-existing operating-knowledge-inheritance.)* **The vault exists; what's missing is the mechanical DRAIN — backlog #1.**

## 6. THE BACKLOG — one ranked+priced umbrella
`dna/planning/CISEM-ARCH-00420-MASTER-consolidated-backlog-program.md`. Order (Brain-consensus): **1** RIPL-drain/prevention-enforcement (+ Rejected-Path-Memory 1b) · **2** edit-gating (RI-0036) · **3** PART14 [CHECK-LINT]-for-design · **4** ratify ARCH-00330 (minitree DRAFT — NOT a hard blocker) · **5** AI-profiling (HIGH) · **6** neuronal-grid (HIGH) · **7** GI-68 review of 00270v2/00418/00419 (now unblocked) · **8-10** turn-cadence / educational-template / F-RECON-batch. *(But the Threshold audit §3 jumps all of this.)*

## 7. GOVERNOR INTENTS / DECREES (this session) — raw source: `dna/ibd/IBD-0030-governor-planning-aiprofiling-neuronalgrid-RAW.md`
- **Prevention must be MANDATORY + HARDWIRED + a prevention VAULT** (vault exists = root-insights; enforce it = RIPL-drain #1).
- **AI-PROFILING completion plan** (explicit demand) — formalize save/tag/status mechanics via Sonnet+Haiku+Brain consult, hardwired, emphasizing completion + check-what-exists.
- **Schema-as-NEURONAL-GRID** — tags + statuses + schema-position as the *bonding* elements over file-hierarchy; **archived-done elements keep their tags as live system wisdom**.
- Turn-cadence principle-push (mechanically enforced) · educational template (samples inherited per duplication) · observation→learning→planning→implement→verify loop (= RIPL composition).
- **The Governor explicitly wants pushback/dissent + always the best platform-level mechanical solution.** Agreeableness that suppresses a better idea is a failure.

## 8. NUANCES / GOTCHAS (don't relearn these the hard way)
- **jq is installed + on CISEM's PATH** (`C:/Users/finky/bin/jq`, 1.8.2). The **write-time hook activates in THIS fresh tab** (hooks load at session start; it was added mid-session last time so it was inert then). The commit backstop was already live. → *Expect the PreToolUse gate to actually fire now on governed new-file writes.*
- **The minitree protocol (ARCH-00330) is DRAFT-not-ratified** — used de-facto (PART02/08/…); ratifying it is backlog #4, not a hard blocker.
- **Plan-audit is slow (~2.5 min)** — commits via the hook take a while; run checks directly for fast iteration; the `[ZF]` line is your done-gate.
- **Known WARN follow-ons (not blocking):** `extract_citation` should tolerate `**`-bold citation format; `[CHECK-LINT]` false-positives the anchored `[RATIFY-GATE]` regex; `[I16]` has an xargs-quote degradation on Windows git-bash (may not fully execute).
- **Brain has sync-lag** — it can't read fresh commits immediately; **paste actual content** (not summaries) when it needs to verify, and give it real file paths.
- **Presentation to the Governor:** plain language, issue/pros/cons/one recommendation, no file numbers in the body (a "for the record" line at the bottom); end with (A) part-for-Governor + (B) one-click-for-Brain; always give live GitHub links for commits.

## 9. FULL LINK MAP (read directly)
- Resume anchor: `dna/CISEM-WITNESS-00003-session-continuity.md` → **COMPACT STATE 2026-07-25**
- Harvest (full fruits): `dna/learning-registry/session-learning-index.yaml` → `session_2026_07_24_25_harvest`
- Preventions: `dna/learning-registry/root-insights.yaml` (RI-0028..0036)
- Backlog: `dna/planning/CISEM-ARCH-00420-MASTER-consolidated-backlog-program.md`
- Priority task: `dna/queue/NEWTAB-THRESHOLD-ROUTING-PARKING-AUDIT-2026-07-25.md`
- Governor input: `dna/ibd/IBD-0030-governor-planning-aiprofiling-neuronalgrid-RAW.md`
- Built plans: `dna/planning/CISEM-ARCH-00420-PART02/08/12/13/01-*.md`
- Prior indexes (superseded-by-reference by the MASTER): `…-wiring-consolidation-index.md`, `…-planning-system-coherence-and-installation-roadmap.md`, `…-items123-approach-consolidated.md`
- Checks/mechanisms: `dna/checks/` + `dna/checks/lib/` + `.claude/hooks/` + `.claude/skills/cisem-plan-verify/`

## 10. RESUME PATH (in order)
CLAUDE.md → this handoff → WITNESS COMPACT STATE 2026-07-25 → the harvest entry → the priority Threshold prompt (§3) → (as needed) the MASTER backlog + RI-0028..0036 + IBD-0030.
**First act in the fresh tab:** the Threshold/Routing/Parking audit (§3) — goal-consensus + dual-tier dispatch first, produce a ratifiable plan, do NOT build (pause holds).

---
*git HEAD at handoff: pushed + tree-clean-verified. Nothing half-built, nothing unsaved. Change log: v1.0 2026-07-25 (Opus) — comprehensive fresh-tab handoff, all links/nuances/intents consolidated for zero-assembly pickup.*
