# CamelotUI 展示頁面重構與組件標準化補全

## 組件標準化 (Checkbox)
- [x] 標準化 `CamelotCheckbox` 屬性與事件
    - [x] 更新 `CamelotCheckbox.ts` (增加 color, 統一事件名)
    - [x] 實作 `CamelotMaterialCheckbox` 色彩支援
    - [x] 實作 `CamelotCupertinoCheckbox` 色彩支援
    - [x] 實作 `CamelotSoftCheckbox` 色彩支援

## 展示頁面重構 (index.html)
- [x] 設計風格對照格狀佈局 CSS
- [x] 重構展示內容塊
    - [x] 按鈕對比組 (Normal, Icon, Outline)
    - [x] 標籤對比組 (Badge)
    - [x] 選取控制項對比組 (Switch, Radio, Checkbox)
    - [x] 輸入框對比組 (Input, Select)
    - [x] 容器對比組 (Card - 保持視覺對比)
    - [x] 導航對比組 (Tabs)

## 驗證
- [ ] 檢查全域主題切換響應
- [ ] 檢查 Checkbox 事件與屬性連動
- [ ] 進行介面視覺核對
