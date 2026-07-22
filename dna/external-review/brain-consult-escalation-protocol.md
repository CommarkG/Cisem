---
tags: [external-review, brain-consult, escalation-protocol, two-strikes, GI-34, diversity, 70-headroom, ready-to-send]
Type: EXTERNAL-REVIEW | Sub_type: BRAIN-CONSULT
Status: CONSENSUS-REACHED (Opus+Brain, 2026-07-22) — Governor ratification + wiring PENDING (deep-core, no solo ratify per GI-63)
source_trust: INTERNAL (CISEM→Brain outbound) | last_verified: 2026-07-22 | freshness: FRESH
governing: extends GI-34 (Cycle Failure Protocol, PURIFIED-TO-WIRE) · ARCH-00399 (PAE) · ARCH-00370 (harvest)
---

# CISEM → Brain consultation — Two-Strikes Escalation Protocol (round 2)

*Self-contained (private repo — Brain can't fetch links; all cited content quoted inline).*

## What the Governor asked
A hardwired protocol that fires after **2 failed attempts** to resolve something ("sometimes we bark up the
wrong tree"). An escalation LADDER: internal agents → Brain → Haiku online research → external LLMs (Gemini/GPT)
→ possibly back to the original deep-dive. Plus: (a) harvest long fix-trials as insight/prevention material,
Brain co-owning the prevention; (b) a **70% resource-headroom** rule; (c) **"well-governed diversity is a treasure."**

## Existing-First (Haiku-verified against the repo — this CORRECTS two of your round-1 pointers)
1. **The two-strikes trigger already EXISTS = GI-34 "Cycle Failure Protocol":** *"a critical (S1/S2) finding
   unresolved after TWO attempts → HARD STOP: mark BLOCKED, vault the task, escalate root-cause to the human."*
   Status **PURIFIED-TO-WIRE** (decreed, NOT yet mechanically wired; home IBD-0024; referenced in ARCH-00406 as
   "2-attempt-then-hard-stop"). → Your "CSEP" pointer maps to **GI-34**. **This consult EXTENDS + WIRES GI-34** —
   turning its bare "halt + tell human" into a graduated LADDER. Not a new protocol.
2. **Your "70%-0017" hit is a DIFFERENT concept:** IBD-0017 P4 is a *"70%-token-REDUCTION external tool"* (parked),
   not a headroom rule. The Governor's 70% = *allocate only 70% of estimate, keep 30% buffer.* Two different "70%"s
   → naming-collision avoided; the new one = **"70% Allocation Headroom"** (genuinely new).
3. **PAE (ARCH-00399) is INBOUND-ONLY — you were right.** It absorbs external input via RAW→PURIFIED across 6 lenses;
   it does **not** govern OUTBOUND exposure (CISEM sending its own problem/architecture to Gemini/GPT). Ungoverned gap.
4. **ARCH-00370 harvest fires on 4 boundaries** (compaction / tab-switch / session-end / handoff). "Failed-twice" is
   **not** among them → adding it is a precise new trigger, not a new system.

## The proposed ladder (PCR — for your refinement) — the GI-34 wiring, cheapest-first
- **Rung 0 — REFRAME CHECK FIRST (your point, adopted):** after 2 fails, *before spending anything*, a Brain consult
  on whether the ROOT-CAUSE FRAMING is right. Wrong-diagnosis and hard-problem look identical after 2 fails; it's
  cheaper to question the diagnosis than to escalate outward on a wrong one.
- **Rung 1 — internal agents:** Haiku gather / Sonnet re-attempt *under the reframed diagnosis*.
- **Rung 2 — Brain** (colleague deep-consult).
- **Rung 3 — Haiku online research.**
- **Rung 4 — external LLMs (Gemini/GPT)** via PAE-inbound + a NEW outbound-sanitization gate. **ONE bounded round.**
- **Rung 5 — default back to internal deep-dive** with the original approach; a 2nd external round requires a fresh
  Brain consult (A11-shape: consult-before-re-escalate). **This is the STOPPING CONDITION** — no infinite ping-pong.
- Any rung producing a usable lead → EXIT the ladder + resume. **Harvest fires at ladder START** (failed-twice → a new
  ARCH-00370 trigger; Brain co-owns the extracted prevention/enhancement).

## Open questions for you (Brain)
- **Q1 — Outbound confidentiality:** what is safe to send externally (the *abstracted problem*) vs never (CISEM's
  architecture / internal vocab / truth-state)? Should the outbound gate mirror PAE's 6 lenses, or a simpler allow-list?
- **Q2 — Bounded-round rule:** is "one external round → default-inward → fresh-consult-before-round-2" the right stop,
  or do you want a hard cap (e.g. max 2 external rounds ever per problem)?
- **Q3 — Reframe-first ordering:** confirm Rung 0 precedes ALL spending. Any case where research should come first?
- **Q4 — 70% Headroom:** confirm it governs {token budget, agent-attempt count, time}. Others? Axiom (A12 candidate)
  or a planning-rule GI?
- **Q5 — Diversity-as-treasure:** axiom candidate, or a GI under the escalation protocol? Where is its home?
- **Q6 — GI-34 wiring:** is the ladder the right wiring, and should the mechanical trigger be a failure-counter in
  the monitor (ARCH-00406) / plan-audit?

## Status of the pieces (honest)
- GI-60 (diversity) + GI-61 (70% headroom) RECORDED in governor-insights.yaml as **DECREED-NOT-YET-WIRED**, axiom-candidate.
- The ladder + the failed-twice harvest trigger + the outbound gate are **DESIGN — pending this consult** (not built;
  A11: consult-before-produce on a D2/architectural change).

## Round-2 resolution — Brain consensus (2026-07-22)
Brain answered Q1–Q6; consensus reached (Opus+Brain). Governor ratification + wiring PENDING (deep-core, GI-63).
- **Q6 wiring:** do NOT build a new failure-counter. Wire the ladder as the BEHAVIOR that fires when ARCH-00406's
  **Output-Liveness Monitor** (GREEN/YELLOW/RED + 2-attempt-hard-stop per IBD-0024/GI-33/34, AWAITING-BUILDER-REVIEW)
  crosses its 2-attempt threshold. *(Haiku's gather DID surface ARCH-00406 §1/§6; Opus's packet under-weighted it —
  a synthesis miss, not a gather miss.)*
- **Q1 outbound:** strip-before-send ALLOW-LIST (describe problem-class + symptoms only), NOT PAE's 6 lenses (those
  screen inbound). NEVER send: GI/axiom/ARCH numbers, corespine names, governor-insights content, internal vocab, paths.
- **Q2:** cap is PER-ISSUE (consecutive escalation on the same issue), not lifetime.
- **Q3:** Rung 0 (reframe) first — EXCEPT when the 2 failures were under genuinely different root-cause hypotheses →
  straight to research (knowledge gap, not reasoning-depth).
- **Q4 70% headroom:** scope = tokens + agent-attempts + time + concurrent-agent-count + context-window/working-set.
  **GI, not axiom** (operational heuristic) — Governor's call on constitutional weight.
- **Q5 diversity:** **GI, not axiom**, homed on the escalation node — Governor's call.
