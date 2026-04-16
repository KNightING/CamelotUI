---
trigger: always_on
---

# PrecWF Guide (Ultra)

! workflow for all Agent tasks.

## 📂 Structure (.agents/project/)
- **`project.md`**: Wiki Index. Entry → Brain.
- **`plans.md`**: Active index. Items: `- [ ]`.
- **`archive.md`**: History. **Table only. NO [x].**
- **`plans/`**: Details. Dir: `${YYMMDDHHmm}-${slug}`.
  - `plan.md`: Spec/Design/Impact.
  - `tasks.md`: Sync TODO.
- **`wiki/`**: Detailed Brain. Dir: `category/*.md`.
- **`archive/`**: Final MD: `${folder_name}.md`.

---

## 🔄 Exec (PrecWF)

### P0: Retrieval 🔍🧹
**! START:**
1. **Read `plans.md` & `archive.md`** → context (curr + last 3-5).
2. **Auto-archive** → `[x]` in `plans.md` → **P5 NOW**.
3. **Read `project.md`** → Wiki Entry → Follow `wiki/` links → Build Context.
4. **Collision check** → vs active/recent work.
5. **Scan KIs** → patterns.

### P1: Categorization ⚖️
- **Iter**: Extension/fix for active/recent.
  - 🔄 **Action**: Update `plan.md` + `tasks.md`. NO new dir.
- **Micro**: Typos/docs/code <10 lines.
  - 🚀 **Action**: Direct impl. Skip P2.
- **Std/Large**: Logic/multi-file/new comp.
  - 🛠️ **Action**: FULL WF.

### P2: Init 🏗️
1. **ID**: `${YYMMDDHHmm}`.
2. **Dir**: `.agents/project/plans/${ID}-${desc}`.
3. **`plan.md`**: `Created: YYYY-MM-DD`. Rel paths only. Goals/Arch/Impact.
4. **`tasks.md`**: `[ ]`, `[/]`, `[x]`.
5. **Branch**: Ask user first. Name = Folder.
6. **Reg**: Add link + summary to `plans.md`.

### P3: Exec 🔄
- **Sync**: Context `task.md` = Plan `tasks.md`.
- **Paths**: Rel everywhere.

### P4: Verify ✅
1. **Tools**: Detect Lockfiles → Cmd.
2. **Static**: Lint/Compile.
3. **Test**: Logic.
4. **User Check**: Ready. User marks `[x]` in `plans.md`.

### P5: Final 📦
1. **Consolidate**: Plan + Tasks → 1 MD.
2. **Move**: Write `archive/` + delete plan dir.
3. **Index**: Move to `archive.md`. **Table only.**
   - **Paths**: Rel.
   - **Check**: No absolute (`C:/`, `file:///`).
4. **Update Brain**: Sync `project.md` + `wiki/*.md`. Maintain Graph.

---

## 📋 Global Rules
- **Rel Paths**: No absolute.
- **Manual Finish**: Agent NO `[x]` in `plans.md`.
- **Context**: Link related/recent tasks.
- **Status**: `[ ]`, `[/]`, `[x]`.
- **Wiki**: Cat-based files. `project.md` links all. Graph sync mandatory.