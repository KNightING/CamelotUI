# Plan: 2604100933 - Optimize Index Showcase

Optimize the `index.html` display by encapsulating all demo and comparison logic into custom elements. This will simplify `index.html`, remove non-standard DOM/CSS, and fulfill the requirement of separating components without group borders.

- Created: 2026-04-10 09:34
- Completed: [Wait for Finish]

## Goals
1.  **Strip Wrappers**: Remove all `.style-column`, `.comparison-grid`, and `.group-border` classes that create visual boundaries.
2.  **Direct Rendering**: Place `<camelot-*>` components directly into the main viewport with minimal semantic grouping.
3.  **Unified Theme Switching**: Transition from "Side-by-side comparison" (which requires columns) to a "Global Theme Toggle" that updates the entire showcase state at once.
4.  **Premium Visuals**: Use high-end typography and spacing (negative space) instead of borders to define sections.
5.  **Vite Modernization**: Move script imports to `src/main.ts` but keep the DOM in `index.html` for easy manual editing by the user.

## Proposed Changes

### [Showcase Cleanup]
#### [MODIFY] [index.html](./index.html)
- Remove all `.style-column`, `.comparison-section`, and `.comparison-grid` CSS rules.
- Delete the side-by-side comparison columns.
- Re-layout items to flow naturally using a unified grid.
- Keep the `<camelot-theme>` controller but remove internal layout divs.

### [Core Structure]
#### [NEW] [main.ts](./src/main.ts)
- Unified entry point for Vite/Rollup.
- Import all component definitions here to keep `index.html` script-area clean.

#### [DELETE] [CamelotShowcase.ts]
- (Cancelled) We will not add a new packaging layer as per user request.

## Verification Plan

### Automated Tests
- `pnpm dev`: Ensure the dev server runs and the page renders correctly.

### Manual Verification
1.  Verify that all components (Buttons, Inputs, etc.) are still visible and functional.
2.  Confirm that the "group borders" are removed and the layout is clean.
3.  Check that theme/palette switching still works.
4.  Ensure no console errors from missing imports or misaligned logic.
