import { CamelotBaseElement } from '../../base/CamelotBaseElement';
/**
 * <CamelotCupertinoOutlineButton>
 * iOS風格的邊框按鈕 (Outline Button)
 */
export declare class CamelotCupertinoOutlineButton extends CamelotBaseElement {
    label: string;
    disabled: boolean;
    static styles: import("lit").CSSResult[];
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'camelot-cupertino-outline-button': CamelotCupertinoOutlineButton;
    }
}
