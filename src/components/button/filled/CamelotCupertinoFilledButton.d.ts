import { CamelotBaseElement } from '../../base/CamelotBaseElement';
/**
 * <CamelotCupertinoFilledButton>
 * iOS風格的實心按鈕 (Filled Button)
 */
export declare class CamelotCupertinoFilledButton extends CamelotBaseElement {
    label: string;
    disabled: boolean;
    static styles: import("lit").CSSResult[];
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'camelot-cupertino-filled-button': CamelotCupertinoFilledButton;
    }
}
