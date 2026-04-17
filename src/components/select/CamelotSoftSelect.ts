import { html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { CamelotBaseSelect } from './CamelotBaseSelect';
import '../label/CamelotLabel';

@customElement('camelot-soft-select')
export class CamelotSoftSelect extends CamelotBaseSelect {
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
    }

    .search-input {
      width: 100%;
      padding: 10px 16px;
      border: none;
      border-radius: 12px;
      background-color: var(--cml-color-background);
      color: var(--cml-color-on-background);
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
      box-sizing: border-box;
    }

    .option {
      padding: 12px 16px;
      cursor: pointer;
      color: var(--cml-color-on-background);
      border-radius: 12px;
      transition: all 0.2s;
      margin-bottom: 4px;
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

    .disabled {
      opacity: 0.5;
      cursor: not-allowed;
      pointer-events: none;
      box-shadow: none !important;
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
          </div>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'camelot-soft-select': CamelotSoftSelect;
  }
}
