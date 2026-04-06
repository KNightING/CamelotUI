import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('camelot-soft-radio')
export class CamelotSoftRadio extends LitElement {
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
      gap: 12px;
      padding: 10px;
    }

    .radio-outer {
      width: 24px;
      height: 24px;
      background-color: var(--cml-color-background);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 
        inset 4px 4px 8px var(--cml-soft-color-dark), 
        inset -4px -4px 8px var(--cml-soft-color-light);
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .radio-inner {
      width: 0px;
      height: 0px;
      background-color: var(--cml-color-background);
      border-radius: 50%;
      transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }

    .checked .radio-inner {
      width: 12px;
      height: 12px;
      box-shadow: 
        3px 3px 6px var(--cml-soft-color-dark), 
        -3px -3px 6px var(--cml-soft-color-light);
    }

    /* Soft Radio Tints */
    .primary .radio-inner { background-color: var(--cml-color-primary); }
    .secondary .radio-inner { background-color: var(--cml-color-secondary); }
    .tertiary .radio-inner { background-color: var(--cml-color-tertiary); }

    .label {
      font-family: var(--cml-font-family);
      font-size: var(--cml-font-size-body);
      color: var(--cml-color-on-background);
    }

    .disabled {
      cursor: not-allowed;
      opacity: 0.3;
      box-shadow: none !important;
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
        <div class="radio-outer">
          <div class="radio-inner"></div>
        </div>
        ${this.label ? html`<span class="label">${this.label}</span>` : ''}
      </div>
    `;
  }
}
