# Plan: 2604091018-use-expand-in-menu
- Created: 2026-04-09
- Branch: N/A
- Completed: 2026-04-09

## Goals
將 `<camelot-expand>` 組件整合進 `CamelotMenu` 中，取代原本生硬的顯示/隱藏邏輯，為 Menu 的子選單展開提供絲滑的動畫效果。

## User Review Required
> [!IMPORTANT]
> 此變更將影響所有風格（Material, Soft, Scifi）的垂直選單展開效果。展開行為將從原本的「瞬間切換」變為「等速/緩動展開」。

## Proposed Changes

### [Component] Menu

#### [MODIFY] [CamelotBaseMenu.ts](file:///c:/project/mine/CamelotUI/src/components/menu/CamelotBaseMenu.ts)
- 重構 `renderItem`：
  - 垂直模式下使用 `<camelot-expand>`。
  - 點擊標題僅切換狀態，子選單內容放入 `slot="body"`。
- 修改 CSS 以適應 Expand 容器的佈局。

#### [MODIFY] [CamelotMaterialMenu.ts](file:///c:/project/mine/CamelotUI/src/components/menu/CamelotMaterialMenu.ts)
- 移除不再需要的 `.menu-item-arrow` 旋轉 CSS（因為 Expand 可能會處理，或者保持目前的 arrow 邏輯，但需確保狀態同步）。

## Verification Plan

### Manual Verification
1. 開啟樣板頁面測試各風格選單。
2. 檢查子選單展開過程是否平滑。
3. 確保點擊非父項目的葉子節點（Leaf nodes）仍能正常觸發選擇事件。


---

## Task Execution History

# Tasks for 2604091018-use-expand-in-menu
- [x] 調研 `CamelotBaseMenu.ts` 的 `renderItem` 具體改動點
- [x] 修改 `CamelotBaseMenu.ts` 實作整合 `<camelot-expand>`
- [x] 調整各選單風格對子選單邊距的處理
- [x] 測試垂直、水平、收合三種模式下的行為一致性
- [ ] 更新 `project.md` 紀錄
