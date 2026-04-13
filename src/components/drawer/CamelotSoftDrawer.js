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
 * <CamelotSoftDrawer>
 * Soft UI 風格的抽屜元件。
 */
export class CamelotSoftDrawer extends CamelotBaseDrawer {
    static { this.styles = [
        ...CamelotBaseDrawer.styles,
        css `
      :host {
        /* Soft UI variables for the component scope */
        --cml-soft-shadow: 
          10px 10px 20px var(--cml-soft-color-dark), 
          -10px -10px 20px var(--cml-soft-color-light);
      }

      .drawer-content {
        background: var(--cml-color-background);
        border: none;
        margin: 0;
        border-radius: 0;
        overflow: hidden;
        box-shadow: var(--cml-soft-shadow);
      }

      :host([anchor="bottom"]) .drawer-content {
        width: 100vw;
        height: auto;
        border-top-left-radius: 40px;
        border-top-right-radius: 40px;
        /* Shadow only towards top */
        box-shadow: 0 -10px 30px var(--cml-soft-color-dark), 0 -5px 15px var(--cml-soft-color-light);
      }

      :host([anchor="top"]) .drawer-content {
        width: 100vw;
        height: auto;
        border-bottom-left-radius: 40px;
        border-bottom-right-radius: 40px;
        /* Shadow only towards bottom */
        box-shadow: 0 10px 30px var(--cml-soft-color-dark), 0 5px 15px var(--cml-soft-color-light);
      }

      :host([anchor="left"]) .drawer-content {
        height: 100dvh;
        width: var(--cml-drawer-width);
        border-top-right-radius: 40px;
        border-bottom-right-radius: 40px;
        /* Shadow only towards right */
        box-shadow: 10px 0 30px var(--cml-soft-color-dark), 5px 0 15px var(--cml-soft-color-light);
      }

      :host([anchor="right"]) .drawer-content {
        height: 100dvh;
        width: var(--cml-drawer-width);
        border-top-left-radius: 40px;
        border-bottom-left-radius: 40px;
        /* Shadow only towards left */
        box-shadow: -10px 0 30px var(--cml-soft-color-dark), -5px 0 15px var(--cml-soft-color-light);
      }

      .header {
        padding: 32px 32px 16px;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      .title {
        margin: 0;
        font-family: inherit;
        font-size: 24px;
        font-weight: 800;
        color: var(--cml-color-primary);
        letter-spacing: -0.5px;
      }

      .body {
        padding: 0 32px 32px;
        overflow-y: auto;
      }

      @media (prefers-color-scheme: dark) {
        .title {
          color: var(--cml-color-primary-container);
        }
      }
    `
    ]; }
    renderContent() {
        return html `
      <header class="header">
        <h2 class="title">${this.label}</h2>
        <slot name="header-actions"></slot>
      </header>

      <div class="body">
        <slot></slot>
      </div>
      
      <footer class="footer">
        <slot name="footer"></slot>
      </footer>
    `;
    }
}
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], CamelotSoftDrawer.prototype, "label", void 0);
customElements.define('camelot-soft-drawer', CamelotSoftDrawer);
//# sourceMappingURL=CamelotSoftDrawer.js.map