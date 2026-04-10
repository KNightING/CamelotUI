# Plan: 2604101121 - Add Theme Mode Selector

Add a Dark/Light/Auto theme mode selector to the Showcase Control Panel to allow users to manually toggle between light and dark themes or follow system preferences.

## Proposed Changes

### [Showcase Control Panel]

#### [MODIFY] [index.html](index.html)
- Add a new `<camelot-select>` with `id="theme-mode-selector"` to the `.control-panel` div.
- Position it alongside the existing Theme Style and Color Palette selectors.

#### [MODIFY] [main.ts](src/main.ts)
- Define the options for `theme-mode-selector`: `System (Auto)`, `Light Mode`, `Dark Mode`.
- Add an event listener to update the `theme` attribute of the `root-theme` (`camelot-theme`) component.

## Verification Plan

### Automated Tests
- `pnpm exec tsc --noEmit`: Ensure no TypeScript regressions.

### Manual Verification
- Verify that changing the Mode selector correctly toggles the UI between light and dark modes across all styles (Material, Soft, etc.).
- Verify that "System (Auto)" correctly follows the operating system's theme preference.
