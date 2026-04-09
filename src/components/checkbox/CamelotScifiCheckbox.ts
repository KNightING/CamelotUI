import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import '../label/CamelotLabel';

/**
 * <CamelotScifiCheckbox>
 * 日系科幻風格 (Sci-fi HUD) 的多選框。
 * 視覺重點：方括號框架 [ ]、內部掃描線、數位脈衝動畫。
 */
@customElement('camelot-scifi-checkbox-impl')
export class CamelotScifiCheckbox extends LitElement {
  @property({ type: String })
  label: string = '';

  @property({ type: Boolean, reflect: true })
  checked: boolean = false;

  @property({ type: Boolean })
  disabled: boolean = false;

  @property({ type: String })
  color: 'primary' | 'secondary' | 'tertiary' = 'primary';

  static styles = css`
    :host {
      display: inline-flex;
      align-items: center;
      cursor: pointer;
      user-select: none;
      font-family: 'Share Tech Mono', monospace;
    }

    .container {
      display: flex;
      align-items: center;
      padding: 6px 12px;
      gap: 12px;
      transition: all 0.2s;
    }

    .container:hover:not(.disabled) {
      background: rgba(0, 243, 255, 0.05);
    }

    .checkbox-box {
      position: relative;
      width: 18px;
      height: 18px;
      border: 1px solid rgba(0, 243, 255, 0.2);
      display: flex;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      flex-shrink: 0;
      overflow: hidden;
    }

    /* Square Brackets Motif [ ] */
    .checkbox-box::before, .checkbox-box::after {
      content: '';
      position: absolute;
      width: 4px;
      height: 100%;
      border-color: rgba(0, 243, 255, 0.4);
      border-style: solid;
      transition: all 0.3s cubic-bezier(0.19, 1, 0.22, 1);
    }

    .checkbox-box::before {
      left: 0;
      border-width: 1px 0 1px 1px;
    }
    .checkbox-box::after {
      right: 0;
      border-width: 1px 1px 1px 0;
    }

    .checked .checkbox-box::before, .checked .checkbox-box::after {
      border-color: var(--cml-color-primary, #00f3ff);
      box-shadow: 0 0 10px rgba(0, 243, 255, 0.2);
    }

    /* Checked Indicator: Digital Block */
    .indicator {
      width: 10px;
      height: 10px;
      background: var(--cml-color-primary, #00f3ff);
      transform: scale(0);
      transition: all 0.3s cubic-bezier(0.19, 1, 0.22, 1);
      box-shadow: 0 0 15px var(--cml-color-primary, #00f3ff);
      position: relative;
    }

    .checked .indicator {
      transform: scale(1);
    }

    /* Scanning animation inside the block */
    .indicator::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 2px;
      background: rgba(255, 255, 255, 0.8);
      animation: check-scan 1s linear infinite;
    }

    @keyframes check-scan {
      0% { top: 0; }
      100% { top: 100%; }
    }

    /* Color Variants */
    .secondary .checkbox-box::before, .secondary .checkbox-box::after { border-color: rgba(var(--cml-color-secondary-rgb), 0.4); }
    .secondary.checked .checkbox-box::before, .secondary.checked .checkbox-box::after { border-color: var(--cml-color-secondary); }
    .secondary .indicator { 
      background: var(--cml-color-secondary);
      box-shadow: 0 0 15px var(--cml-color-secondary);
    }

    .tertiary .checkbox-box::before, .tertiary .checkbox-box::after { border-color: rgba(var(--cml-color-tertiary-rgb), 0.4); }
    .tertiary.checked .checkbox-box::before, .tertiary.checked .checkbox-box::after { border-color: var(--cml-color-tertiary); }
    .tertiary .indicator { 
      background: var(--cml-color-tertiary);
      box-shadow: 0 0 15px var(--cml-color-tertiary);
    }

    .label-text {
      text-transform: uppercase;
      letter-spacing: 0.1em;
      font-size: 0.85rem;
      color: var(--cml-color-on-surface);
      opacity: 0.8;
    }

    .checked .label-text {
      opacity: 1;
      text-shadow: 0 0 5px var(--cml-color-primary);
    }

    .disabled {
      opacity: 0.3;
      cursor: not-allowed;
      pointer-events: none;
      filter: grayscale(1);
    }
  `;

  private _toggle() {
    if (this.disabled) return;
    this.checked = !this.checked;
    this.dispatchEvent(new CustomEvent('change', {
      detail: { checked: this.checked },
      bubbles: true,
      composed: true
    }));
  }

  render() {
    return html`
      <div 
        class="container ${this.checked ? 'checked' : ''} ${this.disabled ? 'disabled' : ''} ${this.color}"
        @click="${this._toggle}"
      >
        <div class="checkbox-box">
          <div class="indicator"></div>
        </div>
        ${this.label ? html`<span class="label-text">${this.label}</span>` : ''}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'camelot-scifi-checkbox-impl': CamelotScifiCheckbox;
  }
}
