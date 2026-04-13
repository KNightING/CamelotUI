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
import { query, property } from 'lit/decorators.js';
import { CamelotBaseElement } from '../base/CamelotBaseElement';
/**
 * <CamelotBaseDialog>
 * 封裝原生 <dialog> 元素的對話框容器。
 * 提供基礎的視窗管理邏輯與樣式。
 */
export class CamelotBaseDialog extends CamelotBaseElement {
    constructor() {
        super(...arguments);
        this.open = false;
    }
    static { this.styles = [
        css `
      :host {
        display: block;
        visibility: hidden;
      }

      :host([open]) {
        visibility: visible;
      }

      dialog {
        padding: 0;
        border: none;
        background: transparent;
        overflow: visible;
        max-width: 90vw;
        max-height: 90vh;
        outline: none;
      }

      dialog::backdrop {
        background-color: rgba(0, 0, 0, 0.5);
        backdrop-filter: blur(4px);
        transition: opacity 0.3s ease;
      }

      /* 讓對話框在桌面端寬度適中 */
      @media (min-width: 600px) {
        dialog {
          min-width: 400px;
        }
      }
    `
    ]; }
    /**
     * 開啟對話框
     */
    async show() {
        this.open = true;
        await this.updateComplete; // 等待 Lit 完成 DOM 更新
        if (this.dialogElement && !this.dialogElement.open) {
            this.dialogElement.showModal();
        }
    }
    /**
     * 關閉對話框
     */
    hide() {
        this.open = false;
        if (this.dialogElement && this.dialogElement.open) {
            this.dialogElement.close();
        }
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has('open')) {
            if (this.open) {
                this.show();
            }
            else {
                this.hide();
            }
        }
    }
    _handleCancel() {
        if (this.open) {
            this.open = false;
            this.dispatchEvent(new CustomEvent('cancel', { bubbles: true, composed: true }));
        }
    }
    render() {
        return html `
      <dialog @cancel="${this._handleCancel}">
        <slot></slot>
      </dialog>
    `;
    }
}
__decorate([
    property({ type: Boolean, reflect: true }),
    __metadata("design:type", Object)
], CamelotBaseDialog.prototype, "open", void 0);
__decorate([
    query('dialog'),
    __metadata("design:type", HTMLDialogElement)
], CamelotBaseDialog.prototype, "dialogElement", void 0);
//# sourceMappingURL=CamelotBaseDialog.js.map