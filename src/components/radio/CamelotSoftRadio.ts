import { html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { CamelotBaseElement } from '../base/CamelotBaseElement';
import '../label/CamelotLabel';

@customElement('camelot-soft-radio')
export class CamelotSoftRadio extends CamelotBaseElement {
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
      padding: 6px 10px;
      min-height: 40px;
      box-sizing: border-box;
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
        inset var(--cml-soft-distance) var(--cml-soft-distance) var(--cml-soft-blur) var(--cml-soft-color-dark), 
        inset calc(-1 * var(--cml-soft-distance)) calc(-1 * var(--cml-soft-distance)) var(--cml-soft-blur) var(--cml-soft-color-light);
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      flex-shrink: 0;
    }

    .radio-inner {
      width: 12px;
      height: 12px;
      background-color: var(--cml-color-background);
      border-radius: 50%;
      transform: scale(0);
      transition: transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }

    .checked .radio-inner {
      transform: scale(1);
      box-shadow: 
        3px 3px 6px var(--cml-soft-color-dark), 
        -3px -3px 6px var(--cml-soft-color-light);
    }

    .radio-inner {
      background-color: var(--cml-color-current-color);
    }

    .disabled {
      cursor: not-allowed;
      opacity: 0.3;
      box-shadow: none !important;
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
