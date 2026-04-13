import { LitElement } from 'lit';
/**
 * CamelotBaseElement 基礎類別
 * 封裝了所有 CamelotUI 組件共用的底層邏輯，包括：
 * 1. 自動偵測主題風格 (優先從 DOM 樹尋找 camelot-theme)
 * 2. 監控全域主題變更事件 (camelot-theme-changed)
 * 3. 管理 _activeStyle 狀態，供子組件進行風格分流
 * 4. 統一管理顏色映射模式 (current-color, current-on-color, current-outline)
 */
export declare class CamelotBaseElement extends LitElement {
    /**
     * 當前的 UI 風格：'material', 'cupertino', 'soft', 'scifi'
     */
    protected _activeStyle: string;
    /**
     * 組件的基本色系
     */
    color: 'primary' | 'secondary' | 'tertiary' | 'error' | 'info' | 'warning' | 'success';
    /**
     * 是否為 Container 色系變體 (Material 3 規範)
     */
    isContainer: boolean;
    private _themeChangeListener;
    connectedCallback(): void;
    disconnectedCallback(): void;
    protected updated(changedProperties: Map<string | number | symbol, unknown>): void;
    /**
     * 更新元件對應的代理顏色變數
     * 定義於 :host 層級，供 Shadow DOM 內部的 CSS 引用
     */
    protected _updateCurrentColors(): void;
    /**
     * 偵測目前的 UI 風格
     */
    protected _updateActiveStyle(): void;
}
