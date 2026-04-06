import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('camelot-cupertino-card')
export class CamelotCupertinoCard extends LitElement {
  @property({ type: String })
  padding: string = '16px';

  static styles = css`
    :host {
      display: block;
      background-color: var(--cml-color-surface);
      border-radius: var(--cml-radius-m);
      border: 0.5px solid var(--cml-color-outline-variant);
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03);
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
