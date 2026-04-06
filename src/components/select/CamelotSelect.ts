import { html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { CamelotBaseElement } from '../base/CamelotBaseElement';

// 確保風格元件已載入
import './CamelotMaterialSelect.ts';
import './CamelotCupertinoSelect.ts';
import './CamelotSoftSelect.ts';

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

  /**
   * 選單色彩：'primary', 'secondary', 'tertiary'
   */
  @property({ type: String })
  color: 'primary' | 'secondary' | 'tertiary' = 'primary';

  private _handleChanged(e: CustomEvent) {
    this.value = e.detail.value;
    this.dispatchEvent(new CustomEvent('change', {
      detail: { value: this.value },
      bubbles: true,
      composed: true
    }));
  }

  render() {
    switch (this._activeStyle) {
      case 'soft':
        return html`
          <camelot-soft-select 
            .label=${this.label}
            .value=${this.value}
            .options=${this.options}
            .color=${this.color}
            ?disabled=${this.disabled}
            @change=${this._handleChanged}
          ></camelot-soft-select>
        `;
      case 'cupertino':
        return html`
          <camelot-cupertino-select 
            .label=${this.label}
            .value=${this.value}
            .options=${this.options}
            .color=${this.color}
            ?disabled=${this.disabled}
            @change=${this._handleChanged}
          ></camelot-cupertino-select>
        `;
      case 'material':
      default:
        return html`
          <camelot-material-select 
            .label=${this.label}
            .value=${this.value}
            .options=${this.options}
            .color=${this.color}
            ?disabled=${this.disabled}
            @change=${this._handleChanged}
          ></camelot-material-select>
        `;
    }
  }

  static styles = css`
    :host {
      display: block;
      margin-bottom: 16px;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    'camelot-select': CamelotSelect;
  }
}
