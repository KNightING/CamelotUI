# Plan: 2604090936 - Create Expand Component

實作一個基礎且通用的展開/收合組件 `<camelot-expand>`，具備絲滑的動畫效果與 Slot 支援。

- Created: 2026-04-09
- Branch: `feature/2604090936-create-expand-component`
- Completed: 2026-04-09

## Goals
1. 建立 `<camelot-expand>` 組件。
2. 支援 `default` (標題/觸發區) 與 `body` (展開內容) 兩個 Slot。
3. 實作基於 CSS Grid 的平滑展開動畫（動態高度支援）。
4. 點擊 `default` 內容可切換展開狀態。

## User Review Required
> [!NOTE]
> **動畫技術**: 為了支援內容高度不確定的情況，將使用 `display: grid` 與 `grid-template-rows` 從 `0fr` 變換至 `1fr` 的技巧，這比 `max-height` 更穩定且不需魔法數值。

## Proposed Changes

### [Components]

#### [NEW] [CamelotExpand.ts](file:///c:/project/mine/CamelotUI/src/components/expand/CamelotExpand.ts)
- 定義 `expanded: boolean` 屬性。
- 提供 `toggle()` 公有方法。
- CSS 實作平滑過度。
- HTML 結構包含兩個 Slot。

#### [NEW] [index.ts](file:///c:/project/mine/CamelotUI/src/components/expand/index.ts)
- 導出組件。

## Verification Plan

### Automated Tests
- `npm run dev` 啟動預覽。

### Manual Verification
- 在 `index.html` 加入範例，測試內容高度變化時的動畫流暢度。
- 測試嵌套多個 Expand 組件，確保狀態不互相干擾。


---

## Task Execution History

# Tasks for 2604090936
- [/] 建立 `src/components/expand/` 目錄
- [/] 實作 `<camelot-expand>` 邏輯與樣式
- [ ] 完成 `src/components/expand/index.ts` 導出
- [ ] 在 `index.html` 中加入示範代碼
- [ ] 更新 `project.md` 的組件清單
