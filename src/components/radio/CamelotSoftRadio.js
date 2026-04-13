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
let CamelotSoftRadio = class CamelotSoftRadio extends LitElement {
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
      padding: 6px 10px;
      min-height: 40px;
      box-sizing: border-box;
    }

    .radio-outer {
      width: 24px;
      height: 24px;
      background-color: var(--cml-color-background);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 
        inset var(--cml-soft-distance) var(--cml-soft-distance) var(--cml-soft-blur) var(--cml-soft-color-dark), 
        inset calc(-1 * var(--cml-soft-distance)) calc(-1 * var(--cml-soft-distance)) var(--cml-soft-blur) var(--cml-soft-color-light);
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      flex-shrink: 0;
    }

    .radio-inner {
      width: 12px;
      height: 12px;
      background-color: var(--cml-color-background);
      border-radius: 50%;
      transform: scale(0);
      transition: transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }

    .checked .radio-inner {
      transform: scale(1);
      box-shadow: 
        3px 3px 6px var(--cml-soft-color-dark), 
        -3px -3px 6px var(--cml-soft-color-light);
    }

    /* Soft Radio Tints */
    .primary .radio-inner { background-color: var(--cml-color-primary); }
    .secondary .radio-inner { background-color: var(--cml-color-secondary); }
    .tertiary .radio-inner { background-color: var(--cml-color-tertiary); }

    .disabled {
      cursor: not-allowed;
      opacity: 0.3;
      box-shadow: none !important;
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
], CamelotSoftRadio.prototype, "checked", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Boolean)
], CamelotSoftRadio.prototype, "disabled", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], CamelotSoftRadio.prototype, "label", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], CamelotSoftRadio.prototype, "color", void 0);
CamelotSoftRadio = __decorate([
    customElement('camelot-soft-radio')
], CamelotSoftRadio);
export { CamelotSoftRadio };
//# sourceMappingURL=CamelotSoftRadio.js.map