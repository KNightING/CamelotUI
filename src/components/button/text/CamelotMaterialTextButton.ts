import { html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { CamelotBaseElement } from '../../base/CamelotBaseElement';

/**
 * <CamelotMaterialTextButton>
 * Material 3風格的文字按鈕 (Text Button)
 */
@customElement('camelot-material-text-button')
export class CamelotMaterialTextButton extends CamelotBaseElement {
  @property({ type: String })
  label: string = 'Button';

  @property({ type: Boolean, reflect: true })
  disabled: boolean = false;

  static styles = [
    css`
      :host {
        display: inline-block;
      }

      button {
        position: relative;
        overflow: hidden;
        font-family: var(--cml-font-family);
        font-weight: var(--cml-font-weight-medium);
        font-size: var(--cml-font-size-label);
        padding: 10px 12px;
        border: none;
        background-color: transparent;
        border-radius: var(--cml-radius-l);
        cursor: pointer;
        transition: all 0.28s cubic-bezier(0.4, 0, 0.2, 1);
        outline: none;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        
        /* 使用統一主題變數 */
        color: var(--cml-color-current-color);
      }

      button:disabled {
        cursor: not-allowed;
        opacity: 0.38;
        color: var(--cml-color-outline) !important;
      }

      button:hover:not(:disabled) {
        opacity: 1;
      }
      
      /* 優化 Hover 效果，使用 currentColor 配合透明度 */
      button:hover:not(:disabled)::after {
        content: '';
        position: absolute;
        inset: 0;
        background-color: currentColor;
        opacity: 0.08;
        pointer-events: none;
      }

      .ripple {
        position: absolute;
        border-radius: 50%;
        background-color: currentColor;
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
      }

      @keyframes ripple-animation {
        to {
          transform: scale(4);
          opacity: 0;
        }
      }
    `
  ];

  private _handlePointerDown(e: PointerEvent) {
    if (this.disabled) return;
    const button = e.currentTarget as HTMLElement;
    const rect = button.getBoundingClientRect();
    
    const ripple = document.createElement('span');
    ripple.classList.add('ripple');
    
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    
    button.appendChild(ripple);
    
    ripple.addEventListener('animationend', () => {
      ripple.remove();
    });
  }

  render() {
    return html`
      <button 
        ?disabled="${this.disabled}"
        @pointerdown="${this._handlePointerDown}"
      >
        ${this.label}
        <slot></slot>
      </button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'camelot-material-text-button': CamelotMaterialTextButton;
  }
}
