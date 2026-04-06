import { html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { CamelotBaseDialog } from './CamelotBaseDialog';
import '../button/CamelotButton';

/**
 * <CamelotMaterialConfirmDialog>
 * 符合 Material 3 標準的確認對話框。
 */
@customElement('camelot-material-confirm-dialog')
export class CamelotMaterialConfirmDialog extends CamelotBaseDialog {
  @property({ type: String }) title = '';
  @property({ type: String }) message = '';
  @property({ type: String }) confirmText = 'OK';
  @property({ type: String }) cancelText = 'Cancel';

  static styles = [
    ...CamelotBaseDialog.styles,
    css`
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
  ];

  private _onConfirmClick() {
    this.dispatchEvent(new CustomEvent('confirm', { bubbles: true, composed: true }));
  }

  private _onCancelClick() {
    this.dispatchEvent(new CustomEvent('cancel', { bubbles: true, composed: true }));
  }

  render() {
    return html`
      <dialog @cancel="${this.hide}">
        <div class="dialog-content">
          ${this.title ? html`<h2 class="title">${this.title}</h2>` : ''}
          <p class="message">${this.message}</p>
          <div class="actions">
            <camelot-button 
              variant="text" 
              .label="${this.cancelText}"
              @click="${this._onCancelClick}"
            ></camelot-button>
            <camelot-button 
              variant="primary" 
              .label="${this.confirmText}"
              @click="${this._onConfirmClick}"
            ></camelot-button>
          </div>
        </div>
      </dialog>
    `;
  }
}
