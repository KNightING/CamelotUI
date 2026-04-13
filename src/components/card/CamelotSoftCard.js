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
let CamelotSoftCard = class CamelotSoftCard extends LitElement {
    constructor() {
        super(...arguments);
        this.padding = '16px';
    }
    static { this.styles = css `
    :host {
      display: block;
      background-color: var(--cml-color-background);
      border-radius: var(--cml-radius-m);
      box-shadow: 
        var(--cml-soft-distance) var(--cml-soft-distance) var(--cml-soft-blur) var(--cml-soft-color-dark), 
        calc(-1 * var(--cml-soft-distance)) calc(-1 * var(--cml-soft-distance)) var(--cml-soft-blur) var(--cml-soft-color-light);
      overflow: hidden;
      transition: box-shadow 0.3s;
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
], CamelotSoftCard.prototype, "padding", void 0);
CamelotSoftCard = __decorate([
    customElement('camelot-soft-card')
], CamelotSoftCard);
export { CamelotSoftCard };
//# sourceMappingURL=CamelotSoftCard.js.map