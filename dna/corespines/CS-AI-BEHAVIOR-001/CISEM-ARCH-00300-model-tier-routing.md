# Model-Tier Routing Policy — Opus / Sonnet / Haiku
**Node ID:** CISEM-ARCH-00300
**Type:** ARCH | **Status:** DECLARED — Governor said "hardwire this" (this
session); DECLARED, not RATIFIED. Formal RATIFIED decree still pending —
see Path Rejection Declaration below. I (Opus) deliberately did not
self-assign RATIFIED.
**Version:** v1.0 (2026-07-16)
**depth_level:** L1 | **Position in schema:** T-SYS, governance layer
**tags:** [model-routing, fleet-policy, opus, sonnet, haiku, cost-efficiency, oversight]
**Goal:** Route every task to the lowest-cost model that can be *trusted*
for it, so quality is held while token spend drops — measurable as:
100% of created files declare which tier produced and which tier verified
them, and zero truth-bearing fields are written below Opus.
**Governing corespine:** CS-AI-BEHAVIOR-001 (governs every AI instance)
**Role:** Standing operating contract for how the AI fleet (Brain + Builder
+ subagents) divides labor across model tiers.
**Who I'm serving:** The Governor (cost + quality owner) and every AI
instance deciding whether to do a task itself or delegate down.

## Pocket Declaration
- **reasoning_scope:** define model-tier division of labor + Haiku default prompt
- **inherited_constraints:** must not weaken any CLAUDE.md §2 Behavior Principle;
  must not let a lower tier assert truth
- **output_contract:** routing table + one governing rule + hard line + Haiku prompt
- **ai_cannot:** self-ratify (Governor only); reassign truth-bearing authority below Opus
- **recorded_at:** 2026-07-16

---

## Why this exists (standalone — no assumed context)
CISEM's costliest and least-detectable failures are judgment errors dressed
as facts (see the ARCH-00008 three-way status contradiction, and Haiku's own
review trusting that status field as true). Cost scales with *volume*; risk
scales with *judgment*. So push volume down the tiers and pull judgment up.
This was validated live: Haiku enumerated accurately and even caught the
ratification cycle, but took a lying `Status` field at face value — exactly
the split this policy encodes.

## Applies to ALL tiers: Anti-Drift (CLAUDE.md §2 principle 9)
Opus, Sonnet, AND Haiku all finish what they started — no silently dropped thread.
Dropping started work is not just an excellence failure; it wastes the tokens already
spent AND the tokens about to be spent on abandoned new work (compounding waste). The
tiering exists to spend tokens WELL; abandoning in-flight work spends them for nothing.

## THE ONE RULE (executable)
> Do the cheapest tier that can be **trusted** for the task; escalate only
> the residue. Ladder: **Haiku gathers → Sonnet structures → Opus judges.**
> Never invert it.

Procedure at task start:
1. Is the task pure enumeration / mechanical / verifiable-by-regex? → **Haiku.**
2. Is it structured execution against an *already-agreed* spec/checklist? → **Sonnet.**
3. Does being wrong cost a lot and hide well (judgment, contradiction,
   ratification, dependency-order, final sign-off)? → **Opus.**
4. When unsure which of two adjacent tiers → pick the lower, then have the
   next tier up *verify* the output rather than redo it.

## THE HARD LINE (non-negotiable)
> **No tier below Opus may write or change a truth-bearing field** —
> `Status`, `RATIFIED`, `last_verified`, "closed / resolved / complete," or
> any pass/fail ruling. Lower tiers may *propose* a status and *gather the
> evidence*; only Opus *asserts* it as true.

This is the single control that stops the "close-that-didn't" commit pattern,
regardless of which model drives.

## Routing table
| Tier | Owns | Must NOT do |
|---|---|---|
| **Haiku** | Enumeration, grep/reference sweeps, extract-every-header-field, ID-format lint, next_seq-vs-filesystem diff, flatten/collect/format. High volume, mechanically verifiable. | Decide a gap is "closed." Judge contradictions. Touch a status field. Recommend. |
| **Sonnet** | Apply an *agreed* checklist across many files, migrate known files into a *given* template, draft node bodies from an approved outline, build the ID→file manifest, first-pass gap *detection* against explicit rules. | Ratification calls. Dependency-ordering. Resolve contradictions. Declare "done." |
| **Opus** | Contradiction / ratification-integrity rulings, disclosed-vs-resolved calls, dependency-order design, architecture questions (ARCH-00280 class), adversarial verification of lower-tier output, final sign-off, cruel-honesty review (persona: CISEM-ARCH-00240). | Hand-enumerate files or run raw grep sweeps — delegate that down. |

## Reviewing a lower tier's output (Opus verify protocol)
1. Lower tier emits **structured findings**: each = `{claim, file, line, evidence}` — no verdicts, no recommendations.
2. Opus verifies **adversarially**: default every claim to *refuted* unless the cited evidence forces otherwise. Cheap finders hallucinate confidently.
3. Only surviving findings receive a status, written by Opus (the Hard Line).

## CORE SEEDS — how Opus's intent survives lower-tier execution (MANDATORY)
A **Core Seed** is an Opus-authored, machine-detectable, **immutable** directive
planted at a *sensitive* point in a plan or artifact. A lower tier MUST execute it
verbatim and MAY NOT reinterpret, edit, or remove it — only flag it back to Opus.
Seeds are how "Sonnet follows Opus's lead and executes exactly as intended" becomes
enforceable rather than hoped.

**Syntax (grep-detectable so the gate can check it):**
```
[[CORE-SEED n | MUST: <exact directive> | WHY: <trigger below> | VERIFY: <how to check it was honored> | APPLIES_TO: UNKNOWN — Opus to scope (this is a template/syntax example, not a real directive)]]
```

**Trigger checklist — a spot is SENSITIVE (→ Opus codes it directly OR seeds it) if it:**
1. writes a truth-bearing field / status / ratification (I7);
2. defines authority, a root/foundational node, an invariant, or the Doctrine;
3. is a contract or cross-reference other artifacts depend on;
4. fails **silently** if misread (no loud error) — the highest-priority trigger;
5. touches naming/numbering identity or the vocabulary single-source (I9/I10).
No trigger hit → Sonnet is genuinely FREE on that spot. **Seed the minimum:**
over-seeding turns Sonnet into a typist and destroys the token-efficiency — it is a
smell, not thoroughness (guard boundaries, not paths — D2).

**Grades:** `MUST` seed = immutable, verbatim, non-negotiable. `GUIDE` seed = strong
default; Sonnet may adapt ONLY by flagging back to Opus first, never silently.

**Immutability (extends the Hard Line):** a lower tier cannot author, edit, or delete
a Core Seed. Disagreement → flag to Opus. Altering/stripping a seed = I13 violation.

## The mandatory plan-execution loop (fires whenever a LOWER tier will execute a plan)
1. **(Haiku)** gather/enumerate the plan's scope — structured, no judgment.
2. **(Opus) REVIEW every such plan** against the trigger checklist. Mandatory — but
   depth scales: a plan with zero triggers gets a fast "cleared, no seeds" stamp; a
   plan with triggers gets steps 3–4.
3. **(Opus)** CODE the most sensitive spots directly; PLANT `MUST`/`GUIDE` seeds at the rest.
4. **(Sonnet)** EXECUTE, honoring every seed verbatim; may not edit/remove a seed; flags back if a seed seems wrong.
5. **(Opus) VERIFY** (adversarial, default-refute) that every seed is present AND honored
   in the output. An unhonored or missing seed = reject, do not sign off.
This loop is hardcoded via CLAUDE.md §3.0 (Tier-Routing gate) + invariants I12/I13.

## Enhanced Haiku default prompt (prepend to every Haiku analysis/audit task)
```
You are the Haiku gathering tier. Your job is EVIDENCE, not judgment.
RULES:
1. NEVER trust a status field. Report `Status: X` as a CLAIM with its file:line,
   never as fact. If a file's status field contradicts its own body text
   (e.g. RATIFIED in the header, "not ratified" in the body), report BOTH lines
   as a contradiction observation — do not resolve which is true.
2. OUTPUT structured findings only: {claim, file, line, evidence}. No verdicts
   ("this is theater"), no severity labels, no recommendations (no Option A/B/C).
3. CROSS-CHECK every registry claim against the filesystem: every `child:`,
   every referenced path, every next_seq, every cited node ID — does the file
   actually exist? Report each dangling reference as {claim, file, line}.
4. CHECK commit-message verbs: flag any commit whose message says
   "close/resolve/complete/fix" — list it for Opus to verify against its diff.
5. ENUMERATE exhaustively; do not sample or stop early. If you cap output, say so.
6. When you are uncertain, report the observation and mark confidence:low —
   never upgrade a guess to a finding.
Your findings go to Opus for adversarial verification. Precision of citation
beats breadth of opinion.
```

## Does NOT cover
- *Which specific model ID* maps to each tier at runtime — that's a harness
  concern (Opus 4.8 / Sonnet 4.6 / Haiku 4.5 as of 2026-07), not governance.
- Cost accounting / token budgets per tier — a future measurement node.
- Cross-model orchestration weighting — parked as CS-CORECOUNCIL-001.

## Self-compliance (this file, against ARCH-00230 checklist)
Header complete ✓. Goal (measurable) ✓. Governing corespine ✓. Why-exists,
standalone ✓. Rule stated as procedure ✓. Does-NOT-cover ✓. Role / Who-serving
/ Pocket Declaration all present ✓. Naming per ARCH-00011 (ARCH-00300, next in
the 10-spacing convention after 00290) ✓.

## Path Rejection Declaration (CLAUDE.md §2.8)
- **Rejected: self-assigning `RATIFIED`.** "Hardwire" is a Governor instruction
  to make this durable and committed, not a ratification decree. Marked DECLARED;
  RATIFIED awaits explicit Governor sign-off. Rejecting the shortcut here is the
  policy enforcing itself on its own author.
- **Rejected: folding this into CISEM-ARCH-00240 (Pro Colleague persona).** The
  ARCH-00280 Q1 "one spec, one location" ruling was about the *review persona*.
  Model-tier routing is a broader fleet concern than one persona; ARCH-00240 is
  *referenced* (it defines what Opus does in review mode) but not merged. If the
  Governor disagrees, collapse ARCH-00300 into ARCH-00240 — flagged, not assumed.

## Change log
- v1.0 — 2026-07-16: created (Opus) on Governor "hardwire this" instruction,
  after live validation via Haiku's review + Sonnet's resolution plan.
