import { html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { CamelotBaseElement } from '../base/CamelotBaseElement';

import '../scifi/CamelotScifiReticle';

/**
 * <CamelotScifiSwitch>
 * 日系科幻風格 (Sci-fi HUD) 的開關元件。
 * 視覺重點：銳利稜角、掃描發光、菱形滑塊。
 */
@customElement('camelot-scifi-switch-impl')
export class CamelotScifiSwitch extends CamelotBaseElement {
  @property({ type: Boolean })
  checked: boolean = false;

  @property({ type: Boolean })
  disabled: boolean = false;


  static styles = css`
    :host {
      display: inline-block;
      width: 60px;
      height: 28px;
      font-family: var(--cml-font-family);
      --cml-scifi-color: var(--cml-color-current-color);
    }

    .switch {
      position: relative;
      width: 60px;
      height: 24px;
      background: color-mix(in srgb, var(--cml-scifi-color), transparent 95%);
      border: 1px solid color-mix(in srgb, var(--cml-scifi-color), transparent 70%);
      cursor: pointer;
      transition: all 0.3s cubic-bezier(0.19, 1, 0.22, 1);
      /* clip-path removed per user request */
    }

    .switch::before {
      content: '';
      position: absolute;
      top: -1px;
      left: -1px;
      right: -1px;
      bottom: -1px;
      background: linear-gradient(90deg, transparent 0%, color-mix(in srgb, var(--cml-scifi-color), transparent 80%) 50%, transparent 100%);
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
      background: color-mix(in srgb, var(--cml-scifi-color), transparent 85%);
      border-color: var(--cml-scifi-color);
      box-shadow: 0 0 10px color-mix(in srgb, var(--cml-scifi-color), transparent 80%);
    }
    
    .switch.checked::before {
      opacity: 1;
    }

    .thumb {
      position: absolute;
      top: 50%;
      left: 6px;
      width: 14px;
      height: 14px;
      background-color: color-mix(in srgb, var(--cml-scifi-color), transparent 50%);
      transform: translateY(-50%) rotate(45deg);
      transition: all 0.3s cubic-bezier(0.19, 1, 0.22, 1);
      box-shadow: 0 0 5px color-mix(in srgb, var(--cml-scifi-color), transparent 70%);
      z-index: 2;
    }

    .switch.checked .thumb {
      left: 40px;
      background-color: var(--cml-scifi-color);
      box-shadow: 0 0 15px var(--cml-scifi-color);
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
      color: var(--cml-scifi-color);
      opacity: 0.5;
      pointer-events: none;
      z-index: 1;
    }

    .switch.checked .status-text {
      left: 4px;
      right: auto;
    }

    /* Reticle integration */
    camelot-scifi-reticle {
      inset: -2px;
      opacity: 0.3;
      transition: opacity 0.3s;
    }
    .switch:hover camelot-scifi-reticle,
    .switch.checked camelot-scifi-reticle {
      opacity: 1;
    }
  `;

  private _toggle() {
    if (this.disabled) return;
    this.checked = !this.checked;
    this._playClickEffect();
    this.dispatchEvent(new CustomEvent('change', {
      detail: { checked: this.checked },
      bubbles: true,
      composed: true
    }));
  }

  private _playClickEffect() {
    this.shadowRoot?.querySelector('.switch')?.animate([
      { filter: 'brightness(1)' },
      { filter: 'brightness(2)', boxShadow: `0 0 20px var(--cml-scifi-color)` },
      { filter: 'brightness(1)' }
    ], { duration: 200 });
  }

  render() {
    return html`
      <div 
        class="switch ${this.checked ? 'checked' : ''} ${this.disabled ? 'disabled' : ''}"
        @click="${this._toggle}"
      >
        <camelot-scifi-reticle 
          ?active="${true}" 
          .color="${this.color}"
        ></camelot-scifi-reticle>
        
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
