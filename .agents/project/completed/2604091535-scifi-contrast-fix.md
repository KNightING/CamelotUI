# Plan: 2604091535 - Sci-Fi HUD Text Visibility and Contrast Alignment
- Created: 2026-04-09
- Branch: N/A
- Completed: 2026-04-09

## Goals
Restore the "Fill on Press" behavior for Sci-Fi components while maintaining perfect text visibility in both states (outlined and filled). Ensure the "Missing Button Text" issue (caused by slot shadowing) is permanently resolved and that Input focus is visually unmistakable.

## Key Technical Decisions
1.  **Adaptive Hybrid Contrast**: Implemented a `color-mix` strategy that uses high-brightness text when the HUD frame is transparent/outlined, and automatically flips to the dark theme `on-primary` color when the frame becomes solid/filled.
2.  **Explicit Slot Priority**: Bypassing Lit's default slot fallback by explicitly rendering the `label` property to ensure visibility when components are wrapped in multiple layers of composition.
3.  **Dynamic HUD States**: Standardized the use of `showShine`, `activeReticle`, and `filled` attributes across the `CamelotScifiBase` hierarchy to drive consistent visual feedback.

## Impact Files
- `src/components/scifi/CamelotScifiBase.ts`
- `src/components/scifi/CamelotScifiFrame.ts`
- `src/components/button/filled/CamelotScifiFilledButton.ts`
- `src/components/input/CamelotScifiInput.ts`
- `src/components/input/CamelotInput.ts`
- `src/components/badge/CamelotScifiBadge.ts`

## Task Execution History
- [x] 專案清理：刪除所有意外產生的 `.js`, `.d.ts`, `.map` 檔案
- [x] 修正 `CamelotScifiFilledButton` 文字被包裝插槽遮蔽的問題
- [x] 修正 `CamelotInput` 遺漏傳遞 `color` 屬性的問題
- [x] 強化 `CamelotScifiInput` 的 Focus 回饋 (加上 Reticle 與 100% Fill)
- [x] 還原 `CamelotScifiFilledButton` 的動態填充邏輯 (還原為按下去才填滿)
- [x] 修正 `CamelotScifiFilledButton` 的色彩對比切換邏輯
- [x] 執行 `pnpm tsc --noEmit` 檢查 (Pass)
