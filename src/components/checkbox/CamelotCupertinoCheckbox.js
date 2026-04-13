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
let CamelotCupertinoCheckbox = class CamelotCupertinoCheckbox extends LitElement {
    constructor() {
        super(...arguments);
        this.label = '';
        this.checked = false;
        this.disabled = false;
        this.color = 'primary';
        /**
         * 勾選框形狀：'square' (預設，圓角正方形) 或 'circle' (圓形)
         */
        this.shape = 'square';
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
      width: 22px;
      height: 22px;
      border: 1px solid var(--cml-color-outline-variant);
      margin-right: 8px;
      transition: background-color 0.2s, border-color 0.2s, border-radius 0.2s;
      display: flex;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
    }

    /* Shape options */
    .shape-square {
      border-radius: 5px; /* iOS standard rounded square */
    }
    .shape-circle {
      border-radius: 50%;
    }

    /* Checked style with color variations */
    .checked.primary .checkbox-container { background-color: var(--cml-color-primary); border-color: var(--cml-color-primary); }
    .checked.secondary .checkbox-container { background-color: var(--cml-color-secondary); border-color: var(--cml-color-secondary); }
    .checked.tertiary .checkbox-container { background-color: var(--cml-color-tertiary); border-color: var(--cml-color-tertiary); }

    .check-icon {
      width: 10px;
      height: 6px;
      border-left: 2px solid white;
      border-bottom: 2px solid white;
      transform: rotate(-45deg) translateY(-1px);
      opacity: 0;
      transition: opacity 0.2s;
    }

    .checked .check-icon {
      opacity: 1;
    }

    .disabled {
      opacity: 0.4;
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
        <div class="checkbox-container shape-${this.shape}">
          <div class="check-icon"></div>
        </div>
        ${this.label ? html `<camelot-label .text="${this.label}" .color="${this.color}"></camelot-label>` : ''}
      </div>
    `;
    }
};
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], CamelotCupertinoCheckbox.prototype, "label", void 0);
__decorate([
    property({ type: Boolean, reflect: true }),
    __metadata("design:type", Boolean)
], CamelotCupertinoCheckbox.prototype, "checked", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Boolean)
], CamelotCupertinoCheckbox.prototype, "disabled", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], CamelotCupertinoCheckbox.prototype, "color", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], CamelotCupertinoCheckbox.prototype, "shape", void 0);
CamelotCupertinoCheckbox = __decorate([
    customElement('camelot-cupertino-checkbox')
], CamelotCupertinoCheckbox);
export { CamelotCupertinoCheckbox };
//# sourceMappingURL=CamelotCupertinoCheckbox.js.map