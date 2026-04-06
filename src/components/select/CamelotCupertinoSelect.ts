import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('camelot-cupertino-select')
export class CamelotCupertinoSelect extends LitElement {
  @property({ type: String })
  label: string = '';

  @property({ type: String })
  value: string = '';

  @property({ type: Array })
  options: Array<{ label: string, value: string }> = [];

  @property({ type: String })
  color: 'primary' | 'secondary' | 'tertiary' = 'primary';

  @property({ type: Boolean })
  disabled: boolean = false;

  @property({ type: Boolean })
  isOpen: boolean = false;

  @property({ type: String })
  searchTerm: string = '';

  static styles = css`
    :host {
      display: block;
      position: relative;
    }

    .container {
      display: flex;
      flex-direction: column;
      gap: 6px;
    }

    label {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      font-size: 13px;
      color: rgba(60, 60, 67, 0.6);
      margin-left: 12px;
      text-transform: uppercase;
      letter-spacing: -0.01em;
    }

    .select-trigger {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      background-color: rgba(120, 120, 128, 0.12);
      border-radius: 10px;
      padding: 11px 16px;
      font-family: -apple-system, sans-serif;
      font-size: 17px;
      color: var(--cml-color-on-background);
      cursor: pointer;
      box-sizing: border-box;
      transition: background-color 0.2s;
    }

    .select-trigger:active:not(.disabled) {
      background-color: rgba(120, 120, 128, 0.24);
    }

    .chevron {
      width: 8px;
      height: 8px;
      border-right: 2px solid currentColor;
      border-bottom: 2px solid currentColor;
      transform: rotate(45deg);
      transition: transform 0.2s;
      margin-top: -4px;
      opacity: 0.5; /* iOS style chevron is subtle but visible */
    }

    .active .chevron {
      transform: rotate(-45deg) translate(-2px, 2px);
      opacity: 0.8;
    }

    /* Dropdown Overlay */
    .dropdown {
      position: absolute;
      top: calc(100% + 8px);
      left: 0;
      right: 0;
      background-color: var(--cml-color-surface-container-high);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      border-radius: 12px;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
      z-index: 1000;
      overflow: hidden;
      display: none;
      flex-direction: column;
      max-height: 320px;
      border: 0.5px solid var(--cml-color-outline-variant);
    }

    .dropdown.open {
      display: flex;
    }

    /* Search Header */
    .dropdown-header {
      padding: 10px 12px;
      background-color: var(--cml-color-surface-container-high);
      border-bottom: 0.5px solid var(--cml-color-outline-variant);
      position: sticky;
      top: 0;
      z-index: 2;
    }

    .search-wrapper {
      position: relative;
      background-color: var(--cml-color-surface-container-low);
      border-radius: 8px;
      padding: 6px 8px 6px 32px;
      display: flex;
      align-items: center;
    }

    .search-input {
      width: 100%;
      background: transparent;
      border: none;
      font-size: 14px;
      color: var(--cml-color-on-surface);
      outline: none;
    }

    .search-icon {
      position: absolute;
      left: 10px;
      font-size: 14px;
      opacity: 0.5;
    }

    /* Option List */
    .option-list {
      overflow-y: auto;
    }

    .option-item {
      padding: 12px 16px;
      font-size: 16px;
      color: var(--cml-color-on-surface);
      border-bottom: 0.5px solid var(--cml-color-outline-variant);
      cursor: pointer;
      display: flex;
      justify-content: space-between;
      align-items: center;
      transition: background-color 0.2s;
    }

    .option-item:last-child {
      border-bottom: none;
    }

    .option-item:hover {
      background-color: var(--cml-color-surface-container-highest);
    }

    .option-item.selected {
      background-color: var(--cml-color-secondary-container);
      color: var(--cml-color-on-secondary-container);
    }

    .check-icon {
      display: none;
      font-weight: bold;
    }

    .option-item.selected .check-icon {
      display: block;
    }

    .no-results {
      padding: 20px;
      text-align: center;
      font-size: 14px;
      color: var(--cml-color-outline);
    }

    /* Color States - Selected Theme Colors */
    .primary .option-item.selected { 
      background-color: var(--cml-color-primary-container);
      color: var(--cml-color-on-primary-container);
    }
    .secondary .option-item.selected { 
      background-color: var(--cml-color-secondary-container);
      color: var(--cml-color-on-secondary-container);
    }
    .tertiary .option-item.selected { 
      background-color: var(--cml-color-tertiary-container);
      color: var(--cml-color-on-tertiary-container);
    }

    .disabled {
      opacity: 0.3;
      filter: grayscale(1);
      pointer-events: none;
    }
  `;

  private _onToggle(e: Event) {
    e.stopPropagation();
    this.dispatchEvent(new CustomEvent('toggle'));
  }

  private _onSearch(e: Event) {
    const val = (e.target as HTMLInputElement).value;
    this.dispatchEvent(new CustomEvent('search', { detail: { value: val } }));
  }

  private _onSelect(val: string) {
    this.dispatchEvent(new CustomEvent('change', { detail: { value: val } }));
  }

  render() {
    const selectedOption = this.options.find(opt => opt.value === this.value);

    return html`
      <div class="container ${this.color} ${this.disabled ? 'disabled' : ''}">
        ${this.label ? html`<label>${this.label}</label>` : ''}
        
        <div class="select-trigger ${this.isOpen ? 'active' : ''}" @click="${this._onToggle}">
          <span class="value-text">${selectedOption ? selectedOption.label : 'Select...'}</span>
          <div class="chevron"></div>
        </div>

        <div class="dropdown ${this.isOpen ? 'open' : ''} ${this.color}">
          <div class="dropdown-header">
            <div class="search-wrapper">
              <span class="search-icon">🔍</span>
              <input 
                type="text" 
                class="search-input" 
                placeholder="Search" 
                .value="${this.searchTerm}"
                @input="${this._onSearch}"
                @click="${(e: Event) => e.stopPropagation()}"
              >
            </div>
          </div>
          <div class="option-list">
            ${this.options.length > 0 ? this.options.map(opt => html`
              <div 
                class="option-item ${this.value === opt.value ? 'selected' : ''}" 
                @click="${() => this._onSelect(opt.value)}"
              >
                <span>${opt.label}</span>
                <span class="check-icon">✓</span>
              </div>
            `) : html`<div class="no-results">No Results</div>`}
          </div>
        </div>
      </div>
    `;
  }
}
