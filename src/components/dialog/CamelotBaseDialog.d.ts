import { CamelotBaseElement } from '../base/CamelotBaseElement';
/**
 * <CamelotBaseDialog>
 * 封裝原生 <dialog> 元素的對話框容器。
 * 提供基礎的視窗管理邏輯與樣式。
 */
export declare class CamelotBaseDialog extends CamelotBaseElement {
    open: boolean;
    dialogElement: HTMLDialogElement;
    static styles: import("lit").CSSResult[];
    /**
     * 開啟對話框
     */
    show(): Promise<void>;
    /**
     * 關閉對話框
     */
    hide(): void;
    protected updated(changedProperties: Map<string | number | symbol, unknown>): void;
    private _handleCancel;
    render(): import("lit").TemplateResult<1>;
}
