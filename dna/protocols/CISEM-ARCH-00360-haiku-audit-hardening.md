# Haiku Audit Hardening (Anti-Recurrence Protocol)
**Node ID:** CISEM-ARCH-00360 | **Type:** ARCH | **Status:** PROVISIONAL-ACTIVE (Sonnet-Opus joint)  
**depth_level:** L2 | **Position in schema:** T-SYS, quality-audit layer  
**tags:** [audit, haiku, enumeration, anti-recurrence, hardening]  
**Goal:** Embed the findings from the 2026-07-18 Haiku diagnostics as STANDING RULES so similar gaps don't recur.

## Pocket Declaration
- **reasoning_scope:** harden Haiku's enumeration process + prevent root-cause gaps from re-emerging
- **inherited_constraints:** Axioms A1–A7; Doctrine D3 (prevention permanent + cumulative); ARCH-00320 invariants I1–I18
- **output_contract:** 7 new standing rules that Haiku applies to every audit + 4 new governance decrees (Owner: Governor)
- **ai_cannot:** self-ratify these rules (Opus verifies, Governor decrees)
- **recorded_at:** 2026-07-18

---

## The 7 Haiku Hardening Rules (Standing, every audit)

### RULE 1: Closure Verbs Require Proof (I2 strengthened)
**Problem:** ARCH-00170 claimed nodes were "created this session" without git evidence.  
**Rule:** Any commit message or document using closure verbs (`created`, `completed`, `delivered`, `closed`, `resolved`, `fixed`) MUST cite a git commit hash (e.g., `created in 22a01a9`).  
**Haiku's audit task:** Scan closure-verb commits; for each, verify the referenced git hash exists AND touched the claimed file.  
**Failure:** If hash doesn't exist or doesn't match the claim, flag as I2 violation (disclosed-as-resolved).

---

### RULE 2: Field Compliance Must Account for Markdown Variance (prevents false negatives)
**Problem:** Haiku's regex-based field detection returned 0/26 compliant files (high false-negative risk).  
**Rule:** Field compliance check MUST test for BOTH:
  1. Explicit field format: `**Node ID:**` (bold, colon)
  2. Implicit field: Section headers that convey identity (e.g., `## Identity — CISEM-ARCH-00008`)
**Haiku's audit task:** Before reporting "0% compliance," manually verify a sample (5 files) to calibrate regex accuracy.  
**Threshold:** If manual sample shows >30% compliance, regex-only result is flagged as suspect (confidence:low).  
**Fallback:** Report regex result AND human verification side-by-side.

---

### RULE 3: Distinguish "No Dedicated File" from "Content Distributed" (prevents misinterpretation)
**Problem:** Haiku reported "11 corespines contentless" but many had content dispersed across multiple files.  
**Rule:** For each corespine, Haiku must explicitly state:
  - CONSOLIDATED (has one .md file with all content)
  - DISTRIBUTED (content spread across multiple files; list them)
  - ABSENT (no content found anywhere)
**Haiku's audit task:** Scan corespine registry; for each entry, search for keywords (corespine name, goal) across dna/; report findings as CONSOLIDATED/DISTRIBUTED/ABSENT.  
**Consequence:** Reporting framework changes from "coverage %" to "consolidation audit" (different action items).

---

### RULE 4: Manual Phase 1 (Non-Automated Gates) Requires Phase 1 Gate Trace (new verification mechanism)
**Problem:** Phase 1 has 0% automated gates; silent drift is structurally possible.  
**Rule:** Every creation during Phase 1 MUST include a "Gate Trace" section in its change log documenting:
  - Which of the 8 gates (§3.1–§3.7) were run
  - By whom (Sonnet, Opus, Haiku role)
  - When (date/commit hash)
  - Result (pass/fail per gate)
**Haiku's audit task:** Scan recent creations; flag any lacking a Gate Trace section.  
**RQC integration:** Every weekly audit, spot-check 1 creation's Gate Trace against actual files/commits to verify honesty (not just claimed).  
**Failure:** Missing Gate Trace = I15 violation (category exempt from §3).

---

### RULE 5: "Pending" Status Has 1-Week TTL; After That, Escalate (prevents limbo)
**Problem:** Phantom batch (5 nodes) sat "pending delivery" for 10+ days with no resolution.  
**Rule:** Any node or task marked `status: PENDING` or labeled "pending [action]" includes:
  - Owner (who decides/creates)
  - Deadline (specific date, not "someday")
  - Blocker (why it hasn't happened yet, if blocked)
**Haiku's audit task:** Weekly scan for "pending" items older than 7 days; for each, check if deadline passed.  
  - If deadline passed, flag as OVERDUE + escalate to Governor
  - If no deadline exists, flag as INCOMPLETE PENDING (missing metadata)
**Consequence:** Pending becomes active temporary status, not passive limbo.

---

### RULE 6: PRIO-BLOCKING Must Have Active Enforcement, Not Just Documentation (prevents theoretical blockers)
**Problem:** CS-MASTER-VALIDATION marked PRIO-BLOCKING but nothing actually enforced the block.  
**Rule:** A node can only carry PRIO-BLOCKING status if at least ONE of:
  1. A pre-commit hook script checks the condition and exits 1 if violated
  2. An RQC gate explicitly checks the blocker (documented in ARCH-00320 invariant)
  3. A ratification gate where Opus/Governor explicitly signs off on the block
**Haiku's audit task:** For each PRIO-BLOCKING item in registries, verify at least one enforcement method exists (trace to script, gate, or ratification record).  
  - If NONE found: flag as "theoretical blocker" and recommend downgrade to PRIO-HIGH
  - If found: confirm enforcement is live (script runs, gate triggers, etc.)
**Current finding:** CS-MASTER-VALIDATION has NO enforcement → recommend downgrade.

---

### RULE 7: Tier Freezes (and All Structural Mandates) Require Formal Decree (prevents undeclared freezes)
**Problem:** TIER-0/TIER-1 freeze was IMPLIED but never formally declared (no date, no boundary, no end condition).  
**Rule:** Any tier freeze, merge freeze, or capability freeze MUST be issued as a formal DECREE document with:
  - Effective date/time
  - Exact boundary (what's frozen, what's not, list specific actions if needed)
  - Exceptions (if any)
  - End condition (date, milestone, or "until Governor rescinds")
  - Governor signature/ratification
**Haiku's audit task:** Scan CLAUDE.md, governance files, and registry comments for freeze language. For each freeze mentioned:
  - Check if a corresponding DECREE exists
  - If not: flag as "undeclared freeze" + severity HIGH
  - If yes: verify decree date matches timeline
**Current finding:** "Await Governor confirmation before TIER 1" is IMPLIED, not DECREED → Opus must issue formal decree.

---

## The 4 Governance Decrees Required (Owner: Governor)

### DECREE 1: Formal Tier Freeze (or Rescind)
**Action:** Issue a DECREE defining TIER-0/TIER-1 boundary explicitly, OR issue a RESCISSION if freeze is lifted.  
**Format:** `dna/queue/DECREE-2026-07-18-tier-freeze.md` (following decree template)  
**Deadline:** Governor decision before any TIER-1 work begins  
**Impact:** Ends the ambiguity; builders know exactly what's frozen

### DECREE 2: CS-MASTER-VALIDATION Status Clarification
**Action:** Either:
  - Ratify CS-MASTER-VALIDATION immediately + mark CONNECTED (active enforcement incoming), OR
  - Downgrade PRIO-BLOCKING → PRIO-HIGH + remove from critical path
**Deadline:** Unblock corespine ratification (currently gridlocked)  
**Impact:** Clears the bottleneck

### DECREE 3: Corespine Content Location Standardization
**Action:** Establish a rule: every DECLARED or RATIFIED corespine has a `content_location` field in registry:
  - `canonical_file: path/to/corespine.md`, OR
  - `distributed_in: [ARCH-00230, dna/queue/README.md, ...]` (with file list)
**Deadline:** Update corespine-registry.yaml with locations for all 12 corespines  
**Impact:** Audit clarity; builders know where corespine rules live

### DECREE 4: Phase 1 Gate Trace Mandate
**Action:** Establish rule: all Phase 1 creations MUST include Gate Trace section (required field).  
**Format:** Add to ARCH-00230 checklist + ARCH-00008 template  
**Deadline:** Effective immediately for new creations  
**Impact:** Phase 1 manual gates now have verification mechanism

---

## Does NOT cover
- Detailed wiring of Phase 2 automated gates (ARCH-00180)
- Specific implementations of Haiku enumeration scripts (that's ARCH-00180)
- Content creation for contentless corespines (separate governance task)

## Self-Compliance (ARCH-00230 checklist)
✓ Header (ID, Type, Status, depth_level, tags, goal, pocket)  
✓ Why-standalone (hardens Haiku audit process so Sonnet can trust enumeration results)  
✓ Rule-as-procedure (7 rules stated as execution steps for Haiku)  
✓ Does-NOT-cover  
✓ Role/Who-serving (Haiku audit layer, serving Opus + Governor confidence in findings)

## Path Rejection Declaration
- ❌ Rejected: Treating Haiku findings as final without critical review (this document IS the review)
- ❌ Rejected: Adding Band-Aid fixes without addressing root causes (all 7 rules target root causes)
- ❌ Rejected: Making Haiku responsible for enforcement (Haiku enumerates; Opus/Governor enforce via decrees)

## Opus PE verdict — 2026-07-18 (verification, default-refute)
CONDITIONAL-APPROVE (stays PROVISIONAL-ACTIVE until wired). Verified against repo state:
- Registered retroactively → ARCH next_seq 370 (Sonnet again failed to register — 2nd recurrence of the ARCH-00350 lesson; BP-0002 must wire an unregistered-ID check).
- Field-compliance "0/26" = **false negative CONFIRMED** by Opus count: ~18/27 node files carry `**Node ID:**` (~66%).
- **Row 6 (CS-MASTER PRIO-BLOCKING) is STALE (I16)** — CS-MASTER-VALIDATION-001 already RATIFIED (foundational decree 2026-07-18); the block resolved. **DECREE 2 withdrawn/moot.**
- RULE 1 **duplicates I6** (closure-verb commits already checked) → fold into I6, do not parallel (I19).
- **This node fails its own RULE 6:** the 7 rules are documented but NOT wired into `.claude/agents/cisem-haiku.md` → "theoretical blocker." Must wire to earn real status.
Completion (Core-Seeded to Sonnet): wire rules 1–7 into cisem-haiku.md; fold RULE 1 into I6; embed Haiku's raw diagnostics as a file; drop row 6; add content_location (DECREE 3) + Gate Trace (DECREE 4) wired.

## Change log
- v1.0 — 2026-07-18: Sonnet draft (critical review of Haiku diagnostics). 7 standing hardening rules + 4 governance decrees. Status: PROVISIONAL-ACTIVE, awaiting Opus verification + Governor decrees.
- v1.1 — 2026-07-18: Opus PE verdict CONDITIONAL-APPROVE (above); registered (→370); Governor accepted recommendations (blanket approval, this session). Remains PROVISIONAL-ACTIVE until Sonnet wires rules 1–7.
