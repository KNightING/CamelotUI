import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('camelot-cupertino-label')
export class CamelotCupertinoLabel extends LitElement {
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
      font-size: 13px;
      color: var(--cml-color-primary); /* Default to primary as suggested by user's recent edit */
      margin-left: 12px;
      text-transform: uppercase;
      letter-spacing: -0.01em;
      font-weight: 400;
    }

    .required::after {
      content: '*';
      color: var(--cml-color-error);
      margin-left: 2px;
    }

    /* Color variations sync with theme colors */
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
