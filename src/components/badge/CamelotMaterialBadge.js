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
let CamelotMaterialBadge = class CamelotMaterialBadge extends LitElement {
    constructor() {
        super(...arguments);
        this.label = '';
        this.color = 'primary';
        this.variant = 'filled';
    }
    static { this.styles = css `
    :host {
      display: inline-block;
    }
    .badge {
      display: flex;
      align-items: center;
      padding: 2px 8px;
      border-radius: 6px;
      font-family: var(--cml-font-family);
      font-size: 0.6875rem;
      font-weight: var(--cml-font-weight-medium);
      white-space: nowrap;
      transition: all 0.2s;
    }

    /* Filled Styles */
    .filled.primary { background-color: var(--cml-color-primary-container); color: var(--cml-color-on-primary-container); }
    .filled.secondary { background-color: var(--cml-color-secondary-container); color: var(--cml-color-on-secondary-container); }
    .filled.tertiary { background-color: var(--cml-color-tertiary-container); color: var(--cml-color-on-tertiary-container); }
    .filled.error { background-color: var(--cml-color-error-container); color: var(--cml-color-on-error-container); }
    .filled.success { background-color: #C1E1C1; color: #1E4D2B; }

    /* Outlined Styles */
    .outlined {
      background-color: transparent;
      border: 1px solid currentColor;
    }
    .outlined.primary { color: var(--cml-color-primary); border-color: var(--cml-color-outline); }
    .outlined.secondary { color: var(--cml-color-secondary); border-color: var(--cml-color-outline); }
    .outlined.tertiary { color: var(--cml-color-tertiary); border-color: var(--cml-color-outline); }
    .outlined.error { color: var(--cml-color-error); border-color: var(--cml-color-error); }
    .outlined.success { color: #2E7D32; border-color: #2E7D32; }
  `; }
    render() {
        return html `<div class="badge ${this.variant} ${this.color}">${this.label}</div>`;
    }
};
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], CamelotMaterialBadge.prototype, "label", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], CamelotMaterialBadge.prototype, "color", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], CamelotMaterialBadge.prototype, "variant", void 0);
CamelotMaterialBadge = __decorate([
    customElement('camelot-material-badge')
], CamelotMaterialBadge);
export { CamelotMaterialBadge };
//# sourceMappingURL=CamelotMaterialBadge.js.map