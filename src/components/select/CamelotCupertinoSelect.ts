import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('camelot-cupertino-select')
export class CamelotCupertinoSelect extends LitElement {
  @property({ type: String })
  label: string = '';

  @property({ type: String })
  value: string = '';

  @property({ type: Array })
  options: Array<{ label: string, value: string }> = [];

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
      gap: 6px;
    }

    label {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      font-size: 13px;
      color: rgba(60, 60, 67, 0.6);
      margin-left: 12px;
      text-transform: uppercase;
      letter-spacing: -0.01em;
    }

    .select-wrapper {
      position: relative;
      background-color: rgba(120, 120, 128, 0.12);
      border-radius: 10px;
      transition: background-color 0.2s;
    }

    select {
      width: 100%;
      appearance: none;
      background: transparent;
      border: none;
      padding: 11px 40px 11px 16px;
      font-family: -apple-system, sans-serif;
      font-size: 17px;
      color: var(--cml-color-on-background);
      cursor: pointer;
      outline: none;
    }

    .chevron {
      position: absolute;
      right: 14px;
      top: 50%;
      transform: translateY(-50%);
      width: 10px;
      height: 10px;
      border-right: 2px solid rgba(60, 60, 67, 0.3);
      border-bottom: 2px solid rgba(60, 60, 67, 0.3);
      transform: translateY(-70%) rotate(45deg);
      pointer-events: none;
    }

    /* Color Tints - Apply to label or select bg if needed */
    .primary label { color: var(--cml-color-primary); }
    .secondary label { color: var(--cml-color-secondary); }
    .tertiary label { color: var(--cml-color-tertiary); }

    .disabled {
      opacity: 0.3;
      filter: grayscale(1);
    }
  `;

  private _onChange(e: Event) {
    const val = (e.target as HTMLSelectElement).value;
    this.value = val;
    this.dispatchEvent(new CustomEvent('change', {
      detail: { value: val }
    }));
  }

  render() {
    return html`
      <div class="container ${this.color} ${this.disabled ? 'disabled' : ''}">
        ${this.label ? html`<label>${this.label}</label>` : ''}
        <div class="select-wrapper">
          <select @change="${this._onChange}" ?disabled="${this.disabled}" .value="${this.value}">
            ${this.options.map(opt => html`
              <option value="${opt.value}" ?selected="${this.value === opt.value}">${opt.label}</option>
            `)}
          </select>
          <div class="chevron"></div>
        </div>
      </div>
    `;
  }
}
