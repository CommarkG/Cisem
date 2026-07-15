# Schema Placement Engine — T-SYS / T-DOM First Real Content
**Node ID:** CISEM-SCHEMA-00001
**Type:** ARCH | **Status:** DRAFT
**Goal:** Give T-SYS/T-DOM actual content instead of being a forward reference
nothing resolves — every prior mention this session (DNA schema, CLAUDE.md,
corespine "position in schema" fields) pointed here and found nothing.

## Precedent — this already happened once, informally
`CS-WEB-DESIGN-001` (example-only, NOT-YET-A-NODE) and `CS-PHYSICAL-DESIGN-001` (example-only, NOT-YET-A-NODE) were created as named-slot
placeholders, no content built, when the Design corespine tree was first
established. This node formalizes that instinct as a permanent rule.

## The rule
```
When a new element requires placement and its full T-SYS/T-DOM ancestor
chain doesn't exist yet:
  1. Auto-generate placeholder nodes for the missing ancestors
  2. Each tagged status: PLACEHOLDER, depth_level: L1
  3. Goal field: "reserved slot, pending definition"
  4. The triggering element's creation is NOT blocked waiting for the
     full branch to be designed top-down
```

This is the literal mechanism that lets any session's insight grow the
tree bottom-up, instead of requiring the whole schema pre-designed before
anything can be placed — directly resolves the chicken-and-egg pattern
named earlier this session.

## T-SYS / T-DOM — minimal definition (L1, expand at L2/L3 as branches fill in)
- **T-SYS:** the platform's own operational/structural trunk — corespines,
  protocols, gates, pipelines. Governs HOW the platform builds itself.
- **T-DOM:** domain trunks — Solutions and their content (e.g. SOL-GIFTPRO-001's
  Product/Supplier/Customer vocabulary). Governs WHAT the platform is used for.
- **Rule of thumb:** if removing it would break the platform's ability to
  govern itself, it's T-SYS. If it only affects one Solution, it's T-DOM.
