import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('camelot-material-checkbox')
export class CamelotMaterialCheckbox extends LitElement {
  @property({ type: String })
  label: string = '';

  @property({ type: Boolean, reflect: true })
  checked: boolean = false;

  @property({ type: Boolean })
  disabled: boolean = false;

  @property({ type: String })
  color: 'primary' | 'secondary' | 'tertiary' = 'primary';

  static styles = css`
    :host {
      display: inline-flex;
      align-items: center;
      cursor: pointer;
      user-select: none;
    }

    .checkbox-container {
      position: relative;
      width: 18px;
      height: 18px;
      margin-right: 12px;
      border: 2px solid var(--cml-color-outline);
      border-radius: 2px;
      transition: all 0.2s;
      display: flex;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
    }

    /* Checked style with color variations */
    .checked.primary .checkbox-container { background-color: var(--cml-color-primary); border-color: var(--cml-color-primary); }
    .checked.secondary .checkbox-container { background-color: var(--cml-color-secondary); border-color: var(--cml-color-secondary); }
    .checked.tertiary .checkbox-container { background-color: var(--cml-color-tertiary); border-color: var(--cml-color-tertiary); }

    .checkbox-container::after {
      content: '';
      width: 4px;
      height: 8px;
      border: solid white;
      border-width: 0 2px 2px 0;
      transform: rotate(45deg) translate(-1px, -1px);
      opacity: 0;
      transition: opacity 0.2s;
    }

    .checked .checkbox-container::after {
      opacity: 1;
    }

    .label {
      font-family: var(--cml-font-family);
      font-size: var(--cml-font-size-body);
      color: var(--cml-color-on-background);
    }

    .disabled {
      opacity: 0.38;
      cursor: not-allowed;
      pointer-events: none;
    }
  `;

  private _toggle() {
    if (this.disabled) return;
    this.checked = !this.checked;
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
        <div class="checkbox-container"></div>
        ${this.label ? html`<span class="label">${this.label}</span>` : ''}
      </div>
    `;
  }
}
