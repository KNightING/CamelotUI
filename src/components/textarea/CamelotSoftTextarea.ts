import { html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { CamelotBaseTextarea } from './CamelotBaseTextarea';
import '../label/CamelotLabel';

/**
 * <CamelotSoftTextarea>
 * Neumorphism 風格的長文字輸入框，內凹陰影效果。
 * 已優化：繼承 CamelotBaseTextarea 以共用基礎邏輯。
 */
@customElement('camelot-soft-textarea')
export class CamelotSoftTextarea extends CamelotBaseTextarea {
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

      textarea {
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
        resize: vertical;
        min-height: 100px;
      }

      textarea:focus {
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
        ${this.label ? html`<camelot-label .text="${this.label}" .color="${this.color}" .for="textarea"></camelot-label>` : ''}
        <textarea 
          id="textarea"
          .rows=${this.rows}
          .value=${this.value}
          placeholder=${this.placeholder}
          ?disabled=${this.disabled}
          @input=${this._handleInput}
          @focus=${this._handleFocus}
          @blur=${this._handleBlur}
        ></textarea>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'camelot-soft-textarea': CamelotSoftTextarea;
  }
}
