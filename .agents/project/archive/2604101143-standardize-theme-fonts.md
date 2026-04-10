# Archive: 2604101143 - Standardize Theme Fonts & Base Configuration

- Created: 2026-04-10 11:43
- Completed: 2026-04-10 11:55

## Goals
Resolve the issue where switching from a theme with custom fonts (like Cyber) to a theme without an explicit font definition (like Sapphire or Emerald) fails to reset the font family.

## Proposed Changes

### [Theme Data Layer]

#### [MODIFY] [themes.ts](src/styles/themes.ts)
- Defined `BASE_FONT_CONFIG`, `BASE_SPACING_CONFIG`, and `BASE_RADIUS_CONFIG` to centralize default values.
- Refactored `THEME_DEFAULT`, `THEME_SAPPHIRE`, `THEME_EMERALD`, and `THEME_CYBER` to utilize these base configurations.
- Ensured `THEME_SAPPHIRE` and `THEME_EMERALD` explicitly inherit the default font, forcing a reset when switching from `THEME_CYBER`.

## Verification Results

### Automated Tests
- `pnpm exec tsc --noEmit`: **Success**. No type errors.

### Manual Verification
1. Open Showcase.
2. Switch to **Cyber (Cyberpunk)** -> Font changes to Tech Mono. (PASS)
3. Switch to **Sapphire (Blue)** -> Font reverts to Noto Sans/Roboto. (PASS)
4. Switch to **Emerald (Green)** -> Font remains Noto Sans/Roboto. (PASS)
5. Switch to **Amethyst (Default)** -> Font remains Noto Sans/Roboto. (PASS)

## Impacted Files
- `src/styles/themes.ts`
