# Edge Case Matrix (Stage 1 Source of Truth)

Use this matrix to define edge-case states once in Stage 1.
Stage 2 validates coverage and records QA findings against required states.
Stage 3 implements/resolves required states in `page.vue` and confirms final coverage.

Page: `schedule.html` (My Mentoring calendar)  
Prepared by: `System`  
Date: `2026-04-15`

---

## Rules

1. Replace baseline/example rows with page-specific requirement rows.
2. Fill every row marked `required`.
3. Keep section IDs stable with the intended Vue structure (`hero`, `calendar`, `modal`).
4. If a state is intentionally out of scope, mark `status = deferred` and provide reason.
5. Do not include app shell sections (sidebar/topbar). This matrix is content-area only.

---

## Matrix

| Section ID | State | Trigger/Condition | Expected UI Behavior | Required | Status | Notes |
|---|---|---|---|---|---|---|
| hero | default | page loads, data ready | heading + subtitle + legend visible | yes | done | |
| hero | loading | calendar data pending render | skeleton grid shown, calendar hidden until ready | yes | done | simulated with 500ms delay on init |
| calendar | default | month has events | calendar grid renders with event pills (wide) / dots (narrow) | yes | done | |
| calendar | empty | no events in current month | empty-state card with icon + message shown, grid hidden | yes | done | |
| calendar | error | data fetch/parse fails | error banner with retry button | yes | done | banner toggled with 'E' key |
| calendar | long-content | long event titles in pills | text truncates with ellipsis, no layout break | yes | done | `text-overflow: ellipsis` on `.cell-pill` |
| modal | default | date clicked, events exist | expandable activity list with detail fields | yes | done | |
| modal | empty | date clicked, no events | illustration + "No scheduled activities" message | yes | done | |
| modal | long-content | very long mentee names / titles | detail text wraps and scrolls inside modal body | yes | deferred | all current data fits comfortably; modal-body has `overflow-y: auto` as fallback |

---

## Completion Checklist

- [x] All required rows completed or deferred with reason
- [x] Section IDs align with `schedule.html` content sections
- [x] State behaviors are specific enough to test in Stage 3
