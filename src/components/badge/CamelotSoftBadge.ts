import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('camelot-soft-badge')
export class CamelotSoftBadge extends LitElement {
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
      padding: 4px 14px;
      border-radius: 999px;
      font-family: var(--cml-font-family);
      font-size: 11px;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      background: var(--cml-color-background);
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      white-space: nowrap;
    }

    /* Filled - Classic Neumorphism */
    .filled {
      box-shadow: 
        var(--cml-soft-distance) var(--cml-soft-distance) var(--cml-soft-blur) var(--cml-soft-color-dark), 
        calc(-1 * var(--cml-soft-distance)) calc(-1 * var(--cml-soft-distance)) var(--cml-soft-blur) var(--cml-soft-color-light);
    }

    /* Outlined - Subtle Inset or Border */
    .outlined {
      border: 1px solid rgba(0, 0, 0, 0.05);
      box-shadow: 
        inset calc(var(--cml-soft-distance)/2) calc(var(--cml-soft-distance)/2) calc(var(--cml-soft-blur)/2) var(--cml-soft-color-dark), 
        inset calc(-1 * var(--cml-soft-distance)/2) calc(-1 * var(--cml-soft-distance)/2) calc(var(--cml-soft-blur)/2) var(--cml-soft-color-light);
    }

    .primary { color: var(--cml-color-primary); }
    .secondary { color: var(--cml-color-secondary); }
    .tertiary { color: var(--cml-color-tertiary); }
    .error { color: #FF3B30; }
    .success { color: #34C759; }
  `;

  render() {
    return html`<div class="badge ${this.variant} ${this.color}">${this.label}</div>`;
  }
}
