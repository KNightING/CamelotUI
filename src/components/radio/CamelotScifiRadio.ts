import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import '../label/CamelotLabel';

/**
 * <CamelotScifiRadio>
 * 日系科幻風格 (Sci-fi HUD) 的單選框。
 * 視覺重點：菱形框架、中心發光點、數位邊界。
 */
@customElement('camelot-scifi-radio-impl')
export class CamelotScifiRadio extends LitElement {
  @property({ type: Boolean })
  checked: boolean = false;

  @property({ type: Boolean })
  disabled: boolean = false;

  @property({ type: String })
  label: string = '';

  @property({ type: String })
  color: 'primary' | 'secondary' | 'tertiary' = 'primary';

  static styles = css`
    :host {
      display: inline-block;
      cursor: pointer;
      font-family: 'Share Tech Mono', monospace;
    }

    .container {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 6px 12px;
      min-height: 36px;
      box-sizing: border-box;
      transition: all 0.2s;
    }

    .container:hover:not(.disabled) {
      background: rgba(0, 243, 255, 0.05);
    }

    .radio-outer {
      position: relative;
      width: 18px;
      height: 18px;
      border: 1px solid rgba(0, 243, 255, 0.3);
      transform: rotate(45deg);
      transition: all 0.3s cubic-bezier(0.19, 1, 0.22, 1);
      display: flex;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      flex-shrink: 0;
    }

    /* Corner accents */
    .radio-outer::before, .radio-outer::after {
      content: '';
      position: absolute;
      width: 4px;
      height: 4px;
      border-color: var(--cml-color-primary, #00f3ff);
      border-style: solid;
      opacity: 0;
      transition: opacity 0.3s;
    }
    
    .radio-outer::before {
      top: -2px;
      left: -2px;
      border-width: 1px 0 0 1px;
    }
    .radio-outer::after {
      bottom: -2px;
      right: -2px;
      border-width: 0 1px 1px 0;
    }

    .checked .radio-outer {
      border-color: var(--cml-color-primary, #00f3ff);
      box-shadow: 0 0 10px rgba(0, 243, 255, 0.3);
    }
    
    .checked .radio-outer::before, .checked .radio-outer::after {
      opacity: 1;
    }

    .radio-inner {
      width: 0;
      height: 0;
      background-color: var(--cml-color-primary, #00f3ff);
      transition: all 0.3s cubic-bezier(0.19, 1, 0.22, 1);
      box-shadow: 0 0 10px var(--cml-color-primary, #00f3ff);
    }

    .checked .radio-inner {
      width: 10px;
      height: 10px;
    }

    /* Secondary/Tertiary Colors */
    .secondary .radio-outer { border-color: rgba(var(--cml-color-secondary-rgb), 0.3); }
    .secondary.checked .radio-outer { border-color: var(--cml-color-secondary); }
    .secondary .radio-inner { 
      background-color: var(--cml-color-secondary);
      box-shadow: 0 0 10px var(--cml-color-secondary);
    }
    .secondary .radio-outer::before, .secondary .radio-outer::after { border-color: var(--cml-color-secondary); }

    .tertiary .radio-outer { border-color: rgba(var(--cml-color-tertiary-rgb), 0.3); }
    .tertiary.checked .radio-outer { border-color: var(--cml-color-tertiary); }
    .tertiary .radio-inner { 
      background-color: var(--cml-color-tertiary);
      box-shadow: 0 0 10px var(--cml-color-tertiary);
    }
    .tertiary .radio-outer::before, .tertiary .radio-outer::after { border-color: var(--cml-color-tertiary); }

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
      cursor: not-allowed;
      opacity: 0.3;
      pointer-events: none;
      filter: grayscale(1);
    }
  `;

  private _toggle() {
    if (this.disabled || this.checked) return;
    this.checked = true;
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
        <div class="radio-outer">
          <div class="radio-inner"></div>
        </div>
        ${this.label ? html`<span class="label-text">${this.label}</span>` : ''}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'camelot-scifi-radio-impl': CamelotScifiRadio;
  }
}
