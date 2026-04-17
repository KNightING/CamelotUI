import { html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { CamelotBaseSelect } from './CamelotBaseSelect';
import '../scifi/CamelotScifiHUD';

/**
 * <CamelotScifiSelect>
 * 日系科幻風格 (Sci-fi HUD) 的下拉選單實作。
 * 已優化：繼承 CamelotBaseSelect 以共用基礎邏輯，並使用 CamelotScifiHUD 進行包覆。
 */
@customElement('camelot-scifi-select-impl')
export class CamelotScifiSelect extends CamelotBaseSelect {
  @state() protected _isFocused = false;

  protected updated(changedProperties: Map<string | number | symbol, unknown>) {
    super.updated(changedProperties);
    // 反映狀態到 Host 屬性，供 CSS 選擇器使用
    if (this._isFocused || this.selectController.isOpen) {
      this.setAttribute('focused', '');
    } else {
      this.removeAttribute('focused');
    }
  }

  static styles = [
    css`
      :host {
        display: block;
        width: 100%;
        position: relative;
      }
      .select-container {
        display: flex;
        flex-direction: column;
        gap: 6px;
      }
      .label-text {
        font-family: var(--cml-font-family);
        font-size: 0.75rem;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        color: var(--cml-color-on-surface);
        opacity: 0.8;
        padding-left: 4px;
        transition: all 0.2s ease;
      }
      :host([focused]) .label-text,
      .label-text.active {
        opacity: 1;
        color: var(--cml-scifi-color, var(--cml-color-current-color));
        text-shadow: 0 0 8px color-mix(in srgb, var(--cml-scifi-color, var(--cml-color-current-color)), transparent 50%);
      }
      .select-trigger {
        padding: 10px 24px;
        cursor: pointer;
        display: flex;
        justify-content: space-between;
        align-items: center;
        min-height: 44px;
        box-sizing: border-box;
      }
      
      .display-value {
        font-family: var(--cml-font-family);
        font-size: 0.95rem;
        color: var(--cml-color-on-surface);
      }
      .placeholder {
        color: color-mix(in srgb, var(--cml-color-current-color) 40%, transparent);
      }
      .arrow {
        border: solid var(--cml-color-current-color);
        border-width: 0 2px 2px 0;
        display: inline-block;
        padding: 3px;
        transform: rotate(45deg);
        transition: transform 0.3s ease;
      }
      .arrow.open {
        transform: rotate(-135deg);
      }
      .options-panel {
        position: absolute;
        top: calc(100% + 4px);
        left: 0;
        width: 100%;
        z-index: 100;
        background: var(--cml-color-surface);
      }
      .option-item {
        padding: 10px 14px;
        cursor: pointer;
        font-family: var(--cml-font-family);
        font-size: 0.85rem;
        color: color-mix(in srgb, var(--cml-color-current-color) 70%, white);
        border-left: 2px solid transparent;
        transition: all 0.2s ease;
      }
      .option-item:hover {
        background: var(--cml-color-current-color);
        border-left-color: var(--cml-color-current-on-color);
        color: var(--cml-color-current-on-color);
      }

      .option-item[selected] {
        background: color-mix(in srgb, var(--cml-color-current-color) 40%, transparent);
        border-left-color: var(--cml-color-current-color);
        color: var(--cml-color-current-on-color);
      }
      .search-box {
        padding: 8px 12px;
        border-bottom: 1px solid color-mix(in srgb, var(--cml-color-current-color) 30%, transparent);
        margin-bottom: 4px;
        display: flex;
        align-items: center;
        gap: 8px;
      }
      .search-input {
        background: transparent;
        border: none;
        color: var(--cml-color-on-surface);
        font-family: var(--cml-font-family);
        font-size: 0.8rem;
        width: 100%;
        outline: none;
        padding: 4px 0;
        box-sizing: border-box;
      }
      .search-input::placeholder {
        color: color-mix(in srgb, var(--cml-color-current-color) 30%, transparent);
        font-size: 0.7rem;
        text-transform: uppercase;
      }
      .search-icon {
        width: 12px;
        height: 12px;
        border: 1px solid var(--cml-color-current-color);
        opacity: 0.6;
      }
    `
  ];

  private _handleFocus() {
    if (this.disabled) return;
    this._isFocused = true;
  }

  private _handleBlur() {
    this._isFocused = false;
  }

  render() {
    const isFocused = this._isFocused || this.selectController.isOpen;
    const selectedLabel = this.selectController.selectedLabel;

    return html`
      <div class="select-container">
        ${this.label ? html`<div class="label-text ${isFocused ? 'active' : ''}">${this.label}</div>` : ''}
        <camelot-scifi-hud 
          .color="${this.color}"
          ?focused="${isFocused}"
          ?show-grid="${false}"
          ?disabled="${this.disabled}"
          @focus="${this._handleFocus}"
          @blur="${this._handleBlur}"
        >
          <div class="select-trigger" @click="${() => this.selectController.toggle()}">
            <span class="display-value ${!selectedLabel ? 'placeholder' : ''}">
              ${selectedLabel || this.placeholder}
            </span>
            <div class="arrow ${this.selectController.isOpen ? 'open' : ''}"></div>
          </div>
        </camelot-scifi-hud>

        ${this.selectController.isOpen ? html`
          <div class="options-panel">
            <camelot-scifi-hud .color="${this.color}" variant="2-corner" ?show-grid="${false}" .autoState="${false}">
              <div class="search-box">
                <div class="search-icon"></div>
                <input 
                  type="text" 
                  class="search-input" 
                  placeholder="SEARCH_FILTER..."
                  .value="${this.selectController.searchTerm}"
                  @input="${(e: any) => this.selectController.handleSearch(e.target.value)}"
                  @click="${(e: Event) => e.stopPropagation()}"
                />
              </div>
              <div class="options-list" style="max-height: 200px; overflow-y: auto;">
                ${this.selectController.filteredOptions.map(opt => html`
                  <div 
                    class="option-item" 
                    ?selected="${this.value === opt.value}"
                    @click="${() => this.selectController.select(opt.value)}"
                  >
                    ${opt.label}
                  </div>
                `)}
              </div>
            </camelot-scifi-hud>
          </div>
        ` : ''}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'camelot-scifi-select-impl': CamelotScifiSelect;
  }
}


