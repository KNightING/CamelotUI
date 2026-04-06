import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * <CamelotCupertinoButton>
 * 具備 iOS 風格的按鈕，圓角與半透明模糊效果。
 */
@customElement('camelot-cupertino-button')
export class CamelotCupertinoButton extends LitElement {
  @property({ type: String })
  label: string = 'Cupertino Button';

  static styles = css`
    :host {
      display: inline-block;
    }

    button {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      font-weight: 400;
      font-size: 17px; /* iOS 標準字級 */
      background-color: var(--cml-color-primary); 
      color: var(--cml-color-on-primary);
      padding: 12px 20px;
      border: none;
      border-radius: 12px;
      cursor: pointer;
      transition: opacity 0.2s, transform 0.1s, filter 0.2s;
    }

    button:hover {
      filter: brightness(1.1);
    }

    button:active {
      opacity: 0.7;
      transform: scale(0.97);
    }
  `;

  render() {
    return html`
      <button>
        ${this.label}
        <slot></slot>
      </button>
    `;
  }
}
