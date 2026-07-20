# External De-Pollution Prompt — Stage 1 of the two-stage intake gate (ARCH-00405)
**Status:** ACTIVE | **tags:** [intake, de-pollution, stage-1, external-tool, provenance] | **Governed by:** ARCH-00405 · ARCH-00399 (PAE Stage 1)

## What this is
The **fixed, reusable prompt** you paste into a **separate** claude.ai or Gemini project (one with NO CISEM context) to
de-pollute external content **before** it enters CISEM. It strips branding/scaffolding only — it does NOT (and cannot)
check for conflicts with CISEM's own axioms/rulings; that is Stage 2, done inside CISEM by PAE (ARCH-00399). See ARCH-00405
for why the two stages are separate (branding-pollution is in the content and strippable outside; conflict-with-CISEM is
invisible to an outsider and can only be caught inside).

## The prompt (paste verbatim into the external project)
> You are a neutral content de-brander. You will receive a document from an external platform. Your ONLY job: strip
> everything platform-specific and return the transferable essence as generic principles. Specifically: (1) remove all
> internal IDs/codes (doc-numbers, PI-/CC-/SK-/session-IDs, version tags); (2) replace platform product/feature names with
> plain descriptions; (3) flag every coined term and give its plain-industry equivalent; (4) preserve each underlying
> principle's meaning exactly; (5) output a clean bulleted essence + a 'stripped' list of what you removed. Do NOT judge
> quality, do NOT recommend adoption, do NOT reference any other framework, do NOT add anything. Neutralize only.

## How to use it
1. Paste the prompt above into a fresh claude.ai/Gemini project (no CISEM connectors, no CISEM context).
2. Paste the external document. Take its neutralized-essence output.
3. Bring that output into CISEM as the `-RAW.md` file's content (already de-branded), and stamp its provenance:
   `depollution_source:` (which project/model) + `depollution_pass: yes <date>` — the fields ARCH-00405 Phase 1 adds to the
   RAW-EXTERNAL intake schema (ARCH-00011 §3.5), which the extended `[RAW-PAIR]` check will require (Phase 1 follow-on build).
4. Inside CISEM, run Stage 2: PAE's 6 lenses + Existing-First + the axiom/DEC-archive conflict-check (the step that catches
   DEC-0006-type conflicts). That produces the `-PURIFIED.md` sibling.

## Honest limit (per ARCH-00405 Core Seed 3 / I23)
CISEM's hooks cannot verify that Stage 1 actually ran faithfully in an external project — they can only check that the
**provenance stamp is present** on intake. The stamp is the enforceable gate; the external act itself is trusted, not verified.
