var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import '../label/CamelotLabel';
let CamelotSoftSelect = class CamelotSoftSelect extends LitElement {
    constructor() {
        super(...arguments);
        this.label = '';
        this.value = '';
        this.options = [];
        this.color = 'primary';
        this.disabled = false;
        this.isOpen = false;
        this.searchTerm = '';
    }
    static { this.styles = css `
    :host {
      display: block;
      position: relative;
    }

    .container {
      display: flex;
      flex-direction: column;
      gap: 10px;
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
    .secondary .active .chevron { border-color: var(--cml-color-secondary); }
    .tertiary .active .chevron { border-color: var(--cml-color-tertiary); }

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
    }

    .dropdown.open {
      display: flex;
    }

    .dropdown-header {
      padding: 12px;
      background-color: var(--cml-color-background);
      border-bottom: 1px solid var(--cml-soft-color-dark);
      position: sticky;
      top: 0;
      z-index: 1;
    }

    .search-input {
      width: 100%;
      padding: 10px 16px;
      border: none;
      border-radius: 12px;
      background-color: var(--cml-color-background);
      color: var(--cml-color-on-background);
      font-family: var(--cml-font-family);
      font-size: 0.875rem;
      outline: none;
      box-shadow: 
        inset 3px 3px 6px var(--cml-soft-color-dark), 
        inset -3px -3px 6px var(--cml-soft-color-light);
      box-sizing: border-box;
    }

    .dropdown-content {
      overflow-y: auto;
      flex: 1;
      padding: 8px;
    }

    .option {
      padding: 12px 16px;
      cursor: pointer;
      color: var(--cml-color-on-background);
      font-family: var(--cml-font-family);
      border-radius: 12px;
      transition: all 0.2s;
      margin-bottom: 4px;
    }

    .option:last-child {
      margin-bottom: 0;
    }

    .option:hover {
      background-color: rgba(0, 0, 0, 0.03);
    }

    .option.selected {
      background-color: var(--cml-color-background);
      color: var(--cml-color-primary);
      box-shadow: 
        inset 3px 3px 6px var(--cml-soft-color-dark), 
        inset -3px -3px 6px var(--cml-soft-color-light);
      font-weight: 600;
    }
    .secondary .option.selected { color: var(--cml-color-secondary); }
    .tertiary .option.selected { color: var(--cml-color-tertiary); }

    .no-results {
      padding: 16px;
      text-align: center;
      color: var(--cml-color-on-surface-variant);
      font-size: 0.875rem;
    }

    .disabled {
      opacity: 0.5;
      cursor: not-allowed;
      pointer-events: none;
      box-shadow: none !important;
    }
  `; }
    _toggleDropdown() {
        if (this.disabled)
            return;
        this.isOpen = !this.isOpen;
        if (this.isOpen) {
            setTimeout(() => {
                this.shadowRoot?.querySelector('.search-input')?.focus();
            }, 0);
        }
    }
    _selectOption(option) {
        this.value = option.value;
        this.isOpen = false;
        this.searchTerm = '';
        this.dispatchEvent(new CustomEvent('change', {
            detail: { value: this.value },
            bubbles: true,
            composed: true
        }));
    }
    _handleSearch(e) {
        this.searchTerm = e.target.value;
    }
    render() {
        const selectedOption = this.options.find(opt => opt.value === this.value);
        const filteredOptions = this.options.filter(opt => opt.label.toLowerCase().includes(this.searchTerm.toLowerCase()));
        return html `
      <div class="container ${this.color} ${this.disabled ? 'disabled' : ''}">
        ${this.label ? html `<camelot-label .text="${this.label}" .color="${this.color}" .for="select"></camelot-label>` : ''}
        
        <div class="select-trigger ${this.isOpen ? 'active' : ''}" @click=${this._toggleDropdown}>
          <span>${selectedOption ? selectedOption.label : 'Select...'}</span>
          <div class="chevron"></div>
        </div>

        <div class="dropdown ${this.isOpen ? 'open' : ''}">
          <div class="dropdown-header">
            <input 
              type="text" 
              class="search-input" 
              placeholder="Search..." 
              .value=${this.searchTerm}
              @input=${this._handleSearch}
              @click=${(e) => e.stopPropagation()}
            />
          </div>
          <div class="dropdown-content">
            ${filteredOptions.map(opt => html `
              <div 
                class="option ${opt.value === this.value ? 'selected' : ''}"
                @click=${(e) => {
            e.stopPropagation();
            this._selectOption(opt);
        }}
              >
                ${opt.label}
              </div>
            `)}
            ${filteredOptions.length === 0 ? html `<div class="no-results">No results found</div>` : ''}
          </div>
        </div>
      </div>
    `;
    }
};
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], CamelotSoftSelect.prototype, "label", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], CamelotSoftSelect.prototype, "value", void 0);
__decorate([
    property({ type: Array }),
    __metadata("design:type", Array)
], CamelotSoftSelect.prototype, "options", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], CamelotSoftSelect.prototype, "color", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Boolean)
], CamelotSoftSelect.prototype, "disabled", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Boolean)
], CamelotSoftSelect.prototype, "isOpen", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], CamelotSoftSelect.prototype, "searchTerm", void 0);
CamelotSoftSelect = __decorate([
    customElement('camelot-soft-select')
], CamelotSoftSelect);
export { CamelotSoftSelect };
//# sourceMappingURL=CamelotSoftSelect.js.map