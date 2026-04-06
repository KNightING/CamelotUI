# Label 元件化與字體規範統一任務清單

## 1. 全域字體標準化
- [ ] 尋找並取代所有元件中的硬編碼字體 (如 `-apple-system`)
- [ ] 確保所有 CSS `font-family` 白名單僅允許使用 `var(--cml-font-family)`

## 2. 建立標籤獨立元件 (Label Component)
- [ ] **建立目錄結構** (`src/components/label/`)
- [ ] **CamelotLabel.ts**: 負責分流與管理 Label 屬性
- [ ] **CamelotMaterialLabel.ts**: 實作 M3 過往各元件散落的 Label 樣式
- [ ] **CamelotCupertinoLabel.ts**: 實作 iOS 風格 Label (大寫、間距等)
- [ ] **CamelotSoftLabel.ts**: 實作 Soft UI (Neumorphism) Label 樣式

## 3. 元件重構 (Refactoring)
- [ ] **重構 Input 系列**: 替換 `<label>` 為 `<camelot-label>`
- [ ] **重構 Select 系列**: 替換 `<label>` 為 `<camelot-label>`
- [ ] **重構按鈕/擴展元件**: 確保內部 Label 呼叫統一 (視需要)

## 4. 驗證與完工
- [ ] 驗證切換主題後字體是否穩定
- [ ] 確認 Label 顏色 (Color Property) 與對齊正確
