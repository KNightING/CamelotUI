import { CamelotBaseElement } from '../../base/CamelotBaseElement';
/**
 * <CamelotMaterialTextButton>
 * Material 3風格的文字按鈕 (Text Button)
 */
export declare class CamelotMaterialTextButton extends CamelotBaseElement {
    label: string;
    disabled: boolean;
    static styles: import("lit").CSSResult[];
    private _handlePointerDown;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'camelot-material-text-button': CamelotMaterialTextButton;
    }
}
