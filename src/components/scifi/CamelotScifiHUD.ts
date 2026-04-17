import { html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { CamelotBaseElement } from '../base/CamelotBaseElement';

/**
 * <camelot-scifi-hud>
 * 整合了 HUD 視覺與狀態管理的元件。
 * 提供完整的科幻風格外殼、掃描線、網格、脈衝與鎖定括號效果。
 * 已優化：自動偵測內含元件的 Focus 與 Hover 狀態。
 */
@customElement('camelot-scifi-hud')
export class CamelotScifiHUD extends CamelotBaseElement {
  @property({ type: String, reflect: true })
  variant: '2-corner' | '4-corner' = '2-corner';

  @property({ type: Boolean, reflect: true, attribute: 'show-grid' })
  showGrid: boolean = true;

  @property({ type: Boolean, reflect: true, attribute: 'show-scanline' })
  showScanline: boolean = true;

  @property({ type: Boolean, reflect: true, attribute: 'show-pulse' })
  showPulse: boolean = false;

  @property({ type: Boolean, reflect: true, attribute: 'show-borders' })
  showBorders: boolean = true;

  @property({ type: Boolean, reflect: true, attribute: 'show-corners' })
  showCorners: boolean = true;

  @property({ type: Boolean, reflect: true })
  disabled: boolean = false;

  @property({ type: Boolean, reflect: true })
  focused: boolean = false;

  @property({ type: Boolean, reflect: true })
  hovered: boolean = false;

  @property({ type: Boolean, reflect: true })
  filled: boolean = false;

  @property({ type: Boolean, reflect: true, attribute: 'show-shine' })
  showShine: boolean = false;

  @property({ type: Boolean, reflect: true, attribute: 'reticle-active' })
  reticleActive: boolean = false;

  /** 是否啟用自動狀態偵測 (Focus/Hover) */
  @property({ type: Boolean, reflect: true, attribute: 'auto-state' })
  autoState: boolean = true;

  @state() protected _isHoveredInternal = false;
  @state() protected _isFocusedInternal = false;

  static styles = [
    css`
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

      /* --- Reticle (Brackets) Styles --- */
      .reticle-brackets {
        position: absolute;
        inset: -8px; 
        pointer-events: none;
        z-index: 10;
      }

      .bracket {
        position: absolute;
        width: 12px; 
        height: 12px;
        border: 2px solid var(--cml-scifi-color);
        transition: all 0.3s cubic-bezier(0.19, 1, 0.22, 1);
        opacity: 0;
      }

      .top-left { top: 0; left: 0; border-right: none; border-bottom: none; transform: translate(-12px, -12px); }
      .top-right { top: 0; right: 0; border-left: none; border-bottom: none; transform: translate(12px, -12px); }
      .bottom-left { bottom: 0; left: 0; border-right: none; border-top: none; transform: translate(-12px, 12px); }
      .bottom-right { bottom: 0; right: 0; border-left: none; border-top: none; transform: translate(12px, 12px); }

      /* 激活狀態：手動屬性優先，否則參考內部偵測 */
      .active-reticle .bracket {
        opacity: 1;
        filter: drop-shadow(0 0 5px var(--cml-scifi-color));
      }

      .active-reticle .top-left,
      .active-reticle .top-right,
      .active-reticle .bottom-left,
      .active-reticle .bottom-right {
        transform: translate(0, 0);
      }

      /* --- Frame Styles --- */
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

      :host([filled]) .frame-container,
      :host([filled]) .frame-inner {
        background: var(--cml-scifi-color);
      }

      .is-focused .frame-container {
        background: var(--cml-scifi-color);
        box-shadow: inset 0 0 15px color-mix(in srgb, var(--cml-scifi-color) 40%, transparent);
        filter: drop-shadow(0 0 4px color-mix(in srgb, var(--cml-scifi-color) 60%, transparent));
      }

      /* Shine Glide */
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

      .should-shine .shine-glide {
        animation: shine-glide-anim 1s cubic-bezier(0.19, 1, 0.22, 1);
      }

      @keyframes shine-glide-anim {
        0% { left: -100%; opacity: 0; }
        20% { opacity: 1; }
        80% { opacity: 1; }
        100% { left: 100%; opacity: 0; }
      }

      /* Grid BG */
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

      /* Pulse BG */
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

      .should-pulse .pulse-bg {
        opacity: 1;
        animation: pulse-scan-horizontal 3s linear infinite;
      }

      @keyframes pulse-scan-horizontal {
        0% { background-position: 200% 0; }
        100% { background-position: -200% 0; }
      }

      /* Scanline */
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
      .should-scan .scanline {
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
      .top-left-corner { 
        top: 0; 
        left: 0; 
        clip-path: polygon(0 0, 100% 0, calc(100% - 6px) 3px, 3px 3px, 3px calc(100% - 6px), 0 100%);
      }
      .bottom-right-corner { 
        bottom: 0; 
        right: 0; 
        clip-path: polygon(100% 100%, 0 100%, 6px calc(100% - 3px), calc(100% - 3px) calc(100% - 3px), calc(100% - 3px) 6px, 100% 0);
      }
    `
  ];

  connectedCallback() {
    super.connectedCallback();
    if (this.autoState) {
      this.addEventListener('focusin', this._handleFocusIn);
      this.addEventListener('focusout', this._handleFocusOut);
      this.addEventListener('mouseenter', this._handleMouseEnter);
      this.addEventListener('mouseleave', this._handleMouseLeave);
    }
  }

  private _handleFocusIn() { this._isFocusedInternal = true; }
  private _handleFocusOut() { this._isFocusedInternal = false; }
  private _handleMouseEnter() { this._isHoveredInternal = true; }
  private _handleMouseLeave() { this._isHoveredInternal = false; }

  render() {
    const isFocused = this.autoState ? (this.focused || this._isFocusedInternal) : this.focused;
    const isHovered = this.autoState ? (this.hovered || this._isHoveredInternal) : this.hovered;
    
    // 計算最終狀態（優先使用手動屬性，否則參考內部偵測）
    const activeReticle = this.reticleActive || (isFocused || (isHovered && !this.disabled));
    const shouldPulse = this.showPulse || isFocused;
    const shouldScan = this.showScanline && isFocused;
    const shouldShine = this.showShine || (isFocused || isHovered);

    return html`
      <div class="${activeReticle ? 'active-reticle' : ''} ${isFocused ? 'is-focused' : ''} ${shouldPulse ? 'should-pulse' : ''} ${shouldScan ? 'should-scan' : ''} ${shouldShine ? 'should-shine' : ''}">
        <!-- Reticle Brackets -->
        <div class="reticle-brackets">
          <div class="bracket top-left"></div>
          <div class="bracket top-right"></div>
          <div class="bracket bottom-left"></div>
          <div class="bracket bottom-right"></div>
        </div>

        <!-- Frame Container -->
        <div class="frame-container">
          ${this.showCorners ? html`
            <div class="corner-decoration top-left-corner"></div>
            <div class="corner-decoration bottom-right-corner"></div>
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
      </div>
    `;
  }

  protected _updateCurrentColors() {
    super._updateCurrentColors();
    this.style.setProperty('--cml-scifi-color', 'var(--cml-color-current-color)');
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'camelot-scifi-hud': CamelotScifiHUD;
  }
}

