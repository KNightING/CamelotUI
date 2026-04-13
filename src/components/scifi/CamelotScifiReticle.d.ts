import { CamelotScifiBase } from './CamelotScifiBase';
/**
 * <camelot-scifi-reticle>
 * 日系科幻風格的鎖定括號組件 (HUD Brackets)
 * 可放置於任何容器內，提供「鎖定」動畫特效。
 * 已優化：與 CamelotBaseElement 主題邏輯完全整合。
 */
export declare class CamelotScifiReticle extends CamelotScifiBase {
    /** 是否處於鎖定狀態 */
    active: boolean;
    /** 是否啟用自動 Hover 鎖定效果 */
    hoverable: boolean;
    static styles: import("lit").CSSResult[];
    render(): import("lit").TemplateResult<1>;
    /**
     * 覆寫基礎類別的變數注入邏輯
     * ScifiReticle 作為裝飾元件，預設應繼承父層的 --cml-color-current 變數。
     */
    protected _updateCurrentColors(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'camelot-scifi-reticle': CamelotScifiReticle;
    }
}
