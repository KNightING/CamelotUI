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
      }

      .drawer-content {
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.3);
        background: color-mix(in srgb, var(--cml-color-surface, #fff), transparent 40%);
        margin: 0;
        border-radius: 0;
        overflow: hidden;
      }

      :host([anchor="bottom"]) .drawer-content {
        width: 100vw;
        height: auto;
        border-top-left-radius: 30px;
        border-top-right-radius: 30px;
      }

      :host([anchor="top"]) .drawer-content {
        width: 100vw;
        height: auto;
        border-bottom-left-radius: 30px;
        border-bottom-right-radius: 30px;
      }

      :host([anchor="left"]) .drawer-content {
        height: 100dvh;
        width: var(--cml-drawer-width);
        border-top-right-radius: 30px;
        border-bottom-right-radius: 30px;
      }

      :host([anchor="right"]) .drawer-content {
        height: 100dvh;
        width: var(--cml-drawer-width);
        border-top-left-radius: 30px;
        border-bottom-left-radius: 30px;
      }

      .header {
        padding: 24px 24px 12px;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      .title {
        margin: 0;
        font-family: inherit;
        font-size: 20px;
        font-weight: 700;
        color: #444;
      }

      .body {
        padding: 24px;
        overflow-y: auto;
      }

      @media (prefers-color-scheme: dark) {
        :host {
          --cml-drawer-bg: rgba(45, 45, 45, 0.7);
          --cml-drawer-shadow: 10px 10px 30px rgba(0,0,0,0.5), -10px -10px 30px rgba(80,80,80,0.2);
        }
        .title {
          color: #eee;
        }
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
