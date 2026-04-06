import { html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { CamelotBaseElement } from '../base/CamelotBaseElement';

// 確保風格元件已載入
import './CamelotMaterialInput.ts';
import './CamelotCupertinoInput.ts';
import './CamelotSoftInput.ts';

/**
 * <CamelotInput>
 * 通用輸入框元件，根據主題切換風格。
 * 繼承自 CamelotBaseElement 以獲取自動風格偵測能力。
 */
@customElement('camelot-input')
export class CamelotInput extends CamelotBaseElement {
  @property({ type: String })
  label: string = '';

  @property({ type: String })
  value: string = '';

  @property({ type: String })
  placeholder: string = '';

  @property({ type: String })
  error: string = '';

  render() {
    switch (this._activeStyle) {
      case 'soft':
        return html`
          <camelot-soft-input
            .value=${this.value}
            .label=${this.label}
            .placeholder=${this.placeholder}
            .error=${this.error}
            @input=${(e: CustomEvent) => this.value = (e.target as any).value}
          ></camelot-soft-input>
        `;
      case 'cupertino':
        return html`
          <camelot-cupertino-input
            .value=${this.value}
            .label=${this.label}
            .placeholder=${this.placeholder}
            .error=${this.error}
            @input=${(e: CustomEvent) => this.value = (e.target as any).value}
          ></camelot-cupertino-input>
        `;
      case 'material':
      default:
        return html`
          <camelot-material-input
            .value=${this.value}
            .label=${this.label}
            .placeholder=${this.placeholder}
            .error=${this.error}
            @input=${(e: CustomEvent) => this.value = (e.target as any).value}
          ></camelot-material-input>
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
