import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import '../label/CamelotLabel';

@customElement('camelot-material-radio')
export class CamelotMaterialRadio extends LitElement {
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
      gap: 8px;
      padding: 4px 8px;
    }

    .radio-outer {
      position: relative;
      width: 20px;
      height: 20px;
      border: 2px solid var(--cml-color-outline);
      border-radius: 50%;
      transition: border-color 0.2s;
      display: flex;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
    }

    .checked .radio-outer {
      border-color: var(--cml-color-primary);
    }
    .checked.secondary .radio-outer { border-color: var(--cml-color-secondary); }
    .checked.tertiary .radio-outer { border-color: var(--cml-color-tertiary); }

    .radio-inner {
      width: 0px;
      height: 0px;
      background-color: var(--cml-color-primary);
      border-radius: 50%;
      transition: width 0.2s, height 0.2s;
    }
    .checked .radio-inner {
      width: 10px;
      height: 10px;
    }
    .checked.secondary .radio-inner { background-color: var(--cml-color-secondary); }
    .checked.tertiary .radio-inner { background-color: var(--cml-color-tertiary); }

    .disabled {
      cursor: not-allowed;
      opacity: 0.38;
      pointer-events: none;
    }
  `;

  private _toggle() {
    if (this.disabled || this.checked) return;
    this.checked = true;
    this.dispatchEvent(new CustomEvent('change', {
      detail: { checked: this.checked },
      bubbles: true,
      composed: true
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
        ${this.label ? html`<camelot-label .text="${this.label}" .color="${this.color}"></camelot-label>` : ''}
      </div>
    `;
  }
}
