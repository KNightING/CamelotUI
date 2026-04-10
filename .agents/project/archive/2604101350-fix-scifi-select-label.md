# Archive: 2604101350 - Fix Sci-fi Select Label

- Created: 2026-04-10 13:49
- Completed: 2026-04-10 13:51

## Goals
Resolve the issue where Sci-fi style Select components were not displaying their associated labels.

## Proposed Changes

### [Select Component]

#### [MODIFY] [CamelotScifiSelect.ts](src/components/select/CamelotScifiSelect.ts)
- Restored the `@property({ type: String }) label = '';` to the implementation class.
- Implemented `.label-text` styled as a HUD system tag, matching the Input component:
  - Uppercase typography with monochromatic glowing effects.
  - Positioned vertically above the main select frame with consistent 6px spacing.
- Optimized the template logic to render the label conditionally.
- Added state-driven styling where the label gains a glowing effect when the select menu is open (`_isOpen`) or focused (`focused`).

## Verification Results

### Automated Tests
- `pnpm exec tsc --noEmit`: **Success**. No type errors.

### Manual Verification
1. Verified labels (e.g., SELECT_LEVEL, SECURITY_CLEARANCE) are correctly displayed in the Showcase area under Sci-fi section.
2. Verified label color transition and text-shadow on select open/focus state.
