import { CamelotBaseElement } from '../base/CamelotBaseElement';
/**
 * <CamelotLabel>
 * 統一標籤元件。整合了 Material, Cupertino, Soft UI 的樣式邏輯。
 * 不再區分多個實作檔案，提升維護性與效能。
 */
export declare class CamelotLabel extends CamelotBaseElement {
    text: string;
    color: 'primary' | 'secondary' | 'tertiary';
    required: boolean;
    for: string;
    static styles: import("lit").CSSResult;
    protected updated(changedProperties: Map<string | number | symbol, unknown>): void;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'camelot-label': CamelotLabel;
    }
}
