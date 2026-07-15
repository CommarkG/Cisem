# Planning Domain Protocol
Node ID: CISEM-ARCH-00190
Type: ARCH | Status: PROPOSED | depth_level: L1 | Position in schema: T-SYS
tags: [planning-domain, protocol, plan-creation, enum]
Goal: Register the Planning Status enum as an enforced rule, not a
convention.
Governing corespine: CS-CREATION-001
Core-vs-Instance: planning recurs across multiple contexts, earns its
own node. Honest limit: still an instance until a SECOND plan follows
this same structure — not yet confirmed as permanent.

## Planning Status — registered enum, distinct from node Status
AWAITING-BUILDER-REVIEW -> COMMENTS-RECEIVED -> CONSENSUS-REACHED ->
IN-PROGRESS -> COMPLETE (SUPERSEDED — any state can transition here)

A node's Status tracks the node's own maturity. Planning Status tracks
the plan's review lifecycle — independent, since a plan can be
SUPERSEDED while the node it produced stays RATIFIED.

## Plan creation protocol
Every plan created in dna/planning/, never elsewhere. States full
reasoning inline, no assumed context. Separates "what changes now"
from "what does NOT change." Implementation begins ONLY at
CONSENSUS-REACHED — Builder comments, Brain response, explicit
agreement, relayed through Governor. No exception.
