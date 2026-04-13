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
// 確保風格元件已載入
import './CamelotMaterialTabs';
import './CamelotCupertinoTabs';
import './CamelotSoftTabs';
import './CamelotScifiTabs';
/**
 * <CamelotTabs>
 * 通用分頁標籤容器，由主題切換風格。
 * 繼承自 CamelotBaseElement 以獲取自動風格偵測能力。
 */
let CamelotTabs = class CamelotTabs extends CamelotBaseElement {
    constructor() {
        super(...arguments);
        /**
         * 分頁項目清單：Array<{ label: string, value: string }>
         */
        this.items = [];
        /**
         * 當前的選取值
         */
        this.value = '';
        /**
         * 標籤色彩：'primary', 'secondary', 'tertiary'
         */
        this.color = 'primary';
    }
    _handleChanged(e) {
        this.value = e.detail.value;
        this.dispatchEvent(new CustomEvent('change', {
            detail: { value: this.value },
            bubbles: true,
            composed: true
        }));
    }
    render() {
        switch (this._activeStyle) {
            case 'scifi':
                return html `
          <camelot-scifi-tabs-impl
            .items=${this.items}
            .value=${this.value}
            .color=${this.color}
            @change=${this._handleChanged}
          ></camelot-scifi-tabs-impl>
        `;
            case 'soft':
                return html `
          <camelot-soft-tabs 
            .items=${this.items}
            .value=${this.value}
            .color=${this.color}
            @change=${this._handleChanged}
          ></camelot-soft-tabs>
        `;
            case 'cupertino':
                return html `
          <camelot-cupertino-tabs 
            .items=${this.items}
            .value=${this.value}
            .color=${this.color}
            @change=${this._handleChanged}
          ></camelot-cupertino-tabs>
        `;
            case 'material':
            default:
                return html `
          <camelot-material-tabs 
            .items=${this.items}
            .value=${this.value}
            .color=${this.color}
            @change=${this._handleChanged}
          ></camelot-material-tabs>
        `;
        }
    }
    static { this.styles = css `
    :host {
      display: block;
      width: 100%;
    }
  `; }
};
__decorate([
    property({ type: Array }),
    __metadata("design:type", Array)
], CamelotTabs.prototype, "items", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], CamelotTabs.prototype, "value", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], CamelotTabs.prototype, "color", void 0);
CamelotTabs = __decorate([
    customElement('camelot-tabs')
], CamelotTabs);
export { CamelotTabs };
//# sourceMappingURL=CamelotTabs.js.map