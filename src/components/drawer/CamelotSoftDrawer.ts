import { html, css } from 'lit';
import { property } from 'lit/decorators.js';
import { CamelotBaseDrawer } from './CamelotBaseDrawer';

/**
 * <CamelotSoftDrawer>
 * Soft UI 風格的抽屜元件。
 */
export class CamelotSoftDrawer extends CamelotBaseDrawer {
  @property({ type: String })
  label?: string;

  static styles = [
    ...CamelotBaseDrawer.styles,
    css`
      :host {
        /* Soft UI variables for the component scope */
        --cml-soft-shadow: 
          10px 10px 20px var(--cml-soft-color-dark), 
          -10px -10px 20px var(--cml-soft-color-light);
      }

      .drawer-content {
        background: var(--cml-color-background);
        border: none;
        margin: 0;
        border-radius: 0;
        overflow: hidden;
        box-shadow: var(--cml-soft-shadow);
      }

      :host([anchor="bottom"]) .drawer-content {
        width: 100vw;
        height: auto;
        border-top-left-radius: 40px;
        border-top-right-radius: 40px;
        /* Shadow only towards top */
        box-shadow: 0 -10px 30px var(--cml-soft-color-dark), 0 -5px 15px var(--cml-soft-color-light);
      }

      :host([anchor="top"]) .drawer-content {
        width: 100vw;
        height: auto;
        border-bottom-left-radius: 40px;
        border-bottom-right-radius: 40px;
        /* Shadow only towards bottom */
        box-shadow: 0 10px 30px var(--cml-soft-color-dark), 0 5px 15px var(--cml-soft-color-light);
      }

      :host([anchor="left"]) .drawer-content {
        height: 100dvh;
        width: var(--cml-drawer-width);
        border-top-right-radius: 40px;
        border-bottom-right-radius: 40px;
        /* Shadow only towards right */
        box-shadow: 10px 0 30px var(--cml-soft-color-dark), 5px 0 15px var(--cml-soft-color-light);
      }

      :host([anchor="right"]) .drawer-content {
        height: 100dvh;
        width: var(--cml-drawer-width);
        border-top-left-radius: 40px;
        border-bottom-left-radius: 40px;
        /* Shadow only towards left */
        box-shadow: -10px 0 30px var(--cml-soft-color-dark), -5px 0 15px var(--cml-soft-color-light);
      }

      .header {
        padding: 32px 32px 16px;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      .title {
        margin: 0;
        font-family: inherit;
        font-size: 24px;
        font-weight: 800;
        color: var(--cml-color-current-color);
        letter-spacing: -0.5px;
      }

      .body {
        padding: 0 32px 32px;
        overflow-y: auto;
      }

    `
  ];

  protected renderContent() {
    return html`
      <header class="header">
        <h2 class="title">${this.label}</h2>
        <slot name="header-actions"></slot>
      </header>

      <div class="body">
        <slot></slot>
      </div>
      
      <footer class="footer">
        <slot name="footer"></slot>
      </footer>
    `;
  }
}

customElements.define('camelot-soft-drawer', CamelotSoftDrawer);
