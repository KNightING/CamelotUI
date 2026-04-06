# 重構 index.html 展示頁面：風格對照佈局

目前的展示頁面較為分散，無法直觀比較不同風格（Material 3, Cupertino, Soft UI）在相同組件上的表現。本計畫旨在重構佈局，改為「組件導向，風格對照」的模式。

## 使用者評論請求
- 本計畫將把佈局改為格狀對照，請確認是否符合您的預期。
- 每個組件將同時展示其三種風格的實作。

## 擬議變更

### [展示頁面] [index.html](file:///Users/knighting/Documents/Project/MyApp/camelot-ui/index.html)

- **樣式調整**：
    - 增加 `.comparison-grid` 樣式，設定為三欄佈局（Material | Cupertino | Soft）。
    - 優化 `.demo-box` 以適應並排顯示。
    - 增加標籤區分不同風格。

- **內容重構**：
    - **Buttons Section**：並排展示三種風格的按鈕（Primary, Secondary, Outlined）。
    - **Selection Section**：並排展示三種風格的 Switch 與 Radio。
    - **Inputs Section**：並排展示三種風格的 Input 與 Select。
    - **Badges Section**：並排展示三種風格的 Badge。
    - **Cards Section**：並排展示三種風格的 Card（雖然 Card 屬性已還原，但視覺仍有差異）。
    - **Tabs Section**：並排展示三種風格的分頁標籤。

## 驗證計畫

### 手動驗證
- 開啟 `index.html`，檢查佈局是否整齊。
- 切換全域主題與調色盤，確保所有風格的組件都能正確響應（Material 使用全域設定，而 Cupertino/Soft 使用局部覆蓋）。
- 檢查三種風格在相同 `color="primary"` 下的視覺對比。

### 自動化測試
- 使用瀏覽器工具截圖，確認對照組件顯示無誤。
