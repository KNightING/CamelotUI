# Plan: 2604091153 - 精準工作流 (Precision Workflow) 脈絡與效能優化

- Created: 2026-04-09
- Branch: N/A
- Completed: 2026-04-09 16:30

## Goals
再次優化「精準工作流」，解決路徑不統一（絕對路徑問題）、脈絡檢索不足（導致計畫過於細碎）、以及索引說明的品質提升。

## Impact Files
- [MODIFY] .agents/rules/precision-workflow-guide.md
- [MODIFY] .agents/project/plans.md
- [MODIFY] .agents/project/plans/2604091153-workflow-refinement-v2/plan.md
- [MODIFY] .agents/project/plans/2604091153-workflow-refinement-v2/tasks.md

## Context
使用者反映當前工作流存在以下問題：
1. 路徑包含絕對位置，不利於協作。
2. 脈絡感知弱，導致開發後的 Bug 修復常開新計畫而非迭代舊計畫。
3. `plans.md` 中的摘要過於簡短，無法支撐有效的 RAG (Retrieval-Augmented Generation)。

## Task Execution History
- [x] 更新 `.agents/rules/precision-workflow-guide.md` 規則
- [x] 修正 `.agents/project/plans.md` 中的所有路徑為相對路徑
- [x] 優化 `plans.md` 中當前計畫的摘要描述
- [x] 驗證所有連結與規則生效
- [x] 同步更新 `project.md` 紀錄
