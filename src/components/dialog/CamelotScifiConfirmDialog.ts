import { html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { CamelotScifiBase } from '../scifi/CamelotScifiBase';
import '../scifi/CamelotScifiFrame';
import '../button/filled/CamelotScifiFilledButton';
import '../button/text/CamelotScifiTextButton';

/**
 * <CamelotScifiConfirmDialog>
 * 日系科幻風格 (Sci-fi HUD) 的確認對話框實作。
 * 已優化：使用 CamelotScifiBase 與 CamelotScifiFrame。
 */
@customElement('camelot-scifi-confirm-dialog-impl')
export class CamelotScifiConfirmDialog extends CamelotScifiBase {
  @property({ type: String, attribute: 'title' }) titleText = '';
  @property({ type: String }) message = '';
  @property({ type: String }) confirmText = 'CONFIRM';
  @property({ type: String }) cancelText = 'ABORT';
  @property({ type: Boolean, reflect: true }) open = false;

  static styles = [
    css`
      :host {
        display: none;
        position: fixed;
        inset: 0;
        z-index: 1000;
        align-items: center;
        justify-content: center;
        background: rgba(0, 0, 0, 0.75);
        backdrop-filter: blur(8px);
      }
      :host([open]) {
        display: flex;
      }
      .dialog-window {
        width: 100%;
        max-width: 480px;
        margin: 20px;
        transform: translateY(0);
        animation: slideIn 0.3s cubic-bezier(0.19, 1, 0.22, 1);
      }
      @keyframes slideIn {
        from { transform: translateY(20px); opacity: 0; }
        to { transform: translateY(0); opacity: 1; }
      }
      .dialog-body {
        padding: 32px;
      }
      .dialog-header {
        margin-bottom: 24px;
        border-bottom: 1px solid color-mix(in srgb, var(--cml-scifi-color) 30%, transparent);
        padding-bottom: 12px;
      }
      .dialog-title {
        font-family: var(--cml-font-family);
        font-size: 1.4rem;
        font-weight: bold;
        color: var(--cml-scifi-color);
        margin: 0;
        text-transform: uppercase;
        display: flex;
        align-items: center;
        gap: 12px;
        letter-spacing: 0.1em;
      }
      .dialog-title::before {
        content: '>>';
        font-size: 0.9em;
        animation: blink 1s step-end infinite;
      }
      .dialog-message {
        color: color-mix(in srgb, white, var(--cml-scifi-color) 20%);
        line-height: 1.7;
        margin-bottom: 40px;
        font-family: var(--cml-font-family);
        font-size: 1rem;
      }
      .dialog-actions {
        display: flex;
        gap: 20px;
        justify-content: flex-end;
      }
      @keyframes blink {
        50% { opacity: 0; }
      }
    `
  ];

  private _onConfirm() {
    this.dispatchEvent(new CustomEvent('confirm', { bubbles: true, composed: true }));
  }

  private _onCancel() {
    this.dispatchEvent(new CustomEvent('cancel', { bubbles: true, composed: true }));
  }

  render() {
    return html`
      <div class="dialog-window">
        <camelot-scifi-frame .color="${this.color}" ?showGrid="${true}">
          <div class="dialog-body">
            <header class="dialog-header">
              <h2 class="dialog-title">${this.titleText}</h2>
            </header>
            <p class="dialog-message">${this.message}</p>
            <div class="dialog-actions">
              <camelot-scifi-text-button 
                .label="${this.cancelText}"
                @click="${this._onCancel}"
              ></camelot-scifi-text-button>
              <camelot-scifi-filled-button 
                .label="${this.confirmText}"
                @click="${this._onConfirm}"
              ></camelot-scifi-filled-button>
            </div>
          </div>
        </camelot-scifi-frame>
      </div>
    `;
  }
}


declare global {
  interface HTMLElementTagNameMap {
    'camelot-scifi-confirm-dialog-impl': CamelotScifiConfirmDialog;
  }
}
