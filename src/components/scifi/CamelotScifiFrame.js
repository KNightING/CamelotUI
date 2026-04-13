var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { CamelotBaseElement } from '../base/CamelotBaseElement';
/**
 * <camelot-scifi-frame>
 * 日系科幻風格 (Sci-fi HUD) 的統一外殼組件。
 * 提供切角 (Cut-corner)、網格背景 (Grid)、掃描線 (Scanline) 與焦點發光效果。
 */
let CamelotScifiFrame = class CamelotScifiFrame extends CamelotBaseElement {
    constructor() {
        super(...arguments);
        this.variant = '2-corner';
        this.showGrid = true;
        this.showScanline = true;
        this.showPulse = false;
        this.focused = false;
        this.filled = false;
        this.showShine = false;
        this.activeReticle = false;
        this.showBorders = true;
        this.showCorners = true;
    }
    static { this.styles = css `
    :host {
      display: block;
      position: relative;
      box-sizing: border-box;
      transition: all 0.3s ease;
      
      /* 使用統一主題變數 */
      --cml-scifi-color: var(--cml-color-current-color);
      
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

    .frame-container {
      position: relative;
      width: 100%;
      height: 100%;
      min-height: inherit;
      background: color-mix(in srgb, var(--cml-scifi-color) 40%, transparent);
      clip-path: var(--cml-frame-clip);
      padding: 1px;
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
      background: color-mix(in srgb, var(--cml-scifi-color) var(--cml-scifi-bg-opacity, 5%), var(--cml-color-surface));
      clip-path: var(--cml-frame-clip);
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
      z-index: 10;
      opacity: 0;
    }

    :host([show-shine]) .shine-glide {
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

    /* 橫向脈衝掃描特效 */
    .pulse-bg {
      position: absolute;
      inset: 0;
      background: linear-gradient(
        90deg, 
        transparent 0%, 
        color-mix(in srgb, var(--cml-scifi-color), transparent 90%) 35%,
        color-mix(in srgb, var(--cml-scifi-color), transparent 70%) 50%, 
        color-mix(in srgb, var(--cml-scifi-color), transparent 90%) 65%,
        transparent 100%
      );
      background-size: 200% 100%;
      pointer-events: none;
      z-index: 1;
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    :host([show-pulse]) .pulse-bg {
      opacity: 1;
      animation: pulse-scan-horizontal 3s linear infinite;
    }

    @keyframes pulse-scan-horizontal {
      0% { background-position: 200% 0; }
      100% { background-position: -200% 0; }
    }

    /* 掃描線動畫 (垂直) */
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
      z-index: 2;
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
      z-index: 5;
      flex: 1;
      display: flex;
      flex-direction: column;
    }

    .corner-decoration {
      position: absolute;
      width: 24px;
      height: 24px;
      background: var(--cml-scifi-color);
      pointer-events: none;
      z-index: 5;
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
  `; }
    render() {
        return html `
      <camelot-scifi-reticle 
        .active="${this.activeReticle}"
        .color="${this.color}"
      ></camelot-scifi-reticle>

      <div class="frame-container">
        ${this.showCorners ? html `
          <div class="corner-decoration top-left"></div>
          <div class="corner-decoration bottom-right"></div>
        ` : ''}
        
        <div class="frame-inner">
          <div class="grid-bg"></div>
          <div class="pulse-bg"></div>
          <div class="scanline"></div>
          <div class="shine-glide"></div>
          
          <div class="content">
            <slot></slot>
          </div>
        </div>
      </div>
    `;
    }
    /**
     * 覆寫基礎類別的變數注入邏輯
     * ScifiFrame 作為裝飾元件，預設應繼承父層（如 Button 或 Card）的 --cml-color-current 變數，
     * 而非主動根據自己的屬性值去覆寫它。
     */
    _updateCurrentColors() {
        // 故意留空：不主動注入變數，實現繼承。
    }
};
__decorate([
    property({ type: String, reflect: true }),
    __metadata("design:type", String)
], CamelotScifiFrame.prototype, "variant", void 0);
__decorate([
    property({ type: Boolean, reflect: true, attribute: 'show-grid' }),
    __metadata("design:type", Boolean)
], CamelotScifiFrame.prototype, "showGrid", void 0);
__decorate([
    property({ type: Boolean, reflect: true, attribute: 'show-scanline' }),
    __metadata("design:type", Boolean)
], CamelotScifiFrame.prototype, "showScanline", void 0);
__decorate([
    property({ type: Boolean, reflect: true, attribute: 'show-pulse' }),
    __metadata("design:type", Boolean)
], CamelotScifiFrame.prototype, "showPulse", void 0);
__decorate([
    property({ type: Boolean, reflect: true }),
    __metadata("design:type", Boolean)
], CamelotScifiFrame.prototype, "focused", void 0);
__decorate([
    property({ type: Boolean, reflect: true }),
    __metadata("design:type", Boolean)
], CamelotScifiFrame.prototype, "filled", void 0);
__decorate([
    property({ type: Boolean, reflect: true }),
    __metadata("design:type", Boolean)
], CamelotScifiFrame.prototype, "showShine", void 0);
__decorate([
    property({ type: Boolean, reflect: true }),
    __metadata("design:type", Boolean)
], CamelotScifiFrame.prototype, "activeReticle", void 0);
__decorate([
    property({ type: Boolean, reflect: true, attribute: 'show-borders' }),
    __metadata("design:type", Boolean)
], CamelotScifiFrame.prototype, "showBorders", void 0);
__decorate([
    property({ type: Boolean, reflect: true, attribute: 'show-corners' }),
    __metadata("design:type", Boolean)
], CamelotScifiFrame.prototype, "showCorners", void 0);
CamelotScifiFrame = __decorate([
    customElement('camelot-scifi-frame')
], CamelotScifiFrame);
export { CamelotScifiFrame };
//# sourceMappingURL=CamelotScifiFrame.js.map