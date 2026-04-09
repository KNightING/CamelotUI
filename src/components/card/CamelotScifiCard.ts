import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * <CamelotScifiCard>
 * 日系科幻風格 (Sci-fi HUD) 的容器元件實作。
 * 特色：含有裝飾性的數位序號、裝飾線條與高科技感背層。
 */
@customElement('camelot-scifi-card-impl')
export class CamelotScifiCard extends LitElement {
  @property({ type: String })
  color: 'primary' | 'secondary' | 'tertiary' = 'primary';

  static styles = css`
    :host {
      display: block;
      --cml-scifi-color: var(--cml-color-primary);
      --cml-scifi-accent: color-mix(in srgb, var(--cml-scifi-color), transparent 80%);
      font-family: 'Share Tech Mono', monospace;
    }

    :host([color="secondary"]) { --cml-scifi-color: var(--cml-color-secondary); }
    :host([color="tertiary"]) { --cml-scifi-color: var(--cml-color-tertiary); }

    .card {
      position: relative;
      padding: 24px;
      color: #fff;
      overflow: hidden;

      /* 背景/邊框修正 */
      border: 1px solid transparent;
      background-image: 
        linear-gradient(rgba(5, 8, 10, 0.8), rgba(5, 8, 10, 0.8)), 
        linear-gradient(color-mix(in srgb, var(--cml-scifi-color), transparent 70%), color-mix(in srgb, var(--cml-scifi-color), transparent 70%));
      background-origin: padding-box, border-box;
      background-clip: padding-box, border-box;

      /* 切角造型 */
      clip-path: polygon(
        15px 0, 100% 0, 
        100% calc(100% - 15px), calc(100% - 15px) 100%, 
        0 100%, 0 15px
      );
    }

    /* 偽元素裝飾：背景網格 */
    .card::before {
      content: '';
      position: absolute;
      inset: 0;
      background-image: 
        linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
      background-size: 10px 10px;
      pointer-events: none;
    }

    /* 偽元素裝飾：數位序號 (裝飾性) */
    .card::after {
      content: 'SEQ_ID: ' attr(data-id) ' // SECTOR_A9';
      position: absolute;
      top: 4px;
      right: 12px;
      font-size: 0.6rem;
      color: var(--cml-scifi-color);
      opacity: 0.4;
      pointer-events: none;
    }

    .corner-decor {
      position: absolute;
      top: 0; left: 0; width: 30px; height: 30px;
      border-top: 3px solid var(--cml-scifi-color);
      border-left: 3px solid var(--cml-scifi-color);
    }

    .bottom-decor {
      position: absolute;
      bottom: 0; right: 0; width: 50%; height: 2px;
      background: var(--cml-scifi-color);
      box-shadow: 0 0 15px var(--cml-scifi-color);
      opacity: 0.6;
    }

    .content {
      position: relative;
      z-index: 1;
    }
  `;

  render() {
    const randomId = Math.random().toString(36).substring(7).toUpperCase();
    return html`
      <div class="card" data-id="${randomId}">
        <div class="corner-decor"></div>
        <div class="content">
          <slot></slot>
        </div>
        <div class="bottom-decor"></div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'camelot-scifi-card-impl': CamelotScifiCard;
  }
}
