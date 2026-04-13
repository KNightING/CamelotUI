import { html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { CamelotScifiBase } from '../scifi/CamelotScifiBase';
import '../scifi/CamelotScifiFrame';

/**
 * <CamelotScifiInput>
 * 日系科幻風格 (Sci-fi HUD) 的輸入框元件實作。
 * 已優化：使用 CamelotScifiBase 與 CamelotScifiFrame 進行統一化管理。
 */
@customElement('camelot-scifi-input-impl')
export class CamelotScifiInput extends CamelotScifiBase {
  @property({ type: String }) label = '';
  @property({ type: String }) value = '';
  @property({ type: String }) placeholder = '';
  @property({ type: String }) type = 'text';

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
        color: var(--cml-scifi-color);
        text-shadow: 0 0 8px color-mix(in srgb, var(--cml-scifi-color), transparent 50%);
      }

      .input-wrapper {
        position: relative;
        width: 100%;
        transition: transform 0.2s ease;
      }
// ... existing input wrapper styles
      .input-wrapper:hover {
        transform: translateY(-1px);
      }
      input {
        width: 100%;
        padding: 10px 20px;
        background: transparent;
        border: none;
        outline: none;
        color: var(--cml-color-on-surface);
        font-family: var(--cml-font-family);
        font-size: 0.95rem;
        box-sizing: border-box;
        transition: color 0.2s ease;
      }
      input::placeholder {
        color: color-mix(in srgb, var(--cml-scifi-color) 40%, var(--cml-color-on-surface));
        opacity: 0.5;
      }
      
      :host([focused]) input {
        color: var(--cml-scifi-color);
        text-shadow: 0 0 8px color-mix(in srgb, var(--cml-scifi-color), transparent 50%);
        font-weight: 600;
      }
    `
  ];

  private _handleInput(e: Event) {
    const target = e.target as HTMLInputElement;
    this.value = target.value;
    this.dispatchEvent(new CustomEvent('input', {
      detail: { value: this.value },
      bubbles: true,
      composed: true
    }));
  }

  render() {
    return html`
      <div class="input-container">
        ${this.label ? html`<div class="label-text">${this.label}</div>` : ''}
        <camelot-scifi-frame 
          .color="${this.color}"
          ?focused="${this._isFocused}"
          ?show-pulse="${this._isFocused}"
          ?show-grid="${false}"
          ?show-scanline="${this._isFocused}"
          ?show-shine="${this._isFocused || this._isHovered}"
          .activeReticle="${this._isFocused || (this._isHovered && !this.disabled)}"
          @mouseenter="${this._handleMouseEnter}"
          @mouseleave="${this._handleMouseLeave}"
          @focus="${this._handleFocus}"
          @blur="${this._handleBlur}"
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
        </camelot-scifi-frame>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'camelot-scifi-input-impl': CamelotScifiInput;
  }
}
