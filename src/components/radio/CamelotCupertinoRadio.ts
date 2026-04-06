import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('camelot-cupertino-radio')
export class CamelotCupertinoRadio extends LitElement {
  @property({ type: Boolean })
  checked: boolean = false;

  @property({ type: Boolean })
  disabled: boolean = false;

  @property({ type: String })
  label: string = '';

  @property({ type: String })
  color: 'primary' | 'secondary' | 'tertiary' = 'primary';

  static styles = css`
    :host {
      display: inline-block;
      cursor: pointer;
    }

    .container {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 4px;
    }

    .radio-circle {
      width: 22px;
      height: 22px;
      border: 1px solid rgba(0, 0, 0, 0.15);
      border-radius: 50%;
      background-color: #FFFFFF;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.2s;
    }

    .checked .radio-circle {
      background-color: var(--cml-color-primary);
      border-color: var(--cml-color-primary);
    }
    .checked.secondary .radio-circle { background-color: var(--cml-color-secondary); border-color: var(--cml-color-secondary); }
    .checked.tertiary .radio-circle { background-color: var(--cml-color-tertiary); border-color: var(--cml-color-tertiary); }

    .radio-inner {
      width: 0px;
      height: 0px;
      background-color: #FFFFFF;
      border-radius: 50%;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
      transition: width 0.2s cubic-bezier(0.4, 0, 0.2, 1), height 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .checked .radio-inner {
      width: 8px;
      height: 8px;
    }

    .label {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      font-size: 16px;
      color: var(--cml-color-on-background);
    }

    .disabled {
      cursor: not-allowed;
      opacity: 0.3;
    }
  `;

  private _toggle() {
    if (this.disabled || this.checked) return;
    this.checked = true;
    this.dispatchEvent(new CustomEvent('change', {
      detail: { checked: this.checked }
    }));
  }

  render() {
    return html`
      <div 
        class="container ${this.checked ? 'checked' : ''} ${this.disabled ? 'disabled' : ''} ${this.color}"
        @click="${this._toggle}"
      >
        <div class="radio-circle">
          <div class="radio-inner"></div>
        </div>
        ${this.label ? html`<span class="label">${this.label}</span>` : ''}
      </div>
    `;
  }
}
