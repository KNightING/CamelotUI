import { CamelotScifiBase } from '../scifi/CamelotScifiBase';
import '../scifi/CamelotScifiFrame';
import '../button/filled/CamelotScifiFilledButton';
import '../button/text/CamelotScifiTextButton';
/**
 * <CamelotScifiConfirmDialog>
 * 日系科幻風格 (Sci-fi HUD) 的確認對話框實作。
 * 已優化：使用 CamelotScifiBase 與 CamelotScifiFrame。
 */
export declare class CamelotScifiConfirmDialog extends CamelotScifiBase {
    titleText: string;
    message: string;
    confirmText: string;
    cancelText: string;
    open: boolean;
    static styles: import("lit").CSSResult[];
    private _onConfirm;
    private _onCancel;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'camelot-scifi-confirm-dialog-impl': CamelotScifiConfirmDialog;
    }
}
