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
import { property } from 'lit/decorators.js';
import { CamelotBaseDrawer } from './CamelotBaseDrawer';
/**
 * <CamelotMaterialDrawer>
 * Material 3 風格的抽屜元件。
 */
export class CamelotMaterialDrawer extends CamelotBaseDrawer {
    static { this.styles = [
        ...CamelotBaseDrawer.styles,
        css `
      :host {
      }

      .drawer-content {
        padding: 0;
        border-radius: 0;
        background: var(--cml-color-surface-container-low, #fff);
      }

      :host([anchor="left"]) .drawer-content {
        border-top-right-radius: 28px;
        border-bottom-right-radius: 28px;
      }

      :host([anchor="right"]) .drawer-content {
        border-top-left-radius: 28px;
        border-bottom-left-radius: 28px;
      }

      :host([anchor="top"]) .drawer-content {
        border-bottom-left-radius: 28px;
        border-bottom-right-radius: 28px;
      }

      :host([anchor="bottom"]) .drawer-content {
        border-top-left-radius: 28px;
        border-top-right-radius: 28px;
      }

      .header {
        padding: 24px 16px 16px 28px;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      .headline {
        margin: 0;
        font-family: var(--md-sys-typescale-title-small-font-family, inherit);
        font-size: var(--md-sys-typescale-title-small-font-size, 14px);
        font-weight: var(--md-sys-typescale-title-small-font-weight, 500);
        color: var(--md-sys-color-on-surface-variant, #49454f);
      }

      .footer {
        padding: 16px 24px;
        display: flex;
        justify-content: flex-end;
        gap: 8px;
      }

      .body {
        flex: 1;
        overflow-y: auto;
        padding: 16px;
      }
    `
    ]; }
    renderContent() {
        return html `
      ${this.headline || this._hasSlot('header') ? html `
        <header class="header">
          <slot name="header">
            <h2 class="headline">${this.headline}</h2>
          </slot>
        </header>
      ` : ''}

      <div class="body">
        <slot></slot>
      </div>

      <footer class="footer">
        <slot name="footer"></slot>
      </footer>
    `;
    }
    _hasSlot(name) {
        return !!Array.from(this.children).find(child => child.getAttribute('slot') === name);
    }
}
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], CamelotMaterialDrawer.prototype, "headline", void 0);
customElements.define('camelot-material-drawer', CamelotMaterialDrawer);
//# sourceMappingURL=CamelotMaterialDrawer.js.map