import { CamelotScifiBase } from '../scifi/CamelotScifiBase';
import '../scifi/CamelotScifiFrame';
/**
 * <CamelotScifiCard>
 * 日系科幻風格 (Sci-fi HUD) 的卡片元件實作。
 * 已優化：使用 CamelotScifiBase 與 CamelotScifiFrame。
 */
export declare class CamelotScifiCard extends CamelotScifiBase {
    title: string;
    subtitle: string;
    static styles: import("lit").CSSResult[];
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'camelot-scifi-card-impl': CamelotScifiCard;
    }
}
