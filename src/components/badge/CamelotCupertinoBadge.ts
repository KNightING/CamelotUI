import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('camelot-cupertino-badge')
export class CamelotCupertinoBadge extends LitElement {
  @property({ type: String })
  label: string = '';

  @property({ type: String })
  variant: string = 'primary';

  static styles = css`
    :host {
      display: inline-block;
    }
    .badge {
      padding: 0 8px;
      border-radius: 4px;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto;
      font-size: 13px;
      font-weight: 500;
      color: #FFFFFF;
    }
    .primary { background-color: #007AFF; }
    .secondary { background-color: #8E8E93; }
    .error { background-color: #FF3B30; }
    .success { background-color: #34C759; }
  `;

  render() {
    return html`<div class="badge ${this.variant}">${this.label}</div>`;
  }
}
