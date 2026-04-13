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
 * <CamelotCupertinoIconButton>
 * iOS 風格的圖示按鈕。
 */
let CamelotCupertinoIconButton = class CamelotCupertinoIconButton extends CamelotBaseElement {
    constructor() {
        super(...arguments);
        this.shape = 'circle';
        this.disabled = false;
    }
    static { this.styles = [
        css `
      :host {
        display: inline-block;
      }

      button {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 44px;
        height: 44px;
        padding: 0;
        border: none;
        cursor: pointer;
        background-color: transparent;
        transition: opacity 0.2s, transform 0.1s, background-color 0.2s;
        outline: none;
        
        /* 使用統一主題變數 */
        color: var(--cml-color-current-color);
      }

      button:disabled {
        cursor: not-allowed;
        opacity: 0.3;
        filter: grayscale(1);
      }

      .circle { border-radius: 50%; }
      .square { border-radius: 10px; }

      button:active:not(:disabled) {
        opacity: 0.6;
        background-color: rgba(0, 0, 0, 0.05);
        transform: scale(0.92);
      }
    `
    ]; }
    render() {
        return html `
      <button 
        class="${this.shape}"
        ?disabled="${this.disabled}"
      >
        <slot></slot>
      </button>
    `;
    }
};
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], CamelotCupertinoIconButton.prototype, "shape", void 0);
__decorate([
    property({ type: Boolean, reflect: true }),
    __metadata("design:type", Boolean)
], CamelotCupertinoIconButton.prototype, "disabled", void 0);
CamelotCupertinoIconButton = __decorate([
    customElement('camelot-cupertino-icon-button')
], CamelotCupertinoIconButton);
export { CamelotCupertinoIconButton };
//# sourceMappingURL=CamelotCupertinoIconButton.js.map