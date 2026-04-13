<!-- REMINDER: Relative Paths Only! No file:///c:/... -->
# Plan: [2604131640] - Standardize Mono Font for Sci-fi Components
- Created: 2026-04-13 16:40
- Branch: N/A
- Completed: 2026-04-13 16:45

## Goals
統一使用全域的 `var(--cml-font-family)` 變數，移除 Sci-fi 系列組件中硬編碼的等寬字體配置。透過主題系統（如 `THEME_CYBER`）來決定字體是否為等寬，而非在組件層級硬性指定，提升系統靈活性。

## Proposed Changes

### [Theme System]
- 無需變動 `themes.ts` 或 `tokens.css`，維持現狀以 `family` 為核心。

### [Components]
#### [MODIFY] Sci-fi 系列組件
針對以下組件進行稽核，將 `font-family` 統一替換為 `var(--cml-font-family)`：
- [tabs/CamelotScifiTabs.ts](src/components/tabs/CamelotScifiTabs.ts)
- [select/CamelotScifiSelect.ts](src/components/select/CamelotScifiSelect.ts)
- [input/CamelotScifiInput.ts](src/components/input/CamelotScifiInput.ts)
- [dialog/CamelotScifiConfirmDialog.ts](src/components/dialog/CamelotScifiConfirmDialog.ts)
- [card/CamelotScifiCard.ts](src/components/card/CamelotScifiCard.ts)
- [button/text/CamelotScifiTextButton.ts](src/components/button/text/CamelotScifiTextButton.ts)
- [button/filled/CamelotScifiFilledButton.ts](src/components/button/filled/CamelotScifiFilledButton.ts)
- [button/outline/CamelotScifiOutlineButton.ts](src/components/button/outline/CamelotScifiOutlineButton.ts)
- [badge/CamelotScifiBadge.ts](src/components/badge/CamelotScifiBadge.ts)
- [switch/CamelotScifiSwitch.ts](src/components/switch/CamelotScifiSwitch.ts)
- [checkbox/CamelotScifiCheckbox.ts](src/components/checkbox/CamelotScifiCheckbox.ts)
- [radio/CamelotScifiRadio.ts](src/components/radio/CamelotScifiRadio.ts)
- [menu/CamelotScifiMenu.ts](src/components/menu/CamelotScifiMenu.ts)
- [tabs/CamelotScifiTabs.ts](src/components/tabs/CamelotScifiTabs.ts)
- [select/CamelotScifiSelect.ts](src/components/select/CamelotScifiSelect.ts)
- [input/CamelotScifiInput.ts](src/components/input/CamelotScifiInput.ts)
- [dialog/CamelotScifiConfirmDialog.ts](src/components/dialog/CamelotScifiConfirmDialog.ts)
- [card/CamelotScifiCard.ts](src/components/card/CamelotScifiCard.ts)
- [button/text/CamelotScifiTextButton.ts](src/components/button/text/CamelotScifiTextButton.ts)
- [button/filled/CamelotScifiFilledButton.ts](src/components/button/filled/CamelotScifiFilledButton.ts)
- [button/outline/CamelotScifiOutlineButton.ts](src/components/button/outline/CamelotScifiOutlineButton.ts)
- [badge/CamelotScifiBadge.ts](src/components/badge/CamelotScifiBadge.ts)
- [switch/CamelotScifiSwitch.ts](src/components/switch/CamelotScifiSwitch.ts)
- [checkbox/CamelotScifiCheckbox.ts](src/components/checkbox/CamelotScifiCheckbox.ts)
- [radio/CamelotScifiRadio.ts](src/components/radio/CamelotScifiRadio.ts)
- [menu/CamelotScifiMenu.ts](src/components/menu/CamelotScifiMenu.ts)

## Verification Plan

### Automated Tests
- 執行 `pnpm build` 確保 TypeScript 編譯無誤。

### Manual Verification
- 在 `index.html` 中切換模式，確認 Sci-fi 組件在不同主題下字體正確切換。
- 確認 `--cml-font-family-mono` 已正確注入到 DOM 中。
