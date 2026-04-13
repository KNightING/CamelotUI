import { CamelotBaseElement } from '../../base/CamelotBaseElement';
/**
 * <CamelotSoftOutlineButton>
 * Soft UI (Neumorphism) 風格的邊框按鈕
 */
export declare class CamelotSoftOutlineButton extends CamelotBaseElement {
    label: string;
    disabled: boolean;
    static styles: import("lit").CSSResult[];
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'camelot-soft-outline-button': CamelotSoftOutlineButton;
    }
}
