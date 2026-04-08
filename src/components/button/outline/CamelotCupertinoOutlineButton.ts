import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * <CamelotCupertinoOutlineButton>
 * iOS風格的邊框按鈕 (Outline Button)
 */
@customElement('camelot-cupertino-outline-button')
export class CamelotCupertinoOutlineButton extends LitElement {
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
      font-weight: 400;
      font-size: 1.0625rem;
      padding: 12px 20px;
      border: 0.5px solid currentColor;
      background-color: transparent;
      border-radius: 12px;
      cursor: pointer;
      transition: opacity 0.2s, transform 0.1s;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
    }

    button:disabled {
      cursor: not-allowed;
      opacity: 0.3;
      filter: grayscale(1);
    }

    .primary { color: var(--cml-color-primary); }
    .secondary { color: var(--cml-color-secondary); }
    .tertiary { color: var(--cml-color-tertiary); }

    button:active:not(:disabled) {
      opacity: 0.6;
      transform: scale(0.97);
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
    'camelot-cupertino-outline-button': CamelotCupertinoOutlineButton;
  }
}
