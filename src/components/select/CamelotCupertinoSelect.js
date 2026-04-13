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
let CamelotCupertinoSelect = class CamelotCupertinoSelect extends LitElement {
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
      gap: 6px;
    }

    .select-trigger {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      background-color: rgba(120, 120, 128, 0.12);
      border-radius: 10px;
      padding: 11px 16px;
      font-family: var(--cml-font-family);
      font-size: 1.0625rem;
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
      opacity: 0.5;
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

    .dropdown-header {
      padding: 10px;
      background-color: rgba(255, 255, 255, 0.05);
      border-bottom: 0.5px solid var(--cml-color-outline-variant);
      position: sticky;
      top: 0;
      z-index: 1;
    }

    .search-input {
      width: 100%;
      padding: 8px 12px;
      border: none;
      border-radius: 8px;
      background-color: rgba(118, 118, 128, 0.12);
      color: var(--cml-color-on-surface);
      font-family: var(--cml-font-family);
      font-size: 0.9375rem;
      outline: none;
      box-sizing: border-box;
    }

    .dropdown-content {
      overflow-y: auto;
      flex: 1;
    }

    .option {
      padding: 14px 16px;
      cursor: pointer;
      color: var(--cml-color-on-background);
      font-family: var(--cml-font-family);
      font-size: 1.0625rem;
      border-bottom: 0.5px solid rgba(0, 0, 0, 0.05);
      transition: background-color 0.1s;
    }

    .option:last-child {
      border-bottom: none;
    }

    .option:active {
      background-color: rgba(0, 0, 0, 0.05);
    }

    .option.selected {
      color: var(--cml-color-primary);
      font-weight: 600;
    }
    .secondary.container .option.selected { color: var(--cml-color-secondary); }
    .tertiary.container .option.selected { color: var(--cml-color-tertiary); }

    .no-results {
      padding: 20px;
      text-align: center;
      color: var(--cml-color-on-surface-variant);
      font-size: 0.9375rem;
    }

    .disabled {
      opacity: 0.5;
      cursor: not-allowed;
      pointer-events: none;
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
], CamelotCupertinoSelect.prototype, "label", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], CamelotCupertinoSelect.prototype, "value", void 0);
__decorate([
    property({ type: Array }),
    __metadata("design:type", Array)
], CamelotCupertinoSelect.prototype, "options", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], CamelotCupertinoSelect.prototype, "color", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Boolean)
], CamelotCupertinoSelect.prototype, "disabled", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Boolean)
], CamelotCupertinoSelect.prototype, "isOpen", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], CamelotCupertinoSelect.prototype, "searchTerm", void 0);
CamelotCupertinoSelect = __decorate([
    customElement('camelot-cupertino-select')
], CamelotCupertinoSelect);
export { CamelotCupertinoSelect };
//# sourceMappingURL=CamelotCupertinoSelect.js.map