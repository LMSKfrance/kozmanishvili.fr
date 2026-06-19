# Symmetra Claims — Google Stitch Build Prompts

> **What this is:** ready-to-paste prompts to recreate the **Symmetra Claims handling platform** in [Google Stitch](https://stitch.withgoogle.com). Symmetra is an enterprise insurtech SaaS for 100k+ users across 4 product lines; the claims workflow was redesigned from 11 linear steps down to a 5-step flow across 3 screens, with role-based views (Handler / Agent / Admin) on one shared component library.

---

## How to use this in Stitch

1. Go to **stitch.withgoogle.com** → **New project** → choose **Web** (this is a desktop SaaS, not mobile).
2. **Paste the "Global Theme Prompt" (§1) first** as your opening message — it sets colors, type, and density for everything that follows.
3. Then generate **one screen at a time** using the prompts in §2. Paste a screen prompt, let Stitch render, then refine with the follow-up tweaks listed under each.
4. Use Stitch's **Theme panel** to lock the hex values and fonts from §1 so every screen stays consistent.
5. Export to Figma or copy the code when you're happy.

> **Tip:** Stitch responds best to plain, specific language and one screen per request. Don't paste all screens at once. If a screen drifts off-style, reply with "keep the theme: white surfaces, thin light-gray borders, monospace for IDs and numbers, one blue accent #2563EB."

---

## 1. Global Theme Prompt — paste this FIRST

```
I'm designing an enterprise insurance claims-handling web app called Symmetra Claims. 
It's a data-dense, professional B2B SaaS tool used by insurance claims handlers all day. 
Think calm, precise, and editorial — NOT playful, NOT colorful, NO gradients, NO rounded 
cartoon shapes.

Visual style:
- Background: pure white (#FFFFFF) surfaces on a very light gray app canvas (#FAFAFA).
- Borders: thin, 1px, light gray (#E4E4E7). Use borders — not shadows — to separate regions. 
  Heavy use of clean grid lines and table rules.
- One single accent color: blue #2563EB, used sparingly for the active row, primary buttons, 
  and links only.
- Text: near-black #18181B for headings, gray #52525B for body, light gray #A1A1AA for labels.
- Typography: Poppins (or Inter) for UI. Use a MONOSPACE font for all machine data — 
  claim numbers, currency amounts, SLA timers, status codes. This is a deliberate signal that 
  separates system data from human labels.
- Labels/eyebrows: 11px, UPPERCASE, letter-spacing wide, light gray.
- Corners: small radius (4–6px) only. Pills/badges fully rounded.
- Density: high. Compact rows (~40–48px), tight padding, lots of information per screen, 
  but never cluttered — generous whitespace between sections.

Semantic status colors (use ONLY these, consistently everywhere):
- Green #16A34A on light green tint = OPEN / on-track / success
- Amber #D97706 on light amber tint = REVIEW / needs attention / SLA warning
- Red #E0414A on light red tint = ESCALATED / overdue / error
- Gray #A1A1AA on light gray tint = CLOSED / idle / inactive
Each status is a small rounded pill with a colored dot + uppercase monospace label.

Keep this exact theme for every screen I ask for next.
```

---

## 2. Screen prompts — generate one at a time

### Screen A — Claims Queue (Handler view) · the home screen
```
Design the main "Claims Queue" screen for Symmetra Claims, handler view.

Layout: a left sidebar (~210px) + a main content area.

Left sidebar (light gray background):
- A small "QUEUES" label at top.
- A vertical list of claim queues. The first item is ACTIVE — highlighted with a light blue 
  background, a blue dot, a blue count badge on the right. The other 3 queue items are inactive: 
  gray dot, gray text, no badge.
- At the bottom, a user profile chip (small avatar circle + name) inside a bordered box.

Main area:
- A top row with the queue title on the left, and two buttons on the right: a white outlined 
  secondary button and a solid blue primary button ("New Claim").
- Below, a high-density data table inside a bordered, rounded container. 
  Columns: Claim # (monospace, e.g. #48201), Claimant, Status, Assigned.
  Show ~6 rows. 
  - Status column uses the semantic pills: one OPEN (green), one REVIEW (amber), one ESCALATED 
    (red), one CLOSED (gray).
  - One row is selected/active — highlighted with a light blue background and a blue claim number.
  - Table header row is light gray with uppercase labels; rows separated by thin 1px borders.

Keep it calm, dense, professional — white surfaces, thin gray borders, blue used only for the 
active row and the primary button. Monospace for claim numbers.
```
**Follow-up tweaks:** "make the rows more compact, about 44px tall" · "add a search field in the table header area" · "add an SLA column with a monospace countdown like 2d / 6h / 0h colored green/amber/red."

---

### Screen B — Claims Table with Role-Based Views (Handler / Agent / Admin)
```
Design a full-width "All Claims" table screen for Symmetra Claims with role-based view tabs.

At the top: three small tab chips — "Handler" (active, solid dark/near-black background, white 
text), "Agent" and "Admin" (inactive, white with thin gray border). These switch the view of the 
same underlying claims data.

Below: a wide, high-density data table inside a bordered rounded container.
Columns: Claim (monospace #48201), Claimant, Line (product line), Status, Reserve (currency in 
monospace, e.g. €12,400), SLA (monospace countdown, right-aligned).
Header row: light gray background, 11px uppercase gray labels.
Show 4–5 rows with thin 1px dividers:
- Row 1: status OPEN (green pill), reserve €12,400, SLA "2d" in green.
- Row 2: SELECTED — light blue background, blue claim number; status REVIEW (amber pill), 
  reserve €3,150, SLA "6h" in amber.
- Row 3: status ESCALATED (red pill), reserve €48,900, SLA "0h" in red.
- Row 4: status CLOSED (gray pill), reserve €890, SLA "—" in gray.

Currency and SLA values all in monospace. Keep the calm white/gray/one-blue theme.
```
**Follow-up tweaks:** "show how the Agent tab differs — fewer columns, hide the Reserve column" · "add a right-side detail drawer that opens when a row is clicked."

---

### Screen C — Claim Flow Step 1 · Intake (1 of 3 screens)
```
Design "Intake" — screen 1 of a 3-screen claim settlement flow for Symmetra Claims.

Top: a horizontal stepper showing 3 stages: "1 Intake" (active, blue), "2 Assess" (upcoming, 
gray), "3 Settle" (upcoming, gray), connected by thin lines.

Main: a two-column form layout inside a white card.
- Left column: claim intake fields — Claimant name, Policy number (monospace), Product line 
  (dropdown), Date of loss, Claim type. Several fields show SMART DEFAULT values pre-filled 
  with a subtle "auto-filled" tag, since the system already has this data.
- Right column: a compact summary panel — policy details, coverage, and a small claim # badge 
  in monospace at the top.

Bottom of the card: a footer bar with a ghost "Save draft" button on the left and a solid blue 
"Continue to Assess →" primary button on the right.

Calm, dense, professional. White surface, thin gray borders, blue accent only on the active step 
and primary button. Monospace for policy/claim numbers.
```
**Follow-up tweaks:** "make the smart-default tags green and small" · "add a progressive-disclosure section that's collapsed by default labeled 'Additional details'."

---

### Screen D — Claim Flow Step 2 · Assess
```
Design "Assess" — screen 2 of the 3-screen Symmetra Claims flow. Same stepper at top, now 
"2 Assess" is the active blue step.

Layout: a main column + a right rail.
- Main: clustered decision cards (this is the key idea — related judgments grouped together, 
  not scattered). Show 2–3 grouped cards: "Liability assessment", "Damage validation", 
  "Reserve recommendation". Each card has a few inputs/toggles and a short helper line.
- Reserve recommendation card shows a suggested reserve amount in large monospace currency 
  with an editable field.
- Right rail: a "Claim summary" panel with the claim # (monospace), claimant, a status pill 
  (REVIEW, amber), and a short audit/history list.

Footer bar: ghost "← Back" button left, solid blue "Continue to Settle →" primary button right.

Keep the calm enterprise theme: white surfaces, thin gray borders, semantic status pills, 
monospace numbers, one blue accent.
```
**Follow-up tweaks:** "add inline validation states using the amber and red semantic colors" · "show a small confidence/recommendation note on the reserve card."

---

### Screen E — Claim Flow Step 3 · Settle (decision + confirm)
```
Design "Settle" — the final screen of the 3-screen Symmetra Claims flow. Stepper at top now 
shows step 3 "Settle" active (blue), steps 1 and 2 marked complete (green checks).

Layout:
- A prominent settlement summary card: final settlement amount in large monospace currency, 
  breakdown line items (reserve, deductions, payout) in a small monospace table, and the 
  recipient/payment method.
- A decision area: radio options like "Approve & pay", "Partial settlement", "Decline" — with 
  "Approve & pay" selected.
- A required note / rationale text field.

Footer action bar: ghost "← Back" left; on the right a solid blue primary button 
"✓ Approve & Settle". Settlement-committing action carries an explicit verb, never just "OK".

After approval, show a small success confirmation state — a green pill "SETTLED" and a 
monospace settlement reference number.

Calm, precise, enterprise. White, thin gray borders, semantic colors, monospace for all money 
and reference numbers, single blue accent.
```
**Follow-up tweaks:** "design the post-settlement confirmation as its own clean centered card" · "add an audit trail entry showing who settled and when, in monospace."

---

### Screen F (optional) — Before/After flow diagram (for pitch decks / docs)
```
Design a clean explanatory diagram screen titled "From 11 steps to 5".

Top half "Before — 11 steps, linear": a single horizontal row of 11 small square nodes numbered 
01–11, connected by thin gray lines. Looks long and tedious. Label on the right: "12 min avg" 
in gray monospace.

Bottom half "After — 5 steps, 3 screens": three white bordered cards labeled 
"Screen 1 · Intake", "Screen 2 · Assess", "Screen 3 · Settle". Inside the cards, the 5 steps 
appear as blue filled squares (2 + 2 + 1). Label on the right: "7 min avg" in blue monospace.

Minimal, editorial, lots of whitespace. White background, thin gray borders, blue accent, 
monospace labels. This is an explanatory figure, not an app screen.
```

---

## 3. Reference data (use these exact values for realism)

**Claim records:**
| Claim # | Status | Reserve | SLA |
|---|---|---|---|
| #48201 | OPEN (green) | €12,400 | 2d |
| #48198 | REVIEW (amber) | €3,150 | 6h |
| #48177 | ESCALATED (red) | €48,900 | 0h |
| #48160 | CLOSED (gray) | €890 | — |
| #48142 | OPEN (green) | — | — |

**Roles:** Handler (default/active), Agent, Admin — each a tailored view of the same claim data, not separate data.

**Product lines:** 4 lines (e.g. Motor, Property, Travel, Health) — for the "Line" column.

**Outcome metrics (for any results/summary screen):** 12→7 min per claim · 50% fewer errors · 40% fewer support tickets · +22% onboarding activation.

---

## 4. Style guardrails — repeat to Stitch if it drifts
- White surfaces, very light gray canvas, **thin 1px gray borders not shadows.**
- **One** blue accent (#2563EB) — active row, primary button, links only. Nothing else is blue.
- **Monospace** for every machine value: claim #, currency, SLA, reference codes.
- Status = the 4 semantic pills only (green/amber/red/gray) with dot + uppercase label.
- High density, compact rows, but calm and uncluttered. No gradients, no big shadows, no playful colors, no emoji.
- Tables and grid lines are the hero pattern. Editorial, precise, enterprise.
