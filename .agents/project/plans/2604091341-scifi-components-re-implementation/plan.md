# Plan: 2604091341 - Sci-fi HUD Component Suite (Re-implementation)
- Created: 2026-04-09
- Branch: N/A (Direct fix)
- Completed: [Wait for Finish]

## Goals
Restore and complete the Sci-fi style implementations for CamelotUI. Focus on high-fidelity HUD aesthetics and structural repairs of index.html.

## User Review Required
> [!IMPORTANT]
> - Critical fix for HTML nesting in index.html.
> - IconButton will include dynamic Focus Reticle animation.

## Proposed Changes

### 1. Sci-fi HUD Specializations
- [NEW] `src/components/button/icon/CamelotScifiIconButton.ts`
- [NEW] `src/components/input/CamelotScifiInput.ts`
- [NEW] `src/components/select/CamelotScifiSelect.ts`
- [NEW] `src/components/badge/CamelotScifiBadge.ts`
- [NEW] `src/components/card/CamelotScifiCard.ts`
- [NEW] `src/components/tabs/CamelotScifiTabs.ts`
- [NEW] `src/components/dialog/CamelotScifiConfirmDialog.ts`

### 2. Facades
- [MODIFY] `src/components/button/icon/CamelotIconButton.ts`
- [MODIFY] `src/components/input/CamelotInput.ts`
- [MODIFY] `src/components/select/CamelotSelect.ts`
- [MODIFY] `src/components/badge/CamelotBadge.ts`
- [MODIFY] `src/components/card/CamelotCard.ts`
- [MODIFY] `src/components/tabs/CamelotTabs.ts`
- [MODIFY] `src/components/dialog/CamelotConfirmDialog.ts`

### 3. Documentation & Demo
- [MODIFY] `index.html`
- [MODIFY] `.agents/project/project.md`

## Verification Plan

### Automated
- Recursive check for .js files (must be empty).
- Custom element registration audit.

### Manual
- User verification in browser demo.
