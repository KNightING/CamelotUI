import { html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { CamelotBaseElement } from '../base/CamelotBaseElement';

/**
 * <CamelotLabel>
 * 統一標籤元件。整合了 Material, Cupertino, Soft UI 的樣式邏輯。
 * 不再區分多個實作檔案，提升維護性與效能。
 */
@customElement('camelot-label')
export class CamelotLabel extends CamelotBaseElement {
  @property({ type: String })
  text: string = '';

  @property({ type: String })
  color: 'primary' | 'secondary' | 'tertiary' = 'primary';

  @property({ type: Boolean })
  required: boolean = false;

  @property({ type: String })
  for: string = '';

  static styles = css`
    :host {
      display: inline-block;
      vertical-align: middle;
    }

    label {
      display: flex;
      align-items: center;
      font-family: var(--cml-font-family);
      font-size: 0.875rem;
      font-weight: 500;
      line-height: 1.25;
      color: var(--cml-color-on-surface-variant);
      margin-left: 8px;
      transition: color 0.25s cubic-bezier(0.4, 0, 0.2, 1);
      cursor: pointer;
      user-select: none;
    }

    /* Style Specific Overrides */
    :host([data-style="material"]) label {
      font-size: 0.75rem;
      margin-left: 4px;
    }

    :host([data-style="cupertino"]) label {
      font-size: 0.8125rem;
      margin-left: 12px;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }

    :host([data-style="soft"]) label {
      font-size: 0.875rem;
      margin-left: 8px;
      color: var(--cml-color-on-background);
    }

    /* Color variations */
    .primary { color: var(--cml-color-primary); }
    .secondary { color: var(--cml-color-secondary); }
    .tertiary { color: var(--cml-color-tertiary); }

    .required::after {
      content: '*';
      color: var(--cml-color-error);
      margin-left: 4px;
    }
  `;

  protected updated(changedProperties: Map<string | number | symbol, unknown>) {
    super.updated(changedProperties);
    if (changedProperties.has('_activeStyle')) {
      this.setAttribute('data-style', this._activeStyle);
    }
  }

  render() {
    return html`
      <label for="${this.for}" class="${this.required ? 'required' : ''} ${this.color}">
        ${this.text}
      </label>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'camelot-label': CamelotLabel;
  }
}
