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
import { CamelotScifiBase } from '../scifi/CamelotScifiBase';
import '../scifi/CamelotScifiFrame';
/**
 * <CamelotScifiBadge>
 * 日系科幻風格 (Sci-fi HUD) 的標籤元件實作。
 * 已優化：使用 CamelotScifiBase 與 CamelotScifiFrame。
 */
let CamelotScifiBadge = class CamelotScifiBadge extends CamelotScifiBase {
    constructor() {
        super(...arguments);
        this.label = '';
        this.variant = 'filled';
    }
    static { this.styles = [
        css `
      :host {
        display: inline-block;
        vertical-align: middle;
      }
      .badge-outer {
        padding: 2px 10px;
        min-width: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .label-text {
        font-family: var(--cml-font-family-mono, monospace);
        font-size: 0.75rem;
        font-weight: bold;
        letter-spacing: 1px;
        color: var(--cml-color-on-surface);
        text-transform: uppercase;
        transition: color 0.2s ease;
      }

      /* 當處於變體填充或 Host 被標記為 filled 時，切換至主題對比色 */
      :host([variant="filled"]) .label-text,
      :host([filled]) .label-text {
        color: var(--cml-color-on-primary, #fff);
      }
      :host([variant="filled"][color="secondary"]) .label-text,
      :host([filled][color="secondary"]) .label-text { 
        color: var(--cml-color-on-secondary, #fff); 
      }
      :host([variant="filled"][color="tertiary"]) .label-text,
      :host([filled][color="tertiary"]) .label-text { 
        color: var(--cml-color-on-tertiary, #fff); 
      }
    `
    ]; }
    render() {
        const isFilled = this.variant === 'filled';
        const onColor = isFilled ? `var(--cml-color-on-${this.color})` : 'inherit';
        return html `
      <camelot-scifi-frame 
        .color="${this.color}"
        ?filled="${isFilled}"
        ?showGrid="${false}"
        ?showScanline="${isFilled}"
          ?show-shine="${this._isHovered && !this.disabled}"
        .activeReticle="${false}"
        @mouseenter="${this._handleMouseEnter}"
        @mouseleave="${this._handleMouseLeave}"
      >
        <div class="badge-outer" style="color: ${onColor}">
          <slot>
            <span class="label-text">${this.label}</span>
          </slot>
        </div>
      </camelot-scifi-frame>
    `;
    }
};
__decorate([
    property({ type: String }),
    __metadata("design:type", Object)
], CamelotScifiBadge.prototype, "label", void 0);
__decorate([
    property({ type: String, reflect: true }),
    __metadata("design:type", String)
], CamelotScifiBadge.prototype, "variant", void 0);
CamelotScifiBadge = __decorate([
    customElement('camelot-scifi-badge-impl')
], CamelotScifiBadge);
export { CamelotScifiBadge };
//# sourceMappingURL=CamelotScifiBadge.js.map