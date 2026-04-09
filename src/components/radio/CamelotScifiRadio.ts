import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import '../scifi/CamelotScifiReticle';

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

  @state()
  private _isHovered: boolean = false;

  static styles = css`
    :host {
      display: inline-block;
      cursor: pointer;
      font-family: 'Share Tech Mono', monospace;
      --cml-scifi-color: var(--cml-color-primary);
    }

    :host([color="secondary"]) { --cml-scifi-color: var(--cml-color-secondary); }
    :host([color="tertiary"]) { --cml-scifi-color: var(--cml-color-tertiary); }

    .container {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 6px 12px;
      min-height: 36px;
      box-sizing: border-box;
      transition: all 0.2s;
      position: relative;
    }

    .container:hover:not(.disabled) {
      background: color-mix(in srgb, var(--cml-scifi-color), transparent 95%);
    }

    .radio-outer {
      position: relative;
      width: 18px;
      height: 18px;
      border: 1px solid color-mix(in srgb, var(--cml-scifi-color), transparent 70%);
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
      border-color: var(--cml-scifi-color);
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
      border-color: var(--cml-scifi-color);
      box-shadow: 0 0 10px color-mix(in srgb, var(--cml-scifi-color), transparent 70%);
    }
    
    .checked .radio-outer::before, .checked .radio-outer::after {
      opacity: 1;
    }

    .radio-inner {
      width: 10px;
      height: 10px;
      background-color: var(--cml-scifi-color);
      transform: scale(0);
      transition: transform 0.3s cubic-bezier(0.19, 1, 0.22, 1);
      box-shadow: 0 0 10px var(--cml-scifi-color);
    }

    .checked .radio-inner {
      transform: scale(1);
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
      text-shadow: 0 0 5px var(--cml-scifi-color);
    }

    .disabled {
      cursor: not-allowed;
      opacity: 0.3;
      pointer-events: none;
      filter: grayscale(1);
    }

    /* Reticle adjustment */
    camelot-scifi-reticle {
      inset: 2px;
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
        @mouseenter="${() => this._isHovered = true}"
        @mouseleave="${() => this._isHovered = false}"
      >
        <camelot-scifi-reticle 
          ?active="${this._isHovered}" 
          .color="${this.color}"
        ></camelot-scifi-reticle>
        
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
