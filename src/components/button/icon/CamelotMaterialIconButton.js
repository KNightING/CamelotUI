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
 * <CamelotMaterialIconButton>
 * Material 3 風格的圖示按鈕。
 */
let CamelotMaterialIconButton = class CamelotMaterialIconButton extends CamelotBaseElement {
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
        position: relative;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 40px;
        padding: 0;
        border: none;
        cursor: pointer;
        background-color: transparent;
        transition: background-color 0.2s, transform 0.1s;
        outline: none;
        
        /* 使用統一主題變數 */
        color: var(--cml-color-current-color);
      }

      button:disabled {
        cursor: not-allowed;
        opacity: 0.38;
      }

      .circle { border-radius: 50%; }
      .square { border-radius: var(--cml-radius-s); }

      button:hover:not(:disabled) {
        /* 使用 current-color 的低透明度背景作為 Hover 狀態 */
        background-color: color-mix(in srgb, var(--cml-color-current-color), transparent 92%);
      }
      
      /* Ripple style (Material standard) */
      .ripple {
        position: absolute;
        border-radius: 50%;
        background-color: rgba(0, 0, 0, 0.1);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
      }

      @keyframes ripple-animation {
        to {
          transform: scale(3);
          opacity: 0;
        }
      }
    `
    ]; }
    _handlePointerDown(e) {
        const button = e.currentTarget;
        const rect = button.getBoundingClientRect();
        const ripple = document.createElement('span');
        ripple.classList.add('ripple');
        const size = Math.max(rect.width, rect.height);
        ripple.style.width = ripple.style.height = `${size}px`;
        ripple.style.left = `${e.clientX - rect.left - size / 2}px`;
        ripple.style.top = `${e.clientY - rect.top - size / 2}px`;
        button.appendChild(ripple);
        ripple.addEventListener('animationend', () => ripple.remove());
    }
    render() {
        return html `
      <button 
        class="${this.shape}"
        ?disabled="${this.disabled}"
        @pointerdown="${this._handlePointerDown}"
      >
        <slot></slot>
      </button>
    `;
    }
};
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], CamelotMaterialIconButton.prototype, "shape", void 0);
__decorate([
    property({ type: Boolean, reflect: true }),
    __metadata("design:type", Boolean)
], CamelotMaterialIconButton.prototype, "disabled", void 0);
CamelotMaterialIconButton = __decorate([
    customElement('camelot-material-icon-button')
], CamelotMaterialIconButton);
export { CamelotMaterialIconButton };
//# sourceMappingURL=CamelotMaterialIconButton.js.map