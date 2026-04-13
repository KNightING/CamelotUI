import { CamelotBaseElement } from '../base/CamelotBaseElement';
/**
 * <CamelotBaseDrawer>
 * 抽屜基底組件，提供穩定的開啟/關閉動畫邏輯。
 */
export declare class CamelotBaseDrawer extends CamelotBaseElement {
    open: boolean;
    anchor: 'left' | 'right' | 'top' | 'bottom';
    dialogElement: HTMLDialogElement;
    /**
     * 內部狀態：用於觸發 CSS 動畫的類別
     */
    protected _active: boolean;
    static styles: import("lit").CSSResult[];
    /**
     * 外部呼叫之開啟方法
     */
    show(): Promise<void>;
    /**
     * 外部呼叫之關閉方法
     */
    hide(): Promise<void>;
    protected updated(changedProperties: Map<string | number | symbol, unknown>): void;
    protected _handleCancel(e: Event): void;
    protected _handleClick(e: MouseEvent): void;
    render(): import("lit").TemplateResult<1>;
    /**
     * 供子類別實作內容區域
     */
    protected renderContent(): import("lit").TemplateResult<1>;
}
