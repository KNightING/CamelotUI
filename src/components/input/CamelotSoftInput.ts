import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import '../label/CamelotLabel';

/**
 * <CamelotSoftInput>
 * Neumorphism 風格的輸入框，內凹陰影效果。
 */
@customElement('camelot-soft-input')
export class CamelotSoftInput extends LitElement {
  @property({ type: String })
  label: string = '';

  @property({ type: String })
  value: string = '';

  @property({ type: String })
  placeholder: string = '';

  @property({ type: String })
  color: 'primary' | 'secondary' | 'tertiary' = 'primary';

  @property({ type: Boolean })
  disabled: boolean = false;

  static styles = css`
    :host {
      display: block;
    }

    .container {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    input {
      font-family: var(--cml-font-family);
      font-size: 16px;
      padding: 16px 20px;
      border: none;
      border-radius: 16px;
      background-color: var(--cml-color-background);
      color: var(--cml-color-on-background);
      outline: none;
      box-shadow: 
        inset var(--cml-soft-distance) var(--cml-soft-distance) var(--cml-soft-blur) var(--cml-soft-color-dark), 
        inset calc(-1 * var(--cml-soft-distance)) calc(-1 * var(--cml-soft-distance)) var(--cml-soft-blur) var(--cml-soft-color-light);
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }

    input:focus {
      box-shadow: 
        inset calc(var(--cml-soft-distance) * 0.5) calc(var(--cml-soft-distance) * 0.5) var(--cml-soft-blur) var(--cml-soft-color-dark), 
        inset calc(-1 * var(--cml-soft-distance) * 0.5) calc(-1 * var(--cml-soft-distance) * 0.5) var(--cml-soft-blur) var(--cml-soft-color-light);
    }

    .disabled {
      opacity: 0.3;
      cursor: not-allowed;
      box-shadow: none !important;
      pointer-events: none;
    }
  `;

  private _handleInput(e: Event) {
    this.value = (e.target as HTMLInputElement).value;
    this.dispatchEvent(new CustomEvent('change', {
      detail: { value: this.value },
      bubbles: true,
      composed: true
    }));
  }

  render() {
    return html`
      <div class="container ${this.color} ${this.disabled ? 'disabled' : ''}">
        ${this.label ? html`<camelot-label .text="${this.label}" .color="${this.color}" .for="input"></camelot-label>` : ''}
        <input 
          id="input"
          .value=${this.value}
          placeholder=${this.placeholder}
          ?disabled=${this.disabled}
          @input=${this._handleInput}
        />
      </div>
    `;
  }
}
