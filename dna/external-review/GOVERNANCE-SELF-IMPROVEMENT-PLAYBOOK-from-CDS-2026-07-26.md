# Governance & Self-Improvement Playbook — Proven Patterns for AI Development Platforms
**Author:** Opus (Claude Opus 4.8, 1M context), orchestrating tab | **Date:** 2026-07-26
**Description:** A comprehensive, portable set of governance and self-improvement patterns, consolidated from a mature self-governing platform (CDS) and independently validated by a sibling platform (CISEM). Written for adoption by *any* AI-driven development platform — principles + reasoning + concrete how-to, with platform-internal IDs stripped. Bring this to your platform and adopt what fits.
**tags:** [external-review, cross-platform, governance-patterns, self-improvement, weekly-evolution-engine, portable-playbook]
**Status:** SHAREABLE-PLAYBOOK v1 (Opus-consolidated 2026-07-26)

---

## THE ONE INSIGHT EVERYTHING ELSE SERVES
**On a maturing AI-governed platform, the governance *architecture* races ahead of the enforcement *code* — so the AI ends up holding the gap closed by discipline.** Two independent platforms named this identically as their #1 weakness. Discipline leaks under momentum; the only permanent exit is to **convert every behavioral rule into a running mechanism** (a check, a hook, a gate). Everything below is either a rule worth having, or the machinery that keeps rules alive.

---

## PART 1 — FOUNDATIONAL PRINCIPLES

1. **One truth, one home (SSOT).** Every fact/rule/artifact has exactly one authoritative home; everything else is a derived view or an explicit mirror that may not diverge. Derived indexes/dashboards are *generated* from the source, never hand-maintained (hand-maintained copies drift).

2. **Mechanical over documentation.** A rule is "enforced" only when a running mechanism proves it — not when a doc says so. Adopt a **two-output rule**: every pattern ships as a *statement* AND a *mechanical check* that catches its violation. A statement without a check is a wish.

3. **The WALL — external elements are USED, never TRUSTED.** Max usage ⇄ max isolation. Any external model output, tool, or upload is verified against source before it affects governed state; it never writes your governance root, never runs a server/network you didn't author. The wall keys on *content origin, not messenger* (relaying doesn't launder a source) and applies one layer deeper than placement (even quarantined external *data* is validated before use).

4. **Producer ≠ auditor, architecturally.** The thing that builds an artifact never certifies its own correctness. Separate the builder from the verifier by *structure* (different roles/stages), not by request — because a model reviewing its own work finds what it expects to find.

5. **Explicit wiring-states, not free-text status.** A crisp ladder: **DEFINED → WIRED → REACHABLE → CURRENT.** Self-declaring the top state is invalid; it requires an independent verification pass + a human signature. This kills "declaration drift" (saying *done* when you mean *drafted*).

6. **Wiring is as essential as implementation.** Every implementation ships *two* deliverables: the artifact, AND a **propagation sweep** proving every upstream/downstream consumer was updated. Delivery-2 is the *completion condition*, not a bonus. A disconnected implementation cannot self-verify, and a platform of disconnected implementations cannot govern itself.

7. **Architecture from repetition.** When the same problem recurs (a good threshold is 3×), extract it into a named pattern *with a mechanical check* — so it can never silently recur again.

8. **Rate-limit creation, mechanically.** Cap new patterns/rules/constraints per work-session (e.g. a few each). Not because any one is unjustified, but because a human's ratification throughput is finite and unbounded creation inflates the system faster than it can be verified. Make the cap a hook that counts creations, not a line in a doc.

9. **Human-approval → automatic durable record.** The gap between "the human said yes" and "a signed ratification record exists on disk" is where truth rots. Close it with a mechanism that produces the record on approval.

---

## PART 2 — THE WEEKLY EVOLUTION ENGINE (the centerpiece)
The mechanism that makes improvement **permanent, platform-wide, and automatic** instead of per-session and local. Five layers:

**Layer 1 — Session-start SCAN.** At the start of every work session, auto-scan the whole platform (fast, non-blocking) across a fixed set of categories: new violations · stale statuses · orphan references · pattern recurrence · propagation gaps · un-extracted wisdom. Emit findings.

**Layer 2 — Findings QUEUE (persistent accumulator).** One durable file. Each finding carries: id · category · description · affected artifacts · a priority score · severity · batch assignment · status · `propagation_required` · `propagation_verified`. Health rule: **no finding stays pending beyond N sessions without a human decision** — else it escalates.

**Layer 3 — The weekly BATCH (done calmly).** On a fixed cadence, process one batch — highest-priority first — each finding: root-cause → solution → verify the solution → **apply** → **propagation sweep** (apply platform-wide) → **propagation-verify**. **Rate-limit the batch** (e.g. max N findings + a few patterns/wisdom per session) so a large backlog is worked *calmly over many weeks*, never in an overwhelming burst.

**Layer 4 — The propagation-verified GATE (hardwired).** A finding **cannot be marked RESOLVED** until `propagation_verified = true` (or `propagation_required = false` with a stated reason). Enforce it as a mechanical check whose "violations must be zero" — this is what makes fixes go *platform-wide* instead of fixing one spot.

**Layer 5 — The AUTO-TRIGGER (permanent).** A **scheduled, isolated agent** runs the batch on cadence **with no human present** — it reads the repo, processes the queue, applies + propagates, commits, and reports. This is what makes the loop *"permanent, not per-session."*

**Seed it once:** on first run, harvest *all reachable* already-solved problems, preventions, insights, and wisdom into the queue, so the engine starts from the full picture rather than a blank slate.

**Score the engine honestly (metrics = the scoreboard):**
- **Wiring health** = mechanisms-actually-active / total rules (drive it up — this *is* the declared-vs-wired gap as a number).
- **Evolution health** = resolved-with-propagation-verified / resolved-requiring-propagation.
- **Queue velocity** = resolved-per-cycle / added-per-cycle (target > 1: the queue shrinks).

---

## PART 3 — MULTI-MODEL DISCIPLINE (how the orchestrator uses the fleet)
- **Roles, kept in lane:** the orchestrator (strongest model) **judges · designs · owns truth-fields**; a builder model **implements** an approved spec; a cheap model **verifies mechanically / gathers**. The orchestrator never does what the builder can; the builder never judges; the verifier never interprets.
- **Spawn-decision rule (seconds):** judgment → stay with the orchestrator · mechanical check → verifier · implementation → builder · trivial+in-context → inline.
- **Immutable intent survives delegation:** hand a sub-agent a *self-contained* prompt plus immutable directives it executes verbatim and may not edit.
- **Verify-not-inherit:** a sub-agent's report is an *input*, not truth — re-check any claim that gates a decision (sub-agents err; independent re-verification is what catches it).

---

## PART 4 — AI-BEHAVIOR SELF-CATCHES (the discipline until the mechanisms exist)
- **Presence ≠ behavior.** "A file exists / a rule is written" ≠ it works. Run it, assert the state change.
- **Own the calls; surface only genuine forks.** Never present a settled rule or a mandatory gate as an optional choice. If you catch yourself offering a recommendation *beside a menu* on a settled matter — the answer is settled; just do it.
- **No unverified "done."** Disclosure ≠ resolution; exists ≠ active. Prove completion this turn with shown evidence.
- **Prevention-first.** On any noticed error, state the class-level prevention and route it to the queue the same turn.
- **Harvest before any boundary.** Before a context reset/handoff, extract learnings + save everything so a fresh start bootstraps from disk with zero conversation dependency.

---

## PART 5 — ADOPTION CAVEATS (learned the hard way)
- **An autonomous committer is a *second writer*.** If your auto-trigger commits, guard it with a single-writer lock so it can't collide with a live human session (git-race). One writer at a time.
- **Prefer a committed report over an email/MCP surface.** If your platform keeps a clean posture (no external servers), have the auto-trigger write its report *into the repo* rather than pull in an email/MCP connector — fewer external surfaces, same visibility.
- **Enforce structure at creation, not after.** Reject an artifact missing its required frontmatter (home/position/status) at write-time; don't catch it in a later audit.
- **A live dependency graph** (generated, e.g. from a local code-graph tool run in read-only/isolated mode) is the highest-leverage upgrade for propagation completeness — it turns "what depends on this?" from memory into a lookup.
- **Portability:** strip platform-internal IDs when sharing; keep the principle + the reasoning + the mechanism shape. Adopt what fits your platform's constraints, not the labels.

---
*v1 — Opus (Claude Opus 4.8), 2026-07-26. Consolidated from CDS's self-assessment + cross-platform (CISEM) validation. Shareable with other AI development platforms.*
