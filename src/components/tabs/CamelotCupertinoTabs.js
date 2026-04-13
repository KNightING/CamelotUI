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
let CamelotCupertinoTabs = class CamelotCupertinoTabs extends LitElement {
    constructor() {
        super(...arguments);
        this.items = [];
        this.value = '';
        this.color = 'primary';
    }
    static { this.styles = css `
    :host {
      display: block;
      padding: 4px;
    }

    .segmented-control {
      display: flex;
      position: relative;
      background-color: rgba(118, 118, 128, 0.12);
      border-radius: 9px;
      padding: 2px;
      user-select: none;
    }

    .tab-item {
      flex: 1;
      padding: 6px 4px;
      text-align: center;
      font-family: var(--cml-font-family);
      font-size: 0.8125rem;
      font-weight: 500;
      color: var(--cml-color-on-surface);
      cursor: pointer;
      z-index: 1;
      border: none;
      background: transparent;
      outline: none;
      transition: color 0.2s;
    }

    .tab-item.active {
      color: #000;
      font-weight: 600;
    }
    .active.primary { color: var(--cml-color-primary); }

    .selection-pill {
      position: absolute;
      top: 2px;
      bottom: 2px;
      background-color: #FFFFFF;
      border-radius: 7px;
      box-shadow: 0 3px 1px 0 rgba(0,0,0,0.04), 0 3px 8px 0 rgba(0,0,0,0.12);
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
      <div class="segmented-control ${this.color}">
        <div 
          class="selection-pill" 
          style="width: calc(${tabWidth}% - 4px); left: calc(${pillPos}% + 2px)"
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
], CamelotCupertinoTabs.prototype, "items", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], CamelotCupertinoTabs.prototype, "value", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], CamelotCupertinoTabs.prototype, "color", void 0);
CamelotCupertinoTabs = __decorate([
    customElement('camelot-cupertino-tabs')
], CamelotCupertinoTabs);
export { CamelotCupertinoTabs };
//# sourceMappingURL=CamelotCupertinoTabs.js.map