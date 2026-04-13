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
import '../../scifi/CamelotScifiReticle';
/**
 * <CamelotScifiOutlineButton>
 * 日系科幻風格 (Sci-fi HUD) 的外框按鈕
 */
let CamelotScifiOutlineButton = class CamelotScifiOutlineButton extends CamelotScifiBase {
    constructor() {
        super(...arguments);
        this.label = 'Button';
    }
    static { this.styles = css `
    :host {
      display: inline-block;
      position: relative;
    }

    .hud-container {
      position: relative;
      padding: 4px;
    }

    button {
      position: relative;
      font-family: var(--cml-font-family);
      font-weight: var(--cml-font-weight-medium);
      font-size: var(--cml-font-size-label);
      padding: 8px 24px;
      
      /* 使用地理統一主題變數 */
      border: 1px solid var(--cml-color-current-color);
      color: var(--cml-color-current-color);
      
      background-color: transparent;
      cursor: pointer;
      transition: all 0.2s cubic-bezier(0.19, 1, 0.22, 1);
      outline: none;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      text-transform: uppercase;
      letter-spacing: 0.2em;
      min-width: 120px;
      overflow: hidden;
    }

    button::before {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(90deg, transparent, color-mix(in srgb, var(--cml-color-current-color), transparent 80%), transparent);
      transform: translateX(-100%);
      transition: transform 0.5s;
    }

    button:hover:not(:disabled)::before {
      transform: translateX(100%);
    }

    /* 點擊效果 */
    button:active:not(:disabled) {
      background-color: color-mix(in srgb, var(--cml-color-current-color), transparent 80%);
      box-shadow: 0 0 20px color-mix(in srgb, var(--cml-color-current-color), transparent 50%);
    }

    button:disabled {
      cursor: not-allowed;
      opacity: 0.4;
      border-color: #444;
      color: #666;
    }

    .label-text {
      position: relative;
      z-index: 1;
    }
  `; }
    render() {
        return html `
      <div 
        class="hud-container"
        @mouseenter=${this._handleMouseEnter}
        @mouseleave=${this._handleMouseLeave}
        @mousedown=${() => this._isActive = true}
        @mouseup=${() => this._isActive = false}
      >
        <camelot-scifi-reticle 
          .active=${this._isHovered || this._isActive}
        ></camelot-scifi-reticle>
        
        <button ?disabled="${this.disabled}">
          <span class="label-text">${this.label}</span>
          <slot></slot>
        </button>
      </div>
    `;
    }
};
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], CamelotScifiOutlineButton.prototype, "label", void 0);
CamelotScifiOutlineButton = __decorate([
    customElement('camelot-scifi-outline-button')
], CamelotScifiOutlineButton);
export { CamelotScifiOutlineButton };
//# sourceMappingURL=CamelotScifiOutlineButton.js.map