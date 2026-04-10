import { html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { CamelotBaseElement } from '../../base/CamelotBaseElement';

/**
 * <CamelotMaterialIconButton>
 * Material 3 風格的圖示按鈕。
 */
@customElement('camelot-material-icon-button')
export class CamelotMaterialIconButton extends CamelotBaseElement {
  @property({ type: String })
  shape: 'circle' | 'square' = 'circle';

  static styles = [
    css`
      :host {
        display: inline-block;
      }

      button {
        position: relative;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 40px;
        padding: 0;
        border: none;
        cursor: pointer;
        background-color: transparent;
        transition: background-color 0.2s, transform 0.1s;
        outline: none;
        
        /* 使用統一主題變數 */
        color: var(--cml-color-current-color);
      }

      button:disabled {
        cursor: not-allowed;
        opacity: 0.38;
      }

      .circle { border-radius: 50%; }
      .square { border-radius: var(--cml-radius-s); }

      button:hover:not(:disabled) {
        /* 使用 current-color 的低透明度背景作為 Hover 狀態 */
        background-color: color-mix(in srgb, var(--cml-color-current-color), transparent 92%);
      }
      
      /* Ripple style (Material standard) */
      .ripple {
        position: absolute;
        border-radius: 50%;
        background-color: rgba(0, 0, 0, 0.1);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
      }

      @keyframes ripple-animation {
        to {
          transform: scale(3);
          opacity: 0;
        }
      }
    `
  ];

  private _handlePointerDown(e: PointerEvent) {
    const button = e.currentTarget as HTMLElement;
    const rect = button.getBoundingClientRect();
    const ripple = document.createElement('span');
    ripple.classList.add('ripple');
    const size = Math.max(rect.width, rect.height);
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${e.clientX - rect.left - size/2}px`;
    ripple.style.top = `${e.clientY - rect.top - size/2}px`;
    button.appendChild(ripple);
    ripple.addEventListener('animationend', () => ripple.remove());
  }

  render() {
    return html`
      <button 
        class="${this.shape}"
        ?disabled="${this.disabled}"
        @pointerdown="${this._handlePointerDown}"
      >
        <slot></slot>
      </button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'camelot-material-icon-button': CamelotMaterialIconButton;
  }
}
