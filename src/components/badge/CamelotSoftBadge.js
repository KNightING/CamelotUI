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
let CamelotSoftBadge = class CamelotSoftBadge extends LitElement {
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
      padding: 4px 14px;
      border-radius: 999px;
      font-family: var(--cml-font-family);
      font-size: 0.6875rem;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      background: var(--cml-color-background);
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      white-space: nowrap;
    }

    /* Filled - Classic Neumorphism */
    .filled {
      box-shadow: 
        var(--cml-soft-distance) var(--cml-soft-distance) var(--cml-soft-blur) var(--cml-soft-color-dark), 
        calc(-1 * var(--cml-soft-distance)) calc(-1 * var(--cml-soft-distance)) var(--cml-soft-blur) var(--cml-soft-color-light);
    }

    /* Outlined - Subtle Inset or Border */
    .outlined {
      border: 1px solid rgba(0, 0, 0, 0.05);
      box-shadow: 
        inset calc(var(--cml-soft-distance)/2) calc(var(--cml-soft-distance)/2) calc(var(--cml-soft-blur)/2) var(--cml-soft-color-dark), 
        inset calc(-1 * var(--cml-soft-distance)/2) calc(-1 * var(--cml-soft-distance)/2) calc(var(--cml-soft-blur)/2) var(--cml-soft-color-light);
    }

    .primary { color: var(--cml-color-primary); }
    .secondary { color: var(--cml-color-secondary); }
    .tertiary { color: var(--cml-color-tertiary); }
    .error { color: #FF3B30; }
    .success { color: #34C759; }
  `; }
    render() {
        return html `<div class="badge ${this.variant} ${this.color}">${this.label}</div>`;
    }
};
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], CamelotSoftBadge.prototype, "label", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], CamelotSoftBadge.prototype, "color", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], CamelotSoftBadge.prototype, "variant", void 0);
CamelotSoftBadge = __decorate([
    customElement('camelot-soft-badge')
], CamelotSoftBadge);
export { CamelotSoftBadge };
//# sourceMappingURL=CamelotSoftBadge.js.map