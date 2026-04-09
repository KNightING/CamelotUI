# Plan: [2604091051] - [Sci-fi Component Refinement]
- Created: 2026-04-09
- Branch: feature/2604091051-scifi-component-refinement
- Completed: 2026-04-09

## Goals
1. 修正 Radio 選中時的抖動問題。
2. 移除 Switch 的切角設計 (`clip-path`)。
3. 全面檢查並移除 Sci-fi 相關組件 (Switch, Radio, Checkbox, Drawer) 的硬編碼顏色，改為使用主題 Token。
4. 擴大 `camelot-scifi-reticle` (鎖定括號) 在元件中的應用，強化 HUD 感官。

## Proposed Changes
### [Form Components]
#### [MODIFY] [CamelotScifiRadio.ts](file:///c:/project/mine/CamelotUI/src/components/radio/CamelotScifiRadio.ts)
- 動畫優化：`width/height` -> `transform: scale()`。
- 加入 `camelot-scifi-reticle` 作為懸停與選中裝飾。
- 顏色 Token 化。

#### [MODIFY] [CamelotScifiSwitch.ts](file:///c:/project/mine/CamelotUI/src/components/switch/CamelotScifiSwitch.ts)
- 移除 `clip-path`。
- 加入 `camelot-scifi-reticle` 背景效果。
- 顏色 Token 化。

#### [MODIFY] [CamelotScifiCheckbox.ts](file:///c:/project/mine/CamelotUI/src/components/checkbox/CamelotScifiCheckbox.ts)
- 加入 `camelot-scifi-reticle` 效果。
- 顏色 Token 化。

### [Drawer]
#### [MODIFY] [CamelotScifiDrawer.ts](file:///c:/project/mine/CamelotUI/src/components/drawer/CamelotScifiDrawer.ts)
- 顏色 Token 化。
- 精製邊角 HUD 裝飾。

## Verification Plan
### Automated Tests
- N/A (UI 風格修正)

### Manual Verification
- 使用 `index.html` 進行視覺回歸測試。
- 確認主題顏色切換時，元件顏色正確連動。
- 確認 Radio 選中時不再抖動。
