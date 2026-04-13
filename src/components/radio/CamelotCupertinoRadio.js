var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import '../label/CamelotLabel';
let CamelotCupertinoRadio = class CamelotCupertinoRadio extends LitElement {
    constructor() {
        super(...arguments);
        this.checked = false;
        this.disabled = false;
        this.label = '';
        this.color = 'primary';
    }
    static { this.styles = css `
    :host {
      display: inline-block;
      cursor: pointer;
    }

    .container {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 4px;
      min-height: 32px;
      box-sizing: border-box;
    }

    .radio-circle {
      width: 22px;
      height: 22px;
      border: 1px solid rgba(0, 0, 0, 0.15);
      border-radius: 50%;
      background-color: #FFFFFF;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.2s;
      box-sizing: border-box;
      flex-shrink: 0;
    }

    .checked .radio-circle {
      background-color: var(--cml-color-primary);
      border-color: var(--cml-color-primary);
    }
    .checked.secondary .radio-circle { background-color: var(--cml-color-secondary); border-color: var(--cml-color-secondary); }
    .checked.tertiary .radio-circle { background-color: var(--cml-color-tertiary); border-color: var(--cml-color-tertiary); }

    .radio-inner {
      width: 8px;
      height: 8px;
      background-color: #FFFFFF;
      border-radius: 50%;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
      transform: scale(0);
      transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .checked .radio-inner {
      transform: scale(1);
    }

    .disabled {
      cursor: not-allowed;
      opacity: 0.3;
      pointer-events: none;
    }
  `; }
    _toggle() {
        if (this.disabled || this.checked)
            return;
        this.checked = true;
        this.dispatchEvent(new CustomEvent('change', {
            detail: { checked: this.checked },
            bubbles: true,
            composed: true
        }));
    }
    render() {
        return html `
      <div 
        class="container ${this.checked ? 'checked' : ''} ${this.disabled ? 'disabled' : ''} ${this.color}"
        @click="${this._toggle}"
      >
        <div class="radio-circle">
          <div class="radio-inner"></div>
        </div>
        ${this.label ? html `<camelot-label .text="${this.label}" .color="${this.color}"></camelot-label>` : ''}
      </div>
    `;
    }
};
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Boolean)
], CamelotCupertinoRadio.prototype, "checked", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Boolean)
], CamelotCupertinoRadio.prototype, "disabled", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], CamelotCupertinoRadio.prototype, "label", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], CamelotCupertinoRadio.prototype, "color", void 0);
CamelotCupertinoRadio = __decorate([
    customElement('camelot-cupertino-radio')
], CamelotCupertinoRadio);
export { CamelotCupertinoRadio };
//# sourceMappingURL=CamelotCupertinoRadio.js.map