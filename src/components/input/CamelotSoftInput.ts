import { html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { CamelotBaseInput } from './CamelotBaseInput';
import '../label/CamelotLabel';

/**
 * <CamelotSoftInput>
 * Neumorphism 風格的輸入框，內凹陰影效果。
 * 已優化：繼承 CamelotBaseInput 以共用基礎邏輯。
 */
@customElement('camelot-soft-input')
export class CamelotSoftInput extends CamelotBaseInput {
  static styles = [
    css`
      :host {
        display: block;
      }

      .container {
        display: flex;
        flex-direction: column;
        gap: 12px;
      }

      input {
        font-family: var(--cml-font-family);
        font-size: 1rem;
        padding: 16px 20px;
        border: none;
        border-radius: 16px;
        background-color: var(--cml-color-current-bg-color);
        color: var(--cml-color-on-background);
        outline: none;
        box-shadow: 
          inset var(--cml-soft-distance) var(--cml-soft-distance) var(--cml-soft-blur) var(--cml-soft-color-dark), 
          inset calc(-1 * var(--cml-soft-distance)) calc(-1 * var(--cml-soft-distance)) var(--cml-soft-blur) var(--cml-soft-color-light);
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      }

      input:focus {
        box-shadow: 
          inset calc(var(--cml-soft-distance) * 0.5) calc(var(--cml-soft-distance) * 0.5) var(--cml-soft-blur) var(--cml-soft-color-dark), 
          inset calc(-1 * var(--cml-soft-distance) * 0.5) calc(-1 * var(--cml-soft-distance) * 0.5) var(--cml-soft-blur) var(--cml-soft-color-light);
      }

      .disabled {
        opacity: 0.3;
        cursor: not-allowed;
        box-shadow: none !important;
        pointer-events: none;
      }
    `
  ];

  render() {
    return html`
      <div class="container ${this.disabled ? 'disabled' : ''}">
        ${this.label ? html`<camelot-label .text="${this.label}" .color="${this.color}" .for="input"></camelot-label>` : ''}
        <input 
          id="input"
          type="${this.type}"
          .value=${this.value}
          placeholder=${this.placeholder}
          ?disabled=${this.disabled}
          @input=${this._handleInput}
          @focus=${this._handleFocus}
          @blur=${this._handleBlur}
        />
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'camelot-soft-input': CamelotSoftInput;
  }
}


declare global {
  interface HTMLElementTagNameMap {
    'camelot-soft-input': CamelotSoftInput;
  }
}
