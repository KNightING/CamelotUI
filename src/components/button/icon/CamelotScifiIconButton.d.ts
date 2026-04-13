import { CamelotScifiBase } from '../../scifi/CamelotScifiBase';
import '../../scifi/CamelotScifiReticle';
import '../../scifi/CamelotScifiFrame';
/**
 * <CamelotScifiIconButton>
 * 日系科幻風格 (Sci-fi HUD) 的圖示按鈕
 * 特色：懸停時顯示 Focus Reticle 鎖定動畫，具備掃描脈衝效果。
 */
export declare class CamelotScifiIconButton extends CamelotScifiBase {
    shape: 'circle' | 'square';
    static styles: import("lit").CSSResult;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'camelot-scifi-icon-button-impl': CamelotScifiIconButton;
    }
}
