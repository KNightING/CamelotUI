import { html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { CamelotBaseElement } from '../base/CamelotBaseElement';

// 匯入各風格元件
import './CamelotMaterialCheckbox.ts';
import './CamelotCupertinoCheckbox.ts';
import './CamelotSoftCheckbox.ts';

/**
 * <CamelotCheckbox>
 * 通用勾選框，根據主題切換風格。
 * 繼承自 CamelotBaseElement 以獲取自動風格偵測能力。
 */
@customElement('camelot-checkbox')
export class CamelotCheckbox extends CamelotBaseElement {
  @property({ type: String })
  label: string = '';

  @property({ type: Boolean, reflect: true })
  checked: boolean = false;

  @property({ type: Boolean, reflect: true })
  disabled: boolean = false;

  /**
   * 勾選框色彩：'primary', 'secondary', 'tertiary'
   */
  @property({ type: String })
  color: 'primary' | 'secondary' | 'tertiary' = 'primary';

  /**
   * 勾選框形狀 (僅專對 Cupertino 風格)：'square' 或 'circle'
   */
  @property({ type: String })
  shape: 'square' | 'circle' = 'square';

  @property({ type: String })
  value: string = '';

  static styles = css`
    :host {
      display: inline-block;
      vertical-align: middle;
    }
  `;

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
      case 'cupertino':
        return html`
          <camelot-cupertino-checkbox 
            .label="${this.label}" 
            .checked="${this.checked}"
            .color="${this.color}"
            .shape="${this.shape}"
            ?disabled="${this.disabled}"
            @change="${this._handleChanged}">
          </camelot-cupertino-checkbox>
        `;
      case 'soft':
        return html`
          <camelot-soft-checkbox 
            .label="${this.label}" 
            .checked="${this.checked}"
            .color="${this.color}"
            ?disabled="${this.disabled}"
            @change="${this._handleChanged}">
          </camelot-soft-checkbox>
        `;
      case 'material':
      default:
        return html`
          <camelot-material-checkbox 
            .label="${this.label}" 
            .checked="${this.checked}"
            .color="${this.color}"
            ?disabled="${this.disabled}"
            @change="${this._handleChanged}">
          </camelot-material-checkbox>
        `;
    }
  }
}
