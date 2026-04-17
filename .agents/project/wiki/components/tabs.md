# Tabs Component
Last Updated: 2026-04-17

### 🧠 Logic
- **Layout**: 採用 `flex: 1` 均分版面，適合 HUD 頂部或底部導覽列。
- **Visuals**: 整合 Scifi 元素，包含 Active Brackets (括號指示器) 與可選擇的導覽代碼 (`showNavCodes`)。
- **State**: 基於 Lit 的 reactive properties 監控 `active` 狀態並觸發動畫。

### 🔌 Interface
#### Props
- `active`: 當前啟動的標籤 ID。
- `showNavCodes`: (Boolean) 是否顯示導覽快捷代碼。

#### CSS Variables
- `--cml-tabs-rail-color`: 導覽軌道顏色。
- `--cml-tabs-active-shadow`: 啟動項的霓虹發光效果。

### ⚠️ Gotchas
- **Overflow**: 由於使用了 `flex: 1`，當標籤數量過多時，文字可能會擠壓，建議在 HUD 模式下限制在 5 個標籤內。
- **Animation**: 括號動畫依賴於 `::before` 與 `::after` 偽元素，修改樣式時需注意定位。
