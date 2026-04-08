import { html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { CamelotBaseMenu } from './CamelotBaseMenu';

/**
 * <CamelotScifiMenu>
 * 日系科幻風格 (Sci-fi HUD) 的選單組件
 * 視覺重點：掃描動畫、技術編號、高對比邊框
 */
@customElement('camelot-scifi-menu')
export class CamelotScifiMenu extends CamelotBaseMenu {
  static styles = [
    ...CamelotBaseMenu.styles,
    css`
      :host {
        font-family: 'Share Tech Mono', 'Roboto Mono', monospace;
        --cml-scifi-accent: var(--cml-scifi-highlight, #ffffff);
        --cml-scifi-primary: var(--cml-color-primary);
      }

      .camelot-menu-root {
        background: rgba(5, 8, 10, 0.4);
        border: 1px solid var(--cml-scifi-accent);
        padding: 12px 0;
        position: relative;
        overflow: hidden;
        counter-reset: menu-counter;
      }

      /* 選單整體的掃描線動畫 */
      @keyframes menu-scan {
        0% { transform: translateY(-100%); }
        100% { transform: translateY(100%); }
      }

      .camelot-menu-root::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 2px;
        background: color-mix(in srgb, var(--cml-scifi-primary), transparent 85%);
        animation: menu-scan 3s linear infinite;
        pointer-events: none;
        z-index: 10;
      }

      .menu-item {
        counter-increment: menu-counter;
        position: relative;
        min-height: 44px;
        transition: all 0.2s cubic-bezier(0.19, 1, 0.22, 1);
        text-transform: uppercase;
        letter-spacing: 0.15em;
        font-size: 0.85rem;
        background: transparent;
        color: var(--cml-scifi-accent);
        display: flex;
        align-items: center;
        padding: 0 16px;
      }

      /* 技術編號前綴裝飾 */
      .menu-item-label::before {
        content: '[' counter(menu-counter, decimal-leading-zero) '] ';
        opacity: 0.5;
        font-size: 0.7rem;
        margin-right: 8px;
        font-family: inherit;
      }

      /* Hover 效果：邊界括號鎖定感 */
      .menu-item:hover:not(.is-disabled) {
        background: rgba(0, 243, 255, 0.08);
        color: var(--cml-scifi-primary);
        padding-left: 24px;
      }

      /* 選取狀態：高對比框線與發光 */
      .menu-item-container.is-selected > .menu-item {
        color: var(--cml-scifi-primary);
        background: color-mix(in srgb, var(--cml-scifi-primary), transparent 85%);
        border: 1px solid var(--cml-scifi-primary);
        text-shadow: 0 0 10px var(--cml-scifi-primary);
        margin: 0 8px;
        box-shadow: inset 0 0 10px color-mix(in srgb, var(--cml-scifi-primary), transparent 80%);
      }

      /* 子選單彈出框設計 */
      :host([mode="horizontal"]) .menu-item-children,
      :host([collapsed]) .menu-item-children {
        background: rgba(5, 8, 10, 0.98);
        backdrop-filter: blur(15px);
        border: 1px solid var(--cml-scifi-accent);
        box-shadow: 0 0 30px rgba(0, 0, 0, 0.8), 0 0 10px rgba(0, 243, 255, 0.2);
        padding: 8px 0;
      }

      /* 圖標與文字樣式 */
      .menu-item-icon {
        color: var(--cml-scifi-primary);
        filter: drop-shadow(0 0 5px var(--cml-scifi-primary));
        margin-right: 12px;
      }

      .arrow {
        font-size: 0.6rem;
        margin-left: auto;
        opacity: 0.5;
      }

      /* 收合模式下的圓形裝飾 */
      :host([collapsed]) .menu-item {
        justify-content: center;
        padding: 0;
      }
      
      /* 選單裝飾座標文字 */
      .camelot-menu-root::before {
        content: 'MENU_SYSTEM_v2.0 // AUTH_OK';
        position: absolute;
        top: 2px;
        right: 4px;
        font-size: 0.5rem;
        opacity: 0.3;
        pointer-events: none;
      }
    `
  ];

  // 我們需要稍微修改 renderItem 來注入 index 作為 data-index 屬性，
  // 這裡我們暫時透過 label 拼接或者在 BaseMenu 提供更多 context。
  // 由於我們繼承自 BaseMenu，我們可以使用其 render 方法，
  // 但為了 Sci-fi 特有的 index 裝飾，我們在此微調 label 渲染。
  
  protected render() {
    // 渲染邏輯維持不變，但在 CSS 中利用 data-index (如果有的話)
    return super.render();
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'camelot-scifi-menu': CamelotScifiMenu;
  }
}
