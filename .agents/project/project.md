# Project: CamelotUI

## 目標 (Goals)
建立一套美觀、現代化且具備高度彈性的 Web UI 元件庫，支援多種風格切換（Material, Cupertino, Soft UI）。

## 核心技術棧 (Core Tech Stack)
- **Framework**: Lit
- **Logic**: TypeScript
- **Styling**: Vanilla CSS (透過 Lit `css` 標籤)
- **Styling tokens**: CSS Variables (定義於 `src/styles/tokens.css` 與主題注入)

## 架構說明 (Architecture)
- **Base Components**: 位於 `src/components/base/`，提供風格偵測與基準邏輯。
- **Component Facades**: 位於 `src/components/` 對應目錄下，作為對外統一標籤（如 `<camelot-button>`）。
- **Style Components**: 底層實作，依據主題（Material, Cupertino, Soft）有不同的實作文件。
- **Theme System**: 位於 `src/styles/themes.ts` 與 `src/components/theme/`，負責色彩與排版標記的注入。

## 現有功能模組 (Existing Modules)
- **Form Selections**:
    - **Radio Group & Radio**: 核心單選元件。Sci-fi 風格採用菱形框架與中心發光點設計，並整合 `<camelot-scifi-reticle>` 實現選中鎖定效果。
    - **Checkbox Group & Checkbox**: 多選組件。Sci-fi 風格使用方括號 `[ ]` 框架與內部掃描線脈衝表現。
    - **Switch**: 開關組件。Sci-fi 風格捨棄切角改用標準矩形（依用戶需求），配備八角形滑塊與橫向掃描線。
    - **Refinement**: 所有 Sci-fi 元件均已 Token 化，嚴格遵循主題顏色系統 (`--cml-color-primary` 等)，並透過 `color-mix` 處理透明與發光度。
- **Theme**: 支援動態主題切換。

## 全域規則 (Global Rules)
- 遵循 Material 3, iOS (Cupertino), Soft UI 與 Sci-fi HUD 設計規範。
- 使用 `CamelotBaseElement` 作為基礎類別。
- 嚴格遵守「精準工作流」記錄所有開發活動。
- **歸檔原則**：完成後的計畫必須進行「扁平化合併」，將 `plan.md` 與 `tasks.md` 整合為單一歷史文件，以維護文件庫的精簡與可檢索性。
