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
import { property } from 'lit/decorators.js';
import { CamelotBaseElement } from '../base/CamelotBaseElement';
import './CamelotMaterialDrawer';
import './CamelotCupertinoDrawer';
import './CamelotSoftDrawer';
import './CamelotScifiDrawer';
/**
 * <CamelotDrawer>
 * 抽屜元件的門面 (Facade)，根據當前主題風格自動渲染對應的實作。
 */
export class CamelotDrawer extends CamelotBaseElement {
    constructor() {
        super(...arguments);
        this.open = false;
        this.anchor = 'left';
    }
    /**
     * 開啟抽屜
     */
    show() {
        this.open = true;
    }
    /**
     * 關閉抽屜
     */
    hide() {
        this.open = false;
    }
    _handleCancel() {
        this.open = false;
        this.dispatchEvent(new CustomEvent('cancel', { bubbles: true, composed: true }));
    }
    _handleOpen() {
        this.dispatchEvent(new CustomEvent('open', { bubbles: true, composed: true }));
    }
    _handleClose() {
        this.open = false;
        this.dispatchEvent(new CustomEvent('close', { bubbles: true, composed: true }));
    }
    render() {
        // 根據 _activeStyle 選擇對應的組件標籤
        switch (this._activeStyle) {
            case 'scifi':
                return html `
          <camelot-scifi-drawer
            .open="${this.open}"
            .anchor="${this.anchor}"
            .label="${this.label || this.headline || ''}"
            @cancel="${this._handleCancel}"
            @open="${this._handleOpen}"
            @close="${this._handleClose}"
          >
            <slot></slot>
            <slot name="footer" slot="footer"></slot>
          </camelot-scifi-drawer>
        `;
            case 'cupertino':
                return html `
          <camelot-cupertino-drawer
            .open="${this.open}"
            .anchor="${this.anchor}"
            .label="${this.label || ''}"
            @cancel="${this._handleCancel}"
            @open="${this._handleOpen}"
            @close="${this._handleClose}"
          >
            <slot></slot>
            <slot name="footer" slot="footer"></slot>
          </camelot-cupertino-drawer>
        `;
            case 'soft':
                return html `
          <camelot-soft-drawer
            .open="${this.open}"
            .anchor="${this.anchor}"
            .label="${this.label || this.headline || ''}"
            @cancel="${this._handleCancel}"
            @open="${this._handleOpen}"
            @close="${this._handleClose}"
          >
            <slot></slot>
            <slot name="header-actions" slot="header-actions"></slot>
            <slot name="footer" slot="footer"></slot>
          </camelot-soft-drawer>
        `;
            case 'material':
            default:
                return html `
          <camelot-material-drawer
            .open="${this.open}"
            .anchor="${this.anchor}"
            .headline="${this.headline || this.label || ''}"
            @cancel="${this._handleCancel}"
            @open="${this._handleOpen}"
            @close="${this._handleClose}"
          >
            <slot name="header" slot="header"></slot>
            <slot></slot>
            <slot name="footer" slot="footer"></slot>
          </camelot-material-drawer>
        `;
        }
    }
}
__decorate([
    property({ type: Boolean, reflect: true }),
    __metadata("design:type", Object)
], CamelotDrawer.prototype, "open", void 0);
__decorate([
    property({ type: String, reflect: true }),
    __metadata("design:type", String)
], CamelotDrawer.prototype, "anchor", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], CamelotDrawer.prototype, "label", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], CamelotDrawer.prototype, "headline", void 0);
customElements.define('camelot-drawer', CamelotDrawer);
//# sourceMappingURL=CamelotDrawer.js.map