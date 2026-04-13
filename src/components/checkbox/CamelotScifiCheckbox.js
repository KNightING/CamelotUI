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
 * <CamelotScifiCheckbox>
 * 日系科幻風格 (Sci-fi HUD) 的多選框。
 * 視覺重點：方括號框架 [ ]、內部掃描線、數位脈衝動畫。
 */
let CamelotScifiCheckbox = class CamelotScifiCheckbox extends LitElement {
    constructor() {
        super(...arguments);
        this.label = '';
        this.checked = false;
        this.disabled = false;
        this.color = 'primary';
        this._isHovered = false;
    }
    static { this.styles = css `
    :host {
      display: inline-flex;
      align-items: center;
      cursor: pointer;
      user-select: none;
      font-family: 'Share Tech Mono', monospace;
      --cml-scifi-color: var(--cml-color-primary);
    }

    :host([color="secondary"]) { --cml-scifi-color: var(--cml-color-secondary); }
    :host([color="tertiary"]) { --cml-scifi-color: var(--cml-color-tertiary); }

    .container {
      display: flex;
      align-items: center;
      padding: 6px 12px;
      gap: 12px;
      min-height: 36px;
      box-sizing: border-box;
      transition: all 0.2s;
      position: relative;
    }

    .container:hover:not(.disabled) {
      background: color-mix(in srgb, var(--cml-scifi-color), transparent 95%);
    }

    .checkbox-box {
      position: relative;
      width: 18px;
      height: 18px;
      border: 1px solid color-mix(in srgb, var(--cml-scifi-color), transparent 80%);
      display: flex;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      flex-shrink: 0;
      overflow: hidden;
    }

    /* Square Brackets Motif [ ] */
    .checkbox-box::before, .checkbox-box::after {
      content: '';
      position: absolute;
      width: 4px;
      height: 100%;
      border-color: color-mix(in srgb, var(--cml-scifi-color), transparent 60%);
      border-style: solid;
      transition: all 0.3s cubic-bezier(0.19, 1, 0.22, 1);
    }

    .checkbox-box::before {
      left: 0;
      border-width: 1px 0 1px 1px;
    }
    .checkbox-box::after {
      right: 0;
      border-width: 1px 1px 1px 0;
    }

    .checked .checkbox-box::before, .checked .checkbox-box::after {
      border-color: var(--cml-scifi-color);
      box-shadow: 0 0 10px color-mix(in srgb, var(--cml-scifi-color), transparent 80%);
    }

    /* Checked Indicator: Digital Block */
    .indicator {
      width: 10px;
      height: 10px;
      background: var(--cml-scifi-color);
      transform: scale(0);
      transition: all 0.3s cubic-bezier(0.19, 1, 0.22, 1);
      box-shadow: 0 0 15px var(--cml-scifi-color);
      position: relative;
    }

    .checked .indicator {
      transform: scale(1);
    }

    /* Scanning animation inside the block */
    .indicator::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 2px;
      background: rgba(255, 255, 255, 0.8);
      animation: check-scan 1s linear infinite;
    }

    @keyframes check-scan {
      0% { top: 0; }
      100% { top: 100%; }
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
      opacity: 0.3;
      cursor: not-allowed;
      pointer-events: none;
      filter: grayscale(1);
    }

    /* Reticle integration */
    camelot-scifi-reticle {
      inset: 2px;
    }
  `; }
    _toggle() {
        if (this.disabled)
            return;
        this.checked = !this.checked;
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

        <div class="checkbox-box">
          <div class="indicator"></div>
        </div>
        ${this.label ? html `<span class="label-text">${this.label}</span>` : ''}
      </div>
    `;
    }
};
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], CamelotScifiCheckbox.prototype, "label", void 0);
__decorate([
    property({ type: Boolean, reflect: true }),
    __metadata("design:type", Boolean)
], CamelotScifiCheckbox.prototype, "checked", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Boolean)
], CamelotScifiCheckbox.prototype, "disabled", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], CamelotScifiCheckbox.prototype, "color", void 0);
__decorate([
    state(),
    __metadata("design:type", Boolean)
], CamelotScifiCheckbox.prototype, "_isHovered", void 0);
CamelotScifiCheckbox = __decorate([
    customElement('camelot-scifi-checkbox-impl')
], CamelotScifiCheckbox);
export { CamelotScifiCheckbox };
//# sourceMappingURL=CamelotScifiCheckbox.js.map