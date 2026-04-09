# Project: CamelotUI

## 目標 (Goals)
建立一套美觀、極致且具備動態效果的 Web UI 組件庫，支持多種視覺風格：Material, Cupertino, Soft UI, Sci-fi HUD。

## 核心技術棧 (Core Tech Stack)
- **Framework**: Lit
- **Logic**: TypeScript
- **Styling**: Vanilla CSS (透過 Lit `css` 標籤)
- **Styling tokens**: CSS Variables (定義於 `src/styles/tokens.css`)

## 架構說明 (Architecture)
- **Base Components**: 位於 `src/components/base/`，為抽象底層組件。
- **Component Facades**: 位於 `src/components/` 根目錄下，作為對外介面（如 `<camelot-button>`）。
- **核心組件庫 (Core Components)**:
    - **基礎框架 (Foundation)**: `CamelotScifiFrame` (提供邊框、內切角、掃描線、發光點等 Sci-Fi 視覺基礎)。
    - **按鈕 (Button)**: `CamelotButton`, `CamelotScifiFilledButton` (支持 Active 狀態填充、adaptive 寬度等)。
    - **表單 (Forms)**: `CamelotInput`, `CamelotSelect`, `CamelotCheckbox`, `CamelotRadio`, `CamelotSwitch` (適配 Sci-Fi / Standard 風格變體)。
    - **數據展示 (Data)**: `CamelotBadge`, `CamelotCard`, `CamelotTabs` (強化對比與 HUD 風格)。
    - **反饋與對話 (Feedback)**: `CamelotConfirmDialog`, `CamelotNotification` (支持動態滑入與 Sci-Fi 氛圍裝飾)。
- **Theme System**: 位於 `src/styles/themes.ts` 與 `src/components/theme/`，統一管理不同模式的色彩。

## 現有功能模組 (Existing Modules)
- **Form Selections**:
    - **Radio & Checkbox**: Sci-Fi 風格適配，使用特殊標線 (Reticle) 與掃描填充效果。
    - **Input & Select**: 具備高對比度 (On-Colors) 與 Filled 狀態感知，確保在發光背景下依然清晰。
- **UI Components (Sci-fi HUD Suite)**:
    - **Architecture**: 採用 `Frame-first` 設計，所有 Sci-Fi 組件均封裝於 `CamelotScifiFrame` 中。
    - **IconButton**: 整合十字絲標線動態效果。
    - **Tabs/Card/Badge**: 強制遵循 HUD 視覺語言，支持狀態填充。

## 全域規則 (Global Rules)
- 遵循 Material 3, iOS (Cupertino), Soft UI 與 Sci-fi HUD 設計規範。
- 使用 `CamelotBaseElement` 作為基礎類別。
- **精確工作流 (Precision Workflow)**：所有開發任務必須嚴格遵循 `.agents/rules/precision-workflow-guide.md`。
- **相對路徑優先**：計畫文件中一律使用相對於專案根目錄的路徑。
- **歸檔規範**：任務完成時強制進行計畫歸檔（使用表格格式且不含 `[x]`，存放於 `archive.md` 與 `archive/`）與大腦更新，保持 `project.md` 紀錄準確。
