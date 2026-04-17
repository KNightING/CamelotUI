import { html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { CamelotBaseSelect } from './CamelotBaseSelect';
import '../label/CamelotLabel';

@customElement('camelot-cupertino-select')
export class CamelotCupertinoSelect extends CamelotBaseSelect {
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
      background-color: var(--cml-color-surface);
      border: 1px solid var(--cml-color-outline-variant);
      border-radius: 8px;
      padding: 10px 16px;
      font-family: var(--cml-font-family);
      font-size: var(--cml-font-size-body);
      color: var(--cml-color-on-surface);
      cursor: pointer;
      box-sizing: border-box;
      transition: all 0.2s;
    }

    .select-trigger:active:not(.disabled) {
      background-color: var(--cml-color-surface-variant);
    }

    .chevron {
      width: 8px;
      height: 8px;
      border-right: 2px solid var(--cml-color-on-surface-variant);
      border-bottom: 2px solid var(--cml-color-on-surface-variant);
      transform: rotate(45deg);
      transition: transform 0.3s;
      margin-top: -4px;
    }

    .active .chevron {
      transform: rotate(225deg);
    }

    .dropdown {
      position: absolute;
      top: calc(100% + 4px);
      left: 0;
      right: 0;
      background-color: var(--cml-color-surface);
      border: 1px solid var(--cml-color-outline-variant);
      border-radius: 12px;
      box-shadow: 0 4px 24px rgba(0, 0, 0, 0.15);
      z-index: 1000;
      overflow: hidden;
      display: none;
      flex-direction: column;
      max-height: 250px;
      backdrop-filter: blur(20px);
    }

    .dropdown.open {
      display: flex;
    }

    .dropdown-header {
      padding: 10px;
      border-bottom: 1px solid var(--cml-color-outline-variant);
    }

    .search-input {
      width: 100%;
      padding: 8px;
      border: none;
      border-radius: 8px;
      background-color: var(--cml-color-surface-variant);
      color: var(--cml-color-on-surface);
      font-size: 0.875rem;
      outline: none;
      box-sizing: border-box;
    }

    .dropdown-content {
      overflow-y: auto;
      flex: 1;
    }

    .option {
      padding: 12px 16px;
      cursor: pointer;
      color: var(--cml-color-on-surface);
      transition: background-color 0.2s;
    }

    .option:hover {
      background-color: var(--cml-color-surface-variant);
    }

    .option.selected {
      color: var(--cml-color-current-color);
      font-weight: 600;
    }

    .disabled {
      opacity: 0.5;
      cursor: not-allowed;
      pointer-events: none;
    }
  `;

  render() {
    const ctrl = this.selectController;
    const selectedLabel = ctrl.selectedLabel;
    const filteredOptions = ctrl.filteredOptions;

    return html`
      <div class="container ${this.disabled ? 'disabled' : ''}">
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
    'camelot-cupertino-select': CamelotCupertinoSelect;
  }
}
