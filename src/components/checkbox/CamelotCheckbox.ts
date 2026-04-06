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

  static styles = css`
    :host {
      display: inline-block;
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
            ?disabled="${this.disabled}"
            @checked-changed="${this._handleChanged}">
          </camelot-cupertino-checkbox>
        `;
      case 'soft':
        return html`
          <camelot-soft-checkbox 
            .label="${this.label}" 
            .checked="${this.checked}"
            ?disabled="${this.disabled}"
            @checked-changed="${this._handleChanged}">
          </camelot-soft-checkbox>
        `;
      case 'material':
      default:
        return html`
          <camelot-material-checkbox 
            .label="${this.label}" 
            .checked="${this.checked}"
            ?disabled="${this.disabled}"
            @checked-changed="${this._handleChanged}">
          </camelot-material-checkbox>
        `;
    }
  }
}
