import { html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { CamelotBaseSelect } from './CamelotBaseSelect';
import '../label/CamelotLabel';

@customElement('camelot-material-select')
export class CamelotMaterialSelect extends CamelotBaseSelect {
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
      height: 56px;
      padding: 0 16px;
      background-color: var(--cml-color-surface-variant);
      border-radius: 4px 4px 0 0;
      border-bottom: 1px solid var(--cml-color-outline);
      font-family: var(--cml-font-family);
      font-size: var(--cml-font-size-body);
      color: var(--cml-color-on-surface);
      cursor: pointer;
      box-sizing: border-box;
      transition: all 0.2s;
    }

    .select-trigger:hover:not(.disabled) {
      background-color: rgba(var(--cml-color-on-surface-rgb), 0.08);
      border-bottom-color: var(--cml-color-on-surface);
    }

    .select-trigger.active {
      border-bottom: 2px solid var(--cml-color-primary);
      background-color: rgba(var(--cml-color-primary-rgb), 0.12);
    }
    .secondary .select-trigger.active { border-bottom-color: var(--cml-color-secondary); }
    .tertiary .select-trigger.active { border-bottom-color: var(--cml-color-tertiary); }

    .chevron {
      width: 0;
      height: 0;
      border-left: 5px solid transparent;
      border-right: 5px solid transparent;
      border-top: 5px solid var(--cml-color-on-surface-variant);
      transition: transform 0.3s;
    }

    .active .chevron {
      transform: rotate(180deg);
      border-top-color: var(--cml-color-primary);
    }
    .secondary .active .chevron { border-top-color: var(--cml-color-secondary); }
    .tertiary .active .chevron { border-top-color: var(--cml-color-tertiary); }

    .dropdown {
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      background-color: var(--cml-color-surface);
      border-radius: 4px;
      box-shadow: var(--cml-elevation-3);
      z-index: 1000;
      overflow: hidden;
      display: none;
      flex-direction: column;
      max-height: 300px;
    }

    .dropdown.open {
      display: flex;
    }

    .dropdown-header {
      padding: 8px;
      border-bottom: 1px solid var(--cml-color-outline-variant);
    }

    .search-input {
      width: 100%;
      padding: 8px 12px;
      border: 1px solid var(--cml-color-outline);
      border-radius: 4px;
      background: transparent;
      color: var(--cml-color-on-surface);
      font-family: var(--cml-font-family);
      font-size: 0.875rem;
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
      color: var(--cml-color-on-surface);
      font-family: var(--cml-font-family);
      transition: background-color 0.2s;
    }

    .option:hover {
      background-color: rgba(var(--cml-color-on-surface-rgb), 0.08);
    }

    .option.selected {
      background-color: rgba(var(--cml-color-primary-rgb), 0.12);
      color: var(--cml-color-primary);
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
      opacity: 0.38;
      cursor: not-allowed;
      pointer-events: none;
    }
  `;

  render() {
    const ctrl = this.selectController;
    const selectedLabel = ctrl.selectedLabel;
    const filteredOptions = ctrl.filteredOptions;

    return html`
      <div class="container ${this.color} ${this.disabled ? 'disabled' : ''}">
        ${this.label ? html`<camelot-label .text="${this.label}" .color="${this.color}" .for="select"></camelot-label>` : ''}
        
        <div class="select-trigger ${ctrl.isOpen ? 'active' : ''}" @click=${() => ctrl.toggle()}>
          <span>${selectedLabel || this.placeholder}</span>
          <div class="chevron"></div>
        </div>

        <div class="dropdown ${ctrl.isOpen ? 'open' : ''}">
          <div class="dropdown-header">
            <input 
              type="text" 
              class="search-input" 
              placeholder="Search..." 
              .value=${ctrl.searchTerm}
              @input=${(e: any) => ctrl.handleSearch(e.target.value)}
              @click=${(e: Event) => e.stopPropagation()}
            />
          </div>
          <div class="dropdown-content">
            ${filteredOptions.map(opt => html`
              <div 
                class="option ${opt.value === this.value ? 'selected' : ''}"
                @click=${() => ctrl.select(opt.value)}
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

declare global {
  interface HTMLElementTagNameMap {
    'camelot-material-select': CamelotMaterialSelect;
  }
}
