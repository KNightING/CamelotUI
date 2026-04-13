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
/**
 * <CamelotCupertinoConfirmDialog>
 * iOS 風格的確認對話框。
 */
let CamelotCupertinoConfirmDialog = class CamelotCupertinoConfirmDialog extends CamelotBaseDialog {
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
      dialog {
        min-width: 270px !important;
        max-width: 270px;
      }

      .dialog-content {
        background-color: color-mix(in srgb, var(--cml-color-surface-container-high) 85%, transparent);
        backdrop-filter: blur(20px);
        -webkit-backdrop-filter: blur(20px);
        border-radius: 14px;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        text-align: center;
      }

      .text-container {
        padding: 20px 16px;
      }

      .title {
        color: var(--cml-color-on-surface);
        font-family: var(--cml-font-family);
        font-size: 1.0625rem;
        font-weight: 600;
        margin: 0 0 4px 0;
      }

      .message {
        color: var(--cml-color-on-surface);
        opacity: 0.8;
        font-family: var(--cml-font-family);
        font-size: 0.8125rem;
        font-weight: 400;
        margin: 0;
      }

      .actions {
        display: flex;
        border-top: 0.5px solid var(--cml-color-outline-variant);
      }

      .action-btn {
        flex: 1;
        padding: 12px;
        background: transparent;
        border: none;
        color: var(--cml-color-primary);
        font-family: var(--cml-font-family);
        font-size: 1.0625rem;
        font-weight: 400;
        cursor: pointer;
        outline: none;
      }

      .action-btn:active {
        background-color: var(--cml-color-surface-container-highest);
      }

      .action-btn.confirm {
        font-weight: 600;
        border-left: 0.5px solid var(--cml-color-outline-variant);
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
          <div class="text-container">
            ${this.title ? html `<h2 class="title">${this.title}</h2>` : ''}
            <p class="message">${this.message}</p>
          </div>
          <div class="actions">
            <button class="action-btn" @click="${this._onCancelClick}">${this.cancelText}</button>
            <button class="action-btn confirm" @click="${this._onConfirmClick}">${this.confirmText}</button>
          </div>
        </div>
      </dialog>
    `;
    }
};
__decorate([
    property({ type: String }),
    __metadata("design:type", Object)
], CamelotCupertinoConfirmDialog.prototype, "title", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", Object)
], CamelotCupertinoConfirmDialog.prototype, "message", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", Object)
], CamelotCupertinoConfirmDialog.prototype, "confirmText", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", Object)
], CamelotCupertinoConfirmDialog.prototype, "cancelText", void 0);
CamelotCupertinoConfirmDialog = __decorate([
    customElement('camelot-cupertino-confirm-dialog')
], CamelotCupertinoConfirmDialog);
export { CamelotCupertinoConfirmDialog };
//# sourceMappingURL=CamelotCupertinoConfirmDialog.js.map