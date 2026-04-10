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

  static styles = [
    css`
      :host {
        display: block;
        width: 100%;
      }
      .tabs-container {
        display: flex;
        gap: 8px;
        border-bottom: 1px solid color-mix(in srgb, var(--cml-scifi-color) 20%, transparent);
        padding-bottom: 4px;
      }
      .tab-item {
        cursor: pointer;
        padding: 6px 16px;
        transition: all 0.2s ease;
        min-width: 100px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .tab-label {
        font-family: var(--cml-font-family-mono, monospace);
        font-size: 0.85rem;
        font-weight: bold;
        color: var(--cml-color-on-surface);
        text-transform: uppercase;
        letter-spacing: 1px;
        transition: color 0.2s ease;
      }
      .tab-wrapper:hover camelot-scifi-frame {
        --cml-scifi-bg-opacity: 15%;
      }
      .tab-item[active] .tab-label {
        color: var(--cml-color-on-primary, #fff);
      }
      :host([color="primary"]) .tab-item[active] .tab-label { color: var(--cml-color-on-primary); }
      :host([color="secondary"]) .tab-item[active] .tab-label { color: var(--cml-color-on-secondary); }
      :host([color="tertiary"]) .tab-item[active] .tab-label { color: var(--cml-color-on-tertiary); }
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
        ${this.items.map(item => {
          const isActive = this.value === item.value;
          return html`
            <div class="tab-wrapper" @click="${() => this._select(item.value)}">
              <camelot-scifi-frame
                .color="${this.color}"
                ?filled="${isActive}"
                ?showGrid="${false}"
                ?showScanline="${isActive}"
              >
                <div class="tab-item" ?active="${isActive}">
                  <span class="tab-label">${item.label}</span>
                </div>
              </camelot-scifi-frame>
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
