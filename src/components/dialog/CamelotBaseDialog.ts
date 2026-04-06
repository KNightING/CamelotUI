import { html, css } from 'lit';
import { query, property } from 'lit/decorators.js';
import { CamelotBaseElement } from '../base/CamelotBaseElement';

/**
 * <CamelotBaseDialog>
 * 封裝原生 <dialog> 元素的對話框容器。
 * 提供基礎的視窗管理邏輯與樣式。
 */
export class CamelotBaseDialog extends CamelotBaseElement {
  @property({ type: Boolean, reflect: true })
  open = false;

  @query('dialog')
  dialogElement!: HTMLDialogElement;

  static styles = [
    css`
      :host {
        display: block;
        visibility: hidden;
      }

      :host([open]) {
        visibility: visible;
      }

      dialog {
        padding: 0;
        border: none;
        background: transparent;
        overflow: visible;
        max-width: 90vw;
        max-height: 90vh;
        outline: none;
      }

      dialog::backdrop {
        background-color: rgba(0, 0, 0, 0.5);
        backdrop-filter: blur(4px);
        transition: opacity 0.3s ease;
      }

      /* 讓對話框在桌面端寬度適中 */
      @media (min-width: 600px) {
        dialog {
          min-width: 400px;
        }
      }
    `
  ];

  /**
   * 開啟對話框
   */
  async show() {
    this.open = true;
    await this.updateComplete; // 等待 Lit 完成 DOM 更新
    if (this.dialogElement && !this.dialogElement.open) {
      this.dialogElement.showModal();
    }
  }

  /**
   * 關閉對話框
   */
  hide() {
    this.open = false;
    if (this.dialogElement && this.dialogElement.open) {
      this.dialogElement.close();
    }
  }

  protected updated(changedProperties: Map<string | number | symbol, unknown>) {
    super.updated(changedProperties);
    if (changedProperties.has('open')) {
      if (this.open) {
        this.show();
      } else {
        this.hide();
      }
    }
  }

  private _handleCancel() {
    if (this.open) {
      this.open = false;
      this.dispatchEvent(new CustomEvent('cancel', { bubbles: true, composed: true }));
    }
  }

  render() {
    return html`
      <dialog @cancel="${this._handleCancel}">
        <slot></slot>
      </dialog>
    `;
  }
}
