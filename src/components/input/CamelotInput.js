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
import './CamelotMaterialInput';
import './CamelotCupertinoInput';
import './CamelotSoftInput';
import './CamelotScifiInput';
/**
 * <CamelotInput>
 * 通用輸入框元件，根據主題切換風格。
 * 繼承自 CamelotBaseElement 以獲取自動風格偵測能力。
 */
let CamelotInput = class CamelotInput extends CamelotBaseElement {
    constructor() {
        super(...arguments);
        this.label = '';
        this.value = '';
        this.placeholder = '';
        this.error = '';
        this.color = 'primary';
        this.disabled = false;
    }
    render() {
        switch (this._activeStyle) {
            case 'scifi':
                return html `
          <camelot-scifi-input-impl
            .value=${this.value}
            .label=${this.label}
            .placeholder=${this.placeholder}
            .color=${this.color}
            ?disabled=${this.disabled}
            @input=${(e) => this.value = e.target.value}
          ></camelot-scifi-input-impl>
        `;
            case 'soft':
                return html `
          <camelot-soft-input
            .value=${this.value}
            .label=${this.label}
            .placeholder=${this.placeholder}
            .error=${this.error}
            .color=${this.color}
            ?disabled=${this.disabled}
            @input=${(e) => this.value = e.target.value}
          ></camelot-soft-input>
        `;
            case 'cupertino':
                return html `
          <camelot-cupertino-input
            .value=${this.value}
            .label=${this.label}
            .placeholder=${this.placeholder}
            .error=${this.error}
            .color=${this.color}
            ?disabled=${this.disabled}
            @input=${(e) => this.value = e.target.value}
          ></camelot-cupertino-input>
        `;
            case 'material':
            default:
                return html `
          <camelot-material-input
            .value=${this.value}
            .label=${this.label}
            .placeholder=${this.placeholder}
            .error=${this.error}
            .color=${this.color}
            ?disabled=${this.disabled}
            @input=${(e) => this.value = e.target.value}
          ></camelot-material-input>
        `;
        }
    }
    static { this.styles = css `
    :host {
      display: block;
      margin-bottom: var(--cml-spacing-4);
    }
  `; }
};
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], CamelotInput.prototype, "label", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], CamelotInput.prototype, "value", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], CamelotInput.prototype, "placeholder", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], CamelotInput.prototype, "error", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], CamelotInput.prototype, "color", void 0);
__decorate([
    property({ type: Boolean, reflect: true }),
    __metadata("design:type", Boolean)
], CamelotInput.prototype, "disabled", void 0);
CamelotInput = __decorate([
    customElement('camelot-input')
], CamelotInput);
export { CamelotInput };
//# sourceMappingURL=CamelotInput.js.map