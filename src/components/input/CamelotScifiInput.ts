import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

/**
 * <CamelotScifiInput>
 * 日系科幻風格 (Sci-fi HUD) 的輸入框元件實作。
 * 視覺重點：切角造型、動態掃描脈衝線。
 */
@customElement('camelot-scifi-input-impl')
export class CamelotScifiInput extends LitElement {
  @property({ type: String })
  label: string = '';

  @property({ type: String })
  value: string = '';

  @property({ type: String })
  placeholder: string = '';

  @state()
  private _isFocused = false;

  static styles = css`
    :host {
      display: block;
      --cml-scifi-color: var(--cml-color-primary);
      --cml-scifi-bg: color-mix(in srgb, var(--cml-scifi-color), transparent 96%);
      font-family: 'Share Tech Mono', monospace;
      margin-bottom: 20px;
    }

    .input-wrapper {
      position: relative;
    }

    .label {
      font-size: 0.75rem;
      color: var(--cml-scifi-color);
      margin-bottom: 4px;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      opacity: 0.8;
      display: flex;
      justify-content: space-between;
    }

    .label::after {
      content: '[_INPUT_REQ]';
      font-size: 0.6rem;
      opacity: 0.5;
    }

    .container {
      position: relative;
      padding: 1px;
      transition: all 0.3s cubic-bezier(0.19, 1, 0.22, 1);

      /* 背景/邊框修正 */
      border: 1px solid transparent;
      background-image: 
        linear-gradient(rgba(5, 8, 10, 0.8), rgba(5, 8, 10, 0.8)), 
        linear-gradient(color-mix(in srgb, var(--cml-scifi-color), transparent 70%), color-mix(in srgb, var(--cml-scifi-color), transparent 70%));
      background-origin: padding-box, border-box;
      background-clip: padding-box, border-box;

      /* 切角造型 */
      clip-path: polygon(
        8px 0, 100% 0, 
        100% calc(100% - 8px), calc(100% - 8px) 100%, 
        0 100%, 0 8px
      );
      transition: all 0.3s cubic-bezier(0.19, 1, 0.22, 1);
    }

    .input-container:focus-within {
      background-image: 
        linear-gradient(rgba(10, 20, 30, 0.95), rgba(10, 20, 30, 0.95)), 
        linear-gradient(var(--cml-scifi-color), var(--cml-scifi-color));
      box-shadow: 0 0 20px color-mix(in srgb, var(--cml-scifi-color), transparent 70%);
      transform: translateY(-1px);
    }

    .container.focused {
      background-image: 
        linear-gradient(rgba(10, 20, 30, 0.9), rgba(10, 20, 30, 0.9)), 
        linear-gradient(var(--cml-scifi-color), var(--cml-scifi-color));
      box-shadow: 0 0 15px color-mix(in srgb, var(--cml-scifi-color), transparent 85%);
    }

    input {
      width: 100%;
      background: transparent;
      border: none;
      padding: 10px 14px;
      color: #fff;
      font-family: inherit;
      font-size: 0.95rem;
      outline: none;
      box-sizing: border-box;
    }

    input::placeholder {
      color: color-mix(in srgb, var(--cml-scifi-color), transparent 70%);
      font-style: italic;
    }

    /* 底部動態邊界 */
    .border-bottom {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0%;
      height: 2px;
      background: var(--cml-scifi-color);
      transition: width 0.4s ease;
      box-shadow: 0 0 10px var(--cml-scifi-color);
    }

    .focused .border-bottom {
      width: 100%;
    }

    /* 指示燈裝飾 */
    .indicator {
      position: absolute;
      right: 10px;
      top: 50%;
      transform: translateY(-50%);
      width: 6px;
      height: 6px;
      background: var(--cml-scifi-color);
      opacity: 0.3;
      border-radius: 1px;
    }

    .focused .indicator {
      opacity: 1;
      animation: blink 1s infinite alternate;
      box-shadow: 0 0 8px var(--cml-scifi-color);
    }

    @keyframes blink {
      from { opacity: 0.3; }
      to { opacity: 1; }
    }
  `;

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
      <div class="input-wrapper">
        ${this.label ? html`<div class="label">${this.label}</div>` : ''}
        <div class="container ${this._isFocused ? 'focused' : ''}">
          <input 
            type="text"
            .value="${this.value}"
            placeholder="${this.placeholder}"
            @focus="${() => this._isFocused = true}"
            @blur="${() => this._isFocused = false}"
            @input="${this._handleInput}"
          />
          <div class="border-bottom"></div>
          <div class="indicator"></div>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'camelot-scifi-input-impl': CamelotScifiInput;
  }
}
