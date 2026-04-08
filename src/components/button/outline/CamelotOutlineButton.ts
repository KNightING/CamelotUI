import { html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { CamelotBaseElement } from '../../base/CamelotBaseElement';

// 確保風格元件已載入
import './CamelotMaterialOutlineButton.ts';
import './CamelotCupertinoOutlineButton.ts';
import './CamelotSoftOutlineButton.ts';
import './CamelotScifiOutlineButton.ts';

/**
 * <CamelotOutlineButton>
 * 通用邊框按鈕元件 (Outline Button)，根據主題切換風格。
 */
@customElement('camelot-outline-button')
export class CamelotOutlineButton extends CamelotBaseElement {
  @property({ type: String })
  label: string = 'Outline Button';

  @property({ type: Boolean, reflect: true })
  disabled: boolean = false;

  @property({ type: String })
  color: 'primary' | 'secondary' | 'tertiary' = 'primary';

  render() {
    switch (this._activeStyle) {
      case 'soft':
        return html`
          <camelot-soft-outline-button 
            .label=${this.label} 
            .color=${this.color}
            ?disabled=${this.disabled}
          >
            <slot></slot>
          </camelot-soft-outline-button>
        `;
      case 'scifi':
        return html`
          <camelot-scifi-outline-button 
            .label=${this.label} 
            .color=${this.color}
            ?disabled=${this.disabled}
          >
            <slot></slot>
          </camelot-scifi-outline-button>
        `;
      case 'cupertino':
        return html`
          <camelot-cupertino-outline-button 
            .label=${this.label} 
            .color=${this.color}
            ?disabled=${this.disabled}
          >
            <slot></slot>
          </camelot-cupertino-outline-button>
        `;
      case 'material':
      default:
        return html`
          <camelot-material-outline-button 
            .label=${this.label} 
            .color=${this.color}
            ?disabled=${this.disabled}
          >
            <slot></slot>
          </camelot-material-outline-button>
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
    'camelot-outline-button': CamelotOutlineButton;
  }
}
