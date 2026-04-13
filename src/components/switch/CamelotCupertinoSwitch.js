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
let CamelotCupertinoSwitch = class CamelotCupertinoSwitch extends LitElement {
    constructor() {
        super(...arguments);
        this.checked = false;
        this.disabled = false;
        this.color = 'primary';
    }
    static { this.styles = css `
    :host {
      display: inline-block;
    }

    .switch {
      position: relative;
      width: 51px;
      height: 31px;
      background-color: rgba(120, 120, 128, 0.16);
      border-radius: 15.5px;
      cursor: pointer;
      transition: background-color 0.3s;
    }

    .switch.checked {
      background-color: #34C759; /* iOS Standard Green */
    }
    .switch.checked.primary { background-color: var(--cml-color-primary); }
    .switch.checked.secondary { background-color: var(--cml-color-secondary); }
    .switch.checked.tertiary { background-color: var(--cml-color-tertiary); }

    .thumb {
      position: absolute;
      top: 2px;
      left: 2px;
      width: 27px;
      height: 27px;
      background-color: #FFFFFF;
      border-radius: 50%;
      box-shadow: 0 3px 8px rgba(0, 0, 0, 0.15), 0 3px 1px rgba(0, 0, 0, 0.06);
      transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .switch.checked .thumb {
      transform: translateX(20px);
    }

    .switch.disabled {
      cursor: not-allowed;
      opacity: 0.3;
      filter: grayscale(1);
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
], CamelotCupertinoSwitch.prototype, "checked", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Boolean)
], CamelotCupertinoSwitch.prototype, "disabled", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], CamelotCupertinoSwitch.prototype, "color", void 0);
CamelotCupertinoSwitch = __decorate([
    customElement('camelot-cupertino-switch')
], CamelotCupertinoSwitch);
export { CamelotCupertinoSwitch };
//# sourceMappingURL=CamelotCupertinoSwitch.js.map