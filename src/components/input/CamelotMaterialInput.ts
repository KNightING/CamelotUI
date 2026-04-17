import { html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { CamelotBaseInput } from './CamelotBaseInput';
import '../label/CamelotLabel';

/**
 * <CamelotMaterialInput>
 * Material 3 風格的輸入框，具備 Floating Label 效果。
 * 已優化：繼承 CamelotBaseInput 以共用基礎邏輯。
 */
@customElement('camelot-material-input')
export class CamelotMaterialInput extends CamelotBaseInput {
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
        height: 56px;
        padding: 0 16px;
        display: flex;
        align-items: center;
        transition: all 0.2s;
      }

      .md-field:focus-within {
        border-bottom-width: 2px;
        border-bottom-color: var(--cml-color-current-color);
      }

      input {
        width: 100%;
        background: none;
        border: none;
        outline: none;
        padding: 20px 0 8px 0;
        font-size: 1rem;
        color: var(--cml-color-on-surface);
        caret-color: var(--cml-color-current-color);
      }
      
      input::placeholder {
        color: transparent;
        transition: color 0.1s;
      }
      
      input:focus::placeholder {
        color: var(--cml-color-on-surface-variant);
      }

      camelot-label {
        position: absolute;
        left: 16px;
        top: 18px;
        pointer-events: none;
        transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
      }

      .floating camelot-label {
        transform: translateY(-14px);
      }

      .disabled {
        opacity: 0.38;
        cursor: not-allowed;
        pointer-events: none;
      }
    `
  ];

  render() {
    const isFloating = this._isFocused || (this.value && this.value.length > 0);
    
    return html`
      <div class="md-field ${isFloating ? 'floating' : ''} ${this.disabled ? 'disabled' : ''}">
        <input 
          id="input"
          type="${this.type}"
          placeholder="${this.placeholder || ''}"
          .value=${this.value}
          ?disabled=${this.disabled}
          @focus=${this._handleFocus}
          @blur=${this._handleBlur}
          @input=${this._handleInput}
        />
        ${this.label ? html`<camelot-label .text="${this.label}" .color="${isFloating ? this.color : 'outline'}" .for="input"></camelot-label>` : ''}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'camelot-material-input': CamelotMaterialInput;
  }
}


declare global {
  interface HTMLElementTagNameMap {
    'camelot-material-input': CamelotMaterialInput;
  }
}
