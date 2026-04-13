var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { CamelotBaseElement } from '../base/CamelotBaseElement';
/**
 * <CamelotLabel>
 * 統一標籤元件。整合了 Material, Cupertino, Soft UI 的樣式邏輯。
 * 不再區分多個實作檔案，提升維護性與效能。
 */
let CamelotLabel = class CamelotLabel extends CamelotBaseElement {
    constructor() {
        super(...arguments);
        this.text = '';
        this.color = 'primary';
        this.required = false;
        this.for = '';
    }
    static { this.styles = css `
    :host {
      display: inline-block;
      vertical-align: middle;
    }

    label {
      display: flex;
      align-items: center;
      font-family: var(--cml-font-family);
      font-size: 0.875rem;
      font-weight: 500;
      line-height: 1.25;
      color: var(--cml-color-on-surface-variant);
      margin-left: 8px;
      transition: color 0.25s cubic-bezier(0.4, 0, 0.2, 1);
      cursor: pointer;
      user-select: none;
    }

    /* Style Specific Overrides */
    :host([data-style="material"]) label {
      font-size: 0.75rem;
      margin-left: 4px;
    }

    :host([data-style="cupertino"]) label {
      font-size: 0.8125rem;
      margin-left: 12px;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }

    :host([data-style="soft"]) label {
      font-size: 0.875rem;
      margin-left: 8px;
      color: var(--cml-color-on-background);
    }

    /* Color variations */
    .primary { color: var(--cml-color-primary); }
    .secondary { color: var(--cml-color-secondary); }
    .tertiary { color: var(--cml-color-tertiary); }

    .required::after {
      content: '*';
      color: var(--cml-color-error);
      margin-left: 4px;
    }
  `; }
    updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has('_activeStyle')) {
            this.setAttribute('data-style', this._activeStyle);
        }
    }
    render() {
        return html `
      <label for="${this.for}" class="${this.required ? 'required' : ''} ${this.color}">
        ${this.text}
      </label>
    `;
    }
};
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], CamelotLabel.prototype, "text", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], CamelotLabel.prototype, "color", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Boolean)
], CamelotLabel.prototype, "required", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], CamelotLabel.prototype, "for", void 0);
CamelotLabel = __decorate([
    customElement('camelot-label')
], CamelotLabel);
export { CamelotLabel };
//# sourceMappingURL=CamelotLabel.js.map