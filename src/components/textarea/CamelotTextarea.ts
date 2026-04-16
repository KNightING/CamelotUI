import { html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { CamelotBaseElement } from '../base/CamelotBaseElement';

// 確保風格元件已載入
import './CamelotMaterialTextarea';
import './CamelotCupertinoTextarea';
import './CamelotSoftTextarea';
import './CamelotScifiTextarea';

/**
 * <CamelotTextarea>
 * 通用長文字輸入框元件，根據主題切換風格。
 * 繼承自 CamelotBaseElement 以獲取自動風格偵測能力。
 */
@customElement('camelot-textarea')
export class CamelotTextarea extends CamelotBaseElement {
  @property({ type: String })
  label: string = '';

  @property({ type: String })
  value: string = '';

  @property({ type: String })
  placeholder: string = '';

  @property({ type: Number })
  rows: number = 3;

  @property({ type: String })
  error: string = '';

  @property({ type: String })
  color: 'primary' | 'secondary' | 'tertiary' = 'primary';

  @property({ type: Boolean, reflect: true })
  disabled: boolean = false;

  render() {
    switch (this._activeStyle) {
      case 'scifi':
        return html`
          <camelot-scifi-textarea-impl
            .value=${this.value}
            .label=${this.label}
            .placeholder=${this.placeholder}
            .rows=${this.rows}
            .color=${this.color}
            ?disabled=${this.disabled}
            @input=${(e: any) => this.value = e.target.value}
          ></camelot-scifi-textarea-impl>
        `;
      case 'soft':
        return html`
          <camelot-soft-textarea
            .value=${this.value}
            .label=${this.label}
            .placeholder=${this.placeholder}
            .rows=${this.rows}
            .color=${this.color}
            ?disabled=${this.disabled}
            @input=${(e: any) => this.value = e.target.value}
          ></camelot-soft-textarea>
        `;
      case 'cupertino':
        return html`
          <camelot-cupertino-textarea
            .value=${this.value}
            .label=${this.label}
            .placeholder=${this.placeholder}
            .rows=${this.rows}
            .color=${this.color}
            ?disabled=${this.disabled}
            @input=${(e: any) => this.value = e.target.value}
          ></camelot-cupertino-textarea>
        `;
      case 'material':
      default:
        return html`
          <camelot-material-textarea
            .value=${this.value}
            .label=${this.label}
            .placeholder=${this.placeholder}
            .rows=${this.rows}
            .color=${this.color}
            ?disabled=${this.disabled}
            @input=${(e: any) => this.value = e.target.value}
          ></camelot-material-textarea>
        `;
    }
  }

  static styles = css`
    :host {
      display: block;
      margin-bottom: var(--cml-spacing-4);
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    'camelot-textarea': CamelotTextarea;
  }
}
