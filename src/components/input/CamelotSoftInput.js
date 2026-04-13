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
import { CamelotBaseElement } from '../base/CamelotBaseElement';
import '../label/CamelotLabel';
/**
 * <CamelotSoftInput>
 * Neumorphism 風格的輸入框，內凹陰影效果。
 */
let CamelotSoftInput = class CamelotSoftInput extends CamelotBaseElement {
    constructor() {
        super(...arguments);
        this.label = '';
        this.value = '';
        this.placeholder = '';
    }
    static { this.styles = [
        css `
      :host {
        display: block;
      }

      .container {
        display: flex;
        flex-direction: column;
        gap: 12px;
      }

      input {
        font-family: var(--cml-font-family);
        font-size: 1rem;
        padding: 16px 20px;
        border: none;
        border-radius: 16px;
        background-color: var(--cml-color-current-bg-color);
        color: var(--cml-color-on-background);
        outline: none;
        box-shadow: 
          inset var(--cml-soft-distance) var(--cml-soft-distance) var(--cml-soft-blur) var(--cml-soft-color-dark), 
          inset calc(-1 * var(--cml-soft-distance)) calc(-1 * var(--cml-soft-distance)) var(--cml-soft-blur) var(--cml-soft-color-light);
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      }

      input:focus {
        box-shadow: 
          inset calc(var(--cml-soft-distance) * 0.5) calc(var(--cml-soft-distance) * 0.5) var(--cml-soft-blur) var(--cml-soft-color-dark), 
          inset calc(-1 * var(--cml-soft-distance) * 0.5) calc(-1 * var(--cml-soft-distance) * 0.5) var(--cml-soft-blur) var(--cml-soft-color-light);
      }

      .disabled {
        opacity: 0.3;
        cursor: not-allowed;
        box-shadow: none !important;
        pointer-events: none;
      }
    `
    ]; }
    _handleInput(e) {
        this.value = e.target.value;
        this.dispatchEvent(new CustomEvent('change', {
            detail: { value: this.value },
            bubbles: true,
            composed: true
        }));
    }
    render() {
        return html `
      <div class="container ${this.disabled ? 'disabled' : ''}">
        ${this.label ? html `<camelot-label .text="${this.label}" .color="${this.color}" .for="input"></camelot-label>` : ''}
        <input 
          id="input"
          .value=${this.value}
          placeholder=${this.placeholder}
          ?disabled=${this.disabled}
          @input=${this._handleInput}
        />
      </div>
    `;
    }
};
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], CamelotSoftInput.prototype, "label", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], CamelotSoftInput.prototype, "value", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], CamelotSoftInput.prototype, "placeholder", void 0);
CamelotSoftInput = __decorate([
    customElement('camelot-soft-input')
], CamelotSoftInput);
export { CamelotSoftInput };
//# sourceMappingURL=CamelotSoftInput.js.map