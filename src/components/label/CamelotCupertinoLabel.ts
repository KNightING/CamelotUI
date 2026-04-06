import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('camelot-cupertino-label')
export class CamelotCupertinoLabel extends LitElement {
  @property({ type: String })
  text: string = '';

  @property({ type: String })
  color: 'primary' | 'secondary' | 'tertiary' | 'outline' = 'primary';

  @property({ type: Boolean })
  required: boolean = false;

  @property({ type: String })
  for: string = '';

  static styles = css`
    label {
      font-family: var(--cml-font-family);
      font-size: 0.8125rem;
      font-weight: 500;
      color: var(--cml-color-primary);
      margin-left: 12px;
      text-transform: uppercase;
      letter-spacing: -0.01em;
      transition: color 0.2s;
    }

    .outline { color: var(--cml-color-on-surface-variant); opacity: 0.6; }
    .primary { color: var(--cml-color-primary); }
    .secondary { color: var(--cml-color-secondary); }
    .tertiary { color: var(--cml-color-tertiary); }

    .required::after {
      content: '*';
      color: var(--cml-color-error);
      margin-left: 4px;
    }
  `;

  render() {
    return html`
      <label for="${this.for}" class="${this.color} ${this.required ? 'required' : ''}">
        ${this.text}
      </label>
    `;
  }
}
