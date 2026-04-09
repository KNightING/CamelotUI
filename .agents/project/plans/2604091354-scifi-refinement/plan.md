# Plan: 2604091354 - Sci-fi HUD Refinement & Repairs
- Created: 2026-04-09
- Branch: N/A
- Completed: [Wait for Finish]

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
