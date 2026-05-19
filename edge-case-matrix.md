# Edge Case Matrix (Stage 1 Source of Truth)

Use this matrix to define edge-case states once in Stage 1.
Stage 2 validates coverage and records QA findings against required states.
Stage 3 implements/resolves required states in `page.vue` and confirms final coverage.

Page: `__________________`  
Prepared by: `__________________`  
Date: `__________________`

---

## Rules

1. Replace baseline/example rows with page-specific requirement rows.
2. Fill every row marked `required`.
3. Keep section IDs stable with the intended Vue structure (`hero`, `filters`, `table`, etc.).
4. If a state is intentionally out of scope, mark `status = deferred` and provide reason.
5. Do not include app shell sections (sidebar/topbar). This matrix is content-area only.

---

## Matrix

Template baseline (replace/adapt per page requirement):

| Section ID | State | Trigger/Condition | Expected UI Behavior | Required (`yes`/`no`) | Status (`todo`/`done`/`deferred`) | Notes |
|---|---|---|---|---|---|---|
| hero | default | initial load success | heading + CTA visible | yes | todo | |
| hero | loading | data request pending | skeleton/placeholder shown | yes | todo | |
| table | empty | no records returned | empty-state copy + action | yes | todo | |
| table | error | request failed | error banner + retry affordance | yes | todo | |
| form | validation-error | invalid input | inline validation messages | yes | todo | |
| form | long-content | very long labels/text | no overflow/cutoff; wraps correctly | yes | todo | |
| permissions | restricted-view | role cannot access action | action hidden/disabled with explanation | yes | todo | |

---

## Completion Checklist

- [ ] All required rows completed or deferred with reason
- [ ] Section IDs align with `page.vue` content sections
- [ ] State behaviors are specific enough to test in Stage 3
