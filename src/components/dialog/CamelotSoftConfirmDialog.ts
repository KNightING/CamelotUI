import { html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { CamelotBaseDialog } from './CamelotBaseDialog';
import '../button/CamelotButton';

/**
 * <CamelotSoftConfirmDialog>
 * 擬物化風格的確認對話框。
 */
@customElement('camelot-soft-confirm-dialog')
export class CamelotSoftConfirmDialog extends CamelotBaseDialog {
  @property({ type: String }) title = '';
  @property({ type: String }) message = '';
  @property({ type: String }) confirmText = 'OK';
  @property({ type: String }) cancelText = 'Cancel';

  static styles = [
    ...CamelotBaseDialog.styles,
    css`
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
              variant="secondary" 
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
