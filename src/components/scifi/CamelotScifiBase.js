var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { property, state } from 'lit/decorators.js';
import { CamelotBaseElement } from '../base/CamelotBaseElement';
/**
 * CamelotScifiBase
 * 所有 Sci-fi HUD 風格元件的基礎類別。
 * 統一管理主題色彩、禁用狀態與 Focus/Active 狀態。
 *
 * 整合筆記：
 * - 繼承自 CamelotBaseElement，共享 current-color 映射邏輯。
 */
export class CamelotScifiBase extends CamelotBaseElement {
    constructor() {
        super(...arguments);
        this.disabled = false;
        this.showShine = false;
        this.showReticle = false;
        this._isHovered = false;
        this._isFocused = false;
        this._isActive = false;
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        // 橋接傳統的 --cml-scifi-color 到新的 --cml-color-current-color
        // 這樣舊有的 Sci-fi 組件無需修改 CSS 即可繼續運作
        this.style.setProperty('--cml-scifi-color', 'var(--cml-color-current-color)');
        // 反映狀態到 Host 屬性，供 CSS 選擇器使用
        if (this._isHovered)
            this.setAttribute('hovered', '');
        else
            this.removeAttribute('hovered');
        if (this._isFocused)
            this.setAttribute('focused', '');
        else
            this.removeAttribute('focused');
        if (this._isActive)
            this.setAttribute('filled', '');
        else
            this.removeAttribute('filled');
    }
    _handleFocus() {
        if (this.disabled)
            return;
        this._isFocused = true;
    }
    _handleBlur() {
        this._isFocused = false;
    }
    _handleMouseEnter() {
        if (this.disabled)
            return;
        this._isHovered = true;
    }
    _handleMouseLeave() {
        this._isHovered = false;
    }
}
__decorate([
    property({ type: Boolean, reflect: true }),
    __metadata("design:type", Boolean)
], CamelotScifiBase.prototype, "disabled", void 0);
__decorate([
    property({ type: Boolean, reflect: true }),
    __metadata("design:type", Boolean)
], CamelotScifiBase.prototype, "showShine", void 0);
__decorate([
    property({ type: Boolean, reflect: true }),
    __metadata("design:type", Boolean)
], CamelotScifiBase.prototype, "showReticle", void 0);
__decorate([
    state(),
    __metadata("design:type", Object)
], CamelotScifiBase.prototype, "_isHovered", void 0);
__decorate([
    state(),
    __metadata("design:type", Object)
], CamelotScifiBase.prototype, "_isFocused", void 0);
__decorate([
    state(),
    __metadata("design:type", Object)
], CamelotScifiBase.prototype, "_isActive", void 0);
//# sourceMappingURL=CamelotScifiBase.js.map