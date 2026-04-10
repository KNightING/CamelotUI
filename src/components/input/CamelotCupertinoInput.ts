import { html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { CamelotBaseElement } from '../base/CamelotBaseElement';
import '../label/CamelotLabel';

/**
 * <CamelotCupertinoInput>
 * iOS 風格的輸入框，具備 Apple 設計語言的標籤。
 */
@customElement('camelot-cupertino-input')
export class CamelotCupertinoInput extends CamelotBaseElement {
  @property({ type: String })
  label: string = '';

  @property({ type: String })
  value: string = '';

  @property({ type: String })
  placeholder: string = '';

  static styles = [
    css`
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
        background-color: var(--cml-color-current-bg-color);
        color: var(--cml-color-on-surface);
        outline: none;
        transition: all 0.2s ease-in-out;
      }

      input:focus {
        background-color: var(--cml-color-surface);
        box-shadow: inset 0 0 0 1px var(--cml-color-current-color);
      }

      .disabled {
        opacity: 0.3;
        cursor: not-allowed;
        pointer-events: none;
      }
    `
  ];

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
      <div class="container ${this.disabled ? 'disabled' : ''}">
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

declare global {
  interface HTMLElementTagNameMap {
    'camelot-cupertino-input': CamelotCupertinoInput;
  }
}
