# Plan: [2604091518] - Refactor Sci-Fi HUD Hover Effects & Button Migration
- Created: 2026-04-09
- Branch: N/A
- Completed: 2026-04-09

## Goals
1. Consolidate advanced HUD animations (Focus Reticle and Shine Glide) into the base architecture.
2. Migrate the Sci-Fi Button to use the unified `CamelotScifiFrame` system.
3. Ensure consistent interactive feedback across all Sci-Fi components.

## Proposed Changes

### [Sci-Fi Architecture]

#### [MODIFY] [CamelotScifiBase.ts](file:///c:/project/mine/CamelotUI/src/components/scifi/CamelotScifiBase.ts)
- Add `@property` for `showReticle` and `showShine`.
- Add shared CSS for the focus glow and shine glide animations.

#### [MODIFY] [CamelotScifiFrame.ts](file:///c:/project/mine/CamelotUI/src/components/scifi/CamelotScifiFrame.ts)
- Add a `.shine-glide` layer that animates on hover.
- Integrate `CamelotScifiReticle` directly into the frame structure.
- Add CSS animations for the "Gliding Shine" effect.

### [Component Migration]

#### [MODIFY] [CamelotScifiFilledButton.ts](file:///c:/project/mine/CamelotUI/src/components/button/filled/CamelotScifiFilledButton.ts)
- Change inheritance to `CamelotScifiBase`.
- Replace custom HUD container with `<camelot-scifi-frame>`.

## Task Execution History
- [x] [Phase 1] 更新 CamelotScifiBase 增加通用屬性與樣式
- [x] [Phase 2] 更新 CamelotScifiFrame 增加 Shine 與 Reticle 整合
- [x] [Phase 3] 重構 CamelotScifiFilledButton 繼承 Base 與使用 Frame
- [x] [Phase 4] 為 Input, Select, Badge 啟用新效果
- [x] [Phase 5] 靜態檢查與驗證
