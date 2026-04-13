var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { CamelotScifiBase } from '../../scifi/CamelotScifiBase';
import '../../scifi/CamelotScifiFrame';
/**
 * <CamelotScifiFilledButton>
 * 日系科幻風格 (Sci-fi HUD) 的實心按鈕。
 * 已優化：繼承自 CamelotScifiBase 並使用 CamelotScifiFrame。
 */
let CamelotScifiFilledButton = class CamelotScifiFilledButton extends CamelotScifiBase {
    constructor() {
        super(...arguments);
        this.label = 'Button';
    }
    static { this.styles = [
        css `
      :host {
        display: inline-block;
        vertical-align: middle;
        cursor: pointer;
        outline: none;
      }
      :host([disabled]) {
        cursor: not-allowed;
        opacity: 0.6;
        pointer-events: none;
      }
      .btn-inner {
        padding: 8px 24px;
        min-width: 120px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        background: transparent;
        border: none;
        
        /* 使用統一主題變數：預設狀態使用 current-color 混合白色以提高亮度 */
        color: color-mix(in srgb, var(--cml-color-current-color), white 80%);
        
        font-family: var(--cml-font-family-mono, monospace);
        font-weight: bold;
        text-transform: uppercase;
        letter-spacing: 0.15em;
        transition: all 0.2s ease;
        position: relative;
        z-index: 10;
        pointer-events: none;
      }
      
      /* 只有當真的填滿 (filled) 時（即 Active 狀態），才切換至對比色 (current-on-color) */
      :host([filled]) .btn-inner {
        color: var(--cml-color-current-on-color);
      }
      
      /* 讓內容在 Filled 狀態下始終維持高對比 */
      :host .btn-inner ::slotted(*) {
        color: inherit;
      }
    `
    ]; }
    render() {
        const isFilled = this._isActive;
        return html `
      <camelot-scifi-frame
        ?focused="${this._isFocused}"
        ?filled="${isFilled && !this.disabled}"
        ?showGrid="${false}"
        ?showScanline="${!this.disabled}"
          ?show-shine="${this._isHovered && !this.disabled}"
        .activeReticle="${this._isActive || this._isFocused || this._isHovered}"
        @mouseenter="${this._handleMouseEnter}"
        @mouseleave="${this._handleMouseLeave}"
        @mousedown="${() => this._isActive = true}"
        @mouseup="${() => this._isActive = false}"
        @focus="${this._handleFocus}"
        @blur="${this._handleBlur}"
        tabindex="0"
      >
        <div class="btn-inner">
          ${this.label ? html `<span>${this.label}</span>` : html `<slot></slot>`}
        </div>
      </camelot-scifi-frame>
    `;
    }
};
__decorate([
    property({ type: String }),
    __metadata("design:type", Object)
], CamelotScifiFilledButton.prototype, "label", void 0);
CamelotScifiFilledButton = __decorate([
    customElement('camelot-scifi-filled-button')
], CamelotScifiFilledButton);
export { CamelotScifiFilledButton };
//# sourceMappingURL=CamelotScifiFilledButton.js.map