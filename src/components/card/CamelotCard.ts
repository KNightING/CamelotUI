import { html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { CamelotBaseElement } from '../base/CamelotBaseElement';

// 確保風格元件已載入
import './CamelotMaterialCard.ts';
import './CamelotCupertinoCard.ts';
import './CamelotSoftCard.ts';
import './CamelotScifiCard.ts';

/**
 * <CamelotCard>
 * 通用卡片容器元件，根據主題切換風格。
 * 繼承自 CamelotBaseElement 以獲取自動風格偵測能力。
 */
@customElement('camelot-card')
export class CamelotCard extends CamelotBaseElement {
  /**
   * 卡片內部的間距 (Padding)
   */
  @property({ type: String })
  padding: string = '16px';

  render() {
    switch (this._activeStyle) {
      case 'scifi':
        return html`
          <camelot-scifi-card-impl>
            <slot></slot>
          </camelot-scifi-card-impl>
        `;
      case 'soft':
        return html`
          <camelot-soft-card .padding=${this.padding}>
            <slot></slot>
          </camelot-soft-card>
        `;
      case 'cupertino':
        return html`
          <camelot-cupertino-card .padding=${this.padding}>
            <slot></slot>
          </camelot-cupertino-card>
        `;
      case 'material':
      default:
        return html`
          <camelot-material-card .padding=${this.padding}>
            <slot></slot>
          </camelot-material-card>
        `;
    }
  }

  static styles = css`
    :host {
      display: block;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    'camelot-card': CamelotCard;
  }
}
