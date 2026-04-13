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
 * <CamelotSoftIconButton>
 * Soft UI (Neumorphism) 風格的圖示按鈕。
 */
let CamelotSoftIconButton = class CamelotSoftIconButton extends CamelotBaseElement {
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
        width: 48px;
        height: 48px;
        padding: 0;
        border: none;
        cursor: pointer;
        background-color: var(--cml-color-background);
        transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        outline: none;
        
        /* 使用統一主題變數 */
        color: var(--cml-color-current-color);

        /* Neumorphism Shadows */
        box-shadow: 
          var(--cml-soft-distance) var(--cml-soft-distance) var(--cml-soft-blur) var(--cml-soft-color-dark), 
          calc(-1 * var(--cml-soft-distance)) calc(-1 * var(--cml-soft-distance)) var(--cml-soft-blur) var(--cml-soft-color-light);
      }

      button:disabled {
        cursor: not-allowed;
        opacity: 0.5;
        box-shadow: none !important;
      }

      .circle { border-radius: 50%; }
      .square { border-radius: 12px; }

      button:active:not(:disabled) {
        box-shadow: 
          inset var(--cml-soft-distance) var(--cml-soft-distance) var(--cml-soft-blur) var(--cml-soft-color-dark), 
          inset calc(-1 * var(--cml-soft-distance)) calc(-1 * var(--cml-soft-distance)) var(--cml-soft-blur) var(--cml-soft-color-light);
        transform: scale(0.96);
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
], CamelotSoftIconButton.prototype, "shape", void 0);
__decorate([
    property({ type: Boolean, reflect: true }),
    __metadata("design:type", Boolean)
], CamelotSoftIconButton.prototype, "disabled", void 0);
CamelotSoftIconButton = __decorate([
    customElement('camelot-soft-icon-button')
], CamelotSoftIconButton);
export { CamelotSoftIconButton };
//# sourceMappingURL=CamelotSoftIconButton.js.map