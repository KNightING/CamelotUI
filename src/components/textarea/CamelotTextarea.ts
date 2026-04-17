import { html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { CamelotBaseTextarea } from './CamelotBaseTextarea';

// 確保風格元件已載入
import './CamelotMaterialTextarea';
import './CamelotCupertinoTextarea';
import './CamelotSoftTextarea';
import './CamelotScifiTextarea';

/**
 * <CamelotTextarea>
 * 通用長文字輸入框元件，根據主題切換風格。
 * 已優化：繼承 CamelotBaseTextarea 以獲取統一屬性與狀態。
 */
@customElement('camelot-textarea')
export class CamelotTextarea extends CamelotBaseTextarea {
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

