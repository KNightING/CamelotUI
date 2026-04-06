import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * <CamelotMaterialButton>
 * 具備 Material 3 特色（如 Ripple 效果、特定的陰影與圓角）的按鈕。
 */
@customElement('camelot-material-button')
export class CamelotMaterialButton extends LitElement {
  @property({ type: String })
  label: string = 'Material Button';

  static styles = css`
    :host {
      display: inline-block;
    }

    button {
      position: relative;
      overflow: hidden;
      font-family: var(--cml-font-family);
      font-weight: var(--cml-font-weight-medium);
      font-size: var(--cml-font-size-label);
      background-color: var(--cml-color-primary);
      color: var(--cml-color-on-primary);
      padding: 10px 24px;
      border: none;
      border-radius: var(--cml-radius-l); /* M3 標準圓角較大 */
      cursor: pointer;
      box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
      transition: box-shadow 0.28s cubic-bezier(0.4, 0, 0.2, 1);
      outline: none;
    }

    button:hover {
      box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
      filter: brightness(1.05);
    }

    button:active {
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }

    /* Ripple Element Style */
    .ripple {
      position: absolute;
      border-radius: 50%;
      background-color: rgba(255, 255, 255, 0.35);
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
  `;

  private _handlePointerDown(e: PointerEvent) {
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
      <button @pointerdown="${this._handlePointerDown}">
        ${this.label}
        <slot></slot>
      </button>
    `;
  }
}
