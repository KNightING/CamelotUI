var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { CamelotScifiBase } from '../scifi/CamelotScifiBase';
import '../scifi/CamelotScifiFrame';
/**
 * <CamelotScifiCard>
 * 日系科幻風格 (Sci-fi HUD) 的卡片元件實作。
 * 已優化：使用 CamelotScifiBase 與 CamelotScifiFrame。
 */
let CamelotScifiCard = class CamelotScifiCard extends CamelotScifiBase {
    constructor() {
        super(...arguments);
        this.title = '';
        this.subtitle = '';
    }
    static { this.styles = [
        css `
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
    ]; }
    render() {
        return html `
      <camelot-scifi-frame 
        ?showGrid="${true}"
      >
        <div class="card-content">
          <div class="id-tag">CML-${Math.floor(Math.random() * 9000 + 1000)}</div>
          <div class="card-header">
            <h3 class="card-title">${this.title}</h3>
            ${this.subtitle ? html `<div class="card-subtitle">${this.subtitle}</div>` : ''}
          </div>
          <slot></slot>
        </div>
      </camelot-scifi-frame>
    `;
    }
};
__decorate([
    property({ type: String }),
    __metadata("design:type", Object)
], CamelotScifiCard.prototype, "title", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", Object)
], CamelotScifiCard.prototype, "subtitle", void 0);
CamelotScifiCard = __decorate([
    customElement('camelot-scifi-card-impl')
], CamelotScifiCard);
export { CamelotScifiCard };
//# sourceMappingURL=CamelotScifiCard.js.map