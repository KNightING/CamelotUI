import { CamelotBaseElement } from '../base/CamelotBaseElement';
import './CamelotMaterialSwitch';
import './CamelotCupertinoSwitch';
import './CamelotSoftSwitch';
import './CamelotScifiSwitch';
/**
 * <CamelotSwitch>
 * 通用開關元件，依據主題切換風格。
 * 繼承自 CamelotBaseElement 以獲取自動風格偵測能力。
 */
export declare class CamelotSwitch extends CamelotBaseElement {
    checked: boolean;
    disabled: boolean;
    /**
     * 開關色彩：'primary', 'secondary', 'tertiary'
     */
    color: 'primary' | 'secondary' | 'tertiary';
    private _handleChanged;
    render(): import("lit").TemplateResult<1>;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'camelot-switch': CamelotSwitch;
    }
}
