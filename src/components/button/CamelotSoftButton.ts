import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * <CamelotSoftButton>
 * 具備 Neumorphism (Soft UI) 風格的按鈕，利用光源陰影營造凹凸感。
 */
@customElement('camelot-soft-button')
export class CamelotSoftButton extends LitElement {
  @property({ type: String })
  label: string = 'Soft Button';

  static styles = css`
    :host {
      display: inline-block;
    }

    button {
      font-family: var(--cml-font-family);
      font-weight: var(--cml-font-weight-medium);
      font-size: var(--cml-font-size-label);
      background-color: var(--cml-color-background); /* 與背景色相同 */
      color: var(--cml-color-on-background);
      padding: 12px 28px;
      border: none;
      border-radius: 20px;
      cursor: pointer;
      box-shadow: 
        var(--cml-soft-distance) var(--cml-soft-distance) var(--cml-soft-blur) var(--cml-soft-color-dark), 
        calc(-1 * var(--cml-soft-distance)) calc(-1 * var(--cml-soft-distance)) var(--cml-soft-blur) var(--cml-soft-color-light);
      transition: box-shadow 0.2s, transform 0.1s;
    }

    button:active {
      box-shadow: 
        inset var(--cml-soft-distance) var(--cml-soft-distance) var(--cml-soft-blur) var(--cml-soft-color-dark), 
        inset calc(-1 * var(--cml-soft-distance)) calc(-1 * var(--cml-soft-distance)) var(--cml-soft-blur) var(--cml-soft-color-light);
      transform: scale(0.98);
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
