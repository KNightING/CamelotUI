import { html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { CamelotScifiBase } from '../scifi/CamelotScifiBase';
import '../scifi/CamelotScifiFrame';

/**
 * <CamelotScifiTabs>
 * 日系科幻風格 (Sci-fi HUD) 的分頁元件實作。
 * 已優化：使用 CamelotScifiBase 與 CamelotScifiFrame。
 */
@customElement('camelot-scifi-tabs-impl')
export class CamelotScifiTabs extends CamelotScifiBase {
  @property({ type: Array }) items: Array<{label: string, value: string}> = [];
  @property({ type: String }) value = '';
  @property({ type: Boolean, attribute: 'show-nav-codes' }) showNavCodes = false;

  static styles = [
    css`
      :host {
        display: block;
        width: 100%;
        --cml-scifi-color: var(--cml-color-current-color);
      }
      .tabs-container {
        display: flex;
        position: relative;
        width: 100%;
        padding-bottom: 2px;
      }
      /* 底部主導軌 */
      .tabs-container::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 1px;
        background: color-mix(in srgb, var(--cml-scifi-color) 30%, transparent);
        z-index: 1;
      }
      .tab-wrapper {
        flex: 1; /* 分散佈置 */
        position: relative;
        cursor: pointer;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 10px 4px;
        transition: all 0.3s ease;
        overflow: hidden;
      }
      .tab-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 2px;
        width: 100%;
        z-index: 2;
      }
      .tab-label {
        font-family: var(--cml-font-family);
        font-size: 0.8rem;
        font-weight: bold;
        color: color-mix(in srgb, var(--cml-scifi-color) 60%, var(--cml-color-on-surface));
        text-transform: uppercase;
        letter-spacing: 1.5px;
        transition: all 0.3s ease;
      }
      .nav-code {
        font-size: 0.6rem;
        opacity: 0.5;
        font-family: var(--cml-font-family);
        margin-bottom: 2px;
      }
      
      /* Active Indicator */
      .active-indicator {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 2px;
        background: var(--cml-scifi-color);
        box-shadow: 0 0 10px var(--cml-scifi-color);
        transform: scaleX(0);
        transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        z-index: 3;
      }
      
      .tab-wrapper[active] .active-indicator {
        transform: scaleX(1);
      }
      .tab-wrapper[active] .tab-label {
        color: var(--cml-scifi-color);
        text-shadow: 0 0 8px color-mix(in srgb, var(--cml-scifi-color) 50%, transparent);
      }

      /* Hover Effects */
      .tab-wrapper::before {
        content: '';
        position: absolute;
        inset: 0;
        background: linear-gradient(to bottom, transparent, color-mix(in srgb, var(--cml-scifi-color) 5%, transparent));
        opacity: 0;
        transition: opacity 0.3s ease;
      }
      .tab-wrapper:hover::before {
        opacity: 1;
      }
      .tab-wrapper:hover .tab-label {
        color: var(--cml-scifi-color);
      }

      /* Brackets for active */
      .bracket {
        position: absolute;
        width: 6px;
        height: 10px;
        border-color: var(--cml-scifi-color);
        border-style: solid;
        opacity: 0;
        transition: all 0.3s ease;
      }
      .tab-wrapper[active] .bracket {
        opacity: 0.8;
      }
      .bracket-tl { top: 6px; left: 10%; border-width: 1px 0 0 1px; }
      .bracket-br { bottom: 6px; right: 10%; border-width: 0 1px 1px 0; }
    `
  ];

  private _select(val: string) {
    if (this.disabled) return;
    this.value = val;
    this.dispatchEvent(new CustomEvent('change', {
      detail: { value: val },
      bubbles: true,
      composed: true
    }));
  }

  render() {
    return html`
      <div class="tabs-container">
        ${this.items.map((item, index) => {
          const isActive = this.value === item.value;
          const navCode = (index + 1).toString().padStart(2, '0');
          return html`
            <div 
              class="tab-wrapper" 
              ?active="${isActive}"
              @click="${() => this._select(item.value)}"
            >
              <div class="bracket bracket-tl"></div>
              <div class="bracket bracket-br"></div>
              
              <div class="tab-item">
                ${this.showNavCodes ? html`<span class="nav-code">NAV:${navCode}</span>` : ''}
                <span class="tab-label">${item.label}</span>
              </div>
              
              <div class="active-indicator"></div>
            </div>
          `;
        })}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'camelot-scifi-tabs-impl': CamelotScifiTabs;
  }
}
