import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import '../label/CamelotLabel';

@customElement('camelot-soft-checkbox')
export class CamelotSoftCheckbox extends LitElement {
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

    .container {
      display: flex;
      align-items: center;
    }

    .checkbox-container {
      width: 24px;
      height: 24px;
      border-radius: 6px;
      background: var(--cml-color-background);
      margin-right: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 
        inset var(--cml-soft-distance) var(--cml-soft-distance) var(--cml-soft-blur) var(--cml-soft-color-dark), 
        inset calc(-1 * var(--cml-soft-distance)) calc(-1 * var(--cml-soft-distance)) var(--cml-soft-blur) var(--cml-soft-color-light);
      transition: all 0.2s;
    }

    .checked .checkbox-container {
      box-shadow: 
        var(--cml-soft-distance) var(--cml-soft-distance) var(--cml-soft-blur) var(--cml-soft-color-dark), 
        calc(-1 * var(--cml-soft-distance)) calc(-1 * var(--cml-soft-distance)) var(--cml-soft-blur) var(--cml-soft-color-light);
    }

    .check-mark {
      width: 12px;
      height: 12px;
      border-radius: 2px;
      opacity: 0;
      transform: scale(0.5);
      transition: all 0.2s;
    }

    /* Colors for check-mark */
    .primary .check-mark { background-color: var(--cml-color-primary); }
    .secondary .check-mark { background-color: var(--cml-color-secondary); }
    .tertiary .check-mark { background-color: var(--cml-color-tertiary); }

    .checked .check-mark {
      opacity: 1;
      transform: scale(1);
    }

    .disabled {
      opacity: 0.5;
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
        <div class="checkbox-container">
          <div class="check-mark"></div>
        </div>
        ${this.label ? html`<camelot-label .text="${this.label}" .color="${this.color}"></camelot-label>` : ''}
      </div>
    `;
  }
}
