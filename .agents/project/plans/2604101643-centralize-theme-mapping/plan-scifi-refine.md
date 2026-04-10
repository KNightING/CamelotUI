# Plan: [2604101715] - Standardize Sci-Fi Decorations

Ensure that Sci-Fi L-decorations, borders, and animations correctly follow the `--cml-color-current-color` proxy variable.

## User Review Required

> [!NOTE]
> This change primarily affects the low-level `CamelotScifiFrame` and `CamelotScifiReticle` components, which provide the visual identity for all Sci-Fi buttons and inputs. By standardizing these, we ensure consistency across the entire style family.

## Proposed Changes

### [Component: Sci-Fi Foundations]

#### [MODIFY] [CamelotScifiFrame.ts](../../../src/components/scifi/CamelotScifiFrame.ts)
- Inherit from `CamelotBaseElement`.
- Remove manual `@property color` mapping.
- Update CSS to use `--cml-color-current-color` for borders, L-decorations, grid backgrounds, and pulses.

#### [MODIFY] [CamelotScifiReticle.ts](../../../src/components/scifi/CamelotScifiReticle.ts)
- Clean up CSS fallback logic to use `--cml-color-current-color`.

### [Component: Sci-Fi Buttons]

#### [MODIFY] [CamelotScifiFilledButton.ts](../../../src/components/button/filled/CamelotScifiFilledButton.ts)
- Ensure text color correctly references the proxy variable (already mostly done, but verify contrast).

#### [MODIFY] [CamelotScifiOutlineButton.ts](../../../src/components/button/outline/CamelotScifiOutlineButton.ts)
- Ensure border and L-decorations (via Frame) are correctly colored.

---

## Verification Plan

### Manual Verification
- Review Sci-Fi buttons in the `Showcase`.
- Switch themes (e.g., Default -> Sapphire) and verify that all L-decorations and borders update accordingly.
- Test `info`, `warning`, and `success` roles on Sci-Fi buttons to ensure the decorations match the brand color.
