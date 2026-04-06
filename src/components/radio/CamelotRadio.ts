import { html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { CamelotBaseElement } from '../base/CamelotBaseElement';

// 確保風格元件已載入
import './CamelotMaterialRadio.ts';
import './CamelotCupertinoRadio.ts';
import './CamelotSoftRadio.ts';

/**
 * <CamelotRadio>
 * 通用單選按鈕元件，由主題切換風格。
 * 繼承自 CamelotBaseElement 以獲取自動風格偵測能力。
 */
@customElement('camelot-radio')
export class CamelotRadio extends CamelotBaseElement {
  @property({ type: Boolean, reflect: true })
  checked: boolean = false;

  @property({ type: Boolean, reflect: true })
  disabled: boolean = false;

  @property({ type: String })
  label: string = '';

  @property({ type: String })
  name: string = '';

  @property({ type: String })
  value: string = '';

  /**
   * 單選色彩：'primary', 'secondary', 'tertiary'
   */
  @property({ type: String })
  color: 'primary' | 'secondary' | 'tertiary' = 'primary';

  private _handleChanged(e: CustomEvent) {
    this.checked = e.detail.checked;
    this.dispatchEvent(new CustomEvent('change', {
      detail: { checked: this.checked },
      bubbles: true,
      composed: true
    }));
  }

  render() {
    switch (this._activeStyle) {
      case 'soft':
        return html`
          <camelot-soft-radio 
            ?checked=${this.checked} 
            ?disabled=${this.disabled}
            .label=${this.label}
            .color=${this.color}
            @change=${this._handleChanged}
          ></camelot-soft-radio>
        `;
      case 'cupertino':
        return html`
          <camelot-cupertino-radio 
            ?checked=${this.checked} 
            ?disabled=${this.disabled}
            .label=${this.label}
            .color=${this.color}
            @change=${this._handleChanged}
          ></camelot-cupertino-radio>
        `;
      case 'material':
      default:
        return html`
          <camelot-material-radio 
            ?checked=${this.checked} 
            ?disabled=${this.disabled}
            .label=${this.label}
            .color=${this.color}
            @change=${this._handleChanged}
          ></camelot-material-radio>
        `;
    }
  }

  static styles = css`
    :host {
      display: inline-block;
      vertical-align: middle;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    'camelot-radio': CamelotRadio;
  }
}
