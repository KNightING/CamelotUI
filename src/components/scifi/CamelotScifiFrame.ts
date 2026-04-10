import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * <camelot-scifi-frame>
 * 日系科幻風格 (Sci-fi HUD) 的統一外殼組件。
 * 提供切角 (Cut-corner)、網格背景 (Grid)、掃描線 (Scanline) 與焦點發光效果。
 * 
 * 使用方式：
 * <camelot-scifi-frame 
 *   variant="4-corner" 
 *   ?focused="${this._isFocused}"
 *   ?showGrid="${true}">
 *   <slot></slot>
 * </camelot-scifi-frame>
 */
@customElement('camelot-scifi-frame')
export class CamelotScifiFrame extends LitElement {
  /** 框架變體: 2-corner (對角切) 或 4-corner (四角皆切) */
  @property({ type: String, reflect: true })
  variant: '2-corner' | '4-corner' = '2-corner';

  /** 是否顯示網格背景 */
  @property({ type: Boolean, reflect: true, attribute: 'show-grid' })
  showGrid: boolean = true;

  /** 是否顯示掃描線動畫 */
  @property({ type: Boolean, reflect: true, attribute: 'show-scanline' })
  showScanline: boolean = true;

  /** 是否處於獲取焦點狀態 (顯示發光邊框) */
  @property({ type: Boolean, reflect: true })
  focused: boolean = false;

  /** 是否填滿背景色 */
  @property({ type: Boolean, reflect: true })
  filled: boolean = false;

  /** 顏色類型 */
  @property({ type: String, reflect: true })
  color: 'primary' | 'secondary' | 'tertiary' = 'primary';

  /** 是否顯示滑動流光特效 */
  @property({ type: Boolean, reflect: true })
  showShine: boolean = false;

  /** 是否顯示鎖定準心 (Reticle) */
  @property({ type: Boolean, reflect: true })
  activeReticle: boolean = false;
  
  /** 是否顯示外框線 */
  @property({ type: Boolean, reflect: true, attribute: 'show-borders' })
  showBorders: boolean = true;

  /** 是否顯示 L 型端角補強裝飾 */
  @property({ type: Boolean, reflect: true, attribute: 'show-corners' })
  showCorners: boolean = true;

  static styles = css`
    :host {
      display: block;
      position: relative;
      box-sizing: border-box;
      transition: all 0.3s ease;
      
      --cml-scifi-color: var(--cml-color-primary);
      --cml-frame-clip: polygon(
        0% 0%, calc(100% - 10px) 0%, 100% 10px, 
        100% 100%, 10px 100%, 0% calc(100% - 10px)
      );
    }

    :host([variant="4-corner"]) {
      --cml-frame-clip: polygon(
        10px 0%, calc(100% - 10px) 0%, 100% 10px, 100% calc(100% - 10px),
        calc(100% - 10px) 100%, 10px 100%, 0% calc(100% - 10px), 0% 10px
      );
    }

    :host([color="secondary"]) { --cml-scifi-color: var(--cml-color-secondary); }
    :host([color="tertiary"]) { --cml-scifi-color: var(--cml-color-tertiary); }

    .frame-container {
      position: relative;
      width: 100%;
      height: 100%;
      min-height: inherit;
      background: color-mix(in srgb, var(--cml-scifi-color) 40%, transparent); /* 邊框色 */
      clip-path: var(--cml-frame-clip);
      padding: 1px; /* 邊框寬度 */
      box-sizing: border-box;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      transition: background 0.3s ease;
    }

    :host(:not([show-borders])) .frame-container {
      background: transparent !important;
      border: none !important;
    }
    :host(:not([show-borders])) .frame-inner {
      background: transparent !important;
    }

    .frame-inner {
      position: relative;
      width: 100%;
      height: 100%;
      background: color-mix(in srgb, var(--cml-scifi-color) var(--cml-scifi-bg-opacity, 5%), #000);
      clip-path: var(--cml-frame-clip); /* 內部也進行同樣裁切 */
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      overflow: hidden;
      flex: 1;
    }

    :host([filled]) .frame-container {
      background: var(--cml-scifi-color);
    }
    :host([filled]) .frame-inner {
      background: var(--cml-scifi-color);
    }

    /* 焦點發光效果 (Glow) */
    :host([focused]) .frame-container {
      background: var(--cml-scifi-color);
      box-shadow: inset 0 0 15px color-mix(in srgb, var(--cml-scifi-color) 40%, transparent);
      filter: drop-shadow(0 0 4px color-mix(in srgb, var(--cml-scifi-color) 60%, transparent));
    }

    /* 滑動流光特效 (Shine Glide) */
    .shine-glide {
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        90deg,
        transparent,
        rgba(255, 255, 255, 0.2) 50%,
        transparent
      );
      transform: skewX(-25deg);
      pointer-events: none;
      z-index: 10; /* Ensure shine is visible on top of everything if needed, but not blocking text */
      opacity: 0;
    }

    :host([showShine]) .shine-glide {
      animation: shine-glide-anim 1s cubic-bezier(0.19, 1, 0.22, 1);
    }

    @keyframes shine-glide-anim {
      0% { left: -100%; opacity: 0; }
      20% { opacity: 1; }
      80% { opacity: 1; }
      100% { left: 100%; opacity: 0; }
    }

    /* 網格背景 */
    .grid-bg {
      position: absolute;
      inset: 0;
      background-image: 
        linear-gradient(color-mix(in srgb, var(--cml-scifi-color) 10%, transparent) 1px, transparent 1px),
        linear-gradient(90deg, color-mix(in srgb, var(--cml-scifi-color) 10%, transparent) 1px, transparent 1px);
      background-size: 15px 15px;
      pointer-events: none;
      z-index: 0;
      display: none;
    }
    :host([show-grid]) .grid-bg {
      display: block;
    }

    /* 掃描線動畫 */
    .scanline {
      position: absolute;
      inset: 0;
      background: linear-gradient(
        to bottom,
        transparent,
        color-mix(in srgb, var(--cml-scifi-color) 20%, transparent) 50%,
        transparent
      );
      background-size: 100% 4px;
      height: 100%;
      width: 100%;
      opacity: 0.1;
      pointer-events: none;
      z-index: 1;
      display: none;
    }
    :host([show-scanline]) .scanline {
      display: block;
      animation: scan 4s linear infinite;
    }

    @keyframes scan {
      from { transform: translateY(-100%); }
      to { transform: translateY(100%); }
    }

    .content {
      position: relative;
      z-index: 5; /* 提高 z-index 確保內容（文字）始終在最上方 */
      flex: 1;
      display: flex;
      flex-direction: column;
    }

    /* 裝飾性邊角線 - 微調厚度至 3px，達到平衡的視覺重量 */
    .corner-decoration {
      position: absolute;
      width: 24px;
      height: 24px;
      background: var(--cml-scifi-color);
      pointer-events: none;
      z-index: 5;
      transform: translateZ(0);
    }
    .top-left { 
      top: 0; 
      left: 0; 
      clip-path: polygon(0 0, 100% 0, calc(100% - 6px) 3px, 3px 3px, 3px calc(100% - 6px), 0 100%);
    }
    .bottom-right { 
      bottom: 0; 
      right: 0; 
      clip-path: polygon(100% 100%, 0 100%, 6px calc(100% - 3px), calc(100% - 3px) calc(100% - 3px), calc(100% - 3px) 6px, 100% 0);
    }
  `;

  render() {
    return html`
      <!-- 準心標記放在最外層，避免被 overflow:hidden 裁切 -->
      <camelot-scifi-reticle 
        .active="${this.activeReticle}"
        .color="${this.color}"
      ></camelot-scifi-reticle>

      <div class="frame-container">
        <!-- 裝飾線放在 Container 內，但與 Inner 對齊 -->
        ${this.showCorners ? html`
          <div class="corner-decoration top-left"></div>
          <div class="corner-decoration bottom-right"></div>
        ` : ''}
        
        <div class="frame-inner">
          <div class="grid-bg"></div>
          <div class="scanline"></div>
          <div class="shine-glide"></div>
          
          <div class="content">
            <slot></slot>
          </div>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'camelot-scifi-frame': CamelotScifiFrame;
  }
}
