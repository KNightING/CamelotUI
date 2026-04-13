var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { CamelotBaseElement } from '../base/CamelotBaseElement';
import './CamelotMaterialMenu';
import './CamelotSoftMenu';
import './CamelotScifiMenu';
/**
 * <camelot-menu>
 * 複合式選單組件，支援多種預設風格與數據驅動渲染。
 */
let CamelotMenu = class CamelotMenu extends CamelotBaseElement {
    constructor() {
        super(...arguments);
        this.options = [];
        this.value = '';
        this.collapsed = false;
        this.mode = 'vertical';
        this.indent = 24;
    }
    connectedCallback() {
        super.connectedCallback();
        this._updateStyle();
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has('styleType')) {
            this._updateStyle();
        }
    }
    _updateStyle() {
        if (this.styleType) {
            this._activeStyle = this.styleType;
        }
    }
    _handleSelect(e) {
        this.value = e.detail;
        this.dispatchEvent(new CustomEvent('select', { detail: e.detail }));
    }
    _handleValueUpdate(e) {
        this.value = e.detail;
    }
    render() {
        switch (this._activeStyle) {
            case 'scifi':
                return html `
          <camelot-scifi-menu
            .options="${this.options}"
            .value="${this.value}"
            .collapsed="${this.collapsed}"
            .mode="${this.mode}"
            .indent="${this.indent}"
            @select="${this._handleSelect}"
            @update:value="${this._handleValueUpdate}"
          ></camelot-scifi-menu>
        `;
            case 'soft':
                return html `
          <camelot-soft-menu
            .options="${this.options}"
            .value="${this.value}"
            .collapsed="${this.collapsed}"
            .mode="${this.mode}"
            .indent="${this.indent}"
            @select="${this._handleSelect}"
            @update:value="${this._handleValueUpdate}"
          ></camelot-soft-menu>
        `;
            case 'material':
            case 'cupertino':
            default:
                // Cupertino is now handled by Material 3 per user request
                return html `
          <camelot-material-menu
            .options="${this.options}"
            .value="${this.value}"
            .collapsed="${this.collapsed}"
            .mode="${this.mode}"
            .indent="${this.indent}"
            @select="${this._handleSelect}"
            @update:value="${this._handleValueUpdate}"
          ></camelot-material-menu>
        `;
        }
    }
};
__decorate([
    property({ type: Array }),
    __metadata("design:type", Array)
], CamelotMenu.prototype, "options", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], CamelotMenu.prototype, "value", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Object)
], CamelotMenu.prototype, "collapsed", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], CamelotMenu.prototype, "mode", void 0);
__decorate([
    property({ type: Number }),
    __metadata("design:type", Object)
], CamelotMenu.prototype, "indent", void 0);
__decorate([
    property({ type: String, attribute: 'style-type' }),
    __metadata("design:type", String)
], CamelotMenu.prototype, "styleType", void 0);
CamelotMenu = __decorate([
    customElement('camelot-menu')
], CamelotMenu);
export { CamelotMenu };
//# sourceMappingURL=CamelotMenu.js.map