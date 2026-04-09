import { html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { CamelotScifiBase } from '../scifi/CamelotScifiBase';
import '../scifi/CamelotScifiFrame';

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
        background: rgba(0, 0, 0, 0.7);
        backdrop-filter: blur(4px);
      }
      :host([open]) {
        display: flex;
      }
      .dialog-window {
        width: 100%;
        max-width: 450px;
        margin: 20px;
      }
      .dialog-body {
        padding: 24px;
      }
      .dialog-header {
        margin-bottom: 20px;
        border-bottom: 1px solid color-mix(in srgb, var(--cml-scifi-color) 30%, transparent);
        padding-bottom: 10px;
      }
      .dialog-title {
        font-family: var(--cml-font-family-mono, monospace);
        font-size: 1.25rem;
        font-weight: bold;
        color: var(--cml-scifi-color);
        margin: 0;
        text-transform: uppercase;
        display: flex;
        align-items: center;
        gap: 10px;
      }
      .dialog-title::before {
        content: '>';
        animation: blink 1s step-end infinite;
      }
      .dialog-message {
        color: #fff;
        line-height: 1.6;
        margin-bottom: 30px;
        font-family: var(--cml-font-family);
      }
      .dialog-actions {
        display: flex;
        gap: 16px;
        justify-content: flex-end;
      }
      @keyframes blink {
        50% { opacity: 0; }
      }
    `
  ];

  private _close(confirmed: boolean) {
    this.open = false;
    this.dispatchEvent(new CustomEvent('close', {
      detail: { confirmed },
      bubbles: true,
      composed: true
    }));
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
              <camelot-button variant="text" @click="${() => this._close(false)}">${this.cancelText}</camelot-button>
              <camelot-button style="--cml-color-primary: var(--cml-scifi-color)" @click="${() => this._close(true)}">${this.confirmText}</camelot-button>
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
