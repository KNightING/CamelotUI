import { html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { CamelotBaseElement } from '../base/CamelotBaseElement';

// 匯入樣式元件
import './CamelotMaterialBadge.ts';
import './CamelotCupertinoBadge.ts';
import './CamelotSoftBadge.ts';

/**
 * <CamelotBadge>
 * 通用標籤元件，根據主題切換風格。
 * 繼承自 CamelotBaseElement 以獲取自動風格偵測能力。
 */
@customElement('camelot-badge')
export class CamelotBadge extends CamelotBaseElement {
  @property({ type: String })
  label: string = '';

  @property({ type: String })
  variant: string = 'primary';

  static styles = css`
    :host {
      display: inline-block;
    }
  `;

  render() {
    switch (this._activeStyle) {
      case 'cupertino':
        return html`<camelot-cupertino-badge .label="${this.label}" .variant="${this.variant}"></camelot-cupertino-badge>`;
      case 'soft':
        return html`<camelot-soft-badge .label="${this.label}" .variant="${this.variant}"></camelot-soft-badge>`;
      case 'material':
      default:
        return html`<camelot-material-badge .label="${this.label}" .variant="${this.variant}"></camelot-material-badge>`;
    }
  }
}
