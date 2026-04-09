import { html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { CamelotBaseElement } from '../../base/CamelotBaseElement';

// 確保風格元件已載入
import './CamelotMaterialIconButton';
import './CamelotCupertinoIconButton';
import './CamelotSoftIconButton';
import './CamelotScifiIconButton';

/**
 * <CamelotIconButton>
 * 圖示按鈕元件，適合放置單一圖示。
 * 繼承自 CamelotBaseElement 以獲取自動風格偵測能力。
 */
@customElement('camelot-icon-button')
export class CamelotIconButton extends CamelotBaseElement {
  /**
   * 按鈕色彩：'primary', 'secondary', 'tertiary'
   */
  @property({ type: String })
  color: 'primary' | 'secondary' | 'tertiary' = 'primary';

  /**
   * 按鈕形狀：'circle', 'square'
   */
  @property({ type: String })
  shape: 'circle' | 'square' = 'circle';

  @property({ type: Boolean, reflect: true })
  disabled: boolean = false;

  render() {
    switch (this._activeStyle) {
      case 'scifi':
        return html`
          <camelot-scifi-icon-button-impl
            .color=${this.color}
            .shape=${this.shape}
            ?disabled=${this.disabled}
          >
            <slot></slot>
          </camelot-scifi-icon-button-impl>
        `;
      case 'soft':
        return html`
          <camelot-soft-icon-button 
            .color=${this.color}
            .shape=${this.shape}
            ?disabled=${this.disabled}
          >
            <slot></slot>
          </camelot-soft-icon-button>
        `;
      case 'cupertino':
        return html`
          <camelot-cupertino-icon-button 
            .color=${this.color}
            .shape=${this.shape}
            ?disabled=${this.disabled}
          >
            <slot></slot>
          </camelot-cupertino-icon-button>
        `;
      case 'material':
      default:
        return html`
          <camelot-material-icon-button 
            .color=${this.color}
            .shape=${this.shape}
            ?disabled=${this.disabled}
          >
            <slot></slot>
          </camelot-material-icon-button>
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
    'camelot-icon-button': CamelotIconButton;
  }
}
