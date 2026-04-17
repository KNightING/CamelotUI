import { html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { CamelotScifiBase } from '../scifi/CamelotScifiBase';
import { CamelotSelectController, SelectOption } from './CamelotSelectController';
import '../scifi/CamelotScifiFrame';

/**
 * <CamelotScifiSelect>
 * 日系科幻風格 (Sci-fi HUD) 的下拉選單實作。
 * 解決了繼承衝突：繼承自 CamelotScifiBase，並使用 SelectController 處理邏輯。
 */
@customElement('camelot-scifi-select-impl')
export class CamelotScifiSelect extends CamelotScifiBase {
  @property({ type: String }) label = '';
  @property({ type: Array }) options: SelectOption[] = [];
  @property({ type: String }) value = '';
  @property({ type: String }) placeholder = 'SELECT_OPTION';

  // 使用邏輯控制器進行行為組合 (Composition)
  private select = new CamelotSelectController(this);

  protected willUpdate(changedProperties: Map<string | number | symbol, unknown>) {
    super.willUpdate(changedProperties);
    // 同步屬性到控制器
    if (changedProperties.has('options')) this.select.options = this.options;
    if (changedProperties.has('value')) this.select.value = this.value;
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
        color: var(--cml-scifi-color);
        text-shadow: 0 0 8px color-mix(in srgb, var(--cml-scifi-color), transparent 50%);
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
      .select-trigger:hover camelot-scifi-frame {
        --cml-scifi-bg-opacity: 15%;
      }
      .display-value {
        font-family: var(--cml-font-family);
        font-size: 0.95rem;
        color: var(--cml-color-on-surface);
      }
      .placeholder {
        color: color-mix(in srgb, var(--cml-scifi-color) 40%, transparent);
      }
      .arrow {
        border: solid var(--cml-scifi-color);
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
        color: color-mix(in srgb, var(--cml-scifi-color) 70%, white);
        border-left: 2px solid transparent;
        transition: all 0.2s ease;
      }
      .option-item:hover {
        background: var(--cml-scifi-color);
        border-left-color: var(--cml-color-on-primary);
        color: var(--cml-color-on-primary);
      }
      /* 基於顏色動態切換內容文字色 */
      :host([color="primary"]) .option-item:hover { color: var(--cml-color-on-primary); }
      :host([color="secondary"]) .option-item:hover { color: var(--cml-color-on-secondary); }
      :host([color="tertiary"]) .option-item:hover { color: var(--cml-color-on-tertiary); }

      .option-item[selected] {
        background: color-mix(in srgb, var(--cml-scifi-color) 40%, transparent);
        border-left-color: var(--cml-scifi-color);
        color: var(--cml-color-on-primary);
      }
      .search-box {
        padding: 8px 12px;
        border-bottom: 1px solid color-mix(in srgb, var(--cml-scifi-color) 30%, transparent);
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
        color: color-mix(in srgb, var(--cml-scifi-color) 30%, transparent);
        font-size: 0.7rem;
        text-transform: uppercase;
      }
      .search-icon {
        width: 12px;
        height: 12px;
        border: 1px solid var(--cml-scifi-color);
        opacity: 0.6;
      }
    `
  ];

  render() {
    const isFocused = this._isFocused || this.select.isOpen;
    const selectedLabel = this.select.selectedLabel;

    return html`
      <div class="select-container">
        ${this.label ? html`<div class="label-text ${isFocused ? 'active' : ''}">${this.label}</div>` : ''}
        <camelot-scifi-frame 
          .color="${this.color}"
          ?focused="${isFocused}"
          ?show-pulse="${isFocused}"
          ?show-grid="${false}"
          ?show-shine="${this._isHovered && !this.disabled}"
          .activeReticle="${this._isHovered && !this.disabled}"
          @mouseenter="${this._handleMouseEnter}"
          @mouseleave="${this._handleMouseLeave}"
          @focus="${this._handleFocus}"
          @blur="${this._handleBlur}"
        >
          <div class="select-trigger" @click="${() => this.select.toggle()}">
            <span class="display-value ${!selectedLabel ? 'placeholder' : ''}">
              ${selectedLabel || this.placeholder}
            </span>
            <div class="arrow ${this.select.isOpen ? 'open' : ''}"></div>
          </div>
        </camelot-scifi-frame>

        ${this.select.isOpen ? html`
          <div class="options-panel">
            <camelot-scifi-frame .color="${this.color}" variant="2-corner" ?showGrid="${false}">
              <div class="search-box">
                <div class="search-icon"></div>
                <input 
                  type="text" 
                  class="search-input" 
                  placeholder="SEARCH_FILTER..."
                  .value="${this.select.searchTerm}"
                  @input="${(e: any) => this.select.handleSearch(e.target.value)}"
                  @click="${(e: Event) => e.stopPropagation()}"
                />
              </div>
              <div class="options-list" style="max-height: 200px; overflow-y: auto;">
                ${this.select.filteredOptions.map(opt => html`
                  <div 
                    class="option-item" 
                    ?selected="${this.value === opt.value}"
                    @click="${() => this.select.select(opt.value)}"
                  >
                    ${opt.label}
                  </div>
                `)}
              </div>
            </camelot-scifi-frame>
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
