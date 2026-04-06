# CamelotUI 元件庫開發計畫

本計畫旨在建立一套名為 **CamelotUI** 的 UI 元件庫。該庫將採用 **Lit** (Web Components) 為核心技術，確保能無縫整合於 Vue3、React 等主流前端框架。設計語彙將遵循 **Material 3 (M3)** 標準，並透過 Figma 進行先期設計與 Design Token 管理。

## 使用者評論需求 (User Review Required)

> [!IMPORTANT]
> 1. **元件命名規範**：所有元件均以 `Camelot` 開頭，例如 `<CamelotTheme>`、`<CamelotButton>`。
> 2. **CSS 變數命名**：遵循 `--cml-xxx` 格式，移除中間的層級描述（如 `sys`），例如 `--cml-primary`。
> 3. **多樣化風格支援**：`<CamelotButton>` 等基礎元件能透過主題配置切換不同的 UI 風格（Material, Cupertino, Soft UI）。
> 4. **字體與模式**：預設字體為 `Noto Sans TC`，支援自動暗色模式 (Dark Mode)。

## 預計變更 (Proposed Changes)

### 1. 基礎建設與環境設定
- [NEW] 初始化專案：使用 `Vite + Lit + TypeScript`。
- [NEW] 配置 `.agents` 路徑下的規格與記錄檔案。
- [NEW] 建立層級化 Design System：
    - **Primitives**: 基礎色譜 (Ref Tokens)。
    - **Semantic/System**: M3 標準語義變數 (Sys Tokens)。
    - **Component**: 元件專屬變數 (Comp Tokens)。

### 2. Figma 設計 (Design-First Workflow)
- [NEW] 使用 Figma MCP 建立檔案 `CamelotUI Design System`。
- [NEW] 分頁規劃 (Page Planning)：
    - `Foundations` (Tokens, Typography, Colors)
    - `Components` (Button, Input, etc.)
    - `Sandbox` (Prototyping)
- [NEW] 定義 M3 顏色 Variables 與不同風格的屬性集 (如 Soft UI 的光源配置)。

### 3. 主題管理與 Design Tokens
- [NEW] `src/styles/tokens.css`: 定義 `:root` 下的全域變數（Light/Dark 模式）。
- [NEW] `src/components/theme/CamelotTheme.ts`: 實作 `<CamelotTheme>` 元件，支援動態風格切換 (`mode="material|cupertino|soft"`)。

### 4. 元件開發 (Lit)
- [NEW] 多風格結構實作：
    - `CamelotButton` (控制器元組，根據主題選擇渲染對應風格)
    - `CamelotMaterialButton` (Material 3 風格實作)
    - `CamelotCupertinoButton` (iOS 風格實作)
    - `CamelotSoftButton` (Soft UI 擬態風格實作)

## 開放問題 (Open Questions)

> [!NOTE]
> 1. 是否需要支援 **暗色模式 (Dark Mode)** 的自動切換？ -> 已確認：需要。
> 2. Figma 文件是否需要特定的 Page 規劃？ -> 已確認：需要 (Foundations, Components, Sandbox)。
> 3. 是否有偏好的字體系統？ -> 已確認：Noto Sans TC。

## 驗證計畫 (Verification Plan)

### 自動化測試
- 使用 `Playwright` 或 `Web Test Runner` 進行跨框架相容性測試。

### 手動驗證
- 建立一個簡單的 `index.html` 測試頁面，展示 `<CamelotTheme>` 局部覆蓋變數的效果。
- 檢查變數是否正確應用於元件的 Shadow DOM。
