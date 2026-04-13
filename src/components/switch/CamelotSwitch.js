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
import './CamelotMaterialSwitch';
import './CamelotCupertinoSwitch';
import './CamelotSoftSwitch';
import './CamelotScifiSwitch';
/**
 * <CamelotSwitch>
 * 通用開關元件，依據主題切換風格。
 * 繼承自 CamelotBaseElement 以獲取自動風格偵測能力。
 */
let CamelotSwitch = class CamelotSwitch extends CamelotBaseElement {
    constructor() {
        super(...arguments);
        this.checked = false;
        this.disabled = false;
        /**
         * 開關色彩：'primary', 'secondary', 'tertiary'
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
          <camelot-scifi-switch-impl 
            ?checked=${this.checked} 
            ?disabled=${this.disabled}
            .color=${this.color}
            @change=${this._handleChanged}
          ></camelot-scifi-switch-impl>
        `;
            case 'soft':
                return html `
          <camelot-soft-switch 
            ?checked=${this.checked} 
            ?disabled=${this.disabled}
            .color=${this.color}
            @change=${this._handleChanged}
          ></camelot-soft-switch>
        `;
            case 'cupertino':
                return html `
          <camelot-cupertino-switch 
            ?checked=${this.checked} 
            ?disabled=${this.disabled}
            .color=${this.color}
            @change=${this._handleChanged}
          ></camelot-cupertino-switch>
        `;
            case 'material':
            default:
                return html `
          <camelot-material-switch 
            ?checked=${this.checked} 
            ?disabled=${this.disabled}
            .color=${this.color}
            @change=${this._handleChanged}
          ></camelot-material-switch>
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
], CamelotSwitch.prototype, "checked", void 0);
__decorate([
    property({ type: Boolean, reflect: true }),
    __metadata("design:type", Boolean)
], CamelotSwitch.prototype, "disabled", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], CamelotSwitch.prototype, "color", void 0);
CamelotSwitch = __decorate([
    customElement('camelot-switch')
], CamelotSwitch);
export { CamelotSwitch };
//# sourceMappingURL=CamelotSwitch.js.map