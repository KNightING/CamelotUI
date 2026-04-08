import { html, css } from 'lit';
import { property } from 'lit/decorators.js';
import { CamelotBaseDrawer } from './CamelotBaseDrawer';

/**
 * <CamelotCupertinoDrawer>
 * Cupertino (iOS) 風格的抽屜元件。
 */
export class CamelotCupertinoDrawer extends CamelotBaseDrawer {
  @property({ type: String })
  label?: string;

  static styles = [
    ...CamelotBaseDrawer.styles,
    css`
      :host {
      }

      .drawer-content {
        backdrop-filter: blur(20px) saturate(180%);
        -webkit-backdrop-filter: blur(20px) saturate(180%);
        border: 1px solid rgba(255, 255, 255, 0.3);
        background: color-mix(in srgb, var(--cml-color-surface, #fff), transparent 25%);
      }

      :host([anchor="bottom"]) .drawer-content {
        border-top-left-radius: 28px;
        border-top-right-radius: 28px;
        margin: 0;
        width: 100vw;
        box-sizing: border-box;
      }

      :host([anchor="left"]) .drawer-content,
      :host([anchor="right"]) .drawer-content {
        margin: 0;
        height: 100dvh;
        width: var(--cml-drawer-width);
      }

      :host([anchor="left"]) .drawer-content {
        border-top-right-radius: 28px;
        border-bottom-right-radius: 28px;
      }

      :host([anchor="right"]) .drawer-content {
        border-top-left-radius: 28px;
        border-bottom-left-radius: 28px;
      }

      :host([anchor="top"]) .drawer-content {
        border-bottom-left-radius: 28px;
        border-bottom-right-radius: 28px;
        margin: 0;
        width: 100vw;
        box-sizing: border-box;
      }

      .header {
        padding: 16px;
        text-align: center;
        border-bottom: 0.5px solid rgba(0, 0, 0, 0.1);
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
      }

      .title {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
        font-size: 17px;
        font-weight: 600;
        color: #000;
      }

      .close-button {
        position: absolute;
        right: 16px;
        color: #007AFF;
        background: none;
        border: none;
        font-size: 17px;
        cursor: pointer;
      }

      .body {
        padding: 16px;
        overflow-y: auto;
      }

      @media (prefers-color-scheme: dark) {
        :host {
          --cml-drawer-bg: rgba(28, 28, 30, 0.75);
        }
        .title {
          color: #fff;
        }
        .header {
          border-bottom-color: rgba(255, 255, 255, 0.1);
        }
      }
    `
  ];

  protected renderContent() {
    return html`
      <header class="header">
        <h2 class="title">${this.label}</h2>
        <button class="close-button" @click="${this.hide}">Done</button>
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

customElements.define('camelot-cupertino-drawer', CamelotCupertinoDrawer);
