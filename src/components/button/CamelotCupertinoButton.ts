import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * <CamelotCupertinoButton>
 * 具備 iOS 風格的按鈕，圓角與半透明模糊效果。
 */
@customElement('camelot-cupertino-button')
export class CamelotCupertinoButton extends LitElement {
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
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      font-weight: 400;
      font-size: 17px;
      padding: 12px 20px;
      border: none;
      border-radius: 12px;
      cursor: pointer;
      transition: opacity 0.2s, transform 0.1s, filter 0.2s, background-color 0.2s;
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

    /* Color Variants - Filled */
    .filled.primary { background-color: var(--cml-color-primary); color: var(--cml-color-on-primary); }
    .filled.secondary { background-color: var(--cml-color-secondary); color: var(--cml-color-on-secondary); }
    .filled.tertiary { background-color: var(--cml-color-tertiary); color: var(--cml-color-on-tertiary); }
    
    /* Outlined Variant (iOS style Bordered) */
    .outlined {
      background-color: transparent;
      border: 0.5px solid currentColor;
    }
    .outlined.primary { color: var(--cml-color-primary); }
    .outlined.secondary { color: var(--cml-color-secondary); }
    .outlined.tertiary { color: var(--cml-color-tertiary); }

    /* Text Variant (iOS Plain) */
    .text {
      background-color: transparent;
    }
    .text.primary { color: var(--cml-color-primary); }
    .text.secondary { color: var(--cml-color-secondary); }
    .text.tertiary { color: var(--cml-color-tertiary); }

    button:active:not(:disabled) {
      opacity: 0.6;
      transform: scale(0.97);
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
