import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * <CamelotSoftFilledButton>
 * Soft UI (Neumorphism) 風格的實心按鈕
 */
@customElement('camelot-soft-filled-button')
export class CamelotSoftFilledButton extends LitElement {
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
      border: none;
      border-radius: 20px;
      cursor: pointer;
      transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      outline: none;
      
      box-shadow: 
        var(--cml-soft-distance) var(--cml-soft-distance) var(--cml-soft-blur) var(--cml-soft-color-dark), 
        calc(-1 * var(--cml-soft-distance)) calc(-1 * var(--cml-soft-distance)) var(--cml-soft-blur) var(--cml-soft-color-light);
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
      box-shadow: 
        inset var(--cml-soft-distance) var(--cml-soft-distance) var(--cml-soft-blur) var(--cml-soft-color-dark), 
        inset calc(-1 * var(--cml-soft-distance)) calc(-1 * var(--cml-soft-distance)) var(--cml-soft-blur) var(--cml-soft-color-light);
      transform: scale(0.98);
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
    'camelot-soft-filled-button': CamelotSoftFilledButton;
  }
}
