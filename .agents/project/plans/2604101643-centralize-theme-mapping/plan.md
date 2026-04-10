<!-- REMINDER: Relative Paths Only! No file:///c:/... -->
# Plan: 2604101643 - Centralize Theme Mapping

- Created: 2026-04-10 16:43
- Branch: N/A
- Completed: [Wait for Finish]

## Goals
Standardize the theme color mapping architecture across all UI styles (Sci-fi, Material, Soft, Cupertino) by centralizing the proxy variable logic into `CamelotBaseElement`.

## User Review Required
> [!IMPORTANT]
> This refactor introduces a set of unified CSS variables:
> - `--cml-color-current-color`
> - `--cml-color-current-on-color`
> - `--cml-color-current-bg-color`
> - `--cml-color-current-outline`
> 
> **Priority Adjust**: Per user request, **Material, Cupertino, and Soft** styles will be migrated first to validate the architecture before handling Sci-Fi HUD.

## Proposed Changes

### 1. Style Foundations
#### [MODIFY] [themes.ts](../../../src/styles/themes.ts)
- Add default values for `info`, `warning`, and `success` in all predefined themes (`THEME_DEFAULT`, `THEME_SAPPHIRE`, etc.).
- Ensure `outline` and `outline-variant` tokens are properly referenced.

### 2. Base Architecture
#### [MODIFY] [CamelotBaseElement.ts](../../../src/components/base/CamelotBaseElement.ts)
- Add `@property` for `color` (supporting all roles: primary, secondary, tertiary, error, info, warning, success).
- Add `@property` for `isContainer`.
- Implement dynamic CSS variable injection in the `updated()` lifecycle hook.

### 3. Material / Cupertino / Soft Migration (High Priority)
#### [MODIFY] Material Components (Buttons, Inputs, etc.)
- Refactor styling to use unified proxy variables.
- Support `is-container` variants.

#### [MODIFY] Cupertino Components
- Standardize color mapping.

#### [MODIFY] Soft UI Components
- Integrate with the new base logic.

### 4. Scifi Migration (Low Priority)
#### [MODIFY] [CamelotScifiBase.ts](../../../src/components/scifi/CamelotScifiBase.ts)
- Align with the new base color logic.
- Remove redundant local color mapping code.

#### [MODIFY] All Sci-fi Components
- Final migration to the unified architecture.

## Verification Plan

### Automated Tests
- `pnpm exec tsc --noEmit` to ensure type safety.
- Verify CSS variable reflection in the browser developer tools.

### Manual Verification
- Check the Index Showcase to ensure all components accurately reflect their themed colors.
- Test the `is-container` attribute on various components to confirm color-pair switching.
