# PrecWF Guide (Ultra)

! workflow for all Agent tasks.

## 📂 Structure (.agents/project/)
- **`project.md`**: Wiki Index. Entry → Brain.
- **`plans.md`**: Active Index. **Clean Label List**. No top-level `[ ]`. Each entry has nested status checkboxes.
- **`archive.md`**: History. **Table only.**
- **`plans/`**: Details. Dir: `${YYMMDDHHmm}-${slug}`.
  - `plan.md`: Spec/Design/Impact.
  - `tasks.md`: **Pure Technical Steps**. Hierarchical only: Top-level is plain text; progress is in nested `[ ]`.
- **`wiki/`**: Atomic Brain. Dir: `category/[topic].md` (No monoliths).
- **`archive/`**: Final MD: `${folder_name}.md`.

---

## ⚡ PrecWF Reflex (AUTO-INIT)
**! Triggered when:**
1. **User Request**: New feature / Fix / Arch change.
2. **Manual Detection**: User manual refactor (detect via file diffs).
3. **Scale**: If changes > 2 files or 50 lines.
**! Mandatory Action**: AI **MUST** halt code edits and execute `P2: Init` first.

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
4. **Reg**: Add Clean Label block to `plans.md` (+ `[WAIT]` if needed).

### P3: Exec 🔄
- **MANDATORY Sync**: Artifact `task.md` → Local `tasks.md`. Zero lag.
- **Pure Tasks**: Nested technical checkboxes only.

### P4: Verify ✅
1. **Agent Mark**: Mark `完成待確認` as `[x]` in `plans.md` when implementation is done.
2. **User Mark**: User marks `User確認後歸檔` as `[x]` in `plans.md` to trigger P5.

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

## 🚫 Forbidden Patterns (P-Audit Fail)
- **Top-Level Checkboxes**: Non-nested `[ ]` in `plans.md` or `tasks.md` index lines.
- **Governance in Tech-Tasks**: `[WAIT]` or Archive/Wiki labels inside `tasks.md`.
- **Monoliths**: `lib.md` or `general.md` in `wiki/`.
- **Redundant Headers**: Repeating IDs/Titles in both `plans.md` and `tasks.md`.

---

## 📋 Global Rules
- **Clean UI**: No redundant labels (`說明`, `建立時間`). Use direct text + hierarchy.
- **Proactive Tracking**: Mark `[x]` sub-items as work flows.