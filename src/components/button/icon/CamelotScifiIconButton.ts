import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import '../../scifi/CamelotScifiReticle';
import '../../scifi/CamelotScifiFrame';

/**
 * <CamelotScifiIconButton>
 * 日系科幻風格 (Sci-fi HUD) 的圖示按鈕
 * 特色：懸停時顯示 Focus Reticle 鎖定動畫，具備掃描脈衝效果。
 */
@customElement('camelot-scifi-icon-button-impl')
export class CamelotScifiIconButton extends LitElement {
  @property({ type: String, reflect: true })
  color: 'primary' | 'secondary' | 'tertiary' = 'primary';

  @property({ type: String })
  shape: 'circle' | 'square' = 'circle';

  @property({ type: Boolean, reflect: true })
  disabled: boolean = false;

  @state()
  private _isHovered = false;

  @state()
  private _isFocused = false;

  static styles = css`
    :host {
      display: inline-block;
      vertical-align: middle;
      --cml-scifi-color: var(--cml-color-primary);
      --cml-scifi-glow: color-mix(in srgb, var(--cml-scifi-color), transparent 80%);
      position: relative;
    }

    :host([color="secondary"]) { --cml-scifi-color: var(--cml-color-secondary); }
    :host([color="tertiary"]) { --cml-scifi-color: var(--cml-color-tertiary); }

    .btn-container {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 4px;
    }

    button {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      background: color-mix(in srgb, var(--cml-scifi-color), transparent 90%);
      border: 1px solid color-mix(in srgb, var(--cml-scifi-color), transparent 60%);
      color: var(--cml-scifi-color);
      width: 40px;
      height: 40px;
      cursor: pointer;
      overflow: hidden;
      transition: all 0.2s cubic-bezier(0.19, 1, 0.22, 1);
      outline: none;
    }

    :host([shape="circle"]) button {
      border-radius: 50%;
    }

    :host([shape="square"]) button {
      border-radius: 2px;
    }

    /* 懸停脈衝動畫 */
    button::after {
      content: '';
      position: absolute;
      inset: 0;
      background: radial-gradient(circle, var(--cml-scifi-color) 0%, transparent 70%);
      opacity: 0;
      transition: opacity 0.3s;
      pointer-events: none;
    }

    button:hover::after,
    button:focus-visible::after {
      opacity: 0.15;
      animation: pulse 2s infinite ease-in-out;
    }

    @keyframes pulse {
      0%, 100% { transform: scale(0.8); opacity: 0.1; }
      50% { transform: scale(1.1); opacity: 0.25; }
    }

    button:hover,
    button:focus-visible {
      border-color: var(--cml-scifi-color);
      box-shadow: 0 0 10px var(--cml-scifi-glow);
      color: #fff;
    }

    button:active {
      transform: scale(0.92);
      background: var(--cml-scifi-color);
      color: #000;
    }

    button:disabled {
      cursor: not-allowed;
      opacity: 0.4;
      filter: grayscale(1);
    }

    /* 確保插槽內容居中 */
    ::slotted(*) {
      font-size: 1.25rem;
      pointer-events: none;
    }

    /* 鎖定感標線放置位子 */
    camelot-scifi-reticle {
      pointer-events: none;
    }
  `;

  render() {
    const isActive = this._isHovered || this._isFocused;

    return html`
      <div 
        class="btn-container"
        @mouseenter=${() => this._isHovered = true}
        @mouseleave=${() => this._isHovered = false}
      >
        <camelot-scifi-reticle 
          .active=${isActive} 
          .color=${this.color}
        ></camelot-scifi-reticle>
        
        <camelot-scifi-frame
          .color="${this.color}"
          ?show-shine="${this._isHovered && !this.disabled}"
          ?show-pulse="${this._isFocused || this._isHovered}"
          ?show-grid="${false}"
          variant="none"
        >
          <button
            ?disabled=${this.disabled}
            @focus=${() => this._isFocused = true}
            @blur=${() => this._isFocused = false}
          >
            <slot></slot>
          </button>
        </camelot-scifi-frame>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'camelot-scifi-icon-button-impl': CamelotScifiIconButton;
  }
}
