import { html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { CamelotBaseElement } from '../../base/CamelotBaseElement';

/**
 * <CamelotSoftOutlineButton>
 * Soft UI (Neumorphism) 風格的邊框按鈕
 */
@customElement('camelot-soft-outline-button')
export class CamelotSoftOutlineButton extends CamelotBaseElement {
  @property({ type: String })
  label: string = 'Button';

  static styles = [
    css`
      :host {
        display: inline-block;
      }

      button {
        font-family: var(--cml-font-family);
        font-weight: var(--cml-font-weight-medium);
        font-size: var(--cml-font-size-label);
        background-color: var(--cml-color-background);
        padding: 12px 28px;
        border: 1px solid var(--cml-color-current-color);
        border-radius: 20px;
        cursor: pointer;
        transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        outline: none;
        
        /* 使用統一主題變數 */
        color: var(--cml-color-current-color);
        
        box-shadow: 
          calc(var(--cml-soft-distance) / 2) calc(var(--cml-soft-distance) / 2) calc(var(--cml-soft-blur) / 2) var(--cml-soft-color-dark);
      }

      button:disabled {
        cursor: not-allowed;
        opacity: 0.5;
        box-shadow: none !important;
      }

      button:active:not(:disabled) {
        background-color: rgba(0, 0, 0, 0.05);
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
    'camelot-soft-outline-button': CamelotSoftOutlineButton;
  }
}
