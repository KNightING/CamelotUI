# Component Library

Current set of UI components.

## Foundation
- **CamelotScifiFrame**: Visual base (borders, corners, grids, scanlines, pulses).

## Buttons
- **CamelotButton**: Standard wrapper.
- **CamelotScifiFilledButton**: Filled HUD style.
- **IconButton**: Integrated crosshair reticle effects.

## Forms
- **Input/Textarea**: High-contrast, filled-state aware.
- **Select**: 多主題支援組合。核心為 `CamelotSelectController` (Reactive Controller)，將下拉與過濾邏輯分離。Sci-fi 主題採 **Composition (組合模式)** 以繞過繼承限制。
- **Checkbox/Radio**: Reticle markers + scanning fill.
- **Switch**: Adaptive variants.

## Data & Feedback
- **Badge/Card/Tabs**: HUD visual language.
- **Tabs**: HUD rail design, `flex: 1`, nav codes, active brackets.
- **ConfirmDialog**: Glassmorphism, HUD buttons.
- **Notification**: Dynamic slide-in.
