import { CamelotBaseElement } from '../base/CamelotBaseElement';
import '../label/CamelotLabel';
/**
 * <CamelotCupertinoInput>
 * iOS 風格的輸入框，具備 Apple 設計語言的標籤。
 */
export declare class CamelotCupertinoInput extends CamelotBaseElement {
    label: string;
    value: string;
    placeholder: string;
    static styles: import("lit").CSSResult[];
    private _handleInput;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'camelot-cupertino-input': CamelotCupertinoInput;
    }
}
