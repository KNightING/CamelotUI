import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * <CamelotMaterialButton>
 * 具備 Material 3 特色（如 Ripple 效果、特定的陰影與圓角）的按鈕。
 */
@customElement('camelot-material-button')
export class CamelotMaterialButton extends LitElement {
  @property({ type: String })
  label: string = 'Button';

  @property({ type: String })
  color: 'primary' | 'secondary' | 'tertiary' = 'primary';

  @property({ type: String })
  variant: 'filled' | 'outlined' | 'text' = 'filled';

  @property({ type: Boolean })
  disabled: boolean = false;

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
      padding: 10px 24px;
      border: none;
      border-radius: var(--cml-radius-l);
      cursor: pointer;
      transition: all 0.28s cubic-bezier(0.4, 0, 0.2, 1);
      outline: none;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
    }

    button:disabled {
      cursor: not-allowed;
      opacity: 0.38;
      box-shadow: none !important;
    }

    /* Color Variants - Filled */
    .filled.primary { background-color: var(--cml-color-primary); color: var(--cml-color-on-primary); }
    .filled.secondary { background-color: var(--cml-color-secondary); color: var(--cml-color-on-secondary); }
    .filled.tertiary { background-color: var(--cml-color-tertiary); color: var(--cml-color-on-tertiary); }
    
    .filled {
      box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    }
    .filled:hover:not(:disabled) {
      box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
      filter: brightness(1.08);
    }

    /* Outlined Variant */
    .outlined {
      background-color: transparent;
      border: 1px solid var(--cml-color-outline);
    }
    .outlined.primary { color: var(--cml-color-primary); border-color: var(--cml-color-primary); }
    .outlined.secondary { color: var(--cml-color-secondary); border-color: var(--cml-color-secondary); }
    .outlined.tertiary { color: var(--cml-color-tertiary); border-color: var(--cml-color-tertiary); }
    .outlined:hover:not(:disabled) {
      background-color: rgba(0,0,0,0.04);
    }

    /* Text Variant */
    .text {
      background-color: transparent;
      padding: 10px 12px;
    }
    .text.primary { color: var(--cml-color-primary); }
    .text.secondary { color: var(--cml-color-secondary); }
    .text.tertiary { color: var(--cml-color-tertiary); }
    .text:hover:not(:disabled) {
      background-color: rgba(0,0,0,0.04);
    }

    /* Ripple style (unchanged) */
    .ripple {
      position: absolute;
      border-radius: 50%;
      background-color: rgba(255, 255, 255, 0.3);
      transform: scale(0);
      animation: ripple-animation 0.6s linear;
      pointer-events: none;
    }
    .outlined .ripple, .text .ripple {
      background-color: rgba(0,0,0,0.1);
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
      <button 
        class="${this.variant} ${this.color}"
        ?disabled="${this.disabled}"
        @pointerdown="${this._handlePointerDown}"
      >
        ${this.label}
        <slot></slot>
      </button>
    `;
  }
}
