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
/**
 * <camelot-expand>
 * 具備平滑動畫效果的展開/收合容器。
 * 提供兩個 Slot:
 * - default: 常駐顯示的標題或點擊區
 * - body: 展開/收合的內容區域
 */
let CamelotExpand = class CamelotExpand extends LitElement {
    constructor() {
        super(...arguments);
        /** 內部響應式狀態 */
        this._isExpanded = false;
    }
    /** 外部控制的展開狀態 */
    set expanded(val) {
        this._isExpanded = val;
    }
    get expanded() {
        return this._isExpanded;
    }
    static { this.styles = css `
    :host {
      display: block;
      width: 100%;
    }

    /* 使用 button 確保寬度與點擊區域正常 */
    .expand-header {
      all: unset;
      display: block;
      width: 100%;
      cursor: pointer;
      box-sizing: border-box;
      /* 增加一點 Padding 確保點擊範圍夠大 */
      padding: 4px 0;
    }

    .expand-header:hover {
      background-color: rgba(0, 0, 0, 0.02);
    }

    .expand-header:active {
      opacity: 0.6;
    }

    .expand-body-wrapper {
      display: grid;
      grid-template-rows: 0fr;
      overflow: hidden;
      transition: grid-template-rows 300ms cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    .expand-body-wrapper.is-expanded {
      grid-template-rows: 1fr;
    }

    .expand-content {
      min-height: 0;
      padding-top: 4px;
    }
  `; }
    /**
     * 切換展開狀態
     */
    toggle() {
        this._isExpanded = !this._isExpanded;
        this.dispatchEvent(new CustomEvent('toggle', {
            detail: { expanded: this._isExpanded },
            bubbles: true,
            composed: true
        }));
    }
    render() {
        return html `
      <button 
        class="expand-header" 
        part="header"
        @click=${() => this.toggle()} 
        aria-expanded="${this._isExpanded}"
        type="button"
      >
        <slot></slot>
      </button>
      <div class="expand-body-wrapper ${this._isExpanded ? 'is-expanded' : ''}" part="body-wrapper">
        <div class="expand-content" part="content">
          <slot name="body"></slot>
        </div>
      </div>
    `;
    }
};
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], CamelotExpand.prototype, "expanded", null);
__decorate([
    state(),
    __metadata("design:type", Object)
], CamelotExpand.prototype, "_isExpanded", void 0);
CamelotExpand = __decorate([
    customElement('camelot-expand')
], CamelotExpand);
export { CamelotExpand };
//# sourceMappingURL=CamelotExpand.js.map