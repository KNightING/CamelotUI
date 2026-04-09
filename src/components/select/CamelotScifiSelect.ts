import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

/**
 * <CamelotScifiSelect>
 * 日系科幻風格 (Sci-fi HUD) 的下拉選單實作。
 * 特色：八角形框架、格點背景紋理。
 */
@customElement('camelot-scifi-select-impl')
export class CamelotScifiSelect extends LitElement {
  @property({ type: String })
  label: string = '';

  @property({ type: String })
  value: string = '';

  @property({ type: Array })
  options: Array<{ label: string, value: string }> = [];

  @property({ type: Boolean })
  isOpen = false;

  static styles = css`
    :host {
      display: block;
      --cml-scifi-color: var(--cml-color-primary);
      --cml-scifi-bg: #05080a;
      font-family: 'Share Tech Mono', monospace;
      margin-bottom: 20px;
    }

    .select-wrapper {
      position: relative;
    }

    .label {
      font-size: 0.7rem;
      color: var(--cml-scifi-color);
      margin-bottom: 4px;
      text-transform: uppercase;
      letter-spacing: 0.2em;
      opacity: 0.7;
    }

    .display {
      position: relative;
      color: #fff;
      cursor: pointer;
      display: flex;
      justify-content: space-between;
      align-items: center;
      transition: all 0.3s;
      padding: 12px 20px;
      font-weight: bold;
      letter-spacing: 0.1em;
      
      /* 背景/邊框修正 */
      border: 1px solid transparent;
      background-image: 
        linear-gradient(rgba(5, 8, 10, 0.9), rgba(5, 8, 10, 0.9)), 
        linear-gradient(color-mix(in srgb, var(--cml-scifi-color), transparent 50%), color-mix(in srgb, var(--cml-scifi-color), transparent 50%));
      background-origin: padding-box, border-box;
      background-clip: padding-box, border-box;

      /* 對稱切角造型 (與 Input 一致) */
      clip-path: polygon(
        12px 0, 100% 0, 
        100% calc(100% - 12px), calc(100% - 12px) 100%, 
        0 100%, 0 12px
      );
    }

      clip-path: polygon(
        12px 0, 100% 0, 
        100% calc(100% - 12px), calc(100% - 12px) 100%, 
        0 100%, 0 12px
      );
    }

    .display:hover, .display:focus, .wrapper.open .display {
      background-image: 
        linear-gradient(rgba(10, 20, 30, 0.95), rgba(10, 20, 30, 0.95)), 
        linear-gradient(var(--cml-scifi-color), var(--cml-scifi-color));
      box-shadow: 0 0 20px color-mix(in srgb, var(--cml-scifi-color), transparent 70%);
      transform: translateY(-1px);
    }

    /* 掃描線效果 */
    .display::before {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(
        transparent 50%, 
        color-mix(in srgb, var(--cml-scifi-color), transparent 95%) 50%
      );
      background-size: 100% 4px;
      pointer-events: none;
      z-index: 1;
      opacity: 0.3;
    }

    /* 角落裝飾點 */
    .display::after {
      content: '';
      position: absolute;
      top: 4px;
      right: 4px;
      width: 4px;
      height: 4px;
      background: var(--cml-scifi-color);
      box-shadow: 0 0 8px var(--cml-scifi-color);
      clip-path: polygon(0 0, 100% 0, 100% 100%);
    }

    .arrow {
      font-size: 0.6rem;
      color: var(--cml-scifi-color);
      transition: transform 0.3s;
      margin-left: 10px;
      opacity: 0.8;
    }

    .wrapper.open .arrow {
      transform: rotate(180deg);
      opacity: 1;
    }

    .dropdown {
      position: absolute;
      top: 100%;
      left: 0;
      width: 100%;
      margin-top: 10px;
      background: rgba(2, 5, 8, 0.98);
      
      border: 1px solid transparent;
      background-image: 
        linear-gradient(rgba(2, 5, 8, 0.98), rgba(2, 5, 8, 0.98)), 
        linear-gradient(var(--cml-scifi-color), var(--cml-scifi-color));
      background-origin: padding-box, border-box;
      background-clip: padding-box, border-box;

      /* 對稱切角 (底部右側) */
      clip-path: polygon(
        0 0, 100% 0,
        100% calc(100% - 15px), calc(100% - 15px) 100%,
        0 100%
      );

      box-shadow: 0 10px 40px rgba(0, 0, 0, 0.9);
      z-index: 100;
      max-height: 250px;
      overflow-y: auto;
      visibility: hidden;
      opacity: 0;
      transform: translateY(-10px);
      transition: all 0.4s cubic-bezier(0.19, 1, 0.22, 1);
      backdrop-filter: blur(10px);
    }

    .wrapper.open .dropdown {
      visibility: visible;
      opacity: 1;
      transform: translateY(0);
    }

    .option {
      padding: 12px 16px;
      color: color-mix(in srgb, #fff, transparent 30%);
      cursor: pointer;
      transition: all 0.2s;
      border-left: 0 solid var(--cml-scifi-color);
      font-size: 0.9rem;
    }

    .option:hover {
      background: color-mix(in srgb, var(--cml-scifi-color), transparent 85%);
      color: #fff;
      border-left-width: 4px;
      padding-left: 12px;
    }

    .option.selected {
      background: var(--cml-scifi-color);
      color: #000;
      font-weight: bold;
    }

    /* 隱藏捲軸 */
    .dropdown::-webkit-scrollbar {
      width: 4px;
    }
    .dropdown::-webkit-scrollbar-thumb {
      background: var(--cml-scifi-color);
    }
  `;

  private _select(opt: { label: string, value: string }) {
    this.dispatchEvent(new CustomEvent('change', {
      detail: { value: opt.value },
      bubbles: true,
      composed: true
    }));
  }

  private _handleToggle() {
    this.dispatchEvent(new CustomEvent('toggle', {
      bubbles: true,
      composed: true
    }));
  }

  render() {
    const selectedOpt = this.options.find(o => o.value === this.value);

    return html`
      <div class="wrapper ${this.isOpen ? 'open' : ''}">
        ${this.label ? html`<div class="label">${this.label}</div>` : ''}
        <div class="display" @click="${this._handleToggle}">
          <span>${selectedOpt ? selectedOpt.label : '--- SELECT_OP ---'}</span>
          <span class="arrow">▼</span>
        </div>
        <div class="dropdown">
          ${this.options.map(opt => html`
            <div 
              class="option ${this.value === opt.value ? 'selected' : ''}"
              @click="${() => this._select(opt)}"
            >
              ${opt.label}
            </div>
          `)}
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'camelot-scifi-select-impl': CamelotScifiSelect;
  }
}
