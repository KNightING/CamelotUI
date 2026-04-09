import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * <camelot-scifi-reticle>
 * 日系科幻風格的鎖定括號組件 (HUD Brackets)
 * 可放置於任何容器內，提供「鎖定」動畫特效。
 */
@customElement('camelot-scifi-reticle')
export class CamelotScifiReticle extends LitElement {
  /** 是否處於鎖定狀態 */
  @property({ type: Boolean, reflect: true })
  active: boolean = false;

  /** 主題色彩 */
  @property({ type: String, reflect: true })
  color: 'primary' | 'secondary' | 'tertiary' = 'primary';

  static styles = css`
    :host {
      display: block;
      position: absolute;
      inset: -4px; /* 預留動畫空間 */
      pointer-events: none;
      z-index: 10;
      
      --cml-reticle-color: var(--cml-color-primary);
    }

    :host([color="secondary"]) { --cml-reticle-color: var(--cml-color-secondary); }
    :host([color="tertiary"]) { --cml-reticle-color: var(--cml-color-tertiary); }

    .bracket {
      position: absolute;
      width: 10px;
      height: 10px;
      border: 2px solid var(--cml-reticle-color);
      transition: all 0.3s cubic-bezier(0.19, 1, 0.22, 1);
      opacity: 0;
    }

    .top-left { top: 0; left: 0; border-right: none; border-bottom: none; transform: translate(-10px, -10px); }
    .top-right { top: 0; right: 0; border-left: none; border-bottom: none; transform: translate(10px, -10px); }
    .bottom-left { bottom: 0; left: 0; border-right: none; border-top: none; transform: translate(-10px, 10px); }
    .bottom-right { bottom: 0; right: 0; border-left: none; border-top: none; transform: translate(10px, 10px); }

    /* Active 鎖定狀態 */
    :host([active]) .bracket {
      opacity: 1;
      filter: drop-shadow(0 0 5px var(--cml-reticle-color));
    }

    :host([active]) .top-left { transform: translate(2px, 2px); }
    :host([active]) .top-right { transform: translate(-2px, 2px); }
    :host([active]) .bottom-left { transform: translate(2px, -2px); }
    :host([active]) .bottom-right { transform: translate(-2px, -2px); }

    /* 微縮動畫 (比如點擊感) */
    :host([active][type="pressing"]) .bracket {
      transform: scale(0.8) translate(0, 0);
    }
  `;

  render() {
    return html`
      <div class="bracket top-left"></div>
      <div class="bracket top-right"></div>
      <div class="bracket bottom-left"></div>
      <div class="bracket bottom-right"></div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'camelot-scifi-reticle': CamelotScifiReticle;
  }
}
