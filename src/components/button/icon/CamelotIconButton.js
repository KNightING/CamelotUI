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
import { CamelotBaseElement } from '../../base/CamelotBaseElement';
// 確保風格元件已載入
import './CamelotMaterialIconButton';
import './CamelotCupertinoIconButton';
import './CamelotSoftIconButton';
import './CamelotScifiIconButton';
/**
 * <CamelotIconButton>
 * 圖示按鈕元件，適合放置單一圖示。
 * 繼承自 CamelotBaseElement 以獲取自動風格偵測能力。
 */
let CamelotIconButton = class CamelotIconButton extends CamelotBaseElement {
    constructor() {
        super(...arguments);
        /**
         * 按鈕形狀：'circle', 'square'
         */
        this.shape = 'circle';
        this.disabled = false;
    }
    render() {
        switch (this._activeStyle) {
            case 'scifi':
                return html `
          <camelot-scifi-icon-button-impl
            .color=${this.color}
            .shape=${this.shape}
            ?disabled=${this.disabled}
            ?is-container=${this.isContainer}
          >
            <slot></slot>
          </camelot-scifi-icon-button-impl>
        `;
            case 'soft':
                return html `
          <camelot-soft-icon-button 
            .color=${this.color}
            .shape=${this.shape}
            ?disabled=${this.disabled}
            ?is-container=${this.isContainer}
          >
            <slot></slot>
          </camelot-soft-icon-button>
        `;
            case 'cupertino':
                return html `
          <camelot-cupertino-icon-button 
            .color=${this.color}
            .shape=${this.shape}
            ?disabled=${this.disabled}
            ?is-container=${this.isContainer}
          >
            <slot></slot>
          </camelot-cupertino-icon-button>
        `;
            case 'material':
            default:
                return html `
          <camelot-material-icon-button 
            .color=${this.color}
            .shape=${this.shape}
            ?disabled=${this.disabled}
            ?is-container=${this.isContainer}
          >
            <slot></slot>
          </camelot-material-icon-button>
        `;
        }
    }
    static { this.styles = css `
    :host {
      display: inline-block;
      vertical-align: middle;
    }
  `; }
};
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], CamelotIconButton.prototype, "shape", void 0);
__decorate([
    property({ type: Boolean, reflect: true }),
    __metadata("design:type", Boolean)
], CamelotIconButton.prototype, "disabled", void 0);
CamelotIconButton = __decorate([
    customElement('camelot-icon-button')
], CamelotIconButton);
export { CamelotIconButton };
//# sourceMappingURL=CamelotIconButton.js.map