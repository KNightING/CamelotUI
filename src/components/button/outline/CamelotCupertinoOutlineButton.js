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
 * <CamelotCupertinoOutlineButton>
 * iOS風格的邊框按鈕 (Outline Button)
 */
let CamelotCupertinoOutlineButton = class CamelotCupertinoOutlineButton extends CamelotBaseElement {
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
        font-weight: 400;
        font-size: 1.0625rem;
        padding: 12px 20px;
        border: 1px solid var(--cml-color-current-color);
        background-color: transparent;
        border-radius: 12px;
        cursor: pointer;
        transition: opacity 0.2s, transform 0.1s;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        
        /* 使用統一主題變數 */
        color: var(--cml-color-current-color);
      }

      button:disabled {
        cursor: not-allowed;
        opacity: 0.3;
        filter: grayscale(1);
      }

      button:active:not(:disabled) {
        opacity: 0.6;
        transform: scale(0.97);
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
], CamelotCupertinoOutlineButton.prototype, "label", void 0);
__decorate([
    property({ type: Boolean, reflect: true }),
    __metadata("design:type", Boolean)
], CamelotCupertinoOutlineButton.prototype, "disabled", void 0);
CamelotCupertinoOutlineButton = __decorate([
    customElement('camelot-cupertino-outline-button')
], CamelotCupertinoOutlineButton);
export { CamelotCupertinoOutlineButton };
//# sourceMappingURL=CamelotCupertinoOutlineButton.js.map