var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { LitElement } from 'lit';
import { property, state } from 'lit/decorators.js';
/**
 * CamelotBaseElement 基礎類別
 * 封裝了所有 CamelotUI 組件共用的底層邏輯，包括：
 * 1. 自動偵測主題風格 (優先從 DOM 樹尋找 camelot-theme)
 * 2. 監控全域主題變更事件 (camelot-theme-changed)
 * 3. 管理 _activeStyle 狀態，供子組件進行風格分流
 * 4. 統一管理顏色映射模式 (current-color, current-on-color, current-outline)
 */
export class CamelotBaseElement extends LitElement {
    constructor() {
        super(...arguments);
        /**
         * 當前的 UI 風格：'material', 'cupertino', 'soft', 'scifi'
         */
        this._activeStyle = 'material';
        /**
         * 組件的基本色系
         */
        this.color = 'primary';
        /**
         * 是否為 Container 色系變體 (Material 3 規範)
         */
        this.isContainer = false;
        this._themeChangeListener = () => {
            this._updateActiveStyle();
        };
    }
    connectedCallback() {
        super.connectedCallback();
        this._updateActiveStyle();
        window.addEventListener('camelot-theme-changed', this._themeChangeListener);
    }
    disconnectedCallback() {
        window.removeEventListener('camelot-theme-changed', this._themeChangeListener);
        super.disconnectedCallback();
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has('color') || changedProperties.has('isContainer')) {
            this._updateCurrentColors();
        }
    }
    /**
     * 更新元件對應的代理顏色變數
     * 定義於 :host 層級，供 Shadow DOM 內部的 CSS 引用
     */
    _updateCurrentColors() {
        const role = this.color;
        const isContainer = this.isContainer;
        // 映射對應的 Global Tokens
        // 例如 color="primary", isContainer=true -> --cml-color-primary-container
        const colorToken = isContainer ? `var(--cml-color-${role}-container)` : `var(--cml-color-${role})`;
        const onColorToken = isContainer ? `var(--cml-color-on-${role}-container)` : `var(--cml-color-on-${role})`;
        const bgColorToken = isContainer ? `var(--cml-color-${role}-container)` : `var(--cml-color-surface-container)`;
        const outlineToken = `var(--cml-color-outline)`;
        // 注入 CSS 變數
        this.style.setProperty('--cml-color-current-color', colorToken);
        this.style.setProperty('--cml-color-current-on-color', onColorToken);
        this.style.setProperty('--cml-color-current-bg-color', bgColorToken);
        this.style.setProperty('--cml-color-current-outline', outlineToken);
    }
    /**
     * 偵測目前的 UI 風格
     */
    _updateActiveStyle() {
        const themeParent = this.closest('camelot-theme');
        if (themeParent && themeParent.mode) {
            if (this._activeStyle !== themeParent.mode) {
                this._activeStyle = themeParent.mode;
                // 切換風格時強制重新計算顏色 (部分風格可能有不同的映射邏輯)
                this._updateCurrentColors();
            }
            return;
        }
        const style = getComputedStyle(this)
            .getPropertyValue('--cml-active-ui-style')
            .replace(/"/g, '')
            .trim();
        if (style && style !== this._activeStyle) {
            this._activeStyle = style;
            this._updateCurrentColors();
        }
    }
}
__decorate([
    state(),
    __metadata("design:type", String)
], CamelotBaseElement.prototype, "_activeStyle", void 0);
__decorate([
    property({ type: String, reflect: true }),
    __metadata("design:type", String)
], CamelotBaseElement.prototype, "color", void 0);
__decorate([
    property({ type: Boolean, reflect: true, attribute: 'is-container' }),
    __metadata("design:type", Boolean)
], CamelotBaseElement.prototype, "isContainer", void 0);
//# sourceMappingURL=CamelotBaseElement.js.map