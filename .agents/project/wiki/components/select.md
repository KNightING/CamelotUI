# Select Component
Last Updated: 2026-04-17

### 🧠 Logic
- **Architecture**: 核心邏輯封裝於 `CamelotSelectController` (Reactive Controller)，落實邏輯與 UI 分離。
- **Composition**: 為了解決 Web Components 繼承限制，Sci-fi 主題元件改用 **組合模式 (Composition)**，將 Controller 掛載至現有的 Scifi 容器中。
- **Filtering**: 內建搜尋過濾功能，並優化了大型列表的渲染效能。

### 🔌 Interface
#### Props
- `options`: 選項數組 `{ label, value }`。
- `searchable`: 是否開啟搜尋過濾。

#### CSS Variables
- `--cml-select-dropdown-bg`: 下拉選單背景色（支援 Glassmorphism）。
- `--cml-select-item-hover`: 選項選中時的高亮色。

### ⚠️ Gotchas
- **Z-Index**: 下拉選單在 Sci-fi Container 中可能會被 `overflow: hidden` 裁切，需確保容器 z-index 配置正確。
- **Input Truncation**: 舊版存在搜尋框文字裁切問題，已在核心 Controller 中修正。
