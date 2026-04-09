import { html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { CamelotBaseElement } from '../base/CamelotBaseElement';

// 確保風格元件已載入
import './CamelotMaterialSwitch.ts';
import './CamelotCupertinoSwitch.ts';
import './CamelotSoftSwitch.ts';
import './CamelotScifiSwitch.ts';

/**
 * <CamelotSwitch>
 * 通用開關元件，依據主題切換風格。
 * 繼承自 CamelotBaseElement 以獲取自動風格偵測能力。
 */
@customElement('camelot-switch')
export class CamelotSwitch extends CamelotBaseElement {
  @property({ type: Boolean, reflect: true })
  checked: boolean = false;

  @property({ type: Boolean, reflect: true })
  disabled: boolean = false;

  /**
   * 開關色彩：'primary', 'secondary', 'tertiary'
   */
  @property({ type: String })
  color: 'primary' | 'secondary' | 'tertiary' = 'primary';

  private _handleChanged(e: CustomEvent) {
    this.checked = e.detail.checked;
    this.dispatchEvent(new CustomEvent('change', {
      detail: { checked: this.checked },
      bubbles: true,
      composed: true
    }));
  }

  render() {
    switch (this._activeStyle) {
      case 'scifi':
        return html`
          <camelot-scifi-scifi-switch 
            ?checked=${this.checked} 
            ?disabled=${this.disabled}
            .color=${this.color}
            @change=${this._handleChanged}
          ></camelot-scifi-scifi-switch>
        `;
      case 'soft':
        return html`
          <camelot-soft-switch 
            ?checked=${this.checked} 
            ?disabled=${this.disabled}
            .color=${this.color}
            @change=${this._handleChanged}
          ></camelot-soft-switch>
        `;
      case 'cupertino':
        return html`
          <camelot-cupertino-switch 
            ?checked=${this.checked} 
            ?disabled=${this.disabled}
            .color=${this.color}
            @change=${this._handleChanged}
          ></camelot-cupertino-switch>
        `;
      case 'material':
      default:
        return html`
          <camelot-material-switch 
            ?checked=${this.checked} 
            ?disabled=${this.disabled}
            .color=${this.color}
            @change=${this._handleChanged}
          ></camelot-material-switch>
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
    'camelot-switch': CamelotSwitch;
  }
}
