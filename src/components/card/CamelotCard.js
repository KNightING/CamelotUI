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
import './CamelotMaterialCard';
import './CamelotCupertinoCard';
import './CamelotSoftCard';
import './CamelotScifiCard';
/**
 * <CamelotCard>
 * 通用卡片容器元件，根據主題切換風格。
 * 繼承自 CamelotBaseElement 以獲取自動風格偵測能力。
 */
let CamelotCard = class CamelotCard extends CamelotBaseElement {
    constructor() {
        super(...arguments);
        /**
         * 卡片內部的間距 (Padding)
         */
        this.padding = '16px';
    }
    render() {
        switch (this._activeStyle) {
            case 'scifi':
                return html `
          <camelot-scifi-card-impl>
            <slot></slot>
          </camelot-scifi-card-impl>
        `;
            case 'soft':
                return html `
          <camelot-soft-card .padding=${this.padding}>
            <slot></slot>
          </camelot-soft-card>
        `;
            case 'cupertino':
                return html `
          <camelot-cupertino-card .padding=${this.padding}>
            <slot></slot>
          </camelot-cupertino-card>
        `;
            case 'material':
            default:
                return html `
          <camelot-material-card .padding=${this.padding}>
            <slot></slot>
          </camelot-material-card>
        `;
        }
    }
    static { this.styles = css `
    :host {
      display: block;
    }
  `; }
};
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], CamelotCard.prototype, "padding", void 0);
CamelotCard = __decorate([
    customElement('camelot-card')
], CamelotCard);
export { CamelotCard };
//# sourceMappingURL=CamelotCard.js.map