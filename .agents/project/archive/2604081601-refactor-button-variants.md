# Plan: 2604081601 - Refactor Button Variants
- Created: 2026-04-08
- Branch: N/A (Current Branch)
- Completed: 2026-04-08

## Goals
將現有的 `CamelotButton` (包含 Filled, Outlined, Text) 結構拆解為獨立的資料夾與組件，並將 `CamelotIconButton` 也移至獨立資料夾，以提升代碼內聚性與模組化程度。

## Architecture
- **Filled**: 使用 `src/components/button/filled/` 目錄。`CamelotButton` 作為門面。
- **Outline**: 使用 `src/components/button/outline/` 目錄。`CamelotOutlineButton` 作為門面。
- **Text**: 使用 `src/components/button/text/` 目錄。`CamelotTextButton` 作為門面。
- **Icon**: 使用 `src/components/button/icon/` 目錄。`CamelotIconButton` 作為門面。

## Proposed Changes
### src/components/button/filled/
- `CamelotButton.ts` (Facade)
- `CamelotMaterialFilledButton.ts`
- `CamelotCupertinoFilledButton.ts`
- `CamelotSoftFilledButton.ts`

### src/components/button/outline/
- `CamelotOutlineButton.ts` (Facade)
- `CamelotMaterialOutlineButton.ts`
- `CamelotCupertinoOutlineButton.ts`
- `CamelotSoftOutlineButton.ts`

### src/components/button/text/
- `CamelotTextButton.ts` (Facade)
- `CamelotMaterialTextButton.ts`
- `CamelotCupertinoTextButton.ts`
- `CamelotSoftTextButton.ts`

### src/components/button/icon/
- `CamelotIconButton.ts` (Facade)
- `CamelotMaterialIconButton.ts`
- `CamelotCupertinoIconButton.ts`
- `CamelotSoftIconButton.ts`

## Verification Plan
1. 確保所有組件標籤 (`camelot-button`, `camelot-outline-button`, `camelot-text-button`, `camelot-icon-button`) 運作正常。
2. 檢查各風格 (Material, Cupertino, Soft) 切換是否無誤。
3. 驗證所有匯入路徑是否已正確更新。


---

## Task Execution History

# Tasks for 2604081601 - Refactor Button Variants

- [x] 建立新的資料夾結構 (`filled`, `outline`, `text`, `icon`)
- [x] 分解 `CamelotMaterialButton.ts` 為 Filled, Outline, Text 元件
- [x] 分解 `CamelotCupertinoButton.ts` 為 Filled, Outline, Text 元件
- [x] 分解 `CamelotSoftButton.ts` 為 Filled, Outline, Text 元件
- [x] 搬移與更新圖示按鈕 (Icon Buttons) 到 `icon/` 目錄
- [x] 重構 `CamelotButton.ts` (Filled), `CamelotOutlineButton.ts`, `CamelotTextButton.ts` 作為外觀元件 (Facades)
- [x] 更新 `index.html` 的 demo 匯入路徑
- [x] 修正 Dialog 與 Drawer 組件中的毀損引用
- [x] 刪除舊有的合併樣式檔案
- [x] 更新 `project.md` 紀錄
