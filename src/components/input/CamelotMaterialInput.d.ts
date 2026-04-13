import { CamelotBaseElement } from '../base/CamelotBaseElement';
import '../label/CamelotLabel';
/**
 * <CamelotMaterialInput>
 * Material 3 風格的輸入框，具備 Floating Label 效果。
 */
export declare class CamelotMaterialInput extends CamelotBaseElement {
    label: string;
    value: string;
    placeholder: string;
    private _focused;
    static styles: import("lit").CSSResult[];
    private _handleFocus;
    private _handleBlur;
    private _handleInput;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'camelot-material-input': CamelotMaterialInput;
    }
}
