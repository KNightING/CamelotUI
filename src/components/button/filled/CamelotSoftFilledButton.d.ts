import { CamelotBaseElement } from '../../base/CamelotBaseElement';
/**
 * <CamelotSoftFilledButton>
 * Soft UI (Neumorphism) 風格的實心按鈕
 */
export declare class CamelotSoftFilledButton extends CamelotBaseElement {
    label: string;
    disabled: boolean;
    static styles: import("lit").CSSResult[];
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'camelot-soft-filled-button': CamelotSoftFilledButton;
    }
}
