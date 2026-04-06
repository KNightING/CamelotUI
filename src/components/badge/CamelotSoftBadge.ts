import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('camelot-soft-badge')
export class CamelotSoftBadge extends LitElement {
  @property({ type: String })
  label: string = '';

  @property({ type: String })
  variant: string = 'primary';

  static styles = css`
    :host {
      display: inline-block;
    }
    .badge {
      padding: 4px 14px;
      border-radius: 12px;
      font-family: var(--cml-font-family);
      font-size: 11px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      background: var(--cml-color-background);
      box-shadow: 
        var(--cml-soft-distance) var(--cml-soft-distance) var(--cml-soft-blur) var(--cml-soft-color-dark), 
        calc(-1 * var(--cml-soft-distance)) calc(-1 * var(--cml-soft-distance)) var(--cml-soft-blur) var(--cml-soft-color-light);
    }
    .primary { color: var(--cml-color-primary); }
    .secondary { color: var(--cml-color-on-background); opacity: 0.6; }
    .error { color: #D32F2F; }
    .success { color: #388E3C; }
  `;

  render() {
    return html`<div class="badge ${this.variant}">${this.label}</div>`;
  }
}
