import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * <CamelotScifiFilledButton>
 * 日系科幻風格 (Sci-fi HUD) 的實心按鈕
 * 視覺重點：角落括號、高對比白邊、鎖定動畫
 */
@customElement('camelot-scifi-filled-button')
export class CamelotScifiFilledButton extends LitElement {
  @property({ type: String })
  label: string = 'Button';

  @property({ type: String, reflect: true })
  color: 'primary' | 'secondary' | 'tertiary' = 'primary';

  @property({ type: Boolean })
  disabled: boolean = false;

  static styles = css`
    :host {
      display: inline-block;
      --cml-scifi-accent: var(--cml-color-primary);
      --cml-scifi-bracket: var(--cml-color-primary);
      --cml-scifi-highlight: #ffffff;
    }

    :host([color="secondary"]) {
      --cml-scifi-accent: var(--cml-color-secondary);
      --cml-scifi-bracket: var(--cml-color-secondary);
    }

    :host([color="tertiary"]) {
      --cml-scifi-accent: var(--cml-color-tertiary);
      --cml-scifi-bracket: var(--cml-color-tertiary);
    }

    .hud-container {
      position: relative;
      padding: 4px;
    }

    button {
      position: relative;
      font-family: var(--cml-font-family);
      font-weight: var(--cml-font-weight-medium);
      font-size: var(--cml-font-size-label);
      padding: 8px 24px;
      border: 1px solid var(--cml-scifi-highlight);
      background-color: color-mix(in srgb, var(--cml-scifi-accent), transparent 95%);
      color: var(--cml-scifi-accent);
      cursor: pointer;
      transition: all 0.2s cubic-bezier(0.19, 1, 0.22, 1);
      outline: none;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      text-transform: uppercase;
      letter-spacing: 0.2em;
      min-width: 120px;
      overflow: hidden;
    }

    button::before {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
      transform: translateX(-100%);
      transition: transform 0.5s;
    }

    button:hover::before {
      transform: translateX(100%);
    }

    /* 角落括號 (L-Brackets) */
    .bracket {
      position: absolute;
      width: 10px;
      height: 10px;
      border: 2px solid var(--cml-scifi-bracket);
      transition: all 0.3s cubic-bezier(0.19, 1, 0.22, 1);
      pointer-events: none;
      opacity: 0;
    }

    .top-left { top: 0; left: 0; border-right: none; border-bottom: none; transform: translate(-10px, -10px); }
    .top-right { top: 0; right: 0; border-left: none; border-bottom: none; transform: translate(10px, -10px); }
    .bottom-left { bottom: 0; left: 0; border-right: none; border-top: none; transform: translate(-10px, 10px); }
    .bottom-right { bottom: 0; right: 0; border-left: none; border-top: none; transform: translate(10px, 10px); }

    /* Hover 鎖定動畫 (Lock-on) */
    .hud-container:hover .bracket {
      transform: translate(0, 0);
      opacity: 1;
      filter: drop-shadow(0 0 5px var(--cml-scifi-bracket));
    }

    .hud-container:hover .top-left { transform: translate(2px, 2px); }
    .hud-container:hover .top-right { transform: translate(-2px, 2px); }
    .hud-container:hover .bottom-left { transform: translate(2px, -2px); }
    .hud-container:hover .bottom-right { transform: translate(-2px, -2px); }

    /* 點擊效果 */
    button:active {
      background-color: var(--cml-scifi-bracket);
      color: #000;
      box-shadow: 0 0 20px var(--cml-scifi-bracket);
    }

    .hud-container:active .bracket {
      transform: scale(0.8) translate(0, 0);
      opacity: 1;
    }

    button:disabled {
      cursor: not-allowed;
      opacity: 0.4;
      border-color: #444;
      color: #666;
    }

    /* 文字掃描效果 */
    .label-text {
      position: relative;
      z-index: 1;
    }

    /* 背景點綴：科技格點 */
    button::after {
      content: '';
      position: absolute;
      inset: 0;
      background-image: radial-gradient(var(--cml-scifi-bracket) 0.5px, transparent 0.5px);
      background-size: 4px 4px;
      opacity: 0.1;
      pointer-events: none;
    }
  `;

  render() {
    return html`
      <div class="hud-container">
        <!-- Corner Brackets -->
        <div class="bracket top-left"></div>
        <div class="bracket top-right"></div>
        <div class="bracket bottom-left"></div>
        <div class="bracket bottom-right"></div>
        
        <button 
          ?disabled="${this.disabled}"
        >
          <span class="label-text">${this.label}</span>
          <slot></slot>
        </button>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'camelot-scifi-filled-button': CamelotScifiFilledButton;
  }
}
