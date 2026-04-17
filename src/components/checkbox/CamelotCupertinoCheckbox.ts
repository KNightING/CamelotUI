import { html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { CamelotBaseElement } from '../base/CamelotBaseElement';
import '../label/CamelotLabel';

@customElement('camelot-cupertino-checkbox')
export class CamelotCupertinoCheckbox extends CamelotBaseElement {
  @property({ type: String })
  label: string = '';

  @property({ type: Boolean, reflect: true })
  checked: boolean = false;

  @property({ type: Boolean })
  disabled: boolean = false;


  /**
   * 勾選框形狀：'square' (預設，圓角正方形) 或 'circle' (圓形)
   */
  @property({ type: String })
  shape: 'square' | 'circle' = 'square';

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
      width: 22px;
      height: 22px;
      border: 1px solid var(--cml-color-outline-variant);
      margin-right: 8px;
      transition: background-color 0.2s, border-color 0.2s, border-radius 0.2s;
      display: flex;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
    }

    /* Shape options */
    .shape-square {
      border-radius: 5px; /* iOS standard rounded square */
    }
    .shape-circle {
      border-radius: 50%;
    }

    .checked .checkbox-container {
      background-color: var(--cml-color-current-color);
      border-color: var(--cml-color-current-color);
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

    .checked .check-icon {
      opacity: 1;
    }

    .disabled {
      opacity: 0.4;
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
        class="container ${this.checked ? 'checked' : ''} ${this.disabled ? 'disabled' : ''}"
        @click="${this._toggle}"
      >
        <div class="checkbox-container shape-${this.shape}">
          <div class="check-icon"></div>
        </div>
        ${this.label ? html`<camelot-label .text="${this.label}" .color="${this.color}"></camelot-label>` : ''}
      </div>
    `;
  }
}
