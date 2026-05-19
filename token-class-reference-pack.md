# Token-Class Reference Pack (External FE)

## Purpose
Use this pack to share approved design-token intent with external FE teams that do not have repository access.

This is a transport document:
1. It defines what classes/tokens FE should use.
2. It does not replace repository source of truth.
3. It should be versioned and attached to each page handoff.
4. In `vue-first` mode, this guides content-focused `page.vue` output; if `layout_policy=reusable-shell`, provided shell files are review references.

---

## Visual Reference URL

Primary visual reference:
- `https://elearning.cornell.eacanta.org/design-system`

Rule:
1. FE must verify implementation decisions against this URL.
2. Any mismatch between implementation and visual reference must be recorded in `token-diff.md`.

---

## Pack Metadata

- Pack version: `v____`
- Prepared by: `__________________`
- Date: `__________________`
- Related page handoff: `__________________`

---

## A. Token Usage Rules

1. Use approved token classes first.
2. Do not use raw hex unless explicitly approved.
3. Do not use inline styles unless explicitly approved.
4. Keep spacing, typography, and radius aligned to this pack.
5. If deviation is needed, record it in `token-diff.md`.
6. Keep page content implementation separate from app shell layout.

---

## B. Core Surface And Text Tokens

Fill with your current approved classes for this delivery cycle.

| Category | Preferred Class | Usage |
|---|---|---|
| Page background | `bg-page` | Main app/page background |
| Card/panel background | `bg-card` | Cards, panels, table shells |
| Border/divider | `border-border` | Card borders, separators, input borders |
| Heading text | `text-heading` | Page headings and emphasized labels |
| Body text | `text-body` | Default paragraph and support text |
| Muted text | `text-muted` | Secondary metadata text |

---

## C. Action Tokens

| Category | Preferred Class | Usage |
|---|---|---|
| Primary action bg | `bg-accent` | Primary CTA buttons |
| Primary action hover | `hover:bg-accent-hover` | Primary CTA hover state |
| Dark button bg | `bg-btn-navy` | Secondary dark actions (if used) |
| Dark button hover | `hover:bg-btn-navy-hover` | Secondary dark hover state |

---

## D. Layout And Spacing Guardrails

| Element | Preferred Class/Value | Notes |
|---|---|---|
| Desktop content padding | `lg:p-6` | Page content wrapper |
| Base content padding | `p-4` | Mobile/default spacing |
| Card radius | `rounded-xl` | Standard panel radius |
| Card inner padding | `p-4` or `p-5` | Keep consistent per section |

---

## E. Typography Guardrails

| Element | Preferred Class Pattern | Notes |
|---|---|---|
| Page title | `text-2xl` to `text-3xl` + `font-bold`/`font-extrabold` + `text-heading` | Match hierarchy to mock |
| Section heading | `text-lg`/`text-xl` + `font-semibold` + `text-heading` | Consistent section rhythm |
| Body copy | `text-sm`/`text-base` + `text-body` | Avoid ad-hoc sizes |
| Meta labels | `text-xs` + `text-muted` | Secondary text only |

---

## F. Component Recipes (Copy/Paste Starters)

These are starter patterns FE should adapt minimally.

### Card Container
```html
<section class="rounded-xl border border-border bg-card p-4 lg:p-5">
  <!-- content -->
</section>
```

### Primary Button
```html
<button
  type="button"
  class="inline-flex items-center justify-center rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-white transition hover:bg-accent-hover disabled:cursor-not-allowed disabled:opacity-60"
>
  Action
</button>
```

### Text Input
```html
<input
  type="text"
  class="w-full rounded-lg border border-border bg-white px-3 py-2 text-sm text-body placeholder:text-muted focus:border-heading focus:outline-none focus:ring-2 focus:ring-heading/20"
/>
```

### Section Header
```html
<header class="mb-4">
  <h2 class="text-xl font-bold text-heading">Section Title</h2>
  <p class="mt-1 text-sm text-body">Section support text</p>
</header>
```

---

## G. Responsive Baseline

| Breakpoint | Expected Behavior |
|---|---|
| default (`<640`) | Single-column, compact spacing |
| `md` (`>=768`) | Multi-column where required |
| `lg` (`>=1024`) | Desktop density and sidebar-aware layouts |

FE must provide both desktop and mobile review states in the primary artifact (`page.vue` in vue-first, `review.html` in legacy mode).

In `vue-first` mode:
1. Provide those states in `page.vue`.
2. `review.html` is optional unless legacy mode is requested.

---

## H. Disallowed Patterns

1. Raw hex in class strings or inline styles (unless approved and documented).
2. Arbitrary spacing values without approval.
3. Typography values that break hierarchy consistency.
4. Rebuilding shell patterns unrelated to page content.

---

## I. Approval Exceptions

Document any approved exceptions before development starts.

| Exception ID | Area | Approved Deviation | Reason | Approved By |
|---|---|---|---|---|
| EX-01 | example | `style="..."` allowed for one case | legacy constraint | name |

---

## J. FE Declaration (Required in Submission)

Add this statement to the top of `token-diff.md`:

`Implemented against Token-Class Reference Pack version v____. All deviations are listed below with reasons.`
