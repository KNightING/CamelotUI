import { CamelotBaseDialog } from './CamelotBaseDialog';
/**
 * <CamelotCupertinoConfirmDialog>
 * iOS 風格的確認對話框。
 */
export declare class CamelotCupertinoConfirmDialog extends CamelotBaseDialog {
    title: string;
    message: string;
    confirmText: string;
    cancelText: string;
    static styles: import("lit").CSSResult[];
    private _onConfirmClick;
    private _onCancelClick;
    render(): import("lit").TemplateResult<1>;
}
