# Plan Archive: 2604131640 - Standardize Mono Font for Sci-fi Components
- Created: 2026-04-13 16:40
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

## Tasks
- [x] 更新 Sci-fi 系列所有組件的字體引用，改為使用 `var(--cml-font-family)`
    - [x] `CamelotScifiTabs.ts`
    - [x] `CamelotScifiSelect.ts`
    - [x] `CamelotScifiInput.ts`
    - [x] `CamelotScifiConfirmDialog.ts`
    - [x] `CamelotScifiCard.ts`
    - [x] `CamelotScifiTextButton.ts`
    - [x] `CamelotScifiFilledButton.ts`
    - [x] `CamelotScifiOutlineButton.ts`
    - [x] `CamelotScifiBadge.ts`
    - [x] `CamelotScifiSwitch.ts`
    - [x] `CamelotScifiCheckbox.ts`
    - [x] `CamelotScifiRadio.ts`
    - [x] `CamelotScifiMenu.ts`
- [x] 執行 `pnpm build` 驗證

## Verification Results
- **Automated Tests**: `pnpm build` passed successfully after fixing pre-existing TS errors and `tsconfig.json`.
- **Manual Verification**: Fonts now scale with the global `--cml-font-family` variable, allowing them to switch between Cyber (monospaced) and other modes automatically.
