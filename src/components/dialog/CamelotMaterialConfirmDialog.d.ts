import { CamelotBaseDialog } from './CamelotBaseDialog';
import '../button/filled/CamelotButton';
import '../button/text/CamelotTextButton';
/**
 * <CamelotMaterialConfirmDialog>
 * 符合 Material 3 標準的確認對話框。
 */
export declare class CamelotMaterialConfirmDialog extends CamelotBaseDialog {
    title: string;
    message: string;
    confirmText: string;
    cancelText: string;
    static styles: import("lit").CSSResult[];
    private _onConfirmClick;
    private _onCancelClick;
    render(): import("lit").TemplateResult<1>;
}
