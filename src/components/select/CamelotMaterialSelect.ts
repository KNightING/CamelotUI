import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import '../label/CamelotLabel';

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
    .secondary .select-trigger.active { border-color: var(--cml-color-secondary); }
    .tertiary .select-trigger.active { border-color: var(--cml-color-tertiary); }

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
    .secondary .active .arrow { border-top-color: var(--cml-color-secondary); }
    .tertiary .active .arrow { border-top-color: var(--cml-color-tertiary); }

    /* Dropdown */
    .dropdown {
      position: absolute;
      top: calc(100% + 4px);
      left: 0;
      right: 0;
      background-color: var(--cml-color-surface-container-high);
      border-radius: var(--cml-radius-s);
      box-shadow: var(--cml-shadow-3);
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

    .dropdown-header {
      padding: 8px;
      border-bottom: 1px solid var(--cml-color-outline-variant);
      background-color: var(--cml-color-surface-container-high);
      position: sticky;
      top: 0;
      z-index: 1;
    }

    .search-input {
      width: 100%;
      padding: 8px 12px;
      border: 1px solid var(--cml-color-outline-variant);
      border-radius: var(--cml-radius-xs);
      background-color: var(--cml-color-surface);
      color: var(--cml-color-on-surface);
      font-family: var(--cml-font-family);
      font-size: 14px;
      outline: none;
      box-sizing: border-box;
    }

    .search-input:focus {
      border-color: var(--cml-color-primary);
    }

    .dropdown-content {
      overflow-y: auto;
      flex: 1;
    }

    .option {
      padding: 12px 16px;
      cursor: pointer;
      transition: background-color 0.2s;
      color: var(--cml-color-on-surface);
      font-family: var(--cml-font-family);
    }

    .option:hover {
      background-color: var(--cml-color-surface-variant);
    }

    .option.selected {
      background-color: var(--cml-color-primary-container);
      color: var(--cml-color-on-primary-container);
      font-weight: 500;
    }
    .secondary .option.selected { background-color: var(--cml-color-secondary-container); color: var(--cml-color-on-secondary-container); }
    .tertiary .option.selected { background-color: var(--cml-color-tertiary-container); color: var(--cml-color-on-tertiary-container); }

    .no-results {
      padding: 16px;
      text-align: center;
      color: var(--cml-color-outline);
      font-size: 14px;
    }

    .disabled {
      opacity: 0.38;
      cursor: not-allowed;
      pointer-events: none;
    }
  `;

  private _toggleDropdown() {
    if (this.disabled) return;
    this.isOpen = !this.isOpen;
    if (this.isOpen) {
      setTimeout(() => {
        this.shadowRoot?.querySelector<HTMLInputElement>('.search-input')?.focus();
      }, 0);
    }
  }

  private _selectOption(option: { label: string, value: string }) {
    this.value = option.value;
    this.isOpen = false;
    this.searchTerm = '';
    this.dispatchEvent(new CustomEvent('change', {
      detail: { value: this.value },
      bubbles: true,
      composed: true
    }));
  }

  private _handleSearch(e: Event) {
    this.searchTerm = (e.target as HTMLInputElement).value;
  }

  render() {
    const selectedOption = this.options.find(opt => opt.value === this.value);
    const filteredOptions = this.options.filter(opt => 
      opt.label.toLowerCase().includes(this.searchTerm.toLowerCase())
    );

    return html`
      <div class="container ${this.color} ${this.disabled ? 'disabled' : ''}">
        ${this.label ? html`<camelot-label .text="${this.label}" .color="${this.isOpen ? this.color : 'outline'}"></camelot-label>` : ''}
        
        <div class="select-trigger ${this.isOpen ? 'active' : ''}" @click=${this._toggleDropdown}>
          <span>${selectedOption ? selectedOption.label : 'Select...'}</span>
          <div class="arrow"></div>
        </div>

        <div class="dropdown ${this.isOpen ? 'open' : ''}">
          <div class="dropdown-header">
            <input 
              type="text" 
              class="search-input" 
              placeholder="Search..." 
              .value=${this.searchTerm}
              @input=${this._handleSearch}
              @click=${(e: Event) => e.stopPropagation()}
            />
          </div>
          <div class="dropdown-content">
            ${filteredOptions.map(opt => html`
              <div 
                class="option ${opt.value === this.value ? 'selected' : ''}"
                @click=${(e: Event) => {
                  e.stopPropagation();
                  this._selectOption(opt);
                }}
              >
                ${opt.label}
              </div>
            `)}
            ${filteredOptions.length === 0 ? html`<div class="no-results">No results found</div>` : ''}
          </div>
        </div>
      </div>
    `;
  }
}
