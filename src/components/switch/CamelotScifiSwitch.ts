import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * <CamelotScifiSwitch>
 * 日系科幻風格 (Sci-fi HUD) 的開關元件。
 * 視覺重點：銳利稜角、掃描發光、菱形滑塊。
 */
@customElement('camelot-scifi-scifi-switch') // 使用 scifi 前綴避免與 base 衝突，但 CamelotSwitch 會分發到這裡
export class CamelotScifiSwitch extends LitElement {
  @property({ type: Boolean })
  checked: boolean = false;

  @property({ type: Boolean })
  disabled: boolean = false;

  @property({ type: String })
  color: 'primary' | 'secondary' | 'tertiary' = 'primary';

  static styles = css`
    :host {
      display: inline-block;
      width: 60px;
      height: 28px;
      font-family: 'Share Tech Mono', monospace;
    }

    .switch {
      position: relative;
      width: 60px;
      height: 24px;
      background: rgba(0, 243, 255, 0.05);
      border: 1px solid rgba(0, 243, 255, 0.3);
      cursor: pointer;
      transition: all 0.3s cubic-bezier(0.19, 1, 0.22, 1);
      clip-path: polygon(
        4px 0, 100% 0, 
        100% calc(100% - 4px), calc(100% - 4px) 100%, 
        0 100%, 0 4px
      );
    }

    .switch::before {
      content: '';
      position: absolute;
      top: -1px;
      left: -1px;
      right: -1px;
      bottom: -1px;
      background: linear-gradient(90deg, transparent 0%, rgba(0, 243, 255, 0.2) 50%, transparent 100%);
      background-size: 200% 100%;
      animation: scan 3s linear infinite;
      pointer-events: none;
      opacity: 0;
    }

    @keyframes scan {
      0% { background-position: 200% 0; }
      100% { background-position: -200% 0; }
    }

    .switch.checked {
      background: rgba(0, 243, 255, 0.15);
      border-color: var(--cml-color-primary, #00f3ff);
      box-shadow: 0 0 10px rgba(0, 243, 255, 0.2);
    }
    
    .switch.checked::before {
      opacity: 1;
    }

    /* Color Overrides */
    .switch.secondary.checked {
      border-color: var(--cml-color-secondary);
      background: color-mix(in srgb, var(--cml-color-secondary), transparent 85%);
    }
    .switch.tertiary.checked {
      border-color: var(--cml-color-tertiary);
      background: color-mix(in srgb, var(--cml-color-tertiary), transparent 85%);
    }

    .thumb {
      position: absolute;
      top: 50%;
      left: 6px;
      width: 14px;
      height: 14px;
      background-color: rgba(0, 243, 255, 0.5);
      transform: translateY(-50%) rotate(45deg);
      transition: all 0.3s cubic-bezier(0.19, 1, 0.22, 1);
      box-shadow: 0 0 5px rgba(0, 243, 255, 0.3);
    }

    .switch.checked .thumb {
      left: 40px;
      background-color: var(--cml-color-primary, #00f3ff);
      box-shadow: 0 0 15px var(--cml-color-primary, #00f3ff);
    }

    /* Thumb state decoration */
    .thumb::after {
      content: '';
      position: absolute;
      top: 2px;
      left: 2px;
      right: 2px;
      bottom: 2px;
      border: 1px solid rgba(255, 255, 255, 0.3);
    }

    .switch.disabled {
      cursor: not-allowed;
      opacity: 0.3;
      filter: grayscale(1);
    }

    /* Status Text */
    .status-text {
      position: absolute;
      right: 4px;
      top: 50%;
      transform: translateY(-50%);
      font-size: 8px;
      color: var(--cml-color-primary, #00f3ff);
      opacity: 0.5;
      pointer-events: none;
    }

    .switch.checked .status-text {
      left: 4px;
      right: auto;
    }
  `;

  private _toggle() {
    if (this.disabled) return;
    this.checked = !this.checked;
    this._playClickEffect();
    this.dispatchEvent(new CustomEvent('change', {
      detail: { checked: this.checked }
    }));
  }

  private _playClickEffect() {
    this.shadowRoot?.querySelector('.switch')?.animate([
      { filter: 'brightness(1)' },
      { filter: 'brightness(2)', boxShadow: '0 0 20px var(--cml-color-primary)' },
      { filter: 'brightness(1)' }
    ], { duration: 200 });
  }

  render() {
    return html`
      <div 
        class="switch ${this.checked ? 'checked' : ''} ${this.disabled ? 'disabled' : ''} ${this.color}"
        @click="${this._toggle}"
      >
        <div class="thumb"></div>
        <span class="status-text">${this.checked ? 'ON' : 'OFF'}</span>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'camelot-scifi-switch-impl': CamelotScifiSwitch; // 內部名稱，外面透過 camelot-switch 調用
  }
}
