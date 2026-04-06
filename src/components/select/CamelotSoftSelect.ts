import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('camelot-soft-select')
export class CamelotSoftSelect extends LitElement {
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
      gap: 10px;
    }

    label {
      font-family: var(--cml-font-family);
      font-size: var(--cml-font-size-label);
      font-weight: var(--cml-font-weight-medium);
      color: var(--cml-color-on-background);
      margin-left: 12px;
      transition: color 0.2s;
    }

    .select-trigger {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      background-color: var(--cml-color-background);
      border-radius: 16px;
      padding: 14px 20px;
      font-family: var(--cml-font-family);
      font-size: var(--cml-font-size-body);
      color: var(--cml-color-on-background);
      cursor: pointer;
      box-sizing: border-box;
      box-shadow: 
        6px 6px 12px var(--cml-soft-color-dark), 
        -6px -6px 12px var(--cml-soft-color-light);
      transition: all 0.3s;
    }

    .select-trigger:active:not(.disabled) {
      box-shadow: 
        inset 4px 4px 8px var(--cml-soft-color-dark), 
        inset -4px -4px 8px var(--cml-soft-color-light);
    }

    .select-trigger.active {
      box-shadow: 
        inset 4px 4px 8px var(--cml-soft-color-dark), 
        inset -4px -4px 8px var(--cml-soft-color-light);
    }

    .chevron {
      width: 10px;
      height: 10px;
      border-right: 2.5px solid var(--cml-soft-color-dark);
      border-bottom: 2.5px solid var(--cml-soft-color-dark);
      transform: rotate(45deg);
      transition: all 0.3s;
      margin-top: -4px;
    }

    .active .chevron {
      transform: rotate(-135deg);
      border-color: var(--cml-color-primary);
    }

    /* Dropdown Overlay */
    .dropdown {
      position: absolute;
      top: calc(100% + 16px);
      left: 0;
      right: 0;
      background-color: var(--cml-color-background);
      border-radius: 20px;
      box-shadow: 
        10px 10px 20px var(--cml-soft-color-dark), 
        -10px -10px 20px var(--cml-soft-color-light);
      z-index: 1000;
      overflow: hidden;
      display: none;
      flex-direction: column;
      max-height: 320px;
      padding: 8px;
    }

    .dropdown.open {
      display: flex;
    }

    /* Search Header */
    .dropdown-header {
      padding: 12px;
      position: sticky;
      top: 0;
      z-index: 1;
      background-color: var(--cml-color-background);
    }

    .search-wrapper {
      position: relative;
      display: flex;
      align-items: center;
      background-color: var(--cml-color-background);
      border-radius: 12px;
      padding: 10px 12px;
      box-shadow: 
        inset 3px 3px 6px var(--cml-soft-color-dark), 
        inset -3px -3px 6px var(--cml-soft-color-light);
    }

    .search-input {
      width: 100%;
      background: transparent;
      border: none;
      font-size: 14px;
      color: var(--cml-color-on-background);
      outline: none;
    }

    .search-icon {
      margin-right: 8px;
      opacity: 0.5;
    }

    /* Option List */
    .option-list {
      overflow-y: auto;
      padding: 4px;
    }

    .option-item {
      padding: 12px 16px;
      border-radius: 12px;
      margin-bottom: 4px;
      cursor: pointer;
      font-size: 15px;
      color: var(--cml-color-on-background);
      transition: all 0.2s ease;
    }

    .option-item:hover {
      background-color: var(--cml-color-background);
      box-shadow: 
        inset 2px 2px 5px var(--cml-soft-color-dark), 
        inset -2px -2px 5px var(--cml-soft-color-light);
    }

    .option-item.selected {
      background-color: var(--cml-color-background);
      box-shadow: 
        inset 4px 4px 8px var(--cml-soft-color-dark), 
        inset -4px -4px 8px var(--cml-soft-color-light);
      color: var(--cml-color-primary);
      font-weight: var(--cml-font-weight-bold);
    }

    .no-results {
      padding: 24px;
      text-align: center;
      font-size: 14px;
      color: var(--cml-color-outline);
    }

    /* Color States - Sync Selected Text with Theme Colors */
    .primary label { color: var(--cml-color-primary); }
    .secondary label { color: var(--cml-color-secondary); }
    .tertiary label { color: var(--cml-color-tertiary); }
    
    .primary .option-item.selected { color: var(--cml-color-primary); }
    .secondary .option-item.selected { color: var(--cml-color-secondary); }
    .tertiary .option-item.selected { color: var(--cml-color-tertiary); }

    .disabled {
      opacity: 0.5;
      pointer-events: none;
      box-shadow: none !important;
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
          <span>${selectedOption ? selectedOption.label : 'Select...'}</span>
          <div class="chevron"></div>
        </div>

        <div class="dropdown ${this.isOpen ? 'open' : ''} ${this.color}">
          <div class="dropdown-header">
            <div class="search-wrapper">
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
          </div>
          <div class="option-list">
            ${this.options.length > 0 ? this.options.map(opt => html`
              <div 
                class="option-item ${this.value === opt.value ? 'selected' : ''}" 
                @click="${() => this._onSelect(opt.value)}"
              >
                ${opt.label}
              </div>
            `) : html`<div class="no-results">No Results</div>`}
          </div>
        </div>
      </div>
    `;
  }
}
