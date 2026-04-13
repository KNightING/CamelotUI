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
 * <CamelotMaterialOutlineButton>
 * Material 3風格的邊框按鈕 (Outline Button)
 */
let CamelotMaterialOutlineButton = class CamelotMaterialOutlineButton extends CamelotBaseElement {
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
        position: relative;
        overflow: hidden;
        font-family: var(--cml-font-family);
        font-weight: var(--cml-font-weight-medium);
        font-size: var(--cml-font-size-label);
        padding: 10px 24px;
        background-color: transparent;
        border-radius: var(--cml-radius-l);
        cursor: pointer;
        transition: all 0.28s cubic-bezier(0.4, 0, 0.2, 1);
        outline: none;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        
        /* 使用基礎色系代理變數 */
        border: 1px solid var(--cml-color-current-color);
        color: var(--cml-color-current-color);
      }

      button:disabled {
        cursor: not-allowed;
        opacity: 0.38;
        border-color: var(--cml-color-outline) !important;
        color: var(--cml-color-outline) !important;
      }

      button:hover:not(:disabled) {
        background-color: var(--cml-color-current-color);
        color: var(--cml-color-current-on-color);
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      }

      .ripple {
        position: absolute;
        border-radius: 50%;
        background-color: var(--cml-color-current-color);
        opacity: 0.12;
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
      }

      @keyframes ripple-animation {
        to {
          transform: scale(4);
          opacity: 0;
        }
      }
    `
    ]; }
    _handlePointerDown(e) {
        if (this.disabled)
            return;
        const button = e.currentTarget;
        const rect = button.getBoundingClientRect();
        const ripple = document.createElement('span');
        ripple.classList.add('ripple');
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        ripple.style.width = ripple.style.height = `${size}px`;
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;
        button.appendChild(ripple);
        ripple.addEventListener('animationend', () => {
            ripple.remove();
        });
    }
    render() {
        return html `
      <button 
        ?disabled="${this.disabled}"
        @pointerdown="${this._handlePointerDown}"
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
], CamelotMaterialOutlineButton.prototype, "label", void 0);
__decorate([
    property({ type: Boolean, reflect: true }),
    __metadata("design:type", Boolean)
], CamelotMaterialOutlineButton.prototype, "disabled", void 0);
CamelotMaterialOutlineButton = __decorate([
    customElement('camelot-material-outline-button')
], CamelotMaterialOutlineButton);
export { CamelotMaterialOutlineButton };
//# sourceMappingURL=CamelotMaterialOutlineButton.js.map