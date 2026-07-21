---
id: KL-0002
tags: [knowledge-library, ux-ui, frontend, design-principles, external-source, brain-claude-ai]
Type: KNOWLEDGE | Sub_type: EXTERNAL-SOURCE
Status: PRINCIPLE-CANDIDATE (DIOS) · NOT-YET-RATIFIED as a CISEM artifact · SOURCE=external (Claude.ai "Brain")
Corespine: CS-FRONTEND-001 (candidate home — converges here, A8; promotion pending Governor)
Provenance: Governor-supplied 2026-07-21, produced by the Claude.ai "Brain" session ("CISEM Claude ai Brain ux-ui-principles 21.07.2026 15_18.md")
Fidelity_note: saved VERBATIM (Principle 19 — keep the signal). Paste-transfer encoding artifacts (mojibake "â") were
  normalized to their unambiguous intended characters (em-dash —, arrows, ×, é). No authored content altered. The
  Governor's paste in the session transcript is the byte-exact source of truth if ever needed.
Trust_note: EXTERNAL material = unratified suggestion (I22/I23). Reviewed, not inherited-as-fact. This file is the
  source-of-record; extraction of universal principles + branch arrangement is a SEPARATE Opus analysis (see park entry).
---

# UX/UI Principles — CISEM Build Platform  (Brain source, KL-0002)

**Status:** Living document — update in place as new principles are confirmed. Not yet a ratified corespine artifact; treat as working reference until placed in the schema.
**Purpose:** Single source of truth for visual/interaction rules so every page Claude Code builds is consistent without re-deriving these decisions each time.
**Scope:** Applies to all MVP product pages (onboarding, template preview, style/feature selection, generation, iteration). Does not apply to the CISEM internal schema browser (that's a separate, pre-existing tool whose visual style this system borrowed from — see Section 1).

---

## 1. Origin of the visual language

The dark/light theme, color tokens, and row/tree UI patterns were extracted from the existing CISEM internal schema-browser tool (screenshot-derived, confirmed by Governor). This is now the **confirmed design language for all MVP product pages** — not a placeholder, not one option among several.

### 1.1 External material review (2026-07-21) — a Gemini-produced document

A document titled `GEMINI_CISEM_UX_UI_Behavioral_Governance_Core.md` was submitted for review. Per standing policy, external-platform output is treated as **unratified raw suggestion material**, not inherited fact — reviewed here rather than merged wholesale.

**Assessment:** roughly 90% of the document was a restatement of content already in this file (the same five incidents, the same nine gaps, the same AI-trigger table, the same contrast-check function) — evidence it was derived from this document or this project's conversation, not independent analysis. Treated as an echo, not confirmation.

**Two things rejected, not adopted:**
- The document self-labeled as `CS-UXUI-001`, a ratified corespine artifact reference. This directly contradicts Section 13's explicit "not yet decided" status on that exact question. An external document has no authority to resolve a pending Governor decision by asserting it as already settled.
- The document's dark-mode `--green`/`--amber` values (`#238636` / `#9e6a03`, labeled "Verified") were computationally checked against what's actually shipped and found to be **worse** — 3.4–4.1:1 versus the shipped 6.2–7.5:1, several readings below the document's own asserted 4.5:1 minimum. A concrete demonstration of why an inherited "verified" claim from another AI still needs independent verification before being trusted.

**Three things adopted, with reasoning, not just because they were offered:**
- A concrete `1366×768` viewport figure for the above-the-fold test (Section 8) — replaces this document's previously vague "a standard viewport" with an actual testable number. Not independently re-confirmed as still the correct floor resolution; adopted for specificity, flagged as an assumption.
- An explicit "component state completeness" audit item (default/hover/focus/active/disabled/loading) — added to Section 8 as a genuinely new checklist line this document didn't previously have.
- The `GAP-01` through `GAP-09` naming convention for Section 12's ledger — adopted as a reference-naming convention only; the underlying descriptions and severity judgments remain this project's own.

Platform-specific references (the document's own branding, session/product names) were stripped before anything was incorporated, per the standing source-stripping rule for external material.

---

## 2. Color tokens — confirmed, contrast-audited

**Rule (non-negotiable, established after repeated failures below):** every color token must be checked against **every background it will actually render on**, not spot-checked against one. WCAG AA minimums:
- Normal text: **4.5:1**
- Large text (18px+/14px bold+): 3:1
- Non-text UI components (borders, icon outlines, focus rings): **3:1**

### Dark theme (default)
```css
--bg: #0d1117;
--bg-elev: #161b22;
--bg-elev-2: #1c232c;
--accent-bg: #12181f;
--border: #6c6c72;        /* verified 3.0+ against all 4 backgrounds above */
--text: #c9d1d9;          /* verified 10.2–12.3:1 against all 4 backgrounds */
--text-dim: #8b95a1;      /* verified 5.2–6.2:1 against all 4 backgrounds */
--theme-accent: #58a6ff;  /* user-selectable, see Section 4 */
```

### Light theme
```css
--bg: #f6f8fa;
--bg-elev: #ffffff;
--bg-elev-2: #eaeef2;
--accent-bg: #eaeef2;
--border: #78787c;        /* verified 3.77–4.4 against all backgrounds */
--text: #1c2128;          /* verified 15.2:1 */
--text-dim: #57606a;      /* verified 5.5–6.4:1 against all backgrounds */
--theme-accent: #0969da;  /* darker than dark-mode blue — same hue family, adjusted for contrast on white */
```

**Do not introduce a new color outside this token set without running the contrast check in Section 6 first.** This includes one-off inline `style="color:#..."` — every one of the low-contrast bugs found in this project came from a value written outside the token system.

---

## 3. What went wrong before this was written (so it isn't repeated)

- A reported contrast issue was fixed only on the exact element flagged, not generalized to every element using the same token. Took three separate user reports before the actual token (`--border`) was audited at all.
- Hardcoded `#fff` and `#0d1117` were used directly in a few components instead of theme-aware tokens (`--text`, `--demo-btn-text`) — these broke silently when light mode was added later.
- **Standing rule going forward:** when any contrast/visibility issue is reported, audit the *token*, not the element. Fix propagates automatically to every component that inherits it.
- **Orientation failure on the Template Preview screen (2026-07-21):** the screen presented full customization controls (theme, density, size, features) before establishing what the screen was, why it mattered, or what to do next. A first-time customer lands there with no way to answer "where am I / what's expected of me / what's the benefit / what's next" without hunting — the one explanatory sentence was small and in a corner, and the primary action (Confirm and continue) was below the fold. This was controls-first, orientation-never. See Sections 7–9 for the standing fix.
- **Fabricated-match claim, compounding the above (2026-07-21):** the continuity fix was applied to one element (the orientation banner headline) without checking whether the rest of the screen was still consistent with it. A person typed "I am a carpenter" into the free-text "Other" field; the banner correctly echoed their words, but the template preview simultaneously displayed "Matched from your answers — dental / small clinic" with an unrelated CRM — a static claim that was never true for this input. Underneath that, the free-text description and uploaded files were captured into a variable and never used anywhere downstream — a genuine dead end, not just a copy problem. Fixed by: (1) tracking whether a real match actually occurred (`entryMode`/`matchedIndustry`), (2) routing genuinely unmatched input to the already-designed Stage 3-Fallback screen instead of presenting an unrelated template as if it were a match, (3) surfacing the captured description/files on both the fallback screen and the confirm summary instead of discarding them. See Section 9's new "Fabricated personalization" row.

---

## 4. Component patterns established

### 4.1 Grouped controls ("chip" pattern)
Related controls (e.g. a label + its options) are wrapped in one bounded container — background `--bg-elev`, `1px solid var(--border)`, `border-radius: 8px` — rather than separated only by spacing or divider lines. Divider lines alone were tried and rejected: too subtle to convey grouping.

### 4.2 Inline help (tooltip pattern)
Any control whose purpose isn't self-evident from its label gets a small `?` icon next to the label:
- 14px circle, `1px solid var(--text-dim)` border, `cursor: help`
- `tabindex="0"` and `role="button"` — must be keyboard-reachable, not mouse-only
- Tooltip content: one short sentence, plain language, states what the control actually changes and whether it's reversible/cosmetic-only
- Tooltip background must use a theme-aware token (`--bg-elev-2`), never hardcoded

### 4.3 Theme toggle
Single icon button, top-right of the top bar: crescent (dark) in dark mode, sun in light mode. Toggles a `data-theme` attribute on `<html>`; all colors respond via CSS custom property overrides, not JS-driven inline styles.

### 4.4 Feature toggles
Each feature is a labeled switch carrying its own template-source ID as a small monospace tag beneath the name (e.g. `CS-CRM-BILLING-001`) — ties the visible toggle back to the underlying verified template component it controls.

### 4.5 Page tabs (multi-screen preview)
When a preview needs to show more than one screen of an app, use tabs above a single preview frame (not separate stacked frames). One `.page-view` per tab, `display:none` unless `.active`.

### 4.6 Layout consolidation
All customization controls (appearance + features) live in **one horizontal row** above the preview, not split between a top bar and a side panel. Preview area is full-width below that row. (This was iterated from an initial two-column layout — the single-row-above/full-width-below arrangement is the confirmed direction.)

### 4.7 Persistent top nav chrome (two rows)
Row 1: brand mark, **Index** dropdown (functional — jumps between pages, highlights current page), a live filter input (filters visible items, updates an item count in real time — not decorative), then right-aligned: language indicator, theme toggle, edit icon, help icon.
Row 2: back/forward history buttons (real navigation stack, not browser history — disabled at the ends) + breadcrumb showing Home / current step / current page, each segment clickable where it represents a real jump target.
No new colors were introduced for this component — every element reuses existing tokens (`--text`, `--text-dim`, `--accent-bg`, `--border`), consistent with Section 2's rule.

---

## 5. Copy/tone rules

- Mentor tone for anything exploratory/reversible: state plainly that nothing is final and changes can be made later (reduces decision-pressure per Governor's stated principle on premature commitment).
- No filler, no exclamation points, sentence case throughout.
- Labels name what the person controls, not how the system implements it (e.g. "Controls: Small/Large," not "Button padding scale").

---

## 6. Contrast-check procedure (run before shipping any new page)

```python
def lum(hex_color):
    hex_color = hex_color.lstrip('#')
    r,g,b = int(hex_color[0:2],16)/255, int(hex_color[2:4],16)/255, int(hex_color[4:6],16)/255
    def lin(c): return c/12.92 if c<=0.03928 else ((c+0.055)/1.055)**2.4
    r,g,b = lin(r),lin(g),lin(b)
    return 0.2126*r+0.7152*g+0.0722*b

def contrast(c1,c2):
    l1,l2 = lum(c1),lum(c2)
    l1,l2 = max(l1,l2),min(l1,l2)
    return (l1+0.05)/(l2+0.05)
```
Run every token against every background variable it can appear on (`bg`, `bg-elev`, `bg-elev-2`, `accent-bg`) in both themes. Text needs ≥4.5, UI-component borders/icons need ≥3.0. Do this at the token level before building components, not after a report.

---

## 7. Questions — ask these before building any screen

These are the core essence carriers. Answer all four in the actual visible copy of the screen — not inferable from context, not resolvable via a tooltip — before writing any component code:

1. **Where am I?** — Stated in plain, customer-facing language. Not "Template Preview," not a stage code. A customer should be able to read one line and know what kind of moment this is (e.g. "Here's the CRM we built from what you told us").
2. **What's expected of me here?** — Is there a required action, or is this purely informational/optional? If nothing is required, say so explicitly ("You don't need to change anything here").
3. **What's in it for me?** — State the benefit, not the mechanism. Not "customize theme, density, and features" (that's what the screen *does*) but "make this feel like yours" or "this already works — make it match your style if you want" (that's what it's *for*).
4. **What happens next, and how do I do it?** — The next action must be nameable in one sentence, and the control that performs it must be visible without scrolling on a standard viewport at the moment the person is ready to act — not assumed to be found by scrolling down.

**Supporting questions, asked per-component rather than per-screen:**
- If I removed every tooltip on this screen, would a first-time user still understand what to do? (If no, the explanation needs to move into visible copy, not stay in a hover state.)
- Is any internal name — a stage number, a corespine ID, an admin-only term — appearing in customer-facing text?
- Can this screen be completed with zero decisions (all defaults accepted), and if so, is that path obvious rather than assumed?
- Does the screen restate what the person already told the system (their intent, their prior answers), or does it silently drop that context once they move to the next step?

### 7.1 The walkthrough discipline (added 2026-07-21, in the person's own words, with context)

The four questions above can be satisfied on paper while still failing in practice, if they're answered by an engineer checking boxes rather than someone actually imagining themselves as a first-time user on that specific screen. The distinction matters: an engineer asks "does this screen contain the required information?" A UX/UI expert asks "if I had never seen this before, would I actually understand it, in the moment, without help?" Those are different questions, and the second one is the one that catches real failures. Five questions, asked **per screen, in the shoes of a first-time user seeing it for the first time**, not as an abstract checklist:

1. **What will this specific user understand when they first look at this page?** — Not what the screen is capable of communicating in principle, but what actually lands in the first few seconds, given everything else competing for attention on the screen (controls, buttons, other text). If the honest answer is "it depends what they happen to read first," the hierarchy is wrong.
   - **Why this is true, not just a preference:** this is a visual-hierarchy and attention problem, not a copy problem. Eyes land on the highest-contrast, largest, or most isolated element first (this is why the orientation banner had to be visually dominant, not just present — Incident 4 added the copy but the *first* fix attempt still lost to the controls below it on pure visual weight until size and position were also corrected). A screen can say the right thing and still fail this question if something else on the page is louder.
   - **Edge case this hides:** a returning user seeing this screen for the second time has different needs than a first-time user — they may already know what it means and want to move faster. The question as asked is about first-time understanding specifically; a screen optimized purely for first-time clarity can become friction for someone who's seen it five times. Not yet resolved in this project — flagged in Section 12.

2. **Is the connection to the previous page/stage clear?** — A person doesn't experience screens in isolation; they experience a continuous thread. Every screen should make it obvious it's a continuation of what came before (what they typed, what they picked, what they were told) — not a cold restart that happens to appear next in sequence. This is Section 7's continuity question, restated as something to actually feel, not just check.
   - **Why this is true:** this is the same principle behind why a good conversation with a person feels different from filling out a form one field at a time — continuity signals that the system is actually listening, not just collecting. Its absence is what made Incident 5 read as "the AI doesn't remember," even though the data technically existed in a variable; a value sitting unused in memory provides zero felt continuity.
   - **Edge case this hides:** continuity built through JavaScript variables in a single page session provides no continuity across a **browser refresh** — the moment the tab reloads, `intentInput`, `trailAnswers`, `capturedDescription`, and everything else return to empty, and the person is silently dropped back to a stranger-state with no warning that this happened. This is a **confirmed, currently unaddressed gap in the actual file** — flagged plainly in Section 12, not fixed without permission per the standing rule.

3. **Is there a clear, intuitive indication of the options — and of the recommended one?** — When a screen presents choices, equal visual weight across all of them silently asks the person to do analysis work (which one is right for me?) that the system is often in a better position to do for them. A recommended or most-likely option should be indicated through an actual visual mechanism — color, size, position, explicit text, or a directional cue like an arrow — not left for the person to infer by re-reading every option equally. This does not mean removing or hiding the other options; it means giving the person a confident, low-effort starting point while keeping every alternative fully available.
   - **Why this is true (Hick's Law):** the time it takes a person to make a decision increases with the number and complexity of choices in front of them. A recommended option doesn't reduce the number of choices — it reduces the *decision cost* of the common case, while leaving every other path fully intact for the person who wants it. This is why "additive, never remove an option" and "highlight a recommendation" are not in tension — one is about preserving optionality, the other is about reducing unnecessary cognitive work for the majority path.
   - **Edge case this hides:** a recommendation mechanism that's *always* confident (like the current keyword-matched "Suggested for you" badge) needs a defined behavior for when it has **no real signal** — right now, if no keyword matches, no card is highlighted, which is correct; but if this logic were ever made more aggressive (e.g., defaulting to the most common industry when uncertain), that would silently become the exact "fabricated personalization" failure from Incident 5, wearing a different visual costume. Any future recommendation logic must preserve an honest "no confident suggestion" state rather than always picking something.

4. **Is the benefit of the next step clear?** — Before asking someone to act, the screen should make it obvious what they gain by doing so, not just what the action technically does. "Continue" is a mechanism; "see it running with your own information" is a benefit. If the copy only names the mechanism, this question fails even if the button itself is perfectly visible.
   - **Why this is true:** people are more reliably motivated by an anticipated outcome than by an instruction to perform an action — this is the basic distinction between telling someone what to do and telling them what they'll get. A button labeled only with the mechanism relies entirely on the person already trusting the process; a button whose surrounding copy names the payoff doesn't need that trust to already exist.
   - **Edge case this hides:** the benefit statement itself can go stale or become false partway through a flow. The Generating screen's benefit framing ("see it running") assumes generation *succeeds*. **There is currently no failure state for generation in the actual file** — the simulated progress bar always completes at 100%. A real system's generation step can fail (bad input, timeout, an unsupported combination of features), and the benefit-forward copy that works for the success path becomes actively misleading if shown while something has actually failed silently. Confirmed gap, flagged in Section 12.

5. **Is the next step actually indicated?** — Distinct from question 4: this is asking whether it's visually and structurally obvious *that there is one*, independent of whether its benefit is well-articulated. A screen can explain a benefit beautifully and still leave the person unsure whether they're done, whether to scroll, or whether to look elsewhere for what to do next.
   - **Why this is true (visibility of system status):** people need continuous, honest feedback about where they are in a process and what state the system is in — uncertainty about "am I done here" is itself a source of hesitation and abandonment, independent of whether the actual next action is well-motivated.
   - **Edge case this hides:** a clearly-indicated next step during a **destructive or irreversible action** needs a different treatment than a clearly-indicated next step during a routine one. "Start over" on the Done screen is a single click that silently wipes the entire session (intent, discovery answers, uploaded file names, all captured state) with no confirmation step. The *visibility* of that next step is not in question — it's clearly indicated — but its irreversibility is not communicated with anything like the same clarity. This is a **confirmed, currently unaddressed gap**, flagged in Section 12.

**Working rule going forward:** every existing screen gets re-walked against these five before any new screen is built, and every new screen gets built against them from the start rather than retrofitted afterward. Fixes arising from this walkthrough are additive by default — clarifying, highlighting, and labeling what's already there — not removals. Removing or hiding an existing element requires explicit permission first, every time, regardless of how strong the UX case for removing it seems.

### 7.2 Edge-case checklist — the questions above, stress-tested against what actually breaks

The five questions in 7.1 describe the *happy path* — a first-time user, on a working connection, seeing a screen exactly once, moving forward. A complete review has to also ask what happens when any one of those assumptions is false. This checklist is organized by category, and each category is stated as a question to ask against every screen, not as an abstract principle to admire.

**A. State completeness — does this screen know how to be empty, loading, wrong, and successful, not just successful?**
- What does this screen look like with zero data (e.g. Gallery with nothing uploaded yet)? Is an empty state designed, or does the layout just collapse or look broken?
- What does this screen look like *while* something is loading or processing, beyond the one Generating screen already built? Does clicking Continue on Confirm feel instant, or is there a moment of uncertainty before Generating appears?
- What does this screen look like when something has genuinely failed (a network error, a validation failure, a generation failure)? **Confirmed gap:** no screen in the current file has a designed failure state — every path assumes success.
- Does a success state say so explicitly, or is success only inferable from the absence of an error?

**B. Temporal and session edge cases — does the system survive time passing, or interruption, not just a clean run-through?**
- What happens on browser refresh, tab close-and-reopen, or accidental navigation away? **Confirmed gap:** every piece of captured state in this project lives in JavaScript variables with no persistence — a refresh at any point returns the person to Launch with everything silently gone, and nothing tells them this happened.
- What happens if a person leaves the flow idle for an extended period and returns — is there a session-expiry concept, and if so, is it communicated before it's enforced, not just after?
- What happens if someone uses the browser's own back/forward buttons (not the in-app arrows) — does the app's internal state (`currentScreen`, `entryMode`) go out of sync with what's visually shown? **Not yet tested; flagged as unverified, not confirmed either way.**

**C. Input edge cases — does the screen assume well-behaved input, or does it handle what people actually type?**
- What happens with an empty required field (e.g. Confirm and continue clicked on Launch with no intent typed at all)? Is there a validation message, or does it silently proceed with "(not entered)" — which is what currently happens, and is at least honest, but was never a deliberate design decision, just what fell out of the code.
- What happens with extremely long input (a paragraph pasted into the intent field, or the free-text "Other" description)? Does layout hold, or does text overflow, get clipped, or push other elements off-screen?
- What happens with input in a script other than Latin characters — given the explicit bilingual (English/Hebrew) requirement for this project, **this is a confirmed, currently untested gap**: nothing in the file has been checked against Hebrew input or right-to-left text rendering, and no layout in this project has been evaluated for RTL at all.

**D. Concurrency and multi-actor edge cases — does the screen assume one person is the only one touching this data?**
- On the Admin screen specifically: what happens if two admins edit the same question category at the same time? There is currently no locking, versioning-conflict, or "someone else is editing this" indicator — only a static version number and last-editor name, which would silently be overwritten by whoever saves last.
- What happens to a category's Pending Ratification status if the person who submitted it is different from the person expected to ratify it — is there any signal distinguishing "waiting for someone else" from "waiting for you"?

**E. Accessibility edge cases beyond keyboard reachability — Section 9's fix covered tabbing and Enter/Space; a complete pass goes further:**
- Does anything communicate meaning through color alone? (The status badges — Live/Pending/Draft — currently rely on green/amber/gray text color as the *only* differentiator beyond the label text itself, which is fine since the label text also differs, but this should be verified deliberately rather than assumed.)
- Does anything rely on motion or animation to convey state that a person with motion sensitivity, or a screen reader, wouldn't perceive? (The progress-bar fill and swatch-selection scale transform are decorative reinforcement, not the sole carriers of meaning — verified acceptable, not yet formally confirmed against screen-reader output.)
- Are interactive elements' accessible names (what a screen reader announces) meaningful on their own, independent of surrounding visual context? **Not yet verified** — the keyboard-accessibility fix added `role="button"` and `tabindex`, but did not add `aria-label`s where a div's visible content alone might not announce clearly (e.g. a bare swatch circle with only an inline background-color style has no text content for a screen reader to announce at all). **Confirmed gap.**

**F. Trust and transparency edge cases — does the person know what happens to what they give the system?**
- When a person uploads a file in the "Other" panel, is there any indication of what happens to it, how long it's kept, or who can see it? Currently: none. The file name is captured and displayed back later, but nothing addresses the underlying question a real person would have.
- Is it clear anywhere that this is a walkthrough/demo rather than a live, data-retaining product? For an internal review tool this may be irrelevant, but the question should be asked deliberately, not assumed away.

**G. Reversibility and destructive-action edge cases — does every irreversible action get treated with the weight its irreversibility deserves?**
- Are irreversible actions (Start over, wiping a whole session) visually distinguished from reversible ones (toggling a feature, changing a theme), or do they currently share the same button styling? **Confirmed: they currently share the same `.btn`/`.btn.secondary` styling as every reversible action in the file** — nothing about "Start over"'s visual treatment signals that it's different in kind from "Back."
- Is there a confirmation step before the irreversible action executes, proportional to what's actually lost? **Confirmed gap** — clicking "Start over" executes immediately with no "are you sure" step.

**H. Cognitive-load edge cases — even a well-labeled screen can simply ask for too much at once.**
- How many distinct decisions does this screen ask for in one view? (The Preview screen asks for four simultaneously — Theme, Density, Controls, Features — before any of them are strictly necessary to proceed. This was accepted as a deliberate consolidation decision earlier in this project, not an oversight, but it's worth naming as a real trade-off against this specific principle rather than treating the earlier consolidation as free of cost.)
- Is related information chunked into groups a person can hold in mind at once, or presented as one undifferentiated list? (The "chip" grouping pattern in Section 4.1 exists specifically to address this — worth re-affirming as the reason that pattern exists, not just a visual preference.)

**Standing rule for this section:** every item above marked **"confirmed gap"** is a real, verified absence in the current build, not a hypothetical. None have been fixed as part of writing this checklist — per the standing permission rule, identifying a gap is not authorization to change or remove anything. See Section 12 for the consolidated list of what's confirmed-open from this pass, awaiting a decision on priority and approach.

---

## 8. Audit — run this against anything already built

A checklist for catching what Section 7 was supposed to prevent, applied after the fact:

- [ ] **Viewport test:** Screenshot the screen at a **1366×768 viewport** (a defensible floor for "standard laptop," not the highest-resolution case) with no scrolling. Can the four questions in Section 7 all be answered from that single screenshot alone? If any answer requires scrolling, hovering, or clicking, that's a failure. *(Concrete number adopted from external review — see Section 1.1; not yet independently re-verified as still the right floor, but a specific testable number beats an undefined "standard viewport.")*
- [ ] **Jargon scan:** Search the screen's visible copy for any term that only makes sense to the people building the system (stage labels, internal IDs, tool names like "Template Preview"). Anything found gets rewritten in customer language or moved to a place customers don't see (e.g. dev-only debug labels).
- [ ] **Tooltip-dependency check:** For every `?` icon or hover-only explanation, ask: if this were deleted, would the screen still make sense? If no, promote that content into visible copy — a tooltip is for elaboration, not for load-bearing explanation.
- [ ] **Primary-action visibility:** Identify the single most important action on the screen. Confirm it renders above the fold at the point a person would naturally reach for it — not assumed reachable via scroll.
- [ ] **Continuity check:** Does the screen show any trace of what the person already told the system (their own words, their prior choices), or does each screen start cold as if the person is a stranger to their own session?
- [ ] **Zero-decision path check:** If a person changes nothing on this screen, is it obvious they can still proceed, and would they know that without reading anything?
- [ ] **Component state completeness:** For every interactive component, has default, hover, focus, active, disabled, and loading state actually been considered — not just the one state that happened to get built first? A control with only its default state designed is a component that hasn't actually been finished.

This audit is meant to run automatically on every new screen before presenting it, not only after a person reports a problem — same standing rule as the contrast-token audit in Section 6.

---

## 9. AI triggers and default reactions — name them so they're caught, not repeated

These are patterns an AI builder (this system included) defaults toward unless explicitly checked against. Naming the trigger, why it happens, and the correction:

| Default trigger | Why it happens | What to do instead |
|---|---|---|
| **Controls-first layout** | The customization mechanism is the most recently-discussed, most technically interesting part of the build, so it gets built first and placed most prominently. | Orientation copy (Section 7's four questions) goes above or alongside controls, not after them. The benefit statement is the hero; controls are secondary. |
| **Internal naming leakage** | Stage labels, corespine IDs, and tool names are what's in the working spec, so they get reused verbatim in user-facing text because that's the readily-available language. | Every piece of customer-facing copy gets a deliberate pass to translate system language into customer language — "Template Preview" becomes "Here's your CRM." |
| **Tooltip-as-sufficient-explanation** | Adding a `?` icon *feels* like solving the explanation problem, so the underlying copy doesn't get written at load-bearing strength. | Apply the audit's tooltip-dependency check (Section 8) before considering an explanation "handled." |
| **Below-the-fold primary action** | Bottom-anchored action bars are a common, easy layout default, built without checking against an actual viewport size at the moment the action is needed. | Explicitly test primary-action visibility (Section 8) against a real viewport before shipping, not just build the layout and assume it fits. |
| **Feature-completeness over guided attention** | Showing every control and every toggle demonstrates capability and feels thorough, so it's the default output shape. | Ask which single thing the person needs to notice first, and structure visual hierarchy (size, position, contrast) around that — not around showing everything at once. |
| **Silent defaults** | Reversibility ("nothing here is final") feels like a nice-to-have footnote, so it gets built as a small, low-emphasis note rather than a structural element. | If a screen's core value proposition is "nothing is locked in," that has to be load-bearing copy — near the top, in the same visual weight as the heading, not a caption. |
| **Cold-start screens** | Each screen is often built and reasoned about in isolation, so context carried from prior screens (the person's own words, earlier choices) doesn't automatically get threaded through. | Explicitly design each screen to reference what the system already knows about this specific person's session — Section 7's continuity question. |
| **Fabricated personalization** | Static, hardcoded content ("Matched from your answers — X") is easy to write once and reuse everywhere, so it gets shipped as if it were always dynamically true, even on paths where no real matching logic exists yet. | Never let a screen claim personalization it can't back up. If there's no real match, say so explicitly (this is what Stage 3-Fallback exists for) — a confident false claim is worse than an honest "we don't have this yet," because it's actively caught and erodes trust rather than just under-delivering quietly. |
| **Orphaned captured input** | Building a data-capture control (a text field, a file upload) is visually complete once it looks and behaves correctly, so it's easy to consider "done" without checking whether anything downstream actually reads the value. | Every input that captures user data must have its consumer identified before the control is considered finished — if nothing reads it yet, either wire a real consumer or don't build the capture UI until there's somewhere for it to go. |

**Why this table matters more than the individual fixes:** each of these is a pattern that will recur across every future screen unless it's named as a pattern, not just corrected as a one-off. The Template Preview failure in Section 3 is a specific instance of the first, third, and fourth rows here, arriving together, which is exactly the type of compounding failure this table exists to catch before it ships next time.

---

## 10. AI behavior incident log — full detail

This section exists because naming a pattern in a table (Section 9) is not the same as recording exactly what happened, why, and how it was actually fixed. Every incident below is **confirmed** — it happened in this project, was pointed out by the Governor, and the resolution described was actually implemented in the corresponding file, not just proposed. This log is the evidentiary backing for Sections 7–9; if those sections are ever revised, check whether it's consistent with what's recorded here first.

### Incident 1 — Contrast fixed at the instance level, not the token level (three-pass failure)

**Symptom reported:** Text and borders were reported as too low-contrast to read comfortably against the dark background, on a specific element (a mentor-note caption).

**What actually happened, in order:**
1. First report: one specific element (the mentor-note text) was flagged. The fix changed only that element's color from `--text-faint` to `--text-dim`.
2. Second report ("you have it in multiple places"): a search was run for the same CSS variable, and several more instances were found — but the fix applied a self-invented rule ("sentences get fixed, short uppercase labels stay faint — that's intentional hierarchy") rather than an objective check. This rule was never validated against actual contrast math.
3. Third report (with a marked-up screenshot circling the exact labels excluded in step 2): the invented "labels can stay faint" rule was directly disproven. Actual WCAG contrast ratios were computed for the first time in this incident and showed `--text-faint` measured **~2.83:1** against the primary background — nowhere close to the 4.5:1 minimum for normal text, regardless of whether it was a sentence or a label.

**Root cause (confirmed, stated by the person and validated by the actual math):** every fix targeted the specific element pointed at, using subjective judgment about what "looked fine," instead of computing contrast against every background the shared token actually renders on. The underlying token (`--border`, `--text-faint`) was never audited as a token until the third report — it had been broken since the very first version of the file.

**Resolution actually implemented:**
- Computed real WCAG contrast ratios (relative luminance formula, both themes) for every token against every background variable it appears on (`bg`, `bg-elev`, `bg-elev-2`, `accent-bg`).
- Replaced `--border` (dark: was `#21262d` at ~1.1–1.2:1, fixed to `#6c6c72`, verified 3.0+ against all four backgrounds) and `--border` (light: was `#d0d7de` at ~1.3–1.5:1, fixed to `#78787c`).
- Replaced `--text-dim`/`--text-faint` (dark: was `#7d8590`, failed at 4.25:1 on one background; fixed to `#8b95a1`, verified 5.2–6.2:1 across all backgrounds).
- Ran the same audit against every remaining color pairing in the file before considering the fix complete, not just the ones reported.

**Standing rule now in force:** Section 6's contrast-check procedure, run at the token level before shipping, not after a report. Section 2's rule that no color may be introduced outside the audited token set.

---

### Incident 2 — Cross-file navigation caused a real 404

**Symptom reported:** Clicking "final continue" led to an actual browser 404 page.

**What actually happened:** The product was built as three separate HTML files (onboarding, template preview, admin), cross-linked with real relative paths (`location.href='template-picker-page.html'`, etc.). This works only if all three files are downloaded and kept together in one folder on the person's own machine. It does not work when each file is previewed individually through the chat interface's file-preview mechanism, because each file is served at its own address with no shared relative path structure — the link target genuinely does not exist at the location the browser looks for it.

**Root cause (confirmed):** an architecture (multiple files, real relative links) was chosen and built out over several turns without verifying it against the actual environment the person would be using to view it. The mistake compounded silently — each new page added more cross-file links before the fundamental assumption was ever checked.

**Resolution actually implemented:** the three files were merged into one self-contained file (`cisem-build-full-cycle.html`) with a single shared `<body>` containing every screen as a `div.app-screen`, and one JavaScript navigation function (`goToScreen(id)`) driving visibility. There is no longer any file boundary for a link to fail across — every "page" is a state within one document, so no navigation target can be missing.

**Standing rule now in force:** no new page in this project is built as a separate file with links to sibling files. All screens live in one document with internal state-based navigation, unless a future, deliberate decision changes the deployment model (e.g. real Git/Supabase-backed multi-route hosting, which is explicitly out of scope for this MVP walkthrough).

---

### Incident 3 — Unwired primary action (silent dead end)

**Symptom found (proactively, before it was reported as a second 404):** the "Confirm and continue" button on the template preview screen had no `onclick` handler at all — clicking it did nothing.

**Root cause (confirmed):** a button was built to complete the visual layout of a screen (a confirm bar needs a confirm button) without verifying that every actionable element on the screen actually has a wired destination. This is a checklist gap, not a one-off typo — the same class of gap that produced Incident 2's dead link, just silent instead of loud (a 404 is at least visible; a no-op button fails invisibly, which is arguably worse).

**Resolution actually implemented:** wired the button to `goToScreen('confirm')`, and — as a direct consequence of building Incident 2's merged navigation model — every other interactive element that changes screen state was audited for a real handler in the same pass (Continue/Back buttons across all onboarding, preview, confirm, generating, and done screens).

**Standing rule now in force:** before presenting any new screen, every clickable element with the visual affordance of an action (a button, a labeled link, a "Continue"/"Confirm"/"Skip" control) must be checked for an actual wired handler, not just checked for correct appearance.

---

### Incident 4 — Orientation failure: controls-first, primary action below the fold, internal jargon in customer-facing text

**Symptom reported:** a Governor, imagining themselves as a first-time customer landing on the template preview screen after answering onboarding questions, could not answer from the visible screen alone: where am I, what's expected of me, what's the benefit, or what's next.

**What was actually on the screen at the time of the report:**
- The breadcrumb read "Template Preview" — internal system naming, not customer language.
- The first visual content after the top bar was a dense row of customization controls (Theme, Density, Controls, Features) — powerful, but presented before any statement of what the screen was or why it mattered.
- The only explanatory copy on the whole screen ("Nothing here is final — click anything to preview live") was a single small sentence, low visual weight, positioned in a corner.
- The primary action ("Confirm and continue") was in a bottom-anchored bar that did not render within a standard viewport without scrolling.

**Root cause (confirmed, and this is the pattern Section 9 exists to catch generally):** the customization mechanism was the most recently built, most technically interesting part of the screen, so it was placed first and given the most visual weight — orientation and benefit-framing copy was treated as a minor addition rather than the primary content. This is "controls-first layout," "internal naming leakage," and "below-the-fold primary action" (Section 9 rows 1, 2, 4) arriving together on the same screen.

**Resolution actually implemented:**
- Added an orientation banner as the *first* element inside the preview screen — a heading, a one-sentence benefit statement, and a repeated "Continue" button, all rendered above the controls, not after them.
- Duplicated the primary action at the top of the screen so it is visible without scrolling at the moment a person is ready to act, in addition to the original bottom bar.
- Renamed the customer-facing breadcrumb label from "Template Preview" to "Your Build."
- Wrote Sections 7 (Questions), 8 (Audit), and 9 (AI Triggers) specifically so this class of failure has a named checklist to run against future screens before they ship, not only after a report.

**Standing rule now in force:** Sections 7–9 in full; specifically, no new screen ships without the Section 8 viewport test (can Section 7's four questions be answered from one screenshot, no scrolling, no hovering).

---

### Incident 5 — Fabricated match claim, plus orphaned captured data (the deepest incident, two failures compounding)

**Symptom reported:** a person typed "I am a carpenter" into the free-text "Other" field during onboarding, then reached the template preview screen. The orientation banner (fixed in Incident 4) correctly echoed their words back ("Here's the start of 'I am a carpenter'…"), but the same screen simultaneously displayed "Matched from your answers — dental / small clinic" alongside an entirely unrelated dental-patient CRM. The person separately noted the AI must "remember what happened in all previous stages" — meaning this wasn't read as a cosmetic mismatch, but as the system visibly not tracking its own state.

**What was actually happening underneath:**
1. The orientation banner's dynamic text (added in Incident 4's fix) pulled from the Stage 1 intent field only. It was never checked against whether the rest of the screen's copy was consistent with the same input — the exact "fix the instance, not the pattern" mistake from Incident 1, recurring in a new form: continuity was patched in one place (the headline) and left broken everywhere else on the same screen (the preview subtitle, the hardcoded "dental / small clinic" template description).
2. Separately, and more seriously: the free-text description and any uploaded files from the "Other" panel were captured into JavaScript variables (`uploadedFiles`, and the textarea's value) and then **never read by anything downstream.** Every path out of the discovery screen — the sub-branch "Other" options, the top-level "Other" card, and the ambiguous "Skip to template match" button — led unconditionally to the same hardcoded dental-CRM preview screen, regardless of what, if anything, the person had actually said.
3. This input ("I am a carpenter") was, in fact, exactly the scenario the platform's own Stage 3-Fallback branch (no-template-match) was designed months earlier in this same project to handle — task creation, honest "closest sample" framing, surfacing the captured description back to the person. That branch had been fully specified (3f.1 through 3f.6) but never actually wired into any screen.

**Root cause (confirmed):** two separate defaults compounded. First, "Fabricated personalization" (Section 9): static copy claiming a dynamic match, shipped because it's easy to write once and never re-examined for whether the underlying logic actually exists. Second, a data-capture UI (textarea, file upload) was built to completion visually — it looked and behaved like a working form — without ever connecting its output to any consumer, an interactive equivalent of Incident 3's unwired button, except for data instead of navigation.

**Resolution actually implemented:**
- Added real state tracking: `entryMode` (`'matched'` or `'fallback'`) and `matchedIndustry`, set only when a person actually selects a real leaf category (e.g. Healthcare → Dental). Free text, file uploads, or skipping now explicitly set `entryMode = 'fallback'` and clear `matchedIndustry`.
- Built the previously-specified Stage 3-Fallback screen for the first time: it states plainly that no exact template exists yet, that a build task has been created, and shows the person's own captured description and file names back to them — instead of silently discarding that input.
- Made the preview screen's own copy conditional on `entryMode`: a true match says "Matched from your answers — [industry]"; a fallback entry says "Closest existing sample — not personalized to your answers yet." The screen can no longer make a claim it can't back up.
- Extended the Confirm Selections summary to include the captured free-text description, uploaded file names, and an explicit match-status line, so the information survives all the way to the final confirmation step instead of only appearing (or not appearing) on one screen.
- Fixed `restartCycle()` in the same pass, which had not been reset to account for any of this new state — the same "audit the whole surface, not the one thing reported" discipline from Incident 1, applied proactively this time rather than after a fourth report.

**Standing rule now in force:** Section 9's "Fabricated personalization" row, and a new "Orphaned captured input" row added to Section 9 in this same update — **any screen that captures user input into a variable must have that variable's consumer identified and verified at build time**, not left as a plausible-looking form with no destination.

---

## 11. Proactive QC pass (2026-07-21) — findings and fixes, before being reported

All five incidents in Section 10 were found *after* a person reported them. This section is different: a systematic audit was run against `cisem-build-full-cycle.html` — covering creation (does the spec match what's built), implementation (does the code actually do what the markup implies), and auditing (are the audit mechanisms from Sections 6–9 actually complete) — without waiting for a sixth incident. Method and findings below, each confirmed against the actual file, not inferred.

**Method:**
- Extracted every `onclick`-called function name and every actual `function` definition; diffed them (catches Incident 3's class of bug — a control that looks wired but isn't).
- Extracted every `getElementById` target and every actual `id="..."` in the HTML; diffed them (catches a reference to an element that doesn't exist).
- Checked for duplicate `id` attributes (a silent failure mode — the first match wins, the second is unreachable).
- Cross-checked `screenOrder`, `screenMeta`, and the actual set of `.app-screen` divs for a 1:1 match.
- Re-ran the Section 6 contrast procedure against every token, including ones added after the last explicit audit pass.
- Scanned every `.eyebrow` (customer-facing label) for internal stage codes or engineering jargon.
- Scanned for `<button>` elements with no `onclick` at all, and for custom clickable `<div>`s with no keyboard-accessibility attributes.
- Verified the extracted JavaScript actually parses (`node --check`) after all edits.

**Findings:**

1. **Function/ID integrity: clean.** Every `onclick` target resolved to a real function; every `getElementById` target resolved to a real, unique `id`. No recurrence of Incident 3's class of bug found on this pass.
2. **Screen registry: clean.** All 9 screens (`launch, details, discovery, fallback, preview, confirm, generating, done, admin`) are consistently present in the HTML, `screenOrder`, and `screenMeta` — no orphaned or missing entries.
3. **New contrast gap found:** `--green` and `--amber` (used for Admin status badges — Live/Pending/Draft) were defined once in `:root` and never overridden for light mode. Computed contrast: **6.2–7.5:1 in dark mode (fine), 2.16–2.54:1 in light mode (fails badly)** — this would only have surfaced if someone actually switched to light mode on the Admin screen, which nobody had done yet. Fixed with light-mode-specific values (`--green: #0a3c14`, `--amber: #8c4600`), both verified 6.4:1+ against every light background.
4. **Internal jargon found in customer-facing eyebrows:** `STAGE 3-FALLBACK · NO EXACT MATCH`, `STAGE 2A`, `STAGE 9–10`, etc. were shown directly on customer screens — the exact "internal naming leakage" pattern from Section 9, not yet applied to these labels even though it had already been applied to the breadcrumb in Incident 4. "FALLBACK" in particular reads as engineering jargon. Replaced with plain progress language (`STEP 1 OF 3`, `WHILE WE BUILD YOURS`, `REVIEW & CONFIRM`, `BUILDING YOUR APP`, `YOU'RE ALL SET`), and the Index menu's parenthetical `(fallback)` label was dropped for the same reason.
5. **A second, subtler jargon instance found inside honest meta-commentary:** the Fallback screen's stub note (itself a legitimate, intentional pattern — this whole file is an internal walkthrough, and admitting "not built yet" in places is correct) referenced "Stage 3f.5" by internal code. Kept the honest admission, dropped the internal code from it.
6. **Non-functional control found masquerading as functional:** the Admin category editor's EN/HE language tabs had no logic — clicking "HE" did nothing but stop event propagation, while visually implying a working bilingual editor. Given the bilingual (EN/Hebrew) requirement stated for this project, this was a real gap, not cosmetic. Wired `switchLangTab()` to actually swap the wording field's value, preserving whatever was typed in each language when switching between them, and showing an honest placeholder ("No Hebrew wording entered yet") rather than silently showing English text under an "HE" label.
7. **Keyboard accessibility gap found across the whole file:** every custom clickable element built with `onclick` on a `<div>` — choice cards, theme swatches, feature chips, page tabs, industry chips, admin category rows, language tabs, density/size buttons — had no `tabindex` or `role`, making a large fraction of the product's interactive surface unreachable without a mouse. This had not been caught by any prior pass. Fixed systemically with one `makeKeyboardAccessible()` function applied to the whole class of elements (not per-instance), re-run after every point where new elements are created dynamically (sub-branch discovery cards, new industry chips, the restart-cycle grid rebuild) — consistent with the standing rule from Incident 1.
8. **Race condition found in the Generating screen:** `runGeneration()`'s three `setTimeout` calls were never tracked or cleared. Navigating back to Confirm and re-triggering generation (reachable via the global back arrow or the Index menu) would stack a second set of timers on top of the first, and the earlier run's delayed callbacks could overwrite the newer run's progress display with stale values. Fixed by tracking timer IDs in `genTimers` and clearing any pending ones at the start of every `runGeneration()` call.
9. **Reviewed and accepted, not a bug:** the three buttons inside the simulated CRM preview ("+ New patient," "Filter," "Export") have no handlers. These represent the *eventual product's* UI inside a preview frame, not real controls in this walkthrough — judged consistent with the calendar and billing views being static illustrative content. Flagged explicitly here rather than silently passed over, per the same standard applied to everything else in this list.
10. **Confirmed correct, checked rather than assumed:** `restartCycle()` was re-verified against every state variable introduced since Incident 5 (`entryMode`, `matchedIndustry`, `capturedDescription`) and found to reset all of them correctly, including rebuilding the discovery choice grid if a sub-branch had been drilled into.

**What this pass does not cover, stated plainly rather than implied:** no real browser was used to click through the file — verification was static (code/structure analysis, contrast math, JS syntax parsing), not a live interaction test. Visual layout at specific viewport sizes (the Section 8 viewport test) was reasoned about, not screenshotted and measured. If a Governor's manual click-through finds something this pass didn't, that's a gap in method, not a contradiction of these findings.

---

## 12. Confirmed open gaps from the 7.2 edge-case walkthrough — awaiting a decision, not yet fixed

Everything below was found while writing Section 7.2, is real (verified against the actual file, not hypothetical), and has **not been changed** — per the standing rule, finding a gap is not permission to act on it. Listed here so a decision can be made deliberately about priority, rather than each one being silently patched or silently ignored. **`GAP-ID` naming adopted from external review** (convention only — the descriptions and severity assessments below are this project's own, not inherited).

1. **`GAP-01` — No persistence across browser refresh.** All captured state (intent, discovery answers, uploaded file names, theme/density/feature choices) lives only in JavaScript variables. A refresh at any point returns the person to Launch with everything gone, silently.
2. **`GAP-02` — No generation-failure state.** The Generating screen's simulated progress always reaches 100%. There is no designed failure path — no message for what a real generation failure would look like, and the benefit-forward copy on that screen assumes success throughout.
3. **`GAP-03` — No confirmation before "Start over."** A single click wipes the entire session state irreversibly. Its button styling is currently identical to every reversible action in the file (e.g. "Back").
4. **`GAP-04` — No RTL / Hebrew-input testing.** Given the explicit bilingual requirement for this project, no screen has actually been evaluated with Hebrew text entered, and no layout has been checked against right-to-left rendering.
5. **`GAP-05` — No concurrent-edit handling on the Admin screen.** Two admins editing the same question category simultaneously would silently overwrite one another; there is no locking or conflict indicator, only a static "last edited by" line.
6. **`GAP-06` — No `aria-label`s on visually-only controls.** The keyboard-accessibility fix (Section 11, finding 7) made these elements tabbable and clickable via keyboard, but a bare color swatch, for instance, has no text content a screen reader could announce — a person using assistive technology could reach the control but not know what it does.
7. **`GAP-07` — Untested: browser back/forward buttons vs. internal screen state.** The app's own `currentScreen` tracking has not been verified against what happens if a person uses the browser's native back/forward navigation instead of the in-app arrows. Listed as unverified, not confirmed broken.
8. **`GAP-08` — No empty-state design.** What the Gallery tab looks like with zero uploaded items, for example, has not been deliberately designed — only the populated version exists.
9. **`GAP-09` — Cognitive load of the Preview screen's four simultaneous decisions** (Theme/Density/Controls/Features), named as a real trade-off rather than an oversight — this was a deliberate consolidation decision earlier in the project (Section 4.6), not something to silently revisit, but worth carrying forward explicitly as a known cost of that decision.

---

## 13. Open / not yet decided

- Whether this document should be promoted to a ratified corespine artifact (e.g. `CS-UXUI-001`) or remain a working reference — flagged in Section 1, unresolved.
- Responsive/mobile breakpoints — not yet addressed anywhere in this doc.
- Motion/animation conventions — not yet defined.
- Whether the "chip" pattern (4.1) should also apply to the feature toggle panel when it's on a page with a sidebar layout (some earlier iterations used sidebar, current confirmed direction is single-row/full-width — noted in 4.6).

---

*Changelog: initial version derived from the CISEM Build MVP template-preview page session, 2026-07-21. Updated same day — added persistent top nav chrome pattern (Section 4.7). Updated again same day — added Questions (7), Audit (8), and AI Triggers & Defaults (9) sections following an orientation failure found on the Template Preview screen. Updated again same day — added "Fabricated personalization" trigger (9) and Stage 3-Fallback wiring after a static "matched" claim was found contradicting a real user's free-text input. Updated again same day — added full-detail AI Behavior Incident Log (Section 10, five incidents) and an "Orphaned captured input" row to Section 9. Updated again same day — added Section 11, a proactive QC pass (10 findings: 1 new contrast gap, 2 jargon leaks, 1 non-functional control, 1 keyboard-accessibility gap across the whole file, 1 race condition, plus 4 confirmed-clean checks) run before any of it was reported. Updated again same day — added Section 7.1 (the five-question walkthrough discipline, in the Governor's own words), re-walked every existing screen against it (additive fixes only: continuity echo on Details, suggested-option indicator on Discovery), and built the Photo & Video Gallery feature/tab against the same discipline from the start. Updated again same day — deepened each of the five walkthrough questions with the underlying cognitive/UX principle behind it (Section 7.1), added a comprehensive edge-case checklist across 8 categories (Section 7.2), and consolidated 9 confirmed-but-unfixed gaps surfaced by that checklist into a new Section 12, explicitly not acted on pending a priority decision. Updated again same day — reviewed an external Gemini-produced document (Section 1.1): rejected a self-assigned ratified-artifact ID and a set of dark-mode status colors that computed worse than what's already shipped; adopted a concrete viewport figure, a component-state-completeness checklist item, and the GAP-ID naming convention for Section 12, all with reasoning recorded rather than merged silently.*
