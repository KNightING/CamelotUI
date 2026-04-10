# Plan: 2604101050 - Refine Sci-fi Components & Fix Theme Reset
- Created: 2026-04-10 10:50
- Branch: N/A
- Completed: [Wait for Finish]

## Goals
1.  **Cyber Font Stickiness**: Fix the issue where the Cyberpunk font family persists after switching back to default.
2.  **Sci-fi Select Search**: Implement a search input within the Sci-fi HUD Select component.
3.  **Sci-fi TextButton Animation**: Add the "Flowing Light" (shine-glide) effect to the Sci-fi TextButton.

## Proposed Changes

### [Theme Configuration]
#### [MODIFY] [themes.ts](src/styles/themes.ts)
- Add default font family to `THEME_DEFAULT.dark` to ensure explicit reset.

### [Select Component]
#### [MODIFY] [CamelotScifiSelect.ts](src/components/select/CamelotScifiSelect.ts)
- Add search input in `options-panel`.
- Trigger `search` event on input.

### [Button Component]
#### [MODIFY] [CamelotScifiTextButton.ts](src/components/button/text/CamelotScifiTextButton.ts)
- Implement `shine-glide` CSS animation and trigger on hover.

## Verification Plan
1.  Verify theme switching resets fonts correctly.
2.  Verify Sci-fi Select search filters options.
3.  Verify Sci-fi TextButton hover shine effect.
