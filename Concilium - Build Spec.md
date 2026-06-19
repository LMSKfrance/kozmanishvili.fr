# Concilium — Clinical Decision Support Platform
### Build Specification (for AI app builders: Cursor, v0, Lovable, Bolt, Claude Code, etc.)

> **How to use this file:** Paste this whole document into your AI builder of choice as the project brief. Build it screen-by-screen in the order under "Build Sequence." Everything here is self-contained — design tokens, component specs, data models, and screen layouts are all defined below. This is a **concept product**; all patient data is synthetic.

---

## 1. Product in one sentence

Concilium is a clinical-decision-support web app for cardiology that collapses the EHR, lab system, imaging (PACS), and treatment guidelines into **one decision surface**, where a clinician can triage a patient cohort, understand one patient across all their data, and compare treatment regimens side-by-side — with AI acting as a **second reader that shows its evidence, never the decider.**

### Core principles (these drive every UX decision)
1. **AI is a second read, not a verdict.** Every model output displays its confidence score and its evidence source. A human always commits the final decision.
2. **Comparison is a first-class primitive.** The product is built to compare options, not just store records.
3. **One status language everywhere.** A color means exactly one thing across every screen (critical / borderline / stable / AI-advisory). Inconsistency here is a safety risk, not an aesthetic one.
4. **One primary action per screen.** Decision-committing actions carry an explicit verb ("Approve & Commit"), never a bare "OK".

---

## 2. Recommended tech stack

| Layer | Choice | Notes |
|---|---|---|
| Framework | **Next.js 14 (App Router) + TypeScript** | Or Vite + React if SPA preferred |
| Styling | **Tailwind CSS** | Tokens defined in §4 map directly to `tailwind.config` |
| Components | **shadcn/ui** + Radix primitives | Tables, tabs, dialogs, tooltips, badges |
| Charts | **Recharts** or **visx** | Sparklines, trend lines, comparison bars |
| State | **Zustand** or React Context | Cohort filters, active patient, comparison session |
| Data fetching | **TanStack Query** | Against mock API routes first |
| Mock backend | **Next.js Route Handlers** + JSON seed | Swap for FHIR/real EHR later |
| Tables | **TanStack Table** | Sortable/filterable patient registry & matrix |
| Icons | **Lucide** | Stroke-based, clinical-neutral |
| Font | **Poppins** (UI), monospace for machine data | `ui-monospace` system stack for IDs/metadata |
| Auth (later) | **NextAuth / Clerk** | Role-gated: physician sign-off requires auth |

---

## 3. Information architecture

Three moves, in order. Every screen makes the **next** move obvious.

```
Move 01 — TRIAGE          Move 02 — UNDERSTAND            Move 03 — DECIDE
┌────────────────┐        ┌─────────────────────┐        ┌──────────────────────┐
│ Cohort Command │  ───▶  │ Patient Record       │  ───▶  │ The Concilium         │
│ Center         │        │  • Overview          │        │  (Treatment Compare)  │
│ (risk-sorted   │        │  • Clinical History  │        │  • Treatment Arms     │
│  registry)     │        │  • Lab Results       │        │  • Outcomes Matrix    │
│                │        │  • Imaging (DICOM)   │        │  • Visual Analytics   │
└────────────────┘        └─────────────────────┘        └──────────────────────┘
```

### Route map
```
/                          → redirect to /cohort
/cohort                    → Cohort Command Center (Move 01)
/patient/[id]              → Patient Record, default tab = overview
/patient/[id]/history      → Clinical History tab
/patient/[id]/labs         → Lab Results tab
/patient/[id]/imaging      → DICOM Viewer + AI Assessment tab
/concilium/new             → Start a comparison session (pick patients + arms)
/concilium/[sessionId]     → The Concilium decision engine
/settings                  → (stub) thresholds, model version, team
```

---

## 4. Design system / tokens

Put these in `tailwind.config.ts` under `theme.extend.colors` and as CSS variables in `globals.css`.

### Color tokens
```css
:root {
  /* surfaces */
  --bg:            #F6F7F9;   /* app canvas */
  --surface:       #FFFFFF;   /* cards */
  --border:        #E7E9EE;
  --border-strong: #D7DAE1;

  /* ink */
  --ink:    #0E1422;   /* primary text */
  --ink-2:  #3A4254;   /* secondary text */
  --muted:  #8A92A4;   /* tertiary / metadata */

  /* action (the ONLY blue for interactive/primary) */
  --blue:      #2F6BF6;
  --blue-600:  #2457D6;
  --blue-tint: #EAF1FF;

  /* AI / dark reading contexts — navy is RESERVED for AI + DICOM only */
  --navy:   #0D1426;
  --navy-2: #131D36;

  /* STATUS SCALE — one meaning everywhere */
  --critical:   #E0414A;  --critical-tint: #FDECEE;  --critical-text: #C4313A;
  --borderline: #D97706;  --borderline-tint:#FDF1DE; --borderline-text:#B45309;
  --stable:     #16A34A;  --stable-tint:    #E7F6EC; --stable-text:    #15803D;
}
```

### Status scale (memorize this — it is the safety contract)
| Token | Color | Meaning | Used for |
|---|---|---|---|
| `critical` | `#E0414A` red | Action now | High-risk patients, out-of-range labs, AI anomalies |
| `borderline` | `#D97706` amber | Monitor | Borderline values, deltas needing attention |
| `stable` | `#16A34A` green | Within range | Normal results, "winner" cells in matrix |
| `blue` (AI/action) | `#2F6BF6` | Advisory / interactive | AI second-read insights, primary buttons |
| `navy` | `#0D1426` | AI surfaces + dark imaging | AI insight bars, DICOM viewer chrome |

### Typography
- **Font:** Poppins (400/500/600/700). Headings 500–600, never 700+ in body.
- **Machine data** (patient IDs, study codes, frame counts, model versions, coordinates): monospace, `letter-spacing: 0.02em`, in `--muted`. This visually separates human-authored vs machine-emitted content.
- **Labels/eyebrows:** 10–11px, uppercase, `letter-spacing: 0.04–0.05em`, `--muted`.

### Shape & elevation
- Cards: `border-radius: 12px`, `1px solid --border`, on `--surface`.
- Buttons: `border-radius: 9px`, `padding: 9px 15px`, `font-size: 12px`, `font-weight: 600`.
- Pills/tags: `border-radius: 999px`, `padding: 4px 9px`, `font-size: 10px`, uppercase.
- Shadows: minimal. `0 4px 20px -2px rgba(0,0,0,0.05)` for floating windows only.

---

## 5. Component library (build these first as reusable primitives)

| Component | Props | Behavior |
|---|---|---|
| `<StatusBadge>` | `level: 'critical'\|'borderline'\|'stable'\|'ai'\|'soft'`, `children` | Pill with token color + tint bg + matching border |
| `<RiskBar>` | `value: number` (0–100), `level` | 4px track, filled to value%, colored by level |
| `<Sparkline>` | `data: number[]`, `level` | Tiny inline trend line (60×20px), colored by level |
| `<MetricCard>` | `label`, `value`, `level?`, `unit?` | KPI tile; border tints to level if set |
| `<AIInsightBar>` | `confidence: number`, `title`, `body`, `evidence?` | **Navy** background, blue accent dot, shows confidence % in mono + evidence source line |
| `<Button>` | `variant: 'primary'\|'ghost'\|'dark'` | primary=blue, ghost=white+border, dark=navy. One primary per view. |
| `<DataTable>` | generic, sortable | Used for registry, labs, matrix |
| `<TabSpine>` | `tabs[]`, `active` | Underline-active tab row; the patient record's single spine |
| `<MockWindow>` | `url`, `children` | (optional) browser-chrome wrapper for marketing/demo only |
| `<CommitBar>` | `checks[]`, `onApprove`, `onDefer` | Bottom action bar: shows passed/flagged safety checks + Approve & Commit / Defer |

---

## 6. Data models (TypeScript)

```ts
type RiskLevel = 'critical' | 'borderline' | 'stable';

interface Patient {
  id: string;              // e.g. "H92-8472"
  name: string;            // synthetic
  age: number;
  sex: 'M' | 'F';
  initials: string;        // "JM"
  riskScore: number;       // 0–100 (display as %)
  riskLevel: RiskLevel;
  vitals: { bp: string; ldl: number };       // "148/92"
  trend7d: number[];       // sparkline points
  status: 'Critical' | 'Monitoring' | 'Stable';
  nextVisit?: string;      // ISO date
}

interface LabResult {
  biomarker: string;       // "LDL Cholesterol"
  specimen: string;        // "Serum · Calculated"
  value: number;
  unit: string;            // "mg/dL"
  level: RiskLevel;        // High/Borderline/Normal mapped to color
  statusLabel: string;     // "High" | "Borderline" | "Normal"
  reference: string;       // "< 100 mg/dL"
  trend6m: number[];
}

interface ImagingStudy {
  id: string;              // "CL-004-92"
  modality: string;        // "TTE_CARDIAC_A"
  frames: number;          // 48
  measurements: { label: string; value: number; unit: string; level: RiskLevel; delta?: string }[];
  aiAssessment: {
    anomaly: boolean;
    title: string;         // "Anomaly Detected"
    body: string;
    confidence: number;    // 0–1
    modelVersion: string;  // "Clin-ML v4.2"
  };
  finalized: boolean;      // requires physician sign-off
}

interface TreatmentArm {
  id: string;              // "ARM-A"
  name: string;
  color: 'stable' | 'blue' | 'borderline';   // legend color
}

interface OutcomeMetric {
  metric: string;          // "LDL Reduction"
  values: Record<string, number | string>;   // armId -> value
  winnerArmId: string;
  higherIsBetter: boolean;
}

interface ComparisonSession {
  id: string;
  patientIds: string[];
  arms: TreatmentArm[];
  metrics: OutcomeMetric[];
  aiRecommendation: {
    perPatient: Record<string, string>;  // patientId -> recommended armId
    confidence: number;
    rationale: string;
    evidence: string;       // "ACC/AHA 2024, prior 3 panels"
  };
  safetyChecks: { label: string; status: 'passed' | 'flagged'; note?: string }[];
  decision?: { armId: string; committedBy: string; committedAt: string };
}
```

### Seed data (use these exact synthetic records so screens look real)
**Patients:**
- John Miller — `H92-8472`, 58M, risk **18.4% / Critical**, BP 148/92, LDL 165, trend rising
- Alice Sterling — `P14-2201`, 64F, risk **12.1% / Monitoring**, BP 130/84, LDL 112, trend flat
- Robert Kincaid — `S55-1092`, 71M, risk **4.2% / Stable**, BP 118/72, LDL 88, trend flat
- Maria Garcia — `MG` (multi-morbidity), used as 2nd patient in Concilium

**Cohort KPIs:** Total 1,284 · High Risk 42 · Active Monitoring 156 · Next 24h Visits 18

**John Miller labs:** LDL 165 mg/dL (High, ref <100) · Triglycerides 190 mg/dL (Borderline, ref <150) · HbA1c 5.8% (Normal, ref 4.0–5.6)

**Imaging (Miller, echo):** EF 62% (Normal) · LV End-Diastolic Vol 124 mL (+8% Δ) · Aortic Valve Area 3.4 cm² (Stable) · AI: "Mild aortic root dilation, +14% since May 2026" — Clin-ML v4.2.

**Concilium outcomes matrix (3 arms A/B/C):**
| Metric | Arm-A | Arm-B | Arm-C | Winner |
|---|---|---|---|---|
| LDL Reduction | 50% | 65% | **78%** | C |
| MACE Risk Δ | −36% | −42% | **−52%** | C |
| NNT (5-year) | 22 | 18 | **14** | C |
| Adverse Events | **8.2%** | 11.4% | 14.8% | A |
| Monthly Cost | **$42** | $78 | $580 | A |

**AI recommendation:** Miller → Arm-A (best safety/compliance tradeoff). Garcia → Arm-B (multi-morbidity ARB advantage, superior NNT). Arm-C reserved for refractory cases. Confidence **92.4%**.
**Safety checks:** Drug-interaction check → passed. Renal dosing → flagged for CKD review.

---

## 7. Screen specs

### Screen 1 — Cohort Command Center (`/cohort`) · Move 01
**Layout:** Left icon rail (38px icons, blue-active) · top bar (breadcrumb "Cardiology Dept › Patient Cohort A", "EPIC EHR LIVE" status, "+ Add Patient" primary button) · content.
- **4 KPI cards** in a row: Total Patients (neutral), High Risk (critical border+text), Active Monitoring (borderline), Next 24h Visits (blue).
- **Patient Registry table** with columns: Patient (avatar initials + name + mono ID·age·sex), Risk Score (% + RiskBar), Clinical Vitals (BP + LDL), Trend 7d (Sparkline), Status (StatusBadge). Sortable by risk (default desc). **Row click → `/patient/[id]`.**
- Export button (ghost) top-right of table.

### Screen 2 — Patient Record (`/patient/[id]`) · Move 02
**Layout:** Patient header (avatar, name, mono `ID · age · sex`, "← Back to Cohort" ghost button) · **TabSpine**: Overview · Clinical History · Lab Results · Imaging.
- **Lab Results tab** (the showcase): DataTable — Biomarker (name + specimen sub), Value (colored by level + unit), Status (StatusBadge), Reference (mono), 6m Trend (Sparkline). Below it an **AIInsightBar** (navy): "Lipid profile indicates persistent hypercholesterolemia. Recommend titrating statin dose…" + evidence "ACC/AHA 2024, prior 3 panels."
- **Overview / History tabs:** summary cards (conditions, meds, allergies, recent encounters) — build as simple stacked cards.

### Screen 3 — DICOM Imaging (`/patient/[id]/imaging`) · Move 02
**Layout:** Two-column `[1.7fr viewer | 1fr AI rail]`.
- **Left (dark, navy/`#070b14`):** toolbar (pan/zoom/measure tool toggles + "✦ AI Assist" button + frame counter "40/48") · **viewer stage** (dark gradient placeholder for the echo/DICOM loop — overlay mono HUD: FPS, ZOOM, W/L on left; study code, slice on right; a measurement annotation pill "LVOT 2.1 cm") · transport bar (play + scrubber at ~83% + "Frames" label). *For a real build, integrate **Cornerstone.js / OHIF viewer** here; use a static image/loop as placeholder until then.*
- **Right (light):** "AI Assessment" header · **critical-tint anomaly card** (red dot, "Anomaly Detected", body text) · "Key Measurements" list (EF 62% Normal, LV EDV 124mL +8%Δ borderline, AVA 3.4cm² Stable) · **"▤ Finalize Report" primary button** (full width) · mono caption "Authenticated by Clin-ML v4.2 · requires physician sign-off."

### Screen 4 — The Concilium / Treatment Comparison (`/concilium/[id]`) · Move 03 · ⭐ CENTERPIECE
**Layout (single scroll):**
1. **Title row:** icon + "Treatment Comparison" + mono "2 patients · 3 arms" · right: patient avatar chips (JM, MG).
2. **Clin-ML Insight bar** (navy, full width): "Clin-ML Insight" + mono "92.4% confidence" + rationale with bolded arm assignments.
3. **Sub-tabs:** Treatment Arms (3) · **Outcomes Matrix (8)** · Visual Analytics (6). Default = Outcomes Matrix.
4. **Outcomes Matrix table:** columns = Metric · Arm-A · Arm-B · Arm-C · Winner. Each row: winner cell is **stable-green + bold + "✓"**, others muted. Winner column shows a green StatusBadge with the arm name. Use the seed matrix above.
5. **CommitBar** (bottom): left shows safety checks ("Drug-interaction check **passed** · renal dosing review flagged for CKD") · right: "Defer" (ghost) + **"✓ Approve & Commit" (primary)**.
   - Approve opens a confirm dialog → records `decision` with committedBy (current user) + timestamp → toast "Decision committed to patient chart."
6. **Visual Analytics tab:** Recharts grouped bar / radar comparing arms across metrics (optional, build last).

---

## 8. Interaction & state notes
- **Comparison session flow:** `/concilium/new` → multi-select patients from cohort + pick 2–3 arms → creates session → redirect to `/concilium/[id]`.
- **AI confidence display:** always render as `XX.X%` in monospace next to any AI output. If confidence < 70%, show an amber "low confidence — review carefully" note.
- **Nothing commits without a human:** Finalize Report and Approve & Commit both require an authenticated user; show the signer's name on the committed record.
- **Persist** active cohort filters and the open comparison session (localStorage or server) so refresh doesn't lose context.
- **Empty/loading states:** skeleton rows for tables; "No high-risk patients" positive empty state.
- **Accessibility:** status is never conveyed by color alone — always pair with a text label (the StatusBadge already does this). Min 44px touch targets. WCAG AA contrast.

---

## 9. Build sequence (do in this order)
1. **Tokens + Tailwind config** (§4) and `globals.css` variables.
2. **Primitive components** (§5): StatusBadge, RiskBar, Sparkline, MetricCard, Button, AIInsightBar, CommitBar, TabSpine.
3. **Mock API + seed data** (§6) as Next.js route handlers returning the synthetic records.
4. **Screen 1 — Cohort Command Center** (registry table + KPIs).
5. **Screen 2 — Patient Record** (tab spine + Lab Results + AI insight).
6. **Screen 4 — The Concilium** (outcomes matrix + commit flow). ← prioritize over imaging; it's the centerpiece.
7. **Screen 3 — DICOM Imaging** (static placeholder viewer + AI rail; integrate OHIF later).
8. **Visual Analytics charts**, settings stub, auth gate.
9. Polish: loading/empty states, toasts, keyboard nav, responsive (tables → stacked cards under 768px).

---

## 10. What this is NOT (scope guardrails)
- Not a real EHR or a regulated medical device — **concept/demo**, synthetic data only. Add a persistent "Concept — synthetic data" banner or footnote.
- AI does not auto-treat, auto-prescribe, or hide reasoning. No black-box recommendations.
- No real PHI. All names, IDs, and values are fictional.

---

### Appendix — exact copy strings (use verbatim for fidelity)
- AI lab insight: *"Lipid profile indicates persistent hypercholesterolemia. Recommend titrating statin dose before the next follow-up."* — evidence: ACC/AHA 2024, prior 3 panels.
- Clin-ML Concilium rationale: *"Miller → ARM-A (best safety / compliance tradeoff). Garcia → ARM-B (multi-morbidity ARB advantage, superior NNT). ARM-C reserved for refractory cases."*
- Imaging anomaly: *"Mild aortic root dilation. Exceeds patient baseline by 14% since May 2026 study."*
- Commit bar: *"Drug-interaction check passed · renal dosing review flagged for CKD."*
- Imaging caption: *"Authenticated by Clin-ML v4.2 · requires physician sign-off."*
