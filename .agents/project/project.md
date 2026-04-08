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
- **Button**: 完備的按鈕系統，分為 Filled (`<camelot-button>`), Outline (`<camelot-outline-button>`), Text (`<camelot-text-button>`), Icon (`<camelot-icon-button>`) 四大類，並以變體資料夾結構模組化實作。
- **Drawer**: 已完成，支援 4 個方向（Left, Right, Top, Bottom）與 3 種風格。其中 Soft UI 風格已優化為正統 Neumorphism。
- **Theme**: 支援動態主題切換。

## 全域規則 (Global Rules)
- 遵循 Material 3, iOS (Cupertino) 與 Soft UI 設計規範。
- 使用 `CamelotBaseElement` 作為基礎類別。
- 嚴格遵守「精準工作流」記錄所有開發活動。
