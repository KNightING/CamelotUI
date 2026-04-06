import { html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { CamelotBaseDialog } from './CamelotBaseDialog';

/**
 * <CamelotCupertinoConfirmDialog>
 * iOS 風格的確認對話框。
 */
@customElement('camelot-cupertino-confirm-dialog')
export class CamelotCupertinoConfirmDialog extends CamelotBaseDialog {
  @property({ type: String }) title = '';
  @property({ type: String }) message = '';
  @property({ type: String }) confirmText = 'OK';
  @property({ type: String }) cancelText = 'Cancel';

  static styles = [
    ...CamelotBaseDialog.styles,
    css`
      dialog {
        min-width: 270px !important;
        max-width: 270px;
      }

      .dialog-content {
        background-color: rgba(255, 255, 255, 0.8);
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
        color: #000000;
        font-family: var(--cml-font-family);
        font-size: 1.0625rem;
        font-weight: 600;
        margin: 0 0 4px 0;
      }

      .message {
        color: #000000;
        font-family: var(--cml-font-family);
        font-size: 0.8125rem;
        font-weight: 400;
        margin: 0;
      }

      .actions {
        display: flex;
        border-top: 0.5px solid rgba(0, 0, 0, 0.2);
      }

      .action-btn {
        flex: 1;
        padding: 12px;
        background: transparent;
        border: none;
        color: #007AFF;
        font-family: var(--cml-font-family);
        font-size: 1.0625rem;
        font-weight: 400;
        cursor: pointer;
        outline: none;
      }

      .action-btn:active {
        background-color: rgba(0, 0, 0, 0.05);
      }

      .action-btn.confirm {
        font-weight: 600;
        border-left: 0.5px solid rgba(0, 0, 0, 0.2);
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
          <div class="text-container">
            ${this.title ? html`<h2 class="title">${this.title}</h2>` : ''}
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
}
