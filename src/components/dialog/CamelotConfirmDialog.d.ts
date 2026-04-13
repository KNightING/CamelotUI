import { CamelotBaseElement } from '../base/CamelotBaseElement';
import './CamelotBaseDialog';
import './CamelotMaterialConfirmDialog';
import './CamelotCupertinoConfirmDialog';
import './CamelotSoftConfirmDialog';
import './CamelotScifiConfirmDialog';
/**
 * <CamelotConfirmDialog>
 * 確認對話框分流器。根據主題渲染 Material, Cupertino 或 Soft UI 的確認視窗。
 */
export declare class CamelotConfirmDialog extends CamelotBaseElement {
    title: string;
    message: string;
    confirmText: string;
    cancelText: string;
    open: boolean;
    show(): void;
    hide(): void;
    private _onConfirm;
    private _onCancel;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'camelot-confirm-dialog': CamelotConfirmDialog;
    }
}
