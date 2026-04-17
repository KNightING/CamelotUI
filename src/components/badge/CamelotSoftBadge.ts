import { html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { CamelotBaseElement } from '../base/CamelotBaseElement';

@customElement('camelot-soft-badge')
export class CamelotSoftBadge extends CamelotBaseElement {
  @property({ type: String })
  label: string = '';


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
      font-size: 0.6875rem;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      background: var(--cml-color-background);
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      white-space: nowrap;
      color: var(--cml-color-current-color);
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

  `;

  render() {
    return html`<div class="badge ${this.variant}">${this.label}</div>`;
  }
}
