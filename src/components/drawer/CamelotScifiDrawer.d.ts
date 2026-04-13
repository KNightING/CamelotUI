import { CamelotBaseDrawer } from './CamelotBaseDrawer';
import '../scifi/CamelotScifiReticle';
/**
 * <CamelotScifiDrawer>
 * 日系科幻風格 (Sci-fi HUD) 的抽屜組件
 * 視覺重點：數據網格、掃描線、高對比框線、技術標記
 */
export declare class CamelotScifiDrawer extends CamelotBaseDrawer {
    label: string;
    static styles: import("lit").CSSResult[];
    protected renderContent(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'camelot-scifi-drawer': CamelotScifiDrawer;
    }
}
