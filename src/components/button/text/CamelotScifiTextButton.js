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
 * <CamelotScifiTextButton>
 * 日系科幻風格 (Sci-fi HUD) 的文字按鈕
 */
let CamelotScifiTextButton = class CamelotScifiTextButton extends CamelotScifiBase {
    constructor() {
        super(...arguments);
        this.label = 'Button';
    }
    static { this.styles = css `
    :host {
      display: inline-block;
      vertical-align: middle;
    }

    button {
      position: relative;
      font-family: var(--cml-font-family-mono, monospace);
      font-weight: var(--cml-font-weight-medium);
      font-size: var(--cml-font-size-label);
      padding: 8px 16px;
      border: none;
      background-color: transparent;
      
      /* 使用地理統一主題變數 */
      color: var(--cml-color-current-color);
      
      cursor: pointer;
      transition: all 0.2s cubic-bezier(0.19, 1, 0.22, 1);
      outline: none;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      text-transform: uppercase;
      letter-spacing: 0.15em;
      min-width: 100px;
      box-sizing: border-box;
    }

    button:hover {
      text-shadow: 0 0 8px var(--cml-color-current-color);
    }

    /* 點擊效果 */
    button:active:not(:disabled) {
      transform: scale(0.96);
      opacity: 0.8;
    }

    button:disabled {
      cursor: not-allowed;
      opacity: 0.3;
      color: #777;
    }

    .label-text {
      position: relative;
      z-index: 2;
    }
  `; }
    render() {
        return html `
      <camelot-scifi-frame 
        .color="${this.color}"
        variant="2-corner"
        .showGrid="${false}"
        .showBorders="${false}"
        .showCorners="${false}"
        ?show-shine="${this._isHovered && !this.disabled}"
        .activeReticle="${this._isHovered && !this.disabled}"
        @mouseenter="${this._handleMouseEnter}"
        @mouseleave="${this._handleMouseLeave}"
      >
        <button ?disabled="${this.disabled}">
          <span class="label-text">${this.label}</span>
          <slot></slot>
        </button>
      </camelot-scifi-frame>
    `;
    }
};
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], CamelotScifiTextButton.prototype, "label", void 0);
CamelotScifiTextButton = __decorate([
    customElement('camelot-scifi-text-button')
], CamelotScifiTextButton);
export { CamelotScifiTextButton };
//# sourceMappingURL=CamelotScifiTextButton.js.map