import { CamelotBaseElement } from '../base/CamelotBaseElement';
/**
 * <camelot-scifi-frame>
 * 日系科幻風格 (Sci-fi HUD) 的統一外殼組件。
 * 提供切角 (Cut-corner)、網格背景 (Grid)、掃描線 (Scanline) 與焦點發光效果。
 */
export declare class CamelotScifiFrame extends CamelotBaseElement {
    variant: '2-corner' | '4-corner';
    showGrid: boolean;
    showScanline: boolean;
    showPulse: boolean;
    focused: boolean;
    filled: boolean;
    showShine: boolean;
    activeReticle: boolean;
    showBorders: boolean;
    showCorners: boolean;
    static styles: import("lit").CSSResult;
    render(): import("lit").TemplateResult<1>;
    /**
     * 覆寫基礎類別的變數注入邏輯
     * ScifiFrame 作為裝飾元件，預設應繼承父層（如 Button 或 Card）的 --cml-color-current 變數，
     * 而非主動根據自己的屬性值去覆寫它。
     */
    protected _updateCurrentColors(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'camelot-scifi-frame': CamelotScifiFrame;
    }
}
