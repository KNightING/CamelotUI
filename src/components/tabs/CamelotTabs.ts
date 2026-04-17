import { html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { CamelotBaseElement } from '../base/CamelotBaseElement';

// 確保風格元件已載入
import './CamelotMaterialTabs';
import './CamelotCupertinoTabs';
import './CamelotSoftTabs';
import './CamelotScifiTabs';

/**
 * <CamelotTabs>
 * 通用分頁標籤容器，由主題切換風格。
 * 繼承自 CamelotBaseElement 以獲取自動風格偵測能力。
 */
@customElement('camelot-tabs')
export class CamelotTabs extends CamelotBaseElement {
  /**
   * 分頁項目清單：Array<{ label: string, value: string }>
   */
  @property({ type: Array })
  items: Array<{ label: string, value: string }> = [];

  /**
   * 當前的選取值
   */
  @property({ type: String })
  value: string = '';


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
      case 'scifi':
        return html`
          <camelot-scifi-tabs-impl
            .items=${this.items}
            .value=${this.value}
            .color=${this.color}
            @change=${this._handleChanged}
          ></camelot-scifi-tabs-impl>
        `;
      case 'soft':
        return html`
          <camelot-soft-tabs 
            .items=${this.items}
            .value=${this.value}
            .color=${this.color}
            @change=${this._handleChanged}
          ></camelot-soft-tabs>
        `;
      case 'cupertino':
        return html`
          <camelot-cupertino-tabs 
            .items=${this.items}
            .value=${this.value}
            .color=${this.color}
            @change=${this._handleChanged}
          ></camelot-cupertino-tabs>
        `;
      case 'material':
      default:
        return html`
          <camelot-material-tabs 
            .items=${this.items}
            .value=${this.value}
            .color=${this.color}
            @change=${this._handleChanged}
          ></camelot-material-tabs>
        `;
    }
  }

  static styles = css`
    :host {
      display: block;
      width: 100%;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    'camelot-tabs': CamelotTabs;
  }
}
