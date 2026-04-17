import { html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { CamelotBaseElement } from '../base/CamelotBaseElement';
import '../label/CamelotLabel';

@customElement('camelot-material-checkbox')
export class CamelotMaterialCheckbox extends CamelotBaseElement {
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
      margin-right: 8px; /* Standard spacing for checkbox label */
      border: 2px solid var(--cml-color-outline);
      border-radius: 2px;
      transition: all 0.2s;
      display: flex;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
    }

    .checked .checkbox-container {
      background-color: var(--cml-color-current-color);
      border-color: var(--cml-color-current-color);
    }

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

    camelot-label {
      /* Reset intrinsic margins when used alongside control */
      --cml-label-margin: 0;
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
        class="${this.checked ? 'checked' : ''} ${this.disabled ? 'disabled' : ''}"
        style="display: flex; align-items: center;"
        @click="${this._toggle}"
      >
        <div class="checkbox-container"></div>
        ${this.label ? html`<camelot-label .text="${this.label}" .color="${this.color}"></camelot-label>` : ''}
      </div>
    `;
  }
}
