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
 * <CamelotSoftTextButton>
 * Soft UI (Neumorphism) 風格的文字按鈕
 */
let CamelotSoftTextButton = class CamelotSoftTextButton extends CamelotBaseElement {
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
        background: transparent;
        padding: 12px 28px;
        border: none;
        border-radius: 20px;
        cursor: pointer;
        transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        outline: none;
        box-shadow: none;
        
        /* 使用統一主題變數 */
        color: var(--cml-color-current-color);
      }

      button:disabled {
        cursor: not-allowed;
        opacity: 0.5;
        color: var(--cml-color-outline) !important;
      }

      button:hover:not(:disabled) {
        background-color: var(--cml-color-current-color);
        color: var(--cml-color-current-on-color);
        opacity: 0.08;
        border-radius: 12px;
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
], CamelotSoftTextButton.prototype, "label", void 0);
__decorate([
    property({ type: Boolean, reflect: true }),
    __metadata("design:type", Boolean)
], CamelotSoftTextButton.prototype, "disabled", void 0);
CamelotSoftTextButton = __decorate([
    customElement('camelot-soft-text-button')
], CamelotSoftTextButton);
export { CamelotSoftTextButton };
//# sourceMappingURL=CamelotSoftTextButton.js.map