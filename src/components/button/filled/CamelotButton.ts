import { html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { CamelotBaseElement } from '../../base/CamelotBaseElement';

// 確保風格元件已載入
import './CamelotMaterialFilledButton';
import './CamelotCupertinoFilledButton';
import './CamelotSoftFilledButton';
import './CamelotScifiFilledButton';

/**
 * <CamelotButton>
 * 通用實心按鈕元件 (Filled Button)，根據主題切換風格。
 */
@customElement('camelot-button')
export class CamelotButton extends CamelotBaseElement {
  @property({ type: String })
  label: string = 'Button';

  @property({ type: Boolean, reflect: true })
  disabled: boolean = false;

  @property({ type: String })
  color: 'primary' | 'secondary' | 'tertiary' = 'primary';

  render() {
    switch (this._activeStyle) {
      case 'scifi':
        return html`
          <camelot-scifi-filled-button 
            .label=${this.label} 
            .color=${this.color}
            ?disabled=${this.disabled}
            .isContainer=${this.isContainer}
          >
            <slot></slot>
          </camelot-scifi-filled-button>
        `;
      case 'soft':
        return html`
          <camelot-soft-filled-button 
            .label=${this.label} 
            .color=${this.color}
            ?disabled=${this.disabled}
            .isContainer=${this.isContainer}
          >
            <slot></slot>
          </camelot-soft-filled-button>
        `;
      case 'cupertino':
        return html`
          <camelot-cupertino-filled-button 
            .label=${this.label} 
            .color=${this.color}
            ?disabled=${this.disabled}
            .isContainer=${this.isContainer}
          >
            <slot></slot>
          </camelot-cupertino-filled-button>
        `;
      case 'material':
      default:
        return html`
          <camelot-material-filled-button 
            .label=${this.label} 
            .color=${this.color}
            ?disabled=${this.disabled}
            .isContainer=${this.isContainer}
          >
            <slot></slot>
          </camelot-material-filled-button>
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
