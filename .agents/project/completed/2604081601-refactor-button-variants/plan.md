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
