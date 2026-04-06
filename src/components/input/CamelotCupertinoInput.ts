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

  @property({ type: String })
  placeholder: string = '';

  @property({ type: String })
  color: 'primary' | 'secondary' | 'tertiary' = 'primary';

  @property({ type: Boolean })
  disabled: boolean = false;

  static styles = css`
    :host {
      display: block;
    }

    .container {
      display: flex;
      flex-direction: column;
      gap: 6px;
    }

    label {
      font-family: -apple-system, sans-serif;
      font-size: 13px;
      color: rgba(60, 60, 67, 0.6);
      margin-left: 12px;
      text-transform: uppercase;
      letter-spacing: -0.01em;
    }

    input {
      font-family: -apple-system, system-ui, sans-serif;
      font-size: 17px;
      padding: 12px 16px;
      border: none;
      border-radius: 10px;
      background-color: rgba(120, 120, 128, 0.12);
      color: var(--cml-color-on-surface);
      outline: none;
      transition: all 0.2s ease-in-out;
    }

    input:focus {
      background-color: var(--cml-color-surface);
      box-shadow: inset 0 0 0 1px var(--cml-color-primary);
    }
    .secondary input:focus { box-shadow: inset 0 0 0 1px var(--cml-color-secondary); }
    .tertiary input:focus { box-shadow: inset 0 0 0 1px var(--cml-color-tertiary); }

    .disabled {
      opacity: 0.3;
      cursor: not-allowed;
      pointer-events: none;
    }
  `;

  render() {
    return html`
      <div class="container ${this.color} ${this.disabled ? 'disabled' : ''}">
        ${this.label ? html`<label>${this.label}</label>` : ''}
        <input 
          .value=${this.value}
          placeholder=${this.placeholder}
          ?disabled=${this.disabled}
          @input=${(e: Event) => this.value = (e.target as HTMLInputElement).value}
        />
      </div>
    `;
  }
}
