# [Archive] [Select 重構] 抽離 CamelotBaseSelect 邏輯層

**ID**: 2604171014
**Date**: 2026-04-17

## Goals
1. 解決 Sci-fi HUD 主題的繼承衝突。
2. 抽離通用邏輯層，讓所有主題 (Material, Cupertino, Soft, Scifi) 共享代碼。

## Arch Detail (Final)
- **Reactive Controller**: 使用 `CamelotSelectController` 作為邏輯引擎（組合優於繼承）。
- **Base Class**: `CamelotBaseSelect` 使用該 Controller 並作為標準主題的基底。
- **Theme Specific**: `CamelotScifiSelect` 繼承自 `CamelotScifiBase`，並獨立組合 `CamelotSelectController` 以實現邏輯複用。

## Tasks
| Task | 處理中 | 處理完成 |
| :--- | :---: | :---: |
| 重置 CamelotScifiBase.ts 移除 Mixin | [x] | [x] |
| 實作 CamelotSelectController.ts | [x] | [x] |
| 重構 CamelotBaseSelect.ts 引入 Controller | [x] | [x] |
| 重構 CamelotScifiSelect.ts 繼承 Sci-fi Base | [x] | [x] |
| 同步更新 Material/Cupertino/Soft 系列 | [x] | [x] |
| 修復 Bug: 搜尋框寬度截斷 (box-sizing) | [x] | [x] |
| 修復 Bug: 預設值顯示 Placeholder (willUpdate) | [x] | [x] |
| 驗證 Build 與功能成功 | [x] | [x] |

## Impact
- 解決 TypeScript 強型別失效問題。
- 邏輯複用 100%。
