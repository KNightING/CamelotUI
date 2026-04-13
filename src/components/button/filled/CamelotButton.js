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
import './CamelotMaterialFilledButton';
import './CamelotCupertinoFilledButton';
import './CamelotSoftFilledButton';
import './CamelotScifiFilledButton';
/**
 * <CamelotButton>
 * 通用實心按鈕元件 (Filled Button)，根據主題切換風格。
 */
let CamelotButton = class CamelotButton extends CamelotBaseElement {
    constructor() {
        super(...arguments);
        this.label = 'Button';
        this.disabled = false;
        this.color = 'primary';
    }
    render() {
        switch (this._activeStyle) {
            case 'scifi':
                return html `
          <camelot-scifi-filled-button 
            .label=${this.label} 
            .color=${this.color}
            ?disabled=${this.disabled}
            .isContainer=${this.isContainer}
          >
            <slot></slot>
          </camelot-scifi-filled-button>
        `;
            case 'soft':
                return html `
          <camelot-soft-filled-button 
            .label=${this.label} 
            .color=${this.color}
            ?disabled=${this.disabled}
            .isContainer=${this.isContainer}
          >
            <slot></slot>
          </camelot-soft-filled-button>
        `;
            case 'cupertino':
                return html `
          <camelot-cupertino-filled-button 
            .label=${this.label} 
            .color=${this.color}
            ?disabled=${this.disabled}
            .isContainer=${this.isContainer}
          >
            <slot></slot>
          </camelot-cupertino-filled-button>
        `;
            case 'material':
            default:
                return html `
          <camelot-material-filled-button 
            .label=${this.label} 
            .color=${this.color}
            ?disabled=${this.disabled}
            .isContainer=${this.isContainer}
          >
            <slot></slot>
          </camelot-material-filled-button>
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
], CamelotButton.prototype, "label", void 0);
__decorate([
    property({ type: Boolean, reflect: true }),
    __metadata("design:type", Boolean)
], CamelotButton.prototype, "disabled", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], CamelotButton.prototype, "color", void 0);
CamelotButton = __decorate([
    customElement('camelot-button')
], CamelotButton);
export { CamelotButton };
//# sourceMappingURL=CamelotButton.js.map