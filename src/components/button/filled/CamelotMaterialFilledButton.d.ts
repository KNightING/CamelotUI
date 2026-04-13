import { CamelotBaseElement } from '../../base/CamelotBaseElement';
/**
 * <CamelotMaterialFilledButton>
 * Material 3風格的實心按鈕 (Filled Button)
 */
export declare class CamelotMaterialFilledButton extends CamelotBaseElement {
    label: string;
    disabled: boolean;
    static styles: import("lit").CSSResult[];
    private _handlePointerDown;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'camelot-material-filled-button': CamelotMaterialFilledButton;
    }
}
