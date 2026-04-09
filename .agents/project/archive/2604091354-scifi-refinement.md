# Plan: 2604091354 - Sci-fi HUD Refinement & Repairs
- Created: 2026-04-09
- Branch: N/A
- Completed: 2026-04-09

## Goals
1. 修復 `CamelotTabs` 與 `CamelotConfirmDialog` 的顯示問題（Facade 邏輯缺失）。
2. 增強 `CamelotScifiSelect` 的視覺效果，使其更具科幻 HUD 感。
3. 修正 `Input` 與 `Card` 在八角型切角時框線斷裂的問題，實現連貫的發光邊框。

## Architecture
- **Facade Updates**: 修正 `src/components/` 下的門面元件，確保正確引用 Scifi 實作。
- **Styling Refinement**: 在 Scifi 實作中引入「雙層切角（Dual-Clipping）」技術，手動實現發光邊框。

## Impact Files
- `src/components/tabs/CamelotTabs.ts`
- `src/components/dialog/CamelotConfirmDialog.ts`
- `src/components/select/CamelotScifiSelect.ts`
- `src/components/input/CamelotScifiInput.ts`
- `src/components/card/CamelotScifiCard.ts`

## Task Execution History
- [x] 修復門面元件 (Facades)
    - [x] 更新 `CamelotTabs.ts`: 加入 Scifi case
    - [x] 更新 `CamelotConfirmDialog.ts`: 加入 Scifi 引用與 case
    - [x] 更新 `CamelotSelect.ts`: 加入 Scifi case
- [x] 視覺增強與邊框修復
    - [x] `CamelotScifiSelect.ts`: 強化 HUD 裝飾與邊框 (已完成二角切與狀態同步)
    - [x] `CamelotScifiInput.ts`: 修正切角邊框並加入 Focus 效果
    - [x] `CamelotScifiCard.ts`: 修正切角邊框
    - [x] `CamelotScifiBadge.ts`: 修正切角邊框 (Outlined)
- [x] 驗證與最終整合 (Recovery)
    - [x] 修復靜態屬性綁定 (Select options, Tabs items)
    - [x] 修復事件監聽與 Dialog 觸發
    - [x] 驗證 Tabs 完整顯示與 Focus 發光效果
