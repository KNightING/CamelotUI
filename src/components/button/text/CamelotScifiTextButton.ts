import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * <CamelotScifiTextButton>
 * 日系科幻風格 (Sci-fi HUD) 的文字按鈕
 */
@customElement('camelot-scifi-text-button')
export class CamelotScifiTextButton extends LitElement {
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
      padding: 8px 16px;
      border: none;
      background-color: transparent;
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
      min-width: 100px;
    }

    /* 角落括號 (L-Brackets) */
    .bracket {
      position: absolute;
      width: 8px;
      height: 8px;
      border: 1px solid var(--cml-scifi-bracket);
      transition: all 0.3s cubic-bezier(0.19, 1, 0.22, 1);
      pointer-events: none;
      opacity: 0;
    }

    .top-left { top: 0; left: 0; border-right: none; border-bottom: none; transform: translate(-8px, -8px); }
    .top-right { top: 0; right: 0; border-left: none; border-bottom: none; transform: translate(8px, -8px); }
    .bottom-left { bottom: 0; left: 0; border-right: none; border-top: none; transform: translate(-8px, 8px); }
    .bottom-right { bottom: 0; right: 0; border-left: none; border-top: none; transform: translate(8px, 8px); }

    /* Hover 鎖定動畫 (Lock-on) */
    .hud-container:hover .bracket {
      transform: translate(0, 0);
      opacity: 1;
      filter: drop-shadow(0 0 3px var(--cml-scifi-bracket));
    }

    .hud-container:hover button {
      text-shadow: 0 0 8px var(--cml-scifi-accent);
      letter-spacing: 0.25em;
    }

    /* 點擊效果 */
    button:active:not(:disabled) {
      transform: scale(0.95);
      opacity: 0.8;
    }

    .hud-container:active .bracket {
      transform: scale(0.7) translate(0, 0);
      opacity: 1;
    }

    button:disabled {
      cursor: not-allowed;
      opacity: 0.3;
      color: #777;
    }

    .label-text {
      position: relative;
      z-index: 1;
    }
  `;

  render() {
    return html`
      <div class="hud-container">
        <div class="bracket top-left"></div>
        <div class="bracket top-right"></div>
        <div class="bracket bottom-left"></div>
        <div class="bracket bottom-right"></div>
        
        <button ?disabled="${this.disabled}">
          <span class="label-text">${this.label}</span>
          <slot></slot>
        </button>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'camelot-scifi-text-button': CamelotScifiTextButton;
  }
}
