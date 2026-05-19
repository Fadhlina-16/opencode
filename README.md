# Stage 1 README (UIUX Designer)

## Role
You are Stage 1 PIC (UIUX Designer).

## Objective
Create the initial content-only Vue draft and define edge cases from Figma/requirements.

## Input Files
1. `external-fe-handoff-pack.md`
2. `token-class-reference-pack.md`
3. `edge-case-matrix.md`
4. `../shared/cornell-preview.css` (full-flow package) or local `cornell-preview.css` (single-stage package)
5. `../shared/assets/` or local `assets/` (if provided)
6. optional `../shared/reusable-shell/` or local `reusable-shell/` (when `layout_policy=reusable-shell` in `handoff-manifest.json`)
7. Page requirement source (chat paste or markdown requirement file)

## Preflight (Required Before Stage Work)
1. Confirm `node` and `npm` are available in your local environment.
2. Confirm you have a local Vue workspace to open and iterate `page.vue`.
3. If no Vue workspace exists yet:
   - create one-time local project (example): `npm create vite@latest cornell-stage-viewer -- --template vue`
   - enter project and install deps: `npm install`
   - run dev server once: `npm run dev`
4. Confirm visual references and package files are accessible (`token-class-reference-pack.md`, `edge-case-matrix.md`, `cornell-preview.css`).

## Workflow Steps (Do In Order)
1. Retrieve page requirement and paste/provide it to AI (chat or markdown file).
2. Ask AI to draft UI based on requirement into `page.vue` (content-focused output).
3. If `layout_policy=reusable-shell`, use `reusable-shell/` only to improve visual review context/parity.
4. Perform human visual verification against intended design/system references.
5. Iterate with AI until visual output is approved.
6. Replace/adapt baseline rows in `edge-case-matrix.md` with page-specific states from requirement/Figma.
7. Push finalized Stage 1 design direction to Figma via MCP.
8. Keep stable section IDs for handoff mapping (for example: `hero`, `filters`, `table`) and keep token usage aligned with `token-class-reference-pack.md`.

## Output To Pass
Create and pass:
- `<page>-handoff+vue+html+artifact-stage1.zip`

Must include:
1. `page.vue`
2. updated `edge-case-matrix.md`
3. changed assets (if any)

## Sync-Back Rule
After packaging, notify team that Stage 1 sync-back is ready and pass both:
1. full workflow zip (`<page>-cornell-workflow-<YYYYMMDD-HHmmss>.zip`)
2. Stage 1 artifact zip
