import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import '../label/CamelotLabel';

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

  @state()
  private _focused = false;

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
      font-size: 1rem;
      color: var(--cml-color-on-surface);
      caret-color: var(--cml-color-primary);
    }
    .secondary input { caret-color: var(--cml-color-secondary); }
    .tertiary input { caret-color: var(--cml-color-tertiary); }

    /* Placeholder 只有在 Focus 時才顯示，避免與 Label 重疊 */
    input::placeholder {
      color: transparent;
      transition: color 0.1s;
    }
    
    input:focus::placeholder {
      color: var(--cml-color-on-surface-variant);
    }

    camelot-label {
      position: absolute;
      left: 16px;
      top: 18px;
      pointer-events: none;
      transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .floating camelot-label {
      transform: translateY(-14px);
    }

    .disabled {
      opacity: 0.38;
      cursor: not-allowed;
      pointer-events: none;
    }
  `;

  private _handleFocus() {
    this._focused = true;
  }

  private _handleBlur() {
    this._focused = false;
  }

  private _handleInput(e: Event) {
    this.value = (e.target as HTMLInputElement).value;
    this.dispatchEvent(new CustomEvent('change', {
      detail: { value: this.value },
      bubbles: true,
      composed: true
    }));
  }

  render() {
    const isFloating = this._focused || (this.value && this.value.length > 0);
    
    return html`
      <div class="md-field ${this.color} ${isFloating ? 'floating' : ''} ${this.disabled ? 'disabled' : ''}">
        <input 
          id="input"
          placeholder="${this.placeholder || ''}"
          .value=${this.value}
          ?disabled=${this.disabled}
          @focus=${this._handleFocus}
          @blur=${this._handleBlur}
          @input=${this._handleInput}
        />
        ${this.label ? html`<camelot-label .text="${this.label}" .color="${isFloating ? this.color : 'outline'}" .for="input"></camelot-label>` : ''}
      </div>
    `;
  }
}
