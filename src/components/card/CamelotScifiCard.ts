import { html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { CamelotScifiBase } from '../scifi/CamelotScifiBase';
import '../scifi/CamelotScifiFrame';

/**
 * <CamelotScifiCard>
 * 日系科幻風格 (Sci-fi HUD) 的卡片元件實作。
 * 已優化：使用 CamelotScifiBase 與 CamelotScifiFrame。
 */
@customElement('camelot-scifi-card-impl')
export class CamelotScifiCard extends CamelotScifiBase {
  @property({ type: String }) title = '';
  @property({ type: String }) subtitle = '';

  static styles = [
    css`
      :host {
        display: block;
        width: 100%;
      }
      .card-content {
        padding: 16px;
        position: relative;
      }
      .card-header {
        margin-bottom: 12px;
        border-left: 3px solid var(--cml-scifi-color, var(--cml-color-primary));
        padding-left: 10px;
      }
      .card-title {
        font-family: var(--cml-font-family-mono, monospace);
        font-size: 1.1rem;
        font-weight: bold;
        color: var(--cml-scifi-color, var(--cml-color-primary));
        text-transform: uppercase;
        margin: 0;
      }
      .card-subtitle {
        font-size: 0.75rem;
        color: color-mix(in srgb, var(--cml-scifi-color, var(--cml-color-primary)) 70%, transparent);
        font-family: var(--cml-font-family-mono, monospace);
      }
      .id-tag {
        position: absolute;
        top: 0;
        right: 0;
        background: var(--cml-scifi-color, var(--cml-color-primary));
        color: #000;
        font-size: 10px;
        padding: 2px 6px;
        font-weight: bold;
      }
    `
  ];

  render() {
    return html`
      <camelot-scifi-frame 
        .color="${this.color}"
        ?showGrid="${true}"
      >
        <div class="card-content">
          <div class="id-tag">CML-${Math.floor(Math.random() * 9000 + 1000)}</div>
          <div class="card-header">
            <h3 class="card-title">${this.title}</h3>
            ${this.subtitle ? html`<div class="card-subtitle">${this.subtitle}</div>` : ''}
          </div>
          <slot></slot>
        </div>
      </camelot-scifi-frame>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'camelot-scifi-card-impl': CamelotScifiCard;
  }
}
