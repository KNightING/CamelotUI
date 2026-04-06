import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * <CamelotMaterialInput>
 * Material 3 風格的輸入框，具備 Floating Label 效果。
 */
@customElement('camelot-material-input')
export class CamelotMaterialInput extends LitElement {
  @property({ type: String })
  label: string = '';

  @property({ type: String })
  value: string = '';

  @property({ type: String })
  color: 'primary' | 'secondary' | 'tertiary' = 'primary';

  @property({ type: Boolean })
  disabled: boolean = false;

  @property({ type: String })
  placeholder: string = '';

  static styles = css`
    :host {
      display: block;
    }

    .md-field {
      position: relative;
      background-color: var(--cml-color-surface-variant);
      border-radius: 4px 4px 0 0;
      border-bottom: 1px solid var(--cml-color-outline);
      height: 56px;
      padding: 0 16px;
      display: flex;
      align-items: center;
      transition: all 0.2s;
    }

    .md-field:focus-within {
      border-bottom-width: 2px;
      border-bottom-color: var(--cml-color-primary);
    }
    .secondary.md-field:focus-within { border-bottom-color: var(--cml-color-secondary); }
    .tertiary.md-field:focus-within { border-bottom-color: var(--cml-color-tertiary); }

    input {
      width: 100%;
      background: none;
      border: none;
      outline: none;
      padding: 20px 0 8px 0;
      font-size: 16px;
      color: var(--cml-color-on-surface);
      caret-color: var(--cml-color-primary);
    }
    .secondary input { caret-color: var(--cml-color-secondary); }
    .tertiary input { caret-color: var(--cml-color-tertiary); }

    label {
      position: absolute;
      left: 16px;
      top: 18px;
      color: var(--cml-color-on-surface-variant);
      pointer-events: none;
      transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    }

    input:focus + label,
    input:not(:placeholder-shown) + label {
      transform: translateY(-14px);
      font-size: 12px;
      color: var(--cml-color-primary);
    }
    .secondary input:focus + label,
    .secondary input:not(:placeholder-shown) + label { color: var(--cml-color-secondary); }
    .tertiary input:focus + label,
    .tertiary input:not(:placeholder-shown) + label { color: var(--cml-color-tertiary); }

    .disabled {
      opacity: 0.38;
      cursor: not-allowed;
      pointer-events: none;
    }
  `;

  render() {
    return html`
      <div class="md-field ${this.color} ${this.disabled ? 'disabled' : ''}">
        <input 
          id="input"
          placeholder="${this.placeholder || ' '}"
          .value=${this.value}
          ?disabled=${this.disabled}
          @input=${(e: Event) => this.value = (e.target as HTMLInputElement).value}
        />
        ${this.label ? html`<label for="input">${this.label}</label>` : ''}
      </div>
    `;
  }
}
