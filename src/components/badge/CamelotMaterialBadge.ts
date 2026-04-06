import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('camelot-material-badge')
export class CamelotMaterialBadge extends LitElement {
  @property({ type: String })
  label: string = '';

  @property({ type: String })
  color: 'primary' | 'secondary' | 'tertiary' | 'error' | 'success' = 'primary';

  @property({ type: String })
  variant: 'filled' | 'outlined' = 'filled';

  static styles = css`
    :host {
      display: inline-block;
    }
    .badge {
      display: flex;
      align-items: center;
      padding: 2px 8px;
      border-radius: 6px;
      font-family: var(--cml-font-family);
      font-size: 0.6875rem;
      font-weight: var(--cml-font-weight-medium);
      white-space: nowrap;
      transition: all 0.2s;
    }

    /* Filled Styles */
    .filled.primary { background-color: var(--cml-color-primary-container); color: var(--cml-color-on-primary-container); }
    .filled.secondary { background-color: var(--cml-color-secondary-container); color: var(--cml-color-on-secondary-container); }
    .filled.tertiary { background-color: var(--cml-color-tertiary-container); color: var(--cml-color-on-tertiary-container); }
    .filled.error { background-color: var(--cml-color-error-container); color: var(--cml-color-on-error-container); }
    .filled.success { background-color: #C1E1C1; color: #1E4D2B; }

    /* Outlined Styles */
    .outlined {
      background-color: transparent;
      border: 1px solid currentColor;
    }
    .outlined.primary { color: var(--cml-color-primary); border-color: var(--cml-color-outline); }
    .outlined.secondary { color: var(--cml-color-secondary); border-color: var(--cml-color-outline); }
    .outlined.tertiary { color: var(--cml-color-tertiary); border-color: var(--cml-color-outline); }
    .outlined.error { color: var(--cml-color-error); border-color: var(--cml-color-error); }
    .outlined.success { color: #2E7D32; border-color: #2E7D32; }
  `;

  render() {
    return html`<div class="badge ${this.variant} ${this.color}">${this.label}</div>`;
  }
}
