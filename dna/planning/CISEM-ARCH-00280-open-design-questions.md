# Open Design Questions — Consolidated for Builder Consultation
Node ID: CISEM-ARCH-00280
Type: ARCH | Status: PROPOSED | Planning Status: COMMENTS-RECEIVED
depth_level: L2 | Position in schema: T-SYS
tags: [planning-domain, persona, relationships, review-required]
Goal: Three genuinely undecided design questions, consolidated for
joint Brain-Builder consensus.
Governing corespine: CS-CREATION-001

**Existing-First exemption (§3.2b, I19):** Open design questions document — contains only questions awaiting Governor decisions, no files or nodes proposed for creation. No Existing-First search required for a deliberation/consultation document. (Named exemption class in I19 guidance: "if it is not a creating-plan, e.g. open-questions".)
**Independent Verifier:** [pre-P5 legacy — grandfathered 2026-07-18; assign on next revision]

## 1. New Persona — proposed name "Principal Engineer" (flagged, not final)
Traits requested: strong backbone, pushes back and insists, cruelly
honest while able to complement, pushes toward completion, deep
holistic thinking, enterprise-level standard. Proposed as a standing
review mode for reviewing Brain's plans before consensus, formalizing
the Opus-review pattern already used once (CISEM-ARCH-00170).
Open question: distinct subagent persona file, or a documented
checklist any reviewing instance applies? Builder's judgment matters
more than Brain's guess here.

## 2. Corespine/Template/Pipeline/Node relationships — not trivial
Contract-vs-Prototype inheritance covers corespine-vs-template.
Not resolved: where Pipeline fits relative to both, and how a Node's
three Position fields (schema/corespine/pipeline) actually compose.
Ask: Builder's independent read, not Brain asserting an answer.

## 3. Rejected-ideas as a hardwired Learning Loop input
CISEM-ARCH-00150 §2 currently reads as a static list. Needs its own
pipeline + governing corespine, tagged/statused, feeding
CS-LOOPS-001's learning-loop branch. Saved to git only.
Open question: new corespine (CS-REJECTED-IDEAS-001 — example-only, NOT-YET-A-NODE, decided AGAINST per Q3 answer below) or fold into
existing Learning Loop structure? Flagged, not decided.

## Requested
Comments on all three, same discipline as CISEM-ARCH-00180 — no
implementation until CONSENSUS-REACHED.

## Builder answers (2026-07-16) — Planning Status: COMMENTS-RECEIVED
Q1: Add a review checklist section to CISEM-ARCH-00240, not a second
artifact. One spec, one location. Core-vs-Instance: one review mode
does not earn two governed artifacts. Name "Principal Engineer" is
fine for internal use; if it surfaces externally, reframe as "review
mode" not "persona."
Q2: Corespine = contract (binding), Template = prototype (defaulting),
Pipeline = execution path (operational). Three orthogonal dimensions on
the same artifact — additive, not nested. Pipeline inherits from neither
corespine nor template. All three Position fields on a node compose
independently. This answer is now canonical, closing the open item.
Q3: Fold into CS-LOOPS-001/learning-loop, not a new corespine. Register
rejected-idea as a tag in CISEM-VOC-00001. When learning-loop is wired,
rejected-idea-tagged nodes enter it automatically.

## Q4 — The REAL template fork (added 2026-07-16, D7 deep dive) — Planning Status: AWAITING-GOVERNOR
The old "CS-TEMPLATE-001 A/B fork" (UX/UI-only vs platform-wide) is **settled** —
TEMPLATE-PROTOCOL-001 §1 correctly dissolved it as a category error (a template is
not a corespine). But the deep dive found the *actual* unresolved question hiding
underneath, plus two soft spots:
- **The two-level problem (undecided):** "template" exists at TWO levels that
  aren't reconciled — (a) a **node-level** template (is CISEM-ARCH-00008, the Node
  DNA schema, itself the template every node fills? ARCH-00290 flags this exact
  decision, unanswered) and (b) a **corespine-level** template
  (`{CORESPINE-ID}-TEMPLATE.md`, per TEMPLATE-PROTOCOL-001 §2). And ARCH-00230 is a
  **third** thing — a file-creation checklist. Q2 answered corespine/template/
  pipeline/node *composition* but never addressed that "template" is itself
  two-level. **Builder/Opus recommendation:** ARCH-00008 is a *contract/schema*
  (what fields MUST exist), not a *template* (a pre-filled default artifact) — keep
  them distinct: ARCH-00008 = node contract; a node template is a separate
  default-filled starter that *satisfies* ARCH-00008. Corespine templates are a
  different level again. Governor to confirm this three-way distinction.
- **SHOULD vs MUST (soft):** TEMPLATE-PROTOCOL-001 §2 says a RATIFIED corespine
  "SHOULD" have a template, "flagged INCOMPLETE" if not. Is INCOMPLETE a blocking
  state or cosmetic? Undefined. Recommendation: MUST for RATIFIED corespines;
  INCOMPLETE blocks the RATIFIED claim (ties to I1/I9 discipline).
- **Zero satisfiable instances (symptom):** the §2 rule applies only to RATIFIED
  corespines; the sole RATIFIED corespine (CS-THRESHOLD-001) has no file at all, so
  the rule currently governs nothing. Resolves once CS-THRESHOLD-001 gets a body
  (plan Step 8).
