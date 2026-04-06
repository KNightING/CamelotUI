import { html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { CamelotBaseElement } from '../base/CamelotBaseElement';

// 確保風格元件已載入
import './CamelotMaterialButton.ts';
import './CamelotCupertinoButton.ts';
import './CamelotSoftButton.ts';

/**
 * <CamelotButton>
 * 通用按鈕元件，根據主題切換風格。
 * 繼承自 CamelotBaseElement 以獲取自動風格偵測能力。
 */
@customElement('camelot-button')
export class CamelotButton extends CamelotBaseElement {
  @property({ type: String })
  label: string = 'Button';

  @property({ type: Boolean, reflect: true })
  disabled: boolean = false;

  render() {
    switch (this._activeStyle) {
      case 'soft':
        return html`
          <camelot-soft-button 
            .label=${this.label} 
            ?disabled=${this.disabled}
          >
            <slot></slot>
          </camelot-soft-button>
        `;
      case 'cupertino':
        return html`
          <camelot-cupertino-button 
            .label=${this.label} 
            ?disabled=${this.disabled}
          >
            <slot></slot>
          </camelot-cupertino-button>
        `;
      case 'material':
      default:
        return html`
          <camelot-material-button 
            .label=${this.label} 
            ?disabled=${this.disabled}
          >
            <slot></slot>
          </camelot-material-button>
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
    'camelot-button': CamelotButton;
  }
}
