# Plan: 2604081745 - Add Sci-fi HUD (日系) Style
- Created: 2026-04-08
- Branch: `feature/2604081745-add-scifi-hud-style`
- Completed: 2026-04-08

## Goals
建立一套具備「日系機甲科幻感」的 UI 風格（Sci-fi HUD），擴展 CamelotUI 的風格多樣性。

### 設計核心 (Data-HUD Pivot)
1. **鎖定捕獲 (Lock-on Snapping)**: 互動時角落括號向內收縮鎖定，強化互動回饋。
2. **高對比框架 (High-Contrast Outlines)**: 使用白色與主題色交織的線條邊框，取代大面積切角。
3. **動態數據感 (Dynamic Data Decor)**: 加入掃描線 (Scanlines)、坐標標記與自動化技術編號。
4. **全主題支援 (Dynamic Theming)**: 配色動態綁定至 `color` 屬性，不再使用硬編碼顏色。

## User Review Required
> [!IMPORTANT]
> **風格入侵性**：使用 `color-mix` 加強的主題引擎需確保瀏覽器相容性。

## Proposed Changes

### [Style Foundation]
#### [MODIFY] [themes.ts](file:///c:/project/mine/CamelotUI/src/styles/themes.ts)
- 擴充 `CamelotThemeScifi` 介面，支援高對比配色。
- 在 `THEME_CYBER` 中定義 `scifi` 專屬 Token。

### [Components]
#### [MODIFY] [Button 實作]
- 實作 Filled, Outline, Text 三種 Sci-fi 變體。
- 引入動態配色與鎖定括號動畫。

#### [MODIFY] [Drawer & Menu 實作]
- 加入掃描線背景與技術數據點綴。
- 使用 `counter-reset` 自動生成選單技術前綴。

## Verification Plan

### Automated Tests
- `npm run dev` 啟動預覽。
- 驗證各按鈕 `color` 屬性（Primary, Secondary, Tertiary）的變色邏輯。

### Manual Verification
- 檢查鎖定動畫 (Snapping Effect) 是否流暢且具備機械感。
- 驗證 `Text Button` 在互動時的視覺回饋是否充足。
