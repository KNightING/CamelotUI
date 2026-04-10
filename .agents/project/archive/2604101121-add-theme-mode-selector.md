# Plan: 2604101121 - Add Theme Mode Selector
- Created: 2026-04-10 11:21
- Completed: 2026-04-10 11:25

## Goals
Add a Dark/Light/Auto theme mode selector to the Showcase Control Panel to allow users to manually toggle between light and dark themes or follow system preferences.

## Proposed Changes

### [Showcase Control Panel]

#### [MODIFY] [index.html](index.html)
- Add a new `<camelot-select>` with `id="theme-mode-selector"` to the `.control-panel` div.
- Position it alongside the existing Theme Style and Color Palette selectors.

#### [MODIFY] [main.ts](src/main.ts)
- Define the options for `theme-mode-selector`: `System (Auto)`, `Light Mode`, `Dark Mode`.
- Add an event listener to update the `theme` attribute of the `root-theme` (`camelot-theme`) component.

## Tasks
- [x] Initial design of theme mode selector
- [x] Update index.html to include the new selector
- [x] Coordinate with CamelotTheme component logic in main.ts
- [x] Verification: Test Light/Dark/Auto toggling

## Verification Results
- Success: UI correctly transitions between modes.
- Success: System mode follows OS preference.
