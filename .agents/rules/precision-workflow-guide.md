---
trigger: always_on
---

# 精確工作流 (PrecWF Guide)

! workflow for all Agent tasks.

## 📂 Structure (.agents/project/)
- **`project.md`**: Brain. Goals/stack/arch/rules.
- **`plans.md`**: Active index. Items: `- [ ]`.
- **`archive.md`**: History. **Table format. NO [x].**
- **`plans/`**: Details. Dir: `${YYMMDDHHmm}-${slug}`.
  - `plan.md`: Spec/Design/Impact. Required: **Created** & **Completed** (`yyyy-MM-dd HH:mm`).
  - `tasks.md`: Sync TODO.
- **`archive/`**: Final MD: `${folder_name}.md`.

---

## 🔄 執行 (PrecWF)

### P0: 檢索 與 清理 (Retrieval/Cleanup) 🔍🧹
**! START:**
1. **Read `plans.md` & `archive.md`** → context (curr + last 3-5).
2. **Auto-archive** → if `[x]` in `plans.md` → **P5 NOW**.
3. **Read `project.md`** → arch/stack/impl.
4. **Collision check** → vs active/recent work.
5. **Scan KIs** → patterns.

### P1: 分類 與 決策 (Categorization) ⚖️
- **Iter**: Extension/fix for active/recent.
  - 🔄 **Action**: Update `plan.md` + `tasks.md`. NO new dir.
- **Micro**: Typos/docs/code <10 lines.
  - 🚀 **Action**: Direct impl. Skip P2.
- **Std/Large**: Logic/multi-file/new comp.
  - 🛠️ **Action**: FULL WF.

### P2: 初始化 (Init) 🏗️
1. **ID**: `${YYMMDDHHmm}`.
2. **Dir**: `.agents/project/plans/${ID}-${desc}`.
3. **`plan.md`**: 
   - `Created: YYYY-MM-DD`.
   - **Relative paths ONLY**.
   - Goals/Arch/Impact.
4. **`tasks.md`**: `[ ]` (todo), `[/]` (run), `[x]` (done).
5. **Branch**: Ask user first. Name = Folder.
6. **Reg**: Add link + summary to `plans.md`.
   - **Rule**: Core logic/comps/intent for search.

### P3: 執行 (Exec) 🔄
- **Sync**: Context `task.md` = Plan `tasks.md`.
- **Paths**: Relative everywhere.

### P4: 驗證 (Verify) ✅
1. **Tool Check**: Detect Lockfiles → Cmd.
2. **Static**: Lint/Compile.
3. **Test**: Logic logic.
4. **User Check**: Notify Ready. User marks `[x]` in `plans.md`.

### P5: 歸檔 (Final) 📦
1. **Consolidate**: Plan + Tasks → 1 MD.
2. **Move**: Write `archive/` + delete plan dir.
3. **Index**: Move to `archive.md`. **Table format ONLY.**
   - **Paths**: MUST Be Relative.
   - **! CHECK**: NO absolute (`C:/`, `file:///`).
   - **Format**: `[Name](./archive/Name.md)` | Summary | yyyy-MM-dd HH:mm | yyyy-MM-dd HH:mm.
4. **Update**: Sync comps/features to `project.md`.

---

## 📋 全域規則 (Global Rules)
- **Rel Paths**: No absolute paths.
- **Manual Finish**: Agent NO `[x]` in `plans.md`.
- **Context**: Link related/recent tasks.
- **Status**: `[ ]`, `[/]`, `[x]`.
- **Final Update**: Sync `project.md` before archive.