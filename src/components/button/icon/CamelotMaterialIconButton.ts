import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('camelot-material-icon-button')
export class CamelotMaterialIconButton extends LitElement {
  @property({ type: String })
  color: 'primary' | 'secondary' | 'tertiary' = 'primary';

  @property({ type: String })
  shape: 'circle' | 'square' = 'circle';

  @property({ type: Boolean })
  disabled: boolean = false;

  static styles = css`
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
    }

    button:disabled {
      cursor: not-allowed;
      opacity: 0.38;
    }

    .circle { border-radius: 50%; }
    .square { border-radius: var(--cml-radius-s); }

    /* M3 Icon Button Colors (Standard/Unfilled in this case, or can be filled) */
    .primary { color: var(--cml-color-primary); }
    .secondary { color: var(--cml-color-secondary); }
    .tertiary { color: var(--cml-color-tertiary); }

    button:hover:not(:disabled) {
      background-color: rgba(103, 80, 164, 0.08); /* Primary alpha fallback */
    }
    
    .primary:hover:not(:disabled) { background-color: rgba(103, 80, 164, 0.08); }
    .secondary:hover:not(:disabled) { background-color: rgba(98, 91, 113, 0.08); }
    .tertiary:hover:not(:disabled) { background-color: rgba(125, 82, 96, 0.08); }

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
  `;

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
        class="${this.shape} ${this.color}"
        ?disabled="${this.disabled}"
        @pointerdown="${this._handlePointerDown}"
      >
        <slot></slot>
      </button>
    `;
  }
}
