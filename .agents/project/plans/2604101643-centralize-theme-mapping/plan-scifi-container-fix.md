# Plan: [2604101800] - Fix Sci-Fi Container Role Propagation

Resolve the issue where Sci-Fi components do not visually respond to the `is-container` attribute due to fragmented attribute propagation in internal templates.

## User Review Required

> [!IMPORTANT]
> This fix targets the internal templates of Sci-Fi components. No public API changes occur, but Sci-Fi components will now correctly reflect 'tonal' (container) colors when the `is-container` attribute is present.

## Proposed Changes

### [Component: Sci-Fi Buttons Implementation]

Standardize internal attribute propagation to child HUD elements.

#### [MODIFY] [CamelotScifiFilledButton.ts](file:///c:/project/mine/CamelotUI/src/components/button/filled/CamelotScifiFilledButton.ts)
- Add `.isContainer=${this.isContainer}` and `.color=${this.color}` to the `<camelot-scifi-frame>` tag.

#### [MODIFY] [CamelotScifiOutlineButton.ts](file:///c:/project/mine/CamelotUI/src/components/button/outline/CamelotScifiOutlineButton.ts)
- Add `.isContainer=${this.isContainer}` to the `<camelot-scifi-reticle>` tag.

#### [MODIFY] [CamelotScifiIconButton.ts](file:///c:/project/mine/CamelotUI/src/components/button/icon/CamelotScifiIconButton.ts)
- Add `.isContainer=${this.isContainer}` to both `<camelot-scifi-reticle>` and `<camelot-scifi-frame>`.

#### [MODIFY] [CamelotScifiTextButton.ts](file:///c:/project/mine/CamelotUI/src/components/button/text/CamelotScifiTextButton.ts)
- Add `.isContainer=${this.isContainer}` to internal HUD elements.

### [Component: Sci-Fi HUD Elements]

#### [MODIFY] [CamelotScifiFrame.ts](file:///c:/project/mine/CamelotUI/src/components/scifi/CamelotScifiFrame.ts)
- Ensure the inner background respects the container role's tonal background if necessary, or verify that `--cml-color-current-color` (which is already reactive) handles the visual contrast correctly.

---

## Verification Plan

### Manual Verification
- Review the `Index Showcase` in Sci-Fi mode.
- Verify that setting `is-container` on a `<camelot-button mode="scifi">` changes the HUD's primary color to the tonal container role (e.g., from bright blue to tonal blue).
- Confirm both the **Frame (外框)** and **Reticle (掃描括號)** correctly inherit the color shift.
