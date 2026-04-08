import { html, css } from 'lit';
import { CamelotBaseMenu } from './CamelotBaseMenu';

/**
 * <CamelotCupertinoMenu>
 * Cupertino (iOS) 風格的選單組件。
 */
export class CamelotCupertinoMenu extends CamelotBaseMenu {
  static styles = [
    ...CamelotBaseMenu.styles,
    css`
      :host {
        background-color: transparent;
      }

      .menu-item {
        border-bottom: 0.5px solid var(--cml-color-outline-variant, rgba(0,0,0,0.1));
        min-height: 44px; /* iOS 標準列表高度 */
        padding: 0 16px;
        color: var(--cml-color-on-surface);
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
        font-size: 17px;
        letter-spacing: -0.41px;
        transition: background-color 0.1s;
      }

      .menu-item:active {
        background-color: rgba(0, 0, 0, 0.05);
      }

      .menu-item {
        margin: 2px 8px;
        border-radius: 8px;
        min-height: 40px;
        padding: 0 12px;
        font-size: 14px;
        transition: background-color 0.15s;
        color: var(--cml-color-on-surface);
      }

      .menu-item:hover {
        background-color: var(--cml-color-surface-container-high);
      }

      .is-selected > .menu-item {
        background-color: var(--cml-color-surface-container-highest);
        color: var(--cml-color-primary);
        font-weight: 600;
      }

      .is-active-parent > .menu-item {
        font-weight: 600;
        color: var(--cml-color-on-surface);
      }

      :host([mode="horizontal"]) .menu-item {
        border-bottom: none;
        padding: 0 10px;
        margin: 0 4px;
      }

      .menu-item-children {
        background-color: rgba(255, 255, 255, 0.7);
        backdrop-filter: blur(20px);
        -webkit-backdrop-filter: blur(20px);
        border: 0.5px solid rgba(0, 0, 0, 0.1);
        border-radius: 12px;
      }

      :host([collapsed]) .menu-item {
        margin: 4px;
        width: 44px;
        height: 44px;
        padding: 0;
      }

      .is-disabled > .menu-item {
        opacity: 0.3;
        pointer-events: none;
      }

      .menu-item-icon {
        color: var(--cml-color-primary);
        font-size: 22px;
        margin-right: 16px;
      }

      .is-selected > .menu-item .menu-item-icon {
        color: var(--cml-color-primary);
      }

      .menu-item-arrow {
        color: var(--cml-color-outline);
        transition: transform 0.2s;
      }

      .is-expanded > .menu-item .menu-item-arrow {
        transform: rotate(90deg);
      }

      /* iOS 風格縮進不只是空間，通常子選項背景會略有不同或縮排更多 */
      .menu-item-children {
        background-color: rgba(0, 0, 0, 0.02);
      }
    `
  ];

  protected renderArrow(isExpanded: boolean) {
    return html`
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="width: 16px; height: 16px;">
        <path d="m9 18 6-6-6-6"/>
      </svg>
    `;
  }
}

customElements.define('camelot-cupertino-menu', CamelotCupertinoMenu);
