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
import './CamelotMaterialTextButton';
import './CamelotCupertinoTextButton';
import './CamelotSoftTextButton';
import './CamelotScifiTextButton';
/**
 * <CamelotTextButton>
 * 通用文字按鈕元件 (Text Button)，根據主題切換風格。
 */
let CamelotTextButton = class CamelotTextButton extends CamelotBaseElement {
    constructor() {
        super(...arguments);
        this.label = 'Text Button';
        this.disabled = false;
        this.color = 'primary';
    }
    render() {
        switch (this._activeStyle) {
            case 'soft':
                return html `
          <camelot-soft-text-button 
            .label=${this.label} 
            .color=${this.color}
            ?disabled=${this.disabled}
          >
            <slot></slot>
          </camelot-soft-text-button>
        `;
            case 'scifi':
                return html `
          <camelot-scifi-text-button 
            .label=${this.label} 
            .color=${this.color}
            ?disabled=${this.disabled}
          >
            <slot></slot>
          </camelot-scifi-text-button>
        `;
            case 'cupertino':
                return html `
          <camelot-cupertino-text-button 
            .label=${this.label} 
            .color=${this.color}
            ?disabled=${this.disabled}
          >
            <slot></slot>
          </camelot-cupertino-text-button>
        `;
            case 'material':
            default:
                return html `
          <camelot-material-text-button 
            .label=${this.label} 
            .color=${this.color}
            ?disabled=${this.disabled}
          >
            <slot></slot>
          </camelot-material-text-button>
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
], CamelotTextButton.prototype, "label", void 0);
__decorate([
    property({ type: Boolean, reflect: true }),
    __metadata("design:type", Boolean)
], CamelotTextButton.prototype, "disabled", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], CamelotTextButton.prototype, "color", void 0);
CamelotTextButton = __decorate([
    customElement('camelot-text-button')
], CamelotTextButton);
export { CamelotTextButton };
//# sourceMappingURL=CamelotTextButton.js.map