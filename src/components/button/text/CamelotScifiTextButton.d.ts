import { CamelotScifiBase } from '../../scifi/CamelotScifiBase';
import '../../scifi/CamelotScifiFrame';
/**
 * <CamelotScifiTextButton>
 * 日系科幻風格 (Sci-fi HUD) 的文字按鈕
 */
export declare class CamelotScifiTextButton extends CamelotScifiBase {
    label: string;
    static styles: import("lit").CSSResult;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'camelot-scifi-text-button': CamelotScifiTextButton;
    }
}
