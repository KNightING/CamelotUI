import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * <CamelotSoftButton>
 * 具備 Neumorphism (Soft UI) 風格的按鈕，利用光源陰影營造凹凸感。
 */
@customElement('camelot-soft-button')
export class CamelotSoftButton extends LitElement {
  @property({ type: String })
  label: string = 'Button';

  @property({ type: String })
  color: 'primary' | 'secondary' | 'tertiary' = 'primary';

  @property({ type: String })
  variant: 'filled' | 'outlined' | 'text' = 'filled';

  @property({ type: Boolean })
  disabled: boolean = false;

  static styles = css`
    :host {
      display: inline-block;
    }

    button {
      font-family: var(--cml-font-family);
      font-weight: var(--cml-font-weight-medium);
      font-size: var(--cml-font-size-label);
      background-color: var(--cml-color-background);
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
    }

    button:disabled {
      cursor: not-allowed;
      opacity: 0.5;
      box-shadow: none !important;
    }

    /* Color States - Control Text/Stroke colors in Soft UI */
    .primary { color: var(--cml-color-primary); }
    .secondary { color: var(--cml-color-secondary); }
    .tertiary { color: var(--cml-color-tertiary); }

    /* Filled Variant (Classic Neumorphism) */
    .filled {
      box-shadow: 
        var(--cml-soft-distance) var(--cml-soft-distance) var(--cml-soft-blur) var(--cml-soft-color-dark), 
        calc(-1 * var(--cml-soft-distance)) calc(-1 * var(--cml-soft-distance)) var(--cml-soft-blur) var(--cml-soft-color-light);
    }
    .filled:active:not(:disabled) {
      box-shadow: 
        inset var(--cml-soft-distance) var(--cml-soft-distance) var(--cml-soft-blur) var(--cml-soft-color-dark), 
        inset calc(-1 * var(--cml-soft-distance)) calc(-1 * var(--cml-soft-distance)) var(--cml-soft-blur) var(--cml-soft-color-light);
      transform: scale(0.98);
    }

    /* Outlined Variant */
    .outlined {
      border: 1px solid currentColor;
      box-shadow: 
        calc(var(--cml-soft-distance) / 2) calc(var(--cml-soft-distance) / 2) calc(var(--cml-soft-blur) / 2) var(--cml-soft-color-dark);
    }
    .outlined:active:not(:disabled) {
      background-color: rgba(0, 0, 0, 0.05);
    }

    /* Text Variant */
    .text {
      background: transparent;
      box-shadow: none;
    }
    .text:hover:not(:disabled) {
      background-color: rgba(0, 0, 0, 0.05);
      border-radius: 12px;
    }
  `;

  render() {
    return html`
      <button 
        class="${this.variant} ${this.color}"
        ?disabled="${this.disabled}"
      >
        ${this.label}
        <slot></slot>
      </button>
    `;
  }
}
