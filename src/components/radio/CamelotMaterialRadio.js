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
let CamelotMaterialRadio = class CamelotMaterialRadio extends LitElement {
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
      padding: 4px 8px;
      min-height: 32px;
      box-sizing: border-box;
    }

    .radio-outer {
      position: relative;
      width: 20px;
      height: 20px;
      border: 2px solid var(--cml-color-outline);
      border-radius: 50%;
      transition: border-color 0.2s;
      display: flex;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      flex-shrink: 0;
    }

    .checked .radio-outer {
      border-color: var(--cml-color-primary);
    }
    .checked.secondary .radio-outer { border-color: var(--cml-color-secondary); }
    .checked.tertiary .radio-outer { border-color: var(--cml-color-tertiary); }

    .radio-inner {
      width: 10px;
      height: 10px;
      background-color: var(--cml-color-primary);
      border-radius: 50%;
      transform: scale(0);
      transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    }
    .checked .radio-inner {
      transform: scale(1);
    }
    .checked.secondary .radio-inner { background-color: var(--cml-color-secondary); }
    .checked.tertiary .radio-inner { background-color: var(--cml-color-tertiary); }

    .disabled {
      cursor: not-allowed;
      opacity: 0.38;
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
        <div class="radio-outer">
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
], CamelotMaterialRadio.prototype, "checked", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Boolean)
], CamelotMaterialRadio.prototype, "disabled", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], CamelotMaterialRadio.prototype, "label", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], CamelotMaterialRadio.prototype, "color", void 0);
CamelotMaterialRadio = __decorate([
    customElement('camelot-material-radio')
], CamelotMaterialRadio);
export { CamelotMaterialRadio };
//# sourceMappingURL=CamelotMaterialRadio.js.map