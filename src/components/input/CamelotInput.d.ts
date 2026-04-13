import { CamelotBaseElement } from '../base/CamelotBaseElement';
import './CamelotMaterialInput';
import './CamelotCupertinoInput';
import './CamelotSoftInput';
import './CamelotScifiInput';
/**
 * <CamelotInput>
 * 通用輸入框元件，根據主題切換風格。
 * 繼承自 CamelotBaseElement 以獲取自動風格偵測能力。
 */
export declare class CamelotInput extends CamelotBaseElement {
    label: string;
    value: string;
    placeholder: string;
    error: string;
    color: 'primary' | 'secondary' | 'tertiary';
    disabled: boolean;
    render(): import("lit").TemplateResult<1>;
    static styles: import("lit").CSSResult;
}
