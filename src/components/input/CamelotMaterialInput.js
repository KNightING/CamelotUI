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
import { customElement, property, state } from 'lit/decorators.js';
import { CamelotBaseElement } from '../base/CamelotBaseElement';
import '../label/CamelotLabel';
/**
 * <CamelotMaterialInput>
 * Material 3 風格的輸入框，具備 Floating Label 效果。
 */
let CamelotMaterialInput = class CamelotMaterialInput extends CamelotBaseElement {
    constructor() {
        super(...arguments);
        this.label = '';
        this.value = '';
        this.placeholder = '';
        this._focused = false;
    }
    static { this.styles = [
        css `
      :host {
        display: block;
      }

      .md-field {
        position: relative;
        background-color: var(--cml-color-current-bg-color);
        border-radius: 4px 4px 0 0;
        border-bottom: 1px solid var(--cml-color-outline);
        height: 56px;
        padding: 0 16px;
        display: flex;
        align-items: center;
        transition: all 0.2s;
      }

      .md-field:focus-within {
        border-bottom-width: 2px;
        border-bottom-color: var(--cml-color-current-color);
      }

      input {
        width: 100%;
        background: none;
        border: none;
        outline: none;
        padding: 20px 0 8px 0;
        font-size: 1rem;
        color: var(--cml-color-on-surface);
        caret-color: var(--cml-color-current-color);
      }
      
      input::placeholder {
        color: transparent;
        transition: color 0.1s;
      }
      
      input:focus::placeholder {
        color: var(--cml-color-on-surface-variant);
      }

      camelot-label {
        position: absolute;
        left: 16px;
        top: 18px;
        pointer-events: none;
        transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
      }

      .floating camelot-label {
        transform: translateY(-14px);
      }

      .disabled {
        opacity: 0.38;
        cursor: not-allowed;
        pointer-events: none;
      }
    `
    ]; }
    _handleFocus() {
        this._focused = true;
    }
    _handleBlur() {
        this._focused = false;
    }
    _handleInput(e) {
        this.value = e.target.value;
        this.dispatchEvent(new CustomEvent('change', {
            detail: { value: this.value },
            bubbles: true,
            composed: true
        }));
    }
    render() {
        const isFloating = this._focused || (this.value && this.value.length > 0);
        return html `
      <div class="md-field ${isFloating ? 'floating' : ''} ${this.disabled ? 'disabled' : ''}">
        <input 
          id="input"
          placeholder="${this.placeholder || ''}"
          .value=${this.value}
          ?disabled=${this.disabled}
          @focus=${this._handleFocus}
          @blur=${this._handleBlur}
          @input=${this._handleInput}
        />
        ${this.label ? html `<camelot-label .text="${this.label}" .color="${isFloating ? this.color : 'outline'}" .for="input"></camelot-label>` : ''}
      </div>
    `;
    }
};
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], CamelotMaterialInput.prototype, "label", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], CamelotMaterialInput.prototype, "value", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], CamelotMaterialInput.prototype, "placeholder", void 0);
__decorate([
    state(),
    __metadata("design:type", Object)
], CamelotMaterialInput.prototype, "_focused", void 0);
CamelotMaterialInput = __decorate([
    customElement('camelot-material-input')
], CamelotMaterialInput);
export { CamelotMaterialInput };
//# sourceMappingURL=CamelotMaterialInput.js.map