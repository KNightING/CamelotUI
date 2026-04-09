# Plan: 2604091140 - Sci-fi Components Implementation
- Created: 2026-04-09
- Branch: feature/2604091140-scifi-components (Pending approval)
- Completed: 2026-04-09

## Goals
建立並整合以下元件的 Sci-fi HUD 風格實作：
1.  **Select**: 數位下拉選單，具備邊框動畫與 reticle 效果。
2.  **Input**: 數位輸入框，整合掃描線與角部修飾。
3.  **Badges**: 數位標籤，採用切角矩形設計。
4.  **Cards**: 數位卡片容器，具備框架與掃描氛圍。
5.  **Popups & Dialogs**: 數位對話框，具備數位邊界與展開動畫。
6.  **Tabs**: 數位頁籤，採用矩形拼接與底線發光設計。

## Architecture
- **Implementation**: 在每個元件目錄下新增 `CamelotScifi{Component}.ts`。
- **Integration**: 修改 `Camelot{Component}.ts` (Facade) 以支援 `scifi` 分流。
- **Styling**: 
    - 使用 `Share Tech Mono` 字體。
    - 嚴格遵守 `themes.ts` 中的 `THEME_CYBER` 或 Sci-fi 相關 Token。
    - 整合 `<camelot-scifi-reticle>` 於互動狀態。

## Impact Files
- [NEW] `src/components/select/CamelotScifiSelect.ts`
- [MODIFY] `src/components/select/CamelotSelect.ts`
- [NEW] `src/components/input/CamelotScifiInput.ts`
- [MODIFY] `src/components/input/CamelotInput.ts`
- [NEW] `src/components/badge/CamelotScifiBadge.ts`
- [MODIFY] `src/components/badge/CamelotBadge.ts`
- [NEW] `src/components/card/CamelotScifiCard.ts`
- [MODIFY] `src/components/card/CamelotCard.ts`
- [NEW] `src/components/dialog/CamelotScifiConfirmDialog.ts`
- [MODIFY] `src/components/dialog/CamelotConfirmDialog.ts`
- [NEW] `src/components/tabs/CamelotScifiTabs.ts`
- [MODIFY] `src/components/tabs/CamelotTabs.ts`

## Task Execution History
- [x] 設定開發分支 (`feature/2604091140-scifi-components`)
- [x] 實作 Sci-fi Select (`CamelotScifiSelect.ts`)
- [x] 整合 Sci-fi Select 到 `CamelotSelect.ts`
- [x] 實作 Sci-fi Input (`CamelotScifiInput.ts`)
- [x] 整合 Sci-fi Input 到 `CamelotInput.ts`
- [x] 實作 Sci-fi Badge (`CamelotScifiBadge.ts`)
- [x] 整合 Sci-fi Badge 到 `CamelotBadge.ts`
- [x] 實作 Sci-fi Card (`CamelotScifiCard.ts`)
- [x] 整合 Sci-fi Card 到 `CamelotCard.ts`
- [x] 實作 Sci-fi Dialog (`CamelotScifiConfirmDialog.ts`)
- [x] 整合 Sci-fi Dialog 到 `CamelotConfirmDialog.ts`
- [x] 實作 Sci-fi Tabs (`CamelotScifiTabs.ts`)
- [x] 整合 Sci-fi Tabs 到 `CamelotTabs.ts`
- [x] 驗證所有 Sci-fi 元件在 Cyber 主題下的表現
- [x] 更新 `project.md` 的現有功能模組紀錄
