import { CamelotScifiBase } from '../scifi/CamelotScifiBase';
import '../scifi/CamelotScifiFrame';
/**
 * <CamelotScifiSelect>
 * 日系科幻風格 (Sci-fi HUD) 的下拉選單實作。
 * 已優化：使用 CamelotScifiBase 與 CamelotScifiFrame。
 */
export declare class CamelotScifiSelect extends CamelotScifiBase {
    label: string;
    options: Array<{
        label: string;
        value: string;
    }>;
    value: string;
    placeholder: string;
    private _isOpen;
    static styles: import("lit").CSSResult[];
    private _toggle;
    private _select;
    render(): import("lit").TemplateResult<1>;
    private _onSearchInput;
}
declare global {
    interface HTMLElementTagNameMap {
        'camelot-scifi-select-impl': CamelotScifiSelect;
    }
}
