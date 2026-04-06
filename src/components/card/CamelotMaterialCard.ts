import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('camelot-material-card')
export class CamelotMaterialCard extends LitElement {
  @property({ type: String })
  padding: string = '16px';

  static styles = css`
    :host {
      display: block;
      background-color: var(--cml-color-surface);
      border-radius: var(--cml-radius-m);
      border: 1px solid var(--cml-color-outline-variant);
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
      overflow: hidden;
    }

    .content {
      padding: var(--padding, 16px);
    }
  `;

  render() {
    return html`
      <div class="content" style="--padding: ${this.padding}">
        <slot></slot>
      </div>
    `;
  }
}
