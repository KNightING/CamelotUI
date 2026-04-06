import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * <CamelotCupertinoInput>
 * iOS 風格的輸入框，圓角與半透明模糊效果。
 */
@customElement('camelot-cupertino-input')
export class CamelotCupertinoInput extends LitElement {
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
      gap: 4px;
    }

    label {
      font-family: -apple-system, sans-serif;
      font-size: 13px;
      color: var(--cml-color-on-surface-variant);
      margin-left: 12px;
    }

    input {
      font-family: -apple-system, system-ui, sans-serif;
      font-size: 17px;
      padding: 12px 16px;
      border: none;
      border-radius: 12px;
      background-color: var(--cml-color-surface-variant);
      color: var(--cml-color-on-surface);
      outline: none;
      transition: background-color 0.2s;
    }

    input:focus {
      background-color: var(--cml-color-surface);
      box-shadow: inset 0 0 0 1px var(--cml-color-primary);
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
