import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('camelot-cupertino-badge')
export class CamelotCupertinoBadge extends LitElement {
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
      padding: 2px 10px;
      border-radius: 999px;
      font-family: var(--cml-font-family);
      font-size: 13px;
      font-weight: 500;
      white-space: nowrap;
      transition: opacity 0.2s;
    }

    /* Apple Colors */
    .filled.primary { background-color: #007AFF; color: #FFFFFF; }
    .filled.secondary { background-color: #8E8E93; color: #FFFFFF; }
    .filled.tertiary { background-color: #5856D6; color: #FFFFFF; }
    .filled.error { background-color: #FF3B30; color: #FFFFFF; }
    .filled.success { background-color: #34C759; color: #FFFFFF; }

    .outlined {
      background-color: transparent;
      border: 1px solid currentColor;
    }
    .outlined.primary { color: #007AFF; }
    .outlined.secondary { color: #8E8E93; }
    .outlined.tertiary { color: #5856D6; }
    .outlined.error { color: #FF3B30; }
    .outlined.success { color: #34C759; }
  `;

  render() {
    return html`<div class="badge ${this.variant} ${this.color}">${this.label}</div>`;
  }
}
