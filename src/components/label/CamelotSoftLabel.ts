import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('camelot-soft-label')
export class CamelotSoftLabel extends LitElement {
  @property({ type: String })
  text: string = '';

  @property({ type: String })
  color: 'primary' | 'secondary' | 'tertiary' = 'primary';

  @property({ type: Boolean })
  required: boolean = false;

  @property({ type: String })
  for: string = '';

  static styles = css`
    label {
      font-family: var(--cml-font-family);
      font-size: 0.875rem;
      font-weight: var(--cml-font-weight-medium);
      color: var(--cml-color-on-background);
      margin-left: 8px;
      transition: color 0.2s;
    }

    .required::after {
      content: '*';
      color: var(--cml-color-error);
      margin-left: 4px;
    }

    /* Color variations in Soft UI are subtle, mostly for active states */
    .primary { color: var(--cml-color-primary); }
    .secondary { color: var(--cml-color-secondary); }
    .tertiary { color: var(--cml-color-tertiary); }
  `;

  render() {
    return html`
      <label for="${this.for}" class="${this.required ? 'required' : ''} ${this.color}">
        ${this.text}
      </label>
    `;
  }
}
