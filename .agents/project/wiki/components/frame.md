# Foundations: Scifi Frame
Last Updated: 2026-04-17

### 🧠 Logic
- **Rendering**: 它是所有 Sci-fi 元件的底層容器，負責繪製邊框裝飾、背景網格 (Grid) 與掃描線 (Scanline)。
- **Animations**: 內建 `pulse` 與 `scanning` CSS 動畫，營造 HUD 運行感。
- **Structure**: 分為 `header`, `content`, `footer` 三個插槽 (Slot)，對齊高階 HUD 佈局。

### 🔌 Interface
#### Props
- `variant`: `corners` (僅轉角) 或 `full` (完整邊框)。
- `scanning`: (Boolean) 是否開啟掃描線動畫。

#### CSS Variables
- `--cml-frame-border-color`: 框架主色。
- `--cml-frame-scanline-opacity`: 掃描線強度。

### ⚠️ Gotchas
- **Positioning**: 容器內部的裝飾依賴絕對定位，外部父元素必須具備 `position: relative/absolute/fixed`，否則裝飾會溢出到 Body。
