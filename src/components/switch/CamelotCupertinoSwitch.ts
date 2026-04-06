import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('camelot-cupertino-switch')
export class CamelotCupertinoSwitch extends LitElement {
  @property({ type: Boolean })
  checked: boolean = false;

  @property({ type: Boolean })
  disabled: boolean = false;

  @property({ type: String })
  color: 'primary' | 'secondary' | 'tertiary' = 'primary';

  static styles = css`
    :host {
      display: inline-block;
    }

    .switch {
      position: relative;
      width: 51px;
      height: 31px;
      background-color: rgba(120, 120, 128, 0.16);
      border-radius: 15.5px;
      cursor: pointer;
      transition: background-color 0.3s;
    }

    .switch.checked {
      background-color: #34C759; /* iOS Standard Green */
    }
    .switch.checked.primary { background-color: var(--cml-color-primary); }
    .switch.checked.secondary { background-color: var(--cml-color-secondary); }
    .switch.checked.tertiary { background-color: var(--cml-color-tertiary); }

    .thumb {
      position: absolute;
      top: 2px;
      left: 2px;
      width: 27px;
      height: 27px;
      background-color: #FFFFFF;
      border-radius: 50%;
      box-shadow: 0 3px 8px rgba(0, 0, 0, 0.15), 0 3px 1px rgba(0, 0, 0, 0.06);
      transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .switch.checked .thumb {
      transform: translateX(20px);
    }

    .switch.disabled {
      cursor: not-allowed;
      opacity: 0.3;
      filter: grayscale(1);
    }
  `;

  private _toggle() {
    if (this.disabled) return;
    this.checked = !this.checked;
    this.dispatchEvent(new CustomEvent('change', {
      detail: { checked: this.checked }
    }));
  }

  render() {
    return html`
      <div 
        class="switch ${this.checked ? 'checked' : ''} ${this.disabled ? 'disabled' : ''} ${this.color}"
        @click="${this._toggle}"
      >
        <div class="thumb"></div>
      </div>
    `;
  }
}
