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
let CamelotCupertinoBadge = class CamelotCupertinoBadge extends LitElement {
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
      padding: 2px 10px;
      border-radius: 999px;
      font-family: var(--cml-font-family);
      font-size: 0.8125rem;
      font-weight: 500;
      white-space: nowrap;
      transition: opacity 0.2s;
    }

    /* Apple Colors */
    .filled.primary { background-color: #007AFF; color: #FFFFFF; }
    .filled.secondary { background-color: #8E8E93; color: #FFFFFF; }
    .filled.tertiary { background-color: #5856D6; color: #FFFFFF; }
    .filled.error { background-color: #FF3B30; color: #FFFFFF; }
    .filled.success { background-color: #34C759; color: #FFFFFF; }

    .outlined {
      background-color: transparent;
      border: 1px solid currentColor;
    }
    .outlined.primary { color: #007AFF; }
    .outlined.secondary { color: #8E8E93; }
    .outlined.tertiary { color: #5856D6; }
    .outlined.error { color: #FF3B30; }
    .outlined.success { color: #34C759; }
  `; }
    render() {
        return html `<div class="badge ${this.variant} ${this.color}">${this.label}</div>`;
    }
};
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], CamelotCupertinoBadge.prototype, "label", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], CamelotCupertinoBadge.prototype, "color", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], CamelotCupertinoBadge.prototype, "variant", void 0);
CamelotCupertinoBadge = __decorate([
    customElement('camelot-cupertino-badge')
], CamelotCupertinoBadge);
export { CamelotCupertinoBadge };
//# sourceMappingURL=CamelotCupertinoBadge.js.map