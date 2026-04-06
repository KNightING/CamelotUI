# 開發日誌 - 2026-04-06

## 任務：實作 CamelotDrawer 元件

### 已完成事項
1. **結構設計**：採用門面模式 (Facade Pattern)，將 `CamelotDrawer` 作為入口，根據主題分流至 `CamelotMaterialDrawer`、`CamelotCupertinoDrawer` 或 `CamelotSoftDrawer`。
2. **基礎層實作**：`CamelotBaseDrawer.ts` 使用原生 `<dialog>` 元素，處理 `anchor` 定位（上、下、左、右）與基礎 CSS transition 動畫。
3. **主題實作**：
    - **Material 3**：實作了 28px 圓角與標準 Elevation。
    - **Cupertino**：實作了全螢幕/半螢幕磨霜玻璃效果 (Backdrop-filter) 與 12px 圓角面板。
    - **Soft UI**：實作了玻璃擬態與擬物化陰影。
4. **事件處理**：支援 `cancel` (Esc 或點擊外部)、`open`、`close` 事件。

### 技術決策
- **原生 Dialog**：選擇 `<dialog>` 主要是為了利用瀏覽器的 `top-layer` 特性，避免 `z-index` 衝突與處理 Focus Trap。
- **動畫處理**：由於原生 `dialog.close()` 會立即移除元素，因此在 `hide()` 方法中加入 300ms 延遲，以確保 CSS transition 動畫能完整執行。

### 待辦事項
- 更新 `index.html` 展示頁面，加入 Drawer 的操作測試。
- 撰寫 Walkthrough 文件。
