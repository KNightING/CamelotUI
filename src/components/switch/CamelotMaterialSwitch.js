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
let CamelotMaterialSwitch = class CamelotMaterialSwitch extends LitElement {
    constructor() {
        super(...arguments);
        this.checked = false;
        this.disabled = false;
        this.color = 'primary';
    }
    static { this.styles = css `
    :host {
      display: inline-block;
      width: 52px;
      height: 32px;
    }

    .switch {
      position: relative;
      width: 52px;
      height: 32px;
      background-color: var(--cml-color-surface-variant);
      border: 2px solid var(--cml-color-outline);
      border-radius: 16px;
      cursor: pointer;
      transition: all 0.2s;
    }

    .switch.checked {
      background-color: var(--cml-color-primary);
      border-color: var(--cml-color-primary);
    }
    .switch.checked.secondary { background-color: var(--cml-color-secondary); border-color: var(--cml-color-secondary); }
    .switch.checked.tertiary { background-color: var(--cml-color-tertiary); border-color: var(--cml-color-tertiary); }

    .thumb {
      position: absolute;
      top: 50%;
      left: 4px;
      width: 16px;
      height: 16px;
      background-color: var(--cml-color-outline);
      border-radius: 50%;
      transform: translateY(-50%);
      transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .switch.checked .thumb {
      left: 28px;
      width: 24px;
      height: 24px;
      background-color: var(--cml-color-on-primary);
    }
    .switch.checked.secondary .thumb { background-color: var(--cml-color-on-secondary); }
    .switch.checked.tertiary .thumb { background-color: var(--cml-color-on-tertiary); }

    .switch.disabled {
      cursor: not-allowed;
      opacity: 0.38;
      background-color: rgba(0,0,0,0.12);
      border-color: rgba(0,0,0,0.12);
    }
  `; }
    _toggle() {
        if (this.disabled)
            return;
        this.checked = !this.checked;
        this.dispatchEvent(new CustomEvent('change', {
            detail: { checked: this.checked }
        }));
    }
    render() {
        return html `
      <div 
        class="switch ${this.checked ? 'checked' : ''} ${this.disabled ? 'disabled' : ''} ${this.color}"
        @click="${this._toggle}"
      >
        <div class="thumb"></div>
      </div>
    `;
    }
};
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Boolean)
], CamelotMaterialSwitch.prototype, "checked", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Boolean)
], CamelotMaterialSwitch.prototype, "disabled", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], CamelotMaterialSwitch.prototype, "color", void 0);
CamelotMaterialSwitch = __decorate([
    customElement('camelot-material-switch')
], CamelotMaterialSwitch);
export { CamelotMaterialSwitch };
//# sourceMappingURL=CamelotMaterialSwitch.js.map