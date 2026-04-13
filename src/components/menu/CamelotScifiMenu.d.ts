import { CamelotBaseMenu } from './CamelotBaseMenu';
/**
 * <CamelotScifiMenu>
 * 日系科幻風格 (Sci-fi HUD) 的選單組件
 * 視覺重點：掃描動畫、技術編號、高對比邊框
 */
export declare class CamelotScifiMenu extends CamelotBaseMenu {
    static styles: import("lit").CSSResult[];
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'camelot-scifi-menu': CamelotScifiMenu;
    }
}
