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
import { customElement, property, queryAssignedElements } from 'lit/decorators.js';
/**
 * <CamelotCheckboxGroup>
 * 用於管理一組 CamelotCheckbox，收集多個選取值。
 */
let CamelotCheckboxGroup = class CamelotCheckboxGroup extends LitElement {
    constructor() {
        super(...arguments);
        /**
         * 選取值的陣列
         */
        this.value = [];
        /**
         * 排列方向：'vertical' | 'horizontal'
         */
        this.orientation = 'vertical';
        /**
         * 群組標籤 (標題)
         */
        this.label = '';
        /**
         * 色彩：'primary' | 'secondary' | 'tertiary'
         * 設定後將套用到所有子項目
         */
        this.color = 'primary';
        /**
         * 是否整組禁用
         */
        this.disabled = false;
    }
    static { this.styles = css `
    :host {
      display: block;
    }

    .group-label {
      font-family: var(--cml-font-family);
      font-size: 0.875rem;
      font-weight: var(--cml-font-weight-bold);
      color: var(--cml-color-on-surface-variant);
      margin-bottom: 8px;
      display: block;
    }

    .container {
      display: flex;
      gap: 12px;
    }

    .vertical {
      flex-direction: column;
      align-items: flex-start;
    }

    .horizontal {
      flex-direction: row;
      flex-wrap: wrap;
      align-items: center;
    }
  `; }
    updated(changedProperties) {
        if (changedProperties.has('value')) {
            this._updateChildren();
        }
        if (changedProperties.has('disabled') || changedProperties.has('color')) {
            this._syncChildrenProps();
        }
    }
    _updateChildren() {
        this._checkboxes.forEach(cb => {
            cb.checked = this.value.includes(cb.value);
        });
    }
    _syncChildrenProps() {
        this._checkboxes.forEach(cb => {
            if (this.disabled)
                cb.disabled = true;
            if (this.color)
                cb.color = this.color;
        });
    }
    _handleSlotChange() {
        this._updateChildren();
        this._syncChildrenProps();
    }
    _handleCheckboxChange(e) {
        e.stopPropagation(); // 阻止子項目的 change 事件向上冒泡
        // 收集所有被選取的 Checkbox 值
        this.value = this._checkboxes
            .filter(cb => cb.checked)
            .map(cb => cb.value);
        this.dispatchEvent(new CustomEvent('change', {
            detail: { value: this.value },
            bubbles: true,
            composed: true
        }));
    }
    render() {
        return html `
      ${this.label ? html `<span class="group-label">${this.label}</span>` : ''}
      <div 
        class="container ${this.orientation}" 
        @change="${this._handleCheckboxChange}"
      >
        <slot @slotchange="${this._handleSlotChange}"></slot>
      </div>
    `;
    }
};
__decorate([
    property({ type: Array }),
    __metadata("design:type", Array)
], CamelotCheckboxGroup.prototype, "value", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], CamelotCheckboxGroup.prototype, "orientation", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], CamelotCheckboxGroup.prototype, "label", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], CamelotCheckboxGroup.prototype, "color", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Boolean)
], CamelotCheckboxGroup.prototype, "disabled", void 0);
__decorate([
    queryAssignedElements({ selector: 'camelot-checkbox', flatten: true }),
    __metadata("design:type", Array)
], CamelotCheckboxGroup.prototype, "_checkboxes", void 0);
CamelotCheckboxGroup = __decorate([
    customElement('camelot-checkbox-group')
], CamelotCheckboxGroup);
export { CamelotCheckboxGroup };
//# sourceMappingURL=CamelotCheckboxGroup.js.map