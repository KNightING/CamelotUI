import { CamelotScifiBase } from '../../scifi/CamelotScifiBase';
import '../../scifi/CamelotScifiReticle';
/**
 * <CamelotScifiOutlineButton>
 * 日系科幻風格 (Sci-fi HUD) 的外框按鈕
 */
export declare class CamelotScifiOutlineButton extends CamelotScifiBase {
    label: string;
    static styles: import("lit").CSSResult;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'camelot-scifi-outline-button': CamelotScifiOutlineButton;
    }
}
