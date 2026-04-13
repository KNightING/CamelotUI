import { html, css } from 'lit';
import { CamelotBaseMenu } from './CamelotBaseMenu';
/**
 * <CamelotMaterialMenu>
 * Material 3 風格的選單組件。
 */
export class CamelotMaterialMenu extends CamelotBaseMenu {
    static { this.styles = [
        ...CamelotBaseMenu.styles,
        css `
      :host {
        --cml-m3-radius: 28px;
        --cml-m3-item-height: 56px;
      }

      .menu-item {
        margin: 4px 12px;
        border-radius: var(--cml-m3-radius);
        min-height: var(--cml-m3-item-height);
        padding: 0 16px;
        transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        color: var(--cml-color-on-surface-variant);
      }

      .menu-item:hover {
        background-color: var(--cml-color-surface-container-high);
      }

      .is-selected .menu-item {
        background-color: var(--cml-color-primary-container) !important;
        color: var(--cml-color-on-primary-container) !important;
        font-weight: var(--cml-font-weight-bold);
      }

      .is-active-parent > .menu-item {
        color: var(--cml-color-primary);
        font-weight: var(--cml-font-weight-bold);
      }

      :host([mode="horizontal"]) .menu-item {
        min-height: 48px;
        margin: 4px;
        padding: 0 16px;
      }

      .menu-item-children {
        background-color: var(--cml-color-surface-container-low);
        border-radius: 16px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
      }

      :host([collapsed]) .camelot-menu-root > .menu-list.level-0 > .menu-item-container > .menu-item {
        margin: 4px;
        width: 56px;
        height: 56px;
        padding: 0;
        border-radius: 28px;
        justify-content: center;
      }

      .menu-item-children .menu-item {
        width: auto !important;
        height: var(--cml-m3-item-height);
        padding: 0 16px;
        margin: 8px 12px; /* Increased from 4px */
      }

      .is-disabled > .menu-item {
        opacity: 0.38;
        pointer-events: none;
      }

      .menu-item-icon { font-size: 20px; }
      .menu-item-arrow { margin-left: 8px; font-size: 12px; transition: transform 0.2s; }
      .is-expanded > .menu-item .menu-item-arrow { transform: rotate(180deg); }
    `
    ]; }
    renderArrow(isExpanded, isRight = false) {
        const rotation = isRight ? '-90deg' : (isExpanded ? '180deg' : '0deg');
        return html `
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width: 18px; height: 18px; transition: transform 0.2s; transform: rotate(${rotation});">
        <path d="m6 9 6 6 6-6"/>
      </svg>
    `;
    }
}
customElements.define('camelot-material-menu', CamelotMaterialMenu);
//# sourceMappingURL=CamelotMaterialMenu.js.map