# Plan: [2604101815] - Decentralized Color Inheritance Refactor

Implement high-level variable injection that allows nested components to inherit theme colors without manual attribute propagation.

## User Review Required

> [!IMPORTANT]
> This is a structural refactor of `CamelotBaseElement`. It changes the behavior of how `--cml-color-current-*` variables are injected. Components will now **inherit** colors from their parents by default, unless they have an explicit `color` or `is-container` attribute set.

## Proposed Changes

### [Component: Base]

#### [MODIFY] [CamelotBaseElement.ts](file:///c:/project/mine/CamelotUI/src/components/base/CamelotBaseElement.ts)
- Update `_updateCurrentColors()` to check if `this.hasAttribute('color')` or `this.hasAttribute('is-container')` is true.
- If **neither** attribute is present, skip the `this.style.setProperty` calls for the current-color tokens.
- This allows the internal components to inherit the variables defined by their parent "Master" component (the Proxy or Implementation).

### [Component: Sci-Fi HUD]

#### [MODIFY] [CamelotScifiFrame.ts](file:///c:/project/mine/CamelotUI/src/components/scifi/CamelotScifiFrame.ts)
- Remove explicit `color` mapping logic if it's redundant with the new BaseElement behavior.
- Ensure it primarily consumes `--cml-color-current-color`.

### [Component: Cleanup Propagation]

#### [MODIFY] [CamelotButton.ts](file:///c:/project/mine/CamelotUI/src/components/button/filled/CamelotButton.ts) & Others
- **Revert** the manual propagation added in previous steps. 
- The internal components (`CamelotMaterialFilledButton`, `CamelotScifiFilledButton`, etc.) will now automatically inherit the correctly mapped variables from the Proxy.

---

## Verification Plan

### Automated Tests
- `pnpm dev` check for runtime errors.

### Manual Verification
- **Showcase Audit**: Switch to Sci-Fi mode and toggle `is-container` on a button.
- Verify that the internal Frame and Reticle change color **without** being explicitly passed the attributes in the template.
- Test "Standalone" usage: Manually add `<camelot-scifi-frame color="secondary">` to `index.html` and ensure it still renders secondary color.
