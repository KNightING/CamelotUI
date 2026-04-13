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
// 匯入樣式元件
import './CamelotMaterialBadge';
import './CamelotCupertinoBadge';
import './CamelotSoftBadge';
import './CamelotScifiBadge';
/**
 * <CamelotBadge>
 * 通用標籤元件，根據主題切換風格。
 * 繼承自 CamelotBaseElement 以獲取自動風格偵測能力。
 */
let CamelotBadge = class CamelotBadge extends CamelotBaseElement {
    constructor() {
        super(...arguments);
        this.label = '';
        this.color = 'primary';
        this.variant = 'filled';
    }
    static { this.styles = css `
    :host {
      display: inline-block;
      vertical-align: middle;
    }
  `; }
    render() {
        switch (this._activeStyle) {
            case 'scifi':
                return html `<camelot-scifi-badge-impl .label="${this.label}" .color="${this.color}" .variant="${this.variant}"></camelot-scifi-badge-impl>`;
            case 'cupertino':
                return html `<camelot-cupertino-badge .label="${this.label}" .color="${this.color}" .variant="${this.variant}"></camelot-cupertino-badge>`;
            case 'soft':
                return html `<camelot-soft-badge .label="${this.label}" .color="${this.color}" .variant="${this.variant}"></camelot-soft-badge>`;
            case 'material':
            default:
                return html `<camelot-material-badge .label="${this.label}" .color="${this.color}" .variant="${this.variant}"></camelot-material-badge>`;
        }
    }
};
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], CamelotBadge.prototype, "label", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], CamelotBadge.prototype, "color", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], CamelotBadge.prototype, "variant", void 0);
CamelotBadge = __decorate([
    customElement('camelot-badge')
], CamelotBadge);
export { CamelotBadge };
//# sourceMappingURL=CamelotBadge.js.map