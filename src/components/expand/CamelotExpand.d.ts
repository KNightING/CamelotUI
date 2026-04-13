import { LitElement } from 'lit';
/**
 * <camelot-expand>
 * 具備平滑動畫效果的展開/收合容器。
 * 提供兩個 Slot:
 * - default: 常駐顯示的標題或點擊區
 * - body: 展開/收合的內容區域
 */
export declare class CamelotExpand extends LitElement {
    /** 外部控制的展開狀態 */
    set expanded(val: boolean);
    get expanded(): boolean;
    /** 內部響應式狀態 */
    private _isExpanded;
    static styles: import("lit").CSSResult;
    /**
     * 切換展開狀態
     */
    toggle(): void;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'camelot-expand': CamelotExpand;
    }
}
