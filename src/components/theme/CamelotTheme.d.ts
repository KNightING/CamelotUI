import { LitElement } from 'lit';
import type { CamelotThemeConfig } from '../../styles/themes';
/**
 * <CamelotTheme>
 * 用於管理與局部覆蓋 CamelotUI 的主題與風格。
 * 支援多樣化風格 (material, cupertino, soft-ui) 與結構化配置 (Config)。
 */
export declare class CamelotTheme extends LitElement {
    /**
     * 當前的 UI 風格：'material', 'cupertino', 'soft', 'scifi'
     */
    mode: 'material' | 'cupertino' | 'soft' | 'scifi';
    /**
     * 強制設定主題色模式：'light', 'dark', 或 'auto' (隨系統)
     */
    theme: 'light' | 'dark' | 'auto';
    /**
     * 結構化配置物件。
     * 支援格式: { color: {}, font: {}, spacing: {}, radius: {}, light: {}, dark: {} }
     */
    config?: CamelotThemeConfig;
    private _darkMediaQuery;
    static styles: import("lit").CSSResult;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private _handleSystemThemeChange;
    protected updated(changedProperties: Map<string | number | symbol, unknown>): void;
    private _applyPalette;
    private _injectSection;
    private _hexToRgb;
    private _clearAllProperties;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'camelot-theme': CamelotTheme;
    }
}
