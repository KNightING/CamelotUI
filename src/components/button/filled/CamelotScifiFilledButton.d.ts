import { CamelotScifiBase } from '../../scifi/CamelotScifiBase';
import '../../scifi/CamelotScifiFrame';
/**
 * <CamelotScifiFilledButton>
 * 日系科幻風格 (Sci-fi HUD) 的實心按鈕。
 * 已優化：繼承自 CamelotScifiBase 並使用 CamelotScifiFrame。
 */
export declare class CamelotScifiFilledButton extends CamelotScifiBase {
    label: string;
    static styles: import("lit").CSSResult[];
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'camelot-scifi-filled-button': CamelotScifiFilledButton;
    }
}
