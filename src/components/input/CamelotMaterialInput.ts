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

  static styles = css`
    :host {
      display: block;
      margin-bottom: 24px;
    }

    .md-field {
      position: relative;
      background-color: var(--cml-color-surface-variant);
      border-radius: 4px 4px 0 0;
      border-bottom: 2px solid var(--cml-color-outline);
      height: 56px;
      padding: 0 16px;
      display: flex;
      align-items: center;
      transition: border-bottom-color 0.2s, background-color 0.2s;
    }

    .md-field:focus-within {
      border-bottom-color: var(--cml-color-primary);
      background-color: var(--cml-color-surface-variant);
    }

    input {
      width: 100%;
      background: none;
      border: none;
      outline: none;
      padding: 16px 0 8px 0;
      font-size: 16px;
      color: var(--cml-color-on-surface);
      caret-color: var(--cml-color-primary);
    }

    label {
      position: absolute;
      left: 16px;
      top: 18px;
      color: var(--cml-color-on-surface-variant);
      pointer-events: none;
      transition: transform 0.2s, font-size 0.2s, color 0.2s;
    }

    input:focus + label,
    input:not(:placeholder-shown) + label {
      transform: translateY(-16px);
      font-size: 12px;
      color: var(--cml-primary);
    }
  `;

  render() {
    return html`
      <div class="md-field">
        <input 
          id="input"
          placeholder=" "
          .value=${this.value}
          @input=${(e: Event) => this.value = (e.target as HTMLInputElement).value}
        />
        ${this.label ? html`<label for="input">${this.label}</label>` : ''}
      </div>
    `;
  }
}
