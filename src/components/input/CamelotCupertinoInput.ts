import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import '../label/CamelotLabel';

/**
 * <CamelotCupertinoInput>
 * iOS 風格的輸入框，具備 Apple 設計語言的標籤。
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

    input {
      font-family: var(--cml-font-family);
      font-size: 1.0625rem;
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
    .secondary.container input:focus { box-shadow: inset 0 0 0 1px var(--cml-color-secondary); }
    .tertiary.container input:focus { box-shadow: inset 0 0 0 1px var(--cml-color-tertiary); }

    .disabled {
      opacity: 0.3;
      cursor: not-allowed;
      pointer-events: none;
    }
  `;

  private _handleInput(e: Event) {
    this.value = (e.target as HTMLInputElement).value;
    this.dispatchEvent(new CustomEvent('change', {
      detail: { value: this.value },
      bubbles: true,
      composed: true
    }));
  }

  render() {
    return html`
      <div class="container ${this.color} ${this.disabled ? 'disabled' : ''}">
        ${this.label ? html`<camelot-label .text="${this.label}" .color="${this.color}" .for="input"></camelot-label>` : ''}
        <input 
          id="input"
          .value=${this.value}
          placeholder=${this.placeholder}
          ?disabled=${this.disabled}
          @input=${this._handleInput}
        />
      </div>
    `;
  }
}
