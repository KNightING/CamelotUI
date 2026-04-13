var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { THEME_DEFAULT } from '../../styles/themes';
/**
 * <CamelotTheme>
 * 用於管理與局部覆蓋 CamelotUI 的主題與風格。
 * 支援多樣化風格 (material, cupertino, soft-ui) 與結構化配置 (Config)。
 */
let CamelotTheme = class CamelotTheme extends LitElement {
    constructor() {
        super(...arguments);
        /**
         * 當前的 UI 風格：'material', 'cupertino', 'soft', 'scifi'
         */
        this.mode = 'material';
        /**
         * 強制設定主題色模式：'light', 'dark', 或 'auto' (隨系統)
         */
        this.theme = 'auto';
        this._darkMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        this._handleSystemThemeChange = () => {
            if (this.theme === 'auto') {
                this._applyPalette();
            }
        };
    }
    static { this.styles = css `
    :host {
      display: block;
    }

    .theme-container {
      display: contents;
    }
  `; }
    connectedCallback() {
        super.connectedCallback();
        this._darkMediaQuery.addEventListener('change', this._handleSystemThemeChange);
        this.style.setProperty('--cml-active-ui-style', `"${this.mode}"`);
        this._applyPalette();
    }
    disconnectedCallback() {
        this._darkMediaQuery.removeEventListener('change', this._handleSystemThemeChange);
        super.disconnectedCallback();
    }
    updated(changedProperties) {
        if (changedProperties.has('mode')) {
            const parentTheme = this.parentElement?.closest('camelot-theme');
            const isRoot = !parentTheme;
            const target = isRoot ? document.documentElement.style : this.style;
            target.setProperty('--cml-active-ui-style', `"${this.mode}"`);
            window.dispatchEvent(new CustomEvent('camelot-theme-changed', {
                detail: { mode: this.mode },
                bubbles: true,
                composed: true
            }));
        }
        if (changedProperties.has('theme') || changedProperties.has('config')) {
            this._applyPalette();
        }
    }
    _applyPalette() {
        const hasThemeAttr = this.hasAttribute('theme');
        const hasConfig = this.config !== undefined;
        const parentTheme = this.parentElement?.closest('camelot-theme');
        const isRoot = !parentTheme;
        // 取得基底配置：
        // 1. 根主題：若無自定義 config 則回歸 THEME_DEFAULT (系統基準)
        // 2. 嵌套主題：若無自定義 config 則為空物件 (實現增量覆蓋與純繼承)
        const baseConfig = this.config || (isRoot ? THEME_DEFAULT : {});
        let effectiveTheme = 'light';
        if (this.theme === 'auto') {
            effectiveTheme = this._darkMediaQuery.matches ? 'dark' : 'light';
        }
        else {
            effectiveTheme = this.theme;
        }
        // 合併該主題下「基礎層」與「模式特定層 (light/dark)」的配置
        const modeConfig = baseConfig[effectiveTheme] || {};
        const finalConfig = {
            color: { ...(baseConfig.color || {}), ...(modeConfig.color || {}) },
            font: { ...(baseConfig.font || {}), ...(modeConfig.font || {}) },
            spacing: { ...(baseConfig.spacing || {}), ...(modeConfig.spacing || {}) },
            radius: { ...(baseConfig.radius || {}), ...(modeConfig.radius || {}) },
            soft: { ...(baseConfig.soft || {}), ...(modeConfig.soft || {}) },
            drawer: { ...(baseConfig.drawer || {}), ...(modeConfig.drawer || {}) },
            scifi: { ...(baseConfig.scifi || {}), ...(modeConfig.scifi || {}) },
        };
        // 注入策略：根主題寫入 :root，嵌套主題寫入自身 style
        const target = isRoot ? document.documentElement.style : this.style;
        // 繼承決策：若為嵌套主題且完全無手動配置，強行清除本地變數以確保 100% 继承
        if (!isRoot && !hasThemeAttr && !hasConfig) {
            this._clearAllProperties();
            return;
        }
        // 執行注入 (遍歷 finalConfig 並應用變數)
        this._injectSection(target, 'color', finalConfig.color);
        this._injectSection(target, 'font', finalConfig.font);
        this._injectSection(target, 'spacing', finalConfig.spacing);
        this._injectSection(target, 'radius', finalConfig.radius);
        this._injectSection(target, 'soft', finalConfig.soft);
        this._injectSection(target, 'drawer', finalConfig.drawer);
        this._injectSection(target, 'scifi', finalConfig.scifi);
    }
    _injectSection(target, section, data) {
        if (!data)
            return;
        Object.entries(data).forEach(([key, value]) => {
            if (value !== undefined && value !== '') {
                target.setProperty(`--cml-${section}-${key}`, String(value));
                // 特殊處理：如果是顏色，試圖生成 RGB 數值片段以支持透明度 (rgba)
                if (section === 'color' && String(value).startsWith('#')) {
                    const rgb = this._hexToRgb(String(value));
                    if (rgb) {
                        target.setProperty(`--cml-${section}-${key}-rgb`, `${rgb.r}, ${rgb.g}, ${rgb.b}`);
                    }
                }
            }
        });
    }
    _hexToRgb(hex) {
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : null;
    }
    _clearAllProperties() {
        // 遍歷當前 style 並移除所有以 --cml- 開頭的屬性，重置繼承
        const style = this.style;
        for (let i = 0; i < style.length; i++) {
            const prop = style[i];
            if (prop.startsWith('--cml-')) {
                style.removeProperty(prop);
            }
        }
    }
    render() {
        return html `
      <div class="theme-container">
        <slot></slot>
      </div>
    `;
    }
};
__decorate([
    property({ type: String, reflect: true }),
    __metadata("design:type", String)
], CamelotTheme.prototype, "mode", void 0);
__decorate([
    property({ type: String, reflect: true }),
    __metadata("design:type", String)
], CamelotTheme.prototype, "theme", void 0);
__decorate([
    property({ type: Object }),
    __metadata("design:type", Object)
], CamelotTheme.prototype, "config", void 0);
CamelotTheme = __decorate([
    customElement('camelot-theme')
], CamelotTheme);
export { CamelotTheme };
//# sourceMappingURL=CamelotTheme.js.map