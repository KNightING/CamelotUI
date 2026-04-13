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
let CamelotMaterialCheckbox = class CamelotMaterialCheckbox extends LitElement {
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

    .checkbox-container {
      position: relative;
      width: 18px;
      height: 18px;
      margin-right: 8px; /* Standard spacing for checkbox label */
      border: 2px solid var(--cml-color-outline);
      border-radius: 2px;
      transition: all 0.2s;
      display: flex;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
    }

    /* Checked style with color variations */
    .checked.primary .checkbox-container { background-color: var(--cml-color-primary); border-color: var(--cml-color-primary); }
    .checked.secondary .checkbox-container { background-color: var(--cml-color-secondary); border-color: var(--cml-color-secondary); }
    .checked.tertiary .checkbox-container { background-color: var(--cml-color-tertiary); border-color: var(--cml-color-tertiary); }

    .checkbox-container::after {
      content: '';
      width: 4px;
      height: 8px;
      border: solid white;
      border-width: 0 2px 2px 0;
      transform: rotate(45deg) translate(-1px, -1px);
      opacity: 0;
      transition: opacity 0.2s;
    }

    .checked .checkbox-container::after {
      opacity: 1;
    }

    camelot-label {
      /* Reset intrinsic margins when used alongside control */
      --cml-label-margin: 0;
    }

    .disabled {
      opacity: 0.38;
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
        class="${this.checked ? 'checked' : ''} ${this.disabled ? 'disabled' : ''} ${this.color}"
        style="display: flex; align-items: center;"
        @click="${this._toggle}"
      >
        <div class="checkbox-container"></div>
        ${this.label ? html `<camelot-label .text="${this.label}" .color="${this.color}"></camelot-label>` : ''}
      </div>
    `;
    }
};
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], CamelotMaterialCheckbox.prototype, "label", void 0);
__decorate([
    property({ type: Boolean, reflect: true }),
    __metadata("design:type", Boolean)
], CamelotMaterialCheckbox.prototype, "checked", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Boolean)
], CamelotMaterialCheckbox.prototype, "disabled", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], CamelotMaterialCheckbox.prototype, "color", void 0);
CamelotMaterialCheckbox = __decorate([
    customElement('camelot-material-checkbox')
], CamelotMaterialCheckbox);
export { CamelotMaterialCheckbox };
//# sourceMappingURL=CamelotMaterialCheckbox.js.map