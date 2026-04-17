import { html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { CamelotBaseTextarea } from './CamelotBaseTextarea';
import '../scifi/CamelotScifiHUD';

/**
 * <CamelotScifiTextarea>
 * 日系科幻風格 (Sci-fi HUD) 的長文字輸入框元件實作。
 * 已優化：繼承 CamelotBaseTextarea 以共用基礎邏輯，並使用 CamelotScifiHUD 進行包裝。
 */
@customElement('camelot-scifi-textarea-impl')
export class CamelotScifiTextarea extends CamelotBaseTextarea {
  static styles = [
    css`
      :host {
        display: block;
        width: 100%;
      }
      .input-container {
        display: flex;
        flex-direction: column;
        gap: 6px;
      }
      .label-text {
        font-family: var(--cml-font-family);
        font-size: 0.75rem;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        color: var(--cml-color-on-surface);
        opacity: 0.8;
        padding-left: 4px;
        transition: all 0.2s ease;
      }
      :host([focused]) .label-text {
        opacity: 1;
        color: var(--cml-scifi-color, var(--cml-color-current-color));
        text-shadow: 0 0 8px color-mix(in srgb, var(--cml-scifi-color, var(--cml-color-current-color)), transparent 50%);
      }

      .input-wrapper {
        position: relative;
        width: 100%;
      }

      textarea {
        width: 100%;
        padding: 12px 20px;
        background: transparent;
        border: none;
        outline: none;
        color: var(--cml-color-on-surface);
        font-family: var(--cml-font-family);
        font-size: 0.95rem;
        box-sizing: border-box;
        transition: color 0.2s ease;
        resize: vertical;
        min-height: 100px;
      }
      textarea::placeholder {
        color: color-mix(in srgb, var(--cml-color-current-color) 40%, var(--cml-color-on-surface));
        opacity: 0.5;
      }
      
      :host([focused]) textarea {
        color: var(--cml-color-current-color);
        text-shadow: 0 0 8px color-mix(in srgb, var(--cml-color-current-color), transparent 50%);
        font-weight: 600;
      }
    `
  ];

  render() {
    return html`
      <div class="input-container">
        ${this.label ? html`<div class="label-text">${this.label}</div>` : ''}
        <camelot-scifi-hud 
          .color="${this.color}"
          ?disabled="${this.disabled}"
          ?show-grid="${false}"
        >
          <div class="input-wrapper">
            <textarea 
              .rows="${this.rows}"
              .value="${this.value}"
              placeholder="${this.placeholder}"
              ?disabled="${this.disabled}"
              @input="${this._handleInput}"
              @focus="${this._handleFocus}"
              @blur="${this._handleBlur}"
            ></textarea>
          </div>
        </camelot-scifi-hud>
      </div>
    `;
  }
}


declare global {
  interface HTMLElementTagNameMap {
    'camelot-scifi-textarea-impl': CamelotScifiTextarea;
  }
}
