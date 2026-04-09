# Plan: 2604091031-scifi-form-selections

- Created: 2026-04-09
- Branch: N/A
- Completed: [Wait for Finish]

## Goals
實作 Section 3「Form Selections」中所有元件的 Sci-fi HUD 風格版本，包括 Switch, Radio, Checkbox 及其群組。

## User Review Required
> [!IMPORTANT]
> **設計風格**：Sci-fi 風格將大幅偏離標準的圓形/圓角設計，改用菱形、方括號、掃描線與 Share Tech Mono 字體。
> **動畫**：會加入數位閃爍（Flicker）或掃描（Scan）動畫來增強視覺體驗。

## Proposed Changes

### [Component] Switch
#### [NEW] [CamelotScifiSwitch.ts](file:///c:/project/mine/CamelotUI/src/components/switch/CamelotScifiSwitch.ts)
- 實作 HUD 風格的開關，外框為稜角分明的線框，滑塊為菱形或八邊形。
#### [MODIFY] [CamelotSwitch.ts](file:///c:/project/mine/CamelotUI/src/components/switch/CamelotSwitch.ts)
- 導入並註冊 `scifi` 分支邏輯。

### [Component] Radio
#### [NEW] [CamelotScifiRadio.ts](file:///c:/project/mine/CamelotUI/src/components/radio/CamelotScifiRadio.ts)
- 實作數位單選框，選中時內部顯示發光的菱形標記。
#### [MODIFY] [CamelotRadio.ts](file:///c:/project/mine/CamelotUI/src/components/radio/CamelotRadio.ts)
- 導入並註冊 `scifi` 分支邏輯。

### [Component] Checkbox
#### [NEW] [CamelotScifiCheckbox.ts](file:///c:/project/mine/CamelotUI/src/components/checkbox/CamelotScifiCheckbox.ts)
- 實作 `[ ]` 形式的方括號多選框，選中時內部填充掃描色塊。
#### [MODIFY] [CamelotCheckbox.ts](file:///c:/project/mine/CamelotUI/src/components/checkbox/CamelotCheckbox.ts)
- 導入並註冊 `scifi` 分支邏輯。

### [Demo] Entry
#### [MODIFY] [index.html](file:///c:/project/mine/CamelotUI/index.html)
- 在 Section 3 新增 Sci-fi HUD 的對比列。

## Verification Plan
1. 開啟樣板頁面測試 Section 3。
2. 切換 Scifi 開關、Radio 與 Checkbox，確認點擊區域、動畫與配色正確。
3. 驗證字體是否統一為 `Share Tech Mono`。
