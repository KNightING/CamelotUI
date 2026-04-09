import { html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { CamelotBaseElement } from '../base/CamelotBaseElement';

// 確保風格元件已載入
import './CamelotMaterialSelect.ts';
import './CamelotCupertinoSelect.ts';
import './CamelotSoftSelect.ts';
import './CamelotScifiSelect.ts';

/**
 * <CamelotSelect>
 * 通用下拉選單元件，由主題切換風格。
 * 繼承自 CamelotBaseElement 以獲取自動風格偵測能力。
 */
import { state } from 'lit/decorators.js';

/**
 * <CamelotSelect>
 * 通用下拉選單元件，由主題切換風格。
 * 繼承自 CamelotBaseElement 以獲取自動風格偵測能力。
 */
@customElement('camelot-select')
export class CamelotSelect extends CamelotBaseElement {
  @property({ type: String })
  label: string = '';

  @property({ type: String })
  value: string = '';

  @property({ type: Array })
  options: Array<{ label: string, value: string }> = [];

  @property({ type: Boolean, reflect: true })
  disabled: boolean = false;

  @property({ type: String })
  color: 'primary' | 'secondary' | 'tertiary' = 'primary';

  @state()
  private _isOpen: boolean = false;

  @state()
  private _searchTerm: string = '';

  constructor() {
    super();
    this._onWindowClick = this._onWindowClick.bind(this);
  }

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener('click', this._onWindowClick);
  }

  disconnectedCallback() {
    window.removeEventListener('click', this._onWindowClick);
    super.disconnectedCallback();
  }

  private _onWindowClick(e: MouseEvent) {
    if (this._isOpen && !e.composedPath().includes(this)) {
      this._isOpen = false;
      this._searchTerm = '';
    }
  }

  private _handleChanged(val: string) {
    this.value = val;
    this._isOpen = false;
    this._searchTerm = '';
    this.dispatchEvent(new CustomEvent('change', {
      detail: { value: this.value },
      bubbles: true,
      composed: true
    }));
  }

  private _handleSearch(e: CustomEvent) {
    this._searchTerm = e.detail.value;
  }

  private _handleToggle() {
    if (this.disabled) return;
    this._isOpen = !this._isOpen;
    if (!this._isOpen) this._searchTerm = '';
  }

  get filteredOptions() {
    if (!this._searchTerm) return this.options;
    const term = this._searchTerm.toLowerCase();
    return this.options.filter(opt => 
      opt.label.toLowerCase().includes(term) || 
      opt.value.toLowerCase().includes(term)
    );
  }

  render() {
    // ... Existing logic ...
    
    // Add 'is-open' class to the container or manage it on host
    this.classList.toggle('is-open', this._isOpen);

    const commonProps = {
      label: this.label,
      value: this.value,
      options: this.filteredOptions,
      color: this.color,
      disabled: this.disabled,
      isOpen: this._isOpen,
      searchTerm: this._searchTerm
    };
    switch (this._activeStyle) {
      case 'scifi':
        return html`
          <camelot-scifi-select-impl
            .label=${commonProps.label}
            .value=${commonProps.value}
            .options=${commonProps.options}
            .isOpen=${commonProps.isOpen}
            @toggle=${this._handleToggle}
            @change=${(e: CustomEvent) => this._handleChanged(e.detail.value)}
          ></camelot-scifi-select-impl>
        `;
      case 'soft':
        return html`
          <camelot-soft-select 
            .label=${commonProps.label}
            .value=${commonProps.value}
            .options=${commonProps.options}
            .color=${commonProps.color}
            .isOpen=${commonProps.isOpen}
            .searchTerm=${commonProps.searchTerm}
            ?disabled=${commonProps.disabled}
            @toggle=${this._handleToggle}
            @search=${this._handleSearch}
            @change=${(e: CustomEvent) => this._handleChanged(e.detail.value)}
          ></camelot-soft-select>
        `;
      case 'cupertino':
        return html`
          <camelot-cupertino-select 
            .label=${commonProps.label}
            .value=${commonProps.value}
            .options=${commonProps.options}
            .color=${commonProps.color}
            .isOpen=${commonProps.isOpen}
            .searchTerm=${commonProps.searchTerm}
            ?disabled=${commonProps.disabled}
            @toggle=${this._handleToggle}
            @search=${this._handleSearch}
            @change=${(e: CustomEvent) => this._handleChanged(e.detail.value)}
          ></camelot-cupertino-select>
        `;
      case 'material':
      default:
        return html`
          <camelot-material-select 
            .label=${commonProps.label}
            .value=${commonProps.value}
            .options=${commonProps.options}
            .color=${commonProps.color}
            .isOpen=${commonProps.isOpen}
            .searchTerm=${commonProps.searchTerm}
            ?disabled=${commonProps.disabled}
            @toggle=${this._handleToggle}
            @search=${this._handleSearch}
            @change=${(e: CustomEvent) => this._handleChanged(e.detail.value)}
          ></camelot-material-select>
        `;
    }
  }

  static styles = css`
    :host {
      display: block;
      margin-bottom: 16px;
      position: relative;
    }

    :host(.is-open) {
      z-index: 100;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    'camelot-select': CamelotSelect;
  }
}
