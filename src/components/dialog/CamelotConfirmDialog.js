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
import './CamelotBaseDialog';
import './CamelotMaterialConfirmDialog';
import './CamelotCupertinoConfirmDialog';
import './CamelotSoftConfirmDialog';
import './CamelotScifiConfirmDialog';
/**
 * <CamelotConfirmDialog>
 * 確認對話框分流器。根據主題渲染 Material, Cupertino 或 Soft UI 的確認視窗。
 */
let CamelotConfirmDialog = class CamelotConfirmDialog extends CamelotBaseElement {
    constructor() {
        super(...arguments);
        this.title = '';
        this.message = '';
        this.confirmText = '確定';
        this.cancelText = '取消';
        this.open = false;
    }
    show() {
        this.open = true;
    }
    hide() {
        this.open = false;
    }
    _onConfirm() {
        this.open = false;
        this.dispatchEvent(new CustomEvent('confirm', { bubbles: true, composed: true }));
    }
    _onCancel() {
        this.open = false;
        this.dispatchEvent(new CustomEvent('cancel', { bubbles: true, composed: true }));
    }
    render() {
        const commonProps = {
            title: this.title,
            message: this.message,
            confirmText: this.confirmText,
            cancelText: this.cancelText,
            open: this.open
        };
        switch (this._activeStyle) {
            case 'scifi':
                return html `
          <camelot-scifi-confirm-dialog-impl
            .title=${commonProps.title}
            .message=${commonProps.message}
            .confirmText=${commonProps.confirmText}
            .cancelText=${commonProps.cancelText}
            ?open=${commonProps.open}
            @confirm=${this._onConfirm}
            @cancel=${this._onCancel}
          ></camelot-scifi-confirm-dialog-impl>
        `;
            case 'cupertino':
                return html `
          <camelot-cupertino-confirm-dialog
            .title=${commonProps.title}
            .message=${commonProps.message}
            .confirmText=${commonProps.confirmText}
            .cancelText=${commonProps.cancelText}
            ?open=${commonProps.open}
            @confirm=${this._onConfirm}
            @cancel=${this._onCancel}
          ></camelot-cupertino-confirm-dialog>
        `;
            case 'soft':
                return html `
          <camelot-soft-confirm-dialog
            .title=${commonProps.title}
            .message=${commonProps.message}
            .confirmText=${commonProps.confirmText}
            .cancelText=${commonProps.cancelText}
            ?open=${commonProps.open}
            @confirm=${this._onConfirm}
            @cancel=${this._onCancel}
          ></camelot-soft-confirm-dialog>
        `;
            case 'material':
            default:
                return html `
          <camelot-material-confirm-dialog
            .title=${commonProps.title}
            .message=${commonProps.message}
            .confirmText=${commonProps.confirmText}
            .cancelText=${commonProps.cancelText}
            ?open=${commonProps.open}
            @confirm=${this._onConfirm}
            @cancel=${this._onCancel}
          ></camelot-material-confirm-dialog>
        `;
        }
    }
};
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], CamelotConfirmDialog.prototype, "title", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], CamelotConfirmDialog.prototype, "message", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], CamelotConfirmDialog.prototype, "confirmText", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], CamelotConfirmDialog.prototype, "cancelText", void 0);
__decorate([
    property({ type: Boolean, reflect: true }),
    __metadata("design:type", Boolean)
], CamelotConfirmDialog.prototype, "open", void 0);
CamelotConfirmDialog = __decorate([
    customElement('camelot-confirm-dialog')
], CamelotConfirmDialog);
export { CamelotConfirmDialog };
//# sourceMappingURL=CamelotConfirmDialog.js.map