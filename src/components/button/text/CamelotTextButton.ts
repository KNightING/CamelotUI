import { html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { CamelotBaseElement } from '../../base/CamelotBaseElement';

// 確保風格元件已載入
import './CamelotMaterialTextButton.ts';
import './CamelotCupertinoTextButton.ts';
import './CamelotSoftTextButton.ts';
import './CamelotScifiTextButton.ts';

/**
 * <CamelotTextButton>
 * 通用文字按鈕元件 (Text Button)，根據主題切換風格。
 */
@customElement('camelot-text-button')
export class CamelotTextButton extends CamelotBaseElement {
  @property({ type: String })
  label: string = 'Text Button';

  @property({ type: Boolean, reflect: true })
  disabled: boolean = false;

  @property({ type: String })
  color: 'primary' | 'secondary' | 'tertiary' = 'primary';

  render() {
    switch (this._activeStyle) {
      case 'soft':
        return html`
          <camelot-soft-text-button 
            .label=${this.label} 
            .color=${this.color}
            ?disabled=${this.disabled}
          >
            <slot></slot>
          </camelot-soft-text-button>
        `;
      case 'scifi':
        return html`
          <camelot-scifi-text-button 
            .label=${this.label} 
            .color=${this.color}
            ?disabled=${this.disabled}
          >
            <slot></slot>
          </camelot-scifi-text-button>
        `;
      case 'cupertino':
        return html`
          <camelot-cupertino-text-button 
            .label=${this.label} 
            .color=${this.color}
            ?disabled=${this.disabled}
          >
            <slot></slot>
          </camelot-cupertino-text-button>
        `;
      case 'material':
      default:
        return html`
          <camelot-material-text-button 
            .label=${this.label} 
            .color=${this.color}
            ?disabled=${this.disabled}
          >
            <slot></slot>
          </camelot-material-text-button>
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
    'camelot-text-button': CamelotTextButton;
  }
}
