import { html, css } from 'lit';
import { CamelotBaseMenu } from './CamelotBaseMenu';

/**
 * <CamelotSoftMenu>
 * Soft UI (Neumorphism) 風格的選單組件。
 */
export class CamelotSoftMenu extends CamelotBaseMenu {
  static styles = [
    ...CamelotBaseMenu.styles,
    css`
      :host {
        background-color: transparent;
      }

      .menu-item {
        margin: 8px 16px;
        padding: 12px 20px;
        border-radius: 16px;
        color: var(--cml-color-on-surface);
        font-weight: 600;
        transition: all 0.3s ease;
        background: var(--cml-color-background);
        box-shadow: 
          4px 4px 8px var(--cml-soft-color-dark, rgba(0,0,0,0.1)),
          -4px -4px 8px var(--cml-soft-color-light, rgba(255,255,255,0.8));
      }

      .menu-item:hover {
        transform: translateY(-1px);
        box-shadow: 
          6px 6px 12px var(--cml-soft-color-dark),
          -6px -6px 12px var(--cml-soft-color-light);
      }

      .is-selected .menu-item {
        color: var(--cml-color-current-color);
        box-shadow: 
          inset 4px 4px 8px var(--cml-soft-color-dark),
          inset -4px -4px 8px var(--cml-soft-color-light);
      }

      .is-active-parent .menu-item {
        color: var(--cml-color-current-color);
        border: 1px solid rgba(0,0,0,0.05);
      }

      /* Clean Sub-menu: No block shadows */
      .menu-item-children {
        background-color: transparent;
        margin-left: 12px;
        border-left: 2px solid rgba(0,0,0,0.05);
        margin-top: 4px;
        margin-bottom: 4px;
        padding-left: 0;
      }

      /* Popover Styles (Horizontal/Collapsed) */
      :host([collapsed]) .menu-item-children {
        background: var(--cml-color-background);
        border-radius: 24px;
        box-shadow: 12px 12px 32px rgba(0,0,0,0.2); /* Stronger shadow instead of border */
        margin-left: -12px;
        padding: 4px; /* Tighten container */
      }

      :host([collapsed]) .camelot-menu-root > .menu-list.level-0 > .menu-item-container > .menu-item {
        margin: 8px;
        width: 48px;
        height: 48px;
        padding: 0;
        justify-content: center;
      }

      .menu-item-children .menu-item {
        width: auto !important;
        margin: 12px 16px; /* Increased from 4px 8px */
        padding: 12px 20px;
        justify-content: flex-start;
      }

      .menu-item-icon { margin-right: 12px; }
      :host([collapsed]) .menu-item-icon { margin-right: 0; }
    `
  ];

  protected renderArrow(isExpanded: boolean, isRight = false) {
    const rotation = isRight ? '0deg' : (isExpanded ? '90deg' : '0deg');
    return html`
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" style="width: 14px; height: 14px; transition: transform 0.3s; transform: rotate(${rotation})">
        <path d="m9 18 6-6-6-6"/>
      </svg>
    `;
  }
}

customElements.define('camelot-soft-menu', CamelotSoftMenu);
