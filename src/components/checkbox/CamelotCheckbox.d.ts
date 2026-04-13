import { CamelotBaseElement } from '../base/CamelotBaseElement';
import './CamelotMaterialCheckbox';
import './CamelotCupertinoCheckbox';
import './CamelotSoftCheckbox';
import './CamelotScifiCheckbox';
/**
 * <CamelotCheckbox>
 * 通用勾選框，根據主題切換風格。
 * 繼承自 CamelotBaseElement 以獲取自動風格偵測能力。
 */
export declare class CamelotCheckbox extends CamelotBaseElement {
    label: string;
    checked: boolean;
    disabled: boolean;
    /**
     * 勾選框色彩：'primary', 'secondary', 'tertiary'
     */
    color: 'primary' | 'secondary' | 'tertiary';
    /**
     * 勾選框形狀 (僅專對 Cupertino 風格)：'square' 或 'circle'
     */
    shape: 'square' | 'circle';
    value: string;
    static styles: import("lit").CSSResult;
    private _handleChanged;
    render(): import("lit").TemplateResult<1>;
}
