import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import '../../scifi/CamelotScifiReticle';

/**
 * <CamelotScifiOutlineButton>
 * 日系科幻風格 (Sci-fi HUD) 的外框按鈕
 */
@customElement('camelot-scifi-outline-button')
export class CamelotScifiOutlineButton extends LitElement {
  @property({ type: String })
  label: string = 'Button';

  @property({ type: String, reflect: true })
  color: 'primary' | 'secondary' | 'tertiary' = 'primary';

  @property({ type: Boolean })
  disabled: boolean = false;

  @state()
  private _isHovered: boolean = false;

  @state()
  private _isPressed: boolean = false;

  static styles = css`
    :host {
      display: inline-block;
      --cml-scifi-accent: var(--cml-color-primary);
    }

    :host([color="secondary"]) {
      --cml-scifi-accent: var(--cml-color-secondary);
    }

    :host([color="tertiary"]) {
      --cml-scifi-accent: var(--cml-color-tertiary);
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
      border: 1px solid var(--cml-scifi-accent);
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
      min-width: 120px;
      overflow: hidden;
    }

    button::before {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(90deg, transparent, color-mix(in srgb, var(--cml-scifi-accent), transparent 80%), transparent);
      transform: translateX(-100%);
      transition: transform 0.5s;
    }

    button:hover:not(:disabled)::before {
      transform: translateX(100%);
    }

    /* 點擊效果 */
    button:active:not(:disabled) {
      background-color: color-mix(in srgb, var(--cml-scifi-accent), transparent 80%);
      box-shadow: 0 0 20px color-mix(in srgb, var(--cml-scifi-accent), transparent 50%);
    }

    button:disabled {
      cursor: not-allowed;
      opacity: 0.4;
      border-color: #444;
      color: #666;
    }

    .label-text {
      position: relative;
      z-index: 1;
    }
  `;

  render() {
    return html`
      <div 
        class="hud-container"
        @mouseenter=${() => this._isHovered = true}
        @mouseleave=${() => this._isHovered = false}
        @mousedown=${() => this._isPressed = true}
        @mouseup=${() => this._isPressed = false}
      >
        <camelot-scifi-reticle 
          .active=${this._isHovered || this._isPressed}
          .color=${this.color}
        ></camelot-scifi-reticle>
        
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
    'camelot-scifi-outline-button': CamelotScifiOutlineButton;
  }
}
