import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import '../../scifi/CamelotScifiReticle';

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

    .hud-container:hover button {
      text-shadow: 0 0 8px var(--cml-scifi-accent);
      letter-spacing: 0.25em;
    }

    /* 點擊效果 */
    button:active:not(:disabled) {
      transform: scale(0.95);
      opacity: 0.8;
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
    'camelot-scifi-text-button': CamelotScifiTextButton;
  }
}
