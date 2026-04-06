# Select 下拉選單視覺修復任務清單

## 風格視覺校準
- [x] **Cupertino (CamelotCupertinoSelect)**
    - [x] 提高箭頭 (`.chevron`) 的配色對比度 (使用 `currentColor` 並調整透明度)
    - [x] 調整 `dropdown` 背景色使用主題變數，修復視覺異常問題
    - [x] 新增選項懸停 (Hover) 背景色變化 (`surface-container-highest`)
    - [x] 新增選中項目 (Selected) 的配色強化並支援 `color` 屬性
- [x] **Material 3 (CamelotMaterialSelect)**
    - [x] 修復 `dropdown` 背景色缺失問題，改為實體表面 (`surface-container-high`)
    - [x] 新增選項懸停 (Hover) 覆蓋層效果
    - [x] 新增選中項目 (Selected) 的配色強化 (Primary/Secondary/Tertiary Container)
- [x] **Soft UI (CamelotSoftSelect)**
    - [x] 新增選項懸停 (Hover) 內凹感 (Subtle Inset)
    - [x] 新增選中項目 (Selected) 的深度感強化 (Deep Inset) 與文字主題色

## 驗證
- [x] 確認亮/暗模式下的 UI 表現一致性
- [x] 檢查三種配色變體 (Primary, Secondary, Tertiary) 的選取視覺連動
