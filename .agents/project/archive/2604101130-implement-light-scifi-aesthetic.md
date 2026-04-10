# Plan: 2604101130 - Implement Light Mode Sci-fi Aesthetic
- Created: 2026-04-10 11:30
- Completed: 2026-04-10 11:32

## Goals
Fix the inconsistency where Sci-fi style components remain dark/black even when the global theme is set to Light mode. Implement a "Light HUD" aesthetic that maintains the Scifi feel while integrating into a light-themed environment.

## Proposed Changes

### [Theme Configuration]

#### [MODIFY] [themes.ts](src/styles/themes.ts)
- Add `scifi` configuration to the `light` block of `THEME_DEFAULT` and `THEME_CYBER`.
- Define lighter `glow-color` and `highlight` for light mode.
- Add `THEME_CYBER.light` section (currently it only has `dark`).

### [Sci-fi Components Foundation]

#### [MODIFY] [CamelotScifiFrame.ts](src/components/scifi/CamelotScifiFrame.ts)
- Change the background mix base from `#000` to `var(--cml-color-surface)`.
- Use a new variable `--cml-scifi-bg-opacity` to control background translucency, falling back to higher values in light mode if needed.

#### [MODIFY] [CamelotScifiBase.ts](src/components/scifi/CamelotScifiBase.ts)
- Update text color logic to ensure it uses `var(--cml-color-on-surface)` or a high-contrast equivalent when in light mode, preventing "white on white" or "dark on dark" issues.

### [Showcase Update]

#### [MODIFY] [index.html](index.html)
- Remove hardcoded `#05080a` background from `.scifi-context`. Use themed background variables so the section follows the global Dark/Light switch.

## Tasks
- [x] Add `light` scifi configurations to `themes.ts`
- [x] Implement `THEME_CYBER.light` in `themes.ts`
- [x] Refactor `CamelotScifiFrame.ts` background mix base to use `--cml-color-surface`
- [x] Update Sci-fi components' text colors to be theme-aware:
    - [x] `CamelotScifiTextButton.ts`
    - [x] `CamelotScifiSelect.ts`
    - [x] `CamelotScifiInput.ts`
    - [x] `CamelotScifiTabs.ts`
    - [x] `CamelotScifiBadge.ts`
- [x] Remove hardcoded backgrounds in `index.html` showcase area
- [x] Verification: Toggle Dark/Light across all themes

## Verification Results
- `pnpm exec tsc --noEmit`: Success.
- Visual Audit: Sci-fi components now correctly transition to a "Frosted Glass" aesthetic in Light mode with readable dark text.
- THEME_CYBER: Light mode "Neon White" implemented successfully.
