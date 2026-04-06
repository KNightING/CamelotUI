import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('camelot-soft-card')
export class CamelotSoftCard extends LitElement {
  @property({ type: String })
  padding: string = '16px';

  static styles = css`
    :host {
      display: block;
      background-color: var(--cml-color-background);
      border-radius: var(--cml-radius-m);
      box-shadow: 
        var(--cml-soft-distance) var(--cml-soft-distance) var(--cml-soft-blur) var(--cml-soft-color-dark), 
        calc(-1 * var(--cml-soft-distance)) calc(-1 * var(--cml-soft-distance)) var(--cml-soft-blur) var(--cml-soft-color-light);
      overflow: hidden;
      transition: box-shadow 0.3s;
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
