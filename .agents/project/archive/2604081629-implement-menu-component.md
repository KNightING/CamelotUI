- Completed: 2026-04-08

## Goals
實作一個全功能的選單元件 `<camelot-menu>`，支援 Material 3, Cupertino (iOS), 與 Soft UI (Neumorphism) 三種風格。
該元件應參考 Naive UI 的配置驅動模式，支援遞迴渲染子選單、圖示、以及收合/選取狀態。

### 新增目標 (2026-04-08 增補)
1. **模式支援**：支援 `mode="horizontal"` (水平) 與 `mode="vertical"` (垂直)。
2. **收合狀態**：支援 `collapsed` 屬性，收合時僅顯示圖示。
3. **父階層高亮**：當子項目選中時，其祖先路徑項目需自動進入 `is-active-parent` 狀態。
4. **多層級展示**：提供三層嵌套的完整展示。

## User Review Required
> [!IMPORTANT]
> **API 設計決策**：
> 1. 將採用 `options: MenuOption[]` 的資料驅動模式，這在導覽元件中比單純的 slot 更容易管理動態路徑與權限。
> 2. **Soft UI 挑戰**：在 Soft UI 風格下，深層嵌套的選單將使用不同的陰影深度與微細的正向/負向浮雕效果來區分層級。

## Proposed Changes
### [Menu Component]
#### [NEW] [MenuOption.ts](file:///c:/project/mine/CamelotUI/src/components/menu/MenuOption.ts)
定義選單資料結構。
#### [NEW] [CamelotBaseMenu.ts](file:///c:/project/mine/CamelotUI/src/components/menu/CamelotBaseMenu.ts)
包含遞迴渲染邏輯、選取狀態追蹤與基礎事件處理。
#### [NEW] [CamelotMaterialMenu.ts](file:///c:/project/mine/CamelotUI/src/components/menu/CamelotMaterialMenu.ts)
Material 3 風格實作：使用高亮容器 (Primary Container) 標記選取項，支援 Ripple 效果。
#### [NEW] [CamelotCupertinoMenu.ts](file:///c:/project/mine/CamelotUI/src/components/menu/CamelotCupertinoMenu.ts)
iOS 風格實作：強調細線分割、微透明背景與 iOS 導覽風格的縮進感。
#### [NEW] [CamelotSoftMenu.ts](file:///c:/project/mine/CamelotUI/src/components/menu/CamelotSoftMenu.ts)
Soft UI 風格實作：使用 Neumorphism 的輕微浮雕效果，選取項改為「凹陷」狀態。
#### [NEW] [CamelotMenu.ts](file:///c:/project/mine/CamelotUI/src/components/menu/CamelotMenu.ts)
門面組件 (Facade)，負責偵測主題並轉發事件。

## Verification Plan
### Automated Tests
- 執行 `npm run dev` 並在瀏覽器檢視範例。
- 檢查各主題下的樣式表現與互動是否符合規範。

### Manual Verification
1. 切換 Material, Cupertino, Soft UI 主題，確認 Menu 樣式同步變更。
2. 點擊具有子選單的項目，確認展開/收合正常。
3. 確認選取狀態正確更新並觸發事件。


---

## Task Execution History

# Tasks for 2604081629 - Fixes & Refinement
- [x] 修改 `CamelotMenu.ts` 將 Cupertino 導向 Material 3
- [x] 修復 Horizontal 佈局失效問題 @CamelotBaseMenu.ts
- [x] 徹底隱藏收合模式下的文字外洩 @CamelotBaseMenu.ts & CamelotMaterialMenu.ts
- [x] 修復深層選單展開邏輯
- [x] 重構 Soft UI 陰影 (移除區塊式陰影) @CamelotSoftMenu.ts
- [x] 更新 `index.html` 改用單一風格展示並驗證 N 階層
- [x] 更新 `project.md` 紀錄 Menu 特性與架構調整
