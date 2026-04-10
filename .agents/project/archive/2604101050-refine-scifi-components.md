# Plan: 2604101050 - Refine Sci-fi Components & Fix Theme Reset
- Created: 2026-04-10 10:50
- Completed: 2026-04-10 11:20

## Goals
1.  **Cyber Font Stickiness**: Fix the issue where the Cyberpunk font family persists after switching back to default.
2.  **Sci-fi Select Search**: Implement a search input within the Sci-fi HUD Select component.
3.  **Sci-fi TextButton Animation**: Add the "Flowing Light" (shine-glide) effect to the Sci-fi TextButton.

## Proposed Changes
- Modified `themes.ts`: Added default font family reset logic.
- Modified `CamelotScifiSelect.ts`: Added search input and logic.
- Modified `CamelotScifiTextButton.ts`: Implemented `shine-glide` using `CamelotScifiFrame`.
- Modified `CamelotScifiFrame.ts`: Standardized attribute names to kebab-case and corrected CSS selectors.

## Tasks
- [x] Fix Cyber font stickiness in `themes.ts`
- [x] Implement search UI in `CamelotScifiSelect.ts`
- [x] Functional test: Sci-fi Select search logic (Manual)
- [x] Implement shine-glide animation in `CamelotScifiTextButton.ts`
- [x] Verification: Font reset & Component animations
