import { CamelotScifiBase } from '../scifi/CamelotScifiBase';
import '../scifi/CamelotScifiFrame';
/**
 * <CamelotScifiBadge>
 * 日系科幻風格 (Sci-fi HUD) 的標籤元件實作。
 * 已優化：使用 CamelotScifiBase 與 CamelotScifiFrame。
 */
export declare class CamelotScifiBadge extends CamelotScifiBase {
    label: string;
    variant: 'filled' | 'outlined';
    static styles: import("lit").CSSResult[];
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'camelot-scifi-badge-impl': CamelotScifiBadge;
    }
}
