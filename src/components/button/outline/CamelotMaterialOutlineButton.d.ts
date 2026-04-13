import { CamelotBaseElement } from '../../base/CamelotBaseElement';
/**
 * <CamelotMaterialOutlineButton>
 * Material 3風格的邊框按鈕 (Outline Button)
 */
export declare class CamelotMaterialOutlineButton extends CamelotBaseElement {
    label: string;
    disabled: boolean;
    static styles: import("lit").CSSResult[];
    private _handlePointerDown;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'camelot-material-outline-button': CamelotMaterialOutlineButton;
    }
}
