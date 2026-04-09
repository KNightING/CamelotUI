import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import '../scifi/CamelotScifiReticle';
import '../button/filled/CamelotButton';

/**
 * <CamelotScifiConfirmDialog>
 * 日系科幻風格 (Sci-fi HUD) 的確認對話框實作。
 * 特色：八角形框架、數位掃描解碼感、Reticle 鎖定按鈕。
 */
@customElement('camelot-scifi-confirm-dialog-impl')
export class CamelotScifiConfirmDialog extends LitElement {
  @property({ type: String }) title = '';
  @property({ type: String }) message = '';
  @property({ type: String }) confirmText = 'CONFIRM';
  @property({ type: String }) cancelText = 'ABORT';
  @property({ type: String }) color: 'primary' | 'secondary' | 'tertiary' = 'primary';
  @property({ type: Boolean }) open = false;

  static styles = css`
    :host {
      display: block;
      font-family: 'Share Tech Mono', monospace;
      --cml-scifi-color: var(--cml-color-primary);
    }

    :host([color="secondary"]) { --cml-scifi-color: var(--cml-color-secondary); }
    :host([color="tertiary"]) { --cml-scifi-color: var(--cml-color-tertiary); }

    .overlay {
      position: fixed;
      inset: 0;
      background: rgba(0, 0, 0, 0.85);
      backdrop-filter: blur(8px);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 9999;
      opacity: 0;
      visibility: hidden;
      transition: all 0.4s cubic-bezier(0.19, 1, 0.22, 1);
    }

    .overlay.open {
      opacity: 1;
      visibility: visible;
    }

    /* 八角形框架容器 */
    .dialog {
      position: relative;
      width: 450px;
      max-width: 90vw;
      background: #05080a;
      border: 1px solid var(--cml-scifi-color);
      padding: 32px;
      transform: scale(0.9) translateY(20px);
      transition: all 0.4s cubic-bezier(0.19, 1, 0.22, 1);
      box-shadow: 0 0 30px rgba(0,0,0,1), 0 0 20px color-mix(in srgb, var(--cml-scifi-color), transparent 80%);
      /* 八角形切角 */
      clip-path: polygon(
        20px 0, calc(100% - 20px) 0,
        100% 20px, 100% calc(100% - 20px),
        calc(100% - 20px) 100%, 20px 100%,
        0 calc(100% - 20px), 0 20px
      );
    }

    .overlay.open .dialog {
      transform: scale(1) translateY(0);
    }

    /* 頂部掃描線裝飾 */
    .dialog::before {
      content: '';
      position: absolute;
      top: 0; left: 0; width: 100%; height: 2px;
      background: var(--cml-scifi-color);
      box-shadow: 0 0 15px var(--cml-scifi-color);
    }

    .header {
      margin-bottom: 16px;
      border-bottom: 1px dashed color-mix(in srgb, var(--cml-scifi-color), transparent 60%);
      padding-bottom: 12px;
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
    }

    h2 {
      margin: 0;
      font-size: 1.25rem;
      color: var(--cml-scifi-color);
      letter-spacing: 0.2em;
      text-transform: uppercase;
    }

    .status-tag {
      font-size: 0.6rem;
      color: var(--cml-scifi-color);
      border: 1px solid var(--cml-scifi-color);
      padding: 2px 6px;
      opacity: 0.8;
    }

    .content {
      margin-bottom: 32px;
      line-height: 1.6;
      color: #fff;
      font-size: 0.95rem;
      opacity: 0.9;
    }

    .actions {
      display: flex;
      gap: 16px;
      justify-content: flex-end;
    }

    /* 偽元素：裝飾數字 */
    .dialog-decor {
      position: absolute;
      bottom: 8px;
      left: 12px;
      font-size: 0.7rem;
      color: var(--cml-scifi-color);
      opacity: 0.3;
    }
  `;

  private _onConfirm() {
    this.dispatchEvent(new CustomEvent('confirm', { bubbles: true, composed: true }));
    this.open = false;
  }

  private _onCancel() {
    this.dispatchEvent(new CustomEvent('cancel', { bubbles: true, composed: true }));
    this.open = false;
  }

  render() {
    return html`
      <div class="overlay ${this.open ? 'open' : ''}">
        <div class="dialog">
          <div class="header">
            <h2>${this.title || 'SYSTEM_PROMPT'}</h2>
            <div class="status-tag">SECURE_LINK</div>
          </div>
          <div class="content">
            ${this.message}
          </div>
          <div class="actions">
            <camelot-button 
              label="${this.cancelText}" 
              color="secondary" 
              @click="${this._onCancel}"
            ></camelot-button>
            <camelot-button 
              label="${this.confirmText}" 
              color="${this.color}" 
              @click="${this._onConfirm}"
            ></camelot-button>
          </div>
          <div class="dialog-decor">0x7F - CODE_AB72</div>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'camelot-scifi-confirm-dialog-impl': CamelotScifiConfirmDialog;
  }
}
