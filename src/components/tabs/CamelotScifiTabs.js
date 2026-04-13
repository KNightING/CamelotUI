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
import { CamelotScifiBase } from '../scifi/CamelotScifiBase';
import '../scifi/CamelotScifiFrame';
/**
 * <CamelotScifiTabs>
 * 日系科幻風格 (Sci-fi HUD) 的分頁元件實作。
 * 已優化：使用 CamelotScifiBase 與 CamelotScifiFrame。
 */
let CamelotScifiTabs = class CamelotScifiTabs extends CamelotScifiBase {
    constructor() {
        super(...arguments);
        this.items = [];
        this.value = '';
    }
    static { this.styles = [
        css `
      :host {
        display: block;
        width: 100%;
      }
      .tabs-container {
        display: flex;
        gap: 8px;
        border-bottom: 1px solid color-mix(in srgb, var(--cml-scifi-color) 20%, transparent);
        padding-bottom: 4px;
      }
      .tab-item {
        cursor: pointer;
        padding: 6px 16px;
        transition: all 0.2s ease;
        min-width: 100px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .tab-label {
        font-family: var(--cml-font-family-mono, monospace);
        font-size: 0.85rem;
        font-weight: bold;
        color: var(--cml-color-on-surface);
        text-transform: uppercase;
        letter-spacing: 1px;
        transition: color 0.2s ease;
      }
      .tab-wrapper:hover camelot-scifi-frame {
        --cml-scifi-bg-opacity: 15%;
      }
      .tab-item[active] .tab-label {
        color: var(--cml-color-on-primary, #fff);
      }
      :host([color="primary"]) .tab-item[active] .tab-label { color: var(--cml-color-on-primary); }
      :host([color="secondary"]) .tab-item[active] .tab-label { color: var(--cml-color-on-secondary); }
      :host([color="tertiary"]) .tab-item[active] .tab-label { color: var(--cml-color-on-tertiary); }
    `
    ]; }
    _select(val) {
        if (this.disabled)
            return;
        this.value = val;
        this.dispatchEvent(new CustomEvent('change', {
            detail: { value: val },
            bubbles: true,
            composed: true
        }));
    }
    render() {
        return html `
      <div class="tabs-container">
        ${this.items.map(item => {
            const isActive = this.value === item.value;
            return html `
            <div class="tab-wrapper" @click="${() => this._select(item.value)}">
              <camelot-scifi-frame
                .color="${this.color}"
                ?filled="${isActive}"
                ?showGrid="${false}"
                ?showScanline="${isActive}"
              >
                <div class="tab-item" ?active="${isActive}">
                  <span class="tab-label">${item.label}</span>
                </div>
              </camelot-scifi-frame>
            </div>
          `;
        })}
      </div>
    `;
    }
};
__decorate([
    property({ type: Array }),
    __metadata("design:type", Array)
], CamelotScifiTabs.prototype, "items", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", Object)
], CamelotScifiTabs.prototype, "value", void 0);
CamelotScifiTabs = __decorate([
    customElement('camelot-scifi-tabs-impl')
], CamelotScifiTabs);
export { CamelotScifiTabs };
//# sourceMappingURL=CamelotScifiTabs.js.map