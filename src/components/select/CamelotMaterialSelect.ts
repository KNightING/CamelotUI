import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('camelot-material-select')
export class CamelotMaterialSelect extends LitElement {
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
      gap: 4px;
    }

    label {
      font-family: var(--cml-font-family);
      font-size: 12px;
      font-weight: 500;
      color: var(--cml-color-outline);
      margin-left: 4px;
      transition: color 0.2s;
    }

    .select-wrapper {
      position: relative;
      background-color: var(--cml-color-surface-container-low);
      border: 1px solid var(--cml-color-outline);
      border-radius: var(--cml-radius-s);
      transition: all 0.2s;
    }

    select {
      width: 100%;
      appearance: none;
      background: transparent;
      border: none;
      padding: 12px 36px 12px 16px;
      font-family: var(--cml-font-family);
      font-size: 16px;
      color: var(--cml-color-on-surface);
      cursor: pointer;
      outline: none;
    }

    .arrow {
      position: absolute;
      right: 12px;
      top: 50%;
      transform: translateY(-50%);
      pointer-events: none;
      width: 0;
      height: 0;
      border-left: 5px solid transparent;
      border-right: 5px solid transparent;
      border-top: 5px solid var(--cml-color-outline);
    }

    /* Color States & Focus */
    .primary label { color: var(--cml-color-primary); }
    .secondary label { color: var(--cml-color-secondary); }
    .tertiary label { color: var(--cml-color-tertiary); }

    .select-wrapper:focus-within {
      border-width: 2px;
      border-color: var(--cml-color-primary);
    }
    .primary.select-wrapper:focus-within { border-color: var(--cml-color-primary); }
    .secondary.select-wrapper:focus-within { border-color: var(--cml-color-secondary); }
    .tertiary.select-wrapper:focus-within { border-color: var(--cml-color-tertiary); }

    .disabled {
      opacity: 0.38;
      cursor: not-allowed;
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
        <div class="select-wrapper ${this.color}">
          <select @change="${this._onChange}" ?disabled="${this.disabled}" .value="${this.value}">
            ${this.options.map(opt => html`
              <option value="${opt.value}" ?selected="${this.value === opt.value}">${opt.label}</option>
            `)}
          </select>
          <div class="arrow"></div>
        </div>
      </div>
    `;
  }
}
