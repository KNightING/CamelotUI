import { CamelotBaseElement } from '../../base/CamelotBaseElement';
/**
 * <CamelotSoftIconButton>
 * Soft UI (Neumorphism) 風格的圖示按鈕。
 */
export declare class CamelotSoftIconButton extends CamelotBaseElement {
    shape: 'circle' | 'square';
    disabled: boolean;
    static styles: import("lit").CSSResult[];
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'camelot-soft-icon-button': CamelotSoftIconButton;
    }
}
