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
    }

    :host([checked]) .checkbox-container {
      background-color: var(--cml-color-primary);
      border-color: var(--cml-color-primary);
    }

    .checkbox-container::after {
      content: '';
      width: 5px;
      height: 10px;
      border: solid white;
      border-width: 0 2px 2px 0;
      transform: rotate(45deg);
      opacity: 0;
      transition: opacity 0.2s;
    }

    :host([checked]) .checkbox-container::after {
      opacity: 1;
    }

    .label {
      font-family: var(--cml-font-family);
      font-size: var(--cml-font-size-body);
      color: var(--cml-color-on-background);
    }

    :host([disabled]) {
      opacity: 0.5;
      cursor: not-allowed;
    }
  `;

  private _toggle() {
    if (this.disabled) return;
    this.checked = !this.checked;
    this.dispatchEvent(new CustomEvent('checked-changed', {
      detail: { checked: this.checked },
      bubbles: true,
      composed: true
    }));
  }

  render() {
    return html`
      <div class="checkbox-container" @click="${this._toggle}"></div>
      <span class="label" @click="${this._toggle}">${this.label}</span>
    `;
  }
}
