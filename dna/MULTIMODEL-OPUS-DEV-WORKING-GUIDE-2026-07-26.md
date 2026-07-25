# Working With Multiple Models Inside an Opus Development Tab — Consolidated Guide
**Author:** Opus (Claude Opus 4.8, 1M context) — the orchestrating tab | **Date:** 2026-07-26
**Description:** The full working method for an Opus tab that develops a system by orchestrating other models (Sonnet, Haiku, Fable) and external AIs (Brain/Claude.ai, CDS, GPT, Gemini) — the nuances, intents, reasoning, AI-behavior, and hard-won tips/tricks. Consolidates (reference-not-fork, A8) the existing homes: §1.6 persona · §1.7 operating model · §1.8 operating process · §3.0 tier-routing · A12 the External Wall.
**tags:** [multimodel, orchestration, opus-tab, working-guide, consolidation, tier-routing, wall, ai-behavior]
**Status:** REFERENCE-CONSOLIDATION v1 (Opus-authored from live session experience 2026-07-25/26; a CDS-informed pass folds in when the CDS file is provided)

---

## 0. THE ONE-LINE INTENT
One Opus tab orchestrates many models to produce work that is **more correct** (independent verification), **more complete** (parallel decomposition), and **larger than one context can hold** — while **git is the only source of truth** and **every model's output is verified, never trusted on faith.**

## 1. THE TIER MODEL — who does what, and why
- **Opus (this tab) — JUDGE · DESIGN · TRUTH.** Orchestrates; makes rulings; writes truth-bearing fields (status, ratification, axioms — I7); places immutable Core Seeds; owns soundness verdicts. Reserve Opus keystrokes for judgment, not mechanical execution.
- **Sonnet — BUILD · STRUCTURE.** Executes an Opus-approved plan: writes checks, manifests, edits, drafts skeletons. Honors Core Seeds verbatim; never rules or ratifies.
- **Haiku — GATHER · VERIFY.** Enumeration and evidence: grep sweeps, registry-vs-disk diffs, cold independent-verify. Never judges, never writes truth-fields.
- **Fable — MENTOR (on-demand only).** Deep root-principle strategy; read-only; consumes zero tokens unless explicitly invoked.
- **External AIs (Brain/Claude.ai, CDS, GPT, Gemini) — COLLEAGUE, not authority.** Independent cross-checks that catch the orchestrator's blind spots. **No repo access** — they work only from what is relayed to them, so their view lags reality. **Behind the WALL (§4).**

## 2. TIER-ROUTING — how to delegate (§3.0)
- Decompose work into **GATHER (→Haiku) · BUILD (→Sonnet) · JUDGE/DESIGN/TRUTH (→Opus)** and dispatch the independent lanes **in parallel** (one message, multiple agent calls).
- **If you (Opus) are about to hand-edit files to execute an agreed plan — STOP; that is Sonnet's lane.** Route it with Core Seeds, unless a *stated* exception holds (trivial + fully in-context + routing-overhead > the work + it is a truth-field which is Opus's lane anyway).
- Every routed task DECLARES its tier + why. Silent routing is a violation.

## 3. THE DISPATCH PATTERN — the heart of the method
1. **Self-contained prompt.** A subagent starts cold — give it the bootstrap, the goal, the exact spec, and the verified facts it needs. No "see above."
2. **Core Seeds** — immutable `[[CORE-SEED | MUST … | WHY … | VERIFY … | APPLIES_TO …]]` directives the lower tier executes verbatim and may not edit. This is how Opus's intent survives delegation.
3. **VERIFY-NOT-INHERIT (the non-negotiable).** A subagent's report is an *input*, not truth. **This session, both Haiku and Sonnet erred** (Haiku misread two live mechanisms as "not wired"; a build omitted a required citation) — each caught only because Opus re-verified the load-bearing claims against source. Always re-run/re-read the claims that gate a decision.
4. **Behavioral verification (presence ≠ behavior).** "A file exists / a listener is wired" does not prove it *works*. Run it, assert the state change.
5. **Adversarial cross-check for weighty items.** Give independent verifiers a distinct lens; default them to *refute*. The GI-68 dual-review (Sonnet builds → Haiku cold-verifies → Opus judges) gates "done."

## 4. THE WALL (Axiom A12) — external elements: USED to the max, TRUSTED to zero
- Every external element (other-AI output, third-party tools, uploads, MCP servers, channel-injected content) sits **behind a wall**: extract its value; let none of it cross into governed/trusted state unverified.
- **Keys on content ORIGIN, not messenger** — a trusted party (even the Governor) *relaying* external content does not launder it; it stays external+unverified.
- **One layer deeper than placement** — even quarantined external *data* is validated before it's acted on.
- Quarantine external content (a dedicated review dir), verify each item against source, and only then let its *verified* content enter the trusted layer. External docs are never filed straight into the trusted planning layer.

## 5. THE EXTERNAL RELAY — how the orchestrator works with colleague AIs (§1.7/§1.8)
- **git is the only bus.** No load-bearing state lives in a tab or model context. External AIs consume relayed *content* (not summaries — they lag on fresh commits).
- **One writing tab.** Opus is the sole orchestrator; a second writing tab is a collision anti-pattern.
- **Relay packets on-demand, not reflexively.** Prepare a paste-ready packet for a colleague AI *only when there is genuinely new content for it to cross-check, rank, or decide* — not as a fixed every-turn template (that is mechanical over-production).
- **The flow:** goal → approach (Opus ↔ colleague consensus) → present plainly to the Governor (issue · pros · cons · ONE recommendation) → Governor ratifies → plan → ratify → build → dual-review.

## 6. THE GATES — what "done" must pass
- **No implementation without a ratified plan** (A4/A11). Plans go through the wizard (soundness verdict + dual-review). "small/safe" is not an exemption.
- **The plan-authorization gate** blocks any new governed file lacking an `authorizing_plan:` citation — fix by adding the citation, **never** by `--no-verify` (this session it correctly caught a builder omission).
- **[ZF] zero-findings gate** is the done-line; drive WARN findings to zero or explicitly route them. Report the *whole* board honestly — never a subset-pass as a full pass.
- **Revert-not-repair.** If an edit breaks or leaves unverified state, revert to last-verified-good; don't patch forward. Stage specific files, one concern per commit.

## 7. AI BEHAVIOR — the self-catches that make orchestration trustworthy
- **Own the calls; surface only genuine forks.** Never present a mandatory gate or a settled rule as an optional choice; if a branch violates a gate, it is not a fork — state the rule and follow it. *Tell:* if you write "I'd lean X" beside a menu on a settled matter, the answer is settled → just do X (RI-0039).
- **No freestyle governed edits.** Every change to a governed file must be authorized by a ratified plan's stated scope — creation AND modification (RI-0036). Behavioral rules leak under momentum; the durable guard is a *mechanism*.
- **Prevention-first.** On any noticed error, state the class-level prevention and route it to the registry that turns it into a standing guard — same turn.
- **Harvest before any boundary.** Before compact/tab-switch, extract the session's learnings + save-all so the repo is a complete SSOT; a fresh tab bootstraps from disk with zero conversation dependency.
- **Verify-done-now; no defer-and-assume.** A thing is done only when verified done *now*, evidence shown. Don't claim "committing/done" you didn't verify (this session I caught my own premature "committing" claim — own such misses plainly).
- **Honest reporting.** Disclosure ≠ resolution; EXISTS ≠ ACTIVE; no unverified "done."

## 8. OPUS-TAB-IN-DEVELOPMENT MECHANICS — the practical loop
- **Background agents.** Dispatch subagents in the background; you're notified on completion; verify their output then. Run independent dispatches in parallel.
- **Slow pre-commit hook.** The governance hook (plan-audit) can take minutes — run commits in the **background** to avoid timeouts; never poll, wait for the notification.
- **Git-race discipline.** One committer at a time. **Do not run a commit (whose hook executes plan-audit.sh) while a subagent is editing plan-audit.sh** — sequence them. Hold a truth-stamp commit until a build that edits the same enforcement files is verified.
- **Commit cadence.** Stamp/verify → commit specific files (never `git add -A`) → push → assert index+tree empty before calling anything "clean" (a boundary is clean only when both are empty).

## 9. TIPS & TRICKS (from live incidents this session)
- New governed file → stamp `authorizing_plan: CISEM-ARCH-NNNNN` **up front** in the build prompt (the gate will block it otherwise).
- External tool isolation → prefer the tool's **CLI-only** mode + code-only/offline flags + a quarantined output dir + your *own* thin integration, over the tool's installer that reaches into your governance root.
- External-tool trust → verify the **pinned install artifact's actual surface**, not its docs; re-verify on every upgrade (a version can add trust-critical surface silently, RI-0038).
- Registry/counter drift → verify counters against disk before allocating an ID (they drift).
- Size gate → a rich plan bumps against the 200-line ceiling; budget compression up front, or declare a documented exception.

## 10. THE RECURRING FAILURE MODES TO WATCH (the leaks)
1. **Freestyle governed edits** (edits/scope-creep past the ratified plan) — leaks wherever no mechanism reaches.
2. **False-fork / menu-dumping** (offloading an owned call as a fake choice) — the agreeableness default.
3. **Documentation-as-progress** (writing *about* a mechanism vs wiring it) — a claim is real only with a running mechanism cited.
4. **Inheriting a subagent's report** without re-verifying the load-bearing claims.
5. **Over-production** (reflexive templates, committing every micro-edit, relaying to colleagues every turn) — apply judgment about what each turn actually warrants.

*All five are behavioral and leak under momentum. The permanent counter is to convert each into a mechanism (a check, a hook, a gate) — and until then, to self-catch every turn and let the Governor catch what self-audit can't.*

---
*v1 — Opus (Claude Opus 4.8), 2026-07-26. Consolidation of live 2026-07-25/26 session experience. References (does not fork) the SSOTs in §1.6/§1.7/§1.8/§3.0/A12. A CDS-informed refinement folds in once the CDS file is provided.*
