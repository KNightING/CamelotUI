import { CamelotScifiBase } from '../scifi/CamelotScifiBase';
import '../scifi/CamelotScifiFrame';
/**
 * <CamelotScifiTabs>
 * 日系科幻風格 (Sci-fi HUD) 的分頁元件實作。
 * 已優化：使用 CamelotScifiBase 與 CamelotScifiFrame。
 */
export declare class CamelotScifiTabs extends CamelotScifiBase {
    items: Array<{
        label: string;
        value: string;
    }>;
    value: string;
    static styles: import("lit").CSSResult[];
    private _select;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'camelot-scifi-tabs-impl': CamelotScifiTabs;
    }
}
