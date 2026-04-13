import { CamelotBaseElement } from '../../base/CamelotBaseElement';
import './CamelotMaterialIconButton';
import './CamelotCupertinoIconButton';
import './CamelotSoftIconButton';
import './CamelotScifiIconButton';
/**
 * <CamelotIconButton>
 * 圖示按鈕元件，適合放置單一圖示。
 * 繼承自 CamelotBaseElement 以獲取自動風格偵測能力。
 */
export declare class CamelotIconButton extends CamelotBaseElement {
    /**
     * 按鈕形狀：'circle', 'square'
     */
    shape: 'circle' | 'square';
    disabled: boolean;
    render(): import("lit").TemplateResult<1>;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'camelot-icon-button': CamelotIconButton;
    }
}
