var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { CamelotScifiBase } from '../scifi/CamelotScifiBase';
import '../scifi/CamelotScifiFrame';
/**
 * <CamelotScifiSelect>
 * 日系科幻風格 (Sci-fi HUD) 的下拉選單實作。
 * 已優化：使用 CamelotScifiBase 與 CamelotScifiFrame。
 */
let CamelotScifiSelect = class CamelotScifiSelect extends CamelotScifiBase {
    constructor() {
        super(...arguments);
        this.label = '';
        this.options = [];
        this.value = '';
        this.placeholder = 'SELECT_OPTION';
        this._isOpen = false;
    }
    static { this.styles = [
        css `
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
        font-family: var(--cml-font-family-mono, monospace);
        font-size: 0.75rem;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        color: var(--cml-color-on-surface);
        opacity: 0.8;
        padding-left: 4px;
        transition: all 0.2s ease;
      }
      :host([_is-open]) .label-text,
      :host([focused]) .label-text {
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
        font-family: var(--cml-font-family-mono, monospace);
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
      :host([_is-open]) .arrow {
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
        font-family: var(--cml-font-family-mono, monospace);
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
        font-family: var(--cml-font-family-mono, monospace);
        font-size: 0.8rem;
        width: 100%;
        outline: none;
        padding: 4px 0;
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
    ]; }
    _toggle() {
        if (this.disabled)
            return;
        this._isOpen = !this._isOpen;
        if (this._isOpen)
            this._handleFocus();
        else
            this._handleBlur();
    }
    _select(val) {
        this.value = val;
        this._isOpen = false;
        this._handleBlur();
        this.dispatchEvent(new CustomEvent('change', {
            detail: { value: val },
            bubbles: true,
            composed: true
        }));
    }
    render() {
        const selectedLabel = this.options.find(o => o.value === this.value)?.label;
        const isFocused = this._isFocused || this._isOpen;
        return html `
      <div class="select-container">
        ${this.label ? html `<div class="label-text">${this.label}</div>` : ''}
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
          <div class="select-trigger" @click="${this._toggle}">
            <span class="display-value ${!selectedLabel ? 'placeholder' : ''}">
              ${selectedLabel || this.placeholder}
            </span>
            <div class="arrow"></div>
          </div>
        </camelot-scifi-frame>

        ${this._isOpen ? html `
          <div class="options-panel">
            <camelot-scifi-frame .color="${this.color}" variant="2-corner" ?showGrid="${false}">
              <div class="search-box">
                <div class="search-icon"></div>
                <input 
                  type="text" 
                  class="search-input" 
                  placeholder="SEARCH_FILTER..."
                  @input="${this._onSearchInput}"
                  @click="${(e) => e.stopPropagation()}"
                />
              </div>
              <div class="options-list" style="max-height: 200px; overflow-y: auto;">
                ${this.options.map(opt => html `
                  <div 
                    class="option-item" 
                    ?selected="${this.value === opt.value}"
                    @click="${() => this._select(opt.value)}"
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
    _onSearchInput(e) {
        this.dispatchEvent(new CustomEvent('search', {
            detail: { value: e.target.value },
            bubbles: true,
            composed: true
        }));
    }
};
__decorate([
    property({ type: String }),
    __metadata("design:type", Object)
], CamelotScifiSelect.prototype, "label", void 0);
__decorate([
    property({ type: Array }),
    __metadata("design:type", Array)
], CamelotScifiSelect.prototype, "options", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", Object)
], CamelotScifiSelect.prototype, "value", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", Object)
], CamelotScifiSelect.prototype, "placeholder", void 0);
__decorate([
    state(),
    __metadata("design:type", Object)
], CamelotScifiSelect.prototype, "_isOpen", void 0);
CamelotScifiSelect = __decorate([
    customElement('camelot-scifi-select-impl')
], CamelotScifiSelect);
export { CamelotScifiSelect };
//# sourceMappingURL=CamelotScifiSelect.js.map