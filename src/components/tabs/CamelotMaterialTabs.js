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
let CamelotMaterialTabs = class CamelotMaterialTabs extends LitElement {
    constructor() {
        super(...arguments);
        this.items = [];
        this.value = '';
        this.color = 'primary';
    }
    static { this.styles = css `
    :host {
      display: block;
      border-bottom: 1px solid var(--cml-color-outline-variant);
    }

    .tabs-container {
      display: flex;
      position: relative;
      background-color: var(--cml-color-surface);
    }

    .tab-item {
      flex: 1;
      padding: 14px 16px;
      text-align: center;
      font-family: var(--cml-font-family);
      font-size: var(--cml-font-size-label);
      font-weight: 500;
      color: var(--cml-color-on-surface-variant);
      cursor: pointer;
      position: relative;
      transition: color 0.2s;
      outline: none;
      border: none;
      background: transparent;
    }

    .tab-item:hover {
      background-color: rgba(0, 0, 0, 0.04);
    }

    .tab-item.active {
      color: var(--cml-color-primary);
    }
    .active.secondary { color: var(--cml-color-secondary); }
    .active.tertiary { color: var(--cml-color-tertiary); }

    .indicator-container {
      position: absolute;
      bottom: 0;
      height: 3px;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      display: flex;
      justify-content: center;
    }

    .indicator {
      width: 40px; /* M3 characteristic: indicator is shorter than tab */
      height: 100%;
      background-color: var(--cml-color-primary);
      border-top-left-radius: 3px;
      border-top-right-radius: 3px;
    }
    .secondary .indicator { background-color: var(--cml-color-secondary); }
    .tertiary .indicator { background-color: var(--cml-color-tertiary); }
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
        const indicatorPos = activeIndex * tabWidth;
        return html `
      <div class="tabs-container ${this.color}">
        ${this.items.map(item => html `
          <button 
            class="tab-item ${this.value === item.value ? 'active' : ''}"
            @click="${() => this._select(item.value)}"
          >
            ${item.label}
          </button>
        `)}
        <div 
          class="indicator-container" 
          style="width: ${tabWidth}%; left: ${indicatorPos}%"
        >
          <div class="indicator"></div>
        </div>
      </div>
    `;
    }
};
__decorate([
    property({ type: Array }),
    __metadata("design:type", Array)
], CamelotMaterialTabs.prototype, "items", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], CamelotMaterialTabs.prototype, "value", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], CamelotMaterialTabs.prototype, "color", void 0);
CamelotMaterialTabs = __decorate([
    customElement('camelot-material-tabs')
], CamelotMaterialTabs);
export { CamelotMaterialTabs };
//# sourceMappingURL=CamelotMaterialTabs.js.map