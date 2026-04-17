# PrecWF Guide (Ultra)

! workflow for all Agent tasks.

## 📂 Structure (.agents/project/)
- **`project.md`**: Wiki Index. Entry → Brain.
- **`plans.md`**: Active Index. **Clean Label List**. No prefixes (`說明:`).
- **`archive.md`**: History. **Table only.**
- **`plans/`**: Details. Dir: `${YYMMDDHHmm}-${slug}`.
  - `plan.md`: Spec/Design/Impact.
  - `tasks.md`: Task List. Nested. Labels only (No parent `[ ]`).
- **`wiki/`**: Detailed Brain. Dir: `category/*.md`.
- **`archive/`**: Final MD: `${folder_name}.md`.

---

## 🔄 Exec (PrecWF)

### P0: Retrieval 🔍🧹
**! START:**
1. **Read `plans.md` & `archive.md`** → context.
2. **Auto-archive** → `確認完成歸檔` sub-item check.

### P1: Categorization ⚖️
- **Std/Large**: FULL WF.

### P2: Init 🏗️
1. **ID**: `${YYMMDDHHmm}`.
2. **Dir**: `.agents/project/plans/${ID}-${desc}`.
3. **Reg**: Add Clean Label block to `plans.md`.

### P3: Exec 🔄
- **MANDATORY Sync**: Artifact `task.md` → Local `tasks.md`. Zero lag.
- **Interactivity**: Nested `- [ ]` for UI clicking. No parent checkboxes in `tasks.md`.

### P4: Verify ✅
1. **Agent Mark**: Mark `完成待確認` as `[x]`.
2. **User Mark**: User clicks `確認完成歸檔` `[x]`.

### P5: Final 📦
1. **Consolidate**: Move metadata to `archive.md` + Save to `archive/`.
2. **MANDATORY Brain Sync**: Audit Wiki (`wiki/*.md`) vs Code diffs.
3. **Index Finish**: Update `project.md` timestamp. No Wiki update = P5 FAIL.

---

## 📋 Global Rules
- **Clean UI**: No redundant labels (`說明`, `建立時間`). Use direct text + hierarchy.
- **Proactive Tracking**: Mark `[x]` sub-items as work flows.