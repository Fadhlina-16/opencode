# Cornell Leadership Academy — Design System

> **Source:** `elearning.cornell.eacanta.org/design-system`  
> **Stack:** Vue 3 + Inertia.js + Tailwind CSS  
> **Generated from:** Design System - Cornell Leadership Academy eLearning.html

---

## Table of Contents

1. [Colours](#1-colours)
2. [Gradients](#2-gradients)
3. [Typography](#3-typography)
4. [Spacing & Radius](#4-spacing--radius)
5. [Buttons](#5-buttons)
6. [Form Elements](#6-form-elements)
7. [Cards](#7-cards)
8. [Badges & Chips](#8-badges--chips)
9. [Sidebar](#9-sidebar)
10. [Avatar](#10-avatar)
11. [Toast Notifications](#11-toast-notifications)
12. [Tables](#12-tables)
13. [Modals](#13-modals)
14. [Empty States](#14-empty-states)
15. [Loading States](#15-loading-states)
16. [Icons](#16-icons)
17. [Tabs](#17-tabs)
18. [Breadcrumbs](#18-breadcrumbs)
19. [Tooltips](#19-tooltips)
20. [Stepper](#20-stepper)
21. [Tags / Chips](#21-tags--chips)
22. [Accordion](#22-accordion)

---

## 1. Colours

### App Shell Palette
*Dashboard, e-learning shell, and shared layout surfaces.*

| Hex | Name | Token | Description |
|-----|------|-------|-------------|
| `#1F2A44` | Deep Navy | `sidebar` | Legacy navy surface for dark utility elements |
| `#38516F` | Navy Highlight | `sidebar-active` | Active nav state and dark hover surfaces |
| `#F2F2F2` | Soft White | `sidebar-text` | Text on dark sidebar surfaces |
| `#7B90A8` | Steel Blue | `sidebar-muted` | Muted sidebar labels and icons |
| `#FFF4DA` | Warm Cream | `sidebar-icon` | Sidebar icon fill color |
| `#F5C842` | Golden Yellow | `banner-from` | Welcome banner gradient start |
| `#F0A830` | Amber | `banner-to` | Welcome banner gradient end |
| `#F97316` | Coral Orange | `accent` | Primary CTA and active accents |
| `#EA6C0A` | Burnt Orange | `accent-hover` | Hover state only for accent controls |
| `#1F2A44` | Button Navy | `btn-navy` | Alternative dark button fill |
| `#38516F` | Button Navy Hover | `btn-navy-hover` | Hover state for navy button variant |
| `#F3F4F6` | Page Grey | `page` | Application page background |
| `#FFFFFF` | Card White | `card` | Card and panel surfaces |
| `#E5E7EB` | Border Grey | `border` | Card borders and dividers |
| `#1F2A44` | Heading Navy | `heading` | Primary headings on light backgrounds |
| `#6B7280` | Body Grey | `body` | Body copy and descriptive text |
| `#9CA3AF` | Muted Grey | `muted` | Meta labels and subtle secondary text |

### Personality Test Palette
*Test flow, eLearning module screens, and personality assessment UI.*

| Hex | Name | Token | Description |
|-----|------|-------|-------------|
| `#EBAE39` | Gold | `gold` | Primary highlight and score emphasis |
| `#9C7115` | Gold Dark | `gold-dark` | Gold hover and stronger contrast states |
| `#F9F3DD` | Gold Light | `gold-light` | Soft gold backgrounds and supporting panels |
| `#F4D283` | Gold Soft | `gold-soft` | Intermediate gold tint for subtle emphasis |
| `#132316` | Forest | `forest` | Current eLearning sidebar background and test dark brand color |
| `#1C3828` | Forest Light | `forest-light` | Forest hover and layered dark states |
| `#D46B1A` | Tiger | `tiger` | Primary action color in test flow |
| `#BE5F17` | Tiger Dark | `tiger-dark` | Tiger hover and pressed states |
| `#FDF0E6` | Tiger Light | `tiger-light` | Light tiger surface for notices and cards |
| `#F4F8F5` | Mist | `mist` | Soft page background in test modules |
| `#333333` | Ink | `ink` | Primary body text on light surfaces |
| `#1E1E1E` | Ink Heading | `ink-heading` | High-emphasis heading text in test screens |

### Color Usage Patterns

```
Headings   → text-heading  (#1F2A44)
Body copy  → text-body     (#6B7280)
Meta/muted → text-muted    (#9CA3AF)
```

> **Sidebar note:** The legacy app shell uses `bg-sidebar` (#1F2A44). The current eLearning sidebar uses `bg-forest` (#132316).

---

## 2. Gradients

| Name | Classes | Colors |
|------|---------|--------|
| Banner Gradient | `bg-gradient-to-r from-banner-from to-banner-to` | `#F5C842` → `#F0A830` |

---

## 3. Typography

**Primary Font:** Epilogue (Google Fonts)  
**Secondary Fonts:** Barlow (test screens), Libre Baskerville (serif accent)

**Loaded weights:** 300, 400, 500, 600, 700, 800

### Type Scale

| Size Class | Weight Class | Weight | Usage |
|------------|--------------|--------|-------|
| `text-4xl` | `font-extrabold` | 800 | Hero heading — "Cornell Academy" |
| `text-3xl` | `font-bold` | 700 | Page title — "Welcome back!" |
| `text-2xl` | `font-bold` | 700 | Section heading — "Dashboard" |
| `text-xl` | `font-semibold` | 600 | Sub-heading — "Course Modules" |
| `text-base` | `font-semibold` | 600 | Card title — "Total Hour Spent" |
| `text-sm` | `font-medium` | 500 | Label — "Hospitality & Service Skills" |
| `text-sm` | `font-normal` | 400 | Body copy — `text-body` color |
| `text-xs` | `font-normal` | 400 | Meta label — `text-muted`, `tracking-wider` |

---

## 4. Spacing & Radius

### Border Radius

| Class | Value | Usage |
|-------|-------|-------|
| `rounded` | 4px | Badges, small pill elements |
| `rounded-lg` | 8px | Buttons, inputs, dropdowns |
| `rounded-xl` | 12px | **Primary card radius** — all cards and panels |
| `rounded-2xl` | 16px | Pill inputs, search bar |
| `rounded-full` | 9999px | Avatars, badge chips, spinner |

### Content Padding

| Class | Value | Usage |
|-------|-------|-------|
| `p-6` | 24px | Standard card content padding |
| `p-5` | 20px | Compact card padding |
| `px-5 py-3.5` | — | Table row cells |
| `px-5 py-4` | — | Table header / toolbar row |
| `px-4 py-2.5` | — | Button padding (default) |
| `px-3 py-1` | — | Badge / chip padding |

---

## 5. Buttons

| Variant | Classes | Usage |
|---------|---------|-------|
| Primary | `bg-accent text-white hover:bg-accent-hover` | Main CTA |
| Outline | `border border-accent text-accent hover:bg-accent hover:text-white` | Secondary action |
| Dark | `bg-btn-navy text-white hover:bg-btn-navy-hover` | Alternate dark CTA |
| Ghost | `text-accent hover:bg-accent/10` | Low-emphasis action |
| Link | `text-accent underline-offset-4 hover:underline` | Inline text action |

### CRUD Action Variants

| Variant | Icon | Color |
|---------|------|-------|
| Create | `Plus` | `bg-accent` |
| View | `Eye` | `text-body` outline |
| Edit | `Pencil` | `text-accent` outline |
| Delete | `Trash2` | `bg-red-500 text-white` |
| Delete Outline | `Trash2` | `border-red-400 text-red-400` |

---

## 6. Form Elements

| Component | Notes |
|-----------|-------|
| Text Input | `rounded-lg border border-border`, focus: `border-accent ring-2 ring-accent/20` |
| Search Input | With results dropdown and no-results state |
| Textarea | Character count display |
| Dropdown / Select | `rounded-lg border border-border` |
| Checkbox | Accent-checked state |
| Radio Button | Accent-selected state |
| Toggle / Switch | `bg-accent` when on |
| Readonly State | `bg-page cursor-not-allowed` |
| Success State | `border-green-400 ring-2 ring-green-400/20` |
| Input with Prefix/Suffix | Icon or text adornment inside input |
| Date Picker | Calendar popover |
| File Upload | Drag-and-drop zone with dashed border |

**Error state pattern:**
```css
border-red-400 ring-2 ring-red-400/20
/* + error message: */
text-xs text-red-400
```

---

## 7. Cards

| Variant | Key Classes | Notes |
|---------|-------------|-------|
| Base Card | `bg-card rounded-xl border border-border shadow-sm` | Default surface |
| Base Card (hover) | `+ hover:shadow-[0_4px_20px_rgba(249,115,22,0.35)] hover:border-accent` | Accent glow on hover |
| Banner Card | `bg-gradient-to-r from-banner-from to-banner-to` | #F5C842 → #F0A830 |
| Dark Card | `bg-forest text-white` | Test module screens |

---

## 8. Badges & Chips

| Variant | Classes |
|---------|---------|
| Accent | `bg-accent/10 text-accent` |
| Dark | `bg-heading text-white` |
| Unread | `bg-red-100 text-red-600` |
| Module | `bg-page text-body border border-border` |
| Muted | `bg-page text-muted` |
| Notification dot | `h-2 w-2 rounded-full bg-accent` |

All badges: `rounded px-3 py-1 text-xs font-medium`

---

## 9. Sidebar

| State | Classes |
|-------|---------|
| Container | `bg-forest` (#132316) |
| Nav item (default) | `text-sidebar-text hover:bg-forest-light` |
| Nav item (active) | `bg-tiger text-white` |
| Nav item icon | `fill-sidebar-icon` (#FFF4DA) |

---

## 10. Avatar

| Size | Class | Usage |
|------|-------|-------|
| Small | `h-8 w-8` | Topbar compact |
| Medium | `h-10 w-10` | Topbar default |
| Large | `h-28 w-28` | Instructor profile |

All avatars: `rounded-full bg-accent text-white font-semibold` (initials-based)

---

## 11. Toast Notifications

Library: `vue-toastification` with custom design token styling.

| Type | Icon | Color |
|------|------|-------|
| Success | `CheckCircle` | Green |
| Error | `XCircle` | Red |
| Warning | `AlertTriangle` | Amber |
| Info | `Info` | Blue |

Progress bar: `bg-white/60`

---

## 12. Tables

**Structure:** Search bar + sort headers + avatar cells + status badges + action icons

| Element | Classes |
|---------|---------|
| Header row | `bg-page px-5 py-4 text-xs font-semibold text-muted uppercase tracking-wider` |
| Body row | `border-t border-border px-5 py-3.5` |
| Row hover | `hover:bg-orange-50` |
| Sort indicator | `ChevronUp` / `ChevronDown` in `text-accent` |
| Action: View | `Eye` icon — `text-body hover:text-accent` |
| Action: Edit | `Pencil` icon — `text-body hover:text-accent` |
| Action: Delete | `Trash2` icon — `text-body hover:text-red-500` |

---

## 13. Modals

| Variant | Description |
|---------|-------------|
| Confirm / Destructive | Red icon header, Cancel + Delete buttons |
| Form Modal | Header with title, body with form fields, footer with Cancel + Submit |

---

## 14. Empty States

| State | CTA |
|-------|-----|
| No modules | "Browse Modules" button |
| No search results | "Clear Search" button |
| No announcements | "View All" button |

---

## 15. Loading States

| Component | Details |
|-----------|---------|
| Spinner (sm) | `h-4 w-4 rounded-full border-2 border-accent border-t-transparent animate-spin` |
| Spinner (md) | `h-6 w-6` same pattern |
| Spinner (lg) | `h-8 w-8` same pattern |
| Button inline spinner | Spinner replaces button text during loading |
| Skeleton card | Avatar circle + lines — `bg-page animate-pulse rounded` |
| Table skeleton | 5-row skeleton with column-width placeholders |

---

## 16. Icons

**Library:** `lucide-vue-next`  
**Default size:** `h-6 w-6`  
**Style:** Stroke-based, `stroke-width="2"`

**Common UI icons:** Bell, Search, Play, Eye, Pencil, Trash2, Plus, ChevronUp, ChevronDown, CheckCircle, XCircle, AlertTriangle, Info

**Custom sidebar SVGs** (stored in `/icons/`):

| File | Nav Item |
|------|----------|
| `nav-1.svg` | Dashboard |
| `nav-2.svg` | Modules |
| `nav-3.svg` | Mentoring |
| `nav-4.svg` | E-Learning |
| `nav-5.svg` | Attendance |
| `nav-6.svg` | Schedule |
| `nav-7.svg` | Result |
| `nav-8.svg` | Announcements |
| `nav-9.svg` | Settings |
| `logout.svg` | Logout |

---

## 17. Tabs

| Style | Active State | Container |
|-------|-------------|-----------|
| Underline | `border-b-2 border-accent text-accent` | `border-b border-border` |
| Pill | `bg-white shadow-sm text-heading` | `bg-page rounded-xl p-1` |

---

## 18. Breadcrumbs

| Variant | Description |
|---------|-------------|
| Full path | All segments shown with `ChevronRight` separator |
| Collapsed | Middle segments replaced with `···` truncation |

---

## 19. Tooltips

| Position | Arrow direction |
|----------|----------------|
| Top | Arrow points down |
| Bottom | Arrow points up |
| Left | Arrow points right |
| Right | Arrow points left |

Background: `bg-heading text-white text-xs rounded-lg px-2 py-1`

---

## 20. Stepper

4-step horizontal stepper for multi-step flows.

| State | Classes |
|-------|---------|
| Completed | `bg-accent text-white` + `Check` icon |
| Current | `border-2 border-accent text-accent` + step number |
| Pending | `border border-border text-muted` + step number |

Connector line: `flex-1 h-0.5 bg-border` (filled with `bg-accent` for completed steps)

---

## 21. Tags / Chips

### Static Tags

| Variant | Classes |
|---------|---------|
| Default | `bg-page border border-border text-body` |
| In Progress | `bg-accent/10 text-accent` |
| Completed | `bg-green-100 text-green-700` |
| New | `bg-blue-100 text-blue-700` |
| Admin | `bg-heading text-white` |

### Removable Chip

```html
<span class="...tag-classes...">
  Label
  <button class="ml-1 text-muted hover:text-heading">×</button>
</span>
```

---

## 22. Accordion

| State | Classes |
|-------|---------|
| Closed | `border border-border rounded-xl` |
| Open | `border border-border rounded-xl bg-card` |
| Chevron closed | `ChevronDown` — `transition-transform` |
| Chevron open | `rotate-180` |
| Row hover | `hover:bg-page` |

---

## Design Decisions & Patterns

### Focus Ring (all inputs)
```css
border-accent ring-2 ring-accent/20 outline-none
```

### Card Hover Glow
```css
hover:shadow-[0_4px_20px_rgba(249,115,22,0.35)] hover:border-accent
```

### Table Row Highlight
```css
hover:bg-orange-50
```

### Two Sidebar Systems
- **App Shell (legacy):** `bg-sidebar` = `#1F2A44` (Deep Navy)
- **eLearning (current):** `bg-forest` = `#132316` (Forest Dark)
