# Plan: 2604091111 - Scifi Bugfix and Refinement
- Created: 2026-04-09
- Branch: N/A
- Completed: 2026-04-09

## Goals
1. 修復 `CamelotScifiDrawer.ts` 的 Import 錯誤導致的全站失效。
2. 修正 Sci-fi Switch 標籤名稱不一致問題。
3. 調整 Radio/Checkbox 的鎖定特效（Reticle）為 Hover 觸發。

## User Review Required
> [!IMPORTANT]
> **鎖定特效變更**：Radio 與 Checkbox 的鎖定效果將從「選中保持」改為「懸停觸發」。

## Impact Files
- [MODIFY] `src/components/drawer/CamelotScifiDrawer.ts`
- [MODIFY] `src/components/switch/CamelotSwitch.ts`
- [MODIFY] `src/components/radio/CamelotScifiRadio.ts`
- [MODIFY] `src/components/checkbox/CamelotScifiCheckbox.ts`


---

## Task Execution History

# Tasks for 2604091111
- [x] 修復 `CamelotScifiDrawer.ts` 遺失的 Import (解決全站報錯)
- [x] 修復 `CamelotSwitch.ts` 的標籤分發 (解決 Sci-fi Switch 失效)
- [x] 修改 `CamelotScifiRadio.ts` 特效為 Hover 觸發
- [x] 修改 `CamelotScifiCheckbox.ts` 特效為 Hover 觸發
- [x] 驗證全風格 Menu/Tabs/Selects 恢復正常
- [x] 更新 `project.md`
