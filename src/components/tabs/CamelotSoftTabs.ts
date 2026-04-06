import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('camelot-soft-tabs')
export class CamelotSoftTabs extends LitElement {
  @property({ type: Array })
  items: Array<{ label: string, value: string }> = [];

  @property({ type: String })
  value: string = '';

  @property({ type: String })
  color: 'primary' | 'secondary' | 'tertiary' = 'primary';

  static styles = css`
    :host {
      display: block;
      padding: 6px;
    }

    .tabs-track {
      display: flex;
      position: relative;
      background-color: var(--cml-color-background);
      border-radius: 16px;
      padding: 4px;
      box-shadow: 
        inset 4px 4px 8px var(--cml-soft-color-dark), 
        inset -4px -4px 8px var(--cml-soft-color-light);
    }

    .tab-item {
      flex: 1;
      padding: 10px 12px;
      text-align: center;
      font-family: var(--cml-font-family);
      font-size: 0.875rem;
      font-weight: 500;
      color: var(--cml-color-on-background);
      cursor: pointer;
      z-index: 1;
      border: none;
      background: transparent;
      outline: none;
      transition: color 0.3s;
    }

    .tab-item.active {
      color: var(--cml-color-primary);
    }
    .active.primary { color: var(--cml-color-primary); }
    .active.secondary { color: var(--cml-color-secondary); }
    .active.tertiary { color: var(--cml-color-tertiary); }

    .selection-raised {
      position: absolute;
      top: 4px;
      bottom: 4px;
      background-color: var(--cml-color-background);
      border-radius: 12px;
      box-shadow: 
        4px 4px 8px var(--cml-soft-color-dark), 
        -4px -4px 8px var(--cml-soft-color-light);
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }
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
    const pillPos = activeIndex * tabWidth;

    return html`
      <div class="tabs-track ${this.color}">
        <div 
          class="selection-raised" 
          style="width: calc(${tabWidth}% - 8px); left: calc(${pillPos}% + 4px)"
        ></div>
        ${this.items.map(item => html`
          <button 
            class="tab-item ${this.value === item.value ? 'active' : ''}"
            @click="${() => this._select(item.value)}"
          >
            ${item.label}
          </button>
        `)}
      </div>
    `;
  }
}
