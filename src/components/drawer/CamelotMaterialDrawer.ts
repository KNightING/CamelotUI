import { html, css } from 'lit';
import { property } from 'lit/decorators.js';
import { CamelotBaseDrawer } from './CamelotBaseDrawer';

/**
 * <CamelotMaterialDrawer>
 * Material 3 風格的抽屜元件。
 */
export class CamelotMaterialDrawer extends CamelotBaseDrawer {
  @property({ type: String })
  headline?: string;

  static styles = [
    ...CamelotBaseDrawer.styles,
    css`
      :host {
      }

      .drawer-content {
        padding: 0;
        border-radius: 0;
        background: var(--cml-color-surface-container-low, #fff);
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
      }

      :host([anchor="bottom"]) .drawer-content {
        border-top-left-radius: 28px;
        border-top-right-radius: 28px;
      }

      .header {
        padding: 24px 16px 16px 28px;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      .headline {
        margin: 0;
        font-family: var(--md-sys-typescale-title-small-font-family, inherit);
        font-size: var(--md-sys-typescale-title-small-font-size, 14px);
        font-weight: var(--md-sys-typescale-title-small-font-weight, 500);
        color: var(--md-sys-color-on-surface-variant, #49454f);
      }

      .footer {
        padding: 16px 24px;
        display: flex;
        justify-content: flex-end;
        gap: 8px;
      }

      .body {
        flex: 1;
        overflow-y: auto;
        padding: 16px;
      }
    `
  ];

  protected renderContent() {
    return html`
      ${this.headline || this._hasSlot('header') ? html`
        <header class="header">
          <slot name="header">
            <h2 class="headline">${this.headline}</h2>
          </slot>
        </header>
      ` : ''}

      <div class="body">
        <slot></slot>
      </div>

      <footer class="footer">
        <slot name="footer"></slot>
      </footer>
    `;
  }

  private _hasSlot(name: string) {
    return !!Array.from(this.children).find(child => child.getAttribute('slot') === name);
  }
}

customElements.define('camelot-material-drawer', CamelotMaterialDrawer);
