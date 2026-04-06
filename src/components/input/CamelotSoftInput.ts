import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * <CamelotSoftInput>
 * Neumorphism 風格的輸入框，內凹陰影效果。
 */
@customElement('camelot-soft-input')
export class CamelotSoftInput extends LitElement {
  @property({ type: String })
  label: string = '';

  @property({ type: String })
  value: string = '';

  static styles = css`
    :host {
      display: block;
      margin-bottom: 24px;
    }

    .container {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    label {
      font-family: var(--cml-font-family);
      font-size: var(--cml-font-size-label);
      font-weight: var(--cml-font-weight-medium);
      color: var(--cml-color-on-background);
      margin-left: 8px;
    }

    input {
      font-family: var(--cml-font-family);
      font-size: 16px;
      padding: 16px 20px;
      border: none;
      border-radius: 20px;
      background-color: var(--cml-color-background);
      color: var(--cml-color-on-background);
      outline: none;
      box-shadow: 
        inset var(--cml-soft-distance) var(--cml-soft-distance) var(--cml-soft-blur) var(--cml-soft-color-dark), 
        inset calc(-1 * var(--cml-soft-distance)) calc(-1 * var(--cml-soft-distance)) var(--cml-soft-blur) var(--cml-soft-color-light);
      transition: box-shadow 0.2s;
    }

    input:focus {
      box-shadow: 
        inset var(--cml-soft-distance) var(--cml-soft-distance) calc(var(--cml-soft-blur) * 1.5) var(--cml-soft-color-dark), 
        inset calc(-1 * var(--cml-soft-distance)) calc(-1 * var(--cml-soft-distance)) calc(var(--cml-soft-blur) * 1.5) var(--cml-soft-color-light);
    }
  `;

  render() {
    return html`
      <div class="container">
        ${this.label ? html`<label>${this.label}</label>` : ''}
        <input 
          .value=${this.value}
          @input=${(e: Event) => this.value = (e.target as HTMLInputElement).value}
        />
      </div>
    `;
  }
}
