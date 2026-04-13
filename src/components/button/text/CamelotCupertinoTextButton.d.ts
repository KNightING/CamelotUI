import { CamelotBaseElement } from '../../base/CamelotBaseElement';
/**
 * <CamelotCupertinoTextButton>
 * iOS風格的文字按鈕 (Text Button)
 */
export declare class CamelotCupertinoTextButton extends CamelotBaseElement {
    label: string;
    disabled: boolean;
    static styles: import("lit").CSSResult[];
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'camelot-cupertino-text-button': CamelotCupertinoTextButton;
    }
}
