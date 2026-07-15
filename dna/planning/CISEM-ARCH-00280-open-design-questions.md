# Open Design Questions — Consolidated for Builder Consultation
Node ID: CISEM-ARCH-00280
Type: ARCH | Status: PROPOSED | Planning Status: COMMENTS-RECEIVED
depth_level: L2 | Position in schema: T-SYS
tags: [planning-domain, persona, relationships, review-required]
Goal: Three genuinely undecided design questions, consolidated for
joint Brain-Builder consensus.
Governing corespine: CS-CREATION-001

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
Open question: new corespine (CS-REJECTED-IDEAS-001?) or fold into
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
