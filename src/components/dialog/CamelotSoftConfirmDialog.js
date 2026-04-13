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
/**
 * <CamelotSoftConfirmDialog>
 * 擬物化風格的確認對話框。
 */
let CamelotSoftConfirmDialog = class CamelotSoftConfirmDialog extends CamelotBaseDialog {
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
        background-color: var(--cml-color-background);
        border-radius: 20px;
        padding: 32px;
        box-shadow: 
          10px 10px 20px var(--cml-soft-color-dark), 
          -10px -10px 20px var(--cml-soft-color-light);
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
        text-align: center;
      }

      .title {
        color: var(--cml-color-primary);
        font-family: var(--cml-font-family);
        font-size: 1.25rem;
        font-weight: 700;
        margin: 0;
      }

      .message {
        color: var(--cml-color-on-background);
        font-family: var(--cml-font-family);
        font-size: 1rem;
        line-height: 1.5;
        margin: 0;
      }

      .actions {
        display: flex;
        width: 100%;
        gap: 16px;
        margin-top: 12px;
      }

      .actions camelot-button {
        flex: 1;
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
            <camelot-button 
              color="secondary" 
              .label="${this.cancelText}"
              @click="${this._onCancelClick}"
            ></camelot-button>
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
], CamelotSoftConfirmDialog.prototype, "title", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", Object)
], CamelotSoftConfirmDialog.prototype, "message", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", Object)
], CamelotSoftConfirmDialog.prototype, "confirmText", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", Object)
], CamelotSoftConfirmDialog.prototype, "cancelText", void 0);
CamelotSoftConfirmDialog = __decorate([
    customElement('camelot-soft-confirm-dialog')
], CamelotSoftConfirmDialog);
export { CamelotSoftConfirmDialog };
//# sourceMappingURL=CamelotSoftConfirmDialog.js.map