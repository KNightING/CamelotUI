import { html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { CamelotBaseElement } from '../../base/CamelotBaseElement';

/**
 * <CamelotCupertinoIconButton>
 * iOS 風格的圖示按鈕。
 */
@customElement('camelot-cupertino-icon-button')
export class CamelotCupertinoIconButton extends CamelotBaseElement {
  @property({ type: String })
  shape: 'circle' | 'square' = 'circle';

  static styles = [
    css`
      :host {
        display: inline-block;
      }

      button {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 44px;
        height: 44px;
        padding: 0;
        border: none;
        cursor: pointer;
        background-color: transparent;
        transition: opacity 0.2s, transform 0.1s, background-color 0.2s;
        outline: none;
        
        /* 使用統一主題變數 */
        color: var(--cml-color-current-color);
      }

      button:disabled {
        cursor: not-allowed;
        opacity: 0.3;
        filter: grayscale(1);
      }

      .circle { border-radius: 50%; }
      .square { border-radius: 10px; }

      button:active:not(:disabled) {
        opacity: 0.6;
        background-color: rgba(0, 0, 0, 0.05);
        transform: scale(0.92);
      }
    `
  ];

  render() {
    return html`
      <button 
        class="${this.shape}"
        ?disabled="${this.disabled}"
      >
        <slot></slot>
      </button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'camelot-cupertino-icon-button': CamelotCupertinoIconButton;
  }
}
