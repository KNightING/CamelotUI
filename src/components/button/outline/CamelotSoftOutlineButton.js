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
import { CamelotBaseElement } from '../../base/CamelotBaseElement';
/**
 * <CamelotSoftOutlineButton>
 * Soft UI (Neumorphism) 風格的邊框按鈕
 */
let CamelotSoftOutlineButton = class CamelotSoftOutlineButton extends CamelotBaseElement {
    constructor() {
        super(...arguments);
        this.label = 'Button';
        this.disabled = false;
    }
    static { this.styles = [
        css `
      :host {
        display: inline-block;
      }

      button {
        font-family: var(--cml-font-family);
        font-weight: var(--cml-font-weight-medium);
        font-size: var(--cml-font-size-label);
        background-color: var(--cml-color-background);
        padding: 12px 28px;
        border: 1px solid var(--cml-color-current-color);
        border-radius: 20px;
        cursor: pointer;
        transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        outline: none;
        
        /* 使用統一主題變數 */
        color: var(--cml-color-current-color);
        
        box-shadow: 
          calc(var(--cml-soft-distance) / 2) calc(var(--cml-soft-distance) / 2) calc(var(--cml-soft-blur) / 2) var(--cml-soft-color-dark);
      }

      button:disabled {
        cursor: not-allowed;
        opacity: 0.5;
        box-shadow: none !important;
      }

      button:active:not(:disabled) {
        background-color: rgba(0, 0, 0, 0.05);
      }
    `
    ]; }
    render() {
        return html `
      <button 
        ?disabled="${this.disabled}"
      >
        ${this.label}
        <slot></slot>
      </button>
    `;
    }
};
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], CamelotSoftOutlineButton.prototype, "label", void 0);
__decorate([
    property({ type: Boolean, reflect: true }),
    __metadata("design:type", Boolean)
], CamelotSoftOutlineButton.prototype, "disabled", void 0);
CamelotSoftOutlineButton = __decorate([
    customElement('camelot-soft-outline-button')
], CamelotSoftOutlineButton);
export { CamelotSoftOutlineButton };
//# sourceMappingURL=CamelotSoftOutlineButton.js.map