import { html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { CamelotBaseElement } from '../base/CamelotBaseElement';
import '../label/CamelotLabel';

/**
 * <CamelotSoftTextarea>
 * Neumorphism 風格的長文字輸入框，內凹陰影效果。
 */
@customElement('camelot-soft-textarea')
export class CamelotSoftTextarea extends CamelotBaseElement {
  @property({ type: String })
  label: string = '';
  
  @property({ type: Boolean })
  disabled: boolean = false;

  @property({ type: String })
  value: string = '';

  @property({ type: String })
  placeholder: string = '';

  @property({ type: Number })
  rows: number = 3;

  static styles = [
    css`
      :host {
        display: block;
      }

      .container {
        display: flex;
        flex-direction: column;
        gap: 12px;
      }

      textarea {
        font-family: var(--cml-font-family);
        font-size: 1rem;
        padding: 16px 20px;
        border: none;
        border-radius: 16px;
        background-color: var(--cml-color-current-bg-color);
        color: var(--cml-color-on-background);
        outline: none;
        box-shadow: 
          inset var(--cml-soft-distance) var(--cml-soft-distance) var(--cml-soft-blur) var(--cml-soft-color-dark), 
          inset calc(-1 * var(--cml-soft-distance)) calc(-1 * var(--cml-soft-distance)) var(--cml-soft-blur) var(--cml-soft-color-light);
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        resize: vertical;
        min-height: 100px;
      }

      textarea:focus {
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
    `
  ];

  private _handleInput(e: Event) {
    this.value = (e.target as HTMLTextAreaElement).value;
    this.dispatchEvent(new CustomEvent('input', {
      detail: { value: this.value },
      bubbles: true,
      composed: true
    }));
  }

  render() {
    return html`
      <div class="container ${this.disabled ? 'disabled' : ''}">
        ${this.label ? html`<camelot-label .text="${this.label}" .color="${this.color}" .for="textarea"></camelot-label>` : ''}
        <textarea 
          id="textarea"
          .rows=${this.rows}
          .value=${this.value}
          placeholder=${this.placeholder}
          ?disabled=${this.disabled}
          @input=${this._handleInput}
        ></textarea>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'camelot-soft-textarea': CamelotSoftTextarea;
  }
}
