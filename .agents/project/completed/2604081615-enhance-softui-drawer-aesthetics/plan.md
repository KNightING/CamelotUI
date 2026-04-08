# Plan: 2604081615 - Enhance Soft UI Drawer Aesthetics
- Created: 2026-04-08
- Branch: N/A
- Completed: 2026-04-08

## Goals
1. 將 Soft UI 抽屜從「玻璃擬態 (Glassmorphism)」轉變為真實的「新擬物化 (Neumorphism)」。
2. 使用固體背景色 (`var(--cml-color-background)`) 代替半透明背景。
3. 移除 `backdrop-filter` 與透明邊框。
4. 實作正確的「雙重陰影」深度效果。
5. 優化在不同方向 (Anchor) 下的陰影呈現。

## Architecture
- `src/components/drawer/CamelotSoftDrawer.ts`: 主要樣式調整。

## Impact Files
- `src/components/drawer/CamelotSoftDrawer.ts`
- `src/styles/tokens.css` (如需調整 Soft UI 陰影變數)
