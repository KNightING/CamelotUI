import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('camelot-material-select')
export class CamelotMaterialSelect extends LitElement {
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
      gap: 4px;
    }

    label {
      font-family: var(--cml-font-family);
      font-size: 12px;
      font-weight: 500;
      color: var(--cml-color-outline);
      margin-left: 4px;
      transition: color 0.2s;
    }

    .select-trigger {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      background-color: var(--cml-color-surface-container-low);
      border: 1px solid var(--cml-color-outline);
      border-radius: var(--cml-radius-s);
      padding: 12px 16px;
      font-family: var(--cml-font-family);
      font-size: 16px;
      color: var(--cml-color-on-surface);
      cursor: pointer;
      box-sizing: border-box;
      transition: all 0.2s;
      min-height: 48px;
    }

    .select-trigger:hover:not(.disabled) {
      background-color: var(--cml-color-surface-container-medium);
    }

    .select-trigger.active {
      border-color: var(--cml-color-primary);
      border-width: 2px;
      padding: 11px 15px; /* Adjust for border width change */
    }

    .arrow {
      width: 0;
      height: 0;
      border-left: 5px solid transparent;
      border-right: 5px solid transparent;
      border-top: 5px solid var(--cml-color-outline);
      transition: transform 0.2s;
    }

    .active .arrow {
      transform: rotate(180deg);
      border-top-color: var(--cml-color-primary);
    }

    /* Dropdown */
    .dropdown {
      position: absolute;
      top: calc(100% + 4px);
      left: 0;
      right: 0;
      background-color: var(--cml-color-surface-container-high);
      border-radius: var(--cml-radius-s);
      box-shadow: var(--cml-shadow-3); /* Increased shadow for better separation */
      z-index: 1000;
      overflow: hidden;
      display: none;
      flex-direction: column;
      max-height: 300px;
      border: 1px solid var(--cml-color-outline-variant);
    }

    .dropdown.open {
      display: flex;
    }

    /* Dropdown Header (Search) */
    .dropdown-header {
      padding: 12px;
      border-bottom: 1px solid var(--cml-color-outline-variant);
      background-color: var(--cml-color-surface-container-high);
      position: sticky;
      top: 0;
      z-index: 1;
    }

    .search-input {
      width: 100%;
      padding: 10px 12px;
      padding-left: 36px;
      border: 1px solid var(--cml-color-outline);
      border-radius: var(--cml-radius-s);
      background-color: var(--cml-color-surface-container-low);
      color: var(--cml-color-on-surface);
      font-size: 14px;
      outline: none;
      box-sizing: border-box;
      transition: border-color 0.2s;
    }

    .search-input:focus {
      border-color: var(--cml-color-primary);
      border-width: 2px;
      padding: 9px 11px 9px 35px; /* Adjust for border width */
    }

    .search-icon {
      position: absolute;
      left: 22px;
      top: 50%;
      transform: translateY(-50%);
      font-size: 16px;
      opacity: 0.7;
    }

    /* Option List */
    .option-list {
      overflow-y: auto;
      flex: 1;
    }

    .option-item {
      padding: 12px 16px;
      cursor: pointer;
      font-family: var(--cml-font-family);
      font-size: 14px;
      color: var(--cml-color-on-surface);
      transition: background-color 0.2s, color 0.2s;
      position: relative;
    }

    .option-item:hover {
      background-color: var(--cml-color-surface-container-highest);
    }

    .option-item.selected {
      background-color: var(--cml-color-primary-container);
      color: var(--cml-color-on-primary-container);
      font-weight: 500;
    }

    .no-results {
      padding: 16px;
      text-align: center;
      font-size: 14px;
      color: var(--cml-color-outline);
    }

    /* Color States - Sync with Theme Colors */
    .primary .search-input:focus { border-color: var(--cml-color-primary); }
    .secondary .search-input:focus { border-color: var(--cml-color-secondary); }
    .tertiary .search-input:focus { border-color: var(--cml-color-tertiary); }

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
      opacity: 0.38;
      cursor: not-allowed;
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
        
        <div class="select-trigger ${this.isOpen ? 'active' : ''} ${this.color}" @click="${this._onToggle}">
          <span class="value-text">${selectedOption ? selectedOption.label : 'Select...'}</span>
          <div class="arrow"></div>
        </div>

        <div class="dropdown ${this.isOpen ? 'open' : ''} ${this.color}">
          <div class="dropdown-header">
            <span class="search-icon">🔍</span>
            <input 
              type="text" 
              class="search-input" 
              placeholder="Search..." 
              .value="${this.searchTerm}"
              @input="${this._onSearch}"
              @click="${(e: Event) => e.stopPropagation()}"
            >
          </div>
          <div class="option-list">
            ${this.options.length > 0 ? this.options.map(opt => html`
              <div 
                class="option-item ${this.value === opt.value ? 'selected' : ''}" 
                @click="${() => this._onSelect(opt.value)}"
              >
                ${opt.label}
              </div>
            `) : html`<div class="no-results">No results found</div>`}
          </div>
        </div>
      </div>
    `;
  }
}
