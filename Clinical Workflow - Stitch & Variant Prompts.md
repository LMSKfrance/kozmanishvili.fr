# Clinical Workflow Platform — Google Stitch & Variant.com Prompts

> **What this is:** ready-to-paste prompts to recreate the **Clinical Workflow Platform** in [Google Stitch](https://stitch.withgoogle.com) and [Variant.com](https://variant.com). The platform redesigned a hospital's clinical system whose staff had abandoned digital in favour of paper — by rebuilding the information architecture around the patient journey (Admit → Assess → Treat → Discharge), not the org chart. Three user roles: Clinician (mobile-first, on-ward), Admin (desktop), Patient. Six screens in Stitch; seven component sets in Variant.

---

## How to use in Stitch

1. Go to **stitch.withgoogle.com** → **New project** → choose **Mobile** for clinician screens (A–C), **Web** for desktop screens (D–F).
2. **Paste the Global Theme Prompt (§1) first** — it sets the visual language for every screen.
3. Generate **one screen at a time** using the prompts in §2. Don't paste all at once.
4. If a screen drifts off-style, reply: `"keep the theme: white surfaces, 1px zinc-gray borders, monospace for room numbers, one blue accent #2563EB, status carried by dot colour only — never by text colour alone."`

## How to use in Variant

1. Go to **variant.com** → **New component**.
2. Each prompt in §3 is one component. Paste it as your generation prompt.
3. After generating, ask for "all states" to get the full state matrix (default / hover / active / disabled / error).
4. Use the reference tokens in §4 to keep every component consistent.

---

## 1. Global Theme Prompt — paste this FIRST in Stitch

```
I'm designing a clinical workflow platform for hospital medical staff — nurses, doctors, 
and administrative coordinators. This is a high-stakes professional tool used during 
active patient care, often at arm's length, under time pressure.

Guiding principle: the system must surface the most critical information in the first 
glance. Everything else is one deliberate step away. No hunting. No context-switching.

Visual style:
- Background: pure white (#FFFFFF) surfaces on a very light gray canvas (#FAFAFA).
- Borders: thin 1px light gray (#E4E4E7). Borders separate regions — NOT shadows. 
  Clean grid lines and table rules are the structural hero.
- One single accent color: blue #2563EB. Used only for active/primary states, 
  primary buttons, and links. Nothing else is blue.
- Text hierarchy: near-black #18181B for primary content, gray #52525B for body, 
  light gray #A1A1AA for metadata labels.
- Typography: Poppins (or Google Sans). All machine data — room numbers, patient IDs, 
  timestamps, dosage codes — in a MONOSPACE font. This is a deliberate cognitive signal 
  separating system data from human labels.
- Labels: 11px, UPPERCASE, wide letter-spacing, gray. Used for section heads and 
  metadata, never for primary content.
- Corners: small radius (4–6px) for cards and inputs. Patient list rows: 
  16px radius ("pill-card" feel — softer for care context).
- Density: moderate. Row height ~56–64px on mobile, ~48px on desktop. 
  Clinical staff need breathing room under pressure, but not wasteful whitespace.

Semantic status system — use ONLY these four, consistently everywhere:
- Green  #10B981 on green-50 tint  = Stable / complete / no action
- Amber  #F59E0B on amber-50 tint  = Task due this round / needs attention
- Gray   #D4D4D8 on zinc-50 tint   = Awaiting results / pending / idle
- Red    #EF4444 on red-50 tint    = Critical / allergy flagged / overdue

Status is ALWAYS communicated as a small filled circle (8px dot). Dots appear beside 
the patient's name and inside status pills. Never rely on text colour alone to carry 
status — the dot is the primary signal.

Keep this exact theme for every screen I ask for next.
```

---

## 2. Screen Prompts — generate one at a time

### Screen A — Clinician Shift View (mobile, primary screen)

```
Design the main "Shift View" screen for a clinician using the Clinical Workflow Platform 
on a smartphone. This is the home screen they see when they start a ward round.

This is a MOBILE screen (~390px wide). Portrait orientation.

Top bar:
- Left: a tiny monospace label "WARD 4 · TODAY" above a bold short heading (the shift label, 
  e.g. "Morning Round"). 
- Right: a small circular avatar with the clinician's initials, bordered in light gray.
- Below the top bar: a sticky priority banner — a white card with a thin amber left border, 
  showing the single most urgent task for this round. Label "DUE NOW" in amber monospace 
  on the right.

Main list — "Patient Rounds":
- A small UPPERCASE gray label "PATIENT ROUNDS" above the list.
- A vertical list of patient cards. Each card is a white rounded-card (~64px tall) with 
  a 1px gray border. Inside each card:
  - Left: a small circular status dot (8px filled circle) — colour indicates status.
  - Centre: patient name as a medium-weight line, room number below it in monospace 
    (e.g. "A·204").
  - Right: a small gray monospace room code repeated, aligned right.
- Show 4–5 patient cards:
  - Card 1: green dot (stable), room A·204.
  - Card 2: amber dot (task due), room A·207. This card has a subtle amber-50 background.
  - Card 3: gray dot (awaiting results), room A·211.
  - Card 4: amber dot (task due), room A·215.
  - Card 5: green dot (stable), room A·219.

Bottom navigation bar:
- A thin 1px top-border bar with 3 items: "Rounds" (active, blue), "Tasks", "Handover". 
  Monospace labels, 10px uppercase.

White surfaces, 1px gray borders, status via dot colour only, monospace room numbers, 
one blue accent on the active nav item only.
```

**Follow-up tweaks:**
- `"make the priority banner sticky so it stays pinned under the top bar when the list scrolls"`
- `"add a subtle swipe-right gesture on a card to reveal a 'Mark complete' action in green"`
- `"show a small count badge on the Tasks nav item — '3' — in amber"`

---

### Screen B — Patient Detail (mobile, decision-first)

```
Design the "Patient Detail" screen for the Clinical Workflow Platform. Mobile, ~390px wide.

This screen follows the principle: the decision comes first. Supporting detail is one 
deliberate step further down.

Top navigation:
- A back chevron "← Ward 4" on the left.
- Patient name as the title, centred.
- A status pill on the right — "ACTION DUE" with an amber dot, small rounded pill, 
  amber-50 background, amber text, 10px monospace.

Patient identity row (below nav):
- Room number in large monospace (e.g. "A·207"), bold.
- Two small metadata tags beside it: "Ward 4" and "Day 3" — in gray uppercase monospace 
  on a zinc-50 pill background.

PRIMARY ACTION CARD (this is the most prominent element on screen):
- A white card with a 1px gray border and a blue left-border accent (4px, #2563EB).
- Label "NEXT ACTION" in 10px blue uppercase monospace.
- A bold short action title below (e.g. "Administer medication").
- One line of body text describing the action.
- Two buttons at the bottom of the card: a solid blue primary button ("Confirm") 
  and a ghost secondary button ("Defer").

Below the primary card, two smaller secondary cards side by side:
- Left card: "VITALS" — a tiny inline sparkline bar chart (4 bars), no axis labels.
- Right card: "ALLERGIES" — if flagged, show a small red pill "FLAGGED" with a red dot.
  If clear, show a green pill "CLEAR".

At the bottom, a collapsed section "Patient history ▾" — a gray label with a chevron. 
Collapsed by default, tappable to expand.

White surfaces, 1px gray borders, blue only on the action card's left border and 
primary button. Monospace for room number and all metadata codes.
```

**Follow-up tweaks:**
- `"show the expanded 'Patient history' state — a timeline list of past tasks, monospace timestamps on the right"`
- `"add a 'Critical allergy' banner above the primary action card when the allergy card is FLAGGED"`
- `"design the post-confirm state — action card turns green with a checkmark and 'Recorded at 09:14' in monospace"`

---

### Screen C — Bedside Task Capture (mobile, in-the-moment entry)

```
Design the "Task Capture" screen — the screen a clinician sees when they tap a task 
to record it at the bedside. Mobile, ~390px wide.

This is the moment of care. The screen must be fast, low-cognitive-load, and 
completable with one hand.

Top: patient name + room number (monospace "A·207") as a compact header, with the 
task name as a subheading. A small gray "Step 1 of 2" in monospace top-right.

Main card — one primary capture field at a time:
- A large, generous input field labelled "Value" — e.g. for a vitals reading. 
  Big numeric input, centered, large text (~40px). Below it: the unit in gray 
  monospace (e.g. "mmHg"). 
- Below the field: a horizontal row of 3 quick-select chips for common values — 
  white bordered pills, one selected with a blue background and white text.

Secondary field below: a small notes textarea, placeholder text "Observations (optional)". 
Max 2 lines visible.

Footer action bar (pinned to bottom):
- Left: ghost "Cancel" button.
- Right: solid blue "Record →" primary button, full-width-ish on the right half.

The overall feel: generous touch targets (min 48px), nothing small or fiddly. 
Clean, one task at a time. White surface, 1px gray border, blue on the primary 
action only.
```

**Follow-up tweaks:**
- `"show the confirmation state after 'Record →' is tapped — a brief full-card green flash with '✓ Recorded' and a monospace timestamp"`
- `"add a small dosage-scanner button (barcode icon) inside the input field"`

---

### Screen D — Ward Overview (tablet/desktop, admin and charge-nurse view)

```
Design a "Ward Overview" screen for the Clinical Workflow Platform — desktop/tablet 
view, used by a charge nurse or admin coordinator to see the full ward at a glance.

Layout: a left sidebar (~220px) + a wide main content area. ~1280px total width.

Left sidebar:
- A small "WARDS" label at top.
- A list of 4 ward items: "Ward 4" is active (blue dot, blue bold text, subtle blue-50 
  background row). The others are inactive gray.
- At the bottom: current user's name/role chip.

Main content area:
- Top: page heading "Ward 4 — Morning Round", date in gray monospace on the right.
- Below: a summary row of 4 stat tiles, each a white bordered card:
  - "Patients" — a number (e.g. 12)
  - "Tasks Due" — a number in amber
  - "Awaiting Results" — a number in gray
  - "Completed" — a number in green
  Each tile has a 10px uppercase gray label above the number.

- Below the stat row: a high-density patient table. Bordered container, ~48px rows.
  Columns: Room (monospace), Patient, Status (dot + pill), Next Task, Clinician, Updated (monospace time).
  Show 5–6 rows:
  - Row 1: room A·204, green "STABLE" pill, "—" for next task.
  - Row 2: room A·207, amber "TASK DUE" pill, a short task name, this row has a 
    subtle amber-50 row background.
  - Row 3: room A·209, red "CRITICAL" pill, a short urgent task.
  - Row 4: room A·211, gray "AWAITING" pill.
  - Row 5: room A·215, amber "TASK DUE" pill.
  Table header: light gray background, 11px uppercase labels, thin row dividers.
  One row clickable to expand a right-side drawer.

White surfaces, thin 1px gray borders, monospace for room numbers and timestamps, 
one blue accent on the active ward and primary actions, semantic status pills with dots.
```

**Follow-up tweaks:**
- `"open the row-click drawer — a right-side panel showing that patient's detail (same content as Screen B but in a desktop panel layout)"`
- `"add a filter row above the table: three toggle chips — 'All', 'Due', 'Critical' — with 'Due' active in amber"`

---

### Screen E — Shift Handover (desktop, structured handoff between shifts)

```
Design a "Shift Handover" screen for the Clinical Workflow Platform. Desktop view.

This screen is used at the end of a shift by the outgoing clinician to hand over 
their patients to the incoming clinician. It must be structured, scannable, and 
generate a clear record.

Top: heading "Shift Handover" with the shift time range in gray monospace 
("07:00 – 15:00") and a "DRAFT" pill (gray, monospace) on the right.

Two-column layout:

Left column (wider, ~60%):
- "PATIENTS THIS SHIFT" — a compact summary card for each patient:
  Each card has the room number (monospace), patient name, final status dot, 
  and a one-line handover note field (editable, 1px bottom-border only, 
  no box — feels like a form built into the card).
  Show 3 patient cards.
- Below the cards: a "Pending items" section with a short list of 2 items 
  not completed this shift. Each item has an amber dot, a task description, 
  and a "Carry over →" link in blue monospace.

Right column (narrower, ~40%):
- "SHIFT SUMMARY" panel — a white bordered card:
  - Tasks completed: number in green
  - Tasks deferred: number in amber
  - Incidents: number (0, in gray)
  A small timeline of the last 3 events in monospace timestamps.
- Below: an "Incoming clinician" field — a simple name input with a gray border 
  and placeholder "Assign to…".

Footer action bar: ghost "Save draft" on the left, solid blue "Submit Handover →" 
primary button on the right. Submitting action carries an explicit verb.

White surfaces, 1px gray borders, monospace for all times/IDs, semantic dot colours.
```

**Follow-up tweaks:**
- `"show the submitted/confirmed state — a centered confirmation card with 'Handover submitted at 14:58' in large monospace and a green CONFIRMED pill"`

---

### Screen F — Before / After IA Diagram (explanatory, for decks and docs)

```
Design a clean explanatory diagram titled "The shift from org chart to patient journey."

This is an editorial figure, not an app screen. Lots of whitespace. White background, 
thin 1px gray borders, one blue accent, monospace labels.

Top half — "Before — structured by department":
- A tree diagram showing a hospital node at the top, branching into 3 department nodes 
  ("Dept A", "Dept B", "Dept C"), each branching into small "Forms" leaf nodes.
- The whole structure is gray — thin lines, small white bordered boxes.
- A label to the right of the diagram: "Patient's story scattered across 3 departments" 
  in gray monospace.
- Below the diagram: a small metric "2× data entry" in gray monospace.

Bottom half — "After — the patient journey":
- A simple horizontal left-to-right flow of 4 white bordered rounded cards:
  "1 Admit" → "2 Assess" → "3 Treat" → "4 Discharge"
  Cards connected by thin blue arrows. The cards are white with a blue number badge.
- The whole flow is blue and white — the structural contrast with the gray "Before" 
  above makes the improvement immediately legible.
- A label to the right: "One continuous thread per patient" in blue monospace.
- Below: a small metric "Full adoption · Zero paper" in blue monospace.

Minimal, calm, editorial. Heavy whitespace. This is an argument made visually.
```

---

## 3. Variant.com Component Prompts

### Component 1 — Patient Status Card (the core list item)

```
Design a "Patient Status Card" component for a clinical mobile app.

This is a list-row card — approximately 390px wide, 64px tall. White background, 
1px light gray (#E4E4E7) border, 16px corner radius. Poppins font.

Content (left to right):
- A 40px circle container on the left. Inside: an 8px filled status dot, centred. 
  The circle background is a tinted version of the dot colour.
- Centre block: patient name (14px medium weight, near-black #18181B) as the top line; 
  room number (12px, monospace, gray #71717A) as the second line — e.g. "A·207".
- Far right: the room code repeated in 10px uppercase monospace gray, right-aligned.

Design all 4 status states as variants:
- STABLE: green dot (#10B981), green-50 circle background, no background on card.
- DUE: amber dot (#F59E0B), amber-50 circle background, very subtle amber-50 card background.
- AWAITING: gray dot (#D4D4D8), zinc-50 circle background, white card.
- CRITICAL: red dot (#EF4444), red-50 circle background, very subtle red-50 card background.

Also design a SELECTED state (any status): blue left border accent (4px, #2563EB) 
on the card's left edge, and a light blue-50 card background.

Deliver: 4 status variants × default + selected = 8 total states in one component set.
```

---

### Component 2 — Status Pill + Dot (inline badge)

```
Design a "Status Pill" component — a small inline badge for use in tables and 
detail screens of a clinical platform.

Anatomy: a small filled 6px circle (dot) + uppercase monospace text label, 
wrapped in a pill (fully rounded, ~24px tall, ~6px horizontal padding).
Font: 10px monospace, uppercase, wide letter-spacing.

4 semantic variants:
- STABLE: green dot #10B981, green-50 pill background, green-700 text.
- TASK DUE: amber dot #F59E0B, amber-50 background, amber-700 text.
- AWAITING: gray dot #D4D4D8, zinc-50 background, zinc-500 text.
- CRITICAL: red dot #EF4444, red-50 background, red-700 text.

Also deliver a FLAGGED variant for allergy/alert contexts: 
red dot, red-50 background, red-700 text, label "FLAGGED".

All variants should look calm and information-dense, not alarming or flashy. 
The colour conveys urgency; the shape is always the same quiet pill.

5 variants total.
```

---

### Component 3 — Primary Action Card (bedside decision)

```
Design a "Primary Action Card" component for a clinical mobile app's patient detail screen.

Width: full-width, ~390px. This is the most prominent element on the screen — the 
"decision first" card.

Structure:
- White background, 1px light gray border, 8px corner radius.
- A 4px solid left-border accent in blue #2563EB (the only thing blue on the screen).
- Top-left: a small "NEXT ACTION" label in 10px blue uppercase monospace.
- Below: a bold action title (16px, near-black, medium weight).
- Below: a short body description (13px, gray #52525B), max 2 lines.
- Bottom: two buttons side by side — 
  - Primary: solid blue #2563EB button, white text, "Confirm". Full left portion.
  - Secondary: ghost button (1px gray border, transparent background), "Defer". Narrower.
  Min button height: 44px (clinical tap target standard).

Deliver 3 states:
- DEFAULT: as described above.
- CONFIRMED: left border turns green. Blue button replaced by a green "✓ Recorded" 
  label + a monospace timestamp (e.g. "09:14"). Secondary button hidden.
- DEFERRED: left border turns amber. A small amber "DEFERRED" pill appears below the title.
  Body text becomes gray. Both buttons replaced by an "Undo" text link.
```

---

### Component 4 — Vitals Mini-Card

```
Design a "Vitals Mini-Card" component — a compact secondary card for the patient detail 
screen of a clinical mobile app.

Size: approximately 160px × 100px. White background, 1px gray border, 8px radius.

Content:
- A "VITALS" label in 10px uppercase gray monospace at top-left.
- A small inline bar chart below: 4 vertical bars in a row, no axes, no labels. 
  Bars are rectangles, ~8px wide, varying heights. The most recent bar (rightmost) 
  is blue #2563EB if normal; amber #F59E0B if elevated; red #EF4444 if critical.
  Older bars are gray #D4D4D8.
- A monospace value below the chart (e.g. "118 / 74") in 12px near-black, 
  with the unit ("mmHg") in 10px gray beside it.

Deliver 3 state variants:
- NORMAL: rightmost bar blue, value in near-black.
- ELEVATED: rightmost bar amber, value in amber, a tiny "↑" in amber beside it.
- CRITICAL: rightmost bar red, value in red, a small red "CRITICAL" label below 
  in uppercase monospace.
```

---

### Component 5 — Allergy Flag Card

```
Design an "Allergy Flag Card" component — a compact secondary card for a clinical app.

Size: approximately 160px × 100px. White background, 1px gray border, 8px radius.

Content:
- "ALLERGIES" label in 10px uppercase gray monospace at top-left.
- Centred in the card: the status pill (reuse the Status Pill component):
  Either "CLEAR" (green pill) or "FLAGGED" (red pill).

Deliver 2 state variants:
- CLEAR: green pill centred. Green-50 subtle card background.
- FLAGGED: red pill centred. Red-50 subtle card background. A thin red top-border 
  accent (2px) on the card. Below the pill, a tiny monospace text line: 
  e.g. "Penicillin · Codeine" in 10px gray.

When FLAGGED, this card demands attention but doesn't scream — the red-50 background 
and red top border are enough. No pulsing, no blinking, no heavy red fill.
```

---

### Component 6 — Task Row (ward overview table row)

```
Design a "Task Row" component — a table row for the ward overview desktop screen 
of a clinical platform.

Width: full table width (~900px). Height: ~48px. Poppins + monospace for data fields.

Columns (left to right):
1. Room — 10px uppercase monospace, e.g. "A·207". ~60px wide.
2. Patient name — 14px medium Poppins, near-black. ~180px wide.
3. Status — the Status Pill component (STABLE / TASK DUE / AWAITING / CRITICAL). ~120px wide.
4. Next Task — 13px gray Poppins, truncated at 1 line. ~240px wide. 
   "—" in gray monospace when no task.
5. Clinician — 12px gray, a small avatar circle (24px) + name. ~140px wide.
6. Updated — 11px monospace gray timestamp, right-aligned, e.g. "09:14". ~80px wide.

Row background: white. 1px bottom border (#E4E4E7) between rows. Header row: zinc-50 
background, 10px uppercase gray labels.

Deliver 5 row variants matching the 4 status states + 1 selected/hover:
- STABLE row: white bg, green pill, "—" in next task.
- TASK DUE row: very subtle amber-50 background, amber pill.
- AWAITING row: white bg, gray pill.
- CRITICAL row: very subtle red-50 background, red pill.
- HOVER / SELECTED: light blue-50 background, blue left-border accent (3px), 
  cursor changes to pointer — this row expands the detail drawer.
```

---

### Component 7 — Shift Handover Patient Card

```
Design a "Handover Card" component — a patient summary entry used in the shift 
handover screen of a clinical platform.

Width: full-width (~580px). A white card with 1px gray border, 8px radius.

Content:
- Top row: room number in monospace (e.g. "A·207") on the left, a small status 
  dot on the right.
- Patient name below room number, 14px medium Poppins.
- A single-line text input field below the name — styled as a borderless field 
  (only a 1px bottom border, no box). Placeholder: "Handover note…". 
  This feels like writing directly on the card.
- Bottom: a small gray monospace "Last updated 14:32" timestamp.

Deliver 2 states:
- EMPTY: placeholder visible in the note field, status dot grey.
- FILLED: a short example note in the field, appropriate status dot colour.
```

---

## 4. Reference Tokens

### Colour
| Token | Hex | Use |
|---|---|---|
| Background | #FFFFFF | All surfaces |
| Canvas | #FAFAFA | App shell, table headers |
| Border | #E4E4E7 | All 1px separators |
| Text primary | #18181B | Headings, names |
| Text body | #52525B | Descriptions |
| Text meta | #A1A1AA | Labels, timestamps |
| Accent blue | #2563EB | Active state, primary button, links only |
| Status green | #10B981 | Stable / complete |
| Status amber | #F59E0B | Due / needs attention |
| Status gray | #D4D4D8 | Awaiting / idle |
| Status red | #EF4444 | Critical / flagged |

### Rooms (use for realistic content)
`A·204 · A·207 · A·209 · A·211 · A·215 · A·219 · B·101 · B·103`

### Monospace data patterns
- Room numbers: `A·204` (always letter dot number)
- Timestamps: `09:14` `14:32`
- Patient IDs: `PT·2847` `PT·2851`
- Shift codes: `W4-MS-0615` (Ward · Shift type · HHMM)

### Touch targets
- Mobile buttons: min 44px height
- List row cards: min 56px height
- Desktop table rows: min 44px height

### Outcome metrics (for any summary/results screen)
- Full staff adoption of digital workflow
- Zero paper backups remaining
- Reduced administrative processing time
- 3 shifts observed in contextual research
- 3 user roles: Clinician, Admin, Patient

---

## 5. Style guardrails — repeat if Stitch or Variant drifts
- White surfaces on a light gray canvas. **Borders, not shadows.**
- **One** blue accent (#2563EB) — active nav, primary button, left-border on the action card. Nothing else is blue.
- **Status = dot only.** Never use text colour alone to communicate status. The dot is the signal.
- **Monospace for all machine data:** room numbers, timestamps, IDs, dosage codes.
- Moderate density — not cramped, not airy. Clinical staff read under pressure.
- No gradients, no heavy drop shadows, no playful shapes. Calm, precise, professional.
- The patient journey (Admit → Assess → Treat → Discharge) is the IA backbone. Every screen belongs to a stage.
