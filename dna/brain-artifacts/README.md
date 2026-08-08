# Brain Artifacts — Gated Intake Point
**Status:** ACTIVE | **tags:** [external-intake, brain-channel, security, gate]
**governed_by:** ARCH-00405 (Stage 1) · ARCH-00399 (Stage 2 / PAE) · ARCH-00433 STEP 7
**carved_out:** 2026-08-08 (executed independently ahead of ARCH-00433 ratification — Tuesday deadline)
**ratified:** Governor decree 2026-08-08 — gated, not open

---

## What this is
The landing point for Brain (Claude.ai) documents relayed by the Governor during scheduled copy sessions.
**NOT a storage folder — an INTAKE GATE.** Nothing here is usable until it passes Stage 1 + Stage 2.

---

## MANDATORY INTAKE REQUIREMENTS (Governor-ratified 2026-08-08)

Every artifact placed here MUST declare ALL of the following fields before it is usable:

```yaml
source: "[which claude.ai session / Brain project, e.g. 'claude.ai — CISEM Brain project 2026-08-08']"
trust_tier: "EXTERNAL (Brain channel)"
depollution_source: "[model/project used for Stage 1, e.g. 'claude.ai — CISEM Brain project']"
depollution_pass: "yes [date]"
```

A `-PURIFIED` sibling MUST exist alongside every raw artifact:
- `my-doc-RAW.md` → raw, Brain's original language preserved; **must carry `RAW-EXTERNAL` content marker** so [`RAW-PAIR`] triggers
- `my-doc-PURIFIED.md` → CISEM vocabulary, platform-specific references stripped, Stage 2 run

`[RAW-PAIR]` enforces the sibling requirement at commit time.

---

## Honest Scope (ARCH-00011 §3.5 — state verbatim, not implied)

`[RAW-PAIR]` check verifies: (a) every `*-RAW.md` file with `RAW-EXTERNAL` has a `-PURIFIED.md` sibling; (b) raw files are not contaminated with purified-section headers.

It does **NOT** verify the four declaration fields (`source:` / `trust_tier:` / `depollution_source:` / `depollution_pass:`) — field-presence enforcement is an ARCH-00405 Phase 1 follow-on (**NOT-YET-WIRED**).

It also **CANNOT** verify that ARCH-00405 Stage 1 actually ran faithfully in the claude.ai session. The Governor + Brain carry responsibility for Stage 1 compliance. The provenance stamp is the enforceable gate; the external act itself is trusted, not verified.

This is the same limit documented in `dna/checks/external-depollution-prompt.md` §Honest limit.

---

## The Process (for the Governor)

1. **Brain runs Stage 1** — Brain pastes the fixed depollution prompt (`dna/checks/external-depollution-prompt.md`)
   into a fresh claude.ai/Gemini project with **no CISEM context** and runs it on the document.
2. **Brain stamps provenance** — output carries `depollution_source: claude.ai — CISEM Brain project` + `depollution_pass: yes [date]`.
3. **Governor places artifacts here:**
   - `[filename]-RAW.md` — raw (Brain-original language; **must include `RAW-EXTERNAL` content marker**; `source:` + `trust_tier:` + `depollution_source:` + `depollution_pass:` declared in header)
   - `[filename]-PURIFIED.md` — Stage 1 output (neutralized essence, CISEM vocabulary applied by Brain/Governor)
4. **Opus runs Stage 2** inside CISEM: PAE (ARCH-00399) 6-lens check + Existing-First conflict-check before any governed use.
5. **Nothing is used** until the `-PURIFIED` sibling exists and `[RAW-PAIR]` passes.

---

## Scheduled Copy Session
2026-08-11 09:00 (Asia/Jerusalem)
Google Calendar event: https://www.google.com/calendar/event?eid=aHBjaGg4cGE2YXU3b2diMHY2Y3NpcTQxb2sgZmlua3lhcml2QG0

Brain needs `dna/checks/external-depollution-prompt.md` text relayed before this session.
(See that file for the verbatim prompt Brain should use for Stage 1.)

---

## Connection to ARCH-00405 / ARCH-00399
This directory is **ARCH-00405 Stage 1 → ARCH-00399 Stage 2 applied to the Brain channel**.
No new schema. No new check. Existing mechanisms pointed at a new inbound path.
The `[RAW-PAIR]` check (`dna/checks/plan-audit.sh`) already enforces the raw/purified sibling pair.

---

## Why this was carved out
ARCH-00433 (the enforcement-layer plan) is AWAITING dual review (GI-68 mandate) before ratification.
The scheduled copy session is 2026-08-11 — three days away. Both constraints cannot hold.
Carve-out decision: this stub is low-risk (touches nothing ratified, adds no new check, uses existing
mechanisms only) and time-critical. It ships independently; ARCH-00433 keeps its full GI-68 review.
See ARCH-00433 STEP 7 AMENDMENTS note.
