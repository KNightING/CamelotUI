import { CamelotBaseElement } from '../base/CamelotBaseElement';
import './CamelotMaterialRadio';
import './CamelotCupertinoRadio';
import './CamelotSoftRadio';
import './CamelotScifiRadio';
/**
 * <CamelotRadio>
 * 通用單選按鈕元件，由主題切換風格。
 * 繼承自 CamelotBaseElement 以獲取自動風格偵測能力。
 */
export declare class CamelotRadio extends CamelotBaseElement {
    checked: boolean;
    disabled: boolean;
    label: string;
    name: string;
    value: string;
    /**
     * 單選色彩：'primary', 'secondary', 'tertiary'
     */
    color: 'primary' | 'secondary' | 'tertiary';
    private _handleChanged;
    render(): import("lit").TemplateResult<1>;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'camelot-radio': CamelotRadio;
    }
}
