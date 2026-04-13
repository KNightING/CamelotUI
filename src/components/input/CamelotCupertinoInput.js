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
 * <CamelotCupertinoInput>
 * iOS 風格的輸入框，具備 Apple 設計語言的標籤。
 */
let CamelotCupertinoInput = class CamelotCupertinoInput extends CamelotBaseElement {
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
        gap: 6px;
      }

      input {
        font-family: var(--cml-font-family);
        font-size: 1.0625rem;
        padding: 12px 16px;
        border: none;
        border-radius: 10px;
        background-color: var(--cml-color-current-bg-color);
        color: var(--cml-color-on-surface);
        outline: none;
        transition: all 0.2s ease-in-out;
      }

      input:focus {
        background-color: var(--cml-color-surface);
        box-shadow: inset 0 0 0 1px var(--cml-color-current-color);
      }

      .disabled {
        opacity: 0.3;
        cursor: not-allowed;
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
], CamelotCupertinoInput.prototype, "label", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], CamelotCupertinoInput.prototype, "value", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], CamelotCupertinoInput.prototype, "placeholder", void 0);
CamelotCupertinoInput = __decorate([
    customElement('camelot-cupertino-input')
], CamelotCupertinoInput);
export { CamelotCupertinoInput };
//# sourceMappingURL=CamelotCupertinoInput.js.map