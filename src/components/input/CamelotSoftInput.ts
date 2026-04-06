import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

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

    label {
      font-family: var(--cml-font-family);
      font-size: var(--cml-font-size-label);
      font-weight: var(--cml-font-weight-medium);
      color: var(--cml-color-on-background);
      margin-left: 12px;
      transition: color 0.2s;
    }

    /* Color Tints for Label */
    .primary label { color: var(--cml-color-primary); }
    .secondary label { color: var(--cml-color-secondary); }
    .tertiary label { color: var(--cml-color-tertiary); }

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

  render() {
    return html`
      <div class="container ${this.color} ${this.disabled ? 'disabled' : ''}">
        ${this.label ? html`<label>${this.label}</label>` : ''}
        <input 
          .value=${this.value}
          placeholder=${this.placeholder}
          ?disabled=${this.disabled}
          @input=${(e: Event) => this.value = (e.target as HTMLInputElement).value}
        />
      </div>
    `;
  }
}
