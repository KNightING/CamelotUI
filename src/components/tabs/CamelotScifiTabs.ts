import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import '../scifi/CamelotScifiReticle';

/**
 * <CamelotScifiTabs>
 * 日系科幻風格 (Sci-fi HUD) 的頁籤元件實作。
 * 特色：標線導航、動態掃描指示器。
 */
@customElement('camelot-scifi-tabs-impl')
export class CamelotScifiTabs extends LitElement {
  @property({ type: Array })
  items: Array<{ label: string, value: string }> = [];

  @property({ type: String })
  value: string = '';

  @property({ type: String })
  color: 'primary' | 'secondary' | 'tertiary' = 'primary';

  @state()
  private _hoverIndex: number | null = null;

  static styles = css`
    :host {
      display: block;
      font-family: 'Share Tech Mono', monospace;
      --cml-scifi-color: var(--cml-color-primary);
      --cml-scifi-glow: color-mix(in srgb, var(--cml-scifi-color), transparent 85%);
    }

    :host([color="secondary"]) { --cml-scifi-color: var(--cml-color-secondary); }
    :host([color="tertiary"]) { --cml-scifi-color: var(--cml-color-tertiary); }

    .tabs-container {
      display: flex;
      position: relative;
      gap: 10px;
      padding: 10px 5px;
      background: color-mix(in srgb, var(--cml-scifi-color), transparent 96%);
      border-bottom: 2px solid color-mix(in srgb, var(--cml-scifi-color), transparent 70%);
    }

    .tab-item {
      flex: 1;
      padding: 10px;
      text-align: center;
      font-size: 0.85rem;
      font-weight: bold;
      color: color-mix(in srgb, #fff, transparent 40%);
      cursor: pointer;
      position: relative;
      transition: all 0.3s cubic-bezier(0.19, 1, 0.22, 1);
      background: color-mix(in srgb, #fff, transparent 96%);
      border: 1px solid transparent;
      text-transform: uppercase;
      letter-spacing: 0.15em;
      white-space: nowrap;
      clip-path: polygon(
        10px 0, 100% 0, 
        100% calc(100% - 10px), calc(100% - 10px) 100%, 
        0 100%, 0 10px
      );
    }

    .tab-item:hover {
      background: color-mix(in srgb, var(--cml-scifi-color), transparent 90%);
      color: #fff;
    }

    .tab-item.active {
      background: color-mix(in srgb, var(--cml-scifi-color), transparent 80%);
      color: var(--cml-scifi-color);
      border: 1px solid var(--cml-scifi-color);
      text-shadow: 0 0 10px var(--cml-scifi-glow);
    }

    /* 指示器：掃描線效果 */
    .indicator {
      position: absolute;
      bottom: -2px;
      height: 3px;
      background: var(--cml-scifi-color);
      box-shadow: 0 0 15px var(--cml-scifi-color);
      transition: all 0.4s cubic-bezier(0.19, 1, 0.22, 1);
      z-index: 2;
    }

    .indicator::after {
      content: '';
      position: absolute;
      top: 0; left: 0; width: 40px; height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent);
      animation: scan 2s infinite linear;
    }

    @keyframes scan {
      from { left: -40px; }
      to { left: 100%; }
    }

    camelot-scifi-reticle {
      inset: -2px;
    }

    /* 裝飾性裝飾點 */
    .deco-dots {
      position: absolute;
      bottom: 2px;
      right: 5px;
      display: flex;
      gap: 2px;
    }

    .dot {
      width: 3px;
      height: 3px;
      background: var(--cml-scifi-color);
      opacity: 0.5;
    }

    .active .dot {
      opacity: 1;
      box-shadow: 0 0 5px var(--cml-scifi-color);
    }
  `;

  private _select(val: string) {
    this.dispatchEvent(new CustomEvent('change', {
      detail: { value: val },
      bubbles: true,
      composed: true
    }));
  }

  render() {
    const activeIndex = this.items.findIndex(i => i.value === this.value);
    const tabCount = this.items.length;
    const tabWidth = 100 / tabCount;

    return html`
      <div class="tabs-container">
        ${this.items.map((item, index) => html`
          <div 
            class="tab-item ${this.value === item.value ? 'active' : ''}"
            @click="${() => this._select(item.value)}"
            @mouseenter="${() => this._hoverIndex = index}"
            @mouseleave="${() => this._hoverIndex = null}"
          >
            <camelot-scifi-reticle 
              ?active="${this._hoverIndex === index || this.value === item.value}" 
              .color="${this.color}"
            ></camelot-scifi-reticle>
            
            ${item.label}
            
            <div class="deco-dots">
              <div class="dot"></div>
              <div class="dot"></div>
              <div class="dot"></div>
            </div>
          </div>
        `)}
        
        ${activeIndex !== -1 ? html`
          <div 
            class="indicator" 
            style="width: calc(${tabWidth}% - 10px); left: calc(${activeIndex * tabWidth}% + 10px)"
          ></div>
        ` : ''}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'camelot-scifi-tabs-impl': CamelotScifiTabs;
  }
}
