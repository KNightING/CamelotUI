---
trigger: always_on
---

# 精確工作流程 (Precision Workflow Guide)

所有 Agent 的開發任務必須嚴格遵守以下「精準工作流」。

## 📂 目錄結構 (.agents/project/)
- **`project.md`**: 專案的核心大腦。包含專案目標、核心技術棧、架構圖、現有功能模組與全域規則。
- **`plans.md`**: 正在進行中的開發計畫索引。目錄項目必須使用 `- [ ]` 標示。
- **`completed.md`**: 已歸檔的歷史計畫紀錄與影響摘要。
- **`plans/`**: 計畫詳情目錄。資料夾命名必須遵循：`${YYMMDDHHmm}-${kebab-case-description}`。
  - `plan.md`: 詳細規格、設計思路、影響範圍。必須包含 **Created** 與 **Completed** 日期。
  - `tasks.md`: 動態更新的 TODO List。
- **`completed/`**: 已歸檔的歷史計畫詳情目錄。
  - `plan.md`: 必須包含建立與完成日期。
  - `tasks.md`: 動態更新的 TODO List。

---

## 🔄 精準執行工作流 (Precision Workflow)

### Phase 0: 脈絡檢索 (Context Retrieval) 🔍
在開始任何行動前，**必須**：
1. 讀取 `.agents/project/project.md` 了解當前系統架構。
2. 檢查 `plans.md` 是否有衝突或重複的開發中任務。
3. 搜尋是否有相關的 Knowledge Items (KI)。

### Phase 1: 任務分類與決策 (Categorization) ⚖️
根據需求複雜度決定執行路徑：
- **微小變動 (Small Task)**: 僅修正錯字、添加註解或 10 行以內的獨立代碼。
  - 🚀 *直接執行，跳過 Phase 2，但在完成時更新 `project.md`（如有需要）。*
- **功能開發/重構 (Standard/Large Task)**: 涉及邏輯變更、多個文件、或新組件。
  - 🛠️ *必須啟動「全新規劃流程」。*

### Phase 2: 計畫初始化 (Initialization) 🏗️
1. 生成計畫代號：使用當地時間 `${YYMMDDHHmm}` (西元年後兩碼+月日時分)。
2. 在 `.agents/project/plans/` 建立 `${代號}-${description}` 資料夾。
3. **初始化 `plan.md`**: 
   - 必須包含 `Created: YYYY-MM-DD`。
   - 包含 Goals, Architecture, Impact Files。
4. **初始化 `tasks.md`**: 使用 `[ ]` (待辦), `[/]` (執行中), `[x]` (完成)。
4. **分支管理 (Branch Management)**: 
   - 在執行任何修改前，若評估需要開立新分支，**必須先詢問使用者**。
   - 若使用者未明確同意開立分支，則應在當前分支持續執行計畫。
   - 分支名稱應與計畫資料夾名稱一致，格式為：`feature/${YYMMDDHHmm}-${kebab-case-description}`。
   - 一律紀錄執行該plan的分支在 `plan.md` 當中。
5. **註冊計畫**：將計畫連結與簡述加入 `plans.md`，必須使用 `- [ ]` 標示。

### Phase 3: 執行與雙向同步 (Execution & Sync) 🔄
- **同步原則**: 此對話中的 `task.md` 必須是 `.agents/project/plans/${folder_name}/tasks.md` 的即時投影。
- **每一步驟**: 完成一個子任務後，**必須同時更新**對話中的 `task.md` 與專案中的 `tasks.md`。
- **重大發現**: 若執行中發現架構需調整，應先更新 `plan.md`。

### Phase 4: 驗證 (Verification) ✅
在宣布完成前，必須執行：
1. **靜態檢查**: 使用 `.\gradlew` (Android) 或 `npm run lint` (Web/POS) 確保無語法錯誤。
2. **運行測試**: 確保受影響的功能正常運作。
3. **使用者手動測試**: 通知使用者計畫已就緒，等待使用者進行手動驗證。使用者可透過手動將 `plans.md` 的計畫項目標記為 `[x]` 來確認完成。

### Phase 5: 歸檔與大腦更新 (Finalization) 📦
> [!IMPORTANT]
> **歸檔觸發條件**：必須等待使用者通知「[計畫代號] 完成」，或偵測到 `plans.md` 中的計畫項目被使用者標記為 `[x]`。

1. 在 `plan.md` 中填入 `Completed: YYYY-MM-DD`。
2. 將計畫由 `plans.md` 移至 `completed.md`。
3. 將計畫資料夾整體由 `plans/` 移至 `completed/`。
4. **關鍵動作**: 更新 `project.md` 中的「組件說明」或「核心特性」，確保文件永遠反映最新狀態。

---

## 📝 標準範本 (Templates)

### plans.md (Active Plans)
```markdown
# Current Plans
- [ ] [YYMMDDHHmm-description](./plans/folder/plan.md): Brief description
```

### plan.md 基礎格式
```markdown
# Plan: [YYMMDDHHmm] - [Description]
- Created: 2026-04-08
- Branch: [Branch Name or N/A]
- Completed: [Wait for Finish]

## Goals
...
```

### tasks.md (Project Level)
```markdown
# Tasks for [YYMMDDHHmm]
- [x] 調研現有代碼
- [/] 實作主要 Logic
- [ ] 撰寫/執行測試
- [ ] 更新 `project.md` 紀錄
```

---

## 📋 全域規則 (Global Rules)
- **禁用自動勾選**：Agent **絕對禁止**自動將 `plans.md` 中的計畫項目標記為 `[x]`。這是使用者的專屬操作空間。
- **一致性**：使用 `[ ]` (待辦), `[/]` (執行中), `[x]` (完成)。
- **大腦更新**：計畫歸檔前，必須檢查 `project.md` 是否已加入新的 API、Store 或全域 Enum。