# CamelotUI 元件規格書 (Specs)

本文件定義 CamelotUI 核心元件的 API、樣式變數與跨風格行為。

## 1. 通用規範
- **前綴**：所有自定義元素均使用 `Camelot` 前綴。
- **主題繼承**：透過 `<CamelotTheme>` 提供的 CSS 變數 `--cml-active-ui-style` 進行樣式狀態同步。
- **元件切換器 (Component Switcher) 架構**：
    - 基礎元件（如 `CamelotButton`）僅作為跨風格的統一 API 與分流器。
    - 它們不應包含具體的 CSS 實作，而是根據環境變數渲染對應的風格元件（如 `CamelotSoftButton`）。
    - 此架構確保了 API 的穩定性，同時允許視覺風格的高度解耦。

---

## 2. CamelotButton (按鈕)

### Props / Attributes
| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `label` | string | '' | 按鈕文字 |
| `disabled` | boolean | false | 是否停用 |
| `type` | 'primary'\|'outline'\|'text' | 'primary' | 動作類型 |

### Style Variants
- **Material**: 較大的圓角 (28px)，填充色或描邊，具備動態陰影。
- **Cupertino**: 12px 圓角，iOS 藍色系，點擊時具備 0.7 opacity 與輕微縮放。
- **Soft**: 與背景同色，利用反向陰影營造擬態凸起效果。

---

## 3. CamelotInput (輸入框)

### Props / Attributes
| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `value` | string | '' | 當前數值 |
| `placeholder` | string | '' | 提示文字 |
| `label` | string | '' | 標籤文字 |
| `error` | string | '' | 錯誤訊息 |

### Style Variants
- **Material**: 底部線條 (Filled) 或全邊框 (Outlined)，標籤具備 Floating 效果。
- **Cupertino**: 圓角邊框，背景略深於頁面背景，具備 iOS 標準內縮間距。
- **Soft**: 內凹 (Inset) 的陰影效果，營造輸入區塊嵌入表面的感覺。

---

## 4. CamelotTheme (主題控器)

### Props / Attributes
| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `mode` | 'material'\|'cupertino'\|'soft' | 'material' | UI 視覺風格 |
| `theme` | 'light'\|'dark'\|'auto' | 'auto' | 顏色主題模式 |
