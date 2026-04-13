var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import '../scifi/CamelotScifiReticle';
/**
 * <CamelotScifiRadio>
 * 日系科幻風格 (Sci-fi HUD) 的單選框。
 * 視覺重點：菱形框架、中心發光點、數位邊界。
 */
let CamelotScifiRadio = class CamelotScifiRadio extends LitElement {
    constructor() {
        super(...arguments);
        this.checked = false;
        this.disabled = false;
        this.label = '';
        this.color = 'primary';
        this._isHovered = false;
    }
    static { this.styles = css `
    :host {
      display: inline-block;
      cursor: pointer;
      font-family: 'Share Tech Mono', monospace;
      --cml-scifi-color: var(--cml-color-primary);
    }

    :host([color="secondary"]) { --cml-scifi-color: var(--cml-color-secondary); }
    :host([color="tertiary"]) { --cml-scifi-color: var(--cml-color-tertiary); }

    .container {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 6px 12px;
      min-height: 36px;
      box-sizing: border-box;
      transition: all 0.2s;
      position: relative;
    }

    .container:hover:not(.disabled) {
      background: color-mix(in srgb, var(--cml-scifi-color), transparent 95%);
    }

    .radio-outer {
      position: relative;
      width: 18px;
      height: 18px;
      border: 1px solid color-mix(in srgb, var(--cml-scifi-color), transparent 70%);
      transform: rotate(45deg);
      transition: all 0.3s cubic-bezier(0.19, 1, 0.22, 1);
      display: flex;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      flex-shrink: 0;
    }

    /* Corner accents */
    .radio-outer::before, .radio-outer::after {
      content: '';
      position: absolute;
      width: 4px;
      height: 4px;
      border-color: var(--cml-scifi-color);
      border-style: solid;
      opacity: 0;
      transition: opacity 0.3s;
    }
    
    .radio-outer::before {
      top: -2px;
      left: -2px;
      border-width: 1px 0 0 1px;
    }
    .radio-outer::after {
      bottom: -2px;
      right: -2px;
      border-width: 0 1px 1px 0;
    }

    .checked .radio-outer {
      border-color: var(--cml-scifi-color);
      box-shadow: 0 0 10px color-mix(in srgb, var(--cml-scifi-color), transparent 70%);
    }
    
    .checked .radio-outer::before, .checked .radio-outer::after {
      opacity: 1;
    }

    .radio-inner {
      width: 10px;
      height: 10px;
      background-color: var(--cml-scifi-color);
      transform: scale(0);
      transition: transform 0.3s cubic-bezier(0.19, 1, 0.22, 1);
      box-shadow: 0 0 10px var(--cml-scifi-color);
    }

    .checked .radio-inner {
      transform: scale(1);
    }

    .label-text {
      text-transform: uppercase;
      letter-spacing: 0.1em;
      font-size: 0.85rem;
      color: var(--cml-color-on-surface);
      opacity: 0.8;
    }

    .checked .label-text {
      opacity: 1;
      text-shadow: 0 0 5px var(--cml-scifi-color);
    }

    .disabled {
      cursor: not-allowed;
      opacity: 0.3;
      pointer-events: none;
      filter: grayscale(1);
    }

    /* Reticle adjustment */
    camelot-scifi-reticle {
      inset: 2px;
    }
  `; }
    _toggle() {
        if (this.disabled || this.checked)
            return;
        this.checked = true;
        this.dispatchEvent(new CustomEvent('change', {
            detail: { checked: this.checked },
            bubbles: true,
            composed: true
        }));
    }
    render() {
        return html `
      <div 
        class="container ${this.checked ? 'checked' : ''} ${this.disabled ? 'disabled' : ''} ${this.color}"
        @click="${this._toggle}"
        @mouseenter="${() => this._isHovered = true}"
        @mouseleave="${() => this._isHovered = false}"
      >
        <camelot-scifi-reticle 
          ?active="${this._isHovered}" 
          .color="${this.color}"
        ></camelot-scifi-reticle>
        
        <div class="radio-outer">
          <div class="radio-inner"></div>
        </div>
        ${this.label ? html `<span class="label-text">${this.label}</span>` : ''}
      </div>
    `;
    }
};
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Boolean)
], CamelotScifiRadio.prototype, "checked", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Boolean)
], CamelotScifiRadio.prototype, "disabled", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], CamelotScifiRadio.prototype, "label", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], CamelotScifiRadio.prototype, "color", void 0);
__decorate([
    state(),
    __metadata("design:type", Boolean)
], CamelotScifiRadio.prototype, "_isHovered", void 0);
CamelotScifiRadio = __decorate([
    customElement('camelot-scifi-radio-impl')
], CamelotScifiRadio);
export { CamelotScifiRadio };
//# sourceMappingURL=CamelotScifiRadio.js.map