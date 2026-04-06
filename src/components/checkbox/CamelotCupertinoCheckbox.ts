import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('camelot-cupertino-checkbox')
export class CamelotCupertinoCheckbox extends LitElement {
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
      width: 22px;
      height: 22px;
      border: 1px solid var(--cml-color-outline-variant);
      border-radius: 50%;
      margin-right: 12px;
      transition: background-color 0.2s, border-color 0.2s;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    :host([checked]) .checkbox-container {
      background-color: var(--cml-color-primary);
      border-color: var(--cml-color-primary);
    }

    .check-icon {
      width: 10px;
      height: 6px;
      border-left: 2px solid white;
      border-bottom: 2px solid white;
      transform: rotate(-45deg) translateY(-1px);
      opacity: 0;
      transition: opacity 0.2s;
    }

    :host([checked]) .check-icon {
      opacity: 1;
    }

    .label {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
      font-size: 17px;
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
      <div class="checkbox-container" @click="${this._toggle}">
        <div class="check-icon"></div>
      </div>
      <span class="label" @click="${this._toggle}">${this.label}</span>
    `;
  }
}
