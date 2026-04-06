#開發日誌 2026-04-06 - Label 元件化與字體標準化

## 變更摘要
完成 CamelotUI 標籤元件重構，並移除全專案硬編碼字體。

## 執行細節
1.  **建立 `CamelotLabel` 體系**：
    *   新增 `src/components/label/CamelotLabel.ts` 作為入口。
    *   實作 Material, Cupertino, Soft 三種風格的子標籤。
    *   Cupertino 標籤支援自動全大寫 (`text-transform: uppercase`)。
2.  **全域字體標準化**：
    *   搜尋並移除所有 `src/components/` 中的 `-apple-system`, `BlinkMacSystemFont`, `Segoe UI`, `Roboto`, `Helvetica Neue`, `Arial`, `sans-serif` 等硬編碼。
    *   統一改用 `var(--cml-font-family)`。
3.  **元件重構**：
    *   `CamelotInput` 系列：整合 `CamelotLabel`，維持 Material 的 Floating Label 動畫。
    *   `CamelotSelect` 系列：整合 `CamelotLabel`，優化下拉選單搜尋框樣式與字體。
    *   `CamelotCheckbox` / `CamelotRadio` 系列：將舊有的內建 `<label>` 或 `<span>` 替換為 `<camelot-label>`，確保選取元件標籤風格統一。

## 技術決策
*   **字體驅動原則**：所有組件文字渲染必須依賴主題定義，嚴禁自帶字體家族。
*   **標籤集中管理**：透過標籤元件化，未來若需調整所有風格的標籤間距或字級，只需修改 `CamelotLabel` 即可，無需遍歷所有輸入元件。

## 待辦事項
*   [ ] 擴展 `CamelotLabel` 支援 `error` 與 `helper-text` 狀態渲染。
*   [ ] 檢視並嘗試將 `Tabs` 元件之項目標題替換為元件化標籤（需考量佈局影響）。
