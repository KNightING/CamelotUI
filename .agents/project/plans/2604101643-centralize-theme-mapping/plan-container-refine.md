# Plan: [2604101730] - Refine Container Color Role Mapping

Ensure that all components correctly utilize the `is-container` attribute by standardizing their background usage of proxy variables and completing the theme token definitions.

## User Review Required

> [!IMPORTANT]
> This refactor will change the background colors of Inputs and some Frames when `is-container` is set. It will also fix the `THEME_CYBER` theme which currently lacks container-role support. 

## Proposed Changes

### [Theme Foundations]

#### [MODIFY] [themes.ts](file:///c:/project/mine/CamelotUI/src/styles/themes.ts)
- Update `THEME_CYBER` to include all standard roles (`info`, `warning`, `success`) and their container/on-container variants.
- Ensure all themes have consistent naming for container roles.

### [Fix: Proxy Propagation]

#### [MODIFY] [CamelotButton.ts (Filled)](file:///c:/project/mine/CamelotUI/src/components/button/filled/CamelotButton.ts)
- Add `.isContainer=${this.isContainer}` to all implementation component tags in the `render()` method.

#### [MODIFY] [CamelotOutlineButton.ts](file:///c:/project/mine/CamelotUI/src/components/button/outline/CamelotOutlineButton.ts)
- Add `.isContainer=${this.isContainer}` to all implementation component tags in the `render()` method.

### [Component: Inputs]

Standardize input backgrounds to use the proxy variable system.

#### [MODIFY] [CamelotMaterialInput.ts](file:///c:/project/mine/CamelotUI/src/components/input/CamelotMaterialInput.ts)
- Replace `var(--cml-color-surface-variant)` with `var(--cml-color-current-bg-color)`.
- This allows the input to automatically switch to a tonal background when `is-container` is enabled.

#### [MODIFY] [CamelotCupertinoInput.ts](file:///c:/project/mine/CamelotUI/src/components/input/CamelotCupertinoInput.ts)
- Replace fixed background color with `var(--cml-color-current-bg-color)`.

#### [MODIFY] [CamelotSoftInput.ts](file:///c:/project/mine/CamelotUI/src/components/input/CamelotSoftInput.ts)
- Integrate `var(--cml-color-current-bg-color)`.

### [Component: Sci-Fi Base/Frame]

#### [MODIFY] [CamelotScifiFrame.ts](file:///c:/project/mine/CamelotUI/src/components/scifi/CamelotScifiFrame.ts)
- Use `--cml-color-current-bg-color` for the internal opacity calculations when in a container context.

---

## Verification Plan

### Manual Verification
- Review the `Index Showcase`.
- Specifically test **Material Input** with `is-container` enabled; verify it takes on the tonal background of the selected `color`.
- Test **Cyber Theme** visibility with all brand roles (`info`, `warning`, `success`).
