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
let CamelotSoftSwitch = class CamelotSoftSwitch extends LitElement {
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
      width: 56px;
      height: 30px;
      background-color: var(--cml-color-background);
      border-radius: 15px;
      cursor: pointer;
      box-shadow: 
        inset 4px 4px 8px var(--cml-soft-color-dark), 
        inset -4px -4px 8px var(--cml-soft-color-light);
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .switch.checked {
      background-color: var(--cml-color-background);
    }
    
    .switch.checked.primary { color: var(--cml-color-primary); }
    .switch.checked.secondary { color: var(--cml-color-secondary); }
    .switch.checked.tertiary { color: var(--cml-color-tertiary); }

    .thumb {
      position: absolute;
      top: 3px;
      left: 3px;
      width: 24px;
      height: 24px;
      background-color: var(--cml-color-background);
      border-radius: 50%;
      box-shadow: 
        3px 3px 6px var(--cml-soft-color-dark), 
        -3px -3px 6px var(--cml-soft-color-light);
      transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.3s;
    }

    .switch.checked .thumb {
      transform: translateX(26px);
      box-shadow: 
        2px 2px 4px var(--cml-soft-color-dark), 
        -2px -2px 4px var(--cml-soft-color-light);
    }

    /* Checked state tint dot */
    .thumb::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) scale(0);
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background-color: currentColor;
      transition: transform 0.2s 0.1s;
    }

    .switch.checked .thumb::after {
      transform: translate(-50%, -50%) scale(1);
    }

    .switch.disabled {
      cursor: not-allowed;
      opacity: 0.3;
      box-shadow: none !important;
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
], CamelotSoftSwitch.prototype, "checked", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Boolean)
], CamelotSoftSwitch.prototype, "disabled", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], CamelotSoftSwitch.prototype, "color", void 0);
CamelotSoftSwitch = __decorate([
    customElement('camelot-soft-switch')
], CamelotSoftSwitch);
export { CamelotSoftSwitch };
//# sourceMappingURL=CamelotSoftSwitch.js.map