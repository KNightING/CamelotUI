import { html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { CamelotBaseElement } from '../base/CamelotBaseElement';

@customElement('camelot-material-switch')
export class CamelotMaterialSwitch extends CamelotBaseElement {
  @property({ type: Boolean })
  checked: boolean = false;

  @property({ type: Boolean })
  disabled: boolean = false;


  static styles = css`
    :host {
      display: inline-block;
      width: 52px;
      height: 32px;
    }

    .switch {
      position: relative;
      width: 52px;
      height: 32px;
      background-color: var(--cml-color-surface-variant);
      border: 2px solid var(--cml-color-outline);
      border-radius: 16px;
      cursor: pointer;
      transition: all 0.2s;
    }

    .switch.checked {
      background-color: var(--cml-color-current-color);
      border-color: var(--cml-color-current-color);
    }

    .thumb {
      position: absolute;
      top: 50%;
      left: 4px;
      width: 16px;
      height: 16px;
      background-color: var(--cml-color-outline);
      border-radius: 50%;
      transform: translateY(-50%);
      transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .switch.checked .thumb {
      left: 28px;
      width: 24px;
      height: 24px;
      background-color: var(--cml-color-current-on-color);
    }

    .switch.disabled {
      cursor: not-allowed;
      opacity: 0.38;
      background-color: rgba(0,0,0,0.12);
      border-color: rgba(0,0,0,0.12);
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
        class="switch ${this.checked ? 'checked' : ''} ${this.disabled ? 'disabled' : ''}"
        @click="${this._toggle}"
      >
        <div class="thumb"></div>
      </div>
    `;
  }
}
