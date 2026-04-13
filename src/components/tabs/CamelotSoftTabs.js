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
let CamelotSoftTabs = class CamelotSoftTabs extends LitElement {
    constructor() {
        super(...arguments);
        this.items = [];
        this.value = '';
        this.color = 'primary';
    }
    static { this.styles = css `
    :host {
      display: block;
      padding: 6px;
    }

    .tabs-track {
      display: flex;
      position: relative;
      background-color: var(--cml-color-background);
      border-radius: 16px;
      padding: 4px;
      box-shadow: 
        inset 4px 4px 8px var(--cml-soft-color-dark), 
        inset -4px -4px 8px var(--cml-soft-color-light);
    }

    .tab-item {
      flex: 1;
      padding: 10px 12px;
      text-align: center;
      font-family: var(--cml-font-family);
      font-size: 0.875rem;
      font-weight: 500;
      color: var(--cml-color-on-background);
      cursor: pointer;
      z-index: 1;
      border: none;
      background: transparent;
      outline: none;
      transition: color 0.3s;
    }

    .tab-item.active {
      color: var(--cml-color-primary);
    }
    .active.primary { color: var(--cml-color-primary); }
    .active.secondary { color: var(--cml-color-secondary); }
    .active.tertiary { color: var(--cml-color-tertiary); }

    .selection-raised {
      position: absolute;
      top: 4px;
      bottom: 4px;
      background-color: var(--cml-color-background);
      border-radius: 12px;
      box-shadow: 
        4px 4px 8px var(--cml-soft-color-dark), 
        -4px -4px 8px var(--cml-soft-color-light);
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }
  `; }
    _select(val) {
        this.value = val;
        this.dispatchEvent(new CustomEvent('change', {
            detail: { value: val }
        }));
    }
    render() {
        const activeIndex = this.items.findIndex(i => i.value === this.value);
        const tabWidth = 100 / this.items.length;
        const pillPos = activeIndex * tabWidth;
        return html `
      <div class="tabs-track ${this.color}">
        <div 
          class="selection-raised" 
          style="width: calc(${tabWidth}% - 8px); left: calc(${pillPos}% + 4px)"
        ></div>
        ${this.items.map(item => html `
          <button 
            class="tab-item ${this.value === item.value ? 'active' : ''}"
            @click="${() => this._select(item.value)}"
          >
            ${item.label}
          </button>
        `)}
      </div>
    `;
    }
};
__decorate([
    property({ type: Array }),
    __metadata("design:type", Array)
], CamelotSoftTabs.prototype, "items", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], CamelotSoftTabs.prototype, "value", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], CamelotSoftTabs.prototype, "color", void 0);
CamelotSoftTabs = __decorate([
    customElement('camelot-soft-tabs')
], CamelotSoftTabs);
export { CamelotSoftTabs };
//# sourceMappingURL=CamelotSoftTabs.js.map