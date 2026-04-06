import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('camelot-cupertino-icon-button')
export class CamelotCupertinoIconButton extends LitElement {
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
      width: 44px;
      height: 44px;
      padding: 0;
      border: none;
      cursor: pointer;
      background-color: transparent;
      transition: opacity 0.2s, transform 0.1s, background-color 0.2s;
      outline: none;
    }

    button:disabled {
      cursor: not-allowed;
      opacity: 0.3;
      filter: grayscale(1);
    }

    .circle { border-radius: 50%; }
    .square { border-radius: 10px; }

    /* Cupertino Icon Button Colors - iOS style (vibrant) */
    .primary { color: var(--cml-color-primary); }
    .secondary { color: var(--cml-color-secondary); }
    .tertiary { color: var(--cml-color-tertiary); }

    button:active:not(:disabled) {
      opacity: 0.6;
      background-color: rgba(0, 0, 0, 0.05);
      transform: scale(0.92);
    }
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
