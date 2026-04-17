import { html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { CamelotBaseSelect } from './CamelotBaseSelect';

// 確保風格元件已載入
import './CamelotMaterialSelect';
import './CamelotCupertinoSelect';
import './CamelotSoftSelect';
import './CamelotScifiSelect';

/**
 * <CamelotSelect>
 * 通用下拉選單元件，作為主題分流的 Wrapper。
 * 繼承自 CamelotBaseSelect 以具備共通 API。
 * 此組件僅負責分流，邏輯由各實作層透過 SelectController 處理。
 */
@customElement('camelot-select')
export class CamelotSelect extends CamelotBaseSelect {
  static styles = css`
    :host {
      display: block;
      margin-bottom: 16px;
      position: relative;
    }
  `;

  render() {
    const commonProps = {
      label: this.label,
      value: this.value,
      options: this.options,
      color: this.color,
      disabled: this.disabled,
      placeholder: this.placeholder
    };

    switch (this._activeStyle) {
      case 'scifi':
        return html`
          <camelot-scifi-select-impl
            .label=${commonProps.label}
            .value=${commonProps.value}
            .options=${commonProps.options}
            .color=${commonProps.color}
            .placeholder=${commonProps.placeholder}
            ?disabled=${commonProps.disabled}
            @change=${(e: CustomEvent) => {
              this.value = e.detail.value;
              this.dispatchEvent(new CustomEvent('change', { detail: e.detail }));
            }}
          ></camelot-scifi-select-impl>
        `;
      case 'soft':
        return html`
          <camelot-soft-select 
            .label=${commonProps.label}
            .value=${commonProps.value}
            .options=${commonProps.options}
            .color=${commonProps.color}
            .placeholder=${commonProps.placeholder}
            ?disabled=${commonProps.disabled}
            @change=${(e: CustomEvent) => {
              this.value = e.detail.value;
              this.dispatchEvent(new CustomEvent('change', { detail: e.detail }));
            }}
          ></camelot-soft-select>
        `;
      case 'cupertino':
        return html`
          <camelot-cupertino-select 
            .label=${commonProps.label}
            .value=${commonProps.value}
            .options=${commonProps.options}
            .color=${commonProps.color}
            .placeholder=${commonProps.placeholder}
            ?disabled=${commonProps.disabled}
            @change=${(e: CustomEvent) => {
              this.value = e.detail.value;
              this.dispatchEvent(new CustomEvent('change', { detail: e.detail }));
            }}
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
            .placeholder=${commonProps.placeholder}
            ?disabled=${commonProps.disabled}
            @change=${(e: CustomEvent) => {
              this.value = e.detail.value;
              this.dispatchEvent(new CustomEvent('change', { detail: e.detail }));
            }}
          ></camelot-material-select>
        `;
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'camelot-select': CamelotSelect;
  }
}
