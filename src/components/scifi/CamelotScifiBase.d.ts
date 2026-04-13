import { CamelotBaseElement } from '../base/CamelotBaseElement';
/**
 * CamelotScifiBase
 * 所有 Sci-fi HUD 風格元件的基礎類別。
 * 統一管理主題色彩、禁用狀態與 Focus/Active 狀態。
 *
 * 整合筆記：
 * - 繼承自 CamelotBaseElement，共享 current-color 映射邏輯。
 */
export declare abstract class CamelotScifiBase extends CamelotBaseElement {
    disabled: boolean;
    showShine: boolean;
    showReticle: boolean;
    protected _isHovered: boolean;
    protected _isFocused: boolean;
    protected _isActive: boolean;
    protected updated(changedProperties: Map<string | number | symbol, unknown>): void;
    protected _handleFocus(): void;
    protected _handleBlur(): void;
    protected _handleMouseEnter(): void;
    protected _handleMouseLeave(): void;
}
