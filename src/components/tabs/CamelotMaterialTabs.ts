import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('camelot-material-tabs')
export class CamelotMaterialTabs extends LitElement {
  @property({ type: Array })
  items: Array<{ label: string, value: string }> = [];

  @property({ type: String })
  value: string = '';

  @property({ type: String })
  color: 'primary' | 'secondary' | 'tertiary' = 'primary';

  static styles = css`
    :host {
      display: block;
      border-bottom: 1px solid var(--cml-color-outline-variant);
    }

    .tabs-container {
      display: flex;
      position: relative;
      background-color: var(--cml-color-surface);
    }

    .tab-item {
      flex: 1;
      padding: 14px 16px;
      text-align: center;
      font-family: var(--cml-font-family);
      font-size: var(--cml-font-size-label);
      font-weight: 500;
      color: var(--cml-color-on-surface-variant);
      cursor: pointer;
      position: relative;
      transition: color 0.2s;
      outline: none;
      border: none;
      background: transparent;
    }

    .tab-item:hover {
      background-color: rgba(0, 0, 0, 0.04);
    }

    .tab-item.active {
      color: var(--cml-color-primary);
    }
    .active.secondary { color: var(--cml-color-secondary); }
    .active.tertiary { color: var(--cml-color-tertiary); }

    .indicator-container {
      position: absolute;
      bottom: 0;
      height: 3px;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      display: flex;
      justify-content: center;
    }

    .indicator {
      width: 40px; /* M3 characteristic: indicator is shorter than tab */
      height: 100%;
      background-color: var(--cml-color-primary);
      border-top-left-radius: 3px;
      border-top-right-radius: 3px;
    }
    .secondary .indicator { background-color: var(--cml-color-secondary); }
    .tertiary .indicator { background-color: var(--cml-color-tertiary); }
  `;

  private _select(val: string) {
    this.value = val;
    this.dispatchEvent(new CustomEvent('change', {
      detail: { value: val }
    }));
  }

  render() {
    const activeIndex = this.items.findIndex(i => i.value === this.value);
    const tabWidth = 100 / this.items.length;
    const indicatorPos = activeIndex * tabWidth;

    return html`
      <div class="tabs-container ${this.color}">
        ${this.items.map(item => html`
          <button 
            class="tab-item ${this.value === item.value ? 'active' : ''}"
            @click="${() => this._select(item.value)}"
          >
            ${item.label}
          </button>
        `)}
        <div 
          class="indicator-container" 
          style="width: ${tabWidth}%; left: ${indicatorPos}%"
        >
          <div class="indicator"></div>
        </div>
      </div>
    `;
  }
}
