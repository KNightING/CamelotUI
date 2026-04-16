import { html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { CamelotBaseElement } from '../base/CamelotBaseElement';
import '../label/CamelotLabel';

/**
 * <CamelotCupertinoTextarea>
 * iOS 風格的長文字輸入框，具備 Apple 設計語言的標籤。
 */
@customElement('camelot-cupertino-textarea')
export class CamelotCupertinoTextarea extends CamelotBaseElement {
  @property({ type: String })
  label: string = '';
  
  @property({ type: Boolean })
  disabled: boolean = false;

  @property({ type: String })
  value: string = '';

  @property({ type: String })
  placeholder: string = '';

  @property({ type: Number })
  rows: number = 3;

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

      textarea {
        font-family: var(--cml-font-family);
        font-size: 1.0625rem;
        padding: 12px 16px;
        border: none;
        border-radius: 10px;
        background-color: var(--cml-color-current-bg-color);
        color: var(--cml-color-on-surface);
        outline: none;
        transition: all 0.2s ease-in-out;
        resize: vertical;
        min-height: 80px;
      }

      textarea:focus {
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
    this.value = (e.target as HTMLTextAreaElement).value;
    this.dispatchEvent(new CustomEvent('input', {
      detail: { value: this.value },
      bubbles: true,
      composed: true
    }));
  }

  render() {
    return html`
      <div class="container ${this.disabled ? 'disabled' : ''}">
        ${this.label ? html`<camelot-label .text="${this.label}" .color="${this.color}" .for="textarea"></camelot-label>` : ''}
        <textarea 
          id="textarea"
          .rows=${this.rows}
          .value=${this.value}
          placeholder=${this.placeholder}
          ?disabled=${this.disabled}
          @input=${this._handleInput}
        ></textarea>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'camelot-cupertino-textarea': CamelotCupertinoTextarea;
  }
}
