import { html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { CamelotBaseElement } from '../../base/CamelotBaseElement';

/**
 * <CamelotMaterialOutlineButton>
 * Material 3風格的邊框按鈕 (Outline Button)
 */
@customElement('camelot-material-outline-button')
export class CamelotMaterialOutlineButton extends CamelotBaseElement {
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
        padding: 10px 24px;
        background-color: transparent;
        border-radius: var(--cml-radius-l);
        cursor: pointer;
        transition: all 0.28s cubic-bezier(0.4, 0, 0.2, 1);
        outline: none;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        
        /* 使用基礎色系代理變數 */
        border: 1px solid var(--cml-color-current-color);
        color: var(--cml-color-current-color);
      }

      button:disabled {
        cursor: not-allowed;
        opacity: 0.38;
        border-color: var(--cml-color-outline) !important;
        color: var(--cml-color-outline) !important;
      }

      button:hover:not(:disabled) {
        background-color: var(--cml-color-current-color);
        color: var(--cml-color-current-on-color);
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      }

      .ripple {
        position: absolute;
        border-radius: 50%;
        background-color: var(--cml-color-current-color);
        opacity: 0.12;
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
    'camelot-material-outline-button': CamelotMaterialOutlineButton;
  }
}
