import { html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { CamelotBaseElement } from '../base/CamelotBaseElement';
import '../label/CamelotLabel';

/**
 * <CamelotMaterialTextarea>
 * Material 3 風格的長文字輸入框，具備 Floating Label 效果。
 */
@customElement('camelot-material-textarea')
export class CamelotMaterialTextarea extends CamelotBaseElement {
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

  @state()
  private _focused = false;

  static styles = [
    css`
      :host {
        display: block;
      }

      .md-field {
        position: relative;
        background-color: var(--cml-color-current-bg-color);
        border-radius: 4px 4px 0 0;
        border-bottom: 1px solid var(--cml-color-outline);
        padding: 0 16px;
        display: flex;
        flex-direction: column;
        transition: all 0.2s;
      }

      .md-field:focus-within {
        border-bottom-width: 2px;
        border-bottom-color: var(--cml-color-current-color);
      }

      textarea {
        width: 100%;
        background: none;
        border: none;
        outline: none;
        padding: 24px 0 8px 0;
        font-size: 1rem;
        font-family: inherit;
        color: var(--cml-color-on-surface);
        caret-color: var(--cml-color-current-color);
        resize: vertical;
        min-height: 40px;
      }
      
      textarea::placeholder {
        color: transparent;
        transition: color 0.1s;
      }
      
      textarea:focus::placeholder {
        color: var(--cml-color-on-surface-variant);
      }

      camelot-label {
        position: absolute;
        left: 16px;
        top: 20px;
        pointer-events: none;
        transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
      }

      .floating camelot-label {
        transform: translateY(-14px) scale(0.85);
        transform-origin: left top;
      }

      .disabled {
        opacity: 0.38;
        cursor: not-allowed;
        pointer-events: none;
      }
    `
  ];

  private _handleFocus() {
    this._focused = true;
  }

  private _handleBlur() {
    this._focused = false;
  }

  private _handleInput(e: Event) {
    this.value = (e.target as HTMLTextAreaElement).value;
    this.dispatchEvent(new CustomEvent('input', {
      detail: { value: this.value },
      bubbles: true,
      composed: true
    }));
  }

  render() {
    const isFloating = this._focused || (this.value && this.value.length > 0);
    
    return html`
      <div class="md-field ${isFloating ? 'floating' : ''} ${this.disabled ? 'disabled' : ''}">
        <textarea 
          id="textarea"
          .rows=${this.rows}
          placeholder="${this.placeholder || ''}"
          .value=${this.value}
          ?disabled=${this.disabled}
          @focus=${this._handleFocus}
          @blur=${this._handleBlur}
          @input=${this._handleInput}
        ></textarea>
        ${this.label ? html`<camelot-label .text="${this.label}" .color="${isFloating ? this.color : 'outline'}" .for="textarea"></camelot-label>` : ''}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'camelot-material-textarea': CamelotMaterialTextarea;
  }
}
