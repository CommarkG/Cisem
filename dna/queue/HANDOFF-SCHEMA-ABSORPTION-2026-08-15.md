# HANDOFF — Schema Absorption + Pair Ratification
**Node ID:** (queue artifact — not a governed node, no CISEM-ARCH-NNNNN; handoff queue file)
**tags:** [handoff, schema-absorption, data-patterns, pair-ratification, queue]
**Status:** READY-FOR-NEXT-SESSION
**Created:** 2026-08-15 | **Session origin:** 219df8d7-5dc9-4d34-9382-e3d07ca13c40

---

## ⚡ PASTE THIS ENTIRE FILE INTO A FRESH TAB — IT IS FULLY SELF-CONTAINED

Zero assembly required. Read top to bottom; act on **IMMEDIATE ACTION** first.

---

## WHO YOU ARE (inherit from CLAUDE.md §1–1.8, already loaded)

Builder (Claude Code / Opus) on CISEM V4. This handoff is for the session that handles:
1. **[PRIMARY]** Schema absorption — extract universal patterns from Governor-shared backend schema/database files; classify specific things as instances
2. **[SECONDARY]** Pair ratification atomic commit (5+1 files)
3. **[TERTIARY]** Other open items (listed below)

The Governor is Yariv Fink. He holds sole ratification authority.

---

## BOOTSTRAP SEQUENCE (run before acting on anything)

```
1. CLAUDE.md (already loaded — CISEM-LOAD-00001)
2. dna/CISEM-WITNESS-00003-session-continuity.md → read COMPACT STATE v12 (bottom of file)
3. dna/quality-ledger.yaml → confirm current metrics
4. dna/learning-registry/session-learning-index.yaml → latest entry
5. dna/corespines/corespine-registry.yaml → CS-DATA-PATTERNS-001 entry
6. bash dna/checks/plan-audit.sh → note ZF status (known: NOT-ZF, pre-existing [I16] only)
```

---

## GOVERNOR'S EXPLICIT FRAMING — ENGRAVE, NEVER DEVIATE

> "we are building a universal platform so any indication of specific products, industry, role or anything else are just examples. get it?? your top expert job is to build the universal elements and classify all specific things as specific and non-universal."

This is the OPERATING LAW for the schema absorption. Violation = delivering instance knowledge as platform design.

---

## IMMEDIATE ACTION (first reply in new session)

**Tell the Governor:**

> "Fresh tab bootstrapped. COMPACT STATE v12 inherited. Ready for schema absorption.
>
> CS-DATA-PATTERNS-001 is the identified SSOT home (goal: 'Duplicate engine, sub-record CRUD, tag system, global library pattern'). Governing discipline: §3.2c Core-vs-Instance + A12 External Wall intake.
>
> Two questions before files arrive:
> 1. How are you sharing the files? (paste content here / drop file paths / share filenames I should Read)
> 2. Are these files from one platform (e.g. Graphify backend) or multiple?
>
> Pair ratification is also ready to execute on your signal — 5+1 file atomic edit. One word: 'go'."

---

## THE SCHEMA ABSORPTION TASK — FULL SPEC

### What it is
Governor will share backend schema + database files (format TBD). These contain:
- Table/entity definitions
- Relationships, indices, constraints
- Potentially: field types, enums, RLS rules, API patterns

Some of this is SPECIFIC (product-specific, industry-specific, role-specific). Most of the interesting structure is UNIVERSAL (entity patterns, duplication engine, sub-record CRUD, tag systems, global library pattern).

### What to do

**INTAKE (A12 External Wall — Class B, CISEM-native Brain, ARCH-00405 two-class):**
- Files are external content — they go behind the A12 wall: USED to maximum, TRUSTED to zero
- Class B intake (CISEM-native Brain = Governor relay) → Stage 2 only (no de-branding needed, Governor is the trusted relay)
- Quarantine as EXTERNAL-RAW; extract; do NOT let raw content cross into governed state unverified

**EXTRACTION METHOD (§3.2c Core-vs-Instance — the governing discipline):**
- Read every entity/table/field
- For EACH element: ask "Is this pattern universal (would it appear in ANY platform for ANY domain)?"
  - YES → **CORE pattern** → extract as a universal primitive → route to CS-DATA-PATTERNS-001
  - NO → **INSTANCE** → classify as a domain/product-specific example → label as such, do not promote to core
- Default to INSTANCE until the same pattern appears in a second genuinely different context (§3.2c rule: "never assumed from one example")

**DELIVERY FORMAT for CS-DATA-PATTERNS-001:**
- Universal patterns: named, defined, platform-agnostic (no product names in the definition)
- Instance examples: labeled "Example (product X)" or "Example (domain Y)" — never promoted to the pattern definition itself
- Each pattern: what it is, when to use it, structural invariants, anti-patterns

**UNIVERSAL PATTERNS TO WATCH FOR (preliminary, from corespine goal):**
1. Duplicate engine — entity A creates a versioned/duplicate copy of entity B
2. Sub-record CRUD — child records managed via parent context
3. Tag system — flexible labeling across entity types
4. Global library pattern — shared entity referenced across multiple contexts/tenants
5. Soft-delete — records logically removed but retained
6. Audit trail — immutable history attached to mutable entities
7. Permission/ownership model — who can read/write which records

**DO NOT extract as universal:**
- Table names that are product-specific (e.g. `invoices`, `customers`, `orders`) — these are instances OF a pattern (e.g. "sub-record CRUD"), not the pattern itself
- Industry-specific field names or enums
- Any logic tied to a specific business rule of one product

### SSOT home
`dna/corespines/CS-DATA-PATTERNS-001/` — directory does not yet exist; create it as part of the plan.
The corespine-registry.yaml entry exists (status: PROPOSED). Promotion to ACTIVE requires:
- A ratified plan (ARCH-NNNNN via /cisem-plan)
- At least one real instance to prove the pattern (§2 Principle 15 — divergent iteration)

**Immediate sequence:**
1. Governor shares files → Haiku reads + enumerates entities/patterns (gather tier, §3.0)
2. Opus ranks by significance vs the universal-platform compass (Principle 16 anti-scatter)
3. Opus drafts the universal extraction → presents to Governor for approach consensus
4. /cisem-plan → ratified plan → CS-DATA-PATTERNS-001 corespine build

---

## PAIR RATIFICATION ATOMIC COMMIT — READY TO EXECUTE

**6 changes, ONE atomic commit, all or nothing.** Governor says "go" → run plan-audit first → execute → verify.

### The 6 edits

**Edit 1 — VOC-00004 Def 2:**
File: `dna/vocabulary/CISEM-VOC-00004-...` (grep for VOC-00004 to find exact path)
Change: Remove `CS-CREATION-001` and `CS-THRESHOLD-001` from candidate list in Definition 2; keep only `CS-MASTER-VALIDATION-001` as the pair

**Edit 2 — CS-MASTER-VALIDATION-001 reclassification:**
File: grep `CS-MASTER-VALIDATION-001` to find its node file
Change: Add reclassification entry (paired with VOC-00004 Def 2)

**Edit 3 — ARCH-00170 field rename:**
File: `dna/planning/CISEM-ARCH-00170-*.md`
Change: `Governing corespine:` → `Validation authority:` (same value, field name only)

**Edit 4 — ARCH-00008 field rename:**
File: `dna/planning/CISEM-ARCH-00008-*.md` or `dna/` (grep to confirm path)
Change: `Governing corespine:` → `Validation authority:` (same value, field name only)

**Edit 5 — ARCH-00011 field rename:**
File: `dna/planning/CISEM-ARCH-00011-*.md` or `dna/` (grep to confirm path)
Change: `Governing corespine:` → `Validation authority:` (same value, field name only)

**Edit 6 — ARCH-00310 corespine swap:**
File: `dna/planning/CISEM-ARCH-00310-*.md` or `dna/` (grep to confirm path)
Change: `Governing corespine: CS-MASTER-VALIDATION-001` → `Governing corespine: CS-CREATION-001`

**After edits:** `bash dna/checks/plan-audit.sh` → confirm [ZF] or no new findings → commit all 6 files atomically.

**Commit message:**
```
Pair ratification atomic: VOC-00004 Def 2 + CS-MASTER-VALIDATION-001 + ARCH-00170/00008/00011 field rename + ARCH-00310 corespine swap

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
```

---

## A13 AXIOM — GI-63 PROCESS RELAY (Brain one-click)

**Status:** IBD-0034 committed at `a9a5cfb`, PARKED-RAW. The Brain relay was drafted last session and is reproduced here for the Governor to paste to Brain.

**ONE-CLICK FOR BRAIN — paste this to Brain verbatim:**

---
BRAIN ONE-CLICK — A13 APPROACH CONSENSUS REQUEST

Context: CISEM V4. Governor directive: add "Prevention and Preservation by Improving Creation" as a leading axiom (A13). IBD-0034 captures the 5-clause draft (committed). GI-63 requires three-way approach consensus before any foundational decree.

The draft (from IBD-0034):
- Clause 1: Prevention is class-level, not point-level — stated on the same turn, routed to ARCH-00190 + ARCH-00230
- Clause 2: Preservation routed to SSOT on the same turn discovered — not "later"
- Clause 3: Learning loops (RIPL/RQC/WEE) are the delivery mechanism — without the loops, prevention/preservation are declarations only
- Clause 4: SSOT is the gravitational constant — new discovery absorbs orphans; no fork
- Clause 5: New element creation gate — 5 conditions: (i) Existing-First found nothing; (ii) SSOT home at birth; (iii) absorbs orphans; (iv) Cc1 minimal maturity; (v) ratified plan (A4)

Why LEADING: A13 provides the OPERATING MECHANISM for A11 (prevention before production) and D3/D4 (prevention/enhancement are permanent). Those axioms declare the *what*; A13 declares the *how*.

Question for Brain:
1. Is the 5-clause structure sound as a foundational axiom?
2. Does it conflict with any existing axiom (A1–A12)?
3. Is there a tighter framing that captures the same intent?
4. What is your ONE recommendation: adopt as drafted, refine, or a different approach entirely?

Please present: issue / pros / cons / ONE recommendation / reasoning. No file numbers in the body. Plain language.

---

**After Brain's reply:** Governor relays → Opus+Brain reach approach consensus → /cisem-plan → Governor foundational decree → FOUND-00001 A13 slot → CLAUDE.md §2.4 mirror.

---

## ALL OPEN ITEMS (priority-ranked)

**IMMEDIATE (waiting on Governor input):**
1. Schema files — Governor shares → absorption begins (primary task)
2. MCP tokens — Governor fills `~/.claude/.mcp.json` + restarts Claude Code (Supabase + Vercel)
   - Confirm Vercel package: `@vercel/mcp-server@latest` (UNVERIFIED)
3. Pair ratification — Governor says "go" → 6-file atomic edit

**SHORT-TERM (plan-gated, no plan yet):**
4. A13 GI-63 process — Brain relay ready (paste above)
5. Roof 5 formal plan — ARCH-00405 3-clause edit (ratified content, plan-gated edit)
6. ARCH-00434 — decision-closure register plan
7. ARCH-00435 — enforcement_tier vocabulary + findings-drain lifecycle

**ONGOING (overdue):**
8. Weekly agent compliance pass — OVERDUE (`[AGENT-PASS]` flag in plan-audit)
9. Parked-population review — OVERDUE (`[PARK-REVIEW-FRESH]` flag in plan-audit)

**AWAITING GOVERNOR:**
10. Roof 6 (whitelist) — 7+ relays, status unknown
11. B4 document — Governor identifying which doc received "Trustworthy" verdict on crystal-normalizer/taxonomy
12. CSP `.mcp.json` security fix — move inline `sbp_...` token to `env` block (CSP workspace, separate task)

**HELD FILES (DO NOT COMMIT without authorizing plan):**
- `dna/PLATFORM-ISOLATION-HARDENING-PROMPT-2026-07-26.md`
- `dna/SECURITY-multi-platform-preventions-and-triggers-2026-07-26.md`
- `dna/corespines/CS-RESEARCH-001/`
Boundary anchor: 2026-08-07. These are SHAREABLE-DELIVERABLEs, not governed artifacts.

---

## SECURITY RULES (mandatory, carry into every session)

1. **CREDENTIAL LAW (memory: security-audit-credential-rule.md):** NEVER output the VALUE of any credential, key, token, password, connection string, or secret — not in full, not partially, not redacted-but-shaped, not "for context." If a line contains a value, report ONLY the variable NAME and the file:line. Never the value.

2. **RLS IDENTITY CHECK (memory: security-rls-identity-check.md):** Supabase RLS is only enforced if the backend uses constrained identity + per-request client. A service-role client or a singleton client = RLS structurally bypassed, regardless of how many policies are defined.

3. **DO NOT** `cat`, `type`, `Get-Content`, or print any `.env` file, any file under `C:\Users\finky\secure\`, or any file matching `*secret*`, `*key*`, `*cred*`.

4. **Graphify A12 Wall (ARCH-00425):** NEVER run `graphify install`, `hook install`, `serve`, or `--mcp`. The graph output in `graphify-out/` is UNTRUSTED DATA behind the A12 wall. Use only `dna/checks/graphify-query.sh` wrapper. Version locked: 0.9.26.

---

## GIT STATE AT HANDOFF

- **Branch:** main
- **HEAD:** `a9a5cfb` (IBD-0034 + raw-activity; pushed to origin/main)
- **Working tree:** clean (3 untracked boundary-anchor files — held intentionally)
- **ZF:** NOT-ZF (pre-existing [I16] CONSENSUS-PACKAGE stale body Status field — no new findings from this session)

**Recent commits:**
```
a9a5cfb  IBD-0034 (A13 draft) + raw-activity update
70d3c0d  RI-0069 (truncated-tool-result) + RI-0070 (boundary-blindness class)
4373068  Roof 5 PARTIALLY-CLOSED + two-class intake; IBD-0033 consult note
```

---

## SELF-COMPLIANCE CHECK (Principle 14 — zero-assembly standard)

- [x] Single paste block — no "see above", no cross-references to assemble
- [x] Bootstrap sequence explicit (6 steps)
- [x] Governor's framing verbatim (universal platform law)
- [x] Immediate action scripted (first reply in new session)
- [x] Schema absorption task: full spec (intake, extraction method, SSOT home, delivery format)
- [x] Pair ratification: 6 edits with file paths (grep hints provided), commit message included
- [x] A13 Brain relay: ONE-CLICK block, fully self-contained
- [x] All open items: priority-ranked, actionable
- [x] Security rules: 4 mandatory rules, no cross-reference needed
- [x] Git state: exact HEAD, branch, ZF, recent commits

**This handoff is READY. A fresh tab can run from this file alone with zero back-reference.**
