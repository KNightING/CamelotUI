import { html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { CamelotBaseElement } from '../../base/CamelotBaseElement';

/**
 * <CamelotSoftIconButton>
 * Soft UI (Neumorphism) 風格的圖示按鈕。
 */
@customElement('camelot-soft-icon-button')
export class CamelotSoftIconButton extends CamelotBaseElement {
  @property({ type: String })
  shape: 'circle' | 'square' = 'circle';

  @property({ type: Boolean, reflect: true })
  disabled: boolean = false;

  static styles = [
    css`
      :host {
        display: inline-block;
      }

      button {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 48px;
        height: 48px;
        padding: 0;
        border: none;
        cursor: pointer;
        background-color: var(--cml-color-background);
        transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        outline: none;
        
        /* 使用統一主題變數 */
        color: var(--cml-color-current-color);

        /* Neumorphism Shadows */
        box-shadow: 
          var(--cml-soft-distance) var(--cml-soft-distance) var(--cml-soft-blur) var(--cml-soft-color-dark), 
          calc(-1 * var(--cml-soft-distance)) calc(-1 * var(--cml-soft-distance)) var(--cml-soft-blur) var(--cml-soft-color-light);
      }

      button:disabled {
        cursor: not-allowed;
        opacity: 0.5;
        box-shadow: none !important;
      }

      .circle { border-radius: 50%; }
      .square { border-radius: 12px; }

      button:active:not(:disabled) {
        box-shadow: 
          inset var(--cml-soft-distance) var(--cml-soft-distance) var(--cml-soft-blur) var(--cml-soft-color-dark), 
          inset calc(-1 * var(--cml-soft-distance)) calc(-1 * var(--cml-soft-distance)) var(--cml-soft-blur) var(--cml-soft-color-light);
        transform: scale(0.96);
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
    'camelot-soft-icon-button': CamelotSoftIconButton;
  }
}
