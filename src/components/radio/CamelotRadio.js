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
import './CamelotMaterialRadio';
import './CamelotCupertinoRadio';
import './CamelotSoftRadio';
import './CamelotScifiRadio';
/**
 * <CamelotRadio>
 * 通用單選按鈕元件，由主題切換風格。
 * 繼承自 CamelotBaseElement 以獲取自動風格偵測能力。
 */
let CamelotRadio = class CamelotRadio extends CamelotBaseElement {
    constructor() {
        super(...arguments);
        this.checked = false;
        this.disabled = false;
        this.label = '';
        this.name = '';
        this.value = '';
        /**
         * 單選色彩：'primary', 'secondary', 'tertiary'
         */
        this.color = 'primary';
    }
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
          <camelot-scifi-radio-impl 
            ?checked=${this.checked} 
            ?disabled=${this.disabled}
            .label=${this.label}
            .color=${this.color}
            @change=${this._handleChanged}
          ></camelot-scifi-radio-impl>
        `;
            case 'soft':
                return html `
          <camelot-soft-radio 
            ?checked=${this.checked} 
            ?disabled=${this.disabled}
            .label=${this.label}
            .color=${this.color}
            @change=${this._handleChanged}
          ></camelot-soft-radio>
        `;
            case 'cupertino':
                return html `
          <camelot-cupertino-radio 
            ?checked=${this.checked} 
            ?disabled=${this.disabled}
            .label=${this.label}
            .color=${this.color}
            @change=${this._handleChanged}
          ></camelot-cupertino-radio>
        `;
            case 'material':
            default:
                return html `
          <camelot-material-radio 
            ?checked=${this.checked} 
            ?disabled=${this.disabled}
            .label=${this.label}
            .color=${this.color}
            @change=${this._handleChanged}
          ></camelot-material-radio>
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
    property({ type: Boolean, reflect: true }),
    __metadata("design:type", Boolean)
], CamelotRadio.prototype, "checked", void 0);
__decorate([
    property({ type: Boolean, reflect: true }),
    __metadata("design:type", Boolean)
], CamelotRadio.prototype, "disabled", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], CamelotRadio.prototype, "label", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], CamelotRadio.prototype, "name", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], CamelotRadio.prototype, "value", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], CamelotRadio.prototype, "color", void 0);
CamelotRadio = __decorate([
    customElement('camelot-radio')
], CamelotRadio);
export { CamelotRadio };
//# sourceMappingURL=CamelotRadio.js.map