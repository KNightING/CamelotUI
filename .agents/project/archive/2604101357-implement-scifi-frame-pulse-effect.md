# Archive: 2604101357 - Implement Sci-fi Frame Pulse Effect

- Created: 2026-04-10 13:57
- Completed: 2026-04-10 14:05

## Goals
Implement a horizontal scanning pulse effect (borrowed from the Switch component aesthetics) in the `CamelotScifiFrame` as a toggleable feature and integrate it into the `CamelotScifiInput` focus state.

## Proposed Changes

### [Sci-fi Framework]

#### [MODIFY] [CamelotScifiFrame.ts](src/components/scifi/CamelotScifiFrame.ts)
- Introduced the `@property({ type: Boolean, reflect: true, attribute: 'show-pulse' }) showPulse: boolean = false;`.
- Implemented the `.pulse-bg` layer with a horizontal linear gradient scanning animation (`pulse-scan-horizontal`).
- Optimized layering order (z-index) to ensure pulse sits correctly above the grid but below the content and vertical scanlines.

### [Input Component]

#### [MODIFY] [CamelotScifiInput.ts](src/components/input/CamelotScifiInput.ts)
- Integrated the frame's new `showPulse` effect into the input's focus state. Focused inputs now project a horizontal scanning pulse across their HUD frame.

## Verification Results

### Automated Tests
- `pnpm exec tsc --noEmit`: **Success**. All components are type-safe.

### Manual Verification
1. Verified `showPulse` can be manually toggled on any `camelot-scifi-frame`.
2. Verified that Text Inputs correctly trigger the horizontal scanning pulse when focused in the Showcase.
