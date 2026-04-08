import { html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { CamelotBaseDrawer } from './CamelotBaseDrawer';

/**
 * <CamelotScifiDrawer>
 * 日系科幻風格 (Sci-fi HUD) 的抽屜組件
 * 視覺重點：數據網格、掃描線、高對比框線、技術標記
 */
@customElement('camelot-scifi-drawer')
export class CamelotScifiDrawer extends CamelotBaseDrawer {
  @property({ type: String }) label = '';

  static styles = [
    ...CamelotBaseDrawer.styles,
    css`
      :host {
        --cml-scifi-accent: var(--cml-scifi-highlight, #ffffff);
        --cml-scifi-primary: var(--cml-color-primary);
      }

      .drawer-content {
        background: rgba(5, 8, 10, 0.95);
        backdrop-filter: blur(20px);
        border: 1px solid var(--cml-scifi-accent);
        color: var(--cml-scifi-accent);
        font-family: var(--cml-font-family);
        overflow: hidden;
        position: relative;
        box-shadow: inset 0 0 30px color-mix(in srgb, var(--cml-scifi-primary), transparent 90%), 0 0 40px rgba(0, 0, 0, 0.5);
      }

      /* 定向掃描線動畫 */
      @keyframes hud-scan {
        0% { transform: translateY(-100%); opacity: 0; }
        50% { opacity: 0.5; }
        100% { transform: translateY(100vh); opacity: 0; }
      }

      .drawer-content::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100px;
        background: linear-gradient(to bottom, transparent, color-mix(in srgb, var(--cml-scifi-primary), transparent 80%), transparent);
        animation: hud-scan 4s linear infinite;
        pointer-events: none;
        z-index: 2;
      }

      /* 科技底紋：網格與點 */
      .drawer-content::after {
        content: '';
        position: absolute;
        inset: 0;
        background-image: 
          linear-gradient(color-mix(in srgb, var(--cml-scifi-primary), transparent 95%) 1px, transparent 1px),
          linear-gradient(90deg, color-mix(in srgb, var(--cml-scifi-primary), transparent 95%) 1px, transparent 1px);
        background-size: 40px 40px;
        pointer-events: none;
        z-index: 0;
      }

      header {
        position: relative;
        padding: 24px;
        border-bottom: 2px solid var(--cml-scifi-accent);
        display: flex;
        align-items: center;
        justify-content: space-between;
        z-index: 3;
        background: rgba(0, 243, 255, 0.05);
      }

      .headline-wrapper {
        display: flex;
        flex-direction: column;
        gap: 4px;
      }

      .headline {
        font-size: 1.5rem;
        font-weight: var(--cml-font-weight-bold);
        color: var(--cml-scifi-primary);
        text-transform: uppercase;
        letter-spacing: 0.25em;
        text-shadow: 0 0 10px var(--cml-scifi-primary);
      }

      .sub-label {
        font-size: 0.65rem;
        opacity: 0.6;
        letter-spacing: 0.1em;
      }

      .close-btn {
        background: transparent;
        border: 1px solid var(--cml-scifi-accent);
        color: var(--cml-scifi-accent);
        width: 40px;
        height: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: all 0.2s;
        font-family: inherit;
        clip-path: polygon(0 0, 100% 0, 85% 100%, 0 100%);
      }

      .close-btn:hover {
        background: var(--cml-scifi-accent);
        color: #000;
        box-shadow: 0 0 15px var(--cml-scifi-accent);
      }

      article {
        padding: 32px;
        flex: 1;
        overflow-y: auto;
        position: relative;
        z-index: 3;
      }

      footer {
        padding: 16px 24px;
        border-top: 1px solid rgba(255, 255, 255, 0.1);
        display: flex;
        justify-content: flex-end;
        gap: 12px;
        z-index: 3;
        background: rgba(0, 243, 255, 0.02);
      }

      /* HUD 數據點綴 */
      .hud-marker {
        position: absolute;
        font-size: 0.6rem;
        font-weight: bold;
        color: var(--cml-scifi-primary);
        opacity: 0.8;
        z-index: 4;
      }

      .tl { top: 8px; left: 8px; }
      .tr { top: 8px; right: 8px; }
      .bl { bottom: 8px; left: 8px; }
      .br { bottom: 8px; right: 8px; }

      /* 四角 L-型括號 (裝飾) */
      .bracket {
        position: absolute;
        width: 15px;
        height: 15px;
        border: 2px solid var(--cml-scifi-primary);
        z-index: 4;
      }

      .b-tl { top: 0; left: 0; border-right: none; border-bottom: none; }
      .b-tr { top: 0; right: 0; border-left: none; border-bottom: none; }
      .b-bl { bottom: 0; left: 0; border-right: none; border-top: none; }
      .b-br { bottom: 0; right: 0; border-left: none; border-top: none; }
    `
  ];

  protected renderContent() {
    const timestamp = new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '');
    
    return html`
      <!-- HUD Data Markers -->
      <div class="hud-marker tl">[ SYS_ACTIVE / ${timestamp} ]</div>
      <div class="hud-marker tr">V_042.8 // GRID_SYNC</div>
      <div class="hud-marker bl">COORD_X: 12.049 // Y: 88.22</div>
      <div class="hud-marker br">SECURE_LINK // ON</div>

      <div class="bracket b-tl"></div>
      <div class="bracket b-tr"></div>
      <div class="bracket b-bl"></div>
      <div class="bracket b-br"></div>

      <header>
        <div class="headline-wrapper">
          <div class="headline">${this.label}</div>
          <div class="sub-label">PROTOCOL_LOADED // AUTH_SUCCESS</div>
        </div>
        <button class="close-btn" @click="${() => this.hide()}">CLOSE</button>
      </header>
      <article>
        <slot></slot>
      </article>
      <footer>
        <slot name="footer"></slot>
      </footer>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'camelot-scifi-drawer': CamelotScifiDrawer;
  }
}
