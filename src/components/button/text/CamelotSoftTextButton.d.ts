import { CamelotBaseElement } from '../../base/CamelotBaseElement';
/**
 * <CamelotSoftTextButton>
 * Soft UI (Neumorphism) 風格的文字按鈕
 */
export declare class CamelotSoftTextButton extends CamelotBaseElement {
    label: string;
    disabled: boolean;
    static styles: import("lit").CSSResult[];
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'camelot-soft-text-button': CamelotSoftTextButton;
    }
}
