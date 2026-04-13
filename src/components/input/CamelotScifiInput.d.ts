import { CamelotScifiBase } from '../scifi/CamelotScifiBase';
import '../scifi/CamelotScifiFrame';
/**
 * <CamelotScifiInput>
 * 日系科幻風格 (Sci-fi HUD) 的輸入框元件實作。
 * 已優化：使用 CamelotScifiBase 與 CamelotScifiFrame 進行統一化管理。
 */
export declare class CamelotScifiInput extends CamelotScifiBase {
    label: string;
    value: string;
    placeholder: string;
    type: string;
    static styles: import("lit").CSSResult[];
    private _handleInput;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'camelot-scifi-input-impl': CamelotScifiInput;
    }
}
