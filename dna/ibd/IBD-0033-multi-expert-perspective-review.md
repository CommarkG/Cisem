# IBD-0033 — Multi-Expert Perspective Review (Model×Mode)
**tags:** [technique, review, tier-routing, augmentation]
**status:** PARKED-RAW

## Verbatim capture (Governor, 2026-08-09)
"in order to benefit from variety of presenting the same task like a review of a plan
to different models it is also useful to ask a model like yourself to review something
from various top expert points of view [architect, optimization...] and you get much
richer insights than a general request"

## Context note (Opus, not part of verbatim)
This was clarifying "Item 7 / model×mode" from a prior relay. The technique:
instead of routing to different model TIERS (§3.0 Haiku/Sonnet/Opus), ask the SAME
model to adopt multiple EXPERT ROLES for reviewing a single artifact. Architect lens /
optimizer lens / security lens / UX lens — each surfaces different gaps. Orthogonal
to tier-routing; a perspective dimension that would augment it.

Potential CISEM application: multi-lens Opus review stage (e.g., within GI-68 dual
review, or as an optional Wizard Step within /cisem-plan). Related: ARCH-00426 WEE
(Weekly Evolution Engine) could use this to review weekly patterns.

## Note on consult status (Brain 2026-08-09)
Brain never received the model×mode paste — the paste marker was empty in both relay packets.
Parking is fine. But: a consult satisfied by parking CANNOT be cited as consulted.
If this is later promoted and requires Brain input, that consult must happen then, not retrospectively.

## Promotion path
Separate, later step — runs full §3 gates. Assigned IBD-0033; no CISEM ID until
promoted via /cisem-plan.
