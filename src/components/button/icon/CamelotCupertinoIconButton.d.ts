import { CamelotBaseElement } from '../../base/CamelotBaseElement';
/**
 * <CamelotCupertinoIconButton>
 * iOS 風格的圖示按鈕。
 */
export declare class CamelotCupertinoIconButton extends CamelotBaseElement {
    shape: 'circle' | 'square';
    disabled: boolean;
    static styles: import("lit").CSSResult[];
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'camelot-cupertino-icon-button': CamelotCupertinoIconButton;
    }
}
