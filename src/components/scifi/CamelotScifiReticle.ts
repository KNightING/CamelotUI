import { html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { CamelotScifiBase } from './CamelotScifiBase';

/**
 * <camelot-scifi-reticle>
 * 日系科幻風格的鎖定括號組件 (HUD Brackets)
 * 可放置於任何容器內，提供「鎖定」動畫特效。
 * 已優化：與 CamelotBaseElement 主題邏輯完全整合。
 */
@customElement('camelot-scifi-reticle')
export class CamelotScifiReticle extends CamelotScifiBase {
  /** 是否處於鎖定狀態 */
  @property({ type: Boolean, reflect: true })
  active: boolean = false;

  /** 是否啟用自動 Hover 鎖定效果 */
  @property({ type: Boolean, reflect: true })
  hoverable: boolean = false;

  static styles = [
    css`
      :host {
        display: block;
        position: absolute;
        inset: -8px; 
        pointer-events: none;
        z-index: 10;
        
        /* 使用統一主題變數 */
        --cml-reticle-color: var(--cml-color-current-color);
      }

      /* 為了支持 hoverable, 我們讓 host 在 hoverable 模式下接收指針事件 */
      :host([hoverable]) {
        pointer-events: auto;
      }

      .bracket {
        position: absolute;
        width: 12px; 
        height: 12px;
        border: 2px solid var(--cml-reticle-color);
        transition: all 0.3s cubic-bezier(0.19, 1, 0.22, 1);
        opacity: 0;
      }

      .top-left { top: 0; left: 0; border-right: none; border-bottom: none; transform: translate(-12px, -12px); }
      .top-right { top: 0; right: 0; border-left: none; border-bottom: none; transform: translate(12px, -12px); }
      .bottom-left { bottom: 0; left: 0; border-right: none; border-top: none; transform: translate(-12px, 12px); }
      .bottom-right { bottom: 0; right: 0; border-left: none; border-top: none; transform: translate(12px, 12px); }

      /* Active 或 Hoverable 模式下的 Hover 鎖定狀態 */
      :host([active]) .bracket,
      :host(:hover) .bracket {
        opacity: 1;
        filter: drop-shadow(0 0 5px var(--cml-reticle-color));
      }

      /* 平移歸零 */
      :host([active]) .top-left, :host(:hover) .top-left { transform: translate(0, 0); }
      :host([active]) .top-right, :host(:hover) .top-right { transform: translate(0, 0); }
      :host([active]) .bottom-left, :host(:hover) .bottom-left { transform: translate(0, 0); }
      :host([active]) .bottom-right, :host(:hover) .bottom-right { transform: translate(0, 0); }
    `
  ];

  render() {
    return html`
      <div class="bracket top-left"></div>
      <div class="bracket top-right"></div>
      <div class="bracket bottom-left"></div>
      <div class="bracket bottom-right"></div>
    `;
  }

  /**
   * 覆寫基礎類別的變數注入邏輯
   * ScifiReticle 作為裝飾元件，預設應繼承父層的 --cml-color-current 變數。
   */
  protected _updateCurrentColors() {
    // 故意留空：實現繼承，不主動根據自己的屬性設定 CSS 變數。
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'camelot-scifi-reticle': CamelotScifiReticle;
  }
}
