import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * <CamelotSoftOutlineButton>
 * Soft UI (Neumorphism) 風格的邊框按鈕
 */
@customElement('camelot-soft-outline-button')
export class CamelotSoftOutlineButton extends LitElement {
  @property({ type: String })
  label: string = 'Button';

  @property({ type: String })
  color: 'primary' | 'secondary' | 'tertiary' = 'primary';

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
      border: 1px solid currentColor;
      border-radius: 20px;
      cursor: pointer;
      transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      outline: none;
      
      box-shadow: 
        calc(var(--cml-soft-distance) / 2) calc(var(--cml-soft-distance) / 2) calc(var(--cml-soft-blur) / 2) var(--cml-soft-color-dark);
    }

    button:disabled {
      cursor: not-allowed;
      opacity: 0.5;
      box-shadow: none !important;
    }

    .primary { color: var(--cml-color-primary); }
    .secondary { color: var(--cml-color-secondary); }
    .tertiary { color: var(--cml-color-tertiary); }

    button:active:not(:disabled) {
      background-color: rgba(0, 0, 0, 0.05);
    }
  `;

  render() {
    return html`
      <button 
        class="${this.color}"
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
