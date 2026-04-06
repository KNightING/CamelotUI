import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('camelot-soft-select')
export class CamelotSoftSelect extends LitElement {
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
      gap: 10px;
    }

    label {
      font-family: var(--cml-font-family);
      font-size: var(--cml-font-size-label);
      font-weight: var(--cml-font-weight-medium);
      color: var(--cml-color-on-background);
      margin-left: 12px;
      transition: color 0.2s;
    }

    .select-wrapper {
      position: relative;
      background-color: var(--cml-color-background);
      border-radius: 16px;
      box-shadow: 
        inset 4px 4px 8px var(--cml-soft-color-dark), 
        inset -4px -4px 8px var(--cml-soft-color-light);
      transition: box-shadow 0.3s;
    }

    select {
      width: 100%;
      appearance: none;
      background: transparent;
      border: none;
      padding: 14px 40px 14px 20px;
      font-family: var(--cml-font-family);
      font-size: var(--cml-font-size-body);
      color: var(--cml-color-on-background);
      cursor: pointer;
      outline: none;
    }

    .chevron {
      position: absolute;
      right: 18px;
      top: 50%;
      transform: translateY(-50%);
      width: 12px;
      height: 12px;
      border-right: 2.5px solid var(--cml-soft-color-dark);
      border-bottom: 2.5px solid var(--cml-soft-color-dark);
      transform: translateY(-70%) rotate(45deg);
      pointer-events: none;
      transition: border-color 0.2s;
    }

    /* Color Tints */
    .primary label { color: var(--cml-color-primary); }
    .secondary label { color: var(--cml-color-secondary); }
    .tertiary label { color: var(--cml-color-tertiary); }
    
    .primary .chevron { border-color: var(--cml-color-primary); }
    .secondary .chevron { border-color: var(--cml-color-secondary); }
    .tertiary .chevron { border-color: var(--cml-color-tertiary); }

    .disabled {
      opacity: 0.3;
      box-shadow: none !important;
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
