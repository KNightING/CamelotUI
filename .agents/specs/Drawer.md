# CamelotDrawer 元件規格書

## 概述
`CamelotDrawer` 是一個用於顯示側邊欄或底部面板的容器元件。支援三種核心設計語彙：Material 3, Cupertino, Soft UI。

## Props (屬性)
| 屬性名稱 | 類型 | 預設值 | 說明 |
| :--- | :--- | :--- | :--- |
| `open` | `boolean` | `false` | 是否開啟抽屜。支援反射 (Reflect)。 |
| `anchor` | `'left' \| 'right' \| 'top' \| 'bottom'` | `'left'` | 抽屜彈出的位置。 |
| `label` | `string` | `undefined` | 抽屜標題 (適用於 Cupertino, Soft UI)。 |
| `headline` | `string` | `undefined` | 抽屜標題 (適用於 Material)。 |
| `closable` | `boolean` | `true` | 是否顯示關閉按鈕。 |
| `hideBackdrop` | `boolean` | `false` | 是否隱藏背景遮罩。 |

## Events (事件)
| 事件名稱 | 數據 | 說明 |
| :--- | :--- | :--- |
| `open` | `null` | 抽屜完全開啟時觸發。 |
| `close` | `null` | 抽屜完全關閉時觸發。 |
| `cancel` | `null` | 點擊遮罩或按下 Esc 時觸發。 |

## Slots (插槽)
| 插槽名稱 | 說明 |
| :--- | :--- |
| `default` | 抽屜的主要內容區域。 |
| `header` | 自定義標題區域。 |
| `footer` | 抽屜底部的動作區域。 |

## 設計規範 (Design Tokens)
### Material 3
- 圓角: `var(--md-sys-shape-corner-extra-large, 28px)`
- 背景: `var(--md-sys-color-surface, #fff)`
- 陰影: `Elevation Level 1`

### Cupertino
- 圓角: `10px` (僅頂部或側邊)
- 背景: `var(--apple-system-background, rgba(255, 255, 255, 0.8))`
- 磨砂效果: `backdrop-filter: blur(20px)`

### Soft UI
- 背景: `rgba(255, 255, 255, 0.6)`
- 邊框: `1px solid rgba(255, 255, 255, 0.3)`
- 陰影: `20px 20px 60px #bebebe, -20px -20px 60px #ffffff`
