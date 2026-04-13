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
// 匯入各風格元件
import './CamelotMaterialCheckbox';
import './CamelotCupertinoCheckbox';
import './CamelotSoftCheckbox';
import './CamelotScifiCheckbox';
/**
 * <CamelotCheckbox>
 * 通用勾選框，根據主題切換風格。
 * 繼承自 CamelotBaseElement 以獲取自動風格偵測能力。
 */
let CamelotCheckbox = class CamelotCheckbox extends CamelotBaseElement {
    constructor() {
        super(...arguments);
        this.label = '';
        this.checked = false;
        this.disabled = false;
        /**
         * 勾選框色彩：'primary', 'secondary', 'tertiary'
         */
        this.color = 'primary';
        /**
         * 勾選框形狀 (僅專對 Cupertino 風格)：'square' 或 'circle'
         */
        this.shape = 'square';
        this.value = '';
    }
    static { this.styles = css `
    :host {
      display: inline-block;
      vertical-align: middle;
    }
  `; }
    _handleChanged(e) {
        this.checked = e.detail.checked;
        this.dispatchEvent(new CustomEvent('change', {
            detail: { checked: this.checked },
            bubbles: true,
            composed: true
        }));
    }
    render() {
        switch (this._activeStyle) {
            case 'scifi':
                return html `
          <camelot-scifi-checkbox-impl 
            .label="${this.label}" 
            .checked="${this.checked}"
            .color="${this.color}"
            ?disabled="${this.disabled}"
            @change="${this._handleChanged}">
          </camelot-scifi-checkbox-impl>
        `;
            case 'cupertino':
                return html `
          <camelot-cupertino-checkbox 
            .label="${this.label}" 
            .checked="${this.checked}"
            .color="${this.color}"
            .shape="${this.shape}"
            ?disabled="${this.disabled}"
            @change="${this._handleChanged}">
          </camelot-cupertino-checkbox>
        `;
            case 'soft':
                return html `
          <camelot-soft-checkbox 
            .label="${this.label}" 
            .checked="${this.checked}"
            .color="${this.color}"
            ?disabled="${this.disabled}"
            @change="${this._handleChanged}">
          </camelot-soft-checkbox>
        `;
            case 'material':
            default:
                return html `
          <camelot-material-checkbox 
            .label="${this.label}" 
            .checked="${this.checked}"
            .color="${this.color}"
            ?disabled="${this.disabled}"
            @change="${this._handleChanged}">
          </camelot-material-checkbox>
        `;
        }
    }
};
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], CamelotCheckbox.prototype, "label", void 0);
__decorate([
    property({ type: Boolean, reflect: true }),
    __metadata("design:type", Boolean)
], CamelotCheckbox.prototype, "checked", void 0);
__decorate([
    property({ type: Boolean, reflect: true }),
    __metadata("design:type", Boolean)
], CamelotCheckbox.prototype, "disabled", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], CamelotCheckbox.prototype, "color", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], CamelotCheckbox.prototype, "shape", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], CamelotCheckbox.prototype, "value", void 0);
CamelotCheckbox = __decorate([
    customElement('camelot-checkbox')
], CamelotCheckbox);
export { CamelotCheckbox };
//# sourceMappingURL=CamelotCheckbox.js.map