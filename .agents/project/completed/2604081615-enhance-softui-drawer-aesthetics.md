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


---

## Task Execution History

# Tasks for 2604081615 - Enhance Soft UI Drawer Aesthetics

- [x] 調研現現有 Soft UI 組件的陰影實作 (已完成)
- [x] 移除 `CamelotSoftDrawer.ts` 中的 Glassmorphism 樣式
- [x] 實作正統的 Neumorphism 陰影效果
- [x] 針對不同方向 (Left, Right, Top, Bottom) 優化陰影與邊角
- [x] 驗證 Dark Mode 下的表現
- [x] 更新 `project.md` 紀錄
