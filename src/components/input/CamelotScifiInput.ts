import { html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { CamelotBaseInput } from './CamelotBaseInput';
import '../scifi/CamelotScifiHUD';

/**
 * <CamelotScifiInput>
 * 日系科幻風格 (Sci-fi HUD) 的輸入框元件實作。
 * 已優化：繼承 CamelotBaseInput 以共用基礎邏輯，並使用 CamelotScifiHUD 進行包裝。
 */
@customElement('camelot-scifi-input-impl')
export class CamelotScifiInput extends CamelotBaseInput {
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
        display: flex;
        align-items: center;
        width: 100%;
        height: 36px;
        padding: 0 8px;
        box-sizing: border-box;
      }

      input {
        width: 100%;
        background: transparent;
        border: none;
        outline: none;
        color: var(--cml-color-on-surface);
        font-family: var(--cml-font-family, inherit);
        font-size: 14px;
        padding: 0;
        transition: color 0.2s ease;
      }

      input::placeholder {
        color: color-mix(in srgb, var(--cml-color-current-color) 40%, var(--cml-color-on-surface));
        opacity: 0.5;
      }
      
      :host([focused]) input {
        color: var(--cml-color-current-color);
        text-shadow: 0 0 8px color-mix(in srgb, var(--cml-color-current-color), transparent 50%);
        font-weight: 600;
      }
    `
  ];

  override render() {
    return html`
      <div class="input-container">
        ${this.label ? html`<div class="label-text">${this.label}</div>` : ''}
        <camelot-scifi-hud 
          .color="${this.color}"
          ?disabled="${this.disabled}"
          ?show-grid="${false}"
        >
          <div class="input-wrapper">
            <input 
              type="${this.type}"
              .value="${this.value}"
              placeholder="${this.placeholder}"
              ?disabled="${this.disabled}"
              @input="${this._handleInput}"
              @focus="${this._handleFocus}"
              @blur="${this._handleBlur}"
            />
          </div>
        </camelot-scifi-hud>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'camelot-scifi-input-impl': CamelotScifiInput;
  }
}

