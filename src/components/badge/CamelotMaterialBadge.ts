import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('camelot-material-badge')
export class CamelotMaterialBadge extends LitElement {
  @property({ type: String })
  label: string = '';

  @property({ type: String })
  variant: string = 'primary';

  static styles = css`
    :host {
      display: inline-block;
    }
    .badge {
      display: flex;
      align-items: center;
      padding: 2px 12px;
      border-radius: 8px;
      font-family: var(--cml-font-family);
      font-size: 12px;
      font-weight: var(--cml-font-weight-medium);
      white-space: nowrap;
    }
    .primary { background-color: var(--cml-color-primary-container); color: var(--cml-color-on-primary-container); }
    .secondary { background-color: var(--cml-color-secondary-container); color: var(--cml-color-on-secondary-container); }
    .error { background-color: var(--cml-color-error-container, #F9DEDC); color: var(--cml-color-on-error-container, #410E0B); }
    .success { background-color: #C1E1C1; color: #1E4D2B; }
  `;

  render() {
    return html`<div class="badge ${this.variant}">${this.label}</div>`;
  }
}
