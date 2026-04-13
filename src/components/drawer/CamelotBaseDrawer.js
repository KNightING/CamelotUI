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
import { query, property, state } from 'lit/decorators.js';
import { CamelotBaseElement } from '../base/CamelotBaseElement';
/**
 * <CamelotBaseDrawer>
 * 抽屜基底組件，提供穩定的開啟/關閉動畫邏輯。
 */
export class CamelotBaseDrawer extends CamelotBaseElement {
    constructor() {
        super(...arguments);
        this.open = false;
        this.anchor = 'left';
        /**
         * 內部狀態：用於觸發 CSS 動畫的類別
         */
        this._active = false;
    }
    static { this.styles = [
        css `
      :host {
        display: block;
      }

      dialog {
        padding: 0;
        border: none;
        background: transparent;
        overflow: visible;
        margin: 0;
        max-width: 100vw;
        max-height: 100vh;
        outline: none;
        position: fixed;
        /* 開啟/關閉時的基礎透明度 */
        opacity: 0;
        transition: opacity 0.3s ease-out;
        pointer-events: none;
      }

      :host([anchor="left"]) dialog {
        top: 0;
        left: 0;
        right: auto;
        bottom: 0;
        width: var(--cml-drawer-width, 360px);
        height: 100dvh;
      }
      :host([anchor="right"]) dialog {
        top: 0;
        left: auto;
        right: 0;
        bottom: 0;
        width: var(--cml-drawer-width, 360px);
        height: 100dvh;
      }
      :host([anchor="top"]) dialog {
        top: 0;
        left: 0;
        right: 0;
        bottom: auto;
        width: 100vw;
        height: var(--cml-drawer-height, auto);
      }
      :host([anchor="bottom"]) dialog {
        top: auto;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100vw;
        height: var(--cml-drawer-height, auto);
      }

      dialog[open] {
        display: flex;
        pointer-events: auto;
      }

      /* 當處於 active 狀態時，顯示背景與對話框 */
      dialog.is-active {
        opacity: 1;
      }

      dialog::backdrop {
        background-color: rgba(0, 0, 0, 0.5);
        backdrop-filter: blur(4px);
        opacity: 0;
        transition: opacity 0.3s ease-out;
      }

      dialog.is-active::backdrop {
        opacity: 1;
      }

      /* 內容容器的初始位移狀態 (Exit/Idle) */
      .drawer-content {
        display: flex;
        flex-direction: column;
        background: var(--cml-color-surface, #fff);
        box-shadow: var(--cml-drawer-shadow, 0 8px 32px rgba(0,0,0,0.12));
        width: 100%;
        height: 100%;
        overflow: hidden;
        transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        will-change: transform;
      }

      :host([anchor="left"]) .drawer-content { transform: translateX(-100%); }
      :host([anchor="right"]) .drawer-content { transform: translateX(100%); }
      :host([anchor="top"]) .drawer-content { transform: translateY(-100%); }
      :host([anchor="bottom"]) .drawer-content { transform: translateY(100%); }

      /* 開啟時的位移狀態 (Enter/Active) */
      dialog.is-active .drawer-content {
        transform: translate(0, 0) !important;
      }

      /* 寬高限制屬性已移至 dialog 級別定義以確保點擊判定準確 */
    `
    ]; }
    /**
     * 外部呼叫之開啟方法
     */
    async show() {
        if (this._active)
            return;
        this.open = true;
        await this.updateComplete;
        if (this.dialogElement && !this.dialogElement.open) {
            this.dialogElement.showModal();
            // 強制瀏覽器重繪，確保 transform 初始值已載入
            // eslint-disable-next-line @typescript-eslint/no-unused-expressions
            this.dialogElement.offsetHeight;
            // 下一幀開啟動畫
            requestAnimationFrame(() => {
                this._active = true;
                this.dispatchEvent(new CustomEvent('open', { bubbles: true, composed: true }));
            });
        }
    }
    /**
     * 外部呼叫之關閉方法
     */
    async hide() {
        if (!this._active)
            return;
        this._active = false;
        this.open = false;
        // 等待動畫結束 (300ms)
        setTimeout(() => {
            if (!this._active && this.dialogElement && this.dialogElement.open) {
                this.dialogElement.close();
                this.dispatchEvent(new CustomEvent('close', { bubbles: true, composed: true }));
            }
        }, 320);
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
    _handleCancel(e) {
        e.preventDefault();
        this.hide();
        this.dispatchEvent(new CustomEvent('cancel', { bubbles: true, composed: true }));
    }
    _handleClick(e) {
        const rect = this.dialogElement.getBoundingClientRect();
        const isInDialog = (rect.top <= e.clientY &&
            e.clientY <= rect.bottom &&
            rect.left <= e.clientX &&
            e.clientX <= rect.right);
        if (!isInDialog) {
            this.hide();
            this.dispatchEvent(new CustomEvent('cancel', { bubbles: true, composed: true }));
        }
    }
    render() {
        return html `
      <dialog 
        class="${this._active ? 'is-active' : ''}" 
        @cancel="${this._handleCancel}" 
        @click="${this._handleClick}"
      >
        <div class="drawer-content">
          ${this.renderContent()}
        </div>
      </dialog>
    `;
    }
    /**
     * 供子類別實作內容區域
     */
    renderContent() {
        return html `<slot></slot>`;
    }
}
__decorate([
    property({ type: Boolean, reflect: true }),
    __metadata("design:type", Object)
], CamelotBaseDrawer.prototype, "open", void 0);
__decorate([
    property({ type: String, reflect: true }),
    __metadata("design:type", String)
], CamelotBaseDrawer.prototype, "anchor", void 0);
__decorate([
    query('dialog'),
    __metadata("design:type", HTMLDialogElement)
], CamelotBaseDrawer.prototype, "dialogElement", void 0);
__decorate([
    state(),
    __metadata("design:type", Object)
], CamelotBaseDrawer.prototype, "_active", void 0);
customElements.define('camelot-base-drawer', CamelotBaseDrawer);
//# sourceMappingURL=CamelotBaseDrawer.js.map