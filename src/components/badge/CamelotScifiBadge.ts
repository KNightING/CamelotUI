import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * <CamelotScifiBadge>
 * 日系科幻風格 (Sci-fi HUD) 的標籤元件實作。
 */
@customElement('camelot-scifi-badge-impl')
export class CamelotScifiBadge extends LitElement {
  @property({ type: String })
  label: string = '';

  @property({ type: String })
  color: 'primary' | 'secondary' | 'tertiary' | 'error' | 'success' = 'primary';

  @property({ type: String })
  variant: 'filled' | 'outlined' = 'filled';

  static styles = css`
    :host {
      display: inline-flex;
      align-items: center;
      --cml-scifi-color: var(--cml-color-primary);
      font-family: 'Share Tech Mono', monospace;
    }

    :host([color="secondary"]) { --cml-scifi-color: var(--cml-color-secondary); }
    :host([color="tertiary"]) { --cml-scifi-color: var(--cml-color-tertiary); }
    :host([color="error"]) { --cml-scifi-color: var(--cml-color-error); }
    :host([color="success"]) { --cml-scifi-color: var(--cml-color-success); }

    .badge {
      position: relative;
      padding: 4px 12px;
      font-size: 0.7rem;
      font-weight: bold;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      display: flex;
      align-items: center;
      gap: 6px;
      /* 切角造型 */
      clip-path: polygon(
        6px 0, 100% 0, 
        100% calc(100% - 6px), calc(100% - 6px) 100%, 
        0 100%, 0 6px
      );
    }

    .filled {
      background: var(--cml-scifi-color);
      color: #000;
      box-shadow: 0 0 10px color-mix(in srgb, var(--cml-scifi-color), transparent 50%);
    }

    .outlined {
      /* 背景/邊框修正 */
      border: 1px solid transparent;
      background-image: 
        linear-gradient(rgba(5, 8, 10, 0.95), rgba(5, 8, 10, 0.95)), 
        linear-gradient(var(--cml-scifi-color), var(--cml-scifi-color));
      background-origin: padding-box, border-box;
      background-clip: padding-box, border-box;
      
      color: var(--cml-scifi-color);
    }

    /* 左右導航裝飾 */
    .decor {
      width: 4px;
      height: 4px;
      background: currentColor;
      box-shadow: 0 0 5px currentColor;
    }

    /* 文字發光效果 */
    .label-text {
      text-shadow: 0 0 5px currentColor;
    }
  `;

  render() {
    return html`
      <div class="badge ${this.variant}">
        <div class="decor"></div>
        <span class="label-text">${this.label}</span>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'camelot-scifi-badge-impl': CamelotScifiBadge;
  }
}
