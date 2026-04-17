import { html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { CamelotBaseElement } from '../base/CamelotBaseElement';

@customElement('camelot-material-badge')
export class CamelotMaterialBadge extends CamelotBaseElement {
  @property({ type: String })
  label: string = '';


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
    .filled {
      background-color: var(--cml-color-current-color);
      color: var(--cml-color-current-on-color);
    }
    
    /* Outlined Styles */
    .outlined {
      background-color: transparent;
      color: var(--cml-color-current-color);
      border: 1px solid var(--cml-color-current-outline);
    }
  `;

  protected updated(changedProperties: Map<string | number | symbol, unknown>) {
    super.updated(changedProperties);
    if (changedProperties.has('variant')) {
      this.isContainer = this.variant === 'filled';
    }
  }

  render() {
    return html`<div class="badge ${this.variant}">${this.label}</div>`;
  }
}
