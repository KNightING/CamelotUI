import { html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { CamelotBaseElement } from '../../base/CamelotBaseElement';

/**
 * <CamelotCupertinoTextButton>
 * iOS風格的文字按鈕 (Text Button)
 */
@customElement('camelot-cupertino-text-button')
export class CamelotCupertinoTextButton extends CamelotBaseElement {
  @property({ type: String })
  label: string = 'Button';

  @property({ type: Boolean, reflect: true })
  disabled: boolean = false;

  static styles = [
    css`
      :host {
        display: inline-block;
      }

      button {
        font-family: var(--cml-font-family);
        font-weight: 400;
        font-size: 1.0625rem;
        padding: 12px 20px;
        border: none;
        background-color: transparent;
        border-radius: 12px;
        cursor: pointer;
        transition: opacity 0.2s, transform 0.1s;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        
        /* 使用統一主題變數 */
        color: var(--cml-color-current-color);
      }

      button:disabled {
        cursor: not-allowed;
        opacity: 0.3;
        filter: grayscale(1);
      }

      button:active:not(:disabled) {
        opacity: 0.6;
        transform: scale(0.97);
      }
    `
  ];

  render() {
    return html`
      <button 
        ?disabled="${this.disabled}"
      >
        ${this.label}
        <slot></slot>
      </button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'camelot-cupertino-text-button': CamelotCupertinoTextButton;
  }
}
