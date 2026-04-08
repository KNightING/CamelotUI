import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('camelot-soft-icon-button')
export class CamelotSoftIconButton extends LitElement {
  @property({ type: String })
  color: 'primary' | 'secondary' | 'tertiary' = 'primary';

  @property({ type: String })
  shape: 'circle' | 'square' = 'circle';

  @property({ type: Boolean })
  disabled: boolean = false;

  static styles = css`
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
    }

    button:disabled {
      cursor: not-allowed;
      opacity: 0.5;
      box-shadow: none !important;
    }

    .circle { border-radius: 50%; }
    .square { border-radius: 12px; }

    /* Neumorphism Shadows */
    button {
      box-shadow: 
        var(--cml-soft-distance) var(--cml-soft-distance) var(--cml-soft-blur) var(--cml-soft-color-dark), 
        calc(-1 * var(--cml-soft-distance)) calc(-1 * var(--cml-soft-distance)) var(--cml-soft-blur) var(--cml-soft-color-light);
    }

    button:active:not(:disabled) {
      box-shadow: 
        inset var(--cml-soft-distance) var(--cml-soft-distance) var(--cml-soft-blur) var(--cml-soft-color-dark), 
        inset calc(-1 * var(--cml-soft-distance)) calc(-1 * var(--cml-soft-distance)) var(--cml-soft-blur) var(--cml-soft-color-light);
      transform: scale(0.96);
    }

    /* Soft Icon Button Colors */
    .primary { color: var(--cml-color-primary); }
    .secondary { color: var(--cml-color-secondary); }
    .tertiary { color: var(--cml-color-tertiary); }
  `;

  render() {
    return html`
      <button 
        class="${this.shape} ${this.color}"
        ?disabled="${this.disabled}"
      >
        <slot></slot>
      </button>
    `;
  }
}
