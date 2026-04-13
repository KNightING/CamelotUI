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
let CamelotSoftCheckbox = class CamelotSoftCheckbox extends LitElement {
    constructor() {
        super(...arguments);
        this.label = '';
        this.checked = false;
        this.disabled = false;
        this.color = 'primary';
    }
    static { this.styles = css `
    :host {
      display: inline-flex;
      align-items: center;
      cursor: pointer;
      user-select: none;
    }

    .container {
      display: flex;
      align-items: center;
    }

    .checkbox-container {
      width: 24px;
      height: 24px;
      border-radius: 6px;
      background: var(--cml-color-background);
      margin-right: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 
        inset var(--cml-soft-distance) var(--cml-soft-distance) var(--cml-soft-blur) var(--cml-soft-color-dark), 
        inset calc(-1 * var(--cml-soft-distance)) calc(-1 * var(--cml-soft-distance)) var(--cml-soft-blur) var(--cml-soft-color-light);
      transition: all 0.2s;
    }

    .checked .checkbox-container {
      box-shadow: 
        var(--cml-soft-distance) var(--cml-soft-distance) var(--cml-soft-blur) var(--cml-soft-color-dark), 
        calc(-1 * var(--cml-soft-distance)) calc(-1 * var(--cml-soft-distance)) var(--cml-soft-blur) var(--cml-soft-color-light);
    }

    .check-mark {
      width: 12px;
      height: 12px;
      border-radius: 2px;
      opacity: 0;
      transform: scale(0.5);
      transition: all 0.2s;
    }

    /* Colors for check-mark */
    .primary .check-mark { background-color: var(--cml-color-primary); }
    .secondary .check-mark { background-color: var(--cml-color-secondary); }
    .tertiary .check-mark { background-color: var(--cml-color-tertiary); }

    .checked .check-mark {
      opacity: 1;
      transform: scale(1);
    }

    .disabled {
      opacity: 0.5;
      cursor: not-allowed;
      pointer-events: none;
    }
  `; }
    _toggle() {
        if (this.disabled)
            return;
        this.checked = !this.checked;
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
        <div class="checkbox-container">
          <div class="check-mark"></div>
        </div>
        ${this.label ? html `<camelot-label .text="${this.label}" .color="${this.color}"></camelot-label>` : ''}
      </div>
    `;
    }
};
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], CamelotSoftCheckbox.prototype, "label", void 0);
__decorate([
    property({ type: Boolean, reflect: true }),
    __metadata("design:type", Boolean)
], CamelotSoftCheckbox.prototype, "checked", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Boolean)
], CamelotSoftCheckbox.prototype, "disabled", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], CamelotSoftCheckbox.prototype, "color", void 0);
CamelotSoftCheckbox = __decorate([
    customElement('camelot-soft-checkbox')
], CamelotSoftCheckbox);
export { CamelotSoftCheckbox };
//# sourceMappingURL=CamelotSoftCheckbox.js.map