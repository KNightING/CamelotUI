import { html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { CamelotScifiBase } from '../scifi/CamelotScifiBase';
import '../scifi/CamelotScifiFrame';

/**
 * <CamelotScifiBadge>
 * 日系科幻風格 (Sci-fi HUD) 的標籤元件實作。
 * 已優化：使用 CamelotScifiBase 與 CamelotScifiFrame。
 */
@customElement('camelot-scifi-badge-impl')
export class CamelotScifiBadge extends CamelotScifiBase {
  @property({ type: String }) label = '';
  @property({ type: String, reflect: true }) variant: 'filled' | 'outlined' = 'filled';

  static styles = [
    css`
      :host {
        display: inline-block;
        vertical-align: middle;
      }
      .badge-outer {
        padding: 2px 10px;
        min-width: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .label-text {
        font-family: var(--cml-font-family-mono, monospace);
        font-size: 0.75rem;
        font-weight: bold;
        letter-spacing: 1px;
        color: var(--cml-color-on-surface);
        text-transform: uppercase;
        transition: color 0.2s ease;
      }

      /* 當處於變體填充或 Host 被標記為 filled 時，切換至主題對比色 */
      :host([variant="filled"]) .label-text,
      :host([filled]) .label-text {
        color: var(--cml-color-on-primary, #fff);
      }
      :host([variant="filled"][color="secondary"]) .label-text,
      :host([filled][color="secondary"]) .label-text { 
        color: var(--cml-color-on-secondary, #fff); 
      }
      :host([variant="filled"][color="tertiary"]) .label-text,
      :host([filled][color="tertiary"]) .label-text { 
        color: var(--cml-color-on-tertiary, #fff); 
      }
    `
  ];

  render() {
    const isFilled = this.variant === 'filled';
    const onColor = isFilled ? `var(--cml-color-on-${this.color})` : 'inherit';
    
    return html`
      <camelot-scifi-frame 
        .color="${this.color}"
        ?filled="${isFilled}"
        ?showGrid="${false}"
        ?showScanline="${isFilled}"
        ?showShine="${this._isHovered && !this.disabled}"
        .activeReticle="${false}"
        @mouseenter="${this._handleMouseEnter}"
        @mouseleave="${this._handleMouseLeave}"
      >
        <div class="badge-outer" style="color: ${onColor}">
          <slot>
            <span class="label-text">${this.label}</span>
          </slot>
        </div>
      </camelot-scifi-frame>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'camelot-scifi-badge-impl': CamelotScifiBadge;
  }
}
