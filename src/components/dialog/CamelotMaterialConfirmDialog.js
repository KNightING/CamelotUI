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
import { CamelotBaseDialog } from './CamelotBaseDialog';
import '../button/filled/CamelotButton';
import '../button/text/CamelotTextButton';
/**
 * <CamelotMaterialConfirmDialog>
 * 符合 Material 3 標準的確認對話框。
 */
let CamelotMaterialConfirmDialog = class CamelotMaterialConfirmDialog extends CamelotBaseDialog {
    constructor() {
        super(...arguments);
        this.title = '';
        this.message = '';
        this.confirmText = 'OK';
        this.cancelText = 'Cancel';
    }
    static { this.styles = [
        ...CamelotBaseDialog.styles,
        css `
      .dialog-content {
        background-color: var(--cml-color-surface-container-high);
        border-radius: 28px;
        padding: 24px;
        box-shadow: var(--cml-shadow-3);
        display: flex;
        flex-direction: column;
        gap: 16px;
      }

      .title {
        color: var(--cml-color-on-surface);
        font-family: var(--cml-font-family);
        font-size: 1.5rem;
        font-weight: 400;
        margin: 0;
      }

      .message {
        color: var(--cml-color-on-surface-variant);
        font-family: var(--cml-font-family);
        font-size: 0.875rem;
        line-height: 1.25rem;
        margin: 0;
      }

      .actions {
        display: flex;
        justify-content: flex-end;
        gap: 8px;
        margin-top: 8px;
      }
    `
    ]; }
    _onConfirmClick() {
        this.dispatchEvent(new CustomEvent('confirm', { bubbles: true, composed: true }));
    }
    _onCancelClick() {
        this.dispatchEvent(new CustomEvent('cancel', { bubbles: true, composed: true }));
    }
    render() {
        return html `
      <dialog @cancel="${this.hide}">
        <div class="dialog-content">
          ${this.title ? html `<h2 class="title">${this.title}</h2>` : ''}
          <p class="message">${this.message}</p>
          <div class="actions">
            <camelot-text-button 
              .label="${this.cancelText}"
              @click="${this._onCancelClick}"
            ></camelot-text-button>
            <camelot-button 
              color="primary" 
              .label="${this.confirmText}"
              @click="${this._onConfirmClick}"
            ></camelot-button>
          </div>
        </div>
      </dialog>
    `;
    }
};
__decorate([
    property({ type: String }),
    __metadata("design:type", Object)
], CamelotMaterialConfirmDialog.prototype, "title", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", Object)
], CamelotMaterialConfirmDialog.prototype, "message", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", Object)
], CamelotMaterialConfirmDialog.prototype, "confirmText", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", Object)
], CamelotMaterialConfirmDialog.prototype, "cancelText", void 0);
CamelotMaterialConfirmDialog = __decorate([
    customElement('camelot-material-confirm-dialog')
], CamelotMaterialConfirmDialog);
export { CamelotMaterialConfirmDialog };
//# sourceMappingURL=CamelotMaterialConfirmDialog.js.map