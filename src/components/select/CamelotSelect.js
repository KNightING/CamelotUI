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
import './CamelotMaterialSelect';
import './CamelotCupertinoSelect';
import './CamelotSoftSelect';
import './CamelotScifiSelect';
/**
 * <CamelotSelect>
 * 通用下拉選單元件，由主題切換風格。
 * 繼承自 CamelotBaseElement 以獲取自動風格偵測能力。
 */
import { state } from 'lit/decorators.js';
/**
 * <CamelotSelect>
 * 通用下拉選單元件，由主題切換風格。
 * 繼承自 CamelotBaseElement 以獲取自動風格偵測能力。
 */
let CamelotSelect = class CamelotSelect extends CamelotBaseElement {
    constructor() {
        super();
        this.label = '';
        this.value = '';
        this.options = [];
        this.disabled = false;
        this.color = 'primary';
        this._isOpen = false;
        this._searchTerm = '';
        this._onWindowClick = this._onWindowClick.bind(this);
    }
    connectedCallback() {
        super.connectedCallback();
        window.addEventListener('click', this._onWindowClick);
    }
    disconnectedCallback() {
        window.removeEventListener('click', this._onWindowClick);
        super.disconnectedCallback();
    }
    _onWindowClick(e) {
        if (this._isOpen && !e.composedPath().includes(this)) {
            this._isOpen = false;
            this._searchTerm = '';
        }
    }
    _handleChanged(val) {
        this.value = val;
        this._isOpen = false;
        this._searchTerm = '';
        this.dispatchEvent(new CustomEvent('change', {
            detail: { value: this.value },
            bubbles: true,
            composed: true
        }));
    }
    _handleSearch(e) {
        this._searchTerm = e.detail.value;
    }
    _handleToggle() {
        if (this.disabled)
            return;
        this._isOpen = !this._isOpen;
        if (!this._isOpen)
            this._searchTerm = '';
    }
    get filteredOptions() {
        if (!this._searchTerm)
            return this.options;
        const term = this._searchTerm.toLowerCase();
        return this.options.filter(opt => opt.label.toLowerCase().includes(term) ||
            opt.value.toLowerCase().includes(term));
    }
    render() {
        // ... Existing logic ...
        // Add 'is-open' class to the container or manage it on host
        this.classList.toggle('is-open', this._isOpen);
        const commonProps = {
            label: this.label,
            value: this.value,
            options: this.filteredOptions,
            color: this.color,
            disabled: this.disabled,
            isOpen: this._isOpen,
            searchTerm: this._searchTerm
        };
        switch (this._activeStyle) {
            case 'scifi':
                return html `
          <camelot-scifi-select-impl
            .label=${commonProps.label}
            .value=${commonProps.value}
            .options=${commonProps.options}
            .isOpen=${commonProps.isOpen}
            @toggle=${this._handleToggle}
            @change=${(e) => this._handleChanged(e.detail.value)}
          ></camelot-scifi-select-impl>
        `;
            case 'soft':
                return html `
          <camelot-soft-select 
            .label=${commonProps.label}
            .value=${commonProps.value}
            .options=${commonProps.options}
            .color=${commonProps.color}
            .isOpen=${commonProps.isOpen}
            .searchTerm=${commonProps.searchTerm}
            ?disabled=${commonProps.disabled}
            @toggle=${this._handleToggle}
            @search=${this._handleSearch}
            @change=${(e) => this._handleChanged(e.detail.value)}
          ></camelot-soft-select>
        `;
            case 'cupertino':
                return html `
          <camelot-cupertino-select 
            .label=${commonProps.label}
            .value=${commonProps.value}
            .options=${commonProps.options}
            .color=${commonProps.color}
            .isOpen=${commonProps.isOpen}
            .searchTerm=${commonProps.searchTerm}
            ?disabled=${commonProps.disabled}
            @toggle=${this._handleToggle}
            @search=${this._handleSearch}
            @change=${(e) => this._handleChanged(e.detail.value)}
          ></camelot-cupertino-select>
        `;
            case 'material':
            default:
                return html `
          <camelot-material-select 
            .label=${commonProps.label}
            .value=${commonProps.value}
            .options=${commonProps.options}
            .color=${commonProps.color}
            .isOpen=${commonProps.isOpen}
            .searchTerm=${commonProps.searchTerm}
            ?disabled=${commonProps.disabled}
            @toggle=${this._handleToggle}
            @search=${this._handleSearch}
            @change=${(e) => this._handleChanged(e.detail.value)}
          ></camelot-material-select>
        `;
        }
    }
    static { this.styles = css `
    :host {
      display: block;
      margin-bottom: 16px;
      position: relative;
    }

    :host(.is-open) {
      z-index: 100;
    }
  `; }
};
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], CamelotSelect.prototype, "label", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], CamelotSelect.prototype, "value", void 0);
__decorate([
    property({ type: Array }),
    __metadata("design:type", Array)
], CamelotSelect.prototype, "options", void 0);
__decorate([
    property({ type: Boolean, reflect: true }),
    __metadata("design:type", Boolean)
], CamelotSelect.prototype, "disabled", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], CamelotSelect.prototype, "color", void 0);
__decorate([
    state(),
    __metadata("design:type", Boolean)
], CamelotSelect.prototype, "_isOpen", void 0);
__decorate([
    state(),
    __metadata("design:type", String)
], CamelotSelect.prototype, "_searchTerm", void 0);
CamelotSelect = __decorate([
    customElement('camelot-select'),
    __metadata("design:paramtypes", [])
], CamelotSelect);
export { CamelotSelect };
//# sourceMappingURL=CamelotSelect.js.map