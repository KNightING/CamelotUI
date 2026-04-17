import { html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { CamelotBaseElement } from '../base/CamelotBaseElement';
import '../label/CamelotLabel';

@customElement('camelot-cupertino-badge')
export class CamelotCupertinoBadge extends CamelotBaseElement {
  @property({ type: String })
  label: string = '';


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
      font-size: 0.8125rem;
      font-weight: 500;
      white-space: nowrap;
      transition: opacity 0.2s;
    }

    /* Cupertino Styles using proxy variables */
    .filled {
      background-color: var(--cml-color-current-color);
      color: var(--cml-color-current-on-color);
    }
    
    .outlined {
      background-color: transparent;
      border: 1px solid var(--cml-color-current-color);
      color: var(--cml-color-current-color);
    }
  `;

  render() {
    return html`<div class="badge ${this.variant}">${this.label}</div>`;
  }
}
