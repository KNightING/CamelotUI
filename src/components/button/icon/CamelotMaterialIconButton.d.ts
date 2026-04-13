import { CamelotBaseElement } from '../../base/CamelotBaseElement';
/**
 * <CamelotMaterialIconButton>
 * Material 3 風格的圖示按鈕。
 */
export declare class CamelotMaterialIconButton extends CamelotBaseElement {
    shape: 'circle' | 'square';
    disabled: boolean;
    static styles: import("lit").CSSResult[];
    private _handlePointerDown;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'camelot-material-icon-button': CamelotMaterialIconButton;
    }
}
