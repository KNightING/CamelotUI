# Plan: 2604090901 - Extract Scifi Reticle Component

將 Sci-fi HUD 風格中常見的「鎖定括號 (Corner Brackets)」特效抽離為獨立組件 `<camelot-scifi-reticle>`，以提升代碼復用性與維護性。

- Created: 2026-04-09
- Branch: `feature/2604090901-extract-scifi-reticle-component`
- Completed: 2026-04-09

## Goals
1. 建立 `<camelot-scifi-reticle>` 組件，封裝括號繪製與鎖定動畫邏輯。
2. 重構 `CamelotScifiFilledButton`, `CamelotScifiOutlineButton`, `CamelotScifiTextButton` 移除重複的 CSS 與 HTML，改用此組件。
3. 支援 `active` 狀態屬性，允許外部控制鎖定效果。

## User Review Required

> [!IMPORTANT]
> **API 設計**: 新組件將採用 `<camelot-scifi-reticle .active=${bool} color="primary"></camelot-scifi-reticle>` 的方式呼叫。
> **重構影響**: 由於移除所有按鈕內的重複 CSS，若未來需調整鎖定動畫，只需修改此單一文件即可。

## Proposed Changes

### [Components]

#### [NEW] [CamelotScifiReticle.ts](file:///c:/project/mine/CamelotUI/src/components/scifi/CamelotScifiReticle.ts)
- 封裝 4 個 `.bracket` 的 HTML 結構。
- 封裝透明度、位移與縮放動畫 CSS。
- 監聽 `active` 屬性以觸發「鎖定」視覺。

#### [MODIFY] [CamelotScifiFilledButton.ts](file:///c:/project/mine/CamelotUI/src/components/button/filled/CamelotScifiFilledButton.ts)
- 移除結構中的 4 個 `div.bracket`。
- 注入 `<camelot-scifi-reticle>`。
- 將 Button 的 hover 狀態透過 CSS 變數或屬性傳遞給 Reticle。

#### [MODIFY] [CamelotScifiOutlineButton.ts](file:///c:/project/mine/CamelotUI/src/components/button/outline/CamelotScifiOutlineButton.ts)
- 同上，進行結構簡化。

#### [MODIFY] [CamelotScifiTextButton.ts](file:///c:/project/mine/CamelotUI/src/components/button/text/CamelotScifiTextButton.ts)
- 同上，進行結構簡化。

## Verification Plan

### Automated Tests
- `npm run dev` 啟動預覽。

### Manual Verification
- 驗證三種按鈕的鎖定動畫是否依然正常（包含 Hover 與 Click）。
- 測試輔助：在 `index.html` 加入一個獨立展示 Reticle 的區塊，驗證其作為獨立組件的功能。
