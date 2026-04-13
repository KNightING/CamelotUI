import { CamelotBaseElement } from '../base/CamelotBaseElement';
import '../label/CamelotLabel';
/**
 * <CamelotSoftInput>
 * Neumorphism 風格的輸入框，內凹陰影效果。
 */
export declare class CamelotSoftInput extends CamelotBaseElement {
    label: string;
    value: string;
    placeholder: string;
    static styles: import("lit").CSSResult[];
    private _handleInput;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'camelot-soft-input': CamelotSoftInput;
    }
}
