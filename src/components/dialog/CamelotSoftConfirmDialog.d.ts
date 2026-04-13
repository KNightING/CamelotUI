import { CamelotBaseDialog } from './CamelotBaseDialog';
import '../button/filled/CamelotButton';
/**
 * <CamelotSoftConfirmDialog>
 * 擬物化風格的確認對話框。
 */
export declare class CamelotSoftConfirmDialog extends CamelotBaseDialog {
    title: string;
    message: string;
    confirmText: string;
    cancelText: string;
    static styles: import("lit").CSSResult[];
    private _onConfirmClick;
    private _onCancelClick;
    render(): import("lit").TemplateResult<1>;
}
