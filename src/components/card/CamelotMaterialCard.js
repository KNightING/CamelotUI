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
let CamelotMaterialCard = class CamelotMaterialCard extends LitElement {
    constructor() {
        super(...arguments);
        this.padding = '16px';
    }
    static { this.styles = css `
    :host {
      display: block;
      background-color: var(--cml-color-surface);
      border-radius: var(--cml-radius-m);
      border: 1px solid var(--cml-color-outline-variant);
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
      overflow: hidden;
    }

    .content {
      padding: var(--padding, 16px);
    }
  `; }
    render() {
        return html `
      <div class="content" style="--padding: ${this.padding}">
        <slot></slot>
      </div>
    `;
    }
};
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], CamelotMaterialCard.prototype, "padding", void 0);
CamelotMaterialCard = __decorate([
    customElement('camelot-material-card')
], CamelotMaterialCard);
export { CamelotMaterialCard };
//# sourceMappingURL=CamelotMaterialCard.js.map