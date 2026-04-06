import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('camelot-soft-checkbox')
export class CamelotSoftCheckbox extends LitElement {
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
      width: 24px;
      height: 24px;
      border-radius: 6px;
      background: var(--cml-color-background);
      margin-right: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 
        inset var(--cml-soft-distance) var(--cml-soft-distance) var(--cml-soft-blur) var(--cml-soft-color-dark), 
        inset calc(-1 * var(--cml-soft-distance)) calc(-1 * var(--cml-soft-distance)) var(--cml-soft-blur) var(--cml-soft-color-light);
      transition: all 0.2s;
    }

    :host([checked]) .checkbox-container {
      box-shadow: 
        var(--cml-soft-distance) var(--cml-soft-distance) var(--cml-soft-blur) var(--cml-soft-color-dark), 
        calc(-1 * var(--cml-soft-distance)) calc(-1 * var(--cml-soft-distance)) var(--cml-soft-blur) var(--cml-soft-color-light);
    }

    .check-mark {
      width: 12px;
      height: 12px;
      border-radius: 2px;
      background-color: var(--cml-color-primary);
      opacity: 0;
      transform: scale(0.5);
      transition: all 0.2s;
    }

    :host([checked]) .check-mark {
      opacity: 1;
      transform: scale(1);
    }

    .label {
      font-family: var(--cml-font-family);
      font-size: var(--cml-font-size-body);
      color: var(--cml-color-on-background);
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
      <div class="checkbox-container" @click="${this._toggle}">
        <div class="check-mark"></div>
      </div>
      <span class="label" @click="${this._toggle}">${this.label}</span>
    `;
  }
}
