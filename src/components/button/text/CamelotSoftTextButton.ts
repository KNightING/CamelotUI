import { html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { CamelotBaseElement } from '../../base/CamelotBaseElement';

/**
 * <CamelotSoftTextButton>
 * Soft UI (Neumorphism) 風格的文字按鈕
 */
@customElement('camelot-soft-text-button')
export class CamelotSoftTextButton extends CamelotBaseElement {
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
        background: transparent;
        padding: 12px 28px;
        border: none;
        border-radius: 20px;
        cursor: pointer;
        transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        outline: none;
        box-shadow: none;
        
        /* 使用統一主題變數 */
        color: var(--cml-color-current-color);
      }

      button:disabled {
        cursor: not-allowed;
        opacity: 0.5;
        color: var(--cml-color-outline) !important;
      }

      button:hover:not(:disabled) {
        background-color: var(--cml-color-current-color);
        color: var(--cml-color-current-on-color);
        opacity: 0.08;
        border-radius: 12px;
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
    'camelot-soft-text-button': CamelotSoftTextButton;
  }
}
