import { html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { CamelotBaseElement } from '../base/CamelotBaseElement';
import '../label/CamelotLabel';

@customElement('camelot-material-radio')
export class CamelotMaterialRadio extends CamelotBaseElement {
  @property({ type: Boolean })
  checked: boolean = false;

  @property({ type: Boolean })
  disabled: boolean = false;

  @property({ type: String })
  label: string = '';


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
      min-height: 32px;
      box-sizing: border-box;
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
      flex-shrink: 0;
    }

    .checked .radio-outer {
      border-color: var(--cml-color-current-color);
    }

    .radio-inner {
      width: 10px;
      height: 10px;
      background-color: var(--cml-color-current-color);
      border-radius: 50%;
      transform: scale(0);
      transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    }
    .checked .radio-inner {
      transform: scale(1);
    }

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
        class="container ${this.checked ? 'checked' : ''} ${this.disabled ? 'disabled' : ''}"
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
