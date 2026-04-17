# PrecWF Guide (Ultra)

! workflow for all Agent tasks.

## 📂 Structure (.agents/project/)
- **`project.md`**: Wiki Index. Entry → Brain.
- **`plans.md`**: Active Index. **Clean Label List**. No prefixes (`說明:`).
- **`archive.md`**: History. **Table only.**
- **`plans/`**: Details. Dir: `${YYMMDDHHmm}-${slug}`.
  - `plan.md`: Spec/Design/Impact.
  - `tasks.md`: Task List. Nested. Labels only (No parent `[ ]`).
- **`wiki/`**: Atomic Brain. Dir: `category/[topic].md` (No monoliths).
- **`archive/`**: Final MD: `${folder_name}.md`.

---

## 🔄 Exec (PrecWF)

### P-Zero: Bootstrap ⚡ (! If .agents/ Missing)
1. **Tech Audit**: Configs (`package.json`, `vite.config.ts`) → `wiki/tech/stack.md`.
2. **Arch Audit**: Patterns & Layers → `wiki/arch/system.md`.
3. **Inventory**: Atomic scan ALL components → `wiki/components/[name].md`.
4. **Index**: Init `project.md`, `plans.md`, `archive.md`.

### P0: Retrieval 🔍🧹
**! START:**
1. **Read `plans.md` & `archive.md`** → context.
2. **Auto-archive** → `User確認後歸檔` [x] check.

### P1: Categorization ⚖️
- **Std/Large**: FULL WF.

### P2: Init 🏗️
1. **ID**: `${YYMMDDHHmm}`.
2. **Dir**: `.agents/project/plans/${ID}-${desc}`.
3. **Create**: `plan.md` (Spec) & `tasks.md` (List).
4. **Reg**: Add Clean Label block to `plans.md`.

### P3: Exec 🔄
- **MANDATORY Sync**: Artifact `task.md` → Local `tasks.md`. Zero lag.
- **Phasing**: Group tasks into `Phase 1, 2...` for large changes.
- **WAIT Marker**: Using `[WAIT]` labels = STOP after phase. No autostart next Phase.

### P4: Verify ✅
1. **Checkpoint**: Pause on `[WAIT]` items; request explicit User GO.
2. **Agent Mark**: Mark `完成待確認` as `[x]`.
3. **User Mark**: User clicks `User確認後歸檔` as `[x]`.

### P5: Final 📦
1. **Consolidate**: Move metadata to `archive.md` + Save to `archive/`.
2. **MANDATORY Brain Sync**: Audit Wiki vs Code diffs (Standards Required).
3. **Index Finish**: Update `project.md` timestamp. No Wiki update = P5 FAIL.

---

## 🧠 Brain Standard (MVW)
**! No Outlines. Logic Only.**
- **Logic**: Why / Flow / Decision.
- **Interface**: Props / Methods / CSS Vars.
- **Gotchas**: Traps / Constraints / Integration.

---

## 📋 Global Rules
- **Clean UI**: No redundant labels (`說明`, `建立時間`). Use direct text + hierarchy.
- **Proactive Tracking**: Mark `[x]` sub-items as work flows.